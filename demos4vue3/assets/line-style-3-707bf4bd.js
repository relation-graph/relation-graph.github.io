import{M as v}from"./relation-graph-de73bd62.js";import{d as w,r as u,o as g,a as x,c as y,b as _,e as t,w as o,u as C,f as a,i as f,p as A,j as b}from"./index-e1681cb0.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const N=n=>(A("data-v-8df50301"),n=n(),b(),n),E={style:{height:"calc(100vh - 60px)"}},L={class:"c-my-panel"},I=N(()=>_("div",{class:"c-option-name"},"Line Shape:",-1)),T=w({__name:"line-style-3",setup(n){const r=u(null);u(!1);const d=u(2),p={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,placeOtherGroup:!0,defaultJunctionPoint:"lr",defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:4,defaultLineShape:2,showLineLabel:!1,lineUseTextPath:!0,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]};g(()=>{c()});const c=()=>{const l={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5",showEndArrow:!1},{from:"2",to:"3",showEndArrow:!1},{from:"2",to:"4",showEndArrow:!1},{from:"3",to:"20",showEndArrow:!1},{from:"4",to:"15",showEndArrow:!1},{from:"4",to:"14",showEndArrow:!1},{from:"5",to:"24",showEndArrow:!1},{from:"5",to:"22",showEndArrow:!1}]};r.value.setJsonData(l)},h=(l,i)=>{var s;console.log("onLineClick:",l);const e=(s=r.value)==null?void 0:s.getInstance();e&&(e.options.defaultLineShape=d.value)};return(l,i)=>{const e=f("el-radio-button"),s=f("el-radio-group");return x(),y("div",null,[_("div",E,[t(C(v),{ref_key:"graphRef",ref:r,options:p},{"graph-plug":o(()=>[_("div",L,[I,t(s,{modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=m=>d.value=m),size:"mini",onChange:h},{default:o(()=>[t(e,{label:1},{default:o(()=>[a("Straight")]),_:1}),t(e,{label:2},{default:o(()=>[a("Curve 1")]),_:1}),t(e,{label:3},{default:o(()=>[a("Curve 2")]),_:1}),t(e,{label:4},{default:o(()=>[a("Polyline")]),_:1}),t(e,{label:5},{default:o(()=>[a("Curve 5")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const H=S(T,[["__scopeId","data-v-8df50301"]]);export{H as default};
