(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d022228"],{"0acd":function(t,e,s){},"13d5":function(t,e,s){"use strict";var a=s("23e7"),i=s("d58f").left,r=s("a640"),n=s("2d00"),o=s("605d"),l=r("reduce"),c=!o&&n>79&&n<83;a({target:"Array",proto:!0,forced:!l||c},{reduce:function(t){var e=arguments.length;return i(this,t,e,e>1?arguments[1]:void 0)}})},"1abe":function(t,e,s){"use strict";s("cf90")},"33d1":function(t,e,s){"use strict";var a=s("23e7"),i=s("7b0b"),r=s("07fa"),n=s("5926"),o=s("44d2");a({target:"Array",proto:!0},{at:function(t){var e=i(this),s=r(e),a=n(t),o=a>=0?a:s+a;return o<0||o>=s?void 0:e[o]}}),o("at")},"44d2":function(t,e,s){var a=s("b622"),i=s("7c73"),r=s("9bf2").f,n=a("unscopables"),o=Array.prototype;void 0==o[n]&&r(o,n,{configurable:!0,value:i(null)}),t.exports=function(t){o[n][t]=!0}},"605d":function(t,e,s){var a=s("c6b6"),i=s("da84");t.exports="process"==a(i.process)},"62e2":function(t,e,s){"use strict";s("0acd")},"9d82":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"date-picker"},[e("v-calendar",{ref:"calendar",attrs:{attributes:t.attrs,transition:"none"},on:{"update:from-page":t.handleMonthChanged}}),e("div",{staticClass:"fill-sign"},[e("div",{staticClass:"card-count"},[e("p",[t._v("补签卡")]),e("p",{staticClass:"count"},[t._v("X"+t._s(t.card))])]),e("h-button",{staticClass:"fill-btn",attrs:{loading:t.loading,disabled:t.card<=0},on:{click:t.fillSign}},[t._v("补签")])],1)],1)},i=[],r=s("5a0c"),n=s("dbbe"),o={name:"date-picker",data(){return{date:new Date}},components:{HButton:n["a"]},computed:{month:function(){return r(this.date).format("MMMM")}},methods:{handleMonthChanged(t){this.$emit("month-changed",t)},fillSign(){this.$emit("fill-sign")}},props:{attrs:{type:Array,require:!1,default:()=>({})},card:{type:Number,require:!1,default:0},loading:{type:Boolean,require:!1,default:!1}}},l=o,c=(s("62e2"),s("2877")),d=Object(c["a"])(l,a,i,!1,null,null,null),h=d.exports;e["a"]=h},a640:function(t,e,s){"use strict";var a=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&a((function(){s.call(null,e||function(){return 1},1)}))}},abb5:function(t,e,s){"use strict";s("cab2")},cab2:function(t,e,s){},cf90:function(t,e,s){},d43c:function(t,e,s){"use strict";
/*!
 Copyright 2018 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*! lifecycle.mjs v0.1.1 */let a;try{new EventTarget,a=!0}catch(i){a=!1}class i{constructor(){this.e={}}addEventListener(t,e,s=!1){this.t(t).push(e)}removeEventListener(t,e,s=!1){const a=this.t(t),i=a.indexOf(e);i>-1&&a.splice(i,1)}dispatchEvent(t){return t.target=this,Object.freeze(t),this.t(t.type).forEach(e=>e(t)),!0}t(t){return this.e[t]=this.e[t]||[]}}var r=a?EventTarget:i;class n{constructor(t){this.type=t}}var o=a?Event:n;class l extends o{constructor(t,e){super(t),this.newState=e.newState,this.oldState=e.oldState,this.originalEvent=e.originalEvent}}const c="active",d="passive",h="hidden",u="frozen",g="terminated",p="object"==typeof safari&&safari.pushNotification,v="onpageshow"in self,m=["focus","blur","visibilitychange","freeze","resume","pageshow",v?"pagehide":"unload"],f=t=>(t.preventDefault(),t.returnValue="Are you sure?"),b=t=>t.reduce((t,e,s)=>(t[e]=s,t),{}),y=[[c,d,h,g],[c,d,h,u],[h,d,c],[u,h],[u,c],[u,d]].map(b),w=(t,e)=>{for(let s,a=0;s=y[a];++a){const a=s[t],i=s[e];if(a>=0&&i>=0&&i>a)return Object.keys(s).slice(a,i+1)}return[]},C=()=>document.visibilityState===h?h:document.hasFocus()?c:d;class k extends r{constructor(){super();const t=C();this.s=t,this.i=[],this.a=this.a.bind(this),m.forEach(t=>addEventListener(t,this.a,!0)),p&&addEventListener("beforeunload",t=>{this.n=setTimeout(()=>{t.defaultPrevented||t.returnValue.length>0||this.r(t,h)},0)})}get state(){return this.s}get pageWasDiscarded(){return document.wasDiscarded||!1}addUnsavedChanges(t){!this.i.indexOf(t)>-1&&(0===this.i.length&&addEventListener("beforeunload",f),this.i.push(t))}removeUnsavedChanges(t){const e=this.i.indexOf(t);e>-1&&(this.i.splice(e,1),0===this.i.length&&removeEventListener("beforeunload",f))}r(t,e){if(e!==this.s){const s=this.s,a=w(s,e);for(let e=0;e<a.length-1;++e){const s=a[e],i=a[e+1];this.s=i,this.dispatchEvent(new l("statechange",{oldState:s,newState:i,originalEvent:t}))}}}a(t){switch(p&&clearTimeout(this.n),t.type){case"pageshow":case"resume":this.r(t,C());break;case"focus":this.r(t,c);break;case"blur":this.s===c&&this.r(t,C());break;case"pagehide":case"unload":this.r(t,t.persisted?u:g);break;case"visibilitychange":this.s!==u&&this.s!==g&&this.r(t,C());break;case"freeze":this.r(t,u)}}}var _=new k;e["a"]=_},d58f:function(t,e,s){var a=s("59ed"),i=s("7b0b"),r=s("44ad"),n=s("07fa"),o=TypeError,l=function(t){return function(e,s,l,c){a(s);var d=i(e),h=r(d),u=n(d),g=t?u-1:0,p=t?-1:1;if(l<2)while(1){if(g in h){c=h[g],g+=p;break}if(g+=p,t?g<0:u<=g)throw o("Reduce of empty array with no initial value")}for(;t?g>=0:u>g;g+=p)g in h&&(c=s(c,h[g],g,d));return c}};t.exports={left:l(!1),right:l(!0)}},d69f:function(t,e,s){"use strict";s("e317")},de5e:function(t,e,s){},e317:function(t,e,s){},ea98:function(t,e,s){"use strict";var a=s("23e7"),i=s("e330"),r=s("1d80"),n=s("5926"),o=s("577e"),l=s("d039"),c=i("".charAt),d=l((function(){return"\ud842"!=="𠮷".at(-2)}));a({target:"String",proto:!0,forced:d},{at:function(t){var e=o(r(this)),s=e.length,a=n(t),i=a>=0?a:s+a;return i<0||i>=s?void 0:c(e,i)}})},ed89:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-header"},[e("div",{staticClass:"layout-header--wrapper"},[e("div",{staticClass:"layout-header--left"},[t.isMobile?e("div",{staticClass:"logo",on:{click:t.showNotice}},[t.notices?e("div",{staticClass:"badge"},[t._v(t._s(t.notices))]):t._e(),e("img",{attrs:{src:t.logo,width:"50",alt:"logo"}})]):e("router-link",{staticClass:"logo",attrs:{to:"/"}},[e("img",{attrs:{src:t.logo,width:"50",alt:"logo"}})]),e("ul",{staticClass:"menu-list"},t._l(t.menuList,(function(s){return e("li",{key:s.text,staticClass:"menu"},[e("a",{staticClass:"link-item",attrs:{href:s.link,target:s.target}},[t._v(t._s(s.text))])])})),0),t.isMobile?t._e():e("el-popover",{attrs:{"popper-class":"global-popper",placement:"bottom",width:"350",trigger:"hover"},on:{show:t.createQrcode}},[e("div",{staticClass:"qrcode-wrapper"},[e("div",{staticClass:"android"},[e("div",{ref:"android-qrcode",staticClass:"app-qrcode"}),e("div",{staticClass:"qrcode-text"},[t._v("安卓下载")])]),e("div",{staticClass:"ios"},[e("div",{ref:"ios-qrcode",staticClass:"app-qrcode"}),e("div",{staticClass:"qrcode-text"},[t._v("IOS下载")])])]),e("div",{attrs:{slot:"reference"},slot:"reference"},[e("h-button",{staticClass:"app-download",attrs:{size:"small"}},[t._v("APP下载")])],1)]),t.isMobile?t._e():e("div",{staticClass:"search"},[e("h-input",{staticClass:"search-input",attrs:{placeholder:"搜索用户名,用户UID,帖子标题"},on:{"enter-press":t.search},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),e("h-button",{staticClass:"search-btn",attrs:{size:"mini"},on:{click:t.search}},[e("div",{domProps:{innerHTML:t._s(t.searchBtn)}})])],1)],1),e("div",{staticClass:"layout-header--right"},[t.user.uid?e("div",{staticClass:"sign"},[!1===t.signed?e("h-button",{staticClass:"sign-btn",attrs:{size:"small"},on:{click:t.sign}},[t._v("签到")]):t._e(),t.signed?[t.isMobile?e("div",{staticClass:"sign-days"},[e("div",{staticClass:"signed-days",on:{click:t.toogleMonthDate}},[t._v(t._s(t.signedDays))])]):e("el-popover",{attrs:{"popper-class":"date-picker-popper",placement:"bottom",width:"375",trigger:"hover"},on:{show:t.getMonthData},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[e("div",{staticClass:"cart"}),e("date-picker",{attrs:{attrs:t.dateAttrs,card:t.signCard,loading:t.loading},on:{"month-changed":t.monthChanged,"fill-sign":t.fillSign}}),e("div",{staticClass:"sign-days",attrs:{slot:"reference"},slot:"reference"},[e("div",{staticClass:"signed-days"},[t._v(t._s(t.signedDays))]),e("span",{staticStyle:{"margin-left":"10px"}},[t._v("已签到")])])],1)]:t._e()],2):e("h-button",{attrs:{size:"small"},on:{click:t.toLogin}},[t._v("登录")]),e("header-avatar",{attrs:{avatar:t.avatar,levelLabel:t.levelLabel,user:t.user,level:t.level,isMobile:t.isMobile,follow:t.myData.follow,fans:t.myData.fans,posts:t.myData.posts,bilibiliScore:t.bilibiliScore,douyuScore:t.douyuScore,contribution:t.user.contribution,isAdmin:t.isAdmin,isHanser:t.isHanser,nextLevel:t.nextLevel},on:{exit:t.exit}})],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showSignDialog,expression:"showSignDialog"}],staticClass:"sign-date--dialog"},[e("div",{staticClass:"close"},[e("span",[t._v("签到日历")]),e("i",{staticClass:"iconfont bg-close",on:{click:function(e){t.showSignDialog=!1}}})]),e("date-picker",{attrs:{attrs:t.dateAttrs,card:t.signCard,loading:t.loading},on:{"month-changed":t.monthChanged,"fill-sign":t.fillSign}})],1),t.isBirthday?e("div",{staticClass:"birthday-sign"},[e("div",{staticClass:"birthday-border"},[e("img",{staticClass:"border-img",attrs:{src:"https://cdn.ihan.club/birthday-border.png",alt:"",width:"300",height:"300"}}),e("div",{staticClass:"birthday-avatar"},[e("img",{staticClass:"birthday-avatar-img",attrs:{src:t.avatar,width:"100%",height:"100%",alt:t.user.nickname}})])]),e("h2",[t._v("亲爱的毛怪！今天是您的生日，祝您生日快乐！")]),e("div",{staticClass:"make-post",on:{click:t.postBirthday}},[t._v("点击此处 发布我的生日动态 >")]),e("div",{staticClass:"tip"},[t._v(" 今天不是我的生日，点击"),e("span",{staticClass:"to-alter",on:{click:t.toAlterBirthday}},[t._v("前往修改>>")])]),e("div",[e("div",{staticClass:"close",on:{click:t.closeBirthday}},[t._v("X")])])]):t._e(),t.isNewPeople?e("div",{staticClass:"people-sign"},[e("div",{staticClass:"people-border"},[e("div",{staticClass:"close",on:{click:t.closePeople}},[t._v("X")]),e("img",{staticClass:"border-img",attrs:{src:"https://cdn.ihan.club/welcome-toast.png",alt:"",width:"400"}})]),e("h2",[t._v("您已经成为毛怪俱乐部的注册会员啦！快去和大家友好互动吧～")]),e("div",{staticClass:"people-post",on:{click:function(e){return e.stopPropagation(),t.postNew.apply(null,arguments)}}},[t._v("点击此处发布新人报到帖")])]):t._e()])},i=[],r=(s("13d5"),s("33d1"),s("ea98"),s("14d9"),s("db04")),n=s("365c"),o=s("3786"),l=s("2f62"),c=function(){var t=this,e=t._self._c;return e("el-popover",{attrs:{"popper-class":"global-popper",placement:"bottom",width:"250",trigger:"hover"}},[e("div",{staticClass:"user-info"},[e("div",{staticClass:"user-info--header"},[e("div",{staticClass:"avatar"},[e("avatar",{attrs:{size:50,avatar:t.avatar,auth:t.user.auth,authentication:t.user.authentication,nickname:t.user.nickname}})],1),e("div",{staticClass:"user-info--right"},[t.levelLabel?e("level-nickname",{staticClass:"level-nickname",attrs:{uid:t.user.uid,nickname:t.user.nickname,colors:t.levelLabel.color}}):t._e()],1)]),e("div",{staticClass:"line"}),e("div",{staticClass:"user-level-exp"},[e("div",{staticClass:"user-info-level--label"},[t._v(t._s(t.level.level)+" "+t._s(t.levelLabel.name))]),e("div",{staticClass:"user-level__exp"},[t._v(t._s(t.user.exp)+"/"+t._s(t.nextLevel.exp))])]),e("el-progress",{staticClass:"progress",attrs:{"show-text":!1,percentage:t.user.exp/t.nextLevel.exp*100,"stroke-width":8}}),e("div",{staticClass:"user-data"},[e("router-link",{staticClass:"user-data--item",attrs:{to:t.postsUrl}},[e("div",{staticClass:"user-data--item__label"},[t._v("动态")]),e("div",{staticClass:"user-data--item__data"},[t._v(t._s(t.posts))])]),e("router-link",{staticClass:"user-data--item",attrs:{to:t.followUrl}},[e("div",{staticClass:"user-data--item__label"},[t._v("关注")]),e("div",{staticClass:"user-data--item__data"},[t._v(t._s(t.follow))])]),e("router-link",{staticClass:"user-data--item",attrs:{to:t.fansUrl}},[e("div",{staticClass:"user-data--item__label"},[t._v("粉丝")]),e("div",{staticClass:"user-data--item__data"},[t._v(t._s(t.fans))])])],1),e("div",{staticClass:"user-score-and-contribution"},[e("div",{staticClass:"user-score"},[t._v("我的积分: "+t._s(t.bilibiliScore+t.douyuScore))]),e("div",{staticClass:"user-contribution"},[t._v("我的贡献: "+t._s(t.contribution))])]),t.isAdmin?e("div",{staticClass:"user-operation-admin"},[t.isAdmin?e("a",{staticClass:"user-operation--item",attrs:{href:"https://puzzle.2550505.com/",target:"_blank"}},[e("i",{staticClass:"iconfont jingcai-cai icon hanser"}),e("div",{staticClass:"user-operation--item__label"},[t._v("预测")])]):t._e(),e("router-link",{staticClass:"user-operation--item",attrs:{to:"/home"}},[e("i",{staticClass:"hanser icon-gerenzhongxin icon"}),e("div",{staticClass:"user-operation--item__label"},[t._v("个人中心")])]),e("router-link",{staticClass:"user-operation--item",attrs:{to:t.userLink}},[e("i",{staticClass:"hanser icon-zhuye icon"}),e("div",{staticClass:"user-operation--item__label"},[t._v("我的主页")])]),e("div",{staticClass:"user-operation--item",on:{click:t.exit}},[e("i",{staticClass:"hanser icon-tuichu1 icon"}),e("div",{staticClass:"user-operation--item__label"},[t._v("退出")])])],1):e("div",{staticClass:"user-operation"},[e("router-link",{staticClass:"user-operation--item",attrs:{to:"/home"}},[e("i",{staticClass:"hanser icon-gerenzhongxin icon"}),e("div",{staticClass:"user-operation--item__label"},[t._v("个人中心")])]),e("router-link",{staticClass:"user-operation--item",attrs:{to:t.userLink}},[e("i",{staticClass:"hanser icon-zhuye icon"}),e("div",{staticClass:"user-operation--item__label"},[t._v("我的主页")])]),e("div",{staticClass:"user-operation--item",on:{click:t.exit}},[e("i",{staticClass:"hanser icon-tuichu1 icon"}),e("div",{staticClass:"user-operation--item__label"},[t._v("退出")])])],1)],1),t.user.uid?e("div",{staticClass:"avatar-info",attrs:{slot:"reference"},slot:"reference"},[t.isMobile?e("div",{staticClass:"avatar"},[e("avatar",{attrs:{size:50,avatar:t.avatar,auth:t.user.auth,authentication:t.user.authentication,nickname:t.user.nickname}})],1):e("router-link",{staticClass:"avatar",attrs:{to:t.userLink,target:"_blank"}},[e("avatar",{attrs:{size:50,avatar:t.avatar,auth:t.user.auth,authentication:t.user.authentication,nickname:t.user.nickname}})],1)],1):t._e()])},d=[],h=s("e51f"),u=s("c450"),g={name:"header-avatar",props:["avatar","levelLabel","user","level","nextLevel","follow","fans","posts","isMobile","bilibiliScore","contribution","isAdmin","isHanser","douyuScore"],components:{LevelNickname:h["a"],Avatar:u["a"]},computed:{followUrl(){return`/space/${this.user.uid}#follow`},fansUrl(){return`/space/${this.user.uid}#fans`},postsUrl(){return`/space/${this.user.uid}#posts`},userLink(){return"/space/"+this.user.uid}},methods:{exit(){this.$emit("exit")}}},p=g,v=(s("f1c5"),s("2877")),m=Object(v["a"])(p,c,d,!1,null,"3be64eaa",null),f=m.exports,b=s("dbbe"),y=s("6275"),w=s("9d82"),C=s("d044"),k=s.n(C),_=s("d43c"),x=s("808e");const D=new Date;let L=D.getFullYear(),S=D.getMonth()+1,$=D.getDate();const M={COMMON:0,LEVEL_UP:1,NEW:2,BIRTHDAY:3};var N={name:"main-header",data(){return{defaultAvatar:"https://cdn.ihan.club/default.png?imageView2/1/w/100/h/100",signed:null,signedDays:0,myData:{follow:0,fans:0,posts:0},signData:null,showSignDialog:!1,showPicker:!1,today:{year:0,month:0,day:0},signCard:0,cost:1e3,loading:!1,apkLink:"",iosLink:"",timer:null,searchKeyword:"",isBirthday:!1,isNewPeople:!1}},components:{HButton:b["a"],HeaderAvatar:f,DatePicker:w["a"],HInput:y["a"]},computed:{...Object(l["d"])({levels:t=>t.level.levels,levelInfo:t=>t.level.levelInfo,user:t=>t.users.userInfo,isMobile:t=>t.media.isMobile,bilibiliScores:t=>t.score.bilibili,douyuScores:t=>t.score.douyu,notice:t=>t.notice.notice,followUnread:t=>t.notice.followUnread,theme:t=>t.config.theme}),...Object(l["b"])("users",{isAdmin:"isAdmin",isHanser:"isHanser"}),searchBtn(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.ihan.club/new-yaer/new-year-2023-search.png" width="18" alt="搜索" />';default:return'<i class="hanser icon-sousuo1"></i>'}},logo(){switch(this.theme){case"new-year-2023":return"https://cdn.ihan.club/new-yaer/new-year-2023-logo.png?imageView2/1/w/100/h/100";default:return"https://cdn.ihan.club/logo.png?imageView2/1/w/100/h/100"}},bilibiliScore(){return this.bilibiliScores.length?this.bilibiliScores.map(t=>t.point).reduce((t,e)=>t+e):0},douyuScore(){return this.douyuScores.length?this.douyuScores.map(t=>t.point).reduce((t,e)=>t+e):0},avatar(){return this.user.avatar||this.defaultAvatar},level(){const{exp:t}=this.user;let e=this.levels[0];return this.levels.forEach(s=>{s.exp<=t&&s.level>e.level&&(e=s)}),e},nextLevel(){const t=this.levels.find(t=>t.level===this.level.level+1);return t},levelLabel(){const t=this.levels.find(t=>t.level===this.level.level);return t},labelStyle(){const t=this.levelLabel.label_color||"#ccc";return"background-color: "+t},menuList(){return this.isMobile?[{text:"首页",link:"/",target:"_self"},{text:"直播",link:"https://song.2550505.com/livestreams",target:"_blank"}]:[{text:"首页",link:"/",target:"_self"},{text:"直播记录",link:"https://song.2550505.com/livestreams",target:"_blank"},{text:"直播歌单",link:"https://song.2550505.com/music",target:"_blank"}]},notices(){const t=this.notice.likes+this.notice.replies+this.notice.at+this.notice.notice+this.notice.message+this.followUnread;return t>99?"99+":t},dateAttrs(){const t=[];let e={};const s=this.signData||[];for(const a of s)e=L===this.today.year&&S===this.today.month&&Number(a.day)===this.today.day?{contentStyle:{color:x["i"]}}:{},a.signed?t.push({highlight:Object.assign({fillMode:"solid",style:{"background-color":x["h"]}},e),dates:new Date(L,S-1,a.day)}):t.push({highlight:{fillMode:"solid",style:{"background-color":x["a"]},contentStyle:{color:x["l"]}},dates:new Date(L,S-1,a.day)});return t}},watch:{"$route.hash"(t){const e=this.notice;switch(t){case"#like":e.likes=0;break;case"#reply":e.replies=0;break;case"#at":e.at=0;break;case"#notice":e.notice=0;break}this.setNotice(e)}},methods:{...Object(l["c"])({addUserExp:"users/addUserExp",setNotice:"notice/setNotice",setFollowUnread:"notice/setFollowUnread",changeUserInfo:"users/changeUserInfo",setLevelInfo:"level/setLevelInfo"}),sign(){r["a"].get(n["a"].sign).then(t=>{0===t.code?(this.addUserExp(t.exp),this.isBirthday=t.isBirthday,t.special?this.$alert(t.special.congratulations+"经验 +"+t.special.exp,"提示",{confirmButtonText:"确定",callback:()=>{}}):this.$message({type:"success",message:`${t.msg},经验+${t.exp}`}),r["a"].get(n["a"].signedDays).then(t=>{this.signedDays=t.day,this.signed=!0})):this.$message({type:"warning",message:t.msg})})},closeBirthday(){this.isBirthday=!1},toAlterBirthday(){this.$router.push("/home")},postBirthday(){r["a"].post(n["a"].autoHansering,{type:M.BIRTHDAY}).then(t=>{0===t.code?this.$router.push("/postDetails/"+t.id):this.$message({type:"warning",message:t.msg}),this.isBirthday=!1})},postNew(){r["a"].post(n["a"].autoHansering,{type:M.NEW}).then(t=>{0===t.code?this.$router.push("/postDetails/"+t.id):this.$message({type:"warning",message:t.msg}),this.isNewPeople=!1})},exit(){this.$confirm("是否退出登录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{r["a"].post(o["a"].loginOut).then(t=>{if(0===t.code){this.$message({type:"success",message:"已退出"}),this.changeUserInfo({}),this.setLevelInfo({}),this.myData.follow=0,this.myData.fans=0,this.myData.posts=0;const t=this.notice;t.likes=0,t.replies=0,t.at=0,t.notice=0,t.message=0,t.chats=0,this.setNotice(t),this.$router.replace("/")}else this.$message({type:"warning",message:t.msg})})}).catch(()=>{this.$message({type:"warning",message:"已取消退出"})})},toLogin(){this.$router.replace("/login")},showNotice(){this.$showNotice(this.notice)},async monthChanged(t){if(!this.showPicker&&!this.isMobile)return;L=t.year,S=t.month;const e=await r["a"].get(n["a"].signData,{params:{year:L,month:S}});0===e.code&&(this.signData=e.list)},fillSign(){this.loading?this.$message({type:"warning",message:"操作太频繁~"}):this.signCard>0&&(this.loading=!0,r["a"].post(n["a"].signFill).then(async t=>{const[e,s,a]=await Promise.all([r["a"].get(n["a"].signedDays),r["a"].get(n["a"].signData,{params:{year:L,month:S}}),r["a"].get(n["a"].signCard)]);0===s.code&&(this.signData=s.list),this.signedDays=e.day,this.signCard=a.count,this.loading=!1,this.$message({type:"success",message:t.msg})}))},toogleMonthDate(){this.showSignDialog=!this.showSignDialog,this.showSignDialog&&this.getMonthData()},async getMonthData(){this.today.year=L,this.today.month=S;const[t,e]=await Promise.all([r["a"].get(n["a"].signData,{params:{year:L,month:S}}),r["a"].get(n["a"].signCard)]);this.signData=t.list,this.signCard=e.count},createQrcode(){this.isMobile||this.apkLink||r["a"].get(n["a"].appVersion).then(t=>{0===t.code&&(this.apkLink=t.android,this.iosLink=t.ios,new k.a(this.$refs["android-qrcode"],{text:this.apkLink,width:100,height:100,colorDark:"#000000",colorLight:"#ffffff",correctLevel:k.a.CorrectLevel.H}),new k.a(this.$refs["ios-qrcode"],{text:this.iosLink,width:100,height:100,colorDark:"#000000",colorLight:"#ffffff",correctLevel:k.a.CorrectLevel.H}))})},updateNotice(){r["a"].get(n["a"].noticeCount).then(t=>{0===t.code&&this.setNotice(t.count)})},search(){this.$showSearchDialog({keyword:this.searchKeyword})},closePeople(){this.isNewPeople=!1},postInfo(){}},async mounted(){if(!this.user.uid)return;this.today.year=L,this.today.month=S,this.today.day=$;const t={uid:this.user.uid},[e,s,a,i,o]=await Promise.all([r["a"].get(n["a"].signed),r["a"].get(n["a"].signedDays),r["a"].get(n["a"].dataCount,{params:t}),r["a"].get(n["a"].noticeCount),r["a"].get(n["a"].myFollowUnread)]);switch(this.signed=e.signed,this.signedDays=s.day,this.myData.follow=a.data.follow,this.myData.fans=a.data.fans,this.myData.posts=a.data.post,this.$route.hash){case"#like":i.count.likes=0;break;case"#reply":i.count.replies=0;break;case"#at":i.count.at=0;break;case"#notice":i.count.notice=0;break}this.setNotice(i.count),"/my-follow"===this.$route.path?this.setFollowUnread(0):this.setFollowUnread(o.total),this.timer=setInterval(this.updateNotice,6e4),_["a"].addEventListener("statechange",t=>{"passive"!=t.oldState&&"active"!=t.oldState||"hidden"!=t.newState||!this.timer?"passive"!=t.newState&&"active"!==t.newState||this.timer||(this.timer=setInterval(this.updateNotice,6e4)):clearInterval(this.timer)}),this.$route.params.isNewPeople&&(this.isNewPeople=this.$route.params.isNewPeople)},beforeDestroy(){this.timer&&clearInterval(this.timer)}},E=N,A=(s("1abe"),s("d69f"),s("abb5"),Object(v["a"])(E,a,i,!1,null,"5c406e32",null));e["a"]=A.exports},f1c5:function(t,e,s){"use strict";s("de5e")}}]);