(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1287a6b4"],{"5def":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tripartiteverify"},[e("div",{staticClass:"tripartiteverify__container"},[e("div",{class:["tripartiteverify__aside","tripartiteverify__aside--"+t.currentPlatform]}),e("div",{staticClass:"tripartiteverify__content"},[e("div",{staticClass:"bind-text",class:["tripartiteverify__content--color-"+t.currentPlatform]},[t._v(" "+t._s(t.title)+" ")]),e("div",{class:["tripartiteverify__content-verify","tripartiteverify__content--bg-"+t.currentPlatform,"tripartiteverify__content--color-"+t.currentPlatform],attrs:{id:"code"}},[t._v(" "+t._s(t.validate.publicKey||"")+" ")]),e("div",{class:["tripartiteverify__content-link","tripartiteverify__content--bg-"+t.currentPlatform,"tripartiteverify__content--color-"+t.currentPlatform],on:{click:function(e){return t.openLink(t.currentPlatform)}}},[t._v(" 点击前往验证 ")]),e("div",{staticClass:"time-refresh"},[e("div",{class:["tripartiteverify__content-time","tripartiteverify__content-time--bg-"+t.currentPlatform,t.time<=0&&"tripartiteverify__content-time--try"]},[t._v(" "+t._s(t.time>0?t.time+"s":"验证超时")+" ")]),e("div",{class:["tripartiteverify__content-time","tripartiteverify__content-time--bg-"+t.currentPlatform,"refresh"],on:{click:t.refresh}},[t._v(" 刷新验证码 ")])]),e("div",{class:["tripartiteverify__content-link","tripartiteverify__content--bg-"+t.currentPlatform,"tripartiteverify__content--color-"+t.currentPlatform,t.time<=0&&"tripartiteverify__content-time--try"],on:{click:t.makeValidate}},[t._v(" 已发送弹幕，点击验证 ")]),e("div",{class:["tripartiteverify__content-notice","tripartiteverify__content--color-"+t.currentPlatform]},[t._v(" "+t._s(t.registerNotice)+" ")]),e("div",{staticClass:"notice"},[t._v(" 注意：由于验证码可能会被弹幕网站拦截，如果弹幕验证后不能成功跳转，可刷新页面重新获取验证码；如果多次未能验证成功，请联系开发人员。 ")])])])])},i=[],o=(n("0643"),n("fffc"),n("4360")),c=n("b311"),a=n.n(c),u=n("2f62"),s=n("db04"),l=n("3786"),f={name:"test",data(){return{timer:null,platformList:[{name:"B站验证",site:"bilibili"},{name:"斗鱼验证",site:"douyu"}],clipBoard:null,linkList:{douyu:"https://www.douyu.com/3727854",bilibili:"https://live.bilibili.com/13337778"},countdown:300,time:300,validate:{publicKey:"",privateKey:""}}},metaInfo(){return{title:this.title+" - 毛怪俱乐部",meta:[{name:"keywords",content:"弹幕,验证,毛怪,hanser,社区,毛怪俱乐部"},{name:"description",content:"弹幕验证登录或注册进入社区"}]}},methods:{openLink(t){window.open(this.linkList[t])},refresh(){s["a"].get(l["a"].authCode).then(t=>{0===t.code&&(this.initCountdown(),this.validate.publicKey=t.publicKey,this.validate.privateKey=t.privateKey)})},async makeValidate(){if(!this.time)return;const t=await s["a"].post(l["a"].validate,{code:this.validate.publicKey,key:this.validate.privateKey});403===t.code&&t.dissmiss||0===t.code&&!t.bind?s["a"].post(l["a"].bindAccount,{code:this.validate.publicKey,key:this.validate.privateKey,site:t.site,uid:t.uid,auth:t.auth}).then(async t=>{0===t.code?(this.$message({type:"success",message:t.msg}),o["a"].dispatch("score/updateScore")):this.$alert(t.msg,"提示",{callback:()=>{this.refresh()}})}):this.$alert("验证失败,请确保账号未注册或已注销","验证失败",{type:"warning"})},initCountdown(){clearTimeout(this.timer),this.timer=null,this.time=this.countdown,this.startCountdown()},startCountdown(){this.time>0&&(this.timer=setTimeout(()=>{this.time--,this.startCountdown()},1e3))}},computed:{...Object(u["d"])({userInfo:t=>t.users.userInfo}),title(){return`新增${"bilibili"===this.currentPlatform?"B站":"斗鱼"}账号关联`},registerNotice(){return"bilibili"===this.currentPlatform?"复制验证码前往【毛怪俱乐部】直播间，佩戴【憨毛怪】粉丝牌后弹幕发送。过期请重新获取，请勿泄露或告知他人！":"复制验证码前往直播间弹幕发送。过期请重新获取，请勿泄露或告知他人！"},currentPlatform(){const{platform:t}=this.$route.query;return this.platformList.find(e=>e.site===t)?t:"bilibili"}},mounted(){this.refresh(),this.clipBoard=new a.a("#code",{text:()=>this.validate.publicKey}),this.clipBoard.on("success",()=>{this.$message({type:"success",message:"验证码已复制"})})},beforeDestroy(){clearTimeout(this.timer),this.clipBoard.destroy()}},d=f,p=(n("be84"),n("2877")),y=Object(p["a"])(d,r,i,!1,null,"4a8170e0",null);e["default"]=y.exports},"5ec1":function(t,e,n){},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return j}});var r=n(279),i=n.n(r),o=n(370),c=n.n(o),a=n(817),u=n.n(a);function s(t){try{return document.execCommand(t)}catch(e){return!1}}var l=function(t){var e=u()(t);return s("cut"),e},f=l;function d(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}var p=function(t,e){var n=d(t);e.container.appendChild(n);var r=u()(n);return s("copy"),n.remove(),r},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"===typeof t?n=p(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?n=p(t.value,e):(n=u()(t),s("copy")),n},v=y;function m(t){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,i=t.target,o=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==i){if(!i||"object"!==m(i)||1!==i.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&i.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(i.hasAttribute("readonly")||i.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return o?v(o,{container:r}):i?"cut"===n?f(i):v(i,{container:r}):void 0},b=h;function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t}function S(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function x(t){var e=P();return function(){var n,r=L(t);if(e){var i=L(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return T(this,n)}}function T(t,e){return!e||"object"!==g(e)&&"function"!==typeof e?C(t):e}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}function A(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var O=function(t){S(n,t);var e=x(n);function n(t,r){var i;return _(this,n),i=e.call(this),i.resolveOptions(r),i.listenClick(t),i}return E(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===g(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=c()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=b({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return A("action",t)}},{key:"defaultTarget",value:function(t){var e=A("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return A("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return v(t,e)}},{key:"cut",value:function(t){return f(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(i()),j=O},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=r},438:function(t,e,n){var r=n(828);function i(t,e,n,r,i){var o=c.apply(this,arguments);return t.addEventListener(n,o,i),{destroy:function(){t.removeEventListener(n,o,i)}}}function o(t,e,n,r,o){return"function"===typeof t.addEventListener?i.apply(null,arguments):"function"===typeof n?i.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return i(t,e,n,r,o)})))}function c(t,e,n,i){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&i.call(t,n)}}t.exports=o},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var r=n(879),i=n(438);function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return c(t,e,n);if(r.nodeList(t))return a(t,e,n);if(r.string(t))return u(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function c(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function a(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function u(t,e,n){return i(document.body,t,e,n)}t.exports=o},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(t),r.removeAllRanges(),r.addRange(i),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function i(){r.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,i=n.length;for(r;r<i;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],i=[];if(r&&e)for(var o=0,c=r.length;o<c;o++)r[o].fn!==e&&r[o].fn._!==e&&i.push(r[o]);return i.length?n[t]=i:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(686)}().default}))},be84:function(t,e,n){"use strict";n("5ec1")}}]);