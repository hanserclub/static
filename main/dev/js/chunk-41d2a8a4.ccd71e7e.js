(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41d2a8a4"],{"0000":function(i,s,t){},"03e1":function(i,s,t){},"3a1e":function(i,s,t){"use strict";t("03e1")},6511:function(i,s,t){"use strict";t.r(s);var a=function(){var i=this,s=i._self._c;return s("div",{staticClass:"home"},[s("main-header"),s("div",{staticClass:"layout-body"},[s("nav",{staticClass:"home-nav"},[s("ul",{staticClass:"mobile-menu-list"},[i._l(i.menu,(function(t){return[s("li",{key:t.hash,staticClass:"menu-item",class:{"active-menu":t.hash===i.hash}},[s("router-link",{staticClass:"menu-link",attrs:{to:i.menuPath(t)}},[s("i",{staticClass:"hanser",class:t.icon}),s("span",{staticClass:"menu-text"},[i._v(i._s(t.text))])])],1)]}))],2)]),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"menu"},[s("ul",{staticClass:"menu-list"},[i._l(i.menu,(function(t){return[s("li",{key:t.hash,staticClass:"menu-item"},[s("router-link",{staticClass:"menu-link",class:{active:t.hash===i.hash},attrs:{to:i.menuPath(t)}},[s("i",{staticClass:"hanser",class:t.icon}),s("span",{staticClass:"menu-text"},[i._v(i._s(t.text))])])],1)]}))],2)]),s("div",{staticClass:"content-title"},[i._v(i._s(i.contentTitle))]),s("div",{staticClass:"content"},[s(i.display,{tag:"component",attrs:{uid:i.uid}})],1)])])],1)},e=[],n=t("2f62"),c=t("ed89"),l=function(){var i=this,s=i._self._c;return s("div",{staticClass:"index"},[s("div",{staticClass:"info"},[s("div",{staticClass:"avatar-wrapper"},[s("div",{staticClass:"avatar"},[s("el-image",{staticClass:"avatar-img",attrs:{width:"100",height:"100",lazy:"",src:i.avatar,alt:"avatar"},on:{click:i.toAvatar}})],1)]),s("div",{staticClass:"basic-info"},[s("div",{staticClass:"basic-info--item"},[s("div",{staticClass:"basic-info--label"},[i._v("UID:")]),s("div",{staticClass:"basic-info--value"},[i._v(" "+i._s(i.showInfo.uid)+" ")])]),s("div",{staticClass:"basic-info--item"},[s("div",{staticClass:"basic-info--label"},[i._v("用户昵称:")]),s("div",{staticClass:"basic-info--value checking-nickname"},[i._v(" "+i._s(i.showInfo.nickname)+" "),s("i",{staticClass:"hanser icon-fatie",class:{disabled:!i.canApplyNickname||i.checkingNickname},on:{click:i.showChangeName}}),i.checkingNickname?s("span",{staticClass:"applying-msg"},[i._v("昵称 "),s("span",{staticClass:"applying-nickname"},[i._v(i._s(i.nickname))]),i._v(" 正在等待审核,请耐心等待")]):i._e(),s("div",{staticClass:"account-set"},[s("router-link",{staticClass:"alter",attrs:{to:"/tripartiteVerify-pwd"}},[i._v(" 修改密码 ")]),i.canDissmissAccount?s("div",{staticClass:"account-dismiss",on:{click:i.showDissmissAccount}},[i._v(" 注销账号 ")]):i._e()],1)])]),s("div",{staticClass:"basic-info--item"},[s("div",{staticClass:"basic-info--label"},[i._v("签名:")]),s("div",{staticClass:"basic-info--value checking-sign"},[i._v(" "+i._s(i.showInfo.sign)+" "),s("i",{staticClass:"hanser icon-fatie",class:{disabled:i.checkingSign},on:{click:i.showChangeSign}}),i.checkingSign?s("span",{staticClass:"applying-msg"},[i._v("签名正在等待审核,请耐心等待")]):i._e()])]),s("div",{staticClass:"basic-info--item"},[s("div",{staticClass:"basic-info--label"},[i._v("性别:")]),s("div",{staticClass:"basic-info--value"},[s("h-radio-group",{model:{value:i.showInfo.sex,callback:function(s){i.$set(i.showInfo,"sex",s)},expression:"showInfo.sex"}},i._l(i.sexList,(function(i){return s("h-radio",{key:i.value,attrs:{border:"",value:i.value,label:i.text}})})),1)],1)]),s("div",{staticClass:"basic-info--item"},[s("div",{staticClass:"basic-info--label"},[i._v("生日:")]),s("div",{staticClass:"basic-info--value birthday-item"},[s("el-date-picker",{attrs:{type:"date",placeholder:"选择生日"},model:{value:i.showInfo.birthday,callback:function(s){i.$set(i.showInfo,"birthday",s)},expression:"showInfo.birthday"}}),s("h-radio-group",{staticClass:"birthday",model:{value:i.showInfo.birthday,callback:function(s){i.$set(i.showInfo,"birthday",s)},expression:"showInfo.birthday"}},[s("h-radio",{attrs:{border:"",value:"",label:"保密"}})],1),s("h-radio-group",{staticClass:"lunar",model:{value:i.showInfo.lunar,callback:function(s){i.$set(i.showInfo,"lunar",s)},expression:"showInfo.lunar"}},[s("h-radio",{attrs:{border:"",value:0,label:"阳历"}}),s("h-radio",{attrs:{border:"",value:1,label:"农历"}})],1)],1)]),s("div",{staticClass:"platform-info--item"},[s("div",{staticClass:"basic-info--label"},[i._v("平台绑定:")]),s("div",{staticClass:"platform"},[s("div",{staticClass:"basic-info--value"},[s("div",{staticClass:"douyu"},[i.showInfo.bind.douyu.length?i._l(i.showInfo.bind.douyu,(function(t){return s("div",{key:"douyu"+t.nickname,staticClass:"douyu-info"},[s("div",{staticClass:"douyu-nickname"},[i._v(" "+i._s(t.nickname)+" ")])])})):i._e(),s("div",{staticClass:"douyu-no-bind"},[s("router-link",{attrs:{to:"/tripartiteVerify-pinless?platform=douyu"}},[s("div",{staticClass:"to-bind"},[i._v("增加绑定")])])],1)],2)]),s("div",{staticClass:"basic-info--value"},[s("div",{staticClass:"bilibili"},[i.showInfo.bind.bilibili.length?i._l(i.showInfo.bind.bilibili,(function(t){return s("div",{key:"bilibili"+t.nickname,staticClass:"bilibili-info"},[s("a",{staticClass:"bilibili-nickname",attrs:{href:"https://space.bilibili.com/"+t.uid,target:"_blank"}},[i._v(" "+i._s(t.nickname)+" ")])])})):i._e(),s("div",{staticClass:"bilibili-no-bind"},[s("router-link",{attrs:{to:"/tripartiteVerify-pinless?platform=bilibili"}},[s("div",{staticClass:"to-bind"},[i._v("增加绑定")])])],1)],2)])])]),s("div",{staticClass:"operations"},[s("h-button",{staticClass:"save-btn",attrs:{debonus:1e3,plain:!0},on:{click:i.sendApply}},[i._v(i._s(i.saveText))])],1)])]),s("el-dialog",{attrs:{title:"修改昵称",visible:i.changeNameVisible,"close-on-click-modal":!1},on:{"update:visible":function(s){i.changeNameVisible=s}}},[s("div",{staticClass:"attention"},[i._v("改名需消耗1张改名卡")]),s("div",{staticClass:"attention"},[i._v("社区昵称需与第三方关联账号的常用昵称相关。")]),s("br"),s("div",{staticClass:"attention"},[i._v("当前改名卡数量："+i._s(i.applyNicknameCard))]),s("ol",[s("li",[i._v("请避免使用主播、UP主或其他知名人士的相关昵称。")]),s("li",[i._v("请避免使用头衔、职位、职能、组织等特定称谓。")]),s("li",[i._v("请避免使用第三方平台官方专属词汇。")]),s("li",[i._v("请避免使用涉政、涉黄、涉暴等敏感词汇。")]),s("li",[i._v("请避免使用谐音违规或其他引发歧义的词汇。")])]),s("h-input",{staticClass:"basic-info--value__input",attrs:{maxlength:15,placeholder:"请输入要修改的昵称"},model:{value:i.nickname,callback:function(s){i.nickname=s},expression:"nickname"}}),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("h-button",{staticStyle:{"margin-right":"20px"},attrs:{size:"small",plain:""},on:{click:function(s){i.changeNameVisible=!1}}},[i._v("取 消")]),s("h-button",{attrs:{size:"small"},on:{click:i.commitNicknameApply}},[i._v("确 定")])],1)],1),i.changeNameVisibleMobile?s("div",{staticClass:"dialog"},[s("div",{staticClass:"attention"},[i._v("改名需消耗1张改名卡")]),s("div",{staticClass:"attention"},[i._v("社区昵称需与第三方关联账号的常用昵称相关。")]),s("br"),s("div",{staticClass:"attention"},[i._v("当前改名卡数量："+i._s(i.applyNicknameCard))]),i._m(0),s("h-input",{staticClass:"basic-info--value__input",attrs:{maxlength:15,placeholder:"请输入要修改的昵称"},model:{value:i.nickname,callback:function(s){i.nickname=s},expression:"nickname"}}),s("div",{staticClass:"dialog-footer"},[s("h-button",{staticStyle:{"margin-right":"20px"},attrs:{size:"small",plain:""},on:{click:i.closeMobileNicknameApply}},[i._v("取 消")]),s("h-button",{attrs:{size:"small"},on:{click:i.commitNicknameApply}},[i._v("确 定")])],1)],1):i._e(),s("el-dialog",{attrs:{title:"修改签名",visible:i.changeSignVisible,"close-on-click-modal":!1},on:{"update:visible":function(s){i.changeSignVisible=s}}},[s("div",{staticClass:"attention",staticStyle:{"margin-bottom":"20px"}},[i._v("描述文本")]),s("h-input",{staticClass:"basic-info--value__input",attrs:{maxlength:50,placeholder:"请输入要修改的签名"},model:{value:i.sign,callback:function(s){i.sign=s},expression:"sign"}}),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("h-button",{staticStyle:{"margin-right":"20px"},attrs:{size:"small",plain:""},on:{click:function(s){i.changeSignVisible=!1}}},[i._v("取 消")]),s("h-button",{attrs:{size:"small"},on:{click:i.commitSignApply}},[i._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"注销账号",visible:i.changeAccountVisible,"close-on-click-modal":!1},on:{"update:visible":function(s){i.changeAccountVisible=s}}},[s("div",{staticClass:"attention dissmiss-attention",staticStyle:{"margin-bottom":"20px"}},[i._v(" 俱乐部账号一旦注销将无法找回，其关联账号也将自动解除绑定，解绑后的关联账号不能重新注册俱乐部新账号，只能作为新增关联账号绑定至用户的其余俱乐部账号上，请谨慎操作！ ")]),s("div",{staticClass:"attention input-tips"},[i._v("确认需要注销帐号,请输入当前账号俱乐部昵称:")]),s("h-input",{staticClass:"basic-info--value__input",attrs:{placeholder:"请输入账号俱乐部昵称"},model:{value:i.signName,callback:function(s){i.signName=s},expression:"signName"}}),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("h-button",{staticStyle:{"margin-right":"20px"},attrs:{size:"small",plain:""},on:{click:function(s){i.changeAccountVisible=!1}}},[i._v("取 消")]),s("h-button",{attrs:{size:"small"},on:{click:i.commitDissmissAccount}},[i._v("确 定")])],1)],1),i.changeSignVisibleMobile?s("div",{staticClass:"dialog"},[s("div",{staticClass:"attention",staticStyle:{"margin-bottom":"20px"}},[i._v("描述文本")]),s("h-input",{staticClass:"basic-info--value__input",attrs:{maxlength:50,placeholder:"请输入要修改的签名"},model:{value:i.sign,callback:function(s){i.sign=s},expression:"sign"}}),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("h-button",{staticStyle:{"margin-right":"20px"},attrs:{size:"small",plain:""},on:{click:i.closeMobileSignApply}},[i._v("取 消")]),s("h-button",{attrs:{size:"small"},on:{click:i.commitSignApply}},[i._v("确 定")])],1)],1):i._e()],1)},o=[function(){var i=this,s=i._self._c;return s("ol",[s("li",[i._v("请避免使用主播、UP主或其他知名人士的相关昵称。")]),s("li",[i._v("请避免使用头衔、职位、职能、组织等特定称谓。")]),s("li",[i._v("请避免使用第三方平台官方专属词汇。")]),s("li",[i._v("请避免使用涉政、涉黄、涉暴等敏感词汇。")]),s("li",[i._v("请避免使用谐音违规或其他引发歧义的词汇。")])])}],h=(t("14d9"),t("db04")),r=t("365c"),u=t("3786"),m=t("4360"),d=t("6275"),g=t("dbbe"),p=t("7551"),b={name:"index",data(){return{showInfo:{nickname:"",sign:"",sex:"",birthday:"",lunar:0,bind:{douyu:[],bilibili:[]}},sexList:[{value:1,text:"男"},{value:2,text:"女"},{value:3,text:"保密"}],signName:"",canApplyNickname:!1,changeNameVisible:!1,changeSignVisible:!1,changeNameVisibleMobile:!1,changeSignVisibleMobile:!1,changeAccountVisible:!1,applyNicknameCard:0,cost:1e3,nickname:"",sign:"",checkingNickname:!1,checkingSign:!1,defaultAvatar:"https://cdn.2550505.com/share/legacy-sso/thumbnail.default.png"}},components:{HInput:d["a"],HButton:g["a"],HRadioGroup:p["b"],HRadio:p["a"]},computed:{...Object(n["d"])({user:i=>i.users.userInfo,isMobile:i=>i.media.isMobile}),avatar(){return this.user.avatar||this.defaultAvatar},saveText(){return this.checkingNickname?"请等待审核":"保存"},canDissmissAccount(){return this.showInfo.bind.bilibili.length+this.showInfo.bind.douyu.length===1}},async mounted(){this.showInfo.nickname=this.user.nickname,this.showInfo.sign=this.user.sign||"",this.showInfo.sex=this.user.sex||"",this.showInfo.birthday=this.user.birthday?new Date(this.user.birthday):"";const[i,s,t,a,e]=await Promise.all([h["a"].get(r["a"].canApplyNickname),h["a"].get(r["a"].nicknameChecking),h["a"].get(r["a"].signChecking),h["a"].get(r["a"].getUserInfo,{params:{uid:this.user.uid}}),h["a"].get(r["a"].nicknameCard)]);this.checkingNickname=s.checking,this.canApplyNickname=!i.code,this.checkingSign=t.checking,this.applyNicknameCard=e.count,this.nickname=s.nickname,0===a.code&&(this.showInfo=a.info)},methods:{closeMobileNicknameApply(){this.changeNameVisibleMobile=!1},closeMobileSignApply(){this.sign="",this.changeSignVisibleMobile=!1},sendApply(){h["a"].post(r["a"].infoSave,{sex:this.showInfo.sex,lunar:this.showInfo.lunar,birthday:this.showInfo.birthday?new Date(this.showInfo.birthday).valueOf():0}).then(i=>{0===i.code?this.$message({type:"success",message:i.msg}):this.$message({type:"warning",message:i.msg})})},toAvatar(){this.$router.push(this.$route.path+"#avatar")},showChangeName(){this.canApplyNickname&&!this.checkingNickname&&(this.isMobile?this.changeNameVisibleMobile=!0:this.changeNameVisible=!0)},showChangeSign(){this.checkingSign||(this.isMobile?this.changeSignVisibleMobile=!0:this.changeSignVisible=!0)},async commitNicknameApply(){if(!this.nickname.length||this.nickname.length>15)return void this.$message({type:"warning",message:"昵称长度错误"});if(/^毛怪\d+$/.test(this.nickname))return void this.$message({type:"warning",message:"昵称不符合规范"});const i=await h["a"].get(r["a"].nicknameCheck,{params:{nickname:this.nickname}});i.code?this.$message({type:"warning",message:i.msg}):this.canApplyNickname?this.$confirm(`是否确认使用新昵称 "${this.nickname}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",customClass:"mobile-confirm",type:"warning"}).then(async()=>{const i=await h["a"].post(r["a"].nicknameApply,{nickname:this.nickname});0===i.code?(this.changeNameVisible=!1,this.changeNameVisibleMobile=!1,this.checkingNickname=!0,this.$message({type:"success",message:"已提交申请,请耐心等待"}),this.canApplyNickname=!1):this.$message({type:"warning",message:i.msg}),this.closeMobileNicknameApply()}):this.$confirm(`本次修改昵称将花费 ${this.cost} 贡献值，是否继续`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",customClass:"mobile-confirm",type:"warning"}).then(async()=>{this.$confirm(`是否确认使用新昵称 "${this.nickname}"`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",customClass:"mobile-confirm",type:"warning"}).then(async()=>{const i=await h["a"].post(r["a"].nicknameApply,{nickname:this.nickname});0===i.code?(this.changeNameVisible=!1,this.changeNameVisibleMobile=!1,this.checkingNickname=!0,this.$message({type:"success",message:"已提交申请,请耐心等待"}),this.canApplyNickname=!1):this.$message({type:"warning",message:i.msg}),this.closeMobileNicknameApply()})})},async commitSignApply(){const i=await h["a"].post(r["a"].signApply,{sign:this.sign});0===i.code?(this.checkingSign=!0,this.changeSignVisible=!1,this.changeSignVisibleMobile=!1,this.$message({type:"success",message:"已提交申请,请耐心等待"})):this.$message({type:"warning",message:i.msg})},showDissmissAccount(){this.signName="",this.changeAccountVisible=""},commitDissmissAccount(){this.signName!==this.user.nickname?this.$message({type:"warning",message:"用户名输入不一致"}):h["a"].post(u["a"].dissmiss).then(i=>{0===i.code&&(m["a"].commit("users/changeUserInfo",{}),this.changeAccountVisible=!1,this.$message({type:"message",message:"账户已注销"}),this.$router.push("/"))})}}},v=b,f=(t("3a1e"),t("2877")),k=Object(f["a"])(v,l,o,!1,null,"1622de4f",null),y=k.exports,C=function(){var i=this,s=i._self._c;return s("div",{staticClass:"avatar"},[s("div",{staticClass:"info"},[s("div",{staticClass:"avatar-wrapper"},[s("div",{staticClass:"avatar"},[s("el-image",{staticClass:"avatar-img",attrs:{width:"100",height:"100",lazy:"","preview-src-list":i.avatarList,src:i.avatar,alt:"avatar"}})],1)]),s("input",{ref:"upload",staticClass:"upload",attrs:{disabled:i.disabled,type:"file",accept:"image/*"},on:{change:i.upload}}),s("h-button",{staticClass:"save-btn",attrs:{disabled:i.disabled,plain:!0},on:{click:i.showUpload}},[s("span",{staticClass:"upload-text"},[i._v(i._s(i.saveText))])])],1)])},_=[],w=t("0e5c"),x={name:"avatar",data(){return{userInfo:{},checking:!1,fileList:[],applyingAvatar:"",applyingAvatarThumbnail:"",defaultAvatar:"https://cdn.2550505.com/share/legacy-sso/thumbnail.default.png"}},components:{HButton:g["a"]},computed:{...Object(n["d"])({user:i=>i.users.userInfo}),avatar(){return this.applyingAvatarThumbnail||this.user.avatar||this.defaultAvatar},disabled(){return this.checking},avatarList(){return[this.applyingAvatar||this.avatar]},saveText(){return this.checking?"审核中":"更换头像"}},methods:{async upload(){const i=await h["a"].get(u["a"].upload),{auth:s,token:t}=i,a=20971520,e=this.$refs.upload.files[0];if(e.size>a)this.$message({type:"warning",message:"头像大小需小于20M"});else try{const i=await w["a"].uploadSingleFile(e,t,this.user.uid,s,(i,s)=>{this.$showProcess({title:"图片上传中...",value:i,max:s})},!1);0===i.code&&(this.applyingAvatar=i.filename,this.applyingAvatarThumbnail=i.thumbnail,h["a"].post(r["a"].avatarApply,{avatar:this.applyingAvatar}).then(i=>{0===i.code?(this.$message({type:"success",message:i.msg}),this.checking=!0):this.$message({type:"warning",message:i.msg})}))}catch(n){console.log(n)}},showUpload(){this.$refs.upload.click()}},async mounted(){const i=await h["a"].get(r["a"].avatarChecking);this.checking=i.checking,this.applyingAvatar=i.avatar}},A=x,N=(t("c104"),Object(f["a"])(A,C,_,!1,null,"611b1bde",null)),I=N.exports,$={name:"home",metaInfo(){return{title:this.titleText,meta:[{name:"keywords",content:this.keywordsText},{name:"description",content:this.user.nickname+"个人空间"}]}},data(){return{menu:[{icon:"icon-wodeziliao",text:"我的信息",hash:"#index",component:y},{icon:"icon-touxiang",text:"我的头像",hash:"#avatar",component:I}],hash:"#index"}},components:{MainHeader:c["a"]},computed:{...Object(n["d"])({user:i=>i.users.userInfo}),display(){return this.selectedItem.component},selectedItem(){return this.menu.find(i=>i.hash===this.hash)||this.menu[0]},isSelf(){return this.user.uid===Number(this.uid)},contentTitle(){return this.selectedItem.text},uid(){return this.user.uid},titleText(){return this.user.uid?this.user.nickname+"个人空间 - 毛怪俱乐部":"请先登录 - 毛怪俱乐部"},keywordsText(){return this.user.uid?this.user.nickname+",毛怪,hanser,社区,毛怪俱乐部,个人空间":"毛怪,hanser,社区,毛怪俱乐部,个人空间"}},watch:{"$route.hash"(i){this.menu.find(s=>s.hash===i)?this.hash=i:this.hash=this.menu[0].hash}},methods:{menuPath(i){return`${this.$route.path}${i.hash}`}},async mounted(){const{hash:i}=this.$route;this.menu.find(s=>s.hash===i)?this.hash=i:this.hash=this.menu[0].hash}},S=$,V=(t("dbb1"),Object(f["a"])(S,a,e,!1,null,"aefb3b5a",null));s["default"]=V.exports},abaf:function(i,s,t){},c104:function(i,s,t){"use strict";t("0000")},dbb1:function(i,s,t){"use strict";t("abaf")}}]);