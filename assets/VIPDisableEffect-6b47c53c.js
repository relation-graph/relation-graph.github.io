import{n as s}from"./index-28740cc1.js";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticStyle:{height:"40px","padding-left":"20px","padding-top":"5px","border-bottom":"#efefef solid 1px"}},[t("el-switch",{staticStyle:{"margin-left":"30px"},attrs:{size:"mini","active-text":"禁用缩放"},on:{change:e.upddateGraphOptions},model:{value:e.graphOptions.disableZoom,callback:function(a){e.$set(e.graphOptions,"disableZoom",a)},expression:"graphOptions.disableZoom"}}),t("el-switch",{staticStyle:{"margin-left":"30px"},attrs:{size:"mini","active-text":"禁用画布拖动"},on:{change:e.upddateGraphOptions},model:{value:e.graphOptions.disableDragCanvas,callback:function(a){e.$set(e.graphOptions,"disableDragCanvas",a)},expression:"graphOptions.disableDragCanvas"}}),t("el-switch",{staticStyle:{"margin-left":"30px"},attrs:{size:"mini","active-text":"禁用节点拖动"},on:{change:e.upddateGraphOptions},model:{value:e.graphOptions.disableDragNode,callback:function(a){e.$set(e.graphOptions,"disableDragNode",a)},expression:"graphOptions.disableDragNode"}}),t("el-switch",{staticStyle:{"margin-left":"30px"},attrs:{size:"mini","active-text":"禁用节点选中效果"},on:{change:e.upddateGraphOptions},model:{value:e.graphOptions.disableNodeClickEffect,callback:function(a){e.$set(e.graphOptions,"disableNodeClickEffect",a)},expression:"graphOptions.disableNodeClickEffect"}})],1),t("div",{staticStyle:{height:"calc(100vh - 50px)"}},[t("RelationGraph",{ref:"graphRef",attrs:{options:e.graphOptions}})],1)])},r=[];const d={useAnimationWhenRefresh:!1,defaultFocusRootNode:!1,disableLineClickEffect:!0,allowSwitchLineShape:!0,defaultNodeBorderWidth:0,defaultLineColor:"#a9bdc6",defaultLineWidth:3,defaultNodeShape:0,disableZoom:!0,disableDragCanvas:!0,disableDragNode:!0,disableNodeClickEffect:!0,allowShowMiniNameFilter:!1,layouts:[{label:"中心",layoutName:"tree",layoutClassName:"seeks-layout-center",levelDistance:"300,300,300,300",min_per_width:30,max_per_width:200}],disableDefaultClickEffect:!0},l={name:"Demo",components:{},data(){return{isShowCodePanel:!1,graphOptions:d}},mounted(){setTimeout(()=>{this.showSeeksGraph()},100)},methods:{showSeeksGraph(){const e={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b2",text:"b2"},{id:"b3",text:"b3"},{id:"b4",text:"b4"},{id:"b5",text:"b5"},{id:"b6",text:"b6"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"},{id:"d",text:"d"},{id:"d1",text:"d1"},{id:"d2",text:"d2"},{id:"d3",text:"d3"},{id:"d4",text:"d4"},{id:"e",text:"e"},{id:"e1",text:"e1"},{id:"e2",text:"e2"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b",to:"b2"},{from:"b",to:"b3"},{from:"b",to:"b4"},{from:"b",to:"b5"},{from:"b",to:"b6"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"},{from:"a",to:"d"},{from:"d",to:"d1"},{from:"d",to:"d2"},{from:"d",to:"d3"},{from:"d",to:"d4"},{from:"a",to:"e"},{from:"e",to:"e1"},{from:"e",to:"e2"}]};this.$refs.graphRef.setJsonData(e,t=>{})},async upddateGraphOptions(){const e=this.$refs.graphRef.getInstance();await e.setOptions(this.graphOptions,!0),await e.refresh()}}},i={};var c=s(l,n,r,!1,p,"0ae2f0f7",null,null);function p(e){for(let o in i)this[o]=i[o]}const h=function(){return c.exports}();export{h as default};
