(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){t.exports=n(28)},22:function(t,e,n){},24:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(11),l=n.n(i),r=(n(22),n(2)),u=n(3),c=n(14),s=n(12),h=n(15),d=(n(24),n(4)),f=n(8),v=n.n(f);function g(t){var e=t.cell,n=Object(o.useState)(function(){if(e.getRevealed())return e.getSolution()}),i=Object(d.a)(n,2),l=i[0],r=i[1],u=Object(o.useState)(),c=Object(d.a)(u,2),s=c[0],h=c[1],f=!1===s?v.a.cell_input_wrong:"";return a.a.createElement("div",{className:v.a.cell},a.a.createElement("input",{className:"".concat(v.a.cell_input," ").concat(f),value:l,onChange:function(t){var n=t.target.value;/^[0-9]$|^$/g.test(n)&&r(n);var o=e.getSolution().toString()===n||""===n;h(o)}}))}var y=n(9),m=n.n(y),b=n(1),p=n(13),w=[1,2,3,4,5,6,7,8,9],C=function(){function t(e,n){Object(r.a)(this,t),this.index=e,this.revealed=n,this.coords=this.getCoords(e),this.reset()}return Object(u.a)(t,[{key:"initialise",value:function(t){var e=this.getNeighbourIndexes();this.neighbours=e.map(function(e){return t[e]})}},{key:"reset",value:function(){this.solution=null,this.validSolutions=null}},{key:"getSolution",value:function(){return this.solution}},{key:"setSolution",value:function(t){this.solution=t}},{key:"getRevealed",value:function(){return this.revealed}},{key:"getNextValidSolution",value:function(){var t=Object(p.a)(this.validSolutions),e=t[0],n=t.slice(1);return this.validSolutions=n,e}},{key:"calculateValidSolutions",value:function(){if(null===this.validSolutions){var t=this.getNeighbourSolutions();this.validSolutions=function(t){for(var e,n,o=t.length;0!==o;)n=Math.floor(Math.random()*o),e=t[o-=1],t[o]=t[n],t[n]=e;return t}(w.filter(function(e){return!t.includes(e)}))}}},{key:"getNeighbourSolutions",value:function(){return this.neighbours.map(function(t){return t.getSolution()})}},{key:"translateCoordsToIndex",value:function(t){var e=t.x;return 9*t.y+e}},{key:"getNeighbourIndexes",value:function(){var t=this.getBoxCellCoords(),e=this.getRowCellCoords(),n=this.getColumnCellCoords(),o=[].concat(Object(b.a)(t),Object(b.a)(e),Object(b.a)(n)).map(this.translateCoordsToIndex),a=new Set(o);return a.delete(this.index),Object(b.a)(a)}},{key:"getBoxCellCoords",value:function(){for(var t=3*Math.floor(this.coords.x/3),e=3*Math.floor(this.coords.y/3),n=[],o=0;o<3;o++)for(var a=0;a<3;a++){var i=t+a,l=e+o;n=[].concat(Object(b.a)(n),[{x:i,y:l}])}return n}},{key:"getRowCellCoords",value:function(){for(var t=[],e=0;e<9;e++)t=[].concat(Object(b.a)(t),[{x:e,y:this.coords.y}]);return t}},{key:"getColumnCellCoords",value:function(){for(var t=[],e=0;e<9;e++)t=[].concat(Object(b.a)(t),[{x:this.coords.x,y:e}]);return t}},{key:"getCoords",value:function(){return{x:this.index%9,y:Math.floor(this.index/9)}}}]),t}(),S=Math.pow(9,2),O=function(){function t(){Object(r.a)(this,t),this.callCount=0,this.resetGrid()}return Object(u.a)(t,[{key:"resetGrid",value:function(){var t=this;this.cells=Object(b.a)(Array(S)).map(function(t,e){return new C(e,Math.random()>.5)}),this.cells.forEach(function(e){return e.initialise(t.cells)}),this.createSolution(0)}},{key:"createSolution",value:function(t){if(this.callCount++,this.callCount>1e3)throw new Error("Call count maximum exceeded");if(t===this.cells.length)return!0;var e=this.cells[t];e.calculateValidSolutions();var n=e.getNextValidSolution();return n?(e.setSolution(n),!!this.createSolution(t+1)||this.createSolution(t)):(e.reset(),!1)}}]),t}(),_=function(){var t=Object(o.useState)(function(){return new O}),e=Object(d.a)(t,1)[0].cells;return a.a.createElement("div",{className:m.a.layout},a.a.createElement("div",{className:m.a["layout-row"]},e.map(function(t,e){return a.a.createElement(g,{key:e,cell:t})})))},j=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h2",null,"Thomas Mead Sudoku App"),a.a.createElement(_,null))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports={cell:"Cell_cell__2t9_7",cell_input:"Cell_cell_input__2Disw",cell_input_wrong:"Cell_cell_input_wrong__2f2JB"}},9:function(t,e,n){t.exports={layout:"Layout_layout__3OYsd","layout-row":"Layout_layout-row__2M8BO"}}},[[16,2,1]]]);
//# sourceMappingURL=main.3fe63266.chunk.js.map