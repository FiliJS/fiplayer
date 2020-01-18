const VERSION = "v1";

self.addEventListener("install", event => {
  // Espera a que el pre-cache se complete
  event.waitUntil(precache());
});

self.addEventListener("fetch", event => {
  // Extraemos la petición:
  const request = event.request;

  // Solo get:
  if (request.method !== "GET") {
    return;
  }

  // Buscar en cahe
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  cache.addAll([
    "/",
    "/index.html",
    "/js/app.js",
    "/js/MediaPlayer.js",
    "/js/plugins/AutoPlay.js",
    "/js/plugins/AutoPause.js",
    "/styles/styles.css",
    "/assets/BigBuckBunny.mp4"
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response  =  await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  // Añadimos nuevo contenido al cache, con la llave de request en response:
 return  cache.put(request, response)
}
