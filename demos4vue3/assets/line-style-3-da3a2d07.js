import{M as v}from"./relation-graph-11dba7f5.js";import{d as w,r as u,o as g,a as x,c as b,b as _,e as t,w as o,u as y,f as a,i as p,p as C,j as A}from"./index-358d0f07.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const N=l=>(C("data-v-c05b95a1"),l=l(),A(),l),E={style:{height:"calc(100vh - 60px)"}},L={class:"c-my-panel"},I=N(()=>_("div",{class:"c-option-name"},"Line Shape:",-1)),T=w({__name:"line-style-3",setup(l){const r=u(null);u(!1);const d=u(2),c={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,placeOtherGroup:!0,defaultJunctionPoint:"lr",defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:4,defaultLineShape:2,showLineLabel:!1,lineUseTextPath:!0,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]};g(()=>{f()});const f=()=>{const n={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5",showEndArrow:!1},{from:"2",to:"3",showEndArrow:!1},{from:"2",to:"4",showEndArrow:!1},{from:"3",to:"20",showEndArrow:!1},{from:"4",to:"15",showEndArrow:!1},{from:"4",to:"14",showEndArrow:!1},{from:"5",to:"24",showEndArrow:!1},{from:"5",to:"22",showEndArrow:!1}]};r.value.setJsonData(n)},h=(n,i)=>{var s;console.log("onLineClick:",n);const e=(s=r.value)==null?void 0:s.getInstance();e&&(e.options.defaultLineShape=d.value)};return(n,i)=>{const e=p("el-radio-button"),s=p("el-radio-group");return x(),b("div",null,[_("div",E,[t(y(v),{ref_key:"graphRef",ref:r,options:c},{"graph-plug":o(()=>[_("div",L,[I,t(s,{modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=m=>d.value=m),size:"small",onChange:h},{default:o(()=>[t(e,{label:1},{default:o(()=>[a("Straight")]),_:1}),t(e,{label:2},{default:o(()=>[a("Curve 1")]),_:1}),t(e,{label:3},{default:o(()=>[a("Curve 2")]),_:1}),t(e,{label:4},{default:o(()=>[a("Polyline")]),_:1}),t(e,{label:5},{default:o(()=>[a("Curve 5")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const H=S(T,[["__scopeId","data-v-c05b95a1"]]);export{H as default};
