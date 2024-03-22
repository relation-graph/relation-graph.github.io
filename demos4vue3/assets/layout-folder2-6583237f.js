import{M as x}from"./relation-graph-588d2e75.js";import{d as C,r as y,o as _,a as o,c as d,b as a,e as T,w as r,u as S,t as c,F as m,g as f,p as v,j as N,f as l}from"./index-e4516832.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const u=n=>(v("data-v-76d48594"),n=n(),N(),n),B={style:{}},G={style:{height:"calc(100vh)"}},b={class:"my-card-node"},j=u(()=>a("div",{class:"card-left"},null,-1)),w={class:"card-right"},I={class:"card-name"},J={class:"card-tags"},L={class:"card-location"},A=u(()=>a("div",{class:"c-my-panel"},[a("div",{class:"c-option-name",style:{"line-height":"25px",padding:"0px",width:"300px"}},[l(" 这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。 "),a("br"),l(" 直接使用tree数据结构有明显的确缺陷：只能设置全局的线条默认样式，无法对具体的link设置属性，不能精细的定义线条的样式。 ")])],-1)),D=C({__name:"layout-folder2",setup(n){const h={debug:!1,layout:{layoutName:"folder",from:"left",min_per_width:100,min_per_height:80,max_per_height:80},defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultLineShape:41,defaultPolyLineRadius:4,defaultBottomJuctionPoint_X:28,defaultJunctionPoint:"lr",defaultNodeBorderWidth:0,defaultLineColor:"#cccccc",defaultNodeColor:"#333333",reLayoutWhenExpandedOrCollapsed:!0},s=y(),p=async()=>{const g=[{id:"a",text:"Tian Technology Co., Ltd.",data:{tags:["Tag1","Tag2","Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."},children:[{id:"b",text:"Beijing Tianxing Company",data:{tags:["Tag1","Tag2","Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."},children:[{id:"b1",text:"Beijing Tianxing A Company",data:{tags:["Tag2","Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."},children:[{id:"b1-1",text:"Beijing Tianxing A 1 Company",data:{tags:["Tag1"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}},{id:"b1-2",text:"Beijing Tianxing A 2 Company",data:{tags:["Tag2"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}},{id:"b1-3",text:"Beijing Tianxing A 3 Company",data:{tags:["Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}},{id:"b1-4",text:"Beijing Tianxing A 4 Company",data:{tags:["Tag1","Tag2"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}},{id:"b1-5",text:"Beijing Tianxing A 5 Company",data:{tags:["Tag1","Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}},{id:"b1-6",text:"Beijing Tianxing A 6 Company",data:{tags:["Tag2","Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}}]},{id:"b2",text:"Beijing Tianxing B Company",data:{tags:["Tag2","Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."},children:[{id:"b2-1",text:"Beijing Tianxing B 33 Company",data:{tags:["Tag1","Tag2"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}},{id:"b2-2",text:"Beijing Tianxing B 33 Company",data:{tags:["Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}}]}]},{id:"c",text:"Chengdu Tianxing Company",data:{tags:["Tag1","Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."},children:[{id:"c1",text:"Chengdu Tianxing 1 Company",data:{tags:["Tag1"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}},{id:"c2",text:"Chengdu Tianxing 3 Company",data:{tags:["Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}},{id:"c3",text:"Chengdu Tianxing 3 Company",data:{tags:["Tag3"],location:"No. 99, Guixi Street, Chengdu City, Sichuan Province."}}]}]}],i=s.value.getInstance(),t={rootId:"a",nodes:[],lines:[]};i.flatNodeData(g,null,t.nodes,t.lines),t.lines.forEach(e=>{e.fromJunctionPoint="bottom",e.toJunctionPoint="left"}),console.log("graphJsonData:",t),await i.addNodes(t.nodes),await i.addLines(t.lines),i.graphData.rootNode=i.getNodeById(t.rootId),await i.doLayout(),await i.playShowEffect()};return _(()=>{p()}),(g,i)=>(o(),d("div",B,[a("div",G,[T(S(x),{ref_key:"graphRef",ref:s,options:h},{node:r(({node:t})=>[a("div",b,[j,a("div",w,[a("div",I,c(t.text),1),a("div",J,[(o(!0),d(m,null,f(t.data.tags,e=>(o(),d("div",{key:e,class:"card-tag"},c(e),1))),128))]),a("div",L,c(t.data.location),1)])])]),"graph-plug":r(()=>[A]),_:1},512)])]))}});const M=P(D,[["__scopeId","data-v-76d48594"]]);export{M as default};
