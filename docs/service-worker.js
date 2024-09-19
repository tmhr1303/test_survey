const CACHE_NAME = 'jspsych-cache-v1';
const urlsToCache = [
  './',
  './dist/jspsych.css',
  './dist/jspsych.js',
  './dist/plugin-html-keyboard-response.js',
  './dist/plugin-survey-html-form.js',
  './dist/plugin-survey-likert.js',
  './dist/plugin-survey-multi-choice.js',
  './dist/plugin-survey-multi-select.js',
  './dist/plugin-survey-text.js',

  './test/survey01.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
