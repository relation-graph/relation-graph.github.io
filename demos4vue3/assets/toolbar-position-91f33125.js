import{k as y}from"./relation-graph-585d193c.js";import{d as x,r,o as C,a as B,c as S,b as s,e,w as o,u as I,k as P,f as a,i as g,p as w,j as z}from"./index-5a571be1.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const _=d=>(w("data-v-c0bc9523"),d=d(),z(),d),R={class:"c-my-panel"},T=_(()=>s("div",{class:"c-option-name"},"Toolbar Style:",-1)),H=_(()=>s("div",{class:"c-option-name"},"Toolbar Horizontal Position:",-1)),D=_(()=>s("div",{class:"c-option-name"},"Toolbar Vertical Position:",-1)),U=_(()=>s("div",{class:"c-option-name"},"Toolbar Style:",-1)),A=x({__name:"toolbar-position",setup(d){const p=r(""),m=r("v"),f=r("right"),b=r("center"),i={useAnimationWhenRefresh:!1},h=r(null);C(()=>{V()});const V=async()=>{const v={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"Relation 1",color:"#43a2f1"},{from:"a",to:"c",text:"Relation 2"},{from:"a",to:"e",text:"Relation 3"},{from:"b",to:"e",text:"",color:"#67C23A"}]};h.value.setJsonData(v,l=>{})},c=()=>{i.toolBarDirection=m.value,i.toolBarPositionH=f.value,i.toolBarPositionV=b.value,h.value.getInstance().setOptions(i)};return(v,l)=>{const t=g("el-radio-button"),u=g("el-radio-group");return B(),S("div",null,[s("div",{style:{height:"calc(100vh - 60px)"},class:P(["my-toolbar-style-"+p.value])},[e(I(y),{ref_key:"graphRef",ref:h,options:i},{"graph-plug":o(()=>[s("div",R,[T,e(u,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=n=>m.value=n),size:"mini",onChange:c},{default:o(()=>[e(t,{label:"v"},{default:o(()=>[a("Vertical")]),_:1}),e(t,{label:"h"},{default:o(()=>[a("Horizontal")]),_:1})]),_:1},8,["modelValue"]),H,e(u,{modelValue:f.value,"onUpdate:modelValue":l[1]||(l[1]=n=>f.value=n),size:"mini",onChange:c},{default:o(()=>[e(t,{label:"left"},{default:o(()=>[a("left")]),_:1}),e(t,{label:"center"},{default:o(()=>[a("center")]),_:1}),e(t,{label:"right"},{default:o(()=>[a("right")]),_:1})]),_:1},8,["modelValue"]),D,e(u,{modelValue:b.value,"onUpdate:modelValue":l[2]||(l[2]=n=>b.value=n),size:"mini",onChange:c},{default:o(()=>[e(t,{label:"top"},{default:o(()=>[a("top")]),_:1}),e(t,{label:"center"},{default:o(()=>[a("center")]),_:1}),e(t,{label:"bottom"},{default:o(()=>[a("bottom")]),_:1})]),_:1},8,["modelValue"]),U,e(u,{modelValue:p.value,"onUpdate:modelValue":l[3]||(l[3]=n=>p.value=n),size:"mini",onChange:c},{default:o(()=>[e(t,{label:""},{default:o(()=>[a("Default")]),_:1}),e(t,{label:"1"},{default:o(()=>[a("Style 1")]),_:1}),e(t,{label:"2"},{default:o(()=>[a("Style 2")]),_:1}),e(t,{label:"3"},{default:o(()=>[a("Style 3")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)],2)])}}});const E=k(A,[["__scopeId","data-v-c0bc9523"]]);export{E as default};
