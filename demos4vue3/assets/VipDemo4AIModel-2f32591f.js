import{d as r,a as t,c as s,b as o,t as l,F as a,g as n,n as c,f as i}from"./index-e4516832.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const m={class:"c-model"},h={class:"c-model-title"},v={class:"c-model-io"},u={class:"c-col-left"},y=["id"],f={class:"c-col-right"},g=["id"],x={class:"c-model-options"},p={key:0,class:"c-model-opt",style:{padding:"0px",overflow:"hidden",width:"400px"}},k={style:{height:"100px",width:"100%","background-color":"transparent","border-radius":"10px",color:"#ffffff"}},w={key:1,class:"c-model-opt",style:{padding:"0px",overflow:"hidden"}},M=["src"],I={key:2,class:"c-model-opt"},b={class:"c-col-left"},C={class:"c-col-right"},T=r({__name:"VipDemo4AIModel",props:{node:null,dataTypeColorMap:null},setup(d){return(V,$)=>(t(),s("div",m,[o("div",h,l(d.node.text),1),o("div",v,[o("div",u,[(t(!0),s(a,null,n(d.node.data.input,e=>(t(),s("div",{key:e.name,id:`I_${d.node.id}-${e.name}`},[o("i",{class:"el-icon-info c-dot",style:c({color:d.dataTypeColorMap[e.type]})},null,4),i(" "+l(e.name),1)],8,y))),128))]),o("div",f,[(t(!0),s(a,null,n(d.node.data.output,e=>(t(),s("div",{key:e.name,id:`O_${d.node.id}-${e.name}`},[i(l(e.name)+" ",1),o("i",{class:"el-icon-info c-dot",style:c({color:d.dataTypeColorMap[e.type]})},null,4)],8,g))),128))])]),o("div",x,[(t(!0),s(a,null,n(d.node.data.options,e=>(t(),s("div",{key:e.name},[e.name==="_textarea"?(t(),s("div",p,[o("textarea",k,l(e.value),1)])):e.name==="_image"?(t(),s("div",w,[o("img",{src:e.value,style:{width:"100%","user-select":"none","-webkit-user-drag":"none"}},null,8,M)])):(t(),s("div",I,[o("div",b,[o("div",null,l(e.name),1)]),o("div",C,[o("div",null,l(e.value),1)])]))]))),128))])]))}});const D=_(T,[["__scopeId","data-v-20253875"]]);export{D as default};
