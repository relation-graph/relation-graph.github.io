
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x6085 = [
    'nYPql',
    'graphRef',
    'acVWb',
    '风险信息',
    'QCebB',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'Xbsvy',
    'uTpcm',
    'pDsgP',
    '20px',
    'eFWJv',
    '#666666',
    'iihlg',
    '600px',
    'IOtpy',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'daBRF',
    'MfIEH',
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
    'this.activeTabName:',
    'exports',
    'dvpJl',
    'fEwQd',
    'div',
    'eiqcw',
    'HaaSO',
    'el-tabs',
    'rntEL',
    'card',
    'hQtsA',
    'activeTabName',
    'xoCgX',
    'el-tab-pane',
    'IILOk',
    '基本信息',
    'SgUbf',
    'base',
    'qzXDP',
    '关系图谱（点这里）',
    'iDels',
    'relation',
    'hhMPS',
    'Nfadh',
    'loading',
    'TryXq',
    'v-loading',
    'CnRLe',
    'g_loading',
    'GlBPs',
    'calc(100%)',
    'aqmPm',
    'calc(100vh\x20-\x20300px)',
    'mpVtO',
    'WXaWw',
    'RelationGraph'
];
(function (_0x4e6dac, _0x2837d3) {
    var _0x32c38c = function (_0x1df981) {
        while (--_0x1df981) {
            _0x4e6dac['push'](_0x4e6dac['shift']());
        }
    };
    _0x32c38c(++_0x2837d3);
}(_0x6085, 0x18c));
var _0x30c6 = function (_0x2fbfe7, _0x56556) {
    _0x2fbfe7 = _0x2fbfe7 - 0x0;
    var _0x4c4931 = _0x6085[_0x2fbfe7];
    return _0x4c4931;
};
import { n as _0x587e42 } from './index-a76d1c04.js';
var n = function () {
        var _0x5cfeb7 = {};
        _0x5cfeb7[_0x30c6('0x0')] = function (_0x41aaaf, _0x3dc222, _0x425fb6, _0x4b5eb0) {
            return _0x41aaaf(_0x3dc222, _0x425fb6, _0x4b5eb0);
        };
        _0x5cfeb7[_0x30c6('0x1')] = _0x30c6('0x2');
        _0x5cfeb7[_0x30c6('0x3')] = function (_0x32e3b4, _0x2dafe8, _0x2ce83d, _0x438c80, _0x4147f6) {
            return _0x32e3b4(_0x2dafe8, _0x2ce83d, _0x438c80, _0x4147f6);
        };
        _0x5cfeb7[_0x30c6('0x4')] = _0x30c6('0x5');
        _0x5cfeb7[_0x30c6('0x6')] = _0x30c6('0x7');
        _0x5cfeb7[_0x30c6('0x8')] = _0x30c6('0x9');
        _0x5cfeb7[_0x30c6('0xa')] = _0x30c6('0xb');
        _0x5cfeb7[_0x30c6('0xc')] = _0x30c6('0xd');
        _0x5cfeb7[_0x30c6('0xe')] = _0x30c6('0xf');
        _0x5cfeb7[_0x30c6('0x10')] = _0x30c6('0x11');
        _0x5cfeb7[_0x30c6('0x12')] = _0x30c6('0x13');
        _0x5cfeb7[_0x30c6('0x14')] = function (_0x44ab60, _0x14a15e, _0x5bee26, _0x3b3c1b, _0x5cc75f) {
            return _0x44ab60(_0x14a15e, _0x5bee26, _0x3b3c1b, _0x5cc75f);
        };
        _0x5cfeb7[_0x30c6('0x15')] = _0x30c6('0x16');
        _0x5cfeb7[_0x30c6('0x17')] = _0x30c6('0x18');
        _0x5cfeb7[_0x30c6('0x19')] = _0x30c6('0x1a');
        _0x5cfeb7[_0x30c6('0x1b')] = _0x30c6('0x1c');
        _0x5cfeb7[_0x30c6('0x1d')] = _0x30c6('0x1e');
        _0x5cfeb7[_0x30c6('0x1f')] = function (_0x54f999, _0x468335, _0xa25b39) {
            return _0x54f999(_0x468335, _0xa25b39);
        };
        _0x5cfeb7[_0x30c6('0x20')] = _0x30c6('0x21');
        _0x5cfeb7[_0x30c6('0x22')] = _0x30c6('0x23');
        _0x5cfeb7[_0x30c6('0x24')] = _0x30c6('0x25');
        _0x5cfeb7[_0x30c6('0x26')] = _0x30c6('0x27');
        var _0x585fb4 = this, _0x513e09 = _0x585fb4[_0x30c6('0x28')], _0x8d617f = _0x585fb4[_0x30c6('0x29')]['_c'] || _0x513e09;
        return _0x5cfeb7[_0x30c6('0x0')](_0x8d617f, _0x5cfeb7[_0x30c6('0x1')], [
            _0x585fb4['_m'](0x0),
            _0x5cfeb7[_0x30c6('0x3')](_0x8d617f, _0x5cfeb7[_0x30c6('0x4')], {
                'attrs': { 'type': _0x5cfeb7[_0x30c6('0x6')] },
                'on': { 'tab-click': _0x585fb4[_0x30c6('0x2a')] },
                'model': {
                    'value': _0x585fb4[_0x30c6('0x9')],
                    'callback': function (_0x477560) {
                        _0x585fb4[_0x30c6('0x9')] = _0x477560;
                    },
                    'expression': _0x5cfeb7[_0x30c6('0x8')]
                }
            }, [
                _0x5cfeb7[_0x30c6('0x0')](_0x8d617f, _0x5cfeb7[_0x30c6('0xa')], {
                    'attrs': {
                        'label': _0x5cfeb7[_0x30c6('0xc')],
                        'name': _0x5cfeb7[_0x30c6('0xe')]
                    }
                }, [_0x585fb4['_v'](_0x5cfeb7[_0x30c6('0xc')])]),
                _0x5cfeb7[_0x30c6('0x0')](_0x8d617f, _0x5cfeb7[_0x30c6('0xa')], {
                    'attrs': {
                        'label': _0x5cfeb7[_0x30c6('0x10')],
                        'name': _0x5cfeb7[_0x30c6('0x12')]
                    }
                }, [_0x5cfeb7[_0x30c6('0x14')](_0x8d617f, _0x5cfeb7[_0x30c6('0x1')], {
                        'directives': [{
                                'name': _0x5cfeb7[_0x30c6('0x15')],
                                'rawName': _0x5cfeb7[_0x30c6('0x17')],
                                'value': _0x585fb4[_0x30c6('0x1a')],
                                'expression': _0x5cfeb7[_0x30c6('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x5cfeb7[_0x30c6('0x1b')],
                            'height': _0x5cfeb7[_0x30c6('0x1d')]
                        }
                    }, [_0x5cfeb7[_0x30c6('0x1f')](_0x8d617f, _0x5cfeb7[_0x30c6('0x20')], {
                            'ref': _0x5cfeb7[_0x30c6('0x22')],
                            'attrs': { 'options': _0x585fb4[_0x30c6('0x2b')] }
                        })], 0x1)]),
                _0x5cfeb7[_0x30c6('0x0')](_0x8d617f, _0x5cfeb7[_0x30c6('0xa')], {
                    'attrs': {
                        'label': _0x5cfeb7[_0x30c6('0x24')],
                        'name': _0x5cfeb7[_0x30c6('0x26')]
                    }
                }, [_0x585fb4['_v'](_0x5cfeb7[_0x30c6('0x24')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x10d0df = {};
            _0x10d0df[_0x30c6('0x2c')] = function (_0x5d3f38, _0xc8a34, _0x90e21b, _0x2a571b) {
                return _0x5d3f38(_0xc8a34, _0x90e21b, _0x2a571b);
            };
            _0x10d0df[_0x30c6('0x2d')] = _0x30c6('0x2');
            _0x10d0df[_0x30c6('0x2e')] = _0x30c6('0x2f');
            _0x10d0df[_0x30c6('0x30')] = _0x30c6('0x31');
            _0x10d0df[_0x30c6('0x32')] = _0x30c6('0x33');
            _0x10d0df[_0x30c6('0x34')] = _0x30c6('0x35');
            _0x10d0df[_0x30c6('0x36')] = function (_0x1a862b, _0x421488, _0x6addd2) {
                return _0x1a862b(_0x421488, _0x6addd2);
            };
            _0x10d0df[_0x30c6('0x37')] = _0x30c6('0x38');
            var _0x4fa471 = this, _0x481627 = _0x4fa471[_0x30c6('0x28')], _0x2ca95a = _0x4fa471[_0x30c6('0x29')]['_c'] || _0x481627;
            return _0x10d0df[_0x30c6('0x2c')](_0x2ca95a, _0x10d0df[_0x30c6('0x2d')], {
                'staticStyle': {
                    'padding': _0x10d0df[_0x30c6('0x2e')],
                    'color': _0x10d0df[_0x30c6('0x30')],
                    'width': _0x10d0df[_0x30c6('0x32')]
                }
            }, [
                _0x4fa471['_v'](_0x10d0df[_0x30c6('0x34')]),
                _0x10d0df[_0x30c6('0x36')](_0x2ca95a, _0x10d0df[_0x30c6('0x2d')], [_0x4fa471['_v'](_0x10d0df[_0x30c6('0x37')])])
            ]);
        }];
const l = {}, o = {};
l[_0x30c6('0x39')] = _0x30c6('0x3a');
l[_0x30c6('0x3b')] = {};
l[_0x30c6('0x3c')] = function () {
    var _0x357cf1 = {
        izhFs: _0x30c6('0xf'),
        LYnVa: _0x30c6('0x3d'),
        JXyVB: _0x30c6('0x3e'),
        afKAg: _0x30c6('0x3f'),
        PfnWv: _0x30c6('0x40'),
        mXuse: _0x30c6('0x41'),
        OFXlp: _0x30c6('0x42'),
        teGAb: _0x30c6('0x43'),
        wgvRV: _0x30c6('0x44'),
        LIKyx: _0x30c6('0x45'),
        WPxxC: _0x30c6('0x46'),
        GDEAE: _0x30c6('0x47')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x357cf1.izhFs,
        demoname: _0x357cf1.LYnVa,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x357cf1.JXyVB,
                    layoutClassName: _0x357cf1.afKAg,
                    defaultJunctionPoint: _0x357cf1.PfnWv,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x357cf1.mXuse,
                    max_per_width: _0x357cf1.OFXlp,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x357cf1.teGAb
            },
            defaultExpandHolderPosition: _0x357cf1.wgvRV,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x357cf1.LIKyx,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x357cf1.WPxxC,
            defaultNodeColor: _0x357cf1.GDEAE
        }
    };
};
l[_0x30c6('0x48')] = function () {
};
l[_0x30c6('0x49')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x30c6('0x4a')] = {};
l[_0x30c6('0x4a')][_0x30c6('0x4b')] = function () {
    var _0x4006b0 = {
        Sanof: _0x30c6('0x4c'),
        BOXAX: _0x30c6('0x4d'),
        bjVFU: _0x30c6('0x4e'),
        KjSBL: _0x30c6('0x4f'),
        smolp: _0x30c6('0x50'),
        uxaXG: _0x30c6('0x51'),
        bJkVQ: _0x30c6('0x52'),
        ucsbv: _0x30c6('0x53'),
        KgBBq: function (_0x56b959, _0x3f33a8, _0x5d5b72) {
            return _0x56b959(_0x3f33a8, _0x5d5b72);
        }
    };
    const _0x53ae46 = {
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
                id: _0x4006b0.Sanof,
                text: _0x4006b0.Sanof
            },
            {
                id: _0x4006b0.BOXAX,
                text: _0x4006b0.BOXAX
            },
            {
                id: _0x4006b0.bjVFU,
                text: _0x4006b0.bjVFU
            },
            {
                id: _0x4006b0.KjSBL,
                text: _0x4006b0.KjSBL
            },
            {
                id: _0x4006b0.smolp,
                text: _0x4006b0.smolp
            },
            {
                id: _0x4006b0.uxaXG,
                text: _0x4006b0.uxaXG
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x4006b0.bJkVQ,
                text: _0x4006b0.bJkVQ
            },
            {
                id: _0x4006b0.ucsbv,
                text: _0x4006b0.ucsbv
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
                to: _0x4006b0.Sanof
            },
            {
                from: 'b1',
                to: _0x4006b0.BOXAX
            },
            {
                from: 'b1',
                to: _0x4006b0.bjVFU
            },
            {
                from: 'b1',
                to: _0x4006b0.KjSBL
            },
            {
                from: 'b1',
                to: _0x4006b0.smolp
            },
            {
                from: 'b1',
                to: _0x4006b0.uxaXG
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x4006b0.bJkVQ
            },
            {
                from: 'b2',
                to: _0x4006b0.ucsbv
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
    console.log(JSON.stringify(_0x53ae46)), _0x4006b0.KgBBq(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x53ae46, _0x4212ad => {
            _0x4212ad.refresh();
        });
    }, 0x3e8);
};
l[_0x30c6('0x4a')][_0x30c6('0x2a')] = function (_0xbfd2d, _0x8dc73) {
    var _0x137c0d = {
        uJsnC: _0x30c6('0x54'),
        KsJdG: function (_0x2f069e, _0x251e57) {
            return _0x2f069e === _0x251e57;
        },
        btqLB: _0x30c6('0x13')
    };
    console.log(_0x137c0d.uJsnC, this.activeTabName), _0x137c0d.KsJdG(this.activeTabName, _0x137c0d.btqLB) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x587e42(l, n, d, !0x1, c, null, null, null);
function c(_0x325c5d) {
    for (let _0x36428f in o)
        this[_0x36428f] = o[_0x36428f];
}
const m = function () {
    return s[_0x30c6('0x55')];
}();
export {
    m as default
};