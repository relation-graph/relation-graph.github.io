import{k as c}from"./relation-graph-4b768e87.js";import{d,r as f,o as l,a as b,c as p,b as o,e as m,u as x,p as u,j as h,f as n}from"./index-ee818b67.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const g=e=>(u("data-v-4f5a9ba7"),e=e(),h(),e),y={ref:"myPage",class:"my-graph",style:{height:"calc(100vh - 60px)"}},v=g(()=>o("div",{style:{position:"absolute",left:"10px",top:"10px","background-color":"rgba(255,255,255, 0.3)","border-radius":"10px","font-size":"12px",color:"#ffffff",padding:"10px"}},[n(" Fully customize the graphical elements of the graph using div+css, Vue components, and React components through slots "),o("br"),n(" Customize graph elements fully using div+css, Vue components, and React components through slots. ")],-1)),w=d({__name:"node-style2",setup(e){const s={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"transparent",defaultNodeBorderWidth:0,defaultNodeBorderColor:"transparent",defaultNodeFontColor:"#ffffff",defaultNodeShape:1,toolBarDirection:"h",toolBarPositionH:"right",toolBarPositionV:"bottom",defaultLineShape:6,defaultJunctionPoint:"lr",layout:{layoutName:"tree",from:"left",min_per_width:310,min_per_height:70}},a=f(),i=async()=>{const r={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b",text:""},{from:"b",to:"b1",text:""},{from:"b1",to:"b1-1",text:""},{from:"b1",to:"b1-2",text:""},{from:"b1",to:"b1-3",text:""},{from:"b1",to:"b1-4",text:""},{from:"b1",to:"b1-5",text:""},{from:"b1",to:"b1-6",text:""},{from:"b",to:"b2",text:""},{from:"b2",to:"b2-1",text:""},{from:"b2",to:"b2-2",text:""},{from:"a",to:"c",text:""},{from:"c",to:"c1",text:""},{from:"c",to:"c2",text:""},{from:"c",to:"c3",text:""}]},t=a.value.getInstance();console.log("graphInstance:",t),t&&(await t.setJsonData(r),await t.moveToCenter(),await t.zoomToFit())};return l(()=>{i()}),(r,t)=>(b(),p("div",null,[o("div",y,[v,m(x(c),{ref_key:"graphRef",ref:a,options:s},null,512)],512)]))}});const I=_(w,[["__scopeId","data-v-4f5a9ba7"]]);export{I as default};
