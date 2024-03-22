import{M as b}from"./relation-graph-588d2e75.js";import{d as h,r as m,o as _,a as g,c as v,b as r,e as a,w as l,u as C,f as u,i as x,p as I,j as N}from"./index-e4516832.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const T=o=>(I("data-v-792528a7"),o=o(),N(),o),P={style:{height:"calc(100vh)"}},A={class:"c-my-panel"},E=T(()=>r("div",{class:"c-option-name"},"Expand to level:",-1)),W=h({__name:"open-by-level",setup(o){const f={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,useAnimationWhenRefresh:!1,useAnimationWhenExpanded:!0,reLayoutWhenExpandedOrCollapsed:!0,defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeBorderWidth:0,defaultLineShape:2,defaultNodeWidth:150,defaultNodeHeight:50,lineUseTextPath:!0,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center",levelDistance:"400,400,400,400"}]},n=m(2),s=m(),c=async()=>{const d={rootId:"2",nodes:[{id:"2",text:"ALTXX",data:null},{id:"3",text:"CH2 TTN",data:null},{id:"4",text:"CH1 AlCu",data:null},{id:"5",text:"MainFrame",data:null},{id:"6",text:"TestMainSys",data:null},{id:"7",text:"Automotive Parts",data:null},{id:"8",text:"Automotive Process",data:null},{id:"9",text:"Process Quality Inspection",data:null},{id:"10",text:"Zhuoli Manufacturing",data:null},{id:"11",text:"Piezoelectric Switch",data:null},{id:"12",text:"Electronic Products",data:null},{id:"13",text:"Integrated Circuit",data:null},{id:"14",text:"ArHigh",data:null},{id:"15",text:"ArLow",data:null},{id:"16",text:"ShowerHead",data:null},{id:"17",text:"CrypoPump",data:null},{id:"18",text:"DryPump",data:null},{id:"19",text:"Ti Target",data:null},{id:"20",text:"N2",data:null},{id:"21",text:"Shutter",data:null},{id:"22",text:"Cool Chbr",data:null},{id:"23",text:"Transfer Chbr",data:null},{id:"24",text:"Alignment Unit",data:null},{id:"25",text:"Gearbox",data:null},{id:"26",text:"Car Door Interior Waxing",data:null},{id:"27",text:"Raw Material Inspection",data:null},{id:"28",text:"Floor RTV Silicone Sealing",data:null},{id:"29",text:"Thermal Protection Welding",data:null},{id:"30",text:"Electric Heating Tube Wire Welding",data:null},{id:"31",text:"Temperature Controller Installation",data:null},{id:"32",text:"Steam Silicone Seat Assembly",data:null},{id:"33",text:"Temperature Debugging",data:null},{id:"34",text:"Plastic Shell of Piezoelectric Switch",data:null},{id:"35",text:"Switch Installation",data:null},{id:"36",text:"ASIC IC",data:null},{id:"37",text:"SENSOR",data:null},{id:"38",text:"CON",data:null},{id:"39",text:"Flash",data:null},{id:"40",text:"Flite",data:null}],lines:[{from:"2",to:"5",text:"Subsystem",data:null},{from:"2",to:"6",text:"Subsystem",data:null},{from:"2",to:"3",text:"Subsystem",data:null},{from:"2",to:"4",text:"Subsystem",data:null},{from:"3",to:"21",text:"Subsystem",data:null},{from:"3",to:"20",text:"Subsystem",data:null},{from:"3",to:"19",text:"Subsystem",data:null},{from:"4",to:"18",text:"Subsystem",data:null},{from:"4",to:"17",text:"Subsystem",data:null},{from:"4",to:"16",text:"Subsystem",data:null},{from:"4",to:"15",text:"Subsystem",data:null},{from:"4",to:"14",text:"Subsystem",data:null},{from:"5",to:"24",text:"Subsystem",data:null},{from:"5",to:"23",text:"Subsystem",data:null},{from:"5",to:"22",text:"Subsystem",data:null},{from:"6",to:"13",text:"Subsystem",data:null},{from:"6",to:"12",text:"Subsystem",data:null},{from:"6",to:"11",text:"Subsystem",data:null},{from:"6",to:"10",text:"Subsystem",data:null},{from:"6",to:"9",text:"Subsystem",data:null},{from:"6",to:"8",text:"Subsystem",data:null},{from:"6",to:"7",text:"Subsystem",data:null},{from:"7",to:"25",text:"Subsystem",data:null},{from:"8",to:"26",text:"Subsystem",data:null},{from:"9",to:"27",text:"Subsystem",data:null},{from:"10",to:"33",text:"Subsystem",data:null},{from:"10",to:"32",text:"Subsystem",data:null},{from:"10",to:"31",text:"Subsystem",data:null},{from:"10",to:"30",text:"Subsystem",data:null},{from:"10",to:"29",text:"Subsystem",data:null},{from:"10",to:"28",text:"Subsystem",data:null},{from:"11",to:"35",text:"Subsystem",data:null},{from:"11",to:"34",text:"Subsystem",data:null},{from:"12",to:"39",text:"Subsystem",data:null},{from:"12",to:"38",text:"Subsystem",data:null},{from:"12",to:"37",text:"Subsystem",data:null},{from:"12",to:"36",text:"Subsystem",data:null},{from:"13",to:"40",text:"Subsystem",data:null}]},e=s.value.getInstance();await e.setJsonData(d),await e.playShowEffect(),await i(n.value)},y=async()=>{await i(n.value)},i=async d=>{const e=s.value.getInstance();e.getNodes().forEach(t=>{t.expanded=!0}),e.getNodes().forEach(t=>{console.log(t.text,t.lot.level),Math.abs(t.lot.level)===d&&(t.expanded=!1)}),await e.doLayout()};return _(()=>{c()}),(d,e)=>{const t=x("el-radio-button"),p=x("el-radio-group");return g(),v("div",null,[r("div",P,[a(C(b),{ref_key:"graphRef",ref:s,options:f},{"graph-plug":l(()=>[r("div",A,[E,a(p,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=S=>n.value=S),size:"small",onChange:y},{default:l(()=>[a(t,{label:0},{default:l(()=>[u("Root Node Only")]),_:1}),a(t,{label:1},{default:l(()=>[u("1")]),_:1}),a(t,{label:2},{default:l(()=>[u("2")]),_:1}),a(t,{label:3},{default:l(()=>[u("3")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])])}}});const B=w(W,[["__scopeId","data-v-792528a7"]]);export{B as default};
