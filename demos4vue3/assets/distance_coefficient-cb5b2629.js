import{k as I}from"./relation-graph-585d193c.js";import{d as L,r as l,o as S,a as x,c as u,b as d,e as b,w as a,u as O,f as n,q as h,F as T,g as z,t as B,i as c,p as j,j as F}from"./index-5a571be1.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";const y=f=>(j("data-v-0b5e0426"),f=f(),F(),f),U={style:{height:"calc(100vh - 60px)"}},W={class:"c-my-panel"},J={key:0},q=y(()=>d("div",{style:{padding:"10px",color:"#333333","font-size":"12px"}},[n("The graph will automatically adjust the distance between each level based on the current visible range. "),d("b",null,"The graph will try to make it look stretched and not exceed the visible range"),n(". On this basis, you can choose to make the distance larger or smaller.")],-1)),A={key:1,style:{"padding-top":"10px"}},E={style:{padding:"5px","text-align":"center"}},G=y(()=>d("div",{class:"c-option-name"},"Quickly Set Contrast Differences:",-1)),H={class:"c-my-options"},M=["onClick"],P=L({__name:"distance_coefficient",setup(f){const p=l(1),r=l(1),m=l("100,200,300,400,500"),g=["100,100,100,100,100","200,200,200,200,200","100,150,200,250,300","300,250,200,150,100"],_={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultNodeBorderWidth:0,zoomToFitWhenRefresh:!1,defaultNodeWidth:40,defaultNodeHeight:40,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)",layout:{label:"Center",layoutName:"center",layoutClassName:"seeks-layout-center",distance_coefficient:1}},v=l(null),C=async()=>{var i;const e={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"b2-3",text:"b2-3"},{id:"b2-4",text:"b2-4"},{id:"b3",text:"b3"},{id:"b3-1",text:"b3-1"},{id:"b3-2",text:"b3-2"},{id:"b3-3",text:"b3-3"},{id:"b3-4",text:"b3-4"},{id:"b3-5",text:"b3-5"},{id:"b3-6",text:"b3-6"},{id:"b3-7",text:"b3-7"},{id:"b4",text:"b4"},{id:"b4-1",text:"b4-1"},{id:"b4-2",text:"b4-2"},{id:"b4-3",text:"b4-3"},{id:"b4-4",text:"b4-4"},{id:"b4-5",text:"b4-5"},{id:"b4-6",text:"b4-6"},{id:"b4-7",text:"b4-7"},{id:"b4-8",text:"b4-8"},{id:"b4-9",text:"b4-9"},{id:"b5",text:"b5"},{id:"b5-1",text:"b5-1"},{id:"b5-2",text:"b5-2"},{id:"b5-3",text:"b5-3"},{id:"b5-4",text:"b5-4"},{id:"b6",text:"b6"},{id:"b6-1",text:"b6-1"},{id:"b6-2",text:"b6-2"},{id:"b6-3",text:"b6-3"},{id:"b6-4",text:"b6-4"},{id:"b6-5",text:"b6-5"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c1-1",text:"c1-1"},{id:"c1-2",text:"c1-2"},{id:"c1-3",text:"c1-3"},{id:"c1-4",text:"c1-4"},{id:"c1-5",text:"c1-5"},{id:"c1-6",text:"c1-6"},{id:"c1-7",text:"c1-7"},{id:"c2",text:"c2"},{id:"c2-1",text:"c2-1"},{id:"c2-2",text:"c2-2"},{id:"c3",text:"c3"},{id:"c3-1",text:"c3-1"},{id:"c3-2",text:"c3-2"},{id:"c3-3",text:"c3-3"},{id:"d",text:"d"},{id:"d1",text:"d1"},{id:"d1-1",text:"d1-1"},{id:"d1-2",text:"d1-2"},{id:"d1-3",text:"d1-3"},{id:"d1-4",text:"d1-4"},{id:"d1-5",text:"d1-5"},{id:"d1-6",text:"d1-6"},{id:"d1-7",text:"d1-7"},{id:"d1-8",text:"d1-8"},{id:"d2",text:"d2"},{id:"d2-1",text:"d2-1"},{id:"d2-2",text:"d2-2"},{id:"d3",text:"d3"},{id:"d3-1",text:"d3-1"},{id:"d3-2",text:"d3-2"},{id:"d3-3",text:"d3-3"},{id:"d3-4",text:"d3-4"},{id:"d3-5",text:"d3-5"},{id:"d4",text:"d4"},{id:"d4-1",text:"d4-1"},{id:"d4-2",text:"d4-2"},{id:"d4-3",text:"d4-3"},{id:"d4-4",text:"d4-4"},{id:"d4-5",text:"d4-5"},{id:"d4-6",text:"d4-6"},{id:"e",text:"e"},{id:"e1",text:"e1"},{id:"e1-1",text:"e1-1"},{id:"e1-2",text:"e1-2"},{id:"e1-3",text:"e1-3"},{id:"e1-4",text:"e1-4"},{id:"e1-5",text:"e1-5"},{id:"e1-6",text:"e1-6"},{id:"e2",text:"e2"},{id:"e2-1",text:"e2-1"},{id:"e2-2",text:"e2-2"},{id:"e2-3",text:"e2-3"},{id:"e2-4",text:"e2-4"},{id:"e2-5",text:"e2-5"},{id:"e2-6",text:"e2-6"},{id:"e2-7",text:"e2-7"},{id:"e2-8",text:"e2-8"},{id:"e2-9",text:"e2-9"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"b2",to:"b2-3"},{from:"b2",to:"b2-4"},{from:"b",to:"b3"},{from:"b3",to:"b3-1"},{from:"b3",to:"b3-2"},{from:"b3",to:"b3-3"},{from:"b3",to:"b3-4"},{from:"b3",to:"b3-5"},{from:"b3",to:"b3-6"},{from:"b3",to:"b3-7"},{from:"b",to:"b4"},{from:"b4",to:"b4-1"},{from:"b4",to:"b4-2"},{from:"b4",to:"b4-3"},{from:"b4",to:"b4-4"},{from:"b4",to:"b4-5"},{from:"b4",to:"b4-6"},{from:"b4",to:"b4-7"},{from:"b4",to:"b4-8"},{from:"b4",to:"b4-9"},{from:"b",to:"b5"},{from:"b5",to:"b5-1"},{from:"b5",to:"b5-2"},{from:"b5",to:"b5-3"},{from:"b5",to:"b5-4"},{from:"b",to:"b6"},{from:"b6",to:"b6-1"},{from:"b6",to:"b6-2"},{from:"b6",to:"b6-3"},{from:"b6",to:"b6-4"},{from:"b6",to:"b6-5"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c1",to:"c1-1"},{from:"c1",to:"c1-2"},{from:"c1",to:"c1-3"},{from:"c1",to:"c1-4"},{from:"c1",to:"c1-5"},{from:"c1",to:"c1-6"},{from:"c1",to:"c1-7"},{from:"c",to:"c2"},{from:"c2",to:"c2-1"},{from:"c2",to:"c2-2"},{from:"c",to:"c3"},{from:"c3",to:"c3-1"},{from:"c3",to:"c3-2"},{from:"c3",to:"c3-3"},{from:"a",to:"d"},{from:"d",to:"d1"},{from:"d1",to:"d1-1"},{from:"d1",to:"d1-2"},{from:"d1",to:"d1-3"},{from:"d1",to:"d1-4"},{from:"d1",to:"d1-5"},{from:"d1",to:"d1-6"},{from:"d1",to:"d1-7"},{from:"d1",to:"d1-8"},{from:"d",to:"d2"},{from:"d2",to:"d2-1"},{from:"d2",to:"d2-2"},{from:"d",to:"d3"},{from:"d3",to:"d3-1"},{from:"d3",to:"d3-2"},{from:"d3",to:"d3-3"},{from:"d3",to:"d3-4"},{from:"d3",to:"d3-5"},{from:"d",to:"d4"},{from:"d4",to:"d4-1"},{from:"d4",to:"d4-2"},{from:"d4",to:"d4-3"},{from:"d4",to:"d4-4"},{from:"d4",to:"d4-5"},{from:"d4",to:"d4-6"},{from:"a",to:"e"},{from:"e",to:"e1"},{from:"e1",to:"e1-1"},{from:"e1",to:"e1-2"},{from:"e1",to:"e1-3"},{from:"e1",to:"e1-4"},{from:"e1",to:"e1-5"},{from:"e1",to:"e1-6"},{from:"e",to:"e2"},{from:"e2",to:"e2-1"},{from:"e2",to:"e2-2"},{from:"e2",to:"e2-3"},{from:"e2",to:"e2-4"},{from:"e2",to:"e2-5"},{from:"e2",to:"e2-6"},{from:"e2",to:"e2-7"},{from:"e2",to:"e2-8"},{from:"e2",to:"e2-9"}]},t=(i=v.value)==null?void 0:i.getInstance();t&&await t.setJsonData(e)},k=e=>{m.value=e,s()},s=async()=>{var i;const e=_.layout;e.distance_coefficient=void 0,e.levelDistance=void 0,r.value===1?e.distance_coefficient=p.value:e.levelDistance=m.value;const t=(i=v.value)==null?void 0:i.getInstance();t&&await t.setOptions(_)};return S(()=>{C()}),(e,t)=>{const i=c("el-radio-button"),V=c("el-radio-group"),w=c("el-slider"),N=c("el-input"),D=c("el-button");return x(),u("div",null,[d("div",U,[b(O(I),{ref_key:"graphRef",ref:v,options:_},{"graph-plug":a(()=>[d("div",W,[d("div",null,[b(V,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),size:"small",onChange:s},{default:a(()=>[b(i,{label:1},{default:a(()=>[n("Line Length Coefficient")]),_:1}),b(i,{label:2},{default:a(()=>[n("Specify Level Distance")]),_:1})]),_:1},8,["modelValue"])]),r.value===1?(x(),u("div",J,[q,b(w,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=o=>p.value=o),max:3,min:.2,step:.1,onChange:s},null,8,["modelValue","min","step"])])):h("",!0),r.value===2?(x(),u("div",A,[b(N,{size:"mini",modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=o=>m.value=o)},null,8,["modelValue"]),d("div",E,[b(D,{type:"primary",onClick:s},{default:a(()=>[n("Apply")]),_:1})]),G,d("div",H,[(x(),u(T,null,z(g,o=>d("div",{key:o,class:"c-my-option-item",onClick:Q=>k(o)},B(o),9,M)),64))])])):h("",!0)])]),_:1},512)])])}}});const Y=R(P,[["__scopeId","data-v-0b5e0426"]]);export{Y as default};
