var N=Object.defineProperty;var c=(e,o,t)=>o in e?N(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var a=(e,o,t)=>(c(e,typeof o!="symbol"?o+"":o,t),t);import{r as i,a as s}from"./index.7473cb17.js";import{a as x,u as p}from"./relation-graph.26f01d58.js";class E extends x{constructor(...t){super(...t);a(this,"myMouseDownAction")}setMyMouseDownAction(t){this.myMouseDownAction=t}onCanvasDragStart(t){this.myMouseDownAction(t),super.onCanvasDragStart(t)}}const h=()=>{const e=i.exports.useRef(null);i.exports.useEffect(()=>{o()},[]);const o=async()=>{var u;const n={rootId:"root",nodes:[{id:"root",text:"\u4E3B\u9898"},{id:"N2",text:"New-N2"},{id:"N3",text:"New-N3"},{id:"N4",text:"New-N4"},{id:"N5",text:"New-N5"},{id:"N6",text:"New-N6"},{id:"N7",text:"New-N7"},{id:"N8",text:"New-N8"}],lines:[{from:"root",to:"N2",text:"\u65B0\u8FDE\u7EBF1"},{from:"root",to:"N3",text:"\u65B0\u8FDE\u7EBF2"},{from:"N3",to:"N4",text:"\u65B0\u8FDE\u7EBF4"},{from:"N4",to:"N5",text:"\u65B0\u8FDE\u7EBF5"},{from:"N5",to:"N6",text:"\u65B0\u8FDE\u7EBF6"},{from:"N6",to:"N2",text:"\u65B0\u8FDE\u7EBF7"},{from:"N2",to:"N8",text:"\u65B0\u8FDE\u7EBF8"},{from:"N2",to:"N7",text:"\u65B0\u8FDE\u7EBF9"},{from:"N7",to:"N8",text:"\u65B0\u8FDE\u7EBF10"},{from:"root",to:"N8",text:"\u65B0\u8FDE\u7EBF11"}]},r=(u=e.current)==null?void 0:u.getInstance();r.setMyMouseDownAction(t),await r.setJsonData(n),await r.playShowEffect()},t=n=>{console.log("myOnMouseDown\u88AB\u89E6\u53D1\uFF1A",n)};return s("div",{children:s("div",{style:{height:"100vh",position:"relative",fontSize:"12px",lineHeight:"30px"},children:s(p,{ref:e,options:{},relationGraphCore:E})})})};export{h as default};
