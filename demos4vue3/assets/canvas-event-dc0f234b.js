import{M as i}from"./relation-graph-588d2e75.js";import{d,r as h,o as f,a as u,c as p,b as g,e as C,u as w}from"./index-e4516832.js";const _={style:{height:"calc(100vh)"}},x=d({__name:"canvas-event",setup(m){const a={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,checkedLineColor:"green",defaultLineWidth:3,defaultJunctionPoint:"border"},n=h(null),c=async()=>{var t;const o={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"关系1",color:"#43a2f1"},{from:"a",to:"c",text:"关系2"},{from:"a",to:"e",text:"关系3"},{from:"b",to:"e",text:"",color:"#67C23A"}]},e=(t=n.value)==null?void 0:t.getInstance();e&&(await e.setJsonData(o),await e.moveToCenter(),await e.zoomToFit())},l=(o,e)=>{console.log("onNodeClick:",o)},s=(o,e,t)=>{console.log("onLineClick:",o)},r=o=>{var t;const e=(t=n.value)==null?void 0:t.getInstance();console.log("onCanvasClick:",o),e&&e.clearChecked()};return f(()=>{c()}),(o,e)=>(u(),p("div",null,[g("div",_,[C(w(i),{ref_key:"graphRef",ref:n,options:a,onCanvasClick:r,onNodeClick:l,onLineClick:s},null,512)])]))}});export{x as default};
