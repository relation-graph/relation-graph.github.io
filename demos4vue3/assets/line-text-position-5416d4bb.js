import{k as v}from"./relation-graph-4b768e87.js";import{d as T,r as d,o as w,a as L,c as O,b as x,f as a,e as o,w as l,t as h,u as C,i as f}from"./index-ee818b67.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const N={style:{height:"calc(100vh - 50px)",position:"relative","font-size":"12px","line-height":"30px"}},V={style:{width:"400px","padding-left":"20px","padding-top":"5px",position:"absolute",left:"20px",top:"20px","z-index":"20",padding:"20px","background-color":"#ffffff",border:"#efefef solid 1px","box-shadow":"0 3px 9px rgba(0,21,41,.08)"}},A=T({__name:"line-text-position",setup(k){const i={debug:!1,backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,useAnimationWhenRefresh:!1,placeOtherGroup:!0,defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:2,defaultLineShape:4,showLineLabel:!1,lineUseTextPath:!0,defaultLineTextOffset_x:0,defaultLineTextOffset_y:0,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]},p=d(),r=d(0),u=d(0),m=d(i);w(()=>{y()});const y=async()=>{var e;const t={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5",text:"Subsystem",showEndArrow:!1},{from:"2",to:"3",text:"Subsystem",showEndArrow:!1},{from:"2",to:"4",text:"Subsystem",showEndArrow:!1},{from:"3",to:"20",text:"Subsystem"},{from:"4",to:"15",text:"Subsystem"},{from:"4",to:"14",text:"Subsystem"},{from:"5",to:"24",text:"Subsystem"},{from:"5",to:"22",text:"Subsystem"}]};(e=p.value)==null||e.setJsonData(t,s=>{})},_=async()=>{var e;m.value.defaultLineTextOffset_x=r.value,m.value.defaultLineTextOffset_y=u.value;const t=(e=p.value)==null?void 0:e.getInstance();await(t==null?void 0:t.setOptions(JSON.parse(JSON.stringify(m.value)))),await(t==null?void 0:t.refresh())};return(t,e)=>{const s=f("el-radio-button"),b=f("el-radio-group"),c=f("el-slider"),g=f("el-button");return L(),O("div",null,[x("div",N,[x("div",V,[a(" Layout Direction: "),x("div",null,[o(b,{modelValue:i.layouts[0].from,"onUpdate:modelValue":e[0]||(e[0]=n=>i.layouts[0].from=n),size:"mini",onChange:_},{default:l(()=>[o(s,{label:"left"},{default:l(()=>[a("left")]),_:1}),o(s,{label:"right"},{default:l(()=>[a("right")]),_:1}),o(s,{label:"top"},{default:l(()=>[a("top")]),_:1}),o(s,{label:"bottom"},{default:l(()=>[a("bottom")]),_:1})]),_:1},8,["modelValue"])]),a(" Line Text x Offset: "+h(r.value)+" ",1),o(c,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=n=>r.value=n),min:-250,max:250,"show-tooltip":!0},null,8,["modelValue"]),a(" Line Text y Offset: "+h(u.value)+" ",1),o(c,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=n=>u.value=n),min:-50,max:50},null,8,["modelValue"]),o(g,{size:"mini",type:"primary",onClick:_},{default:l(()=>[a("Apply Settings")]),_:1})]),o(C(v),{ref_key:"graphRef",ref:p,options:i},null,512)])])}}});const W=S(A,[["__scopeId","data-v-b98a4cd2"]]);export{W as default};
