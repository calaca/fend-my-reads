"use strict";var precacheConfig=[["/fend-my-reads/index.html","3a6170b62f4dd7009e013079f59546c1"],["/fend-my-reads/static/css/main.b7029697.css","2772f041751aceee625ea26ca4e6186b"],["/fend-my-reads/static/js/main.c697bacc.js","7edbdd23fe33f721a6ce11517f1a90b6"],["/fend-my-reads/static/media/Roboto-Light.10ad0f86.woff","10ad0f861c0c5807734017c341940649"],["/fend-my-reads/static/media/Roboto-Light.2382fa8a.ttf","2382fa8a8afcdbe3124c840bd6ef7024"],["/fend-my-reads/static/media/Roboto-Light.35d85034.eot","35d85034cc6efe254752721f40dae9f4"],["/fend-my-reads/static/media/Roboto-Light.c7c92899.svg","c7c928994543bbad3d8907cd9ae9bf77"],["/fend-my-reads/static/media/Roboto-Light.ed4b08d2.woff2","ed4b08d2702fa26acc324ef1e89ae837"],["/fend-my-reads/static/media/Roboto-Regular.4312f1fb.ttf","4312f1fbdcf4d54af4506dabdce08010"],["/fend-my-reads/static/media/Roboto-Regular.8528a548.svg","8528a5484326b3eef06b6dfcc6ce25bd"],["/fend-my-reads/static/media/Roboto-Regular.94dac78e.woff","94dac78eee406a8c8f0406b69b85ac2b"],["/fend-my-reads/static/media/Roboto-Regular.9feb0110.woff2","9feb0110b6dff9ee2b9ebd17f7a1aee6"],["/fend-my-reads/static/media/Roboto-Regular.b9077621.eot","b9077621ce786b55c176a61456bfc077"],["/fend-my-reads/static/media/react-icon.05a3e30f.svg","05a3e30fdf60ebe9d00cf4725d44bd42"],["/fend-my-reads/static/media/right-arrow.ef9bb44e.svg","ef9bb44e53f1e268b6a48328f310b8a8"],["/fend-my-reads/static/media/search.2d739656.svg","2d739656aedef7a50533e66644254efd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/fend-my-reads/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});