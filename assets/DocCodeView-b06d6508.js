import{v as s}from"./xml-fold-21f7ffef.js";import{n as c}from"./index-fca44c1d.js";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"font-size":"12px",height:"100%"}},[o("codemirror",{style:{height:"100%"},attrs:{options:e.cmOption},model:{value:e.cmCode,callback:function(n){e.cmCode=n},expression:"cmCode"}})],1)},u=[];const m={name:"NodeAttributes",components:{codemirror:s.codemirror},props:{code:{mustUseProp:!0,default:()=>"",type:String}},data(){return{cmCode:"",cmOption:{tabSize:4,foldGutter:!0,styleActiveLine:!0,lineNumbers:!0,line:!0,keyMap:"sublime",mode:"text/x-vue",theme:"base16-dark",readOnly:!0}}},watch:{code(e){this.cmCode=e}},mounted(){},methods:{}},r={};var a=c(m,i,u,!1,d,"4898f1ce",null,null);function d(e){for(let t in r)this[t]=r[t]}const p=function(){return a.exports}();export{p as D};
