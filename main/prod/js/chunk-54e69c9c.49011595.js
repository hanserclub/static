(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54e69c9c"],{"0df1":function(t,e,s){},"13d5":function(t,e,s){"use strict";var i=s("23e7"),a=s("d58f").left,n=s("a640"),o=s("2d00"),c=s("605d"),r=n("reduce"),h=!c&&o>79&&o<83;i({target:"Array",proto:!0,forced:!r||h},{reduce:function(t){var e=arguments.length;return a(this,t,e,e>1?arguments[1]:void 0)}})},"2f2f":function(t,e,s){},"349c":function(t,e,s){"use strict";s("2f2f")},"605d":function(t,e,s){var i=s("c6b6"),a=s("da84");t.exports="process"==i(a.process)},7179:function(t,e,s){"use strict";s("0df1")},7853:function(t,e,s){},"8fbc":function(t,e,s){"use strict";s("7853")},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){return 1},1)}))}},ad45:function(t,e,s){"use strict";s("be44")},be44:function(t,e,s){},cec2:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"layout-message--title"},[e("div",{domProps:{innerHTML:t._s(t.messageIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("消息中心")])]),e("ul",{staticClass:"layout-message--menu"},t._l(t.noticeMenu,(function(s){return e("li",{key:s.hash,staticClass:"layout-message--menu--item"},[e("router-link",{staticClass:"link",class:{active:t.$route.hash===s.hash},attrs:{to:"/notice"+s.hash}},[e("span",{staticClass:"notice-menu-item"},[t._v(t._s(s.text))]),t.notice[s.key]?e("div",{staticClass:"badge"},[t._v(t._s(t.noticeNum(t.notice[s.key])))]):t._e()])],1)})),0),e("div",{staticClass:"divider"}),t.user.uid?e("router-link",{staticClass:"link",class:{active:"/score"===t.$route.path},attrs:{to:"/score"}},[e("div",{domProps:{innerHTML:t._s(t.scoreIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("积分中心")])]):t._e(),t.user.uid?e("router-link",{staticClass:"link",class:{active:"/contribution-exchange"===t.$route.path},attrs:{to:"/contribution-exchange"}},[e("i",{staticClass:"iconfont gongxian icon"}),e("span",{staticClass:"layout-message--title__text"},[t._v("贡献中心")])]):t._e(),t.isScoreManager?e("router-link",{staticClass:"link",class:{active:"/manager"===t.$route.path},attrs:{to:"/manager"}},[e("i",{staticClass:"iconfont fenghuangxiangmutubiao_quanxian icon"}),e("span",{staticClass:"layout-message--title__text"},[t._v("管理后台")])]):t._e(),e("div",{staticClass:"divider"}),e("router-link",{staticClass:"link",class:{active:"/my-follow"===t.$route.path},attrs:{to:"/my-follow"}},[e("div",{domProps:{innerHTML:t._s(t.followIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("我关注的")]),t.followUnread?e("div",{staticClass:"badge"},[t._v(t._s(t.noticeNum(t.followUnread)))]):t._e()]),e("router-link",{staticClass:"link",class:{active:"/my-like"===t.$route.path},attrs:{to:"/my-like"}},[e("div",{domProps:{innerHTML:t._s(t.likedIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("我赞过的")])]),e("router-link",{staticClass:"link",attrs:{to:t.myFavoriteLink}},[e("div",{domProps:{innerHTML:t._s(t.favoritedIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("我收藏的")])]),e("div",{staticClass:"divider"}),e("router-link",{staticClass:"link",class:{active:"/hot-recommends"===t.$route.path},attrs:{to:"/hot-recommends"},nativeOn:{click:function(e){return t.refreshRoute.apply(null,arguments)}}},[e("div",{domProps:{innerHTML:t._s(t.recommendIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("热门推荐")])]),e("a",{staticClass:"link",class:{active:"/"===t.$route.path},attrs:{href:"/"}},[e("div",{domProps:{innerHTML:t._s(t.allPostsIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("全部帖子")])]),e("div",{staticClass:"divider"}),e("router-link",{staticClass:"link",attrs:{to:"/to-be-continued"}},[e("div",{domProps:{innerHTML:t._s(t.topicIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("全部话题")])]),e("router-link",{staticClass:"link",attrs:{to:"/to-be-continued"}},[e("div",{domProps:{innerHTML:t._s(t.groupIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("全部专栏")])])],1)},a=[],n=(s("14d9"),s("db04")),o=s("365c"),c=s("2f62"),r={name:"sidebar",data(){return{noticeMenu:[{text:"回复我的",hash:"#reply",key:"replies"},{text:"提到我的",hash:"#at",key:"at"},{text:"收到的赞",hash:"#like",key:"likes"},{text:"站务通知",hash:"#notice",key:"notice"},{text:"我的消息",hash:"#chat",key:"message"},{text:"系统设置",hash:"#setting",key:"setting"}],myData:{follow:0,fans:0,posts:0}}},computed:{...Object(c["d"])({levels:t=>t.level.levels,levelInfo:t=>t.level.levelInfo,user:t=>t.users.userInfo,followUnread:t=>t.notice.followUnread,notice:t=>t.notice.notice,theme:t=>t.config.theme}),...Object(c["b"])("users",{isAdmin:"isAdmin",isHanser:"isHanser",isScoreManager:"isScoreManager"}),myFavoriteLink(){return`/space/${this.user.uid}#favorite`},messageIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-message.png" width="18" height="16" alt="消息中心" />';default:return'<i class="hanser icon-xinxi1 icon"></i>'}},scoreIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-score.png" width="18" height="16" alt="积分中心" />';default:return'<i class="iconfont zhuanjifen icon"></i>'}},followIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-follow.png" width="18" height="16" alt="我关注的" />';default:return'<i class="hanser icon-wodeguanzhu icon"></i>'}},likedIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-liked.png" width="18" height="16" alt="我赞过的" />';default:return'<i class="hanser icon-dianzan icon"></i>'}},favoritedIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-favorited.png" width="18" height="16" alt="我收藏的" />';default:return'<i class="hanser icon-shoucang icon"></i>'}},recommendIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-recommand.png" width="18" height="16" alt="热门推荐" />';default:return'<i class="hanser icon-remen1 icon"></i>'}},allPostsIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-all-posts.png" width="18" height="16" alt="全部帖子" />';default:return'<i class="hanser icon-quanbutiezi icon"></i>'}},topicIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-topic.png" width="18" height="16" alt="全部话题" />';default:return'<i class="hanser icon-huati icon"></i>'}},groupIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-group.png" width="18" height="16" alt="全部专栏" />';default:return'<i class="hanser icon-quanbuzhuanlan icon"></i>'}}},watch:{"$route.hash"(t){const e=this.noticeMenu.find(e=>e.hash===t);e&&this.notice[e.key]&&(this.notice[e.key]=0)}},methods:{noticeNum(t){return t<99?t:"99+"},refreshRoute(){this.$router.push({query:{t:Date.now()}})}},async mounted(){const t=await n["a"].get(o["a"].dataCount,{params:{uid:this.user.uid}});0===t.code&&(this.myData.follow=t.data.follow,this.myData.fans=t.data.fans,this.myData.posts=t.data.post)}},h=r,l=(s("349c"),s("2877")),d=Object(l["a"])(h,i,a,!1,null,"132c980c",null);e["a"]=d.exports},d58f:function(t,e,s){var i=s("59ed"),a=s("7b0b"),n=s("44ad"),o=s("07fa"),c=TypeError,r=function(t){return function(e,s,r,h){i(s);var l=a(e),d=n(l),u=o(l),g=t?u-1:0,m=t?-1:1;if(r<2)while(1){if(g in d){h=d[g],g+=m;break}if(g+=m,t?g<0:u<=g)throw c("Reduce of empty array with no initial value")}for(;t?g>=0:u>g;g+=m)g in d&&(h=s(h,d[g],g,l));return h}};t.exports={left:r(!1),right:r(!0)}},ed3a:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout"},[e("main-header"),e("div",{ref:"layout-body",staticClass:"layout-body"},[e("div",{staticClass:"layout-wrapper"},[t.isMobile?t._e():e("sidebar"),e("router-view",{attrs:{sort:t.sort},on:{"back-top":t.locateToTop,getPostData:t.getPostData,"change-sort":t.changeSort}})],1)]),t.isMobile?t.user.uid&&t.isIndex?e("div",{staticClass:"fast-operation"},[t.guessInfo&&t.guessInfo.info?e("div",{staticClass:"guess"},[e("a",{style:{display:"flex"},attrs:{href:t.guessingRoot.domain,target:"_blank"}},[e("img",{attrs:{src:"https://cdn.2550505.com/share/legacy-sso/entry.svg",width:"32",height:"32",alt:"预测"}})])]):t._e(),e("div",{staticClass:"chat",on:{click:t.showPublicChat}},[e("i",{staticClass:"iconfont shuyi_qunliao"})]),e("div",{staticClass:"chat",on:{click:t.showChat}},[t.notice.chats?e("div",{staticClass:"badge"},[t._v(t._s(t.noticeNum(t.notice.chats)))]):t._e(),e("i",{staticClass:"iconfont pinglun"})]),e("div",{staticClass:"to-post",on:{click:t.showEditor}},[e("i",{staticClass:"hanser icon-fatie"})])]):t.user.uid&&t.isPostDetail?e("div",{staticClass:"fast-operation"},[e("div",{staticClass:"chat",on:{click:t.showChat}},[t.notice.chats?e("div",{staticClass:"badge"},[t._v(t._s(t.noticeNum(t.notice.chats)))]):t._e(),e("i",{staticClass:"iconfont pinglun"})]),e("div",{staticClass:"to-post",on:{click:t.showPostEditor}},[e("i",{staticClass:"hanser icon-fatie"})])]):t._e():e("div",{staticClass:"fast-operation"},[t.user.uid?e("div",{staticClass:"chat",on:{click:t.showPublicChat}},[e("i",{staticClass:"iconfont shuyi_qunliao"})]):t._e(),t.user.uid?e("div",{staticClass:"chat",on:{click:t.showChat}},[t.notice.chats?e("div",{staticClass:"badge"},[t._v(t._s(t.noticeNum(t.notice.chats)))]):t._e(),e("div",{domProps:{innerHTML:t._s(t.chatIcon)}})]):t._e(),e("div",{staticClass:"to-theme"},[e("el-popover",{ref:"theme",attrs:{"popper-class":"theme-select",placement:"left",width:"100",trigger:"click"}},[e("div",{staticClass:"themes"},[e("h-button",{class:{selected:"light"===t.theme},attrs:{plain:""},on:{click:function(e){return t.changeTheme("light")}}},[t._v("正常模式")]),e("h-button",{class:{selected:"dark"===t.theme},attrs:{plain:""},on:{click:function(e){return t.changeTheme("dark")}}},[t._v("暗夜模式")]),e("h-button",{class:{selected:"new-year-2022"===t.theme},attrs:{plain:""},on:{click:function(e){return t.changeTheme("new-year-2022")}}},[t._v("2022新年主题")]),e("h-button",{class:{selected:"new-year-2023"===t.theme},attrs:{plain:""},on:{click:function(e){return t.changeTheme("new-year-2023")}}},[t._v("2023新年主题")]),e("h-button",{class:{selected:"new-year-2024"===t.theme},attrs:{plain:""},on:{click:function(e){return t.changeTheme("new-year-2024")}}},[t._v("2024新年主题")])],1),e("div",{staticClass:"to-sort",attrs:{slot:"reference"},slot:"reference"},[e("i",{staticClass:"iconfont theme"})])])],1),t.showSort?e("div",{staticClass:"to-sort"},[e("el-popover",{ref:"sort",attrs:{placement:"left",width:"100",trigger:"click"}},[e("div",{staticClass:"sort"},[e("h-button",{class:{selected:0===t.sort},attrs:{plain:""},on:{click:function(e){return t.changeSort(0)}}},[t._v("按最后回复排序")]),e("h-button",{class:{selected:1===t.sort},attrs:{plain:""},on:{click:function(e){return t.changeSort(1)}}},[t._v("按发帖时间排序")])],1),e("div",{staticClass:"to-sort",attrs:{slot:"reference"},slot:"reference"},[e("div",{domProps:{innerHTML:t._s(t.sortIcon)}})])])],1):t._e(),e("div",{staticClass:"to-top",on:{click:t.locateToTop}},[e("div",{domProps:{innerHTML:t._s(t.topIcon)}})]),e("div",{staticClass:"to-post",on:{click:t.locateToEditor}},[e("div",{domProps:{innerHTML:t._s(t.editIcon)}})])]),e("div",{staticClass:"auth"},[e("span",{staticClass:"author"},[t._v("Copyright hanserLIVE弹幕组版权所有 ©2019-"+t._s(t.year)+"毛怪俱乐部")]),t._m(0)]),e("el-image",{ref:"showing-img",staticClass:"showing-img",attrs:{src:t.firstPicture,width:"0",height:"0","preview-src-list":t.showingPictures}}),e("chats"),e("public-chat")],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-code"},[e("img",{attrs:{width:"14",height:"14",src:"https://cdn.2550505.com/share/legacy-sso/beian-icon.png",alt:""}}),e("span",{staticClass:"code"},[t._v("粤公网安备44030902003215号")]),e("a",{staticClass:"code",attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("粤ICP备2021176720号-1")])])}],n=s("2f62"),o=s("cec2"),c=s("ed89"),r=s("dbbe"),h=s("7846"),l=function(){var t=this,e=t._self._c;return t.showChat?e("div",{staticClass:"public-chat"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"chat-header"},[e("div",{staticClass:"chat-group-name"},[t._v("公共频道")]),e("div",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"iconfont yuyinguanbi"})])]),e("div",{staticClass:"content-and-editor"},[e("div",{ref:"chating-window--content",staticClass:"chating-window--content"},[t.historyMessageLoadDone?t._e():e("div",{ref:"load-more",staticClass:"load-more"},[e("i",{staticClass:"el-icon-loading"})]),t._l(t.messageList,(function(s){return[2===s.type?[s.sender.uid===t.user.uid?e("self-chat",{key:s.id,ref:"chat"+s.id,refInFor:!0,class:"chat"+s.id,attrs:{user:t.myUserInfo,message:s,levels:t.levels,time:s.time},on:{withdraw:t.withdraw}}):s.sender.uid?e("other-chat",{key:s.id+"other",ref:"chat"+s.id,refInFor:!0,class:"chat"+s.id,attrs:{isAdmin:t.isAdmin,user:s.sender,message:s,levels:t.levels,time:s.time},on:{withdraw:t.withdraw}}):t._e()]:1===s.type?e("div",{key:s.id,staticClass:"withdraw-msg",class:"chat"+s.id},[t._v(" "+t._s(s.operator.uid===s.sender.uid?s.sender.nickname+" 撤回了一条消息":"管理员 撤回了一条成员消息")+" "),t.isAdmin?e("div",{staticClass:"show-message",on:{click:function(e){return t.showMessage(s.id)}}},[t._v("查看")]):t._e()]):s.sender.uid===t.user.uid?e("self-chat",{key:s.id+"self",ref:"chat"+s.id,refInFor:!0,class:"chat"+s.id,attrs:{user:t.myUserInfo,message:s,levels:t.levels,time:s.time},on:{withdraw:t.withdraw}}):s.sender.uid?e("other-chat",{key:s.id+"other",ref:"chat"+s.id,refInFor:!0,class:"chat"+s.id,attrs:{isAdmin:t.isAdmin,user:s.sender,message:s,levels:t.levels,time:s.time},on:{withdraw:t.withdraw}}):t._e()]}))],2),e("div",{staticClass:"chating-window--editor",style:t.heightStyle},[e("div",{staticClass:"expand-input",style:t.rotateStyle,on:{click:t.expandInput}},[e("i",{staticClass:"hanser icon-fanhuidingduan"})]),e("editor",{ref:"editor",staticClass:"post-editor",attrs:{height:t.inputHeight},on:{post:t.sendChat}})],1)])])]):t._e()},d=[],u=(s("14d9"),s("db04")),g=s("365c"),m=s("d800"),p=s("e914"),w=s("ed08"),v=s.n(w),f=s("daa8"),y=s("be6f"),C=s("2d28"),k=s("97f6"),_=s("d43c"),b={name:"public-chat",data(){return{showChat:!1,socket:null,inputHeight:100,messageList:[],historyMessageLoadDone:!1,historyMessageLoading:!1,newMessageLoadDone:!1,newMessageLoading:!1,timer:null,token:"",lastExitTime:"",chatWin:null}},components:{Editor:p["a"],SelfChat:C["a"],OtherChat:k["a"]},methods:{init(){this.messageList=[],this.historyMessageLoadDone=!1,this.historyMessageLoading=!1,this.newMessageLoadDone=!1,this.newMessageLoading=!1,this.timer=null,this.chatWin=null},close(){this.socket&&this.socket.disconnect(),this.showChat=!1},expandInput(){this.inputHeight=200-this.inputHeight+100},sendChat(t){t.content?(this.$refs["editor"].clear(),this.socket.emit("send-public-message-1",t.content)):this.$message({type:"warning",message:"内容不能为空"})},locateToBottom(){this.chatWin&&(this.chatWin.scrollTop=this.chatWin.scrollHeight+10)},async getHistoryMessage(){if(this.historyMessageLoading)return;this.historyMessageLoading=!0;const t=this.messageList.length?this.messageList[0].id:0;await u["a"].get(m["a"].groupHistory,{params:{group:1,id:t}}).then(async t=>{if(0===t.code){const e=this.messageList.length;if(e){const e=this.messageList[0].id,s=document.getElementsByClassName("chat"+e)[0];this.messageList=[...t.list,...this.messageList],await this.$nextTick(),s&&s.scrollIntoView()}else this.messageList=[...t.list,...this.messageList];if(this.token=t.token,t.list.length<20?this.historyMessageLoadDone=!0:this.historyMessageLoadDone=!1,this.socket){if(!e&&(this.chatWin=document.getElementsByClassName("chating-window--content")[0],this.chatWin)){const t=this.chatWin.getElementsByTagName("img"),e=[...t].map(t=>t.src);await v.a.imagesLoadDone(e),this.locateToBottom()}}else{if(this.chatWin=document.getElementsByClassName("chating-window--content")[0],this.chatWin){const t=this.chatWin.getElementsByTagName("img"),e=[...t].map(t=>t.src);await v.a.imagesLoadDone(e),this.locateToBottom()}this.linkToChat()}}else this.$message({type:"warning",message:t.msg});this.historyMessageLoading=!1})},getNewestMessage({page:t,pageSize:e}){const s=this.messageList.length?this.messageList[this.messageList.length-1].id:0;this.newMessageLoading||(this.newMessageLoading=!0,u["a"].get(m["a"].groupNewest,{params:{group:1,id:s,page:t||1,pageSize:e||20}}).then(async t=>{0===t.code?(t.list.length<e?this.newMessageLoadDone=!0:this.newMessageLoadDone=!1,this.messageList=[...this.messageList,...t.list],this.newMessageLoadDone||(this.messageList=this.messageList.sort((t,e)=>t.id-e.id))):this.$message({type:"warning",message:t.msg}),this.newMessageLoading=!1}))},linkToChat(){this.socket=Object(f["a"])(`${y.PROTOCAL}://${y.IP}/public`,{reconnectionDelayMax:1e4,path:"/socket.io",transports:["websocket"],secure:!0,auth:{token:this.token,uid:this.user.uid}}),this.socket.on("disconnect",()=>{console.log("disconnect")}),this.socket.on("exception-"+this.user.uid,t=>{this.$alert(t,"提示",{type:"error"})}),this.socket.on("receive-public-message-1",async t=>{this.messageList.push(t),await this.$nextTick();const e=document.getElementsByClassName("chat"+t.id)[0];if(e){const t=e.getElementsByClassName("message-content")[0].getElementsByTagName("img"),s=[...t].map(t=>t.src);s.length&&await v.a.imagesLoadDone(s)}const s=this.chatWin.scrollHeight-this.chatWin.scrollTop-this.chatWin.clientHeight-e.clientHeight-40;s<10&&this.locateToBottom()}),this.socket.on("receive-whithdraw-public-message-1",async t=>{const{id:e,uid:s}=t,i=this.messageList.find(t=>t.id===e);i&&(i.type=1,i.operator={uid:s})})},withdraw(t){this.socket.emit("whithdraw-public-message-1",t,this.user.uid)},showMessage(t){u["a"].get(m["a"].showGroupMessage,{params:{group:1,id:t}}).then(e=>{if(0===e.code){const s=this.messageList.find(e=>e.id===t);s.type=e.data.type,s.content=e.data.content}else this.$message({type:"warning",message:e.msg})})},async serverTime(){const t=await u["a"].get(g["a"].appTime);return 0===t.code?t.time:""},async getNewMessageCount(){const t=this.messageList.length,e=t?this.messageList[t-1].id:0,s=await u["a"].get(m["a"].groupMessageCount,{params:{group:1,id:e}});return 0===s.code?s.count:0}},mounted(){window.addEventListener("open-public-chat",async()=>{this.init(),this.showChat=!0,this.getHistoryMessage(),await this.$nextTick(),_["a"].addEventListener("statechange",async t=>{if("passive"!=t.oldState&&"active"!=t.oldState||"hidden"!=t.newState||!this.socket){if("hidden"==t.oldState&&("passive"==t.newState||"active"===t.newState)&&this.showChat){this.socket.connect();const t=await this.serverTime(),e=18e5,s=200;if(v.a.dateInrange(this.lastExitTime,t,e)){const t=await this.getNewMessageCount();t>s?(this.init(),await this.$nextTick(),this.getHistoryMessage()):this.getNewestMessage({page:1,pageSize:s})}else this.init(),await this.$nextTick(),this.getHistoryMessage()}}else this.lastExitTime=await this.serverTime(),this.socket.disconnect()});const t=new IntersectionObserver(t=>{t[0].intersectionRatio&&(this.historyMessageLoadDone||this.getHistoryMessage())}),e=this.$refs["load-more"];t.observe(e)})},beforeDestroy(){this.socket&&this.socket.disconnect()},computed:{...Object(n["d"])({user:t=>t.users.userInfo,levels:t=>t.level.levels,isMobile:t=>t.media.isMobile}),...Object(n["b"])("users",{isAdmin:"isAdmin"}),isLogin(){return!!this.user.uid},heightStyle(){return`height: ${this.inputHeight+100}px`},rotateStyle(){return`transform: rotate(${180*(this.inputHeight>>7&1)}deg)`},myUserInfo(){return{uid:this.user.uid,nickname:this.user.nickname,avatar:this.user.avatar,auth:this.user.auth,authentication:this.user.authentication}},lastMessageId(){return this.chatingMessage.length?this.chatingMessage[0].id:0}}},L=b,M=(s("7179"),s("2877")),I=Object(M["a"])(L,l,d,!1,null,"575438f1",null),T=I.exports,x=s("3b81"),P={name:"layout",data(){return{guessingRoot:x,body:document.querySelector("body"),showingPictures:[],firstPicture:"",sort:0,year:(new Date).getFullYear(),defaultAvatar:"https://cdn.2550505.com/share/legacy-sso/thumbnail.default.png",postData:{},theme:window.localStorage.getItem("theme")||"light"}},components:{MainHeader:c["a"],Sidebar:o["a"],HButton:r["a"],Chats:h["a"],PublicChat:T},methods:{showPublicChat(){if(!this.user.uid)return void this.$message({type:"warning",message:"请登录后使用"});const t=new CustomEvent("open-public-chat",{detail:{}});window.dispatchEvent(t)},locateToEditor(){const t=document.getElementsByClassName("post-editor")[0];t.scrollIntoView()},locateToTop(){const t=document.getElementsByClassName("layout-body")[0];t.scrollTop=0},changeSort(t){this.sort=t,window.localStorage.setItem("sort",this.sort),this.isMobile||(this.$refs.sort.showPopper=!1)},showEditor(){this.$showEditor("发布帖子")},showPostEditor(){var t;null!==(t=this.postData)&&void 0!==t&&t.currentPostId?this.$showPostEditor("发表回复",this.postData):this.$message({type:"warning",message:"操作太快了~请稍后重试"})},getPostData(t){this.postData=t},showChat(){const t=new CustomEvent("open-chat",{detail:{uid:0}});window.dispatchEvent(t)},noticeNum(t){return t<99?t:"99+"},changeTheme(t){this.theme=t;const e=new CustomEvent("change-theme",{detail:{theme:t}});window.dispatchEvent(e),this.$refs.theme.showPopper=!1},handlePicturesShown(t){if(t.target.classList.contains("upload-img")){const e=t.target.parentNode,s=e.getElementsByClassName("upload-img");this.firstPicture=t.target.getAttribute("src"),this.showingPictures=[...s].map(t=>t.getAttribute("src")),this.$refs["showing-img"].showViewer=!0}}},created(){this.sort=Number(window.localStorage.getItem("sort"))},computed:{...Object(n["d"])({levels:t=>t.level.levels,levelInfo:t=>t.level.levelInfo,user:t=>t.users.userInfo,isMobile:t=>t.media.isMobile,notice:t=>t.notice.notice,guessInfo:t=>t.guess.guessInfo}),avatar(){return this.user.avatar||this.defaultAvatar},level(){const{exp:t}=this.user;let e=this.levels[0];return this.levels.forEach(s=>{s.exp<=t&&s.level>e.level&&(e=s)}),e},nextLevel(){const t=this.levels.find(t=>t.level===this.level.level+1);return t},levelLabel(){const t=this.levels.find(t=>t.level===this.level.level);return t},labelStyle(){const t=this.levelLabel.label_color||"#ccc";return"background-color: "+t},showSort(){const t=["/"];return t.includes(this.$route.path)&&""===this.$route.hash&&this.user.uid},isIndex(){return"mainIndex"===this.$route.name},isPostDetail(){return"post-details"===this.$route.name},chatIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-chat.png" width="16" height="16" alt="私信" />';default:return'<i class="iconfont pinglun"></i>'}},sortIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-sort.png" width="16" height="16" alt="排序" />';default:return'<i class="hanser icon-paixu1"></i>'}},topIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-top.png" width="16" height="16" alt="回到顶部" />';default:return'<i class="hanser icon-fanhuidingduan"></i>'}},editIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-edit.png" width="16" height="16" alt="发帖" />';default:return'<i class="hanser icon-fatie"></i>'}}},mounted(){document.addEventListener("click",this.handlePicturesShown,!1)},beforeDestroy(){document.removeEventListener("click",this.handlePicturesShown)},watch:{"$route.path"(){this.locateToTop()}}},$=P,E=(s("8fbc"),s("ad45"),Object(M["a"])($,i,a,!1,null,"c27da360",null));e["default"]=E.exports}}]);