var $=Object.defineProperty;var F=(i,t,e)=>t in i?$(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var x=(i,t,e)=>(F(i,typeof t!="symbol"?t+"":t,e),e);import{s as G,e as R}from"./relation-graph-4b768e87.js";import j from"./VipMinPathSearchToolBarButtons-fb4ace6a.js";import{d as U,r as m,v as W,a as f,c as v,e as p,b as c,k as q,w as h,q as A,n as X,I as y,i as g,p as Y,j as Z,y as V,f as _,F as E,g as M,h as z}from"./index-ee818b67.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";class J{constructor(){x(this,"nodes");x(this,"edges")}loadDataFromRelationGraph(t){this.nodes=t.getNodes().map(e=>({id:e.id,childs:[],indexed:!1,parentNode:null})),this.edges=t.getLinks().map(e=>({from:e.fromNode.id,to:e.toNode.id}))}buildIndexes(t){const e=[];t.forEach(a=>{this.edges.forEach(s=>{if(s.from===a.id){const l=this.getNodeById(s.to);l&&!l.indexed&&(l.indexed=!0,l.parentNode=a,a.childs.push(l),e.push(l))}if(s.to===a.id){const l=this.getNodeById(s.from);l&&!l.indexed&&(l.indexed=!0,l.parentNode=a,a.childs.push(l),e.push(l))}})}),e.length>0&&this.buildIndexes(e)}getNodeById(t){return this.nodes.find(e=>e.id===t)}findMinPath(t,e){const a=this.getNodeById(t);if(!a)throw new Error("找不到起点!");const s=this.getNodeById(e);if(!s)throw new Error("找不到终点!");this.buildIndexes([s]);const l=this.getPath(a,s,[a]);if(l)return l.map(u=>u.id)}getPath(t,e,a){if(t===e)return a.concat(e);if(t.parentNode)return this.getPath(t.parentNode,e,a.concat(t.parentNode))}}const N=i=>(Y("data-v-2f8686fe"),i=i(),Z(),i),K={key:0,style:{"padding-left":"40px"}},O=N(()=>c("div",{class:"c-form-label",style:{color:"#333333","font-size":"14px","font-weight":"bold"}}," Node Path Search ",-1)),Q=N(()=>c("div",{class:"c-form-label"}," Start Node: ",-1)),ee=N(()=>c("div",{class:"c-form-label"}," End Node: ",-1)),te={style:{"padding-top":"10px"}},oe=U({__name:"VipMinPathSearchToolBar",setup(i){const t=m(!1),e=m(!0),a=m(""),s=m(""),l=m([]),u=V(G),b=V(R);W(()=>b&&b.options);const T=()=>{t.value=!t.value},k=r=>{e.value=!0;const o=u.value;l.value=o.getNodes().filter(n=>n.text.includes(r)).map(n=>({value:`${n.id}`,label:`name:${n.text}`})),e.value=!1},w=()=>{if(!a.value)return y({type:"error",message:"Please enter the start node!"});if(!s.value)return y({type:"error",message:"Please enter the end node!"});const r=u.value,o=new J;o.loadDataFromRelationGraph(r);const n=o.findMinPath(a.value,s.value);if(!n)return y({type:"error",message:"Cannot find the association between the start node and the end node!"});console.log("nodesInMinPath:",n),D(n)},D=r=>{C(),u.value.getNodes().forEach(o=>{r.includes(o.id)||(o.opacity=.2)}),u.value.getLinks().forEach(o=>{o.relations.forEach(n=>{!r.includes(o.fromNode.id)||!r.includes(o.toNode.id)?n.opacity=.2:(n.data.orignColor=n.color,n.color="#ff0000",n.lineWidth=3)})})},C=()=>{u.value.getNodes().forEach(r=>{r.opacity=1}),u.value.getLinks().forEach(r=>{r.relations.forEach(o=>{o.opacity=1,o.lineWidth=1,o.color=o.data.orignColor})})},L=()=>{a.value="",s.value="",C()},I=(r,o)=>{a.value=r,s.value=o,w()};return(r,o)=>{const n=g("el-link"),P=g("el-option"),B=g("el-select"),S=g("el-button");return f(),v("div",{style:X([{width:t.value?"65px":"350px"},{height:"350px","padding-top":"5px",position:"absolute",right:"20px",top:"100px","z-index":"20",padding:"20px","background-color":"#ffffff",border:"#efefef solid 1px","box-shadow":"0 3px 9px rgba(0,21,41,.08)"}])},[p(j),c("div",{style:{position:"absolute","z-index":"40",left:"0px",top:"0px",width:"20px",height:"348px","background-color":"#ffffff",color:"#444444",cursor:"pointer",display:"flex","align-items":"center"},onClick:T},[c("i",{class:q(t.value?"el-icon-caret-left":"el-icon-caret-right")},null,2)]),t.value?A("",!0):(f(),v("div",K,[O,c("div",null,[p(n,{type:"warning",onClick:o[0]||(o[0]=d=>I("N4","N9"))},{default:h(()=>[_("Try searching: Gao Xiaofeng, Chen Yanshi")]),_:1})]),c("div",null,[p(n,{type:"warning",onClick:o[1]||(o[1]=d=>I("N10","N20"))},{default:h(()=>[_("Try searching: Zhao Donglai, Cai Chenggong")]),_:1})]),Q,p(B,{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=d=>a.value=d),size:"small",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter the name of the start node","remote-method":k,loading:e.value},{default:h(()=>[(f(!0),v(E,null,M(l.value,d=>(f(),z(P,{key:d.value,label:d.label,value:d.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"]),ee,c("div",null,[p(B,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=d=>s.value=d),size:"small",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter the name of the end node","remote-method":k,loading:e.value},{default:h(()=>[(f(!0),v(E,null,M(l.value,d=>(f(),z(P,{key:d.value,label:d.label,value:d.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),c("div",te,[p(S,{size:"small",type:"primary",onClick:w},{default:h(()=>[_("Search")]),_:1}),p(S,{size:"small",type:"primary",onClick:L},{default:h(()=>[_("Reset")]),_:1})])]))],4)}}});const de=H(oe,[["__scopeId","data-v-2f8686fe"]]);export{de as default};
