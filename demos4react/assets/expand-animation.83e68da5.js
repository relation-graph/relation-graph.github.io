import{r as e,a as o,j as n}from"./index.7473cb17.js";import{u as c}from"./relation-graph.26f01d58.js";import{MySwitch as u}from"./RGComponentsForDemo.afa6e56e.js";const h=()=>{const a=e.exports.useRef(null),[r,s]=e.exports.useState(!0),i={layout:{layoutName:"tree",min_per_width:40,max_per_width:70,min_per_height:200},defaultNodeShape:1,defaultNodeWidth:30,defaultLineShape:2,defaultJunctionPoint:"tb",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)",defaultNodeHeight:100,reLayoutWhenExpandedOrCollapsed:!0,defaultExpandHolderPosition:"bottom",zoomToFitWhenRefresh:!0,useAnimationWhenExpanded:!0,debug:!1},l=async()=>{var b;const d={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1",expanded:!1},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"}]},t=(b=a.current)==null?void 0:b.getInstance();await(t==null?void 0:t.setOptions(i)),await(t==null?void 0:t.setJsonData(d)),await(t==null?void 0:t.playShowEffect())},f=()=>{a.current.getInstance().options.reLayoutWhenExpandedOrCollapsed=r};return e.exports.useEffect(()=>{l()},[]),e.exports.useEffect(()=>{f()},[r]),o("div",{children:n("div",{style:{height:"100vh"},children:[n("div",{className:"w-96 rounded-lg absolute left-20 top-20 z-20 p-4 bg-white border-solid border-2 border-black shadow-lg",children:[o("div",{className:"c-option-name",children:"After clicking to expand/collapse the node:"}),o(u,{data:[{value:!0,text:"Re-layout"},{value:!1,text:"Do not re-layout"}],currentValue:r,onChange:d=>{s(d)}})]}),o(c,{ref:a,options:i})]})})};export{h as default};
