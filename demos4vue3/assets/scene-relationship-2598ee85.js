import{k as C}from"./relation-graph-585d193c.js";import{d as I}from"./Demo4AdvDataFilterData-1536767e.js";import{d as N,r,o as H,a as v,c as x,b as d,e as o,w as l,u as z,n as y,t as B,f as c,F,g as R,h as D,i as f,p as E,j as U}from"./index-5a571be1.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const b=p=>(E("data-v-94d52f3f"),p=p(),U(),p),J={style:{"margin-top":"0px",width:"calc(100% - 10px)",height:"calc(100vh - 60px)"}},P={style:{position:"absolute","z-index":"700",left:"20px",top:"20px",height:"110px","padding-top":"6px","padding-left":"30px","padding-right":"30px",border:"#efefef solid 1px",color:"#555555","border-radius":"10px","background-color":"rgba(255,255,255,0.79)","font-size":"12px"}},T={style:{}},j=b(()=>d("div",{style:{"line-height":"20px"}},"Node Filter:",-1)),G=b(()=>d("div",{style:{"line-height":"20px"}},"Relation Filter:",-1)),M=N({__name:"scene-relationship",setup(p){const k={debug:!1,defaultNodeBorderWidth:0,defaultNodeColor:"rgba(238, 178, 94, 1)",allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineShape:1,layouts:[{label:"Auto Layout",layoutName:"force",layoutClassName:"seeks-layout-force"}],defaultJunctionPoint:"border"},g=r(),u=r(""),_=r(""),m=r(["师生","上下级","亲戚","情人","朋友","夫妻","勾结","腐化","举报"]),V=r(["师生","上下级","亲戚","情人","朋友","夫妻","勾结","腐化","举报"]);H(()=>{w()});const w=async()=>{const i=I;await g.value.getInstance().setJsonData(i)},h=()=>{const i=g.value.getInstance(),t=i.getNodes(),n=i.getLinks();t.forEach(s=>{let e=!1;u.value!==""&&s.data.sexType!==u.value&&(e=!0),_.value!==""&&s.data.isGoodMan!==_.value&&(e=!0),s.opacity=e?.1:1}),n.forEach(s=>{s.relations.forEach(e=>{m.value.indexOf(e.data.type)===-1?e.isHide||(e.isHide=!0,console.log("Hide line:",e)):e.isHide&&(e.isHide=!1,console.log("Show line:",e))})}),i.dataUpdated()};return(i,t)=>{const n=f("el-radio-button"),s=f("el-radio-group"),e=f("el-checkbox"),S=f("el-checkbox-group");return v(),x("div",null,[d("div",J,[o(z(C),{ref_key:"graphRef",ref:g,options:k},{node:l(({node:a})=>[d("div",{class:"my-node-style",style:y({"background-image":"url("+a.data.icon+")"})},null,4),d("div",{class:"c-node-name",style:y({color:a.color})},B(a.text),5)]),"graph-plug":l(()=>[d("div",P,[d("div",T,[j,o(s,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=a=>u.value=a),size:"mini",onChange:h},{default:l(()=>[o(n,{label:""},{default:l(()=>[c("All")]),_:1}),o(n,{label:"male"}),o(n,{label:"female"})]),_:1},8,["modelValue"]),c("      "),o(s,{modelValue:_.value,"onUpdate:modelValue":t[1]||(t[1]=a=>_.value=a),size:"mini",style:{"margin-left":"50px"},onChange:h},{default:l(()=>[o(n,{label:""},{default:l(()=>[c("All")]),_:1}),o(n,{label:!0},{default:l(()=>[c("Positive")]),_:1}),o(n,{label:!1},{default:l(()=>[c("Negative")]),_:1})]),_:1},8,["modelValue"])]),d("div",null,[G,o(S,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=a=>m.value=a),onChange:h},{default:l(()=>[(v(!0),x(F,null,R(V.value,a=>(v(),D(e,{key:a,label:a},null,8,["label"]))),128))]),_:1},8,["modelValue"])])])]),_:1},512)])])}}});const K=A(M,[["__scopeId","data-v-94d52f3f"]]);export{K as default};
