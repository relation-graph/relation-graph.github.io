
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x42f2 = [
    'exports',
    'BSilH',
    'GxkIT',
    'div',
    'wBGUn',
    'BvbqK',
    'el-tabs',
    'pLwQs',
    'card',
    'SESvg',
    'activeTabName',
    'DgIKZ',
    'el-tab-pane',
    'FLtdZ',
    '基本信息',
    'LNHDu',
    'base',
    'LkSEU',
    'MIhju',
    '关系图谱（点这里）',
    'iPUfq',
    'relation',
    'PGRxD',
    'kmZMN',
    'loading',
    'SloUt',
    'v-loading',
    'VtQiq',
    'g_loading',
    'iBkdh',
    'calc(100%)',
    'sDKqE',
    'calc(100vh\x20-\x20300px)',
    'rFUFq',
    'NLAlu',
    'RelationGraph',
    'IYmtT',
    'graphRef',
    'Hhdqn',
    'NNgmV',
    '风险信息',
    'ThgVX',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'YHlZX',
    'tnsRh',
    'mtcRh',
    '20px',
    'XVwiO',
    '#666666',
    'ZhUEv',
    '600px',
    'QhVUG',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'DdZoH',
    'Btoth',
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
    '100',
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
    'this.activeTabName:'
];
(function (_0x5f59a6, _0x497955) {
    var _0x5ceed1 = function (_0x5152cc) {
        while (--_0x5152cc) {
            _0x5f59a6['push'](_0x5f59a6['shift']());
        }
    };
    _0x5ceed1(++_0x497955);
}(_0x42f2, 0xb1));
var _0x2c09 = function (_0x582c8d, _0x937531) {
    _0x582c8d = _0x582c8d - 0x0;
    var _0x34798d = _0x42f2[_0x582c8d];
    return _0x34798d;
};
import { n as _0x5c94bc } from './index-b2490647.js';
var n = function () {
        var _0x293a45 = {};
        _0x293a45[_0x2c09('0x0')] = function (_0x50320b, _0x4bf42a, _0x36f5c7, _0x825932) {
            return _0x50320b(_0x4bf42a, _0x36f5c7, _0x825932);
        };
        _0x293a45[_0x2c09('0x1')] = _0x2c09('0x2');
        _0x293a45[_0x2c09('0x3')] = function (_0x49d182, _0x4487fc, _0x44e37a, _0x39e95d, _0x243a49) {
            return _0x49d182(_0x4487fc, _0x44e37a, _0x39e95d, _0x243a49);
        };
        _0x293a45[_0x2c09('0x4')] = _0x2c09('0x5');
        _0x293a45[_0x2c09('0x6')] = _0x2c09('0x7');
        _0x293a45[_0x2c09('0x8')] = _0x2c09('0x9');
        _0x293a45[_0x2c09('0xa')] = _0x2c09('0xb');
        _0x293a45[_0x2c09('0xc')] = _0x2c09('0xd');
        _0x293a45[_0x2c09('0xe')] = _0x2c09('0xf');
        _0x293a45[_0x2c09('0x10')] = function (_0x4bae02, _0x12737c, _0x11f8b6, _0x2f5229) {
            return _0x4bae02(_0x12737c, _0x11f8b6, _0x2f5229);
        };
        _0x293a45[_0x2c09('0x11')] = _0x2c09('0x12');
        _0x293a45[_0x2c09('0x13')] = _0x2c09('0x14');
        _0x293a45[_0x2c09('0x15')] = function (_0x1a5d8a, _0x20f642, _0x2bf2fd, _0x3967c9, _0x326e8e) {
            return _0x1a5d8a(_0x20f642, _0x2bf2fd, _0x3967c9, _0x326e8e);
        };
        _0x293a45[_0x2c09('0x16')] = _0x2c09('0x17');
        _0x293a45[_0x2c09('0x18')] = _0x2c09('0x19');
        _0x293a45[_0x2c09('0x1a')] = _0x2c09('0x1b');
        _0x293a45[_0x2c09('0x1c')] = _0x2c09('0x1d');
        _0x293a45[_0x2c09('0x1e')] = _0x2c09('0x1f');
        _0x293a45[_0x2c09('0x20')] = function (_0x33713f, _0x42a4c2, _0x34477e) {
            return _0x33713f(_0x42a4c2, _0x34477e);
        };
        _0x293a45[_0x2c09('0x21')] = _0x2c09('0x22');
        _0x293a45[_0x2c09('0x23')] = _0x2c09('0x24');
        _0x293a45[_0x2c09('0x25')] = function (_0x2d1cb8, _0x2014de, _0xc996fe, _0x433de9) {
            return _0x2d1cb8(_0x2014de, _0xc996fe, _0x433de9);
        };
        _0x293a45[_0x2c09('0x26')] = _0x2c09('0x27');
        _0x293a45[_0x2c09('0x28')] = _0x2c09('0x29');
        var _0x49c3c2 = this, _0x24f7dc = _0x49c3c2[_0x2c09('0x2a')], _0x5634bb = _0x49c3c2[_0x2c09('0x2b')]['_c'] || _0x24f7dc;
        return _0x293a45[_0x2c09('0x0')](_0x5634bb, _0x293a45[_0x2c09('0x1')], [
            _0x49c3c2['_m'](0x0),
            _0x293a45[_0x2c09('0x3')](_0x5634bb, _0x293a45[_0x2c09('0x4')], {
                'attrs': { 'type': _0x293a45[_0x2c09('0x6')] },
                'on': { 'tab-click': _0x49c3c2[_0x2c09('0x2c')] },
                'model': {
                    'value': _0x49c3c2[_0x2c09('0x9')],
                    'callback': function (_0x55653d) {
                        _0x49c3c2[_0x2c09('0x9')] = _0x55653d;
                    },
                    'expression': _0x293a45[_0x2c09('0x8')]
                }
            }, [
                _0x293a45[_0x2c09('0x0')](_0x5634bb, _0x293a45[_0x2c09('0xa')], {
                    'attrs': {
                        'label': _0x293a45[_0x2c09('0xc')],
                        'name': _0x293a45[_0x2c09('0xe')]
                    }
                }, [_0x49c3c2['_v'](_0x293a45[_0x2c09('0xc')])]),
                _0x293a45[_0x2c09('0x10')](_0x5634bb, _0x293a45[_0x2c09('0xa')], {
                    'attrs': {
                        'label': _0x293a45[_0x2c09('0x11')],
                        'name': _0x293a45[_0x2c09('0x13')]
                    }
                }, [_0x293a45[_0x2c09('0x15')](_0x5634bb, _0x293a45[_0x2c09('0x1')], {
                        'directives': [{
                                'name': _0x293a45[_0x2c09('0x16')],
                                'rawName': _0x293a45[_0x2c09('0x18')],
                                'value': _0x49c3c2[_0x2c09('0x1b')],
                                'expression': _0x293a45[_0x2c09('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0x293a45[_0x2c09('0x1c')],
                            'height': _0x293a45[_0x2c09('0x1e')]
                        }
                    }, [_0x293a45[_0x2c09('0x20')](_0x5634bb, _0x293a45[_0x2c09('0x21')], {
                            'ref': _0x293a45[_0x2c09('0x23')],
                            'attrs': { 'options': _0x49c3c2[_0x2c09('0x2d')] }
                        })], 0x1)]),
                _0x293a45[_0x2c09('0x25')](_0x5634bb, _0x293a45[_0x2c09('0xa')], {
                    'attrs': {
                        'label': _0x293a45[_0x2c09('0x26')],
                        'name': _0x293a45[_0x2c09('0x28')]
                    }
                }, [_0x49c3c2['_v'](_0x293a45[_0x2c09('0x26')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x74a570 = {};
            _0x74a570[_0x2c09('0x2e')] = function (_0x508d0a, _0x47e0b6, _0x308261, _0x322e7d) {
                return _0x508d0a(_0x47e0b6, _0x308261, _0x322e7d);
            };
            _0x74a570[_0x2c09('0x2f')] = _0x2c09('0x2');
            _0x74a570[_0x2c09('0x30')] = _0x2c09('0x31');
            _0x74a570[_0x2c09('0x32')] = _0x2c09('0x33');
            _0x74a570[_0x2c09('0x34')] = _0x2c09('0x35');
            _0x74a570[_0x2c09('0x36')] = _0x2c09('0x37');
            _0x74a570[_0x2c09('0x38')] = function (_0x1bcfd5, _0x4e6b27, _0x2f9b48) {
                return _0x1bcfd5(_0x4e6b27, _0x2f9b48);
            };
            _0x74a570[_0x2c09('0x39')] = _0x2c09('0x3a');
            var _0x1e90b7 = this, _0x1414b1 = _0x1e90b7[_0x2c09('0x2a')], _0x3bc608 = _0x1e90b7[_0x2c09('0x2b')]['_c'] || _0x1414b1;
            return _0x74a570[_0x2c09('0x2e')](_0x3bc608, _0x74a570[_0x2c09('0x2f')], {
                'staticStyle': {
                    'padding': _0x74a570[_0x2c09('0x30')],
                    'color': _0x74a570[_0x2c09('0x32')],
                    'width': _0x74a570[_0x2c09('0x34')]
                }
            }, [
                _0x1e90b7['_v'](_0x74a570[_0x2c09('0x36')]),
                _0x74a570[_0x2c09('0x38')](_0x3bc608, _0x74a570[_0x2c09('0x2f')], [_0x1e90b7['_v'](_0x74a570[_0x2c09('0x39')])])
            ]);
        }];
const l = {}, o = {};
l[_0x2c09('0x3b')] = _0x2c09('0x3c');
l[_0x2c09('0x3d')] = {};
l[_0x2c09('0x3e')] = function () {
    var _0x4ba689 = {
        idbMx: _0x2c09('0xf'),
        fDPEG: _0x2c09('0x3f'),
        ybpbk: _0x2c09('0x40'),
        wMhQv: _0x2c09('0x41'),
        pUpEg: _0x2c09('0x42'),
        LNDdn: _0x2c09('0x43'),
        KHeAG: _0x2c09('0x44'),
        IsSTi: _0x2c09('0x45'),
        PCHHb: _0x2c09('0x46'),
        TWKNJ: _0x2c09('0x47'),
        FGoBY: _0x2c09('0x48'),
        YipYE: _0x2c09('0x49')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x4ba689.idbMx,
        demoname: _0x4ba689.fDPEG,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x4ba689.ybpbk,
                    layoutClassName: _0x4ba689.wMhQv,
                    defaultJunctionPoint: _0x4ba689.pUpEg,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x4ba689.LNDdn,
                    max_per_width: _0x4ba689.KHeAG,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x4ba689.IsSTi
            },
            defaultExpandHolderPosition: _0x4ba689.PCHHb,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x4ba689.TWKNJ,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x4ba689.FGoBY,
            defaultNodeColor: _0x4ba689.YipYE
        }
    };
};
l[_0x2c09('0x4a')] = function () {
};
l[_0x2c09('0x4b')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x2c09('0x4c')] = {};
l[_0x2c09('0x4c')][_0x2c09('0x4d')] = function () {
    var _0x30da71 = {
        UlCCz: _0x2c09('0x4e'),
        bAyjj: _0x2c09('0x4f'),
        yeTos: _0x2c09('0x50'),
        FpcqH: _0x2c09('0x51'),
        QOvtM: _0x2c09('0x52'),
        SqefT: _0x2c09('0x53'),
        FrMcK: _0x2c09('0x54'),
        yrPkJ: _0x2c09('0x55'),
        msWEH: function (_0x3af422, _0x267e1d, _0x497b31) {
            return _0x3af422(_0x267e1d, _0x497b31);
        }
    };
    const _0xb87219 = {
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
                id: _0x30da71.UlCCz,
                text: _0x30da71.UlCCz
            },
            {
                id: _0x30da71.bAyjj,
                text: _0x30da71.bAyjj
            },
            {
                id: _0x30da71.yeTos,
                text: _0x30da71.yeTos
            },
            {
                id: _0x30da71.FpcqH,
                text: _0x30da71.FpcqH
            },
            {
                id: _0x30da71.QOvtM,
                text: _0x30da71.QOvtM
            },
            {
                id: _0x30da71.SqefT,
                text: _0x30da71.SqefT
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x30da71.FrMcK,
                text: _0x30da71.FrMcK
            },
            {
                id: _0x30da71.yrPkJ,
                text: _0x30da71.yrPkJ
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
                to: _0x30da71.UlCCz
            },
            {
                from: 'b1',
                to: _0x30da71.bAyjj
            },
            {
                from: 'b1',
                to: _0x30da71.yeTos
            },
            {
                from: 'b1',
                to: _0x30da71.FpcqH
            },
            {
                from: 'b1',
                to: _0x30da71.QOvtM
            },
            {
                from: 'b1',
                to: _0x30da71.SqefT
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x30da71.FrMcK
            },
            {
                from: 'b2',
                to: _0x30da71.yrPkJ
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
    console.log(JSON.stringify(_0xb87219)), _0x30da71.msWEH(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0xb87219, _0x3f49c9 => {
            _0x3f49c9.refresh();
        });
    }, 0x3e8);
};
l[_0x2c09('0x4c')][_0x2c09('0x2c')] = function (_0x56f30a, _0x220de9) {
    var _0x107758 = {
        NAwJo: _0x2c09('0x56'),
        OvaPJ: function (_0x32b75b, _0x8fe079) {
            return _0x32b75b === _0x8fe079;
        },
        ogeKW: _0x2c09('0x14')
    };
    console.log(_0x107758.NAwJo, this.activeTabName), _0x107758.OvaPJ(this.activeTabName, _0x107758.ogeKW) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x5c94bc(l, n, d, !0x1, c, null, null, null);
function c(_0x241706) {
    for (let _0xbecb74 in o)
        this[_0xbecb74] = o[_0xbecb74];
}
const m = function () {
    return s[_0x2c09('0x57')];
}();
export {
    m as default
};