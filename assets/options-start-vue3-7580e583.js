import{m as n,n as s}from"./index-08f7799e.js";import{g as d}from"./LangUtils-019ecd1f.js";import{D as l}from"./DocCodeView-65259c96.js";import"./xml-fold-c006af98.js";const a=`<template>
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
  graphRef$.value.setJsonData(jsonData)
})
<\/script>`,i=`<template>
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
  graphRef$.value.setJsonData(jsonData)
})
<\/script>`;var p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{"font-size":"14px"}},[e("h3",[t._v("Vue3：")]),e("div",{staticClass:"c-rgc-code"},[e("div",[t._v("npm install --save relation-graph")]),e("div",{staticClass:"c-rgc-comment"},[t._v(" "+t._s(t.getTextByLang(t.english,["// 注意：使用时import的方式与vue2不一样：import RelationGraph from 'relation-graph/vue3'","// Note: The import method is different from Vue2 when using it: import RelationGraph from 'relation-graph/vue3'"]))+" ")])]),e("div",{staticStyle:{height:"550px",border:"#efefef solid 1px"}},[e("DocCodeView",{attrs:{code:t.demoCode}})],1),e("div",{staticStyle:{"padding-top":"30px","padding-bottom":"30px"}},[t._v(" "+t._s(t.getTextByLang(t.english,["更多示例：","more examples"]))+" "),e("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/demo",target:"_blank"}},[t._v(" "+t._s(t.getTextByLang(t.english,["在线demo","examples online"]))+" ")])],1),e("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[t._v(" "+t._s(t.getTextByLang(t.english,["完整的、可运行的示例vue3项目(Typescript)：","A complete, runnable Vue3 project example(Typescript):. "]))+" "),e("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph-vue3-demo",target:"_blank"}},[t._v(" https://github.com/seeksdream/relation-graph-vue3-demo ")])],1),e("div",{staticClass:"c-rgc-code"},[e("div",{staticClass:"c-rgc-comment"},[t._v(" "+t._s(t.getTextByLang(t.english,["// 通过以下几行命令，快速下载并启动示例：","// With the following lines of commands, you can quickly download and start the example: "]))+" ")]),e("div",[t._v("git clone https://github.com/seeksdream/relation-graph-vue3-demo")]),e("div",[t._v("cd relation-graph-vue3-demo")]),e("div",[t._v("npm install")]),e("div",[t._v("npm run dev")]),e("div",{staticClass:"c-rgc-comment"},[t._v(" "+t._s(t.getTextByLang(t.english,["访问终端中显示的地址在你的浏览器中查看示例","Visit the address displayed in the terminal and view the example in your browser."]))+" ")])]),e("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[t._v("Github："),e("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph",target:"_blank"}},[t._v("https://github.com/seeksdream/relation-graph")])],1)])},m=[];const c={name:"NodeAttributes",components:{DocCodeView:l},data(){return{demoCode:"",checkedRoute:null,codeString:""}},computed:{...n(["english"])},watch:{english(){this.demoCode=this.english?i:a}},mounted(){this.demoCode=this.english?i:a},methods:{getTextByLang:d}},r={};var h=s(c,p,m,!1,g,null,null,null);function g(t){for(let o in r)this[o]=r[o]}const _=function(){return h.exports}();export{_ as default};
