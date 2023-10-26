import{m as i,n as d}from"./index-120b3164.js";import{g as s}from"./LangUtils-019ecd1f.js";import{D as c}from"./DocCodeView-5a50b860.js";import"./xml-fold-69e9401d.js";const r=`import React, { useEffect, useRef } from 'react';
import RelationGraph from 'relation-graph/react';
import type { MutableRefObject} from 'react';
import type { RelationGraphExpose, RGJsonData, RGNodeSlotProps, RGOptions, RGLink } from 'relation-graph/react';
const NodeSlot: React.FC<RGNodeSlotProps> = ({node}) => {
  if (node.id === 'current') {
    return <div style={{lineHeight:'24px', width: '100%', height: '100%', color: '#000000', borderRadius:'50%', boxSizing: 'border-box', background: 'linear-gradient(to right, #00FFFF, #FF00FF)'}}>{node.text}</div>
  }
  return <div style={{lineHeight:'38px', width: '100%', height: '100%', border: '#999999 solid 1px', color: '#000000', borderRadius:'50%', boxSizing: 'border-box'}}>{node.text}</div>
}
const RGClock: React.FC = () => {
  const graphRef$ = useRef() as MutableRefObject<RelationGraphExpose>;
  useEffect(() => {
    const graphJsonData:RGJsonData = {
      rootId: 'root',
      nodes: [
        { id: 'root', text: '' },
        { id: 'current', text: '' }
      ],
      lines: [],
    };
    for (let i=1;i<61;i++) {
      graphJsonData.nodes.push({ id: i.toString(), text: i.toString() })
      graphJsonData.lines.push({ from: 'root', to: i.toString() })
    }
    graphRef$.current.setJsonData(graphJsonData,  true,() => {
      play(1)
    })
  }, [])
  const play = (targetNodeNumber:number) => {
    if (targetNodeNumber > 60) targetNodeNumber = 1;
    const targetNode = graphRef$.current.getNodeById(targetNodeNumber.toString());
    const focusNode = graphRef$.current.getNodeById('current');
    focusNode.x = targetNode.x;
    focusNode.y = targetNode.y;
    const gInstance = graphRef$.current.getInstance();
    gInstance.options.checkedNodeId = 'current'
    gInstance.options.checkedLineId = gInstance.getLinks().find((l:RGLink) => l.toNode.id === targetNode.id).seeks_id
    console.log(gInstance.options.checkedLineId);
    graphRef$.current.updateView()
    setTimeout(()=>{play(targetNodeNumber + 1)}, 1000)
  }
  const options:RGOptions = {
    showDebugPanel: true,
    lineUseTextPath: true,
    defaultLineShape: 1,
    placeSingleNode: false,
    moveToCenterWhenRefresh: true,
    zoomToFitWhenRefresh: true,
    layouts: [
      {
        layoutName: 'center'
      }
    ],
    defaultNodeWidth: 40,
    defaultNodeHeight: 40,
    defaultNodeBorderWidth: 0,
    defaultNodeColor: 'transparent',
    defaultLineColor: 'rgba(227,226,226,0.3)'
  }
  return <div>
    <div>ok</div>
    <div style={{ height: 600, width: 900, border: '#efefef solid 1px' }}>
      <RelationGraph ref={graphRef$} options={options} nodeSlot={NodeSlot} />
    </div>
  </div>
};
export default RGClock;`,a=`import React, { useEffect, useRef } from 'react';
import RelationGraph from 'relation-graph/react';
import type { MutableRefObject} from 'react';
import type { RelationGraphExpose, RGJsonData, RGNodeSlotProps, RGOptions, RGLink } from 'relation-graph/react';
const NodeSlot: React.FC<RGNodeSlotProps> = ({node}) => {
  if (node.id === 'current') {
    return <div style={{lineHeight:'24px', width: '100%', height: '100%', color: '#000000', borderRadius:'50%', boxSizing: 'border-box', background: 'linear-gradient(to right, #00FFFF, #FF00FF)'}}>{node.text}</div>
  }
  return <div style={{lineHeight:'38px', width: '100%', height: '100%', border: '#999999 solid 1px', color: '#000000', borderRadius:'50%', boxSizing: 'border-box'}}>{node.text}</div>
}
const RGClock: React.FC = () => {
  const graphRef$ = useRef() as MutableRefObject<RelationGraphExpose>;
  useEffect(() => {
    const graphJsonData:RGJsonData = {
      rootId: 'root',
      nodes: [
        { id: 'root', text: '' },
        { id: 'current', text: '' }
      ],
      lines: [],
    };
    for (let i=1;i<61;i++) {
      graphJsonData.nodes.push({ id: i.toString(), text: i.toString() })
      graphJsonData.lines.push({ from: 'root', to: i.toString() })
    }
    graphRef$.current.setJsonData(graphJsonData,  true,() => {
      play(1)
    })
  }, [])
  const play = (targetNodeNumber:number) => {
    if (targetNodeNumber > 60) targetNodeNumber = 1;
    const targetNode = graphRef$.current.getNodeById(targetNodeNumber.toString());
    const focusNode = graphRef$.current.getNodeById('current');
    focusNode.x = targetNode.x;
    focusNode.y = targetNode.y;
    const gInstance = graphRef$.current.getInstance();
    gInstance.options.checkedNodeId = 'current'
    gInstance.options.checkedLineId = gInstance.getLinks().find((l:RGLink) => l.toNode.id === targetNode.id).seeks_id
    console.log(gInstance.options.checkedLineId);
    graphRef$.current.updateView()
    setTimeout(()=>{play(targetNodeNumber + 1)}, 1000)
  }
  const options:RGOptions = {
    showDebugPanel: true,
    lineUseTextPath: true,
    defaultLineShape: 1,
    placeSingleNode: false,
    moveToCenterWhenRefresh: true,
    zoomToFitWhenRefresh: true,
    layouts: [
      {
        layoutName: 'center'
      }
    ],
    defaultNodeWidth: 40,
    defaultNodeHeight: 40,
    defaultNodeBorderWidth: 0,
    defaultNodeColor: 'transparent',
    defaultLineColor: 'rgba(227,226,226,0.3)'
  }
  return <div>
    <div>ok</div>
    <div style={{ height: 600, width: 900, border: '#efefef solid 1px' }}>
      <RelationGraph ref={graphRef$} options={options} nodeSlot={NodeSlot} />
    </div>
  </div>
};
export default RGClock;`;var l=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticStyle:{"font-size":"12px"}},[t("h3",[e._v("React：")]),t("div",{staticClass:"c-rgc-code"},[t("div",[e._v("npm install --save relation-graph")]),t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["// 注意：使用时import的方式与vue2不一样：import RelationGraph from 'relation-graph/react'","// Note: The import method is different from Vue2 when using it: import RelationGraph from 'relation-graph/react'"]))+" ")])]),t("div",{staticStyle:{height:"1000px",border:"#efefef solid 1px"}},[t("DocCodeView",{attrs:{code:e.demoCode}})],1),t("div",{staticStyle:{"padding-top":"30px","padding-bottom":"30px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["更多示例：","more examples"]))+" "),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"#/demo",target:"_blank"}},[e._v(" "+e._s(e.getTextByLang(e.english,["在线demo","examples online"]))+" ")])],1),t("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[e._v(" "+e._s(e.getTextByLang(e.english,["完整的、可运行的示例react项目(Typescript)：","A complete, runnable React project example(Typescript):.. "]))+" "),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph-react-demo",target:"_blank"}},[e._v(" https://github.com/seeksdream/relation-graph-react-demo ")])],1),t("div",{staticClass:"c-rgc-code"},[t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["// 通过以下几行命令，快速下载并启动示例：","// With the following lines of commands, you can quickly download and start the example: "]))+" ")]),t("div",[e._v("git clone https://github.com/seeksdream/relation-graph-react-demo")]),t("div",[e._v("cd relation-graph-react-demo")]),t("div",[e._v("npm install")]),t("div",[e._v("npm run dev")]),t("div",{staticClass:"c-rgc-comment"},[e._v(" "+e._s(e.getTextByLang(e.english,["访问终端中显示的地址在你的浏览器中查看示例","Visit the address displayed in the terminal and view the example in your browser."]))+" ")])]),t("div",{staticStyle:{"padding-top":"10px","padding-bottom":"10px"}},[e._v("Github："),t("el-link",{staticStyle:{color:"#337ab7","font-size":"12px"},attrs:{href:"https://github.com/seeksdream/relation-graph",target:"_blank"}},[e._v("https://github.com/seeksdream/relation-graph")])],1)])},p=[];const g={name:"NodeAttributes",components:{DocCodeView:c},data(){return{checkedRoute:null,demoCode:"",codeString:""}},computed:{...i(["english"])},watch:{english(){this.demoCode=this.english?a:r}},mounted(){this.demoCode=this.english?a:r},methods:{getTextByLang:s}},n={};var h=d(g,l,p,!1,u,null,null,null);function u(e){for(let o in n)this[o]=n[o]}const v=function(){return h.exports}();export{v as default};
