import{s as c}from"./CircumIcons-6ed198d5.js";import{s as y,o as k}from"./relation-graph-9d2491ce.js";import{d as z,r as i,v as x,a as L,c as S,b as e,e as d,u as o,t as T,k as f,E as B,p as E,j,y as h}from"./index-f19b6715.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const l=r=>(E("data-v-26e01458"),r=r(),j(),r),O={style:{position:"absolute","z-index":"30",top:"10px",left:"40px",padding:"10px",width:"350px",height:"50px","background-color":"#ffffff",border:"#efefef solid 1px","box-shadow":"0 3px 9px rgba(0,21,41,.08)","border-radius":"10px"}},P=l(()=>e("span",{class:"c-mb-text"},"Save",-1)),F=l(()=>e("span",{class:"c-mb-text"},"Node",-1)),A=l(()=>e("span",{class:"c-mb-text"},"Line",-1)),W=l(()=>e("span",{class:"c-mb-text"},"Fit",-1)),Z=l(()=>e("span",{class:"c-mb-text"},"Refresh",-1)),D=z({__name:"VipObjectEditToolBar",setup(r){i(!1),i({x:0,y:0}),i(275);const v=i(1),g=i(1),w=h(y),_=h(k),u=x(()=>_&&_.options),n=x(()=>w.value),I=()=>{n.value.refresh()},b=async()=>{const t=n.value;await t.setZoom(100),await t.moveToCenter(),await t.zoomToFit()},N=t=>{n.value.startCreatingNodePlot(t,{templateText:"Node",templateStyleClass:"my-node-template",onCreateNode:(s,a)=>{console.log("New node:",s,a);const m=v.value++;n.value.addNodes([{id:"newNode-"+m,text:"New Node "+m,color:"#5da0f8",x:s,y:a}])}})},C=t=>{B({type:"success",message:"Click on a node to start creating a line!"}),n.value.startCreatingLinePlot(t,{template:{lineWidth:3,color:"#8080ff",text:"New Line"},onCreateLine:(s,a)=>{if(console.log("New line:",s,a),a.id){const m=g.value++;n.value.addLines([{from:s.id,to:a.id,lineWidth:3,color:"#8080ff",text:"New Line "+m}])}}})};return(t,p)=>(L(),S("div",O,[e("div",null,[e("div",{class:"c-mb-button",onClick:p[0]||(p[0]=(...s)=>t.onSave&&t.onSave(...s))},[d(o(c),{size:"20px",name:"cloud_on"}),P]),e("div",{class:"c-mb-button",style:{"line-height":"40px","font-size":"12px","text-align":"center"},onClick:b},T(o(u).canvasZoom)+"% ",1),e("div",{class:f(["c-mb-button c-mb-button-c",{"c-mb-button-on":o(u).creatingNodePlot}]),style:{width:"50px"},onClick:N},[d(o(c),{size:"20px",name:"circle_plus"}),F],2),e("div",{class:f(["c-mb-button c-mb-button-c",{"c-mb-button-on":o(u).creatingLinePlot}]),style:{width:"50px"},onClick:C},[d(o(c),{size:"20px",name:"route"}),A],2),e("div",{class:"c-mb-button",onClick:b},[d(o(c),{size:"20px",name:"maximize_2"}),W]),e("div",{class:"c-mb-button",onClick:I},[d(o(c),{size:"20px",name:"undo"}),Z])])]))}});const H=V(D,[["__scopeId","data-v-26e01458"]]);export{H as default};
