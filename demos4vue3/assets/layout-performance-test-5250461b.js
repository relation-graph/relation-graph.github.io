import{M as A}from"./relation-graph-28379630.js";import{d as D,r as p,o as N,x as v,a as w,c as F,b as x,f as a,e as i,w as r,t as h,u as P,i as b,n as g}from"./index-f7176e57.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const j={class:"my-graph",style:{height:"calc(100vh - 50px)"}},Z={style:{width:"400px","border-radius":"10px",position:"absolute",left:"20px",top:"20px","z-index":"20",padding:"30px","background-color":"#ffffff",border:"#efefef solid 1px","box-shadow":"0 3px 9px rgba(0,21,41,.08)"}},q=D({__name:"layout-performance-test",setup(G){const y=["https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2308340537,462224207&fm=58&app=83&f=JPEG?w=250&h=250&s=EC708F46DA96B89CB69D5DDA0300D014","https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2677153550,2207805387&fm=58&app=83&f=JPEG?w=250&h=250&s=249039DDC2D153D411A851360300C062","https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1725297532,1915921796&fm=58&app=83&f=JPEG?w=250&h=250&s=FE8EA444A60759554DAC1DBB03000092","https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2025797948,1615296290&fm=58&app=83&f=JPEG?w=250&h=250&s=B5B04C331F32739C4604F9F503007021","https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=344720653,260255884&fm=58&app=83&f=JPEG?w=250&h=250&s=57B8AB676AE862941D94ED170300E060","https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3098576865,849900134&fm=58&app=83&f=JPEG?w=250&h=250&s=EDE01A63A65917DC104509920300C0C1","https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3722686698,2547355567&fm=58&app=83&f=JPEG?w=250&h=250&s=BF8A356E04E1B2BCEFA45D860100E0E1","https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4266886844,1791850012&fm=58&s=66B01AC758BB67960834B8FA0300C011","https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2747443453,2680399969&fm=58&app=83&f=JPEG?w=150&h=150&s=DB8828C1562265150814ADFE03007012","https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3301823375,1282024443&fm=58&app=83&f=JPG?w=250&h=250&s=2BC2834F2C22A25D12C06CA80300E013","https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=134233720,666111889&fm=58&app=83&f=JPG?w=250&h=250&s=4DE5A844801F1BD461E039A20300C0C3","https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1215039713,3597142764&fm=58&app=83&f=JPEG?w=250&h=250&s=1A20E0018E3B6E9CD10C7DA30300E081","https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1140839330,2922201597&fm=58&app=83&f=JPEG?w=250&h=250&s=CDF9A844D45AB87512C8508B0100F080","https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2110325119,1633583088&fm=58&app=83&f=JPEG?w=120&h=120&s=971E35C05A43305DCA7C1C0B030080C","https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1416498138,2265298708&fm=58&app=83&f=JPEG?w=250&h=250&s=F906CF1C0E1356D046AC3CEB0300B0A0","https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3749144697,3456463661&fm=58&app=83&f=JPEG?w=250&h=250&s=783823D3FE621E94138CC08B030070C2","https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2263876103,310235844&fm=58&app=83&f=JPEG?w=250&h=250&s=6CE2A944CC1223DC632CC09203009082","https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3590139977,3135325708&fm=58&app=83&f=JPEG?w=250&h=250&s=2F1C8B46C4A214BCE100A81A03004091","https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2110325119,1633583088&fm=58&app=83&f=JPEG?w=120&h=120&s=971E35C05A43305DCA7C1C0B030080C","https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4153440298,254451173&fm=58&app=83&f=JPEG?w=250&h=250&s=07C2B4488C42D355548CC41F010080D1","https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=842795163,1346447987&fm=58&app=83&f=JPEG?w=250&h=250&s=2BC3736EE499247D41C0B4820100E093"],n=["#FF6138","#FFBE53","#80b006","#198df1","#2980B9","#282741"],o=p({debug:!0,backgrounImageNoRepeat:!0,moveToCenterWhenRefresh:!0,zoomToFitWhenRefresh:!0,useAnimationWhenRefresh:!1,defaultLineColor:"rgba(255, 255, 255, 0.6)",defaultNodeColor:"rgba(255, 255, 255, 0.6)",defaultNodeBorderWidth:1,defaultNodeBorderColor:"rgba(255, 255, 255, 0.3)",defaultNodeFontColor:"#1b7702",defaultNodeShape:0,defaultNodeWidth:60,defaultNodeHeight:60,toolBarDirection:"h",toolBarPositionH:"right",toolBarPositionV:"bottom",defaultPloyLineRadius:10,defaultLineShape:1,performanceMode:!0,layout:{layoutName:"force",from:"left",maxLayoutTimes:300,force_node_repulsion:1,force_line_elastic:1}}),_=p(1),B=p(),C=async()=>{const t={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b1-3",text:"b1-3"},{id:"b1-4",text:"b1-4"},{id:"b1-5",text:"b1-5"},{id:"b1-6",text:"b1-6"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"b2-3",text:"b2-3"},{id:"b2-4",text:"b2-4"},{id:"b3",text:"b3"},{id:"b3-1",text:"b3-1"},{id:"b3-2",text:"b3-2"},{id:"b3-3",text:"b3-3"},{id:"b3-4",text:"b3-4"},{id:"b3-5",text:"b3-5"},{id:"b3-6",text:"b3-6"},{id:"b3-7",text:"b3-7"},{id:"b4",text:"b4"},{id:"b4-1",text:"b4-1"},{id:"b4-2",text:"b4-2"},{id:"b4-3",text:"b4-3"},{id:"b4-4",text:"b4-4"},{id:"b4-5",text:"b4-5"},{id:"b4-6",text:"b4-6"},{id:"b4-7",text:"b4-7"},{id:"b4-8",text:"b4-8"},{id:"b4-9",text:"b4-9"},{id:"b5",text:"b5"},{id:"b5-1",text:"b5-1"},{id:"b5-2",text:"b5-2"},{id:"b5-3",text:"b5-3"},{id:"b5-4",text:"b5-4"},{id:"b6",text:"b6"},{id:"b6-1",text:"b6-1"},{id:"b6-2",text:"b6-2"},{id:"b6-3",text:"b6-3"},{id:"b6-4",text:"b6-4"},{id:"b6-5",text:"b6-5"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c1-1",text:"c1-1"},{id:"c1-2",text:"c1-2"},{id:"c1-3",text:"c1-3"},{id:"c1-4",text:"c1-4"},{id:"c1-5",text:"c1-5"},{id:"c1-6",text:"c1-6"},{id:"c1-7",text:"c1-7"},{id:"c2",text:"c2"},{id:"c2-1",text:"c2-1"},{id:"c2-2",text:"c2-2"},{id:"c3",text:"c3"},{id:"c3-1",text:"c3-1"},{id:"c3-2",text:"c3-2"},{id:"c3-3",text:"c3-3"},{id:"d",text:"d"},{id:"d1",text:"d1"},{id:"d1-1",text:"d1-1"},{id:"d1-2",text:"d1-2"},{id:"d1-3",text:"d1-3"},{id:"d1-4",text:"d1-4"},{id:"d1-5",text:"d1-5"},{id:"d1-6",text:"d1-6"},{id:"d1-7",text:"d1-7"},{id:"d1-8",text:"d1-8"},{id:"d2",text:"d2"},{id:"d2-1",text:"d2-1"},{id:"d2-2",text:"d2-2"},{id:"d3",text:"d3"},{id:"d3-1",text:"d3-1"},{id:"d3-2",text:"d3-2"},{id:"d3-3",text:"d3-3"},{id:"d3-4",text:"d3-4"},{id:"d3-5",text:"d3-5"},{id:"d4",text:"d4"},{id:"d4-1",text:"d4-1"},{id:"d4-2",text:"d4-2"},{id:"d4-3",text:"d4-3"},{id:"d4-4",text:"d4-4"},{id:"d4-5",text:"d4-5"},{id:"d4-6",text:"d4-6"},{id:"e",text:"e"},{id:"e1",text:"e1"},{id:"e1-1",text:"e1-1"},{id:"e1-2",text:"e1-2"},{id:"e1-3",text:"e1-3"},{id:"e1-4",text:"e1-4"},{id:"e1-5",text:"e1-5"},{id:"e1-6",text:"e1-6"},{id:"e2",text:"e2"},{id:"e2-1",text:"e2-1"},{id:"e2-2",text:"e2-2"},{id:"e2-3",text:"e2-3"},{id:"e2-4",text:"e2-4"},{id:"e2-5",text:"e2-5"},{id:"e2-6",text:"e2-6"},{id:"e2-7",text:"e2-7"},{id:"e2-8",text:"e2-8"},{id:"e2-9",text:"e2-9"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b1",to:"b1-3"},{from:"b1",to:"b1-4"},{from:"b1",to:"b1-5"},{from:"b1",to:"b1-6"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"b2",to:"b2-3"},{from:"b2",to:"b2-4"},{from:"b",to:"b3"},{from:"b3",to:"b3-1"},{from:"b3",to:"b3-2"},{from:"b3",to:"b3-3"},{from:"b3",to:"b3-4"},{from:"b3",to:"b3-5"},{from:"b3",to:"b3-6"},{from:"b3",to:"b3-7"},{from:"b",to:"b4"},{from:"b4",to:"b4-1"},{from:"b4",to:"b4-2"},{from:"b4",to:"b4-3"},{from:"b4",to:"b4-4"},{from:"b4",to:"b4-5"},{from:"b4",to:"b4-6"},{from:"b4",to:"b4-7"},{from:"b4",to:"b4-8"},{from:"b4",to:"b4-9"},{from:"b",to:"b5"},{from:"b5",to:"b5-1"},{from:"b5",to:"b5-2"},{from:"b5",to:"b5-3"},{from:"b5",to:"b5-4"},{from:"b",to:"b6"},{from:"b6",to:"b6-1"},{from:"b6",to:"b6-2"},{from:"b6",to:"b6-3"},{from:"b6",to:"b6-4"},{from:"b6",to:"b6-5"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c1",to:"c1-1"},{from:"c1",to:"c1-2"},{from:"c1",to:"c1-3"},{from:"c1",to:"c1-4"},{from:"c1",to:"c1-5"},{from:"c1",to:"c1-6"},{from:"c1",to:"c1-7"},{from:"c",to:"c2"},{from:"c2",to:"c2-1"},{from:"c2",to:"c2-2"},{from:"c",to:"c3"},{from:"c3",to:"c3-1"},{from:"c3",to:"c3-2"},{from:"c3",to:"c3-3"},{from:"a",to:"d"},{from:"d",to:"d1"},{from:"d1",to:"d1-1"},{from:"d1",to:"d1-2"},{from:"d1",to:"d1-3"},{from:"d1",to:"d1-4"},{from:"d1",to:"d1-5"},{from:"d1",to:"d1-6"},{from:"d1",to:"d1-7"},{from:"d1",to:"d1-8"},{from:"d",to:"d2"},{from:"d2",to:"d2-1"},{from:"d2",to:"d2-2"},{from:"d",to:"d3"},{from:"d3",to:"d3-1"},{from:"d3",to:"d3-2"},{from:"d3",to:"d3-3"},{from:"d3",to:"d3-4"},{from:"d3",to:"d3-5"},{from:"d",to:"d4"},{from:"d4",to:"d4-1"},{from:"d4",to:"d4-2"},{from:"d4",to:"d4-3"},{from:"d4",to:"d4-4"},{from:"d4",to:"d4-5"},{from:"d4",to:"d4-6"},{from:"a",to:"e"},{from:"e",to:"e1"},{from:"e1",to:"e1-1"},{from:"e1",to:"e1-2"},{from:"e1",to:"e1-3"},{from:"e1",to:"e1-4"},{from:"e1",to:"e1-5"},{from:"e1",to:"e1-6"},{from:"e",to:"e2"},{from:"e2",to:"e2-1"},{from:"e2",to:"e2-2"},{from:"e2",to:"e2-3"},{from:"e2",to:"e2-4"},{from:"e2",to:"e2-5"},{from:"e2",to:"e2-6"},{from:"e2",to:"e2-7"},{from:"e2",to:"e2-8"},{from:"e2",to:"e2-9"}]},f=[],c=[];for(const e of t.nodes)if(e.id.includes("-"))for(let s=1;s<=_.value;s++)f.push({id:e.id+"-"+s,text:e.text+"-"+s}),c.push({from:e.id,to:e.id+"-"+s});t.nodes.push(...f),t.lines.push(...c);for(const e of t.nodes){const s=Math.floor(Math.random()*y.length),d=Math.floor(Math.random()*n.length);e.color=n[d],e.data={pic:y[s]}}for(const e of t.lines){const s=Math.floor(Math.random()*n.length);e.color=n[s]}const u=l.value.getInstance();await E(),await u.setJsonData(t),await u.setZoom(30)},E=async()=>{await l.value.getInstance().stopAutoLayout()},I=async()=>{await E();const m=l.value.getInstance(),t=m.layouter;t.maxLayoutTimes=o.value.layout.maxLayoutTimes,t.force_node_repulsion=o.value.layout.force_node_repulsion,t.force_line_elastic=o.value.layout.force_line_elastic,setTimeout(async()=>{await m.startAutoLayout()},500)},l=p(null);return N(()=>{C()}),v(()=>{console.log("beforeUnmount: clear timer"),clearInterval(B.value)}),(m,t)=>{const f=b("el-radio-button"),c=b("el-radio-group"),u=b("el-divider"),e=b("el-slider"),s=b("el-button");return w(),F("div",null,[x("div",j,[x("div",Z,[a(" 演示数据："),i(c,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=d=>_.value=d),size:"small",onChange:C},{default:r(()=>[i(f,{label:1},{default:r(()=>[a("100 node + 100 edge")]),_:1}),i(f,{label:5},{default:r(()=>[a("500 node + 500 edge")]),_:1}),i(f,{label:15},{default:r(()=>[a("1500 node + 1500 edge")]),_:1}),i(f,{label:30},{default:r(()=>[a("3000 node + 3000 edge")]),_:1}),i(f,{label:50},{default:r(()=>[a("5000 node + 5000 edge")]),_:1}),i(f,{label:100},{default:r(()=>[a("10000 node + 10000 edge")]),_:1})]),_:1},8,["modelValue"]),i(u,null,{default:r(()=>[a("Layout Options")]),_:1}),a(" Max Layout Times: "+h(o.value.layout.maxLayoutTimes)+" ",1),i(e,{modelValue:o.value.layout.maxLayoutTimes,"onUpdate:modelValue":t[1]||(t[1]=d=>o.value.layout.maxLayoutTimes=d),min:30,max:5e3,step:100,"show-tooltip":!0},null,8,["modelValue"]),a(" Node Repulsion: "+h(o.value.layout.force_node_repulsion)+" ",1),i(e,{modelValue:o.value.layout.force_node_repulsion,"onUpdate:modelValue":t[2]||(t[2]=d=>o.value.layout.force_node_repulsion=d),min:.01,step:.05,max:4},null,8,["modelValue","min","step"]),a(" Line Elastic: "+h(o.value.layout.force_line_elastic)+" ",1),i(e,{modelValue:o.value.layout.force_line_elastic,"onUpdate:modelValue":t[3]||(t[3]=d=>o.value.layout.force_line_elastic=d),min:.01,step:.05,max:4},null,8,["modelValue","min","step"]),i(s,{size:"small",type:"primary",onClick:I},{default:r(()=>[a("Apply")]),_:1})]),i(P(A),{ref_key:"graphRef",ref:l,options:o.value},{node:r(({node:d})=>[x("div",{class:"my-node-style",style:g({"background-image":"url("+d.data.pic+")"})},null,4),x("div",{class:"c-node-name",style:g({"background-color":d.color})},h(d.text),5)]),_:1},8,["options"])])])}}});const V=O(q,[["__scopeId","data-v-df1eb553"]]);export{V as default};
