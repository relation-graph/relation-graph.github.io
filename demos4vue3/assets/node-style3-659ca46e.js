import{M as p}from"./relation-graph-11dba7f5.js";import{s as m}from"./CircumIcons-009757a5.js";import{d as u,r as x,o as h,a as g,c as y,b as t,e as i,w as v,u as s,p as k,j as w,f as r,k as C,t as S}from"./index-358d0f07.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const d=a=>(k("data-v-a4a4f483"),a=a(),w(),a),B={ref:"myPage",class:"my-graph",style:{height:"calc(100vh - 60px)"}},I=d(()=>t("div",{style:{position:"absolute",left:"10px",top:"10px","background-color":"rgba(255,255,255, 0.3)","border-radius":"10px","font-size":"12px",color:"#ffffff",padding:"10px"}},[r(" Fully customize the graphical elements of the graph using div+css, Vue components, and React components through slots "),t("br"),r(" Customize the graphical elements of the graph using div+css, Vue components, and React components through slots ")],-1)),z=d(()=>t("span",{class:"icon-btn__back"},null,-1)),V={class:"icon-btn__front"},j={class:"icon-btn__label"},L=u({__name:"node-style3",setup(a){const c=x(),l={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"transparent",defaultNodeBorderWidth:0,defaultNodeBorderColor:"transpanret",defaultNodeFontColor:"#ffffff",defaultNodeShape:1,toolBarDirection:"h",toolBarPositionH:"right",toolBarPositionV:"bottom",defaultLineShape:1,disableNodeClickEffect:!0,layout:{layoutName:"force",from:"left",min_per_width:410,min_per_height:90}},f=(n,o)=>{},_=(n,o,e)=>{};h(()=>{b()});const b=async()=>{var e;const n={rootId:"a",nodes:[{id:"a",text:"a",data:{icon:"football"}},{id:"b",text:"b",data:{icon:"fries"}},{id:"b1",text:"b1",data:{icon:"delivery_truck"}},{id:"b1-1",text:"b1-1",data:{icon:"burger"}},{id:"b1-2",text:"b1-2",data:{icon:"desktop"}},{id:"b1-3",text:"b1-3",data:{icon:"alarm_on"}},{id:"b1-4",text:"b1-4",data:{icon:"alarm_on"}},{id:"b1-5",text:"b1-5",data:{icon:"alarm_on"}},{id:"b1-6",text:"b1-6",data:{icon:"alarm_on"}},{id:"b2",text:"b2",data:{icon:"alarm_on"}},{id:"b2-1",text:"b2-1",data:{icon:"alarm_on"}},{id:"b2-2",text:"b2-2",data:{icon:"alarm_on"}},{id:"c",text:"c",data:{icon:"alarm_on"}},{id:"c1",text:"c1",data:{icon:"alarm_on"}},{id:"c2",text:"c2",data:{icon:"alarm_on"}},{id:"c3",text:"c3",data:{icon:"alarm_on"}}],lines:[{from:"a",to:"b",text:""},{from:"b",to:"b1",text:""},{from:"b1",to:"b1-1",text:""},{from:"b1",to:"b1-2",text:""},{from:"b1",to:"b1-3",text:""},{from:"b1",to:"b1-4",text:""},{from:"b1",to:"b1-5",text:""},{from:"b1",to:"b1-6",text:""},{from:"b",to:"b2",text:""},{from:"b2",to:"b2-1",text:""},{from:"b2",to:"b2-2",text:""},{from:"a",to:"c",text:""},{from:"c",to:"c1",text:""},{from:"c",to:"c2",text:""},{from:"c",to:"c3",text:""}]},o=(e=c.value)==null?void 0:e.getInstance();o&&(await o.setJsonData(n),await o.moveToCenter(),await o.zoomToFit())};return(n,o)=>(g(),y("div",null,[t("div",B,[I,i(s(p),{ref_key:"graphRef",ref:c,options:l,onNodeClick:f,onLineClick:_},{node:v(({node:e})=>[t("div",null,[t("button",{class:C(["icon-btn",["icon-btn--"+e.data.icon]]),type:"button"},[z,t("span",V,[i(s(m),{color:"#ffffff",size:"30px",name:e.data.icon},null,8,["name"])]),t("span",j,S(e.text),1)],2)])]),_:1},512)],512)]))}});const F=N(L,[["__scopeId","data-v-a4a4f483"]]);export{F as default};
