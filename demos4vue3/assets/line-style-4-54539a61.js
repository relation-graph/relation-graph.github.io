import{M as g}from"./relation-graph-588d2e75.js";import{d as v,r as u,o as w,a as x,c as C,b as _,e as o,w as t,u as y,f as a,i as p,p as b,j as A}from"./index-e4516832.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const S=l=>(b("data-v-55a43414"),l=l(),A(),l),E={style:{height:"calc(100vh)"}},L={class:"c-my-panel"},I=S(()=>_("div",{class:"c-option-name"},"Line Shape:",-1)),T=v({__name:"line-style-4",setup(l){const r=u(null);u(!1);const d=u(2),f={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,defaultNodeColor:"rgb(5, 170, 244)",placeOtherGroup:!0,defaultJunctionPoint:"lr",defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:1,defaultLineShape:2,showLineLabel:!1,lineUseTextPath:!0,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]};w(()=>{c()});const c=()=>{const n={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5",showEndArrow:!1},{from:"2",to:"3",showEndArrow:!1},{from:"2",to:"4",showEndArrow:!1},{from:"3",to:"20",showEndArrow:!1},{from:"4",to:"15",showEndArrow:!1},{from:"4",to:"14",showEndArrow:!1},{from:"5",to:"24",showEndArrow:!1},{from:"5",to:"22",showEndArrow:!1}]};r.value.setJsonData(n)},h=(n,i)=>{var s;console.log("onLineClick:",n);const e=(s=r.value)==null?void 0:s.getInstance();e&&(e.options.defaultLineShape=d.value)};return(n,i)=>{const e=p("el-radio-button"),s=p("el-radio-group");return x(),C("div",null,[_("div",E,[o(y(g),{ref_key:"graphRef",ref:r,options:f},{"graph-plug":t(()=>[_("div",L,[I,o(s,{modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=m=>d.value=m),size:"small",onChange:h},{default:t(()=>[o(e,{label:1},{default:t(()=>[a("Straight")]),_:1}),o(e,{label:2},{default:t(()=>[a("Curve 1")]),_:1}),o(e,{label:3},{default:t(()=>[a("Curve 2")]),_:1}),o(e,{label:4},{default:t(()=>[a("Polyline")]),_:1}),o(e,{label:5},{default:t(()=>[a("Curve 5")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const H=N(T,[["__scopeId","data-v-55a43414"]]);export{H as default};
