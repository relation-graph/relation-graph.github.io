var d=Object.defineProperty;var p=(l,a,e)=>a in l?d(l,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[a]=e;var f=(l,a,e)=>(p(l,typeof a!="symbol"?a+"":a,e),e);import{b as h,z as x,M as y}from"./relation-graph-9cfe1c0d.js";import{d as m,r as i,o as _,a as g,c as L,b as w,e as b,u as C}from"./index-5e8eec4e.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const{RGNodesAnalytic:u}=x;class A extends h.FixedLayouter{constructor(e,s){super(e,s);f(this,"layoutOptions");this.layoutOptions=e,o("new CustomerLayouter:",this.layoutOptions)}async refresh(){o("CustomerLayouter:refresh:nodes:",this.allNodes.length),await this.placeNodes(this.allNodes,this.rootNode)}async placeNodes(e,s){if(o("CustomerLayouter:placeNodes"),s)o("layout by root:",s);else{console.error("root is null");return}this.rootNode=s,this.allNodes=e,o("allNodes:",e.length),e.forEach(t=>{t.lot.eached=!1,t.lot.notLeafNode=!1,t.lot.childs=[],t.lot.parent=void 0,t.lot.index_of_parent=0,t.lot.strength=0,t.lot.strengthWithChilds_from=0,t.lot.strengthWithChilds=0,t.lot.placed=!1});const r={x:-500,y:-500};for(let t=0;t<this.allNodes.length;t++){const n=this.allNodes[t];n.lot.x=r.x+t%3*300,n.lot.y=r.y+Math.floor(t/3)*300,o("n:",t,n.id,n.lot.x,n.lot.y)}o("allNodes:",this.allNodes.length,this.graphOptions.useAnimationWhenExpanded),this.graphOptions.useAnimationWhenExpanded?(o("Play layout animation....."),await this.animationLayout(),o("create rootNode coordinates:3",s.x,s.y)):(this.allNodes.forEach(t=>{if(t.fixed===!0){t.lot.placed=!0;return}u.isAllowShowNode(t)&&(Number.isNaN(t.lot.x)&&(o("bad lot x:",t.text,t.lot.x),t.lot.x=0),Number.isNaN(t.lot.y)&&(o("bad lot y:",t.text,t.lot.y),t.lot.y=0),t.x=u.getNodeXByLotX(this.graphOptions,t),t.y=u.getNodeYByLotY(this.graphOptions,t),t.lot.placed=!0,o("n:",t.id,t.x,t.y))}),o("create rootNode coordinates:1",s.x,s.y))}}const o=(...l)=>{console.log("[my-devlog]",...l)},O={style:{height:"calc(100vh - 50px)",position:"relative","font-size":"12px","line-height":"30px"}},T=m({__name:"customer-layout",setup(l){const a=i(null);i(-21),i(-4);const e={debug:!1,backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,useAnimationWhenRefresh:!1,placeOtherGroup:!0,defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:2,defaultLineShape:6,showLineLabel:!1,defaultLineTextOffset_x:-21,defaultLineTextOffset_y:-4,lineUseTextPath:!1,layouts:[{label:"中心",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]};_(()=>{s()});const s=async()=>{var n;const r={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5",text:"子系统",showEndArrow:!1},{from:"2",to:"3",text:"子系统",showEndArrow:!1},{from:"2",to:"4",text:"子系统",showEndArrow:!1},{from:"3",to:"20",text:"子系统"},{from:"4",to:"15",text:"子系统"},{from:"4",to:"14",text:"子系统"},{from:"5",to:"24",text:"子系统"},{from:"5",to:"22",text:"子系统"}]},t=(n=a.value)==null?void 0:n.getInstance();if(t){const c=new A({},t.options);await t.setLayouter(c),await t.setJsonData(r),await t.moveToCenter(),await t.zoomToFit()}};return(r,t)=>(g(),L("div",null,[w("div",O,[b(C(y),{ref_key:"graphRef",ref:a,options:e},null,512)])]))}});const z=v(T,[["__scopeId","data-v-31b23443"]]);export{z as default};
