import{M as f}from"./relation-graph-bae0ebdb.js";import{d as m,r as c,o as b,a as u,c as p,b as d,e as l,w as x,u as _,i as g}from"./index-bbffd316.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const v={style:{height:"calc(100vh - 60px)"}},C={class:"c-my-panel"},D=m({__name:"disable-effect",setup(N){const t={useAnimationWhenRefresh:!1,defaultFocusRootNode:!1,disableLineClickEffect:!0,allowSwitchLineShape:!0,defaultNodeBorderWidth:0,defaultLineColor:"#a9bdc6",defaultLineWidth:2,defaultNodeShape:0,disableZoom:!0,disableDragCanvas:!0,disableDragNode:!0,disableNodeClickEffect:!0,defaultPolyLineRadius:10,defaultLineShape:4,layout:{layoutName:"tree",from:"top",levelDistance:"300,300,300,300",min_per_width:100,max_per_width:200},disableDefaultClickEffect:!0},n=c();b(()=>{setTimeout(()=>{r()},100)});const r=()=>{const o={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b2",text:"b2"},{id:"b3",text:"b3"},{id:"b4",text:"b4"},{id:"b5",text:"b5"},{id:"b6",text:"b6"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"},{id:"d",text:"d"},{id:"d1",text:"d1"},{id:"d2",text:"d2"},{id:"d3",text:"d3"},{id:"d4",text:"d4"},{id:"e",text:"e"},{id:"e1",text:"e1"},{id:"e2",text:"e2"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b",to:"b2"},{from:"b",to:"b3"},{from:"b",to:"b4"},{from:"b",to:"b5"},{from:"b",to:"b6"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"},{from:"a",to:"d"},{from:"d",to:"d1"},{from:"d",to:"d2"},{from:"d",to:"d3"},{from:"d",to:"d4"},{from:"a",to:"e"},{from:"e",to:"e1"},{from:"e",to:"e2"}]};n.value.setJsonData(o,e=>{})},i=async()=>{var e;const o=(e=n.value)==null?void 0:e.getInstance();o&&(await o.setOptions(t,!0),await o.refresh())};return(o,e)=>{const s=g("el-switch");return u(),p("div",null,[d("div",v,[l(_(f),{ref_key:"graphRef",ref:n,options:t},{"graph-plug":x(()=>[d("div",C,[d("div",null,[l(s,{size:"small",style:{"margin-left":"30px"},modelValue:t.disableZoom,"onUpdate:modelValue":e[0]||(e[0]=a=>t.disableZoom=a),onChange:i,"active-text":"Disable Zoom"},null,8,["modelValue"])]),d("div",null,[l(s,{size:"small",style:{"margin-left":"30px"},modelValue:t.disableDragCanvas,"onUpdate:modelValue":e[1]||(e[1]=a=>t.disableDragCanvas=a),onChange:i,"active-text":"Disable Canvas Drag"},null,8,["modelValue"])]),d("div",null,[l(s,{size:"small",style:{"margin-left":"30px"},modelValue:t.disableDragNode,"onUpdate:modelValue":e[2]||(e[2]=a=>t.disableDragNode=a),onChange:i,"active-text":"Disable Node Drag"},null,8,["modelValue"])]),d("div",null,[l(s,{size:"small",style:{"margin-left":"30px"},modelValue:t.disableNodeClickEffect,"onUpdate:modelValue":e[3]||(e[3]=a=>t.disableNodeClickEffect=a),onChange:i,"active-text":"Disable Node Click Effect"},null,8,["modelValue"])])])]),_:1},512)])])}}});const k=h(D,[["__scopeId","data-v-3ebbb29e"]]);export{k as default};
