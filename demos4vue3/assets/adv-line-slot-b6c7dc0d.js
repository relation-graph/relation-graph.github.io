import{M as g}from"./relation-graph-588d2e75.js";import{_ as x}from"./Demo4AdvLineSlotComp.vue_vue_type_style_index_0_lang-a7223dd2.js";import{d as w,r as a,o as y,a as l,c as N,b as i,e as S,w as c,u as r,h as k,q as I,p as C,j as b}from"./index-e4516832.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const M=o=>(C("data-v-e239c30e"),o=o(),b(),o),L=M(()=>i("div",{class:"c-my-panel"},[i("div",null," The lines and flowers on the lines in the following graph are implemented through the line slot. Note: node slot/canvas slot/graph slot can be written in the usual way, but the line slot must be written in svg. ")],-1)),B=w({__name:"adv-line-slot",setup(o){const s=a(null);a(!1);const d=a(!1);a({x:0,y:0});const u={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultJunctionPoint:"border"},p=async()=>{const e={rootId:"2",nodes:[{id:"1",text:"Node-1",data:{myicon:"el-icon-star-on"}},{id:"2",text:"Node-2",data:{myicon:"el-icon-setting"}},{id:"4",text:"Node-4",data:{myicon:"el-icon-star-on"}},{id:"6",text:"Node-6",data:{myicon:"el-icon-setting"}},{id:"7",text:"Node-7",data:{myicon:"el-icon-setting"}},{id:"8",text:"Node-8",data:{myicon:"el-icon-star-on"}},{id:"9",text:"Node-9",data:{myicon:"el-icon-headset"}}],lines:[{from:"1",to:"2",text:"Investment"},{from:"4",to:"2",text:"Executive"},{from:"6",to:"2",text:"Executive"},{from:"7",to:"2",text:"Executive"},{from:"8",to:"2",text:"Executive"},{from:"9",to:"2",text:"Executive"}]},t=s.value.getInstance();await t.setJsonData(e),await t.moveToCenter(),await t.zoomToFit()},m=(e,t,n)=>{console.log("onLineClick:",e)},h=e=>{console.log("over:",e)},_=e=>{console.log("out:",e)};return y(()=>{p()}),(e,t)=>(l(),N("div",null,[i("div",{ref:"myPage",style:{height:"calc(100vh)"},onClick:t[0]||(t[0]=n=>d.value=!1)},[S(r(g),{ref_key:"graphRef",ref:s,options:u,onLineClick:m},{line:c(({line:n,link:f,relationGraph:v})=>[n.isHide===!1?(l(),k(r(x),{key:0,line:n,link:f,"relation-graph":v,onMouseover:h,onMouseout:_},null,8,["line","link","relation-graph"])):I("",!0)]),"graph-plug":c(()=>[L]),_:1},512)],512)]))}});const T=E(B,[["__scopeId","data-v-e239c30e"]]);export{T as default};
