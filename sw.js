const cacheName = 'tgho-cache-v1';
const filesToCache = [
  './',
  './Animaboard',
  './manifest.json',
  './favicon.png',
  './apple-touch-icon.png',
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(filesToCache)));
});

self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request)));
});
