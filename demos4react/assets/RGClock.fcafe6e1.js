import{r as d,j as u,a as n}from"./index.dfc4177b.js";import{r as h}from"./index.82d95b53.js";import"./index.a7531bab.js";const p=({node:t})=>t.id==="current"?n("div",{style:{zIndex:555,opacity:.5,lineHeight:"24px",width:"100%",height:"100%",color:"#000000",borderRadius:"50%",boxSizing:"border-box",background:"linear-gradient(to right, #00FFFF, #FF00FF)"},children:t.text}):t.id==="root"?n("div",{style:{zIndex:555,opacity:.5,lineHeight:"100px",width:"100%",height:"100%",color:"#000000",borderRadius:"50%",boxSizing:"border-box",fontSize:"32px",textAlign:"center",overflow:"hidden",border:"#000000 solid 1px"},children:n("div",{style:{width:"100%",height:t.data.percent*100+"%",marginTop:(1-t.data.percent)*100+"%",background:"linear-gradient(to bottom, #00FFFF, #FF00FF)"},children:t.text})}):n("div",{style:{lineHeight:"40px",width:"100%",height:"100%",border:"#999999 solid 1px",color:"#000000",borderRadius:"50%",boxSizing:"border-box",textAlign:"center"},children:t.text}),F=()=>{const t=d.exports.useRef(),c=d.exports.useRef(),r=d.exports.useRef(1);d.exports.useEffect(()=>{const e={rootId:"root",nodes:[{id:"root",text:"",width:100,height:100,data:{percent:0}}],lines:[]};for(let o=1;o<61;o++)e.nodes.push({id:o.toString(),text:o.toString()}),e.lines.push({from:"root",to:o.toString(),text:"Text"});return e.nodes.push({id:"current",text:"",x:-20,y:-20}),t.current.setJsonData(e,!0,()=>{c.current=setInterval(()=>{s()},500)}),()=>{clearInterval(c.current)}},[]);const s=async()=>{r.current>60&&(r.current=1);const e=t.current.getInstance();r.current===20&&e.startAutoLayout(),r.current===23&&await e.zoomToFit();const o=e.graphData.rootNode;r.current<=20&&o&&(o.data.percent=r.current/20),r.current==60&&(o&&(o.data.percent=0),e.stopAutoLayout(),await e.doLayout(),await e.setZoom(100),await e.zoomToFit());const i=e.getNodeById(r.current.toString()),a=e.getNodeById("current");!i||!a||(a.x=i.x,a.y=i.y,e.options.checkedNodeId="current",e.options.checkedLineId=e.getLinks().find(l=>l.toNode.id===i.id).relations[0].id,console.log(e.options.checkedLineId),t.current.updateView(),r.current++)};return u("div",{children:[n("div",{children:"ok"}),n("div",{style:{height:600,width:900,border:"#efefef solid 1px"},children:n(h,{ref:t,options:{debug:!0,showDebugPanel:!0,lineUseTextPath:!0,defaultLineShape:1,placeSingleNode:!1,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,layouts:[{layoutName:"center",maxLayoutTimes:3e3}],defaultNodeWidth:40,defaultNodeHeight:40,defaultNodeBorderWidth:0,defaultNodeColor:"transparent",defaultExpandHolderPosition:"right",defaultLineColor:"rgba(227,226,226,0.3)"},nodeSlot:p,onNodeClick:(e,o)=>(console.log("onNodeClick:",e.text),!0),onLineClick:(e,o,i)=>(console.log("onLineClick:",e.text,e.from,e.to),!0)})})]})};export{F as default};
