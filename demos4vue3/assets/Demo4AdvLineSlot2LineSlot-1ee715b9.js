import{d as L,r as w,v as s,o as S,a as m,c as k,b as h,u as t,k as A,n as y,t as T,q as D,y as x}from"./index-5e8eec4e.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const b=["d","stroke","marker-start","marker-end"],B=["transform"],E=L({__name:"Demo4AdvLineSlot2LineSlot",props:{link:null,line:null},setup(e){const{link:c,line:o}=e;x("graph");const a=x("graphInstance"),g=w(!1),r=s(()=>a.value.options),d=s(()=>o.id===a.value.options.checkedLineId),v=s(()=>o.showStartArrow&&a.value.getArrow(o,c,!0)),C=s(()=>o.showEndArrow&&a.value.getArrow(o,c,!1)),f=s(()=>{try{const{path:i,textPosition:n}=a.value.createLinePath(c,o,0);let l={};try{l=a.value.getTextTransform(o,n.x,n.y,n.rotate)}catch{}return{path:i,textTransform:l}}catch{}return{path:null,textTransform:null}}),u=(i,n,l)=>{a.value.onLineClick(i,n,l)};return S(()=>{g.value=!0}),(i,n)=>(m(),k("g",null,[h("path",{d:t(f).path,class:A(["c-rg-line",e.line.styleClass,t(d)?"c-rg-line-checked":""]),stroke:t(d)?t(r).checkedLineColor:e.line.color?e.line.color:t(r).defaultLineColor,style:y({opacity:e.line.opacity,"stroke-width":(e.line.lineWidth?e.line.lineWidth:t(r).defaultLineWidth)+"px"}),"marker-start":t(v),"marker-end":t(C),fill:"none",onClick:n[0]||(n[0]=l=>u(e.line,l))},null,14,b),t(r).defaultShowLineLabel&&t(r).canvasZoom>40?(m(),k("g",{key:0,transform:t(f).textTransform},[(m(),k("rect",{key:"t-"+e.line.seeks_id,rx:"15",ry:"15",x:-30,y:-15,style:y({opacity:e.line.opacity,fill:t(d)?t(r).checkedLineColor:e.line.fontColor?e.line.fontColor:e.line.color?e.line.color:void 0}),class:"c-rg-line-text-bg",onClick:n[1]||(n[1]=l=>u(e.line,l))},null,4)),h("text",{x:0,y:4,style:y({opacity:e.line.opacity}),class:"c-rg-line-text",onClick:n[2]||(n[2]=l=>u(e.line,l))},T(e.line.text),5)],8,B)):D("",!0)]))}});const N=I(E,[["__scopeId","data-v-742ad819"]]);export{N as default};
