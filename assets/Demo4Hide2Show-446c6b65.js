
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
    'uwGFy',
    '#666666',
    'pLIop',
    '600px',
    'wThfp',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'sECDb',
    'Uhtfw',
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
    'OhTTY',
    'PxBOJ',
    'div',
    'hBXNB',
    'ynjOM',
    'el-tabs',
    'DhaqG',
    'card',
    'GuXUJ',
    'activeTabName',
    'KfdYI',
    'el-tab-pane',
    'iksgN',
    '基本信息',
    'sqDbw',
    'base',
    'vyymG',
    '关系图谱（点这里）',
    'fJIqh',
    'relation',
    'GRJeY',
    'loading',
    'yAYcF',
    'v-loading',
    'bcwoY',
    'g_loading',
    'pzgJq',
    'calc(100%)',
    'VdlKD',
    'calc(100vh\x20-\x20300px)',
    'nABVe',
    'eWoqa',
    'RelationGraph',
    'gHLRp',
    'graphRef',
    'ahJDo',
    '风险信息',
    'pYwmN',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'pNQvu',
    'mEqTY',
    'LIABX',
    '20px'
];
(function (_0x30ab3a, _0x32f179) {
    var _0x37576c = function (_0x1651d0) {
        while (--_0x1651d0) {
            _0x30ab3a['push'](_0x30ab3a['shift']());
        }
    };
    _0x37576c(++_0x32f179);
}(_0x29bc, 0x1c9));
var _0x1c61 = function (_0x1e17b7, _0x26bf62) {
    _0x1e17b7 = _0x1e17b7 - 0x0;
    var _0xa59d8b = _0x29bc[_0x1e17b7];
    return _0xa59d8b;
};
import { n as _0x797b45 } from './index-8bb9272c.js';
var n = function () {
        var _0x17e88c = {};
        _0x17e88c[_0x1c61('0x0')] = function (_0x31af8c, _0x151956, _0x3754e2, _0x18273f) {
            return _0x31af8c(_0x151956, _0x3754e2, _0x18273f);
        };
        _0x17e88c[_0x1c61('0x1')] = _0x1c61('0x2');
        _0x17e88c[_0x1c61('0x3')] = function (_0x12843d, _0x2ed526, _0xb0599a, _0x5d9ddb, _0x3afc8c) {
            return _0x12843d(_0x2ed526, _0xb0599a, _0x5d9ddb, _0x3afc8c);
        };
        _0x17e88c[_0x1c61('0x4')] = _0x1c61('0x5');
        _0x17e88c[_0x1c61('0x6')] = _0x1c61('0x7');
        _0x17e88c[_0x1c61('0x8')] = _0x1c61('0x9');
        _0x17e88c[_0x1c61('0xa')] = _0x1c61('0xb');
        _0x17e88c[_0x1c61('0xc')] = _0x1c61('0xd');
        _0x17e88c[_0x1c61('0xe')] = _0x1c61('0xf');
        _0x17e88c[_0x1c61('0x10')] = _0x1c61('0x11');
        _0x17e88c[_0x1c61('0x12')] = _0x1c61('0x13');
        _0x17e88c[_0x1c61('0x14')] = _0x1c61('0x15');
        _0x17e88c[_0x1c61('0x16')] = _0x1c61('0x17');
        _0x17e88c[_0x1c61('0x18')] = _0x1c61('0x19');
        _0x17e88c[_0x1c61('0x1a')] = _0x1c61('0x1b');
        _0x17e88c[_0x1c61('0x1c')] = _0x1c61('0x1d');
        _0x17e88c[_0x1c61('0x1e')] = function (_0x3f8124, _0x586510, _0x3156c7) {
            return _0x3f8124(_0x586510, _0x3156c7);
        };
        _0x17e88c[_0x1c61('0x1f')] = _0x1c61('0x20');
        _0x17e88c[_0x1c61('0x21')] = _0x1c61('0x22');
        _0x17e88c[_0x1c61('0x23')] = _0x1c61('0x24');
        _0x17e88c[_0x1c61('0x25')] = _0x1c61('0x26');
        var _0x4667bf = this, _0x2791c5 = _0x4667bf[_0x1c61('0x27')], _0x2aa5f2 = _0x4667bf[_0x1c61('0x28')]['_c'] || _0x2791c5;
        return _0x17e88c[_0x1c61('0x0')](_0x2aa5f2, _0x17e88c[_0x1c61('0x1')], [
            _0x4667bf['_m'](0x0),
            _0x17e88c[_0x1c61('0x3')](_0x2aa5f2, _0x17e88c[_0x1c61('0x4')], {
                'attrs': { 'type': _0x17e88c[_0x1c61('0x6')] },
                'on': { 'tab-click': _0x4667bf[_0x1c61('0x29')] },
                'model': {
                    'value': _0x4667bf[_0x1c61('0x9')],
                    'callback': function (_0x2ad54b) {
                        _0x4667bf[_0x1c61('0x9')] = _0x2ad54b;
                    },
                    'expression': _0x17e88c[_0x1c61('0x8')]
                }
            }, [
                _0x17e88c[_0x1c61('0x0')](_0x2aa5f2, _0x17e88c[_0x1c61('0xa')], {
                    'attrs': {
                        'label': _0x17e88c[_0x1c61('0xc')],
                        'name': _0x17e88c[_0x1c61('0xe')]
                    }
                }, [_0x4667bf['_v'](_0x17e88c[_0x1c61('0xc')])]),
                _0x17e88c[_0x1c61('0x0')](_0x2aa5f2, _0x17e88c[_0x1c61('0xa')], {
                    'attrs': {
                        'label': _0x17e88c[_0x1c61('0x10')],
                        'name': _0x17e88c[_0x1c61('0x12')]
                    }
                }, [_0x17e88c[_0x1c61('0x3')](_0x2aa5f2, _0x17e88c[_0x1c61('0x1')], {
                        'directives': [{
                                'name': _0x17e88c[_0x1c61('0x14')],
                                'rawName': _0x17e88c[_0x1c61('0x16')],
                                'value': _0x4667bf[_0x1c61('0x19')],
                                'expression': _0x17e88c[_0x1c61('0x18')]
                            }],
                        'staticStyle': {
                            'width': _0x17e88c[_0x1c61('0x1a')],
                            'height': _0x17e88c[_0x1c61('0x1c')]
                        }
                    }, [_0x17e88c[_0x1c61('0x1e')](_0x2aa5f2, _0x17e88c[_0x1c61('0x1f')], {
                            'ref': _0x17e88c[_0x1c61('0x21')],
                            'attrs': { 'options': _0x4667bf[_0x1c61('0x2a')] }
                        })], 0x1)]),
                _0x17e88c[_0x1c61('0x0')](_0x2aa5f2, _0x17e88c[_0x1c61('0xa')], {
                    'attrs': {
                        'label': _0x17e88c[_0x1c61('0x23')],
                        'name': _0x17e88c[_0x1c61('0x25')]
                    }
                }, [_0x4667bf['_v'](_0x17e88c[_0x1c61('0x23')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x5416a9 = {};
            _0x5416a9[_0x1c61('0x2b')] = function (_0x19fd11, _0xcacabb, _0x2427d5, _0x23b25b) {
                return _0x19fd11(_0xcacabb, _0x2427d5, _0x23b25b);
            };
            _0x5416a9[_0x1c61('0x2c')] = _0x1c61('0x2');
            _0x5416a9[_0x1c61('0x2d')] = _0x1c61('0x2e');
            _0x5416a9[_0x1c61('0x2f')] = _0x1c61('0x30');
            _0x5416a9[_0x1c61('0x31')] = _0x1c61('0x32');
            _0x5416a9[_0x1c61('0x33')] = _0x1c61('0x34');
            _0x5416a9[_0x1c61('0x35')] = function (_0x547e37, _0x500868, _0x21902c) {
                return _0x547e37(_0x500868, _0x21902c);
            };
            _0x5416a9[_0x1c61('0x36')] = _0x1c61('0x37');
            var _0x2fea95 = this, _0x34f7b5 = _0x2fea95[_0x1c61('0x27')], _0x59e46f = _0x2fea95[_0x1c61('0x28')]['_c'] || _0x34f7b5;
            return _0x5416a9[_0x1c61('0x2b')](_0x59e46f, _0x5416a9[_0x1c61('0x2c')], {
                'staticStyle': {
                    'padding': _0x5416a9[_0x1c61('0x2d')],
                    'color': _0x5416a9[_0x1c61('0x2f')],
                    'width': _0x5416a9[_0x1c61('0x31')]
                }
            }, [
                _0x2fea95['_v'](_0x5416a9[_0x1c61('0x33')]),
                _0x5416a9[_0x1c61('0x35')](_0x59e46f, _0x5416a9[_0x1c61('0x2c')], [_0x2fea95['_v'](_0x5416a9[_0x1c61('0x36')])])
            ]);
        }];
const l = {}, o = {};
l[_0x1c61('0x38')] = _0x1c61('0x39');
l[_0x1c61('0x3a')] = {};
l[_0x1c61('0x3b')] = function () {
    var _0x2b1824 = {
        LyZRh: _0x1c61('0xf'),
        biAGi: _0x1c61('0x3c'),
        SPvDh: _0x1c61('0x3d'),
        dZKtx: _0x1c61('0x3e'),
        cTtYa: _0x1c61('0x3f'),
        sXLMi: _0x1c61('0x40'),
        zcrkj: _0x1c61('0x41'),
        XWFKF: _0x1c61('0x42'),
        iAGcE: _0x1c61('0x43'),
        BSENL: _0x1c61('0x44'),
        Culkl: _0x1c61('0x45')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x2b1824.LyZRh,
        demoname: _0x2b1824.biAGi,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x2b1824.SPvDh,
                    layoutClassName: _0x2b1824.dZKtx,
                    defaultJunctionPoint: _0x2b1824.cTtYa,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x2b1824.sXLMi,
                    max_per_width: _0x2b1824.zcrkj,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x2b1824.XWFKF
            },
            defaultExpandHolderPosition: _0x2b1824.iAGcE,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x2b1824.BSENL,
            defaultNodeColor: _0x2b1824.Culkl
        }
    };
};
l[_0x1c61('0x46')] = function () {
};
l[_0x1c61('0x47')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x1c61('0x48')] = {};
l[_0x1c61('0x48')][_0x1c61('0x49')] = function () {
    var _0x556443 = {
        VtHEq: _0x1c61('0x4a'),
        qowPU: _0x1c61('0x4b'),
        zlPXl: _0x1c61('0x4c'),
        XAybL: _0x1c61('0x4d'),
        Hyloj: _0x1c61('0x4e'),
        JAogj: _0x1c61('0x4f'),
        khizg: _0x1c61('0x50'),
        MMeUl: _0x1c61('0x51'),
        OZZyN: function (_0x18adc8, _0x5585d5, _0x148fd9) {
            return _0x18adc8(_0x5585d5, _0x148fd9);
        }
    };
    const _0x26cb76 = {
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
                id: _0x556443.VtHEq,
                text: _0x556443.VtHEq
            },
            {
                id: _0x556443.qowPU,
                text: _0x556443.qowPU
            },
            {
                id: _0x556443.zlPXl,
                text: _0x556443.zlPXl
            },
            {
                id: _0x556443.XAybL,
                text: _0x556443.XAybL
            },
            {
                id: _0x556443.Hyloj,
                text: _0x556443.Hyloj
            },
            {
                id: _0x556443.JAogj,
                text: _0x556443.JAogj
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x556443.khizg,
                text: _0x556443.khizg
            },
            {
                id: _0x556443.MMeUl,
                text: _0x556443.MMeUl
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
                to: _0x556443.VtHEq
            },
            {
                from: 'b1',
                to: _0x556443.qowPU
            },
            {
                from: 'b1',
                to: _0x556443.zlPXl
            },
            {
                from: 'b1',
                to: _0x556443.XAybL
            },
            {
                from: 'b1',
                to: _0x556443.Hyloj
            },
            {
                from: 'b1',
                to: _0x556443.JAogj
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x556443.khizg
            },
            {
                from: 'b2',
                to: _0x556443.MMeUl
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
    console.log(JSON.stringify(_0x26cb76)), _0x556443.OZZyN(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x26cb76, _0x374f0b => {
            _0x374f0b.refresh();
        });
    }, 0x3e8);
};
l[_0x1c61('0x48')][_0x1c61('0x29')] = function (_0x5d0e1f, _0x19e9ed) {
    var _0x1a0b08 = {
        uAglY: _0x1c61('0x52'),
        DYrXP: function (_0x5c838b, _0x2650eb) {
            return _0x5c838b === _0x2650eb;
        },
        Osrue: _0x1c61('0x13')
    };
    console.log(_0x1a0b08.uAglY, this.activeTabName), _0x1a0b08.DYrXP(this.activeTabName, _0x1a0b08.Osrue) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x797b45(l, n, d, !0x1, c, null, null, null);
function c(_0x17b29d) {
    for (let _0x54b107 in o)
        this[_0x54b107] = o[_0x54b107];
}
const m = function () {
    return s[_0x1c61('0x53')];
}();
export {
    m as default
};