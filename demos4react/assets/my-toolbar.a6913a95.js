import{r as i,a as o}from"./index.e03a6f0f.js";import{G as r}from"./relation-graph.55ff0664.js";import c from"./my-toolbar-toolbar.40643ced.js";const l={rootId:"2",nodes:[{id:"1",text:"\u8282\u70B9-1",myicon:"el-icon-star-on"},{id:"2",text:"\u8282\u70B9-2",myicon:"el-icon-setting",width:100,height:100},{id:"3",text:"\u8282\u70B9-3",myicon:"el-icon-setting"},{id:"4",text:"\u8282\u70B9-4",myicon:"el-icon-star-on"},{id:"6",text:"\u8282\u70B9-6",myicon:"el-icon-setting"},{id:"7",text:"\u8282\u70B9-7",myicon:"el-icon-setting"},{id:"8",text:"\u8282\u70B9-8",myicon:"el-icon-star-on"},{id:"9",text:"\u8282\u70B9-9",myicon:"el-icon-headset"},{id:"71",text:"\u8282\u70B9-71",myicon:"el-icon-headset"},{id:"72",text:"\u8282\u70B9-72",myicon:"el-icon-s-tools"},{id:"73",text:"\u8282\u70B9-73",myicon:"el-icon-star-on"},{id:"81",text:"\u8282\u70B9-81",myicon:"el-icon-s-promotion"},{id:"82",text:"\u8282\u70B9-82",myicon:"el-icon-s-promotion"},{id:"83",text:"\u8282\u70B9-83",myicon:"el-icon-star-on"},{id:"84",text:"\u8282\u70B9-84",myicon:"el-icon-s-promotion"},{id:"85",text:"\u8282\u70B9-85",myicon:"el-icon-sunny"},{id:"91",text:"\u8282\u70B9-91",myicon:"el-icon-sunny"},{id:"92",text:"\u8282\u70B9-82",myicon:"el-icon-sunny"},{id:"5",text:"\u8282\u70B9-5",myicon:"el-icon-sunny"}],lines:[{from:"7",to:"71",text:"\u6295\u8D44"},{from:"7",to:"72",text:"\u6295\u8D44"},{from:"7",to:"73",text:"\u6295\u8D44"},{from:"8",to:"81",text:"\u6295\u8D44"},{from:"8",to:"82",text:"\u6295\u8D44"},{from:"8",to:"83",text:"\u6295\u8D44"},{from:"8",to:"84",text:"\u6295\u8D44"},{from:"8",to:"85",text:"\u6295\u8D44"},{from:"9",to:"91",text:"\u6295\u8D44"},{from:"9",to:"92",text:"\u6295\u8D44"},{from:"1",to:"2",text:"\u6295\u8D44"},{from:"3",to:"1",text:"\u9AD8\u7BA1"},{from:"4",to:"2",text:"\u9AD8\u7BA1"},{from:"6",to:"2",text:"\u9AD8\u7BA1"},{from:"7",to:"2",text:"\u9AD8\u7BA1"},{from:"8",to:"2",text:"\u9AD8\u7BA1"},{from:"9",to:"2",text:"\u9AD8\u7BA1"},{from:"1",to:"5",text:"\u6295\u8D44"}]},s=({node:t})=>(console.log("NodeSlot:"),t.id==="2"?o("div",{style:{zIndex:555,opacity:.5,lineHeight:"100px",width:"100px",height:"100px",color:"#000000",borderRadius:"50%",boxSizing:"border-box",fontSize:"18px",textAlign:"center",overflow:"hidden"},children:o("div",{style:{width:"100%",height:t.data.percent*100+"%",marginTop:(1-t.data.percent)*100+"%",background:"linear-gradient(to bottom, #00FFFF, #FF00FF)"},children:t.text})}):o("div",{style:{lineHeight:"80px",textAlign:"center"},children:o("span",{children:t.text})})),p=()=>{const t=i.exports.useRef();i.exports.useEffect(()=>{n()},[]);const n=async()=>{await t.current.setJsonData(l,e=>{})};return o("div",{children:o("div",{style:{height:600,width:900,border:"#efefef solid 1px"},children:o(r,{ref:t,options:{debug:!0,defaultLineShape:1,layout:{layoutName:"center",maxLayoutTimes:3e3},defaultExpandHolderPosition:"right"},nodeSlot:s,toolBarSlot:c,onNodeClick:(e,u)=>(console.log("onNodeClick:",e.text),!0),onLineClick:(e,u,a)=>(console.log("onLineClick:",e.text,e.from,e.to),!0)})})})};export{p as default};
