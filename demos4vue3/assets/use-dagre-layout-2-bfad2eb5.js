import{d as p}from"./index-8874f6a6.js";import{M as b}from"./relation-graph-9d2491ce.js";import{d as I,r as w,o as C,a as D,c as E,b as x,e as s,w as f,u as S,f as L,i as u,p as B,j as T}from"./index-f19b6715.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const h=d=>(B("data-v-ef483b23"),d=d(),T(),d),G={style:{height:"calc(100vh - 60px)"}},O={class:"c-my-panel"},P=h(()=>x("div",{class:"c-option-name"},"Sample Data:",-1)),W=h(()=>x("div",{class:"c-option-name",style:{"line-height":"25px",padding:"10px"}}," This layout uses a third-party layout algorithm: Dagre, while the lines and other features are provided by relation-graph. ",-1)),j=I({__name:"use-dagre-layout-2",setup(d){const m=w(),r=w("2");w(!1);const g={debug:!1,lineUseTextPath:!0,layout:{layoutName:"fixed",layoutDirection:"v"},defaultNodeShape:1,defaultLineShape:7,defaultJunctionPoint:"tb",defaultNodeBorderWidth:0,defaultNodeWidth:100,defaultNodeHeight:30,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"};C(()=>{c()});const c=async()=>{let N={};r.value==="1"?N={rootId:"root",nodes:[{id:"root",text:"Theme"},{id:"N2",text:"New-N2"},{id:"N3",text:"New-N3"},{id:"N4",text:"New-N4"},{id:"N5",text:"New-N5"},{id:"N6",text:"New-N6"},{id:"N7",text:"New-N7"},{id:"N8",text:"New-N8"}],lines:[{from:"root",to:"N2",text:"New Line 1"},{from:"root",to:"N3",text:"New Line 2"},{from:"N3",to:"N4",text:"New Line 4"},{from:"N4",to:"N5",text:"New Line 5"},{from:"N5",to:"N6",text:"New Line 6"},{from:"N6",to:"N2",text:"New Line 7"},{from:"N2",to:"N8",text:"New Line 8"},{from:"N2",to:"N7",text:"New Line 9"},{from:"N7",to:"N8",text:"New Line 10"},{from:"root",to:"N8",text:"New Line 11"}]}:N={rootId:"root",nodes:[{id:"root",text:"Node"},{id:"N2",text:"New Node N2"},{id:"N3",text:"New Node N3"},{id:"N4",text:"New Node N4"},{id:"N5",text:"New Node N5"},{id:"N6",text:"New Node N6"},{id:"N7",text:"New Node N7"},{id:"N8",text:"New Node N8"},{id:"N9",text:"New Node N9"},{id:"N10",text:"New Node N10"},{id:"N11",text:"New Node N11"},{id:"N12",text:"New Node N12"},{id:"N13",text:"New Node N13"},{id:"N14",text:"New Node N14"},{id:"N15",text:"New Node N15"},{id:"N16",text:"New Node N16"},{id:"N17",text:"New Node N17"},{id:"N18",text:"New Node N18"},{id:"N19",text:"New Node N19"},{id:"N20",text:"New Node N20"},{id:"N21",text:"New Node N21"},{id:"N22",text:"New Node N22"},{id:"N23",text:"New Node N23"},{id:"N24",text:"New Node N24"},{id:"N25",text:"New Node N25"},{id:"N26",text:"New Node N26"},{id:"N27",text:"New-N27"},{id:"N28",text:"New-N28"},{id:"N29",text:"New-N29"},{id:"N30",text:"New-N30"},{id:"N31",text:"New-N31"},{id:"N32",text:"New-N32"},{id:"N33",text:"New-N33"},{id:"N34",text:"New-N34"},{id:"N35",text:"New-N35"},{id:"N36",text:"New-N36"},{id:"N37",text:"New-N37"},{id:"N38",text:"New-N38"},{id:"N39",text:"New-N39"}],lines:[{from:"N3",to:"N2",text:"New Line 1"},{from:"N2",to:"root",text:"New Line 1"},{from:"root",to:"N4",text:"New Line 2"},{from:"N4",to:"N5",text:"New Line 3"},{from:"N6",to:"N7",text:"New Line 2"},{from:"N7",to:"root",text:"New Line 3"},{from:"N8",to:"N9",text:"New Line 4"},{from:"N9",to:"root",text:"New Line 5"},{from:"N10",to:"N11",text:"New Line 6"},{from:"N11",to:"root",text:"New Line 7"},{from:"N13",to:"N12",text:"New Line 8"},{from:"N12",to:"root",text:"New Line 9"},{from:"N18",to:"N17",text:"New Line 10"},{from:"N17",to:"N14",text:"New Line 11"},{from:"N15",to:"N14",text:"New Line 12"},{from:"N16",to:"N15",text:"New Line 13"},{from:"N12",to:"N14",text:"New Line 14"},{from:"N20",to:"N19",text:"New Line 15"},{from:"N21",to:"N19",text:"New Line 16"},{from:"N19",to:"N15",text:"New Line 17"},{from:"N26",to:"N22",text:"New Line 18"},{from:"N24",to:"N25",text:"New Line 19"},{from:"N24",to:"N22",text:"New Line 20"},{from:"N22",to:"N23",text:"New Line 21"},{from:"N23",to:"N14",text:"New Line 22"},{from:"root",to:"N30",text:"New Line 1"},{from:"root",to:"N27",text:"New Line 2"},{from:"N30",to:"N33",text:"New Line 3"},{from:"N30",to:"N29",text:"New Line 4"},{from:"N27",to:"N28",text:"New Line 5"},{from:"N27",to:"N31",text:"New Line 6"},{from:"N27",to:"N32",text:"New Line 7"},{from:"N4",to:"N34",text:"New Line 8"},{from:"N28",to:"N35",text:"New Line 9"},{from:"N28",to:"N36",text:"New Line 12"},{from:"N28",to:"N37",text:"New Line 13"},{from:"N36",to:"N39",text:"New Line 14"},{from:"N36",to:"N38",text:"New Line 15"}]},N.nodes.forEach(e=>{});let n=0;N.lines.forEach(e=>{e.data={points:[]},e.lineDirection="v",e.id="L"+n++});const t=new p.graphlib.Graph;t.setGraph({ranker:"longest-path",nodesep:30,ranksep:r.value==="1"?20:80}),t.setDefaultEdgeLabel(function(){return{}});const o=m.value.getInstance();await o.setJsonData(N),o.getNodes().forEach(e=>{e.width=e.el.offsetWidth,e.height=e.el.offsetHeight,t.setNode(e.id,e)}),o.getLinks().forEach(e=>{e.relations.forEach(i=>{t.setEdge(e.fromNode.id,e.toNode.id,{id:i.id})})}),p.layout(t),o.getNodes().forEach(e=>{e.x=e.x-e.el.offsetWidth/2-5,e.y=e.y-e.el.offsetHeight/2-5}),t.edges().forEach(e=>{const i=t.edge(e),l=_(o,i.id),a=y(o,i.id);l.data.points=i.points,l.data.startPointOffset={x:i.points[0].x-a.fromNode.x,y:i.points[0].y-a.fromNode.y},l.data.endPointOffset={x:i.points[i.points.length-1].x-a.toNode.x,y:i.points[i.points.length-1].y-a.toNode.y}}),console.log(o.getGraphJsonData()),await o.moveToCenter(),await o.zoomToFit()},_=(N,n)=>{for(const t of N.getLinks())for(const o of t.relations)if(o.id===n)return o},y=(N,n)=>{for(const t of N.getLinks())for(const o of t.relations)if(o.id===n)return t},v=(N,n)=>{console.log("onNodeClick:",N)},k=(N,n,t)=>{console.log("onLineClick:",N)};return(N,n)=>{const t=u("el-radio-button"),o=u("el-radio-group");return D(),E("div",null,[x("div",G,[s(S(b),{ref_key:"graphRef",ref:m,options:g,"on-node-click":v,"on-line-click":k},{"graph-plug":f(()=>[x("div",O,[P,s(o,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),size:"mini",onChange:c},{default:f(()=>[s(t,{label:"1"},{default:f(()=>[L("Sample Data 1")]),_:1}),s(t,{label:"2"},{default:f(()=>[L("Sample Data 2")]),_:1})]),_:1},8,["modelValue"]),W])]),_:1},512)])])}}});const R=V(j,[["__scopeId","data-v-ef483b23"]]);export{R as default};
