
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1920 = [
    '_self',
    'handleClick',
    'graphOptions',
    'rsLnx',
    'YBnQO',
    'kzweJ',
    '20px',
    'boucL',
    '#666666',
    'HGacj',
    '600px',
    'pDrIi',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'wqeWD',
    'tnyzX',
    '\x20比如点击按钮A时显示图谱，你需要在点击按钮A显示图谱之后，通过this.$nextTick()调用图谱的refresh()方法来刷新一下，这样就显示正常了，请参考当前demo的代码。\x20',
    'name',
    'RelationGraphDemo',
    'components',
    'data',
    '---',
    'tree',
    'seeks-layout-center',
    'border',
    'left',
    '300',
    'M2,2\x20L10,6\x20L2,10\x20L6,6\x20L2,2',
    'right',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'created',
    'mounted',
    'methods',
    'loadGraphData',
    'b1-1',
    'b1-2',
    'b1-3',
    'b1-4',
    'b1-5',
    'b1-6',
    'b2-1',
    'b2-2',
    'this.activeTabName:',
    'exports',
    'MvWTg',
    'oIKEH',
    'div',
    'ZMsOX',
    'aPnUL',
    'el-tabs',
    'ywYYQ',
    'card',
    'AsQUQ',
    'activeTabName',
    'CPznX',
    'NJlsX',
    'el-tab-pane',
    'SgwHo',
    '基本信息',
    'TBRXq',
    'base',
    'IjEqO',
    'SokUx',
    '关系图谱（点这里）',
    'HiMtX',
    'relation',
    'noxjH',
    'UqGXA',
    'loading',
    'ElCHZ',
    'v-loading',
    'QbJUP',
    'g_loading',
    'BJRHv',
    'calc(100%)',
    'FqJzG',
    'calc(100vh\x20-\x20300px)',
    'bAjYx',
    'LGvHq',
    'RelationGraph',
    'VnQeS',
    'graphRef',
    'Ytxwg',
    'xMZVb',
    '风险信息',
    'BhrPk',
    'risk',
    '$createElement'
];
(function (_0x1642a4, _0x356068) {
    var _0x1894e5 = function (_0x1491ea) {
        while (--_0x1491ea) {
            _0x1642a4['push'](_0x1642a4['shift']());
        }
    };
    _0x1894e5(++_0x356068);
}(_0x1920, 0x18c));
var _0x5683 = function (_0x225da7, _0x1a2988) {
    _0x225da7 = _0x225da7 - 0x0;
    var _0x185785 = _0x1920[_0x225da7];
    return _0x185785;
};
import { n as _0x2adf80 } from './index-a8fcf52e.js';
var n = function () {
        var _0x1c9173 = {};
        _0x1c9173[_0x5683('0x0')] = function (_0x173aeb, _0x201809, _0x30d3a3, _0x3c987b) {
            return _0x173aeb(_0x201809, _0x30d3a3, _0x3c987b);
        };
        _0x1c9173[_0x5683('0x1')] = _0x5683('0x2');
        _0x1c9173[_0x5683('0x3')] = function (_0x3cd27c, _0xcc618e, _0x17bdc7, _0x41ef85, _0x51f54c) {
            return _0x3cd27c(_0xcc618e, _0x17bdc7, _0x41ef85, _0x51f54c);
        };
        _0x1c9173[_0x5683('0x4')] = _0x5683('0x5');
        _0x1c9173[_0x5683('0x6')] = _0x5683('0x7');
        _0x1c9173[_0x5683('0x8')] = _0x5683('0x9');
        _0x1c9173[_0x5683('0xa')] = function (_0x235356, _0x23435e, _0x241b38, _0x3821f7) {
            return _0x235356(_0x23435e, _0x241b38, _0x3821f7);
        };
        _0x1c9173[_0x5683('0xb')] = _0x5683('0xc');
        _0x1c9173[_0x5683('0xd')] = _0x5683('0xe');
        _0x1c9173[_0x5683('0xf')] = _0x5683('0x10');
        _0x1c9173[_0x5683('0x11')] = function (_0x46dcc6, _0x4a347e, _0x3cefc4, _0x45db06) {
            return _0x46dcc6(_0x4a347e, _0x3cefc4, _0x45db06);
        };
        _0x1c9173[_0x5683('0x12')] = _0x5683('0x13');
        _0x1c9173[_0x5683('0x14')] = _0x5683('0x15');
        _0x1c9173[_0x5683('0x16')] = function (_0x2ff514, _0x41250c, _0x2e3538, _0x191abe, _0x3d4864) {
            return _0x2ff514(_0x41250c, _0x2e3538, _0x191abe, _0x3d4864);
        };
        _0x1c9173[_0x5683('0x17')] = _0x5683('0x18');
        _0x1c9173[_0x5683('0x19')] = _0x5683('0x1a');
        _0x1c9173[_0x5683('0x1b')] = _0x5683('0x1c');
        _0x1c9173[_0x5683('0x1d')] = _0x5683('0x1e');
        _0x1c9173[_0x5683('0x1f')] = _0x5683('0x20');
        _0x1c9173[_0x5683('0x21')] = function (_0x511423, _0xb8d1f6, _0x1084ae) {
            return _0x511423(_0xb8d1f6, _0x1084ae);
        };
        _0x1c9173[_0x5683('0x22')] = _0x5683('0x23');
        _0x1c9173[_0x5683('0x24')] = _0x5683('0x25');
        _0x1c9173[_0x5683('0x26')] = function (_0x222bef, _0x1c8ab2, _0x1f6f67, _0x2d411f) {
            return _0x222bef(_0x1c8ab2, _0x1f6f67, _0x2d411f);
        };
        _0x1c9173[_0x5683('0x27')] = _0x5683('0x28');
        _0x1c9173[_0x5683('0x29')] = _0x5683('0x2a');
        var _0x31f0b3 = this, _0x4a4569 = _0x31f0b3[_0x5683('0x2b')], _0x11d21c = _0x31f0b3[_0x5683('0x2c')]['_c'] || _0x4a4569;
        return _0x1c9173[_0x5683('0x0')](_0x11d21c, _0x1c9173[_0x5683('0x1')], [
            _0x31f0b3['_m'](0x0),
            _0x1c9173[_0x5683('0x3')](_0x11d21c, _0x1c9173[_0x5683('0x4')], {
                'attrs': { 'type': _0x1c9173[_0x5683('0x6')] },
                'on': { 'tab-click': _0x31f0b3[_0x5683('0x2d')] },
                'model': {
                    'value': _0x31f0b3[_0x5683('0x9')],
                    'callback': function (_0x527655) {
                        _0x31f0b3[_0x5683('0x9')] = _0x527655;
                    },
                    'expression': _0x1c9173[_0x5683('0x8')]
                }
            }, [
                _0x1c9173[_0x5683('0xa')](_0x11d21c, _0x1c9173[_0x5683('0xb')], {
                    'attrs': {
                        'label': _0x1c9173[_0x5683('0xd')],
                        'name': _0x1c9173[_0x5683('0xf')]
                    }
                }, [_0x31f0b3['_v'](_0x1c9173[_0x5683('0xd')])]),
                _0x1c9173[_0x5683('0x11')](_0x11d21c, _0x1c9173[_0x5683('0xb')], {
                    'attrs': {
                        'label': _0x1c9173[_0x5683('0x12')],
                        'name': _0x1c9173[_0x5683('0x14')]
                    }
                }, [_0x1c9173[_0x5683('0x16')](_0x11d21c, _0x1c9173[_0x5683('0x1')], {
                        'directives': [{
                                'name': _0x1c9173[_0x5683('0x17')],
                                'rawName': _0x1c9173[_0x5683('0x19')],
                                'value': _0x31f0b3[_0x5683('0x1c')],
                                'expression': _0x1c9173[_0x5683('0x1b')]
                            }],
                        'staticStyle': {
                            'width': _0x1c9173[_0x5683('0x1d')],
                            'height': _0x1c9173[_0x5683('0x1f')]
                        }
                    }, [_0x1c9173[_0x5683('0x21')](_0x11d21c, _0x1c9173[_0x5683('0x22')], {
                            'ref': _0x1c9173[_0x5683('0x24')],
                            'attrs': { 'options': _0x31f0b3[_0x5683('0x2e')] }
                        })], 0x1)]),
                _0x1c9173[_0x5683('0x26')](_0x11d21c, _0x1c9173[_0x5683('0xb')], {
                    'attrs': {
                        'label': _0x1c9173[_0x5683('0x27')],
                        'name': _0x1c9173[_0x5683('0x29')]
                    }
                }, [_0x31f0b3['_v'](_0x1c9173[_0x5683('0x27')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x271226 = {};
            _0x271226[_0x5683('0x2f')] = function (_0x52a415, _0x4bf11c, _0x2f7329, _0x102b43) {
                return _0x52a415(_0x4bf11c, _0x2f7329, _0x102b43);
            };
            _0x271226[_0x5683('0x30')] = _0x5683('0x2');
            _0x271226[_0x5683('0x31')] = _0x5683('0x32');
            _0x271226[_0x5683('0x33')] = _0x5683('0x34');
            _0x271226[_0x5683('0x35')] = _0x5683('0x36');
            _0x271226[_0x5683('0x37')] = _0x5683('0x38');
            _0x271226[_0x5683('0x39')] = function (_0x730f91, _0x4c2725, _0x430a72) {
                return _0x730f91(_0x4c2725, _0x430a72);
            };
            _0x271226[_0x5683('0x3a')] = _0x5683('0x3b');
            var _0x4ca6e1 = this, _0x3adbea = _0x4ca6e1[_0x5683('0x2b')], _0x259006 = _0x4ca6e1[_0x5683('0x2c')]['_c'] || _0x3adbea;
            return _0x271226[_0x5683('0x2f')](_0x259006, _0x271226[_0x5683('0x30')], {
                'staticStyle': {
                    'padding': _0x271226[_0x5683('0x31')],
                    'color': _0x271226[_0x5683('0x33')],
                    'width': _0x271226[_0x5683('0x35')]
                }
            }, [
                _0x4ca6e1['_v'](_0x271226[_0x5683('0x37')]),
                _0x271226[_0x5683('0x39')](_0x259006, _0x271226[_0x5683('0x30')], [_0x4ca6e1['_v'](_0x271226[_0x5683('0x3a')])])
            ]);
        }];
const l = {}, o = {};
l[_0x5683('0x3c')] = _0x5683('0x3d');
l[_0x5683('0x3e')] = {};
l[_0x5683('0x3f')] = function () {
    var _0x1ae507 = {
        GtIYD: _0x5683('0x10'),
        btdZf: _0x5683('0x40'),
        nVQVK: _0x5683('0x41'),
        TJMou: _0x5683('0x42'),
        XJPni: _0x5683('0x43'),
        lGkJl: _0x5683('0x44'),
        zVTWJ: _0x5683('0x45'),
        KTcQl: _0x5683('0x46'),
        xUckm: _0x5683('0x47'),
        hOHcB: _0x5683('0x48'),
        mEWkY: _0x5683('0x49')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x1ae507.GtIYD,
        demoname: _0x1ae507.btdZf,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x1ae507.nVQVK,
                    layoutClassName: _0x1ae507.TJMou,
                    defaultJunctionPoint: _0x1ae507.XJPni,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x1ae507.lGkJl,
                    max_per_width: _0x1ae507.zVTWJ,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x1ae507.KTcQl
            },
            defaultExpandHolderPosition: _0x1ae507.xUckm,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x1ae507.hOHcB,
            defaultNodeColor: _0x1ae507.mEWkY
        }
    };
};
l[_0x5683('0x4a')] = function () {
};
l[_0x5683('0x4b')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x5683('0x4c')] = {};
l[_0x5683('0x4c')][_0x5683('0x4d')] = function () {
    var _0x5e5595 = {
        PnRvA: _0x5683('0x4e'),
        NfQfo: _0x5683('0x4f'),
        oLPtS: _0x5683('0x50'),
        UaKNR: _0x5683('0x51'),
        jUtfL: _0x5683('0x52'),
        ixPPR: _0x5683('0x53'),
        sQkem: _0x5683('0x54'),
        eBKpW: _0x5683('0x55'),
        YKaqb: function (_0x17dfe1, _0x254053, _0x47097d) {
            return _0x17dfe1(_0x254053, _0x47097d);
        }
    };
    const _0x29f72d = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'a'
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'b1',
                text: 'b1'
            },
            {
                id: _0x5e5595.PnRvA,
                text: _0x5e5595.PnRvA
            },
            {
                id: _0x5e5595.NfQfo,
                text: _0x5e5595.NfQfo
            },
            {
                id: _0x5e5595.oLPtS,
                text: _0x5e5595.oLPtS
            },
            {
                id: _0x5e5595.UaKNR,
                text: _0x5e5595.UaKNR
            },
            {
                id: _0x5e5595.jUtfL,
                text: _0x5e5595.jUtfL
            },
            {
                id: _0x5e5595.ixPPR,
                text: _0x5e5595.ixPPR
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x5e5595.sQkem,
                text: _0x5e5595.sQkem
            },
            {
                id: _0x5e5595.eBKpW,
                text: _0x5e5595.eBKpW
            },
            {
                id: 'c',
                text: 'c'
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
            }
        ],
        lines: [
            {
                from: 'a',
                to: 'b'
            },
            {
                from: 'b',
                to: 'b1'
            },
            {
                from: 'b1',
                to: _0x5e5595.PnRvA
            },
            {
                from: 'b1',
                to: _0x5e5595.NfQfo
            },
            {
                from: 'b1',
                to: _0x5e5595.oLPtS
            },
            {
                from: 'b1',
                to: _0x5e5595.UaKNR
            },
            {
                from: 'b1',
                to: _0x5e5595.jUtfL
            },
            {
                from: 'b1',
                to: _0x5e5595.ixPPR
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x5e5595.sQkem
            },
            {
                from: 'b2',
                to: _0x5e5595.eBKpW
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
            }
        ]
    };
    console.log(JSON.stringify(_0x29f72d)), _0x5e5595.YKaqb(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x29f72d, _0x115b87 => {
            _0x115b87.refresh();
        });
    }, 0x3e8);
};
l[_0x5683('0x4c')][_0x5683('0x2d')] = function (_0x3cbab9, _0x513743) {
    var _0x3292ea = {
        kwYng: _0x5683('0x56'),
        vsQHs: function (_0x48fc48, _0x40f365) {
            return _0x48fc48 === _0x40f365;
        },
        hUrNa: _0x5683('0x15')
    };
    console.log(_0x3292ea.kwYng, this.activeTabName), _0x3292ea.vsQHs(this.activeTabName, _0x3292ea.hUrNa) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x2adf80(l, n, d, !0x1, c, null, null, null);
function c(_0x29d835) {
    for (let _0x283090 in o)
        this[_0x283090] = o[_0x283090];
}
const m = function () {
    return s[_0x5683('0x57')];
}();
export {
    m as default
};