import{M as n}from"./relation-graph-28379630.js";import{d,r as c,o as f,a as s,c as b,b as l,e as m,u as x}from"./index-f7176e57.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const p={ref:"myPage",class:"my-graph",style:{height:"calc(100vh - 60px)"}},u=d({__name:"canvas-animation-bg",setup(h){const r={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"transparent",defaultNodeBorderWidth:1,defaultNodeBorderColor:"rgba(255, 255, 255, 0.3)",defaultNodeFontColor:"#ffffff",defaultNodeWidth:170,defaultNodeHeight:40,toolBarDirection:"h",toolBarPositionH:"left",toolBarPositionV:"top",defaultPloyLineRadius:10,defaultLineShape:6,defaultJunctionPoint:"lr",layout:{layoutName:"tree",from:"left",min_per_width:410,min_per_height:50}},e=c();f(()=>{i()});const i=async()=>{var a;const o={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b",text:""},{from:"b",to:"b1",text:""},{from:"b1",to:"b1-1",text:""},{from:"b1",to:"b1-2",text:""},{from:"b1",to:"b1-3",text:""},{from:"b1",to:"b1-4",text:""},{from:"b1",to:"b1-5",text:""},{from:"b1",to:"b1-6",text:""},{from:"b",to:"b2",text:""},{from:"b2",to:"b2-1",text:""},{from:"b2",to:"b2-2",text:""},{from:"a",to:"c",text:""},{from:"c",to:"c1",text:""},{from:"c",to:"c2",text:""},{from:"c",to:"c3",text:""}]},t=(a=e.value)==null?void 0:a.getInstance();t&&(await t.setJsonData(o),await t.moveToCenter(),await t.zoomToFit())};return(o,t)=>(s(),b("div",null,[l("div",p,[m(x(n),{ref_key:"graphRef",ref:e,options:r},null,512)],512)]))}});const B=_(u,[["__scopeId","data-v-74f1340b"]]);export{B as default};
