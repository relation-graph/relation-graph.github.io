import{M as E}from"./relation-graph-de73bd62.js";import{d as D,r as h,o as O,D as F,a as x,c as N,b as i,e as n,w as r,u as U,t as u,f as c,q as k,i as y,p as z,j as B}from"./index-e1681cb0.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const j=f=>(z("data-v-c0897972"),f=f(),B(),f),P={style:{height:"calc(100vh - 60px)"}},q={class:"c-my-panel"},J={class:"c-option-name"},$={class:"c-option-name"},G={class:"c-option-name"},H=j(()=>i("div",{class:"c-option-name"},"Observation Object:",-1)),K={style:{padding:"5px"}},Q={key:0,style:{"padding-right":"10px"}},X={class:"c-option-name"},Y={key:1,style:{"padding-right":"10px"}},Z={class:"c-option-name"},ee={style:{padding:"5px"}},oe={style:{padding:"10px"}},te=D({__name:"layout-force-options-pro",setup(f){const d=h(),g=h("node"),p=h([1,30]),_=h([1,30]),a=h({debug:!1,defaultNodeBorderWidth:0,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineShape:1,layout:{layoutName:"force",maxLayoutTimes:100,force_node_repulsion:.5,force_line_elastic:.5},defaultJunctionPoint:"border"});O(()=>{V()}),F(()=>{d.value.getInstance().stopAutoLayout()});const V=async()=>{const e={rootId:"root",nodes:[{id:"root",text:"Root",force_weight:600}],lines:[]};for(let t=0;t<30;t++){const l={id:"n"+t,text:""},m={from:e.rootId,to:l.id,text:""};e.nodes.push(l),e.lines.push(m)}await d.value.getInstance().setJsonData(e),w()},C=(e,o)=>{console.log("onNodeClick:",e)},T=(e,o,t)=>{console.log("onLineClick:",e)},w=()=>{L();const e=d.value.getInstance();e.getNodes().forEach(o=>{if(o===e.graphData.rootNode)return;const t=p.value[0]+Math.random()*p.value[1];o.width=10+10*Math.sqrt(t),o.height=10+10*Math.sqrt(t),o.force_weight=t,o.text=t.toFixed(1)})},b=()=>{L(),d.value.getInstance().getLinks().forEach(o=>{const t=o.relations[0],l=_.value[0]+Math.random()*_.value[1];t.force_elastic=l,t.text=l.toFixed(1)})},L=()=>{const e=d.value.getInstance();e.getNodes().forEach(o=>{o!==e.graphData.rootNode&&(o.width=30,o.height=30,o.force_weight=void 0,o.text="")}),e.getLinks().forEach(o=>{const t=o.relations[0];t.force_elastic=void 0,t.text=""})},R=async()=>{const e=d.value.getInstance();await e.stopAutoLayout(),e.layouter.maxLayoutTimes=a.value.layout.maxLayoutTimes,e.layouter.force_node_repulsion=a.value.layout.force_node_repulsion,e.layouter.force_line_elastic=a.value.layout.force_line_elastic,setTimeout(async()=>{await e.startAutoLayout()},500)},M=async()=>{const e=d.value.getInstance();await e.stopAutoLayout(),e.layouter.maxLayoutTimes=a.value.layout.maxLayoutTimes,e.layouter.force_node_repulsion=a.value.layout.force_node_repulsion,e.layouter.force_line_elastic=a.value.layout.force_line_elastic,e.refresh()},S=()=>{const e=d.value.getInstance(),o=e.options.checkedNodeId||e.graphData.rootNode.id,t=e.generateNewNodeId(),l=[{id:t+"-1",text:"New node"},{id:t+"-2",text:"New node"}];l.forEach(m=>{m.x=Math.floor(Math.random()*40),m.y=Math.floor(Math.random()*40)}),e.addNodes(l),e.addLines([{from:o,to:t+"-1",text:"New"},{from:o,to:t+"-2",text:"New"}]),e.layouter.allNodes=e.graphData.nodes,e.layouter.allLinks=e.graphData.links,e.layouter.updateVisibleNodes(),setTimeout(async()=>{await e.startAutoLayout()},300)};return(e,o)=>{const t=y("el-slider"),l=y("el-radio-button"),m=y("el-radio-group"),v=y("el-link"),A=y("el-divider"),I=y("el-button");return x(),N("div",null,[i("div",P,[n(U(E),{ref_key:"graphRef",ref:d,options:a.value,"on-node-click":C,"on-line-click":T},{"graph-plug":r(()=>[i("div",q,[i("div",J,"Layout Times: "+u(a.value.layout.maxLayoutTimes),1),n(t,{modelValue:a.value.layout.maxLayoutTimes,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value.layout.maxLayoutTimes=s),min:10,max:1e3,step:100,"show-tooltip":!0},null,8,["modelValue"]),i("div",$,"Node Repulsion Coefficient: "+u(a.value.layout.force_node_repulsion)+"     （Setting it too large will cause shaking）",1),n(t,{modelValue:a.value.layout.force_node_repulsion,"onUpdate:modelValue":o[1]||(o[1]=s=>a.value.layout.force_node_repulsion=s),min:.01,step:.05,max:4},null,8,["modelValue","min","step"]),i("div",G,"Line Elastic Coefficient: "+u(a.value.layout.force_line_elastic)+"     （Setting it too large will cause shaking）",1),n(t,{modelValue:a.value.layout.force_line_elastic,"onUpdate:modelValue":o[2]||(o[2]=s=>a.value.layout.force_line_elastic=s),min:.01,step:.05,max:4},null,8,["modelValue","min","step"]),H,n(m,{modelValue:g.value,"onUpdate:modelValue":o[3]||(o[3]=s=>g.value=s),size:"small"},{default:r(()=>[n(l,{label:"node"},{default:r(()=>[c("Node")]),_:1}),n(l,{label:"line"},{default:r(()=>[c("Line")]),_:1})]),_:1},8,["modelValue"]),i("div",K,[g.value==="node"?(x(),N("div",Q,[i("div",X,"Random Range: ("+u(p.value[0])+", "+u(p.value[1])+")",1),n(t,{modelValue:p.value,"onUpdate:modelValue":o[4]||(o[4]=s=>p.value=s),range:"",min:.2,max:30},null,8,["modelValue","min"]),n(v,{size:"small",plain:"",type:"primary",onClick:w},{default:r(()=>[c("Randomly Reset Node Weight")]),_:1})])):k("",!0),g.value==="line"?(x(),N("div",Y,[i("div",Z,"Random Range: ("+u(_.value[0])+", "+u(_.value[1])+")",1),n(t,{modelValue:_.value,"onUpdate:modelValue":o[5]||(o[5]=s=>_.value=s),range:"",min:.2,max:30},null,8,["modelValue","min"]),n(v,{size:"small",type:"primary",onClick:b},{default:r(()=>[c("Randomly Reset Line Elastic")]),_:1})])):k("",!0)]),n(A),i("div",ee,[n(I,{size:"small",round:"",type:"primary",onClick:R},{default:r(()=>[c("Apply and Continue Layout")]),_:1}),n(I,{size:"small",round:"",type:"primary",onClick:M},{default:r(()=>[c("Apply and Refresh")]),_:1})]),i("div",oe,[n(v,{size:"small",type:"primary",onClick:S},{default:r(()=>[c("Add Two Child Nodes to Selected Nodes")]),_:1})])])]),_:1},8,["options"])])])}}});const se=W(te,[["__scopeId","data-v-c0897972"]]);export{se as default};
