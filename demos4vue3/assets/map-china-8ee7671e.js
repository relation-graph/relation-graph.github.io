import k from"./res-map-china-93c4a777.js";import{M as I}from"./relation-graph-28379630.js";import{d as D,r as f,o as B,a as d,c as l,b as i,e as p,w as h,u as L,f as R,F as M,g as J,t as O,i as $,p as b,j as T}from"./index-f7176e57.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const A=c=>(b("data-v-d58a4f01"),c=c(),T(),c),P={style:{height:"calc(100vh - 60px)"}},V={class:"c-my-panel"},E={style:{padding:"10px"}},F={class:"c-snapshots"},j=A(()=>i("div",{class:"c-option-name"},"Saved snapshots:",-1)),z=["onClick"],G=D({__name:"map-china",setup(c){const r=f(),s=f([]),u={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border",placeOtherNodes:!1,placeSingleNode:!1,graphOffset_x:0,graphOffset_y:0,defaultNodeColor:"#f39930",defaultNodeBorderWidth:1,defaultNodeBorderColor:"#f39930",defaultNodeWidth:20,defaultNodeHeight:20,defaultLineColor:"#f39930",defaultLineWidth:2,layout:{layoutName:"fixed"}};B(async()=>{await m()});const m=async()=>{const t={rootId:"R",nodes:[{id:"R",text:"R",opacity:1,x:570,y:250},{id:"A",text:"A",opacity:1,x:0,y:0},{id:"B",text:"B",opacity:1,x:0,y:0},{id:"C",text:"C",opacity:1,x:0,y:0},{id:"D",text:"D",opacity:1,x:0,y:0},{id:"image-from",text:"",opacity:0,x:-49,y:-20},{id:"image-to",text:"",opacity:0,x:1184,y:652}],lines:[{from:"R",to:"A",animation:1,lineShape:3},{from:"R",to:"B",animation:2},{from:"R",to:"C",animation:3},{from:"R",to:"D",animation:4,lineShape:1}]},a=t.nodes.find(e=>e.id===t.rootId),o=500;t.nodes.forEach(e=>{e.id!==a.id&&(e.x=a.x+Math.floor(Math.random()*o)-o/2,e.y=a.y+Math.floor(Math.random()*o)-o/2)});const n=r.value.getInstance();await n.setJsonData(t),await n.moveToCenter()},_=(t,a)=>{console.log("onNodeClick:",t.text,`x: ${t.x}, y: ${t.y}`)},g=(t,a,o)=>{console.log("onLineClick:",t)},y=()=>{const t=r.value.getInstance(),a=t.getNodes().map(e=>({id:e.id,text:e.text,x:e.x,y:e.y,opacity:e.opacity})),o=t.getLinks().reduce((e,v)=>{const{from:C,to:N,lineShape:S,animation:w}=v.relations[0];return e.concat([{from:C,to:N,lineShape:S,animation:w}])},[]),n={rootId:t.graphData.rootNode.id,nodes:a,lines:o};if(s.value.length>0&&JSON.stringify(n)===JSON.stringify(s.value[s.value.length-1].data)){alert("The data has not changed");return}s.value.push({name:new Date().toLocaleTimeString(),data:n})},x=t=>{r.value.getInstance().setJsonData(t.data)};return(t,a)=>{const o=$("el-button");return d(),l("div",null,[i("div",P,[p(L(I),{ref_key:"graphRef",ref:r,options:u,"on-node-click":_,"on-line-click":g},{"canvas-plug":h(()=>[p(k)]),"graph-plug":h(()=>[i("div",V,[i("div",E,[p(o,{round:"",type:"primary",onClick:y},{default:h(()=>[R("Save the content of the current graph")]),_:1})]),i("div",F,[j,(d(!0),l(M,null,J(s.value,n=>(d(),l("div",{key:n.name,class:"c-snapshot-item",onClick:e=>x(n)},O(n.name),9,z))),128))])])]),_:1},512)])])}}});const U=W(G,[["__scopeId","data-v-d58a4f01"]]);export{U as default};
