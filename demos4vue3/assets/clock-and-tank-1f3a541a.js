import{M as x}from"./relation-graph-9cfe1c0d.js";import{d as y,r as u,o as m,G as b,a,c as i,b as h,e as F,w as v,u as N,n as l,t as c}from"./index-5e8eec4e.js";const k={style:{height:"calc(100vh - 60px)"}},S={key:2,style:{lineHeight:"40px",width:"100%",height:"100%",border:"#999999 solid 1px",color:"#000000",borderRadius:"50%",boxSizing:"border-box",textAlign:"center"}},z=y({__name:"clock-and-tank",setup(_){const d=u(),s=u(null);let r=1;const g={lineUseTextPath:!0,defaultLineShape:1,placeSingleNode:!1,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,layouts:[{layoutName:"center",maxLayoutTimes:3e3}],allowShowMiniToolBar:!0,defaultNodeWidth:40,defaultNodeHeight:40,defaultNodeBorderWidth:0,defaultNodeColor:"transparent",backgroundColor:"transparent",defaultExpandHolderPosition:"right",defaultLineColor:"rgba(227,226,226,0.3)"},p=()=>{r>60&&(r=1);const e=d.value.getInstance();r===15&&e.startAutoLayout(),r===18&&e.zoomToFit();const o=e.graphData.rootNode;r<=20&&o&&(o.data.percent=r/15),r===60&&(o&&(o.data.percent=0),e.stopAutoLayout(),e.doLayout(),e.setZoom(100),e.zoomToFit());const t=e.getNodeById(r.toString()),n=e.getNodeById("current");!t||!n||(n.x=t.x,n.y=t.y,e.emitEvent("node-dragging",{node:n,x:n.x,y:n.y}),e.options.checkedNodeId="current",e.options.checkedLineId=e.getLinks().find(f=>f.toNode.id===t.id).relations[0].id,r++)};return m(()=>{const e={rootId:"root",nodes:[{id:"root",text:"",width:100,height:100,data:{percent:0}}],lines:[]};for(let o=1;o<61;o++)e.nodes.push({id:o.toString(),text:o.toString()}),e.lines.push({from:"root",to:o.toString(),text:""});e.nodes.push({id:"current",text:"",x:-20,y:-20}),d.value.setJsonData(e,!0,()=>{s.value=setInterval(()=>{p()},500)})}),b(()=>{console.log("beforeDestroy:clear clock:",s.value),clearInterval(s.value)}),(e,o)=>(a(),i("div",null,[h("div",k,[F(N(x),{ref_key:"graphRef",ref:d,options:g},{node:v(({node:t})=>[t.id==="current"?(a(),i("div",{key:0,style:l({zIndex:555,opacity:.5,lineHeight:"40px",width:"100%",height:"100%",color:"#000000",borderRadius:"50%",boxSizing:"border-box",background:"linear-gradient(to right, #00FFFF, #FF00FF)"})},c(t.text),5)):t.id==="root"?(a(),i("div",{key:1,style:l({zIndex:555,opacity:.5,lineHeight:"100px",width:"100%",height:"100%",color:"#000000",borderRadius:"50%",boxSizing:"border-box",fontSize:"32px",textAlign:"center",overflow:"hidden",border:"#000000 solid 1px"})},[h("div",{style:l({width:"100%",height:t.data.percent*100+"%",marginTop:(1-t.data.percent)*100+"%",background:"linear-gradient(to bottom, #00FFFF, #FF00FF)"})},c(t.text),5)],4)):(a(),i("div",S,c(t.text),1))]),_:1},512)])]))}});export{z as default};
