import{M as h}from"./relation-graph-de73bd62.js";import{d as g,r as i,o as I,a as x,c as u,b as n,e as b,w,u as k,n as C,t as d,q as M,k as z}from"./index-e1681cb0.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const P=["onMouseover","onMouseout"],T={class:"c-my-rg-node"},S={style:{color:"forestgreen","font-size":"16px",position:"absolute",width:"160px",height:"25px","line-height":"25px","margin-top":"5px","margin-left":"-48px","text-align":"center","background-color":"rgba(66,187,66,0.2)"}},B={style:{"line-height":"25px","padding-left":"10px",color:"#888888","font-size":"12px"}},j={class:"c-node-menu-item"},J={class:"c-node-menu-item"},L=g({__name:"adv-node-tips",setup(O){const m=i(),r=i(),c=i(!1),a=i({x:0,y:0}),s=i({}),f={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultNodeColor:"rgba(66,187,66,1)",defaultJunctionPoint:"border"},p=async()=>{const e={rootId:"2",nodes:[{id:"1",text:"Node-1",data:{myicon:"el-icon-star-on"}},{id:"2",text:"Node-2",data:{myicon:"el-icon-setting"}},{id:"3",text:"Node-3",data:{myicon:"el-icon-setting"}},{id:"4",text:"Node-4",data:{myicon:"el-icon-star-on"}},{id:"6",text:"Node-6",data:{myicon:"el-icon-setting"}},{id:"7",text:"Node-7",data:{myicon:"el-icon-setting"}},{id:"8",text:"Node-8",data:{myicon:"el-icon-star-on"}},{id:"9",text:"Node-9",data:{myicon:"el-icon-headset"}},{id:"71",text:"Node-71",data:{myicon:"el-icon-headset"}},{id:"72",text:"Node-72",data:{myicon:"el-icon-s-tools"}},{id:"73",text:"Node-73",data:{myicon:"el-icon-star-on"}},{id:"81",text:"Node-81",data:{myicon:"el-icon-s-promotion"}},{id:"82",text:"Node-82",data:{myicon:"el-icon-s-promotion"}},{id:"83",text:"Node-83",data:{myicon:"el-icon-star-on"}},{id:"84",text:"Node-84",data:{myicon:"el-icon-s-promotion"}},{id:"85",text:"Node-85",data:{myicon:"el-icon-sunny"}},{id:"91",text:"Node-91",data:{myicon:"el-icon-sunny"}},{id:"92",text:"Node-82",data:{myicon:"el-icon-sunny"}},{id:"51",text:"Node-51",data:{myicon:"el-icon-sunny"}},{id:"52",text:"Node-52",data:{myicon:"el-icon-sunny"}},{id:"53",text:"Node-53",data:{myicon:"el-icon-sunny"}},{id:"54",text:"Node-54",data:{myicon:"el-icon-sunny"}},{id:"55",text:"Node-55",data:{myicon:"el-icon-sunny"}},{id:"5",text:"Node-5",data:{myicon:"el-icon-sunny"}}],lines:[{from:"7",to:"71",text:"Investment"},{from:"7",to:"72",text:"Investment"},{from:"7",to:"73",text:"Investment"},{from:"8",to:"81",text:"Investment"},{from:"8",to:"82",text:"Investment"},{from:"8",to:"83",text:"Investment"},{from:"8",to:"84",text:"Investment"},{from:"8",to:"85",text:"Investment"},{from:"9",to:"91",text:"Investment"},{from:"9",to:"92",text:"Investment"},{from:"5",to:"51",text:"Investment1"},{from:"5",to:"52",text:"Investment"},{from:"5",to:"53",text:"Investment3"},{from:"5",to:"54",text:"Investment4"},{from:"5",to:"55",text:"Investment"},{from:"1",to:"2",text:"Investment"},{from:"3",to:"1",text:"Executive"},{from:"4",to:"2",text:"Executive"},{from:"6",to:"2",text:"Executive"},{from:"7",to:"2",text:"Executive"},{from:"8",to:"2",text:"Executive"},{from:"9",to:"2",text:"Executive"},{from:"1",to:"5",text:"Investment"}]},t=r.value.getInstance();await t.setJsonData(e),await t.moveToCenter(),await t.zoomToFit()},y=(e,t)=>{console.log("onNodeClick:",e)},v=(e,t,o)=>{console.log("onLineClick:",e)},_=(e,t)=>{s.value=e;const o=m.value.getBoundingClientRect();console.log("showNodeMenus:",t.clientX,t.clientY,o),c.value=!0,a.value.x=t.clientX-o.x+10,a.value.y=t.clientY-o.y+10},N=(e,t)=>{c.value=!1};return I(()=>{p()}),(e,t)=>(x(),u("div",null,[n("div",{ref_key:"myPage",ref:m,style:{height:"calc(100vh - 60px)"}},[b(k(h),{ref_key:"graphRef",ref:r,options:f,onNodeClick:y,onLineClick:v},{node:w(({node:o})=>[n("div",{onMouseover:l=>_(o,l),onMouseout:l=>N(o,l)},[n("div",T,[n("i",{style:{"font-size":"30px"},class:z(o.data.myicon)},null,2)]),n("div",S,d(o.data.myicon),1)],40,P)]),_:1},512),c.value?(x(),u("div",{key:0,style:C([{left:a.value.x+"px",top:a.value.y+"px"},{"z-index":"999",padding:"10px","background-color":"#ffffff",border:"#eeeeee solid 1px","box-shadow":"0px 0px 8px #cccccc",position:"absolute"}])},[n("div",B,"Node Name: "+d(s.value.text),1),n("div",j,"id: "+d(s.value.text),1),n("div",J,"icon: "+d(s.value.data.myicon),1)],4)):M("",!0)],512)]))}});const X=E(L,[["__scopeId","data-v-a9bf0a66"]]);export{X as default};
