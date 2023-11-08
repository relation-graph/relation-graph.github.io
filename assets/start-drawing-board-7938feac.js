import{m as a,n}from"./index-023a64e5.js";import{g as s}from"./LangUtils-019ecd1f.js";import{D as l}from"./DocCodeView-dc3d8c26.js";import r from"./SimpleElementLines-ad40b0b5.js";import"./xml-fold-00713cc9.js";const c=`<template>
  <div>
    <div style="height:calc(100vh - 60px);">
      <RelationGraph
        ref="graphRef"
        :options="graphOptions">
        <div style="width: 300px;position: absolute;left: 0px;top: 0px;">
          <div>Interest Groups</div>
          <div>
            <template v-for="group of interestGroups">
              <div :key="group.groupId" :id="'group-' + group.groupId" class="c-i-group" :class="{'c-i-group-checked': checkedGroupId === group.groupId}" @click="onGroupClick(group.groupId)">
                <div class="c-i-name">{{group.groupName}}</div>
              </div>
            </template>
          </div>
        </div>
        <template #canvas-plug><!-- behind others-->
          <div style="z-index:10;position: absolute;left: -700px;top: 100px;">
            <div style="position: absolute;left: 0px;top: 0px;height: 800px;width:800px;background-image: url('/images/school-map.png');background-repeat: no-repeat;opacity: 0.5;">
              <!-- display image -->
            </div>
            <div style="position: relative;">
              <div id="location-a" class="c-i-location" :class="{'c-i-location-active': checkedGroupId==='a'}" style="left:260px;top:300px;" @click="onGroupClick('a');"><span><i class="el-icon-location" /></span></div>
              <div id="location-b" class="c-i-location" :class="{'c-i-location-active': checkedGroupId==='b'}" style="left:350px;top:100px;" @click="onGroupClick('b');"><span><i class="el-icon-location" /></span></div>
              <div id="location-c" class="c-i-location" :class="{'c-i-location-active': checkedGroupId==='c'}" style="left:180px;top:40px;"  @click="onGroupClick('c');"><span><i class="el-icon-location" /></span></div>
              <div id="location-d" class="c-i-location" :class="{'c-i-location-active': checkedGroupId==='d'}" style="left:430px;top:200px;" @click="onGroupClick('d');"><span><i class="el-icon-location" /></span></div>
              <div id="location-e" class="c-i-location" :class="{'c-i-location-active': checkedGroupId==='e'}" style="left:530px;top:130px;" @click="onGroupClick('e');"><span><i class="el-icon-location" /></span></div>
              <div id="location-f" class="c-i-location" :class="{'c-i-location-active': checkedGroupId==='f'}" style="left:600px;top:240px;" @click="onGroupClick('f');"><span><i class="el-icon-location" /></span></div>
            </div>
          </div>
        </template>
      </RelationGraph>
    </div>
  </div>
</template>

<script>
// 如果您没有在main.js文件中使用Vue.use(RelationGraph); 就需要使用下面这一行代码来引入relation-graph
// import RelationGraph from 'relation-graph';
export default {
  name: 'SimpleElementLines',
  components: { },
  data() {
    return {
      checkedGroupId: '',
      checkedMemberId: '',
      interestGroups: [],
      classMembers: [],
      graphOptions: {
        debug: true,
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        allowShowDownloadButton: true,
        defaultJunctionPoint: 'border',
        placeOtherNodes: false,
        placeSingleNode: false,
        graphOffset_x: 200,
        graphOffset_y: -300,
        layout: {
          layoutName: 'fixed'
        }
        // 这里可以参考"Graph 图谱"中的参数进行设置
      }
    };
  },
  mounted() {
    this.showGraph();
  },
  methods: {
    showGraph() {
      this.interestGroups =  [
        { groupId: 'a', groupName: 'Sports Group'             },
        { groupId: 'b', groupName: 'Music Group'              },
        { groupId: 'c', groupName: 'Arts and Crafts Group'    },
        { groupId: 'd', groupName: 'Literature Reading Group' },
        { groupId: 'e', groupName: 'Volunteer Group'          },
        { groupId: 'f', groupName: 'Science Research Group'   },
      ];
      const graphInstance = this.$refs.graphRef.getInstance();
      // 为了导出图片，定义两个看不见的节点，节点的位置决定了能导出的范围
      // In order to export the picture, define two invisible nodes. The position of the node determines the range that can be exported.
      graphInstance.addNodes([
        {id:'startNode', text:'', opacity: 0, x: -300, y: -300 },
        {id:'endNode', text:'', opacity: 0, x: 700, y: 700 }
      ]);
      setTimeout(() => { // Wait dom ready
        this.onGroupClick('a');
      }, 200)
    },
    onGroupClick(groupId) {
      console.log('onGroupClick');
      this.checkedMemberId = '';
      this.checkedGroupId = groupId;
      const htmlElementLines = [];
      htmlElementLines.push({
        from: 'group-' + groupId,
        to: 'location-' + groupId,
        color: 'rgba(159,23,227,0.65)',
        lineWidth: 3,
        lineShape: 5,
        animation: 2
      });
      // add simple lines:
      htmlElementLines.push({
        from: 'location-b',
        to: 'location-e',
        color: 'rgba(159,23,227,0.65)',
        lineWidth: 3,
        lineShape: 5,
        animation: 3
      });
      htmlElementLines.push({
        from: 'location-e',
        to: 'location-f',
        color: 'rgba(159,23,227,0.65)',
        lineWidth: 3,
        lineShape: 5,
        animation: 1
      });
      const graphInstance = this.$refs.graphRef.getInstance();
      graphInstance.clearElementLines();
      graphInstance.addElementLines(htmlElementLines);
    }
  }
};
<\/script>
<style lang="scss" scoped>
.c-i-group{
  background-color: rgba(159,23,227,0.65);
  color: #ffffff;
  border-radius: 5px;
  padding: 5px;
  padding-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  .c-i-name{
    width: 100%;
  }
  .c-i-count{
    background-color: #ffffff;
    color: rgba(159,23,227,0.65);
  }
}
.c-i-group-checked{
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, -webkit-box-shadow 200ms ease;
  box-shadow: 0 0 0 8px rgba(159,23,227, 0.3);
}
.c-i-location {
  position: absolute;font-size: 40px;color: rgba(159,23,227,0.65);width:10px;height:10px;cursor: pointer;
  overflow: visible;
  background-color: rgba(159,23,227,0.65);
  border-radius: 50%;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, -webkit-box-shadow 200ms ease;
  box-shadow: 0 0 0 13px rgba(255, 255, 255, 0.5);
  animation: jumpingLocation 2s infinite;
  opacity: 0.5;
  span {
    position: absolute;
    margin-top: -40px;
    margin-left: -15px;
  }
  :hover {
    color: rgba(159,23,227,1);
  }
}
.c-i-location-active{
  opacity: 1;
}
@keyframes jumpingLocation {
  0%, 100% {
    color: rgba(159,23,227,1); /* 初始和结束状态，元素不偏移 */
  }
  50% {
    color: rgb(245, 87, 29); /* 中间状态，元素向上偏移20像素 */
  }
}
</style>
`;var p=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticStyle:{"font-size":"12px"}},[t("div",{staticStyle:{"line-height":"30px"}},[t("i",{staticClass:"el-icon-info"}),e._v(" "+e._s(e.getTextByLang(e.english,["relation-graph是支持Vue2、Vue3、React、PC & 移动端 的关系图谱展示组件，支持通过【插槽】 + 【HTML/CSS】完全自定义图形元素。",`"Relation-graph is a relationship graph display component that supports Vue2, Vue3, React, and both PC & mobile platforms. It allows complete customization of graphic elements through 'slots' and 'HTML/CSS'."`]))+" ")]),t("div",{staticStyle:{"line-height":"30px"}},[t("i",{staticClass:"el-icon-info"}),e._v(" "+e._s(e.getTextByLang(e.english,['除了典型的关系数据展示功能，relation-graph还支持作为一个画板来使用，你可以在画板上放置任何内容，只需要为想要连接的元素设置id，同时定义"元素连线（Element Lines）"即可，连线支持关系图连线的所有特性：','In addition to its typical function of displaying relational data, relation-graph also supports being used as a canvas. You can place any content on the canvas by simply setting an id for the elements you want to connect and defining "Element Lines". These lines support all the features of relational graph lines:']))+" "),t("span",[t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/docs/link",target:"_blank"}},[e._v(" "+e._s(e.getTextByLang(e.english,["连线配置详情","Line Options"]))+" ")])],1)]),t("div",{staticStyle:{"line-height":"30px"}},[t("i",{staticClass:"el-icon-info"}),e._v(" "+e._s(e.getTextByLang(e.english,["在连接元素的同时，relation-graph的缩放、拖动、导出图片、以及graphInstance上的所有功能依然可以使用，布局功能也可以使用，你还可以将元素与正常节点进行连接,示例：","While connecting your elements, you can still utilize the zooming, dragging, exporting images, and all other functionalities available on the graphInstance of relation-graph. The layout functionality is also available. Additionally, you can connect your elements with regular nodes. Here is an example:"]))+" "),t("span",[t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/demo/node-and-element-lines",target:"_blank"}},[e._v(" "+e._s(e.getTextByLang(e.english,["连接HTML元素与正常节点","Connecting HTML elements with regular nodes."]))+" ")])],1)]),t("div",[t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/demo/list?g=2",target:"_blank"}},[t("i",{staticClass:"el-icon-info"}),e._v(" "+e._s(e.getTextByLang(e.english,["更多关于元素连线的示例","More examples of element lines."]))+" ")])],1),t("h3",[e._v(e._s(e.english?"Detailed Usage:":"详细用法："))]),t("div",{staticStyle:{"line-height":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["1, 引入relation-graph","1, Introducing relation-graph"]))+" ")]),t("div",{staticClass:"c-rgc-code"},[t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["// 注意：relation-graph支持Vue2、Vue3、React, 但引入的包名称都是【relation-graph】",'// Note: relation-graph supports Vue2, Vue3, React, but the package name for import is always "relation-graph". ']))+" ")]),t("div",[e._v("npm install --save relation-graph")])]),t("div",{staticStyle:{"line-height":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["2, 示例代码：","2, Sample code: "]))+" ")]),t("div",{staticStyle:{"line-height":"20px",color:"#333333",padding:"10px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["以下代码创建了几个div，且分别为div设置了id。同时，通过addElementLines方法添加线条将这些div连接在一起：","The following code creates several div elements and assigns them unique ids. Additionally, the addElementLines method is used to add lines that connect these div elements together:"]))+" ")]),t("h3",[e._v("Vue2：")]),t("DocCodeView",{attrs:{height:"500px",code:e.demoCode}}),t("div",{staticStyle:{"line-height":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["示例效果：","Sample effects:"]))+" ")]),t("div",{staticStyle:{height:"calc(100vh - 58px)",border:"#efefef solid 1px"}},[t("SimpleElementLines")],1),t("div",{staticStyle:{"padding-top":"30px","padding-bottom":"30px"}},[t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/demo/list?g=2",target:"_blank"}},[t("i",{staticClass:"el-icon-info"}),e._v(" "+e._s(e.getTextByLang(e.english,["更多关于元素连线的示例","More examples of element lines."]))+" ")])],1)],1)},d=[];const g={name:"NodeAttributes",components:{SimpleElementLines:r,DocCodeView:l},data(){return{demoCode:"",checkedRoute:null,codeString:""}},computed:{...a(["english"])},mounted(){this.demoCode=c},methods:{getTextByLang:s}},i={};var h=n(g,p,d,!1,u,"7f21d49c",null,null);function u(e){for(let o in i)this[o]=i[o]}const _=function(){return h.exports}();export{_ as default};
