import{r as a,a as e}from"./index.33d8d498.js";import{G as l}from"./relation-graph.5219549a.js";const p=()=>{const n=a.exports.useRef(null),i={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border"};a.exports.useEffect(()=>{r()},[]);const r=async()=>{const o={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"Line Text",color:"#43a2f1"},{from:"a",to:"c",text:"Line Text"},{from:"a",to:"e",text:"Line Text"},{from:"b",to:"e",text:"",color:"#67C23A"}]},t=n.current.getInstance();await t.setJsonData(o),await t.moveToCenter(),await t.zoomToFit()};return e("div",{children:e("div",{style:{height:"calc(100vh - 60px)"},children:e(l,{ref:n,options:i,onNodeClick:(o,t)=>{console.log("onNodeClick:",o)},onLineClick:(o,t,d)=>{console.log("onLineClick:",o)}})})})};export{p as default};
