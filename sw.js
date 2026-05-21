// TI4 Tracker Service Worker v1.008 - NO CACHING
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
    .then(() => self.clients.claim())
  );
});
// Pass everything through, cache nothing
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
