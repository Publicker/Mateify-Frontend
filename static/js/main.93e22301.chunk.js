(this["webpackJsonpmateify-frontend"]=this["webpackJsonpmateify-frontend"]||[]).push([[0],{45:function(e,t,n){e.exports=n(57)},50:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=(n(50),n(41)),l=n(30),s=n.n(l),m=n(35),u=n(31),d=n(79),f=n(40),p=n(81),h=n(82),E=n(96),g=n(83),v=n(29),b=n(84),y=n(85),w=n(86),O=n(94),k=n(87),j=n(89),S=n(95),x=n(88),W=n(90),B=n(91),J=n(92),M=n(93),N=(n(52),Object(d.a)((function(e){return{root:{width:"100%"},nested:{paddingLeft:e.spacing(4)}}}))),C=function(){var e=Object(f.a)({palette:{type:"dark"}}),t=N(),n=Object(a.useState)(!0),c=Object(u.a)(n,2),o=c[0],l=c[1],d=Object(a.useState)([]),C=Object(u.a)(d,2),I=C[0],L=C[1],P=function(){var e=Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mateify-api.herokuapp.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,L(n),l(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){P()}),[]);return r.a.createElement(p.a,{theme:e},r.a.createElement(h.a,null),r.a.createElement(E.a,{position:"relative"},r.a.createElement(g.a,null,r.a.createElement(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0},"Mateify"))),r.a.createElement("main",null,r.a.createElement(b.a,{maxWidth:"lg"},r.a.createElement(y.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:r.a.createElement(w.a,{component:"div",id:"nested-list-subheader"},"Users list"),className:t.root},o?[0,1,2,3].map((function(e,t){return r.a.createElement(O.a,{key:"skeleton-".concat(t)},r.a.createElement(k.a,null,r.a.createElement(x.a,{animation:"wave",variant:"circle",width:25,height:25})),r.a.createElement(j.a,{primary:r.a.createElement(x.a,{animation:"wave",width:"80%"}),secondary:r.a.createElement(x.a,{animation:"wave",width:"20%"})}))})):I.map((function(e,n){return r.a.createElement("div",{key:"user-".concat(n)},r.a.createElement(O.a,{button:!0,onClick:function(){return function(e){var t=Object(i.a)(I);t[e].songsOpened=!t[e].songsOpened,L(t)}(n)}},r.a.createElement(k.a,null,r.a.createElement(W.a,null)),r.a.createElement(j.a,{primary:"".concat(e.name," ").concat(e.surname),secondary:"".concat(e.favoriteSongs.length?"".concat(e.favoriteSongs.length," song").concat(e.favoriteSongs.length>1?"s":""):"")}),e.favoriteSongs.length?e.songsOpened?r.a.createElement(B.a,null):r.a.createElement(J.a,null):null),e.favoriteSongs.length?r.a.createElement(S.a,{in:e.songsOpened,timeout:"auto",unmountOnExit:!0},r.a.createElement(y.a,{component:"div",disablePadding:!0},e.favoriteSongs.map((function(n,a){return r.a.createElement(O.a,{key:"user".concat(e.index,"-song-").concat(n._id),button:!0,className:t.nested},r.a.createElement(k.a,null,r.a.createElement(M.a,null)),r.a.createElement(j.a,{primary:n.name,secondary:n.artist}))})))):null)}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.93e22301.chunk.js.map