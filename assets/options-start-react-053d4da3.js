import{m as r,n as s}from"./index-a76d1c04.js";import{g as d}from"./LangUtils-019ecd1f.js";import{D as c}from"./DocCodeView-0309633f.js";import"./xml-fold-6a3dfd93.js";const n=`import React, { useEffect, useRef } from 'react';
import RelationGraph, {RelationGraphInstance} from 'relation-graph/react';
import type { MutableRefObject} from 'react';
import type {
  RGLine,
  RGLink,
  RGNode,
  RGNodeSlotProps,
  RGOptions,
  RelationGraphExpose
} from 'relation-graph/react';

const staticJsonData = {
  rootId: '2',
  nodes: [
    { id: '1', text: '节点-1', myicon: 'el-icon-star-on' },
    { id: '2', text: '节点-2', myicon: 'el-icon-setting', width: 100, height: 100 },
    { id: '3', text: '节点-3', myicon: 'el-icon-setting' },
    { id: '4', text: '节点-4', myicon: 'el-icon-star-on' },
    { id: '6', text: '节点-6', myicon: 'el-icon-setting' },
    { id: '7', text: '节点-7', myicon: 'el-icon-setting' },
    { id: '8', text: '节点-8', myicon: 'el-icon-star-on' },
    { id: '9', text: '节点-9', myicon: 'el-icon-headset' },
    { id: '71', text: '节点-71', myicon: 'el-icon-headset' },
    { id: '72', text: '节点-72', myicon: 'el-icon-s-tools' },
    { id: '73', text: '节点-73', myicon: 'el-icon-star-on' },
    { id: '81', text: '节点-81', myicon: 'el-icon-s-promotion' },
    { id: '82', text: '节点-82', myicon: 'el-icon-s-promotion' },
    { id: '83', text: '节点-83', myicon: 'el-icon-star-on' },
    { id: '84', text: '节点-84', myicon: 'el-icon-s-promotion' },
    { id: '85', text: '节点-85', myicon: 'el-icon-sunny' },
    { id: '91', text: '节点-91', myicon: 'el-icon-sunny' },
    { id: '92', text: '节点-82', myicon: 'el-icon-sunny' },
    { id: '5', text: '节点-5', myicon: 'el-icon-sunny' }
  ],
  lines: [
    { from: '7', to: '71', text: '投资' },
    { from: '7', to: '72', text: '投资' },
    { from: '7', to: '73', text: '投资' },
    { from: '8', to: '81', text: '投资' },
    { from: '8', to: '82', text: '投资' },
    { from: '8', to: '83', text: '投资' },
    { from: '8', to: '84', text: '投资' },
    { from: '8', to: '85', text: '投资' },
    { from: '9', to: '91', text: '投资' },
    { from: '9', to: '92', text: '投资' },
    { from: '1', to: '2', text: '投资' },
    { from: '3', to: '1', text: '高管' },
    { from: '4', to: '2', text: '高管' },
    { from: '6', to: '2', text: '高管' },
    { from: '7', to: '2', text: '高管' },
    { from: '8', to: '2', text: '高管' },
    { from: '9', to: '2', text: '高管' },
    { from: '1', to: '5', text: '投资' }
  ]
};

const NodeSlot: React.FC<RGNodeSlotProps> = ({node}) => {
  console.log('NodeSlot:');
  if (node.id === '2') { // if rootNode
    return <div style={{zIndex: 555, opacity: 0.5, lineHeight:'100px', width: '100px', height: '100px', color: '#000000', borderRadius:'50%', boxSizing: 'border-box', fontSize: '18px', textAlign: 'center', overflow: 'hidden'}}>
      <div style={{width: '100%', height: (node.data!.percent * 100) + '%', marginTop: ((1-node.data!.percent) * 100) + '%', background: 'linear-gradient(to bottom, #00FFFF, #FF00FF)'}}>
        {node.text}
      </div>
    </div>;
  }
  return <div style={{lineHeight: '80px', textAlign: 'center'}}>
    <span>{node.text}</span>
  </div>
};
const SimpleGraph: React.FC = () => {
  const graphRef = useRef() as MutableRefObject<RelationGraphExpose>;
  useEffect(() => {
    showGraph();
  }, []);
  const showGraph = async () => {
    // The node and link in the above data can refer to the options in "Node" and "Link & Line" for configuration.
    // Node: https://seeksdream.github.io/#/docs/node
    // Link & Line: https://seeksdream.github.io/#/docs/link
    await graphRef.current.setJsonData(staticJsonData, (graphInstance) => {
        // Do something when graph ready
    });
    // The graphRef.current.setJsonData(jsonData, callback) method is a convenient method that is equivalent to the following code:
    //  const graphInstance = graphRef.current.getInstance();
    //  graphInstance.addNodes(jsonData.nodes);
    //  graphInstance.addLines(jsonData.lines);
    //  graphInstance.rootNode = graphInstance.getNodeById(jsonData.rootId);
    //  await graphInstance.doLayout(); // Layout using the layouter set in graphOptions
    //  await graphInstance.moveToCenter(); // Find the center based on node distribution and center the view
    //  await graphInstance.zoomToFit(); // Zoom to fit, so that all nodes can be displayed in the visible area
  }
  const options:RGOptions = {
    debug: true,
    defaultLineShape: 1,
    layout: {
      layoutName: 'center',
      maxLayoutTimes: 3000
    },
    defaultExpandHolderPosition: 'right'
  };
  const onNodeClick = (node: RGNode, _e: MouseEvent | TouchEvent) => {
    console.log('onNodeClick:', node.text);
    return true;
  };
  const onLineClick = (line: RGLine, _link: RGLink, _e: MouseEvent | TouchEvent) => {
    console.log('onLineClick:', line.text, line.from, line.to);
    return true;
  };
  return <div>
    <div>ok</div>
    <div style={{ height: 600, width: 900, border: '#efefef solid 1px' }}>
      <RelationGraph
        ref={graphRef}
        options={options}
        nodeSlot={NodeSlot}
        onNodeClick={onNodeClick}
        onLineClick={onLineClick}
      />
    </div>
  </div>;
};
export default SimpleGraph;`,i=`import React, { useEffect, useRef } from 'react';
import RelationGraph, {RelationGraphInstance} from 'relation-graph/react';
import type { MutableRefObject} from 'react';
import type {
  RGLine,
  RGLink,
  RGNode,
  RGNodeSlotProps,
  RGOptions,
  RelationGraphExpose
} from 'relation-graph/react';

const staticJsonData = {
  rootId: '2',
  nodes: [
    { id: '1', text: 'Node-1', myicon: 'el-icon-star-on' },
    { id: '2', text: 'Node-2', myicon: 'el-icon-setting', width: 100, height: 100 },
    { id: '3', text: 'Node-3', myicon: 'el-icon-setting' },
    { id: '4', text: 'Node-4', myicon: 'el-icon-star-on' },
    { id: '6', text: 'Node-6', myicon: 'el-icon-setting' },
    { id: '7', text: 'Node-7', myicon: 'el-icon-setting' },
    { id: '8', text: 'Node-8', myicon: 'el-icon-star-on' },
    { id: '9', text: 'Node-9', myicon: 'el-icon-headset' },
    { id: '71', text: 'Node-71', myicon: 'el-icon-headset' },
    { id: '72', text: 'Node-72', myicon: 'el-icon-s-tools' },
    { id: '73', text: 'Node-73', myicon: 'el-icon-star-on' },
    { id: '81', text: 'Node-81', myicon: 'el-icon-s-promotion' },
    { id: '82', text: 'Node-82', myicon: 'el-icon-s-promotion' },
    { id: '83', text: 'Node-83', myicon: 'el-icon-star-on' },
    { id: '84', text: 'Node-84', myicon: 'el-icon-s-promotion' },
    { id: '85', text: 'Node-85', myicon: 'el-icon-sunny' },
    { id: '91', text: 'Node-91', myicon: 'el-icon-sunny' },
    { id: '92', text: 'Node-82', myicon: 'el-icon-sunny' },
    { id: '5', text: 'Node-5', myicon: 'el-icon-sunny' }
  ],
  lines: [
    { from: '7', to: '71', text: 'Line text' },
    { from: '7', to: '72', text: 'Line text' },
    { from: '7', to: '73', text: 'Line text' },
    { from: '8', to: '81', text: 'Line text' },
    { from: '8', to: '82', text: 'Line text' },
    { from: '8', to: '83', text: 'Line text' },
    { from: '8', to: '84', text: 'Line text' },
    { from: '8', to: '85', text: 'Line text' },
    { from: '9', to: '91', text: 'Line text' },
    { from: '9', to: '92', text: 'Line text' },
    { from: '1', to: '2', text: 'Line text' },
    { from: '3', to: '1', text: 'Line text' },
    { from: '4', to: '2', text: 'Line text' },
    { from: '6', to: '2', text: 'Line text' },
    { from: '7', to: '2', text: 'Line text' },
    { from: '8', to: '2', text: 'Line text' },
    { from: '9', to: '2', text: 'Line text' },
    { from: '1', to: '5', text: 'Line text' }
  ]
};

const NodeSlot: React.FC<RGNodeSlotProps> = ({node}) => {
  console.log('NodeSlot:');
  if (node.id === '2') { // if rootNode
    return <div style={{zIndex: 555, opacity: 0.5, lineHeight:'100px', width: '100px', height: '100px', color: '#000000', borderRadius:'50%', boxSizing: 'border-box', fontSize: '18px', textAlign: 'center', overflow: 'hidden'}}>
      <div style={{width: '100%', height: (node.data!.percent * 100) + '%', marginTop: ((1-node.data!.percent) * 100) + '%', background: 'linear-gradient(to bottom, #00FFFF, #FF00FF)'}}>
        {node.text}
      </div>
    </div>;
  }
  return <div style={{lineHeight: '80px', textAlign: 'center'}}>
    <span>{node.text}</span>
  </div>
};
const SimpleGraph: React.FC = () => {
  const graphRef = useRef() as MutableRefObject<RelationGraphExpose>;
  useEffect(() => {
    showGraph();
  }, []);
  const showGraph = async () => {
    // The node and link in the above data can refer to the options in "Node" and "Link & Line" for configuration.
    // Node: https://seeksdream.github.io/#/docs/node
    // Link & Line: https://seeksdream.github.io/#/docs/link
    await graphRef.current.setJsonData(staticJsonData, (graphInstance) => {
        // Do something when graph ready
    });
    // The graphRef.current.setJsonData(jsonData, callback) method is a convenient method that is equivalent to the following code:
    //  const graphInstance = graphRef.current.getInstance();
    //  graphInstance.addNodes(jsonData.nodes);
    //  graphInstance.addLines(jsonData.lines);
    //  graphInstance.rootNode = graphInstance.getNodeById(jsonData.rootId);
    //  await graphInstance.doLayout(); // Layout using the layouter set in graphOptions
    //  await graphInstance.moveToCenter(); // Find the center based on node distribution and center the view
    //  await graphInstance.zoomToFit(); // Zoom to fit, so that all nodes can be displayed in the visible area
  }
  const options:RGOptions = {
    debug: true,
    defaultLineShape: 1,
    layout: {
      layoutName: 'center',
      maxLayoutTimes: 3000
    },
    defaultExpandHolderPosition: 'right'
  };
  const onNodeClick = (node: RGNode, _e: MouseEvent | TouchEvent) => {
    console.log('onNodeClick:', node.text);
    return true;
  };
  const onLineClick = (line: RGLine, _link: RGLink, _e: MouseEvent | TouchEvent) => {
    console.log('onLineClick:', line.text, line.from, line.to);
    return true;
  };
  return <div>
    <div>ok</div>
    <div style={{ height: 600, width: 900, border: '#efefef solid 1px' }}>
      <RelationGraph
        ref={graphRef}
        options={options}
        nodeSlot={NodeSlot}
        onNodeClick={onNodeClick}
        onLineClick={onLineClick}
      />
    </div>
  </div>;
};
export default SimpleGraph;`;var l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{"font-size":"12px"}},[e("h3",[t._v("React：")]),e("div",{staticClass:"c-rgc-code"},[e("div",[t._v("npm install --save relation-graph")]),e("div",{staticClass:"c-rgc-comment"},[t._v(" "+t._s(t.getTextByLang(t.english,["// 注意：使用时import的方式与vue2不一样：import RelationGraph from 'relation-graph/react'","// Note: The import method is different from Vue2 when using it: import RelationGraph from 'relation-graph/react'"]))+" ")])]),e("div",{staticStyle:{border:"#efefef solid 1px"}},[e("DocCodeView",{attrs:{mode:"text/jsx",height:"700px",code:t.demoCode}})],1),e("div",{staticStyle:{"padding-top":"30px","padding-bottom":"30px"}},[t._v(" "+t._s(t.getTextByLang(t.english,["更多示例：","More examples"]))+" "),e("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/demo",target:"_blank"}},[t._v(" "+t._s(t.getTextByLang(t.english,["在线demo","Examples online"]))+" ")])],1),e("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[t._v(" "+t._s(t.getTextByLang(t.english,["完整的、可运行的示例react项目(Typescript)：","A complete, runnable React project example(Typescript):.. "]))+" "),e("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph-react-demo",target:"_blank"}},[t._v(" https://github.com/seeksdream/relation-graph-react-demo ")])],1),e("div",{staticClass:"c-rgc-code"},[e("div",{staticClass:"c-rgc-comment"},[t._v(" "+t._s(t.getTextByLang(t.english,["// 通过以下几行命令，快速下载并启动示例：","// With the following lines of commands, you can quickly download and start the example: "]))+" ")]),e("div",[t._v("git clone https://github.com/seeksdream/relation-graph-react-demo")]),e("div",[t._v("cd relation-graph-react-demo")]),e("div",[t._v("npm install")]),e("div",[t._v("npm run dev")]),e("div",{staticClass:"c-rgc-comment"},[t._v(" "+t._s(t.getTextByLang(t.english,["访问终端中显示的地址在你的浏览器中查看示例","Visit the address displayed in the terminal and view the example in your browser."]))+" ")])]),e("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[t._v("Github："),e("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph",target:"_blank"}},[t._v("https://github.com/seeksdream/relation-graph")])],1)])},p=[];const m={name:"NodeAttributes",components:{DocCodeView:c},data(){return{checkedRoute:null,demoCode:"",codeString:""}},computed:{...r(["english"])},watch:{english(){this.demoCode=this.english?i:n}},mounted(){this.demoCode=this.english?i:n},methods:{getTextByLang:d}},a={};var h=s(m,l,p,!1,x,null,null,null);function x(t){for(let o in a)this[o]=a[o]}const v=function(){return h.exports}();export{v as default};
