// Service Worker für erweiterte Performance
const CACHE_NAME = 'printzzdigital-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

const staticAssets = [
  '/',
  '/static/js/app.js',
  '/static/css/app.css',
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(staticAssets))
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
        .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch event - Cache-first für statische Assets, Network-first für dynamische
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Cache-first für Bilder
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request).then(response => {
        if (response) return response;
        
        return fetch(request).then(fetchResponse => {
          const responseClone = fetchResponse.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
          return fetchResponse;
        });
      })
    );
  }
  
  // Network-first für API calls
  else if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
  }
  
  // Stale-while-revalidate für HTML
  else if (request.destination === 'document') {
    event.respondWith(
      caches.match(request).then(response => {
        const fetchPromise = fetch(request).then(fetchResponse => {
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, fetchResponse.clone());
          });
          return fetchResponse;
        });
        
        return response || fetchPromise;
      })
    );
  }
});
