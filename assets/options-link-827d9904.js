import{m as i,n as o}from"./index-d32a4e53.js";import{g as a}from"./LangUtils-019ecd1f.js";import{R as l}from"./index-4477b348.js";const r=[{option:"from",desc:"关系from节点的id",desc_en:"The id of the relationship from node",type:"string",notnull:"Y",default_value:""},{option:"to",desc:"关系to节点的id",desc_en:"The id of the relationship to node",type:"string",notnull:"Y",default_value:""},{option:"text",desc:"关系文字",desc_en:"Relationship text",type:"string",notnull:"Y",default_value:""},{option:"styleClass",desc:"节点样式class",desc_en:"Node style class",type:"string",notnull:"N",default_value:""},{option:"lineWidth",desc:"线条粗细（像素）",desc_en:"Line thickness (pixels)",type:"int",notnull:"N",default_value:"1"},{option:"color",desc:"线条颜色",desc_en:"Line color",type:"string",notnull:"N",default_value:""},{option:"isHide",desc:"是否显示",desc_en:"Whether to display",type:"boolean",notnull:"N",default_value:"false"},{option:"lineShape",desc:'线条样式（1:直线/2:样式2/3:样式3/4:折线/5:样式5/6:样式6）<a href="#/demo/line">使用示例</a>',desc_en:'Line style (1: straight line /2: style 2 /3: style 3 /4: polyline /5: style 5 /6: style 6) <a href="#/demo/line">Use example</a>',type:"int",notnull:"N",default_value:""},{option:"fontColor",desc:"线条文字颜色",desc_en:"Line text color",type:"string",notnull:"N",default_value:""},{option:"opacity",desc:"透明度(值范围：0到1,或者0到100)，设置为0可以实现隐藏的效果",desc_en:"Opacity (value range: 0 to 1, or 0 to 100), setting to 0 can achieve the effect of hiding",type:"number",notnull:"N",default_value:"1"},{option:"showLineLabel",desc:'<span style="color:red">[已禁用，如果想要不显示可以设置text为空即可]</span>是否显示连线文字',desc_en:'<span style="color:red">[Disabled, if you want not to display, you can set the text to empty]</span>Whether to display the line text',type:"boolean",notnull:"N",default_value:"true"},{option:"showStartArrow",desc:"isHideArrow=true时此选项无效，是否显示起始箭头",desc_en:"This option is invalid when isHideArrow=true, whether to display the starting arrow",type:"boolean",notnull:"N",default_value:"false"},{option:"showEndArrow",desc:"isHideArrow=true时此选项无效，是否显示终止箭头",desc_en:"This option is invalid when isHideArrow=true, whether to display the end arrow",type:"boolean",notnull:"N",default_value:"true"},{option:"useTextPath",desc:"连线文字沿着连线路径走",desc_en:"The line text follows the line path",type:"boolean",notnull:"N",default_value:"false"},{option:"data",desc:'<span style="color:red">自定义属性需要放在这里，才能在后续使用中从节点获取，如:{myKey1: _value1,myKey2: _value2}</span>,示例1：<a href="#/demo/adv-data-filter">使用自定义属性进行筛选</a>',desc_en:'<span style="color:red">Custom attributes need to be placed here so they can be retrieved from the node in subsequent use, such as: {myKey1:_value1,myKey2: _value2}</span>, Example 1: <a href="#/demo/adv-data-filter">Use custom attributes for filtering</a>',type:"Object",notnull:"N",default_value:""}],d=[{option:"relations",desc:"【只读属性】Array<Line>这是一个数组，可以获取这个线条上所有的关系数据。",desc_en:"[Read-only property] Array<Line> This is an array that can get all the relationship data on this line.",type:"",notnull:"",default_value:""},{option:"fromNode",desc:"【只读属性】获取这个线条的起始节点对象",desc_en:"[Read-only property] Get the start node object of this line",type:"",notnull:"",default_value:""},{option:"toNode",desc:"【只读属性】获取这个线条的终止节点对象",desc_en:"[Read-only property] Get the end node object of this line",type:"",notnull:"",default_value:""}];var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.english?t("div",{staticStyle:{"font-size":"14px",color:"#333333","line-height":"25px"}},[t("h3",[e._v(" Link & Line: ")]),e._m(2)]):t("div",{staticStyle:{"font-size":"14px",color:"#333333","line-height":"25px"}},[t("h3",[e._v(" Link 关系 & Line 线条: ")]),e._v(" 在构建图谱数据时需要两个要素nodes和lines。"),t("br"),t("span",{staticStyle:{"font-weight":"bold"}},[e._v("线条(Line)")]),e._v("：其中的lines是指节点之间的连线，图谱会根据这些line来生成线条。"),t("br"),t("span",{staticStyle:{"font-weight":"bold"}},[e._v("关系(Link)")]),e._v("：同时图谱会根据line来生成用于总结节点之间的关联的Link(两个有直接关联的节点之间有且只有一个Link，节点之间的所有关系线(Line[])，都会被放在link.relations中)。"),t("br"),e._v(" 所有【关系】可以通过以下代码获取："),t("br"),e._m(0),e._v(" 所有【线条】可以通过以下代码获取："),t("br"),e._m(1)]),t("div",[t("div",{staticClass:"c-doc-title"},[e._v(" "+e._s(e.getTextByLang(e.english,["Line Arributes / 线条数据的选项:","Line json options:"]))+" ")]),t("RGObjectOptions",{attrs:{data:e.list_data_attributes,type:"options"}}),t("div",{staticStyle:{"font-size":"12px",padding:"20px",color:"#888888"}},[e._v(" "+e._s(e.getTextByLang(e.english,["更多不常用属性、以及实验性的属性请参考：","Please refer to the documentation and API for more uncommon options and experimental properties:"]))+" "),t("a",{staticStyle:{"font-size":"12px",color:"#1989fa"},attrs:{href:"/#/docs/graph-instance-api"}},[e._v(" "+e._s(e.getTextByLang(e.english,["描述文件与API","Typescript description file"]))+" ")])])],1),t("div",[t("div",{staticClass:"c-doc-title"},[e._v(" "+e._s(e.getTextByLang(e.english,["Link / 节点关联对象属性:","Link object properties:"]))+" ")]),t("div",[t("span",{staticStyle:{color:"#c0a10b","font-size":"12px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["说明：Link对象是根据lines数据生成的，你只能通过this.$refs.graph.getInstance().getLinks()获取到，无法通过数据配置","Explanation: The Link object is generated based on the lines data, and you can only retrieve it through this.$refs.graph.getInstance().getLinks(). It cannot be configured through data."]))+" ")])]),t("RGObjectOptions",{attrs:{data:e.list_data_runtime,type:"properties"}})],1)])},p=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"c-rgc-code"},[t("div",{staticClass:"c-rgc-comment"},[e._v("// this.$refs.graphRef是对图谱组件的引用，详见章节【Graph图谱】：")]),t("div",[e._v("const links = this.$refs.graphRef.getLinks();")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"c-rgc-code"},[t("div",{staticClass:"c-rgc-comment"},[e._v("// this.$refs.graphRef是对图谱组件的引用，详见章节【Graph图谱】：")]),t("div",[e._v("const links = this.$refs.graphRef.getLinks();")]),t("div",[e._v("const lines = links.reduce((link, currentLines) => currentLines.concat(...link.relations), []);")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("When building graph data, two elements are required: nodes and lines."),t("br"),e._v(" "),t("span",{staticStyle:{"font-weight":"bold"}},[e._v("Lines:")]),e._v(" The lines refer to the connections between nodes, and the graph will generate the lines based on these lines."),t("br"),e._v(" "),t("span",{staticStyle:{"font-weight":"bold"}},[e._v("Links:")]),e._v(" Additionally, the graph will generate links based on the lines to summarize the relationships between nodes (there is only one link between two related nodes, and all relationship lines (Line[]) between nodes will be placed in link.relations)."),t("br"),e._v(" All relationships can be obtained by:"),t("br"),e._v(" "),t("div",{staticClass:"c-rgc-code"},[t("div",{staticClass:"c-rgc-comment"},[e._v("// this.$refs.graphRef is a reference to the graph component, see section [Graph Graph] for details:")]),e._v(" "),t("div",[e._v("const links = this.$refs.graphRef.getLinks();")])]),e._v(" All lines can be obtained by:"),t("br"),e._v(" "),t("div",{staticClass:"c-rgc-code"},[t("div",{staticClass:"c-rgc-comment"},[e._v("// this.$refs.graphRef is a reference to the graph component, see section [Graph Graph] for details:")]),e._v(" "),t("div",[e._v("const links = this.$refs.graphRef.getLinks();")]),e._v(" "),t("div",[e._v("const lines = links.reduce((link, currentLines) => currentLines.concat(...link.relations), []);")])]),e._v(" Note: The Link object is generated based on the lines data and can only be obtained through this.$refs.graph.getInstance().getLinks(). It cannot be configured through data.")])}];const h={name:"LinkAttributes",components:{RGObjectOptions:l},data(){return{list_data_attributes:r,list_data_runtime:d,list_data_events:[],list_data_methods:[],list_data_slot:[],checkedRoute:null}},computed:{...i(["english"])},methods:{getTextByLang:a}},s={};var _=o(h,c,p,!1,u,"4fe52dd1",null,null);function u(e){for(let n in s)this[n]=s[n]}const y=function(){return _.exports}();export{y as default};
