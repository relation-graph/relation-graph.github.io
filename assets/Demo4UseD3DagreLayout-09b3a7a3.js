
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              import{d as x}from"./index-d6feb124.js";import{B as c,O as h,n as m}from"./index-bc1c6247.js";console.log("JUNCTION_POINT_STYLE:",c);class u extends h{constructor(...N){super(...N)}createLinePath(N,t,i){let e=N.fromNode;e||(e={x:0,y:0,el:{offsetWidth:10,offsetHeight:10}});const r=N.toNode,n={x:0,y:0,rotate:0};if(Number.isNaN(e.x)||Number.isNaN(e.y))return console.log("error start node:",e.text,e.x,e.y),n.x=50,n.y=50,n.rotate=0,this.createReturnValue("M 0 0 L 100 100",n);if(Number.isNaN(r.x)||Number.isNaN(r.y))return console.log("error end point:",r.text,r.x,r.y),n.x=50,n.y=50,n.rotate=0,this.createReturnValue("M 0 0 L 100 100",n);const a=[];for(let s=0;s<t.data.points.length;s++){let d=t.data.points[s];s===0&&(d={x:e.x+t.data.startPointOffset.x,y:e.y+t.data.startPointOffset.y}),s===t.data.points.length-1&&(d={x:r.x+t.data.endPointOffset.x,y:r.y+t.data.endPointOffset.y}),a.push("L "+Math.floor(d.x)+" "+Math.floor(d.y))}if(a.length===0)return this.createReturnValue("M 0 0 L 100 100",n);const f=`M ${a.join(" ").substring(1)}`;return console.log("createLinePath",f),this.createReturnValue(f,n)}calcTextPosition(N,t,i,e,r){const n=i-N,a=e-t;r.rotate=c.getTextAngle(N,t,i,e),r.x=Math.round(N+n/2),r.y=Math.round(t+a/2),Number.isNaN(r.rotate)&&(r.rotate=0)}getTextTransform(N,t,i,e){if(Number.isNaN(t)||Number.isNaN(i))return"translate(0,0)";const r=N.lineShape===void 0?this.options.defaultLineShape:N.lineShape;return r===1||r===4?`translate(${t},${i})rotate(${e||0})`:`translate(${t},${i})`}}var p=function(){var o=this,N=o.$createElement,t=o._self._c||N;return t("div",[t("div",{staticStyle:{height:"calc(100vh - 60px)"}},[t("RelationGraph",{ref:"graphRef",attrs:{options:o.graphOptions,relationGraphCore:o.relationGraphCore,"on-node-click":o.onNodeClick,"on-line-click":o.onLineClick},scopedSlots:o._u([{key:"graph-plug",fn:function(){return[t("div",{staticClass:"c-my-panel"},[t("div",{staticClass:"c-option-name"},[o._v("样例数据：")]),t("el-radio-group",{attrs:{size:"mini"},on:{change:o.showGraph},model:{value:o.dataId,callback:function(i){o.dataId=i},expression:"dataId"}},[t("el-radio-button",{attrs:{label:"1"}},[o._v("样例数据1")]),t("el-radio-button",{attrs:{label:"2"}},[o._v("样例数据2")])],1),t("div",{staticClass:"c-option-name",staticStyle:{"line-height":"25px",padding:"10px"}},[o._v(" 此布局使用到了第三方布局算法：Dagre，同时relation-graph的支持插槽等强大功能您依然可以使用，完美融合。Dagre布局可以在关系混乱时通过设置关系权重让布局清晰，并通过复杂曲线连线绕开节点。 ")])],1)]},proxy:!0}])})],1)])},g=[];const _={name:"Demo",components:{},data(){return{relationGraphCore:u,dataId:"2",isShowCodePanel:!1,graphOptions:{debug:!1,lineUseTextPath:!0,layout:{layoutName:"fixed"},defaultNodeShape:1,defaultLineShape:3,defaultJunctionPoint:"border",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"}}},mounted(){this.showGraph()},methods:{async showGraph(){let o={};this.dataId==="1"?o={rootId:"root",nodes:[{id:"root",text:"主题"},{id:"N2",text:"New-N2"},{id:"N3",text:"New-N3"},{id:"N4",text:"New-N4"},{id:"N5",text:"New-N5"},{id:"N6",text:"New-N6"},{id:"N7",text:"New-N7"},{id:"N8",text:"New-N8"}],lines:[{from:"root",to:"N2",text:"新连线1"},{from:"root",to:"N3",text:"新连线2"},{from:"N3",to:"N4",text:"新连线4"},{from:"N4",to:"N5",text:"新连线5"},{from:"N5",to:"N6",text:"新连线6"},{from:"N6",to:"N2",text:"新连线7"},{from:"N2",to:"N8",text:"新连线8"},{from:"N2",to:"N7",text:"新连线9"},{from:"N7",to:"N8",text:"新连线10"},{from:"root",to:"N8",text:"新连线11"}]}:o={rootId:"root",nodes:[{id:"root",text:"节点"},{id:"N2",text:"新节点N2"},{id:"N3",text:"新节点N3"},{id:"N4",text:"新节点N4"},{id:"N5",text:"新节点N5"},{id:"N6",text:"新节点N6"},{id:"N7",text:"新节点N7"},{id:"N8",text:"新节点N8"},{id:"N9",text:"新节点N9"},{id:"N10",text:"新节点N10"},{id:"N11",text:"新节点N11"},{id:"N12",text:"新节点N12"},{id:"N13",text:"新节点N13"},{id:"N14",text:"新节点N14"},{id:"N15",text:"新节点N15"},{id:"N16",text:"新节点N16"},{id:"N17",text:"新节点N17"},{id:"N18",text:"新节点N18"},{id:"N19",text:"新节点N19"},{id:"N20",text:"新节点N20"},{id:"N21",text:"新节点N21"},{id:"N22",text:"新节点N22"},{id:"N23",text:"新节点N23"},{id:"N24",text:"新节点N24"},{id:"N25",text:"新节点N25"},{id:"N26",text:"新节点N26"},{id:"N27",text:"New-N27"},{id:"N28",text:"New-N28"},{id:"N29",text:"New-N29"},{id:"N30",text:"New-N30"},{id:"N31",text:"New-N31"},{id:"N32",text:"New-N32"},{id:"N33",text:"New-N33"},{id:"N34",text:"New-N34"},{id:"N35",text:"New-N35"},{id:"N36",text:"New-N36"},{id:"N37",text:"New-N37"},{id:"N38",text:"New-N38"},{id:"N39",text:"New-N39"}],lines:[{from:"N3",to:"N2",text:"新连线1"},{from:"N2",to:"root",text:"新连线1"},{from:"root",to:"N4",text:"新连线2"},{from:"N4",to:"N5",text:"新连线3"},{from:"N6",to:"N7",text:"新连线2"},{from:"N7",to:"root",text:"新连线3"},{from:"N8",to:"N9",text:"新连线4"},{from:"N9",to:"root",text:"新连线5"},{from:"N10",to:"N11",text:"新连线6"},{from:"N11",to:"root",text:"新连线7"},{from:"N13",to:"N12",text:"新连线8"},{from:"N12",to:"root",text:"新连线9"},{from:"N18",to:"N17",text:"新连线10"},{from:"N17",to:"N14",text:"新连线11"},{from:"N15",to:"N14",text:"新连线12"},{from:"N16",to:"N15",text:"新连线13"},{from:"N12",to:"N14",text:"新连线14"},{from:"N20",to:"N19",text:"新连线15"},{from:"N21",to:"N19",text:"新连线16"},{from:"N19",to:"N15",text:"新连线17"},{from:"N26",to:"N22",text:"新连线18"},{from:"N24",to:"N25",text:"新连线19"},{from:"N24",to:"N22",text:"新连线20"},{from:"N22",to:"N23",text:"新连线21"},{from:"N23",to:"N14",text:"新连线22"},{from:"root",to:"N30",text:"新连线1"},{from:"root",to:"N27",text:"新连线2"},{from:"N30",to:"N33",text:"新连线3"},{from:"N30",to:"N29",text:"新连线4"},{from:"N27",to:"N28",text:"新连线5"},{from:"N27",to:"N31",text:"新连线6"},{from:"N27",to:"N32",text:"新连线7"},{from:"N4",to:"N34",text:"新连线8"},{from:"N28",to:"N35",text:"新连线9"},{from:"N28",to:"N36",text:"新连线12"},{from:"N28",to:"N37",text:"新连线13"},{from:"N36",to:"N39",text:"新连线14"},{from:"N36",to:"N38",text:"新连线15"}]},o.nodes.forEach(e=>{});let N=0;o.lines.forEach(e=>{e.data={points:[]},e.id="L"+N++});const t=new x.graphlib.Graph;t.setGraph({nodesep:50,ranksep:50,ranker:"network-simplex"}),t.setDefaultEdgeLabel(function(){return{}});const i=this.$refs.graphRef.getInstance();await i.setJsonData(o),i.getNodes().forEach(e=>{e.width=e.el.offsetWidth,e.height=e.el.offsetHeight,t.setNode(e.id,e)}),i.getLinks().forEach(e=>{e.relations.forEach(r=>{t.setEdge(e.fromNode.id,e.toNode.id,{id:r.id})})}),x.layout(t),i.getNodes().forEach(e=>{e.x=e.x-e.el.offsetWidth/2-5,e.y=e.y-e.el.offsetHeight/2-5}),t.edges().forEach(e=>{const r=t.edge(e);console.log(r);const n=this.getLineById(i,r.id),a=this.getLinkByLineId(i,r.id);n.data.points=r.points,n.data.startPointOffset={x:r.points[0].x-a.fromNode.x,y:r.points[0].y-a.fromNode.y},n.data.endPointOffset={x:r.points[r.points.length-1].x-a.toNode.x,y:r.points[r.points.length-1].y-a.toNode.y}}),console.log(i.getGraphJsonData()),await i.moveToCenter(),await i.zoomToFit()},getLineById(o,N){for(const t of o.getLinks())for(const i of t.relations)if(i.id===N)return i},getLinkByLineId(o,N){for(const t of o.getLinks())for(const i of t.relations)if(i.id===N)return t},onNodeClick(o,N){console.log("onNodeClick:",o)},onLineClick(o,N,t){console.log("onLineClick:",o)}}},l={};var y=m(_,p,g,!1,w,"0bc698a2",null,null);function w(o){for(let N in l)this[N]=l[N]}const b=function(){return y.exports}();export{b as default};
