if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const r=e=>a(e,t),f={module:{uri:t},exports:n,require:r};i[t]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-d6975938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/401.html",revision:"0603fd8011018760f2154ed1e7b8d874"},{url:"/404.html",revision:"d258714ab9cbbda68216c782e006f62d"},{url:"/404.png",revision:"22d0b716475e6746ab12cf1324978029"},{url:"/_next/static/ESCOO3vWVK3_iP_I6_Wig/_buildManifest.js",revision:"7a64defc9e772e8abda1389e0579dde6"},{url:"/_next/static/ESCOO3vWVK3_iP_I6_Wig/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/110.2fb0c5fae7090b79.js",revision:"2fb0c5fae7090b79"},{url:"/_next/static/chunks/1426.c08ec04b186317d2.js",revision:"c08ec04b186317d2"},{url:"/_next/static/chunks/175675d1.b856463b934e893c.js",revision:"b856463b934e893c"},{url:"/_next/static/chunks/1794.cf8144a6b2fbcc96.js",revision:"cf8144a6b2fbcc96"},{url:"/_next/static/chunks/2037.75c4380288174e46.js",revision:"75c4380288174e46"},{url:"/_next/static/chunks/2447.54f95eb2ee72c0d4.js",revision:"54f95eb2ee72c0d4"},{url:"/_next/static/chunks/2503.83d3d559cc587e1c.js",revision:"83d3d559cc587e1c"},{url:"/_next/static/chunks/2731.777b2ab6b516ce20.js",revision:"777b2ab6b516ce20"},{url:"/_next/static/chunks/3358.a5a4bbbdd3ea5deb.js",revision:"a5a4bbbdd3ea5deb"},{url:"/_next/static/chunks/3607272e.4bb57b98c77ca8a7.js",revision:"4bb57b98c77ca8a7"},{url:"/_next/static/chunks/366.33fa535f8fc0efad.js",revision:"33fa535f8fc0efad"},{url:"/_next/static/chunks/4064.182f33620f73fc6c.js",revision:"182f33620f73fc6c"},{url:"/_next/static/chunks/4279.871bcee6fb2b782b.js",revision:"871bcee6fb2b782b"},{url:"/_next/static/chunks/4335.da4c60c0254e0fc5.js",revision:"da4c60c0254e0fc5"},{url:"/_next/static/chunks/4371.31e35d75670b35bf.js",revision:"31e35d75670b35bf"},{url:"/_next/static/chunks/4878-d0662900ac9aaab7.js",revision:"d0662900ac9aaab7"},{url:"/_next/static/chunks/4906.b64cebb984b99116.js",revision:"b64cebb984b99116"},{url:"/_next/static/chunks/5266.2891cf215cd99695.js",revision:"2891cf215cd99695"},{url:"/_next/static/chunks/5738.62ed1ab00444e2c9.js",revision:"62ed1ab00444e2c9"},{url:"/_next/static/chunks/5774.1fc580e96fb7c4a4.js",revision:"1fc580e96fb7c4a4"},{url:"/_next/static/chunks/5853-3052b4424c26fb39.js",revision:"3052b4424c26fb39"},{url:"/_next/static/chunks/6213.0c84a81bc62ca57f.js",revision:"0c84a81bc62ca57f"},{url:"/_next/static/chunks/6311.17b5086e91caecc0.js",revision:"17b5086e91caecc0"},{url:"/_next/static/chunks/6854.e3b6430b0680d6bc.js",revision:"e3b6430b0680d6bc"},{url:"/_next/static/chunks/6873.775f4ce686ff8550.js",revision:"775f4ce686ff8550"},{url:"/_next/static/chunks/7046.4f8fbcb6e166b7ac.js",revision:"4f8fbcb6e166b7ac"},{url:"/_next/static/chunks/7117.27019b484ceb204d.js",revision:"27019b484ceb204d"},{url:"/_next/static/chunks/7158.c6cdf3fcba3c3a50.js",revision:"c6cdf3fcba3c3a50"},{url:"/_next/static/chunks/7274.396dca6bb33a3e37.js",revision:"396dca6bb33a3e37"},{url:"/_next/static/chunks/728.f8815de8eeced635.js",revision:"f8815de8eeced635"},{url:"/_next/static/chunks/767.227b0541fff0ae9a.js",revision:"227b0541fff0ae9a"},{url:"/_next/static/chunks/7802.cd117b864d01e1e6.js",revision:"cd117b864d01e1e6"},{url:"/_next/static/chunks/7874.a3217bdb4cd4cf17.js",revision:"a3217bdb4cd4cf17"},{url:"/_next/static/chunks/8439.b3a427ee30ccef9b.js",revision:"b3a427ee30ccef9b"},{url:"/_next/static/chunks/8443.cfc8d79f82682ea4.js",revision:"cfc8d79f82682ea4"},{url:"/_next/static/chunks/874.db241d45d7d9b52d.js",revision:"db241d45d7d9b52d"},{url:"/_next/static/chunks/8885.e1c55cdda2db46c9.js",revision:"e1c55cdda2db46c9"},{url:"/_next/static/chunks/893.e8a2689914e1e72b.js",revision:"e8a2689914e1e72b"},{url:"/_next/static/chunks/9016.2e94e763452b461b.js",revision:"2e94e763452b461b"},{url:"/_next/static/chunks/906a09f8.d997975f825ede99.js",revision:"d997975f825ede99"},{url:"/_next/static/chunks/9787.fda5ad06d96808fb.js",revision:"fda5ad06d96808fb"},{url:"/_next/static/chunks/9865.a16825ca50321aca.js",revision:"a16825ca50321aca"},{url:"/_next/static/chunks/framework-d51ece3d757c7ed2.js",revision:"d51ece3d757c7ed2"},{url:"/_next/static/chunks/main-445dcbf1bf2e298f.js",revision:"445dcbf1bf2e298f"},{url:"/_next/static/chunks/pages/%5BpageId%5D-f03a3e108fb2a571.js",revision:"f03a3e108fb2a571"},{url:"/_next/static/chunks/pages/404-b7cf9df390b7dfc3.js",revision:"b7cf9df390b7dfc3"},{url:"/_next/static/chunks/pages/_app-4c6dede955f03be0.js",revision:"4c6dede955f03be0"},{url:"/_next/static/chunks/pages/_error-2c2f0550d3f99271.js",revision:"2c2f0550d3f99271"},{url:"/_next/static/chunks/pages/feed-0fa6933311220266.js",revision:"0fa6933311220266"},{url:"/_next/static/chunks/pages/index_old-dc93f83ea470fee9.js",revision:"dc93f83ea470fee9"},{url:"/_next/static/chunks/pages/robots.txt-d74e40582d6868d2.js",revision:"d74e40582d6868d2"},{url:"/_next/static/chunks/pages/sitemap.xml-e41b984231d2ecae.js",revision:"e41b984231d2ecae"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fc8da7d98d08e957.js",revision:"fc8da7d98d08e957"},{url:"/_next/static/css/3febd2a40c50649a.css",revision:"3febd2a40c50649a"},{url:"/_next/static/css/4038be63a71541b2.css",revision:"4038be63a71541b2"},{url:"/_next/static/css/fbc289dea8b31870.css",revision:"fbc289dea8b31870"},{url:"/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff",revision:"1608a09b"},{url:"/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf",revision:"4aafdb68"},{url:"/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2",revision:"a79f1c31"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff",revision:"b6770918"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf",revision:"cce5b8ec"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2",revision:"ec17d132"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf",revision:"07ef19e7"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2",revision:"55fac258"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff",revision:"dad44a7f"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff",revision:"9f256b85"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf",revision:"b18f59e1"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2",revision:"d42a5579"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff",revision:"7c187121"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2",revision:"d3c882a6"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf",revision:"ed38e79f"},{url:"/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf",revision:"b74a1a8b"},{url:"/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2",revision:"c3fb5ac2"},{url:"/_next/static/media/KaTeX_Main-Bold.d181c465.woff",revision:"d181c465"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2",revision:"6f2bb1df"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf",revision:"70d8b0a5"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff",revision:"e3f82f9d"},{url:"/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf",revision:"47373d1e"},{url:"/_next/static/media/KaTeX_Main-Italic.8916142b.woff2",revision:"8916142b"},{url:"/_next/static/media/KaTeX_Main-Italic.9024d815.woff",revision:"9024d815"},{url:"/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2",revision:"0462f03b"},{url:"/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff",revision:"7f51fe03"},{url:"/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf",revision:"b7f8fe9b"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2",revision:"572d331f"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf",revision:"a879cf83"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff",revision:"f1035d8d"},{url:"/_next/static/media/KaTeX_Math-Italic.5295ba48.woff",revision:"5295ba48"},{url:"/_next/static/media/KaTeX_Math-Italic.939bc644.ttf",revision:"939bc644"},{url:"/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2",revision:"f28c23ac"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2",revision:"8c5b5494"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf",revision:"94e1e8dc"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff",revision:"bf59d231"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2",revision:"3b1e59b3"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff",revision:"7c9bc82b"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf",revision:"b4c20c84"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff",revision:"74048478"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2",revision:"ba21ed5f"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf",revision:"d4d7ba48"},{url:"/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2",revision:"03e9641d"},{url:"/_next/static/media/KaTeX_Script-Regular.07505710.woff",revision:"07505710"},{url:"/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf",revision:"fe9cbbe1"},{url:"/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff",revision:"e1e279cb"},{url:"/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2",revision:"eae34984"},{url:"/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf",revision:"fabc004a"},{url:"/_next/static/media/KaTeX_Size2-Regular.57727022.woff",revision:"57727022"},{url:"/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2",revision:"5916a24f"},{url:"/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf",revision:"d6b476ec"},{url:"/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff",revision:"9acaf01c"},{url:"/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf",revision:"a144ef58"},{url:"/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2",revision:"b4230e7e"},{url:"/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2",revision:"10d95fd3"},{url:"/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff",revision:"7a996c9d"},{url:"/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf",revision:"fbccdabe"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff",revision:"6258592b"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2",revision:"a8709e36"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf",revision:"d97aaf4a"},{url:"/about.html",revision:"d6a268e90d8c6dde18c8603ab0f9cca0"},{url:"/blog.html",revision:"d922c1edf92238019c0132965ea4368a"},{url:"/checkout.html",revision:"2df8911f80cde278d0cbcd642712588b"},{url:"/contact.html",revision:"b2a7a30feac434678d83028b590e8b5e"},{url:"/css/normalize.css",revision:"afb4942e5838a7dc3b63d00ffcc87c9d"},{url:"/css/remotefolio.webflow.css",revision:"fd32abfddf8caf1394baa7df8faf3bfa"},{url:"/css/webflow.css",revision:"ddde0f0f51325c9ab47eaa17abba58d0"},{url:"/detail_blog-categories.html",revision:"db419ee55fa07184a9c02176a89126a1"},{url:"/detail_blog-posts.html",revision:"ec4a5d9c01cf098e37e40a62108d72bb"},{url:"/detail_category.html",revision:"5fac3fecfe25fe0a320e253a41dea237"},{url:"/detail_portfolio-projects.html",revision:"cff832ea5f2311cc8ef2b1ae5b18cd3d"},{url:"/detail_product.html",revision:"20463790b1227e439b560dd54ed2c3e2"},{url:"/detail_sku.html",revision:"7fe60098a801fdbadf0599309301e609"},{url:"/error.png",revision:"4fc3227313543502958d98443e3973a7"},{url:"/favicon-128x128.png",revision:"2bad4a6f0080f9b445317af993cb6d72"},{url:"/favicon-192x192.png",revision:"820675e9e2dc369ce2a7f797f2a6ad0f"},{url:"/favicon.ico",revision:"aaa3368a9b5804c3f3cbd6b6f8e17dcc"},{url:"/favicon.png",revision:"281e0f701e10f4642c1cbe97467c3ea6"},{url:"/firebase-messaging-sw.js",revision:"d2212240ef30107f90a9266e778ab191"},{url:"/fonts/Inter-Regular.ttf",revision:"079af0e2936ccb99b391ddc0bbb73dcb"},{url:"/fonts/Inter-SemiBold.ttf",revision:"07a48beb92b401297a76ff9f6aedd0ed"},{url:"/fonts/Satoshi-Black.woff2",revision:"d9749ed5ed84db875b4671a3f20b6d7d"},{url:"/fonts/Satoshi-Bold.woff2",revision:"d4db658f4dd63bc2d0d84f325a341e29"},{url:"/fonts/Satoshi-Light.woff2",revision:"5481680cc24e1e83b5c9d3b7a5501a22"},{url:"/fonts/Satoshi-Medium.woff2",revision:"cd790237ed63c56b30aa8fb9d99a7563"},{url:"/fonts/Satoshi-Regular.woff2",revision:"71a6023c087c936859024eb16ec7a519"},{url:"/fonts/fa-brands-400.woff2",revision:"cd2b4095e9ce66cde642c3502a4022d9"},{url:"/fonts/fa-solid-900.woff2",revision:"55b416a8df21f9f987aa352f10d1343b"},{url:"/hire-me.html",revision:"7ffbfd77b03405887a82e50b6146385a"},{url:"/images/avatar_1avatar.png",revision:"9a9d04c5b96199db355d6274085f253a"},{url:"/images/backup-instructions-p-1080.jpg",revision:"1abf279dfcc89a00e1e0bd0e512f40cf"},{url:"/images/backup-instructions-p-130x130q80.jpg",revision:"9917ba322af03e8ced59612c73fea671"},{url:"/images/backup-instructions-p-500.jpg",revision:"e57d7c62157dc6713849ce9ec2f35036"},{url:"/images/backup-instructions-p-800.jpg",revision:"c503f506343fc1b5cc50e3ba6e738f1a"},{url:"/images/backup-instructions.jpg",revision:"a69410b44cf3156b35b26cc82d6e569e"},{url:"/images/breakpoint-instructions-p-1080.jpg",revision:"e5f33b5eacbb6ba2657ae3f95b178acb"},{url:"/images/breakpoint-instructions-p-130x130q80.jpg",revision:"a3ba19cbaf67a59dfcb206bf555b3479"},{url:"/images/breakpoint-instructions-p-500.jpg",revision:"f15da1161352227d273af4a8120e18f0"},{url:"/images/breakpoint-instructions-p-800.jpg",revision:"a5eb80d63ebc92a1312ae342327cd4f3"},{url:"/images/breakpoint-instructions.jpg",revision:"03c7630b23917fed5f60755523e88de1"},{url:"/images/cms-instructions-p-1080.jpg",revision:"398fa48bddcfcb72bf989d021dbfa2b6"},{url:"/images/cms-instructions-p-130x130q80.jpg",revision:"e049118d4d93c0616349e7a8589c115a"},{url:"/images/cms-instructions-p-500.jpg",revision:"e2f88c718512affd1fdb6f3408ed4187"},{url:"/images/cms-instructions-p-800.jpg",revision:"070182d4bc359aeb33b5bd878ba96f08"},{url:"/images/cms-instructions.jpg",revision:"5c966621a0e56ec39ff023cf093ebc33"},{url:"/images/components-instructions-p-1080.jpg",revision:"f2eb19884384578e01196ca9de2e6e9e"},{url:"/images/components-instructions-p-130x130q80.jpg",revision:"ebfc9f3bd5a8fb44d7a7c59387bf59b2"},{url:"/images/components-instructions-p-500.jpg",revision:"455c60094bd9060ca747670a3383fd88"},{url:"/images/components-instructions-p-800.jpg",revision:"c1dbe22e3a846771266baf12b4e1e31e"},{url:"/images/components-instructions.jpg",revision:"f11f243e45e9fec8330e8f242f7f4267"},{url:"/images/custom-fonts-p-1080.jpg",revision:"654a8b876605cdbebd80bd70a6ed174c"},{url:"/images/custom-fonts-p-130x130q80.jpg",revision:"fa2a10f28ed3946138a37ed98fe8d73d"},{url:"/images/custom-fonts-p-500.jpg",revision:"dd80b2fe61fa32a5798e1fcfd20fc375"},{url:"/images/custom-fonts-p-800.jpg",revision:"f2d2abbe1115a93563c651c28b24047a"},{url:"/images/custom-fonts.jpg",revision:"6505bc6d0ea5ed73eaac7e936092b7df"},{url:"/images/favicon.svg",revision:"7bdf21bbb32ffafbdf838bae4d1eea5c"},{url:"/images/font-instructions-p-1080.jpg",revision:"6e906f6ac03d18c600f7efd46068bb76"},{url:"/images/font-instructions-p-130x130q80.jpg",revision:"5b63be2bb4a7b391ce565652d8b22045"},{url:"/images/font-instructions-p-500.jpg",revision:"a4df5cb6723312ebe5920c3d7d8d2796"},{url:"/images/font-instructions-p-800.jpg",revision:"a68da102fa50473499fecdcb76c0bf6c"},{url:"/images/font-instructions.jpg",revision:"127252a28cc8335165d88c4dbcb11e4a"},{url:"/images/image-instructions-p-1080.jpg",revision:"e54dced0b54526e4b46cc22cc10a6529"},{url:"/images/image-instructions-p-130x130q80.jpg",revision:"487653a5163d349a21e396afe0aa5d2c"},{url:"/images/image-instructions-p-500.jpg",revision:"3ef3330034d8b3b2e3d7cdc80074ed89"},{url:"/images/image-instructions-p-800.jpg",revision:"c26512478c86360c2b2f91c73240cace"},{url:"/images/image-instructions.jpg",revision:"e0f9aa6d1e2df509a393ff9521e045d8"},{url:"/images/image.svg",revision:"906263ab9bde89d97e828cd2ab5a1cc1"},{url:"/images/img-hero-01-p-130x130q80.jpg",revision:"68a0396f3295d620886bbd2a43e0b6dc"},{url:"/images/img-hero-01-p-500.jpg",revision:"424d569ee1370ad76c4b03fc0f97a3e0"},{url:"/images/img-hero-01.jpg",revision:"52f6eaa76aaf91a287ee3b6cb16e2cf5"},{url:"/images/logo-p-500.jpg",revision:"8c9032f76538635855f52c3c2cd144fc"},{url:"/images/logo.jpg",revision:"921fd3edaca2c5d224f522e7a5e557c9"},{url:"/images/logocircle_s.png",revision:"cafe424d05bc7de75fb2afc58d615de9"},{url:"/images/text-instructions-p-1080.jpg",revision:"d9dd33dd0fff2e8e279020fb1afbff53"},{url:"/images/text-instructions-p-130x130q80.jpg",revision:"16d197c3c872104dc5d35ed6d82fc025"},{url:"/images/text-instructions-p-500.jpg",revision:"da2c3847fbce9c8c87baccbdc1b59676"},{url:"/images/text-instructions-p-800.jpg",revision:"6c07d2cba5c8d267735e5cec73b6e559"},{url:"/images/text-instructions.jpg",revision:"a4579dcb58f11a0bda08143c1fc89b3d"},{url:"/images/webclip.svg",revision:"a8ffe929c45cdfcedc887e27d49d6e50"},{url:"/index.html",revision:"672eb4a9f9235d0a321cbe09642718cd"},{url:"/js/webflow.js",revision:"bfee6e46fd54464bd3ab83b79f840946"},{url:"/logo.jpg",revision:"921fd3edaca2c5d224f522e7a5e557c9"},{url:"/manifest.json",revision:"84083bff849330f3922dcca33e05e977"},{url:"/order-confirmation.html",revision:"8b4cebaaa74bcfbd2771c6aceb7481b5"},{url:"/paypal-checkout.html",revision:"97cad4d998f78adc1a7ded481ec4b50a"},{url:"/portfolio.html",revision:"aaa9d18e483d1135c4fc65fc8a7611ec"},{url:"/resume.html",revision:"2b53f1618a17737d5ae8e18495d67d69"},{url:"/utility-pages/changelog.html",revision:"4c4d5deb66cb7d44e21cf30834fc299c"},{url:"/utility-pages/instructions.html",revision:"0f4471b8446c000d933627c085b82ca6"},{url:"/utility-pages/licenses.html",revision:"3b85885d0943ae7bd0d2cc1690ed9302"},{url:"/utility-pages/style-guide.html",revision:"fd2ae6923bd28c1927d8e3c85bf62193"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
