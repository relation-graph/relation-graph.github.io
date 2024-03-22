import{r as n,a as e,j as a,F as s}from"./index.7473cb17.js";import{u as c}from"./relation-graph.26f01d58.js";const u=["DIV","Vue Component","React Component","Even videos"];function b({contents:t}){const[i,r]=n.exports.useState(0),d=()=>{console.log("handleNext:",(i+1)%t.length),r(l=>(l+1)%t.length)},o=()=>{console.log("handleNext:",(i-1+t.length)%t.length),r(l=>(l-1+t.length)%t.length)};return a("div",{className:"w-full h-full relative",children:[e("div",{className:"w-full h-full flex justify-center place-items-center",children:t[i]}),a("div",{className:"absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4",children:[e("button",{onClickCapture:()=>{o()},className:"bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded",children:"Previous"}),e("button",{onClick:()=>{d()},className:"bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded",children:"Next"})]})]})}const f=({node:t})=>{var r;const i=()=>{console.log("clickMyButton:",t.id)};return t.id==="a"?e(b,{contents:u}):t.id==="c"?a("div",{className:"relative h-56 w-72 rounded-lg overflow-hidden",children:[e("video",{playsInline:!0,className:"h-full w-full object-cover overflow-clip-margin-content-box overflow-clip",controls:!0,autoPlay:!0,loop:!0,muted:!0,src:"https://relation-graph.com/images/video-dribbble.mp4"}),e("div",{className:"absolute left-5 top-5 text-white text-20 text-center leading-30 w-full",children:"This is a video"})]}):((r=t.data)==null?void 0:r.type)==="my-button"?e("div",{onClick:()=>{i()},children:e("button",{className:"w-36 h-10 px-6 font-semibold rounded-md bg-black text-white",children:"My button"})}):e(s,{children:t.text})},x=()=>{const t=n.exports.useRef(),i={debug:!0,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"transparent",defaultNodeBorderWidth:1,defaultNodeBorderColor:"rgba(255, 255, 255, 0.3)",defaultNodeFontColor:"#ffffff",defaultNodeShape:0,toolBarDirection:"h",toolBarPositionH:"right",toolBarPositionV:"bottom",defaultPloyLineRadius:10,defaultLineShape:2,defaultJunctionPoint:"ltrb",layout:{layoutName:"tree",from:"left",min_per_width:400,min_per_height:90}};n.exports.useEffect(()=>{r()},[]);const r=async()=>{var l;const d={rootId:"a",nodes:[{id:"a",text:"a",nodeShape:1,width:400,height:150,offset_x:-200},{id:"b",text:"b"},{id:"b1",text:"b1",nodeShape:1,width:200,height:50},{id:"b1-1",text:"b1-1",nodeShape:1,width:200,height:50},{id:"b1-2",text:"b1-2",nodeShape:1,width:200,height:50},{id:"b1-3",text:"b1-3",nodeShape:1,width:200,height:50},{id:"b1-4",text:"b1-4",nodeShape:1,width:200,height:50},{id:"b1-5",text:"b1-5",nodeShape:1,width:200,height:50},{id:"b1-6",text:"b1-6",nodeShape:1,width:200,height:50},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c",nodeShape:1},{id:"c1",text:"c1",nodeShape:1,borderWidth:1,data:{type:"my-button"}},{id:"c2",text:"c2",nodeShape:1,borderWidth:1,data:{type:"my-button"}},{id:"c3",text:"c3",nodeShape:1,borderWidth:1,data:{type:"my-button"}}],lines:[{from:"a",to:"b",text:""},{from:"b",to:"b1",text:""},{from:"b1",to:"b1-1",text:""},{from:"b1",to:"b1-2",text:""},{from:"b1",to:"b1-3",text:""},{from:"b1",to:"b1-4",text:""},{from:"b1",to:"b1-5",text:""},{from:"b1",to:"b1-6",text:""},{from:"b",to:"b2",text:""},{from:"b2",to:"b2-1",text:""},{from:"b2",to:"b2-2",text:""},{from:"a",to:"c",text:""},{from:"c",to:"c1",text:""},{from:"c",to:"c2",text:""},{from:"c",to:"c3",text:""}]};d.nodes.forEach(h=>{h.alignItems="left"});const o=(l=t.current)==null?void 0:l.getInstance();await(o==null?void 0:o.setJsonData(d)),await(o==null?void 0:o.moveToCenter()),await(o==null?void 0:o.zoomToFit())};return e("div",{children:a("div",{className:"my-graph",style:{height:"100vh"},children:[a("div",{style:{position:"absolute",left:"10px",top:"10px",backgroundColor:"rgba(255,255,255, 0.3)",borderRadius:"10px",fontSize:"12px",color:"#ffffff",padding:"10px"},children:["Fully customize the graphical elements of the graph using div+css, Vue components, and React components through slots",e("br",{}),"Use div+css, Vue components, and React components to fully customize the graphical elements of the graph through slots."]}),e(c,{ref:t,options:i,nodeSlot:f})]})})};export{x as default};
