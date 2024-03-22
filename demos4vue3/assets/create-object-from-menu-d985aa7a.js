import{M as b}from"./relation-graph-de73bd62.js";import{d as L,r as h,o as B,a,c as i,b as u,e as S,w as R,u as j,n as M,t as p,q as d}from"./index-e1681cb0.js";const P={style:{height:"calc(100vh - 50px)"}},D=u("div",{class:"c-my-panel"},[u("div",{class:"c-option-name"},"Please try right-clicking on the artboard, node, or line")],-1),T={class:"c-object-info"},A=u("div",null,"Current right-click event information:",-1),E={key:0},F={key:1},O={key:2},J=u("div",null,"You can perform the following operations on this object:",-1),Y=L({__name:"create-object-from-menu",setup(V){const g={allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,allowShowDownloadButton:!0,defaultJunctionPoint:"border"},m=h(!1),v=h({x:0,y:0}),o=h(null),s=h("");let y=1,f=1;const x=async()=>{var n;const t={rootId:"a",nodes:[{id:"a",text:"A",borderColor:"yellow"},{id:"b",text:"B",color:"#43a2f1",fontColor:"yellow"},{id:"c",text:"C",nodeShape:1,width:80,height:60},{id:"e",text:"E",nodeShape:0,width:150,height:150}],lines:[{from:"a",to:"b",text:"Relation 1",color:"#43a2f1"},{from:"a",to:"c",text:"Relation 2"},{from:"a",to:"e",text:"Relation 3"},{from:"b",to:"e",text:"",color:"#67C23A"}]},e=(n=r.value)==null?void 0:n.getInstance();e&&(await e.setJsonData(t),await e.moveToCenter(),await e.zoomToFit())},k=(t,e,n)=>{const l=r.value.getInstance();o.value=e,s.value=n;const c=l.getBoundingClientRect();console.log("showNodeMenus:",t,c),m.value=!0,v.value.x=t.clientX-c.x+10,v.value.y=t.clientY-c.y+10;const _=()=>{m.value=!1,document.body.removeEventListener("click",_)};document.body.addEventListener("click",_)},w=t=>{const e=r.value.getInstance(),n=e.getBoundingClientRect(),l=e.getCanvasCoordinateByClientCoordinate({x:v.value.x-10+n.x,y:v.value.y-10+n.y}),c=y++;e.addNodes([{id:"addFromCanvas-"+c,text:"New-"+c,color:"#5da0f8",x:l.x,y:l.y}])},C=t=>{r.value.getInstance().removeNodeById(s.value.id)},I=t=>{r.value.getInstance().removeLinkById(s.value.seeks_id)},N=t=>{const e=r.value.getInstance();e.startCreatingLinePlot(t,{template:{lineWidth:3,color:"#e85f84",text:"New Link"},fromNode:s.value,onCreateLine:(n,l)=>{if(console.log("New Link:",n,l),l.id){const c=f++;e.addLines([{from:n.id,to:l.id,lineWidth:3,color:"#e85f84",text:"New Link "+c}])}}})},r=h();return B(()=>{x()}),(t,e)=>(a(),i("div",null,[u("div",P,[S(j(b),{ref_key:"graphRef",ref:r,options:g,onContextmenu:k},{"graph-plug":R(()=>[D,m.value?(a(),i("div",{key:0,style:M({left:v.value.x+"px",top:v.value.y+"px"}),class:"c-right-menu-panel"},[u("div",T,[A,u("div",null,"Type: "+p(o.value),1),o.value==="link"?(a(),i("div",E,p(s.value.fromNode.text)+" -> "+p(s.value.toNode.text),1)):d("",!0),o.value==="node"?(a(),i("div",F,"ID: "+p(s.value.id),1)):d("",!0),o.value==="node"?(a(),i("div",O,"Text: "+p(s.value.text),1)):d("",!0),J]),o.value==="canvas"?(a(),i("div",{key:0,class:"c-node-menu-item",onClick:w}," Add Node ")):d("",!0),o.value==="node"?(a(),i("div",{key:1,class:"c-node-menu-item",onClick:C}," Delete Node ")):d("",!0),o.value==="node"?(a(),i("div",{key:2,class:"c-node-menu-item",onClick:N}," Add Link ")):d("",!0),o.value==="link"?(a(),i("div",{key:3,class:"c-node-menu-item",onClick:I}," Delete Relation ")):d("",!0)],4)):d("",!0)]),_:1},512)])]))}});export{Y as default};
