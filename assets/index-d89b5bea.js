import{m as i,n as _}from"./index-ebbcd0b3.js";var p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("table",{staticClass:"c-rgobject-options",staticStyle:{width:"100%"}},[e("thead",[e("tr",[e("th",[e("div",[t._v(t._s(t.english?"name":"参数"))])]),["options","properties","methods","events","slots"].indexOf(t.type)!==-1?e("th",[e("div",[t._v(t._s(t.english?"Description":"说明"))])]):t._e(),["options","events","slots"].indexOf(t.type)!==-1?e("th",[e("div",[t._v(t._s(t.english?"Type/Params":"类型/传参"))])]):t._e(),["options","",""].indexOf(t.type)!==-1?e("th",[e("div",[t._v(t._s(t.english?"NotNull":"必选"))])]):t._e(),["options","",""].indexOf(t.type)!==-1?e("th",[e("div",[t._v(t._s(t.english?"Default":"默认值"))])]):t._e()])]),e("tbody",t._l(t.data,function(n){return e("tr",{key:n.option},[e("td",[e("div",{domProps:{innerHTML:t._s(n.option)}})]),["options","properties","methods","events","slots"].indexOf(t.type)!==-1?e("td",[e("div",{domProps:{innerHTML:t._s(t.english?n.desc_en:n.desc)}})]):t._e(),["options","methods","events","slots"].indexOf(t.type)!==-1?e("td",[t._v(t._s(n.type))]):t._e(),["options","",""].indexOf(t.type)!==-1?e("td",[t._v(t._s(n.notnull))]):t._e(),["options","",""].indexOf(t.type)!==-1?e("td",[t._v(t._s(n.default_value))]):t._e()])}),0)])])},r=[];const d={name:"RGObjectOptions",props:{data:{type:Array,default:function(){return[]}},type:{type:String,default:function(){return"options"}}},computed:{...i(["english"])},methods:{}},o={};var l=_(d,p,r,!1,a,null,null,null);function a(t){for(let s in o)this[s]=o[s]}const c=function(){return l.exports}();export{c as R};
