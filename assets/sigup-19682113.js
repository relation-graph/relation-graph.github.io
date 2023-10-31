import{m as n,n as p}from"./index-28740cc1.js";import{R as c}from"./rg-header-40c5dc40.js";import d from"./relation-graph-logo-e4609733.js";import{R as u}from"./rg-footer-6a8700ea.js";import"./svg-sprites-virtual-module-d0efe676.js";var m=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"login-container",staticStyle:{"background-color":"#ffffff"}},[t("rg-header",{attrs:{title:e.english?"Sigup":"新用户注册"}}),t("div",{staticStyle:{clear:"both","max-width":"500px",width:"100%","background-color":"#ffffff",border:"#cccccc solid 0px","margin-left":"auto","margin-right":"auto","margin-top":"100px",padding:"20px 50px"}},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[t("div",{staticClass:"title-container",staticStyle:{"line-height":"80px"}},[t("h3",{staticClass:"title"},[e._v(" "+e._s(e.english?"Sigup":"用户注册")+" ")])]),t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{ref:"email",attrs:{placeholder:e.english?"Email":"邮箱",name:"email",size:"large",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.email,callback:function(s){e.$set(e.loginForm,"email",s)},expression:"loginForm.email"}},[t("template",{slot:"prepend"},[t("i",{staticClass:"el-icon-message"})])],2)],1),t("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(s){e.capsTooltip=s},expression:"capsTooltip"}},[t("el-form-item",{attrs:{prop:"verifycode"}},[t("el-input",{ref:"verifycode",attrs:{type:"text",placeholder:e.english?"Email Verification Code":"邮箱验证码",name:"verifycode",tabindex:"2",size:"large",autocomplete:"on"},on:{blur:function(s){e.capsTooltip=!1}},nativeOn:{keyup:function(s){return e.checkCapslock.apply(null,arguments)}},model:{value:e.loginForm.verifycode,callback:function(s){e.$set(e.loginForm,"verifycode",s)},expression:"loginForm.verifycode"}},[t("template",{slot:"prepend"},[t("i",{staticClass:"el-icon-message"})]),t("template",{slot:"append"},[t("div",{staticClass:"show-pwd",staticStyle:{width:"80px"},style:{cursor:e.verifycodeIsSended?"wait":"pointer"},on:{click:e.sendVerifycode}},[t("i",{staticClass:"el-icon-s-promotion"}),e._v(" "+e._s(e.sendVerifycodeText)+" ")])])],2)],1)],1),t("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(s){e.capsTooltip=s},expression:"capsTooltip"}},[t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.english?"Password":"密码",name:"password",tabindex:"2",size:"large",autocomplete:"on"},on:{blur:function(s){e.capsTooltip=!1}},nativeOn:{keyup:function(s){return e.checkCapslock.apply(null,arguments)}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}},[t("template",{slot:"prepend"},[t("i",{staticClass:"el-icon-lock"})]),t("template",{slot:"append"},[t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("i",{class:e.passwordType==="password"?"el-icon-arrow-down":"el-icon-view"})])])],2)],1)],1),t("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(s){e.capsTooltip=s},expression:"capsTooltip"}},[t("el-form-item",{attrs:{prop:"password2"}},[t("el-input",{key:e.passwordType,ref:"password2",attrs:{type:e.passwordType,placeholder:e.english?"Confirm Password ":"重复密码",name:"password",tabindex:"2",size:"large",autocomplete:"on"},on:{blur:function(s){e.capsTooltip=!1}},nativeOn:{keyup:[function(s){return e.checkCapslock.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleSigup.apply(null,arguments)}]},model:{value:e.loginForm.password2,callback:function(s){e.$set(e.loginForm,"password2",s)},expression:"loginForm.password2"}},[t("template",{slot:"prepend"},[t("i",{staticClass:"el-icon-lock"})]),t("template",{slot:"append"},[t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("i",{class:e.passwordType==="password"?"el-icon-arrow-down":"el-icon-view"})])])],2)],1)],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"success",size:"large"},nativeOn:{click:function(s){return s.preventDefault(),e.handleSigup.apply(null,arguments)}}},[e._v(" "+e._s(e.english?"Sigup":"注册")+" ")])],1),t("el-form-item",[t("div",{staticStyle:{"text-align":"left"}},[t("span",{staticStyle:{color:"#666666","font-size":"12px"}},[t("i",{staticClass:"el-icon-success"}),e._v(" "+e._s(e.english?"I have read and agree to the Privacy Policy and Terms of Service.":"我已阅读并同意隐私条款和服务条款")+" ")]),t("el-link",{staticStyle:{"margin-left":"50px"},attrs:{type:"primary"},on:{click:e.handleLogin}},[e._v(" "+e._s(e.english?"Already have an account? Click to log in. ":"已有账号？点击登录")+" ")])],1)])],1)],1),t("div",{staticStyle:{height:"400px"}}),t("rg-footer")],1)},h=[];const f={name:"Login",components:{RgFooter:u,RgHeader:c,Logo:d},data(){return{sendVerifycodeText:"",verifycodeIsSended:!1,loginForm:{email:"",verifycode:"",password:"",password2:""},loginRules:{email:[{required:!0,trigger:"blur",validator:(a,r,o)=>{r.trim()===""?o(new Error(this.english?"Username cannot be empty":"用户名不能为空")):o()}}],verifycode:[{required:!0,trigger:"blur",validator:(a,r,o)=>{r.trim()===""?o(new Error(this.english?"Verification code cannot be empty":"验证码不能为空")):o()}}],password:[{required:!0,trigger:"blur",validator:(a,r,o)=>{r.length<3?o(new Error(this.english?"Password length cannot be less than 6 characters":"密码长度不能少于3位")):o()}}],password2:[{required:!0,trigger:"blur",validator:(a,r,o)=>{this.loginForm.password!==this.loginForm.password2?o(new Error(this.english?"Passwords do not match!":"两次密码不一致！")):o()}}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},computed:{...n(["english"])},watch:{$route:{handler:function(e){const i=e.query;i&&(this.redirect=i.redirect,this.otherQuery=this.getOtherQuery(i))},immediate:!0}},created(){},mounted(){this.sendVerifycodeText=this.english?"Send code":"发送验证码",this.loginForm.email===""?this.$refs.email.focus():this.loginForm.password===""&&this.$refs.password.focus()},destroyed(){},methods:{checkCapslock({shiftKey:e,key:i}={}){i&&i.length===1&&(e&&i>="a"&&i<="z"||!e&&i>="A"&&i<="Z"?this.capsTooltip=!0:this.capsTooltip=!1),i==="CapsLock"&&this.capsTooltip===!0&&(this.capsTooltip=!1)},showPwd(){this.passwordType==="password"?this.passwordType="":this.passwordType="password",this.$nextTick(()=>{this.$refs.password.focus()})},async sendVerifycode(){if(this.verifycodeIsSended)return;if(!this.loginForm.email){this.$message({message:this.english?"Please fill in email":"请填写邮箱",type:"warning",duration:5*1e3});return}if(this.loginForm.email.indexOf("@")===-1){this.$message({message:this.english?"Email format is incorrect":"邮箱格式错误",type:"warning",duration:5*1e3});return}this.sendVerifycodeText=this.english?"Sending..":"发送中...",await this.SeeksHttp.postJson("/account/sendVerifyCode",{email:this.loginForm.email})?(this.sendVerifycodeText=this.english?"Sent!":"已发送！",this.verifycodeIsSended=!0):(this.sendVerifycodeText=this.english?"Resend":"重新发送",this.verifycodeIsSended=!1)},handleSigup(){this.$refs.loginForm.validate(e=>{if(e)this.loading=!0,this.$store.dispatch("user/sigup",this.loginForm).then(async i=>{this.loading=!1,i&&(this.$message({message:this.english?"Sigup successfully!":"注册成功！",type:"success",duration:10*1e3}),await this.$store.dispatch("user/getInfo"),await this.$router.push("/user"))});else return console.log("error submit!!"),!1})},handleLogin(){this.redirect?this.$router.push("/login?redirect="+this.redirect):this.$router.push("/login")},getOtherQuery(e){return Object.keys(e).reduce((i,t)=>(t!=="redirect"&&(i[t]=e[t]),i),{})}}},l={};var g=p(f,m,h,!1,y,null,null,null);function y(e){for(let i in l)this[i]=l[i]}const k=function(){return g.exports}();export{k as default};
