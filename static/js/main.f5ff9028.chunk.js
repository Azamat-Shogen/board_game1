(this["webpackJsonpplayer-game1"]=this["webpackJsonpplayer-game1"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(12),n(3)),i=n(1);n(13);var m=function(e){var t=Object(a.useState)(1),n=Object(i.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(1),m=Object(i.a)(o,2),u=m[0],s=m[1],v=["e","+","-","."];function d(e){for(var t=0;t<v.length;t++)e.key===v[t]&&(e.preventDefault(),console.log("wrong key "+e.key))}return r.a.createElement("div",{className:"header-class"},r.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;l(t)},onKeyDown:d,value:c,min:"1",max:"10"}),r.a.createElement("label",null,r.a.createElement("strong",null,"X")),r.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;s(t)},onKeyDown:d,value:u,min:"1",max:"10"}),r.a.createElement("button",{className:"main-button btn btn-primary",onClick:function(){e.generateBoard(c,u),l(1),s(1)}},"board size"))};var u=function(e){var t=e.cells,n=e.x,a=e.y;return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"grid-item"}),r.a.createElement("button",{disabled:0===n,className:"grid-item",onClick:function(){e.moveUpHandler(),console.log("Moved up")}},"\u21e7"),r.a.createElement("div",{className:"grid-item"}),r.a.createElement("button",{disabled:0===a,className:"grid-item",onClick:function(){e.moveLeftHandler(),console.log("Moved left")}},"\u21e6"),r.a.createElement("div",{className:"grid-item"},"\ud83d\udc31"),r.a.createElement("button",{disabled:a===t[n].length-1,className:"grid-item",onClick:function(){e.moveRightHandler(),console.log("Moved right")}},"\u21e8"),r.a.createElement("div",{className:"grid-item"}),r.a.createElement("button",{disabled:n===t.length-1,className:"grid-item",onClick:function(){e.moveDownHandler(),console.log("Moved down")}},"\u21e9"),r.a.createElement("div",{className:"grid-item"}))};var s=function(e){return r.a.createElement("div",{className:"cell"},e.cell)},v=n(16);var d=function(e){var t=e.cells,n=Object(a.useState)(0),c=Object(i.a)(n,2),l=c[0],o=c[1],m=Object(a.useState)(0),d=Object(i.a)(m,2),f=d[0],b=d[1],p=function(){e.moveRight(l,f),b(f+1)},g=function(){e.moveLeft(l,f),b(f-1)},E=function(){e.moveDown(l,f),o(l+1)},h=function(){e.moveUp(l,f),o(l-1)};return r.a.createElement("div",{className:"panel"},t.map((function(e){return r.a.createElement("div",{className:"cellrow-class",key:Object(v.a)()},e.map((function(e){return 0===e?r.a.createElement(u,{moveLeftHandler:g,moveRightHandler:p,moveDownHandler:E,moveUpHandler:h,cells:t,x:l,y:f,key:Object(v.a)()}):r.a.createElement(s,{cell:e,key:Object(v.a)()})})))})))},f=[[0]];var b=function(){var e=Object(a.useState)(f),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(m,{generateBoard:function(e,t){for(var n=[],a=0;a<t;a++){for(var r=[],l=0;l<e;l++)r.push("");n.push(r)}n[0][0]=0,c(n)}}),r.a.createElement("hr",null),r.a.createElement(d,{cells:n,moveLeft:function(e,t){var a=Object(o.a)(n).map((function(e){return e.map((function(){return""}))}));a[e][t-1]=0,c(a)},moveRight:function(e,t){var a=Object(o.a)(n).map((function(e){return e.map((function(){return""}))}));a[e][t+1]=0,c(a)},moveDown:function(e,t){var a=Object(o.a)(n).map((function(e){return e.map((function(){return""}))}));a[e+1][t]=0,c(a)},moveUp:function(e,t){var a=Object(o.a)(n).map((function(e){return e.map((function(){return""}))}));a[e-1][t]=0,c(a)}}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f5ff9028.chunk.js.map