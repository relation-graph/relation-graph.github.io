import{M as _}from"./relation-graph-9cfe1c0d.js";import{d as p,r as v,o as f,a as n,c as o,b as t,e as g,w as s,u as m,t as d,p as y,j as S}from"./index-5e8eec4e.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const i=r=>(y("data-v-aea55d0e"),r=r(),S(),r),w={style:{height:"calc(100vh - 60px)"}},C={key:0,style:{width:"300px","background-color":"#bbbbbb"}},W={class:"c-table-title"},L=i(()=>t("table",{class:"c-data-table"},[t("tr",null,[t("th",null,"Column 1"),t("th",null,"Column 2")]),t("tr",null,[t("td",null,"xxxx"),t("td",null,[t("div",{id:"a-r2-c2"},"a-r2-c2")])]),t("tr",null,[t("td",null,"xxxx"),t("td",null,[t("div",{id:"a-r3-c2"},"a-r3-c2")])]),t("tr",null,[t("td",null,"xxxx"),t("td",null,[t("div",{id:"a-r4-c2"},"a-r4-c2")])])],-1)),I={key:1,style:{"background-color":"#bbbbbb",width:"400px"}},N={class:"c-table-title"},B=i(()=>t("table",{class:"c-data-table"},[t("tr",null,[t("th",null,[t("div",{id:"b-r1-c1"},"b-r1-c1")]),t("th",null,[t("div",{id:"b-r1-c2"},"b-r1-c2")]),t("th",null,[t("div",{id:"b-r1-c3"},"b-r1-c3")])]),t("tr",null,[t("td",null,[t("div",{id:"b-r2-c1"},"b-r2-c1")]),t("td",null,"xxxx"),t("td",null,"xxxx")]),t("tr",null,[t("td",null,[t("div",{id:"b-r3-c1"},"b-r3-c1")]),t("td",null,[t("div",{id:"b-r3-c2"},"b-r3-c2")]),t("td",null,"xxxx")]),t("tr",null,[t("td",null,"xxxx"),t("td",null,"xxxx"),t("td",null,[t("div",{id:"b-r4-c3"},"b-r4-c3")])])],-1)),M={key:2,style:{"background-color":"#bbbbbb",width:"400px"}},O={class:"c-table-title"},D=i(()=>t("table",{class:"c-data-table"},[t("tr",null,[t("th",null,[t("div",{id:"c-r1-c1"},"c-r1-c1")]),t("th",null,[t("div",{id:"c-r1-c2"},"c-r1-c2")])]),t("tr",null,[t("th",null,[t("div",{id:"c-r2-c1"},"c-r2-c1")]),t("td",null,"xxxx")]),t("tr",null,[t("td",null,"xxxx"),t("td",null,"xxxx")]),t("tr",null,[t("td",null,[t("div",{id:"c-r4-c1"},"c-r4-c1")]),t("td",null,[t("div",{id:"c-r4-c2"},"c-r4-c2")])])],-1)),j={key:3,style:{"background-color":"#bbbbbb",width:"300px"}},J={class:"c-table-title"},V=i(()=>t("table",{class:"c-data-table"},[t("tr",null,[t("th",null,[t("div",{id:"d-r1-c1"},"d-r1-c1")]),t("th",null,"Column 2")]),t("tr",null,[t("td",null,[t("div",{id:"d-r2-c1"},"d-r2-c1")]),t("td",null,"xxxx")]),t("tr",null,[t("td",null,"xxxx"),t("td",null,"xxxx")]),t("tr",null,[t("td",null,"xxxx"),t("td",null,[t("div",{id:"d-r4-c2"},"d-r4-c2")])])],-1)),P={key:4,class:"rg-center-items",style:{height:"100%"}},R={style:{width:"100%"}},T=p({__name:"node-content-lines",setup(r){const a=v(),x={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border",placeOtherNodes:!1,placeSingleNode:!1,graphOffset_x:-200,graphOffset_y:100,defaultLineMarker:{markerWidth:20,markerHeight:20,refX:3,refY:3,data:"M 0 0, V 6, L 4 3, Z"},layout:{layoutName:"fixed"}},u=async()=>{const e={rootId:"a",nodes:[{id:"a",text:"A区内配矿",nodeShape:1,x:-500,y:-200},{id:"b",text:"B区内洗选贸易企业",nodeShape:1,x:0,y:-400},{id:"c",text:"C区内电场焦化企业",nodeShape:1,x:500,y:-200},{id:"d",text:"D区外企业",nodeShape:1,x:0,y:0}],lines:[],elementLines:[{from:"a-r2-c2",to:"b-r1-c1",text:"",lineShape:6,color:"rgba(29,169,245,0.76)",lineWidth:3},{from:"a-r2-c2",to:"b-r2-c1",text:"",lineShape:6,color:"rgba(29,169,245,0.76)",lineWidth:3},{from:"a-r3-c2",to:"b-r3-c1",text:"",lineShape:6,color:"rgba(159,23,227,0.65)",lineWidth:3},{from:"a-r3-c2",to:"d-r2-c1",text:"",lineShape:6,color:"rgba(159,23,227,0.65)",lineWidth:3},{from:"a-r3-c2",to:"c-r4-c1",text:"",lineShape:5,color:"rgba(159,23,227,0.65)",lineWidth:3},{from:"b-r1-c3",to:"c-r1-c1",text:"",lineShape:6,color:"rgba(159,23,227,0.65)",lineWidth:3},{from:"d-r4-c2",to:"c-r4-c2",text:"",lineShape:6,color:"rgba(159,23,227,0.65)",lineWidth:3},{from:"d-r2-c1",to:"c-r4-c2",text:"",lineShape:6,color:"rgba(159,23,227,0.65)",lineWidth:3},{from:"d-r2-c1",to:"b-r4-c3",text:"",lineShape:6,color:"rgba(159,23,227,0.65)",lineWidth:3},{from:"b-r3-c2",to:"c-r2-c1",text:"",lineShape:6,color:"rgba(159,23,227,0.65)",lineWidth:3}]},c=a.value.getInstance();await c.setJsonData(e),await c.moveToCenter(),await c.zoomToFit()},h=(e,c)=>{console.log("onNodeClick:",e)},b=(e,c,l)=>{console.log("onLineClick:",e)};return f(()=>{u()}),(e,c)=>(n(),o("div",null,[t("div",w,[g(m(_),{ref_key:"graphRef",ref:a,options:x,"on-node-click":h,"on-line-click":b},{"canvas-plug":s(()=>[]),node:s(({node:l})=>[l.id==="a"?(n(),o("div",C,[t("div",W,d(l.text),1),L])):l.id==="b"?(n(),o("div",I,[t("div",N,d(l.text),1),B])):l.id==="c"?(n(),o("div",M,[t("div",O,d(l.text),1),D])):l.id==="d"?(n(),o("div",j,[t("div",J,d(l.text),1),V])):(n(),o("div",P,[t("div",R,d(l.text),1)]))]),_:1},512)])]))}});const E=k(T,[["__scopeId","data-v-aea55d0e"]]);export{E as default};
