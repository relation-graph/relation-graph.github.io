import{M as v}from"./relation-graph-9d2491ce.js";import{d as w,r as u,o as g,a as x,c as b,b as i,e,w as o,u as C,f as a,i as _,p as y,j as A}from"./index-f19b6715.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const S=l=>(y("data-v-8e12edb4"),l=l(),A(),l),E={style:{height:"calc(100vh - 60px)"}},L={class:"c-my-panel"},I=S(()=>i("div",{class:"c-option-name"},"Line Shape:",-1)),T=w({__name:"line-style-5",setup(l){const p={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,defaultNodeColor:"rgb(5, 170, 244)",placeOtherGroup:!0,defaultJunctionPoint:"lr",defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:2,defaultLineShape:2,showLineLabel:!1,lineUseTextPath:!0,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]},s=u(2),f=()=>{const n={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5",showEndArrow:!1},{from:"2",to:"3",showEndArrow:!1},{from:"2",to:"4",showEndArrow:!1},{from:"3",to:"20",showEndArrow:!1},{from:"4",to:"15",showEndArrow:!1},{from:"4",to:"14",showEndArrow:!1},{from:"5",to:"24",showEndArrow:!1},{from:"5",to:"22",showEndArrow:!1}]};r.value.setJsonData(n)},c=(n,d)=>{console.log("onLineClick:",n),r.value.getInstance().options.defaultLineShape=s.value},r=u(null);return g(()=>{f()}),(n,d)=>{const t=_("el-radio-button"),h=_("el-radio-group");return x(),b("div",null,[i("div",E,[e(C(v),{ref_key:"graphRef",ref:r,options:p},{"graph-plug":o(()=>[i("div",L,[I,e(h,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=m=>s.value=m),size:"mini",onChange:c},{default:o(()=>[e(t,{label:1},{default:o(()=>[a("Straight")]),_:1}),e(t,{label:2},{default:o(()=>[a("Curve 1")]),_:1}),e(t,{label:3},{default:o(()=>[a("Curve 2")]),_:1}),e(t,{label:4},{default:o(()=>[a("Polyline")]),_:1}),e(t,{label:5},{default:o(()=>[a("Curve 5")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const H=N(T,[["__scopeId","data-v-8e12edb4"]]);export{H as default};
