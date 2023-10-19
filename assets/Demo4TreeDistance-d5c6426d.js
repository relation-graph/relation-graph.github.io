import{n}from"./index-d32a4e53.js";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticStyle:{"margin-top":"10px","border-bottom":"#efefef solid 1px","padding-left":"20px"}},[t("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.onTabAciveChange},model:{value:e.activeTabName,callback:function(o){e.activeTabName=o},expression:"activeTabName"}},[t("el-tab-pane",{attrs:{label:"通过水平/垂直距离范围来设置",name:"case1"}},[t("div",{staticStyle:{width:"700px"}},[t("div",{staticStyle:{"padding-bottom":"10px",color:"#333333","font-size":"12px"}},[e._v("图谱默认会根据当前可见范围自动调整水平方向与垂直方向的距离，"),t("b",[e._v("图谱会尽量让图谱显得舒展且不超出可见范围")]),e._v("。当图谱计算出的距离小于设置的最小值时 设置的最小值会生效；当图谱计算出的最大值大于设置的最大值时 设置的最大值会生效;你可以多次尝试设置以下两组最大值和最小值，感受一下取舍关系。")]),t("span",{staticClass:"c-label"},[e._v("节点间【最小】--【最大】横向距离:")]),t("el-slider",{attrs:{range:"",max:500},on:{change:e.onChangeOptionByCase1},model:{value:e.range_horizontal,callback:function(o){e.range_horizontal=o},expression:"range_horizontal"}})],1),t("div",{staticStyle:{width:"700px"}},[t("span",{staticClass:"c-label"},[e._v("节点间【最小】--【最大】纵向距离:")]),t("el-slider",{attrs:{range:"",max:500},on:{change:e.onChangeOptionByCase1},model:{value:e.range_vertical,callback:function(o){e.range_vertical=o},expression:"range_vertical"}})],1)]),t("el-tab-pane",{attrs:{label:"通过固定的层级距离来设置",name:"case2"}},[t("div",{staticStyle:{width:"700px","font-size":"12px"}},[t("div",{staticStyle:{"padding-bottom":"10px",color:"#333333"}},[e._v("你可以设置每一层的距离，比如：400,200,300,500 表示根节点与第1次距离为400、第1层与第2次距离为200、第2层与第3层距离为300、第3层与第4层距离为500。如果此选项有值，则优先级高于水平/垂直距离的设置。")]),t("div",{staticStyle:{"padding-bottom":"10px",color:"#ff0000"}},[e._v("注意：如下图从左到有布局的tree，第一层的层级距离为200，这表示这第一层节点的最左侧与上一层（此处为第0层，即根节点）节点在最左侧的距离。")]),t("span",{staticClass:"c-label"},[e._v("以此设置每个层级的距离:")]),t("el-input",{attrs:{placeholder:"请输入内容"},on:{change:e.onChangeOptionByCase2},model:{value:e.levelDistance,callback:function(o){e.levelDistance=o},expression:"levelDistance"}})],1)])],1)],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.g_loading,expression:"g_loading"}],staticStyle:{width:"calc(100% - 10px)",height:"calc(100vh - 190px)"}},[t("RelationGraph",{ref:"graphRef",attrs:{options:e.graphOptions,"on-node-expand":e.onNodeExpand}})],1)])},l=[];const r={name:"RelationGraphDemo",components:{},data(){return{g_loading:!0,demoname:"---",activeTabName:"case1",range_horizontal:[100,300],range_vertical:[20,100],levelDistance:"200, 300, 400, 500, 500, 500, 500",graphOptions:{debug:!1,layout:{label:"树",layoutName:"tree",layoutClassName:"seeks-layout-center",from:"left",min_per_width:void 0,max_per_width:300,min_per_height:40,max_per_height:void 0,levelDistance:""},defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeWidth:40,defaultNodeHeight:40,defaultLineShape:4,defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"},graphOptions2222:{debug:!1,layout:{label:"树",layoutName:"tree",layoutClassName:"seeks-layout-center",from:"left",min_per_width:void 0,max_per_width:300,min_per_height:40,max_per_height:void 0,levelDistance:""},defaultExpandHolderPosition:"right",defaultNodeShape:1,defaultNodeWidth:100,defaultLineShape:4,defaultNodeBorderWidth:0,defaultLineColor:"rgba(0, 186, 189, 1)",defaultNodeColor:"rgba(0, 206, 209, 1)"}}},created(){},mounted(){this.demoname=this.$route.params.demoname,this.setGraphData()},methods:{setGraphData(){const e={rootId:"a",nodes:[{id:"a",text:"a"},{id:"b",text:"b"},{id:"b1",text:"b1"},{id:"b1-1",text:"b1-1"},{id:"b1-2",text:"b1-2"},{id:"b2",text:"b2"},{id:"b2-1",text:"b2-1"},{id:"b2-2",text:"b2-2"},{id:"b2-2-1",text:"b2-2-1"},{id:"b2-2-2",text:"b2-2-2"},{id:"c",text:"c"},{id:"c1",text:"c1"},{id:"c2",text:"c2"},{id:"c2-1",text:"c2-1"},{id:"c2-2",text:"c2-2"},{id:"c2-2-1",text:"c2-2-1"},{id:"c2-2-2",text:"c2-2-2"},{id:"c3",text:"c3"}],lines:[{from:"a",to:"b"},{from:"b",to:"b1"},{from:"b1",to:"b1-1"},{from:"b1",to:"b1-2"},{from:"b",to:"b2"},{from:"b2",to:"b2-1"},{from:"b2",to:"b2-2"},{from:"b2-2",to:"b2-2-1"},{from:"b2-2",to:"b2-2-2"},{from:"a",to:"c"},{from:"c",to:"c1"},{from:"c",to:"c2"},{from:"c2",to:"c2-1"},{from:"c2",to:"c2-2"},{from:"c2-2",to:"c2-2-1"},{from:"c2-2",to:"c2-2-2"},{from:"c",to:"c3"}]};console.log(JSON.stringify(e)),this.g_loading=!1,this.$refs.graphRef.setJsonData(e,a=>{})},onNodeExpand(e,a){console.log("onNodeExpand:",e),this.$refs.graphRef.refresh()},onChangeOptionByCase1(){this.graphOptions.layout.min_per_width=this.range_horizontal[0],this.graphOptions.layout.max_per_width=this.range_horizontal[1],this.graphOptions.layout.min_per_height=this.range_vertical[0],this.graphOptions.layout.max_per_height=this.range_vertical[1],this.$refs.graphRef.setOptions(this.graphOptions,e=>{console.log("setOptions:callback:",e)})},onChangeOptionByCase2(){let e=[];try{e=this.levelDistance.split(",")}catch{this.$message({type:"error",message:"格式错误！"});return}this.graphOptions2222.layout.levelDistance=this.levelDistance,this.$refs.graphRef.setOptions(this.graphOptions2222,a=>{console.log("setOptions:callback:",a)})},onTabAciveChange(){console.log("this.activeTabName:",this.activeTabName),this.activeTabName==="case2"?this.onChangeOptionByCase2():this.onChangeOptionByCase1()}}},i={};var c=n(r,s,l,!1,d,"1d6d62dc",null,null);function d(e){for(let a in i)this[a]=i[a]}const p=function(){return c.exports}();export{p as default};
