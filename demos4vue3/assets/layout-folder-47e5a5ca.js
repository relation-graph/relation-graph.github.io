import{M as l}from"./relation-graph-588d2e75.js";import{d as p,r as h,o as u,a as _,c as f,b as a,e as b,w as x,u as g,p as m,j as y,f as s}from"./index-e4516832.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const v=o=>(m("data-v-d37ce909"),o=o(),y(),o),w={style:{}},I={style:{height:"calc(100vh)"}},J=v(()=>a("div",{class:"c-my-panel"},[a("div",{class:"c-option-name",style:{"line-height":"25px",padding:"0px",width:"300px"}},[s(" 这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。 "),a("br"),s(" 直接使用tree数据结构有明显的确缺陷：只能设置全局的线条默认样式，无法对具体的link设置属性，不能精细的定义线条的样式。 ")])],-1)),B=p({__name:"layout-folder",setup(o){const r={debug:!1,layout:{layoutName:"folder",from:"left",min_per_width:50,min_per_height:40},defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeWidth:100,defaultLineShape:41,defaultPolyLineRadius:4,defaultBottomJuctionPoint_X:28,defaultJunctionPoint:"lr",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)",reLayoutWhenExpandedOrCollapsed:!0},d=h(),c=async()=>{const n=[{id:"a",text:"a",children:[{id:"b",text:"b",children:[{id:"b1",text:"b1",children:[{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"}]},{id:"b2",text:"b2",children:[{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"}]}]},{id:"c",text:"c",children:[{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}]}]}],e=d.value.getInstance(),t={rootId:"a",nodes:[],lines:[]};e.flatNodeData(n,null,t.nodes,t.lines),t.lines.forEach(i=>{i.fromJunctionPoint="bottom",i.toJunctionPoint="left"}),console.log("graphJsonData:",t),await e.addNodes(t.nodes),await e.addLines(t.lines),e.graphData.rootNode=e.getNodeById(t.rootId),await e.doLayout(),await e.playShowEffect()};return u(()=>{c()}),(n,e)=>(_(),f("div",w,[a("div",I,[b(g(l),{ref_key:"graphRef",ref:d,options:r},{"graph-plug":x(()=>[J]),_:1},512)])]))}});const S=N(B,[["__scopeId","data-v-d37ce909"]]);export{S as default};
