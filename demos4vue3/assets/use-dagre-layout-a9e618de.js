import{d as y}from"./index-932a28db.js";import{E as C,C as E,M as S}from"./relation-graph-11dba7f5.js";import{d as T,r as _,o as M,a as O,c as P,b as L,e as m,w as h,u as b,f as v,i as k,p as V,j as G}from"./index-358d0f07.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";console.log("JUNCTION_POINT_STYLE:",C);class B extends E{constructor(...s){super(...s)}createLinePath(s,t,f){let i=s.fromNode;i||(i={x:0,y:0,el:{offsetWidth:10,offsetHeight:10}});const o=s.toNode,a={x:0,y:0,rotate:0};if(Number.isNaN(i.x)||Number.isNaN(i.y))return console.log("error start node:",i.text,i.x,i.y),a.x=50,a.y=50,a.rotate=0,this.createReturnValue("M 0 0 L 100 100",a);if(Number.isNaN(o.x)||Number.isNaN(o.y))return console.log("error end point:",o.text,o.x,o.y),a.x=50,a.y=50,a.rotate=0,this.createReturnValue("M 0 0 L 100 100",a);const x=[];for(let c=0;c<t.data.points.length;c++){let N=t.data.points[c];c===0&&(N={x:i.x+t.data.startPointOffset.x,y:i.y+t.data.startPointOffset.y}),c===t.data.points.length-1&&(N={x:o.x+t.data.endPointOffset.x,y:o.y+t.data.endPointOffset.y}),x.push("L "+Math.floor(N.x)+" "+Math.floor(N.y))}if(x.length===0)return this.createReturnValue("M 0 0 L 100 100",a);const u=`M ${x.join(" ").substring(1)}`;return console.log("createLinePath",u),this.createReturnValue(u,a)}calcTextPosition(s,t,f,i,o){const a=f-s,x=i-t;o.rotate=C.getTextAngle(s,t,f,i),o.x=Math.round(s+a/2),o.y=Math.round(t+x/2),Number.isNaN(o.rotate)&&(o.rotate=0)}getTextTransform(s,t,f,i){if(Number.isNaN(t)||Number.isNaN(f))return"translate(0,0)";const o=s.lineShape===void 0?this.options.defaultLineShape:s.lineShape;return o===1||o===4?`translate(${t},${f})rotate(${i||0})`:`translate(${t},${f})`}}const I=w=>(V("data-v-75f7ea4c"),w=w(),G(),w),D={style:{height:"calc(100vh - 60px)"}},R={class:"c-my-panel"},j=I(()=>L("div",{class:"c-option-name"},"Sample Data:",-1)),J=I(()=>L("div",{class:"c-option-name",style:{"line-height":"25px",padding:"10px"}}," This layout uses a third-party layout algorithm: Dagre, and you can still use powerful features such as slot support in relation-graph. The Dagre layout can make the layout clear when the relationship is chaotic by setting the relationship weight, and avoid nodes with complex curved lines. ",-1)),W=T({__name:"use-dagre-layout",setup(w){const s=B,t=_("2");_(!1);const f=_(),i={debug:!1,lineUseTextPath:!0,layout:{layoutName:"fixed"},defaultNodeShape:1,defaultLineShape:3,defaultJunctionPoint:"border",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"};M(()=>{o()});async function o(){let N={};t.value==="1"?N={rootId:"root",nodes:[{id:"root",text:"Theme"},{id:"N2",text:"New-N2"},{id:"N3",text:"New-N3"},{id:"N4",text:"New-N4"},{id:"N5",text:"New-N5"},{id:"N6",text:"New-N6"},{id:"N7",text:"New-N7"},{id:"N8",text:"New-N8"}],lines:[{from:"root",to:"N2",text:"New Line 1"},{from:"root",to:"N3",text:"New Line 2"},{from:"N3",to:"N4",text:"New Line 4"},{from:"N4",to:"N5",text:"New Line 5"},{from:"N5",to:"N6",text:"New Line 6"},{from:"N6",to:"N2",text:"New Line 7"},{from:"N2",to:"N8",text:"New Line 8"},{from:"N2",to:"N7",text:"New Line 9"},{from:"N7",to:"N8",text:"New Line 10"},{from:"root",to:"N8",text:"New Line 11"}]}:N={rootId:"root",nodes:[{id:"root",text:"Node"},{id:"N2",text:"New Node N2"},{id:"N3",text:"New Node N3"},{id:"N4",text:"New Node N4"},{id:"N5",text:"New Node N5"},{id:"N6",text:"New Node N6"},{id:"N7",text:"New Node N7"},{id:"N8",text:"New Node N8"},{id:"N9",text:"New Node N9"},{id:"N10",text:"New Node N10"},{id:"N11",text:"New Node N11"},{id:"N12",text:"New Node N12"},{id:"N13",text:"New Node N13"},{id:"N14",text:"New Node N14"},{id:"N15",text:"New Node N15"},{id:"N16",text:"New Node N16"},{id:"N17",text:"New Node N17"},{id:"N18",text:"New Node N18"},{id:"N19",text:"New Node N19"},{id:"N20",text:"New Node N20"},{id:"N21",text:"New Node N21"},{id:"N22",text:"New Node N22"},{id:"N23",text:"New Node N23"},{id:"N24",text:"New Node N24"},{id:"N25",text:"New Node N25"},{id:"N26",text:"New Node N26"},{id:"N27",text:"New-N27"},{id:"N28",text:"New-N28"},{id:"N29",text:"New-N29"},{id:"N30",text:"New-N30"},{id:"N31",text:"New-N31"},{id:"N32",text:"New-N32"},{id:"N33",text:"New-N33"},{id:"N34",text:"New-N34"},{id:"N35",text:"New-N35"},{id:"N36",text:"New-N36"},{id:"N37",text:"New-N37"},{id:"N38",text:"New-N38"},{id:"N39",text:"New-N39"}],lines:[{from:"N3",to:"N2",text:"New Line 1"},{from:"N2",to:"root",text:"New Line 1"},{from:"root",to:"N4",text:"New Line 2"},{from:"N4",to:"N5",text:"New Line 3"},{from:"N6",to:"N7",text:"New Line 2"},{from:"N7",to:"root",text:"New Line 3"},{from:"N8",to:"N9",text:"New Line 4"},{from:"N9",to:"root",text:"New Line 5"},{from:"N10",to:"N11",text:"New Line 6"},{from:"N11",to:"root",text:"New Line 7"},{from:"N13",to:"N12",text:"New Line 8"},{from:"N12",to:"root",text:"New Line 9"},{from:"N18",to:"N17",text:"New Line 10"},{from:"N17",to:"N14",text:"New Line 11"},{from:"N15",to:"N14",text:"New Line 12"},{from:"N16",to:"N15",text:"New Line 13"},{from:"N12",to:"N14",text:"New Line 14"},{from:"N20",to:"N19",text:"New Line 15"},{from:"N21",to:"N19",text:"New Line 16"},{from:"N19",to:"N15",text:"New Line 17"},{from:"N26",to:"N22",text:"New Line 18"},{from:"N24",to:"N25",text:"New Line 19"},{from:"N24",to:"N22",text:"New Line 20"},{from:"N22",to:"N23",text:"New Line 21"},{from:"N23",to:"N14",text:"New Line 22"},{from:"root",to:"N30",text:"New Line 1"},{from:"root",to:"N27",text:"New Line 2"},{from:"N30",to:"N33",text:"New Line 3"},{from:"N30",to:"N29",text:"New Line 4"},{from:"N27",to:"N28",text:"New Line 5"},{from:"N27",to:"N31",text:"New Line 6"},{from:"N27",to:"N32",text:"New Line 7"},{from:"N4",to:"N34",text:"New Line 8"},{from:"N28",to:"N35",text:"New Line 9"},{from:"N28",to:"N36",text:"New Line 12"},{from:"N28",to:"N37",text:"New Line 13"},{from:"N36",to:"N39",text:"New Line 14"},{from:"N36",to:"N38",text:"New Line 15"}]},N.nodes.forEach(e=>{});let l=0;N.lines.forEach(e=>{e.data={points:[]},e.id="L"+l++});const n=new y.graphlib.Graph;n.setGraph({nodesep:50,ranksep:50,ranker:"network-simplex"}),n.setDefaultEdgeLabel(function(){return{}});const r=f.value.getInstance();await r.setJsonData(N),r.getNodes().forEach(e=>{e.width=e.el.offsetWidth,e.height=e.el.offsetHeight,n.setNode(e.id,e)}),r.getLinks().forEach(e=>{e.relations.forEach(d=>{n.setEdge(e.fromNode.id,e.toNode.id,{id:d.id})})}),y.layout(n),r.getNodes().forEach(e=>{e.x=e.x-e.el.offsetWidth/2-5,e.y=e.y-e.el.offsetHeight/2-5}),n.edges().forEach(e=>{const d=n.edge(e),g=a(r,d.id),p=x(r,d.id);g.data.points=d.points,g.data.startPointOffset={x:d.points[0].x-p.fromNode.x,y:d.points[0].y-p.fromNode.y},g.data.endPointOffset={x:d.points[d.points.length-1].x-p.toNode.x,y:d.points[d.points.length-1].y-p.toNode.y}}),console.log(r.getGraphJsonData()),await r.moveToCenter(),await r.zoomToFit()}function a(N,l){for(const n of N.getLinks())for(const r of n.relations)if(r.id===l)return r}function x(N,l){for(const n of N.getLinks())for(const r of n.relations)if(r.id===l)return n}function u(N,l){console.log("onNodeClick:",N)}function c(N,l,n){console.log("onLineClick:",N)}return(N,l)=>{const n=k("el-radio-button"),r=k("el-radio-group");return O(),P("div",null,[L("div",D,[m(b(S),{ref_key:"graphRef",ref:f,options:i,relationGraphCore:b(s),"on-node-click":u,"on-line-click":c},{"graph-plug":h(()=>[L("div",R,[j,m(r,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),size:"small",onChange:o},{default:h(()=>[m(n,{label:"1"},{default:h(()=>[v("Sample Data 1")]),_:1}),m(n,{label:"2"},{default:h(()=>[v("Sample Data 2")]),_:1})]),_:1},8,["modelValue"]),J])]),_:1},8,["relationGraphCore"])])])}}});const Y=$(W,[["__scopeId","data-v-75f7ea4c"]]);export{Y as default};
