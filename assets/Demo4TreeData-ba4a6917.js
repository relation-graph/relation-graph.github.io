
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x55f3 = [
    'JrBNa',
    'PzZAF',
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
    '100',
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
    'dZAFe',
    'TYcXJ',
    'div',
    'prbrh',
    'KdgNh',
    'loading',
    'gyPve',
    'v-loading',
    'HDftg',
    'g_loading',
    'TCRsW',
    'calc(100vh\x20-\x20140px)',
    'riMZo',
    '#efefef\x20solid\x201px',
    'gsSJm',
    'CIZVF',
    'RelationGraph',
    'QPyJn',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'LMpMm',
    'gOezR',
    'Xihqt',
    '10px',
    'ipRHz',
    '700px',
    'hDRTJ',
    '20px',
    'ipWJu',
    '12px',
    'eCSWW',
    '\x20这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。\x20'
];
(function (_0x521f7b, _0x207670) {
    var _0x1f1b97 = function (_0x29db6d) {
        while (--_0x29db6d) {
            _0x521f7b['push'](_0x521f7b['shift']());
        }
    };
    _0x1f1b97(++_0x207670);
}(_0x55f3, 0x1e6));
var _0x37a8 = function (_0x50a4a7, _0x4436c8) {
    _0x50a4a7 = _0x50a4a7 - 0x0;
    var _0x337a9e = _0x55f3[_0x50a4a7];
    return _0x337a9e;
};
import { n } from './index-4e420adb.js';
var o = function () {
        var _0x4cf19c = {};
        _0x4cf19c[_0x37a8('0x0')] = function (_0x59772e, _0x43ec9f, _0x54204b, _0x3e0734) {
            return _0x59772e(_0x43ec9f, _0x54204b, _0x3e0734);
        };
        _0x4cf19c[_0x37a8('0x1')] = _0x37a8('0x2');
        _0x4cf19c[_0x37a8('0x3')] = function (_0xa5adb8, _0x4372b7, _0x150b30, _0x9ed188, _0x27de88) {
            return _0xa5adb8(_0x4372b7, _0x150b30, _0x9ed188, _0x27de88);
        };
        _0x4cf19c[_0x37a8('0x4')] = _0x37a8('0x5');
        _0x4cf19c[_0x37a8('0x6')] = _0x37a8('0x7');
        _0x4cf19c[_0x37a8('0x8')] = _0x37a8('0x9');
        _0x4cf19c[_0x37a8('0xa')] = _0x37a8('0xb');
        _0x4cf19c[_0x37a8('0xc')] = _0x37a8('0xd');
        _0x4cf19c[_0x37a8('0xe')] = function (_0x221240, _0x572574, _0x6e721d) {
            return _0x221240(_0x572574, _0x6e721d);
        };
        _0x4cf19c[_0x37a8('0xf')] = _0x37a8('0x10');
        _0x4cf19c[_0x37a8('0x11')] = _0x37a8('0x12');
        var _0x5c1f0f = this, _0x27fa24 = _0x5c1f0f[_0x37a8('0x13')], _0x3f4dae = _0x5c1f0f[_0x37a8('0x14')]['_c'] || _0x27fa24;
        return _0x4cf19c[_0x37a8('0x0')](_0x3f4dae, _0x4cf19c[_0x37a8('0x1')], {}, [
            _0x5c1f0f['_m'](0x0),
            _0x4cf19c[_0x37a8('0x3')](_0x3f4dae, _0x4cf19c[_0x37a8('0x1')], {
                'directives': [{
                        'name': _0x4cf19c[_0x37a8('0x4')],
                        'rawName': _0x4cf19c[_0x37a8('0x6')],
                        'value': _0x5c1f0f[_0x37a8('0x9')],
                        'expression': _0x4cf19c[_0x37a8('0x8')]
                    }],
                'staticStyle': {
                    'height': _0x4cf19c[_0x37a8('0xa')],
                    'border-top': _0x4cf19c[_0x37a8('0xc')]
                }
            }, [_0x4cf19c[_0x37a8('0xe')](_0x3f4dae, _0x4cf19c[_0x37a8('0xf')], {
                    'ref': _0x4cf19c[_0x37a8('0x11')],
                    'attrs': { 'options': _0x5c1f0f[_0x37a8('0x15')] }
                })], 0x1)
        ]);
    }, r = [function () {
            var _0x4ae6a9 = {};
            _0x4ae6a9[_0x37a8('0x16')] = function (_0x3b27a8, _0x53c427, _0x5a4b6e, _0x384550) {
                return _0x3b27a8(_0x53c427, _0x5a4b6e, _0x384550);
            };
            _0x4ae6a9[_0x37a8('0x17')] = _0x37a8('0x2');
            _0x4ae6a9[_0x37a8('0x18')] = _0x37a8('0x19');
            _0x4ae6a9[_0x37a8('0x1a')] = _0x37a8('0x1b');
            _0x4ae6a9[_0x37a8('0x1c')] = _0x37a8('0x1d');
            _0x4ae6a9[_0x37a8('0x1e')] = _0x37a8('0x1f');
            _0x4ae6a9[_0x37a8('0x20')] = _0x37a8('0x21');
            _0x4ae6a9[_0x37a8('0x22')] = function (_0x2046a7, _0x5aecf3) {
                return _0x2046a7(_0x5aecf3);
            };
            _0x4ae6a9[_0x37a8('0x23')] = _0x37a8('0x24');
            var _0x30520b = this, _0x2aa9d6 = _0x30520b[_0x37a8('0x13')], _0x5beb86 = _0x30520b[_0x37a8('0x14')]['_c'] || _0x2aa9d6;
            return _0x4ae6a9[_0x37a8('0x16')](_0x5beb86, _0x4ae6a9[_0x37a8('0x17')], {
                'staticStyle': {
                    'margin-top': _0x4ae6a9[_0x37a8('0x18')],
                    'width': _0x4ae6a9[_0x37a8('0x1a')],
                    'padding-left': _0x4ae6a9[_0x37a8('0x1c')],
                    'font-size': _0x4ae6a9[_0x37a8('0x1e')]
                }
            }, [
                _0x30520b['_v'](_0x4ae6a9[_0x37a8('0x20')]),
                _0x4ae6a9[_0x37a8('0x22')](_0x5beb86, 'br'),
                _0x30520b['_v'](_0x4ae6a9[_0x37a8('0x23')])
            ]);
        }];
const d = {}, i = {};
d[_0x37a8('0x25')] = _0x37a8('0x26');
d[_0x37a8('0x27')] = {};
d[_0x37a8('0x28')] = function () {
    var _0x52bdc5 = {
        DqFjD: _0x37a8('0x29'),
        fqKLE: _0x37a8('0x2a'),
        gXCYx: _0x37a8('0x2b'),
        RaHdV: _0x37a8('0x2c'),
        HivTF: _0x37a8('0x2d'),
        PuNCT: _0x37a8('0x2e'),
        yXxBW: _0x37a8('0x2f'),
        BhjEw: _0x37a8('0x30'),
        cSqJo: _0x37a8('0x31'),
        OfBpM: _0x37a8('0x32'),
        CKnTH: _0x37a8('0x33')
    };
    return {
        g_loading: !0x0,
        demoname: _0x52bdc5.DqFjD,
        graphOptions: {
            debug: !0x1,
            layouts: [{
                    label: '中心',
                    layoutName: _0x52bdc5.fqKLE,
                    layoutClassName: _0x52bdc5.gXCYx,
                    defaultJunctionPoint: _0x52bdc5.RaHdV,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x52bdc5.HivTF,
                    min_per_width: _0x52bdc5.PuNCT,
                    max_per_width: _0x52bdc5.yXxBW,
                    min_per_height: '40',
                    max_per_height: '60',
                    levelDistance: ''
                }],
            defaultExpandHolderPosition: _0x52bdc5.BhjEw,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x52bdc5.cSqJo,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x52bdc5.OfBpM,
            defaultNodeColor: _0x52bdc5.CKnTH
        }
    };
};
d[_0x37a8('0x34')] = function () {
};
d[_0x37a8('0x35')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
d[_0x37a8('0x36')] = {};
d[_0x37a8('0x36')][_0x37a8('0x37')] = function () {
    var _0xc72281 = {
        YmuaR: _0x37a8('0x38'),
        QHGkN: _0x37a8('0x39'),
        tzHzd: _0x37a8('0x3a'),
        IiyCk: _0x37a8('0x3b'),
        kMjeE: _0x37a8('0x3c'),
        eDKXt: _0x37a8('0x3d'),
        NzgRs: _0x37a8('0x3e'),
        sdDms: _0x37a8('0x3f')
    };
    const _0x4b0483 = {
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
                                        id: _0xc72281.YmuaR,
                                        text: _0xc72281.YmuaR
                                    },
                                    {
                                        id: _0xc72281.QHGkN,
                                        text: _0xc72281.QHGkN
                                    },
                                    {
                                        id: _0xc72281.tzHzd,
                                        text: _0xc72281.tzHzd
                                    },
                                    {
                                        id: _0xc72281.IiyCk,
                                        text: _0xc72281.IiyCk
                                    },
                                    {
                                        id: _0xc72281.kMjeE,
                                        text: _0xc72281.kMjeE
                                    },
                                    {
                                        id: _0xc72281.eDKXt,
                                        text: _0xc72281.eDKXt
                                    }
                                ]
                            },
                            {
                                id: 'b2',
                                text: 'b2',
                                children: [
                                    {
                                        id: _0xc72281.NzgRs,
                                        text: _0xc72281.NzgRs
                                    },
                                    {
                                        id: _0xc72281.sdDms,
                                        text: _0xc72281.sdDms
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
    console.log(JSON.stringify(_0x4b0483)), this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x4b0483, _0x1c85da => {
    });
};
var l = n(d, o, r, !0x1, s, null, null, null);
function s(_0x422114) {
    for (let _0x42b944 in i)
        this[_0x42b944] = i[_0x42b944];
}
const h = function () {
    return l[_0x37a8('0x40')];
}();
export {
    h as default
};