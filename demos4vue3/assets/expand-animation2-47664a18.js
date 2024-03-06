import{M as c}from"./relation-graph-bae0ebdb.js";import{d as S,r as m,o as _,a as h,c as g,b as u,e as o,w as d,u as C,f as i,i as x,p as v,j as T}from"./index-bbffd316.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const N=l=>(v("data-v-cc507b36"),l=l(),T(),l),w={style:{height:"calc(100vh - 60px)"}},A={class:"c-my-panel"},R=N(()=>u("div",{class:"c-option-name"},"After expanding/collapsing a node:",-1)),V=S({__name:"expand-animation2",setup(l){const n=m(!1),r={layouts:[{label:"Center",layoutName:"center",layoutClassName:"seeks-layout-center"}],defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)",reLayoutWhenExpandedOrCollapsed:!1,defaultExpandHolderPosition:"bottom",zoomToFitWhenRefresh:!0,useAnimationWhenExpanded:!0,debug:!1},s=m(),f=async()=>{var e;const a={rootId:"2",nodes:[{id:"2",text:"ALTXX",data:null},{id:"3",text:"CH2 TTN",data:null},{id:"4",text:"CH1 AlCu",data:null},{id:"5",text:"MainFrame",data:null},{id:"6",text:"TestMainSys",data:null},{id:"7",text:"汽车部件",data:null},{id:"8",text:"汽车工艺",data:null},{id:"9",text:"过程质检",data:null},{id:"10",text:"卓立制造",data:null},{id:"11",text:"压电开关",data:null},{id:"12",text:"电子产品",data:null},{id:"13",text:"集成电路",data:null},{id:"14",text:"ArHigh",data:null},{id:"15",text:"ArLow",data:null},{id:"16",text:"ShowerHead",data:null},{id:"17",text:"CrypoPump",data:null},{id:"18",text:"DryPump",data:null},{id:"19",text:"Ti Target",data:null},{id:"20",text:"N2",data:null},{id:"21",text:"Shutter",data:null},{id:"22",text:"Cool Chbr",data:null},{id:"23",text:"Transfer Chbr",data:null},{id:"24",text:"Alignment Unit",data:null},{id:"25",text:"齿轮箱",data:null},{id:"26",text:"车门内部人工涂蜡",data:null},{id:"27",text:"原材料检验",data:null},{id:"28",text:"地板RTV硅胶密封",data:null},{id:"29",text:"热保护焊接",data:null},{id:"30",text:"电热管导线焊接",data:null},{id:"31",text:"温控器安装",data:null},{id:"32",text:"蒸汽硅胶座配装",data:null},{id:"33",text:"温度调试",data:null},{id:"34",text:"压电开关的模型塑料外壳",data:null},{id:"35",text:"安装开关",data:null},{id:"36",text:"ASIC IC",data:null},{id:"37",text:"SENSOR",data:null},{id:"38",text:"CON",data:null},{id:"39",text:"Flash",data:null},{id:"40",text:"Flite",data:null}],lines:[{from:"2",to:"5",text:"Subsystem",data:null},{from:"2",to:"6",text:"Subsystem",data:null},{from:"2",to:"3",text:"Subsystem",data:null},{from:"2",to:"4",text:"Subsystem",data:null},{from:"3",to:"21",text:"Subsystem",data:null},{from:"3",to:"20",text:"Subsystem",data:null},{from:"3",to:"19",text:"Subsystem",data:null},{from:"4",to:"18",text:"Subsystem",data:null},{from:"4",to:"17",text:"Subsystem",data:null},{from:"4",to:"16",text:"Subsystem",data:null},{from:"4",to:"15",text:"Subsystem",data:null},{from:"4",to:"14",text:"Subsystem",data:null},{from:"5",to:"24",text:"Subsystem",data:null},{from:"5",to:"23",text:"Subsystem",data:null},{from:"5",to:"22",text:"Subsystem",data:null},{from:"6",to:"13",text:"Subsystem",data:null},{from:"6",to:"12",text:"Subsystem",data:null},{from:"6",to:"11",text:"Subsystem",data:null},{from:"6",to:"10",text:"Subsystem",data:null},{from:"6",to:"9",text:"Subsystem",data:null},{from:"6",to:"8",text:"Subsystem",data:null},{from:"6",to:"7",text:"Subsystem",data:null},{from:"7",to:"25",text:"Subsystem",data:null},{from:"8",to:"26",text:"Subsystem",data:null},{from:"9",to:"27",text:"Subsystem",data:null},{from:"10",to:"33",text:"Subsystem",data:null},{from:"10",to:"32",text:"Subsystem",data:null},{from:"10",to:"31",text:"Subsystem",data:null},{from:"10",to:"30",text:"Subsystem",data:null},{from:"10",to:"29",text:"Subsystem",data:null},{from:"10",to:"28",text:"Subsystem",data:null},{from:"11",to:"35",text:"Subsystem",data:null},{from:"11",to:"34",text:"Subsystem",data:null},{from:"12",to:"39",text:"Subsystem",data:null},{from:"12",to:"38",text:"Subsystem",data:null},{from:"12",to:"37",text:"Subsystem",data:null},{from:"12",to:"36",text:"Subsystem",data:null},{from:"13",to:"40",text:"Subsystem",data:null}]},t=(e=s.value)==null?void 0:e.getInstance();t&&(await t.setOptions(r),await t.setJsonData(a),await t.moveToCenter(),await t.zoomToFit())},y=()=>{var t;const a=(t=s.value)==null?void 0:t.getInstance();a&&(a.options.reLayoutWhenExpandedOrCollapsed=n.value)};return _(()=>{f()}),(a,t)=>{const e=x("el-radio-button"),p=x("el-radio-group");return h(),g("div",null,[u("div",w,[o(C(c),{ref_key:"graphRef",ref:s,options:r},{"graph-plug":d(()=>[u("div",A,[R,o(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=b=>n.value=b),size:"small",onChange:y},{default:d(()=>[o(e,{label:!0},{default:d(()=>[i("Re-layout")]),_:1}),o(e,{label:!1},{default:d(()=>[i("Do not re-layout")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const F=I(V,[["__scopeId","data-v-cc507b36"]]);export{F as default};
