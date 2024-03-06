import{M as b}from"./relation-graph-bae0ebdb.js";import{d as u,r as g,o as _,a as s,c as r,b as e,f as i,e as l,w as m,u as x,i as c,t as v}from"./index-bbffd316.js";const y={style:{height:"200px",overflow:"auto","padding-left":"30px","border-bottom":"#efefef solid 1px","padding-top":"10px"}},w=e("div",{style:{"font-size":"16px","font-weight":"bold"}},"API",-1),I={key:0,style:{"font-size":"12px","padding-left":"20px","line-height":"25px"}},C=e("div",null,"Please refer to the following declaration file: node_modules/relation-graph/types/${vue2/vue3/react}.d.ts",-1),N=e("div",{style:{"font-size":"12px","font-weight":"bold"}},"relation-graph Component API",-1),R=e("div",null,"Component interface methods: Refer to the type RelationGraphComponent defined in ${vue2/vue3/react}.d.ts (i.e., the object obtained through graphRef.current)",-1),P=e("div",{style:{"font-size":"12px","font-weight":"bold"}},"relation-graph Graph instance API",-1),z=e("div",null,"Graph instance interface methods: Refer to the type RelationGraphInstance defined in ${vue2/vue3/react}.d.ts (i.e., the object obtained through graphRef.current.getInstance())",-1),A=[C,N,R,P,z],G={key:1,style:{"font-size":"12px","padding-left":"20px","line-height":"25px"}},k=e("div",null,"Please refer to the following declaration file: node_modules/relation-graph/types/${vue2/vue3/react}.d.ts",-1),T=e("div",{style:{"font-size":"12px","font-weight":"bold"}},"relation-graph Component API",-1),E=e("div",null,"Component interface methods: Refer to the type RelationGraphComponent defined in ${vue2/vue3/react}.d.ts (i.e., the object obtained through graphRef.current)",-1),$=e("div",{style:{"font-size":"12px","font-weight":"bold"}},"relation-graph Graph instance API",-1),j=e("div",null,"Graph instance interface methods: Refer to the type RelationGraphInstance defined in ${vue2/vue3/react}.d.ts (i.e., the object obtained through graphRef.current.getInstance())",-1),B={style:{height:"40px","padding-left":"20px","padding-top":"5px","border-bottom":"#efefef solid 1px"}},W={style:{height:"calc(100vh - 300px)"}},S=u({__name:"graph-instance-api",setup(H){const d=g(),h={layouts:[{label:"Center",layoutName:"tree",layoutClassName:"seeks-layout-center",from:"left",min_per_width:300,min_per_height:100}],defaultNodeShape:1,defaultNodeWidth:100,defaultLineShape:2,defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)",defaultNodeHeight:30,defaultJunctionPoint:"lr",reLayoutWhenExpandedOrCollapsed:!0,defaultExpandHolderPosition:"right",zoomToFitWhenRefresh:!0,useAnimationWhenExpanded:!0,debug:!1};_(()=>{p()});const p=async()=>{const t={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"}]},o=d.value.getInstance();await o.setJsonData(t),await o.moveToCenter(),await o.zoomToFit()},f=async t=>{const o="a",n=d.value.getInstance(),a=n.getNodeById(o);a.expanded===!0?await n.collapseNode(a,t):await n.expandNode(a,t)};return(t,o)=>{const n=c("el-alert"),a=c("el-button");return s(),r("div",null,[e("div",y,[w,t.english?(s(),r("div",G,[k,i(),T,i(),E,i(),$,i(),j])):(s(),r("div",I,A)),l(n,{title:(t.english,"The following examples demonstrate the effect of expanding/collapsing a specific node by calling the API interface:"),type:"success",closable:!1,"show-icon":""},null,8,["title"])]),e("div",B,[l(a,{onClick:f,size:"small"},{default:m(()=>[i(v((t.english,"Expand node")),1)]),_:1})]),e("div",W,[l(x(b),{ref_key:"graphRef",ref:d,options:h},null,512)])])}}});export{S as default};
