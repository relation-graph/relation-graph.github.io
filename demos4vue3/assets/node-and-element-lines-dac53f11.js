import{M as m}from"./relation-graph-588d2e75.js";import{d as g,r as h,o as u,a as l,c as d,b as t,e as w,w as c,u as b,t as i,p as v,j as y}from"./index-e4516832.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const s=a=>(v("data-v-fb5fa3ff"),a=a(),y(),a),S={style:{height:"calc(100vh - 60px)"}},L=s(()=>t("div",{class:"my-diy-canvas-element",style:{left:"400px",top:"0px",width:"240px",height:"140px","background-color":"#1da9f5"}},[t("div",{id:"el-1",style:{width:"150px","background-color":"#8080ff",padding:"5px","border-radius":"5px",margin:"auto"}}," [Behind]Element 1 ")],-1)),C=s(()=>t("div",{id:"el-4",class:"my-diy-canvas-element",style:{left:"-200px",top:"-150px",width:"170px",height:"110px","background-color":"#650baf"}},"[Behind]Element 4",-1)),T=s(()=>t("div",{id:"el-2",class:"my-diy-canvas-element rel-node-checked",style:{left:"200px",top:"150px",width:"150px",height:"50px","background-color":"#2cbb03"}},"[Above]Element 2",-1)),E=s(()=>t("div",{id:"el-3",class:"my-diy-canvas-element",style:{left:"0px",top:"0px",width:"160px",height:"100px","background-color":"#e85f84"}},"[Above]Element 3",-1)),A={key:0},B={id:"e-1",style:{width:"50px",margin:"auto","line-height":"20px","background-color":"#ffffff",color:"#1da9f5"}},I={key:1,style:{"background-color":"#1da9f5"}},D={id:"d-1",style:{width:"50px",margin:"auto","line-height":"20px","background-color":"#ffffff",color:"#1da9f5"}},N={key:2,class:"rg-center-items",style:{height:"100%"}},j={style:{width:"100%"}},J=g({__name:"node-and-element-lines",setup(a){const r=h();h(!1);const f={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border"};u(()=>{p()});const p=async()=>{var e;const n={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"d",text:"D",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"Line Text",color:"#43a2f1"},{from:"b",to:"b",text:"Line Text"},{from:"d",to:"d",text:"Line Text"},{from:"e",to:"e",text:"Line Text"},{from:"c",to:"c",text:"xxx",color:"rgba(159,23,227,0.65)"},{from:"b",to:"c",text:"Line Text"},{from:"a",to:"c",text:"Line Text",forDisplayOnly:!0,lineShape:3},{from:"c",to:"d",lineShape:1,text:"Line Text"},{from:"d",to:"c",lineShape:1,text:"",color:"#67C23A"},{from:"d",to:"c",lineShape:1,text:"",color:"rgba(159,23,227,0.65)"},{from:"d",to:"a",text:"",color:"#03469a"},{from:"e",to:"a",text:"",color:"#67C23A"}],elementLines:[{from:"e-1",to:"d-1",text:"Line Text",lineShape:3,color:"rgba(159,23,227,0.65)",lineWidth:4,showEndArrow:!1},{from:"el-1",to:"el-2",text:"Line Text",lineShape:5,color:"rgba(159,23,227,0.65)",lineWidth:4,showEndArrow:!1},{from:"el-1",to:"d-1",text:"Line Text",lineShape:2,color:"rgba(159,23,227,0.65)",lineWidth:4,showEndArrow:!1}]},o=(e=r.value)==null?void 0:e.getInstance();o&&(await o.setJsonData(n),await o.moveToCenter(),await o.zoomToFit())},x=(n,o)=>{console.log("onNodeClick:",n)},_=(n,o,e)=>{console.log("onLineClick:",n)};return(n,o)=>(l(),d("div",null,[t("div",S,[w(b(m),{ref_key:"graphRef",ref:r,options:f,"on-node-click":x,"on-line-click":_},{"canvas-plug":c(()=>[L,C]),node:c(({node:e})=>[e.id==="e"?(l(),d("div",A,[t("div",null,i(e.text),1),t("div",B,i(e.text)+"-1",1)])):e.id==="d"?(l(),d("div",I,[t("div",null,i(e.text),1),t("div",D,i(e.text)+"-1",1)])):(l(),d("div",N,[t("div",j,i(e.text),1)]))]),default:c(()=>[T,E]),_:1},512)])]))}});const P=k(J,[["__scopeId","data-v-fb5fa3ff"]]);export{P as default};
