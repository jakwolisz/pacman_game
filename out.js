!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function e(){r(this,e),this.x=0,this.y=0,this.direction="right"},a=function e(){r(this,e),this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())},c=function(){function e(){r(this,e),this.board=document.querySelectorAll("#board div"),this.furry=new o,this.coin=new a,this.score=0}var t,n,c;return t=e,(n=[{key:"index",value:function(e,t){return e+10*t}},{key:"showFurry",value:function(){this.hideVisibleFurry(),this.board[this.index(this.furry.x,this.furry.y)].classList.add("pacman")}},{key:"showCoin",value:function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")}},{key:"resetScore",value:function(){document.querySelector("#score div strong").innerHTML=this.score}},{key:"startGame",value:function(){var e=this;this.resetScore(),this.showCoin(),this.showFurry(),this.idSetInterval=setInterval((function(){e.moveFurry()}),250)}},{key:"hideVisibleFurry",value:function(){var e=document.querySelector(".pacman");null!==e&&e.classList.remove("pacman")}},{key:"hideVisibleCoin",value:function(){var e=document.querySelector(".coin");null!==e&&e.classList.remove("coin")}},{key:"checkCoinCollision",value:function(){if(this.index(this.furry.x,this.furry.y)===this.index(this.coin.x,this.coin.y)){var e=this.score;this.score=e+1,document.querySelector(".coin").classList.remove("coin"),document.querySelector("#score div strong").innerHTML=this.score;var t=new a;this.coin=t,this.showCoin()}}},{key:"moveFurry",value:function(){"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"up"===this.furry.direction?this.furry.y=this.furry.y+1:"down"===this.furry.direction&&(this.furry.y=this.furry.y-1),this.gameOver(),this.showFurry(),this.checkCoinCollision()}},{key:"turnFurry",value:function(e){switch(e.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="down";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="up"}}},{key:"gameOver",value:function(){(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)&&(clearInterval(this.idSetInterval),this.hideVisibleFurry(),this.hideVisibleCoin(),d.classList.add("invisible"),f.classList.remove("invisible"),h.classList.remove("invisible"))}}])&&i(t.prototype,n),c&&i(t,c),e}(),s=document.querySelector("#start"),l=document.querySelector("#again_btn"),u=document.querySelector("#score"),d=document.querySelector("#board"),f=document.querySelector("#over"),h=document.querySelector("#again"),p=document.querySelector(".container");s.addEventListener("click",(function(){var e=new c;e.startGame(),p.classList.add("invisible"),u.classList.remove("invisible"),d.classList.remove("invisible"),document.addEventListener("keydown",(function(t){e.turnFurry(t)}))})),l.addEventListener("click",(function(){p.classList.remove("invisible"),u.classList.add("invisible"),d.classList.add("invisible"),f.classList.add("invisible"),h.classList.add("invisible")}))},function(e,t,n){var i=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=c(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:y(f,t),references:1}),i.push(u)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function h(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,b=0;function y(e,t){var n,i,r;if(t.singleton){var o=b++;n=p||(p=l(t)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=l(t),i=h.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=c(n[i]);a[r].references--}for(var o=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=o}}}},function(e,t,n){var i=n(4),r=n(5),o=n(6),a=n(7);t=i(!1);var c=r(o),s=r(a);t.push([e.i,".button{text-align:center;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;text-decoration:none;color:#fff;text-transform:capitalize;background-color:#541388;margin:0 auto;padding:20px 0px;width:150px;height:80px;border-radius:6px;overflow:hidden;-webkit-transition:all 0.2s linear 0s;transition:all 0.2s linear 0s;font-family:'Press Start 2P', cursive;font-size:18px}.button:before{content:\"\\f144\";font-family:\"Font Awesome 5 Free\";display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0px;width:100%;height:100%;text-align:center;font-size:30px;-webkit-transform:scale(0, 0);transform:scale(0, 0);-webkit-transition:all 0.2s linear 0s;transition:all 0.2s linear 0s}.button:hover{text-indent:-9999px}.button:hover:before{-webkit-transform:scale(1, 1);transform:scale(1, 1);text-indent:0}.box,.box--big--alert{text-align:center;display:block;position:relative;text-decoration:none;color:#fff;text-transform:capitalize;background-color:#541388;padding:20px 0px;width:150px;border-radius:6px;overflow:hidden;margin:0 auto;font-family:'Press Start 2P', cursive;font-size:18px}.box--big--alert{padding:50px;background-color:#FF6B6B}.pacman_icon{width:100px;height:100px;border-radius:50%;background:#f2d648;position:absolute;margin-top:-140px;margin-left:80px;z-index:2}.pacman__eye{position:absolute;width:10px;height:10px;border-radius:50%;top:30px;right:30px;background:#333333}.pacman__mouth{background:#1A535C;position:absolute;width:100%;height:100%;-webkit-clip-path:polygon(103% 26%, 64% 48%, 103% 70%);clip-path:polygon(103% 26%, 64% 48%, 103% 70%)}body{margin:0;padding:0;background-color:#1A535C;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100vh}.container{width:100vw;height:100vh;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}#score,#over,#again{margin:50px auto}#board{width:720px;height:720px;margin:1em auto}#board>div{background-color:#F7FFF7;border:4px solid #1A535C;float:left;width:64px;height:64px}.pacman{background-image:url("+c+");background-repeat:no-repeat;background-size:cover}.coin{background-image:url("+s+");background-repeat:no-repeat;background-size:cover}.invisible{display:none}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"2bba196990945eaac5aa132fe0bff87f.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"4a7159b3b11f19afda4e14a8722b488e.png"}]);