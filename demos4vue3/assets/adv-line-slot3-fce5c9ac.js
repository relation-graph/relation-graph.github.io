import{M as f}from"./relation-graph-28379630.js";import l from"./Demo4AdvLineSlot3LineSlot-18b8d3c3.js";import{d as c,r as b,o as _,a as x,c as m,b as p,e as a,w as u,u as r}from"./index-f7176e57.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const g={ref:"myPage",class:"my-graph",style:{height:"calc(100vh - 60px)"}},v=c({__name:"adv-line-slot3",setup(y){const e=b(),i={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"transparent",defaultNodeBorderWidth:1,defaultNodeBorderColor:"rgba(255, 255, 255, 0.3)",defaultNodeFontColor:"#ffffff",defaultNodeWidth:170,defaultNodeHeight:40,toolBarDirection:"h",toolBarPositionH:"left",toolBarPositionV:"top",defaultPloyLineRadius:10,layout:{layoutName:"tree",from:"left",min_per_width:410,min_per_height:50}},n=async()=>{const o={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b",text:"￥30.23万"},{from:"b",to:"b1",text:"￥30.23万"},{from:"b1",to:"b1-1",text:"￥30.23万"},{from:"b1",to:"b1-2",text:"￥30.23万"},{from:"b1",to:"b1-3",text:"￥30.23万"},{from:"b1",to:"b1-4",text:"￥30.23万"},{from:"b1",to:"b1-5",text:"￥30.23万"},{from:"b1",to:"b1-6",text:"￥30.23万"},{from:"b",to:"b2",text:"￥30.23万"},{from:"b2",to:"b2-1",text:"￥30.23万"},{from:"b2",to:"b2-2",text:"￥30.23万"},{from:"a",to:"c",text:"￥30.23万"},{from:"c",to:"c1",text:"￥30.23万"},{from:"c",to:"c2",text:"￥30.23万"},{from:"c",to:"c3",text:"￥30.23万"}]},t=e.value.getInstance();await t.setJsonData(o),await t.moveToCenter(),await t.zoomToFit()};return _(()=>{n()}),(o,t)=>(x(),m("div",null,[p("div",g,[a(r(f),{ref_key:"graphRef",ref:e,options:i},{line:u(({line:d,link:s})=>[a(r(l),{link:s,line:d},null,8,["link","line"])]),_:1},512)],512)]))}});const L=h(v,[["__scopeId","data-v-916f8545"]]);export{L as default};
