import{M as c}from"./relation-graph-9cfe1c0d.js";import{d as r,r as s,o as d,a as p,c as h,b as f,e as m,i as u}from"./index-5e8eec4e.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const k=r({name:"Demo",components:{RelationGraph:c},setup(){const o=s(null),a={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border"};d(()=>{n()});const n=()=>{const t={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"Line Text",color:"#43a2f1"},{from:"a",to:"c",text:"Line Text"},{from:"a",to:"e",text:"Line Text"},{from:"b",to:"e",text:"",color:"#67C23A"}]};console.log(o.value);const e=o.value.getInstance();e.setJsonData(t).then(()=>{e.moveToCenter(),e.zoomToFit()})};return{graphRef:o,graphOptions:a,showGraph:n,onNodeClick:(t,e)=>{console.log("onNodeClick:",t)},onLineClick:(t,e,w)=>{console.log("onLineClick:",t)}}}}),g={style:{height:"calc(100vh - 60px)"}};function _(o,a,n,i,l,t){const e=u("RelationGraph");return p(),h("div",null,[f("div",g,[m(e,{ref:"graphRef",options:o.graphOptions,onNodeClick:o.onNodeClick,onLineClick:o.onLineClick},null,8,["options","onNodeClick","onLineClick"])])])}const b=C(k,[["render",_]]);export{b as default};
