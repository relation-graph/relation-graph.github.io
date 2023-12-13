import{m as r,b as c,n as l}from"./index-f64bbabb.js";var d=function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("div",[t("div",{class:[s.isMobile?"c-page-mobile":"c-page-pc"]},[t("div",{},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:s.cardLoading,expression:"cardLoading"}],staticStyle:{"text-align":"left",padding:"10px","min-height":"400px"}},[t("div",{staticStyle:{position:"relative","font-size":"12px"}},[t("div",{staticStyle:{"padding-left":"90px","padding-bottom":"10px"}},[t("el-button",{attrs:{size:"mini",icon:"el-icon-refresh",type:"success",round:""},on:{click:s.loadSessionList}},[s._v(" 刷新在线会话列表 ")])],1),t("div",{staticClass:"c-form-row"},[t("div",{staticClass:"c-form-row-label"},[s._v("登录状态：")]),t("el-radio-group",{attrs:{size:"mini"},on:{change:s.filterSessions},model:{value:s.form_logined,callback:function(e){s.form_logined=e},expression:"form_logined"}},[t("el-radio-button",{attrs:{label:""}},[s._v("所有")]),t("el-radio-button",{attrs:{label:"1"}},[s._v("已登录")]),t("el-radio-button",{attrs:{label:"0"}},[s._v("未登录")])],1)],1),t("div",{staticClass:"c-form-row"},[t("div",{staticClass:"c-form-row-label"},[s._v("默认语言：")]),t("el-radio-group",{attrs:{size:"mini"},on:{change:s.filterSessions},model:{value:s.form_lang,callback:function(e){s.form_lang=e},expression:"form_lang"}},[t("el-radio-button",{attrs:{label:""}},[s._v("所有")]),t("el-radio-button",{attrs:{label:"en"}},[s._v("en")]),t("el-radio-button",{attrs:{label:"zh"}},[s._v("zh")])],1)],1),t("div",{staticClass:"c-form-row"},[t("div",{staticClass:"c-form-row-label"},[s._v("访问次数：")]),t("el-radio-group",{attrs:{size:"mini"},on:{change:s.filterSessions},model:{value:s.form_min_visit_count,callback:function(e){s.form_min_visit_count=e},expression:"form_min_visit_count"}},[t("el-radio-button",{attrs:{label:1}},[s._v("所有")]),t("el-radio-button",{attrs:{label:2}},[s._v("2")]),t("el-radio-button",{attrs:{label:5}},[s._v("5")]),t("el-radio-button",{attrs:{label:20}},[s._v("20")]),t("el-radio-button",{attrs:{label:50}},[s._v("50")]),t("el-radio-button",{attrs:{label:80}},[s._v("80")])],1)],1),t("div",{staticClass:"c-form-row"},[t("div",{staticClass:"c-form-row-label"},[s._v("登录地址：")]),t("el-radio-group",{attrs:{size:"mini"},on:{change:s.filterSessions},model:{value:s.form_min_ip_count,callback:function(e){s.form_min_ip_count=e},expression:"form_min_ip_count"}},[t("el-radio-button",{attrs:{label:1}},[s._v("所有")]),t("el-radio-button",{attrs:{label:2}},[s._v("多个IP")])],1)],1),t("div",{staticClass:"c-form-row"},[t("div",{staticClass:"c-form-row-label"},[s._v("排序方式：")]),t("el-radio-group",{attrs:{size:"mini"},on:{change:s.sortSessions},model:{value:s.form_sort_by,callback:function(e){s.form_sort_by=e},expression:"form_sort_by"}},[t("el-radio-button",{attrs:{label:"startVisitTime"}},[s._v("首次访问时间")]),t("el-radio-button",{attrs:{label:"lastVisitTime"}},[s._v("最后请求时间")]),t("el-radio-button",{attrs:{label:"visitCount"}},[s._v("访问次数")]),t("el-radio-button",{attrs:{label:"ip_count"}},[s._v("IP个数")]),t("el-radio-button",{attrs:{label:"account"}},[s._v("账号")])],1)],1),t("div",{staticStyle:{"padding-left":"85px","line-height":"30px"}},[s._v(" 当前符合条件的在线用户："+s._s(s.sessionList.length)+" ")]),s.sessionList.length>0?t("div",[s._l(s.sessionList,function(e){return[t("div",{staticClass:"c-online-session",class:{"c-online-session-logined":e.loginTime,"c-online-session-locked-account":s.lockedObjects.lockedAccounts.includes(e.userAccount),"c-online-session-locked-client":s.lockedObjects.lockedClientIds.includes(e.clientId),"c-online-session-locked-ip":s.lockedObjects.lockedIps.includes(e.prevIp)}},[t("div",{staticClass:"c-session-vaule c-session-clientName",class:{"c-session-vipuser":e.isVipUser},on:{click:function(n){return s.showSessionDetail(e)}}},[t("div",[s._v(s._s(e.clientName))])]),t("div",{staticClass:"c-session-vaule c-session-visitCount"},[t("div",{on:{click:function(n){return s.showSessionDetail(e)}}},[t("span",[s._v("Visit: ")]),s._v(s._s(e.visitCount)+" ")])]),t("div",{staticClass:"c-session-vaule c-session-prevReferer",class:{"c-session-github":e.githubIO}},[t("div",[s._v(s._s(e.githubIO?"github":""))])]),t("div",{staticClass:"c-session-vaule c-session-defaultLang",class:{"c-session-englishLang":e.englishLang}},[t("div",[s._v(s._s(e.defaultLang))])]),t("div",{staticClass:"c-session-vaule c-session-time"},[t("span",[s._v(s._s(s.$dayjs(e.startVisitTime).format("MM-DD HH:mm")))]),s._v(" - "),t("span",[s._v(s._s(s.$dayjs(e.lastVisitTime).format("MM-DD HH:mm")))])]),t("div",{staticClass:"c-session-vaule c-session-usedIps",class:{"c-session-usedIps-multi":e.usedIps.length>1}},[s._v(s._s(e.usedIps.length>1?e.usedIps.length:""))]),t("div",{staticClass:"c-session-vaule c-session-prevIp",on:{click:function(n){return s.showSessionDetail(e)}}},[s._v("["+s._s(e.prevIpCity)+"]"+s._s(e.prevIp))]),t("div",{staticClass:"c-session-vaule c-session-prevPath"},[s._v(s._s(e.prevPath))]),t("div",{staticClass:"c-session-vaule c-session-loginTime"},[s._v(s._s(e.loginTime?s.$dayjs(e.loginTime).format("MM-DD HH:mm"):""))]),t("div",{staticClass:"c-session-vaule c-session-loginIp"},[s._v(s._s(e.loginIp))])])]})],2):s._e()])])]),t("div",{staticStyle:{height:"600px"}})]),t("el-drawer",{attrs:{title:"Session Details",size:"50%",direction:"rtl",visible:s.showSessionDetailPanel,"with-header":!1},on:{"update:visible":function(e){s.showSessionDetailPanel=e}}},[t("div",{staticStyle:{height:"calc(100vh - 40px)",padding:"10px"}},[s.currentSession?t("div",[t("div",{staticClass:"c-admin-oper-panel"},[s.currentSession.currentSessionId?t("div",[t("el-button",{attrs:{size:"mini",icon:"el-icon-warning",type:"danger",round:""},on:{click:s.destroyUserSession}},[s._v("注销这个会话")])],1):s._e(),s.currentSession.userAccount?t("div",[t("el-button",{attrs:{size:"mini",icon:"el-icon-warning",type:"danger",round:""},on:{click:s.destroyUserAllSession}},[s._v("注销用户所有会话")])],1):s._e(),s.currentSession.userAccount?t("div",[t("el-button",{attrs:{size:"mini",icon:"el-icon-warning",type:"danger",round:""},on:{click:s.resetUserAccountPassword}},[s._v("重置用户密码")])],1):s._e()]),s.currentSession.userAccount?t("div",{staticClass:"c-session-visit-row",class:{"c-locked-object":s.lockedObjects.lockedAccounts.includes(s.currentSession.userAccount)}},[t("div",{staticStyle:{width:"250px"}},[s._v("Account: "+s._s(s.currentSession.userAccount))]),t("el-link",{staticStyle:{"font-size":"12px"},attrs:{type:"danger"},on:{click:function(e){return s.lockUserAccount(s.currentSession.userAccount)}}},[s._v("限制这个Account")])],1):s._e(),t("div",{staticClass:"c-session-visit-row",class:{"c-locked-object":s.lockedObjects.lockedIps.includes(s.currentSession.prevIp)}},[t("div",{staticStyle:{width:"110px"}},[s._v("IP: "+s._s(s.currentSession.prevIp))]),t("el-link",{staticStyle:{"font-size":"12px"},attrs:{type:"danger"},on:{click:function(e){return s.lockUserIP(s.currentSession.prevIp)}}},[s._v("限制这个IP")])],1),t("div",{staticClass:"c-session-visit-row",class:{"c-locked-object":s.lockedObjects.lockedClientIds.includes(s.currentSession.clientId)}},[t("div",{staticStyle:{width:"300px"}},[s._v("ClientId: "+s._s(s.currentSession.clientId))]),t("el-link",{staticStyle:{"font-size":"12px"},attrs:{type:"danger"},on:{click:function(e){return s.lockUserClient(s.currentSession.clientId)}}},[s._v("限制这个Client")])],1),t("div",{staticClass:"c-part-title"},[s._v("使用IP:")]),s._l(s.usedIpInfoList,function(e){return[t("div",{key:e.ip,staticClass:"c-session-visit-row",class:{"c-locked-object":s.lockedObjects.lockedIps.includes(e.ip)}},[t("div",{staticStyle:{width:"130px"}},[s._v(s._s(e.ip))]),t("div",{staticStyle:{"flex-grow":"1"}},[s._v(" "+s._s(e.detail.continent)+" - "+s._s(e.detail.country)+" - "+s._s(e.detail.prov)+" - "+s._s(e.detail.city)+" | "+s._s(e.detail.owner)+" | "+s._s(e.detail.isp)+" | ("+s._s(e.detail.source)+") ")]),t("div",{staticStyle:{width:"130px"}},[t("el-link",{staticStyle:{"font-size":"12px",width:"70px"},attrs:{type:"danger"},on:{click:function(n){return s.lockUserIP(e.ip)}}},[s._v("限制这个IP")])],1)])]}),t("div",{staticClass:"c-part-title"},[s._v("浏览记录:")]),s._l(s.currentSession.pathObjectList,function(e){return[t("div",{key:e.path,staticClass:"c-session-visit-row"},[t("div",{staticClass:"c-session-visit-lang",class:{"c-session-englishLang":e.lang}},[s._v(s._s(e.lang?"en":""))]),t("div",{staticClass:"c-session-visit-time"},[e.lastVisitTime>1e7?t("div",[s._v(" "+s._s(s.$dayjs(e.lastVisitTime).format("MM-DD HH:mm"))+" ")]):t("div",[s._v(" Time: "+s._s(Math.round(e.lastVisitTime/1e3))+"秒 ")])]),t("div",{staticClass:"c-session-visit-count"},[s._v(s._s(e.count)+"次")]),t("div",{staticClass:"c-session-visit-path"},[s._v(s._s(e.path))])])]})],2):s._e()])])],1)},u=[];const v={name:"UserIndex",components:{},data(){return{form_logined:"",form_min_visit_count:1,form_lang:"",form_min_ip_count:1,form_sort_by:"lastVisitTime",showPayCode:!1,cardLoading:!0,showSessionDetailPanel:!1,checkedRoute:null,currentSession:null,vipUserIds:[],allSessionList:[],sessionList:[],lockedObjects:{lockedIps:[],lockedAccounts:[],lockedClientIds:[]}}},computed:{...r(["isMobile","english"]),...c({userInfo:s=>s.user.userInfo}),userNickName(){return this.userInfo&&this.userInfo.account||""},usedIpInfoList(){return this.currentSession?this.currentSession.usedIps.map(s=>{const i=this.currentSession.usedIpsInfoMap&&this.currentSession.usedIpsInfoMap[s]||{};return{ip:s,detail:i}}):[]}},mounted(){this.loadAllVipUsers()},methods:{getClientName(s){return s.length<30?s:s.substring(20)},async toggleShowPayCode(){this.showPayCode=!this.showPayCode},async logout(){await this.$store.dispatch("user/logout"),await this.$router.push("/login")},async loadAllLockedObjects(){const i=(await this.SeeksHttp.postJson("/online-user/getLockedObjects",{})).data.data;this.lockedObjects=i},async loadAllVipUsers(){this.cardLoading=!0;const i=(await this.SeeksHttp.postJson("/online-user/get-all-vip-names",{})).data.data;this.vipUserIds=i,await this.loadAllLockedObjects(),await this.loadSessionList()},async loadSessionList(){this.cardLoading=!0;const i=(await this.SeeksHttp.postJson("/online-user/get-session-list",{})).data.data;i.forEach(t=>{t.clientName=this.getClientName(t.clientName),t.englishLang=!!(t.defaultLang&&t.defaultLang.toLowerCase().includes("en")),t.githubIO=t.prevReferer&&t.prevReferer.includes("github.io"),t.isVipUser=this.vipUserIds.includes(t.clientName)}),this.allSessionList=i,this.filterSessions(),this.sortSessions(),this.cardLoading=!1},async showSessionDetail(s){this.cardLoading=!0;const t=(await this.SeeksHttp.postJson("https://ssl.relation-graph.com/online-user/get-session-detail?clientId="+s.clientId,{})).data.data,e=[];Object.keys(t.pathMapping).forEach(n=>{const o=t.pathMapping[n];o.path=n,e.push(o)}),e.sort((n,o)=>o.lastVisitTime-n.lastVisitTime),t.pathObjectList=e,this.currentSession=t,this.cardLoading=!1,this.showSessionDetailPanel=!0},filterSessions(){const s=[];this.allSessionList.forEach(i=>{this.form_logined==="0"&&i.loginTime||this.form_logined==="1"&&!i.loginTime||this.form_lang==="en"&&!i.englishLang||this.form_lang==="zh"&&i.englishLang||i.visitCount<this.form_min_visit_count||this.form_min_ip_count===2&&i.usedIps.length===1||s.push(i)}),this.sessionList=s,this.sortSessions()},sortSessions(){this.form_sort_by==="startVisitTime"?this.sessionList=this.sessionList.sort((s,i)=>i.startVisitTime-s.startVisitTime):this.form_sort_by==="lastVisitTime"?this.sessionList=this.sessionList.sort((s,i)=>i.lastVisitTime-s.lastVisitTime):this.form_sort_by==="visitCount"?this.sessionList=this.sessionList.sort((s,i)=>i.visitCount-s.visitCount):this.form_sort_by==="ip_count"?this.sessionList=this.sessionList.sort((s,i)=>i.usedIps.length-s.usedIps.length):this.form_sort_by==="account"&&(this.sessionList=this.sessionList.sort((s,i)=>i.clientName.localeCompare(s.clientName)))},async lockUserIP(s){this.$confirm("确定吗？").then(async()=>{this.cardLoading=!0;const t=(await this.SeeksHttp.postJson("/online-user/lockUserIP",{ip:s})).data.data;this.$notify({title:"操作完成：",message:t,type:"success"}),this.cardLoading=!1})},async lockUserClient(){this.$confirm("确定吗？").then(async()=>{this.cardLoading=!0;const i=(await this.SeeksHttp.postJson("/online-user/lockUserClient",{clientId:this.currentSession.clientId})).data.data;this.$notify({title:"操作完成：",message:i,type:"success"}),this.cardLoading=!1})},async lockUserAccount(){this.$confirm("确定吗？").then(async()=>{this.cardLoading=!0;const i=(await this.SeeksHttp.postJson("/online-user/lockUserAccount",{userAccount:this.currentSession.userAccount})).data.data;this.$notify({title:"操作完成：",message:i,type:"success"}),this.cardLoading=!1})},async destroyUserSession(){this.$confirm("确定吗？").then(async()=>{this.cardLoading=!0;const i=(await this.SeeksHttp.postJson("/online-user/destroyUserSession",{sessionId:this.currentSession.currentSessionId})).data.data;this.$notify({title:"操作完成：",message:i,type:"success"}),this.cardLoading=!1})},async destroyUserAllSession(){this.$confirm("确定吗？").then(async()=>{this.cardLoading=!0;const i=(await this.SeeksHttp.postJson("/online-user/destroyUserAllSession",{userAccount:this.currentSession.userAccount})).data.data;this.$notify({title:"操作完成：",message:i,type:"success"}),this.cardLoading=!1})},async resetUserAccountPassword(){this.$confirm("确定吗？").then(async()=>{this.cardLoading=!0;const i=(await this.SeeksHttp.postJson("/online-user/resetUserAccountPassword",{userAccount:this.currentSession.userAccount})).data.data;this.$notify({title:"操作完成：",message:i,type:"success"}),this.cardLoading=!1})}}},a={};var _=l(v,d,u,!1,p,"0d0911c8",null,null);function p(s){for(let i in a)this[i]=a[i]}const m=function(){return _.exports}();export{m as default};
