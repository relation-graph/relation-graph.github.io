import{n as l}from"./index-4e37fb25.js";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticStyle:{height:"50px","padding-top":"6px","padding-left":"30px","padding-right":"30px","border-bottom":"#efefef solid 1px"}},[t._v(" 连线形状： "),e("el-radio-group",{attrs:{size:"small"},on:{change:t.tabChange},model:{value:t.lineShape,callback:function(a){t.lineShape=a},expression:"lineShape"}},[e("el-radio-button",{attrs:{label:1}},[t._v("直线")]),e("el-radio-button",{attrs:{label:2}},[t._v("2")]),e("el-radio-button",{attrs:{label:3}},[t._v("3")]),e("el-radio-button",{attrs:{label:5}},[t._v("5")]),e("el-radio-button",{attrs:{label:6}},[t._v("6")]),e("el-radio-button",{attrs:{label:7}},[t._v("7")]),e("el-radio-button",{attrs:{label:4}},[t._v("折线")])],1),t._v(" 连接点： "),e("el-radio-group",{attrs:{size:"small"},on:{change:t.tabChange},model:{value:t.linePoint,callback:function(a){t.linePoint=a},expression:"linePoint"}},[e("el-radio-button",{attrs:{label:"border"}},[t._v("边缘")]),e("el-radio-button",{attrs:{label:"tb"}},[t._v("上下")]),e("el-radio-button",{attrs:{label:"lr"}},[t._v("左右")]),e("el-radio-button",{attrs:{label:"ltrb"}},[t._v("ltrb")]),e("el-radio-button",{attrs:{label:"left"}},[t._v("L")]),e("el-radio-button",{attrs:{label:"top"}},[t._v("T")]),e("el-radio-button",{attrs:{label:"right"}},[t._v("R")]),e("el-radio-button",{attrs:{label:"bottom"}},[t._v("B")])],1),t._v(" 布局方向： "),e("el-radio-group",{attrs:{size:"mini"},on:{change:t.updateLayouterOptions},model:{value:t.layoutFrom,callback:function(a){t.layoutFrom=a},expression:"layoutFrom"}},[e("el-radio-button",{attrs:{label:"left"}},[t._v("left")]),e("el-radio-button",{attrs:{label:"right"}},[t._v("right")]),e("el-radio-button",{attrs:{label:"top"}},[t._v("top")]),e("el-radio-button",{attrs:{label:"bottom"}},[t._v("bottom")])],1)],1),e("div",{ref:"myPage",staticClass:"my-graph",staticStyle:{height:"calc(100vh - 100px)"}},[e("RelationGraph",{ref:"graphRef",attrs:{options:t.graphOptions}})],1)])},i=[];const s={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"#2E74B5",defaultNodeColor:"#2E74B5",defaultNodeBorderWidth:0,defaultNodeBorderColor:"#2E74B5",defaultNodeFontColor:"#ffffff",defaultNodeWidth:40,defaultNodeHeight:40,toolBarDirection:"h",toolBarPositionH:"center",toolBarPositionV:"bottom",defaultLineShape:2,defaultJunctionPoint:"lr",defaultLineTextOffset_x:2,defaultLineTextOffset_y:-3,layout:{layoutName:"tree",from:"left",min_per_width:70,min_per_height:50}},b={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b",text:"Text"},{from:"b",to:"b1",text:"Text"},{from:"b1",to:"b1-1",text:"Text"},{from:"b1",to:"b1-2",text:"Text"},{from:"b1",to:"b1-3",text:"Text"},{from:"b1",to:"b1-4",text:"Text"},{from:"b1",to:"b1-5",text:"Text"},{from:"b1",to:"b1-6",text:"Text"},{from:"b",to:"b2",text:"Text"},{from:"b2",to:"b2-1",text:"Text"},{from:"b2",to:"b2-2",text:"Text"},{from:"a",to:"c",text:"Text"},{from:"c",to:"c1",text:"Text"},{from:"c",to:"c2",text:"Text"},{from:"c",to:"c3",text:"Text"}]},d={name:"Demo4AdvLineSlot",components:{},data(){return{lineShape:2,linePoint:"lr",layoutFrom:"left",graphOptions:s}},mounted(){this.showSeeksGraph()},methods:{showSeeksGraph(){this.$refs.graphRef.setJsonData(b,t=>{})},tabChange(){const o=this.$refs.graphRef.getInstance().options;o.defaultLineShape=this.lineShape,o.defaultJunctionPoint=this.linePoint},async updateLayouterOptions(){this.graphOptions.layout.from=this.layoutFrom,await this.$refs.graphRef.getInstance().setOptions(this.graphOptions),this.tabChange()}}},r={};var u=l(d,n,i,!1,f,null,null,null);function f(t){for(let o in r)this[o]=r[o]}const c=function(){return u.exports}();export{c as default};
