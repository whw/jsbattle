var tank=function(t){function n(r){if(o[r])return o[r].exports;var e=o[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var o={};return n.m=t,n.c=o,n.d=function(t,o,r){n.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=3)}([function(t,n){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,n,o){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n){(function(n){t.exports=n}).call(n,{})},function(t,n,o){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var e=function(){function t(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,o,r){return o&&t(n.prototype,o),r&&t(n,r),n}}(),i=o(4),u=o(13);Math=u(),Math.random=function(){throw"Cannot use Math.random outside of tank.init(...) or tank.loop(...) callbacks! Sorry!"};var c=function(){function t(){r(this,t),this._initCallback=function(){},this._loopCallback=function(){};var n=this;onmessage=function(t){switch(t.data.command){case"init":var o=t.data.seed,r=t.data.settings,e=t.data.info;Math.random=i(o),n._initCallback(r,e),postMessage({type:"init",settings:r});break;case"update":var u=t.data.state,c=t.data.control;n._loopCallback?(n._loopCallback(u,c),postMessage(c)):postMessage(c)}}}return e(t,[{key:"loop",value:function(t){this._loopCallback=t}},{key:"init",value:function(t){this._initCallback=t}}]),t}();t.exports=new c},function(t,n,o){"use strict";var r=o(5),e=o(6),i=o(7),u=o(8),c=o(9),a=o(10),f=o(11);f.alea=r,f.xor128=e,f.xorwow=i,f.xorshift7=u,f.xor4096=c,f.tychei=a,t.exports=f},function(t,n,o){"use strict";(function(t){var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,i,u){function c(t){var n=this,o=s();n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=o(" "),n.s1=o(" "),n.s2=o(" "),n.s0-=o(t),n.s0<0&&(n.s0+=1),n.s1-=o(t),n.s1<0&&(n.s1+=1),n.s2-=o(t),n.s2<0&&(n.s2+=1),o=null}function a(t,n){return n.c=t.c,n.s0=t.s0,n.s1=t.s1,n.s2=t.s2,n}function f(t,n){var o=new c(t),r=n&&n.state,i=o.next;return i.int32=function(){return 4294967296*o.next()|0},i.double=function(){return i()+1.1102230246251565e-16*(2097152*i()|0)},i.quick=i,r&&("object"==(void 0===r?"undefined":e(r))&&a(r,o),i.state=function(){return a(o,{})}),i}function s(){var t=4022871197;return function(n){n=n.toString();for(var o=0;o<n.length;o++){var r=.02519603282416938*(t+=n.charCodeAt(o));r-=t=r>>>0,t=(r*=t)>>>0,t+=4294967296*(r-=t)}return 2.3283064365386963e-10*(t>>>0)}}i&&i.exports?i.exports=f:o(0)&&o(2)?void 0!==(r=function(){return f}.call(n,o,n,i))&&(i.exports=r):this.alea=f}(0,"object"==e(t)&&t,o(0))}).call(n,o(1)(t))},function(t,n,o){"use strict";(function(t){var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,i,u){function c(t){var n=this,o="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},t===(0|t)?n.x=t:o+=t;for(var r=0;r<o.length+64;r++)n.x^=0|o.charCodeAt(r),n.next()}function a(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n}function f(t,n){var o=new c(t),r=n&&n.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=o.next,i.quick=i,r&&("object"==(void 0===r?"undefined":e(r))&&a(r,o),i.state=function(){return a(o,{})}),i}i&&i.exports?i.exports=f:o(0)&&o(2)?void 0!==(r=function(){return f}.call(n,o,n,i))&&(i.exports=r):this.xor128=f}(0,"object"==e(t)&&t,o(0))}).call(n,o(1)(t))},function(t,n,o){"use strict";(function(t){var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,i,u){function c(t){var n=this,o="";n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^t^t<<1)|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,t===(0|t)?n.x=t:o+=t;for(var r=0;r<o.length+64;r++)n.x^=0|o.charCodeAt(r),r==o.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function a(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n.v=t.v,n.d=t.d,n}function f(t,n){var o=new c(t),r=n&&n.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=o.next,i.quick=i,r&&("object"==(void 0===r?"undefined":e(r))&&a(r,o),i.state=function(){return a(o,{})}),i}i&&i.exports?i.exports=f:o(0)&&o(2)?void 0!==(r=function(){return f}.call(n,o,n,i))&&(i.exports=r):this.xorwow=f}(0,"object"==e(t)&&t,o(0))}).call(n,o(1)(t))},function(t,n,o){"use strict";(function(t){var r;!function(t,e,i){function u(t){var n=this;n.next=function(){var t,o,r=n.x,e=n.i;return t=r[e],t^=t>>>7,o=t^t<<24,t=r[e+1&7],o^=t^t>>>10,t=r[e+3&7],o^=t^t>>>3,t=r[e+4&7],o^=t^t<<7,t=r[e+7&7],t^=t<<13,o^=t^t<<9,r[e]=o,n.i=e+1&7,o},function(t,n){var o,r=[];if(n===(0|n))r[0]=n;else for(n=""+n,o=0;o<n.length;++o)r[7&o]=r[7&o]<<15^n.charCodeAt(o)+r[o+1&7]<<13;for(;r.length<8;)r.push(0);for(o=0;o<8&&0===r[o];++o);for(8==o?r[7]=-1:r[o],t.x=r,t.i=0,o=256;o>0;--o)t.next()}(n,t)}function c(t,n){return n.x=t.x.slice(),n.i=t.i,n}function a(t,n){null==t&&(t=+new Date);var o=new u(t),r=n&&n.state,e=function(){return(o.next()>>>0)/4294967296};return e.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},e.int32=o.next,e.quick=e,r&&(r.x&&c(r,o),e.state=function(){return c(o,{})}),e}e&&e.exports?e.exports=a:o(0)&&o(2)?void 0!==(r=function(){return a}.call(n,o,n,e))&&(e.exports=r):this.xorshift7=a}(0,"object"==("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)&&t,o(0))}).call(n,o(1)(t))},function(t,n,o){"use strict";(function(t){var r;!function(t,e,i){function u(t){var n=this;n.next=function(){var t,o,r=n.w,e=n.X,i=n.i;return n.w=r=r+1640531527|0,o=e[i+34&127],t=e[i=i+1&127],o^=o<<13,t^=t<<17,o^=o>>>15,t^=t>>>12,o=e[i]=o^t,n.i=i,o+(r^r>>>16)|0},function(t,n){var o,r,e,i,u,c=[],a=128;for(n===(0|n)?(r=n,n=null):(n+="\0",r=0,a=Math.max(a,n.length)),e=0,i=-32;i<a;++i)n&&(r^=n.charCodeAt((i+32)%n.length)),0===i&&(u=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,i>=0&&(u=u+1640531527|0,e=0==(o=c[127&i]^=r+u)?e+1:0);for(e>=128&&(c[127&(n&&n.length||0)]=-1),e=127,i=512;i>0;--i)r=c[e+34&127],o=c[e=e+1&127],r^=r<<13,o^=o<<17,r^=r>>>15,o^=o>>>12,c[e]=r^o;t.w=u,t.X=c,t.i=e}(n,t)}function c(t,n){return n.i=t.i,n.w=t.w,n.X=t.X.slice(),n}function a(t,n){null==t&&(t=+new Date);var o=new u(t),r=n&&n.state,e=function(){return(o.next()>>>0)/4294967296};return e.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},e.int32=o.next,e.quick=e,r&&(r.X&&c(r,o),e.state=function(){return c(o,{})}),e}e&&e.exports?e.exports=a:o(0)&&o(2)?void 0!==(r=function(){return a}.call(n,o,n,e))&&(e.exports=r):this.xor4096=a}(0,"object"==("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)&&t,o(0))}).call(n,o(1)(t))},function(t,n,o){"use strict";(function(t){var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,i,u){function c(t){var n=this,o="";n.next=function(){var t=n.b,o=n.c,r=n.d,e=n.a;return t=t<<25^t>>>7^o,o=o-r|0,r=r<<24^r>>>8^e,e=e-t|0,n.b=t=t<<20^t>>>12^o,n.c=o=o-r|0,n.d=r<<16^o>>>16^e,n.a=e-t|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,t===Math.floor(t)?(n.a=t/4294967296|0,n.b=0|t):o+=t;for(var r=0;r<o.length+20;r++)n.b^=0|o.charCodeAt(r),n.next()}function a(t,n){return n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,n}function f(t,n){var o=new c(t),r=n&&n.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do{var t=((o.next()>>>11)+(o.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=o.next,i.quick=i,r&&("object"==(void 0===r?"undefined":e(r))&&a(r,o),i.state=function(){return a(o,{})}),i}i&&i.exports?i.exports=f:o(0)&&o(2)?void 0!==(r=function(){return f}.call(n,o,n,i))&&(i.exports=r):this.tychei=f}(0,"object"==e(t)&&t,o(0))}).call(n,o(1)(t))},function(t,n,o){"use strict";(function(t){var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(i,u){function c(t,n,o){var r=[],e=l(s((n=1==n?{entropy:!0}:n||{}).entropy?[t,p(i)]:null==t?y():t,3),r),c=new a(r),d=function(){for(var t=c.g(v),n=h,o=0;t<w;)t=(t+o)*x,n*=x,o=c.g(1);for(;t>=g;)t/=2,n/=2,o>>>=1;return(t+o)/n};return d.int32=function(){return 0|c.g(4)},d.quick=function(){return c.g(4)/4294967296},d.double=d,l(p(c.S),i),(n.pass||o||function(t,n,o,r){return r&&(r.S&&f(r,c),t.state=function(){return f(c,{})}),o?(u[m]=t,n):t})(d,e,"global"in n?n.global:this==u,n.state)}function a(t){var n,o=t.length,r=this,e=0,i=r.i=r.j=0,u=r.S=[];for(o||(t=[o++]);e<x;)u[e]=e++;for(e=0;e<x;e++)u[e]=u[i=S&i+t[e%o]+(n=u[e])],u[i]=n;(r.g=function(t){for(var n,o=0,e=r.i,i=r.j,u=r.S;t--;)n=u[e=S&e+1],o=o*x+u[S&(u[e]=u[i=S&i+n])+(u[i]=n)];return r.i=e,r.j=i,o})(x)}function f(t,n){return n.i=t.i,n.j=t.j,n.S=t.S.slice(),n}function s(t,n){var o,r=[],i=void 0===t?"undefined":e(t);if(n&&"object"==i)for(o in t)try{r.push(s(t[o],n-1))}catch(t){}return r.length?r:"string"==i?t:t+"\0"}function l(t,n){for(var o,r=t+"",e=0;e<r.length;)n[S&e]=S&(o^=19*n[S&e])+r.charCodeAt(e++);return p(n)}function y(){try{var t;return d&&(t=d.randomBytes)?t=t(x):(t=new Uint8Array(x),(b.crypto||b.msCrypto).getRandomValues(t)),p(t)}catch(t){var n=b.navigator,o=n&&n.plugins;return[+new Date,b,o,b.screen,p(i)]}}function p(t){return String.fromCharCode.apply(0,t)}var d,b=this,x=256,v=6,m="random",h=u.pow(x,v),w=u.pow(2,52),g=2*w,S=x-1;if(u["seed"+m]=c,l(u.random(),i),"object"==e(t)&&t.exports){t.exports=c;try{d=o(12)}catch(t){}}else void 0!==(r=function(){return c}.call(n,o,n,t))&&(t.exports=r)}([],Math)}).call(n,o(1)(t))},function(t,n){},function(t,n,o){"use strict";t.exports=function(){var t={},n=["LN10","PI","E","LOG10E","SQRT2","LOG2E","SQRT1_2","LN2","cos","pow","log","tan","sqrt","ceil","asin","abs","max","exp","atan2","random","round","floor","acos","atan","min","sin"];for(var o in n)t[n[o]]=Math[n[o]];return t.deg={},t.rad={},t.deg.normalize=function(t){for(t=Number(t);t>180;)t-=360;for(;t<=-180;)t+=360;return t},t.rad.normalize=function(n){for(n=Number(n);n>t.PI;)n-=2*t.PI;for(;n<=-t.PI;)n+=2*t.PI;return n},t.deg2rad=function(n){return t.rad.normalize(n*(t.PI/180))},t.rad2deg=function(n){return t.deg.normalize(n*(180/t.PI))},t.rad.atan2=t.atan2,t.deg.atan2=function(n,o){return t.rad2deg(t.rad.atan2(n,o))},t.distance=function(n,o,r,e){var i=r-n,u=e-o;return t.sqrt(i*i+u*u)},t.randomRange=function(n,o){if(n>o)throw"The range is incorrect. First number must be lower than second";return n+t.random()*(o-n)},t}}]);