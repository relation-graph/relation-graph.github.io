import{r,a as o}from"./index.7473cb17.js";import{u as d}from"./relation-graph.26f01d58.js";const c=()=>{const e=r.exports.useRef(null);r.exports.useEffect(()=>{i()},[]);const i=async()=>{var a;const n={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b",text:""},{from:"b",to:"b1",text:""},{from:"b1",to:"b1-1",text:""},{from:"b1",to:"b1-2",text:""},{from:"b1",to:"b1-3",text:""},{from:"b1",to:"b1-4",text:""},{from:"b1",to:"b1-5",text:""},{from:"b1",to:"b1-6",text:""},{from:"b",to:"b2",text:""},{from:"b2",to:"b2-1",text:""},{from:"b2",to:"b2-2",text:""},{from:"a",to:"c",text:""},{from:"c",to:"c1",text:""},{from:"c",to:"c2",text:""},{from:"c",to:"c3",text:""}]},t=(a=e.current)==null?void 0:a.getInstance();t&&(await t.setJsonData(n),await t.moveToCenter(),await t.zoomToFit())};return o("div",{children:o("div",{className:"my-graph",style:{height:"100vh"},children:o(d,{ref:e,options:{allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"transparent",defaultNodeBorderWidth:1,defaultNodeBorderColor:"rgba(255, 255, 255, 0.3)",defaultNodeFontColor:"#ffffff",defaultNodeWidth:170,defaultNodeHeight:40,toolBarDirection:"h",toolBarPositionH:"left",toolBarPositionV:"top",defaultPolyLineRadius:10,defaultLineShape:6,defaultJunctionPoint:"lr",layout:{layoutName:"tree",from:"left",min_per_width:410,min_per_height:50}}})})})};export{c as default};
