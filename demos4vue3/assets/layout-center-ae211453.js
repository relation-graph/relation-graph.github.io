import{M as x}from"./relation-graph-9d2491ce.js";import{d as a,r as m,o as c,a as f,c as l,b as N,e as v,u}from"./index-f19b6715.js";const I={style:{height:"calc(100vh - 60px)"}},g=a({__name:"layout-center",setup(p){const n=m(),d={debug:!0,defaultNodeBorderWidth:0,defaultNodeColor:"rgba(238, 178, 94, 1)",allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineShape:1,layouts:[{layoutName:"center"}],defaultJunctionPoint:"border"},i=async()=>{var o;const e={rootId:"2",nodes:[{id:"1",text:"Node-1"},{id:"2",text:"Node-2"},{id:"3",text:"Node-3"},{id:"4",text:"Node-4"},{id:"6",text:"Node-6"},{id:"7",text:"Node-7"},{id:"8",text:"Node-8"},{id:"9",text:"Node-9"},{id:"71",text:"Node-71"},{id:"72",text:"Node-72"},{id:"73",text:"Node-73"},{id:"81",text:"Node-81"},{id:"82",text:"Node-82"},{id:"83",text:"Node-83"},{id:"84",text:"Node-84"},{id:"85",text:"Node-85"},{id:"91",text:"Node-91"},{id:"92",text:"Node-82"},{id:"51",text:"Node-51"},{id:"52",text:"Node-52"},{id:"53",text:"Node-53"},{id:"54",text:"Node-54"},{id:"55",text:"Node-55"},{id:"5",text:"Node-5"}],lines:[{from:"7",to:"71",text:"Investment"},{from:"7",to:"72",text:"Investment"},{from:"7",to:"73",text:"Investment"},{from:"8",to:"81",text:"Investment"},{from:"8",to:"82",text:"Investment"},{from:"8",to:"83",text:"Investment"},{from:"8",to:"84",text:"Investment"},{from:"8",to:"85",text:"Investment"},{from:"9",to:"91",text:"Investment"},{from:"9",to:"92",text:"Investment"},{from:"5",to:"51",text:"Investment1"},{from:"5",to:"52",text:"Investment"},{from:"5",to:"53",text:"Investment3"},{from:"5",to:"54",text:"Investment4"},{from:"5",to:"55",text:"Investment"},{from:"1",to:"2",text:"Investment"},{from:"3",to:"1",text:"Executive"},{from:"4",to:"2",text:"Executive"},{from:"6",to:"2",text:"Executive"},{from:"7",to:"2",text:"Executive"},{from:"8",to:"2",text:"Executive"},{from:"9",to:"2",text:"Executive"},{from:"1",to:"5",text:"Investment"}]},t=(o=n.value)==null?void 0:o.getInstance();t&&(await t.setJsonData(e),await t.moveToCenter(),await t.zoomToFit())},r=(e,t)=>{console.log("onNodeClick:",e)},s=(e,t,o)=>{console.log("onLineClick:",e)};return c(()=>{i()}),(e,t)=>(f(),l("div",null,[N("div",I,[v(u(x),{ref_key:"graphRef",ref:n,options:d,onNodeClick:r,onLineClick:s},null,512)])]))}});export{g as default};
