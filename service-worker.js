/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8ba59f5384548d941aa60710ad04434"
  },
  {
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/css/0.styles.8d1d41c9.css",
    "revision": "778def17f2559d3dfaa4e318f93777b8"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.fccb486d.js",
    "revision": "eb52db43ebc1456e80a873b17813bc7c"
  },
  {
    "url": "assets/js/11.7232f814.js",
    "revision": "752849c955f6cdb69e36231b199a9ab9"
  },
  {
    "url": "assets/js/12.010fa88b.js",
    "revision": "e24f8da3549494faf575cdd6e589cf0b"
  },
  {
    "url": "assets/js/13.02e74fa0.js",
    "revision": "a043e34969f3f55ae89ffc2082dea50d"
  },
  {
    "url": "assets/js/14.75a05838.js",
    "revision": "7a176ecc205d1ad53175b37ca5ed5065"
  },
  {
    "url": "assets/js/15.43ef9907.js",
    "revision": "979abd109367b51513f06dab09efece8"
  },
  {
    "url": "assets/js/16.8f415c18.js",
    "revision": "346042f88fa0276c3361809959e3b92a"
  },
  {
    "url": "assets/js/17.32f8a846.js",
    "revision": "0a5313192ffe6e2c07086b33a9cc2484"
  },
  {
    "url": "assets/js/18.1d9e60d5.js",
    "revision": "6fe2f9b52f9b4835846bf7e82f9e1afe"
  },
  {
    "url": "assets/js/19.1b0ecff7.js",
    "revision": "dcee85f7341fe5f3cc6f78cda50dc694"
  },
  {
    "url": "assets/js/2.c139a1aa.js",
    "revision": "dd90ec8289f9132c41fb749a2e7f7121"
  },
  {
    "url": "assets/js/20.42b71403.js",
    "revision": "20ddf014fdbf055099b22fc2e84716cd"
  },
  {
    "url": "assets/js/21.035a2a24.js",
    "revision": "44a8397cf43c32d3f7d95a2d2a5ce28f"
  },
  {
    "url": "assets/js/22.ffb02978.js",
    "revision": "2585ad1a6b0426d11110765ff79ae5fe"
  },
  {
    "url": "assets/js/23.c8797552.js",
    "revision": "e1a16a9d10427973be5366d4db342922"
  },
  {
    "url": "assets/js/24.371e4828.js",
    "revision": "72597b3dfe9a111664a7437b46a0d182"
  },
  {
    "url": "assets/js/25.9d2eb193.js",
    "revision": "9e44b5bf5c1c68579f9b93a1546887de"
  },
  {
    "url": "assets/js/26.a3202bb5.js",
    "revision": "9631498104308ce01f026c9de56b291f"
  },
  {
    "url": "assets/js/27.dbb94f26.js",
    "revision": "7022cfa8231862432b4c883b68989354"
  },
  {
    "url": "assets/js/28.9073f71b.js",
    "revision": "246cb1af3b5e4ac5aa8777d4958774d5"
  },
  {
    "url": "assets/js/29.ddb57a49.js",
    "revision": "e1f2c1c9dfd7f78c94322e9848788912"
  },
  {
    "url": "assets/js/3.0b50bba2.js",
    "revision": "b81108441211d7adcee51fe92e191896"
  },
  {
    "url": "assets/js/30.17300105.js",
    "revision": "a133c679a1873ce88de083e1f20b6e61"
  },
  {
    "url": "assets/js/31.5bd5fd58.js",
    "revision": "81e234204723f26aec12e9b8abd1e718"
  },
  {
    "url": "assets/js/32.5a2eb9bd.js",
    "revision": "ba630302683fddd25b00b9c3112f3c02"
  },
  {
    "url": "assets/js/33.12491a8f.js",
    "revision": "17da62dd1fbc210285a5cff8799c3ff5"
  },
  {
    "url": "assets/js/34.6dbd1133.js",
    "revision": "b19d57aa873179666c307cd04f927708"
  },
  {
    "url": "assets/js/35.954cb924.js",
    "revision": "9dbf927c359f2f3f1946754a4dd0664d"
  },
  {
    "url": "assets/js/36.38a883c2.js",
    "revision": "0b793bded5e6e6f3b0ee9fe2ddef024e"
  },
  {
    "url": "assets/js/37.dfd6326f.js",
    "revision": "565cd76d3ab6dcb97aa22c06ab3ae799"
  },
  {
    "url": "assets/js/38.8edafca7.js",
    "revision": "13a8c677abb5f301795f2eba8bac7725"
  },
  {
    "url": "assets/js/39.de3522d6.js",
    "revision": "61701246c31dbba42d921a2ac3c4845f"
  },
  {
    "url": "assets/js/4.4a46e9c5.js",
    "revision": "fec5f7b525a0293782e6d4719f39a53f"
  },
  {
    "url": "assets/js/40.1ddd10b0.js",
    "revision": "c0f773a7c37d8a399626e778896705b7"
  },
  {
    "url": "assets/js/5.39a8328c.js",
    "revision": "da323e8dbdbb3d2d81c0c46ffdadfc5a"
  },
  {
    "url": "assets/js/6.f53f9d5f.js",
    "revision": "fce2084f6ca268ff964aba6abcd375ea"
  },
  {
    "url": "assets/js/7.8b3bc474.js",
    "revision": "4cb3f3efd87cd4b9ced34609b70c46ee"
  },
  {
    "url": "assets/js/8.8b5218b4.js",
    "revision": "118a5f1f427a0aa1ace995e6634884e6"
  },
  {
    "url": "assets/js/9.bc2faab0.js",
    "revision": "892e38c415a7da69f604e726cc7785f5"
  },
  {
    "url": "assets/js/app.3add7882.js",
    "revision": "9dd4a6f5f8940b372ee827cfff031195"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "ca1da1c7918c0eff3e0f77be1b8ab9e3"
  },
  {
    "url": "complie/codegen.html",
    "revision": "e2c87c415fbb65463dc144f59956b569"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "79a83887e9768c1a8d18471325e41e4d"
  },
  {
    "url": "complie/index.html",
    "revision": "96822bf84f760d69e5ece40d70f96331"
  },
  {
    "url": "complie/optimize.html",
    "revision": "9c849ca951bc1064b1f91778cbae5cd0"
  },
  {
    "url": "complie/parse.html",
    "revision": "442f534e6b4477c3253df162cbf7a5ee"
  },
  {
    "url": "complie/summary.html",
    "revision": "340c8ae6e681507f7496a1597a2d2e2e"
  },
  {
    "url": "complie/textParse.html",
    "revision": "cd3d4fcbbbaf968c6e6289a0962c4851"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "5a7f2bde6431ba739b02491ad1218aa3"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "36733581a7e5f2a6b6f196844754c662"
  },
  {
    "url": "filter/index.html",
    "revision": "3271a135bdaeb88413f6e5cb2288f5c7"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "a764e92c505b3388dd0c761df565fd54"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "022378772126e48aa360a75a2b773365"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "a3009a7e21acc8caf975726a566e4403"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "22b7e4d99d60f146c4a3d6e04f6882ae"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "ae41645685f434aa19da5e0acf661f48"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "faf822eed434c903625ef887df80e5da"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "5588eec50985dfc0345f3722b6f3c8c0"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "ffa1c7037825e638e9f335f44bf059df"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "79588a9bb5b6d75c5f6239d4d081a63a"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "a764b98a28201fd1e9044d1ba1645919"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "127ed9c897e0b41b09deb424bd8dca34"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "bb235049b1b548e83ebcc10ffc410c96"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "ee90932ea74a46e411d6624748985287"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "d6ee006a9bf1f94cfaa25c9622a24a2e"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "93053cd3316aa3e553faeb283e19987d"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "8974ee4229b2c6cb21130e4753a3ddff"
  },
  {
    "url": "reactive/index.html",
    "revision": "c9955eb54b4c60ac9bcc4168afecacb0"
  },
  {
    "url": "reactive/object.html",
    "revision": "9efd19219262b434a49fdef733ef2cf2"
  },
  {
    "url": "start/index.html",
    "revision": "00f59a7b581a3b4cdb8ddc287725f464"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "1c3f949511f95a03ee42a5ba30e5f355"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "c5ac7543a6d44ef7dfa2ee64c585d5f7"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "6a4ee14fb7b5c1ea72d28e9e763e6b48"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "82a9fbeb9df2e8fec64d0cefaaeaa3a2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
