import{m as n,b as o,n as r}from"./index-c847f99a.js";import{R as d}from"./rg-header-50d5a098.js";import{R as l}from"./rg-footer-aa2ac9b9.js";import"./relation-graph-logo-e4609733.js";import"./svg-sprites-virtual-module-d0efe676.js";var c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("rg-header",{attrs:{title:"用户中心"}}),t("div",{class:[e.isMobile?"c-page-mobile":"c-page-pc"]},[t("div",{staticStyle:{"max-width":"1200px","margin-left":"auto","margin-right":"auto",padding:"30px"}},[e.vipCards.length>0?t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.cardLoading,expression:"cardLoading"}],staticStyle:{"text-align":"left","padding-top":"30px","min-height":"400px"}},[t("div",{staticStyle:{position:"relative"}},[e._l(e.vipCards,function(s){return[t("div",{key:s.id},[e._v(" "+e._s(s.id)+" ")])]})],2)]):e._e()]),t("div",{staticStyle:{height:"600px"}}),t("rg-footer")],1)],1)},u=[];const p={name:"UserIndex",components:{RgFooter:l,RgHeader:d},data(){return{showPayCode:!1,cardLoading:!0,checkedRoute:null,vipCards:[]}},computed:{...n(["isMobile","english"]),...o({userInfo:e=>e.user.userInfo}),userNickName(){return this.userInfo&&this.userInfo.account||""}},mounted(){this.loadOnlineUsers()},methods:{async logout(){await this.$store.dispatch("user/logout"),await this.$router.push("/login")},async loadOnlineUsers(){const e=await this.SeeksHttp.postJson("/online-user/get-online-users",{});console.log("vipCards:",e.data),this.vipCards=e.data.data,this.cardLoading=!1}}},i={};var m=r(p,c,u,!1,_,"cb99c762",null,null);function _(e){for(let a in i)this[a]=i[a]}const y=function(){return m.exports}();export{y as default};
