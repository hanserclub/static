(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29363e8e"],{"11a4":function(t,e,i){"use strict";var s=function(){var t,e=this,i=e._self._c;return i("div",{staticClass:"post-brief",attrs:{brief:e.brief}},[e.brief?e._e():i("div",{staticClass:"top"},[i("post-user",{attrs:{avatar:e.post.author.avatar,size:50,auth:e.post.author.auth,authentication:e.post.author.authentication,nickname:e.post.author.nickname,uid:e.post.author.uid,colors:e.levelLabel.color,level:e.level}},[i("template",{slot:"bottom"},[i("span",{staticClass:"post-time"},[e._v(e._s(e.postTime))])])],2),e.isMobile?e._e():e._t("right-top")],2),i("div",{staticClass:"content"},[i("post-content",{attrs:{title:e.post.title,content:e.post.content,labels:e.post.labels,pictures:e.post.pictures,author:e.post.author,"primary-pictures":e.post.primaryPictures,videos:e.post.videos,isMobile:e.isMobile,brief:e.brief,type:e.post.type,id:e.post.id,vote:null===(t=e.post)||void 0===t?void 0:t.vote}})],1),e.showHanserAction&&e.isLogin&&!e.brief?i("div",{staticClass:"hanser-action"},[e.post.hanserReply?i("div",{staticClass:"hanser-reply"},[i("icon",{attrs:{icon:"hanser icon-huifu"}}),e._v(" hanser回复过")],1):e._e(),e.post.hanserLike&&!e.post.hanserReply?i("div",{staticClass:"hanser-like"},[i("icon",{attrs:{icon:"hanser icon-dianzan"}}),e._v(" hanser赞过 ")],1):e._e()]):e._e(),e.brief?e._e():i("div",{staticClass:"bottom"},[i("ul",{staticClass:"tags",class:{"no-tags":!e.post.tags||!e.post.tags.length}},e._l(e.post.tags,(function(t){return i("li",{key:t.tagId,staticClass:"tag"},[i("router-link",{staticClass:"tag-link",attrs:{to:"/tag/"+t.tagId}},[e._v("#"+e._s(t.tagName))])],1)})),0),e.isLogin?i("div",{staticClass:"datas"},[i("div",{staticClass:"readings"},[i("div",{staticClass:"icon"},[i("div",{domProps:{innerHTML:e._s(e.readingsIcon)}})]),i("div",{staticClass:"data"},[e._v(e._s(e.post.readings))])]),i("div",{staticClass:"replies"},[i("div",{staticClass:"icon"},[i("div",{domProps:{innerHTML:e._s(e.repliesIcon)}})]),i("div",{staticClass:"data"},[e._v(e._s(e.post.replies))])]),i("div",{staticClass:"likes",class:{liked:e.post.liked},on:{click:function(t){return e.like(e.post)}}},[e.showLike?i("div",{staticClass:"like-animation",style:e.themeLikeAnimationStyle},[i("div",{domProps:{innerHTML:e._s(e.likeGif)}})]):e._e(),i("div",{staticClass:"icon"},[i("div",{domProps:{innerHTML:e._s(e.likeIcon(e.post.liked))}})]),i("div",{staticClass:"data"},[e._v(e._s(e.post.likes))])])]):e._e()]),e.brief?i("div",{staticClass:"divider"}):e._e()])},a=[],n=i("9579"),r=i("7b81"),l=i("808e"),o=i("ed08"),c=i.n(o),h=i("2f62"),d={name:"post-brief",props:["post","levels","author","brief"],data(){return{TEXT_COLOR:l["j"],showLike:!1}},components:{PostContent:r["a"],PostUser:n["a"]},computed:{...Object(h["d"])({user:t=>t.users.userInfo,isMobile:t=>t.media.isMobile,theme:t=>t.config.theme}),level(){const{exp:t}=this.author;let e=this.levels[0];return this.levels.forEach(i=>{i.exp<=t&&i.level>e.level&&(e=i)}),e},levelLabel(){const t=this.levels.find(t=>t.level===this.level.level);return t},lastReplyTime(){return c.a.dateFormat("mm-dd HH:MM",new Date(this.post.last_reply_time.replace(/-/g,"/")))},showHanserAction(){return this.post.hanserLike||this.post.hanserReply},isLogin(){return!!this.user.uid},postTime(){return c.a.dateFormat("YYYY-mm-dd HH:MM",new Date(this.post.post_time.replace(/-/g,"/")))},likeGif(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.ihan.club/new-year-2023/like.gif" width="87" height="110" alt="点赞" />';default:return'<img src="https://cdn.ihan.club/like.gif" width="64" height="42" alt="点赞" />'}},themeLikeAnimationStyle(){switch(this.theme){case"new-year-2023":return"top: -98px; right: -12px";default:return""}},readingsIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.ihan.club/new-year-2023/readings.png" width="25" height="15" alt="查看" />';case"new-year-2024":return'<img src="https://cdn.ihan.club/new-year-2024/reading.png" width="28" height="28" alt="查看" />';default:return'<i class="hanser icon-chakan"></i>'}},repliesIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.ihan.club/new-year-2023/replies.png" width="20" height="20" alt="回复" />';case"new-year-2024":return'<img src="https://cdn.ihan.club/new-year-2024/reply.png" width="20" height="17" alt="回复" />';default:return'<i class="hanser icon-huifu" />'}}},methods:{like(t){const e="new-year-2023"===this.theme?1300:1e3;!t.liked&&this.user.uid?(this.showLike=!0,setTimeout(()=>{this.showLike=!1},e)):this.showLike=!1,this.$emit("like")},likeIcon(t){return"new-year-2023"===this.theme?t?'<img src="https://cdn.ihan.club/new-year-2023/like-click.png" width="20" height="20" alt="已点赞" />':'<img src="https://cdn.ihan.club/new-year-2023/like.png" width="20" height="20" alt="点赞" />':"new-year-2024"===this.theme?t?'<img src="https://cdn.ihan.club/new-year-2024/like_active.png" width="20" height="20" alt="已点赞" />':'<img src="https://cdn.ihan.club/new-year-2024/like_default.png" width="20" height="20" alt="点赞" />':'<i class="hanser icon-dianzan"></i>'}}},p=d,u=(i("451a"),i("2877")),g=Object(u["a"])(p,s,a,!1,null,"67226b14",null);e["a"]=g.exports},"2a38":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-like"},[e("ul",{staticClass:"posts"},t._l(t.postList,(function(i){return e("li",{key:i.id,staticClass:"post"},[e("post-brief",{staticClass:"post-brief",attrs:{post:i,levels:t.levels,author:i.author,lastReply:i.lastReply},on:{like:function(e){return t.like(i)}}},[e("template",{slot:"right-top"},[e("span",{staticClass:"like-time"},[t._v("点赞时间: "+t._s(i.like_time))])])],2)],1)})),0),e("el-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.pageSize,"prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.totalPosts},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},a=[],n=i("db04"),r=i("365c"),l=i("2f62"),o=i("11a4"),c={name:"my-like",metaInfo(){return{title:"我的点赞 - 毛怪俱乐部",meta:[{name:"keywords",content:"我的点赞,毛怪,hanser,社区,毛怪俱乐部"},{name:"description",content:"我的点赞过的帖子"}]}},data(){return{postList:[],params:{page:1,pageSize:30},totalPosts:0,liking:!1}},components:{PostBrief:o["a"]},computed:{...Object(l["d"])({levels:t=>t.level.levels})},methods:{...Object(l["c"])({addUserExp:"users/addUserExp"}),getData(){n["a"].get(r["a"].myLike,{params:this.params}).then(t=>{0===t.code&&(this.postList=t.list,this.totalPosts=t.total)})},like(t){this.liking?this.$message({type:"warning",message:"操作太快了~"}):(this.liking=!0,n["a"].post(r["a"].like+"/"+t.id,{author:t.author.uid}).then(e=>{if(0!==e.code)return this.$message({type:"warning",message:e.msg}),void(this.liking=!1);t.liked=!!e.liked,this.addUserExp(e.exp),t.liked?t.likes+=1:t.likes-=1,this.liking=!1}))},handleSizeChange(t){this.params.page=1,this.pageSize=t,this.getData()},handleCurrentChange(t){this.params.page=t,this.getData()}},mounted(){this.getData()}},h=c,d=(i("32b9"),i("2877")),p=Object(d["a"])(h,s,a,!1,null,"8db303c2",null);e["default"]=p.exports},"32b9":function(t,e,i){"use strict";i("481b")},"451a":function(t,e,i){"use strict";i("fd60")},"481b":function(t,e,i){},"61f2":function(t,e,i){},"7b81":function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-content"},[e("router-link",{staticClass:"title",attrs:{to:"/postDetails/"+t.id,target:t.target}},[t.labels.length?e("ul",{staticClass:"labels"},t._l(t.labels,(function(i,s){return e("li",{key:s},[e("span",{staticClass:"label",style:t.labelStyle(i)},[t._v(t._s(i.labelName))])])})),0):t._e(),e("p",{staticClass:"title-text"},[t._v(t._s(t.title))])]),e("div",[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.renderContent)}})]),t.brief||!t.videos||t.videos.length?t._e():e("div",{staticClass:"pictures"},[e("post-image",{attrs:{images:t.pictures,type:t.type,isMobile:t.isMobile,"primary-pictures":t.primaryPictures}})],1),t.videos&&t.videos.length?e("div",{staticClass:"video"},[e("iframe",{ref:"video",attrs:{src:t.videos[0],width:t.videoWidth,height:t.videoHeight,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"allowfullscreen"}})]):t._e()],1)},a=[],n=function(){var t=this,e=t._self._c;return t.imageCount?e("div",{staticClass:"post-image"},[e("div",{class:t.imageClass},[t._l(t.showImages,(function(i,s){return e("el-image",{key:i+s,staticClass:"image",style:t.imageStyle,attrs:{lazy:"",fit:"cover",src:i},on:{click:function(e){return t.handlePreview(s)}}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e("img",{attrs:{width:"100",height:"100",alt:"loading",src:"https://cdn.ihan.club/loading.jpg"}})]),e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("img",{attrs:{width:"100",height:"100",alt:"failed",src:"https://cdn.ihan.club/fail.jpg"}})])])})),t.showViewer?e("el-image-viewer",{attrs:{"initial-index":t.initialIndex,maskClosable:!1,"on-close":t.onClose,"url-list":t.primaryPictures}}):t._e()],2)]):t._e()},r=[],l=i("08a9"),o={name:"post-image",props:["images","primaryPictures","type","isMobile"],components:{ElImageViewer:l["a"]},data(){return{showViewer:!1,initialIndex:0}},computed:{imageClass(){return 3===this.imageCount?"image-count-3":4===this.imageCount?"image-count-4":"image-list"},showImages(){return this.images.slice(0,9)},imageCount(){var t;return null===(t=this.images)||void 0===t?void 0:t.length},imageStyle(){return this.isMobile?[1,2,3].includes(this.type)?"width: 100%":"width: 100px; height: 100px":[1,2,3].includes(this.type)?"max-width: 300px;max-height: 300px":"width: 100px; height: 100px"}},methods:{changeIndex(t){this.initialIndex=t},handlePreview(t){this.initialIndex=t,this.showViewer=!0},onClose(){this.showViewer=!1,this.initialIndex=0}}},c=o,h=(i("db91"),i("2877")),d=Object(h["a"])(c,n,r,!1,null,"292177e5",null),p=d.exports,u={name:"post-content",data(){return{}},props:["labels","title","type","content","author","pictures","id","primaryPictures","isMobile","brief","videos","vote"],methods:{labelStyle(t){return`background: ${t.color};`}},computed:{isTop(){const t=this.labels.find(t=>1===t.labelId);return!!t},target(){if(this.isMobile)return"_blank";{const t=Number(window.localStorage.getItem("openType"));if(0===t)return"_self";if(1===t)return"_blank"}return"_self"},videoWidth(){return this.isMobile?"100%":"70%"},videoHeight(){return this.isMobile?"200":"400"},isLevelUpPost(){const t=this.labels.find(t=>7===t.id);return!!t},renderContent(){return 3===this.type?`<div class="birthday-sign"><div class="birthday-picture"><img src="https://cdn.ihan.club/birthday-picture.png" class="birthday-img"><div class="birthday-avatar"><img src="${this.author.avatar}" width="100%" height="100%" alt="${this.author.nickname}" class="birthday-avatar-img"></div></div></div>`:this.content}},components:{PostImage:p}},g=u,m=(i("b715"),Object(h["a"])(g,s,a,!1,null,"4e487668",null));e["a"]=m.exports},b715:function(t,e,i){"use strict";i("ef96")},db91:function(t,e,i){"use strict";i("61f2")},ef96:function(t,e,i){},fd60:function(t,e,i){}}]);