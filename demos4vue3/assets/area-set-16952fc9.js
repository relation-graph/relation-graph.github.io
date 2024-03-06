import{M as r}from"./relation-graph-bae0ebdb.js";import{d as p,r as b,o as m,a as o,c as a,b as t,e as f,w as i,u as y,t as n,q as s,p as g,j as v,f as C}from"./index-bbffd316.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const e=d=>(g("data-v-fad22531"),d=d(),v(),d),S={style:{height:"calc(100vh - 60px)"}},w=e(()=>t("div",{class:"c-my-panel",style:{width:"400px"}},[t("div",{class:"c-option-name",style:{"line-height":"25px"}},[C(" Note: This example only demonstrates that the node content can be set as a table shape through slots. If you must display the relationship between tables, please refer to the element connection example: "),t("a",{href:"/#/demo/vue3?id=table-relationship",target:"_top",style:{color:"#1da9f5"}},"Database Foreign Key Relationship Graph")])],-1)),N=e(()=>t("div",{style:{width:"500px",height:"800px",position:"absolute",left:"-800px",top:"0px","background-color":"rgba(15,71,255,0.18)"}},null,-1)),T=e(()=>t("div",{style:{width:"500px",height:"800px",position:"absolute",left:"-250px",top:"0px","background-color":"rgba(116,255,5,0.24)"}},null,-1)),I=e(()=>t("div",{style:{width:"500px",height:"800px",position:"absolute",left:"300px",top:"0px","background-color":"rgba(255,247,9,0.24)"}},null,-1)),D={key:0},B={class:"c-data-table"},L={colspan:"3"},M=e(()=>t("tr",null,[t("th",null,"Column 1"),t("th",null,"Column 2"),t("th",null,"Column 3")],-1)),R=e(()=>t("tr",null,[t("td",null,"xxxx"),t("td",null,"xxxx"),t("td",null,"xxxx")],-1)),V={key:1},G={class:"c-data-table"},J={colspan:"3"},F=e(()=>t("tr",null,[t("th",null,"Column 1"),t("th",null,"Column 2"),t("th",null,"Column 3")],-1)),P=e(()=>t("tr",null,[t("td",null,"xxxx"),t("td",null,"xxxx"),t("td",null,"xxxx")],-1)),W={key:2},X={class:"c-data-table"},j={colspan:"3"},q=e(()=>t("tr",null,[t("th",null,"Column 1"),t("th",null,"Column 2"),t("th",null,"Column 3")],-1)),z=e(()=>t("tr",null,[t("td",null,"xxxx"),t("td",null,"xxxx"),t("td",null,"xxxx")],-1)),E={key:3},K={class:"c-data-table"},O={colspan:"3"},A=e(()=>t("tr",null,[t("th",null,"Column 1"),t("th",null,"Column 2"),t("th",null,"Column 3")],-1)),H=e(()=>t("tr",null,[t("td",null,"xxxx"),t("td",null,"xxxx"),t("td",null,"xxxx")],-1)),Q={key:4},U={class:"c-data-table"},Y={colspan:"3"},Z={key:5},$={class:"c-data-table"},tt={colspan:"3"},et=e(()=>t("tr",null,[t("th",null,"Column 1"),t("th",null,"Column 2"),t("th",null,"Column 3")],-1)),lt=e(()=>t("tr",null,[t("td",null,"xxxx"),t("td",null,"xxxx"),t("td",null,"xxxx")],-1)),ot={key:6},at={class:"c-data-table"},nt={colspan:"3"},st=e(()=>t("tr",null,[t("th",null,"Column 1"),t("th",null,"Column 2"),t("th",null,"Column 3")],-1)),dt=e(()=>t("tbody",null,[t("td",null,"xxxx"),t("td",null,"xxxx"),t("td",null,"xxxx")],-1)),ut=p({__name:"area-set",setup(d){const x=b(),_={backgrounImage:"",backgrounImageNoRepeat:!0,layout:{label:"Manual",layoutName:"fixed",layoutClassName:"seeks-layout-fixed",defaultJunctionPoint:"border",defaultNodeShape:0,defaultLineShape:1},defaultNodeBorderWidth:0,defaultNodeShape:1,defaultJunctionPoint:"lr",defaultLineShape:4,defaultLineWidth:2,defaultLineColor:"#000"},h=async()=>{const c={rootId:"root",nodes:[{id:"table-1",text:"Table 1",x:-760,y:100},{id:"table-2",text:"Table 2",x:-760,y:300},{id:"table-3",text:"Table 3",x:-760,y:600},{id:"table-4",text:"Table 4",x:-200,y:100},{id:"table-5",text:"Shanxi XX Trading Company",x:-200,y:400},{id:"table-6",text:"Table 6",x:-200,y:600},{id:"table-7",text:"Table 7",x:350,y:100}],lines:[{from:"table-2",to:"table-4"},{from:"table-2",to:"table-5"},{from:"table-2",to:"table-6"},{from:"table-3",to:"table-6"},{from:"table-5",to:"table-7"},{from:"table-6",to:"table-7"}]},u=x.value.getInstance();await u.setJsonData(c),await u.moveToCenter(),await u.zoomToFit()};return m(()=>{h()}),(c,u)=>(o(),a("div",null,[t("div",S,[f(y(r),{ref_key:"graphRef",ref:x,options:_},{"graph-plug":i(()=>[w]),"canvas-plug":i(()=>[N,T,I]),node:i(({node:l})=>[t("div",null,[l.id==="table-1"?(o(),a("div",D,[t("table",B,[t("tr",null,[t("td",L,n(l.text),1)]),M,R])])):s("",!0),l.id==="table-2"?(o(),a("div",V,[t("table",G,[t("tr",null,[t("td",J,n(l.text),1)]),F,P])])):s("",!0),l.id==="table-3"?(o(),a("div",W,[t("table",X,[t("tr",null,[t("td",j,n(l.text),1)]),q,z])])):s("",!0),l.id==="table-4"?(o(),a("div",E,[t("table",K,[t("tr",null,[t("td",O,n(l.text),1)]),A,H])])):s("",!0),l.id==="table-5"?(o(),a("div",Q,[t("table",U,[t("tr",null,[t("td",Y,n(l.text),1)])])])):s("",!0),l.id==="table-6"?(o(),a("div",Z,[t("table",$,[t("tr",null,[t("td",tt,n(l.text),1)]),et,lt])])):s("",!0),l.id==="table-7"?(o(),a("div",ot,[t("table",at,[t("tr",null,[t("td",nt,n(l.text),1)]),st,dt])])):s("",!0)])]),_:1},512)])]))}});const _t=k(ut,[["__scopeId","data-v-fad22531"]]);export{_t as default};
