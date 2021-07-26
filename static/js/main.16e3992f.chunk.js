(this["webpackJsonpmusic-player-react"]=this["webpackJsonpmusic-player-react"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(2),o=c.n(a),i=c(10),n=c.n(i),r=c(3),s=c(6),p=c(5),l=c(4),b=c(0),h=function(e){var t=e.currentSong,c=e.isPlaying,o=e.setIsPlaying,i=e.audioRef,n=e.songInfo,s=e.setSongInfo,h=e.songs,d=e.setCurrentSong,u=e.setSongs;Object(a.useEffect)((function(){var e=h.map((function(e){return e.id===t.id?Object(r.a)(Object(r.a)({},e),{},{active:!0}):Object(r.a)(Object(r.a)({},e),{},{active:!1})}));u(e)}),[t]);var j=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(e){var c=h.findIndex((function(e){return e.id===t.id}));if("skip-forward"===e&&d(h[(c+1)%h.length]),"skip-back"===e){if((c-1)%h.length===-1)return void d(h[h.length-1]);d(h[(c-1)%h.length])}};return Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("div",{className:"time-control",children:[Object(b.jsx)("p",{children:j(n.currentTime)}),Object(b.jsx)("input",{min:0,max:n.duration||0,value:n.currentTime,onChange:function(e){i.current.currentTime=e.target.value,s(Object(r.a)(Object(r.a)({},n),{},{currentTime:e.target.value}))},type:"range"}),Object(b.jsx)("p",{children:j(n.duration)})]}),Object(b.jsxs)("div",{className:"play-control",children:[Object(b.jsx)(p.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:l.a}),Object(b.jsx)(p.a,{onClick:function(){c?(i.current.pause(),o(!c)):(i.current.play(),o(!c))},className:"play",size:"2x",icon:c?l.d:l.e}),Object(b.jsx)(p.a,{className:"skip-forward",size:"2x",icon:l.b,onClick:function(){return m("skip-forward")}})]})]})},d=function(e){var t=e.currentSong;return Object(b.jsxs)("div",{className:"song-container",children:[Object(b.jsx)("img",{alt:t.name,src:t.cover}),Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("h3",{children:t.artist})]})},u=function(e){var t=e.song,c=e.songs,a=e.setCurrentSong,o=e.id,i=e.audioRef,n=e.isPlaying,s=e.setSongs;return Object(b.jsxs)("div",{onClick:function(){a(t);var e=c.map((function(e){return e.id===o?Object(r.a)(Object(r.a)({},e),{},{active:!0}):Object(r.a)(Object(r.a)({},e),{},{active:!1})}));if(s(e),n){var p=i.current.play();void 0!==p&&p.then((function(e){i.current.play()}))}},className:"library-song ".concat(t.active?"selected":""),children:[Object(b.jsx)("img",{alt:t.name,src:t.cover}),Object(b.jsxs)("div",{className:"song-description",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("h4",{children:t.artist})]})]})},j=function(e){var t=e.songs,c=e.setCurrentSong,a=e.audioRef,o=e.isPlaying,i=e.setSongs,n=e.libraryStatus;return Object(b.jsxs)("div",{className:"library ".concat(n?"active-library":""),children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(b.jsx)(u,{songs:t,setCurrentSong:c,song:e,id:e.id,audioRef:a,isPlaying:o,setSongs:i},e.id)}))})]})},m=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(b.jsxs)("nav",{children:[Object(b.jsx)("h1",{children:"Waves"}),Object(b.jsxs)("button",{onClick:function(){return c(!t)},children:["Library",Object(b.jsx)(p.a,{icon:l.c})]})]})},v=(c(21),c(24));var f=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!1},{name:"Almost Home",artist:"Sugi wa",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21781",color:["#82e2e0","#e7d098"],id:Object(v.a)(),active:!1},{name:"Be Here Now",artist:"Chief",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21782",color:["#9f4025","#d0dacd"],id:Object(v.a)(),active:!1},{name:"LuvnYou",artist:"Ian Ewing",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21784",color:["#fed106","#b2b4a0"],id:Object(v.a)(),active:!1},{name:"Belly Breathing",artist:"Birocratic",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21783",color:["#003a3a","#d18074"],id:Object(v.a)(),active:!1},{name:"Slopes",artist:"Philanthrope, Yasper",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21785",color:["#061916","#eaf1cc"],id:Object(v.a)(),active:!1},{name:"Viatecture",artist:"Leavv, Makzo",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20119",color:["#1d61c1","#aac3c3"],id:Object(v.a)(),active:!1},{name:"Caravan",artist:"goosetaf, The Field Tapes, Makzo",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20122",color:["#6f4141","#856c37"],id:Object(v.a)(),active:!1},{name:"Trainspotting",artist:"Aarigod, Makzo",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20120",color:["#c9aada","#c39364"],id:Object(v.a)(),active:!1},{name:"Safe Haven",artist:"Oatmello, Makzo",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20123",color:["#8eaa62","#274749"],id:Object(v.a)(),active:!1},{name:"Layover",artist:"Makzo, brillion",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20124",color:["#eec0b2","#bfbb3f"],id:Object(v.a)(),active:!1}]};var g=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(f()),c=Object(s.a)(t,2),o=c[0],i=c[1],n=Object(a.useState)(o[0]),p=Object(s.a)(n,2),l=p[0],u=p[1],v=Object(a.useState)(!1),g=Object(s.a)(v,2),O=g[0],x=g[1],S=Object(a.useState)({currentTime:0,duration:0}),y=Object(s.a)(S,2),w=y[0],k=y[1],C=Object(a.useState)(!1),N=Object(s.a)(C,2),M=N[0],T=N[1],A=function(e){var t=e.target.currentTime,c=e.target.duration;k(Object(r.a)(Object(r.a)({},w),{},{currentTime:t,duration:c}))};return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{libraryStatus:M,setLibraryStatus:T}),Object(b.jsx)(d,{currentSong:l}),Object(b.jsx)(h,{audioRef:e,isPlaying:O,setIsPlaying:x,currentSong:l,setSongInfo:k,songInfo:w,songs:o,setCurrentSong:u,setSongs:i}),Object(b.jsx)(j,{audioRef:e,songs:o,setCurrentSong:u,isPlaying:O,setSongs:i,libraryStatus:M}),Object(b.jsx)("audio",{onTimeUpdate:A,onLoadedMetadata:A,ref:e,src:l.audio})]})};n.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.16e3992f.chunk.js.map