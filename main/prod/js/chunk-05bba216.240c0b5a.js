(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05bba216"],{"11a4":function(t,e,s){"use strict";var i=function(){var t,e=this,s=e._self._c;return s("div",{staticClass:"post-brief",attrs:{brief:e.brief}},[e.brief?e._e():s("div",{staticClass:"top"},[s("post-user",{attrs:{avatar:e.post.author.avatar,size:50,auth:e.post.author.auth,authentication:e.post.author.authentication,nickname:e.post.author.nickname,uid:e.post.author.uid,colors:e.levelLabel.color,level:e.level}},[s("template",{slot:"bottom"},[s("span",{staticClass:"post-time"},[e._v(e._s(e.postTime))])])],2),e.isMobile?e._e():e._t("right-top")],2),s("div",{staticClass:"content"},[s("post-content",{attrs:{title:e.post.title,content:e.post.content,labels:e.post.labels,pictures:e.post.pictures,author:e.post.author,"primary-pictures":e.post.primaryPictures,videos:e.post.videos,isMobile:e.isMobile,brief:e.brief,type:e.post.type,id:e.post.id,vote:null===(t=e.post)||void 0===t?void 0:t.vote}})],1),e.showHanserAction&&e.isLogin&&!e.brief?s("div",{staticClass:"hanser-action"},[e.post.hanserReply?s("div",{staticClass:"hanser-reply"},[s("icon",{attrs:{icon:"hanser icon-huifu"}}),e._v(" hanser回复过")],1):e._e(),e.post.hanserLike&&!e.post.hanserReply?s("div",{staticClass:"hanser-like"},[s("icon",{attrs:{icon:"hanser icon-dianzan"}}),e._v(" hanser赞过 ")],1):e._e()]):e._e(),e.brief?e._e():s("div",{staticClass:"bottom"},[s("ul",{staticClass:"tags",class:{"no-tags":!e.post.tags||!e.post.tags.length}},e._l(e.post.tags,(function(t){return s("li",{key:t.tagId,staticClass:"tag"},[s("router-link",{staticClass:"tag-link",attrs:{to:"/tag/"+t.tagId}},[e._v("#"+e._s(t.tagName))])],1)})),0),e.isLogin?s("div",{staticClass:"datas"},[s("div",{staticClass:"readings"},[s("div",{staticClass:"icon"},[s("div",{domProps:{innerHTML:e._s(e.readingsIcon)}})]),s("div",{staticClass:"data"},[e._v(e._s(e.post.readings))])]),s("div",{staticClass:"replies"},[s("div",{staticClass:"icon"},[s("div",{domProps:{innerHTML:e._s(e.repliesIcon)}})]),s("div",{staticClass:"data"},[e._v(e._s(e.post.replies))])]),s("div",{staticClass:"likes",class:{liked:e.post.liked},on:{click:function(t){return e.like(e.post)}}},[e.showLike?s("div",{staticClass:"like-animation",style:e.themeLikeAnimationStyle},[s("div",{domProps:{innerHTML:e._s(e.likeGif)}})]):e._e(),s("div",{staticClass:"icon"},[s("div",{domProps:{innerHTML:e._s(e.likeIcon(e.post.liked))}})]),s("div",{staticClass:"data"},[e._v(e._s(e.post.likes))])])]):e._e()]),e.brief?s("div",{staticClass:"divider"}):e._e()])},a=[],n=s("9579"),r=s("7b81"),l=s("808e"),o=s("ed08"),c=s.n(o),h=s("2f62"),d={name:"post-brief",props:["post","levels","author","brief"],data(){return{TEXT_COLOR:l["j"],showLike:!1}},components:{PostContent:r["a"],PostUser:n["a"]},computed:{...Object(h["d"])({user:t=>t.users.userInfo,isMobile:t=>t.media.isMobile,theme:t=>t.config.theme}),level(){const{exp:t}=this.author;let e=this.levels[0];return this.levels.forEach(s=>{s.exp<=t&&s.level>e.level&&(e=s)}),e},levelLabel(){const t=this.levels.find(t=>t.level===this.level.level);return t},lastReplyTime(){return c.a.dateFormat("mm-dd HH:MM",new Date(this.post.last_reply_time.replace(/-/g,"/")))},showHanserAction(){return this.post.hanserLike||this.post.hanserReply},isLogin(){return!!this.user.uid},postTime(){return c.a.dateFormat("YYYY-mm-dd HH:MM",new Date(this.post.post_time.replace(/-/g,"/")))},likeGif(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-like.gif" width="87" height="110" alt="点赞" />';default:return'<img src="https://cdn.2550505.com/share/legacy-sso/like.gif" width="64" height="42" alt="点赞" />'}},themeLikeAnimationStyle(){switch(this.theme){case"new-year-2023":return"top: -98px; right: -12px";default:return""}},readingsIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-readings.png" width="25" height="15" alt="查看" />';case"new-year-2024":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-reading.png" width="28" height="28" alt="查看" />';default:return'<i class="hanser icon-chakan"></i>'}},repliesIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-replies.png" width="20" height="20" alt="回复" />';case"new-year-2024":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-reply.png" width="20" height="17" alt="回复" />';default:return'<i class="hanser icon-huifu" />'}}},methods:{like(t){const e="new-year-2023"===this.theme?1300:1e3;!t.liked&&this.user.uid?(this.showLike=!0,setTimeout(()=>{this.showLike=!1},e)):this.showLike=!1,this.$emit("like")},likeIcon(t){return"new-year-2023"===this.theme?t?'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-like-click.png" width="20" height="20" alt="已点赞" />':'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-like.png" width="20" height="20" alt="点赞" />':"new-year-2024"===this.theme?t?'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-like_active.png" width="20" height="20" alt="已点赞" />':'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-like_default.png" width="20" height="20" alt="点赞" />':'<i class="hanser icon-dianzan"></i>'}}},p=d,u=(s("afc0"),s("2877")),g=Object(u["a"])(p,i,a,!1,null,"08176a4c",null);e["a"]=g.exports},"2b0f":function(t,e,s){},"361c":function(t,e,s){},3752:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-skeleton"},[e("el-skeleton",{attrs:{animated:"",count:10}},[e("template",{slot:"template"},[e("div",{staticClass:"sk-top"},[e("el-skeleton-item",{staticStyle:{width:"50px",height:"50px"},attrs:{variant:"image"}}),e("div",{staticClass:"sk-info"},[e("div",{staticClass:"sk-nickname"},[e("el-skeleton-item",{staticStyle:{width:"64px"},attrs:{variant:"text"}})],1),e("div",{staticClass:"sk-time"},[e("el-skeleton-item",{staticStyle:{width:"64px"},attrs:{variant:"text"}})],1)]),e("el-skeleton-item",{staticStyle:{width:"80px"},attrs:{variant:"text"}})],1),e("el-skeleton-item",{staticStyle:{width:"200px",margin:"10px 0"},attrs:{variant:"h3"}}),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),e("div",{staticClass:"sk-divider"})],1)],2)],1)},a=[],n={name:"post-skeleton"},r=n,l=(s("dc2b"),s("2877")),o=Object(l["a"])(r,i,a,!1,null,"d50f0d4c",null);e["a"]=o.exports},6126:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-follow"},[e("ul",{staticClass:"posts"},[t._l(t.postList,(function(s){return e("li",{key:s.id,staticClass:"post"},[e("post-brief",{staticClass:"post-brief",attrs:{post:s,levels:t.levels,author:s.author,lastReply:s.lastReply},on:{like:function(e){return t.like(s)}}})],1)})),t.loading?e("post-skeleton"):t._e()],2),e("el-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.pageSize,"prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.totalPosts},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},a=[],n=s("db04"),r=s("365c"),l=s("2f62"),o=s("11a4"),c=s("3752"),h={name:"my-follow",metaInfo(){return{title:"我的关注 - 毛怪俱乐部",meta:[{name:"keywords",content:"我的关注,毛怪,hanser,社区,毛怪俱乐部"},{name:"description",content:"我的关注列表动态"}]}},data(){return{postList:[],params:{page:1,pageSize:30},totalPosts:0,liking:!1,loading:!1}},components:{PostBrief:o["a"],PostSkeleton:c["a"]},computed:{...Object(l["d"])({levels:t=>t.level.levels})},methods:{...Object(l["c"])({addUserExp:"users/addUserExp",setFollowUnread:"notice/setFollowUnread"}),getData(){this.loading=!0,n["a"].get(r["a"].myFollow,{params:this.params}).then(t=>{0===t.code&&(this.postList=t.list,this.totalPosts=t.total,this.setFollowUnread(0)),this.loading=!1})},like(t){this.liking?this.$message({type:"warning",message:"操作太快了~"}):(this.liking=!0,n["a"].post(r["a"].like+"/"+t.id,{author:t.author.uid,liked:t.liked}).then(e=>{if(0!==e.code)return this.$message({type:"warning",message:e.msg}),void(this.liking=!1);t.liked=!!e.liked,this.addUserExp(e.exp),t.liked?t.likes+=1:t.likes-=1,this.liking=!1}))},handleSizeChange(t){this.params.page=1,this.pageSize=t,this.getData()},handleCurrentChange(t){this.params.page=t,this.getData()}},mounted(){this.getData()}},d=h,p=(s("c586"),s("2877")),u=Object(p["a"])(d,i,a,!1,null,"146c9042",null);e["default"]=u.exports},"6d9e":function(t,e,s){},"7ada":function(t,e,s){},"7b81":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-content"},[e("router-link",{staticClass:"title",attrs:{to:"/post/"+t.id,target:t.target}},[t.labels.length?e("ul",{staticClass:"labels"},t._l(t.labels,(function(s,i){return e("li",{key:i},[e("span",{staticClass:"label",style:t.labelStyle(s)},[t._v(t._s(s.labelName))])])})),0):t._e(),e("p",{staticClass:"title-text"},[t._v(t._s(t.title))])]),e("div",[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.renderContent)}})]),t.brief||!t.videos||t.videos.length?t._e():e("div",{staticClass:"pictures"},[e("post-image",{attrs:{images:t.pictures,type:t.type,isMobile:t.isMobile,"primary-pictures":t.primaryPictures}})],1),t.videos&&t.videos.length?e("div",{staticClass:"video"},[e("iframe",{ref:"video",attrs:{src:t.videos[0],width:t.videoWidth,height:t.videoHeight,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"allowfullscreen"}})]):t._e()],1)},a=[],n=function(){var t=this,e=t._self._c;return t.imageCount?e("div",{staticClass:"post-image"},[e("div",{class:t.imageClass},[t._l(t.showImages,(function(s,i){return e("el-image",{key:s+i,staticClass:"image",style:t.imageStyle,attrs:{lazy:"",fit:"cover",src:s},on:{click:function(e){return t.handlePreview(i)}}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e("img",{attrs:{width:"100",height:"100",alt:"loading",src:"https://cdn.2550505.com/share/legacy-sso/loading.jpg"}})]),e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("img",{attrs:{width:"100",height:"100",alt:"failed",src:"https://cdn.2550505.com/share/legacy-sso/fail.jpg"}})])])})),t.showViewer?e("el-image-viewer",{attrs:{"initial-index":t.initialIndex,maskClosable:!1,"on-close":t.onClose,"url-list":t.primaryPictures}}):t._e()],2)]):t._e()},r=[],l=s("08a9"),o={name:"post-image",props:["images","primaryPictures","type","isMobile"],components:{ElImageViewer:l["a"]},data(){return{showViewer:!1,initialIndex:0}},computed:{imageClass(){return 3===this.imageCount?"image-count-3":4===this.imageCount?"image-count-4":"image-list"},showImages(){return this.images.slice(0,9)},imageCount(){var t;return null===(t=this.images)||void 0===t?void 0:t.length},imageStyle(){return this.isMobile?[1,2,3].includes(this.type)?"width: 100%":"width: 100px; height: 100px":[1,2,3].includes(this.type)?"max-width: 300px;max-height: 300px":"width: 100px; height: 100px"}},methods:{changeIndex(t){this.initialIndex=t},handlePreview(t){this.initialIndex=t,this.showViewer=!0},onClose(){this.showViewer=!1,this.initialIndex=0}}},c=o,h=(s("eff9"),s("2877")),d=Object(h["a"])(c,n,r,!1,null,"18654413",null),p=d.exports,u=s("cbff"),g={name:"post-content",data(){return{}},props:["labels","title","type","content","author","pictures","id","primaryPictures","isMobile","brief","videos","vote"],methods:{labelStyle(t){return`background: ${t.color};`}},computed:{isTop(){const t=this.labels.find(t=>1===t.labelId);return!!t},target(){if(this.isMobile)return"_blank";{const t=Number(window.localStorage.getItem("openType"));if(0===t)return"_self";if(1===t)return"_blank"}return"_self"},videoWidth(){return this.isMobile?"100%":"70%"},videoHeight(){return this.isMobile?"200":"400"},isLevelUpPost(){const t=this.labels.find(t=>7===t.id);return!!t},renderContent(){return 3===this.type?`<div class="birthday-sign"><div class="birthday-picture"><img src="https://cdn.2550505.com/share/legacy-sso/birthday-picture.png" class="birthday-img"><div class="birthday-avatar"><img src="${this.author.avatar}" width="100%" height="100%" alt="${this.author.nickname}" class="birthday-avatar-img"></div></div></div>`:this.content}},components:{PostImage:p,VotePanel:u["a"]}},m=g,v=(s("8f2e"),Object(h["a"])(m,i,a,!1,null,"55a07adc",null));e["a"]=v.exports},"8f2e":function(t,e,s){"use strict";s("361c")},afc0:function(t,e,s){"use strict";s("6d9e")},c586:function(t,e,s){"use strict";s("d442")},d442:function(t,e,s){},dc2b:function(t,e,s){"use strict";s("7ada")},ed08:function(t,e){const s={dateFormat:(t,e)=>{let s;const i={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"H+":e.getHours().toString(),"M+":e.getMinutes().toString(),"S+":e.getSeconds().toString()};for(let a in i)s=new RegExp("("+a+")").exec(t),s&&(t=t.replace(s[1],1==s[1].length?i[a]:i[a].padStart(s[1].length,"0")));return t},getLevelInfo(t,e){let s=0;while(s<e.length){if(s===e.length-1)return e[s];if(t>=e[s].exp&&t<e[s+1].exp)return e[s];s++}},imagesLoadDone:async t=>{const e=t.map(t=>new Promise(e=>{const s=new Image;s.src=t,s.onload=()=>{e(t)}}));return Promise.all(e)},dateInrange:(t,e,s)=>{const i=new Date(t),a=new Date(e);return a.valueOf()-i.valueOf()<s}};t.exports=s},eff9:function(t,e,s){"use strict";s("2b0f")}}]);