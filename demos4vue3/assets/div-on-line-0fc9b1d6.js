import{M as V}from"./relation-graph-de73bd62.js";import{d as w,r as d,o as A,a as O,c as T,b as c,e as n,w as t,u as R,k as z,n as E,f as l,i as v,p as B,j as H}from"./index-e1681cb0.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const L=f=>(B("data-v-bb4172fa"),f=f(),H(),f),U={style:{height:"calc(100vh - 60px)"}},W={class:"c-my-panel"},$=L(()=>c("div",{class:"c-option-name",style:{"line-height":"20px"}},[l(" Please try clicking on the line or the text of the line to change the selected line, or try changing the shape of the line or moving the node's position. "),c("br"),l(" Please try clicking on the line or the text of the line to change the selected line, or try changing the shape of the line or moving the node's position. ")],-1)),G=L(()=>c("div",{class:"c-option-name"},"Line Shape:",-1)),j=L(()=>c("div",{class:"c-option-name"},"Div position on line:",-1)),F=w({__name:"div-on-line",setup(f){const I={backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,placeOtherGroup:!0,defaultJunctionPoint:"lr",defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:4,defaultLineShape:2,showLineLabel:!1,lineUseTextPath:!0,layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]};d(!0),d(!1);const m=d(2),_=d(!1),u=d(""),k=d(""),p=d(null),g=d(),x=d(),C=async()=>{var i;const e={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5"},{from:"2",to:"3"},{from:"2",to:"4"},{from:"3",to:"20"},{from:"4",to:"15"},{from:"4",to:"14"},{from:"5",to:"24"},{from:"5",to:"22"}]};e.lines.forEach(s=>{s.showEndArrow=!1,s.text="Line Text"});const o=(i=p.value)==null?void 0:i.getInstance();if(o){await o.setJsonData(e);const s=o.getLinks()[0];y(s.relations[0])}},S=()=>{console.log("updateDivPosition:",u.value),_.value=!!u.value,console.log("divStoped:",_.value)},P=()=>{var o;console.log("onLineClick:",g);const e=(o=p.value)==null?void 0:o.getInstance();e&&(e.options.defaultLineShape=m.value,setTimeout(()=>{b(g.value,x.value)},300))},N=()=>{console.log("onNodeDragEnd:"),D()},y=(e,o,i)=>{console.log("onLineClick:",e),g.value=e,x.value=e,b(e)},D=()=>{var o;console.log("moveDivOnCheckedLine:");const e=(o=p.value)==null?void 0:o.getInstance();if(e)if(e.options.checkedLineId){const i=e.getLinkByLineId(e.options.checkedLineId);b(i.relations[0])}else console.log("checkedLineId is empty:",e.options.checkedLineId)},b=(e,o)=>{var s,a;console.log("playAnimation:",e);const i=(s=p.value)==null?void 0:s.getInstance();if(i){const h=`${i.options.instanceId}-${e.id}`;console.log("linePathRefId:",h);const r=(a=document.getElementById(h))==null?void 0:a.getAttribute("d");console.log("linePath:",r,e),k.value=`path("${r}")`}};return A(()=>{C()}),(e,o)=>{const i=v("el-button"),s=v("el-badge"),a=v("el-radio-button"),h=v("el-radio-group");return O(),T("div",null,[c("div",U,[n(R(V),{ref_key:"graphRef",ref:p,options:I,onLineClick:y,onNodeDragEnd:N},{"canvas-plug":t(()=>[c("div",{class:z(["div-on-line",{"div-on-line-stoped":_.value}]),style:E({offsetPath:k.value,offsetDistance:_.value?u.value:void 0})},[n(s,{value:200,max:99,class:"item"},{default:t(()=>[n(i,{size:"small"},{default:t(()=>[l("H5 DIV")]),_:1})]),_:1})],6)]),"graph-plug":t(()=>[c("div",W,[$,c("div",null,[G,n(h,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=r=>m.value=r),size:"mini",onChange:P},{default:t(()=>[n(a,{label:1},{default:t(()=>[l("Shape 1")]),_:1}),n(a,{label:2},{default:t(()=>[l("Shape 2")]),_:1}),n(a,{label:4},{default:t(()=>[l("Shape 4")]),_:1}),n(a,{label:5},{default:t(()=>[l("Shape 5")]),_:1}),n(a,{label:6},{default:t(()=>[l("Shape 6")]),_:1})]),_:1},8,["modelValue"]),j,n(h,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=r=>u.value=r),size:"mini",onChange:S},{default:t(()=>[n(a,{label:""},{default:t(()=>[l("move")]),_:1}),n(a,{label:"0%"},{default:t(()=>[l("0%")]),_:1}),n(a,{label:"20%"},{default:t(()=>[l("20%")]),_:1}),n(a,{label:"50%"},{default:t(()=>[l("50%")]),_:1}),n(a,{label:"70%"},{default:t(()=>[l("70%")]),_:1}),n(a,{label:"100%"},{default:t(()=>[l("100%")]),_:1})]),_:1},8,["modelValue"])])])]),_:1},512)])])}}});const K=M(F,[["__scopeId","data-v-bb4172fa"]]);export{K as default};
