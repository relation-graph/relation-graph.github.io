import{r as f,a as s,j as h}from"./index.7473cb17.js";import{u}from"./relation-graph.26f01d58.js";import{d as g}from"./Demo4AdvDataFilterData.8ea19753.js";const v=()=>{const t=f.exports.useRef(null);f.exports.useEffect(()=>{c()},[]);const c=async()=>{var r;const a=g,n=(r=t.current)==null?void 0:r.getInstance();n&&(await n.setJsonData(a),setTimeout(()=>{n.stopAutoLayout()},1e3))};return s("div",{children:s("div",{style:{height:"100vh"},children:s(u,{ref:t,options:{debug:!1,defaultNodeBorderWidth:0,defaultNodeColor:"rgba(238, 178, 94, 1)",allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineShape:1,layout:{layoutName:"force"},defaultJunctionPoint:"border"},onNodeClick:(a,n)=>{var i,d,l;console.log("onNodeClick:",a);const r=((i=t.current)==null?void 0:i.getLinks())||[];r.forEach(e=>{e.relations.forEach(o=>{o.data.orignColor&&(o.color=o.data.orignColor),o.data.orignFontColor&&(o.fontColor=o.data.orignColor),o.data.orignLineWidth&&(o.lineWidth=o.data.orignLineWidth)})}),r.filter(e=>e.fromNode===a||e.toNode===a).forEach(e=>{e.relations.forEach(o=>{console.log("line:",o),o.data.orignColor=o.color,o.data.orignFontColor=o.fontColor||o.color,o.data.orignLineWidth=o.lineWidth||1,o.color="#ff0000",o.fontColor="#ff0000",o.lineWidth=3})}),(l=(d=t.current)==null?void 0:d.getInstance())==null||l.dataUpdated()},onLineClick:(a,n,r)=>{console.log("onLineClick:",a)},nodeSlot:p})})})},p=({node:t})=>{var c;return h("div",{className:"h-full",children:[s("div",{className:"my-node-style",style:{backgroundImage:`url(${(c=t.data)==null?void 0:c.icon})`}}),s("div",{className:"c-node-name",style:{color:t.color},children:t.text})]})};export{v as default};
