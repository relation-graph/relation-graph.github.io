import{E as _,C as z,S as B,M as j}from"./relation-graph-9cfe1c0d.js";import{d as X,r as M,o as Y,a as F,c as q,b as w,f as r,e as s,w as h,t as k,u as D,i as O}from"./index-5e8eec4e.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";const{JUNCTION_POINT_STYLE:C}=B;console.log("JUNCTION_POINT_STYLE:",_);class Q extends z{constructor(...n){super(...n)}createLinePath(n,u,a){let o=n.fromNode;o||(o={x:0,y:0,el:{offsetWidth:10,offsetHeight:10}});const t=n.toNode;a||(a=0);const m=u.lineDirection||this.options.layoutDirection||"h";console.log("createLinePath",m);const x=o.x,L=o.y,b=t.x,f=t.y,e={x:0,y:0,rotate:0};if(Number.isNaN(x)||Number.isNaN(L))return console.log("error start node:",o.text,o.x,o.y),e.x=50,e.y=50,e.rotate=0,this.createReturnValue("M 0 0 L 100 100",e);if(Number.isNaN(b)||Number.isNaN(f))return console.log("error end point:",t.text,t.x,t.y),e.x=50,e.y=50,e.rotate=0,this.createReturnValue("M 0 0 L 100 100",e);const i=o.el.offsetWidth||o.width||60,g=o.el.offsetHeight||o.height||60;if(Number.isNaN(i)||Number.isNaN(g))return console.log("error end point22:",t.text,t.x,t.y),e.x=50,e.y=50,e.rotate=0,this.createReturnValue("M 0 0 L 100 100",e);const y=t.el.offsetWidth||t.width||60,v=t.el.offsetHeight||t.height||60;if(Number.isNaN(y)||Number.isNaN(v))return console.log("error end point33:",t.text,t.x,t.y),e.x=50,e.y=50,e.rotate=0,this.createReturnValue("M 0 0 L 100 100",e);const l=[x,L,b,f,i,g,y,v,this.options.defaultNodeShape,!1,n.relations.length,a],P=[b,f,x,L,y,v,i,g,this.options.defaultNodeShape,!0,n.relations.length,a];let d,c,N=o.junctionPoint||this.options.defaultJunctionPoint;if(N||(N=C.border),N===C.border)d=_.getBorderPoint4MultiLine(...l),c=_.getBorderPoint4MultiLine(...P);else if(N===C.ltrb)d=_.getRectJoinPoint(...l),c=_.getRectJoinPoint(...P);else if(N===C.tb)d=_.getRectVJoinPoint(...l),c=_.getRectVJoinPoint(...P);else if(N===C.lr)d=_.getRectHJoinPoint(...l),c=_.getRectHJoinPoint(...P);else return this.createReturnValue("Unknown join point type:"+N,e);if(!d||!c)return this.createReturnValue("Can not create start and end!",e);const T=d.x,V=d.y,S=c.x,R=c.y;if(Number.isNaN(T)||Number.isNaN(V))return console.error("error start point:",o),e.x=50,e.y=50,e.rotate=0,this.createReturnValue("M 0 0 L 100 100",e);if(Number.isNaN(S)||Number.isNaN(R))return console.error("error end point:",t),e.x=50,e.y=50,e.rotate=0,this.createReturnValue("M 0 0 L 100 100",e);c.x-d.x,c.y-d.y;let J=c.x>d.x?1:-1;m==="v"&&(J=c.y>d.y?1:-1);let $="";const U=Math.floor(60/(n.relations.length+1)*(a+1))-30,E=this.options.defaultPloyLineRadius||0;if(m==="v"){const p=J*33+U-E;$=`M ${T} ${V} v${p} L${S} ${R-p} v${p}`;const I=T,A=V+p,H=S,W=R-p;this.calcTextPosition(I,A,H,W,e)}else{const p=J*33+U-E;$=`M ${T} ${V} h${p} L ${S-p} ${R} h${p}`;const I=T+p,A=V,H=S-p,W=R;this.calcTextPosition(I,A,H,W,e)}return this.createReturnValue($,e)}calcTextPosition(n,u,a,o,t){const m=a-n,x=o-u;t.rotate=_.getTextAngle(n,u,a,o),t.x=Math.round(n+m/2),t.y=Math.round(u+x/2),Number.isNaN(t.rotate)&&(t.rotate=0)}getTextTransform(n,u,a,o){if(Number.isNaN(u)||Number.isNaN(a))return"translate(0,0)";const t=n.lineShape===void 0?this.options.defaultLineShape:n.lineShape;return t===1||t===4?`translate(${u},${a})rotate(${o||0})`:`translate(${u},${a})`}}const Z={style:{height:"calc(100vh - 50px)",position:"relative","font-size":"12px","line-height":"30px"}},ee={style:{width:"400px","padding-left":"20px","padding-top":"5px",position:"absolute",left:"20px",top:"20px","z-index":"20",padding:"20px","background-color":"#ffffff",border:"#efefef solid 1px","box-shadow":"0 3px 9px rgba(0,21,41,.08)"}},te=X({__name:"customer-line1",setup(G){const n={debug:!1,backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,useAnimationWhenRefresh:!1,placeOtherGroup:!0,defaultNodeWidth:150,defaultNodeHeight:30,defaultLineWidth:2,defaultLineShape:4,showLineLabel:!1,defaultLineTextOffset_x:-21,defaultLineTextOffset_y:-4,lineUseTextPath:!1,defaultLineMarker:{markerWidth:5,markerHeight:5,refX:5,refY:3,data:"M 0 3 A 3 3 0 0 1 6 3 A 3 3 0 0 1 0 3"},layouts:[{label:"Center",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center"}]},u=Q,a=M(-21),o=M(-4),t=M(n),m=M(),x=async()=>{const f={rootId:"2",nodes:[{id:"2",text:"ALTXX"},{id:"3",text:"CH2 TTN"},{id:"4",text:"CH1 AlCu"},{id:"5",text:"MainFrame"},{id:"14",text:"ArHigh"},{id:"15",text:"ArLow"},{id:"20",text:"N2"},{id:"22",text:"Cool Chbr"},{id:"24",text:"Alignment Unit"}],lines:[{from:"2",to:"5",text:"Subsystem",showEndArrow:!1},{from:"2",to:"3",text:"Subsystem",showEndArrow:!1},{from:"2",to:"4",text:"Subsystem",showEndArrow:!1},{from:"3",to:"20",text:"Subsystem"},{from:"4",to:"15",text:"Subsystem"},{from:"4",to:"14",text:"Subsystem"},{from:"5",to:"24",text:"Subsystem"},{from:"5",to:"22",text:"Subsystem"}]};await m.value.getInstance().setJsonData(f)},L=()=>{const f=m.value.getInstance();f.options.defaultJunctionPoint=t.value.defaultJunctionPoint},b=async()=>{t.value.defaultLineTextOffset_x=a.value,t.value.defaultLineTextOffset_y=o.value;const f=m.value.getInstance();await f.setOptions(JSON.parse(JSON.stringify(t.value))),await f.refresh()};return Y(()=>{x()}),(f,e)=>{const i=O("el-radio-button"),g=O("el-radio-group"),y=O("el-slider"),v=O("el-button");return F(),q("div",null,[w("div",Z,[w("div",ee,[r(" Layout Direction: "),w("div",null,[s(g,{size:"small",modelValue:n.layouts[0].from,"onUpdate:modelValue":e[0]||(e[0]=l=>n.layouts[0].from=l),onChange:b},{default:h(()=>[s(i,{label:"left"},{default:h(()=>[r("left")]),_:1}),s(i,{label:"right"},{default:h(()=>[r("right")]),_:1}),s(i,{label:"top"},{default:h(()=>[r("top")]),_:1}),s(i,{label:"bottom"},{default:h(()=>[r("bottom")]),_:1})]),_:1},8,["modelValue"])]),r(" Default Line Junction Point: "),w("div",null,[s(g,{size:"small",modelValue:n.defaultJunctionPoint,"onUpdate:modelValue":e[1]||(e[1]=l=>n.defaultJunctionPoint=l),onChange:L},{default:h(()=>[s(i,{label:"border"},{default:h(()=>[r("border")]),_:1}),s(i,{label:"tb"},{default:h(()=>[r("top-bottom")]),_:1}),s(i,{label:"lr"},{default:h(()=>[r("left-right")]),_:1}),s(i,{label:"ltrb"},{default:h(()=>[r("left-top-right-bottom")]),_:1})]),_:1},8,["modelValue"])]),r(" Line Text Offset X: "+k(a.value)+" ",1),s(y,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value=l),min:-250,max:250,"show-tooltip":!0},null,8,["modelValue"]),r(" Line Text Offset Y: "+k(o.value)+" ",1),s(y,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value=l),min:-50,max:50},null,8,["modelValue"]),s(v,{size:"small",type:"primary",onClick:b},{default:h(()=>[r("Apply Settings")]),_:1})]),s(D(j),{ref_key:"graphRef",ref:m,relationGraphCore:D(u),options:n},null,8,["relationGraphCore"])])])}}});const se=K(te,[["__scopeId","data-v-e48b5ca7"]]);export{se as default};
