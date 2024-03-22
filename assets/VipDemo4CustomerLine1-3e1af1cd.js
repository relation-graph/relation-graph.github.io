
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              import{U as u,T as H,W as I,n as k}from"./index-cdb280d3.js";const{JUNCTION_POINT_STYLE:g}=I;console.log("JUNCTION_POINT_STYLE:",u);class G extends H{constructor(...r){super(...r)}createLinePath(r,e,a){let i=r.fromNode;i||(i={x:0,y:0,el:{offsetWidth:10,offsetHeight:10}});const n=r.toNode;a||(a=0);const h=e.lineDirection||this.options.layoutDirection||"h";console.log("createLinePath",h);let p=i.x,y=i.y,L=n.x,v=n.y;const o={x:0,y:0,rotate:0};if(Number.isNaN(p)||Number.isNaN(y))return console.log("error start node:",i.text,i.x,i.y),o.x=50,o.y=50,o.rotate=0,this.createReturnValue("M 0 0 L 100 100",o);if(Number.isNaN(L)||Number.isNaN(v))return console.log("error end point:",n.text,n.x,n.y),o.x=50,o.y=50,o.rotate=0,this.createReturnValue("M 0 0 L 100 100",o);let O=i.el.offsetWidth||i.width||60,T=i.el.offsetHeight||i.height||60;if(Number.isNaN(O)||Number.isNaN(T))return console.log("error end point22:",n.text,n.x,n.y),o.x=50,o.y=50,o.rotate=0,this.createReturnValue("M 0 0 L 100 100",o);let R=n.el.offsetWidth||n.width||60,$=n.el.offsetHeight||n.height||60;if(Number.isNaN(R)||Number.isNaN($))return console.log("error end point33:",n.text,n.x,n.y),o.x=50,o.y=50,o.rotate=0,this.createReturnValue("M 0 0 L 100 100",o);const N=[p,y,L,v,O,T,R,$,this.options.defaultNodeShape,!1,r.relations.length,a],b=[L,v,p,y,R,$,O,T,this.options.defaultNodeShape,!0,r.relations.length,a];let s,l,d=i.junctionPoint||this.options.defaultJunctionPoint;if(d||(d=g.border),d===g.border)s=u.getBorderPoint4MultiLine(...N),l=u.getBorderPoint4MultiLine(...b);else if(d===g.ltrb)s=u.getRectJoinPoint(...N),l=u.getRectJoinPoint(...b);else if(d===g.tb)s=u.getRectVJoinPoint(...N),l=u.getRectVJoinPoint(...b);else if(d===g.lr)s=u.getRectHJoinPoint(...N),l=u.getRectHJoinPoint(...b);else return this.createReturnValue("Unknown join point type:"+d,o);if(!s||!l)return this.createReturnValue("Can not create start and end!",o);const c=s.x,x=s.y,_=l.x,m=l.y;if(Number.isNaN(c)||Number.isNaN(x))return console.error("error start point:",i),o.x=50,o.y=50,o.rotate=0,this.createReturnValue("M 0 0 L 100 100",o);if(Number.isNaN(_)||Number.isNaN(m))return console.error("error end point:",n),o.x=50,o.y=50,o.rotate=0,this.createReturnValue("M 0 0 L 100 100",o);l.x-s.x,l.y-s.y;let P=l.x>s.x?1:-1;h==="v"&&(P=l.y>s.y?1:-1);let M="";const W=Math.floor(60/(r.relations.length+1)*(a+1))-30;let V=this.options.defaultPloyLineRadius||0;if(h==="v"){const f=P*33+W-V;M=`M ${c} ${x} v${f} L${_} ${m-f} v${f}`;const w=c,S=x+f,J=_,C=m-f;this.calcTextPosition(w,S,J,C,o)}else{const f=P*33+W-V;M=`M ${c} ${x} h${f} L ${_-f} ${m} h${f}`;const w=c+f,S=x,J=_-f,C=m;this.calcTextPosition(w,S,J,C,o)}return this.createReturnValue(M,o)}calcTextPosition(r,e,a,i,n){const h=a-r,p=i-e;n.rotate=u.getTextAngle(r,e,a,i),n.x=Math.round(r+h/2),n.y=Math.round(e+p/2),Number.isNaN(n.rotate)&&(n.rotate=0)}getTextTransform(r,e,a,i){if(Number.isNaN(e)||Number.isNaN(a))return"translate(0,0)";const n=r.lineShape===void 0?this.options.defaultLineShape:r.lineShape;return n===1||n===4?`translate(${e},${a})rotate(${i||0})`:`translate(${e},${a})`}}var z=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticStyle:{height:"calc(100vh - 50px)",position:"relative","font-size":"12px","line-height":"30px"}},[e("div",{staticStyle:{width:"400px","padding-left":"20px","padding-top":"5px",position:"absolute",left:"20px",top:"20px","z-index":"20",padding:"20px","background-color":"#ffffff",border:"#efefef solid 1px","box-shadow":"0 3px 9px rgba(0,21,41,.08)"}},[t._v(" 布局方向： "),e("div",[e("el-radio-group",{attrs:{size:"mini"},on:{change:t.updateLayouterOptions},model:{value:t.graphOptions.layouts[0].from,callback:function(a){t.$set(t.graphOptions.layouts[0],"from",a)},expression:"graphOptions.layouts[0].from"}},[e("el-radio-button",{attrs:{label:"left"}},[t._v("left")]),e("el-radio-button",{attrs:{label:"right"}},[t._v("right")]),e("el-radio-button",{attrs:{label:"top"}},[t._v("top")]),e("el-radio-button",{attrs:{label:"bottom"}},[t._v("bottom")])],1)],1),t._v(" 默认的线条连接点： "),e("div",[e("el-radio-group",{attrs:{size:"mini"},on:{change:t.updateGraphOptions},model:{value:t.graphOptions.defaultJunctionPoint,callback:function(a){t.$set(t.graphOptions,"defaultJunctionPoint",a)},expression:"graphOptions.defaultJunctionPoint"}},[e("el-radio-button",{attrs:{label:"border"}},[t._v("边缘")]),e("el-radio-button",{attrs:{label:"tb"}},[t._v("上下")]),e("el-radio-button",{attrs:{label:"lr"}},[t._v("左右")]),e("el-radio-button",{attrs:{label:"ltrb"}},[t._v("上下左右")])],1)],1),t._v(" 连接文字x偏移量："+t._s(t.defaultLineTextOffset_x)+" "),e("el-slider",{attrs:{min:-250,max:250,"show-tooltip":!0},model:{value:t.defaultLineTextOffset_x,callback:function(a){t.defaultLineTextOffset_x=a},expression:"defaultLineTextOffset_x"}}),t._v(" 连接文字y偏移量："+t._s(t.defaultLineTextOffset_y)+" "),e("el-slider",{attrs:{min:-50,max:50},model:{value:t.defaultLineTextOffset_y,callback:function(a){t.defaultLineTextOffset_y=a},expression:"defaultLineTextOffset_y"}}),e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.updateLayouterOptions}},[t._v("应用设置")])],1),e("RelationGraph",{ref:"graphRef",attrs:{relationGraphCore:t.relationGraphCore,options:t.graphOptions}})],1)])},D=[];const U={debug:!1,backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,useAnimationWhenRefresh:!1,placeOtherGroup:!0,defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:2,defaultLineShape:4,showLineLabel:!1,defaultLineTextOffset_x:-21,defaultLineTextOffset_y:-4,lineUseTextPath:!1,defaultLineMarker:{markerWidth:5,markerHeight:5,refX:5,refY:3,data:"M 0 3 A 3 3 0 0 1 6 3 A 3 3 0 0 1 0 3"},layouts:[{label:"中心",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]},E={name:"Demo",components:{},data(){return{relationGraphCore:G,defaultLineTextOffset_x:-21,defaultLineTextOffset_y:-4,graphOptions:U}},mounted(){this.showSeeksGraph()},methods:{showSeeksGraph(){const t={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5",text:"子系统",showEndArrow:!1},{from:"2",to:"3",text:"子系统",showEndArrow:!1},{from:"2",to:"4",text:"子系统",showEndArrow:!1},{from:"3",to:"20",text:"子系统"},{from:"4",to:"15",text:"子系统"},{from:"4",to:"14",text:"子系统"},{from:"5",to:"24",text:"子系统"},{from:"5",to:"22",text:"子系统"}]};this.$refs.graphRef.setJsonData(t,e=>{})},updateGraphOptions(){const t=this.$refs.graphRef.getInstance();t.options.defaultJunctionPoint=this.graphOptions.defaultJunctionPoint},async updateLayouterOptions(){this.graphOptions.defaultLineTextOffset_x=this.defaultLineTextOffset_x,this.graphOptions.defaultLineTextOffset_y=this.defaultLineTextOffset_y;const t=this.$refs.graphRef.getInstance();await t.setOptions(JSON.parse(JSON.stringify(this.graphOptions))),await t.refresh()}}},A={};var j=k(E,z,D,!1,F,"dc5a5174",null,null);function F(t){for(let r in A)this[r]=A[r]}const Y=function(){return j.exports}();export{Y as default};
