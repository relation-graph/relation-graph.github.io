
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              import{m as n,n as r}from"./index-c847f99a.js";var d=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticStyle:{height:"200px",overflow:"auto","padding-left":"30px","border-bottom":"#efefef solid 1px","padding-top":"10px"}},[t("div",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[e._v("API")]),e.english?t("div",{staticStyle:{"font-size":"12px","padding-left":"20px","line-height":"25px"}},[t("div",[e._v("Please refer to the following declaration file: node_modules/relation-graph/types/${vue2/vue3/react}.d.ts")]),e._v(" "),t("div",{staticStyle:{"font-size":"12px","font-weight":"bold"}},[e._v("relation-graph Component API")]),e._v(" "),t("div",[e._v("Component interface methods: Refer to the type RelationGraphComponent defined in ${vue2/vue3/react}.d.ts (i.e., the object obtained through this.$refs.graphRef)")]),e._v(" "),t("div",{staticStyle:{"font-size":"12px","font-weight":"bold"}},[e._v("relation-graph Graph instance API")]),e._v(" "),t("div",[e._v("Graph instance interface methods: Refer to the type RelationGraphInstance defined in ${vue2/vue3/react}.d.ts (i.e., the object obtained through this.$refs.graphRef.getInstance())")])]):t("div",{staticStyle:{"font-size":"12px","padding-left":"20px","line-height":"25px"}},[t("div",[e._v("请参考以下声明文件:node_modules/relation-graph/types/${vue2/vue3/react}.d.ts")]),t("div",{staticStyle:{"font-size":"12px","font-weight":"bold"}},[e._v("relation-graph Component API")]),t("div",[e._v("组件接口方法：参考${vue2/vue3/react}.d.ts中定义的类型RelationGraphComponent（即通过this.$refs.graphRef获取的对象）")]),t("div",{staticStyle:{"font-size":"12px","font-weight":"bold"}},[e._v("relation-graph Graph instance API")]),t("div",[e._v("图谱实例接口方法：参考${vue2/vue3/react}.d.ts中定义的类型RelationGraphInstance（即通过this.$refs.graphRef.getInstance()获取到的对象）")])]),t("el-alert",{attrs:{title:e.english?"The following examples demonstrate the effect of expanding/collapsing a specific node by calling the API interface:":"以下示例通过调用API接口实现了展开/收缩指定节点的效果：",type:"success",closable:!1,"show-icon":""}})],1),t("div",{staticStyle:{height:"40px","padding-left":"20px","padding-top":"5px","border-bottom":"#efefef solid 1px"}},[t("el-button",{attrs:{size:"mini"},on:{click:e.callApi}},[e._v(e._s(e.english?"Expand node":"展开指定节点"))])],1),t("div",{staticStyle:{height:"calc(100vh - 300px)"}},[t("RelationGraph",{ref:"graphRef",attrs:{options:e.hTreeOptions}})],1)])},s=[];const l={name:"Demo",components:{},computed:{...n(["english"])},data(){return{hTreeOptions:{layouts:[{label:"中心",layoutName:"tree",layoutClassName:"seeks-layout-center",from:"left",min_per_width:300,min_per_height:100}],defaultNodeShape:1,defaultNodeWidth:"100",defaultLineShape:2,defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)",defaultNodeHeight:"30",defaultJunctionPoint:"lr",reLayoutWhenExpandedOrCollapsed:!0,defaultExpandHolderPosition:"right",zoomToFitWhenRefresh:!0,useAnimationWhenExpanded:!0,debug:!1}}},mounted(){this.showHTree()},methods:{showHTree(){const e={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"}]};this.$refs.graphRef.setJsonData(e,o=>{})},async callApi(e){const o="a",t=this.$refs.graphRef.getInstance(),a=t.getNodeById(o);a.expanded===!0?await t.collapseNode(a,e):await t.expandNode(a,e)}}},i={};var p=r(l,d,s,!1,f,null,null,null);function f(e){for(let o in i)this[o]=i[o]}const h=function(){return p.exports}();export{h as default};
