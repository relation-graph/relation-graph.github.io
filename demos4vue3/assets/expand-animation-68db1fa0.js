import{M as h}from"./relation-graph-11dba7f5.js";import{d as x,r as c,o as g,a as y,c as v,b as s,e as o,w as a,u as N,f as p,i as b,p as w,j as C}from"./index-358d0f07.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const S=t=>(w("data-v-55415b2c"),t=t(),C(),t),E={style:{height:"calc(100vh - 60px)"}},V={class:"c-my-panel"},W=S(()=>s("div",{class:"c-option-name"},"After clicking to expand/collapse the node:",-1)),k=x({__name:"expand-animation",setup(t){const n=c(!0),r={layouts:[{label:"Center",layoutName:"tree",layoutClassName:"seeks-layout-center",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1,min_per_width:40,max_per_width:70,min_per_height:200}],defaultNodeShape:1,defaultNodeWidth:30,defaultLineShape:2,defaultJunctionPoint:"tb",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)",defaultNodeHeight:100,reLayoutWhenExpandedOrCollapsed:!0,defaultExpandHolderPosition:"bottom",zoomToFitWhenRefresh:!0,useAnimationWhenExpanded:!0,debug:!1},u=async()=>{const l={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1",expanded:!1},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"}]},e=d.value.getInstance();await e.setOptions(r),await e.setJsonData(l),await e.playShowEffect()},f=()=>{d.value.getInstance().options.reLayoutWhenExpandedOrCollapsed=n.value},d=c();return g(()=>{u()}),(l,e)=>{const i=b("el-radio-button"),_=b("el-radio-group");return y(),v("div",null,[s("div",E,[o(N(h),{ref_key:"graphRef",ref:d,options:r},{"graph-plug":a(()=>[s("div",V,[W,o(_,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=m=>n.value=m),size:"small",onChange:f},{default:a(()=>[o(i,{label:!0},{default:a(()=>[p("Re-layout")]),_:1}),o(i,{label:!1},{default:a(()=>[p("Do not re-layout")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const B=I(k,[["__scopeId","data-v-55415b2c"]]);export{B as default};
