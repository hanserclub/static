(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b1603f5"],{"11a4":function(t,e,s){"use strict";var a=function(){var t,e=this,s=e._self._c;return s("div",{staticClass:"post-brief",attrs:{brief:e.brief}},[e.brief?e._e():s("div",{staticClass:"top"},[s("post-user",{attrs:{avatar:e.post.author.avatar,size:50,auth:e.post.author.auth,authentication:e.post.author.authentication,nickname:e.post.author.nickname,uid:e.post.author.uid,colors:e.levelLabel.color,level:e.level}},[s("template",{slot:"bottom"},[s("span",{staticClass:"post-time"},[e._v(e._s(e.postTime))])])],2),e.isMobile?e._e():e._t("right-top")],2),s("div",{staticClass:"content"},[s("post-content",{attrs:{title:e.post.title,content:e.post.content,labels:e.post.labels,pictures:e.post.pictures,author:e.post.author,"primary-pictures":e.post.primaryPictures,videos:e.post.videos,isMobile:e.isMobile,brief:e.brief,type:e.post.type,id:e.post.id,vote:null===(t=e.post)||void 0===t?void 0:t.vote}})],1),e.showHanserAction&&e.isLogin&&!e.brief?s("div",{staticClass:"hanser-action"},[e.post.hanserReply?s("div",{staticClass:"hanser-reply"},[s("icon",{attrs:{icon:"hanser icon-huifu"}}),e._v(" hanser回复过")],1):e._e(),e.post.hanserLike&&!e.post.hanserReply?s("div",{staticClass:"hanser-like"},[s("icon",{attrs:{icon:"hanser icon-dianzan"}}),e._v(" hanser赞过 ")],1):e._e()]):e._e(),e.brief?e._e():s("div",{staticClass:"bottom"},[s("ul",{staticClass:"tags",class:{"no-tags":!e.post.tags||!e.post.tags.length}},e._l(e.post.tags,(function(t){return s("li",{key:t.tagId,staticClass:"tag"},[s("router-link",{staticClass:"tag-link",attrs:{to:"/tag/"+t.tagId}},[e._v("#"+e._s(t.tagName))])],1)})),0),e.isLogin?s("div",{staticClass:"datas"},[s("div",{staticClass:"readings"},[s("div",{staticClass:"icon"},[s("div",{domProps:{innerHTML:e._s(e.readingsIcon)}})]),s("div",{staticClass:"data"},[e._v(e._s(e.post.readings))])]),s("div",{staticClass:"replies"},[s("div",{staticClass:"icon"},[s("div",{domProps:{innerHTML:e._s(e.repliesIcon)}})]),s("div",{staticClass:"data"},[e._v(e._s(e.post.replies))])]),s("div",{staticClass:"likes",class:{liked:e.post.liked},on:{click:function(t){return e.like(e.post)}}},[e.showLike?s("div",{staticClass:"like-animation",style:e.themeLikeAnimationStyle},[s("div",{domProps:{innerHTML:e._s(e.likeGif)}})]):e._e(),s("div",{staticClass:"icon"},[s("div",{domProps:{innerHTML:e._s(e.likeIcon(e.post.liked))}})]),s("div",{staticClass:"data"},[e._v(e._s(e.post.likes))])])]):e._e()]),e.brief?s("div",{staticClass:"divider"}):e._e()])},i=[],n=s("9579"),r=s("7b81"),o=s("808e"),l=s("ed08"),c=s.n(l),h=s("2f62"),d={name:"post-brief",props:["post","levels","author","brief"],data(){return{TEXT_COLOR:o["j"],showLike:!1}},components:{PostContent:r["a"],PostUser:n["a"]},computed:{...Object(h["d"])({user:t=>t.users.userInfo,isMobile:t=>t.media.isMobile,theme:t=>t.config.theme}),level(){const{exp:t}=this.author;let e=this.levels[0];return this.levels.forEach(s=>{s.exp<=t&&s.level>e.level&&(e=s)}),e},levelLabel(){const t=this.levels.find(t=>t.level===this.level.level);return t},lastReplyTime(){return c.a.dateFormat("mm-dd HH:MM",new Date(this.post.last_reply_time.replace(/-/g,"/")))},showHanserAction(){return this.post.hanserLike||this.post.hanserReply},isLogin(){return!!this.user.uid},postTime(){return c.a.dateFormat("YYYY-mm-dd HH:MM",new Date(this.post.post_time.replace(/-/g,"/")))},likeGif(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-like.gif" width="87" height="110" alt="点赞" />';default:return'<img src="https://cdn.2550505.com/share/legacy-sso/like.gif" width="64" height="42" alt="点赞" />'}},themeLikeAnimationStyle(){switch(this.theme){case"new-year-2023":return"top: -98px; right: -12px";default:return""}},readingsIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-readings.png" width="25" height="15" alt="查看" />';case"new-year-2024":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-reading.png" width="28" height="28" alt="查看" />';default:return'<i class="hanser icon-chakan"></i>'}},repliesIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-replies.png" width="20" height="20" alt="回复" />';case"new-year-2024":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-reply.png" width="20" height="17" alt="回复" />';default:return'<i class="hanser icon-huifu" />'}}},methods:{like(t){const e="new-year-2023"===this.theme?1300:1e3;!t.liked&&this.user.uid?(this.showLike=!0,setTimeout(()=>{this.showLike=!1},e)):this.showLike=!1,this.$emit("like")},likeIcon(t){return"new-year-2023"===this.theme?t?'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-like-click.png" width="20" height="20" alt="已点赞" />':'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-like.png" width="20" height="20" alt="点赞" />':"new-year-2024"===this.theme?t?'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-like_active.png" width="20" height="20" alt="已点赞" />':'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-like_default.png" width="20" height="20" alt="点赞" />':'<i class="hanser icon-dianzan"></i>'}}},u=d,g=(s("afc0"),s("2877")),p=Object(g["a"])(u,a,i,!1,null,"08176a4c",null);e["a"]=p.exports},"16ab":function(t,e,s){"use strict";s("dd95")},"2b0f":function(t,e,s){},"361c":function(t,e,s){},"5c5c":function(t,e,s){},"6d9e":function(t,e,s){},"7b81":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-content"},[e("router-link",{staticClass:"title",attrs:{to:"/post/"+t.id,target:t.target}},[t.labels.length?e("ul",{staticClass:"labels"},t._l(t.labels,(function(s,a){return e("li",{key:a},[e("span",{staticClass:"label",style:t.labelStyle(s)},[t._v(t._s(s.labelName))])])})),0):t._e(),e("p",{staticClass:"title-text"},[t._v(t._s(t.title))])]),e("div",[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.renderContent)}})]),t.brief||!t.videos||t.videos.length?t._e():e("div",{staticClass:"pictures"},[e("post-image",{attrs:{images:t.pictures,type:t.type,isMobile:t.isMobile,"primary-pictures":t.primaryPictures}})],1),t.videos&&t.videos.length?e("div",{staticClass:"video"},[e("iframe",{ref:"video",attrs:{src:t.videos[0],width:t.videoWidth,height:t.videoHeight,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"allowfullscreen"}})]):t._e()],1)},i=[],n=function(){var t=this,e=t._self._c;return t.imageCount?e("div",{staticClass:"post-image"},[e("div",{class:t.imageClass},[t._l(t.showImages,(function(s,a){return e("el-image",{key:s+a,staticClass:"image",style:t.imageStyle,attrs:{lazy:"",fit:"cover",src:s},on:{click:function(e){return t.handlePreview(a)}}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e("img",{attrs:{width:"100",height:"100",alt:"loading",src:"https://cdn.2550505.com/share/legacy-sso/loading.jpg"}})]),e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("img",{attrs:{width:"100",height:"100",alt:"failed",src:"https://cdn.2550505.com/share/legacy-sso/fail.jpg"}})])])})),t.showViewer?e("el-image-viewer",{attrs:{"initial-index":t.initialIndex,maskClosable:!1,"on-close":t.onClose,"url-list":t.primaryPictures}}):t._e()],2)]):t._e()},r=[],o=s("08a9"),l={name:"post-image",props:["images","primaryPictures","type","isMobile"],components:{ElImageViewer:o["a"]},data(){return{showViewer:!1,initialIndex:0}},computed:{imageClass(){return 3===this.imageCount?"image-count-3":4===this.imageCount?"image-count-4":"image-list"},showImages(){return this.images.slice(0,9)},imageCount(){var t;return null===(t=this.images)||void 0===t?void 0:t.length},imageStyle(){return this.isMobile?[1,2,3].includes(this.type)?"width: 100%":"width: 100px; height: 100px":[1,2,3].includes(this.type)?"max-width: 300px;max-height: 300px":"width: 100px; height: 100px"}},methods:{changeIndex(t){this.initialIndex=t},handlePreview(t){this.initialIndex=t,this.showViewer=!0},onClose(){this.showViewer=!1,this.initialIndex=0}}},c=l,h=(s("eff9"),s("2877")),d=Object(h["a"])(c,n,r,!1,null,"18654413",null),u=d.exports,g=s("cbff"),p={name:"post-content",data(){return{}},props:["labels","title","type","content","author","pictures","id","primaryPictures","isMobile","brief","videos","vote"],methods:{labelStyle(t){return`background: ${t.color};`}},computed:{isTop(){const t=this.labels.find(t=>1===t.labelId);return!!t},target(){if(this.isMobile)return"_blank";{const t=Number(window.localStorage.getItem("openType"));if(0===t)return"_self";if(1===t)return"_blank"}return"_self"},videoWidth(){return this.isMobile?"100%":"70%"},videoHeight(){return this.isMobile?"200":"400"},isLevelUpPost(){const t=this.labels.find(t=>7===t.id);return!!t},renderContent(){return 3===this.type?`<div class="birthday-sign"><div class="birthday-picture"><img src="https://cdn.2550505.com/share/legacy-sso/birthday-picture.png" class="birthday-img"><div class="birthday-avatar"><img src="${this.author.avatar}" width="100%" height="100%" alt="${this.author.nickname}" class="birthday-avatar-img"></div></div></div>`:this.content}},components:{PostImage:u,VotePanel:g["a"]}},m=p,v=(s("8f2e"),Object(h["a"])(m,a,i,!1,null,"55a07adc",null));e["a"]=v.exports},"7c0c":function(t,e,s){"use strict";s("5c5c")},"8f2e":function(t,e,s){"use strict";s("361c")},afc0:function(t,e,s){"use strict";s("6d9e")},bdb6:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tag"},[e("main-header"),e("div",{staticClass:"tag-wrapper"},[e("div",{staticClass:"main-content"},[e("div",{staticClass:"tag-banner",style:t.bannerStyle},[t.tagInfo.banner?t._e():e("span",[t._v(t._s(t.tagName))])]),e("sidebar"),e("div",{staticClass:"layout-post__main"},[e("editor",{ref:"editor",staticClass:"post-editor",attrs:{limitWords:1e4},on:{post:t.post},scopedSlots:t._u([t.user.uid&&1!==t.user.status?null:{key:"cover",fn:function(){return[t.user.uid?e("span",{staticClass:"tip-text"},[t._v(" 你已被封禁,封禁解除后才可发帖 ")]):e("span",{staticClass:"tip-text"},[e("router-link",{staticClass:"to-login",attrs:{to:"/login"}},[t._v("登录")]),t._v(" 后才可发帖 ")],1)]},proxy:!0}],null,!0)}),e("ul",{staticClass:"posts"},t._l(t.postList,(function(s){return e("li",{key:s.id,staticClass:"post"},[e("post-brief",{staticClass:"post-brief",attrs:{post:s,levels:t.levels,author:s.author,lastReply:s.lastReply},on:{like:function(e){return t.like(s)}}})],1)})),0),e("el-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.pageSize,"prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.totalPosts},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),e("div",{staticClass:"layout-tag"},[t._m(0),e("ul",{staticClass:"layout-tag-list"},t._l(t.displayTags,(function(s){return e("li",{key:s.id,staticClass:"layout-tag--item"},[e("router-link",{staticClass:"layout-tag--link",attrs:{to:"/tag/"+s.id}},[e("span",{staticClass:"tag-text"},[t._v("#"+t._s(s.name))])])],1)})),0)])],1)]),e("div",{staticClass:"fast-operation"},[e("div",{staticClass:"chat",on:{click:t.showChat}},[t.notice.chats?e("div",{staticClass:"badge"},[t._v(t._s(t.noticeNum(t.notice.chats)))]):t._e(),e("i",{staticClass:"iconfont pinglun"})])]),e("chats")],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-message--title"},[e("i",{staticClass:"iconfont huati"}),t._v(" "),e("span",{staticClass:"layout-message--title__text"},[t._v("话题")])])}],n=s("db04"),r=s("365c"),o=s("2f62"),l=s("11a4"),c=s("ed89"),h=s("cec2"),d=s("29b0"),u=s("7846"),g={name:"tag",data(){return{params:{page:1,pageSize:30},postList:[],totalPosts:0,tagId:0,tagInfo:{},displayTags:[]}},metaInfo(){return{title:`话题${this.tagName} - 毛怪俱乐部`,meta:[{name:"keywords",content:this.tagName+",话题,毛怪,hanser,社区,毛怪俱乐部"},{name:"description",content:""+this.tagInfo.description}]}},components:{MainHeader:c["a"],PostBrief:l["a"],Editor:d["default"],Sidebar:h["a"],Chats:u["a"]},computed:{...Object(o["d"])({levels:t=>t.level.levels,levelInfo:t=>t.level.levelInfo,user:t=>t.users.userInfo,notice:t=>t.notice.notice}),tagName(){return this.tagInfo.name?"#"+this.tagInfo.name:""},bannerStyle(){return this.tagInfo.banner?`background-image: url('${this.tagInfo.banner}')`:"background-image: url('https://cdn.2550505.com/share/legacy-sso/tag-bg.png')"}},watch:{"$route.params"(){this.init()}},methods:{...Object(o["c"])({addUserExp:"users/addUserExp"}),noticeNum(t){return t<99?t:"99+"},post(t){this.user.uid?t.title&&t.content?n["a"].post(r["a"].hansering,{title:t.title,content:t.content,tags:[this.tagId]}).then(t=>{0===t.code?(this.$message({type:"success",message:t.msg}),this.$refs["editor"].clear(),this.addUserExp(t.exp),this.page=1,this.getData()):this.$message({type:"warning",message:t.msg})}):this.$message({type:"warning",message:"标题或内容不能为空"}):this.$message({type:"warning",message:"请登录后重试"})},handleSizeChange(t){this.params.page=1,this.pageSize=t,this.getData()},handleCurrentChange(t){this.params.page=t,this.getData()},getData(){n["a"].get(r["a"].tagedList,{params:{...this.params,tag:this.tagId}}).then(t=>{0!==t.code?this.$router.replace("/404"):(this.postList=t.list,this.totalPosts=t.total)})},async init(){this.tagId=Number(this.$route.params.tagId);const[t,e,s]=await Promise.all([n["a"].get(r["a"].tagedList,{params:{...this.params,tag:this.tagId}}),n["a"].get(r["a"].tagInfo,{params:{id:this.tagId}}),n["a"].get(r["a"].tagList,{params:{page:1,pageSize:6}})]);0!==t.code||0===t.total?this.$router.replace("/404"):(this.postList=t.list,this.totalPosts=t.total),0===e.code&&(this.tagInfo=e.info),0===s.code&&(this.displayTags=s.result)},showChat(){const t=new CustomEvent("open-chat",{detail:{uid:0}});window.dispatchEvent(t)},like(t){this.liking?this.$message({type:"warning",message:"操作太快了~"}):(this.liking=!0,n["a"].post(r["a"].like+"/"+t.id,{author:t.author.uid,liked:t.liked}).then(e=>{if(0!==e.code)return this.$message({type:"warning",message:e.msg}),void(this.liking=!1);t.liked=!!e.liked,this.addUserExp(e.exp),t.liked?(t.likes+=1,1===this.user.uid&&(t.hanserLike=!0)):(t.likes-=1,1===this.user.uid&&(t.hanserLike=!1)),this.liking=!1}))}},async mounted(){this.init()}},p=g,m=(s("7c0c"),s("2877")),v=Object(m["a"])(p,a,i,!1,null,"fe6ad82e",null);e["default"]=v.exports},cec2:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"layout-message--title"},[e("div",{domProps:{innerHTML:t._s(t.messageIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("消息中心")])]),e("ul",{staticClass:"layout-message--menu"},t._l(t.noticeMenu,(function(s){return e("li",{key:s.hash,staticClass:"layout-message--menu--item"},[e("router-link",{staticClass:"link",class:{active:t.$route.hash===s.hash},attrs:{to:"/notice"+s.hash}},[e("span",{staticClass:"notice-menu-item"},[t._v(t._s(s.text))]),t.notice[s.key]?e("div",{staticClass:"badge"},[t._v(t._s(t.noticeNum(t.notice[s.key])))]):t._e()])],1)})),0),e("div",{staticClass:"divider"}),t.user.uid?e("router-link",{staticClass:"link",class:{active:"/score"===t.$route.path},attrs:{to:"/score"}},[e("div",{domProps:{innerHTML:t._s(t.scoreIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("积分中心")])]):t._e(),t.user.uid?e("router-link",{staticClass:"link",class:{active:"/contribution-exchange"===t.$route.path},attrs:{to:"/contribution-exchange"}},[e("i",{staticClass:"iconfont gongxian icon"}),e("span",{staticClass:"layout-message--title__text"},[t._v("贡献中心")])]):t._e(),t.isScoreManager?e("router-link",{staticClass:"link",class:{active:"/manager"===t.$route.path},attrs:{to:"/manager"}},[e("i",{staticClass:"iconfont fenghuangxiangmutubiao_quanxian icon"}),e("span",{staticClass:"layout-message--title__text"},[t._v("管理后台")])]):t._e(),e("div",{staticClass:"divider"}),e("router-link",{staticClass:"link",class:{active:"/my-follow"===t.$route.path},attrs:{to:"/my-follow"}},[e("div",{domProps:{innerHTML:t._s(t.followIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("我关注的")]),t.followUnread?e("div",{staticClass:"badge"},[t._v(t._s(t.noticeNum(t.followUnread)))]):t._e()]),e("router-link",{staticClass:"link",class:{active:"/my-like"===t.$route.path},attrs:{to:"/my-like"}},[e("div",{domProps:{innerHTML:t._s(t.likedIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("我赞过的")])]),e("router-link",{staticClass:"link",attrs:{to:t.myFavoriteLink}},[e("div",{domProps:{innerHTML:t._s(t.favoritedIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("我收藏的")])]),e("div",{staticClass:"divider"}),e("router-link",{staticClass:"link",class:{active:"/hot-recommends"===t.$route.path},attrs:{to:"/hot-recommends"},nativeOn:{click:function(e){return t.refreshRoute.apply(null,arguments)}}},[e("div",{domProps:{innerHTML:t._s(t.recommendIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("热门推荐")])]),e("a",{staticClass:"link",class:{active:"/"===t.$route.path},attrs:{href:"/"}},[e("div",{domProps:{innerHTML:t._s(t.allPostsIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("全部帖子")])]),e("div",{staticClass:"divider"}),e("router-link",{staticClass:"link",attrs:{to:"/to-be-continued"}},[e("div",{domProps:{innerHTML:t._s(t.topicIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("全部话题")])]),e("router-link",{staticClass:"link",attrs:{to:"/to-be-continued"}},[e("div",{domProps:{innerHTML:t._s(t.groupIcon)}}),e("span",{staticClass:"layout-message--title__text"},[t._v("全部专栏")])])],1)},i=[],n=(s("14d9"),s("db04")),r=s("365c"),o=s("2f62"),l={name:"sidebar",data(){return{noticeMenu:[{text:"回复我的",hash:"#reply",key:"replies"},{text:"提到我的",hash:"#at",key:"at"},{text:"收到的赞",hash:"#like",key:"likes"},{text:"站务通知",hash:"#notice",key:"notice"},{text:"我的消息",hash:"#chat",key:"message"},{text:"系统设置",hash:"#setting",key:"setting"}],myData:{follow:0,fans:0,posts:0}}},computed:{...Object(o["d"])({levels:t=>t.level.levels,levelInfo:t=>t.level.levelInfo,user:t=>t.users.userInfo,followUnread:t=>t.notice.followUnread,notice:t=>t.notice.notice,theme:t=>t.config.theme}),...Object(o["b"])("users",{isAdmin:"isAdmin",isHanser:"isHanser",isScoreManager:"isScoreManager"}),myFavoriteLink(){return`/space/${this.user.uid}#favorite`},messageIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-message.png" width="18" height="16" alt="消息中心" />';default:return'<i class="hanser icon-xinxi1 icon"></i>'}},scoreIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-score.png" width="18" height="16" alt="积分中心" />';default:return'<i class="iconfont zhuanjifen icon"></i>'}},followIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-follow.png" width="18" height="16" alt="我关注的" />';default:return'<i class="hanser icon-wodeguanzhu icon"></i>'}},likedIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-liked.png" width="18" height="16" alt="我赞过的" />';default:return'<i class="hanser icon-dianzan icon"></i>'}},favoritedIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-favorited.png" width="18" height="16" alt="我收藏的" />';default:return'<i class="hanser icon-shoucang icon"></i>'}},recommendIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-recommand.png" width="18" height="16" alt="热门推荐" />';default:return'<i class="hanser icon-remen1 icon"></i>'}},allPostsIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-all-posts.png" width="18" height="16" alt="全部帖子" />';default:return'<i class="hanser icon-quanbutiezi icon"></i>'}},topicIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-topic.png" width="18" height="16" alt="全部话题" />';default:return'<i class="hanser icon-huati icon"></i>'}},groupIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-group.png" width="18" height="16" alt="全部专栏" />';default:return'<i class="hanser icon-quanbuzhuanlan icon"></i>'}}},watch:{"$route.hash"(t){const e=this.noticeMenu.find(e=>e.hash===t);e&&this.notice[e.key]&&(this.notice[e.key]=0)}},methods:{noticeNum(t){return t<99?t:"99+"},refreshRoute(){this.$router.push({path:"/hot-recommends",query:{t:Date.now()}})}},async mounted(){const t=await n["a"].get(r["a"].dataCount,{params:{uid:this.user.uid}});0===t.code&&(this.myData.follow=t.data.follow,this.myData.fans=t.data.fans,this.myData.posts=t.data.post)}},c=l,h=(s("16ab"),s("2877")),d=Object(h["a"])(c,a,i,!1,null,"4343b837",null);e["a"]=d.exports},dd95:function(t,e,s){},eff9:function(t,e,s){"use strict";s("2b0f")}}]);