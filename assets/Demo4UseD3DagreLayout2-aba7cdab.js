
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              import{d as a}from"./index-a630bbb3.js";import{n as f}from"./index-c847f99a.js";var s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("div",{staticStyle:{height:"50px","padding-top":"6px","padding-left":"20px","padding-right":"30px","border-bottom":"#efefef solid 1px","font-size":"12px"}},[o("el-radio-group",{attrs:{size:"mini"},on:{change:t.showGraph},model:{value:t.dataId,callback:function(N){t.dataId=N},expression:"dataId"}},[o("el-radio-button",{attrs:{label:"1"}},[t._v("样例数据1")]),o("el-radio-button",{attrs:{label:"2"}},[t._v("样例数据2")])],1),t._v(" 此布局使用到了第三方布局算法：Dagre，线条以及其他功能依然由relation-graph提供。 ")],1),o("div",{staticStyle:{height:"calc(100vh - 100px)"}},[o("RelationGraph",{ref:"graphRef",attrs:{options:t.graphOptions,"on-node-click":t.onNodeClick,"on-line-click":t.onLineClick}})],1)])},l=[];const m={name:"Demo",components:{},data(){return{dataId:"2",isShowCodePanel:!1,graphOptions:{debug:!1,lineUseTextPath:!0,layout:{layoutName:"fixed",layoutDirection:"v"},defaultNodeShape:1,defaultLineShape:1,defaultJunctionPoint:"border",defaultNodeBorderWidth:0,defaultNodeWidth:100,defaultNodeHeight:30,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"}}},mounted(){this.showGraph()},methods:{async showGraph(){let t={};this.dataId==="1"?t={rootId:"root",nodes:[{id:"root",text:"主题"},{id:"N2",text:"New-N2"},{id:"N3",text:"New-N3"},{id:"N4",text:"New-N4"},{id:"N5",text:"New-N5"},{id:"N6",text:"New-N6"},{id:"N7",text:"New-N7"},{id:"N8",text:"New-N8"}],lines:[{from:"root",to:"N2",text:"新连线1"},{from:"root",to:"N3",text:"新连线2"},{from:"N3",to:"N4",text:"新连线4"},{from:"N4",to:"N5",text:"新连线5"},{from:"N5",to:"N6",text:"新连线6"},{from:"N6",to:"N2",text:"新连线7"},{from:"N2",to:"N8",text:"新连线8"},{from:"N2",to:"N7",text:"新连线9"},{from:"N7",to:"N8",text:"新连线10"},{from:"root",to:"N8",text:"新连线11"}]}:t={rootId:"root",nodes:[{id:"root",text:"节点"},{id:"N2",text:"新节点N2"},{id:"N3",text:"新节点N3"},{id:"N4",text:"新节点N4"},{id:"N5",text:"新节点N5"},{id:"N6",text:"新节点N6"},{id:"N7",text:"新节点N7"},{id:"N8",text:"新节点N8"},{id:"N9",text:"新节点N9"},{id:"N10",text:"新节点N10"},{id:"N11",text:"新节点N11"},{id:"N12",text:"新节点N12"},{id:"N13",text:"新节点N13"},{id:"N14",text:"新节点N14"},{id:"N15",text:"新节点N15"},{id:"N16",text:"新节点N16"},{id:"N17",text:"新节点N17"},{id:"N18",text:"新节点N18"},{id:"N19",text:"新节点N19"},{id:"N20",text:"新节点N20"},{id:"N21",text:"新节点N21"},{id:"N22",text:"新节点N22"},{id:"N23",text:"新节点N23"},{id:"N24",text:"新节点N24"},{id:"N25",text:"新节点N25"},{id:"N26",text:"新节点N26"},{id:"N27",text:"New-N27"},{id:"N28",text:"New-N28"},{id:"N29",text:"New-N29"},{id:"N30",text:"New-N30"},{id:"N31",text:"New-N31"},{id:"N32",text:"New-N32"},{id:"N33",text:"New-N33"},{id:"N34",text:"New-N34"},{id:"N35",text:"New-N35"},{id:"N36",text:"New-N36"},{id:"N37",text:"New-N37"},{id:"N38",text:"New-N38"},{id:"N39",text:"New-N39"}],lines:[{from:"N3",to:"N2",text:"新连线1"},{from:"N2",to:"root",text:"新连线1"},{from:"root",to:"N4",text:"新连线2"},{from:"N4",to:"N5",text:"新连线3"},{from:"N6",to:"N7",text:"新连线2"},{from:"N7",to:"root",text:"新连线3"},{from:"N8",to:"N9",text:"新连线4"},{from:"N9",to:"root",text:"新连线5"},{from:"N10",to:"N11",text:"新连线6"},{from:"N11",to:"root",text:"新连线7"},{from:"N13",to:"N12",text:"新连线8"},{from:"N12",to:"root",text:"新连线9"},{from:"N18",to:"N17",text:"新连线10"},{from:"N17",to:"N14",text:"新连线11"},{from:"N15",to:"N14",text:"新连线12"},{from:"N16",to:"N15",text:"新连线13"},{from:"N12",to:"N14",text:"新连线14"},{from:"N20",to:"N19",text:"新连线15"},{from:"N21",to:"N19",text:"新连线16"},{from:"N19",to:"N15",text:"新连线17"},{from:"N26",to:"N22",text:"新连线18"},{from:"N24",to:"N25",text:"新连线19"},{from:"N24",to:"N22",text:"新连线20"},{from:"N22",to:"N23",text:"新连线21"},{from:"N23",to:"N14",text:"新连线22"},{from:"root",to:"N30",text:"新连线1"},{from:"root",to:"N27",text:"新连线2"},{from:"N30",to:"N33",text:"新连线3"},{from:"N30",to:"N29",text:"新连线4"},{from:"N27",to:"N28",text:"新连线5"},{from:"N27",to:"N31",text:"新连线6"},{from:"N27",to:"N32",text:"新连线7"},{from:"N4",to:"N34",text:"新连线8"},{from:"N28",to:"N35",text:"新连线9"},{from:"N28",to:"N36",text:"新连线12"},{from:"N28",to:"N37",text:"新连线13"},{from:"N36",to:"N39",text:"新连线14"},{from:"N36",to:"N38",text:"新连线15"}]},t.nodes.forEach(e=>{});let i=0;t.lines.forEach(e=>{e.data={points:[]},e.lineDirection="v",e.id="L"+i++});const o=new a.graphlib.Graph;o.setGraph({ranker:"longest-path",nodesep:30,ranksep:this.dataId==="1"?20:80}),o.setDefaultEdgeLabel(function(){return{}});const N=this.$refs.graphRef.getInstance();await N.setJsonData(t),N.getNodes().forEach(e=>{e.width=e.el.offsetWidth,e.height=e.el.offsetHeight,o.setNode(e.id,e)}),N.getLinks().forEach(e=>{e.relations.forEach(r=>{o.setEdge(e.fromNode.id,e.toNode.id,{id:r.id})})}),a.layout(o),N.getNodes().forEach(e=>{e.x=e.x-e.el.offsetWidth/2-5,e.y=e.y-e.el.offsetHeight/2-5}),o.edges().forEach(e=>{const r=o.edge(e);console.log(r);const n=this.getLineById(N,r.id),d=this.getLinkByLineId(N,r.id);n.data.points=r.points,n.data.startPointOffset={x:r.points[0].x-d.fromNode.x,y:r.points[0].y-d.fromNode.y},n.data.endPointOffset={x:r.points[r.points.length-1].x-d.toNode.x,y:r.points[r.points.length-1].y-d.toNode.y}}),console.log(N.getGraphJsonData()),await N.moveToCenter(),await N.zoomToFit()},getLineById(t,i){for(const o of t.getLinks())for(const N of o.relations)if(N.id===i)return N},getLinkByLineId(t,i){for(const o of t.getLinks())for(const N of o.relations)if(N.id===i)return o},onNodeClick(t,i){console.log("onNodeClick:",t)},onLineClick(t,i,o){console.log("onLineClick:",t)}}},x={};var c=f(m,s,l,!1,h,null,null,null);function h(t){for(let i in x)this[i]=x[i]}const u=function(){return c.exports}();export{u as default};
