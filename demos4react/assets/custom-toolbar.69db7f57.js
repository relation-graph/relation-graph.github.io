import{r as m,a as r}from"./index.7473cb17.js";import{u as d}from"./relation-graph.26f01d58.js";import l from"./VipDiyToolBarSlot1.98ac9ff2.js";import"./index.e712a3dd.js";const b=()=>{const s=m.exports.useRef(null);m.exports.useEffect(()=>{x()},[]);const a={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,defaultExpandHolderPosition:"right",useAnimationWhenExpanded:!0,useAnimationWhenRefresh:!0,reLayoutWhenExpandedOrCollapsed:!0,defaultNodeShape:1,defaultNodeBorderWidth:0,defaultLineShape:2,defaultNodeWidth:150,defaultNodeHeight:50,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center",levelDistance:"400,400,400,400"}]},x=async()=>{var o;const e={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"6",text:"TestMainSys"},{id:"7",text:"Automotive Parts"},{id:"8",text:"Automotive Technology"},{id:"9",text:"Process Quality Inspection"},{id:"10",text:"Zhuoli Manufacturing"},{id:"11",text:"Piezoelectric Switch"},{id:"12",text:"Electronic Products"},{id:"13",text:"Integrated Circuit"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"16",text:"ShowerHead"},{id:"17",text:"CrypoPump"},{id:"18",text:"DryPump"},{id:"19",text:"Ti Target"},{id:"20",text:"N2"},{id:"21",text:"Shutter"},{id:"22",text:"Cool Chbr"},{id:"23",text:"Transfer Chbr"},{id:"24",text:"Alignment Unit"},{id:"25",text:"Gearbox"},{id:"26",text:"Car Door Interior Waxing"},{id:"27",text:"Raw Material Inspection"},{id:"28",text:"Floor RTV Silicone Sealing"},{id:"29",text:"Thermal Protection Welding"},{id:"30",text:"Electric Heating Tube Wire Welding"},{id:"31",text:"Temperature Controller Installation"},{id:"32",text:"Steam Silicone Seat Assembly"},{id:"33",text:"Temperature Debugging"},{id:"34",text:"Plastic Shell of Piezoelectric Switch"},{id:"35",text:"Switch Installation"},{id:"36",text:"ASIC IC"},{id:"37",text:"SENSOR"},{id:"38",text:"CON"},{id:"39",text:"Flash"},{id:"40",text:"Flite"}],lines:[{from:"2",to:"5",text:"Subsystem"},{from:"2",to:"6",text:"Subsystem"},{from:"2",to:"3",text:"Subsystem"},{from:"2",to:"4",text:"Subsystem"},{from:"3",to:"21",text:"Subsystem"},{from:"3",to:"20",text:"Subsystem"},{from:"3",to:"19",text:"Subsystem"},{from:"4",to:"18",text:"Subsystem"},{from:"4",to:"17",text:"Subsystem"},{from:"4",to:"16",text:"Subsystem"},{from:"4",to:"15",text:"Subsystem"},{from:"4",to:"14",text:"Subsystem"},{from:"5",to:"24",text:"Subsystem"},{from:"5",to:"23",text:"Subsystem"},{from:"5",to:"22",text:"Subsystem"},{from:"6",to:"13",text:"Subsystem"},{from:"6",to:"12",text:"Subsystem"},{from:"6",to:"11",text:"Subsystem"},{from:"6",to:"10",text:"Subsystem"},{from:"6",to:"9",text:"Subsystem"},{from:"6",to:"8",text:"Subsystem"},{from:"6",to:"7",text:"Subsystem"},{from:"7",to:"25",text:"Subsystem"},{from:"8",to:"26",text:"Subsystem"},{from:"9",to:"27",text:"Subsystem"},{from:"10",to:"33",text:"Subsystem"},{from:"10",to:"32",text:"Subsystem"},{from:"10",to:"31",text:"Subsystem"},{from:"10",to:"30",text:"Subsystem"},{from:"10",to:"29",text:"Subsystem"},{from:"10",to:"28",text:"Subsystem"},{from:"11",to:"35",text:"Subsystem"},{from:"11",to:"34",text:"Subsystem"},{from:"12",to:"39",text:"Subsystem"},{from:"12",to:"38",text:"Subsystem"},{from:"12",to:"37",text:"Subsystem"},{from:"12",to:"36",text:"Subsystem"},{from:"13",to:"40",text:"Subsystem"}]},t=(o=s.current)==null?void 0:o.getInstance();await(t==null?void 0:t.setJsonData(e)),await(t==null?void 0:t.moveToCenter()),await(t==null?void 0:t.zoomToFit()),await u()},i=async e=>{if(e.lot.childs.length===0)return;await s.current.getInstance().expandNode(e);for(let o=0;o<e.lot.childs.length;o++){const n=e.lot.childs[o];await i(n)}},u=async()=>{const e=s.current.getInstance();e==null||e.graphData.nodes.forEach(t=>{t.lot.childs.length>0&&(t.expanded=!1)}),await i(e.graphData.rootNode)};return r("div",{children:r("div",{style:{height:"100vh"},children:r(d,{ref:s,options:a,toolBarSlot:l})})})};export{b as default};
