(this["webpackJsonpplayer-game1"]=this["webpackJsonpplayer-game1"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(12),n(3)),i=n(1);n(13);var m=function(e){var t=e.cells,n=e.x,a=e.y;return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"grid-item"}),r.a.createElement("button",{disabled:0===n,className:"grid-item",onClick:function(){e.moveUpHandler(),console.log("Moved up")}},"\u21e7"),r.a.createElement("div",{className:"grid-item"}),r.a.createElement("button",{disabled:0===a,className:"grid-item",onClick:function(){e.moveLeftHandler(),console.log("Moved left")}},"\u21e6"),r.a.createElement("div",{className:"grid-item"},"\ud83d\udc31"),r.a.createElement("button",{disabled:a===t[n].length-1,className:"grid-item",onClick:function(){e.moveRightHandler(),console.log("Moved right")}},"\u21e8"),r.a.createElement("div",{className:"grid-item"}),r.a.createElement("button",{disabled:n===t.length-1,className:"grid-item",onClick:function(){e.moveDownHandler(),console.log("Moved down")}},"\u21e9"),r.a.createElement("div",{className:"grid-item"}))};var u=function(e){return r.a.createElement("div",{className:"cell"},e.cell)},s=n(16);var v=function(e){var t=Object(a.useState)(1),n=Object(i.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(1),v=Object(i.a)(o,2),d=v[0],f=v[1],b=["e","+","-","."],p=e.cells,g=Object(a.useState)(0),E=Object(i.a)(g,2),h=E[0],j=E[1],y=Object(a.useState)(0),O=Object(i.a)(y,2),N=O[0],k=O[1];function w(e){for(var t=0;t<b.length;t++)e.key===b[t]&&(e.preventDefault(),console.log("wrong key "+e.key))}var H=function(){e.moveRight(h,N),k(N+1)},C=function(){e.moveLeft(h,N),k(N-1)},D=function(){e.moveDown(h,N),j(h+1)},S=function(){e.moveUp(h,N),j(h-1)};return r.a.createElement("div",null,r.a.createElement("div",{className:"header-class"},r.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;l(t)},onKeyDown:w,value:c,min:"1",max:"10"}),r.a.createElement("label",null,r.a.createElement("strong",null,"X")),r.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;f(t)},onKeyDown:w,value:d,min:"1",max:"10"}),r.a.createElement("button",{className:"main-button btn btn-primary",onClick:function(){j(0),k(0),e.generateBoard(c,d),l(1),f(1)}},"board size")),r.a.createElement("hr",null),r.a.createElement("div",{className:"panel"},p.map((function(e){return r.a.createElement("div",{className:"cellrow-class",key:Object(s.a)()},e.map((function(e){return 0===e?r.a.createElement(m,{moveLeftHandler:C,moveRightHandler:H,moveDownHandler:D,moveUpHandler:S,cells:p,x:h,y:N,key:Object(s.a)()}):r.a.createElement(u,{cell:e,key:Object(s.a)()})})))}))))},d=[[0]];var f=function(){var e=Object(a.useState)(d),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(v,{generateBoard:function(e,t){for(var n=[],a=0;a<t;a++){for(var r=[],l=0;l<e;l++)r.push("");n.push(r)}n[0][0]=0,c(n)},cells:n,moveLeft:function(e,t){var a=Object(o.a)(n).map((function(e){return e.map((function(){return""}))}));a[e][t-1]=0,c(a)},moveRight:function(e,t){var a=Object(o.a)(n).map((function(e){return e.map((function(){return""}))}));a[e][t+1]=0,c(a)},moveDown:function(e,t){var a=Object(o.a)(n).map((function(e){return e.map((function(){return""}))}));a[e+1][t]=0,c(a)},moveUp:function(e,t){var a=Object(o.a)(n).map((function(e){return e.map((function(){return""}))}));a[e-1][t]=0,c(a)}}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.14130ab9.chunk.js.map