import{r as l,a as e,j as n}from"./index.645628bd.js";import{a as x}from"./index.08194a6d.js";const v=()=>{const t=l.exports.useContext(x),d=l.exports.useRef(1),m=l.exports.useRef(1),i=t.options,u=t,b=()=>{t.refresh()},r=async()=>{await t.setZoom(100),await t.moveToCenter(),await t.zoomToFit()},h=o=>{t.startCreatingNodePlot(o,{templateText:"Node",templateStyleClass:"my-node-template",onCreateNode:(s,a)=>{console.log("\u65B0\u589E\u8282\u70B9\uFF1A",s,a);const c=d.current++;t.addNodes([{id:"newNode-"+c,text:"\u65B0\u8282\u70B9"+c,color:"#5da0f8",x:s,y:a}])}})},p=o=>{t.startCreatingLinePlot(o,{onCreateLine:(s,a)=>{if(a.id){const c=m.current++;t.addLines([{from:s.id,to:a.id,lineWidth:3,color:"#8080ff",text:"\u65B0\u8FDE\u7EBF"+c}])}}})},N=()=>{alert("\u4FDD\u5B58")};return e("div",{className:"my-graph-toolbar",children:u&&n("div",{children:[n("div",{className:"c-mb-button",onClick:()=>{N()},children:[e("i",{className:"el-icon-upload"}),e("span",{className:"c-mb-text",children:"\u4FDD\u5B58"})]}),n("div",{className:"c-mb-button c-zoom-text",onClick:()=>{r()},children:[i.canvasZoom,"%"]}),n("div",{className:`c-mb-button c-mb-button-c ${i.creatingNodePlot&&"c-mb-button-on"}`,style:{width:"50px"},onClick:o=>{h(o)},children:[e("i",{className:"el-icon-football"}),e("span",{className:"c-mb-text",children:"\u8282\u70B9"})]}),n("div",{className:`c-mb-button c-mb-button-c ${i.creatingLinePlot&&"c-mb-button-on"}`,style:{width:"50px"},onClick:o=>{p(o)},children:[e("i",{className:"el-icon-share"}),e("span",{className:"c-mb-text",children:"\u7EBF\u6761"})]}),n("div",{className:"c-mb-button",onClick:()=>{r()},children:[e("i",{className:"el-icon-full-screen"}),e("span",{className:"c-mb-text",children:"\u9002\u5E94"})]}),n("div",{className:"c-mb-button",onClick:()=>{b()},children:[e("i",{className:"el-icon-refresh-right"}),e("span",{className:"c-mb-text",children:"\u5237\u65B0"})]})]})})};export{v as default};
