import g from"./relation-graph-logo-e4609733.js";import{n as r,h as f}from"./index-ef5ed09b.js";import"./svg-sprites-virtual-module-d0efe676.js";var m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"c-doc-toolbar"},[e("div",[e("div",{staticClass:"c-toolbar-item c-toolbar-logo"},[e("router-link",{attrs:{to:"/my-docs"}},[e("Logo",{attrs:{width:"30",height:"30"}})],1)],1),e("div",{staticClass:"c-toolbar-buttons"},[e("div",{staticClass:"c-mb-button",attrs:{title:"保存"},on:{click:t.saveGraph}},[t.savingToServer?e("svg",{staticClass:"c-loading-icon rg-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-lianjiezhong"}})]):e("i",{staticClass:"el-icon-upload"})]),e("div",{staticClass:"c-toolbar-item c-doc-title"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.docName,expression:"docName"}],domProps:{value:t.docName},on:{blur:t.updateDocName,input:function(s){s.target.composing||(t.docName=s.target.value)}}})]),e("div",{staticClass:"c-toolbar-item c-toolbar-split"}),e("div",{staticClass:"c-mb-button",class:{"c-mb-button-on":t.graphState.showDefaultNodeOptionsPanel,"c-mb-button-ing":t.options.creatingNodePlot}},[e("div",{attrs:{title:"创建节点"},on:{click:function(s){return s.stopPropagation(),t.toggleNodeOptionsPanel.apply(null,arguments)},mousedown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"left",37,s.key,["Left","ArrowLeft"])||"button"in s&&s.button!==0?null:(s.stopPropagation(),t.onNodeDragStart.apply(null,arguments))},touchstart:function(s){return s.stopPropagation(),t.onNodeDragStart.apply(null,arguments)}}},[e("svg-icon",{attrs:{"icon-class":"circle_plus"}})],1),e("div",{staticClass:"c-setting",staticStyle:{height:"70px",bottom:"-60px","padding-top":"10px"}},[e("div",{staticClass:"c-plug-icon",attrs:{title:"圆形节点"},on:{click:function(s){return t.startAddNode(s,0)}}},[e("svg-icon",{attrs:{"icon-class":"node-circle"}})],1),e("div",{staticClass:"c-plug-icon",attrs:{title:"正方形节点"},on:{click:function(s){return t.startAddNode(s,1)}}},[e("svg-icon",{attrs:{"icon-class":"node-rectangle"}})],1)])]),e("div",{staticClass:"c-mb-button",class:{"c-mb-button-on":t.graphState.showDefaultLineOptionsPanel,"c-mb-button-ing":t.options.creatingLinePlot},staticStyle:{"margin-left":"4px"}},[e("div",{attrs:{title:"创建连线"},on:{click:t.startAddLine}},[e("i",{staticClass:"el-icon-share"})]),e("div",{staticClass:"c-setting",staticStyle:{height:"160px",bottom:"-150px","padding-top":"10px"},attrs:{title:"正方形节点"}},[e("div",{staticClass:"c-plug-icon",attrs:{title:"直线"},on:{click:function(s){return t.startAddLine(s,1)}}},[e("svg-icon",{attrs:{"icon-class":"line-1"}})],1),e("div",{staticClass:"c-plug-icon",attrs:{title:"曲线1"},on:{click:function(s){return t.startAddLine(s,2)}}},[e("svg-icon",{attrs:{"icon-class":"line-2"}})],1),e("div",{staticClass:"c-plug-icon",attrs:{title:"曲线2"},on:{click:function(s){return t.startAddLine(s,3)}}},[e("svg-icon",{attrs:{"icon-class":"line-3"}})],1),e("div",{staticClass:"c-plug-icon",attrs:{title:"折线"},on:{click:function(s){return t.startAddLine(s,4)}}},[e("svg-icon",{attrs:{"icon-class":"line-4"}})],1),e("div",{staticClass:"c-plug-icon",attrs:{title:"曲线3"},on:{click:function(s){return t.startAddLine(s,5)}}},[e("svg-icon",{attrs:{"icon-class":"line-5"}})],1)])]),e("div",{staticClass:"c-toolbar-item c-toolbar-split"}),e("div",{staticClass:"c-mb-button",class:{"c-mb-button-on":t.graphState.showMoreActionPanel},attrs:{title:"更多操作"},on:{click:t.toggleMoreActionPanel}},[e("svg-icon",{attrs:{"icon-class":"circle_more"}})],1),e("div",{staticClass:"c-mb-button",class:{"c-mb-button-on":t.graphState.showDocInfoPanel},attrs:{title:"查看文档详情"},on:{click:t.toggleDocInfoPanel}},[e("i",{staticClass:"el-icon-files"})]),e("div",{staticStyle:{clear:"both"}})]),e("div",{staticStyle:{clear:"both"}})]),t.graphState.showDocInfoPanel?e("div",{staticClass:"c-more-action-panel"},[e("div",{staticStyle:{width:"330px","font-size":"12px",color:"#333333",padding:"10px","padding-bottom":"0px"}},[e("div",[e("span",{staticClass:"c-docinfo-key"},[t._v("创建时间：")]),t._v(t._s(t.$dayjs(t.doc.createTime||t.pageOpenTime).format("YYYY-MM-DD HH:mm:ss")))]),e("div",[e("span",{staticClass:"c-docinfo-key"},[t._v("最后修改时间：")]),t._v(t._s(t.$dayjs(t.doc.lastUpdateTime||t.pageOpenTime).format("YYYY-MM-DD HH:mm:ss")))]),e("div",[e("span",{staticClass:"c-docinfo-key"},[t._v("文档权限：")]),t._v(t._s(t.doc.privateDoc?"只有我能访问":"公开"))])]),e("div",{staticStyle:{"font-weight":"bold","line-height":"35px","font-size":"12px",color:"#333333"}},[t._v("文档操作历史：")]),e("div",{staticStyle:{height:"280px","overflow-y":"auto",border:"1px solid #efefef","font-size":"12px",color:"#333333",padding:"10px"}},t._l(t.doc.history,function(s){return e("div",{key:s.operateTime},[e("span",{staticClass:"c-doc-history-time"},[t._v(t._s(t.$dayjs(s.operateTime).format("YYYY-MM-DD HH:mm:ss")))]),t._v(" "),e("span",{staticClass:"c-doc-history-oper"},[t._v(t._s(s.userNickName))]),e("div",[t._v(" "+t._s(s.operateDesc)+" ")])])}),0)]):t._e(),t.graphState.showMoreActionPanel?e("div",{staticClass:"c-more-action-panel"},[e("button",{on:{click:t.downloadGraphData}},[t._v("下载图谱数据")]),e("button",{on:{click:t.downloadGraphSimplifyData}},[t._v("下载简洁数据")])]):t._e()])},v=[];const _={name:"GraphToolBar",components:{Logo:g},props:{remoteDocName:{mustUseProp:!0,default:"",type:String}},data(){return{pageOpenTime:Date.now(),showMoreNode:!1,savingToServer:!1,docName:"未命名文档",showNewNodeTemplate:!1,newObjectTemplatePosition:{x:0,y:0},newNodeIdIndex:1,newLineIdIndex:1}},inject:["graph","doc","graphState"],computed:{relationGraph(){return this.graph.instance},options(){return this.graph.options}},watch:{remoteDocName(t){this.docName=t}},mounted(){},methods:{toggleDocInfoPanel(){this.graphState.showDocInfoPanel=!this.graphState.showDocInfoPanel,this.graphState.showMoreActionPanel=!1,this.graphState.showDefaultNodeOptionsPanel=!1,this.graphState.showDefaultLineOptionsPanel=!1},toggleMoreActionPanel(){this.graphState.showDocInfoPanel=!1,this.graphState.showMoreActionPanel=!this.graphState.showMoreActionPanel,this.graphState.showDefaultNodeOptionsPanel=!1,this.graphState.showDefaultLineOptionsPanel=!1},toggleNodeOptionsPanel(){this.graphState.showDocInfoPanel=!1,this.graphState.showMoreActionPanel=!1,this.graphState.showDefaultNodeOptionsPanel=!this.graphState.showDefaultNodeOptionsPanel,this.graphState.showDefaultLineOptionsPanel=!1},toggleLineOptionsPanel(){this.graphState.showDocInfoPanel=!1,this.graphState.showMoreActionPanel=!1,this.graphState.showDefaultNodeOptionsPanel=!1,this.graphState.showDefaultLineOptionsPanel=!this.graphState.showDefaultLineOptionsPanel},startAddNode(t,o=0){this.graphState.nodeTemplateUseSlot="",this.relationGraph.startCreatingNodePlot(t,{templateText:"Node",templateStyleClass:"rgnode-simple",templateNode:{nodeShape:o},onCreateNode:(e,s)=>{console.log("新增节点：",e,s);const n=this.relationGraph.generateNewNodeId();this.relationGraph.addNodes([{id:n,text:"新节点"+n,nodeShape:o,x:e,y:s}])}})},startAddLine(t,o=1){this.$message({type:"success",message:"点击任意节点开始创建线条！",duration:8e3}),this.relationGraph.startCreatingLinePlot(t,{template:{lineWidth:this.options.defaultLineWidth,color:this.options.defaultLineColor,lineShape:o,text:"新连线"},onCreateLine:(e,s)=>{if(console.log("新增连线：",e,s),s.id){const n=this.newLineIdIndex++;this.relationGraph.addLines([{from:e.id,to:s.id,lineShape:o,text:"新连线"+n}])}}})},async saveGraph(){if(this.savingToServer)return;this.savingToServer=!0,setTimeout(()=>{this.savingToServer=!1},15e3),await f(1e3);const t=this.relationGraph.getGraphJsonData(),o=await this.SeeksHttp.postJson("/my-graph/save-graph",{docId:this.doc.docId,name:this.docName,docContent:JSON.stringify({options:getGraphJsonOptions(this.options),jsonData:getGraphJsonData(t)})});this.savingToServer=!1;const e=o.data.data;if(console.log("saveResult:",e),!e.updated){this.$message({type:"info",message:e.message});return}const s=e.docId;this.doc.docId!==s?(this.doc.docId=s,this.doc.docName=e.name,this.doc.history=e.history.reverse(),this.doc.createTime=e.createTime,this.doc.lastUpdateTime=e.lastUpdateTime,this.$message({type:"success",message:"文档创建成功！"}),this.$router.push("/graph/"+s)):(this.doc.history=e.history.reverse(),this.doc.lastUpdateTime=e.lastUpdateTime,this.$message({type:"success",message:"保存成功！"}))},async updateDocName(){if(!this.docName){this.$message({type:"warning",message:"修改文档名称失败：文档名称不能为空！"}),this.docName=this.doc.docName;return}if(this.docName===this.doc.docName||!this.doc.docId)return;const o=(await this.SeeksHttp.postJson("/my-graph/update-doc-name",{docId:this.doc.docId,docName:this.docName})).data.data;console.log("saveResult:",o),this.doc.docName=this.docName,this.doc.history=this.history,this.doc.lastUpdateTime=this.lastUpdateTime,this.$message({type:"success",message:"文档名称已更新！"})},onNodeDragStart(t){console.log("onNodeDragStart:");let o=!1;const e=i=>{o=!0,isSupportTouch(i)?document.body.removeEventListener("touchend",e):document.body.removeEventListener("mouseup",e);const a=getEventPosition(i),c=Math.abs(a.clientX-s.clientX)+Math.abs(a.clientY-s.clientY);if(n){c>40?console.log("up:over-width-more:then:cancel"):console.log("up:over-width-more");return}c>5?console.log("up:over-width-cancel"):(console.log("up:over-width-click"),this.startAddNode(i))},s=getEventPosition(t);isSupportTouch(t)?document.body.addEventListener("touchend",e):document.body.addEventListener("mouseup",e);let n=!1;setTimeout(()=>{o||(console.log("show more:"),n=!0,this.showMoreNode=!0)},1e3),t.preventDefault()},downloadGraphData(){const t=this.relationGraph.getGraphJsonData();console.log(JSON.stringify(t))},downloadGraphSimplifyData(){const t=this.relationGraph.getGraphJsonData();t.nodes=this.relationGraph.getNodes().filter(o=>o.lot.level<4).map(o=>({id:o.id,text:o.text})),t.lines=t.lines.filter(o=>t.nodes.some(e=>e.id===o.from)&&t.nodes.some(e=>e.id===o.to)).map(o=>({text:o.text,from:o.from,to:o.to})),console.log(JSON.stringify(t))}}},h={};var y=r(_,m,v,!1,S,"b25f3980",null,null);function S(t){for(let o in h)this[o]=h[o]}const N=function(){return y.exports}();var x=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.icon?e("div",[e("svg-icon",{attrs:{"icon-class":"user"}})],1):e("div",{staticStyle:{"border-radius":"5px",width:"180px",display:"flex","flex-flow":"row","align-items":"flex-start","padding-top":"5px"}},[e("div",{staticStyle:{"text-align":"center","flex-grow":"0",width:"30px"}},[e("svg-icon",{staticStyle:{height:"15px"},attrs:{"icon-class":"user"}})],1),e("div",{staticStyle:{"font-size":"12px",width:"70px","text-align":"left"}},[t._v(t._s(t.node.text))]),e("div",{staticStyle:{width:"40px","padding-right":"10px","text-align":"left"}},[e("el-switch",{attrs:{size:"mini"},model:{value:t.node.data.checkin,callback:function(s){t.$set(t.node.data,"checkin",s)},expression:"node.data.checkin"}})],1)])},w=[];const b={props:{icon:{type:Boolean,required:!1},node:{type:Object,required:!1}},mounted(){}},p={};var C=r(b,x,w,!1,I,"56877d46",null,null);function I(t){for(let o in p)this[o]=p[o]}const P=function(){return C.exports}();var O=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{},[e("div",{staticClass:"graph-online",staticStyle:{height:"calc(100vh - 0px)",overflow:"hidden"}},[e("RelationGraph",{ref:"graphRef",attrs:{options:t.graphOptions,"on-canvas-click":t.onCanvasClick,"on-contextmenu":t.onContextmenu,"on-node-click":t.onNodeClick,"on-line-click":t.onLineClick,"on-canvas-selection-end":t.onCanvasSelectionEnd},scopedSlots:t._u([{key:"graph-plug",fn:function(){return[e("GraphToolBar",{attrs:{"remote-doc-name":t.doc.docName}}),t.isShowNodeTipsPanel?e("div",{staticClass:"c-right-menu-panel",style:{left:t.nodeMenuPanelPosition.x+"px",top:t.nodeMenuPanelPosition.y+"px"}},[e("div",{staticClass:"c-object-info"},[e("div",[t._v("当前右键事件信息：")]),e("div",[t._v("类型："+t._s(t.currentObject.type))]),t.currentObject.type==="link"?e("div",[t._v(t._s(t.currentObject.link.fromNode.text)+" -> "+t._s(t.currentObject.link.toNode.text))]):t._e(),t.currentObject.type==="node"?e("div",[t._v("ID:"+t._s(t.currentObject.node.id))]):t._e(),t.currentObject.type==="node"?e("div",[t._v("Text:"+t._s(t.currentObject.node.text))]):t._e(),e("div",[t._v("你可以对这个对象做以下操作：")])]),t.currentObject.type==="canvas"?e("div",{staticClass:"c-node-menu-item",on:{click:t.addNode}},[t._v("添加节点")]):t._e(),t.currentObject.type==="node"?e("div",{staticClass:"c-node-menu-item",on:{click:t.deleteNode}},[t._v("删除节点")]):t._e(),t.currentObject.type==="node"?e("div",{staticClass:"c-node-menu-item",on:{click:t.createLineFromNode}},[t._v("添加连线")]):t._e(),t.currentObject.type==="link"?e("div",{staticClass:"c-node-menu-item",on:{click:t.deleteLink}},[t._v("删除关系")]):t._e()]):t._e()]},proxy:!0},t.graphState.nodeTemplateUseSlot?{key:"node-template",fn:function(s){var n=s.node;return[t.graphState.nodeTemplateUseSlot==="user"?e("NodeSlotUser",{attrs:{node:n}}):t._e()]}}:null,{key:"node",fn:function(s){var n=s.node;return[n.data&&n.data.slotId==="user"?e("NodeSlotUser",{attrs:{node:n}}):t._e()]}}],null,!0)})],1)])},k=[];const D={name:"LuckyView",components:{NodeSlotUser:P,GraphToolBar:N},data(){return{isShowNodeTipsPanel:!1,nodeMenuPanelPosition:{x:0,y:0},newNodeIdIndex:1,newLineIdIndex:1,localGraph:"",graphOptions:{debug:!0,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,useAnimationWhenRefresh:!1,moveToCenterWhenRefresh:!1,defaultJunctionPoint:"border",toolBarDirection:"h",toolBarPositionH:"left",toolBarPositionV:"bottom",defaultPloyLineRadius:5,placeSingleNode:!1,placeOtherGroup:!1,layout:{label:"手工",layoutName:"fixed",layoutClassName:"seeks-layout-fixed",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1}},graphState:{nodeTemplateUseSlot:"",showDocInfoPanel:!1,showMoreActionPanel:!1,showDefaultNodeOptionsPanel:!1,showDefaultLineOptionsPanel:!1},doc:{docId:"",docName:"",createTime:0,privateDoc:!0,lastUpdateTime:0,history:[]},currentObject:{selectedNodes:[],type:"",node:null,link:null,line:null}}},mounted(){this.doc.docId=this.$route.params.docId,this.localGraph=this.$route.query.localGraph,this.loadGraph()},provide(){return{doc:this.doc,currentObject:this.currentObject,graphState:this.graphState}},methods:{async loadGraph(){if(this.localGraph){const t=localStorage.getItem("local-graph");console.log("open from:local-graph");const o=JSON.parse(t);this.showGraph(o)}else if(this.doc.docId){const o=(await this.SeeksHttp.postJson("/my-graph/get-graph",{docId:this.doc.docId})).data.data,{docContent:e}=o;console.log("graphInfo:",o);const s=JSON.parse(e);console.log("graphJsonData.options:",s.options),this.doc.docId=o.docId,this.doc.docName=o.name,this.doc.createTime=o.createTime,this.doc.privateDoc=o.privateDoc,this.doc.lastUpdateTime=o.lastUpdateTime,this.doc.history=o.history.reverse();const n=this.$refs.graphRef,i=Object.assign({},this.graphOptions);s.options&&Object.keys(s.options).forEach(a=>{a==="layout"||a==="layouts"||(i[a]=s.options[a])}),await n.setOptions(i),this.showGraph(s.jsonData)}else{const t={rootId:"root",nodes:[{id:"root",text:"主题"}],lines:[]};this.showGraph(t)}},async showGraph(t){const o=this.$refs.graphRef.getInstance();await o.setJsonData(t),await o.moveToCenter(),await o.zoomToFit()},onContextmenu(t,o,e){const s=this.$refs.graphRef.getInstance();this.currentObject.type=o,this.currentObject.node=o==="node"?e:null,this.currentObject.link=o==="link"?e:null,this.currentObject.line=o==="line"?e:null;const n=s.getBoundingClientRect();console.log("showNodeMenus:",t,n),this.isShowNodeTipsPanel=!0,this.nodeMenuPanelPosition.x=t.clientX-n.x+10,this.nodeMenuPanelPosition.y=t.clientY-n.y+10;const i=()=>{this.isShowNodeTipsPanel=!1,document.body.removeEventListener("click",i)};document.body.addEventListener("click",i)},addNode(t){const o=this.$refs.graphRef.getInstance(),e=o.getBoundingClientRect(),s=o.getCanvasCoordinateByClientCoordinate({x:this.nodeMenuPanelPosition.x-10+e.x,y:this.nodeMenuPanelPosition.y-10+e.y}),n=o.generateNewNodeId();o.addNodes([{id:n,text:"New-"+n,x:s.x,y:s.y}])},deleteNode(t){this.$refs.graphRef.getInstance().removeNode(this.currentObject.node)},deleteLink(t){this.$refs.graphRef.getInstance().removeLink(this.currentObject.link)},createLineFromNode(t){const o=this.$refs.graphRef.getInstance();o.startCreatingLinePlot(t,{template:{lineWidth:o.options.defaultLineWidth,color:o.options.color,text:"新连线"},fromNode:this.currentObject.node,onCreateLine:(e,s)=>{if(console.log("新增连线：",e,s),s.id){const n=this.newLineIdIndex++;o.addLines([{from:e.id,to:s.id,text:"新连线"+n}])}}})},updateSelectedNodes(){this.currentObject.selectedNodes=[],this.$refs.graphRef.getInstance().getNodes().forEach(o=>{o.selected&&this.currentObject.selectedNodes.push(o)})},onNodeClick(t,o){if(console.log("onNodeClick:",t,o.shiftKey,o.ctrlKey),o.shiftKey)return t.selected=!t.selected,this.updateSelectedNodes(),!1;const e=this.$refs.graphRef.getInstance();e.options.checkedLinkId="",e.options.checkedLineId="",this.currentObject.type="node",this.currentObject.node=t,this.currentObject.link=null,this.currentObject.line=null},onLineClick(t,o,e){const s=this.$refs.graphRef.getInstance();s.options.checkedNodeId="",this.currentObject.type="line",this.currentObject.node=null,this.currentObject.link=o,this.currentObject.line=t,console.log("onLineClick:",t)},onCanvasClick(t){console.log("onCanvasClick:"),this.currentObject.type="canvas",this.currentObject.node=null,this.currentObject.link=null,this.currentObject.line=null,this.$refs.graphRef.getInstance().clearChecked(),this.graphState.showDocInfoPanel&&(this.graphState.showDocInfoPanel=!1),this.graphState.showMoreActionPanel&&(this.graphState.showMoreActionPanel=!1),this.graphState.showDefaultNodeOptionsPanel&&(this.graphState.showDefaultNodeOptionsPanel=!1),this.graphState.showDefaultLineOptionsPanel&&(this.graphState.showDefaultLineOptionsPanel=!1),this.clearSelection()},onCanvasSelectionEnd(t,o){console.log("onCanvasSelectionEnd:",t);const e=this.$refs.graphRef.getInstance(),s=e.getBoundingClientRect(),n=e.getCanvasCoordinateByClientCoordinate({x:t.x+s.x,y:t.y+s.y}),i=e.getCanvasCoordinateByClientCoordinate({x:t.x+t.width+s.x,y:t.y+t.height+s.y});e.getNodes().forEach(a=>{let c=!1;const l=a.x+a.el.offsetWidth/2,d=a.y+a.el.offsetHeight/2;l>n.x&&d>n.y&&l<i.x&&d<i.y&&(c=!0),a.selected=c}),this.updateSelectedNodes()},clearSelection(){this.$refs.graphRef.getInstance().getNodes().forEach(o=>{o.selected=!1}),this.updateSelectedNodes()}}},u={};var L=r(D,O,k,!1,T,"3a784eac",null,null);function T(t){for(let o in u)this[o]=u[o]}const M=function(){return L.exports}();export{M as default};
