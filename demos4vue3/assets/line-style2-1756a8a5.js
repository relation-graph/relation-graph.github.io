import{M as x}from"./relation-graph-bae0ebdb.js";import{s as y}from"./CircumIcons-67a87dbf.js";import{d as g,r as _,o as v,a as S,c as w,b as l,e as t,w as o,u as p,k as R,f as i,i as f,p as C,j as N}from"./index-bbffd316.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const k=n=>(C("data-v-e357ad58"),n=n(),N(),n),I={class:"c-round",style:{width:"70px",height:"70px"}},P={class:"c-my-panel"},V=k(()=>l("div",{class:"c-option-name"}," Line style when selected: ",-1)),z=g({__name:"line-style2",setup(n){const s=_(""),u={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"transparent",defaultNodeBorderWidth:0,defaultNodeBorderColor:"transparent",defaultNodeFontColor:"#ffffff",defaultNodeShape:0,toolBarDirection:"h",toolBarPositionH:"right",toolBarPositionV:"bottom",defaultPloyLineRadius:10,defaultLineShape:6,defaultJunctionPoint:"lr",disableNodeClickEffect:!0,lineUseTextPath:!0,layout:{layoutName:"tree",from:"left",min_per_width:310,min_per_height:70}},r=_();v(()=>{m()});const m=async()=>{var e;const c={rootId:"a",nodes:[{id:"a",text:"a",data:{icon:"align_bottom"}},{id:"b",text:"b",data:{icon:"basketball"}},{id:"b1",text:"b1",data:{icon:"bowl_noodles"}},{id:"b2",text:"b2",data:{icon:"delivery_truck"}},{id:"b2-1",text:"b2-1",data:{icon:"fries"}},{id:"b2-2",text:"b2-2",data:{icon:"microchip"}},{id:"c",text:"c",data:{icon:"satellite_1"}},{id:"c1",text:"c1",data:{icon:"brightness_up"}},{id:"c2",text:"c2",data:{icon:"burger"}},{id:"c3",text:"c3",data:{icon:"cloud_drizzle"}}],lines:[{from:"a",to:"b",text:"Relation description"},{from:"b",to:"b1",text:"Relation description"},{from:"b",to:"b2",text:"Relation description"},{from:"b2",to:"b2-1",text:"Relation description"},{from:"b2",to:"b2-2",text:"Relation description"},{from:"a",to:"c",text:"Relation description"},{from:"c",to:"c1",text:"Relation description"},{from:"c",to:"c2",text:"Relation description"},{from:"c",to:"c3",text:"Relation description"}]},a=(e=r.value)==null?void 0:e.getInstance();a&&(await a.setJsonData(c),await a.moveToCenter(),await a.zoomToFit())},b=()=>{};return(c,a)=>{const e=f("el-radio-button"),h=f("el-radio-group");return S(),w("div",null,[l("div",{ref:"myPage",class:R(["my-graph",["my-line-style-"+s.value]]),style:{height:"calc(100vh - 60px)"}},[t(p(x),{ref_key:"graphRef",ref:r,options:u},{node:o(({node:d})=>[l("div",I,[t(p(y),{color:"#ffffff",size:"70px",name:d.data.icon},null,8,["name"])])]),"graph-plug":o(()=>[l("div",P,[V,t(h,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=d=>s.value=d),size:"small",onChange:b},{default:o(()=>[t(e,{label:""},{default:o(()=>[i("Default")]),_:1}),t(e,{label:"1"},{default:o(()=>[i("Style 1")]),_:1}),t(e,{label:"2"},{default:o(()=>[i("Style 2")]),_:1}),t(e,{label:"3"},{default:o(()=>[i("Style 3")]),_:1}),t(e,{label:"4"},{default:o(()=>[i("Style 4")]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)],2)])}}});const M=B(z,[["__scopeId","data-v-e357ad58"]]);export{M as default};
