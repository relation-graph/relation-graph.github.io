import{M as et,k as it,z as nt}from"./relation-graph-11dba7f5.js";import{d as st,r as j,o as at,a as d,c as u,b as c,e as lt,w as R,u as ct,F as G,g as w,t as N,q as V,k as B,p as rt,j as dt}from"./index-358d0f07.js";import{_ as ut}from"./_plugin-vue_export-helper-c27b6911.js";const m=P=>(rt("data-v-5883398b"),P=P(),dt(),P),pt={style:{height:"calc(100vh - 60px)"}},ht=m(()=>c("div",{style:{position:"absolute",left:"0px",top:"-100px",width:"530px","text-align":"center"}},[c("h1",null,"Chip Design Industry Panorama")],-1)),ft={style:{position:"absolute",left:"0px",top:"0px"}},yt={class:"ic-bg"},gt={class:"ic-col"},_t=m(()=>c("div",{class:"ic-group-header"},[c("div",{class:"ic-group-name",style:{"background-color":"#f4f4f4"}},"Upstream")],-1)),mt={class:"ic-group-body",style:{"background-color":"#f4f4f4"}},vt=["id"],bt={class:"ic-col"},Gt=m(()=>c("div",{class:"ic-group-header"},[c("div",{class:"ic-group-name",style:{"background-color":"#fff7e6"}},"Midstream")],-1)),wt={class:"ic-group-body",style:{"background-color":"#fff7e6"}},xt=["id"],St={class:"ic-col"},kt=m(()=>c("div",{class:"ic-group-header"},[c("div",{class:"ic-group-name",style:{"background-color":"#f6faee"}},"Downstream")],-1)),It={class:"ic-group-body",style:{"background-color":"#f6faee"}},Et=["id"],Nt={key:0,class:"my-group-4 c-valign-center"},Pt={class:"c-control-panel"},Dt={class:"ic-col"},$t=m(()=>c("div",{class:"ic-group-header"},"Upstream",-1)),Lt={class:"ic-group-body"},jt=["onClick"],Rt={class:"ic-col"},Bt=m(()=>c("div",{class:"ic-group-header"},"Midstream",-1)),Yt={class:"ic-group-body"},Ht=["onClick"],Jt={class:"ic-col"},Mt=m(()=>c("div",{class:"ic-group-header"},"Downstream",-1)),Vt={class:"ic-group-body"},zt=["onClick"],Ft=m(()=>c("div",{style:{clear:"both"}},null,-1)),At={key:0,style:{"line-height":"30px"}},Ct=m(()=>c("div",null,"Expand to specified level:",-1)),Wt=["onClick"],Tt=st({__name:"ic-industry",setup(P){const{RGNodesAnalytic:z}=nt,F={debug:!1,layouts:[{layoutName:"fixed"}],defaultPloyLineRadius:10,defaultNodeFontColor:"#333333",allowShowRefreshButton:!1,allowShowDownloadButton:!1,defaultNodeShape:1,defaultLineShape:3,defaultJunctionPoint:"ltrb",defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 0.7)",defaultNodeColor:"rgba(0, 206, 209, 0.7)"},g=j([]),A=1,x=j(""),I=j(),C=async()=>{I.value.getInstance().loading("Wait...");const t=await(await fetch("./demo-data/industry-2.json")).text(),o=JSON.parse(t);console.log("jsonData:",o);const l=o.data.上游[0].children,n=o.data.中游[0].children,a=o.data.下游[0].children,r=W("c1",l,"rgba(215,214,214,1)"),p=T("c2",n,"rgba(246,169,68,0.65)");p.length>0&&r.length>0&&p[0].defaultSetting.refs.push(r[r.length-1].myGroupId);const s=U("c3",a,"rgba(108,200,150,0.53)");p.length>1&&s.length>0&&p[p.length-1].defaultSetting.refs.push(s[s.length-1].myGroupId);const _=[...r,...p,...s];g.value=_,await Z(_)},W=(e,i,t)=>{const o=[];return i.length===1?o.push(S(e,e+"0",i[0],{node:{color:t,width:100,junctionPoint:"lr",expandHolderPosition:"left"},line:{lineShape:4,color:t},layoutSetting:{layoutExpansionDirection:"top",from:"right"},refs:[]})):i.forEach((l,n)=>{o.push(S(e,e+"-"+n,l,{rootIndexOfCol:n,node:{color:t,width:100,junctionPoint:"lr",expandHolderPosition:"left"},line:{lineShape:4,color:t},layoutSetting:{from:"right",layoutExpansionDirection:["bottom","top","top","top","top","top","top"][i.length-1-n],min_per_width:[][n],levelDistance:[][n],alignItems:[][n]},refs:[]}))}),o.forEach((l,n)=>{o.length-n>2&&l.defaultSetting.refs.push(o[n+1].myGroupId)}),o},T=(e,i,t)=>{const o=[];if(i.length===1){const l=i[0];o.push(S(e,e+"0",l,{node:{color:t,width:100,junctionPoint:"lr",expandHolderPosition:"left"},line:{lineShape:4,color:t},layoutSetting:{layoutExpansionDirection:"bottom",from:"right",levelDistance:[20,120,200,200,200,200,200,200,200]},refs:[]}))}else i.forEach((l,n)=>{const a=l;o.push(S(e,e+"-"+n,a,{rootIndexOfCol:n,node:{color:t,width:100,junctionPoint:["lr","tb","tb","tb","tb","tb","tb"][n],expandHolderPosition:["left","bottom","bottom","bottom","bottom","bottom","bottom"][n]},line:{lineShape:4,color:t},layoutSetting:{from:["right","top","top","top","top","top","top"][n],layoutExpansionDirection:["bottom","right","right","right","right","right","right"][n],min_per_width:[200,110,110,110,110,110,110,110][n],min_per_height:[40,100,100,100,100,100,100,100][n],levelDistance:[][n],alignItems:["top","top","top","top","top","top"][n]},refs:[]}))});return o.forEach((l,n)=>{n>0&&n<o.length-1&&l.defaultSetting.refs.push(o[n+1].myGroupId)}),o},U=(e,i,t)=>{const o=[];return i.length===1?o.push(S(e,e+"-0",i[0],{node:{color:t,width:100,junctionPoint:"lr",expandHolderPosition:"right"},line:{lineShape:4,color:t},layoutSetting:{layoutExpansionDirection:"center",from:"left"},refs:[]})):(i.forEach((l,n)=>{o.push(S(e,e+"-"+n,l,{rootIndexOfCol:n,node:{color:t,width:100,junctionPoint:["lr","lr","lr","lr","lr","lr","lr"][i.length-1-n],expandHolderPosition:["right","right","right","right","right","right","right"][i.length-1-n]},line:{lineShape:4,color:t},layoutSetting:{from:["left","left","left","left","left","left","left"][i.length-1-n],layoutExpansionDirection:["bottom","top","top","top","top","top","top"][i.length-1-n],max_per_width:[][n],levelDistance:[][n],alignItems:[][n]},refs:[]}))}),o.forEach((l,n)=>{o.length-n>2&&l.defaultSetting.refs.push(o[n+1].myGroupId)})),o},Y=(e,i,t,o,l=0)=>{e.forEach(n=>{const a=n.children,r=a&&a.length>0,p={id:n.id,text:n.text,data:{hasChildren:r,deep:l}};r&&l>A&&(p.expanded=!1),t.push(p),i&&o.push({from:i.id,to:n.id,showEndArrow:!i.id.endsWith("-fake")}),r&&Y(a,n,t,o,l+1)})},S=(e,i,t,o)=>{const l=[],n=[],a={id:t.id+"-fake",text:t.text,children:!t.children||t.children.length===0?void 0:[t]},r=a.id,p=t.id;return Y([a],null,l,n),console.log(`${e}:${i}`,l.length),l.forEach(s=>{s.data||(s.data={}),s.data.myGroupId=i,s.junctionPoint=o.node.junctionPoint,s.width=o.node.width,s.color=o.node.color,s.data.hasChildren&&(s.expandHolderPosition=o.node.expandHolderPosition),s.id===p||s.id===r?(s.width=10,s.height=10,s.text="",s.disableDrag=!0,s.id===r&&(s.opacity=0),e==="c2"&&s.id===r&&(s.offset_y=-500),e==="c3"&&s.id===r&&(s.width=100,s.alignItems="left"),s.id===r&&(s.expandHolderPosition="hide")):e==="c2"&&(s.alignItems="top"),s.children=void 0}),n.forEach((s,_)=>{s.lineShape=o.line.lineShape,s.color=o.line.color,e==="c1"&&_===0&&(s.polyLineStartDistance=30+o.rootIndexOfCol*15),e==="c2"&&_===0&&(s.fromJunctionPoint="left",s.toJunctionPoint="left",s.polyLineStartDistance=(4-o.rootIndexOfCol)*15),e==="c3"&&_===0&&(s.fromJunctionPoint="right",s.toJunctionPoint="left",s.polyLineStartDistance=30+o.rootIndexOfCol*15)}),{colName:e,groupName:t.text,myGroupId:i,fakeRootNodeId:r,rootNodeId:p,defaultSetting:o,nodes:l,lines:n}},Z=async e=>{const i={rootId:"my-root",nodes:[{id:"my-root",text:"Root Node",opacity:0}],lines:[],elementLines:[]},t=I.value.getInstance();t.loading("Wait...");for(const o of e){const{defaultSetting:l,rootNodeId:n,nodes:a,lines:r}=o;i.nodes.push(...a),i.lines.push(...r),o.nodes=null,o.lines=null}await t.setJsonData(i),await t.sleep(500);for(const o of e)await E(o,0);await t.moveToCenter(),await t.zoomToFit(),t.clearLoading()},q=(e,i)=>{const t=document.getElementById(i);if(t){const o=t.getBoundingClientRect(),l=e.$canvasDom.getBoundingClientRect(),n=(o.x-l.x)/(e.options.canvasZoom/100),a=(o.y-l.y)/(e.options.canvasZoom/100);return{x:n,y:a}}},h=e=>["","    ","        -","            -","                -","                    -","                        -","                            -"][e],E=async(e,i=0,t=-1)=>{console.log(h(i),"Layout Group:",e.myGroupId);const{defaultSetting:o,fakeRootNodeId:l,rootNodeId:n,myGroupId:a}=e,r=I.value.getInstance(),p="root-for-"+a,s=q(r,p),_=r.getNodes().filter(y=>y.data&&y.data.myGroupId===a),f=r.getNodeById(l);f.x=s.x,f.y=s.y+10;const b={layoutName:"tree",from:"right",layoutExpansionDirection:"top",max_per_width:200,max_per_height:40};if(o.layoutSetting.from&&(b.from=o.layoutSetting.from),o.layoutSetting.layoutExpansionDirection&&(b.layoutExpansionDirection=o.layoutSetting.layoutExpansionDirection),o.layoutSetting.min_per_width&&(b.min_per_width=o.layoutSetting.min_per_width,b.max_per_width=o.layoutSetting.min_per_width),o.layoutSetting.min_per_height&&(b.min_per_height=o.layoutSetting.min_per_height,b.max_per_height=o.layoutSetting.min_per_height),_.forEach(y=>{y.data&&y.data.hasChildren&&t!==-1&&(y.data.deep>t?y.expanded=!1:y.expanded=!0)}),f.x=s.x+4,f.y=s.y+10,e.defaultSetting.refs.length>0){const y=e.defaultSetting.refs[0],v=g.value.find(ot=>ot.myGroupId===y);e.layouted||(console.log(h(i),"Group Ref:",y),await E(v,i+1));const k=H(y);console.log(h(i),`Ref Group[${y}]:Direction:`,v.defaultSetting.layoutSetting.layoutExpansionDirection,k.minY,k.maxY),v.defaultSetting.layoutSetting.layoutExpansionDirection==="top"&&(f.offset_y=s.y-k.minY+45,console.log(h(i),`G  [${a}]root y:`,s.y),console.log(h(i),`Set[${a}]offset_y:`,f.offset_y)),v.defaultSetting.layoutSetting.layoutExpansionDirection==="bottom"&&v.colName==="c1"&&(f.offset_y=s.y-k.maxY-45,console.log(h(i),`G  [${a}]root y:`,s.y),console.log(h(i),`Set[${a}]offset_y:`,f.offset_y)),v.defaultSetting.layoutSetting.layoutExpansionDirection==="right"&&(f.offset_y=s.y-k.maxY+45,console.log(h(i),`G  [${a}]root y:`,s.y),console.log(h(i),`Set[${a}]offset_y:`,f.offset_y)),v.defaultSetting.layoutSetting.layoutExpansionDirection==="bottom"&&v.colName==="c3"&&(f.offset_y=s.y-k.maxY+45,console.log(h(i),`G  [${a}]root y:`,s.y),console.log(h(i),`Set[${a}]offset_y:`,f.offset_y))}const L=it.createLayout(b,r.options,r);L.isMainLayouer=!1,L.layoutOptions.fixedRootNode=!0,console.log(h(i),`Group[${a}]Nodes:`,_.length),await L.placeNodes(_,f),e.layouted=!0;const M=H(a);console.log(h(i),`Group[${a}]:View:`,M.minY,M.maxY)},H=e=>{const o=I.value.getInstance().getNodes().filter(a=>a.data&&a.data.myGroupId===e).filter(a=>z.isAllowShowNode(a));let l=-99999,n=99999;for(const a of o)a.y<n&&(n=a.y),a.y>l&&(l=a.y);return{maxY:l,minY:n}},K=(e,i)=>{console.log("onNodeClick:",e)},Q=(e,i,t)=>{console.log("onLineClick:",e)},X=(e,i)=>{console.log("onNodeExpand:"),J(e)},O=(e,i)=>{console.log("onNodeCollapse:"),J(e)},J=async e=>{const i=g.value.find(t=>t.myGroupId===e.data.myGroupId);await E(i),await D(i)},D=async e=>{const i=g.value.filter(t=>t.defaultSetting.refs.includes(e.myGroupId));for(const t of i)await E(t),await D(t)},$=e=>{x.value=e},tt=async e=>{const i=g.value.find(t=>t.myGroupId===x.value);await E(i,0,e),await D(i)};return at(()=>{C()}),(e,i)=>(d(),u("div",null,[c("div",pt,[lt(ct(et),{ref_key:"graphRef",ref:I,options:F,"on-node-click":K,"on-line-click":Q,"on-node-expand":X,"on-node-collapse":O},{"canvas-plug":R(()=>[ht,c("div",ft,[c("div",yt,[c("div",gt,[_t,c("div",mt,[(d(!0),u(G,null,w(g.value.filter(t=>t.colName==="c1"),t=>(d(),u("div",{key:t.myGroupId,id:`root-for-${t.myGroupId}`,class:"ic-group-item",style:{"background-color":"#457aed"}},N(t.groupName),9,vt))),128))])]),c("div",bt,[Gt,c("div",wt,[(d(!0),u(G,null,w(g.value.filter(t=>t.colName==="c2"),t=>(d(),u("div",{key:t.myGroupId,id:`root-for-${t.myGroupId}`,class:"ic-group-item",style:{"background-color":"#457aed"}},N(t.groupName),9,xt))),128))])]),c("div",St,[kt,c("div",It,[(d(!0),u(G,null,w(g.value.filter(t=>t.colName==="c3"),t=>(d(),u("div",{key:t.myGroupId,id:`root-for-${t.myGroupId}`,class:"ic-group-item",style:{"background-color":"#457aed"}},N(t.groupName),9,Et))),128))])])])])]),node:R(({node:t})=>[t.data.myGroupId==="my-group-4"?(d(),u("div",Nt,N(t.text),1)):V("",!0)]),"graph-plug":R(()=>[c("div",Pt,[c("div",null,[c("div",Dt,[$t,c("div",Lt,[(d(!0),u(G,null,w(g.value.filter(t=>t.colName==="c1"),t=>(d(),u("div",{key:t.myGroupId,class:B(["ic-group-item",{"ic-group-item-checked":t.myGroupId===x.value}]),onClick:o=>$(t.myGroupId)},null,10,jt))),128))])]),c("div",Rt,[Bt,c("div",Yt,[(d(!0),u(G,null,w(g.value.filter(t=>t.colName==="c2"),t=>(d(),u("div",{key:t.myGroupId,class:B(["ic-group-item",{"ic-group-item-checked":t.myGroupId===x.value}]),onClick:o=>$(t.myGroupId)},null,10,Ht))),128))])]),c("div",Jt,[Mt,c("div",Vt,[(d(!0),u(G,null,w(g.value.filter(t=>t.colName==="c3"),t=>(d(),u("div",{key:t.myGroupId,class:B(["ic-group-item",{"ic-group-item-checked":t.myGroupId===x.value}]),onClick:o=>$(t.myGroupId)},null,10,zt))),128))])])]),Ft,x.value?(d(),u("div",At,[Ct,c("div",null,[(d(),u(G,null,w(5,t=>c("div",{key:t,class:"c-deep-item",onClick:o=>tt(t-1)},N(t-1),9,Wt)),64))])])):V("",!0)])]),_:1},512)])]))}});const Kt=ut(Tt,[["__scopeId","data-v-5883398b"]]);export{Kt as default};
