import{m as a,n as l}from"./index-3f3d9b78.js";import{g as d}from"./LangUtils-019ecd1f.js";import{R as s}from"./index-003f45cd.js";const i=[{option:"id",desc:"节点id，不能重复，重复会被忽略",desc_en:"Node id, cannot be duplicated, duplicates will be ignored",type:"string",notnull:"是",default_value:""},{option:"text",desc:"节点名称",desc_en:"Node name",type:"string",notnull:"是",default_value:""},{option:"styleClass",desc:"节点样式class",desc_en:"Node style class",type:"string",notnull:"否",default_value:""},{option:"color",desc:"节点背景颜色",desc_en:"Node background color",type:"string",notnull:"否",default_value:""},{option:"fontColor",desc:"节点文字颜色",desc_en:"Node text color",type:"string",notnull:"否",default_value:""},{option:"borderWidth",desc:"节点边框粗细（像素）",desc_en:"Node border thickness (pixels)",type:"int",notnull:"否",default_value:"1"},{option:"borderColor",desc:"节点边框颜色",desc_en:"Node border color",type:"string",notnull:"否",default_value:""},{option:"nodeShape",desc:'节点形状，0:圆形；1:矩形;<a href="#/demo/node">使用示例</a>',desc_en:'Node shape, 0: circle; 1: rectangle; <a href="#/demo/node">Use example</a>',type:"int",notnull:"否",default_value:"1"},{option:"width",desc:"节点宽度",desc_en:"Node width",type:"int",notnull:"否",default_value:"自动"},{option:"height",desc:"节点高度",desc_en:"Node height",type:"int",notnull:"否",default_value:"自动"},{option:"opacity",desc:"透明度(值范围：0到1,或者0到100)，设置为0可以实现隐藏的效果",desc_en:"Opacity (value range: 0 to 1, or 0 to 100), setting to 0 can achieve a hidden effect",type:"number",notnull:"否",default_value:"1"},{option:"isHide",desc:"是否隐藏这个节点，隐藏节点的同时，子节点也会被隐藏",desc_en:"Whether to hide this node, when the node is hidden, the child nodes will also be hidden",type:"boolean",notnull:"否",default_value:"false"},{option:"disableDrag",desc:"是否禁用节点的拖动功能",desc_en:"Whether to disable the drag function of the node",type:"boolean",notnull:"N",default_value:"false"},{option:"disableDefaultClickEffect",desc:"是否禁用默认的点击选中效果（即使禁用，可以出发自定的节点点击事件）",desc_en:"Whether to disable the default click selection effect (even if disabled, you can trigger custom node click event)",type:"boolean",notnull:"N",default_value:"false"},{option:"expandHolderPosition",desc:'节点展开/关闭按钮位置（left/top/right/bottom/hide）节点的这个设置会覆盖全局的expandHolderPosition设置，即使该节点没有子节点也可以让其显示展开/收缩按钮，可以实现部分节点显示展开/收缩按钮的效果;<a href="#/demo/adv-expand">使用示例</a>',desc_en:'Node expand/close button position (left/top/right/bottom/hide). This setting of the node will override the global expandHolderPosition setting. Even if the node does not have child nodes, it can display the expand/collapse button, which can realize the effect of some nodes displaying the expand/collapse button;<a href="#/demo/adv-expand">Use example</a>',type:"string",notnull:"N",default_value:"hide"},{option:"expanded",desc:'手工设置节点的展开收缩状态;<a href="#/demo/adv-expand">使用示例</a>',desc_en:'Manually set the expansion and contraction state of the node;<a href="#/demo/adv-expand">Use example</a>',type:"boolean",notnull:"N",default_value:"true"},{option:"fixed",desc:'是否使用固定位置（以当前图谱左上角为0,0的坐标系）;<a href="#/demo/layout-diy">使用示例</a>',desc_en:'Whether to use a fixed position (with the upper left corner of the current map as the 0,0 coordinate system);<a href="#/demo/layout-diy">Use example</a>',type:"boolean",notnull:"N",default_value:"false"},{option:"x",desc:"x坐标（以当前图谱左上角为0,0的坐标系）,fixed=true时有效",desc_en:"x coordinate (with the upper left corner of the current map as the 0,0 coordinate system), effective when fixed=true",type:"int",notnull:"N",default_value:""},{option:"y",desc:"y坐标（以当前图谱左上角为0,0的坐标系）,fixed=true时有效",desc_en:"y coordinate (with the upper left corner of the current map as the 0,0 coordinate system), effective when fixed=true",type:"int",notnull:"N",default_value:""},{option:"offset_x",desc:"节点横向偏移量",desc_en:"Node horizontal offset",type:"int",notnull:"N",default_value:"0"},{option:"offset_y",desc:"节点纵向偏移量",desc_en:"Node vertical offset",type:"int",notnull:"N",default_value:"0"},{option:"innerHTML",desc:'（请尽量不使用此属性，因为使用插槽能更方便更规范的自定义节点内容）用HTML自定义节点内部的内容，当此属性不为空时，text属性将失效;<a href="#/demo/node">使用示例</a>',desc_en:'Use HTML to customize the content inside the node. When this property is not empty, the text property will be invalid;<a href="#/demo/node">Use example</a>',type:"string",notnull:"N",default_value:""},{option:"html",desc:'（请尽量不使用此属性，因为使用插槽能更方便更规范的自定义节点内容）用HTML自定义节点，当此属性不为空时，节点的所有样式属性将失效<a href="#/demo/node">使用示例</a>',desc_en:'Use HTML to customize the node. When this property is not empty, all style properties of the node will be invalid<a href="#/demo/node">Use example</a>',type:"string",notnull:"N",default_value:""},{option:"data",desc:'<span style="color:red">自定义属性需要放在这里，才能在后续使用中从节点获取，如:{myKey1: _value1,myKey2: _value2}</span>，示例1：<a href="#/demo/adv-slot">使用自定义属性作为节点名称/节点图标</a>，示例1：<a href="#/demo/adv-data-filter">使用自定义属性进行筛选</a>',desc_en:'<span style="color:red">Custom attributes need to be placed here, so they can be retrieved from the node later, such as:{myKey1: _value1,myKey2: _value2}</span>, example1:<a href="#/demo/adv-slot">Use custom attributes as node name/node icon</a>, example2:<a href="#/demo/adv-data-filter">Use custom attributes for filtering</a>',type:"Object",notnull:"N",default_value:""}],r=[{option:"targetNodes",desc:"类型:RGNode[];获取与当前节点存在关系的其他所有节点，这些节点中包含的当前节点的父节点和子节点，如果只想获取父节点请使用lot.parent,获取子节点请使用lot.childs",desc_en:"Get all other nodes that have a relationship with the current node, these nodes include the parent and child nodes of the current node. If you only want to get the parent node, please use lot.parent, to get child nodes, please use lot.childs",type:"",notnull:"",default_value:""},{option:"targetFrom",desc:"类型:RGNode[];获取有关系指向当前节点的其他节点",desc_en:"Get all other nodes that have a relationship with the current node, these nodes include the parent and child nodes of the current node. If you only want to get the parent node, please use lot.parent, to get child nodes, please use lot.childs",type:"",notnull:"",default_value:""},{option:"targetTo",desc:"类型:RGNode[];获取当前节点指向的其他所有节点",desc_en:"Get all other nodes that have a relationship with the current node, these nodes include the parent and child nodes of the current node. If you only want to get the parent node, please use lot.parent, to get child nodes, please use lot.childs",type:"",notnull:"",default_value:""},{option:"lot",desc:"获取与当前节点相关的布局信息，其中包含了当前布局器为其设置的坐标、层级、权重、上下级节点等信息",desc_en:"Get the layout information of the current node, which includes the coordinates, level, weight, upper and lower level nodes set for it by the current layout",type:"",notnull:"",default_value:""},{option:"lot.parent",desc:"类型:RGNode;单独说明lot中的这个属性，他可以获取节点的父节点，这个父节点是由布局器分析出来的父节点，在有循环闭合回路的关系网中是不准确的，他会强行从多个中取一个",desc_en:"This property in lot can be used to get the parent node of the node. This parent node is analyzed by the layout. In a relationship network with a closed loop, it is not accurate. It will forcefully pick one from multiple",type:"",notnull:"",default_value:""},{option:"lot.childs",desc:"类型:RGNode[];单独说明lot中的这个属性：他可以获取节点的子节点，这个子节点是由布局器分析出来的子节点，在有循环闭合回路的关系网中是不完整的，他会强行剔除一些冲突的子节点",desc_en:"This property in lot can be used to get the child nodes of the node. These child nodes are analyzed by the layout. In a relationship network with a closed loop, it is incomplete. It will forcefully eliminate some conflicting child nodes",type:"",notnull:"",default_value:""}];var c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("h3",[e._v(" "+e._s(e.getTextByLang(e.english,["Node 节点","Node json options"]))+" ")]),t("div",[t("div",{staticClass:"c-doc-title"},[e._v(" "+e._s(e.getTextByLang(e.english,["Arributes / 选项:","Node json options:"]))+" ")]),t("RGObjectOptions",{attrs:{data:e.list_data_attributes,type:"options"}}),t("div",{staticStyle:{"font-size":"12px",padding:"20px",color:"#888888"}},[e._v(" "+e._s(e.getTextByLang(e.english,["更多不常用属性、以及实验性的属性请参考：","Please refer to the documentation and API for more uncommon options and experimental properties:"]))+" "),t("a",{staticStyle:{"font-size":"12px",color:"#1989fa"},attrs:{href:"/#/docs/graph-instance-api"}},[e._v(" "+e._s(e.getTextByLang(e.english,["描述文件与API","Typescript description file"]))+" ")])])],1),t("div",[t("div",{staticClass:"c-doc-title"},[e._v(" "+e._s(e.getTextByLang(e.english,["Runtime-properties / 运行时属性:","Runtime-properties of Node"]))+" ")]),t("span",{staticStyle:{color:"#c0a10b","font-size":"12px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["说明：以下内容是根据节点和关系数据生成的，不建议直接修改。","Note: The following content is generated based on node and relationship data, and direct modifications are not recommended."]))+" ")]),t("RGObjectOptions",{attrs:{data:e.list_data_runtime,type:"properties"}})],1)])},p=[];const u={name:"NodeAttributes",components:{RGObjectOptions:s},data(){return{list_data_attributes:i,list_data_runtime:r,list_data_events:[],list_data_methods:[],list_data_slot:[],checkedRoute:null}},computed:{...a(["english"])},methods:{getTextByLang:d}},n={};var h=l(u,c,p,!1,f,"fabf34b8",null,null);function f(e){for(let o in n)this[o]=n[o]}const v=function(){return h.exports}();export{v as default};
