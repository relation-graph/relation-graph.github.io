import{k as V}from"./relation-graph-4b768e87.js";import{d as w,r as d,o as A,a as T,c as R,b as c,e as n,w as t,u as z,k as E,n as O,f as l,i as m,p as B,j as H}from"./index-ee818b67.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const k=_=>(B("data-v-6e88052d"),_=_(),H(),_),W={style:{height:"calc(100vh - 60px)"}},$={class:"c-my-panel"},G=k(()=>c("div",{class:"c-option-name",style:{"line-height":"20px"}},[l(" Please try clicking on the line or the text of the line to change the selected line, or try changing the shape of the line or moving the node's position. "),c("br"),l(" Please try clicking on the line or the text of the line to change the selected line, or try changing the shape of the line or moving the node's position. ")],-1)),j=k(()=>c("div",{class:"c-option-name"},"Line Shape:",-1)),F=k(()=>c("div",{class:"c-option-name"},"Div position on line:",-1)),J=w({__name:"line-style-1",setup(_){const L={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,placeOtherGroup:!0,defaultJunctionPoint:"lr",defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:4,defaultLineShape:2,showLineLabel:!1,lineUseTextPath:!0,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]};d(!0),d(!1);const v=d(2),f=d(!1),u=d(""),b=d(""),p=d(null),g=d(),x=d(),C=async()=>{var s;const e={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5"},{from:"2",to:"3"},{from:"2",to:"4"},{from:"3",to:"20"},{from:"4",to:"15"},{from:"4",to:"14"},{from:"5",to:"24"},{from:"5",to:"22"}]};e.lines.forEach(i=>{i.showEndArrow=!1,i.text="Line Text"});const o=(s=p.value)==null?void 0:s.getInstance();if(o){await o.setJsonData(e);const i=o.getLinks()[0];I(i.relations[0])}},S=()=>{console.log("updateDivPosition:",u.value),f.value=!!u.value,console.log("divStoped:",f.value)},P=()=>{var o;console.log("onLineClick:",g);const e=(o=p.value)==null?void 0:o.getInstance();e&&(e.options.defaultLineShape=v.value,setTimeout(()=>{y(g.value,x.value)},300))},N=()=>{console.log("onNodeDragEnd:"),D()},I=(e,o,s)=>{console.log("onLineClick:",e),g.value=e,x.value=e,y(e)},D=()=>{var o;console.log("moveDivOnCheckedLine:");const e=(o=p.value)==null?void 0:o.getInstance();if(e)if(e.options.checkedLineId){const s=e.getLinkByLineId(e.options.checkedLineId);y(s.relations[0])}else console.log("checkedLineId is empty:",e.options.checkedLineId)},y=(e,o)=>{var i,a;console.log("playAnimation:",e);const s=(i=p.value)==null?void 0:i.getInstance();if(s){const h=`${s.options.instanceId}-${e.id}`;console.log("linePathRefId:",h);const r=(a=document.getElementById(h))==null?void 0:a.getAttribute("d");console.log("linePath:",r,e),b.value=`path("${r}")`}};return A(()=>{C()}),(e,o)=>{const s=m("el-button"),i=m("el-badge"),a=m("el-radio-button"),h=m("el-radio-group");return T(),R("div",null,[c("div",W,[n(z(V),{ref_key:"graphRef",ref:p,options:L,onLineClick:I,onNodeDragEnd:N},{"canvas-plug":t(()=>[c("div",{class:E(["div-on-line",{"div-on-line-stoped":f.value}]),style:O({offsetPath:b.value,offsetDistance:f.value?u.value:void 0})},[n(i,{value:200,max:99,class:"item"},{default:t(()=>[n(s,{size:"small"},{default:t(()=>[l("H5 DIV")]),_:1})]),_:1})],6)]),"graph-plug":t(()=>[c("div",$,[G,c("div",null,[j,n(h,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=r=>v.value=r),size:"mini",onChange:P},{default:t(()=>[n(a,{label:1},{default:t(()=>[l("Shape 1")]),_:1}),n(a,{label:2},{default:t(()=>[l("Shape 2")]),_:1}),n(a,{label:4},{default:t(()=>[l("Shape 4")]),_:1}),n(a,{label:5},{default:t(()=>[l("Shape 5")]),_:1}),n(a,{label:6},{default:t(()=>[l("Shape 6")]),_:1})]),_:1},8,["modelValue"]),F,n(h,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=r=>u.value=r),size:"mini",onChange:S},{default:t(()=>[n(a,{label:""},{default:t(()=>[l("move")]),_:1}),n(a,{label:"0%"},{default:t(()=>[l("0%")]),_:1}),n(a,{label:"20%"},{default:t(()=>[l("20%")]),_:1}),n(a,{label:"50%"},{default:t(()=>[l("50%")]),_:1}),n(a,{label:"70%"},{default:t(()=>[l("70%")]),_:1}),n(a,{label:"100%"},{default:t(()=>[l("100%")]),_:1})]),_:1},8,["modelValue"])])])]),_:1},512)])])}}});const K=U(J,[["__scopeId","data-v-6e88052d"]]);export{K as default};
