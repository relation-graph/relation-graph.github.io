
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x29bc = [
    'KfdYI',
    'iksgN',
    'RelationGraph',
    'sqDbw',
    'graphRef1',
    'kHiZH',
    'XtIQa',
    '#efefef\x20solid\x201px',
    'YTyAY',
    '15px',
    'Mbcwo',
    '12px',
    'pzgJq',
    '\x20原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'VdlKD',
    'BVeVD',
    '\x20如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'oqaIR',
    'pnjuE',
    '\x20showStartArrow=true',
    'JDoKM',
    '\x20showEndArrow=false',
    'wmNDu',
    'lUXJx',
    '\x20以此来让上方线条看起来是反向展示。',
    'YKgpN',
    'TmEqT',
    '\x20最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据需求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。\x20',
    'ELIAB',
    'Fyayp',
    'sECDb',
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
    'dreHb',
    'XOhTT',
    'div',
    'BOJgL',
    'el-row',
    'hBXNB',
    'ynjOM',
    'el-col',
    'haqGh',
    'UJxsF',
    'calc(100vh\x20-\x20100px)'
];
(function (_0x3803a4, _0x608444) {
    var _0x428da5 = function (_0x5ee0ed) {
        while (--_0x5ee0ed) {
            _0x3803a4['push'](_0x3803a4['shift']());
        }
    };
    _0x428da5(++_0x608444);
}(_0x29bc, 0x1c9));
var _0x1c61 = function (_0x3a7051, _0x1b3e79) {
    _0x3a7051 = _0x3a7051 - 0x0;
    var _0x4adb81 = _0x29bc[_0x3a7051];
    return _0x4adb81;
};
import { n as _0x49eed0 } from './index-a76d1c04.js';
var c = function () {
        var _0x1627a7 = {};
        _0x1627a7[_0x1c61('0x0')] = function (_0x1f29bd, _0x842d6f, _0x16341a, _0x16a039) {
            return _0x1f29bd(_0x842d6f, _0x16341a, _0x16a039);
        };
        _0x1627a7[_0x1c61('0x1')] = _0x1c61('0x2');
        _0x1627a7[_0x1c61('0x3')] = _0x1c61('0x4');
        _0x1627a7[_0x1c61('0x5')] = function (_0x30ef6e, _0x28e60a, _0x3df9e4, _0x6803d6) {
            return _0x30ef6e(_0x28e60a, _0x3df9e4, _0x6803d6);
        };
        _0x1627a7[_0x1c61('0x6')] = _0x1c61('0x7');
        _0x1627a7[_0x1c61('0x8')] = function (_0x151956, _0x3754e2, _0x18273f, _0x4989f9, _0xc81b64) {
            return _0x151956(_0x3754e2, _0x18273f, _0x4989f9, _0xc81b64);
        };
        _0x1627a7[_0x1c61('0x9')] = _0x1c61('0xa');
        _0x1627a7[_0x1c61('0xb')] = function (_0xb0599a, _0x5d9ddb, _0x3afc8c) {
            return _0xb0599a(_0x5d9ddb, _0x3afc8c);
        };
        _0x1627a7[_0x1c61('0xc')] = _0x1c61('0xd');
        _0x1627a7[_0x1c61('0xe')] = _0x1c61('0xf');
        _0x1627a7[_0x1c61('0x10')] = function (_0x27041d, _0x1d93b1, _0xf8c6c4, _0x4f4d2d) {
            return _0x27041d(_0x1d93b1, _0xf8c6c4, _0x4f4d2d);
        };
        _0x1627a7[_0x1c61('0x11')] = _0x1c61('0x12');
        _0x1627a7[_0x1c61('0x13')] = _0x1c61('0x14');
        _0x1627a7[_0x1c61('0x15')] = _0x1c61('0x16');
        _0x1627a7[_0x1c61('0x17')] = _0x1c61('0x18');
        _0x1627a7[_0x1c61('0x19')] = function (_0x4c788f, _0x1b82b7) {
            return _0x4c788f(_0x1b82b7);
        };
        _0x1627a7[_0x1c61('0x1a')] = _0x1c61('0x1b');
        _0x1627a7[_0x1c61('0x1c')] = function (_0x3f2f40, _0x2450a8) {
            return _0x3f2f40(_0x2450a8);
        };
        _0x1627a7[_0x1c61('0x1d')] = _0x1c61('0x1e');
        _0x1627a7[_0x1c61('0x1f')] = _0x1c61('0x20');
        _0x1627a7[_0x1c61('0x21')] = function (_0x517081, _0x287324) {
            return _0x517081(_0x287324);
        };
        _0x1627a7[_0x1c61('0x22')] = _0x1c61('0x23');
        _0x1627a7[_0x1c61('0x24')] = function (_0x1b61d5, _0x4e7273) {
            return _0x1b61d5(_0x4e7273);
        };
        _0x1627a7[_0x1c61('0x25')] = _0x1c61('0x26');
        _0x1627a7[_0x1c61('0x27')] = function (_0x2aa5f2, _0x2263f1, _0x5c66ef, _0x4f074c) {
            return _0x2aa5f2(_0x2263f1, _0x5c66ef, _0x4f074c);
        };
        _0x1627a7[_0x1c61('0x28')] = function (_0x583662, _0x25eae0, _0x4658df, _0x4672e1, _0x16313e) {
            return _0x583662(_0x25eae0, _0x4658df, _0x4672e1, _0x16313e);
        };
        _0x1627a7[_0x1c61('0x29')] = _0x1c61('0x2a');
        var _0x596312 = this, _0x4db918 = _0x596312[_0x1c61('0x2b')], _0x1889ed = _0x596312[_0x1c61('0x2c')]['_c'] || _0x4db918;
        return _0x1627a7[_0x1c61('0x0')](_0x1889ed, _0x1627a7[_0x1c61('0x1')], [_0x1627a7[_0x1c61('0x0')](_0x1889ed, _0x1627a7[_0x1c61('0x3')], [
                _0x1627a7[_0x1c61('0x5')](_0x1889ed, _0x1627a7[_0x1c61('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x1627a7[_0x1c61('0x8')](_0x1889ed, _0x1627a7[_0x1c61('0x1')], { 'staticStyle': { 'height': _0x1627a7[_0x1c61('0x9')] } }, [_0x1627a7[_0x1c61('0xb')](_0x1889ed, _0x1627a7[_0x1c61('0xc')], {
                            'ref': _0x1627a7[_0x1c61('0xe')],
                            'attrs': {
                                'options': _0x596312[_0x1c61('0x2d')],
                                'on-node-click': _0x596312[_0x1c61('0x2e')],
                                'on-line-click': _0x596312[_0x1c61('0x2f')]
                            }
                        })], 0x1)]),
                _0x1627a7[_0x1c61('0x10')](_0x1889ed, _0x1627a7[_0x1c61('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x1627a7[_0x1c61('0x10')](_0x1889ed, _0x1627a7[_0x1c61('0x1')], {
                        'staticStyle': {
                            'height': _0x1627a7[_0x1c61('0x9')],
                            'border-left': _0x1627a7[_0x1c61('0x11')],
                            'border-right': _0x1627a7[_0x1c61('0x11')],
                            'padding': _0x1627a7[_0x1c61('0x13')],
                            'font-size': _0x1627a7[_0x1c61('0x15')]
                        }
                    }, [
                        _0x596312['_v'](_0x1627a7[_0x1c61('0x17')]),
                        _0x1627a7[_0x1c61('0x19')](_0x1889ed, 'br'),
                        _0x596312['_v'](_0x1627a7[_0x1c61('0x1a')]),
                        _0x1627a7[_0x1c61('0x1c')](_0x1889ed, 'br'),
                        _0x596312['_v'](_0x1627a7[_0x1c61('0x1d')]),
                        _0x1627a7[_0x1c61('0x1c')](_0x1889ed, 'br'),
                        _0x596312['_v'](_0x1627a7[_0x1c61('0x1f')]),
                        _0x1627a7[_0x1c61('0x21')](_0x1889ed, 'br'),
                        _0x596312['_v'](_0x1627a7[_0x1c61('0x22')]),
                        _0x1627a7[_0x1c61('0x24')](_0x1889ed, 'br'),
                        _0x596312['_v'](_0x1627a7[_0x1c61('0x25')])
                    ])]),
                _0x1627a7[_0x1c61('0x27')](_0x1889ed, _0x1627a7[_0x1c61('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x1627a7[_0x1c61('0x28')](_0x1889ed, _0x1627a7[_0x1c61('0x1')], { 'staticStyle': { 'height': _0x1627a7[_0x1c61('0x9')] } }, [_0x1627a7[_0x1c61('0xb')](_0x1889ed, _0x1627a7[_0x1c61('0xc')], {
                            'ref': _0x1627a7[_0x1c61('0x29')],
                            'attrs': {
                                'options': _0x596312[_0x1c61('0x30')],
                                'on-node-click': _0x596312[_0x1c61('0x2e')],
                                'on-line-click': _0x596312[_0x1c61('0x2f')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, i = {};
h[_0x1c61('0x31')] = _0x1c61('0x32');
h[_0x1c61('0x33')] = {};
h[_0x1c61('0x34')] = function () {
    var _0x52b661 = { PBKxf: _0x1c61('0x35') };
    return {
        currentCase: _0x52b661.PBKxf,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x1c61('0x36')] = function () {
    this.show();
};
h[_0x1c61('0x37')] = {};
h[_0x1c61('0x37')][_0x1c61('0x38')] = function (_0x25b745) {
    var _0x42b833 = {
        PvDhv: _0x1c61('0x39'),
        KtxvL: _0x1c61('0x3a')
    };
    const _0xc9529d = this.$refs.graphRef1;
    this.resetGraph(_0xc9529d, _0x42b833.PvDhv);
    const _0x5ed560 = this.$refs.graphRef2;
    this.resetGraph(_0x5ed560, _0x42b833.KtxvL);
};
h[_0x1c61('0x37')][_0x1c61('0x3b')] = function (_0x2b1824, _0x43a00a) {
    var _0x6c47cd = {
        kjaiP: _0x1c61('0x3c'),
        TrXWF: _0x1c61('0x3d'),
        bOiAG: _0x1c61('0x3e'),
        FJBSE: _0x1c61('0x3f'),
        YqCul: _0x1c61('0x40'),
        lXDMx: _0x1c61('0x41'),
        tGjCb: function (_0x4262d0, _0xc876d4) {
            return _0x4262d0 === _0xc876d4;
        },
        MJyxJ: _0x1c61('0x3a'),
        ZylxI: _0x1c61('0x42'),
        lNTqV: _0x1c61('0x43'),
        EqRBG: _0x1c61('0x44'),
        PUjJX: _0x1c61('0x45'),
        TnqlX: _0x1c61('0x46'),
        hwLtH: _0x1c61('0x47'),
        PSMgJ: _0x1c61('0x48'),
        Rjkhi: _0x1c61('0x49')
    };
    const _0x3428c9 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x6c47cd.kjaiP,
                from: _0x6c47cd.TrXWF,
                max_per_width: _0x6c47cd.bOiAG,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x6c47cd.FJBSE,
        defaultNodeColor: _0x6c47cd.YqCul
    };
    _0x3428c9.layouts[0x0].from = _0x6c47cd.lXDMx, _0x3428c9.layouts[0x0].min_per_width = 0x46, _0x3428c9.layouts[0x0].max_per_width = 0xc8, _0x3428c9.layouts[0x0].min_per_height = 0xc8, _0x3428c9.layouts[0x0].max_per_height = 0x190, _0x3428c9.defaultNodeWidth = 0x1e, _0x3428c9.defaultNodeHeight = 0x64, _0x3428c9.defaultJunctionPoint = 'tb';
    let _0x5d6b69, _0x1a3754, _0xe2b083;
    _0x6c47cd.tGjCb(_0x43a00a, _0x6c47cd.MJyxJ) && (_0x5d6b69 = !0x0, _0x1a3754 = !0x1, _0xe2b083 = _0x6c47cd.ZylxI);
    const _0x387bbe = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x6c47cd.lNTqV
            },
            {
                id: _0x6c47cd.EqRBG,
                text: _0x6c47cd.EqRBG
            },
            {
                id: _0x6c47cd.PUjJX,
                text: _0x6c47cd.PUjJX,
                expandHolderPosition: _0x6c47cd.lXDMx
            },
            {
                id: _0x6c47cd.TnqlX,
                text: _0x6c47cd.TnqlX
            },
            {
                id: _0x6c47cd.hwLtH,
                text: _0x6c47cd.hwLtH
            },
            {
                id: _0x6c47cd.PSMgJ,
                text: _0x6c47cd.PSMgJ
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x6c47cd.Rjkhi
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
                from: _0x6c47cd.EqRBG,
                to: 'a',
                showStartArrow: _0x5d6b69,
                showEndArrow: _0x1a3754,
                color: _0xe2b083
            },
            {
                from: _0x6c47cd.PUjJX,
                to: 'a',
                showStartArrow: _0x5d6b69,
                showEndArrow: _0x1a3754,
                color: _0xe2b083
            },
            {
                from: _0x6c47cd.TnqlX,
                to: _0x6c47cd.PUjJX,
                showStartArrow: _0x5d6b69,
                showEndArrow: _0x1a3754,
                color: _0xe2b083
            },
            {
                from: _0x6c47cd.hwLtH,
                to: _0x6c47cd.PUjJX,
                showStartArrow: _0x5d6b69,
                showEndArrow: _0x1a3754,
                color: _0xe2b083
            },
            {
                from: _0x6c47cd.PSMgJ,
                to: 'a',
                showStartArrow: _0x5d6b69,
                showEndArrow: _0x1a3754,
                color: _0xe2b083
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
    _0x2b1824.setOptions(_0x3428c9, _0x18adc8 => {
        this.showSeeksGraph(_0x2b1824, _0x387bbe);
    });
};
h[_0x1c61('0x37')][_0x1c61('0x4a')] = function (_0x148fd9, _0x26cb76) {
    _0x148fd9.setJsonData(_0x26cb76, _0x374f0b => {
        _0x374f0b.focusNodeById('a');
    });
};
h[_0x1c61('0x37')][_0x1c61('0x2e')] = function (_0x5d0e1f, _0x19e9ed) {
    var _0x1a0b08 = { NzaHo: _0x1c61('0x4b') };
    console.log(_0x1a0b08.NzaHo, _0x5d0e1f);
};
h[_0x1c61('0x37')][_0x1c61('0x2f')] = function (_0x2650eb, _0x270df8, _0x17b29d) {
    var _0x54b107 = { lYfvS: _0x1c61('0x4c') };
    console.log(_0x54b107.lYfvS, _0x2650eb);
};
var p = _0x49eed0(h, c, d, !0x1, f, null, null, null);
function f(_0x4394bb) {
    for (let _0x1d9b57 in i)
        this[_0x1d9b57] = i[_0x1d9b57];
}
const u = function () {
    return p[_0x1c61('0x4d')];
}();
export {
    u as default
};