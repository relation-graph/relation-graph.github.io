import{M as x}from"./relation-graph-9cfe1c0d.js";import{d as b,r as d,o as y,a as w,c as O,b as r,e,w as a,u as C,f as o,i as h,p as I,j as V}from"./index-5e8eec4e.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const g=n=>(I("data-v-9d1e368a"),n=n(),V(),n),B={style:{height:"calc(100vh - 60px)"}},k={class:"c-my-panel"},E=g(()=>r("div",{class:"c-option-name"},"graphOffset_x:",-1)),M=g(()=>r("div",{class:"c-option-name"},"graphOffset_y:",-1)),N=b({__name:"graph-offset",setup(n){const _=d();d(!1);const f=d(0),p=d(0),m={debug:!1,graphOffset_x:0,graphOffset_y:0};y(()=>{v()});const v=async()=>{const l={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"关系1",color:"#43a2f1"},{from:"a",to:"c",text:"关系2"},{from:"a",to:"e",text:"关系3"},{from:"b",to:"e",text:"",color:"#67C23A"}]},s=_.value.getInstance();await s.setJsonData(l),await s.playShowEffect()},i=()=>{const l=_.value.getInstance();l.options.graphOffset_x=f.value,l.options.graphOffset_y=p.value,l.refresh()};return(l,s)=>{const t=h("el-radio-button"),u=h("el-radio-group");return w(),O("div",null,[r("div",B,[e(C(x),{ref_key:"graphRef",ref:_,options:m},{"graph-plug":a(()=>[r("div",k,[E,e(u,{modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=c=>f.value=c),size:"small",onChange:i},{default:a(()=>[e(t,{label:100},{default:a(()=>[o("100")]),_:1}),e(t,{label:200},{default:a(()=>[o("200")]),_:1}),e(t,{label:500},{default:a(()=>[o("500")]),_:1}),e(t,{label:800},{default:a(()=>[o("800")]),_:1})]),_:1},8,["modelValue"]),M,e(u,{modelValue:p.value,"onUpdate:modelValue":s[1]||(s[1]=c=>p.value=c),size:"small",onChange:i},{default:a(()=>[e(t,{label:100},{default:a(()=>[o("100")]),_:1}),e(t,{label:200},{default:a(()=>[o("200")]),_:1}),e(t,{label:500},{default:a(()=>[o("500")]),_:1}),e(t,{label:800},{default:a(()=>[o("800")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const R=S(N,[["__scopeId","data-v-9d1e368a"]]);export{R as default};
