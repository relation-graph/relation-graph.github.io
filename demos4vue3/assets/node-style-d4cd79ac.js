import{k as y}from"./relation-graph-4b768e87.js";import{d as w,o as v,r as S,a as e,c as o,b as t,e as i,w as d,u as C,p as k,j as N,f as p,F as I,g as V,t as B,q as R,i as h}from"./index-ee818b67.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const L=""+new URL("../images/video-dribbble.mp4",import.meta.url).href,s=n=>(k("data-v-eb13911f"),n=n(),N(),n),P={ref:"myPage",class:"my-graph",style:{height:"calc(100vh - 60px)"}},F=s(()=>t("div",{style:{position:"absolute",left:"10px",top:"10px","background-color":"rgba(255,255,255, 0.3)","border-radius":"10px","font-size":"12px",color:"#ffffff",padding:"10px"}},[p(" Fully customize the graphical elements of the graph using div+css, Vue components, and React components through slots "),t("br"),p(" Use div+css, Vue components, and React components to fully customize the graphical elements of the graph through slots. ")],-1)),T={key:0},j=s(()=>t("div",{style:{"font-size":"18px","line-height":"40px"}},"Any content can be displayed here.",-1)),D={class:"small"},W={key:1,style:{height:"200px",width:"300px","border-radius":"10px",overflow:"hidden",display:"flex","flex-direction":"column","justify-content":"space-between"}},E=s(()=>t("video",{playsinline:"",style:{height:"100%",width:"100%","object-fit":"cover","overflow-clip-margin":"content-box",overflow:"clip"},controls:"",autoplay:"",loop:"",muted:"",src:L},null,-1)),J=s(()=>t("div",{style:{position:"absolute",left:"5px",top:"5px",color:"#ffffff","font-size":"20px","text-align":"center","line-height":"30px",width:"100%"}},"This is a video",-1)),M=[E,J],U={key:2,style:{padding:"10px"}},q=w({__name:"node-style",setup(n){v(()=>{m()});const f=S(),_=["DIV","Vue Component","React Component","Even videos"],u={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"transparent",defaultNodeBorderWidth:1,defaultNodeBorderColor:"rgba(255, 255, 255, 0.3)",defaultNodeFontColor:"#ffffff",defaultNodeShape:0,toolBarDirection:"h",toolBarPositionH:"right",toolBarPositionV:"bottom",defaultPloyLineRadius:10,defaultLineShape:2,defaultJunctionPoint:"ltrb",layout:{layoutName:"tree",from:"left",min_per_width:400,min_per_height:90}},m=async()=>{const r={rootId:"a",nodes:[{id:"a",text:"a",nodeShape:1,width:400,height:150,offset_x:-200},{id:"b",text:"b"},{id:"b1",text:"b1",nodeShape:1,width:200,height:50},{id:"b1-1",text:"b1-1",nodeShape:1,width:200,height:50},{id:"b1-2",text:"b1-2",nodeShape:1,width:200,height:50},{id:"b1-3",text:"b1-3",nodeShape:1,width:200,height:50},{id:"b1-4",text:"b1-4",nodeShape:1,width:200,height:50},{id:"b1-5",text:"b1-5",nodeShape:1,width:200,height:50},{id:"b1-6",text:"b1-6",nodeShape:1,width:200,height:50},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c",nodeShape:1},{id:"c1",text:"c1",nodeShape:1,borderWidth:1,data:{type:"my-button"}},{id:"c2",text:"c2",nodeShape:1,borderWidth:1,data:{type:"my-button"}},{id:"c3",text:"c3",nodeShape:1,borderWidth:1,data:{type:"my-button"}}],lines:[{from:"a",to:"b",text:""},{from:"b",to:"b1",text:""},{from:"b1",to:"b1-1",text:""},{from:"b1",to:"b1-2",text:""},{from:"b1",to:"b1-3",text:""},{from:"b1",to:"b1-4",text:""},{from:"b1",to:"b1-5",text:""},{from:"b1",to:"b1-6",text:""},{from:"b",to:"b2",text:""},{from:"b2",to:"b2-1",text:""},{from:"b2",to:"b2-2",text:""},{from:"a",to:"c",text:""},{from:"c",to:"c1",text:""},{from:"c",to:"c2",text:""},{from:"c",to:"c3",text:""}]};r.nodes.forEach(c=>{c.alignItems="left"});const a=f.value.getInstance();await a.setJsonData(r),await a.moveToCenter(),await a.zoomToFit()};return(r,a)=>{const c=h("el-carousel-item"),x=h("el-carousel"),g=h("el-button");return e(),o("div",null,[t("div",P,[F,i(C(y),{ref_key:"graphRef",ref:f,options:u},{node:d(({node:l})=>[l.id==="a"?(e(),o("div",T,[i(x,{height:"150px"},{default:d(()=>[(e(),o(I,null,V(_,b=>i(c,{key:b},{default:d(()=>[j,t("h3",D,B(b),1)]),_:2},1024)),64))]),_:1})])):l.id==="c"?(e(),o("div",W,M)):l.data.type==="my-button"?(e(),o("div",U,[i(g,{round:""},{default:d(()=>[p("My button")]),_:1})])):R("",!0)]),_:1},512)],512)])}}});const O=z(q,[["__scopeId","data-v-eb13911f"]]);export{O as default};
