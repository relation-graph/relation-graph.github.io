import{k as f}from"./relation-graph-4b768e87.js";import{s as p}from"./CircumIcons-dd916674.js";import{d as h,r as b,o as u,a as m,c as _,b as e,e as s,w as x,u as c,p as g,j as y,f as r}from"./index-ee818b67.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const w=t=>(g("data-v-7bd70262"),t=t(),y(),t),N={ref:"myPage",class:"my-graph",style:{height:"calc(100vh - 60px)"}},S=w(()=>e("div",{style:{position:"absolute",left:"10px",top:"10px","background-color":"rgba(255,255,255, 0.3)","border-radius":"10px","font-size":"12px",color:"#ffffff",padding:"10px"}},[r(" Fully customize the graphical elements of the graph using div+css, Vue components, and React components through slots "),e("br"),r(" Customize the graphical elements of the graph using div+css, Vue components, and React components through slots ")],-1)),C={class:"c-round",style:{width:"70px",height:"70px"}},B=h({__name:"node-style4",setup(t){const a=b(),i={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"transparent",defaultNodeBorderWidth:0,defaultNodeBorderColor:"transparent",defaultNodeFontColor:"#ffffff",defaultNodeShape:0,toolBarDirection:"h",toolBarPositionH:"right",toolBarPositionV:"bottom",defaultLineShape:6,defaultJunctionPoint:"lr",disableNodeClickEffect:!0,layout:{layoutName:"tree",from:"left",min_per_width:310,min_per_height:70}};u(()=>{d()});const d=async()=>{const n={rootId:"a",nodes:[{id:"a",text:"a",data:{icon:"football"}},{id:"b",text:"b",data:{icon:"football"}},{id:"b1",text:"b1",data:{icon:"football"}},{id:"b2",text:"b2",data:{icon:"football"}},{id:"b2-1",text:"b2-1",data:{icon:"football"}},{id:"b2-2",text:"b2-2",data:{icon:"football"}},{id:"c",text:"c",data:{icon:"football"}},{id:"c1",text:"c1",data:{icon:"football"}},{id:"c2",text:"c2",data:{icon:"football"}},{id:"c3",text:"c3",data:{icon:"football"}}],lines:[{from:"a",to:"b",text:""},{from:"b",to:"b1",text:""},{from:"b",to:"b2",text:""},{from:"b2",to:"b2-1",text:""},{from:"b2",to:"b2-2",text:""},{from:"a",to:"c",text:""},{from:"c",to:"c1",text:""},{from:"c",to:"c2",text:""},{from:"c",to:"c3",text:""}]},o=a.value.getInstance();await o.setJsonData(n),await o.moveToCenter(),await o.zoomToFit()};return(n,o)=>(m(),_("div",null,[e("div",N,[S,s(c(f),{ref_key:"graphRef",ref:a,options:i},{node:x(({node:l})=>[e("div",C,[s(c(p),{color:"#ffffff",size:"70px",name:l.data.icon},null,8,["name"])])]),_:1},512)],512)]))}});const P=v(B,[["__scopeId","data-v-7bd70262"]]);export{P as default};
