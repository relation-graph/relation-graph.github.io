import{M as v}from"./relation-graph-28379630.js";import{d as g,r as u,o as x,a as C,c as y,b as d,e as t,w as o,u as b,f as n,i as p,p as N,j as S}from"./index-f7176e57.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const I=l=>(N("data-v-f1aa2844"),l=l(),S(),l),L={style:{height:"calc(100vh - 60px)"}},T={class:"c-my-panel"},k=I(()=>d("div",{class:"c-option-name"},"Line Shape:",-1)),V=g({__name:"line-style-2",setup(l){const c={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,placeOtherGroup:!0,defaultJunctionPoint:"lr",defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:4,defaultLineShape:2,showLineLabel:!1,lineUseTextPath:!0,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]},i=u(2),_=async()=>{const r={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5"},{from:"2",to:"3"},{from:"2",to:"4"},{from:"3",to:"20"},{from:"4",to:"15"},{from:"4",to:"14"},{from:"5",to:"24"},{from:"5",to:"22"}]},e=s.value.getInstance();await e.setJsonData(r),await e.moveToCenter(),await e.zoomToFit()},s=u();x(()=>{_()});const f=(r,e)=>{console.log("onLineClick:",r),s.value&&(s.value.getInstance().options.defaultLineShape=i.value)};return(r,e)=>{const a=p("el-radio-button"),m=p("el-radio-group");return C(),y("div",null,[d("div",L,[t(b(v),{ref_key:"graphRef",ref:s,options:c},{"graph-plug":o(()=>[d("div",T,[k,t(m,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=h=>i.value=h),size:"small",onChange:f},{default:o(()=>[t(a,{label:1},{default:o(()=>[n("Straight")]),_:1}),t(a,{label:2},{default:o(()=>[n("Curve 1")]),_:1}),t(a,{label:3},{default:o(()=>[n("Curve 2")]),_:1}),t(a,{label:4},{default:o(()=>[n("Polyline")]),_:1}),t(a,{label:5},{default:o(()=>[n("Curve 5")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const M=w(V,[["__scopeId","data-v-f1aa2844"]]);export{M as default};
