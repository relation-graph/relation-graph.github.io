import{b as r,m as i,n as o}from"./index-4e420adb.js";import s from"./relation-graph-logo-e4609733.js";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"border-top":"#efefef solid 1px","background-color":"#efefef"}},[e("div",{staticStyle:{"max-width":"1000px","margin-left":"auto","margin-right":"auto"}},[e("div",{staticStyle:{"max-width":"400px","margin-left":"auto","margin-right":"auto","padding-top":"30px"}},[e("el-row",[e("el-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[e("Logo",{attrs:{width:"40",height:"40"}})],1),e("el-col",{staticStyle:{"padding-top":"0px","padding-left":"10px"},attrs:{span:16}},[e("div",{staticStyle:{color:"#5a5e66","font-size":"12px","padding-top":"15px"}},[e("a",{attrs:{href:"https://github.com/seeksdream/relation-graph",target:"_blank"}},[t._v("Github")]),e("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"/#/privacy-policy"}},[t._v(" "+t._s(t.english?"Privacy":"隐私条款")+" ")]),e("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"/#/terms"}},[t._v(" "+t._s(t.english?"Terms":"服务条款")+" ")])])])],1)],1),e("div",{staticStyle:{"line-height":"40px","text-align":"center","font-size":"12px",color:"#000000"}},[t.showBeian?e("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("京ICP备19054220号-5")]):t._e(),t._v(" © relation-graph.com 2001-2023. All Rights Reserved. ")])])])},c=[];const h={name:"RgFooter",components:{Logo:s},computed:{...r({userInfo:t=>t.user.userInfo,clientId:t=>t.user.clientId}),...i(["english"]),showBeian(){return document.URL.indexOf("github.io")===-1},userNickName(){const t=this.userInfo.account||"";return t.length>6?t.substring(0,6)+"...":t}},data(){return{currentPath:""}},mounted(){this.currentPath=this.$route.path},methods:{changeLang(t){console.log(t),t==="en"&&this.$notify({title:"hi：",message:"The author is busy at work and has not yet completed the translation. Stay tuned！",type:"warning"})}}},n={};var p=o(h,l,c,!1,g,"0b7d4792",null,null);function g(t){for(let a in n)this[a]=n[a]}const m=function(){return p.exports}();export{m as R};
