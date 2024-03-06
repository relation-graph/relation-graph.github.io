
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5f11 = [
    'voety',
    'graphRef2',
    '$createElement',
    '_self',
    'graphOptions1',
    'onNodeClick',
    'onLineClick',
    'graphOptions2',
    'name',
    'Demo',
    'components',
    'data',
    '纵向树状图谱',
    'mounted',
    'methods',
    'show',
    'graph1',
    'graph2',
    'resetGraph',
    'tree',
    'left',
    '300',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'top',
    '#ff0000',
    '根节点a',
    'R-b',
    'R-c',
    'R-c-1',
    'R-c-2',
    'R-d',
    'bottom',
    'showSeeksGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'rgpJi',
    'jNbRd',
    'div',
    'oTpbQ',
    'el-row',
    'jNhGZ',
    'el-col',
    'yNPlL',
    'lTBUh',
    'calc(100vh\x20-\x20100px)',
    'EQdFY',
    'aayFi',
    'RelationGraph',
    'vFmBG',
    'graphRef1',
    'LVVqw',
    'OZTVe',
    '#efefef\x20solid\x201px',
    'EQYwx',
    '15px',
    'uHVNP',
    '14px',
    'zwfmT',
    '25px',
    'MyBFc',
    'RiKGz',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'DixJV',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'RrUPc',
    'JPFNn',
    'EiHRC',
    'showStartArrow=true',
    'yLWLu',
    'VQEto',
    'showEndArrow=false',
    'fNfrq',
    '以此来让上方线条看起来是反向展示。',
    'OEMel',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'QpWqf',
    'YpFPL'
];
(function (_0x6ab96a, _0x1bb631) {
    var _0x17509d = function (_0x495b22) {
        while (--_0x495b22) {
            _0x6ab96a['push'](_0x6ab96a['shift']());
        }
    };
    _0x17509d(++_0x1bb631);
}(_0x5f11, 0xc3));
var _0x4bbb = function (_0x42229a, _0x5e84d2) {
    _0x42229a = _0x42229a - 0x0;
    var _0x20f7d1 = _0x5f11[_0x42229a];
    return _0x20f7d1;
};
import { n as _0x51eec4 } from './index-ab96dab3.js';
var c = function () {
        var _0x4cec92 = {};
        _0x4cec92[_0x4bbb('0x0')] = function (_0x25f1b8, _0x33b545, _0x50d32c, _0x5993c9) {
            return _0x25f1b8(_0x33b545, _0x50d32c, _0x5993c9);
        };
        _0x4cec92[_0x4bbb('0x1')] = _0x4bbb('0x2');
        _0x4cec92[_0x4bbb('0x3')] = _0x4bbb('0x4');
        _0x4cec92[_0x4bbb('0x5')] = _0x4bbb('0x6');
        _0x4cec92[_0x4bbb('0x7')] = function (_0x397de1, _0x144768, _0x40d07a, _0xca33fa, _0x253e17) {
            return _0x397de1(_0x144768, _0x40d07a, _0xca33fa, _0x253e17);
        };
        _0x4cec92[_0x4bbb('0x8')] = _0x4bbb('0x9');
        _0x4cec92[_0x4bbb('0xa')] = function (_0x598669, _0x3a3bf2, _0x2c90ea) {
            return _0x598669(_0x3a3bf2, _0x2c90ea);
        };
        _0x4cec92[_0x4bbb('0xb')] = _0x4bbb('0xc');
        _0x4cec92[_0x4bbb('0xd')] = _0x4bbb('0xe');
        _0x4cec92[_0x4bbb('0xf')] = function (_0xac9774, _0x24479c, _0x1029dd, _0x33767c) {
            return _0xac9774(_0x24479c, _0x1029dd, _0x33767c);
        };
        _0x4cec92[_0x4bbb('0x10')] = _0x4bbb('0x11');
        _0x4cec92[_0x4bbb('0x12')] = _0x4bbb('0x13');
        _0x4cec92[_0x4bbb('0x14')] = _0x4bbb('0x15');
        _0x4cec92[_0x4bbb('0x16')] = _0x4bbb('0x17');
        _0x4cec92[_0x4bbb('0x18')] = function (_0x5468ab, _0x1fc6fa, _0x20bdb0) {
            return _0x5468ab(_0x1fc6fa, _0x20bdb0);
        };
        _0x4cec92[_0x4bbb('0x19')] = _0x4bbb('0x1a');
        _0x4cec92[_0x4bbb('0x1b')] = _0x4bbb('0x1c');
        _0x4cec92[_0x4bbb('0x1d')] = function (_0x66efca, _0x44b4af, _0x3a6faf) {
            return _0x66efca(_0x44b4af, _0x3a6faf);
        };
        _0x4cec92[_0x4bbb('0x1e')] = function (_0x115ad1, _0x149a7a, _0x47d6ec) {
            return _0x115ad1(_0x149a7a, _0x47d6ec);
        };
        _0x4cec92[_0x4bbb('0x1f')] = _0x4bbb('0x20');
        _0x4cec92[_0x4bbb('0x21')] = function (_0x377900, _0x26088b, _0x588b92) {
            return _0x377900(_0x26088b, _0x588b92);
        };
        _0x4cec92[_0x4bbb('0x22')] = _0x4bbb('0x23');
        _0x4cec92[_0x4bbb('0x24')] = _0x4bbb('0x25');
        _0x4cec92[_0x4bbb('0x26')] = _0x4bbb('0x27');
        _0x4cec92[_0x4bbb('0x28')] = function (_0x28aa98, _0x4eef2f, _0x1ad64d, _0x564c72) {
            return _0x28aa98(_0x4eef2f, _0x1ad64d, _0x564c72);
        };
        _0x4cec92[_0x4bbb('0x29')] = function (_0xc307ae, _0x50ab41, _0x3fd84a) {
            return _0xc307ae(_0x50ab41, _0x3fd84a);
        };
        _0x4cec92[_0x4bbb('0x2a')] = _0x4bbb('0x2b');
        var _0x4e3e5d = this, _0x18994d = _0x4e3e5d[_0x4bbb('0x2c')], _0x241f9c = _0x4e3e5d[_0x4bbb('0x2d')]['_c'] || _0x18994d;
        return _0x4cec92[_0x4bbb('0x0')](_0x241f9c, _0x4cec92[_0x4bbb('0x1')], [_0x4cec92[_0x4bbb('0x0')](_0x241f9c, _0x4cec92[_0x4bbb('0x3')], [
                _0x4cec92[_0x4bbb('0x0')](_0x241f9c, _0x4cec92[_0x4bbb('0x5')], { 'attrs': { 'span': 0x9 } }, [_0x4cec92[_0x4bbb('0x7')](_0x241f9c, _0x4cec92[_0x4bbb('0x1')], { 'staticStyle': { 'height': _0x4cec92[_0x4bbb('0x8')] } }, [_0x4cec92[_0x4bbb('0xa')](_0x241f9c, _0x4cec92[_0x4bbb('0xb')], {
                            'ref': _0x4cec92[_0x4bbb('0xd')],
                            'attrs': {
                                'options': _0x4e3e5d[_0x4bbb('0x2e')],
                                'on-node-click': _0x4e3e5d[_0x4bbb('0x2f')],
                                'on-line-click': _0x4e3e5d[_0x4bbb('0x30')]
                            }
                        })], 0x1)]),
                _0x4cec92[_0x4bbb('0xf')](_0x241f9c, _0x4cec92[_0x4bbb('0x5')], { 'attrs': { 'span': 0x6 } }, [_0x4cec92[_0x4bbb('0xf')](_0x241f9c, _0x4cec92[_0x4bbb('0x1')], {
                        'staticStyle': {
                            'height': _0x4cec92[_0x4bbb('0x8')],
                            'border-left': _0x4cec92[_0x4bbb('0x10')],
                            'border-right': _0x4cec92[_0x4bbb('0x10')],
                            'padding': _0x4cec92[_0x4bbb('0x12')],
                            'font-size': _0x4cec92[_0x4bbb('0x14')],
                            'line-height': _0x4cec92[_0x4bbb('0x16')]
                        }
                    }, [_0x4cec92[_0x4bbb('0xa')](_0x241f9c, 'ul', [
                            _0x4cec92[_0x4bbb('0x18')](_0x241f9c, 'li', [_0x4e3e5d['_v'](_0x4cec92[_0x4bbb('0x19')])]),
                            _0x4cec92[_0x4bbb('0x18')](_0x241f9c, 'li', [_0x4e3e5d['_v'](_0x4cec92[_0x4bbb('0x1b')])]),
                            _0x4cec92[_0x4bbb('0x1d')](_0x241f9c, 'ul', [
                                _0x4cec92[_0x4bbb('0x1e')](_0x241f9c, 'li', [_0x4e3e5d['_v'](_0x4cec92[_0x4bbb('0x1f')])]),
                                _0x4cec92[_0x4bbb('0x21')](_0x241f9c, 'li', [_0x4e3e5d['_v'](_0x4cec92[_0x4bbb('0x22')])])
                            ]),
                            _0x4cec92[_0x4bbb('0x21')](_0x241f9c, 'li', [_0x4e3e5d['_v'](_0x4cec92[_0x4bbb('0x24')])]),
                            _0x4cec92[_0x4bbb('0x21')](_0x241f9c, 'li', [_0x4e3e5d['_v'](_0x4cec92[_0x4bbb('0x26')])])
                        ])])]),
                _0x4cec92[_0x4bbb('0x28')](_0x241f9c, _0x4cec92[_0x4bbb('0x5')], { 'attrs': { 'span': 0x9 } }, [_0x4cec92[_0x4bbb('0x7')](_0x241f9c, _0x4cec92[_0x4bbb('0x1')], { 'staticStyle': { 'height': _0x4cec92[_0x4bbb('0x8')] } }, [_0x4cec92[_0x4bbb('0x29')](_0x241f9c, _0x4cec92[_0x4bbb('0xb')], {
                            'ref': _0x4cec92[_0x4bbb('0x2a')],
                            'attrs': {
                                'options': _0x4e3e5d[_0x4bbb('0x31')],
                                'on-node-click': _0x4e3e5d[_0x4bbb('0x2f')],
                                'on-line-click': _0x4e3e5d[_0x4bbb('0x30')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x4bbb('0x32')] = _0x4bbb('0x33');
h[_0x4bbb('0x34')] = {};
h[_0x4bbb('0x35')] = function () {
    var _0x14a45b = { sJCnI: _0x4bbb('0x36') };
    return {
        currentCase: _0x14a45b.sJCnI,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x4bbb('0x37')] = function () {
    this.show();
};
h[_0x4bbb('0x38')] = {};
h[_0x4bbb('0x38')][_0x4bbb('0x39')] = function (_0x27a761) {
    var _0x94114c = {
        mcavf: _0x4bbb('0x3a'),
        hukaw: _0x4bbb('0x3b')
    };
    const _0x4c40f1 = this.$refs.graphRef1;
    this.resetGraph(_0x4c40f1, _0x94114c.mcavf);
    const _0x72910 = this.$refs.graphRef2;
    this.resetGraph(_0x72910, _0x94114c.hukaw);
};
h[_0x4bbb('0x38')][_0x4bbb('0x3c')] = function (_0x35c6f8, _0x272b04) {
    var _0x320939 = {
        MYpXi: _0x4bbb('0x3d'),
        thtEn: _0x4bbb('0x3e'),
        YWFwh: _0x4bbb('0x3f'),
        ZLlMp: _0x4bbb('0x40'),
        bpmZU: _0x4bbb('0x41'),
        kebid: _0x4bbb('0x42'),
        KLnjV: function (_0x50b020, _0x480f60) {
            return _0x50b020 === _0x480f60;
        },
        IbhWP: _0x4bbb('0x3b'),
        ZkTIq: _0x4bbb('0x43'),
        RzGow: _0x4bbb('0x44'),
        ThHCG: _0x4bbb('0x45'),
        yrmzC: _0x4bbb('0x46'),
        RDSlP: _0x4bbb('0x47'),
        hZFFE: _0x4bbb('0x48'),
        qZmbh: _0x4bbb('0x49'),
        LUULl: _0x4bbb('0x4a')
    };
    const _0x2a9669 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x320939.MYpXi,
                from: _0x320939.thtEn,
                max_per_width: _0x320939.YWFwh,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x320939.ZLlMp,
        defaultNodeColor: _0x320939.bpmZU
    };
    _0x2a9669.layouts[0x0].from = _0x320939.kebid, _0x2a9669.layouts[0x0].min_per_width = 0x46, _0x2a9669.layouts[0x0].max_per_width = 0xc8, _0x2a9669.layouts[0x0].min_per_height = 0xc8, _0x2a9669.layouts[0x0].max_per_height = 0x190, _0x2a9669.defaultNodeWidth = 0x1e, _0x2a9669.defaultNodeHeight = 0x64, _0x2a9669.defaultJunctionPoint = 'tb';
    let _0x21ea43, _0x1b23a3, _0x3259e2;
    _0x320939.KLnjV(_0x272b04, _0x320939.IbhWP) && (_0x21ea43 = !0x0, _0x1b23a3 = !0x1, _0x3259e2 = _0x320939.ZkTIq);
    const _0x4e1a65 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x320939.RzGow
            },
            {
                id: _0x320939.ThHCG,
                text: _0x320939.ThHCG
            },
            {
                id: _0x320939.yrmzC,
                text: _0x320939.yrmzC,
                expandHolderPosition: _0x320939.kebid
            },
            {
                id: _0x320939.RDSlP,
                text: _0x320939.RDSlP
            },
            {
                id: _0x320939.hZFFE,
                text: _0x320939.hZFFE
            },
            {
                id: _0x320939.qZmbh,
                text: _0x320939.qZmbh
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x320939.LUULl
            },
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
            },
            {
                id: 'd',
                text: 'd'
            },
            {
                id: 'e',
                text: 'e'
            }
        ],
        lines: [
            {
                from: _0x320939.ThHCG,
                to: 'a',
                showStartArrow: _0x21ea43,
                showEndArrow: _0x1b23a3,
                color: _0x3259e2
            },
            {
                from: _0x320939.yrmzC,
                to: 'a',
                showStartArrow: _0x21ea43,
                showEndArrow: _0x1b23a3,
                color: _0x3259e2
            },
            {
                from: _0x320939.RDSlP,
                to: _0x320939.yrmzC,
                showStartArrow: _0x21ea43,
                showEndArrow: _0x1b23a3,
                color: _0x3259e2
            },
            {
                from: _0x320939.hZFFE,
                to: _0x320939.yrmzC,
                showStartArrow: _0x21ea43,
                showEndArrow: _0x1b23a3,
                color: _0x3259e2
            },
            {
                from: _0x320939.qZmbh,
                to: 'a',
                showStartArrow: _0x21ea43,
                showEndArrow: _0x1b23a3,
                color: _0x3259e2
            },
            {
                from: 'a',
                to: 'b'
            },
            {
                from: 'a',
                to: 'c'
            },
            {
                from: 'c',
                to: 'c1'
            },
            {
                from: 'c',
                to: 'c2'
            },
            {
                from: 'c',
                to: 'c3'
            },
            {
                from: 'a',
                to: 'd'
            },
            {
                from: 'a',
                to: 'e'
            }
        ]
    };
    _0x35c6f8.setOptions(_0x2a9669, _0x362256 => {
        this.showSeeksGraph(_0x35c6f8, _0x4e1a65);
    });
};
h[_0x4bbb('0x38')][_0x4bbb('0x4b')] = function (_0x3c3810, _0x12b361) {
    _0x3c3810.setJsonData(_0x12b361, _0x5acbdd => {
        _0x5acbdd.focusNodeById('a');
    });
};
h[_0x4bbb('0x38')][_0x4bbb('0x2f')] = function (_0x451611, _0x192d34) {
    var _0x221150 = { hSZaC: _0x4bbb('0x4c') };
    console.log(_0x221150.hSZaC, _0x451611);
};
h[_0x4bbb('0x38')][_0x4bbb('0x30')] = function (_0x1a6f5e, _0x3cbde7, _0x415e2f) {
    var _0x3d8139 = { yaKyU: _0x4bbb('0x4d') };
    console.log(_0x3d8139.yaKyU, _0x1a6f5e);
};
var p = _0x51eec4(h, c, d, !0x1, f, null, null, null);
function f(_0x1cbe07) {
    for (let _0x461133 in n)
        this[_0x461133] = n[_0x461133];
}
const m = function () {
    return p[_0x4bbb('0x4e')];
}();
export {
    m as default
};