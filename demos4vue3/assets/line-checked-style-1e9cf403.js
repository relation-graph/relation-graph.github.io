import{M as p}from"./relation-graph-de73bd62.js";import{d as v,r as h,o as g,a as f,c as y,b as e,e as k,w as b,u as x,k as i,p as C,j as w}from"./index-e1681cb0.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const o=d=>(C("data-v-67c870ec"),d=d(),w(),d),I={class:"c-my-panel"},T=o(()=>e("div",{class:"c-theme-desc"}," Colors designed by professional designers: ",-1)),R={style:{padding:"10px"}},N=o(()=>e("div",{class:"c-option-name"},"Theme Color:",-1)),D={class:"c-themes"},$=o(()=>e("div",{class:"c-theme-color",style:{"background-color":"#5b05f1"}},null,-1)),L=o(()=>e("div",{class:"c-theme-name"},"Theme 1",-1)),M=[$,L],B=o(()=>e("div",{class:"c-theme-color",style:{"background-color":"#f105dd"}},null,-1)),z=o(()=>e("div",{class:"c-theme-name"},"Theme 2",-1)),E=[B,z],P=o(()=>e("div",{class:"c-theme-color",style:{"background-color":"#0395c2"}},null,-1)),V=o(()=>e("div",{class:"c-theme-name"},"Theme 3",-1)),J=[P,V],j=o(()=>e("div",{class:"c-theme-color",style:{"background-color":"#6cc004"}},null,-1)),A=o(()=>e("div",{class:"c-theme-name"},"Theme 4",-1)),F=[j,A],W=o(()=>e("div",{class:"c-theme-color",style:{"background-color":"#da8f04"}},null,-1)),G=o(()=>e("div",{class:"c-theme-name"},"Theme 5",-1)),O=[W,G],U=o(()=>e("div",{class:"c-theme-color",style:{"background-color":"#aaaaaa"}},null,-1)),q=o(()=>e("div",{class:"c-theme-name"},"Theme 6",-1)),H=[U,q],K=o(()=>e("div",{class:"c-theme-color",style:{"background-color":"rgba(79, 30, 30)"}},null,-1)),Q=o(()=>e("div",{class:"c-theme-name"},"Theme 7",-1)),X=[K,Q],Y=o(()=>e("div",{class:"c-theme-color",style:{"background-color":"#000000"}},null,-1)),Z=o(()=>e("div",{class:"c-theme-name"},"Theme 8",-1)),ee=[Y,Z],te=v({__name:"line-checked-style",setup(d){const a=h(),c=h("1"),m={debug:!0,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"auto",defaultNodeColor:"auto",defaultNodeBorderWidth:"auto",defaultNodeBorderColor:"auto",defaultNodeFontColor:"auto",defaultNodeShape:0,defaultPloyLineRadius:10,defaultLineShape:6,defaultJunctionPoint:"lr",lineUseTextPath:!0,allowShowDownloadButton:!1,useAnimationWhenRefresh:!1,layout:{layoutName:"tree",from:"left",min_per_width:310,min_per_height:70}},u=async()=>{const l={rootId:"a",nodes:[{id:"a",text:"a",data:{icon:"align_bottom"}},{id:"b",text:"b",data:{icon:"basketball"}},{id:"b1",text:"b1",data:{icon:"bowl_noodles"}},{id:"b2",text:"b2",data:{icon:"delivery_truck"}},{id:"b2-1",text:"b2-1",data:{icon:"fries"}},{id:"b2-2",text:"b2-2",data:{icon:"microchip"}},{id:"c",text:"c",data:{icon:"satellite_1"}},{id:"c1",text:"c1",data:{icon:"brightness_up"}},{id:"c2",text:"c2",data:{icon:"burger"}},{id:"c3",text:"c3",data:{icon:"cloud_drizzle"}}],lines:[{from:"a",to:"b",text:"Relation Description"},{from:"b",to:"b1",text:"Relation Description"},{from:"b",to:"b2",text:"Relation Description"},{from:"b2",to:"b2-1",text:"Relation Description"},{from:"b2",to:"b2-2",text:"Relation Description"},{from:"a",to:"c",text:"Relation Description"},{from:"c",to:"c1",text:"Relation Description"},{from:"c",to:"c2",text:"Relation Description"},{from:"c",to:"c3",text:"Relation Description"}]};await a.value.getInstance().setJsonData(l),n("1"),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(console.log("div entered fullscreen mode",document.fullscreenElement),a.value.$el===document.fullscreenElement&&(console.log("relation-graph is fullscreen!"),setTimeout(async()=>{await _(),console.log("relation-graph reset complete!")},500))):(console.log("div exited fullscreen mode"),setTimeout(async()=>{await _(),console.log("relation-graph reset complete!")},500))})},_=async()=>{const l=a.value.getInstance();await l.resetViewSize(),await l.refreshNVAnalysisInfo(),await l.moveToCenter(),await l.zoomToFit()},n=l=>{c.value=l;const t=a.value.getInstance(),s=t.getNodes(),r=t.getLinks();t.options.checkedNodeId=s[Math.floor(Math.random()*s.length)].id,t.options.checkedLineId=r[Math.floor(Math.random()*r.length)].relations[0].id,console.log(t.options.checkedLineId,t.options.checkedNodeId)};return g(()=>{u()}),(l,t)=>(f(),y("div",null,[e("div",{ref:"myPage",class:i(["my-graph",["my-theme-"+c.value]]),style:{height:"calc(100vh - 60px)"}},[k(x(p),{ref_key:"graphRef",ref:a,options:m},{"graph-plug":b(()=>[e("div",I,[T,e("div",R,[N,e("div",D,[e("div",{class:i(["c-theme-item",{"c-theme-item-checked":c.value==="1"}]),onClick:t[0]||(t[0]=s=>n("1"))},M,2),e("div",{class:i(["c-theme-item",{"c-theme-item-checked":c.value==="2"}]),onClick:t[1]||(t[1]=s=>n("2"))},E,2),e("div",{class:i(["c-theme-item",{"c-theme-item-checked":c.value==="3"}]),onClick:t[2]||(t[2]=s=>n("3"))},J,2),e("div",{class:i(["c-theme-item",{"c-theme-item-checked":c.value==="4"}]),onClick:t[3]||(t[3]=s=>n("4"))},F,2),e("div",{class:i(["c-theme-item",{"c-theme-item-checked":c.value==="5"}]),onClick:t[4]||(t[4]=s=>n("5"))},O,2),e("div",{class:i(["c-theme-item",{"c-theme-item-checked":c.value==="6"}]),onClick:t[5]||(t[5]=s=>n("6"))},H,2),e("div",{class:i(["c-theme-item",{"c-theme-item-checked":c.value==="7"}]),onClick:t[6]||(t[6]=s=>n("7"))},X,2),e("div",{class:i(["c-theme-item",{"c-theme-item-checked":c.value==="8"}]),onClick:t[7]||(t[7]=s=>n("8"))},ee,2)])])])]),_:1},512)],2)]))}});const ne=S(te,[["__scopeId","data-v-67c870ec"]]);export{ne as default};
