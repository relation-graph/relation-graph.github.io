import{M as s}from"./relation-graph-bae0ebdb.js";import{d as r,r as l,o as f,a as u,c as b,b as x,e as h,u as p}from"./index-bbffd316.js";const m={style:{height:"calc(100vh - 60px)"}},k=r({__name:"show-single-nodes3",setup(_){const d=l(),i={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border",defaultLineWidth:2,defaultLineColor:"green",layout:{layoutName:"circle"}};f(()=>{n()});const n=()=>{const t={rootId:"",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b2",text:"b2"},{id:"b3",text:"b3"},{id:"b4",text:"b4"},{id:"b5",text:"b5"},{id:"b6",text:"b6"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"},{id:"d",text:"d"},{id:"d1",text:"d1"},{id:"d2",text:"d2"},{id:"d3",text:"d3"},{id:"d4",text:"d4"},{id:"e",text:"e"},{id:"e2",text:"e2"}],lines:[{from:"b",to:"b1"},{from:"c2",to:"b5"},{from:"d3",to:"b3"},{from:"d",to:"d1"},{from:"e",to:"e2"}]},e=t.nodes[0].id;t.rootId=e,t.nodes.forEach(o=>{o.id!==e&&t.lines.push({from:e,to:o.id,opacity:0})}),d.value.setJsonData(t,async o=>{await o.moveToCenter(),await o.zoomToFit()})},a=(t,e)=>{console.log("onNodeClick:",t)},c=(t,e,o)=>{console.log("onLineClick:",t)};return(t,e)=>(u(),b("div",null,[x("div",m,[h(p(s),{ref_key:"graphRef",ref:d,options:i,onNodeClick:a,onLineClick:c},null,512)])]))}});export{k as default};
