import{r as i,j as n,a as d}from"./index.7473cb17.js";import{u as b}from"./relation-graph.26f01d58.js";import{I as w}from"./index.e712a3dd.js";const P=()=>{const a=i.exports.useRef(null),r=i.exports.useRef(null),[x,c]=i.exports.useState(!1),[m,f]=i.exports.useState({x:0,y:0}),[s,u]=i.exports.useState({}),g={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultNodeColor:"rgba(66,187,66,1)",defaultJunctionPoint:"border"},p=()=>{var o;const e={rootId:"2",nodes:[{id:"1",text:"Node-1",data:{myicon:"star"}},{id:"2",text:"Node-2",data:{myicon:"settings"}},{id:"3",text:"Node-3",data:{myicon:"settings"}},{id:"4",text:"Node-4",data:{myicon:"star"}},{id:"6",text:"Node-6",data:{myicon:"settings"}},{id:"7",text:"Node-7",data:{myicon:"settings"}},{id:"8",text:"Node-8",data:{myicon:"star"}},{id:"9",text:"Node-9",data:{myicon:"headphones"}},{id:"71",text:"Node-71",data:{myicon:"headphones"}},{id:"72",text:"Node-72",data:{myicon:"bluetooth"}},{id:"73",text:"Node-73",data:{myicon:"star"}},{id:"81",text:"Node-81",data:{myicon:"burger"}},{id:"82",text:"Node-82",data:{myicon:"burger"}},{id:"83",text:"Node-83",data:{myicon:"star"}},{id:"84",text:"Node-84",data:{myicon:"burger"}},{id:"85",text:"Node-85",data:{myicon:"gift"}},{id:"91",text:"Node-91",data:{myicon:"gift"}},{id:"92",text:"Node-82",data:{myicon:"gift"}},{id:"51",text:"Node-51",data:{myicon:"gift"}},{id:"52",text:"Node-52",data:{myicon:"gift"}},{id:"53",text:"Node-53",data:{myicon:"gift"}},{id:"54",text:"Node-54",data:{myicon:"gift"}},{id:"55",text:"Node-55",data:{myicon:"gift"}},{id:"5",text:"Node-5",data:{myicon:"gift"}}],lines:[{from:"7",to:"71",text:"Investment"},{from:"7",to:"72",text:"Investment"},{from:"7",to:"73",text:"Investment"},{from:"8",to:"81",text:"Investment"},{from:"8",to:"82",text:"Investment"},{from:"8",to:"83",text:"Investment"},{from:"8",to:"84",text:"Investment"},{from:"8",to:"85",text:"Investment"},{from:"9",to:"91",text:"Investment"},{from:"9",to:"92",text:"Investment"},{from:"5",to:"51",text:"Investment1"},{from:"5",to:"52",text:"Investment"},{from:"5",to:"53",text:"Investment3"},{from:"5",to:"54",text:"Investment4"},{from:"5",to:"55",text:"Investment"},{from:"1",to:"2",text:"Investment"},{from:"3",to:"1",text:"Executive"},{from:"4",to:"2",text:"Executive"},{from:"6",to:"2",text:"Executive"},{from:"7",to:"2",text:"Executive"},{from:"8",to:"2",text:"Executive"},{from:"9",to:"2",text:"Executive"},{from:"1",to:"5",text:"Investment"}]},t=(o=a.current)==null?void 0:o.getInstance();t&&t.setJsonData(e).then(()=>{t.moveToCenter(),t.zoomToFit()})},h=(e,t)=>{console.log("onNodeClick:",e)},N=(e,t,o)=>{console.log("onLineClick:",e)},y=(e,t)=>{u(e);const o=r.current.getBoundingClientRect();console.log("showNodeMenus:",t.clientX,t.clientY,o),c(!0),f({x:t.clientX-o.x+10,y:t.clientY-o.y+10})},v=(e,t)=>{console.log("hideNodeTips:"),c(!1)},I=({node:e})=>{var t,o;return n("div",{className:"h-full",onMouseEnter:l=>y(e,l),onMouseLeave:l=>v(),children:[d("div",{className:"c-my-rg-node",children:d(w,{style:{fontSize:"30px"},name:(t=e.data)==null?void 0:t.myicon})}),d("div",{style:{color:"forestgreen",fontSize:"16px",position:"absolute",width:"160px",height:"25px",lineHeight:"25px",marginTop:"5px",marginLeft:"-48px",textAlign:"center",backgroundColor:"rgba(66,187,66,0.2)"},children:(o=e.data)==null?void 0:o.myicon})]})};return i.exports.useEffect(()=>{p()},[]),n("div",{children:[n("div",{ref:r,style:{height:"100vh"},children:[d("div",{className:"w-96 rounded-lg absolute left-20 top-20 z-20 p-4 bg-white border-solid border-2 border-black shadow-lg",children:d("div",{style:{lineHeight:"25px"},children:"Demonstrate: If you want some content to remain available after the graph is full screen, you can put these content in the graph-plug slot."})}),d(b,{ref:a,options:g,onNodeClick:h,onLineClick:N,nodeSlot:I})]}),x&&n("div",{className:"p-3 bg-white border border-gray-100 drop-shadow-lg	absolute rounded-lg",style:{left:`${m.x}px`,top:`${m.y}px`,zIndex:999},children:[n("div",{style:{lineHeight:"25px",paddingLeft:"10px",color:"#888888",fontSize:"12px"},children:["Node Name: ",s.text]}),n("div",{className:"c-node-menu-item",children:["id: ",s.text]}),n("div",{className:"c-node-menu-item",children:["icon: ",s.data.myicon]})]})]})};export{P as default};
