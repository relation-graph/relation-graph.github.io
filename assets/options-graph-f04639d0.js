import{m as s,n as o}from"./index-ebbcd0b3.js";import{g as l}from"./LangUtils-019ecd1f.js";import{R as i}from"./index-d89b5bea.js";const c=[{option:"options",desc:"图谱配置，一个对象，里面包含了具体的选项：",type:"Object",notnull:"Y",default_value:"",desc_en:"Graph configuration, an object that contains specific options:"},{option:'<span class="c-ops-tag">options.</span>debug',desc:"是否开始调试模式，调试模式下会在控制台打印额外的日志信息",type:"boolean",notnull:"N",default_value:"false",desc_en:"Whether to start debug mode, extra log information will be printed in the console in debug mode"},{option:'<span class="c-ops-tag">options.</span>showDebugPanel',desc:"是否显示调试按钮，通过此按钮可以打印配置、数据等",type:"boolean",notnull:"N",default_value:"false",desc_en:"Whether to display the debug button, which can be used to print configurations, data, etc."},{option:'<span class="c-ops-tag">options.</span>backgroundColor',desc:"图谱背景颜色，你也可以通过样式穿透来设置",type:"string",notnull:"N",default_value:"",desc_en:"Graph background color, you can also set it through style penetration"},{option:'<span class="c-ops-tag">options.</span>backgroundImage',desc:"图谱水印url,如：https://ssl.relation-graph.com/images/relatioon-graph-canvas-bg.png",type:"string",notnull:"N",default_value:"",desc_en:"Graph watermark url, e.g., https://ssl.relation-graph.com/images/relatioon-graph-canvas-bg.png"},{option:'<span class="c-ops-tag">options.</span>backgroundImageNoRepeat',desc:"只在右下角显示水印，不重复显示水印",type:"boolean",notnull:"N",default_value:"true",desc_en:"Display watermark only at the bottom right, do not repeat the watermark"},{option:'<span class="c-ops-tag">options.</span>allowShowMiniToolBar',desc:"是否显示工具栏",type:"boolean",notnull:"N",default_value:"true",desc_en:"Whether to display the toolbar"},{option:'<span class="c-ops-tag">options.</span>allowSwitchLineShape',desc:"是否在工具栏中显示切换线条形状的按钮",type:"boolean",notnull:"N",default_value:"true",desc_en:"Whether to display the button to switch line shape in the toolbar"},{option:'<span class="c-ops-tag">options.</span>allowSwitchJunctionPoint',desc:"是否在工具栏中显示切换连接点位置的按钮",type:"boolean",notnull:"N",default_value:"false",desc_en:"Whether to display the button to switch junction point position in the toolbar"},{option:'<span class="c-ops-tag">options.</span>allowAutoLayoutIfSupport',desc:"是否在工具栏中显示【自动布局】按钮（只有在布局支持且此选项为true时才会显示的按钮）",type:"boolean",notnull:"N",default_value:"true",desc_en:'Whether to display the "Auto Layout" button in the toolbar (this button will only be displayed if the layout supports and this option is true)'},{option:'<span class="c-ops-tag">options.</span>allowShowRefreshButton',desc:"是否在工具栏中显示【刷新】按钮",type:"boolean",notnull:"N",default_value:"true",desc_en:'Whether to display the "Refresh" button in the toolbar'},{option:'<span class="c-ops-tag">options.</span>allowShowDownloadButton',desc:"是否在工具栏中显示【下载图片】按钮",type:"boolean",notnull:"N",default_value:"true",desc_en:'Whether to display the "Download Image" button in the toolbar'},{option:'<span class="c-ops-tag">options.</span>downloadImageFileName',desc:"下载图片时，图片的名称",type:"string",notnull:"N",default_value:"Random",desc_en:"The name of the image when downloading"},{option:'<span class="c-ops-tag">options.</span>disableZoom',desc:"是否禁用图谱的缩放功能",type:"boolean",notnull:"N",default_value:"false",desc_en:"Whether to disable the zoom function of the graph"},{option:'<span class="c-ops-tag">options.</span>disableDragNode',desc:"是否禁用图谱中节点的拖动",type:"boolean",notnull:"N",default_value:"false",desc_en:"Whether to disable the dragging of nodes in the graph"},{option:'<span class="c-ops-tag">options.</span>disableNodeClickEffect',desc:"是否禁用节点默认的点击效果（选中、闪烁）",type:"boolean",notnull:"N",default_value:"false",desc_en:"Whether to disable the default click effect of the node (select, flicker)"},{option:'<span class="c-ops-tag">options.</span>disableLineClickEffect',desc:"是否禁用线条默认的点击效果（选中、闪烁）",type:"boolean",notnull:"N",default_value:"false",desc_en:"Whether to disable the default click effect of the line (select, flicker)"},{option:'<span class="c-ops-tag">options.</span>moveToCenterWhenRefresh',desc:"当图谱刷新后（调用setJsonData或refresh方法都会触发），让图谱根据节点居中（图片会默认将根节点作为中心展示，此选项会根据节点分布寻找中心）",type:"boolean",notnull:"N",default_value:"false",desc_en:"After the graph is refreshed (triggered by calling setJsonData or refresh method), let the graph center according to the nodes (the image will default to display the root node as the center, this option will find the center according to the node distribution)"},{option:'<span class="c-ops-tag">options.</span>zoomToFitWhenRefresh',desc:"当图谱刷新后（调用setJsonData或refresh方法都会触发），是否让图谱缩放到适合可见区域大小，此选项不适用于fixed和force布局",type:"boolean",notnull:"N",default_value:"true",desc_en:"After the graph is refreshed (triggered by calling setJsonData or refresh method), whether to zoom the graph to fit the visible area size, this option is not applicable to fixed and force layouts"},{option:'<span class="c-ops-tag">options.</span>useAnimationWhenRefresh',desc:"当图谱刷新后（调用setJsonData或refresh方法都会触发），使用动画让图居中、缩放",type:"boolean",notnull:"N",default_value:"true",desc_en:"After the graph is refreshed (triggered by calling setJsonData or refresh method), use animation to center and zoom the graph"},{option:'<span class="c-ops-tag">options.</span>defaultFocusRootNode',desc:"默认为根节点添加一个被选中的样式",type:"boolean",notnull:"N",default_value:"true",desc_en:"Add a selected style to the root node by default"},{option:'<span class="c-ops-tag">options.</span>allowShowZoomMenu',desc:"是否在右侧菜单栏显示放大缩小的按钮，此设置和disableZoom不冲突",type:"boolean",notnull:"N",default_value:"true",desc_en:"Whether to show the zoom in and out buttons in the right menu bar, this setting does not conflict with disableZoom"},{option:'<span class="c-ops-tag">options.</span>placeSingleNode',desc:"自动为孤点分配位置（当孤点设置了fixed=true时则不处理）",type:"boolean",notnull:"N",default_value:"true",desc_en:"Automatically assign positions to isolated points (will not be processed if the isolated point is set to fixed=true)"},{option:'<span class="c-ops-tag">options.</span>isMoveByParentNode',desc:"是否在拖动节点后让子节点跟随",type:"boolean",notnull:"N",default_value:"false",desc_en:"Whether to let child nodes follow after dragging the node"},{option:'<span class="c-ops-tag">options.</span>hideNodeContentByZoom',desc:"是否根据缩放比例隐藏节点内容",type:"boolean",notnull:"N",default_value:"false",desc_en:"Whether to hide node content based on zoom ratio"},{option:'<span class="c-ops-tag">options.</span>defaultNodeShape',desc:"默认的节点形状，0:圆形；1:矩形",type:"int",notnull:"N",default_value:"1",desc_en:"Default node shape, 0: circle; 1: rectangle"},{option:'<span class="c-ops-tag">options.</span>defaultNodeColor',desc:"默认的节点背景颜色",type:"string",notnull:"N",default_value:"",desc_en:"Default node background color"},{option:'<span class="c-ops-tag">options.</span>defaultNodeFontColor',desc:"默认的节点文字颜色",type:"string",notnull:"N",default_value:"",desc_en:"Default node text color"},{option:'<span class="c-ops-tag">options.</span>defaultNodeBorderColor',desc:"默认的节点边框颜色",type:"string",notnull:"N",default_value:"",desc_en:"Default node border color"},{option:'<span class="c-ops-tag">options.</span>defaultNodeBorderWidth',desc:"默认的节点边框粗细（像素）",type:"int",notnull:"N",default_value:"1",desc_en:"Default node border thickness (pixels)"},{option:'<span class="c-ops-tag">options.</span>defaultNodeWidth',desc:"节点的默认宽度",type:"int",notnull:"N",default_value:"-",desc_en:"Default width of the node"},{option:'<span class="c-ops-tag">options.</span>defaultNodeHeight',desc:"节点的默认高度",type:"int",notnull:"N",default_value:"-",desc_en:"Default height of the node"},{option:'<span class="c-ops-tag">options.</span>defaultJunctionPoint',desc:'默认的连线与节点接触的方式（border:边缘/ltrb:上下左右/tb:上下/lr:左右）<span style="color:red">当布局为树状布局时应使用tb或者lr，这样才会好看</span>',type:"string",notnull:"N",default_value:"-",desc_en:'Default way of connection between the line and the node (border: edge / ltrb: top, bottom, left, right / tb: top, bottom / lr: left, right). <span style="color:red">When the layout is a tree layout, tb or lr should be used, which will look nice</span>'},{option:'<span class="c-ops-tag">options.</span>defaultExpandHolderPosition',desc:"默认的节点展开/关闭按钮位置（left/top/right/bottom）",type:"string",notnull:"N",default_value:"hide",desc_en:"Default position of the node expand/collapse button (left/top/right/bottom)"},{option:'<span class="c-ops-tag">options.</span>defaultLineColor',desc:"默认的线条颜色",type:"string",notnull:"N",default_value:"",desc_en:"Default line color"},{option:'<span class="c-ops-tag">options.</span>checkedLineColor',desc:"当线条被选中时的颜色",type:"string",notnull:"N",default_value:"#FD8B37",desc_en:"Color of the line when selected"},{option:'<span class="c-ops-tag">options.</span>defaultLineWidth',desc:"默认的线条粗细（像素）",type:"int",notnull:"N",default_value:"1",desc_en:"Default line thickness (in pixels)"},{option:'<span class="c-ops-tag">options.</span>defaultLineShape',desc:'默认的线条样式（1:直线/2:样式2/3:样式3/4:折线/5:样式5/6:样式6）<a href="#/demo/line">使用示例</a>',type:"int",notnull:"N",default_value:"",desc_en:'Default line style (1: straight line / 2: style 2 / 3: style 3 / 4: polyline / 5: style 5 / 6: style 6). <a href="#/demo/line">Use example</a>'},{option:'<span class="c-ops-tag">options.</span>defaultLineMarker',desc:'默认的线条箭头样式，示例参考：<a href="#/options-tools">配置工具</a>中的选项：连线箭头样式',type:"Object",notnull:"N",default_value:"",desc_en:'Default arrow style of the line, example reference: options in <a href="#/options-tools">configuration tool</a>: connection arrow style'},{option:'<span class="c-ops-tag">options.</span>defaultShowLineLabel',desc:"默认是否显示连线文字，v2版本此选项已无效，主要是这个选项没什么用",type:"boolean",notnull:"N",default_value:"true",desc_en:"Whether to show line text by default, this option is no longer valid in v2, mainly because this option is not very useful"},{option:'<span class="c-ops-tag">options.</span>layout',desc:'布局方式，布局配置详情参考<a href="#/docs/layout">Layout布局</a>',type:"Object",notnull:"N",default_value:"center layout",desc_en:'Layout method, for layout configuration details refer to <a href="#/docs/layout">Layout</a>'}],p=[{option:"on-node-click",desc:'点击节点事件，注意：请使用&lt;graph :on-node-click=functionName /&gt;的方式来绑定节点事件,<a href="#/demo/adv-effect">使用示例</a>',type:"(nodeObject, $event)",notnull:"",default_value:"",desc_en:'Click node event, note: please use &lt;graph :on-node-click=functionName /&gt; to bind the node event, <a href="#/demo/adv-effect">use example</a>'},{option:"on-node-expand",desc:'展开节点事件，仅当节点的【展开/收缩】按钮可用时有效，注意：请使用&lt;graph :on-node-expand=functionName /&gt;的方式来绑定事件,<a href="/#/demo/scene-org">使用示例</a>',type:"(nodeObject, $event)",notnull:"",default_value:"",desc_en:'Expand node event, only valid when the [expand/collapse] button of the node is available, note: please use &lt;graph :on-node-expand=functionName /&gt; to bind the event, <a href="/#/demo/scene-org">use example</a>'},{option:"on-node-collapse",desc:'收缩节点事件，仅当节点的【展开/收缩】按钮可用时有效，注意：请使用&lt;graph :on-node-collapse=functionName /&gt;的方式来绑定事件,<a href="/#/demo/scene-org">使用示例</a>',type:"(nodeObject, $event)",notnull:"",default_value:"",desc_en:'Collapse node event, only valid when the [expand/collapse] button of the node is available, note: please use &lt;graph :on-node-collapse=functionName /&gt; to bind the event, <a href="/#/demo/scene-org">use example</a>'},{option:"on-line-click",desc:'点击线条事件，注意：请使用&lt;graph :on-line-click=functionName /&gt;的方式来绑定关系线事件,<a href="#/demo/adv-effect">使用示例</a>',type:"(lineObject, linkObject, $event)",notnull:"",default_value:"",desc_en:'Click line event, note: please use &lt;graph :on-line-click=functionName /&gt; to bind the relationship line event, <a href="#/demo/adv-effect">use example</a>'},{option:"on-image-download",desc:'当点击下载图片按钮时触发，可通过此事件接收到一个图谱的dom对象，你可以根据此对象来生成图片，如果要阻止默认的下载动作，此方法需要返回false。注意：请使用&lt;graph :on-image-download=functionName /&gt;的方式来绑定关系线事件,<a href="#/demo/adv-effect-download">使用示例</a>',type:"(cavansDom, $event)",notnull:"",default_value:"",desc_en:'Triggered when the download image button is clicked, you can receive a dom object of a graph through this event, you can generate an image based on this object, if you want to prevent the default download action, this method needs to return false. Note: Please use &lt;graph :on-image-download=functionName /&gt; to bind the relationship line event, <a href="#/demo/adv-effect-download">use example</a>'},{option:"onNodeDragEnd",desc:"当节点拖动结束时",type:"(nodeObject, $event)",notnull:"",default_value:"",desc_en:"When the node drag ends"},{option:"onCanvasDragEnd",desc:"当画布拖动结束时",type:"($event)",notnull:"",default_value:"",desc_en:"When the canvas drag ends"},{option:"onContextmenu",desc:"当在图谱中点击右键时",type:"($event, objectType:canvas|node|link|line, object:Node|Link|Line|undefined)",notnull:"",default_value:"",desc_en:"When right-clicking in the graph"},{option:"onCanvasClick",desc:"画布被点击时",type:"($event)",notnull:"",default_value:"",desc_en:"When the canvas is clicked"}],d=[{option:"options",desc:'图片会根据options生成一个包含默认值的完整配置对象，它就是options，可以通过this.$refs.graphRef.getInstance().options来获取；<span style="color:red">你还可以从这个对象中获取当前图谱的可见区域大小、画布大小、画布偏移量、当前布局器等运行时对象。</span>',type:"",notnull:"",default_value:"",desc_en:'The image will generate a complete configuration object containing default values according to options, which is options, it can be obtained through this.$refs.graphRef.getInstance().options; <span style="color:red">You can also get the visible area size, canvas size, canvas offset, current layout and other runtime objects of the current graph from this object.</span>'}],r=[{option:"getInstance()",desc:`
获取图谱实例，实例中会包含一些实用方法，可以通过this.refs.graphRef.getInstance()来获取。
<br />【Methods / 方法:】中的方法均来自getInstance()获取的【graphInstance/实例】，是【graphInstance/实例】方法在【组件】上的快捷方式。
<br />此实例支持的方法见：<a href="#/docs/graph-instance-api">实例方法api</a>。
`,type:"",notnull:"",default_value:"",desc_en:`
Get the graph instance, the instance will contain some useful methods, you can get it through this.refs.graphRef.getInstance()
<br />The following methods of the component(【Methods:】) are shortcuts of instance methods on the component obtained from getInstance() . 
<br />The methods supported by this instance are as follows: <a href="#/docs/graph-instance-api">Instance method api</a>.
`},{option:"setOptions(options, callback)",desc:'设置/重新设置图谱的选项,options：图谱选项,不能为空;callback:当设置完成后的回调函数,可以为空;options选项设置方法示例：<SeeksRelationGraph ref="graphRef" :options="userGraphSetting" /> 更改设置：this.refs.graphRef.setOptions(newOptions, callback);',type:"",notnull:"",default_value:"",desc_en:'Set/reset the options of the graph, options: graph options, cannot be empty; callback: the callback function after the setting is completed, can be empty; options setting method example: &lt;SeeksRelationGraph ref="graphRef" :options="userGraphSetting" /&gt; Change settings: this.refs.graphRef.setOptions(newOptions, callback);'},{option:"setJsonData(jsonData, callback)",desc:`
设置/重新设置图谱中的数据,jsonData：图谱数据,不能为空，jsonData中需要包含三要素（rootId、nodes、links）<a href="#/demo/adv-expand">数据格式示例</a>;callback:当设置完成后的回调函数,可以为空;
<br />this.refs.graphRef.setJsonData(jsonData, callback)方法是一个方便使用的方法，它和以下代码等效：
<div class="c-rgc-code">
const graphInstance = this.refs.graphRef.getInstance();
<br />graphInstance.addNodes(jsonData.nodes);
<br />graphInstance.addLines(jsonData.lines);
<br />graphInstance.rootNode = graphInstance.getNodeById(jsonData.rootId);
<br />await graphInstance.doLayout(); // 使用graphOptions中设置的布局器布局
<br />await graphInstance.moveToCenter(); // 根据节点分布找到画面中心并居中
<br />await graphInstance.zoomToFit(); // 缩放到合适大小，以让所有节点可以在可见区域展示
<br />await callback();
</div>
<br />graphInstance中更多可用的方法请参考：<a href="#/docs/graph-instance-api">实例方法api</a>

`,type:"",notnull:"",default_value:"",desc_en:`
Set/reset the data in the graph, jsonData: graph data, cannot be empty, jsonData needs to contain three elements (rootId, nodes, links) <a href="#/demo/adv-expand">Data format example</a>; callback: the callback function after the setting is completed, can be empty;
<br />The this.refs.graphRef.setJsonData(jsonData, callback) method is a convenient method that is equivalent to the following code:
<div class="c-rgc-code">
const graphInstance = this.refs.graphRef.getInstance();
<br />graphInstance.addNodes(jsonData.nodes);
<br />graphInstance.addLines(jsonData.lines);
<br />graphInstance.rootNode = graphInstance.getNodeById(jsonData.rootId);
<br />await graphInstance.doLayout(); // Layout using the layouter set in graphOptions
<br />await graphInstance.moveToCenter(); // Find the center based on node distribution and center the view
<br />await graphInstance.zoomToFit(); // Zoom to fit, so that all nodes can be displayed in the visible area
<br />await callback();
</div>
<br />For more available methods in graphInstance, please refer to the <a href="#/docs/graph-instance-api">Instance Methods API</a>.

`},{option:"appendJsonData(jsonData, callback)",desc:`
向图谱中追加数据,jsonData：图谱数据,不能为空，<a href="#/demo/adv-dynamic-data">数据格式示例</a>;callback:当设置完成后的回调函数,可以为空;
<br />this.refs.graphRef.appendJsonData(jsonData, callback)方法是一个方便使用的方法，它和以下代码等效：
<div class="c-rgc-code">
const graphInstance = this.refs.graphRef.getInstance();
<br />graphInstance.addNodes(jsonData.nodes);
<br />graphInstance.addLines(jsonData.lines);
<br />await graphInstance.doLayout(); // 使用graphOptions中设置的布局器布局
<br />await callback();
</div>
`,type:"",notnull:"",default_value:"",desc_en:`
Append data to the graph, jsonData: graph data, cannot be empty, <a href="#/demo/adv-dynamic-data">Data format example</a>; callback: the callback function after the setting is completed, can be empty;
<div class="c-rgc-code">
const graphInstance = this.refs.graphRef.getInstance();
<br />graphInstance.addNodes(jsonData.nodes);
<br />graphInstance.addLines(jsonData.lines);
<br />await graphInstance.doLayout(); // Layout using the layouter set in graphOptions
<br />await callback();
</div>
`},{option:"refresh()",desc:'刷新布局，你可以通过getNodes()获取当前图谱中的节点，并通过节点的isHide属性隐藏一些节点，再调用refresh()方法可以根据依然显示的节点重新布局图谱;或者在动态向图谱中添加数据候刷新布局;当你的图片默认默认状态是不可见的时，在切换到可见状态下后可能会显示不正常，这时你调用一下refresh()方法可以让图片正确显示。<span style="color:red">总之一句话：当图谱中的节点看起来不正常时，你都可以调用refresh方法来让布局器重新为节点分配位置。</span>',desc_en:'Refresh the layout, you can get the current nodes of the graph through getNodes() and hide some nodes through the isHide property of the nodes, then call the refresh() method to re-layout the graph according to the still displayed nodes; or refresh the layout after dynamically adding data to the graph; when your picture is default invisible, it may not display properly after switching to visible state, at this time you can call the refresh() method to display the picture correctly.<span style="color:red">In a word: when the nodes in the graph look abnormal, you can call the refresh method to let the layouter re-allocate positions for the nodes.</span>',type:"",notnull:"",default_value:""},{option:"onGraphResize()",desc:'当用于展示图谱的div容器大小发生变化时，可以调用此方法来让图谱各个部件展示到正确位置;<a href="#/demo/graph-resize">使用示例</a>',desc_en:'When the size of the div container used to display the graph changes, you can call this method to display each component of the graph in the correct position;<a href="#/demo/graph-resize">Use example</a>',type:"",notnull:"",default_value:""},{option:"focusRootNode()",desc:"选中图谱的根节点居中并选中;",desc_en:"Select and center the root node of the graph;",type:"",notnull:"",default_value:""},{option:"focusNodeById(nodeId)",desc:"根据节点id在图谱中选中该节点并居中;",desc_en:"Select and center the node in the graph based on the node id;",type:"",notnull:"",default_value:""},{option:"getNodeById(nodeId)",desc:"根据节点id获取节点对象;",desc_en:"Get the node object based on the node id;",type:"",notnull:"",default_value:""},{option:"removeNodeById(nodeId)",desc:"移除指定id对应的节点，彻底移除，移除element和数据对象;",desc_en:"Remove the node corresponding to the specified id, completely remove, remove the element and data object;",type:"",notnull:"",default_value:""},{option:"downloadAsImage(format, fileName)",desc:"下载图片，将当前图谱导出为图片，format可以为：png/jpg，默认为png;fileName为下载图片的文件名，此方法需要通过getInstance()获取实例调用：this.refs.graphRef.getInstance().downloadAsImage(a,b)",type:"",notnull:"",default_value:""},{option:"getNodes()",desc:"获取图谱中所有的节点对象，可以直接修改该对象的属性，这些对象不能用于JSON序列化;",desc_en:"Get all node objects in the graph, you can directly modify the properties of this object, these objects cannot be used for JSON serialization;",type:"",notnull:"",default_value:""},{option:"getLinks()",desc:'获取图谱中所有的关系对象，<a href="#/docs/link">详细介绍</a>，这些对象不能用于JSON序列化;',desc_en:'Get all relationship objects in the graph, <a href="#/docs/link">detailed introduction</a>, these objects cannot be used for JSON serialization;',type:"",notnull:"",default_value:""},{option:"getGraphJsonData()",desc:"获取当前图谱的节点、关系数据的json数据;",desc_en:"Get the node, relationship data and json data of the current graph;",type:"",notnull:"",default_value:""},{option:"getGraphJsonOptions()",desc:"获取当前图谱的完整的配置信息;",desc_en:"Get the complete configuration information of the current graph;",type:"",notnull:"",default_value:""},{option:"dataUpdated()",desc:"有时候在更改数据后视图并没有同步（比如直接修改对象属性更改了线条color属性值后，但图谱上的线条颜色没有变化时），可以调用此方法;",desc_en:"Sometimes the view does not synchronize after changing the data (for example, after directly modifying the object property to change the color attribute value of the line, but the color of the line on the graph does not change), you can call this method;",type:"",notnull:"",default_value:""}],h=[{option:"node",desc:'自定义节点内容的插槽，通过此功能可以完全自定义节点的样式，实现图片节点、闪烁节点等等你想要的效果。<a href="#/demo/adv-slot">使用示例</a>',desc_en:'A slot for customizing the content of nodes. With this feature, you can completely customize the style of the nodes, achieving effects such as picture nodes, flickering nodes, and any other effects you want. <a href="#/demo/adv-slot">Use example</a>',type:"{ node }",notnull:"",default_value:""},{option:"line",desc:'自定义连线内容的插槽，通过此功能可以完全自定义连线的样式，实现自定义样式线条、自定义连线文字位置等等你想要的效果。<a href="#/demo/adv-line-slot">使用示例1</a> <a href="#/demo/adv-line-slot2">使用示例2</a>',desc_en:'A slot for customizing the content of lines. With this feature, you can completely customize the style of the lines, achieving effects such as custom style lines, custom line text positions, and any other effects you want. <a href="#/demo/adv-slot-line">Use example</a>',type:"{ line }",notnull:"",default_value:""},{option:"graph-plug",desc:'自定义图谱区域内容的插槽，通过此功能可以在图谱中显示一些内容，比如筛选区域，图例说明等。<a href="#/demo/adv-other-slot">使用示例</a>',desc_en:'A slot for customizing the content of the graph area. With this feature, you can display some content in the graph, such as a filtering area, legend descriptions, etc. <a href="#/demo/adv-line-slot">Use example1</a> <a href="#/demo/adv-line-slot2">Use example2</a>',type:"{ relationGraph }",notnull:"",default_value:""},{option:"canvas-plug",desc:'自定义图谱画布区域内容的插槽，通过此功能可以在画布中显示一些内容，这些内容会和节点、线条一样可以被缩放、根据画布被拖动。<a href="#/demo/adv-other-slot">使用示例</a>',desc_en:'A slot for customizing the content of the graph canvas area. With this feature, you can display some content in the canvas, which can be scaled and dragged around the canvas like nodes and lines. <a href="#/demo/adv-other-slot">Use example</a>',type:"{ relationGraph }",notnull:"",default_value:""}];var u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h3",[e._v(" "+e._s(e.getTextByLang(e.english,["设置图谱的选项和事件：","Set the options and events of the graph:"]))+" ")]),t("div",{staticClass:"c-rgc-code",staticStyle:{"line-height":"20px"}},[t("div",{staticClass:"highlight highlight-text-html-vue"},[t("pre",[e._v("<"),t("span",{staticClass:"pl-ent"},[e._v("template")]),e._v(`>
   <`),t("span",{staticClass:"pl-ent"},[e._v("div")]),e._v(`>
     <`),t("span",{staticClass:"pl-ent"},[e._v("div")]),e._v(" "),t("span",{staticClass:"pl-e"},[e._v("style")]),e._v("="),e._m(0),e._v(`>
        <`),t("span",{staticClass:"pl-ent"},[e._v("RelationGraph")]),e._v(" "),t("span",{staticClass:"pl-e"},[e._v("ref")]),e._v("="),e._m(1),e._v(" :"),t("span",{staticClass:"pl-e"},[e._v("options")]),e._v("="),e._m(2),e._v(" "),e._m(3),e._v(` />
     </`),t("span",{staticClass:"pl-ent"},[e._v("div")]),e._v(`>
   </`),t("span",{staticClass:"pl-ent"},[e._v("div")]),e._v(`>
 </`),t("span",{staticClass:"pl-ent"},[e._v("template")]),e._v(`>

 `),e._m(4),e._v(`
`),t("span",{staticClass:"pl-s1"},[e._v("...")]),e._v(`
`),e._m(5),e._v(`
`),e._m(6),e._v(`
`),e._m(7),e._v(`
`),e._m(8),e._v(`
        `),t("div",{staticStyle:{border:"#ff0000 solid 1px","background-color":"#fad2d2",padding:"0px"}},[e._v(`
`),e._m(9),e._v(`
`),e._m(10),e._v(`
`),e._m(11),e._v(`
`),e._m(12),e._v(`
`),t("span",{staticClass:"pl-s1"},[e._v("         "),t("span",{staticClass:"pl-c"},[t("span",{staticClass:"pl-c"},[e._v(e._s(e.getTextByLang(e.english,["// 这里可以参考下面表格中options的说明进行设置","// For more options, please refer to the options description below."])))]),e._v(`
`)])]),e._v(`
`),t("span",{staticClass:"pl-s1"},[e._v("       }")]),e._v(`
          `)]),e._v(`
`),t("span",{staticClass:"pl-s1"},[e._v("     }")]),e._v(`
`),t("span",{staticClass:"pl-s1"},[e._v("   }")]),e._v(`
`),t("span",{staticClass:"pl-s1"},[e._v(" }")]),e._v(`
`),e._m(13)])])]),t("h3",[e._v(" "+e._s(e.getTextByLang(e.english,["图谱的选项、方法、事件、插槽：","Options, methods, events, slots of the graph:"]))+" ")]),t("div",[t("div",{staticClass:"c-doc-title"},[e._v(" "+e._s(e.getTextByLang(e.english,["Arributes / 选项:","Options:"]))+" ")]),t("RGObjectOptions",{attrs:{data:e.list_data_attributes,type:"options"}}),t("div",{staticStyle:{"font-size":"12px",padding:"20px",color:"#888888"}},[e._v(" "+e._s(e.getTextByLang(e.english,["更多不常用属性、以及实验性的属性请参考：","Please refer to the documentation and API for more uncommon options and experimental properties:"]))+" "),t("a",{staticStyle:{"font-size":"12px",color:"#1989fa"},attrs:{href:"/#/docs/graph-instance-api"}},[e._v(" "+e._s(e.getTextByLang(e.english,["描述文件与API","Typescript description file"]))+" ")])])],1),t("div",[t("div",{staticClass:"c-doc-title"},[e._v(" "+e._s(e.getTextByLang(e.english,["Runtime-options / 运行时属性:","Runtime-options:"]))+" ")]),t("RGObjectOptions",{attrs:{data:e.list_data_runtime,type:"properties"}})],1),t("div",[t("div",{staticClass:"c-doc-title"},[e._v(" "+e._s(e.getTextByLang(e.english,["Methods / 方法:","Methods:"]))+" "),t("span",{staticStyle:{"font-size":"12px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["",""]))+" ")])]),t("RGObjectOptions",{attrs:{data:e.list_data_methods,type:"methods"}})],1),t("div",[t("div",{staticClass:"c-doc-title"},[e._v(" "+e._s(e.getTextByLang(e.english,["Events / 事件:","Events:"]))+" ")]),t("RGObjectOptions",{attrs:{data:e.list_data_events,type:"events"}})],1),t("div",[t("div",{staticClass:"c-doc-title"},[e._v(" "+e._s(e.getTextByLang(e.english,["Slots / 插槽:","Slots:"]))+" ")]),t("RGObjectOptions",{attrs:{data:e.list_data_slot,type:"slots"}})],1)])},f=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s"},[t("span",{staticClass:"pl-pds"},[e._v('"')]),e._v("height:calc(100vh - 60px);"),t("span",{staticClass:"pl-pds"},[e._v('"')])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s"},[t("span",{staticClass:"pl-pds"},[e._v('"')]),e._v("graphRef"),t("span",{staticClass:"pl-pds"},[e._v('"')])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[t("span",{staticClass:"pl-pds"},[e._v('"')]),e._v("options"),t("span",{staticClass:"pl-pds"},[e._v('"')])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticStyle:{border:"#00bb00 solid 1px","background-color":"#a3f8a3"}},[e._v(":"),t("span",{staticClass:"pl-e"},[e._v("on-node-click")]),e._v("="),t("span",{staticClass:"pl-s1"},[t("span",{staticClass:"pl-pds"},[e._v('"')]),e._v("onNodeClick"),t("span",{staticClass:"pl-pds"},[e._v('"')])]),e._v(" :"),t("span",{staticClass:"pl-e"},[e._v("on-line-click")]),e._v("="),t("span",{staticClass:"pl-s1"},[t("span",{staticClass:"pl-pds"},[e._v('"')]),e._v("onLineClick"),t("span",{staticClass:"pl-pds"},[e._v('"')])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v("<"),t("span",{staticClass:"pl-ent"},[e._v("script")]),e._v(">")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v(" "),t("span",{staticClass:"pl-k"},[e._v("export")]),e._v(" "),t("span",{staticClass:"pl-c1"},[e._v("default")]),e._v(" {")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v("   name"),t("span",{staticClass:"pl-k"},[e._v(":")]),e._v(" "),t("span",{staticClass:"pl-s"},[t("span",{staticClass:"pl-pds"},[e._v("'")]),e._v("Demo"),t("span",{staticClass:"pl-pds"},[e._v("'")])]),e._v(",")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v("   "),t("span",{staticClass:"pl-en"},[e._v("data")]),e._v("() {")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v("     "),t("span",{staticClass:"pl-k"},[e._v("return")]),e._v(" {")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v("       options"),t("span",{staticClass:"pl-k"},[e._v(":")]),e._v(" {")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v("         allowSwitchLineShape"),t("span",{staticClass:"pl-k"},[e._v(":")]),e._v(" "),t("span",{staticClass:"pl-c1"},[e._v("true")]),e._v(",")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v("         allowSwitchJunctionPoint"),t("span",{staticClass:"pl-k"},[e._v(":")]),e._v(" "),t("span",{staticClass:"pl-c1"},[e._v("true")]),e._v(",")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v("         defaultJunctionPoint"),t("span",{staticClass:"pl-k"},[e._v(":")]),e._v(" "),t("span",{staticClass:"pl-s"},[t("span",{staticClass:"pl-pds"},[e._v("'")]),e._v("border"),t("span",{staticClass:"pl-pds"},[e._v("'")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"pl-s1"},[e._v(" </"),t("span",{staticClass:"pl-ent"},[e._v("script")]),e._v(">")])}];const _={name:"GraphAttributes",components:{RGObjectOptions:i},data(){return{list_data_attributes:c,list_data_events:p,list_data_runtime:d,list_data_methods:r,list_data_slot:h,instance_api:[],checkedRoute:null}},computed:{...s(["english"])},methods:{getTextByLang:l}},n={};var v=o(_,u,f,!1,g,"a82ba2a6",null,null);function g(e){for(let a in n)this[a]=n[a]}const C=function(){return v.exports}();export{C as default};
