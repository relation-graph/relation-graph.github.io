import{r,a as o,j as f}from"./index.7473cb17.js";import{u as y}from"./relation-graph.26f01d58.js";import{MySlider as A}from"./RGComponentsForDemo.afa6e56e.js";const C=()=>{const i=r.exports.useRef(null),[x,a]=r.exports.useState(!1),[s,c]=r.exports.useState(90),N={debug:!1,graphOffset_x:0,graphOffset_y:0,layout:{layoutName:"center",startAngle:s}},v=async()=>{const t={rootId:"2",nodes:[{id:"2",text:"Node-2"},{id:"9",text:"Node-9"}],lines:[{from:"2",to:"9",text:"Executive"}]},e=i.current.getInstance();await e.setJsonData(t),await e.playShowEffect()},u=async()=>{a(!0);const t=i.current.getInstance();t.layouter.layoutOptions.startAngle=s,await t.doLayout(),a(!1)},l=async t=>{c(e=>e+t),await u()},p=async()=>{var m;a(!0);const t=(m=i.current)==null?void 0:m.getInstance(),e=g.find(n=>{if(!n.added&&t!=null&&t.getNodes().some(d=>d.id===n.from||d.id===n.to))return!0});if(e){e.added=!0;const n=[];h.forEach(d=>{(d.id===e.from||d.id===e.to)&&(d.added||(d.added=!0,n.push(d)))}),t==null||t.addNodes(n),t==null||t.addLines([e]),await(t==null?void 0:t.doLayout())}a(!1)},h=[{id:"1",text:"Node-1"},{id:"3",text:"Node-3"},{id:"4",text:"Node-4"},{id:"6",text:"Node-6"},{id:"7",text:"Node-7"},{id:"8",text:"Node-8"},{id:"71",text:"Node-71"},{id:"72",text:"Node-72"},{id:"73",text:"Node-73"},{id:"81",text:"Node-81"},{id:"82",text:"Node-82"},{id:"83",text:"Node-83"},{id:"84",text:"Node-84"},{id:"85",text:"Node-85"},{id:"91",text:"Node-91"},{id:"92",text:"Node-82"},{id:"51",text:"Node-51"},{id:"52",text:"Node-52"},{id:"53",text:"Node-53"},{id:"54",text:"Node-54"},{id:"55",text:"Node-55"},{id:"5",text:"Node-5"}],g=[{from:"1",to:"2",text:"Investment"},{from:"3",to:"1",text:"Executive"},{from:"4",to:"2",text:"Executive"},{from:"6",to:"2",text:"Executive"},{from:"7",to:"2",text:"Executive"},{from:"1",to:"5",text:"Investment"},{from:"7",to:"71",text:"Investment"},{from:"7",to:"72",text:"Investment"},{from:"7",to:"73",text:"Investment"},{from:"8",to:"81",text:"Investment"},{from:"8",to:"82",text:"Investment"},{from:"8",to:"83",text:"Investment"},{from:"8",to:"84",text:"Investment"},{from:"8",to:"85",text:"Investment"},{from:"9",to:"91",text:"Investment"},{from:"9",to:"92",text:"Investment"},{from:"5",to:"51",text:"Investment1"},{from:"5",to:"52",text:"Investment"},{from:"5",to:"53",text:"Investment3"},{from:"5",to:"54",text:"Investment4"},{from:"5",to:"55",text:"Investment"}];return r.exports.useEffect(()=>{v()},[]),r.exports.useEffect(()=>{u()},[s]),o("div",{children:f("div",{style:{height:"100vh"},children:[f("div",{className:"c-my-panel w-96 rounded-lg absolute left-20 top-20 z-20 p-4 bg-white border-solid border-2 border-black shadow-lg",style:{pointerEvents:x?"auto":void 0,opacity:x?.5:1},children:[f("div",{className:"c-option-name",children:["\u89D2\u5EA6\u504F\u79FB:",s]}),o(A,{max:360,mmin:0,currentValue:s,onChange:t=>{c(t)}}),o("div",{children:o("a",{className:"c-my-link",onClick:()=>l(5),children:"\u987A\u65F6\u9488\u65CB\u8F6C5\u5EA6"})}),o("div",{children:o("a",{className:"c-my-link",onClick:()=>l(-5),children:"\u9006\u65F6\u9488\u65CB\u8F6C5\u5EA6"})}),o("div",{children:o("a",{className:"c-my-link",onClick:p,children:"\u6DFB\u52A0\u4E00\u4E2A\u5173\u7CFB"})})]}),o(y,{ref:i,options:N})]})})};export{C as default};
