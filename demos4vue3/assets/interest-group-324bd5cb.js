import{M as S}from"./relation-graph-de73bd62.js";import{d as w,r,o as C,a as s,c as i,b as o,e as N,w as I,u as E,F as f,g as x,k as G,n as L,t as y,p as M,j as $}from"./index-e1681cb0.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const h=d=>(M("data-v-c4975713"),d=d(),$(),d),O={style:{height:"calc(100vh - 60px)"}},z={style:{width:"300px",position:"absolute",left:"0px",top:"0px"}},B=h(()=>o("div",null,"Interest Groups",-1)),R=["id","onClick"],A={class:"c-i-name"},V={style:{width:"300px",position:"absolute",left:"600px",top:"0px"}},D=h(()=>o("div",null,"Class Members",-1)),F=["id","onClick"],P={class:"c-i-name"},T=h(()=>o("div",{style:{width:"50px","font-size":"12px","line-height":"20px"}},"Joined:",-1)),W={class:"c-i-count"},q={style:{"z-index":"10",position:"absolute",left:"-700px",top:"100px",height:"800px",width:"800px","background-image":"url('/images/school-map.png')","background-repeat":"no-repeat"}},H={style:{position:"relative"}},K=["id","onClick"],Q=h(()=>o("span",null,[o("i",{class:"el-icon-location"})],-1)),U=[Q],X=w({__name:"interest-group",setup(d){const p=r(null),c=r(""),m=r(""),_=r([]),u=r([]),b={debug:!1,allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border",placeOtherNodes:!1,placeSingleNode:!1,graphOffset_x:-400,graphOffset_y:-200,layout:{layoutName:"fixed"}},k=async()=>{var n;_.value=[{groupId:"a",groupName:"Sports Group",location:{x:260,y:300}},{groupId:"b",groupName:"Music Group",location:{x:350,y:100}},{groupId:"c",groupName:"Arts and Crafts Group",location:{x:180,y:40}},{groupId:"d",groupName:"Literature Reading Group",location:{x:430,y:200}},{groupId:"e",groupName:"Volunteer Group",location:{x:530,y:130}},{groupId:"f",groupName:"Science Research Group",location:{x:600,y:240}}],u.value=[{name:"Tom",joinedGroups:["a","c","d"]},{name:"Emma",joinedGroups:["b","e","f"]},{name:"Liam",joinedGroups:["a","b","d"]},{name:"Olivia",joinedGroups:["c","e","f"]},{name:"Noah",joinedGroups:["a","c","e","f"]},{name:"Ava",joinedGroups:["b","d"]},{name:"Sophia",joinedGroups:["c","e"]},{name:"Jackson",joinedGroups:["a","b","d","f"]},{name:"Isabella",joinedGroups:["c","e"]},{name:"Lucas",joinedGroups:["a","b","f"]},{name:"Mia",joinedGroups:["c","d"]},{name:"Jacob",joinedGroups:["a","e"]},{name:"Charlotte",joinedGroups:["b","d","f"]},{name:"Ethan",joinedGroups:["c","e","f"]},{name:"Amelia",joinedGroups:["a","b","d"]}];const t=(n=p.value)==null?void 0:n.getInstance();t&&(t.addNodes([{id:"startNode",text:"",opacity:0,x:-300,y:-300},{id:"endNode",text:"",opacity:0,x:700,y:700}]),setTimeout(()=>{v("a")},200))},v=t=>{var a;m.value="",c.value=t;const n=[];u.value.forEach(l=>{l.joinedGroups.includes(c.value)&&n.push({from:"member-"+l.name,to:"group-"+c.value,color:"rgba(29,169,245,0.76)",lineShape:6})}),n.push({from:"group-"+t,to:"location-"+t,color:"rgba(159,23,227,0.65)",lineWidth:3,lineShape:5,animation:2});const e=(a=p.value)==null?void 0:a.getInstance();e&&(e.clearElementLines(),e.addElementLines(n))},j=t=>{var a,l;c.value="",m.value=t;const n=[];(a=u.value.find(g=>g.name===t))==null||a.joinedGroups.forEach(g=>{n.push({from:"member-"+t,to:"group-"+g,color:"rgba(159,23,227,0.65)",lineShape:6})});const e=(l=p.value)==null?void 0:l.getInstance();e&&(e.clearElementLines(),e.addElementLines(n))};return C(()=>{k()}),(t,n)=>(s(),i("div",null,[o("div",O,[N(E(S),{ref_key:"graphRef",ref:p,options:b},{"canvas-plug":I(()=>[o("div",q,[o("div",H,[(s(!0),i(f,null,x(_.value,e=>(s(),i("div",{key:e.groupId,id:`location-${e.groupId}`,class:G(["c-i-location",{"c-i-location-active":c.value===e.groupId}]),style:L({left:e.location.x+"px",top:e.location.y+"px"}),onClick:a=>v(e.groupId)},U,14,K))),128))])])]),default:I(()=>[o("div",z,[B,o("div",null,[(s(!0),i(f,null,x(_.value,e=>(s(),i("div",{key:e.groupId,id:`group-${e.groupId}`,class:G(["c-i-group",{"c-i-group-checked":c.value===e.groupId}]),onClick:a=>v(e.groupId)},[o("div",A,y(e.groupName),1)],10,R))),128))])]),o("div",V,[D,o("div",null,[(s(!0),i(f,null,x(u.value,e=>(s(),i("div",{key:e.name,id:`member-${e.name}`,class:G(["c-i-member",{"c-i-member-checked":m.value===e.name}]),onClick:a=>j(e.name)},[o("div",P,y(e.name),1),T,o("div",W,y(e.joinedGroups.length),1)],10,F))),128))])])]),_:1},512)])]))}});const oe=J(X,[["__scopeId","data-v-c4975713"]]);export{oe as default};
