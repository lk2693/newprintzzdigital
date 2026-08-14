// Service Worker für erweiterte Performance
// Version bei jedem Relaunch/Redesign erhöhen, damit alte Caches gelöscht werden
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

// Install event
self.addEventListener('install', event => {
  // Neue Version sofort aktivieren statt auf Tab-Schließen zu warten
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
        .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
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
  
  // Network-first für HTML – immer die aktuelle Seite, Cache nur als Offline-Fallback
  else if (request.destination === 'document') {
    event.respondWith(
      fetch(request).then(fetchResponse => {
        const responseClone = fetchResponse.clone();
        caches.open(DYNAMIC_CACHE).then(cache => {
          cache.put(request, responseClone);
        });
        return fetchResponse;
      }).catch(() => caches.match(request))
    );
  }
});
