import{r as a,a as r}from"./index.7473cb17.js";import{u as n}from"./relation-graph.26f01d58.js";const f=()=>{const u=a.exports.useRef(null);a.exports.useEffect(()=>{d()},[]);const x={defaultNodeBorderWidth:0,checkedLineColor:"#ff0000",layouts:[{layoutName:"fixed"}]},d=async()=>{var c;const i={rootId:"a",nodes:[{id:"a",text:"A",x:0,y:0},{id:"c",text:"C",x:350,y:5},{id:"b",text:"B",x:-220,y:0},{id:"e",text:"E",x:126,y:-171},{id:"i",text:"I",x:1,y:173},{id:"m",text:"M",x:425,y:171},{id:"m2",text:"M-2",x:459,y:-189},{id:"m3",text:"M-3",x:236,y:-177},{id:"m4",text:"M-4",x:354,y:-183},{id:"p3",text:"P-3",x:-386,y:-389},{id:"p4",text:"P-4",x:450,y:-459}],lines:[{from:"a",to:"c",text:"a > c",color:"rgba(30, 144, 255, 1)"},{from:"c",to:"a",text:"c > a",color:"rgba(255, 140, 0, 1)"},{from:"a",to:"b",text:"\u53CC\u5411\u7BAD\u5934",showStartArrow:!0,showEndArrow:!0},{from:"a",to:"e",text:"\u4E0D\u663E\u793A\u7BAD\u5934",isHideArrow:!0},{from:"b",to:"i",text:"\u6298\u7EBF",lineShape:4},{from:"c",to:"m2",text:"\u6837\u5F0F3",lineShape:3,color:"#00ced1"},{from:"c",to:"m3",text:"\u6837\u5F0F3",lineShape:3,color:"#00ced1"},{from:"c",to:"m4",text:"\u6837\u5F0F3",lineShape:3,color:"#00ced1"},{from:"i",to:"m",text:"\u6570\u636E\u4E3A\uFF1Ai > m \u4F46\u663E\u793A\u4E3A m > i",showStartArrow:!0,showEndArrow:!1,color:"#00ced1"},{from:"i",to:"m",text:"\u6570\u636E\u4E3A\uFF1Ai > m",showStartArrow:!1,showEndArrow:!0,color:"rgba(255, 140, 0, 1)"},{from:"e",to:"p3",text:"\u8FD9\u6761\u5173\u7CFB\u7EBF\u7684\u6587\u5B57\u975E\u5E38\u957F\uFF0C\u4F46\u4E0D\u987A\u7740\u8FD9\u6761\u7EBF\u8D70",lineShape:5,color:"#ffd700"},{from:"e",to:"p4",text:"\u8FD9\u6761\u5173\u7CFB\u7EBF\u7684\u6587\u5B57\u975E\u5E38\u957F\uFF0C\u5B83\u53EF\u4EE5\u987A\u7740\u8FD9\u6761\u7EBF\u8D70",useTextPath:!0,lineShape:5,color:"#ffd700"}]},o=(c=u.current)==null?void 0:c.getInstance();await(o==null?void 0:o.setJsonData(i)),await(o==null?void 0:o.moveToCenter()),await(o==null?void 0:o.zoomToFit())};return r("div",{children:r("div",{style:{height:"100vh"},children:r(n,{ref:u,options:x,onNodeClick:(t,e)=>{console.log("onNodeClick:",t)},onLineClick:(t,e,i)=>{console.log("onLineClick:",t,e)}})})})};export{f as default};
