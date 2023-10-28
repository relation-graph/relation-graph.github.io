import{A as i,m as r,n as c}from"./index-4e420adb.js";import{R as p}from"./rg-header-ac15f365.js";import{R as l}from"./rg-footer-858ac782.js";import"./relation-graph-logo-e4609733.js";import"./svg-sprites-virtual-module-d0efe676.js";const m=[{groupName:"快速开始",groupName_en:"Getting Started",pages:[{name:"快速开始(vue2)",name_en:"Using Vue2",path:"/docs/start"},{name:"在Vue3中使用",name_en:"Using Vue3",path:"/docs/start-vue3"},{name:"在React中使用",name_en:"Using React",path:"/docs/start-react"},{name:"通过CDN方式使用",name_en:"Using CDN",path:"/docs/start-cdn"},{name:"在线运行",name_en:"Run online",path:"/docs/start-run"}]},{groupName:"图谱配置",groupName_en:"Graph",pages:[{name:"Graph 图谱",name_en:"Graph",path:"/docs/graph"},{name:"Layout 布局",name_en:"Layouts",path:"/docs/layout"},{name:"Graph instance API",name_en:"Graph instance API",path:"/docs/graph-instance-api"}]},{groupName:"数据配置",groupName_en:"Graph JsonData",pages:[{name:"数据格式",name_en:"About graph data",path:"/docs/data"},{name:"Node 节点",name_en:"Node",path:"/docs/node"},{name:"Link 关系 & Line 线条",name_en:"Link & Line",path:"/docs/link"}]}],u={name:"DocsIndex",components:{RgFooter:l,AppMain:i,RgHeader:p},data(){return{openMenuPanel:!1,checkedRoute:null,currentPath:"",docsMenus:m}},computed:{...r(["english","isMobile"])},watch:{$route(e,n){this.currentPath=this.$route.path,this.openMenuPanel=!1}},mounted(){this.currentPath=this.$route.path}};var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"c-doc"},[t("rg-header",{attrs:{title:"使用 & 配置 "}}),e.isMobile?t("div",{staticStyle:{"z-index":"50",position:"fixed",top:"60px",left:"10px",height:"30px",width:"30px",color:"#444444","text-align":"center","font-size":"20px",cursor:"pointer"},on:{click:function(a){e.openMenuPanel=!e.openMenuPanel}}},[t("i",{staticClass:"el-icon-menu"})]):e._e(),t("div",{staticStyle:{"max-width":"1500px",width:"100%","margin-left":"auto","margin-right":"auto"}},[t("el-container",{staticStyle:{padding:"0px",margin:"0px","margin-top":"52px"}},[t("el-aside",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile||e.openMenuPanel,expression:"!isMobile || openMenuPanel"}],staticClass:"c-left-panel",class:{"c-left-panel-mobile":e.isMobile}},[e._l(e.docsMenus,function(a){return[t("div",{key:a.groupName},[t("div",{staticClass:"c-group-name"},[e._v(e._s(e.english?a.groupName_en:a.groupName))]),t("div",{staticClass:"c-group-content"},e._l(a.pages,function(s){return t("router-link",{key:s.path,attrs:{to:s.path}},[t("div",{staticClass:"c-left-menu-item",class:[e.currentPath===s.path?"c-left-menu-item-checked":""]},[e._v(" "+e._s(e.english?s.name_en:s.name)+" ")])])}),1)])]})],2),t("el-main",{staticStyle:{padding:"20px"}},[t("app-main")],1)],1)],1),t("rg-footer")],1)},_=[];const o={};var h=c(u,d,_,!1,g,"37b0e5ce",null,null);function g(e){for(let n in o)this[n]=o[n]}const N=function(){return h.exports}();export{N as default};
