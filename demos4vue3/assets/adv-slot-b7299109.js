import{d as k,r as s,o as w,a as C,c as b,b as n,e as v,w as S,u as f,l as M,z as A,A as a,n as E,p as P,j as z,t as O,E as $}from"./index-e1681cb0.js";import{M as B}from"./relation-graph-de73bd62.js";import{s as j}from"./CircumIcons-9a63d43b.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const J=d=>(P("data-v-2d99a95b"),d=d(),z(),d),L=["onClick","onContextmenu","onMouseover","onMouseout"],R={style:{color:"forestgreen","font-size":"16px",position:"absolute",width:"160px",height:"25px","line-height":"25px","margin-top":"5px","margin-left":"-48px","text-align":"center","background-color":"rgba(66,187,66,0.2)"}},T=J(()=>n("div",{style:{"line-height":"25px","padding-left":"10px",color:"#888888","font-size":"12px"}},"Perform actions on this node:",-1)),V=k({__name:"adv-slot",setup(d){const m=s(),c=s(!1),x=s(),u=s(),l=s({x:0,y:0}),y={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultNodeColor:"rgba(66,187,66,1)",defaultJunctionPoint:"border"},g=async()=>{const e={rootId:"2",nodes:[{id:"1",text:"Node-1",data:{myicon:"el-icon-star-on"}},{id:"2",text:"Node-2",data:{myicon:"el-icon-setting"}},{id:"3",text:"Node-3",data:{myicon:"el-icon-setting"}},{id:"4",text:"Node-4",data:{myicon:"el-icon-star-on"}},{id:"6",text:"Node-6",data:{myicon:"el-icon-setting"}},{id:"7",text:"Node-7",data:{myicon:"el-icon-setting"}},{id:"8",text:"Node-8",data:{myicon:"el-icon-star-on"}},{id:"9",text:"Node-9",data:{myicon:"el-icon-headset"}},{id:"71",text:"Node-71",data:{myicon:"el-icon-headset"}},{id:"72",text:"Node-72",data:{myicon:"el-icon-s-tools"}},{id:"73",text:"Node-73",data:{myicon:"el-icon-star-on"}},{id:"81",text:"Node-81",data:{myicon:"el-icon-s-promotion"}},{id:"82",text:"Node-82",data:{myicon:"el-icon-s-promotion"}},{id:"83",text:"Node-83",data:{myicon:"el-icon-star-on"}},{id:"84",text:"Node-84",data:{myicon:"el-icon-s-promotion"}},{id:"85",text:"Node-85",data:{myicon:"el-icon-sunny"}},{id:"91",text:"Node-91",data:{myicon:"el-icon-sunny"}},{id:"92",text:"Node-82",data:{myicon:"el-icon-sunny"}},{id:"51",text:"Node-51",data:{myicon:"el-icon-sunny"}},{id:"52",text:"Node-52",data:{myicon:"el-icon-sunny"}},{id:"53",text:"Node-53",data:{myicon:"el-icon-sunny"}},{id:"54",text:"Node-54",data:{myicon:"el-icon-sunny"}},{id:"55",text:"Node-55",data:{myicon:"el-icon-sunny"}},{id:"5",text:"Node-5",data:{myicon:"el-icon-sunny"}}],lines:[{from:"7",to:"71",text:"Investment"},{from:"7",to:"72",text:"Investment"},{from:"7",to:"73",text:"Investment"},{from:"8",to:"81",text:"Investment"},{from:"8",to:"82",text:"Investment"},{from:"8",to:"83",text:"Investment"},{from:"8",to:"84",text:"Investment"},{from:"8",to:"85",text:"Investment"},{from:"9",to:"91",text:"Investment"},{from:"9",to:"92",text:"Investment"},{from:"5",to:"51",text:"Investment 1"},{from:"5",to:"52",text:"Investment"},{from:"5",to:"53",text:"Investment 3"},{from:"5",to:"54",text:"Investment 4"},{from:"5",to:"55",text:"Investment"},{from:"1",to:"2",text:"Investment"},{from:"3",to:"1",text:"Executive"},{from:"4",to:"2",text:"Executive"},{from:"6",to:"2",text:"Executive"},{from:"7",to:"2",text:"Executive"},{from:"8",to:"2",text:"Executive"},{from:"9",to:"2",text:"Executive"},{from:"1",to:"5",text:"Investment"}]},t=m.value.getInstance();await t.setJsonData(e),await t.moveToCenter(),await t.zoomToFit()},N=(e,t)=>{console.log("onNodeClick:",e)},_=(e,t,o)=>{console.log("onLineClick:",e)},h=e=>{console.log("nodeSlotOver:",e)},I=e=>{console.log("nodeSlotOut:",e)},p=(e,t)=>{x.value=e;const o=u.value.getBoundingClientRect();console.log("showNodeMenus:",t,o),c.value=!0,l.value.x=t.clientX-o.x,l.value.y=t.clientY-o.y},r=e=>{$({title:"Tip",message:"Performed action "+e+" on node: "+x.value.text,type:"success"}),c.value=!1};return w(()=>{g()}),(e,t)=>(C(),b("div",null,[n("div",{ref_key:"myPage",ref:u,style:{height:"calc(100vh - 60px)"},onClick:t[0]||(t[0]=o=>c.value=!1)},[v(f(B),{ref_key:"graphRef",ref:m,options:y,"on-node-click":N,"on-line-click":_},{node:S(({node:o})=>[n("div",null,[n("div",{class:"c-my-rg-node",onClick:i=>p(o,i),onContextmenu:a(i=>p(o,i),["prevent","stop"]),onMouseover:i=>h(o,i),onMouseout:i=>I(o,i)},[v(f(j),{size:"20px",name:"cloud_on"})],40,L),n("div",R,O(o.data.myicon),1)])]),_:1},512)],512),M(n("div",{style:E([{left:l.value.x+"px",top:l.value.y+"px"},{"z-index":"999",padding:"10px","background-color":"#ffffff",border:"#eeeeee solid 1px","box-shadow":"0px 0px 8px #cccccc",position:"absolute","border-radius":"10px"}])},[T,n("div",{class:"c-node-menu-item",onClick:t[1]||(t[1]=a(o=>r("Action 1"),["stop"]))},"Action 1"),n("div",{class:"c-node-menu-item",onClick:t[2]||(t[2]=a(o=>r("Action 2"),["stop"]))},"Action 2"),n("div",{class:"c-node-menu-item",onClick:t[3]||(t[3]=a(o=>r("Action 3"),["stop"]))},"Action 3"),n("div",{class:"c-node-menu-item",onClick:t[4]||(t[4]=a(o=>r("Action 4"),["stop"]))},"Action 4")],4),[[A,c.value]])]))}});const q=D(V,[["__scopeId","data-v-2d99a95b"]]);export{q as default};
