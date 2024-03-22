import{M as L,a as v}from"./relation-graph-588d2e75.js";import{d as w,r as _,o as N,x as I,a as M,c as F,b as l,e as i,w as s,f,t as m,u as V,i as b}from"./index-e4516832.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const T={class:"my-graph",style:{height:"calc(100vh)"}},B={style:{width:"400px","border-radius":"10px",position:"absolute",left:"20px",top:"20px","z-index":"20",padding:"30px","background-color":"#ffffff",border:"#efefef solid 1px","box-shadow":"0 3px 9px rgba(0,21,41,.08)"}},R=w({__name:"customer-layout-force",setup(S){class y extends v.ForceLayouter{constructor(t,o,d){console.log("MyForceLayout.................."),super(t,o,d)}resetCalcNodes(){this.forCalcNodes=[],this.calcNodeMap=new WeakMap,this.visibleNodes.forEach(t=>{const o={rgNode:t,Fx:0,Fy:0,x:t.x,y:t.y,ignoreForce:t.dragging||this.justLayoutSingleNode&&!t.singleNode,force_weight:t.force_weight||1,forceCenterOffset_X:(t.width||t.el.offsetWidth||60)/2,forceCenterOffset_Y:(t.height||t.el.offsetHeight||60)/2,fixed:t.fixed||!1,myColor:t.color};this.forCalcNodes.push(o),this.calcNodeMap.set(t,o)})}calcNodesPosition(){this.forCalcNodes;for(let t=0;t<this.forCalcNodes.length;t++){const o=this.forCalcNodes[t];if(!o.ignoreForce&&!o.fixed){for(let d=0;d<this.forCalcNodes.length;d++)if(t!==d){const a=this.forCalcNodes[d];if(a.ignoreForce)continue;this.addGravityByNode(o,a),o.myColor===a.myColor&&this.addElasticByLine(o,a,1)}}}}}const e={debug:!0,backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,useAnimationWhenRefresh:!1,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"rgba(255, 255, 255, 0.6)",defaultNodeBorderWidth:1,defaultNodeBorderColor:"rgba(255, 255, 255, 0.3)",defaultNodeFontColor:"#1b7702",defaultNodeShape:0,defaultNodeWidth:60,defaultNodeHeight:60,toolBarDirection:"h",toolBarPositionH:"right",toolBarPositionV:"bottom",defaultPolyLineRadius:10,defaultLineShape:1,layout:{layoutName:"force",from:"left",maxLayoutTimes:300,force_node_repulsion:.4,force_line_elastic:.1}},x=_(),c=_(),g=async()=>{const t={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"b2-3",text:"b2-3"},{id:"b2-4",text:"b2-4"},{id:"b3",text:"b3"},{id:"b3-1",text:"b3-1"},{id:"b3-2",text:"b3-2"},{id:"b3-3",text:"b3-3"},{id:"b3-4",text:"b3-4"},{id:"b3-5",text:"b3-5"},{id:"b3-6",text:"b3-6"},{id:"b3-7",text:"b3-7"},{id:"b4",text:"b4"},{id:"b4-1",text:"b4-1"},{id:"b4-2",text:"b4-2"},{id:"b4-3",text:"b4-3"},{id:"b4-4",text:"b4-4"},{id:"b4-5",text:"b4-5"},{id:"b4-6",text:"b4-6"},{id:"b4-7",text:"b4-7"},{id:"b4-8",text:"b4-8"},{id:"b4-9",text:"b4-9"},{id:"b5",text:"b5"},{id:"b5-1",text:"b5-1"},{id:"b5-2",text:"b5-2"},{id:"b5-3",text:"b5-3"},{id:"b5-4",text:"b5-4"},{id:"b6",text:"b6"},{id:"b6-1",text:"b6-1"},{id:"b6-2",text:"b6-2"},{id:"b6-3",text:"b6-3"},{id:"b6-4",text:"b6-4"},{id:"b6-5",text:"b6-5"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c1-1",text:"c1-1"},{id:"c1-2",text:"c1-2"},{id:"c1-3",text:"c1-3"},{id:"c1-4",text:"c1-4"},{id:"c1-5",text:"c1-5"},{id:"c1-6",text:"c1-6"},{id:"c1-7",text:"c1-7"},{id:"c2",text:"c2"},{id:"c2-1",text:"c2-1"},{id:"c2-2",text:"c2-2"},{id:"c3",text:"c3"},{id:"c3-1",text:"c3-1"},{id:"c3-2",text:"c3-2"},{id:"c3-3",text:"c3-3"},{id:"d",text:"d"},{id:"d1",text:"d1"},{id:"d1-1",text:"d1-1"},{id:"d1-2",text:"d1-2"},{id:"d1-3",text:"d1-3"},{id:"d1-4",text:"d1-4"},{id:"d1-5",text:"d1-5"},{id:"d1-6",text:"d1-6"},{id:"d1-7",text:"d1-7"},{id:"d1-8",text:"d1-8"},{id:"d2",text:"d2"},{id:"d2-1",text:"d2-1"},{id:"d2-2",text:"d2-2"},{id:"d3",text:"d3"},{id:"d3-1",text:"d3-1"},{id:"d3-2",text:"d3-2"},{id:"d3-3",text:"d3-3"},{id:"d3-4",text:"d3-4"},{id:"d3-5",text:"d3-5"},{id:"d4",text:"d4"},{id:"d4-1",text:"d4-1"},{id:"d4-2",text:"d4-2"},{id:"d4-3",text:"d4-3"},{id:"d4-4",text:"d4-4"},{id:"d4-5",text:"d4-5"},{id:"d4-6",text:"d4-6"},{id:"e",text:"e"},{id:"e1",text:"e1"},{id:"e1-1",text:"e1-1"},{id:"e1-2",text:"e1-2"},{id:"e1-3",text:"e1-3"},{id:"e1-4",text:"e1-4"},{id:"e1-5",text:"e1-5"},{id:"e1-6",text:"e1-6"},{id:"e2",text:"e2"},{id:"e2-1",text:"e2-1"},{id:"e2-2",text:"e2-2"},{id:"e2-3",text:"e2-3"},{id:"e2-4",text:"e2-4"},{id:"e2-5",text:"e2-5"},{id:"e2-6",text:"e2-6"},{id:"e2-7",text:"e2-7"},{id:"e2-8",text:"e2-8"},{id:"e2-9",text:"e2-9"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"b2",to:"b2-3"},{from:"b2",to:"b2-4"},{from:"b",to:"b3"},{from:"b3",to:"b3-1"},{from:"b3",to:"b3-2"},{from:"b3",to:"b3-3"},{from:"b3",to:"b3-4"},{from:"b3",to:"b3-5"},{from:"b3",to:"b3-6"},{from:"b3",to:"b3-7"},{from:"b",to:"b4"},{from:"b4",to:"b4-1"},{from:"b4",to:"b4-2"},{from:"b4",to:"b4-3"},{from:"b4",to:"b4-4"},{from:"b4",to:"b4-5"},{from:"b4",to:"b4-6"},{from:"b4",to:"b4-7"},{from:"b4",to:"b4-8"},{from:"b4",to:"b4-9"},{from:"b",to:"b5"},{from:"b5",to:"b5-1"},{from:"b5",to:"b5-2"},{from:"b5",to:"b5-3"},{from:"b5",to:"b5-4"},{from:"b",to:"b6"},{from:"b6",to:"b6-1"},{from:"b6",to:"b6-2"},{from:"b6",to:"b6-3"},{from:"b6",to:"b6-4"},{from:"b6",to:"b6-5"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c1",to:"c1-1"},{from:"c1",to:"c1-2"},{from:"c1",to:"c1-3"},{from:"c1",to:"c1-4"},{from:"c1",to:"c1-5"},{from:"c1",to:"c1-6"},{from:"c1",to:"c1-7"},{from:"c",to:"c2"},{from:"c2",to:"c2-1"},{from:"c2",to:"c2-2"},{from:"c",to:"c3"},{from:"c3",to:"c3-1"},{from:"c3",to:"c3-2"},{from:"c3",to:"c3-3"},{from:"a",to:"d"},{from:"d",to:"d1"},{from:"d1",to:"d1-1"},{from:"d1",to:"d1-2"},{from:"d1",to:"d1-3"},{from:"d1",to:"d1-4"},{from:"d1",to:"d1-5"},{from:"d1",to:"d1-6"},{from:"d1",to:"d1-7"},{from:"d1",to:"d1-8"},{from:"d",to:"d2"},{from:"d2",to:"d2-1"},{from:"d2",to:"d2-2"},{from:"d",to:"d3"},{from:"d3",to:"d3-1"},{from:"d3",to:"d3-2"},{from:"d3",to:"d3-3"},{from:"d3",to:"d3-4"},{from:"d3",to:"d3-5"},{from:"d",to:"d4"},{from:"d4",to:"d4-1"},{from:"d4",to:"d4-2"},{from:"d4",to:"d4-3"},{from:"d4",to:"d4-4"},{from:"d4",to:"d4-5"},{from:"d4",to:"d4-6"},{from:"a",to:"e"},{from:"e",to:"e1"},{from:"e1",to:"e1-1"},{from:"e1",to:"e1-2"},{from:"e1",to:"e1-3"},{from:"e1",to:"e1-4"},{from:"e1",to:"e1-5"},{from:"e1",to:"e1-6"},{from:"e",to:"e2"},{from:"e2",to:"e2-1"},{from:"e2",to:"e2-2"},{from:"e2",to:"e2-3"},{from:"e2",to:"e2-4"},{from:"e2",to:"e2-5"},{from:"e2",to:"e2-6"},{from:"e2",to:"e2-7"},{from:"e2",to:"e2-8"},{from:"e2",to:"e2-9"}]};t.nodes.forEach(d=>{d.color=["red","yellow","blue"][Math.floor(Math.random()*3)]});const o=c.value.getInstance();o.setLayouter(new y(o.layouter.layoutOptions,o.options,o)),await u(),await o.setJsonData(t),await o.setZoom(30)},u=async()=>{await c.value.getInstance().stopAutoLayout()},p=async()=>{await u();const r=c.value.getInstance(),t=r.layouter;t.maxLayoutTimes=e.layout.maxLayoutTimes,t.force_node_repulsion=e.layout.force_node_repulsion,t.force_line_elastic=e.layout.force_line_elastic,setTimeout(async()=>{await r.startAutoLayout()},500)},h=async()=>{const r=c.value.getInstance();for(const t of r.getNodes())t.color=["red","yellow","blue"][Math.floor(Math.random()*3)];await p()};return N(()=>{g(),x.value=setInterval(async()=>{},3e3)}),I(()=>{console.log("beforeUnmount:clear timer"),clearInterval(x.value)}),(r,t)=>{const o=b("el-divider"),d=b("el-slider"),a=b("el-button"),C=b("el-link");return M(),F("div",null,[l("div",T,[l("div",B,[i(o,null,{default:s(()=>[f("Layout Parameters")]),_:1}),f(" Maximum Layout Times: "+m(e.layout.maxLayoutTimes)+" ",1),i(d,{modelValue:e.layout.maxLayoutTimes,"onUpdate:modelValue":t[0]||(t[0]=n=>e.layout.maxLayoutTimes=n),min:30,max:5e3,step:100,"show-tooltip":!0},null,8,["modelValue"]),f(" Node Repulsion Coefficient: "+m(e.layout.force_node_repulsion)+" (Setting it too high will cause shaking) ",1),i(d,{modelValue:e.layout.force_node_repulsion,"onUpdate:modelValue":t[1]||(t[1]=n=>e.layout.force_node_repulsion=n),min:.01,step:.05,max:4},null,8,["modelValue","min","step"]),f(" Line Elastic Coefficient: "+m(e.layout.force_line_elastic)+" (Setting it too high will cause shaking) ",1),i(d,{modelValue:e.layout.force_line_elastic,"onUpdate:modelValue":t[2]||(t[2]=n=>e.layout.force_line_elastic=n),min:.01,step:.05,max:4},null,8,["modelValue","min","step"]),i(a,{size:"small",type:"primary",onClick:p},{default:s(()=>[f("Apply Settings")]),_:1}),l("div",null,[i(C,{size:"small",type:"primary",onClick:h},{default:s(()=>[f("Randomly Change Colors")]),_:1})])]),i(V(L),{ref_key:"graphRef",ref:c,options:e},null,512)])])}}});const O=k(R,[["__scopeId","data-v-1a3f5170"]]);export{O as default};
