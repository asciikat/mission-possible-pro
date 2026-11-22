// Mission Possible Pro service worker: makes the app installable and lets it open offline.
// Its saved copy is named mppro-*, so it never clashes with Mission Possible's or Plus's on the same site.
// Pages are fetched fresh when online (so updates arrive) and fall back to the
// last saved copy when offline. Sign-in and database traffic are never touched.
const CACHE = 'mppro-v6';
const SHELL = ['./', 'index.html', 'firebase-config.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'icons/raccoon/calm.webp', 'icons/raccoon/sneaky.webp', 'icons/raccoon/feral.webp'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('mppro-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const putInCache = (req, res) => {
  if (res && (res.ok || res.type === 'opaque')) {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
};

// Share to the app (Android, installed app): screenshots, links and text shared from another app
// arrive as a POST to ./share-target. They're kept in IndexedDB ('mppro-inbox') for the app to go
// through, then the app opens on them.
function inboxDb() {
  return new Promise((resolve, reject) => {
    const rq = indexedDB.open('mppro-inbox', 1);
    rq.onupgradeneeded = () => rq.result.createObjectStore('shares', { keyPath: 'id' });
    rq.onsuccess = () => resolve(rq.result);
    rq.onerror = () => reject(rq.error);
  });
}
async function keepShared(req) {
  const form = await req.formData();
  const at = Date.now();
  const files = form.getAll('shots').filter((f) => f && typeof f === 'object' && f.size > 0 && /^image\//.test(f.type || ''));
  const words = ['title', 'text', 'url'].map((k) => form.get(k)).filter((v) => typeof v === 'string' && v.trim()).map((v) => v.trim());
  const text = [...new Set(words)].join('\n').slice(0, 3000);
  const items = files.slice(0, 50).map((f, i) => ({ id: at + i, at, name: f.name || `shared-${at + i}.png`, type: f.type, blob: f, text }));
  if (!items.length && text) items.push({ id: at, at, text });
  if (!items.length) return;
  const db = await inboxDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction('shares', 'readwrite');
    items.forEach((x) => tx.objectStore('shares').put(x));
    tx.oncomplete = resolve;
    tx.onerror = tx.onabort = () => reject(tx.error);
  });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method === 'POST' && url.origin === self.location.origin && url.pathname.endsWith('/share-target')) {
    event.respondWith(keepShared(req).catch(() => {})
      .then(() => Response.redirect(new URL('./?shared=1', self.registration.scope).href, 303)));
    return;
  }
  if (req.method !== 'GET') return;

  // Our own files: network first, saved copy when offline. 'no-cache' makes the browser check
  // with GitHub every time instead of reusing its own 10-minute copy, so updates show on the
  // next open.
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req, { cache: 'no-cache' }).then((res) => putInCache(req, res))
        .catch(() => caches.match(req).then((hit) => hit || (req.mode === 'navigate' ? caches.match('index.html') : undefined))),
    );
    return;
  }

  // Fonts, the versioned Firebase SDK and the versioned text reader (Screenshots) never change:
  // saved copy first.
  if (/^(fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(url.hostname)
    || (url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/'))
    || (url.hostname === 'cdn.jsdelivr.net' && /^\/npm\/tesseract\.js(-core)?@\d/.test(url.pathname))) {
    event.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => putInCache(req, res))));
  }
  // Everything else (Google sign-in, Firestore) goes straight to the network.
});
