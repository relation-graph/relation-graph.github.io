import{n}from"./index-3f3d9b78.js";var l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{ref:"myPage",staticClass:"my-graph",staticStyle:{height:"calc(100vh - 60px)"}},[e("RelationGraph",{ref:"graphRef",attrs:{options:t.graphOptions},scopedSlots:t._u([{key:"graph-plug",fn:function(){return[e("div",{staticClass:"c-my-panel"},[e("div",{staticClass:"c-option-name"},[t._v("布局方向：")]),e("el-radio-group",{attrs:{size:"mini"},on:{change:t.updateLayouterOptions},model:{value:t.layoutFrom,callback:function(a){t.layoutFrom=a},expression:"layoutFrom"}},[e("el-radio-button",{attrs:{label:"left"}},[t._v("left")]),e("el-radio-button",{attrs:{label:"right"}},[t._v("right")]),e("el-radio-button",{attrs:{label:"top"}},[t._v("top")]),e("el-radio-button",{attrs:{label:"bottom"}},[t._v("bottom")])],1),e("div",{staticClass:"c-option-name"},[t._v("布局层级内扩展方向：")]),e("el-radio-group",{attrs:{size:"mini"},on:{change:t.updateLayouterOptions},model:{value:t.layoutExpansionDirection,callback:function(a){t.layoutExpansionDirection=a},expression:"layoutExpansionDirection"}},[e("el-radio-button",{attrs:{label:"center"}},[t._v("默认")]),e("el-radio-button",{attrs:{label:"left"}},[t._v("向左")]),e("el-radio-button",{attrs:{label:"right"}},[t._v("向右")]),e("el-radio-button",{attrs:{label:"top"}},[t._v("向上")]),e("el-radio-button",{attrs:{label:"bottom"}},[t._v("向下")])],1),e("div",{staticClass:"c-option-name"},[t._v("连线形状：")]),e("el-radio-group",{attrs:{size:"mini"},on:{change:t.tabChange},model:{value:t.lineShape,callback:function(a){t.lineShape=a},expression:"lineShape"}},[e("el-radio-button",{attrs:{label:1}},[t._v("直线")]),e("el-radio-button",{attrs:{label:2}},[t._v("2")]),e("el-radio-button",{attrs:{label:3}},[t._v("3")]),e("el-radio-button",{attrs:{label:5}},[t._v("5")]),e("el-radio-button",{attrs:{label:6}},[t._v("6")]),e("el-radio-button",{attrs:{label:7}},[t._v("7")]),e("el-radio-button",{attrs:{label:4}},[t._v("折线")])],1),t.lineShape===4?e("div",[e("div",{staticClass:"c-option-name"},[t._v("折线弯角大小：")]),e("el-radio-group",{attrs:{size:"mini"},on:{change:t.tabChange},model:{value:t.polyLineRadius,callback:function(a){t.polyLineRadius=a},expression:"polyLineRadius"}},[e("el-radio-button",{attrs:{label:0}},[t._v("0")]),e("el-radio-button",{attrs:{label:3}},[t._v("3")]),e("el-radio-button",{attrs:{label:5}},[t._v("5")]),e("el-radio-button",{attrs:{label:8}},[t._v("8")]),e("el-radio-button",{attrs:{label:10}},[t._v("10")]),e("el-radio-button",{attrs:{label:15}},[t._v("15")])],1)],1):t._e(),e("div",{staticClass:"c-option-name"},[t._v("连接点：")]),e("el-radio-group",{attrs:{size:"mini"},on:{change:t.tabChange},model:{value:t.linePoint,callback:function(a){t.linePoint=a},expression:"linePoint"}},[e("el-radio-button",{attrs:{label:"border"}},[t._v("边缘")]),e("el-radio-button",{attrs:{label:"tb"}},[t._v("上下")]),e("el-radio-button",{attrs:{label:"lr"}},[t._v("左右")]),e("el-radio-button",{attrs:{label:"ltrb"}},[t._v("ltrb")]),e("el-radio-button",{attrs:{label:"left"}},[t._v("L")]),e("el-radio-button",{attrs:{label:"top"}},[t._v("T")]),e("el-radio-button",{attrs:{label:"right"}},[t._v("R")]),e("el-radio-button",{attrs:{label:"bottom"}},[t._v("B")])],1),e("div",{staticClass:"c-option-name"},[t._v("层级距离 & 节点间距：")]),e("div",[e("div",[e("div",[e("div",{staticClass:"c-option-name"},[t._v("节点间【横向】距离:")]),e("el-slider",{attrs:{min:40,max:500},on:{change:t.updateLayouterOptions},model:{value:t.range_horizontal,callback:function(a){t.range_horizontal=a},expression:"range_horizontal"}})],1),e("div",[e("div",{staticClass:"c-option-name"},[t._v("节点间【纵向】距离:")]),e("el-slider",{attrs:{min:40,max:500},on:{change:t.updateLayouterOptions},model:{value:t.range_vertical,callback:function(a){t.range_vertical=a},expression:"range_vertical"}})],1)])])],1)]},proxy:!0}])})],1)])},r=[];const s={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineColor:"#2E74B5",defaultNodeColor:"#2E74B5",defaultNodeBorderWidth:0,defaultNodeBorderColor:"#2E74B5",defaultNodeFontColor:"#ffffff",defaultNodeWidth:40,defaultNodeHeight:40,toolBarDirection:"h",toolBarPositionH:"center",toolBarPositionV:"bottom",defaultLineShape:2,defaultJunctionPoint:"lr",defaultLineTextOffset_x:2,defaultLineTextOffset_y:-3,layout:{layoutName:"tree",from:"left",min_per_width:70,min_per_height:50}},d={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b",text:"Text"},{from:"b",to:"b1",text:"Text"},{from:"b1",to:"b1-1",text:"Text"},{from:"b1",to:"b1-2",text:"Text"},{from:"b1",to:"b1-3",text:"Text"},{from:"b1",to:"b1-4",text:"Text"},{from:"b1",to:"b1-5",text:"Text"},{from:"b1",to:"b1-6",text:"Text"},{from:"b",to:"b2",text:"Text"},{from:"b2",to:"b2-1",text:"Text"},{from:"b2",to:"b2-2",text:"Text"},{from:"a",to:"c",text:"Text"},{from:"c",to:"c1",text:"Text"},{from:"c",to:"c2",text:"Text"},{from:"c",to:"c3",text:"Text"}]},u={name:"Demo4AdvLineSlot",components:{},data(){return{lineShape:2,polyLineRadius:5,layoutExpansionDirection:"center",linePoint:"lr",layoutFrom:"left",range_horizontal:300,range_vertical:70,levelDistance:"150,200,250,300,350",graphOptions:s}},mounted(){this.showSeeksGraph()},methods:{showSeeksGraph(){this.$refs.graphRef.setJsonData(d,t=>{})},tabChange(){const o=this.$refs.graphRef.getInstance().options;o.defaultLineShape=this.lineShape,o.defaultPolyLineRadius=this.polyLineRadius,o.defaultJunctionPoint=this.linePoint},async updateLayouterOptions(){this.graphOptions.layout.from=this.layoutFrom,this.graphOptions.layout.layoutExpansionDirection=this.layoutExpansionDirection,this.graphOptions.layout.min_per_width=this.range_horizontal,this.graphOptions.layout.max_per_width=this.range_horizontal+10,this.graphOptions.layout.min_per_height=this.range_vertical,this.graphOptions.layout.max_per_height=this.range_vertical+10,this.graphOptions.defaultPolyLineRadius=this.polyLineRadius,await this.$refs.graphRef.getInstance().setOptions(this.graphOptions),this.tabChange()}}},i={};var b=n(u,l,r,!1,c,"75146a62",null,null);function c(t){for(let o in i)this[o]=i[o]}const h=function(){return b.exports}();export{h as default};
