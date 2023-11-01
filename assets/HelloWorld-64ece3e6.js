import{n as o}from"./index-fca44c1d.js";var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticStyle:{height:"calc(100vh - 60px)"}},[s("RelationGraph",{ref:"seeksRelationGraph",attrs:{options:e.graphOptions,"on-node-click":e.onNodeClick,"on-line-click":e.onLineClick}})],1)])},r=[];const i={name:"Test",components:{},data(){return{isShowCodePanel:!1,graphOptions:{debug:!0,showDebugPanel:!0,backgrounImage:"",downloadImageFileName:"",disableZoom:!1,disableDragNode:!1,moveToCenterWhenRefresh:!1,zoomToFitWhenRefresh:!0,defaultFocusRootNode:!1,disableNodeClickEffect:!1,disableLineClickEffect:!1,allowShowZoomMenu:!0,allowAutoLayoutIfSupport:!0,allowShowRefreshButton:!0,allowShowDownloadButton:!0,backgrounImageNoRepeat:!0,allowShowMiniToolBar:!0,allowSwitchLineShape:!1,allowSwitchJunctionPoint:!1,isMoveByParentNode:!0,defaultExpandHolderPosition:"right",defaultNodeColor:"#3D82F8",checkedLineColor:"#FD8B37",defaultNodeFontColor:"white",defaultNodeBorderColor:"#3D82F8",defaultNodeBorderWidth:1,defaultLineColor:"#D6D8DB",defaultLineWidth:1,defaultLineShape:4,defaultNodeShape:1,defaultShowLineLabel:!0,hideNodeContentByZoom:!1,defaultJunctionPoint:"lr",disableDragCanvas:!1,lineUseTextPath:!1,defaultLineMarker:{markerWidth:12,markerHeight:12,refX:6,refY:6,data:"M2,2 L10,6 L2,10 L6,6 L2,2"},allowShowMiniView:!1,allowShowSettingPanel:!1,allowShowMiniNameFilter:!0,checkedNodeId:"",checkedLineId:"",layouts:[{label:"中心",layoutName:"tree",from:"left",layoutClassName:"seeks-layout-center",defaultJunctionPoint:"lr",defaultNodeShape:0,defaultLineShape:1,min_per_width:"280",max_per_width:"500",min_per_height:"50",levelDistance:"240,290,290,220",useLayoutStyleOptions:!1,defaultNodeColor:"#FFC5A6",defaultNodeFontColor:"#000000",defaultNodeBorderColor:"#efefef",defaultNodeBorderWidth:1,defaultLineColor:"#FD8B37",defaultLineWidth:1,defaultShowLineLabel:!0,defaultExpandHolderPosition:"hide",defaultLineMarker:{markerWidth:12,markerHeight:12,refX:6,refY:6,data:"M2,2 L10,6 L2,10 L6,6 L2,2"},layoutDirection:"h",centerOffset_x:0,centerOffset_y:0,max_per_height:500,levelDistanceArr:[240,290,290,220]}],isNeedShowAutoLayoutButton:!1,showSingleNode:!0,showNodeLabel:!0,showNodeShortLabel:!0}}},mounted(){this.showSeeksGraph()},methods:{showSeeksGraph(){const e={rootId:"0",nodes:[{id:"0",text:"高端软件产业链",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",opacity:1,fixed:!1,x:-693.5,y:-24,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{level:0}},{id:"101",text:"基础软件",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-453.5,y:-699,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"0",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"102",text:"平台软件",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-453.5,y:-499,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"0",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"103",text:"应用软件",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-453.5,y:-74,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"0",industrialTag:"5",introduction:null,industrialAttribute:[]}},{id:"104",text:"工业软件",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-453.5,y:351,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"0",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"105",text:"嵌入式软件",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-453.5,y:501,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"0",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"106",text:"信息安全",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-453.5,y:626,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"0",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10101",text:"操作系统",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-774,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"101",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10102",text:"数据库",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-724,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"101",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10103",text:"中间件",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-674,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"101",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10104",text:"办公软件",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-624,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"101",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10201",text:"云计算及大数据",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-574,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"102",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10202",text:"工业互联网平台",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-524,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"102",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10203",text:"人工智能平台",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-474,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"102",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10204",text:"区块链平台",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-424,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"102",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10301",text:"政务",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-374,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10302",text:"能源",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-324,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10303",text:"医疗健康",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-274,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10304",text:"教育",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-224,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10305",text:"通信",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-174,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10306",text:"交通",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-124,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10307",text:"金融",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"rgb(255, 127, 90)",fontColor:"black",color:"rgba(255, 170, 90, 0.1)",opacity:1,fixed:!1,x:-163.5,y:-74,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:"1",introduction:null,industrialAttribute:[]}},{id:"10308",text:"建筑",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:-24,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10309",text:"电子商务",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:26,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10310",text:"农业",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:76,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10311",text:"水利",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:126,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10312",text:"采矿",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:176,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10313",text:"娱乐",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"rgb(57, 184, 219)",fontColor:"black",color:"rgba(57, 184, 219, 0.1)",opacity:1,fixed:!1,x:-163.5,y:226,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"103",industrialTag:"0",introduction:null,industrialAttribute:[]}},{id:"10401",text:"研发设计",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:276,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"104",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10402",text:"生产制造",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:326,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"104",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10403",text:"经营管理",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:376,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"104",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10404",text:"新型工业软件",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:426,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"104",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10501",text:"嵌入式系统",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:476,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"105",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10502",text:"嵌入式应用",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:526,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"105",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10601",text:"商用密码",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:576,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"106",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10602",text:"网络安全",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:626,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"106",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"10603",text:"工控安全",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-163.5,y:676,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"106",industrialTag:null,introduction:null,industrialAttribute:[]}},{id:"1587979198267453440",text:"1212",isShow:!0,isHide:!1,expanded:!0,selected:!1,styleClass:"",borderColor:"#3D82F8",fontColor:"white",color:"#3D82F8",opacity:1,fixed:!1,x:-453.5,y:726,offset_x:0,offset_y:0,disableDrag:!1,singleNode:!1,data:{parentId:"0",industrialTag:"5",introduction:null,industrialAttribute:[]}}],lines:[{from:"0",to:"101",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-502.5,y:-680}},{from:"0",to:"102",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-502.5,y:-480}},{from:"0",to:"103",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-502.5,y:-55}},{from:"0",to:"104",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-502.5,y:370}},{from:"0",to:"105",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-502.5,y:520}},{from:"0",to:"106",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-502.5,y:645}},{from:"101",to:"10101",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-755}},{from:"101",to:"10102",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-705}},{from:"101",to:"10103",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-655}},{from:"101",to:"10104",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-605}},{from:"102",to:"10201",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-555}},{from:"102",to:"10202",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-505}},{from:"102",to:"10203",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-455}},{from:"102",to:"10204",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-405}},{from:"103",to:"10301",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-355}},{from:"103",to:"10302",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-305}},{from:"103",to:"10303",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-255}},{from:"103",to:"10304",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-205}},{from:"103",to:"10305",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-155}},{from:"103",to:"10306",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-105}},{from:"103",to:"10307",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-55}},{from:"103",to:"10308",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:-5}},{from:"103",to:"10309",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:45}},{from:"103",to:"10310",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:95}},{from:"103",to:"10311",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:145}},{from:"103",to:"10312",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:195}},{from:"103",to:"10313",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:245}},{from:"104",to:"10401",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:295}},{from:"104",to:"10402",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:345}},{from:"104",to:"10403",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:395}},{from:"104",to:"10404",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:445}},{from:"105",to:"10501",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-290.5,y:495}},{from:"105",to:"10502",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-290.5,y:545}},{from:"106",to:"10601",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:595}},{from:"106",to:"10602",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:645}},{from:"106",to:"10603",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-304.5,y:695}},{from:"0",to:"1587979198267453440",text:"",isHide:!1,showStartArrow:!1,showEndArrow:!0,useTextPath:!1,hidden:!1,data:{},textPositon:{x:-502.5,y:743.5}}]};this.$refs.seeksRelationGraph.setJsonData(e,t=>{})},onNodeClick(e,t){console.log("onNodeClick:",e)},onLineClick(e,t,s){console.log("onLineClick:",e)}}},a={};var d=o(i,l,r,!1,f,null,null,null);function f(e){for(let t in a)this[t]=a[t]}const u=function(){return d.exports}();export{u as default};
