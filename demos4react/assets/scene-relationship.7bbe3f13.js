import{r,a as t,j as s}from"./index.7473cb17.js";import{u as N}from"./relation-graph.26f01d58.js";import{d as w}from"./Demo4AdvDataFilterData.8ea19753.js";import{I as S}from"./index.e712a3dd.js";import{MySelector as m}from"./RGComponentsForDemo.afa6e56e.js";const T=()=>{const u=r.exports.useRef(null),[i,x]=r.exports.useState(""),[n,v]=r.exports.useState(""),[l,p]=r.exports.useState(["teacher-student","superior-subordinate","relative","lover","friend","couple","collusion","corruption","report"]),g=["teacher-student","superior-subordinate","relative","lover","friend","couple","collusion","corruption","report"],y=async()=>{var d;const e=w,o=(d=u.current)==null?void 0:d.getInstance();await(o==null?void 0:o.setJsonData(e))},b=e=>{console.log("toggleRelTypeItem:",e),l.includes(e)?(l.splice(l.indexOf(e),1),p([].concat(l))):(l.push(e),p([].concat(l)))},_=()=>{var f;const e=(f=u.current)==null?void 0:f.getInstance(),o=(e==null?void 0:e.getNodes())||[],d=(e==null?void 0:e.getLinks())||[];o.forEach(c=>{let a=!1;i!==""&&c.data.sexType!==i&&(a=!0),n!==""&&c.data.isGoodMan!==n&&(a=!0),c.opacity=a?.1:1}),d.forEach(c=>{c.relations.forEach(a=>{let h=!1;l.indexOf(a.data.type)===-1&&(h=!0,console.log("Hide line:",a)),a.opacity=h?.1:1})}),e==null||e.dataUpdated()},k={debug:!1,defaultNodeBorderWidth:0,defaultNodeColor:"rgba(238, 178, 94, 1)",allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultLineShape:1,layouts:[{label:"Auto Layout",layoutName:"force",layoutClassName:"seeks-layout-force"}],defaultJunctionPoint:"border"};return r.exports.useEffect(()=>{y()},[]),r.exports.useEffect(()=>{_()},[i,n,l]),t("div",{children:s("div",{style:{marginTop:0,width:"calc(100% - 10px)",height:"100vh"},children:[s("div",{style:{width:"700px"},className:"rounded-lg absolute left-20 top-20 z-20 p-4 bg-white border-solid border-2 border-black shadow-lg",children:[s("div",{className:"flex justify-center place-items-center gap-4",children:[t("div",{children:"Node Filter:"}),t("div",{children:t(m,{data:[{value:"",text:"All"},{value:"male",text:"Male"},{value:"female",text:"Female"}],currentValue:i,onChange:(e,o)=>{x(e)}})}),t("div",{children:t(m,{data:[{value:"",text:"All"},{value:"1",text:"Positive"},{value:"0",text:"Negative"}],currentValue:n,onChange:(e,o)=>{v(e)}})})]}),s("div",{children:[t("div",{children:"Relation Filter:"}),t("div",{className:"flex gap-2 flex-wrap",children:g.map(e=>s("div",{className:`px-2 py-1 flex justify-center place-items-center rounded-sm text-sm cursor-pointer  hover:bg-gray-300 ${l.includes(e)?"text-blue-600 font-bold":"text-gray-500"}`,onClick:()=>{b(e)},children:[t(S,{name:"circle_check",size:18}),e]},e))})]})]}),t(N,{ref:u,options:k,nodeSlot:({node:e})=>{var o;return s("div",{className:"h-full",children:[t("div",{className:"my-node-style",style:{backgroundImage:`url(${(o=e.data)==null?void 0:o.icon})`}}),t("div",{className:"c-node-name",style:{color:e.color},children:e.text})]})}})]})})};export{T as default};
