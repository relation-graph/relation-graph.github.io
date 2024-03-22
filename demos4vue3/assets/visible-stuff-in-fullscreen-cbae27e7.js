import{d as W,r as l,o as $,D as q,a as x,c as m,b as n,e as G,w as z,u as H,k as U,t as a,q as v,n as A,A as c,p as K,j as Q}from"./index-ee818b67.js";import{k as Z}from"./relation-graph-4b768e87.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const j=p=>(K("data-v-db6899f5"),p=p(),Q(),p),ee={class:"c-my-node-icon"},te={class:"c-my-node-name"},oe={style:{"line-height":"25px","padding-left":"10px",color:"#888888","font-size":"12px"}},ne={style:{"line-height":"25px","padding-left":"10px",color:"#888888","font-size":"12px"}},ie=j(()=>n("div",{class:"c-my-panel"},[n("div",{class:"c-option-name",style:{"line-height":"25px"}},[n("div",null,"This example mainly demonstrates:"),n("div",null,'Hovering over the "node" and "line" will display tooltips'),n("div",null,'Right-clicking on the "node" and "line" will display context menus'),n("div",null,"These operation-related panels can still be used after full screen")])],-1)),le=W({__name:"visible-stuff-in-fullscreen",setup(p){const s=l(),d=l(null),f=l(!1),y=l({x:0,y:0}),g=l(!1),h=l({x:0,y:0}),N=l(null),u=l(null),L=l(!1),C=l({x:0,y:0}),_=l(!1),k=l({x:0,y:0}),F=l({allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"auto",defaultNodeColor:"auto",defaultNodeBorderWidth:"auto",defaultNodeBorderColor:"auto",defaultNodeFontColor:"auto"}),B=async()=>{const e={rootId:"2",nodes:[{id:"1",text:"Node-1",data:{myicon:"el-icon-star-on"}},{id:"2",text:"Node-2",data:{myicon:"el-icon-setting"}},{id:"3",text:"Node-3",data:{myicon:"el-icon-setting"}},{id:"4",text:"Node-4",data:{myicon:"el-icon-star-on"}},{id:"6",text:"Node-6",data:{myicon:"el-icon-setting"}},{id:"7",text:"Node-7",data:{myicon:"el-icon-setting"}},{id:"8",text:"Node-8",data:{myicon:"el-icon-star-on"}},{id:"9",text:"Node-9",data:{myicon:"el-icon-headset"}},{id:"71",text:"Node-71",data:{myicon:"el-icon-headset"}},{id:"72",text:"Node-72",data:{myicon:"el-icon-s-tools"}},{id:"73",text:"Node-73",data:{myicon:"el-icon-star-on"}},{id:"81",text:"Node-81",data:{myicon:"el-icon-s-promotion"}},{id:"82",text:"Node-82",data:{myicon:"el-icon-s-promotion"}},{id:"83",text:"Node-83",data:{myicon:"el-icon-star-on"}},{id:"84",text:"Node-84",data:{myicon:"el-icon-s-promotion"}},{id:"85",text:"Node-85",data:{myicon:"el-icon-sunny"}},{id:"91",text:"Node-91",data:{myicon:"el-icon-sunny"}},{id:"92",text:"Node-82",data:{myicon:"el-icon-sunny"}},{id:"51",text:"Node-51",data:{myicon:"el-icon-sunny"}},{id:"52",text:"Node-52",data:{myicon:"el-icon-sunny"}},{id:"53",text:"Node-53",data:{myicon:"el-icon-sunny"}},{id:"54",text:"Node-54",data:{myicon:"el-icon-sunny"}},{id:"55",text:"Node-55",data:{myicon:"el-icon-sunny"}},{id:"5",text:"Node-5",data:{myicon:"el-icon-sunny"}}],lines:[{from:"7",to:"71",text:"Line text1"},{from:"7",to:"72",text:"Line text2"},{from:"7",to:"73",text:"Line text3"},{from:"8",to:"81",text:"Line text4"},{from:"8",to:"82",text:"Line text5"},{from:"8",to:"83",text:"Line text6"},{from:"8",to:"84",text:"Line text7"},{from:"8",to:"85",text:"Line text8"},{from:"9",to:"91",text:"Line text9"},{from:"9",to:"92",text:"Line text10"},{from:"5",to:"51",text:"Line text11"},{from:"5",to:"52",text:"Line text12"},{from:"5",to:"53",text:"Line text13"},{from:"5",to:"54",text:"Line text14"},{from:"5",to:"55",text:"Line text15"},{from:"1",to:"2",text:"Line Text16"},{from:"3",to:"1",text:"Line Text17"},{from:"4",to:"2",text:"Line Text18"},{from:"6",to:"2",text:"Line Text19"},{from:"7",to:"2",text:"Line Text20"},{from:"8",to:"2",text:"Line Text21"},{from:"9",to:"2",text:"Line Text22"},{from:"1",to:"5",text:"Line Text23"}]},t=s.value.getInstance();await t.setJsonData(e),await t.moveToCenter(),await t.zoomToFit()},E=(e,t)=>{console.log("onNodeClick:",e),r()},P=(e,t,o)=>{console.log("onLineClick:",e),r()},r=()=>{_.value=!1,g.value=!1,f.value=!1,L.value=!1},R=(e,t,o)=>{console.log("onContextmenu:",t,o),r(),t==="node"&&V(e,o),t==="link"&&b(e,o)},V=(e,t)=>{d.value=t;const o=s.value.getInstance();o.setCheckedNode(d.value.id);const i=o.options.fullscreen?{x:0,y:0}:o.getBoundingClientRect();console.log("showNodeContextMenu:",t.id,t.text),g.value=!0,h.value.x=e.clientX-i.x+10,h.value.y=e.clientY-i.y+10},b=(e,t)=>{const o=S(e.target);console.log("showLinkContextMenu:",o,t.fromNode.text," > ",t.toNode.text),N.value=t,u.value=t.relations[o];const i=s.value.getInstance();i.setCheckedLinkAndLine(t,u.value);const T=i.options.fullscreen?{x:0,y:0}:i.getBoundingClientRect();_.value=!0,k.value.x=e.clientX-T.x+10,k.value.y=e.clientY-T.y+10},X=e=>{console.log("onCanvasClick:",e),r(),s.value.getInstance().clearChecked()},Y=e=>{const t=s.value.getInstance(),o=t.isNode(e.target);if(console.log("onMouseMove:",e.x,e.y,o),o)D(e,o),f.value=!0;else{f.value=!1;const i=t.isLink(e.target);i?(J(e,i),L.value=!0):L.value=!1}},D=(e,t)=>{const o=s.value.getInstance();console.log("showNodeTips:",t);const i=o.options.fullscreen?{x:0,y:0}:o.getBoundingClientRect();d.value=t,y.value.x=e.clientX-i.x+10,y.value.y=e.clientY-i.y+10},J=(e,t)=>{const o=s.value.getInstance();console.log("showLineTips:",e.clientX,e.clientY,u.value);const i=o.options.fullscreen?{x:0,y:0}:o.getBoundingClientRect();C.value.x=e.clientX-i.x+10,C.value.y=e.clientY-i.y+10;const T=S(e.target);N.value=t,u.value=t.relations[T]},w=e=>{console.log(`Operation:[${e}] To Node[${d.value.text}]`),r()},I=e=>{console.log(`Operation:[${e}] To Line[${u.value.text}]`),r()},M=()=>{if(document.fullscreenElement){console.log("div进入全屏模式",document.fullscreenElement),console.log("graphRef",s.value.$el);const e=s.value.getInstance();s.value.$el===document.fullscreenElement&&(console.log("relation-graph被全屏了!"),setTimeout(async()=>{await e.resetViewSize(),await e.moveToCenter(),await e.zoomToFit(),console.log("relation-graph 重置完成!")},500))}else console.log("div退出全屏模式"),setTimeout(async()=>{const e=s.value.getInstance();await e.resetViewSize(),await e.moveToCenter(),await e.zoomToFit(),console.log("relation-graph 重置完成!")},500)};$(()=>{B(),document.addEventListener("fullscreenchange",M)}),q(()=>{document.removeEventListener("fullscreenchange",M)});const S=(e,t=0)=>t>10||e.tagName==="body"?-1:e.parentElement.classList.contains("rel-link-peel")?Array.from(e.parentElement.children).indexOf(e):S(e.parentElement,t+1);return(e,t)=>(x(),m("div",null,[n("div",{ref:"myPage",class:"c-my-graph-theme",style:{height:"calc(100vh - 60px)"},onMousemove:Y},[G(H(Z),{ref_key:"graphRef",ref:s,options:F.value,"on-node-click":E,"on-line-click":P,"on-canvas-click":X,"on-contextmenu":R},{node:z(({node:o})=>[n("div",null,[n("div",ee,[n("i",{style:{"font-size":"30px"},class:U(o.data.myicon)},null,2)]),n("div",te,a(o.data.myicon),1)])]),"graph-plug":z(()=>[g.value||_.value?(x(),m("div",{key:0,class:"c-operation-mask-bg",onClick:r})):v("",!0),g.value?(x(),m("div",{key:1,class:"c-context-menu-panel",style:A({left:h.value.x+"px",top:h.value.y+"px"})},[n("div",oe,"Node["+a(d.value.text)+"]Actions：",1),n("div",{class:"c-node-menu-item",onClick:t[0]||(t[0]=c(o=>w("Node Action 1"),["stop"]))},"Action 1"),n("div",{class:"c-node-menu-item",onClick:t[1]||(t[1]=c(o=>w("Node Action 2"),["stop"]))},"Action 2"),n("div",{class:"c-node-menu-item",onClick:t[2]||(t[2]=c(o=>w("Node Action 3"),["stop"]))},"Action 3"),n("div",{class:"c-node-menu-item",onClick:t[3]||(t[3]=c(o=>w("Node Action 4"),["stop"]))},"Action 4")],4)):v("",!0),f.value?(x(),m("div",{key:2,class:"c-tips",style:A({left:y.value.x+"px",top:y.value.y+"px"})},[n("div",null,"NodeId: "+a(d.value.text),1),n("div",null,"Icon: "+a(d.value.data.myicon),1)],4)):v("",!0),_.value?(x(),m("div",{key:3,class:"c-context-menu-panel",style:A({left:k.value.x+"px",top:k.value.y+"px"})},[n("div",ne,"Line["+a(u.value.text)+"]Actions：",1),n("div",{class:"c-node-menu-item",onClick:t[4]||(t[4]=c(o=>I("Line Action 1"),["stop"]))},"Action 1"),n("div",{class:"c-node-menu-item",onClick:t[5]||(t[5]=c(o=>I("Line Action 2"),["stop"]))},"Action 2"),n("div",{class:"c-node-menu-item",onClick:t[6]||(t[6]=c(o=>I("Line Action 3"),["stop"]))},"Action 3"),n("div",{class:"c-node-menu-item",onClick:t[7]||(t[7]=c(o=>I("Line Action 4"),["stop"]))},"Action 4")],4)):v("",!0),L.value?(x(),m("div",{key:4,class:"c-tips",style:A({left:C.value.x+"px",top:C.value.y+"px"})},[n("div",null,"Text: "+a(u.value.text),1),n("div",null,"From Node: "+a(N.value.fromNode.text),1),n("div",null,"To Node: "+a(N.value.toNode.text),1)],4)):v("",!0),ie]),_:1},8,["options"])],544)]))}});const de=O(le,[["__scopeId","data-v-db6899f5"]]);export{de as default};
