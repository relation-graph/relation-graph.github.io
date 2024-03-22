import{m as n,n as p}from"./index-3f3d9b78.js";import{R as c}from"./rg-header-507f26ee.js";import d from"./relation-graph-logo-e4609733.js";import{R as u}from"./rg-footer-32117618.js";import"./svg-sprites-virtual-module-d0efe676.js";var m=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"login-container",staticStyle:{"background-color":"#ffffff"}},[s("rg-header",{attrs:{title:e.english?"Retrieve Password":"找回密码"}}),s("div",{staticStyle:{clear:"both","max-width":"500px",width:"100%","background-color":"#ffffff",border:"#cccccc solid 0px","margin-left":"auto","margin-right":"auto","margin-top":"100px",padding:"20px 50px"}},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[s("div",{staticClass:"title-container",staticStyle:{"line-height":"80px"}},[s("h3",{staticClass:"title"},[e._v(" "+e._s(e.english?"Retrieve Password":"找回密码")+" ")])]),s("el-form-item",{attrs:{prop:"email"}},[s("el-input",{ref:"email",attrs:{placeholder:e.english?"Email":"邮箱",name:"email",size:"large",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.email,callback:function(t){e.$set(e.loginForm,"email",t)},expression:"loginForm.email"}},[s("template",{slot:"prepend"},[s("i",{staticClass:"el-icon-message"})])],2)],1),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"verifycode"}},[s("el-input",{ref:"verifycode",attrs:{type:"text",placeholder:e.english?"Email Verification Code":"邮箱验证码",name:"verifycode",tabindex:"2",size:"large",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:function(t){return e.checkCapslock.apply(null,arguments)}},model:{value:e.loginForm.verifycode,callback:function(t){e.$set(e.loginForm,"verifycode",t)},expression:"loginForm.verifycode"}},[s("template",{slot:"prepend"},[s("i",{staticClass:"el-icon-message"})]),s("template",{slot:"append"},[s("div",{staticClass:"show-pwd",staticStyle:{width:"80px",cursor:"pointer"},on:{click:e.sendVerifycode}},[s("i",{class:e.sendVerifycodeText===(e.english?"Sending":"发送中...")?"el-icon-loading":"el-icon-s-promotion"}),e._v(" "+e._s(e.sendVerifycodeText)+" ")])])],2)],1)],1),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.english?"New Password":"新密码",name:"password",tabindex:"2",size:"large",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:function(t){return e.checkCapslock.apply(null,arguments)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[s("template",{slot:"prepend"},[s("i",{staticClass:"el-icon-lock"})]),s("template",{slot:"append"},[s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("i",{class:e.passwordType==="password"?"el-icon-arrow-down":"el-icon-view"})])])],2)],1)],1),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password2"}},[s("el-input",{key:e.passwordType,ref:"password2",attrs:{type:e.passwordType,placeholder:e.english?"Confirm Password":"重复新密码",name:"password",tabindex:"2",size:"large",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSigup.apply(null,arguments)}]},model:{value:e.loginForm.password2,callback:function(t){e.$set(e.loginForm,"password2",t)},expression:"loginForm.password2"}},[s("template",{slot:"prepend"},[s("i",{staticClass:"el-icon-lock"})]),s("template",{slot:"append"},[s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("i",{class:e.passwordType==="password"?"el-icon-arrow-down":"el-icon-view"})])])],2)],1)],1),s("el-form-item",[s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"success",size:"large"},nativeOn:{click:function(t){return t.preventDefault(),e.handleSigup.apply(null,arguments)}}},[e._v(" "+e._s(e.english?"Change Password":"修改密码")+" ")])],1),s("el-form-item",[s("div",{staticStyle:{"text-align":"right"}},[s("el-link",{attrs:{type:"primary"},on:{click:e.handleLogin}},[e._v(" "+e._s(e.english?"Already have an account? Click to log in. ":"已有账号？点击登录")+" ")])],1)])],1)],1),s("div",{staticStyle:{height:"400px"}}),s("rg-footer")],1)},h=[];const f={name:"Login",components:{RgFooter:u,RgHeader:c,Logo:d},data(){return{sendVerifycodeText:"",verifycodeIsSended:!1,loginForm:{email:"",verifycode:"",password:"",password2:""},loginRules:{email:[{required:!0,trigger:"blur",validator:(a,r,i)=>{r.trim()===""?i(new Error(this.english?"Email cannot be empty":"邮箱不能为空")):i()}}],verifycode:[{required:!0,trigger:"blur",validator:(a,r,i)=>{r.trim()===""?i(new Error(this.english?"Verification code cannot be empty":"验证码不能为空")):i()}}],password:[{required:!0,trigger:"blur",validator:(a,r,i)=>{r.length<6?i(new Error(this.english?"Password length cannot be less than 6 characters":"密码长度不能少于6位")):i()}}],password2:[{required:!0,trigger:"blur",validator:(a,r,i)=>{this.loginForm.password!==this.loginForm.password2?i(new Error(this.english?"Passwords do not match!":"两次密码不一致！")):i()}}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},computed:{...n(["english"])},watch:{$route:{handler:function(e){const o=e.query;o&&(this.redirect=o.redirect,this.otherQuery=this.getOtherQuery(o))},immediate:!0}},created(){},mounted(){this.sendVerifycodeText=this.english?"Send code":"发送验证码",this.loginForm.email===""?this.$refs.email.focus():this.loginForm.password===""&&this.$refs.password.focus()},destroyed(){},methods:{checkCapslock({shiftKey:e,key:o}={}){o&&o.length===1&&(e&&o>="a"&&o<="z"||!e&&o>="A"&&o<="Z"?this.capsTooltip=!0:this.capsTooltip=!1),o==="CapsLock"&&this.capsTooltip===!0&&(this.capsTooltip=!1)},showPwd(){this.passwordType==="password"?this.passwordType="":this.passwordType="password",this.$nextTick(()=>{this.$refs.password.focus()})},async sendVerifycode(){if(this.verifycodeIsSended)return;if(!this.loginForm.email){this.$message({message:this.english?"Please fill in email":"请填写邮箱",type:"warning",duration:5*1e3});return}if(this.loginForm.email.indexOf("@")===-1){this.$message({message:this.english?"Email format is incorrect":"邮箱格式错误",type:"warning",duration:5*1e3});return}this.sendVerifycodeText=this.english?"Sending..":"发送中...",await this.SeeksHttp.postJson("/account/sendVerifyCode",{email:this.loginForm.email,is_reset:"1"})?(this.sendVerifycodeText=this.english?"Sent!":"已发送！",this.verifycodeIsSended=!0):(this.sendVerifycodeText=this.english?"Resend":"重新发送",this.verifycodeIsSended=!1)},handleSigup(){this.$refs.loginForm.validate(e=>{if(e)this.loading=!0,this.SeeksHttp.postJson("/account/resetpassword",this.loginForm).then(o=>{o&&(this.$message({message:this.english?"Password changed successfully!":"密码修改成功！",type:"success",duration:10*1e3}),this.$store.dispatch("user/logout").then(()=>{this.$router.push("/login")})),this.loading=!1});else return console.log("error submit!!"),!1})},handleLogin(){this.$router.push("/login")},getOtherQuery(e){return Object.keys(e).reduce((o,s)=>(s!=="redirect"&&(o[s]=e[s]),o),{})}}},l={};var g=p(f,m,h,!1,w,null,null,null);function w(e){for(let o in l)this[o]=l[o]}const k=function(){return g.exports}();export{k as default};
