var F=Object.defineProperty;var G=(d,o,t)=>o in d?F(d,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[o]=t;var x=(d,o,t)=>(G(d,typeof o!="symbol"?o+"":o,t),t);import{Q as $}from"./relation-graph-11dba7f5.js";import R from"./VipMinPathSearchToolBarButtons-aae8e5a1.js";import{d as j,r as v,v as V,a as f,c as g,e as u,b as i,k as U,w as m,q as W,n as q,I as y,i as b,p as A,j as Q,f as _,F as E,g as M,h as z,y as X}from"./index-358d0f07.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";class Z{constructor(){x(this,"nodes");x(this,"edges")}loadDataFromRelationGraph(o){this.nodes=o.getNodes().map(t=>({id:t.id,childs:[],indexed:!1,parentNode:null})),this.edges=o.getLinks().map(t=>({from:t.fromNode.id,to:t.toNode.id}))}buildIndexes(o){const t=[];o.forEach(a=>{this.edges.forEach(n=>{if(n.from===a.id){const l=this.getNodeById(n.to);l&&!l.indexed&&(l.indexed=!0,l.parentNode=a,a.childs.push(l),t.push(l))}if(n.to===a.id){const l=this.getNodeById(n.from);l&&!l.indexed&&(l.indexed=!0,l.parentNode=a,a.childs.push(l),t.push(l))}})}),t.length>0&&this.buildIndexes(t)}getNodeById(o){return this.nodes.find(t=>t.id===o)}findMinPath(o,t){const a=this.getNodeById(o);if(!a)throw new Error("找不到起点!");const n=this.getNodeById(t);if(!n)throw new Error("找不到终点!");this.buildIndexes([n]);const l=this.getPath(a,n,[a]);if(l)return l.map(p=>p.id)}getPath(o,t,a){if(o===t)return a.concat(t);if(o.parentNode)return this.getPath(o.parentNode,t,a.concat(o.parentNode))}}const N=d=>(A("data-v-dbbbdba7"),d=d(),Q(),d),H={key:0,style:{"padding-left":"40px"}},J=N(()=>i("div",{class:"c-form-label",style:{color:"#333333","font-size":"14px","font-weight":"bold"}}," Node Path Search ",-1)),K=N(()=>i("div",{class:"c-form-label"}," Start Node: ",-1)),O=N(()=>i("div",{class:"c-form-label"}," End Node: ",-1)),ee={style:{"padding-top":"10px"}},te=j({__name:"VipMinPathSearchToolBar",setup(d){const o=v(!1),t=v(!0),a=v(""),n=v(""),l=v([]),p=X($);V(()=>p&&p.options);const h=V(()=>p&&p.instance),T=()=>{o.value=!o.value},k=s=>{t.value=!0,l.value=h.value.getNodes().filter(e=>e.text.includes(s)).map(e=>({value:`${e.id}`,label:`name:${e.text}`})),t.value=!1},w=()=>{if(!a.value)return y({type:"error",message:"Please enter the start node!"});if(!n.value)return y({type:"error",message:"Please enter the end node!"});const s=new Z;s.loadDataFromRelationGraph(h);const e=s.findMinPath(a.value,n.value);if(!e)return y({type:"error",message:"Cannot find the association between the start node and the end node!"});console.log("nodesInMinPath:",e),D(e)},D=s=>{C(),h.value.getNodes().forEach(e=>{s.includes(e.id)||(e.opacity=.2)}),h.value.getLinks().forEach(e=>{e.relations.forEach(c=>{!s.includes(e.fromNode.id)||!s.includes(e.toNode.id)?c.opacity=.2:(c.data.orignColor=c.color,c.color="#ff0000",c.lineWidth=3)})})},C=()=>{h.value.getNodes().forEach(s=>{s.opacity=1}),h.value.getLinks().forEach(s=>{s.relations.forEach(e=>{e.opacity=1,e.lineWidth=1,e.color=e.data.orignColor})})},L=()=>{a.value="",n.value="",C()},P=(s,e)=>{a.value=s,n.value=e,w()};return(s,e)=>{const c=b("el-link"),B=b("el-option"),I=b("el-select"),S=b("el-button");return f(),g("div",{style:q([{width:o.value?"65px":"350px"},{height:"350px","padding-top":"5px",position:"absolute",right:"20px",top:"100px","z-index":"20",padding:"20px","background-color":"#ffffff",border:"#efefef solid 1px","box-shadow":"0 3px 9px rgba(0,21,41,.08)"}])},[u(R),i("div",{style:{position:"absolute","z-index":"40",left:"0px",top:"0px",width:"20px",height:"100%","background-color":"#f3ba91",color:"#444444",cursor:"pointer",display:"flex","align-items":"center"},onClick:T},[i("i",{class:U(o.value?"el-icon-caret-left":"el-icon-caret-right")},null,2)]),o.value?W("",!0):(f(),g("div",H,[J,i("div",null,[u(c,{type:"warning",onClick:e[0]||(e[0]=r=>P("N4","N9"))},{default:m(()=>[_("Try searching: Gao Xiaofeng, Chen Yanshi")]),_:1})]),i("div",null,[u(c,{type:"warning",onClick:e[1]||(e[1]=r=>P("N10","N20"))},{default:m(()=>[_("Try searching: Zhao Donglai, Cai Chenggong")]),_:1})]),K,u(I,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=r=>a.value=r),size:"small",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter the name of the start node","remote-method":k,loading:t.value},{default:m(()=>[(f(!0),g(E,null,M(l.value,r=>(f(),z(B,{key:r.value,label:r.label,value:r.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"]),O,i("div",null,[u(I,{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=r=>n.value=r),size:"small",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter the name of the end node","remote-method":k,loading:t.value},{default:m(()=>[(f(!0),g(E,null,M(l.value,r=>(f(),z(B,{key:r.value,label:r.label,value:r.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),i("div",ee,[u(S,{size:"small",type:"primary",onClick:w},{default:m(()=>[_("Search")]),_:1}),u(S,{size:"small",type:"primary",onClick:L},{default:m(()=>[_("Reset")]),_:1})])]))],4)}}});const re=Y(te,[["__scopeId","data-v-dbbbdba7"]]);export{re as default};
