
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1c2b = [
    'umLfH',
    'loading',
    'pgjpX',
    'v-loading',
    'ediwD',
    'g_loading',
    'FGAYg',
    'calc(100%)',
    'FPdTs',
    'calc(100vh\x20-\x20300px)',
    'xuvon',
    'EmcKi',
    'RelationGraph',
    'bXstC',
    'graphRef',
    'ZIBWR',
    '风险信息',
    'iEyrL',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'NaJJP',
    'pSmRJ',
    'JfDNL',
    '20px',
    'tqLRh',
    '#666666',
    'aMgPK',
    '600px',
    'nMDCj',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'DXoTm',
    'ZzQoj',
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
    'KHfNQ',
    'hAiaT',
    'div',
    'kIJYS',
    'SqJmc',
    'el-tabs',
    'fFmSo',
    'card',
    'qyFGO',
    'activeTabName',
    'PMuST',
    'el-tab-pane',
    'pBslK',
    '基本信息',
    'qyIoC',
    'base',
    'TAraz',
    '关系图谱（点这里）',
    'vYBYG',
    'relation',
    'oatRo'
];
(function (_0x361d0c, _0x481786) {
    var _0x5a7d05 = function (_0x57fd3d) {
        while (--_0x57fd3d) {
            _0x361d0c['push'](_0x361d0c['shift']());
        }
    };
    _0x5a7d05(++_0x481786);
}(_0x1c2b, 0xea));
var _0x3f0a = function (_0x518c3a, _0x41a850) {
    _0x518c3a = _0x518c3a - 0x0;
    var _0x23718c = _0x1c2b[_0x518c3a];
    return _0x23718c;
};
import { n as _0x55efac } from './index-302e3447.js';
var n = function () {
        var _0x52a536 = {};
        _0x52a536[_0x3f0a('0x0')] = function (_0x461923, _0xec06a2, _0x40657f, _0x28647e) {
            return _0x461923(_0xec06a2, _0x40657f, _0x28647e);
        };
        _0x52a536[_0x3f0a('0x1')] = _0x3f0a('0x2');
        _0x52a536[_0x3f0a('0x3')] = function (_0x11d66b, _0x3f4875, _0x2ee4a7, _0x95edec, _0xf35c80) {
            return _0x11d66b(_0x3f4875, _0x2ee4a7, _0x95edec, _0xf35c80);
        };
        _0x52a536[_0x3f0a('0x4')] = _0x3f0a('0x5');
        _0x52a536[_0x3f0a('0x6')] = _0x3f0a('0x7');
        _0x52a536[_0x3f0a('0x8')] = _0x3f0a('0x9');
        _0x52a536[_0x3f0a('0xa')] = _0x3f0a('0xb');
        _0x52a536[_0x3f0a('0xc')] = _0x3f0a('0xd');
        _0x52a536[_0x3f0a('0xe')] = _0x3f0a('0xf');
        _0x52a536[_0x3f0a('0x10')] = _0x3f0a('0x11');
        _0x52a536[_0x3f0a('0x12')] = _0x3f0a('0x13');
        _0x52a536[_0x3f0a('0x14')] = function (_0x43ede3, _0x132681, _0x11b866, _0x34c9db, _0xd7c386) {
            return _0x43ede3(_0x132681, _0x11b866, _0x34c9db, _0xd7c386);
        };
        _0x52a536[_0x3f0a('0x15')] = _0x3f0a('0x16');
        _0x52a536[_0x3f0a('0x17')] = _0x3f0a('0x18');
        _0x52a536[_0x3f0a('0x19')] = _0x3f0a('0x1a');
        _0x52a536[_0x3f0a('0x1b')] = _0x3f0a('0x1c');
        _0x52a536[_0x3f0a('0x1d')] = _0x3f0a('0x1e');
        _0x52a536[_0x3f0a('0x1f')] = function (_0x44d402, _0x271d29, _0x450e88) {
            return _0x44d402(_0x271d29, _0x450e88);
        };
        _0x52a536[_0x3f0a('0x20')] = _0x3f0a('0x21');
        _0x52a536[_0x3f0a('0x22')] = _0x3f0a('0x23');
        _0x52a536[_0x3f0a('0x24')] = _0x3f0a('0x25');
        _0x52a536[_0x3f0a('0x26')] = _0x3f0a('0x27');
        var _0x3728b9 = this, _0x1029fb = _0x3728b9[_0x3f0a('0x28')], _0x25ebfc = _0x3728b9[_0x3f0a('0x29')]['_c'] || _0x1029fb;
        return _0x52a536[_0x3f0a('0x0')](_0x25ebfc, _0x52a536[_0x3f0a('0x1')], [
            _0x3728b9['_m'](0x0),
            _0x52a536[_0x3f0a('0x3')](_0x25ebfc, _0x52a536[_0x3f0a('0x4')], {
                'attrs': { 'type': _0x52a536[_0x3f0a('0x6')] },
                'on': { 'tab-click': _0x3728b9[_0x3f0a('0x2a')] },
                'model': {
                    'value': _0x3728b9[_0x3f0a('0x9')],
                    'callback': function (_0x42f84d) {
                        _0x3728b9[_0x3f0a('0x9')] = _0x42f84d;
                    },
                    'expression': _0x52a536[_0x3f0a('0x8')]
                }
            }, [
                _0x52a536[_0x3f0a('0x0')](_0x25ebfc, _0x52a536[_0x3f0a('0xa')], {
                    'attrs': {
                        'label': _0x52a536[_0x3f0a('0xc')],
                        'name': _0x52a536[_0x3f0a('0xe')]
                    }
                }, [_0x3728b9['_v'](_0x52a536[_0x3f0a('0xc')])]),
                _0x52a536[_0x3f0a('0x0')](_0x25ebfc, _0x52a536[_0x3f0a('0xa')], {
                    'attrs': {
                        'label': _0x52a536[_0x3f0a('0x10')],
                        'name': _0x52a536[_0x3f0a('0x12')]
                    }
                }, [_0x52a536[_0x3f0a('0x14')](_0x25ebfc, _0x52a536[_0x3f0a('0x1')], {
                        'directives': [{
                                'name': _0x52a536[_0x3f0a('0x15')],
                                'rawName': _0x52a536[_0x3f0a('0x17')],
                                'value': _0x3728b9[_0x3f0a('0x1a')],
                                'expression': _0x52a536[_0x3f0a('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x52a536[_0x3f0a('0x1b')],
                            'height': _0x52a536[_0x3f0a('0x1d')]
                        }
                    }, [_0x52a536[_0x3f0a('0x1f')](_0x25ebfc, _0x52a536[_0x3f0a('0x20')], {
                            'ref': _0x52a536[_0x3f0a('0x22')],
                            'attrs': { 'options': _0x3728b9[_0x3f0a('0x2b')] }
                        })], 0x1)]),
                _0x52a536[_0x3f0a('0x0')](_0x25ebfc, _0x52a536[_0x3f0a('0xa')], {
                    'attrs': {
                        'label': _0x52a536[_0x3f0a('0x24')],
                        'name': _0x52a536[_0x3f0a('0x26')]
                    }
                }, [_0x3728b9['_v'](_0x52a536[_0x3f0a('0x24')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0xf2ef00 = {};
            _0xf2ef00[_0x3f0a('0x2c')] = function (_0xcc6467, _0x391073, _0x5cdcb, _0x1873bc) {
                return _0xcc6467(_0x391073, _0x5cdcb, _0x1873bc);
            };
            _0xf2ef00[_0x3f0a('0x2d')] = _0x3f0a('0x2');
            _0xf2ef00[_0x3f0a('0x2e')] = _0x3f0a('0x2f');
            _0xf2ef00[_0x3f0a('0x30')] = _0x3f0a('0x31');
            _0xf2ef00[_0x3f0a('0x32')] = _0x3f0a('0x33');
            _0xf2ef00[_0x3f0a('0x34')] = _0x3f0a('0x35');
            _0xf2ef00[_0x3f0a('0x36')] = function (_0x5b6e57, _0x29f75f, _0x46d946) {
                return _0x5b6e57(_0x29f75f, _0x46d946);
            };
            _0xf2ef00[_0x3f0a('0x37')] = _0x3f0a('0x38');
            var _0x32f90d = this, _0x52fef9 = _0x32f90d[_0x3f0a('0x28')], _0x3302e5 = _0x32f90d[_0x3f0a('0x29')]['_c'] || _0x52fef9;
            return _0xf2ef00[_0x3f0a('0x2c')](_0x3302e5, _0xf2ef00[_0x3f0a('0x2d')], {
                'staticStyle': {
                    'padding': _0xf2ef00[_0x3f0a('0x2e')],
                    'color': _0xf2ef00[_0x3f0a('0x30')],
                    'width': _0xf2ef00[_0x3f0a('0x32')]
                }
            }, [
                _0x32f90d['_v'](_0xf2ef00[_0x3f0a('0x34')]),
                _0xf2ef00[_0x3f0a('0x36')](_0x3302e5, _0xf2ef00[_0x3f0a('0x2d')], [_0x32f90d['_v'](_0xf2ef00[_0x3f0a('0x37')])])
            ]);
        }];
const l = {}, o = {};
l[_0x3f0a('0x39')] = _0x3f0a('0x3a');
l[_0x3f0a('0x3b')] = {};
l[_0x3f0a('0x3c')] = function () {
    var _0x918aa2 = {
        KEbAl: _0x3f0a('0xf'),
        IUCiU: _0x3f0a('0x3d'),
        ZTcuL: _0x3f0a('0x3e'),
        TRytc: _0x3f0a('0x3f'),
        ruUEE: _0x3f0a('0x40'),
        ObUWz: _0x3f0a('0x41'),
        uckiY: _0x3f0a('0x42'),
        lSNhl: _0x3f0a('0x43'),
        vVAqn: _0x3f0a('0x44'),
        jJsuo: _0x3f0a('0x45'),
        uNikK: _0x3f0a('0x46')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x918aa2.KEbAl,
        demoname: _0x918aa2.IUCiU,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x918aa2.ZTcuL,
                    layoutClassName: _0x918aa2.TRytc,
                    defaultJunctionPoint: _0x918aa2.ruUEE,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x918aa2.ObUWz,
                    max_per_width: _0x918aa2.uckiY,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x918aa2.lSNhl
            },
            defaultExpandHolderPosition: _0x918aa2.vVAqn,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x918aa2.jJsuo,
            defaultNodeColor: _0x918aa2.uNikK
        }
    };
};
l[_0x3f0a('0x47')] = function () {
};
l[_0x3f0a('0x48')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x3f0a('0x49')] = {};
l[_0x3f0a('0x49')][_0x3f0a('0x4a')] = function () {
    var _0x17ec50 = {
        puNpl: _0x3f0a('0x4b'),
        mBWej: _0x3f0a('0x4c'),
        fNlZu: _0x3f0a('0x4d'),
        twXOR: _0x3f0a('0x4e'),
        EUaHz: _0x3f0a('0x4f'),
        FHbne: _0x3f0a('0x50'),
        BOVGO: _0x3f0a('0x51'),
        UTxyV: _0x3f0a('0x52'),
        JJVDH: function (_0x2f0927, _0x2ae225, _0x2dfadc) {
            return _0x2f0927(_0x2ae225, _0x2dfadc);
        }
    };
    const _0x461876 = {
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
                id: _0x17ec50.puNpl,
                text: _0x17ec50.puNpl
            },
            {
                id: _0x17ec50.mBWej,
                text: _0x17ec50.mBWej
            },
            {
                id: _0x17ec50.fNlZu,
                text: _0x17ec50.fNlZu
            },
            {
                id: _0x17ec50.twXOR,
                text: _0x17ec50.twXOR
            },
            {
                id: _0x17ec50.EUaHz,
                text: _0x17ec50.EUaHz
            },
            {
                id: _0x17ec50.FHbne,
                text: _0x17ec50.FHbne
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x17ec50.BOVGO,
                text: _0x17ec50.BOVGO
            },
            {
                id: _0x17ec50.UTxyV,
                text: _0x17ec50.UTxyV
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
                to: _0x17ec50.puNpl
            },
            {
                from: 'b1',
                to: _0x17ec50.mBWej
            },
            {
                from: 'b1',
                to: _0x17ec50.fNlZu
            },
            {
                from: 'b1',
                to: _0x17ec50.twXOR
            },
            {
                from: 'b1',
                to: _0x17ec50.EUaHz
            },
            {
                from: 'b1',
                to: _0x17ec50.FHbne
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x17ec50.BOVGO
            },
            {
                from: 'b2',
                to: _0x17ec50.UTxyV
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
    console.log(JSON.stringify(_0x461876)), _0x17ec50.JJVDH(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x461876, _0x5046f0 => {
            _0x5046f0.refresh();
        });
    }, 0x3e8);
};
l[_0x3f0a('0x49')][_0x3f0a('0x2a')] = function (_0x550a6a, _0x14f6b8) {
    var _0xa06082 = {
        CdqDh: _0x3f0a('0x53'),
        nPRYt: function (_0x294651, _0xd66259) {
            return _0x294651 === _0xd66259;
        },
        ikAQf: _0x3f0a('0x13')
    };
    console.log(_0xa06082.CdqDh, this.activeTabName), _0xa06082.nPRYt(this.activeTabName, _0xa06082.ikAQf) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x55efac(l, n, d, !0x1, c, null, null, null);
function c(_0x4ac56d) {
    for (let _0x49864e in o)
        this[_0x49864e] = o[_0x49864e];
}
const m = function () {
    return s[_0x3f0a('0x54')];
}();
export {
    m as default
};