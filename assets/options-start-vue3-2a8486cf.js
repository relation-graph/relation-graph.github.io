import{m as s,n as r}from"./index-8bb9272c.js";import{g as d}from"./LangUtils-019ecd1f.js";import{D as l}from"./DocCodeView-b8e3f4ae.js";const a=`<template>
  <div>
    <div style="border: #efefef solid 1px; height: calc(100vh - 100px);width: 100%;">
      <relation-graph ref="graphRef$" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RelationGraph from 'relation-graph/vue3'
const graphRef$ = ref<RelationGraph>()
const options = {
  defaultExpandHolderPosition: 'right'
}
onMounted(() => {
  const jsonData = {
    rootId: 'a',
    nodes: [
      { id: 'a', text: 'a', },
      { id: 'b', text: 'b', },
      { id: 'c', text: 'c', },
      { id: 'd', text: 'd', },
      { id: 'e', text: 'e', },
      { id: 'f', text: 'f', },
    ],
    lines: [
      { from: 'a', to: 'b', },
      { from: 'a', to: 'c', },
      { from: 'a', to: 'd', },
      { from: 'a', to: 'e', },
      { from: 'a', to: 'f', },
    ],
  }
  // The node and line in the above data can refer to the options in "Node" and "Link & Line" for configuration.
  // Node: https://www.relation-graph.com/#/docs/node
  // Link & Line: https://www.relation-graph.com/#/docs/link
  graphRef$.value.setJsonData(jsonData)
  // The graphRef$.value.setJsonData(jsonData, callback) method is a convenient method that is equivalent to the following code:
  //  const graphInstance = graphRef$.value.getInstance();
  //  graphInstance.addNodes(jsonData.nodes);
  //  graphInstance.addLines(jsonData.lines);
  //  graphInstance.rootNode = graphInstance.getNodeById(jsonData.rootId);
  //  await graphInstance.doLayout(); // Layout using the layouter set in graphOptions
  //  await graphInstance.moveToCenter(); // Find the center based on node distribution and center the view
  //  await graphInstance.zoomToFit(); // Zoom to fit, so that all nodes can be displayed in the visible area
})
<\/script>`,n=`<template>
  <div>
    <div style="border: #efefef solid 1px; height: calc(100vh - 100px);width: 100%;">
      <relation-graph ref="graphRef$" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RelationGraph from 'relation-graph/vue3'
const graphRef$ = ref<RelationGraph>()
const options = {
  defaultExpandHolderPosition: 'right'
}
onMounted(() => {
  const jsonData = {
    rootId: 'a',
    nodes: [
      { id: 'a', text: 'a', },
      { id: 'b', text: 'b', },
      { id: 'c', text: 'c', },
      { id: 'd', text: 'd', },
      { id: 'e', text: 'e', },
      { id: 'f', text: 'f', },
    ],
    lines: [
      { from: 'a', to: 'b', },
      { from: 'a', to: 'c', },
      { from: 'a', to: 'd', },
      { from: 'a', to: 'e', },
      { from: 'a', to: 'f', },
    ],
  }
  // The node and line in the above data can refer to the options in "Node" and "Link & Line" for configuration.
  // Node: https://www.relation-graph.com/#/docs/node
  // Link & Line: https://www.relation-graph.com/#/docs/link
  graphRef$.value.setJsonData(jsonData)
  // The graphRef$.value.setJsonData(jsonData, callback) method is a convenient method that is equivalent to the following code:
  //  const graphInstance = graphRef$.value.getInstance();
  //  graphInstance.addNodes(jsonData.nodes);
  //  graphInstance.addLines(jsonData.lines);
  //  graphInstance.rootNode = graphInstance.getNodeById(jsonData.rootId);
  //  await graphInstance.doLayout(); // Layout using the layouter set in graphOptions
  //  await graphInstance.moveToCenter(); // Find the center based on node distribution and center the view
  //  await graphInstance.zoomToFit(); // Zoom to fit, so that all nodes can be displayed in the visible area
})
<\/script>`;var p=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticStyle:{"font-size":"14px"}},[t("h3",[e._v("Vue3：")]),t("div",{staticClass:"c-rgc-code"},[t("div",[e._v("npm install --save relation-graph")]),t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["// 注意：使用时import的方式与vue2不一样：import RelationGraph from 'relation-graph/vue3'","// Note: The import method is different from Vue2 when using it: import RelationGraph from 'relation-graph/vue3'"]))+" ")])]),t("div",{staticStyle:{border:"#efefef solid 1px"}},[t("DocCodeView",{attrs:{code:e.demoCode}})],1),t("div",{staticStyle:{"padding-top":"30px","padding-bottom":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["更多示例：","More examples"]))+" "),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/demo",target:"_blank"}},[e._v(" "+e._s(e.getTextByLang(e.english,["在线demo","Examples online"]))+" ")])],1),t("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["完整的、可运行的示例vue3项目(Typescript)：","A complete, runnable Vue3 project example(Typescript):. "]))+" "),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph-vue3-demo",target:"_blank"}},[e._v(" https://github.com/seeksdream/relation-graph-vue3-demo ")])],1),t("div",{staticClass:"c-rgc-code"},[t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["// 通过以下几行命令，快速下载并启动示例：","// With the following lines of commands, you can quickly download and start the example: "]))+" ")]),t("div",[e._v("git clone https://github.com/seeksdream/relation-graph-vue3-demo")]),t("div",[e._v("cd relation-graph-vue3-demo")]),t("div",[e._v("npm install")]),t("div",[e._v("npm run dev")]),t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["访问终端中显示的地址在你的浏览器中查看示例","Visit the address displayed in the terminal and view the example in your browser."]))+" ")])]),t("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[e._v("Github："),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph",target:"_blank"}},[e._v("https://github.com/seeksdream/relation-graph")])],1)])},c=[];const h={name:"NodeAttributes",components:{DocCodeView:l},data(){return{demoCode:"",checkedRoute:null,codeString:""}},computed:{...s(["english"])},watch:{english(){this.demoCode=this.english?n:a}},mounted(){this.demoCode=this.english?n:a},methods:{getTextByLang:d}},i={};var g=r(h,p,c,!1,m,null,null,null);function m(e){for(let o in i)this[o]=i[o]}const x=function(){return g.exports}();export{x as default};
