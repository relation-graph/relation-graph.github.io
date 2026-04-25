var l=Object.defineProperty;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var n=(t,o,e)=>o in t?l(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,i=(t,o)=>{for(var e in o||(o={}))p.call(o,e)&&n(t,e,o[e]);if(a)for(var e of a(o))c.call(o,e)&&n(t,e,o[e]);return t};import{m as h,n as g}from"./index-c13658a0.js";import{g as m}from"./LangUtils-019ecd1f.js";import{D as v}from"./DocCodeView-37dff1bc.js";const s=`<template>
  <div>
    <div style="border: #efefef solid 1px; height: calc(100vh - 100px);width: 100%;">
      <relation-graph ref="graphRef$" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RelationGraph from 'relation-graph-vue3'
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
<\/script>`,r=`<template>
  <div>
    <div style="border: #efefef solid 1px; height: calc(100vh - 100px);width: 100%;">
      <relation-graph ref="graphRef$" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RelationGraph from 'relation-graph-vue3'
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
<\/script>`;var f=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{"font-size":"14px"}},[e("h3",[t._v("Vue3：")]),e("div",{staticClass:"c-rgc-code"},[e("div",[t._v("npm install --save relation-graph-vue3")]),e("div",{staticClass:"c-rgc-comment"},[t._v(" "+t._s(t.getTextByLang(t.english,["// 注意：使用时import的方式与vue2不一样：import RelationGraph from 'relation-graph-vue3'","// Note: The import method is different from Vue2 when using it: import RelationGraph from 'relation-graph-vue3'"]))+" ")])]),e("DocCodeView",{attrs:{code:t.demoCode}}),e("div",{staticStyle:{"padding-top":"30px","padding-bottom":"30px"}},[t._v(" "+t._s(t.getTextByLang(t.english,["更多示例：","More examples"]))+" "),e("el-link",{staticStyle:{color:"#337ab7"},attrs:{href:"#/demo",target:"_blank"}},[t._v(" "+t._s(t.getTextByLang(t.english,["在线demo","Examples online"]))+" ")])],1),e("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[t._v(" "+t._s(t.getTextByLang(t.english,["完整的、可运行的示例vue3项目(Typescript)：","A complete, runnable Vue3 project example(Typescript):. "]))+" "),e("el-link",{staticStyle:{color:"#337ab7"},attrs:{href:"https://github.com/seeksdream/relation-graph-vue3-demo",target:"_blank"}},[t._v(" https://github.com/seeksdream/relation-graph-vue3-demo ")])],1),e("div",{staticClass:"c-rgc-code"},[e("div",{staticClass:"c-rgc-comment"},[t._v(" "+t._s(t.getTextByLang(t.english,["// 通过以下几行命令，快速下载并启动示例：","// With the following lines of commands, you can quickly download and start the example: "]))+" ")]),e("div",[t._v("git clone https://github.com/seeksdream/relation-graph-vue3-demo")]),e("div",[t._v("cd relation-graph-vue3-demo")]),e("div",[t._v("npm install")]),e("div",[t._v("npm run dev")]),e("div",{staticClass:"c-rgc-comment"},[t._v(" "+t._s(t.getTextByLang(t.english,["访问终端中显示的地址在你的浏览器中查看示例","Visit the address displayed in the terminal and view the example in your browser."]))+" ")])]),e("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[t._v("Github："),e("el-link",{staticStyle:{color:"#337ab7"},attrs:{href:"https://github.com/seeksdream/relation-graph",target:"_blank"}},[t._v("https://github.com/seeksdream/relation-graph")])],1)],1)},u=[];const _={name:"NodeAttributes",components:{DocCodeView:v},data(){return{demoCode:"",checkedRoute:null,codeString:""}},computed:i({},h(["english"])),watch:{english(){this.demoCode=this.english?r:s}},mounted(){this.demoCode=this.english?r:s},methods:{getTextByLang:m}},d={};var x=g(_,f,u,!1,b,null,null,null);function b(t){for(let o in d)this[o]=d[o]}const L=function(){return x.exports}();export{L as default};
