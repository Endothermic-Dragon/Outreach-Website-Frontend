/*! For license information please see menu.js.LICENSE.txt */
(()=>{var t,e={508:t=>{t.exports={$:t=>{var e=[...document.querySelectorAll(t)];return e.forEach((t=>t.on=(e,r)=>t.addEventListener(e,(e=>r(e,t))))),e.onAll=(t,r)=>e.map((e=>e.on(t,r))),e.on=()=>{throw new TypeError('Cannot add event listener on multiple elements using "on". Use "onAll" to add to multiple elements, or select one element.')},e},backend:"https://xtekoweg6sbdadhqxpetywgp3m0silph.lambda-url.us-east-1.on.aws/"}},518:(t,e,r)=>{var n=r(435).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new N(n||[]);return s(i,"_invoke",{value:j(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",m="executing",g="completed",v={};function b(){}function w(){}function x(){}var L={};p(L,l,(function(){return this}));var O=Object.getPrototypeOf,k=O&&O(O(P([])));k&&k!==i&&a.call(k,l)&&(L=k);var E=x.prototype=b.prototype=Object.create(L);function S(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,s,c){var l,u,f=d(t[o],t,i);if("throw"!==f.type)return(u=(l=f.arg).value)&&"object"==n(u)&&a.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(u).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}));c(f.arg)}var o;s(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function j(t,r,n){var o=y;return function(i,a){var s,c,l;if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){if((s=n.delegate)&&(c=$(s,n))){if(c===v)continue;return c}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);if(o=m,"normal"===(l=d(t,r,n)).type){if(o=n.done?g:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function $(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,$(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function P(t){var r,o,i;if(t||""===t){if(r=t[l])return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return o=-1,(i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r}).next=i}throw new TypeError(n(t)+" is not iterable")}return w.prototype=x,s(E,"constructor",{value:x,configurable:!0}),s(x,"constructor",{value:w,configurable:!0}),w.displayName=p(x,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,p(t,f,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},S(_.prototype),p(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),p(E,f,"Generator"),p(E,l,(function(){return this})),p(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(var n;r.length;)if((n=r.pop())in e)return t.value=n,t.done=!1,t;return t.done=!0,t}},r.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r,n,o,i,s,c=this;function l(r,n){return o.type="throw",o.arg=t,c.next=r,n&&(c.method="next",c.arg=e),!!n}for(r=this.tryEntries.length-1;r>=0;--r){if(n=this.tryEntries[r],o=n.completion,"root"===n.tryLoc)return l("end");if(n.tryLoc<=this.prev)if(i=a.call(n,"catchLoc"),s=a.call(n,"finallyLoc"),i&&s){if(this.prev<n.catchLoc)return l(n.catchLoc,!0);if(this.prev<n.finallyLoc)return l(n.finallyLoc)}else if(i){if(this.prev<n.catchLoc)return l(n.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return l(n.finallyLoc)}}},abrupt:function(t,e){for(r=this.tryEntries.length-1;r>=0;--r)if((n=this.tryEntries[r]).tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){o=n;break}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var r,n,o,i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){var e,r;for(e=this.tryEntries.length-1;e>=0;--e)if((r=this.tryEntries[e]).finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v},catch:function(t){var e,r,n,o;for(e=this.tryEntries.length-1;e>=0;--e)if((r=this.tryEntries[e]).tryLoc===t)return"throw"===(n=r.completion).type&&(o=n.arg,T(r)),o;throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},435:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},117:(t,e,r)=>{var n=r(518)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},390:(t,e,r)=>{"use strict";function n(t,e,r,n,o,i,a){var s,c;try{c=(s=t[i](a)).value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}r.d(e,{Z:()=>o})}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((t=>n.O[t](r[c])))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={860:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,a=r[0],s=r[1],c=r[2],l=0;if(a.some((e=>0!==t[e]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(e&&e(r);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self.webpackChunkoutreach_website_frontend=self.webpackChunkoutreach_website_frontend||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o={};(()=>{"use strict";function t(t,e){var r,n;for((null==e||e>t.length)&&(e=t.length),r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var e=n(390),r=n(117),o=n.n(r),i=n(508),a=(0,i.$)(".sidebar")[0];function s(){var t=google.accounts.oauth2.initCodeClient({client_id:"672955273389-tc6i17ics6qv7sh6g7m597fi30ic0ljq.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",ux_mode:"popup",callback:t=>{fetch(i.backend+"./auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:t.code})}).then(function(){var t=(0,e.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200==e.status){t.next=3;break}return alert("Could not log in. Please try again."),t.abrupt("return");case 3:return t.next=5,e.json();case 5:r=t.sent,localStorage.setItem("session-token",r.session_token),localStorage.setItem("user-id",r.user_id),localStorage.setItem("tags",JSON.stringify(r.tags)),(0,i.$)(".sign-in")[0].classList.add("disabled"),(0,i.$)(".sign-in")[0].removeEventListener("click",s),(0,i.$)(".sidebar")[0].classList.add("signed-in"),r.tags.includes("mentor")&&(0,i.$)(".sidebar")[0].classList.add("mentor");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}())}});t.requestCode()}function c(e,r){var n,o,i,a,s,c=document.createElement("div"),l=document.createElement("div");l.style.height="7.5px";var u=document.createElement("div");u.style.height="7.5px",u.style.width="0",u.style.animation="NotificationBar ".concat(r,"s linear 1"),u.style.backgroundColor="red",l.appendChild(u),c.appendChild(l);var f,p,h,d=document.createElement("div");for(d.innerText=e,d.style.padding="7.5px 15px 15px 15px",c.appendChild(d),f=window.innerWidth>400?{position:"absolute",bottom:"15px",right:"30px","font-family":'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',"background-color":"white","font-size":"18px",width:"250px",border:"5px solid black"}:{position:"absolute",bottom:"15px",left:"15px",right:"15px","font-family":'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',"background-color":"white","font-size":"18px",border:"5px solid black"},n=0,o=Object.entries(f);n<o.length;n++)a=(p=o[n],h=2,i=function(t){if(Array.isArray(t))return t}(p)||function(t,e){var r,n,o,i,a,s,c,l=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=l){a=[],s=!0,c=!1;try{if(o=(l=l.call(t)).next,0===e){if(Object(l)!==l)return;s=!1}else for(;!(s=(r=o.call(l)).done)&&(a.push(r.value),a.length!==e);s=!0);}catch(t){c=!0,n=t}finally{try{if(!s&&null!=l.return&&(i=l.return(),Object(i)!==i))return}finally{if(c)throw n}}return a}}(p,h)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(p,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],s=i[1],c.style[a]=s;document.body.appendChild(c),setTimeout((()=>{c.style.opacity=0,c.style.animation="NotificationPop ".concat(.3,"s ease-out 1"),setTimeout((()=>c.remove()),300)}),1e3*r)}a.scrollHeight>a.clientHeight&&a.style.setProperty("--scrollbar-width",function(){var t=document.createElement("div");t.style.visibility="hidden",t.style.overflow="scroll",document.body.appendChild(t);var e=document.createElement("div");t.appendChild(e);var r=t.offsetWidth-e.offsetWidth;return t.remove(t),r}()+"px"),(0,i.$)(".sidebar > div:not(:last-child)").onAll("click",((t,e)=>{location.href=e.dataset.url})),(0,i.$)('.sidebar > div[data-url="'.concat(location.pathname.slice(1),'"]'))[0].classList.add("selected"),(0,i.$)(".menu-bars")[0].on("click",(()=>{(0,i.$)(".menu-bars")[0].classList.toggle("open"),(0,i.$)(".sidebar")[0].classList.toggle("open")})),(0,i.$)(".sidebar")[0].on("mouseenter",(()=>(0,i.$)(".sidebar-shadow")[0].classList.add("open"))),(0,i.$)(".sidebar")[0].on("mouseleave",(()=>(0,i.$)(".sidebar-shadow")[0].classList.remove("open"))),fetch(i.backend+"./pre-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_token:localStorage.getItem("session-token")})}).then(function(){var t=(0,e.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:200!=e.status?(c("You are not signed in. To access working features of this website, please navigate to the menu and log in through Google.",7.5),(0,i.$)(".sign-in")[0].classList.remove("disabled"),(0,i.$)(".sign-in")[0].on("click",s)):((0,i.$)(".sidebar")[0].classList.add("signed-in"),JSON.parse(localStorage.getItem("tags")).includes("mentor")&&(0,i.$)(".sidebar")[0].classList.add("mentor"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}())})(),o=n.O(o)})();