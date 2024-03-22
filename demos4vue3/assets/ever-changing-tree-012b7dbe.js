import{M as N}from"./relation-graph-de73bd62.js";import{d as I,r as u,o as P,a as L,c as B,b as n,e,w as t,u as R,f as a,q as z,i as T,p as D,j as E}from"./index-e1681cb0.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const s=f=>(D("data-v-c6e5770b"),f=f(),E(),f),U={ref:"myPage",class:"my-graph",style:{height:"calc(100vh - 60px)"}},k={class:"c-my-panel"},J=s(()=>n("div",{class:"c-option-name"},"Layout Direction:",-1)),F=s(()=>n("div",{class:"c-option-name"},"Layout Expansion Direction:",-1)),H=s(()=>n("div",{class:"c-option-name"},"Line Shape:",-1)),M={key:0},j=s(()=>n("div",{class:"c-option-name"},"Polyline Radius:",-1)),W=s(()=>n("div",{class:"c-option-name"},"Junction Point:",-1)),q=s(()=>n("div",{class:"c-option-name"},"Level Distance & Node Spacing:",-1)),G=s(()=>n("div",{class:"c-option-name"},"Node Spacing (Horizontal):",-1)),A=s(()=>n("div",{class:"c-option-name"},"Node Spacing (Vertical):",-1)),K=I({__name:"ever-changing-tree",setup(f){const c={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"#2E74B5",defaultNodeColor:"#2E74B5",defaultNodeBorderWidth:0,defaultNodeBorderColor:"#2E74B5",defaultNodeFontColor:"#ffffff",defaultNodeWidth:40,defaultNodeHeight:40,toolBarDirection:"h",toolBarPositionH:"center",toolBarPositionV:"bottom",defaultLineShape:2,defaultJunctionPoint:"lr",defaultLineTextOffset_x:2,defaultLineTextOffset_y:-3,layout:{layoutName:"tree",from:"left",min_per_width:70,min_per_height:50}},w={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b",text:"Text"},{from:"b",to:"b1",text:"Text"},{from:"b1",to:"b1-1",text:"Text"},{from:"b1",to:"b1-2",text:"Text"},{from:"b1",to:"b1-3",text:"Text"},{from:"b1",to:"b1-4",text:"Text"},{from:"b1",to:"b1-5",text:"Text"},{from:"b1",to:"b1-6",text:"Text"},{from:"b",to:"b2",text:"Text"},{from:"b2",to:"b2-1",text:"Text"},{from:"b2",to:"b2-2",text:"Text"},{from:"a",to:"c",text:"Text"},{from:"c",to:"c1",text:"Text"},{from:"c",to:"c2",text:"Text"},{from:"c",to:"c3",text:"Text"}]},_=u(2),m=u(5),g=u("center"),V=u("lr"),y=u("left"),p=u(300),b=u(70),x=u(),S=async()=>{const d=x.value.getInstance();await d.setJsonData(w),await d.moveToCenter(),await d.zoomToFit()},h=()=>{const l=x.value.getInstance().options;l.defaultLineShape=_.value,l.defaultPolyLineRadius=m.value,l.defaultJunctionPoint=V.value},v=async()=>{const d=c.layout;d.from=y.value,d.layoutExpansionDirection=g.value,d.min_per_width=p.value,d.max_per_width=p.value+10,d.min_per_height=b.value,d.max_per_height=b.value+10,c.defaultPolyLineRadius=m.value,await x.value.getInstance().setOptions(c),h()};return P(()=>{S()}),(d,l)=>{const o=T("el-radio-button"),r=T("el-radio-group"),C=T("el-slider");return L(),B("div",null,[n("div",U,[e(R(N),{ref_key:"graphRef",ref:x,options:c},{"graph-plug":t(()=>[n("div",k,[J,e(r,{size:"mini",modelValue:y.value,"onUpdate:modelValue":l[0]||(l[0]=i=>y.value=i),onChange:v},{default:t(()=>[e(o,{label:"left"},{default:t(()=>[a("left")]),_:1}),e(o,{label:"right"},{default:t(()=>[a("right")]),_:1}),e(o,{label:"top"},{default:t(()=>[a("top")]),_:1}),e(o,{label:"bottom"},{default:t(()=>[a("bottom")]),_:1})]),_:1},8,["modelValue"]),F,e(r,{size:"mini",modelValue:g.value,"onUpdate:modelValue":l[1]||(l[1]=i=>g.value=i),onChange:v},{default:t(()=>[e(o,{label:"center"},{default:t(()=>[a("Default")]),_:1}),e(o,{label:"left"},{default:t(()=>[a("Left")]),_:1}),e(o,{label:"right"},{default:t(()=>[a("Right")]),_:1}),e(o,{label:"top"},{default:t(()=>[a("Top")]),_:1}),e(o,{label:"bottom"},{default:t(()=>[a("Bottom")]),_:1})]),_:1},8,["modelValue"]),H,e(r,{modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=i=>_.value=i),size:"mini",onChange:h},{default:t(()=>[e(o,{label:1},{default:t(()=>[a("Straight")]),_:1}),e(o,{label:2},{default:t(()=>[a("2")]),_:1}),e(o,{label:3},{default:t(()=>[a("3")]),_:1}),e(o,{label:5},{default:t(()=>[a("5")]),_:1}),e(o,{label:6},{default:t(()=>[a("6")]),_:1}),e(o,{label:7},{default:t(()=>[a("7")]),_:1}),e(o,{label:4},{default:t(()=>[a("Polyline")]),_:1})]),_:1},8,["modelValue"]),_.value===4?(L(),B("div",M,[j,e(r,{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=i=>m.value=i),size:"mini",onChange:h},{default:t(()=>[e(o,{label:0},{default:t(()=>[a("0")]),_:1}),e(o,{label:3},{default:t(()=>[a("3")]),_:1}),e(o,{label:5},{default:t(()=>[a("5")]),_:1}),e(o,{label:8},{default:t(()=>[a("8")]),_:1}),e(o,{label:10},{default:t(()=>[a("10")]),_:1}),e(o,{label:15},{default:t(()=>[a("15")]),_:1})]),_:1},8,["modelValue"])])):z("",!0),W,e(r,{modelValue:V.value,"onUpdate:modelValue":l[4]||(l[4]=i=>V.value=i),size:"mini",onChange:h},{default:t(()=>[e(o,{label:"border"},{default:t(()=>[a("Border")]),_:1}),e(o,{label:"tb"},{default:t(()=>[a("Top-Bottom")]),_:1}),e(o,{label:"lr"},{default:t(()=>[a("Left-Right")]),_:1}),e(o,{label:"ltrb"},{default:t(()=>[a("Left-Top-Right-Bottom")]),_:1}),e(o,{label:"left"},{default:t(()=>[a("L")]),_:1}),e(o,{label:"top"},{default:t(()=>[a("T")]),_:1}),e(o,{label:"right"},{default:t(()=>[a("R")]),_:1}),e(o,{label:"bottom"},{default:t(()=>[a("B")]),_:1})]),_:1},8,["modelValue"]),q,n("div",null,[n("div",null,[n("div",null,[G,e(C,{modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=i=>p.value=i),min:40,max:500,onChange:v},null,8,["modelValue"])]),n("div",null,[A,e(C,{modelValue:b.value,"onUpdate:modelValue":l[6]||(l[6]=i=>b.value=i),min:40,max:500,onChange:v},null,8,["modelValue"])])])])])]),_:1},512)],512)])}}});const Z=O(K,[["__scopeId","data-v-c6e5770b"]]);export{Z as default};
