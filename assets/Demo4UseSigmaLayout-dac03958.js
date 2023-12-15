
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              import{d as Nt,i as mt,G as Gt}from"./is-graph-9dab2113.js";import{g as Et,n as dt}from"./index-0f873f6f.js";var St=Nt,Rt=mt,At={dimensions:["x","y"],center:.5,scale:1};function wt(o,f,t){if(!Rt(f))throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");t=St(t,At);var s=t.dimensions;if(!Array.isArray(s)||s.length!==2)throw new Error("graphology-layout/random: given dimensions are invalid.");var h=t.center,r=t.scale,e=Math.PI*2,i=(h-.5)*r,l=f.order,E=s[0],L=s[1];function w(G,O){return O[E]=r*Math.cos(G*e/l)+i,O[L]=r*Math.sin(G*e/l)+i,O}var u=0;if(!o){var j={};return f.forEachNode(function(G){j[G]=w(u++,{})}),j}f.updateEachNodeAttributes(function(G,O){return w(u++,O),O},{attributes:s})}var _t=wt.bind(null,!1);_t.assign=wt.bind(null,!0);var Lt=_t;const It=Et(Lt);var ut={};function Ct(o){return typeof o!="number"||isNaN(o)?1:o}function Ot(o,f){var t={},s=function(e){return typeof e>"u"?f:e};typeof f=="function"&&(s=f);var h=function(e){return s(e[o])},r=function(){return s(void 0)};return typeof o=="string"?(t.fromAttributes=h,t.fromGraph=function(e,i){return h(e.getNodeAttributes(i))},t.fromEntry=function(e,i){return h(i)}):typeof o=="function"?(t.fromAttributes=function(){throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.")},t.fromGraph=function(e,i){return s(o(i,e.getNodeAttributes(i)))},t.fromEntry=function(e,i){return s(o(e,i))}):(t.fromAttributes=r,t.fromGraph=r,t.fromEntry=r),t}function pt(o,f){var t={},s=function(e){return typeof e>"u"?f:e};typeof f=="function"&&(s=f);var h=function(e){return s(e[o])},r=function(){return s(void 0)};return typeof o=="string"?(t.fromAttributes=h,t.fromGraph=function(e,i){return h(e.getEdgeAttributes(i))},t.fromEntry=function(e,i){return h(i)},t.fromPartialEntry=t.fromEntry,t.fromMinimalEntry=t.fromEntry):typeof o=="function"?(t.fromAttributes=function(){throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.")},t.fromGraph=function(e,i){var l=e.extremities(i);return s(o(i,e.getEdgeAttributes(i),l[0],l[1],e.getNodeAttributes(l[0]),e.getNodeAttributes(l[1]),e.isUndirected(i)))},t.fromEntry=function(e,i,l,E,L,w,u){return s(o(e,i,l,E,L,w,u))},t.fromPartialEntry=function(e,i,l,E){return s(o(e,i,l,E))},t.fromMinimalEntry=function(e,i){return s(o(e,i))}):(t.fromAttributes=r,t.fromGraph=r,t.fromEntry=r,t.fromMinimalEntry=r),t}ut.createNodeValueGetter=Ot;ut.createEdgeValueGetter=pt;ut.createEdgeWeightGetter=function(o){return pt(o,Ct)};var N=0,p=1,g=2,v=3,z=4,H=5,m=6,ht=7,st=8,gt=9,Tt=0,kt=1,Pt=2,d=0,C=1,R=2,q=3,$=4,D=5,A=6,k=7,P=8,vt=3,T=10,Wt=3,S=9,lt=10,zt=function(f,t,s){var h,r,e,i,l,E,L,w,u,j,G=t.length,O=s.length,U=f.adjustSizes,X=f.barnesHutTheta*f.barnesHutTheta,tt,_,y,b,W,c,a,n=[];for(e=0;e<G;e+=T)t[e+z]=t[e+g],t[e+H]=t[e+v],t[e+g]=0,t[e+v]=0;if(f.outboundAttractionDistribution){for(tt=0,e=0;e<G;e+=T)tt+=t[e+m];tt/=G/T}if(f.barnesHutOptimize){var V=1/0,F=-1/0,J=1/0,K=-1/0,I,Q,at;for(e=0;e<G;e+=T)V=Math.min(V,t[e+N]),F=Math.max(F,t[e+N]),J=Math.min(J,t[e+p]),K=Math.max(K,t[e+p]);var et=F-V,rt=K-J;for(et>rt?(J-=(et-rt)/2,K=J+et):(V-=(rt-et)/2,F=V+rt),n[0+d]=-1,n[0+C]=(V+F)/2,n[0+R]=(J+K)/2,n[0+q]=Math.max(F-V,K-J),n[0+$]=-1,n[0+D]=-1,n[0+A]=0,n[0+k]=0,n[0+P]=0,h=1,e=0;e<G;e+=T)for(r=0,at=vt;;)if(n[r+D]>=0){t[e+N]<n[r+C]?t[e+p]<n[r+R]?I=n[r+D]:I=n[r+D]+S:t[e+p]<n[r+R]?I=n[r+D]+S*2:I=n[r+D]+S*3,n[r+k]=(n[r+k]*n[r+A]+t[e+N]*t[e+m])/(n[r+A]+t[e+m]),n[r+P]=(n[r+P]*n[r+A]+t[e+p]*t[e+m])/(n[r+A]+t[e+m]),n[r+A]+=t[e+m],r=I;continue}else if(n[r+d]<0){n[r+d]=e;break}else{if(n[r+D]=h*S,w=n[r+q]/2,u=n[r+D],n[u+d]=-1,n[u+C]=n[r+C]-w,n[u+R]=n[r+R]-w,n[u+q]=w,n[u+$]=u+S,n[u+D]=-1,n[u+A]=0,n[u+k]=0,n[u+P]=0,u+=S,n[u+d]=-1,n[u+C]=n[r+C]-w,n[u+R]=n[r+R]+w,n[u+q]=w,n[u+$]=u+S,n[u+D]=-1,n[u+A]=0,n[u+k]=0,n[u+P]=0,u+=S,n[u+d]=-1,n[u+C]=n[r+C]+w,n[u+R]=n[r+R]-w,n[u+q]=w,n[u+$]=u+S,n[u+D]=-1,n[u+A]=0,n[u+k]=0,n[u+P]=0,u+=S,n[u+d]=-1,n[u+C]=n[r+C]+w,n[u+R]=n[r+R]+w,n[u+q]=w,n[u+$]=n[r+$],n[u+D]=-1,n[u+A]=0,n[u+k]=0,n[u+P]=0,h+=4,t[n[r+d]+N]<n[r+C]?t[n[r+d]+p]<n[r+R]?I=n[r+D]:I=n[r+D]+S:t[n[r+d]+p]<n[r+R]?I=n[r+D]+S*2:I=n[r+D]+S*3,n[r+A]=t[n[r+d]+m],n[r+k]=t[n[r+d]+N],n[r+P]=t[n[r+d]+p],n[I+d]=n[r+d],n[r+d]=-1,t[e+N]<n[r+C]?t[e+p]<n[r+R]?Q=n[r+D]:Q=n[r+D]+S:t[e+p]<n[r+R]?Q=n[r+D]+S*2:Q=n[r+D]+S*3,I===Q)if(at--){r=I;continue}else{at=vt;break}n[Q+d]=e;break}}if(f.barnesHutOptimize)for(_=f.scalingRatio,e=0;e<G;e+=T)for(r=0;;)if(n[r+D]>=0)if(c=Math.pow(t[e+N]-n[r+k],2)+Math.pow(t[e+p]-n[r+P],2),j=n[r+q],4*j*j/c<X){if(y=t[e+N]-n[r+k],b=t[e+p]-n[r+P],U===!0?c>0?(a=_*t[e+m]*n[r+A]/c,t[e+g]+=y*a,t[e+v]+=b*a):c<0&&(a=-_*t[e+m]*n[r+A]/Math.sqrt(c),t[e+g]+=y*a,t[e+v]+=b*a):c>0&&(a=_*t[e+m]*n[r+A]/c,t[e+g]+=y*a,t[e+v]+=b*a),r=n[r+$],r<0)break;continue}else{r=n[r+D];continue}else{if(E=n[r+d],E>=0&&E!==e&&(y=t[e+N]-t[E+N],b=t[e+p]-t[E+p],c=y*y+b*b,U===!0?c>0?(a=_*t[e+m]*t[E+m]/c,t[e+g]+=y*a,t[e+v]+=b*a):c<0&&(a=-_*t[e+m]*t[E+m]/Math.sqrt(c),t[e+g]+=y*a,t[e+v]+=b*a):c>0&&(a=_*t[e+m]*t[E+m]/c,t[e+g]+=y*a,t[e+v]+=b*a)),r=n[r+$],r<0)break;continue}else for(_=f.scalingRatio,i=0;i<G;i+=T)for(l=0;l<i;l+=T)y=t[i+N]-t[l+N],b=t[i+p]-t[l+p],U===!0?(c=Math.sqrt(y*y+b*b)-t[i+st]-t[l+st],c>0?(a=_*t[i+m]*t[l+m]/c/c,t[i+g]+=y*a,t[i+v]+=b*a,t[l+g]-=y*a,t[l+v]-=b*a):c<0&&(a=100*_*t[i+m]*t[l+m],t[i+g]+=y*a,t[i+v]+=b*a,t[l+g]-=y*a,t[l+v]-=b*a)):(c=Math.sqrt(y*y+b*b),c>0&&(a=_*t[i+m]*t[l+m]/c/c,t[i+g]+=y*a,t[i+v]+=b*a,t[l+g]-=y*a,t[l+v]-=b*a));for(u=f.gravity/f.scalingRatio,_=f.scalingRatio,e=0;e<G;e+=T)a=0,y=t[e+N],b=t[e+p],c=Math.sqrt(Math.pow(y,2)+Math.pow(b,2)),f.strongGravityMode?c>0&&(a=_*t[e+m]*u):c>0&&(a=_*t[e+m]*u/c),t[e+g]-=y*a,t[e+v]-=b*a;for(_=1*(f.outboundAttractionDistribution?tt:1),L=0;L<O;L+=Wt)i=s[L+Tt],l=s[L+kt],w=s[L+Pt],W=Math.pow(w,f.edgeWeightInfluence),y=t[i+N]-t[l+N],b=t[i+p]-t[l+p],U===!0?(c=Math.sqrt(y*y+b*b)-t[i+st]-t[l+st],f.linLogMode?f.outboundAttractionDistribution?c>0&&(a=-_*W*Math.log(1+c)/c/t[i+m]):c>0&&(a=-_*W*Math.log(1+c)/c):f.outboundAttractionDistribution?c>0&&(a=-_*W/t[i+m]):c>0&&(a=-_*W)):(c=Math.sqrt(Math.pow(y,2)+Math.pow(b,2)),f.linLogMode?f.outboundAttractionDistribution?c>0&&(a=-_*W*Math.log(1+c)/c/t[i+m]):c>0&&(a=-_*W*Math.log(1+c)/c):f.outboundAttractionDistribution?(c=1,a=-_*W/t[i+m]):(c=1,a=-_*W)),c>0&&(t[i+g]+=y*a,t[i+v]+=b*a,t[l+g]-=y*a,t[l+v]-=b*a);var nt,Y,ot,Z,ft,it;if(U===!0)for(e=0;e<G;e+=T)t[e+gt]!==1&&(nt=Math.sqrt(Math.pow(t[e+g],2)+Math.pow(t[e+v],2)),nt>lt&&(t[e+g]=t[e+g]*lt/nt,t[e+v]=t[e+v]*lt/nt),Y=t[e+m]*Math.sqrt((t[e+z]-t[e+g])*(t[e+z]-t[e+g])+(t[e+H]-t[e+v])*(t[e+H]-t[e+v])),ot=Math.sqrt((t[e+z]+t[e+g])*(t[e+z]+t[e+g])+(t[e+H]+t[e+v])*(t[e+H]+t[e+v]))/2,Z=.1*Math.log(1+ot)/(1+Math.sqrt(Y)),ft=t[e+N]+t[e+g]*(Z/f.slowDown),t[e+N]=ft,it=t[e+p]+t[e+v]*(Z/f.slowDown),t[e+p]=it);else for(e=0;e<G;e+=T)t[e+gt]!==1&&(Y=t[e+m]*Math.sqrt((t[e+z]-t[e+g])*(t[e+z]-t[e+g])+(t[e+H]-t[e+v])*(t[e+H]-t[e+v])),ot=Math.sqrt((t[e+z]+t[e+g])*(t[e+z]+t[e+g])+(t[e+H]+t[e+v])*(t[e+H]+t[e+v]))/2,Z=t[e+ht]*Math.log(1+ot)/(1+Math.sqrt(Y)),t[e+ht]=Math.min(1,Math.sqrt(Z*(Math.pow(t[e+g],2)+Math.pow(t[e+v],2))/(1+Math.sqrt(Y)))),ft=t[e+N]+t[e+g]*(Z/f.slowDown),t[e+N]=ft,it=t[e+p]+t[e+v]*(Z/f.slowDown),t[e+p]=it);return{}},B={},M=10,yt=3;B.assign=function(o){o=o||{};var f=Array.prototype.slice.call(arguments).slice(1),t,s,h;for(t=0,h=f.length;t<h;t++)if(f[t])for(s in f[t])o[s]=f[t][s];return o};B.validateSettings=function(o){return"linLogMode"in o&&typeof o.linLogMode!="boolean"?{message:"the `linLogMode` setting should be a boolean."}:"outboundAttractionDistribution"in o&&typeof o.outboundAttractionDistribution!="boolean"?{message:"the `outboundAttractionDistribution` setting should be a boolean."}:"adjustSizes"in o&&typeof o.adjustSizes!="boolean"?{message:"the `adjustSizes` setting should be a boolean."}:"edgeWeightInfluence"in o&&typeof o.edgeWeightInfluence!="number"?{message:"the `edgeWeightInfluence` setting should be a number."}:"scalingRatio"in o&&!(typeof o.scalingRatio=="number"&&o.scalingRatio>=0)?{message:"the `scalingRatio` setting should be a number >= 0."}:"strongGravityMode"in o&&typeof o.strongGravityMode!="boolean"?{message:"the `strongGravityMode` setting should be a boolean."}:"gravity"in o&&!(typeof o.gravity=="number"&&o.gravity>=0)?{message:"the `gravity` setting should be a number >= 0."}:"slowDown"in o&&!(typeof o.slowDown=="number"||o.slowDown>=0)?{message:"the `slowDown` setting should be a number >= 0."}:"barnesHutOptimize"in o&&typeof o.barnesHutOptimize!="boolean"?{message:"the `barnesHutOptimize` setting should be a boolean."}:"barnesHutTheta"in o&&!(typeof o.barnesHutTheta=="number"&&o.barnesHutTheta>=0)?{message:"the `barnesHutTheta` setting should be a number >= 0."}:null};B.graphToByteArrays=function(o,f){var t=o.order,s=o.size,h={},r,e=new Float32Array(t*M),i=new Float32Array(s*yt);return r=0,o.forEachNode(function(l,E){h[l]=r,e[r]=E.x,e[r+1]=E.y,e[r+2]=0,e[r+3]=0,e[r+4]=0,e[r+5]=0,e[r+6]=1,e[r+7]=1,e[r+8]=E.size||1,e[r+9]=E.fixed?1:0,r+=M}),r=0,o.forEachEdge(function(l,E,L,w,u,j,G){var O=h[L],U=h[w],X=f(l,E,L,w,u,j,G);e[O+6]+=X,e[U+6]+=X,i[r]=O,i[r+1]=U,i[r+2]=X,r+=yt}),{nodes:e,edges:i}};B.assignLayoutChanges=function(o,f,t){var s=0;o.updateEachNodeAttributes(function(h,r){return r.x=f[s],r.y=f[s+1],s+=M,t?t(h,r):r})};B.readGraphPositions=function(o,f){var t=0;o.forEachNode(function(s,h){f[t]=h.x,f[t+1]=h.y,t+=M})};B.collectLayoutChanges=function(o,f,t){for(var s=o.nodes(),h={},r=0,e=0,i=f.length;r<i;r+=M){if(t){var l=Object.assign({},o.getNodeAttributes(s[e]));l.x=f[r],l.y=f[r+1],l=t(s[e],l),h[s[e]]={x:l.x,y:l.y}}else h[s[e]]={x:f[r],y:f[r+1]};e++}return h};B.createWorker=function(f){var t=window.URL||window.webkitURL,s=f.toString(),h=t.createObjectURL(new Blob(["("+s+").call(this);"],{type:"text/javascript"})),r=new Worker(h);return t.revokeObjectURL(h),r};var Ht={linLogMode:!1,outboundAttractionDistribution:!1,adjustSizes:!1,edgeWeightInfluence:1,scalingRatio:1,strongGravityMode:!1,gravity:1,slowDown:1,barnesHutOptimize:!1,barnesHutTheta:.5},jt=mt,Ut=ut.createEdgeWeightGetter,$t=zt,x=B,Bt=Ht;function Dt(o,f,t){if(!jt(f))throw new Error("graphology-layout-forceatlas2: the given graph is not a valid graphology instance.");typeof t=="number"&&(t={iterations:t});var s=t.iterations;if(typeof s!="number")throw new Error("graphology-layout-forceatlas2: invalid number of iterations.");if(s<=0)throw new Error("graphology-layout-forceatlas2: you should provide a positive number of iterations.");var h=Ut("getEdgeWeight"in t?t.getEdgeWeight:"weight").fromEntry,r=typeof t.outputReducer=="function"?t.outputReducer:null,e=x.assign({},Bt,t.settings),i=x.validateSettings(e);if(i)throw new Error("graphology-layout-forceatlas2: "+i.message);var l=x.graphToByteArrays(f,h),E;for(E=0;E<s;E++)$t(e,l.nodes,l.edges);if(o){x.assignLayoutChanges(f,l.nodes,r);return}return x.collectLayoutChanges(f,l.nodes)}function Vt(o){var f=typeof o=="number"?o:o.order;return{barnesHutOptimize:f>2e3,strongGravityMode:!0,gravity:.05,scalingRatio:10,slowDown:1+Math.log(f)}}var ct=Dt.bind(null,!1);ct.assign=Dt.bind(null,!0);ct.inferSettings=Vt;var Jt=ct;const Zt=Et(Jt);var qt=function(){var o=this,f=o.$createElement,t=o._self._c||f;return t("div",[t("div",{staticStyle:{height:"calc(100vh - 60px)"}},[t("RelationGraph",{ref:"graphRef",attrs:{options:o.graphOptions,"on-node-click":o.onNodeClick,"on-line-click":o.onLineClick},scopedSlots:o._u([{key:"graph-plug",fn:function(){return[t("div",{staticClass:"c-my-panel"},[t("div",{staticClass:"c-option-name",staticStyle:{"line-height":"25px",padding:"10px"}},[o._v(" 此布局使用到了第三方布局算法：Sigma，同时relation-graph的支持插槽等强大功能您依然可以使用，完美融合。Sigma力导向图布局是经典的布局算法。 ")])])]},proxy:!0}])})],1)])},Ft=[];const Kt={name:"Demo",components:{},data(){return{currentCase:"横向树状图谱",isShowCodePanel:!1,graphOptions:{debug:!1,lineUseTextPath:!0,layout:{layoutName:"fixed"},defaultNodeShape:0,defaultLineShape:1,defaultJunctionPoint:"border",defaultNodeBorderWidth:0,defaultNodeWidth:30,defaultNodeHeight:30,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"}}},mounted(){this.useGraphologyLayout()},methods:{async useGraphologyLayout(){const o={rootId:"root",nodes:[{id:"root",text:"节点"},{id:"N2",text:"新节点N2"},{id:"N3",text:"新节点N3"},{id:"N4",text:"新节点N4"},{id:"N5",text:"新节点N5"},{id:"N6",text:"新节点N6"},{id:"N7",text:"新节点N7"},{id:"N8",text:"新节点N8"},{id:"N9",text:"新节点N9"},{id:"N10",text:"新节点N10"},{id:"N11",text:"新节点N11"},{id:"N12",text:"新节点N12"},{id:"N13",text:"新节点N13"},{id:"N14",text:"新节点N14"},{id:"N15",text:"新节点N15"},{id:"N16",text:"新节点N16"},{id:"N17",text:"新节点N17"},{id:"N18",text:"新节点N18"},{id:"N19",text:"新节点N19"},{id:"N20",text:"新节点N20"},{id:"N21",text:"新节点N21"},{id:"N22",text:"新节点N22"},{id:"N23",text:"新节点N23"},{id:"N24",text:"新节点N24"},{id:"N25",text:"新节点N25"},{id:"N26",text:"新节点N26"},{id:"N27",text:"New-N27"},{id:"N28",text:"New-N28"},{id:"N29",text:"New-N29"},{id:"N30",text:"New-N30"},{id:"N31",text:"New-N31"},{id:"N32",text:"New-N32"},{id:"N33",text:"New-N33"},{id:"N34",text:"New-N34"},{id:"N35",text:"New-N35"},{id:"N36",text:"New-N36"},{id:"N37",text:"New-N37"},{id:"N38",text:"New-N38"},{id:"N39",text:"New-N39"}],lines:[{from:"N3",to:"N2",text:"新连线1"},{from:"N2",to:"root",text:"新连线1"},{from:"root",to:"N4",text:"新连线2"},{from:"N4",to:"N5",text:"新连线3"},{from:"N6",to:"N7",text:"新连线2"},{from:"N7",to:"root",text:"新连线3"},{from:"N8",to:"N9",text:"新连线4"},{from:"N9",to:"root",text:"新连线5"},{from:"N10",to:"N11",text:"新连线6"},{from:"N11",to:"root",text:"新连线7"},{from:"N13",to:"N12",text:"新连线8"},{from:"N12",to:"root",text:"新连线9"},{from:"N18",to:"N17",text:"新连线10"},{from:"N17",to:"N14",text:"新连线11"},{from:"N15",to:"N14",text:"新连线12"},{from:"N16",to:"N15",text:"新连线13"},{from:"N12",to:"N14",text:"新连线14"},{from:"N20",to:"N19",text:"新连线15"},{from:"N21",to:"N19",text:"新连线16"},{from:"N19",to:"N15",text:"新连线17"},{from:"N26",to:"N22",text:"新连线18"},{from:"N24",to:"N25",text:"新连线19"},{from:"N24",to:"N22",text:"新连线20"},{from:"N22",to:"N23",text:"新连线21"},{from:"N23",to:"N14",text:"新连线22"},{from:"root",to:"N30",text:"新连线1"},{from:"root",to:"N27",text:"新连线2"},{from:"N30",to:"N33",text:"新连线3"},{from:"N30",to:"N29",text:"新连线4"},{from:"N27",to:"N28",text:"新连线5"},{from:"N27",to:"N31",text:"新连线6"},{from:"N27",to:"N32",text:"新连线7"},{from:"N4",to:"N34",text:"新连线8"},{from:"N28",to:"N35",text:"新连线9"},{from:"N28",to:"N36",text:"新连线12"},{from:"N28",to:"N37",text:"新连线13"},{from:"N36",to:"N39",text:"新连线14"},{from:"N36",to:"N38",text:"新连线15"}]};o.nodes.forEach(s=>{s.text="N"});const f=new Gt,t=this.$refs.graphRef.getInstance();await t.setJsonData(o),t.getNodes().forEach(s=>{f.addNode(s.id,{text:s.text,width:s.el.offsetWidth,height:s.el.offsetHeight})}),t.getLinks().forEach(s=>{s.relations.forEach(h=>{f.addEdge(s.fromNode.id,s.toNode.id,{id:h.id,weight:1})})}),It.assign(f),Zt.assign(f,600),f.nodes().forEach(s=>{const h=f.getNodeAttributes(s);console.log(s);const r=t.getNodeById(s);r.x=h.x*10,r.y=h.y*10})},onNodeClick(o,f){console.log("onNodeClick:",o)},onLineClick(o,f,t){console.log("onLineClick:",o)}}},bt={};var Qt=dt(Kt,qt,Ft,!1,Xt,"412e24ee",null,null);function Xt(o){for(let f in bt)this[f]=bt[f]}const Mt=function(){return Qt.exports}();export{Mt as default};
