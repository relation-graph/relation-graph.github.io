import{n as i}from"./index-c847f99a.js";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",[r("path",{class:["c-rg-line",t.relation.styleClass,t.checked?"c-rg-line-checked":""],style:{opacity:t.relation.opacity,"stroke-width":(t.relation.lineWidth?t.relation.lineWidth:t.options.defaultLineWidth)+"px"},attrs:{d:t.pathData.path,stroke:t.checked?t.options.checkedLineColor:t.relation.color?t.relation.color:t.options.defaultLineColor,"marker-start":t.showStartArrow,"marker-end":t.showEndArrow,fill:"none"},on:{click:function(o){return t.onClick(t.relation,o)}}}),t.options.defaultShowLineLabel&&t.options.canvasZoom>40?r("g",{attrs:{transform:t.pathData.textTransform}},[r("rect",{key:"t-"+t.relation.seeks_id,staticClass:"c-rg-line-text-bg",style:{opacity:t.relation.opacity,fill:t.checked?t.options.checkedLineColor:t.relation.fontColor?t.relation.fontColor:t.relation.color?t.relation.color:void 0},attrs:{rx:"15",ry:"15",x:-30,y:-15},on:{click:function(o){return t.onClick(t.relation,o)}}}),r("text",{staticClass:"c-rg-line-text",style:{opacity:t.relation.opacity},attrs:{x:0,y:4},on:{click:function(o){return t.onClick(t.relation,o)}}},[t._v(" "+t._s(t.relation.text)+" ")])]):t._e()])},l=[];const s={name:"Demo4AdvLineSlot2LineSlot",props:{link:{mustUseProp:!0,default:()=>({}),type:Object},relation:{mustUseProp:!0,default:()=>({}),type:Object},relationIndex:{mustUseProp:!0,default:()=>0,type:Number}},data(){return{is_flashing:!1}},inject:["graph"],computed:{checked(){return this.link.seeks_id===this.options.checkedLineId},showStartArrow(){return this.relation.showStartArrow&&this.relationGraph.getArrow(this.relation,this.link,!0)},showEndArrow(){return this.relation.showEndArrow&&this.relationGraph.getArrow(this.relation,this.link,!1)},pathData(){try{const{path:t,textPosition:e}=this.relationGraph.createLinePath(this.link,this.relation,this.relationIndex);let r={};try{r=this.relationGraph.getTextTransform(this.relation,e.x,e.y,e.rotate)}catch{}return{path:t,textTransform:r}}catch{}return{path:null,textTransform:null}},options(){return this.graph.options},relationGraph(){return this.graph.instance}},show(){this.isShow=!0},watch:{},methods:{onClick(t,e){this.relationGraph.onLineClick(t,this.link,e)}}},n={};var c=i(s,a,l,!1,h,"4b32eb31",null,null);function h(t){for(let e in n)this[e]=n[e]}const p=function(){return c.exports}();export{p as default};
