
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4968 = [
    'HRqlQ',
    'g_loading',
    'wRVBe',
    'calc(100vh\x20-\x2060px)',
    'yrLWr',
    'NgpSa',
    'RelationGraph',
    'PtqiP',
    'graphRef',
    'nZsxl',
    'graph-plug',
    '$createElement',
    '_self',
    'graphOptions',
    'name',
    'RelationGraphDemo',
    'components',
    'data',
    'folder',
    'left',
    'right',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'created',
    'mounted',
    'methods',
    'setGraphData',
    'bottom',
    'b1-1',
    'b1-2',
    'b1-3',
    'b1-4',
    'b1-5',
    'b1-6',
    'b2-1',
    'b2-2',
    'graphJsonData:',
    '14327553',
    'exports',
    'JtxIZ',
    'jqJEj',
    'div',
    'qVEva',
    'c-my-panel',
    'FUflg',
    'QeYEP',
    'c-option-name',
    'JMEqk',
    '25px',
    'xJBAN',
    '0px',
    'UlHlG',
    '300px',
    'grAit',
    '\x20这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。\x20',
    'zyNAs',
    'XLJJx',
    '\x20直接使用tree数据结构有明显的确缺陷：只能设置全局的线条默认样式，无法对具体的link设置属性，不能精细的定义线条的样式。\x20',
    'pDcvG',
    'yBjNo',
    'loading',
    'jpPwA',
    'v-loading'
];
(function (_0x4d3bf9, _0x8f9d2) {
    var _0x2f1895 = function (_0x3d5c49) {
        while (--_0x3d5c49) {
            _0x4d3bf9['push'](_0x4d3bf9['shift']());
        }
    };
    _0x2f1895(++_0x8f9d2);
}(_0x4968, 0x162));
var _0x20c6 = function (_0x27635e, _0x8b6a16) {
    _0x27635e = _0x27635e - 0x0;
    var _0x1227c8 = _0x4968[_0x27635e];
    return _0x1227c8;
};
import { n as _0x44be66 } from './index-910d4d84.js';
var d = function () {
        var _0x142832 = {};
        _0x142832[_0x20c6('0x0')] = function (_0x53452d, _0x5910fa, _0x469720, _0x557cf0) {
            return _0x53452d(_0x5910fa, _0x469720, _0x557cf0);
        };
        _0x142832[_0x20c6('0x1')] = _0x20c6('0x2');
        _0x142832[_0x20c6('0x3')] = _0x20c6('0x4');
        _0x142832[_0x20c6('0x5')] = function (_0x55bd7a, _0x302e13, _0x330c8c, _0x288dfe) {
            return _0x55bd7a(_0x302e13, _0x330c8c, _0x288dfe);
        };
        _0x142832[_0x20c6('0x6')] = _0x20c6('0x7');
        _0x142832[_0x20c6('0x8')] = _0x20c6('0x9');
        _0x142832[_0x20c6('0xa')] = _0x20c6('0xb');
        _0x142832[_0x20c6('0xc')] = _0x20c6('0xd');
        _0x142832[_0x20c6('0xe')] = _0x20c6('0xf');
        _0x142832[_0x20c6('0x10')] = function (_0x555d76, _0x5abfc3) {
            return _0x555d76(_0x5abfc3);
        };
        _0x142832[_0x20c6('0x11')] = _0x20c6('0x12');
        _0x142832[_0x20c6('0x13')] = function (_0x8e79ae, _0x23746a, _0x4e10a4, _0x5d5a37, _0x36a638) {
            return _0x8e79ae(_0x23746a, _0x4e10a4, _0x5d5a37, _0x36a638);
        };
        _0x142832[_0x20c6('0x14')] = _0x20c6('0x15');
        _0x142832[_0x20c6('0x16')] = _0x20c6('0x17');
        _0x142832[_0x20c6('0x18')] = _0x20c6('0x19');
        _0x142832[_0x20c6('0x1a')] = _0x20c6('0x1b');
        _0x142832[_0x20c6('0x1c')] = function (_0x44c461, _0x28304c, _0x2e75f1) {
            return _0x44c461(_0x28304c, _0x2e75f1);
        };
        _0x142832[_0x20c6('0x1d')] = _0x20c6('0x1e');
        _0x142832[_0x20c6('0x1f')] = _0x20c6('0x20');
        _0x142832[_0x20c6('0x21')] = _0x20c6('0x22');
        var _0x304390 = this, _0x2a556e = _0x304390[_0x20c6('0x23')], _0x4fcac1 = _0x304390[_0x20c6('0x24')]['_c'] || _0x2a556e;
        return _0x142832[_0x20c6('0x5')](_0x4fcac1, _0x142832[_0x20c6('0x1')], {}, [_0x142832[_0x20c6('0x13')](_0x4fcac1, _0x142832[_0x20c6('0x1')], {
                'directives': [{
                        'name': _0x142832[_0x20c6('0x14')],
                        'rawName': _0x142832[_0x20c6('0x16')],
                        'value': _0x304390[_0x20c6('0x19')],
                        'expression': _0x142832[_0x20c6('0x18')]
                    }],
                'staticStyle': { 'height': _0x142832[_0x20c6('0x1a')] }
            }, [_0x142832[_0x20c6('0x1c')](_0x4fcac1, _0x142832[_0x20c6('0x1d')], {
                    'ref': _0x142832[_0x20c6('0x1f')],
                    'attrs': { 'options': _0x304390[_0x20c6('0x25')] },
                    'scopedSlots': _0x304390['_u']([{
                            'key': _0x142832[_0x20c6('0x21')],
                            'fn': function () {
                                return [_0x142832[_0x20c6('0x0')](_0x4fcac1, _0x142832[_0x20c6('0x1')], { 'staticClass': _0x142832[_0x20c6('0x3')] }, [_0x142832[_0x20c6('0x5')](_0x4fcac1, _0x142832[_0x20c6('0x1')], {
                                            'staticClass': _0x142832[_0x20c6('0x6')],
                                            'staticStyle': {
                                                'line-height': _0x142832[_0x20c6('0x8')],
                                                'padding': _0x142832[_0x20c6('0xa')],
                                                'width': _0x142832[_0x20c6('0xc')]
                                            }
                                        }, [
                                            _0x304390['_v'](_0x142832[_0x20c6('0xe')]),
                                            _0x142832[_0x20c6('0x10')](_0x4fcac1, 'br'),
                                            _0x304390['_v'](_0x142832[_0x20c6('0x11')])
                                        ])])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, r = [];
const l = {}, n = {};
l[_0x20c6('0x26')] = _0x20c6('0x27');
l[_0x20c6('0x28')] = {};
l[_0x20c6('0x29')] = function () {
    var _0x4d0640 = {
        hqiQK: _0x20c6('0x2a'),
        ntvSt: _0x20c6('0x2b'),
        PDqmj: _0x20c6('0x2c'),
        WrvCF: _0x20c6('0x2d'),
        Resid: _0x20c6('0x2e')
    };
    return {
        g_loading: !0x0,
        graphOptions: {
            debug: !0x1,
            layout: {
                layoutName: _0x4d0640.hqiQK,
                from: _0x4d0640.ntvSt,
                min_per_width: 0x32,
                min_per_height: 0x28
            },
            defaultExpandHolderPosition: _0x4d0640.PDqmj,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x29,
            defaultPloyLineRadius: 0x4,
            defaultBottomJuctionPoint_X: 0x1c,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x4d0640.WrvCF,
            defaultNodeColor: _0x4d0640.Resid,
            reLayoutWhenExpandedOrCollapsed: !0x0
        }
    };
};
l[_0x20c6('0x2f')] = function () {
};
l[_0x20c6('0x30')] = function () {
    this.setGraphData();
};
l[_0x20c6('0x31')] = {};
l[_0x20c6('0x31')][_0x20c6('0x32')] = async function () {
    var _0xb239cb = {
        tOURZ: _0x20c6('0x33'),
        qyowM: _0x20c6('0x2b'),
        pHnif: _0x20c6('0x34'),
        HNNOu: _0x20c6('0x35'),
        pUDLa: _0x20c6('0x36'),
        YzQrk: _0x20c6('0x37'),
        aqgIi: _0x20c6('0x38'),
        IvoNE: _0x20c6('0x39'),
        rhXQO: _0x20c6('0x3a'),
        Byeas: _0x20c6('0x3b'),
        fGryV: _0x20c6('0x3c')
    };
    const _0x4cbe52 = [{
            id: 'a',
            text: 'a',
            children: [
                {
                    id: 'b',
                    text: 'b',
                    children: [
                        {
                            id: 'b1',
                            text: 'b1',
                            children: [
                                {
                                    id: _0xb239cb.pHnif,
                                    text: _0xb239cb.pHnif
                                },
                                {
                                    id: _0xb239cb.HNNOu,
                                    text: _0xb239cb.HNNOu
                                },
                                {
                                    id: _0xb239cb.pUDLa,
                                    text: _0xb239cb.pUDLa
                                },
                                {
                                    id: _0xb239cb.YzQrk,
                                    text: _0xb239cb.YzQrk
                                },
                                {
                                    id: _0xb239cb.aqgIi,
                                    text: _0xb239cb.aqgIi
                                },
                                {
                                    id: _0xb239cb.IvoNE,
                                    text: _0xb239cb.IvoNE
                                }
                            ]
                        },
                        {
                            id: 'b2',
                            text: 'b2',
                            children: [
                                {
                                    id: _0xb239cb.rhXQO,
                                    text: _0xb239cb.rhXQO
                                },
                                {
                                    id: _0xb239cb.Byeas,
                                    text: _0xb239cb.Byeas
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'c',
                    text: 'c',
                    children: [
                        {
                            id: 'c1',
                            text: 'c1'
                        },
                        {
                            id: 'c2',
                            text: 'c2'
                        },
                        {
                            id: 'c3',
                            text: 'c3'
                        }
                    ]
                }
            ]
        }];
    this.g_loading = !0x1;
    const _0x28eba5 = this.$refs.graphRef.getInstance(), _0x217387 = {
            rootId: 'a',
            nodes: [],
            lines: []
        };
    _0x28eba5.flatNodeData(_0x4cbe52, null, _0x217387.nodes, _0x217387.lines), _0x217387.lines.forEach(_0x36be89 => {
        _0x36be89.fromJunctionPoint = _0xb239cb.tOURZ, _0x36be89.toJunctionPoint = _0xb239cb.qyowM;
    }), console.log(_0xb239cb.fGryV, _0x217387), await _0x28eba5.addNodes(_0x217387.nodes), await _0x28eba5.addLines(_0x217387.lines), _0x28eba5.graphData.rootNode = _0x28eba5.getNodeById(_0x217387.rootId), await _0x28eba5.doLayout(), await _0x28eba5.playShowEffect();
};
var s = _0x44be66(l, d, r, !0x1, c, _0x20c6('0x3d'), null, null);
function c(_0x3bef85) {
    for (let _0x3c793f in n)
        this[_0x3c793f] = n[_0x3c793f];
}
const p = function () {
    return s[_0x20c6('0x3e')];
}();
export {
    p as default
};