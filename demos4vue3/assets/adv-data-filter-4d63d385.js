import{M as C}from"./relation-graph-28379630.js";import{d as F}from"./Demo4AdvDataFilterData-1536767e.js";import{d as N,r,o as I,a as v,c as x,b as d,e as t,w as l,u as z,n as b,t as D,f as c,F as H,g as B,h as T,i as f,p as E,j as M}from"./index-f7176e57.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const y=u=>(E("data-v-fd8aa661"),u=u(),M(),u),A={style:{"margin-top":"0px",width:"calc(100% - 10px)",height:"calc(100vh - 60px)"}},J={style:{position:"absolute","z-index":"700",left:"20px",top:"20px",height:"110px","padding-top":"6px","padding-left":"30px","padding-right":"30px",border:"#efefef solid 1px",color:"#555555","border-radius":"10px","background-color":"rgba(255,255,255,0.79)","font-size":"12px"}},P={style:{}},R=y(()=>d("div",{style:{"line-height":"20px"}},"Node Filter:",-1)),j=y(()=>d("div",{style:{"line-height":"20px"}},"Relation Filter:",-1)),G=N({__name:"adv-data-filter",setup(u){const k={debug:!1,defaultNodeBorderWidth:0,defaultNodeColor:"rgba(238, 178, 94, 1)",allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineShape:1,layouts:[{label:"Auto Layout",layoutName:"force",layoutClassName:"seeks-layout-force"}],defaultJunctionPoint:"border"},g=r(null);r(!0),r("---");const p=r(""),_=r(""),m=r(["师生","上下级","亲戚","情人","朋友","夫妻","勾结","腐化","举报"]),V=r(["师生","上下级","亲戚","情人","朋友","夫妻","勾结","腐化","举报"]);I(()=>{S()});const S=()=>{const i=F,a=g.value.getInstance();a.setJsonData(i).then(()=>{a.moveToCenter(),a.zoomToFit()})},h=()=>{const i=g.value.getInstance(),a=i.getNodes(),s=i.getLinks();a.forEach(n=>{let e=!1;p.value!==""&&n.data.sexType!==p.value&&(e=!0),_.value!==""&&n.data.isGoodMan!==_.value&&(e=!0),n.opacity=e?.1:1}),s.forEach(n=>{n.relations.forEach(e=>{m.value.indexOf(e.data.type)===-1?e.isHide||(e.isHide=!0,console.log("Hide line:",e)):e.isHide&&(e.isHide=!1,console.log("Show line:",e))})}),i.dataUpdated()};return(i,a)=>{const s=f("el-radio-button"),n=f("el-radio-group"),e=f("el-checkbox"),w=f("el-checkbox-group");return v(),x("div",null,[d("div",A,[t(z(C),{ref_key:"graphRef",ref:g,options:k},{node:l(({node:o})=>[d("div",{class:"my-node-style",style:b({"background-image":"url("+o.data.icon+")"})},null,4),d("div",{class:"c-node-name",style:b({color:o.color})},D(o.text),5)]),"graph-plug":l(()=>[d("div",J,[d("div",P,[R,t(n,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=o=>p.value=o),size:"small",onChange:h},{default:l(()=>[t(s,{label:""},{default:l(()=>[c("All")]),_:1}),t(s,{label:"male"}),t(s,{label:"female"})]),_:1},8,["modelValue"]),c("      "),t(n,{modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=o=>_.value=o),size:"small",style:{"margin-left":"50px"},onChange:h},{default:l(()=>[t(s,{label:""},{default:l(()=>[c("All")]),_:1}),t(s,{label:!0},{default:l(()=>[c("Positive")]),_:1}),t(s,{label:!1},{default:l(()=>[c("Negative")]),_:1})]),_:1},8,["modelValue"])]),d("div",null,[j,t(w,{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=o=>m.value=o),onChange:h},{default:l(()=>[(v(!0),x(H,null,B(V.value,o=>(v(),T(e,{key:o,label:o},null,8,["label"]))),128))]),_:1},8,["modelValue"])])])]),_:1},512)])])}}});const K=U(G,[["__scopeId","data-v-fd8aa661"]]);export{K as default};
