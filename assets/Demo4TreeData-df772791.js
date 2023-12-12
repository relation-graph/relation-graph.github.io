
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5b25 = [
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
    'xtYPp',
    'LxyQR',
    'div',
    'NuVRo',
    'CxIwk',
    'loading',
    'BSEjQ',
    'v-loading',
    'enjiI',
    'g_loading',
    'zkjfi',
    'calc(100vh\x20-\x20140px)',
    'cfKpv',
    '#efefef\x20solid\x201px',
    'WSBPg',
    'IBqac',
    'RelationGraph',
    'YOKjQ',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'OtCPR',
    'hHFls',
    'NZCIf',
    '10px',
    'ANAHU',
    '700px',
    'ReTQS',
    '20px',
    'QLuQR',
    '12px',
    'BjalK',
    '\x20这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。\x20',
    'haNEL',
    'GQweS',
    '\x20直接使用tree数据结构有明显的确缺陷：只能设置全局的线条默认样式，无法对具体的link设置属性，不能精细的定义线条的样式。\x20'
];
(function (_0x2acf64, _0x4e95df) {
    var _0x1b3cb7 = function (_0x30141f) {
        while (--_0x30141f) {
            _0x2acf64['push'](_0x2acf64['shift']());
        }
    };
    _0x1b3cb7(++_0x4e95df);
}(_0x5b25, 0x9b));
var _0x2e81 = function (_0x300eb8, _0x4960cc) {
    _0x300eb8 = _0x300eb8 - 0x0;
    var _0x16d69d = _0x5b25[_0x300eb8];
    return _0x16d69d;
};
import { n } from './index-ef5ed09b.js';
var o = function () {
        var _0x971c30 = {};
        _0x971c30[_0x2e81('0x0')] = function (_0x371e25, _0x4dae67, _0x30f45c, _0x965a65) {
            return _0x371e25(_0x4dae67, _0x30f45c, _0x965a65);
        };
        _0x971c30[_0x2e81('0x1')] = _0x2e81('0x2');
        _0x971c30[_0x2e81('0x3')] = function (_0x4a18ab, _0x1842a6, _0x5ce12a, _0x52ffc3, _0x458a97) {
            return _0x4a18ab(_0x1842a6, _0x5ce12a, _0x52ffc3, _0x458a97);
        };
        _0x971c30[_0x2e81('0x4')] = _0x2e81('0x5');
        _0x971c30[_0x2e81('0x6')] = _0x2e81('0x7');
        _0x971c30[_0x2e81('0x8')] = _0x2e81('0x9');
        _0x971c30[_0x2e81('0xa')] = _0x2e81('0xb');
        _0x971c30[_0x2e81('0xc')] = _0x2e81('0xd');
        _0x971c30[_0x2e81('0xe')] = function (_0x1898fb, _0x2f95af, _0x3e6491) {
            return _0x1898fb(_0x2f95af, _0x3e6491);
        };
        _0x971c30[_0x2e81('0xf')] = _0x2e81('0x10');
        _0x971c30[_0x2e81('0x11')] = _0x2e81('0x12');
        var _0x3e4f24 = this, _0x24770c = _0x3e4f24[_0x2e81('0x13')], _0x3542c1 = _0x3e4f24[_0x2e81('0x14')]['_c'] || _0x24770c;
        return _0x971c30[_0x2e81('0x0')](_0x3542c1, _0x971c30[_0x2e81('0x1')], {}, [
            _0x3e4f24['_m'](0x0),
            _0x971c30[_0x2e81('0x3')](_0x3542c1, _0x971c30[_0x2e81('0x1')], {
                'directives': [{
                        'name': _0x971c30[_0x2e81('0x4')],
                        'rawName': _0x971c30[_0x2e81('0x6')],
                        'value': _0x3e4f24[_0x2e81('0x9')],
                        'expression': _0x971c30[_0x2e81('0x8')]
                    }],
                'staticStyle': {
                    'height': _0x971c30[_0x2e81('0xa')],
                    'border-top': _0x971c30[_0x2e81('0xc')]
                }
            }, [_0x971c30[_0x2e81('0xe')](_0x3542c1, _0x971c30[_0x2e81('0xf')], {
                    'ref': _0x971c30[_0x2e81('0x11')],
                    'attrs': { 'options': _0x3e4f24[_0x2e81('0x15')] }
                })], 0x1)
        ]);
    }, r = [function () {
            var _0x4d8a15 = {};
            _0x4d8a15[_0x2e81('0x16')] = function (_0x10cf8c, _0x327306, _0x2552c2, _0x18b8e5) {
                return _0x10cf8c(_0x327306, _0x2552c2, _0x18b8e5);
            };
            _0x4d8a15[_0x2e81('0x17')] = _0x2e81('0x2');
            _0x4d8a15[_0x2e81('0x18')] = _0x2e81('0x19');
            _0x4d8a15[_0x2e81('0x1a')] = _0x2e81('0x1b');
            _0x4d8a15[_0x2e81('0x1c')] = _0x2e81('0x1d');
            _0x4d8a15[_0x2e81('0x1e')] = _0x2e81('0x1f');
            _0x4d8a15[_0x2e81('0x20')] = _0x2e81('0x21');
            _0x4d8a15[_0x2e81('0x22')] = function (_0x2b1f50, _0x3fe120) {
                return _0x2b1f50(_0x3fe120);
            };
            _0x4d8a15[_0x2e81('0x23')] = _0x2e81('0x24');
            var _0x2f4747 = this, _0x4c858e = _0x2f4747[_0x2e81('0x13')], _0x55e08e = _0x2f4747[_0x2e81('0x14')]['_c'] || _0x4c858e;
            return _0x4d8a15[_0x2e81('0x16')](_0x55e08e, _0x4d8a15[_0x2e81('0x17')], {
                'staticStyle': {
                    'margin-top': _0x4d8a15[_0x2e81('0x18')],
                    'width': _0x4d8a15[_0x2e81('0x1a')],
                    'padding-left': _0x4d8a15[_0x2e81('0x1c')],
                    'font-size': _0x4d8a15[_0x2e81('0x1e')]
                }
            }, [
                _0x2f4747['_v'](_0x4d8a15[_0x2e81('0x20')]),
                _0x4d8a15[_0x2e81('0x22')](_0x55e08e, 'br'),
                _0x2f4747['_v'](_0x4d8a15[_0x2e81('0x23')])
            ]);
        }];
const d = {}, i = {};
d[_0x2e81('0x25')] = _0x2e81('0x26');
d[_0x2e81('0x27')] = {};
d[_0x2e81('0x28')] = function () {
    var _0x46d7fe = {
        RkSJD: _0x2e81('0x29'),
        VvhIQ: _0x2e81('0x2a'),
        onXBD: _0x2e81('0x2b'),
        nVtPS: _0x2e81('0x2c'),
        zhrPo: _0x2e81('0x2d'),
        GgzKn: _0x2e81('0x2e'),
        ifzJs: _0x2e81('0x2f'),
        NvFVU: _0x2e81('0x30'),
        LfkQO: _0x2e81('0x31'),
        TWDHT: _0x2e81('0x32')
    };
    return {
        g_loading: !0x0,
        demoname: _0x46d7fe.RkSJD,
        graphOptions: {
            debug: !0x1,
            layouts: [{
                    label: '中心',
                    layoutName: _0x46d7fe.VvhIQ,
                    layoutClassName: _0x46d7fe.onXBD,
                    defaultJunctionPoint: _0x46d7fe.nVtPS,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x46d7fe.zhrPo,
                    min_per_width: _0x46d7fe.GgzKn,
                    max_per_width: _0x46d7fe.ifzJs,
                    min_per_height: '40',
                    max_per_height: '60',
                    levelDistance: ''
                }],
            defaultExpandHolderPosition: _0x46d7fe.NvFVU,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x46d7fe.LfkQO,
            defaultNodeColor: _0x46d7fe.TWDHT
        }
    };
};
d[_0x2e81('0x33')] = function () {
};
d[_0x2e81('0x34')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
d[_0x2e81('0x35')] = {};
d[_0x2e81('0x35')][_0x2e81('0x36')] = function () {
    var _0x10a66e = {
        ImdcF: _0x2e81('0x37'),
        DxsdJ: _0x2e81('0x38'),
        xPzrN: _0x2e81('0x39'),
        HbDNO: _0x2e81('0x3a'),
        oVZCH: _0x2e81('0x3b'),
        YjrWv: _0x2e81('0x3c'),
        HSdzZ: _0x2e81('0x3d'),
        AqrSV: _0x2e81('0x3e')
    };
    const _0x523933 = {
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
                                        id: _0x10a66e.ImdcF,
                                        text: _0x10a66e.ImdcF
                                    },
                                    {
                                        id: _0x10a66e.DxsdJ,
                                        text: _0x10a66e.DxsdJ
                                    },
                                    {
                                        id: _0x10a66e.xPzrN,
                                        text: _0x10a66e.xPzrN
                                    },
                                    {
                                        id: _0x10a66e.HbDNO,
                                        text: _0x10a66e.HbDNO
                                    },
                                    {
                                        id: _0x10a66e.oVZCH,
                                        text: _0x10a66e.oVZCH
                                    },
                                    {
                                        id: _0x10a66e.YjrWv,
                                        text: _0x10a66e.YjrWv
                                    }
                                ]
                            },
                            {
                                id: 'b2',
                                text: 'b2',
                                children: [
                                    {
                                        id: _0x10a66e.HSdzZ,
                                        text: _0x10a66e.HSdzZ
                                    },
                                    {
                                        id: _0x10a66e.AqrSV,
                                        text: _0x10a66e.AqrSV
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
    console.log(JSON.stringify(_0x523933)), this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x523933, _0x10139a => {
    });
};
var l = n(d, o, r, !0x1, s, null, null, null);
function s(_0x590641) {
    for (let _0x241d0c in i)
        this[_0x241d0c] = i[_0x241d0c];
}
const h = function () {
    return l[_0x2e81('0x3f')];
}();
export {
    h as default
};