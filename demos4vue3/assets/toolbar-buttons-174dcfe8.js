import{k as b,M as h}from"./relation-graph-4b768e87.js";import{s as a}from"./CircumIcons-dd916674.js";import{d as v,r as u,o as w,a as i,c as x,b as s,e as l,w as d,u as t,h as p}from"./index-ee818b67.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const y={style:{height:"calc(100vh - 60px)"}},k=v({__name:"toolbar-buttons",setup(B){const n=u(!1),m={useAnimationWhenRefresh:!1,allowShowFullscreenMenu:!1,allowShowZoomMenu:!0,allowAutoLayoutIfSupport:!1,allowShowRefreshButton:!1,allowShowDownloadButton:!1},c=u(null);w(()=>{_()});const _=async()=>{const e={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"关系1",color:"#43a2f1"},{from:"a",to:"c",text:"关系2"},{from:"a",to:"e",text:"关系3"},{from:"b",to:"e",text:"",color:"#67C23A"}]};c.value.setJsonData(e)},r=e=>{e==="favo"?n.value=!n.value:alert(e)};return(e,o)=>(i(),x("div",null,[s("div",y,[l(t(b),{ref_key:"graphRef",ref:c,options:m},{"tool-bar":d(()=>[l(t(h),null,{default:d(()=>[s("div",{title:"收藏",class:"c-mb-button",onClick:o[0]||(o[0]=f=>r("favo"))},[n.value?(i(),p(t(a),{key:0,class:"rg-icon",name:"star",style:{color:"#df7f03"}})):(i(),p(t(a),{key:1,class:"rg-icon",name:"star"}))]),s("div",{title:"分享",class:"c-mb-button",onClick:o[1]||(o[1]=f=>r("aaa2"))},[l(t(a),{class:"rg-icon",name:"router"})]),s("div",{title:"帮助说明",class:"c-mb-button",onClick:o[2]||(o[2]=f=>r("aaa3"))},[l(t(a),{class:"rg-icon",name:"settings"})])]),_:1})]),_:1},512)])]))}});const R=g(k,[["__scopeId","data-v-b5e40e9b"]]);export{R as default};
