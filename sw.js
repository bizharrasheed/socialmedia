const CACHE_NAME = "social-hub-rain-v7"; // گوهارتنا ڤێرژنی بۆ پاقژکرنا داتایێن کەڤن
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json"
];

// ئینستالکرنا کاشێ نووی
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    }).then(() => self.skipWaiting()) // زۆرەملێ کارپێکرنا ڤێرژنێ نووی
  );
});

// ڕەشکرنا کاشێ کەڤن هەر دەمێ ئەپلیکەیشن ڤەبوو
self.addEventListener("activate", activateEvent => {
  activateEvent.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// ستراتیژیا (Network First): دەستپێکێ ل ئینتەرنێتێ دگەڕیت، ئەگەر نەبوو پاشی دچیتە سەر کاشێ
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    fetch(fetchEvent.request)
      .then(networkResponse => {
        // ئەگەر ئینتەرنێت هەبوو، دیزاینێ نووی سەیڤ بکە د کاشی دا و پیشان بدە
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(fetchEvent.request, responseClone);
        });
        return networkResponse;
      })
      .catch(() => {
        // ئەگەر ئینتەرنێت نەبوو، دیزاینا کەڤن یا سەیڤکری پیشان بدە
        return caches.match(fetchEvent.request);
      })
  );
});
