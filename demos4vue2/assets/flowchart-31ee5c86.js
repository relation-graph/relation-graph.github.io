import{n as k,Q as m}from"./index-1437a532.js";import{M as g}from"./MyDemoPanel-78662f23.js";const u=`
node_root[診斷:出現缺陷\\n判斷:根據用戶描述判斷缺陷類型]

node_root --> node_10[node_10\\n診斷:不饱模\\n]
node_10 --Y--> node_100[node_100\\n診斷:壓力受限\\n判斷:]
node_100 --Y--> node_1000[node_1000\\n診斷:]
node_1000 -->node_1000_check[node_1000_check\\n試驗結果]
node_1000_check --未解決(四次及以內)--> node_1000
node_100 --N--> node_1001[node_1001\\n診斷:壓力受限且有提升空間\\n操作:提高]
node_10 --N--> node_101[node_101\\n診斷:非壓力受限\\n判斷:實際VP]
node_101 --Y--> node_1010[node_1010\\n診斷:射速不足\\n操作:提高]
node_1010 --> node_1010_check[node_1010_check\\n試驗結果]
node_1010_check --未解決(三次及以內)--> node_1010
node_101 --N--> node_1011[node_1011\\n診斷:VP切換設置值過高\\n判斷:是否]
node_1011 --Y--> node_10110[node_10110\\n診斷:飽模程度已知\\n操作:線性調5]
node_10110 --> node_10110_check[node_10110_check\\n試驗結果]
node_10110_check --未解決(三次及以內)--> node_1011
node_1011 --N--> node_10111[node_10111\\n診斷:飽模程度未知\\n操作:降低]
node_10111 --> node_10111_check[node_10111_check\\n試驗結果]
node_10111_check --未解決(三次及以內)--> node_1011

node_root --> node_11[node_11\\n診斷:包風/燒焦/困氣/氣痕\\n判斷:是段]
node_11 --Y--> node_110[node_110\\n診斷:已設置缺陷段\\n判斷:缺陷%]
node_11 --N--> node_111[node_111\\n診斷:未設置缺陷段\\n操作:在缺陷位出速度]
node_110 --Y--> node_1100[node_1100\\n診斷:缺陷段射速高於最高射速60%\\n操作:缺陷%]
node_110 --N--> node_1101[node_1101\\n診斷:缺陷段射速偏高\\n操作:降]
node_1100 --> node_1100_check[node_1100_check\\n試驗結果]
node_1101 --> node_1101_check[node_1101_check\\n試驗結果]
node_1100_check --未解決--> node_1101
node_1101_check --未解決(第一/三/四/五次)--> node_1101
node_1101_check --未解決(第二次)--> node_112[node_112\\n診斷:需要試]
node_1101_check --未解決(第六次)--> node_11010[node_11010\\n診斷:暫時末]
node_111 --> node_111_check[node_111_check\\n試驗結果]
node_111_check --未解決--> node_1101
node_112 --> node_112_check[node_112_check\\n試驗結果]
node_112_check --無改善--> node_11010[node_11010\\n診斷:暫時末端]
node_112_check --有改善--> node_1120[node_11010\\n診斷:降速方向正確\\n操作:回]
node_1120 --> node_1101
node_11010 --Y--> node_110100[node_110100\\n診斷:已開排氣口\\n操作:維護排氣口]
node_110100 --> node_110100_check[node_110100_check\\n試驗結果]
node_11010 --N--> node_11101[node_11101\\n診斷:未開排氣口\\n操作:標口]
node_11101 --> node_11101_check[node_11101_check\\n試驗結果]

node_root --> node_12[node_12\\n診斷:流痕\\n判斷:是]
node_12 --Y--> node_120[node_120\\n診斷:過澆口\\n判斷:是否已]
node_12 --N--> node_121[node_121\\n診斷:其他位過快\\n操作:在缺]
node_121 --> node_121_check[node_121_check\\n試驗結果]
node_121_check --未解決--> node_1210[node_1210\\n診斷:缺陷段射速過快\\n操作:將缺]
node_1210 --> node_1210_check[node_1210_check\\n試驗結果]
node_1210_check --未解決(三次及以內)--> node_1210
node_1210_check --未解決(三次以上)--> node_12100[node_12100\\n診斷:澆口設計不合理\\n操作:生成改]
node_120 --Y--> node_1200[node_1200\\n診斷:過澆口段射速過快\\n操作:降低]
node_1200 --> node_1200_check[node_1200_check\\n試驗結果]
node_120 --N--> node_1201[node_1201\\n診斷:沒有設置過澆口段\\n操作:在澆%]
node_1201 --> node_1201_check[node_1201_check\\n試驗結果]
node_1200_check --未解決(兩次及以內)--> node_1200
node_1201_check --未解決--> node_1200
node_1200_check --未解決(兩次以上)--> node_12000[node_12000\\n診斷:澆]

node_root --> node_13[node_13\\n診斷:毛邊\\n判斷:]
node_13 --Y--> node_130[node_130\\n診斷:射出過量\\n操作:升]
node_130 --> node_130_check[node_130_check\\n試驗結果]
node_13 --N--> node_131[node_131\\n診斷:其他位置\\n操作:在]
node_131 --> node_131_check[node_131_check\\n試驗結果]
node_130_check --未解決(五次及以內)--> node_130
node_131_check --未解決--> node_1310[node_1310\\n生成改模意見：]

node_root --> node_14[node_14\\n診斷:副澆口位置缺陷\\n判斷:]
node_14 --缺陷位熔接痕--> node_140[node_140\\n診斷:附]
node_140 --> node_140_check[node_140_check\\n試驗結果]
node_140_check --未解決(五次或以內)--> node_140
node_14 --缺陷位白霧/發白/波紋--> node_141[node_141\\n診斷:%]
node_141 --> node_141_check[node_140_check\\n試驗結果]
node_141_check --未解決(五次或以內)--> node_141
`,x=e=>{const c=e.split(`
`),t=[],i=[],d=_=>{if(!_)throw new Error("Error nodeText:"+_);const n=_.trim(),a=n.indexOf("[");if(a===-1){const s={id:n};return console.log("nodeText-empty",_,s),s}const o=n.lastIndexOf("]"),r=n.substring(0,a),h=n.substring(a+1,o),f=t.find(s=>s.id===r);if(f)return f.text=h,console.log("Duplicate Node:",r,_),console.log("nodeText-dup",_,f),f;{const s={id:r,text:h};return t.push(s),console.log("nodeText-new",_,s),s}};for(const _ of c)if(_&&!_.startsWith("flowchart"))if(_.indexOf("-->")!==-1){const n=_.split("-->");if(n.length<2)throw new Error("Error thisLineText:"+_);const a=d(n[1]),o=n[0].trim(),r=o.indexOf(" ")!==-1?o.substring(0,o.indexOf(" ")):o;if(!r)throw new Error("Error fromId:"+o);const h=a.id,f=o.indexOf(" --");let s="";f!==-1&&(s=o.substring(f+3,o.length)),i.push({from:r,to:h,text:s})}else d(_);return{rootId:t[0].id,nodes:t,lines:i}};var v=function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.myLoading,expression:"myLoading"}],staticStyle:{height:"calc(100vh)"}},[t("MyDemoPanel",[t("div",[e._v("测试数据（可更改）：")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.current_data_string,expression:"current_data_string"}],staticStyle:{height:"200px",width:"100%"},domProps:{value:e.current_data_string},on:{input:function(i){i.target.composing||(e.current_data_string=i.target.value)}}}),t("button",{on:{click:e.updateData}},[e._v("使用数据")])]),t("RelationGraph",{ref:"graphRef",attrs:{options:e.graphOptions,"on-node-click":e.onNodeClick,"on-node-expand":e.onNodeExpand},scopedSlots:e._u([{key:"node",fn:function(i){var d=i.node;return[t("div",{staticClass:"my-industy-node"},[t("div",{staticClass:"my-card-code"},[e._v(e._s(d.data.code||d.id))]),t("div",{staticClass:"my-card-body"},e._l(d.data.properties,function(l){return t("div",{staticClass:"c-node-property"},[l.name!=="試驗結果"?t("div",{staticClass:"c-node-property-name"},[e._v(e._s(l.name)+":")]):e._e(),l.name==="試驗結果"?t("div",{staticClass:"c-node-property-value",staticStyle:{"text-align":"center"}},[e._v("試驗結果")]):e._e(),l.value?t("div",{staticClass:"c-node-property-value"},[e._v(e._s(l.value))]):e._e()])}),0)])]}}])})],1)])},N=[];const y={name:"Demo",components:{MyDemoPanel:g},data(){return{myLoading:!1,current_data_string:u,graphOptions:{debug:!1,backgrounImageNoRepeat:!1,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,useAnimationWhenRefresh:!1,useAnimationWhenExpanded:!0,reLayoutWhenExpandedOrCollapsed:!0,defaultNodeShape:1,defaultNodeBorderWidth:0,defaultLineShape:7,defaultLineWidth:3,defaultPolyLineRadius:5,defaultLineTextOffset_y:-5,defaultJunctionPoint:"border",lineUseTextPath:!1,defaultNodeColor:"#ffffff",defaultLineColor:"#3080e8",defaultLineFontColor:"#3080e8",defaultLineMarker:{markerWidth:20,markerHeight:20,refX:0,refY:3,data:"M 0 0, V 6, L 4 3, Z"},layout:{layoutName:"tree",from:"top",min_per_width:220,levelDistance:"200,200,200,200"}}}},mounted(){this.showData(u)},methods:{updateData(){this.showData(this.current_data_string)},showData(e){const c=x(e),t=["node_11","node_110","node_1101","node_1101_check"],i=["node_1101","node_1101_check"];this.showGraph(c,t,i)},async showGraph(e,c,t){const d=this.$refs.graphRef.getInstance();d.loading(),d.clearGraph(),console.log("jsonNodes:",e.nodes.length),await d.setJsonData(e),await d.doLayout(),setTimeout(async()=>{await d.setZoom(100),await d.moveToCenter(),await d.zoomToFit(),d.clearLoading();for(const n of d.getNodes())c.indexOf(n.id)!==-1?n.className="my-highlight":n.className="";for(const n of d.getLinks()){const a=c.some(o=>o===n.fromNode.id)&&c.some(o=>o===n.toNode.id);for(const o of n.relations)o.opacity=1,a?t[0]===o.from&&t[1]===o.to&&(o.isReverse?o.animation=2:o.animation=1):o.opacity=.3}for(const n of d.getNodes()){const o=n.text.split("\\n"),r={code:o[0],properties:[]};for(let h=1;h<o.length;h++){const s=o[h].split(":");r.properties.push({name:s[0],value:s[1]})}n.data=r}const l=[];for(const n of d.getNodes())n.lot&&n.targetNodes.some(o=>o.lot&&o.lot.level===n.lot.level)&&l.push(n);for(const n of d.getNodes())l.indexOf(n)===-1&&(n.fixed=!0);for(const n of d.getLinks())for(const a of n.relations)a.text.indexOf("未解決")!==-1&&(a.color="#FD8B37",a.fontColor="#FD8B37");const _=m.createLayout({layoutName:"force",maxLayoutTimes:30,force_node_repulsion:3},d.options,d);_.isMainLayouer=!1,_.layoutOptions.fixedRootNode=!0,_.setLinks(d.getLinks()),_.updateVisibleNodes(d.getNodes()),_.autoLayout()},200)},onNodeClick(e,c){console.log("onNodeClick:",e)},onNodeExpand(e,c){console.log("onNodeExpand:",e)},onLineClick(e,c,t){console.log("onLineClick:",e)}}},p={};var L=k(y,v,N,!1,w,"39f41a35",null,null);function w(e){for(let c in p)this[c]=p[c]}const R=function(){return L.exports}();export{R as default};
