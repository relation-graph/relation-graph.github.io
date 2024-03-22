import{M as _}from"./relation-graph-de73bd62.js";import{d as R,r as m,o as k,a as S,c as C,e as i,w as s,i as w,b as t,u as g,p as B,j as I}from"./index-e1681cb0.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const L=d=>(B("data-v-48341c3a"),d=d(),I(),d),A={style:{height:"calc(100vh - 100px)"}},M=L(()=>t("div",{style:{height:"calc(100vh - 100px)","border-left":"#efefef solid 1px","border-right":"#efefef solid 1px",padding:"15px","font-size":"14px","line-height":"25px"}},[t("ul",null,[t("li",null,"The relationships in the original data are all top-down. Only in this way can the bidirectional tree expand from the root node up and down at the same time."),t("li",null,"If you want to display the arrows above the root node pointing upwards and the arrows below the root node pointing downwards, you can set the properties of all lines above:"),t("ul",null,[t("li",null,"showStartArrow=true"),t("li",null,"showEndArrow=false")]),t("li",null,"This makes the lines above appear to be displayed in reverse."),t("li",null,"Finally, you can set the relationship from top to bottom through from and to to meet the requirements of bidirectional tree data. But you can also use showStartArrow=true;showEndArrow=false to make the arrows above point upwards.")])],-1)),O={style:{height:"calc(100vh - 100px)"}},q=R({__name:"bothway-tree-faq",setup(d){const c=m(null),h=m(null),x={debug:!1,layouts:[{layoutName:"tree",from:"left",max_per_width:"300",min_per_height:"40"}],allowShowMiniToolBar:!1,defaultNodeShape:1,defaultLineShape:4,defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"},b={debug:!1,layouts:[{layoutName:"tree",from:"top",min_per_width:70,max_per_width:200,min_per_height:200,max_per_height:400}],allowShowMiniToolBar:!1,defaultNodeShape:1,defaultLineShape:4,defaultNodeBorderWidth:0,defaultLineColor:"#ff0000",defaultNodeColor:"rgba(0, 206, 209, 1)"};k(()=>{y()});const y=async()=>{const e=c.value;await p(e,"graph1");const a=h.value;await p(a,"graph2")},p=async(e,a)=>{const o={debug:!1,layouts:[{layoutName:"tree",from:"top",min_per_width:70,max_per_width:200,min_per_height:200,max_per_height:400}],allowShowMiniToolBar:!1,defaultNodeShape:1,defaultLineShape:4,defaultNodeBorderWidth:0,defaultLineColor:"#ff0000",defaultNodeColor:"rgba(0, 206, 209, 1)",defaultNodeWidth:30,defaultNodeHeight:100,defaultJunctionPoint:"tb"};let n,l,r;a==="graph2"&&(n=!0,l=!1,r="#ff0000");const N={rootId:"a",nodes:[{id:"a",text:"Root Node a"},{id:"R-b",text:"R-b"},{id:"R-c",text:"R-c",expandHolderPosition:"top"},{id:"R-c-1",text:"R-c-1"},{id:"R-c-2",text:"R-c-2"},{id:"R-d",text:"R-d"},{id:"b",text:"b"},{id:"c",text:"c",expandHolderPosition:"bottom"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c3",text:"c3"},{id:"d",text:"d"},{id:"e",text:"e"}],lines:[{from:"R-b",to:"a",showStartArrow:n,showEndArrow:l,color:r},{from:"R-c",to:"a",showStartArrow:n,showEndArrow:l,color:r},{from:"R-c-1",to:"R-c",showStartArrow:n,showEndArrow:l,color:r},{from:"R-c-2",to:"R-c",showStartArrow:n,showEndArrow:l,color:r},{from:"R-d",to:"a",showStartArrow:n,showEndArrow:l,color:r},{from:"a",to:"b"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c",to:"c3"},{from:"a",to:"d"},{from:"a",to:"e"}]};e&&(await e.setOptions(o),await v(e,N))},v=async(e,a)=>{const o=e.getInstance();await o.setJsonData(a),await o.moveToCenter(),await o.zoomToFit(),await o.focusNodeById("a")},f=(e,a)=>{console.log("onNodeClick:",e)},u=(e,a,o)=>{console.log("onLineClick:",e)};return(e,a)=>{const o=w("el-col"),n=w("el-row");return S(),C("div",null,[i(n,null,{default:s(()=>[i(o,{span:9},{default:s(()=>[t("div",A,[i(g(_),{ref_key:"graphRef1",ref:c,options:x,"on-node-click":f,"on-line-click":u},null,512)])]),_:1}),i(o,{span:6},{default:s(()=>[M]),_:1}),i(o,{span:9},{default:s(()=>[t("div",O,[i(g(_),{ref_key:"graphRef2",ref:h,options:b,"on-node-click":f,"on-line-click":u},null,512)])]),_:1})]),_:1})])}}});const j=T(q,[["__scopeId","data-v-48341c3a"]]);export{j as default};
