'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e651b2b23d6db7076f642dbcf22760d4",
"assets/AssetManifest.bin.json": "2a6caf253ef81b28fe0c4851497e16ad",
"assets/AssetManifest.json": "a98174b14a2120723a005a33369b8bff",
"assets/assets/imeges/1%2520-%2520Shortcut.lnk": "86b319794b56b68607e14eab41bbbe38",
"assets/assets/imeges/1.jpg": "1e064c5df009bad58de93f2b8671cfde",
"assets/assets/imeges/10%2520-%2520Shortcut.lnk": "53419ecc829f29de643cdffc292dcf69",
"assets/assets/imeges/11%2520-%2520Shortcut.lnk": "24d5b9bfab027260df56ea9f1208610c",
"assets/assets/imeges/12%2520-%2520Shortcut.lnk": "cc073a1e66b6f5ec8f204b2a1c8fa097",
"assets/assets/imeges/2%2520-%2520Shortcut.lnk": "8fcb9a863bb8b608c1348914257c0f0d",
"assets/assets/imeges/3%2520-%2520Shortcut.lnk": "999e3a8d6f9f3bc82a2e8b312fa1679c",
"assets/assets/imeges/307766664_102861452622604_8361438571635537015_n.png": "0fe20dcc72ae8ba77c9d53fefae12efe",
"assets/assets/imeges/4%2520-%2520Shortcut.lnk": "97d049b6ef1ba65c69560ade7a2a18f4",
"assets/assets/imeges/5%2520-%2520Shortcut.lnk": "4640f47fe21a454fafc7c6506bf6c887",
"assets/assets/imeges/6%2520-%2520Shortcut.lnk": "747c4cb7f097729f5d4b7b47ad91beff",
"assets/assets/imeges/7%2520-%2520Shortcut.lnk": "c958d746765818bc2716bcbcb33b1449",
"assets/assets/imeges/8%2520-%2520Shortcut.lnk": "5547d20945372ad0b89140e0f80b5086",
"assets/assets/imeges/9%2520-%2520Shortcut.lnk": "2de98b9fd65eaca03d76d5d5e06c432a",
"assets/assets/imeges/appg.jpeg": "22aec68f0810eb6dba8835b0bb6651b5",
"assets/assets/imeges/apple-grey-icon5238.logowik.com.webp": "ec2a1601d0b684125bd5d1b1fb2d2196",
"assets/assets/imeges/applelogo.jpg": "428f8f4ab9f4158d91a5fb1805289554",
"assets/assets/imeges/Banner-1%2520-%2520Shortcut.lnk": "465bf96bb96aceb13c982d69468702c6",
"assets/assets/imeges/etradeling3-1.png": "a24f3abc6e07f5df3ca187d94ec1a37b",
"assets/assets/imeges/Etradeling_logo.png": "9c355494919a5170e0d1c7a20e8f2e06",
"assets/assets/imeges/Etradeling_logo_whit.png": "cb6551fdb562f853e2d2bfbc58a7da8e",
"assets/assets/imeges/etradelin_logo_white.png": "318d11a7ec96a734dc9594aedaeea096",
"assets/assets/imeges/etradling1-1.png": "4c99056ec8570d0a5ac334f49cd94117",
"assets/assets/imeges/googleplay.png": "a94f673085932c1f2eb5275022db50db",
"assets/assets/imeges/logo.png": "0fe20dcc72ae8ba77c9d53fefae12efe",
"assets/assets/imeges/Sign-In%2520-%2520Shortcut.lnk": "73234ecff048ac21a63c31c2972a483f",
"assets/assets/imeges/Sign-In.jpg": "d1524c8a8898fdc58216b2cb6904050c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e50d99b88bc26fa5d6254978aa55b754",
"assets/NOTICES": "fddd128f7e0f9e3dd62581af38d05383",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "553d7e20cca9843deee7479b538c5968",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f8349c42ca5dde884cfe4976ac463c35",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1f39b8f4769f4c11d8050ac5d542e913",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d6992f2c7b54184da57cbdb9d228c55",
"/": "4d6992f2c7b54184da57cbdb9d228c55",
"main.dart.js": "ebecc4ee32242b0a54605cdd23591178",
"manifest.json": "340feee30b5d395ab22d5db7c62ecc23",
"version.json": "ddcce1b2b7801322298cdb3362c58c9e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
