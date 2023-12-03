
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3b1a = [
    'graphOptions',
    'yFjvb',
    'cLKOe',
    'yxjXF',
    '10px',
    'cjpim',
    '700px',
    'pTVGk',
    '20px',
    'RQlHX',
    '12px',
    'rQnuS',
    '\x20这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。\x20',
    'HXVWT',
    'lViPQ',
    '\x20直接使用tree数据结构有明显的确缺陷：只能设置全局的线条默认样式，无法对具体的link设置属性，不能精细的定义线条的样式。\x20',
    'name',
    'RelationGraphDemo',
    'components',
    'data',
    '---',
    'tree',
    'seeks-layout-center',
    'border',
    'left',
    '200',
    '500',
    'right',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'created',
    'mounted',
    'methods',
    'setGraphData',
    'b1-1',
    'b1-2',
    'b1-3',
    'b1-4',
    'b1-5',
    'b1-6',
    'b2-1',
    'b2-2',
    'exports',
    'icrCy',
    'ezDso',
    'div',
    'DBHfZ',
    'DLMlo',
    'loading',
    'rqRJt',
    'v-loading',
    'qHtNE',
    'g_loading',
    'kjvxG',
    'calc(100vh\x20-\x20140px)',
    'zGoeY',
    '#efefef\x20solid\x201px',
    'uuYfl',
    'fldkt',
    'RelationGraph',
    'utCtq',
    'graphRef',
    '$createElement',
    '_self'
];
(function (_0x47b70b, _0xab66f) {
    var _0x3e47d2 = function (_0x11ba12) {
        while (--_0x11ba12) {
            _0x47b70b['push'](_0x47b70b['shift']());
        }
    };
    _0x3e47d2(++_0xab66f);
}(_0x3b1a, 0x1eb));
var _0x133f = function (_0x931e0d, _0x3765b0) {
    _0x931e0d = _0x931e0d - 0x0;
    var _0x498b3f = _0x3b1a[_0x931e0d];
    return _0x498b3f;
};
import { n } from './index-4e37fb25.js';
var o = function () {
        var _0x558b20 = {};
        _0x558b20[_0x133f('0x0')] = function (_0x57d504, _0x3e239e, _0x1924b7, _0x397b3f) {
            return _0x57d504(_0x3e239e, _0x1924b7, _0x397b3f);
        };
        _0x558b20[_0x133f('0x1')] = _0x133f('0x2');
        _0x558b20[_0x133f('0x3')] = function (_0x18e201, _0x58793d, _0x407456, _0x2d23b1, _0x537613) {
            return _0x18e201(_0x58793d, _0x407456, _0x2d23b1, _0x537613);
        };
        _0x558b20[_0x133f('0x4')] = _0x133f('0x5');
        _0x558b20[_0x133f('0x6')] = _0x133f('0x7');
        _0x558b20[_0x133f('0x8')] = _0x133f('0x9');
        _0x558b20[_0x133f('0xa')] = _0x133f('0xb');
        _0x558b20[_0x133f('0xc')] = _0x133f('0xd');
        _0x558b20[_0x133f('0xe')] = function (_0x1c2546, _0x51342c, _0x33f47f) {
            return _0x1c2546(_0x51342c, _0x33f47f);
        };
        _0x558b20[_0x133f('0xf')] = _0x133f('0x10');
        _0x558b20[_0x133f('0x11')] = _0x133f('0x12');
        var _0x137363 = this, _0x5bdf11 = _0x137363[_0x133f('0x13')], _0x3bec4d = _0x137363[_0x133f('0x14')]['_c'] || _0x5bdf11;
        return _0x558b20[_0x133f('0x0')](_0x3bec4d, _0x558b20[_0x133f('0x1')], {}, [
            _0x137363['_m'](0x0),
            _0x558b20[_0x133f('0x3')](_0x3bec4d, _0x558b20[_0x133f('0x1')], {
                'directives': [{
                        'name': _0x558b20[_0x133f('0x4')],
                        'rawName': _0x558b20[_0x133f('0x6')],
                        'value': _0x137363[_0x133f('0x9')],
                        'expression': _0x558b20[_0x133f('0x8')]
                    }],
                'staticStyle': {
                    'height': _0x558b20[_0x133f('0xa')],
                    'border-top': _0x558b20[_0x133f('0xc')]
                }
            }, [_0x558b20[_0x133f('0xe')](_0x3bec4d, _0x558b20[_0x133f('0xf')], {
                    'ref': _0x558b20[_0x133f('0x11')],
                    'attrs': { 'options': _0x137363[_0x133f('0x15')] }
                })], 0x1)
        ]);
    }, r = [function () {
            var _0x4d723c = {};
            _0x4d723c[_0x133f('0x16')] = function (_0x4a91fb, _0x2222ce, _0x47e2f4, _0x16a939) {
                return _0x4a91fb(_0x2222ce, _0x47e2f4, _0x16a939);
            };
            _0x4d723c[_0x133f('0x17')] = _0x133f('0x2');
            _0x4d723c[_0x133f('0x18')] = _0x133f('0x19');
            _0x4d723c[_0x133f('0x1a')] = _0x133f('0x1b');
            _0x4d723c[_0x133f('0x1c')] = _0x133f('0x1d');
            _0x4d723c[_0x133f('0x1e')] = _0x133f('0x1f');
            _0x4d723c[_0x133f('0x20')] = _0x133f('0x21');
            _0x4d723c[_0x133f('0x22')] = function (_0xb50e5, _0x2ee2ab) {
                return _0xb50e5(_0x2ee2ab);
            };
            _0x4d723c[_0x133f('0x23')] = _0x133f('0x24');
            var _0x379cfa = this, _0x1d7904 = _0x379cfa[_0x133f('0x13')], _0x54a9a5 = _0x379cfa[_0x133f('0x14')]['_c'] || _0x1d7904;
            return _0x4d723c[_0x133f('0x16')](_0x54a9a5, _0x4d723c[_0x133f('0x17')], {
                'staticStyle': {
                    'margin-top': _0x4d723c[_0x133f('0x18')],
                    'width': _0x4d723c[_0x133f('0x1a')],
                    'padding-left': _0x4d723c[_0x133f('0x1c')],
                    'font-size': _0x4d723c[_0x133f('0x1e')]
                }
            }, [
                _0x379cfa['_v'](_0x4d723c[_0x133f('0x20')]),
                _0x4d723c[_0x133f('0x22')](_0x54a9a5, 'br'),
                _0x379cfa['_v'](_0x4d723c[_0x133f('0x23')])
            ]);
        }];
const d = {}, i = {};
d[_0x133f('0x25')] = _0x133f('0x26');
d[_0x133f('0x27')] = {};
d[_0x133f('0x28')] = function () {
    var _0x442ebf = {
        wawdx: _0x133f('0x29'),
        CXllU: _0x133f('0x2a'),
        TyrQA: _0x133f('0x2b'),
        GSYPa: _0x133f('0x2c'),
        hXayz: _0x133f('0x2d'),
        eKNfh: _0x133f('0x2e'),
        nZXTE: _0x133f('0x2f'),
        WhDdj: _0x133f('0x30'),
        LpSDK: _0x133f('0x31'),
        DtrlL: _0x133f('0x32')
    };
    return {
        g_loading: !0x0,
        demoname: _0x442ebf.wawdx,
        graphOptions: {
            debug: !0x1,
            layouts: [{
                    label: '中心',
                    layoutName: _0x442ebf.CXllU,
                    layoutClassName: _0x442ebf.TyrQA,
                    defaultJunctionPoint: _0x442ebf.GSYPa,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x442ebf.hXayz,
                    min_per_width: _0x442ebf.eKNfh,
                    max_per_width: _0x442ebf.nZXTE,
                    min_per_height: '40',
                    max_per_height: '60',
                    levelDistance: ''
                }],
            defaultExpandHolderPosition: _0x442ebf.WhDdj,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x442ebf.LpSDK,
            defaultNodeColor: _0x442ebf.DtrlL
        }
    };
};
d[_0x133f('0x33')] = function () {
};
d[_0x133f('0x34')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
d[_0x133f('0x35')] = {};
d[_0x133f('0x35')][_0x133f('0x36')] = function () {
    var _0x43758a = {
        mxPHG: _0x133f('0x37'),
        pozKU: _0x133f('0x38'),
        iJyvM: _0x133f('0x39'),
        QwqNH: _0x133f('0x3a'),
        hinMl: _0x133f('0x3b'),
        RcVPY: _0x133f('0x3c'),
        oSumC: _0x133f('0x3d'),
        aekhR: _0x133f('0x3e')
    };
    const _0x4f9d7b = {
        rootId: 'a',
        nodes: [{
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
                                        id: _0x43758a.mxPHG,
                                        text: _0x43758a.mxPHG
                                    },
                                    {
                                        id: _0x43758a.pozKU,
                                        text: _0x43758a.pozKU
                                    },
                                    {
                                        id: _0x43758a.iJyvM,
                                        text: _0x43758a.iJyvM
                                    },
                                    {
                                        id: _0x43758a.QwqNH,
                                        text: _0x43758a.QwqNH
                                    },
                                    {
                                        id: _0x43758a.hinMl,
                                        text: _0x43758a.hinMl
                                    },
                                    {
                                        id: _0x43758a.RcVPY,
                                        text: _0x43758a.RcVPY
                                    }
                                ]
                            },
                            {
                                id: 'b2',
                                text: 'b2',
                                children: [
                                    {
                                        id: _0x43758a.oSumC,
                                        text: _0x43758a.oSumC
                                    },
                                    {
                                        id: _0x43758a.aekhR,
                                        text: _0x43758a.aekhR
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
            }],
        lines: []
    };
    console.log(JSON.stringify(_0x4f9d7b)), this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x4f9d7b, _0x2c5747 => {
    });
};
var l = n(d, o, r, !0x1, s, null, null, null);
function s(_0x437cba) {
    for (let _0x1e5288 in i)
        this[_0x1e5288] = i[_0x1e5288];
}
const h = function () {
    return l[_0x133f('0x3f')];
}();
export {
    h as default
};