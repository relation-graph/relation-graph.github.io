import{M as x}from"./relation-graph-9d2491ce.js";import{_ as g}from"./Demo4AdvLineSlotComp.vue_vue_type_style_index_0_lang-b492f994.js";import{d as w,r as a,o as y,a as l,c as b,b as i,e as N,w as c,u as r,h as S,q as k,p as I,j as C}from"./index-f19b6715.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const M=o=>(I("data-v-1bb4cbde"),o=o(),C(),o),L=M(()=>i("div",{class:"c-my-panel"},[i("div",null," The lines and flowers on the lines in the following graph are implemented through the line slot. Note: node slot/canvas slot/graph slot can be written in the usual way, but the line slot must be written in svg. ")],-1)),B=w({__name:"adv-line-slot",setup(o){const s=a(null);a(!1);const d=a(!1);a({x:0,y:0});const p={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultJunctionPoint:"border"},u=async()=>{const e={rootId:"2",nodes:[{id:"1",text:"Node-1",data:{myicon:"el-icon-star-on"}},{id:"2",text:"Node-2",data:{myicon:"el-icon-setting"}},{id:"4",text:"Node-4",data:{myicon:"el-icon-star-on"}},{id:"6",text:"Node-6",data:{myicon:"el-icon-setting"}},{id:"7",text:"Node-7",data:{myicon:"el-icon-setting"}},{id:"8",text:"Node-8",data:{myicon:"el-icon-star-on"}},{id:"9",text:"Node-9",data:{myicon:"el-icon-headset"}}],lines:[{from:"1",to:"2",text:"Investment"},{from:"4",to:"2",text:"Executive"},{from:"6",to:"2",text:"Executive"},{from:"7",to:"2",text:"Executive"},{from:"8",to:"2",text:"Executive"},{from:"9",to:"2",text:"Executive"}]},t=s.value.getInstance();await t.setJsonData(e),await t.moveToCenter(),await t.zoomToFit()},m=(e,t,n)=>{console.log("onLineClick:",e)},h=e=>{console.log("over:",e)},_=e=>{console.log("out:",e)};return y(()=>{u()}),(e,t)=>(l(),b("div",null,[i("div",{ref:"myPage",style:{height:"calc(100vh - 60px)"},onClick:t[0]||(t[0]=n=>d.value=!1)},[N(r(x),{ref_key:"graphRef",ref:s,options:p,onLineClick:m},{line:c(({line:n,link:f,relationGraph:v})=>[n.isHide===!1?(l(),S(r(g),{key:0,line:n,link:f,"relation-graph":v,onMouseover:h,onMouseout:_},null,8,["line","link","relation-graph"])):k("",!0)]),"graph-plug":c(()=>[L]),_:1},512)],512)]))}});const T=E(B,[["__scopeId","data-v-1bb4cbde"]]);export{T as default};
