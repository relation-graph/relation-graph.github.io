import{d as C,v as s,a as m,c as h,b as f,u as t,k as L,n as y,t as w,q as S,y as x}from"./index-358d0f07.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const b=["d","stroke","marker-start","marker-end"],T=["transform"],D=["x"],I=["x"],B=C({__name:"Demo4AdvLineSlot3LineSlot",props:{link:null,line:null},setup(e){const{link:c,line:o}=e;x("graph");const i=x("graphInstance"),a=s(()=>i.value.options),d=s(()=>o.id===i.value.options.checkedLineId),g=s(()=>o.showStartArrow&&i.value.getArrow(o,c,!0)),v=s(()=>o.showEndArrow&&i.value.getArrow(o,c,!1)),k=s(()=>{try{const{path:r,textPosition:n}=i.value.createLinePath(c,o,0);let l={};try{l=i.value.getTextTransform(o,n.x,n.y,n.rotate)}catch{}return{path:r,textTransform:l}}catch{}return{path:null,textTransform:null}}),u=(r,n)=>{i.value.onLineClick(r,c,n)};return(r,n)=>(m(),h("g",null,[f("path",{d:t(k).path,class:L(["c-rg-line",e.line.styleClass,t(d)?"c-rg-line-checked":""]),stroke:t(d)?e.line.checkedLineColor:e.line.color?e.line.color:t(a).defaultLineColor,style:y({opacity:e.line.opacity,"stroke-width":(e.line.lineWidth?e.line.lineWidth:t(a).defaultLineWidth)+"px"}),"marker-start":t(g),"marker-end":t(v),fill:"none",onClick:n[0]||(n[0]=l=>u(e.line,l))},null,14,b),t(a).defaultShowLineLabel&&t(a).canvasZoom>40?(m(),h("g",{key:0,transform:t(k).textTransform},[(m(),h("rect",{key:"t-"+e.line.seeks_id,rx:"15",ry:"15",x:10+(t(a).layouts[0].from==="right"?-100:0),y:-10,style:y({opacity:e.line.opacity,fill:t(d)?t(a).checkedLineColor:e.line.fontColor?e.line.fontColor:e.line.color?e.line.color:void 0}),class:"c-rg-line-text-bg",onClick:n[1]||(n[1]=l=>u(e.line,l))},null,12,D)),f("text",{x:20+(t(a).layouts[0].from==="right"?-100:0),y:10,style:y({opacity:e.line.opacity}),class:"c-rg-line-text",onClick:n[2]||(n[2]=l=>u(e.line,l))},w(e.line.text),13,I)],8,T)):S("",!0)]))}});const N=A(B,[["__scopeId","data-v-5486c73b"]]);export{N as default};
