import{M as c}from"./relation-graph-de73bd62.js";import l from"./VipObjectEditToolBar-9229be27.js";import{d,r as _,o as p,a as h,c as f,b as m,e as n,w as u,u as r}from"./index-e1681cb0.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./CircumIcons-9a63d43b.js";const x={style:{height:"calc(100vh - 50px)"}},b=d({__name:"object-edit",setup(g){const i={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border"},o=_();p(()=>{s()});const s=async()=>{var a;const e={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"Relation 1",color:"#43a2f1"},{from:"a",to:"c",text:"Relation 2"},{from:"a",to:"e",text:"Relation 3"},{from:"b",to:"e",text:"",color:"#67C23A"}]},t=(a=o.value)==null?void 0:a.getInstance();t&&(await t.setJsonData(e),await t.moveToCenter(),await t.zoomToFit())};return(e,t)=>(h(),f("div",null,[m("div",x,[n(r(c),{ref_key:"graphRef",ref:o,options:i},{"tool-bar":u(()=>[n(r(l))]),_:1},512)])]))}});const j=w(b,[["__scopeId","data-v-229a657a"]]);export{j as default};
