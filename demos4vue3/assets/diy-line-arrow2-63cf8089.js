import{M as x}from"./relation-graph-bae0ebdb.js";import{d as g,r as f,o as v,a as C,c as y,b as u,e as t,w as o,u as b,f as a,i as p,p as L,j as N}from"./index-bbffd316.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const w=r=>(L("data-v-cfda9f08"),r=r(),N(),r),I={style:{height:"calc(100vh - 60px)"}},S={class:"c-my-panel"},V=w(()=>u("div",{class:"c-option-name"},"Line Shape:",-1)),A=g({__name:"diy-line-arrow2",setup(r){const c={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,placeOtherGroup:!0,defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:4,defaultLineShape:2,showLineLabel:!1,defaultJunctionPoint:"lr",defaultLineMarker:{markerWidth:45,markerHeight:45,refX:15,refY:3,data:"M0 0 H6 V6 H0 Z"},layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]};f(!1);const s=f(2),d=f(null),_=async()=>{const n={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"10",text:"卓立制造"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"},{id:"28",text:"地板RTV硅胶密封"},{id:"31",text:"温控器安装"},{id:"32",text:"蒸汽硅胶座配装"},{id:"33",text:"温度调试"}],lines:[{from:"2",to:"5",text:""},{from:"2",to:"3",text:""},{from:"2",to:"4",text:""},{from:"3",to:"20",text:""},{from:"4",to:"15",text:""},{from:"4",to:"14",text:""},{from:"5",to:"24",text:""},{from:"5",to:"22",text:""},{from:"10",to:"33",text:""},{from:"10",to:"32",text:""},{from:"10",to:"31",text:""},{from:"10",to:"28",text:""}]};d.value.setJsonData(n)},m=(n,i)=>{var l;console.log("onLineClick:",n);const e=(l=d.value)==null?void 0:l.getInstance();e&&(e.options.defaultLineShape=s.value)};return v(()=>{_()}),(n,i)=>{const e=p("el-radio-button"),l=p("el-radio-group");return C(),y("div",null,[u("div",I,[t(b(x),{ref_key:"graphRef",ref:d,options:c},{"graph-plug":o(()=>[u("div",S,[V,t(l,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=h=>s.value=h),size:"small",onChange:m},{default:o(()=>[t(e,{label:1},{default:o(()=>[a("Straight")]),_:1}),t(e,{label:2},{default:o(()=>[a("Curve 1")]),_:1}),t(e,{label:3},{default:o(()=>[a("Curve 2")]),_:1}),t(e,{label:4},{default:o(()=>[a("Polyline")]),_:1}),t(e,{label:5},{default:o(()=>[a("Curve 5")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const R=k(A,[["__scopeId","data-v-cfda9f08"]]);export{R as default};
