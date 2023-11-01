import{R as a}from"./rg-header-f6367e32.js";import n from"./relation-graph-logo-e4609733.js";import{R as l}from"./rg-footer-f00429f6.js";import{m as p,n as d}from"./index-fca44c1d.js";import"./svg-sprites-virtual-module-d0efe676.js";var c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"login-container",staticStyle:{"background-color":"#ffffff"}},[t("rg-header",{attrs:{title:e.english?"User sigin":"用户登陆"}}),t("div",{staticStyle:{clear:"both","max-width":"500px",width:"100%",height:"500px","background-color":"#ffffff",border:"#efefef solid 0px","margin-left":"auto","margin-right":"auto","margin-top":"120px",padding:"50px","border-radius":"10px"}},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[t("div",{staticClass:"title-container",staticStyle:{"line-height":"80px"}},[t("div",{staticStyle:{"padding-left":"0px"}},[t("h3",{staticClass:"title"},[e._v(e._s(e.english?"User sigin":"用户登陆"))])])]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{ref:"username",attrs:{placeholder:e.english?"email":"邮箱",name:"username",size:"large",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}},[t("template",{slot:"prepend"},[t("i",{staticClass:"el-icon-user-solid"})])],2)],1),t("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(s){e.capsTooltip=s},expression:"capsTooltip"}},[t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.english?"password":"密码",name:"password",tabindex:"2",size:"large",autocomplete:"on"},on:{blur:function(s){e.capsTooltip=!1}},nativeOn:{keyup:[function(s){return e.checkCapslock.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin.apply(null,arguments)}]},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}},[t("template",{slot:"prepend"},[t("i",{staticClass:"el-icon-lock"})]),t("template",{slot:"append"},[t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("i",{class:e.passwordType==="password"?"el-icon-arrow-down":"el-icon-view"})])])],2)],1)],1),t("el-form-item",{staticStyle:{"text-align":"center"}},[t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary",size:"large"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e._v(" "+e._s(e.english?"Sigin":"登录")+" ")])],1)],1),t("div",{staticStyle:{"text-align":"right","padding-top":"20px"}},[t("el-link",{attrs:{type:"primary"},on:{click:e.handleSigup}},[e._v(e._s(e.english?"Sigup":"注册新用户"))]),t("el-link",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary"},on:{click:e.resetPassword}},[e._v(e._s(e.english?"Retrieve Password":"找回密码"))])],1)],1),t("div",{staticStyle:{height:"300px"}}),t("rg-footer")],1)},u=[];const m={name:"Login",components:{RgFooter:l,RgHeader:a,Logo:n},data(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:(t,s,r)=>{s.trim()===""?r(new Error(this.english?"Username cannot be empty!":"用户名不能为空")):r()}}],password:[{required:!0,trigger:"blur",validator:(t,s,r)=>{s.length<3?r(new Error(this.english?"Password is too short":"密码长度不能少于3位")):r()}}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,otherQuery:{}}},computed:{...p(["english"])},created(){},mounted(){},destroyed(){},methods:{checkCapslock({shiftKey:e,key:o}={}){o&&o.length===1&&(e&&o>="a"&&o<="z"||!e&&o>="A"&&o<="Z"?this.capsTooltip=!0:this.capsTooltip=!1),o==="CapsLock"&&this.capsTooltip===!0&&(this.capsTooltip=!1)},showPwd(){this.passwordType==="password"?this.passwordType="":this.passwordType="password",this.$nextTick(()=>{this.$refs.password.focus()})},handleLogin(){this.$refs.loginForm.validate(e=>{if(e){this.loading=!0;const o={account:this.loginForm.username,password:this.loginForm.password};this.$store.dispatch("user/login",o).then(async t=>{this.loading=!1,t&&(await this.$store.dispatch("user/getInfo"),await this.$router.push(this.$route.query.redrict||"/user"))})}else return console.log("error submit!!"),!1})},handleSigup(){this.$router.push("/sigup")},resetPassword(){this.$router.push("/resetpassword")}}},i={};var g=d(m,c,u,!1,h,"77ce310f",null,null);function h(e){for(let o in i)this[o]=i[o]}const x=function(){return g.exports}();export{x as default};
