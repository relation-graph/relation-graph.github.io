import{M as L}from"./relation-graph-9d2491ce.js";import{d as V,r as i,o as B,a as P,c as S,b as r,e,w as t,u as w,k as I,f as a,i as m,p as N,j as O}from"./index-f19b6715.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const h=d=>(N("data-v-a94e28e6"),d=d(),O(),d),z={class:"c-my-panel"},A=h(()=>r("div",{class:"c-option-name"}," Line Shape: ",-1)),E=h(()=>r("div",{class:"c-option-name"}," Junction Point: ",-1)),J=h(()=>r("div",{class:"c-option-name"}," Line Text Anchor: ",-1)),U=h(()=>r("div",{class:"c-option-name"}," The Position Of The Text On The Line： ",-1)),M=V({__name:"lineAdv2",setup(d){const v={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"#2E74B5",defaultNodeColor:"#2E74B5",defaultNodeBorderWidth:0,defaultNodeBorderColor:"#2E74B5",defaultNodeFontColor:"#ffffff",defaultNodeWidth:170,defaultNodeHeight:40,toolBarDirection:"h",toolBarPositionH:"center",toolBarPositionV:"bottom",defaultLineShape:2,defaultJunctionPoint:"lr",lineUseTextPath:!0,defaultLineTextOffset_x:2,defaultLineTextOffset_y:-3,lineTextMaxLength:5,layout:{layoutName:"tree",from:"left",min_per_width:410,min_per_height:50}},g={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b",text:"These relationship texts are very long"},{from:"b",to:"b1",text:"These relationship texts are very long"},{from:"b1",to:"b1-1",text:"These relationship texts are very long"},{from:"b1",to:"b1-2",text:"These relationship texts are very long"},{from:"b1",to:"b1-3",text:"These relationship texts are very long"},{from:"b1",to:"b1-4",text:"These relationship texts are very long"},{from:"b1",to:"b1-5",text:"These relationship texts are very long"},{from:"b1",to:"b1-6",text:"These relationship texts are very long"},{from:"b",to:"b2",text:"These relationship texts are very long"},{from:"b2",to:"b2-1",text:"These relationship texts are very long"},{from:"b2",to:"b2-2",text:"These relationship texts are very long"},{from:"a",to:"c",text:"These relationship texts are very long"},{from:"c",to:"c1",text:"These relationship texts are very long"},{from:"c",to:"c2",text:"These relationship texts are very long"},{from:"c",to:"c3",text:"These relationship texts are very long"}]},p=i(2),_=i("lr"),x=i(""),u=i("middle"),T=i(0),y=i(0),b=i(),C=async()=>{await b.value.getInstance().setJsonData(g)},f=()=>{const c=b.value.getInstance(),l=c.options;l.defaultLineShape=p.value,l.defaultJunctionPoint=_.value,l.defaultLineTextOffset_x=T.value,l.defaultLineTextOffset_y=y.value;const o=c.getLinks().reduce((s,n)=>s.concat(...n.relations),[]);for(const s of o)s.placeText=x.value};return B(()=>{C()}),(c,l)=>{const o=m("el-radio-button"),s=m("el-radio-group");return P(),S("div",null,[r("div",{ref:"myPage",class:I(["my-graph",{"my-line-style-start":u.value==="start","my-line-style-end":u.value==="end"}]),style:{height:"calc(100vh - 60px)"}},[e(w(L),{ref_key:"graphRef",ref:b,options:v},{"graph-plug":t(()=>[r("div",z,[A,e(s,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=n=>p.value=n),size:"small",onChange:f},{default:t(()=>[e(o,{label:1},{default:t(()=>[a("Straight")]),_:1}),e(o,{label:2},{default:t(()=>[a("Curve 2")]),_:1}),e(o,{label:5},{default:t(()=>[a("Curve 5")]),_:1}),e(o,{label:6},{default:t(()=>[a("Curve 6")]),_:1}),e(o,{label:4},{default:t(()=>[a("Polyline")]),_:1})]),_:1},8,["modelValue"]),E,e(s,{modelValue:_.value,"onUpdate:modelValue":l[1]||(l[1]=n=>_.value=n),size:"small",onChange:f},{default:t(()=>[e(o,{label:"border"},{default:t(()=>[a("Border")]),_:1}),e(o,{label:"lr"},{default:t(()=>[a("Left-Right")]),_:1})]),_:1},8,["modelValue"]),J,e(s,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=n=>u.value=n),size:"small",onChange:f},{default:t(()=>[e(o,{label:"start"},{default:t(()=>[a("start")]),_:1}),e(o,{label:"middle"},{default:t(()=>[a("middle")]),_:1}),e(o,{label:"end"},{default:t(()=>[a("end")]),_:1})]),_:1},8,["modelValue"]),U,e(s,{modelValue:x.value,"onUpdate:modelValue":l[3]||(l[3]=n=>x.value=n),size:"small",onChange:f},{default:t(()=>[e(o,{label:""},{default:t(()=>[a("Default")]),_:1}),e(o,{label:"start"},{default:t(()=>[a("Close To Start")]),_:1}),e(o,{label:"end"},{default:t(()=>[a("Close To End")]),_:1}),e(o,{label:"20%"},{default:t(()=>[a("20%")]),_:1}),e(o,{label:"40%"},{default:t(()=>[a("40%")]),_:1}),e(o,{label:"60%"},{default:t(()=>[a("60%")]),_:1}),e(o,{label:"80%"},{default:t(()=>[a("80%")]),_:1}),e(o,{label:"90%"},{default:t(()=>[a("90%")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)],2)])}}});const H=k(M,[["__scopeId","data-v-a94e28e6"]]);export{H as default};
