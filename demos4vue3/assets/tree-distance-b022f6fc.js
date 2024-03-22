import{k as z}from"./relation-graph-4b768e87.js";import{d as T,r as n,o as B,a as w,c as N,l as O,e as l,w as f,u as L,m as E,b as a,i as v,p as H,j as P}from"./index-ee818b67.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const s=c=>(H("data-v-cdc086f8"),c=c(),P(),c),R={style:{height:"calc(100vh - 60px)"}},U={class:"c-my-panel"},j=s(()=>a("div",{style:{"padding-bottom":"10px",color:"#333333","font-size":"14px"}},"The graph will automatically adjust the horizontal and vertical distances based on the current visible range, and the graph will try to make the graph look stretched without exceeding the visible range. When the calculated distance of the graph is less than the set minimum value, the set minimum value will take effect; when the calculated maximum value of the graph is greater than the set maximum value, the set maximum value will take effect. You can try setting the minimum and maximum values of the horizontal and vertical distances multiple times to feel the trade-off relationship.",-1)),J=s(()=>a("div",{class:"c-option-name"},"Horizontal distance between nodes [minimum] - [maximum]:",-1)),Y=s(()=>a("div",{class:"c-option-name"},"Vertical distance between nodes [minimum] - [maximum]:",-1)),A={style:{"font-size":"14px"}},F=s(()=>a("div",{style:{"padding-bottom":"10px",color:"#333333"}},"You can set the distance for each level, for example: 400,200,300,500 means the distance between the root node and the first level is 400, the distance between the first level and the second level is 200, the distance between the second level and the third level is 300, and the distance between the third level and the fourth level is 500. If this option has a value, it takes precedence over the setting of horizontal/vertical distance.",-1)),G=s(()=>a("div",{style:{"padding-bottom":"10px",color:"#ff0000"}},"Note: In the tree layout from left to right shown below, the level distance of the first level is 200, which means the distance between the leftmost node of the first level and the previous level (in this case, the 0th level, which is the root node) node on the leftmost side.",-1)),M=s(()=>a("span",{class:"c-label"},"Set the distance for each level:",-1)),$=T({__name:"tree-distance",setup(c){const d=n(),b=n(!0);n("---");const r=n("case1"),h=n([100,300]),u=n([20,100]),m=n("200, 300, 400, 500, 500, 500, 500"),i={debug:!1,layout:{label:"Tree",layoutName:"tree",layoutClassName:"seeks-layout-center",from:"left",min_per_width:void 0,max_per_width:300,min_per_height:40,max_per_height:void 0,levelDistance:""},defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeWidth:40,defaultNodeHeight:40,defaultLineShape:4,defaultNodeBorderWidth:0,defaultPolyLineRadius:15,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"},g={debug:!1,layout:{label:"Tree",layoutName:"tree",layoutClassName:"seeks-layout-center",from:"left",min_per_width:void 0,max_per_width:300,min_per_height:40,max_per_height:void 0,levelDistance:""},defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeWidth:40,defaultNodeHeight:40,defaultPolyLineRadius:15,defaultLineShape:4,defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"},C=async()=>{const t={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"b2-2-1",text:"b2-2-1"},{id:"b2-2-2",text:"b2-2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c2-1",text:"c2-1"},{id:"c2-2",text:"c2-2"},{id:"c2-2-1",text:"c2-2-1"},{id:"c2-2-2",text:"c2-2-2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"b2-2",to:"b2-2-1"},{from:"b2-2",to:"b2-2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c2",to:"c2-1"},{from:"c2",to:"c2-2"},{from:"c2-2",to:"c2-2-1"},{from:"c2-2",to:"c2-2-2"},{from:"c",to:"c3"}]};console.log(JSON.stringify(t)),b.value=!1;const e=d.value.getInstance();await e.setJsonData(t),await e.moveToCenter(),await e.zoomToFit()},I=(t,e)=>{console.log("onNodeExpand:",t),d.value.getInstance().refresh()},_=async()=>{i.layout.min_per_width=h.value[0],i.layout.max_per_width=h.value[1],i.layout.min_per_height=u.value[0],i.layout.max_per_height=u.value[1];const t=d.value.getInstance();await t.setOptions(i),await t.refresh()},x=async()=>{let t=[];try{t=m.value.split(",")}catch{return}g.layout.levelDistance=m.value;const e=d.value.getInstance();await e.setOptions(g),await e.refresh()},V=()=>{console.log("activeTabName:",r.value),r.value==="case2"?x():_()};return B(()=>{C()}),(t,e)=>{const p=v("el-slider"),y=v("el-tab-pane"),k=v("el-input"),S=v("el-tabs"),D=E("loading");return w(),N("div",null,[O((w(),N("div",R,[l(L(z),{ref_key:"graphRef",ref:d,options:i,"on-node-expand":I},{"graph-plug":f(()=>[a("div",U,[l(S,{modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=o=>r.value=o),onTabChange:V},{default:f(()=>[l(y,{label:"Set by horizontal/vertical range",name:"case1"},{default:f(()=>[a("div",null,[j,J,l(p,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=o=>h.value=o),range:"",max:500,onChange:_},null,8,["modelValue"])]),a("div",null,[Y,l(p,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=o=>u.value=o),range:"",max:500,onChange:_},null,8,["modelValue"])])]),_:1}),l(y,{label:"Set by fixed level distance",name:"case2"},{default:f(()=>[a("div",A,[F,G,M,l(k,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=o=>m.value=o),placeholder:"Please enter content",onChange:x},null,8,["modelValue"])])]),_:1})]),_:1},8,["modelValue"])])]),_:1},512)])),[[D,b.value]])])}}});const X=W($,[["__scopeId","data-v-cdc086f8"]]);export{X as default};
