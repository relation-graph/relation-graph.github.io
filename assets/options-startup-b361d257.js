import{m as s,n as l}from"./index-bc1c6247.js";import{g as r}from"./LangUtils-019ecd1f.js";import{D as d}from"./DocCodeView-711ab57f.js";import c from"./SimpleElementLines-53cafa39.js";const i=`<template>
   <div>
     <div style="height:calc(100vh - 60px);">
        <RelationGraph ref="graphRef" :options="graphOptions" :on-node-click="onNodeClick" :on-line-click="onLineClick" />
     </div>
   </div>
 </template>

 <script>
// relation-graph也支持在main.js文件中使用Vue.use(RelationGraph);这样，你就不需要下面这一行代码来引入了。
 import RelationGraph from 'relation-graph'
 export default {
   name: 'Demo',
   components: { RelationGraph },
   data() {
     return {
       graphOptions: {
         defaultJunctionPoint: 'border'
         // 这里可以参考"Graph 图谱"中的参数进行设置 https://www.relation-graph.com/#/docs/graph
       }
     }
   },
   mounted() {
     this.showGraph()
   },
   methods: {
     showGraph() {
       const jsonData = {
         rootId: 'a',
         nodes: [
           { id: 'a', text: 'A', borderColor: 'yellow' },
           { id: 'b', text: 'B', color: '#43a2f1', fontColor: 'yellow' },
           { id: 'c', text: 'C', nodeShape: 1, width: 80, height: 60 },
           { id: 'e', text: 'E', nodeShape: 0, width: 150, height: 150 }
         ],
         lines: [
           { from: 'a', to: 'b', text: '关系1', color: '#43a2f1' },
           { from: 'a', to: 'c', text: '关系2' },
           { from: 'a', to: 'e', text: '关系3' },
           { from: 'b', to: 'e', color: '#67C23A' }
         ]
       }
       // 以上数据中的node和link可以参考"Node节点"和"Link关系"中的参数进行配置
       this.$refs.graphRef.setJsonData(jsonData, (graphInstance) => {
         // Called when the relation-graph is completed
       })
     },
     onNodeClick(nodeObject, $event) {
       console.log('onNodeClick:', nodeObject)
     },
     onLineClick(lineObject, $event) {
       console.log('onLineClick:', lineObject)
     }
   }
 }
 <\/script>`,a=`<template>
   <div>
     <div style="height:calc(100vh - 60px);">
        <RelationGraph ref="graphRef" :options="graphOptions" :on-node-click="onNodeClick" :on-line-click="onLineClick" />
     </div>
   </div>
 </template>

 <script>
// relation-graph also supports usage in the main.js file with Vue.use(RelationGraph); this way, you don't need the following line of code for import.
 import RelationGraph from 'relation-graph'
 export default {
   name: 'Demo',
   components: { RelationGraph },
   data() {
     return {
       graphOptions: {
         allowSwitchLineShape: true,
         allowSwitchJunctionPoint: true,
         defaultJunctionPoint: 'border'
         // Here you can refer to the options in "Graph" for setting: https://www.relation-graph.com/#/docs/graph
       }
     }
   },
   mounted() {
     this.showGraph()
   },
   methods: {
     showGraph() {
       const jsonData = {
         rootId: 'a',
         nodes: [
           { id: 'a', text: 'A', borderColor: 'yellow' },
           { id: 'b', text: 'B', color: '#43a2f1', fontColor: 'yellow' },
           { id: 'c', text: 'C', nodeShape: 1, width: 80, height: 60 },
           { id: 'e', text: 'E', nodeShape: 0, width: 150, height: 150 }
         ],
         lines: [
           { from: 'a', to: 'b', text: 'line1', color: '#43a2f1' },
           { from: 'a', to: 'c', text: 'line2' },
           { from: 'a', to: 'e', text: 'line3' },
           { from: 'b', to: 'e', color: '#67C23A' }
         ]
       }
       // The node and line in the above data can refer to the options in "Node" and "Link & Line" for configuration.
       // Node: https://www.relation-graph.com/#/docs/node
       // Link & Line: https://www.relation-graph.com/#/docs/link
       this.$refs.graphRef.setJsonData(jsonData, (graphInstance) => {
         // Called when the relation-graph is completed
       });
       // The this.refs.graphRef.setJsonData(jsonData, callback) method is a convenient method that is equivalent to the following code:
       //  const graphInstance = this.refs.graphRef.getInstance();
       //  graphInstance.addNodes(jsonData.nodes);
       //  graphInstance.addLines(jsonData.lines);
       //  graphInstance.rootNode = graphInstance.getNodeById(jsonData.rootId);
       //  await graphInstance.doLayout(); // Layout using the layouter set in graphOptions
       //  await graphInstance.moveToCenter(); // Find the center based on node distribution and center the view
       //  await graphInstance.zoomToFit(); // Zoom to fit, so that all nodes can be displayed in the visible area
     },
     onNodeClick(nodeObject, $event) {
       console.log('onNodeClick:', nodeObject)
     },
     onLineClick(lineObject, $event) {
       console.log('onLineClick:', lineObject)
     }
   }
 }
 <\/script>`;var p=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticStyle:{"font-size":"12px"}},[t("h3",[e._v(e._s((e.english,"relation-graph")))]),t("ul",[t("li",{staticStyle:{"line-height":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,['relation-graph是支持Vue2、Vue3、React的关系数据展示组件，支持通过【插槽】让使用者使用"普通HTML元素、Vue组件、React组件"来完全自定义图形元素，并提供实用的API接口让使用者轻松构建可交互的图形应用。','The relation-graph is a relationship data display component that supports Vue 2, Vue 3, and React. It enables users to fully customize graphical elements using "common HTML elements, Vue components, React components" through slots, and provides practical API interfaces to facilitate the development of interactive graphical applications."']))+" ")])]),t("h3",[e._v(e._s(e.english?"Getting Started":"快速开始"))]),t("div",{staticStyle:{"line-height":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["1, 引入relation-graph","1, Introducing relation-graph"]))+" ")]),t("div",{staticClass:"c-rgc-code"},[t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["// 注意：relation-graph支持Vue2、Vue3、React, 但引入的包名称都是【relation-graph】",'// Note: relation-graph supports Vue2, Vue3, React, but the package name for import is always "relation-graph". ']))+" ")]),t("div",[e._v("npm install --save relation-graph")])]),t("div",{staticStyle:{"line-height":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["2, 示例代码：","2, Sample code: "]))+" ")]),t("div",{staticStyle:{"line-height":"20px",color:"#888888",padding:"10px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["通过调整以下示例代码中的options、nodes、lines的配置实现不同的展示效果，还可以通过事件在图谱中实现交互式功能，","By adjusting the configurations of options, nodes, and lines in the following sample code, different display effects can be achieved. Interactive features can also be implemented in the graph through events."]))+" "),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/demo",target:"_blank"}},[e._v(" "+e._s(e.getTextByLang(e.english,["更多的示例","more examples"]))+" ")])],1),t("h3",[e._v("Vue2：")]),t("DocCodeView",{attrs:{height:"860px",code:e.demoCode}}),t("div",{staticStyle:{"line-height":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["示例效果：","Sample effects:"]))+" ")]),t("div",{staticStyle:{height:"600px",border:"#efefef solid 1px"}},[t("RelationGraph",{ref:"graphRef",attrs:{options:e.graphOptions,onNodeClick:e.onNodeClick,onLineClick:e.onLineClick}})],1),t("div",{staticStyle:{"padding-top":"30px","padding-bottom":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["更多示例：","More examples:"]))+" "),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/demo",target:"_blank"}},[e._v(" "+e._s(e.getTextByLang(e.english,["在线demo","Examples online"]))+" ")])],1),t("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[e._v("Github："),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph",target:"_blank"}},[e._v("https://github.com/seeksdream/relation-graph")])],1),t("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["完整的、可运行的示例vue2项目：","A complete, runnable Vue2 project example:"]))+" "),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph-vue2-demo",target:"_blank"}},[e._v(" https://github.com/seeksdream/relation-graph-vue2-demo ")])],1),t("div",{staticClass:"c-rgc-code"},[t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["// 通过以下几行命令，快速下载并启动示例：","// With the following lines of commands, you can quickly download and start the example: "]))+" ")]),t("div",[e._v("git clone https://github.com/seeksdream/relation-graph-vue2-demo")]),t("div",[e._v("cd relation-graph-vue2-demo")]),t("div",[e._v("npm install")]),t("div",[e._v("npm run dev")]),t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["访问终端中显示的地址，在你的浏览器中查看示例","Visit the address displayed in the terminal and view the example in your browser."]))+" ")])]),t("div",{staticStyle:{"padding-bottom":"10px","text-align":"left"}},[t("el-link",{attrs:{type:"success",icon:"el-icon-link",href:"https://codesandbox.io/p/github/seeksdream/relation-graph-vue2-demo/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clobpwd3p00073b6iidsym9xk%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clobpwd3o00033b6ifgccsfrm%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clobpwd3o00053b6imymydwoe%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clobpwd3p00063b6i9593lg4p%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B60.28799802001361%252C39.71200197998639%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clobpwd3o00033b6ifgccsfrm%2522%253A%257B%2522id%2522%253A%2522clobpwd3o00033b6ifgccsfrm%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clobpwd3n00023b6i36fsp4pf%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522id%2522%253A%2522clobpwi2k005u3b6iq2ieuyu1%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clobpwi2k005u3b6iq2ieuyu1%2522%257D%252C%2522clobpwd3p00063b6i9593lg4p%2522%253A%257B%2522id%2522%253A%2522clobpwd3p00063b6i9593lg4p%2522%252C%2522activeTabId%2522%253A%2522clobpxv9z00eo3b6igxfoz5pb%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A8080%252C%2522id%2522%253A%2522clobpxv9z00eo3b6igxfoz5pb%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clobpwd3o00053b6imymydwoe%2522%253A%257B%2522id%2522%253A%2522clobpwd3o00053b6imymydwoe%2522%252C%2522activeTabId%2522%253A%2522clobpx6of008v3b6immdnflb2%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clobpwd3o00043b6i3yqc4e65%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clobpwdlk002wdzelhelc2rig%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clobpx6of008v3b6immdnflb2%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257Dvue",target:"_blank"}},[e._v(" "+e._s(e.getTextByLang(e.english,["在线运行&修改 Vue2 完整示例项目","Run & modify the complete Vue2 sample project online. "]))+" ")])],1),t("div",{staticStyle:{"padding-bottom":"10px","text-align":"left"}},[t("el-link",{attrs:{type:"success",icon:"el-icon-link",href:"https://codesandbox.io/p/github/seeksdream/relation-graph-vue3-demo/main?workspaceId=204fc713-3d31-4494-a172-6def64cf3756&file=%2Fpackage.json&workspace=%257B%2522activeFileId%2522%253A%2522clekz4ehv0006g5eufcpd1ur3%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clekyypbk000e3b6j0j9qzxh3%2522%253A%257B%2522key%2522%253A%2522clekyypbk000e3b6j0j9qzxh3%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clekz4hdi000g3b6itim9y6d3%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clekz4mg900513b6ifr0axe6p%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clekz4ki4002u3b6iu2usz73b%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clekyypbk000e3b6j0j9qzxh3%2522%252C%2522spacesOrder%2522%253A%255B%2522clekyypbk000e3b6j0j9qzxh3%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D",target:"_blank"}},[e._v(" "+e._s(e.getTextByLang(e.english,["在线运行&修改 Vue3 完整示例项目","Run & modify the complete Vue3 sample project online. "]))+" ")])],1),t("div",{staticStyle:{"padding-bottom":"10px","text-align":"left"}},[t("el-link",{attrs:{type:"success",icon:"el-icon-link",href:"https://codesandbox.io/p/github/seeksdream/relation-graph-react-demo/main?file=%2Fpackage.json&selection=%5B%7B%22endColumn%22%3A34%2C%22endLineNumber%22%3A20%2C%22startColumn%22%3A34%2C%22startLineNumber%22%3A20%7D%5D&workspace=%257B%2522activeFileId%2522%253A%2522clekzctr90002g2jcaox1dud2%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clekzcwl4000g3b6itacfj2nr%2522%253A%257B%2522key%2522%253A%2522clekzcwl4000g3b6itacfj2nr%2522%252C%2522name%2522%253A%2522start%2520Preview%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfcidrzl007o3b6iohx30u17%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clekzcwl4000g3b6itacfj2nr%2522%252C%2522spacesOrder%2522%253A%255B%2522clekzcwl4000g3b6itacfj2nr%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D",target:"_blank"}},[e._v(" "+e._s(e.getTextByLang(e.english,["在线运行&修改 React 完整示例项目","Run & modify the complete React sample project online. "]))+" ")])],1),t("div",[t("h3",[t("i",{staticClass:"el-icon-info"}),e._v(" "+e._s(e.english?"Read More:":"更多内容：")+" "),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"/#/docs/start-drawing-board",target:"_blank"}},[e._v(" "+e._s(e.english?"Use relation-graph as a Drawing Board":"将relation-graph作为一个画板来使用")+" ")])],1)]),t("div",{staticStyle:{height:"calc(100vh - 58px)",border:"#efefef solid 1px"}},[t("SimpleElementLines")],1)],1)},h=[];const g={name:"NodeAttributes",components:{SimpleElementLines:c,DocCodeView:d},data(){return{demoCode:"",graphOptions:{allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border"},checkedRoute:null,codeString:""}},computed:{...s(["english"])},watch:{english(){this.demoCode=this.english?a:i}},mounted(){this.demoCode=this.english?a:i,this.showSeeksGraph()},methods:{getTextByLang:r,showSeeksGraph(){const e={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"line 1",color:"#43a2f1"},{from:"a",to:"c",text:"line 2"},{from:"a",to:"e",text:"line 3"},{from:"b",to:"e",text:"",color:"#67C23A"}]};this.$refs.graphRef.setJsonData(e,o=>{})},onNodeClick(e,o){console.log("onNodeClick:",e),this.$notify({title:"onNodeClick：",message:"Node:"+e.text})},onLineClick(e,o,t){console.log("onLineClick:",e,o),this.$notify({title:"onLineClick：",type:"success",message:"Link:"+o.fromNode.text+" > "+o.toNode.text+" Line:"+e.text})}}},n={};var m=l(g,p,h,!1,C,"3857971a",null,null);function C(e){for(let o in n)this[o]=n[o]}const y=function(){return m.exports}();export{y as default};
