import a from"./relation-graph-logo-e4609733.js";import{V as n}from"./VipIcon-aceeff3c.js";import{m as r,n as l}from"./index-120b3164.js";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"c-card",class:{"c-card-disabled":t.vipCard.isDisabled==="1","ent-vip":t.vipCard.roleId==="ent-vip"},staticStyle:{padding:"20px","max-width":"400px",width:"100%","text-align":"left",float:"left","margin-right":"20px","margin-top":"20px"}},[i("div",{staticStyle:{"font-weight":"bold","font-size":"14px","line-height":"30px",color:"rgb(62, 80, 96)"}},[i("i",{staticClass:"el-icon-bank-card"}),t._v(" "+t._s(t.english?t.vipCard.roleId==="ent-vip"?"Enterprise VIP":"Personal VIP":t.vipCard.roleName)+" "),i("VipIcon",{attrs:{"ent-vip":t.vipCard.roleId==="ent-vip",invaild:t.vipCard.isDisabled==="1"}})],1),i("div",{staticClass:"c-card-info-item"},[i("div",[i("span",{staticClass:"c-key"},[t._v(t._s(t.english?"From:":"加入时间："))]),t._v(t._s(t.vipCard.fromTimeCN))]),i("div",[i("span",{staticClass:"c-key"},[t._v(t._s(t.english?"To:":"到期时间："))]),t._v(t._s(t.vipCard.toTimeCN))]),i("div",[i("span",{staticClass:"c-key"},[t._v(t._s(t.english?"Status:":"会员状态："))]),t.vipCard.isDisabled==="0"?i("span",{staticStyle:{color:"#df7f03"}},[t._v(t._s(t.english?"Valid":"有效"))]):i("span",{staticStyle:{color:"#5a5e66"}},[t._v(t._s(t.english?"Invalid":"会员已过期"))])])])])},p=[];const d={name:"VipCard",props:{vipCard:{mustUseProp:!0,default:null,type:Object}},components:{Logo:a,VipIcon:n},computed:r(["english"])},s={};var c=l(d,o,p,!1,v,"d5787cde",null,null);function v(t){for(let e in s)this[e]=s[e]}const f=function(){return c.exports}();export{f as V};
