import{M as b}from"./relation-graph-588d2e75.js";import{d as u,r as i,o as p,a as r,c as n,l as x,e as g,u as v,m as _}from"./index-e4516832.js";const L={style:{"margin-top":"50px",width:"calc(100% - 10px)",height:"calc(100vh - 140px)"}},I=u({__name:"adv-expand",setup(y){const o=i(),d=i(!0),l={layouts:[{label:"Center",layoutName:"tree",layoutClassName:"seeks-layout-center",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1,from:"left",max_per_width:"300",min_per_height:"40"}],defaultLineMarker:{markerWidth:12,markerHeight:12,refX:6,refY:6,data:"M2,2 L10,6 L2,10 L6,6 L2,2"},moveToCenterWhenRefresh:!1,defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeWidth:100,defaultLineShape:4,defaultJunctionPoint:"lr",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"};p(()=>{s()});const s=async()=>{const e={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b-固定数据展开/关闭"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c-动态数据展开/关闭"},{id:"c1",text:"c1-动态获取子节点",expandHolderPosition:"right",expanded:!1,data:{isNeedLoadDataFromRemoteServer:!0,childrenLoaded:!1}},{id:"c2",text:"c2-动态获取子节点",expandHolderPosition:"right",expanded:!1,data:{isNeedLoadDataFromRemoteServer:!0,childrenLoaded:!1}},{id:"c3",text:"c3-动态获取子节点",expandHolderPosition:"right",expanded:!1,data:{isNeedLoadDataFromRemoteServer:!0,childrenLoaded:!1}}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"}]};console.log(JSON.stringify(e)),d.value=!1;const t=o.value.getInstance();await t.setJsonData(e),await t.moveToCenter(),await t.zoomToFit()},c=async(e,t)=>{await o.value.getInstance().doLayout()},f=async(e,t)=>{console.log("onNodeExpand:",e);const a=o.value.getInstance();if(!e.data.isNeedLoadDataFromRemoteServer){console.log("These child nodes have already been loaded"),await a.doLayout();return}if(e.data.childrenLoaded){console.log("These child nodes have already been loaded"),await a.doLayout();return}d.value=!0,e.data.childrenLoaded=!0,h(e,m=>{d.value=!1,o.value.getInstance().appendJsonData(m)})},h=(e,t)=>{setTimeout(function(){const a={nodes:[{id:e.id+"-child-1",text:e.id+"-的动态子节点1",width:150},{id:e.id+"-child-2",text:e.id+"-的动态子节点2",width:150},{id:e.id+"-child-3",text:e.id+"-的动态子节点3",width:150}],lines:[{from:e.id,to:e.id+"-child-1",text:"Dynamic child node"},{from:e.id,to:e.id+"-child-2",text:"Dynamic child node"},{from:e.id,to:e.id+"-child-3",text:"Dynamic child node"}]};t(a)},1e3)};return(e,t)=>{const a=_("loading");return r(),n("div",null,[x((r(),n("div",L,[g(v(b),{ref_key:"graphRef",ref:o,options:l,onNodeExpand:f,onNodeCollapse:c},null,512)])),[[a,d.value]])])}}});export{I as default};
