import{r as o,a,j as f}from"./index.7473cb17.js";import{u as d}from"./relation-graph.26f01d58.js";import{MySelector as u}from"./RGComponentsForDemo.afa6e56e.js";const m=()=>{const r=o.exports.useRef(null),[s,x]=o.exports.useState(0),[l,c]=o.exports.useState(0),h=async()=>{var n;const t={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"\u5173\u7CFB1",color:"#43a2f1"},{from:"a",to:"c",text:"\u5173\u7CFB2"},{from:"a",to:"e",text:"\u5173\u7CFB3"},{from:"b",to:"e",text:"",color:"#67C23A"}]},e=(n=r.current)==null?void 0:n.getInstance();await(e==null?void 0:e.setJsonData(t)),await(e==null?void 0:e.playShowEffect())},i=async()=>{const t=r.current.getInstance();t.options.graphOffset_x=s,t.options.graphOffset_y=l,await t.refresh()};return o.exports.useEffect(()=>{h()},[]),o.exports.useEffect(()=>{i()},[s,l]),a("div",{children:f("div",{style:{height:"100vh"},children:[f("div",{className:"rounded-lg absolute left-20 top-20 z-20 p-4 bg-white border-solid border-2 border-black shadow-lg",children:[a("div",{className:"c-option-name",children:"graphOffset_x:"}),a(u,{data:[{value:-800,text:"-800"},{value:-500,text:"-500"},{value:-200,text:"-200"},{value:-100,text:"-100"},{value:0,text:"0"},{value:100,text:"100"},{value:200,text:"200"},{value:500,text:"500"},{value:800,text:"800"}],currentValue:s,onChange:t=>{x(t)}}),a("div",{className:"c-option-name",children:"graphOffset_y:"}),a(u,{data:[{value:-800,text:"-800"},{value:-500,text:"-500"},{value:-200,text:"-200"},{value:-100,text:"-100"},{value:0,text:"0"},{value:100,text:"100"},{value:200,text:"200"},{value:500,text:"500"},{value:800,text:"800"}],currentValue:l,onChange:t=>{c(t)}})]}),a(d,{ref:r,options:{graphOffset_x:0,graphOffset_y:0}})]})})};export{m as default};
