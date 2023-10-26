import{m as o,d as n,i as d,s as p,n as l}from"./index-120b3164.js";import{R as c}from"./rg-header-f255050b.js";import h from"./relation-graph-logo-e4609733.js";import{V as m}from"./vip-card-e1f6433a.js";import{R as u}from"./rg-footer-e118f55f.js";import{G as g}from"./GoToVipService-c14e0081.js";import{V as v}from"./VipIcon-aceeff3c.js";import{P as y}from"./AppConfig-ea348225.js";import"./svg-sprites-virtual-module-d0efe676.js";var f=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("rg-header",{attrs:{title:"用户中心"}}),t("div",{class:[e.isMobile?"c-page-mobile":"c-page-pc"]},[t("div",{staticStyle:{"max-width":"1200px","margin-left":"auto","margin-right":"auto",padding:"30px"}},[t("div",[t("div",{staticClass:"c-vip-thanks",staticStyle:{height:"200px"}},[e.isVipUser?e._e():t("div",[t("div",{staticStyle:{"font-weight":"bold","font-size":"14px","line-height":"30px",color:"rgb(62, 80, 96)","padding-top":"30px"}},[e._v(" "+e._s(e.english?"Your support enables relation-graph to go further and last longer:":"您的支持能让 relation-graph 能够走的更远、更持久：")+" ")])]),e.isVipUser?t("div",[t("div",{staticClass:"c-vip-thanks-left"},[t("div",{staticClass:"hoja"},[t("div",{staticStyle:{"padding-top":"7px"}},[t("Logo",{attrs:{width:"25",height:"25"}})],1)])]),t("div",{staticClass:"c-vip-thanks-right"},[t("div",{staticStyle:{"font-weight":"bold","font-size":"14px","line-height":"30px",color:"rgb(62, 80, 96)"}},[e._v(" "+e._s(e.english?"Dear VIP member:":"尊敬的VIP会员您好！")+" ")]),t("div",{staticStyle:{"font-size":"14px","line-height":"25px",color:"rgb(62, 80, 96)"}},[t("div",[e._v(" "+e._s(e.english?"Thank you for your support. Your support enables relation-graph to go further and last longer.":"感谢您的支持，您的支持能让 relation-graph 能够走的更远、更持久。")+" ")])])]),t("div",{staticStyle:{clear:"both"}})]):e._e(),t("div",{staticStyle:{position:"absolute",right:"10px",top:"10px","background-color":"rgba(255,255,255,0.48)",height:"40px","padding-left":"20px","padding-right":"20px","border-radius":"7px"}},[t("div",{staticClass:"c-user-welcome-text",staticStyle:{"font-size":"14px","text-align":"right","line-height":"40px"}},[t("span",{staticStyle:{color:"#df7f03"}},[e._v(e._s(e.userNickName))]),t("el-link",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:e.logout}},[t("i",{staticClass:"el-icon-switch-button"}),e._v(" "+e._s(e.english?"Sigout":"退出登录")+" ")])],1)])]),e.cardLoading?e._e():t("div",[e.isVipUserFromRemote?t("div",{staticStyle:{display:"flex","padding-top":"30px","font-size":"12px"}},[e.isPersonVipUserFromRemote?t("div",{staticStyle:{width:"40%"}},[t("div",{staticStyle:{"line-height":"30px"}},[e._v(" "+e._s(e.english?"You are already a Perrsonal VIP Member":"您已经是个人VIP会员")+" ")]),t("vip-card",{attrs:{"vip-card":e.userPersonVIPCard}}),t("div",{staticStyle:{clear:"both",height:"10px"}}),e.isEntVipUserFromRemote?e._e():t("div",[e.english?t("div",{staticStyle:{"line-height":"25px"}},[t("div",[e._v(" If you need. Please Upgrade to a Enterprise VIP Member on Buymeacoffee and you will receive a Enterprise VIP membership redemption code. ")]),t("div",[t("el-link",{attrs:{href:"https://www.buymeacoffee.com/relation_graph/membership",target:"_blank",type:"primary"}},[e._v("https://www.buymeacoffee.com/relation_graph/membership")])],1)]):t("el-button",{staticStyle:{background:"linear-gradient(112.58deg, rgba(255,159,36,0.25) -5.16%, rgb(246, 221, 255) 105.31%)",color:"#F56C6C"},attrs:{type:"danger",icon:"el-icon-s-promotion",round:"",plain:""},on:{click:e.showEntVipPayCode}},[e._v(" "+e._s(e.english?"Upgrade to a Enterprise VIP Member":"升级为企业会员")+" ")])],1)],1):e._e(),e.isEntVipUserFromRemote?t("div",{staticStyle:{width:"40%","padding-left":"30px"}},[t("div",{staticStyle:{"line-height":"30px"}},[e._v(" "+e._s(e.english?"You are already a Enterprise VIP Member":"您已经是企业VIP会员")+" ")]),t("vip-card",{attrs:{"vip-card":e.userEntVIPCard}}),t("div",{staticStyle:{clear:"both",height:"10px"}}),e.english?t("div",{staticStyle:{"line-height":"30px"}},[t("div",[e._v(" Please contact me via WhatsApp. ")])]):e._e()],1):e._e()]):e._e(),!e.isVipUserFromRemote||e.showPayCode?t("div",[t("div",{staticStyle:{"margin-top":"20px","font-size":"14px",padding:"10px"}},[e.english?t("div",[t("div",[e._v(" Please become a member on Buymeacoffee and you will receive a VIP membership redemption code. Additionally, you can add my WhatsApp and we can communicate and clarify any questions online. ")]),t("div",[t("el-link",{attrs:{href:"https://www.buymeacoffee.com/relation_graph/membership",target:"_blank",type:"primary"}},[e._v("https://www.buymeacoffee.com/relation_graph/membership")])],1)]):t("div",{staticStyle:{"text-align":"center"}},[e.payForEntVIP?t("div",[t("div",{staticStyle:{"padding-bottom":"15px"}},[e._v(" 请扫使用【微信】描以下二维码，付款完成后您的账号将升级为【企业VIP】，即刻生效: ")]),e.payCode?t("div",[t("GoToVipService",{attrs:{"hide-message":!0,"ent-vip":!0}},[t("img",{staticClass:"c-pay-code",attrs:{src:e.payCode}})])],1):e._e()]):t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.payCodeLoading,expression:"payCodeLoading"}],staticStyle:{height:"300px"}},[t("div",{staticStyle:{"padding-bottom":"15px"}},[e._v(" 请使用【微信】扫描以下二维码，付款完成成为【个人VIP】，即刻生效: ")]),e.payCode?t("div",[t("GoToVipService",{attrs:{"hide-message":!0,"person-vip":!0}},[t("img",{staticClass:"c-pay-code",attrs:{src:e.payCode}})])],1):e._e()])])]),t("div",{staticStyle:{"margin-top":"20px","font-size":"14px",padding:"10px",color:"#666666","text-align":"center"}},[e.english?t("div",[e._v(" If you have any questions regarding payment and account issues, please feel free to contact me via WhatsApp. "),e._m(0)]):t("div",[e._v(" 当您在支付过程中出现异常，或者支付完成后帐号异常，请联系："+e._s(e.PRICE_SETTING.ACCOUNT_QUESTION_TO)+" ")])])]):e._e()])])]),t("div",{staticStyle:{height:"600px"}}),t("rg-footer")],1)],1)},_=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticStyle:{"text-align":"center","padding-top":"20px"}},[t("img",{staticStyle:{width:"400px","border-radius":"10px"},attrs:{src:"/images/relation-graph-whatsapp.png"}})])}];const x={name:"UserIndex",components:{VipIcon:v,GoToVipService:g,RgFooter:u,VipCard:m,RgHeader:c,Logo:h},data(){return{PRICE_SETTING:y,showPayCode:!1,payCodeLoading:!1,payCode:"",orderNo:"",cardLoading:!0,payForEntVIP:!1,isVipUserFromRemote:!1,isPersonVipUserFromRemote:!1,isEntVipUserFromRemote:!1,userPersonVIPCard:null,userEntVIPCard:null,currentTimer:void 0,vipCards:[]}},computed:{...o(["isMobile","english"]),...n({userInfo:e=>e.user.userInfo}),isVipUser(){return this.userInfo&&this.userInfo.roles.length>0},userNickName(){return this.userInfo&&this.userInfo.account||""}},watch:{english(e){e?this.currentTimer&&clearTimeout(this.currentTimer):this.loadPayCode()}},mounted(){this.payForEntVIP=this.$route.query.forEnt==="1",this.loadPayCode(),this.loadVipCards()},beforeDestroy(){this.currentTimer&&clearTimeout(this.currentTimer)},methods:{async logout(){await this.$store.dispatch("user/logout"),await this.$router.push("/login")},exchangeCoupon(){const e=this.english?"You are already a member, and you can still use a redemption code to renew your membership.":"您已经是会员，您仍然可以使用兑换码为会员续期",i=this.english?"Use redemption code:":"使用兑换码：";this.$prompt(this.isVipUser?e:"",i,{closeOnClickModal:!1,confirmButtonText:this.english?"Confirm redemption":"确定兑换",cancelButtonText:this.english?"Cancel":"取消",inputPattern:/^.{6,50}$/,inputErrorMessage:this.english?"Please enter the redemption code in the correct format.":"请输入正确格式的兑换码"}).then(({value:t})=>{const r=d.Loading.service({fullscreen:!0});this.SeeksHttp.postJson("/account/useExchangeCoupon",{exCode:t}).then(async s=>{r.close(),console.log(s.data),s&&s.data&&s.data.code===200&&(this.$message({type:"success",message:s.data.data}),await this.$store.dispatch("user/getInfo"),await this.loadVipCards())})})},async loadPayCode(){if(this.english)return;this.payCodeLoading=!0;const e=await this.SeeksHttp.postJson("/pay/createOrder",{vipType:this.payForEntVIP?"ent-vip":"person-vip"});console.log("loadPayCode:",e.data);const i=e.data.data;if(this.payCode=i.url,this.orderNo=i.orderNo,!this.payCode){this.$message({type:"error",message:"发生异常，请稍后再试！"}),this.payCodeLoading=!1;return}this.currentTimer!==void 0&&(clearTimeout(this.currentTimer),this.currentTimer=void 0),this.checkOrderStatus(1),this.payCodeLoading=!1},async checkOrderStatus(e=1){const i=await this.SeeksHttp.postJson("/pay/order-status",{orderNo:this.orderNo});if(console.log("loadPayCode:",i.data),i.data.data===!0){await p.dispatch("user/getInfo"),await this.$router.push("/user");return}e>60||(this.currentTimer=setTimeout(()=>{this.checkOrderStatus(e+1)},5e3))},async loadVipCards(){const e=await this.SeeksHttp.postJson("/account/vip-info",{});console.log("vipCards:",e.data),this.vipCards=e.data.data,this.vipCards.forEach(i=>{i.isDisabled!=="1"&&(this.isVipUserFromRemote=!0,i.roleId==="ent-vip"&&(this.isEntVipUserFromRemote=!0,this.userEntVIPCard=i),i.roleId==="person-vip"&&(this.isPersonVipUserFromRemote=!0,this.userPersonVIPCard=i))}),this.cardLoading=!1},showEntVipPayCode(){this.payForEntVIP=!0,this.showPayCode=!0,this.loadPayCode()}}},a={};var C=l(x,f,_,!1,V,"5d8bddca",null,null);function V(e){for(let i in a)this[i]=a[i]}const F=function(){return C.exports}();export{F as default};
