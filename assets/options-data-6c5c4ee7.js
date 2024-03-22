import{m as l,n as _}from"./index-3f3d9b78.js";import{g as v}from"./LangUtils-019ecd1f.js";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h3",[s._v(" "+s._s(s.getTextByLang(s.english,["数据格式:","Data format:"]))+" ")]),a("div",{staticStyle:{"line-height":"20px",color:"#333333",padding:"10px","font-size":"12px"}},[s._v(" "+s._s(s.getTextByLang(s.english,["通过设置一个json对象的nodes、lines、rootId来定义图谱中要展示的节点、关系线、根节点","Define the nodes, lines, and root node to be displayed in the graph by setting a JSON object with the properties nodes, lines, and rootId."]))+" ")]),s._m(0)])},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"c-rgc-code",staticStyle:{"line-height":"20px"}},[a("div",{staticClass:"highlight highlight-text-html-vue"},[a("pre",[a("span",{staticClass:"pl-s1"},[s._v("       "),a("span",{staticClass:"pl-k"},[s._v("const")]),s._v(" __graph_json_data "),a("span",{staticClass:"pl-k"},[s._v("=")]),s._v(" {")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("         rootId"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("a"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(",")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("         nodes"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" [")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("           { id"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("a"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", text"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("A"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", borderColor"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("yellow"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(" },")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("           { id"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("b"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", text"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("B"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", color"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("#43a2f1"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", fontColor"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("yellow"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(" },")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("           { id"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("c"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", text"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("C"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", nodeShape"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-c1"},[s._v("1")]),s._v(", width"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-c1"},[s._v("80")]),s._v(", height"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-c1"},[s._v("60")]),s._v(" },")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("           { id"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("e"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", text"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("E"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", nodeShape"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-c1"},[s._v("0")]),s._v(", width"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-c1"},[s._v("150")]),s._v(", height"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-c1"},[s._v("150")]),s._v(" }")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("         ],")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("         lines"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" [")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("           { from"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("a"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", to"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("b"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", text"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("line 1"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", color"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("#43a2f1"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(" },")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("           { from"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("a"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", to"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("c"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", text"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("line 2"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(" },")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("           { from"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("a"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", to"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("e"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", text"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("line 3"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(" },")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("           { from"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("b"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", to"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("e"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(", color"),a("span",{staticClass:"pl-k"},[s._v(":")]),s._v(" "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[s._v("'")]),s._v("#67C23A"),a("span",{staticClass:"pl-pds"},[s._v("'")])]),s._v(" }")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("         ]")]),s._v(`
`),a("span",{staticClass:"pl-s1"},[s._v("       }")]),s._v(`
      `)])])])}];const c={name:"Data",components:{},data(){return{graphOptions:{allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultJunctionPoint:"border"},checkedRoute:null,codeString:""}},computed:{...l(["english"])},methods:{getTextByLang:v}},p={};var C=_(c,n,i,!1,e,"e0cf295e",null,null);function e(s){for(let t in p)this[t]=p[t]}const r=function(){return C.exports}();export{r as default};
