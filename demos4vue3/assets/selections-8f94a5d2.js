import{k as B}from"./relation-graph-4b768e87.js";import{s as E}from"./CircumIcons-dd916674.js";import{d as O,r,o as L,a as R,c as J,b as n,e as x,w as m,u as N,k as M,t as C,p as W,j}from"./index-ee818b67.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const f=d=>(W("data-v-28033939"),d=d(),j(),d),H={style:{height:"calc(100vh - 60px)"}},P={class:"c-my-node-icon"},G={class:"c-my-panel"},T=f(()=>n("div",{class:"c-option-name"},"Operation Instructions:",-1)),X=f(()=>n("div",{class:"c-option-name"},"Method 1: Hold Shift to select",-1)),Y=f(()=>n("div",{class:"c-option-name"},"Method 2: Disable drag canvas to support selection",-1)),$={class:"c-option-name"},q={class:"c-option-name"},A=O({__name:"selections",setup(d){const s=r(!1),l=r([]),I={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border",placeOtherNodes:!1,placeSingleNode:!1,defaultNodeColor:"#f39930",defaultNodeBorderWidth:1,defaultNodeBorderColor:"#f39930",defaultLineColor:"#f39930",defaultLineWidth:2,defaultLineTextOffset_y:-2,disableDragCanvas:!1,layout:{layoutName:"center"}},a=r();L(()=>{b()});const b=async()=>{const o={rootId:"2",nodes:[{id:"1",text:"Node-1",data:{myicon:"el-icon-star-on"}},{id:"2",text:"Node-2",data:{myicon:"el-icon-setting"}},{id:"3",text:"Node-3",data:{myicon:"el-icon-setting"}},{id:"4",text:"Node-4",data:{myicon:"el-icon-star-on"}},{id:"6",text:"Node-6",data:{myicon:"el-icon-setting"}},{id:"7",text:"Node-7",data:{myicon:"el-icon-setting"}},{id:"8",text:"Node-8",data:{myicon:"el-icon-star-on"}},{id:"9",text:"Node-9",data:{myicon:"el-icon-headset"}},{id:"71",text:"Node-71",data:{myicon:"el-icon-headset"}},{id:"72",text:"Node-72",data:{myicon:"el-icon-s-tools"}},{id:"73",text:"Node-73",data:{myicon:"el-icon-star-on"}},{id:"81",text:"Node-81",data:{myicon:"el-icon-s-promotion"}},{id:"82",text:"Node-82",data:{myicon:"el-icon-s-promotion"}},{id:"83",text:"Node-83",data:{myicon:"el-icon-star-on"}},{id:"84",text:"Node-84",data:{myicon:"el-icon-s-promotion"}},{id:"85",text:"Node-85",data:{myicon:"el-icon-sunny"}},{id:"91",text:"Node-91",data:{myicon:"el-icon-sunny"}},{id:"92",text:"Node-82",data:{myicon:"el-icon-sunny"}},{id:"51",text:"Node-51",data:{myicon:"el-icon-sunny"}},{id:"52",text:"Node-52",data:{myicon:"el-icon-sunny"}},{id:"53",text:"Node-53",data:{myicon:"el-icon-sunny"}},{id:"54",text:"Node-54",data:{myicon:"el-icon-sunny"}},{id:"55",text:"Node-55",data:{myicon:"el-icon-sunny"}},{id:"5",text:"Node-5",data:{myicon:"el-icon-sunny"}}],lines:[{from:"7",to:"71"},{from:"7",to:"72"},{from:"7",to:"73"},{from:"8",to:"81"},{from:"8",to:"82"},{from:"8",to:"83"},{from:"8",to:"84"},{from:"8",to:"85"},{from:"9",to:"91"},{from:"9",to:"92"},{from:"5",to:"51"},{from:"5",to:"52"},{from:"5",to:"53"},{from:"5",to:"54"},{from:"5",to:"55"},{from:"1",to:"2"},{from:"3",to:"1"},{from:"4",to:"2"},{from:"6",to:"2"},{from:"7",to:"2"},{from:"8",to:"2"},{from:"9",to:"2"},{from:"1",to:"5"}]},t=a.value.getInstance();await t.setJsonData(o),await t.playShowEffect()},S=()=>{var t;s.value=!s.value;const o=(t=a.value)==null?void 0:t.getInstance();o&&(o.options.disableDragCanvas=s.value)},D=(o,t)=>{var p;console.log("onCanvasSelectionEnd:",o);const e=(p=a.value)==null?void 0:p.getInstance();if(e){const c=e.getBoundingClientRect(),y=e.getCanvasCoordinateByClientCoordinate({x:o.x+c.x,y:o.y+c.y}),h=e.getCanvasCoordinateByClientCoordinate({x:o.x+o.width+c.x,y:o.y+o.height+c.y});e.getNodes().forEach(i=>{let _=!1;const g=i.x+i.el.offsetWidth/2,v=i.y+i.el.offsetHeight/2;g>y.x&&v>y.y&&g<h.x&&v<h.y&&(_=!0),i.selected=_}),u()}},k=()=>{w()},w=()=>{var t;const o=(t=a.value)==null?void 0:t.getInstance();o&&(o.getNodes().forEach(e=>{e.selected=!1}),u())},u=()=>{var t;l.value=[];const o=(t=a.value)==null?void 0:t.getInstance();o&&o.getNodes().forEach(e=>{e.selected&&l.value.push(e)})};return(o,t)=>(R(),J("div",null,[n("div",H,[x(N(B),{ref_key:"graphRef",ref:a,options:I,onCanvasSelectionEnd:D,onCanvasClick:k},{node:m(({node:e})=>[n("div",P,[x(N(E),{size:"50px",name:"cloud_on"})])]),"graph-plug":m(()=>[n("div",G,[T,X,Y,n("div",$,[n("button",{class:M(["c-my-button",{"c-my-button-checked":s.value}]),onClick:S},C(s.value?"Disable Drag Canvas":"Enable Drag Canvas"),3)]),n("div",q,"Number of selected nodes: "+C(l.value.length),1)])]),"canvas-plug":m(()=>[]),_:1},512)])]))}});const Z=z(A,[["__scopeId","data-v-28033939"]]);export{Z as default};
