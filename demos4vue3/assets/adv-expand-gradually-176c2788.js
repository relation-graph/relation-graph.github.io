import{M as u}from"./relation-graph-de73bd62.js";import{d as m,r,o as p,a as d,c as l,l as h,e as x,u as _,m as g}from"./index-e1681cb0.js";const v={style:{"margin-top":"50px",width:"calc(100% - 10px)",height:"calc(100vh - 140px)"}},C=m({__name:"adv-expand-gradually",setup(N){const a=r(!0),t=r(),s={layouts:[{label:"Center",layoutName:"tree",layoutClassName:"seeks-layout-center",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1,from:"left",max_per_width:"300",min_per_height:"40"}],defaultLineMarker:{markerWidth:12,markerHeight:12,refX:6,refY:6,data:"M2,2 L10,6 L2,10 L6,6 L2,2"},moveToCenterWhenRefresh:!1,defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeWidth:100,defaultLineShape:4,defaultJunctionPoint:"lr",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"};p(()=>{i()});const i=async()=>{const e={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"}]};console.log(JSON.stringify(e)),a.value=!1;const o=t.value.getInstance();await o.setJsonData(e),o.getNodeById(e.rootId).lot.childs.forEach(b=>{b.expanded=!1}),await t.value.refresh()},c=(e,o)=>{console.log("onNodeCollapse:",e),t.value.getInstance().doLayout()},f=(e,o)=>{console.log("onNodeExpand:",e),t.value.getInstance().doLayout()};return(e,o)=>{const n=g("loading");return d(),l("div",null,[h((d(),l("div",v,[x(_(u),{ref_key:"graphRef",ref:t,options:s,onNodeExpand:f,onNodeCollapse:c},null,512)])),[[n,a.value]])])}}});export{C as default};
