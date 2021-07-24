(this["webpackJsonpmusic-player-react"]=this["webpackJsonpmusic-player-react"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(2),o=c.n(a),p=c(10),i=c.n(p),r=c(3),l=c(5),s=c(6),n=c(7),h=c(1),b=function(e){var t=e.currentSong,c=e.isPlaying,o=e.setIsPlaying,p=Object(a.useRef)(null),i=function(e){var t=e.target.currentTime,c=e.target.duration;j(Object(l.a)(Object(l.a)({},u),{},{currentTime:t,duration:c}))},b=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},d=Object(a.useState)({currentTime:null,duration:null}),m=Object(r.a)(d,2),u=m[0],j=m[1];return Object(h.jsxs)("div",{className:"player",children:[Object(h.jsxs)("div",{className:"time-control",children:[Object(h.jsx)("p",{children:b(u.currentTime)}),Object(h.jsx)("input",{min:0,max:u.duration,value:u.currentTime,onChange:function(e){p.current.currentTime=e.target.value,j(Object(l.a)(Object(l.a)({},u),{},{currentTime:e.target.value}))},type:"range"}),Object(h.jsx)("p",{children:b(u.duration)})]}),Object(h.jsxs)("div",{className:"play-control",children:[Object(h.jsx)(s.a,{className:"skip-back",size:"2x",icon:n.a}),Object(h.jsx)(s.a,{onClick:function(){c?(p.current.pause(),o(!c)):(p.current.play(),o(!c))},className:"play",size:"2x",icon:n.c}),Object(h.jsx)(s.a,{className:"skip-forward",size:"2x",icon:n.b})]}),Object(h.jsx)("audio",{onTimeUpdate:i,onLoadedMetadata:i,ref:p,src:t.audio})]})},d=function(e){var t=e.currentSong;return Object(h.jsxs)("div",{className:"song-container",children:[Object(h.jsx)("img",{src:t.cover}),Object(h.jsx)("h2",{children:t.name}),Object(h.jsx)("h3",{children:t.artist})]})},m=(c(21),c(24));var u=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(m.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(m.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(m.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(m.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!1},{name:"Almost Home",artist:"Sugi wa",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21781",color:["#82e2e0","#e7d098"],id:Object(m.a)(),active:!1},{name:"Be Here Now",artist:"Chief",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21782",color:["#9f4025","#d0dacd"],id:Object(m.a)(),active:!1},{name:"LuvnYou",artist:"Ian Ewing",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21784",color:["#fed106","#b2b4a0"],id:Object(m.a)(),active:!1},{name:"Belly Breathing",artist:"Birocratic",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21783",color:["#003a3a","#d18074"],id:Object(m.a)(),active:!1},{name:"Slopes",artist:"Philanthrope, Yasper",cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=21785",color:["#061916","#eaf1cc"],id:Object(m.a)(),active:!1},{name:"Viatecture",artist:"Leavv, Makzo",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20119",color:["#1d61c1","#aac3c3"],id:Object(m.a)(),active:!1},{name:"Caravan",artist:"goosetaf, The Field Tapes, Makzo",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20122",color:["#6f4141","#856c37"],id:Object(m.a)(),active:!1},{name:"Trainspotting",artist:"Aarigod, Makzo",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20120",color:["#c9aada","#c39364"],id:Object(m.a)(),active:!1},{name:"Safe Haven",artist:"Oatmello, Makzo",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20123",color:["#8eaa62","#274749"],id:Object(m.a)(),active:!1},{name:"Layover",artist:"Makzo, brillion",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=20124",color:["#eec0b2","#bfbb3f"],id:Object(m.a)(),active:!1}]};var j=function(){var e=Object(a.useState)(u()),t=Object(r.a)(e,2),c=t[0],o=(t[1],Object(a.useState)(c[0])),p=Object(r.a)(o,2),i=p[0],l=(p[1],Object(a.useState)(!1)),s=Object(r.a)(l,2),n=s[0],m=s[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(d,{currentSong:i}),Object(h.jsx)(b,{isPlaying:n,setIsPlaying:m,currentSong:i})]})};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.92f838d3.chunk.js.map