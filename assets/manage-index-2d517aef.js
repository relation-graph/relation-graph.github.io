import{A as i,M as o,m as r,n as l}from"./index-c847f99a.js";import{R as c}from"./rg-header-50d5a098.js";import"./relation-graph-logo-e4609733.js";import"./svg-sprites-virtual-module-d0efe676.js";var p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("rg-header",{attrs:{title:e.english?"Online examples":"在线示例"}}),e.isMobile?t("div",{staticStyle:{"z-index":"666",position:"fixed",top:"60px",left:"10px",height:"30px",width:"30px",color:"#444444","text-align":"center","font-size":"20px",cursor:"pointer"},on:{click:function(a){e.openMenuPanel=!e.openMenuPanel}}},[t("i",{staticClass:"el-icon-menu"})]):e._e(),t("el-container",{staticStyle:{"border-top":"#efefef solid 0px","margin-top":"52px"}},[t("el-aside",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile||e.openMenuPanel,expression:"!isMobile || openMenuPanel"}],staticClass:"c-left-panel",class:{"c-left-panel-mobile":e.isMobile}},[t("div",{staticClass:"c-group-name"},[t("div",{staticClass:"c-group-name-text"},[t("i",{staticClass:"el-icon-s-grid"}),e._v(" "+e._s(e.english?"System Manage":"后台管理"))])]),t("div",{staticStyle:{width:"100%","background-color":"#ffffff",padding:"10px","padding-left":"10px"}},[t("div",{staticClass:"c-group-content"},[e._l(e.ManageMenus.children,function(a){return[t("router-link",{key:a.path,attrs:{to:a.path}},[t("div",{staticClass:"c-left-menu-item",class:[e.currentPath==="/demo/"+a.path?"c-left-menu-item-checked":""]},[t("span",{staticStyle:{display:"inline-block",width:"15px"}}),e._v(" "+e._s(a.meta.name)+" ")])])]})],2)])]),t("el-main",{staticStyle:{padding:"0px",width:"100%"}},[t("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[t("router-view",{key:e.key})],1)],1)],1)],1)},u=[];const d={name:"SystemManageIndex",components:{RgHeader:c,AppMain:i},data(){return{ManageMenus:o,openMenuPanel:!1,shsowSourcePanel:!1,demoname:"",currentPath:""}},computed:{...r(["isMobile","english"]),key(){return this.$route.path}},watch:{$route(e,n){this.currentPath=this.$route.path,this.openMenuPanel=!1}},created(){},mounted(){this.demoname=this.$route.params.demoname,this.currentPath=this.$route.path},methods:{}},s={};var m=l(d,p,u,!1,h,"b48bf05a",null,null);function h(e){for(let n in s)this[n]=s[n]}const g=function(){return m.exports}();export{g as default};
