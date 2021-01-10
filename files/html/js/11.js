(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{827:function(t,e,r){"use strict";r.r(e),r.d(e,"SearchHighlight",(function(){return f}));r(828);var o=r(17);function n(t){return c(t)||s(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}function s(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}var g="search/";function f(t,e){this.searchState=t,this.store=e}f.prototype.clear=function(){this.store.commit(g+o.CLEAR_HIGHLIGHTS)},f.prototype.findHighlights=function(t,e){var r=this;if(this.store.getters["search/isSearchTextInfoLoaded"](e)){for(var n,i=this.store.state.search.results,a=0,s=i.length;a<s;a++)if(i[a].pageId.toString()===e.toString()){n=i[a];break}if(n){var c=r._highlightFoundItems(n,e);r._filterCrossedItems(c),r.store.commit(g+o.ADD_HIGHLIGHTS,{key:e,query:t,value:c});var h=r.store.state.pager;if("search"===h.lastTarget&&h.singleMode&&r.store.getters["pages/pageProp"](e,"wide")&&h.rightPage===e&&!r.store.getters["pages/isFirstPage"](e)&&!r.store.getters["pages/isLastPage"](e)){for(var f=r.store.getters["pages/pageProp"](e,"width")/2,u=r.store.state.book.rightToLeft,l=!0,p=0,d=c.length;p<d;p++)if(u?c[p].rect[2]>=f:c[p].rect[2]<f){l=!1;break}l&&r.store.dispatch("pager/goToPageById",{id:e.toString(),rightWideHalf:!0})}}else this.store.commit(g+o.ADD_HIGHLIGHTS,{key:e,query:t,value:[]})}},f.prototype._highlightFoundItems=function(t,e){var r=[],o=this.store.getters["search/getSearchTextInfo"](e),n=o.finalTree,i=o.searchTextMap,a=Object.keys(i).map((function(t){return parseInt(t,10)}));a.sort((function(t,e){return e-t}));for(var s=t.positions,c=0,h=s.length;c<h;c++){var g=this._highlightFoundItem(s[c].startPos,s[c].stopPos,a,i,n);r=r.concat(g)}return r},f.prototype._highlightFoundItem=function(t,e,r,o,n){try{for(var i=[],a=r.findIndex((function(e){return e<=t}));a>=0&&o[r[a]].endSrc<t;)a--;if(a<0)return[];for(var s=r[a],c=Math.max(t-s,0),h=a;s<=e&&h>=0;){var g=o[s],f=n[g.block],u=f.lines[g.line],l=Math.max(g.endSrc-e,0),p=g.reversed?l:c,d=g.endSrc-g.startSrc-l-c;i.push(this._getHighlightItem(u.symbols,f.onlyForSearch,g.startSym,p,d)),s=r[--h],c=0}return i}catch(m){return setTimeout((function(){throw m}),0),[]}},f.prototype._getHighlightItem=function(t,e,r,o,i){var a=r+o,s=t[a].left,c=t[a].top,h=t[a].height,g=a+i;return e&&t[a].rtl&&(s=t[g].left,c=t[g].top),{rect:[n(Array(g-a+1).keys()).reduce((function(e,r){return e+t[a+r].width}),0),h,s,c],angle:t[a].angle}},f.prototype._filterCrossedItems=function(t){for(var e=0;e<t.length;e++)for(var r=t[e],o=t[e].rect,n=e+1;n<t.length;n++){var i=t[n];if(0===r.angle&&0===i.angle&&r.rect[1]===i.rect[1]&&r.rect[3]===i.rect[3]){var a=i.rect;if(o[2]<=a[2]&&a[2]<=o[2]+o[0]||a[2]<=o[2]&&o[2]<=a[2]+a[0]){var s=Math.min(o[2],a[2]),c=[Math.max(o[2]+o[0],a[2]+a[0])-s,o[1],s,o[3]];o=r.rect=c,t.splice(n,1),n=e}}}}}}]);