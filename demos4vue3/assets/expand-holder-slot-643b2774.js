import{d as m,r as f,o as c,a,c as e,b as l,e as p,w as h,u as _,k as C,A as u}from"./index-f19b6715.js";import{M as g}from"./relation-graph-9d2491ce.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const T="2",v=[{id:"2",text:"relation-graph",data:null},{id:"3",text:"CH2 TTN",data:null},{id:"4",text:"CH1 AlCu",data:null},{id:"5",text:"MainFrame",data:null},{id:"6",text:"TestMainSys",expanded:!1,data:null},{id:"7",text:"汽车部件",data:null},{id:"8",text:"汽车工艺",data:null},{id:"9",text:"过程质检",data:null},{id:"10",text:"卓立制造",data:null},{id:"11",text:"压电开关",data:null},{id:"12",text:"电子产品",data:null},{id:"13",text:"集成电路",data:null},{id:"14",text:"ArHigh",data:null},{id:"15",text:"ArLow",data:null},{id:"16",text:"ShowerHead",data:null},{id:"17",text:"CrypoPump",data:null},{id:"18",text:"DryPump",data:null},{id:"19",text:"Ti Target",data:null},{id:"20",text:"N2",data:null},{id:"21",text:"Shutter",data:null},{id:"22",text:"Cool Chbr",data:null},{id:"23",text:"Transfer Chbr",data:null},{id:"24",text:"Alignment Unit",data:null},{id:"25",text:"齿轮箱",data:null},{id:"26",text:"车门内部人工涂蜡",data:null},{id:"27",text:"原材料检验",data:null},{id:"28",text:"地板RTV硅胶密封",data:null},{id:"29",text:"热保护焊接",data:null},{id:"30",text:"电热管导线焊接",data:null},{id:"31",text:"温控器安装",data:null},{id:"32",text:"蒸汽硅胶座配装",data:null},{id:"33",text:"温度调试",data:null},{id:"34",text:"压电开关的模型塑料外壳",data:null},{id:"35",text:"安装开关",data:null},{id:"36",text:"ASIC IC",data:null},{id:"37",text:"SENSOR",data:null},{id:"38",text:"CON",data:null},{id:"39",text:"Flash",data:null},{id:"40",text:"Flite",data:null}],b=[{from:"2",to:"5",text:"子系统",data:null},{from:"2",to:"6",text:"子系统",data:null},{from:"2",to:"3",text:"子系统",data:null},{from:"2",to:"4",text:"子系统",data:null},{from:"3",to:"21",text:"子系统",data:null},{from:"3",to:"20",text:"子系统",data:null},{from:"3",to:"19",text:"子系统",data:null},{from:"4",to:"18",text:"子系统",data:null},{from:"4",to:"17",text:"子系统",data:null},{from:"4",to:"16",text:"子系统",data:null},{from:"4",to:"15",text:"子系统",data:null},{from:"4",to:"14",text:"子系统",data:null},{from:"5",to:"24",text:"子系统",data:null},{from:"5",to:"23",text:"子系统",data:null},{from:"5",to:"22",text:"子系统",data:null},{from:"6",to:"13",text:"子系统",data:null},{from:"6",to:"12",text:"子系统",data:null},{from:"6",to:"11",text:"子系统",data:null},{from:"6",to:"10",text:"子系统",data:null},{from:"6",to:"9",text:"子系统",data:null},{from:"6",to:"8",text:"子系统",data:null},{from:"6",to:"7",text:"子系统",data:null},{from:"7",to:"25",text:"子系统",data:null},{from:"8",to:"26",text:"子系统",data:null},{from:"9",to:"27",text:"子系统",data:null},{from:"10",to:"33",text:"子系统",data:null},{from:"10",to:"32",text:"子系统",data:null},{from:"10",to:"31",text:"子系统",data:null},{from:"10",to:"30",text:"子系统",data:null},{from:"10",to:"29",text:"子系统",data:null},{from:"10",to:"28",text:"子系统",data:null},{from:"11",to:"35",text:"子系统",data:null},{from:"11",to:"34",text:"子系统",data:null},{from:"12",to:"39",text:"子系统",data:null},{from:"12",to:"38",text:"子系统",data:null},{from:"12",to:"37",text:"子系统",data:null},{from:"12",to:"36",text:"子系统",data:null},{from:"13",to:"40",text:"子系统",data:null}],k={rootId:T,nodes:v,lines:b},w={style:{height:"calc(100vh - 50px)"}},S=["onClick","onTouchend"],A={key:0},H={key:1},I=m({__name:"expand-holder-slot",setup(N){const r={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,defaultExpandHolderPosition:"right",useAnimationWhenExpanded:!0,reLayoutWhenExpandedOrCollapsed:!0,useAnimationWhenRefresh:!1,debug:!1,layouts:[{label:"Center",layoutName:"center",from:"top",layoutClassName:"seeks-layout-center",defaultExpandHolderPosition:"hide",defaultJunctionPoint:"border"}]},o=f(null);c(()=>{i()});const i=async()=>{const n=k,t=o.value.getInstance();await t.setJsonData(n),await t.moveToCenter(),await t.zoomToFit()};return(n,t)=>(a(),e("div",null,[l("div",w,[p(_(g),{ref_key:"graphRef",ref:o,options:r},{"node-expand-holder":h(({expandHolderPosition:s,expandButtonClass:x,color:R,expandOrCollapseNode:d})=>[l("div",{class:C([["c-expand-positon-"+s],"c-btn-open-close"])},[l("span",{class:"my-expand-button",onClick:u(d,["stop"]),onTouchend:u(d,["stop"])},[x==="c-collapsed"?(a(),e("div",A," Close ")):(a(),e("div",H," Open "))],40,S)],2)]),_:1},512)])]))}});const P=y(I,[["__scopeId","data-v-ba01303d"]]);export{P as default};
