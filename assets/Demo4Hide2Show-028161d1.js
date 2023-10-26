
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x6fcc = [
    'HCkka',
    '600px',
    'DjvNo',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'NGtJo',
    'qUXEx',
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
    'XnYXO',
    'rPSKk',
    'div',
    'AMMvu',
    'MmQsR',
    'el-tabs',
    'EaDgi',
    'card',
    'ATkOY',
    'activeTabName',
    'uhTbo',
    'boiWr',
    'el-tab-pane',
    'CPWLU',
    '基本信息',
    'zHXmy',
    'base',
    'osOUi',
    'Bzssi',
    '关系图谱（点这里）',
    'dxgsZ',
    'relation',
    'FQDlC',
    'loading',
    'cSiOF',
    'v-loading',
    'GFxDq',
    'g_loading',
    'ulCiD',
    'calc(100%)',
    'VQGLQ',
    'calc(100vh\x20-\x20300px)',
    'YTUSy',
    'uipKy',
    'RelationGraph',
    'KNYiG',
    'graphRef',
    'RQouL',
    '风险信息',
    'YMURI',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'ArwiE',
    'DksUs',
    'QDmfR',
    '20px',
    'vTVYq',
    '#666666'
];
(function (_0x196bfa, _0x3b0c3a) {
    var _0x32c467 = function (_0x415b80) {
        while (--_0x415b80) {
            _0x196bfa['push'](_0x196bfa['shift']());
        }
    };
    _0x32c467(++_0x3b0c3a);
}(_0x6fcc, 0x7b));
var _0x3493 = function (_0x5b2a9e, _0x2634bf) {
    _0x5b2a9e = _0x5b2a9e - 0x0;
    var _0x5bfd84 = _0x6fcc[_0x5b2a9e];
    return _0x5bfd84;
};
import { n as _0x2c2a32 } from './index-08f7799e.js';
var n = function () {
        var _0x283c9b = {};
        _0x283c9b[_0x3493('0x0')] = function (_0x5debd4, _0x307eee, _0x146150, _0x3ab444) {
            return _0x5debd4(_0x307eee, _0x146150, _0x3ab444);
        };
        _0x283c9b[_0x3493('0x1')] = _0x3493('0x2');
        _0x283c9b[_0x3493('0x3')] = function (_0x5e7fb0, _0x1bde1, _0x56e62e, _0x3e5734, _0x2a852a) {
            return _0x5e7fb0(_0x1bde1, _0x56e62e, _0x3e5734, _0x2a852a);
        };
        _0x283c9b[_0x3493('0x4')] = _0x3493('0x5');
        _0x283c9b[_0x3493('0x6')] = _0x3493('0x7');
        _0x283c9b[_0x3493('0x8')] = _0x3493('0x9');
        _0x283c9b[_0x3493('0xa')] = function (_0x48cd28, _0x87b7f2, _0x5e76b2, _0x7e596d) {
            return _0x48cd28(_0x87b7f2, _0x5e76b2, _0x7e596d);
        };
        _0x283c9b[_0x3493('0xb')] = _0x3493('0xc');
        _0x283c9b[_0x3493('0xd')] = _0x3493('0xe');
        _0x283c9b[_0x3493('0xf')] = _0x3493('0x10');
        _0x283c9b[_0x3493('0x11')] = function (_0x5e5b27, _0x327fce, _0x3cf332, _0x19c66a) {
            return _0x5e5b27(_0x327fce, _0x3cf332, _0x19c66a);
        };
        _0x283c9b[_0x3493('0x12')] = _0x3493('0x13');
        _0x283c9b[_0x3493('0x14')] = _0x3493('0x15');
        _0x283c9b[_0x3493('0x16')] = _0x3493('0x17');
        _0x283c9b[_0x3493('0x18')] = _0x3493('0x19');
        _0x283c9b[_0x3493('0x1a')] = _0x3493('0x1b');
        _0x283c9b[_0x3493('0x1c')] = _0x3493('0x1d');
        _0x283c9b[_0x3493('0x1e')] = _0x3493('0x1f');
        _0x283c9b[_0x3493('0x20')] = function (_0xef5a91, _0x137eaf, _0x455e05) {
            return _0xef5a91(_0x137eaf, _0x455e05);
        };
        _0x283c9b[_0x3493('0x21')] = _0x3493('0x22');
        _0x283c9b[_0x3493('0x23')] = _0x3493('0x24');
        _0x283c9b[_0x3493('0x25')] = _0x3493('0x26');
        _0x283c9b[_0x3493('0x27')] = _0x3493('0x28');
        var _0x49622c = this, _0x597ada = _0x49622c[_0x3493('0x29')], _0x4349e1 = _0x49622c[_0x3493('0x2a')]['_c'] || _0x597ada;
        return _0x283c9b[_0x3493('0x0')](_0x4349e1, _0x283c9b[_0x3493('0x1')], [
            _0x49622c['_m'](0x0),
            _0x283c9b[_0x3493('0x3')](_0x4349e1, _0x283c9b[_0x3493('0x4')], {
                'attrs': { 'type': _0x283c9b[_0x3493('0x6')] },
                'on': { 'tab-click': _0x49622c[_0x3493('0x2b')] },
                'model': {
                    'value': _0x49622c[_0x3493('0x9')],
                    'callback': function (_0x11d661) {
                        _0x49622c[_0x3493('0x9')] = _0x11d661;
                    },
                    'expression': _0x283c9b[_0x3493('0x8')]
                }
            }, [
                _0x283c9b[_0x3493('0xa')](_0x4349e1, _0x283c9b[_0x3493('0xb')], {
                    'attrs': {
                        'label': _0x283c9b[_0x3493('0xd')],
                        'name': _0x283c9b[_0x3493('0xf')]
                    }
                }, [_0x49622c['_v'](_0x283c9b[_0x3493('0xd')])]),
                _0x283c9b[_0x3493('0x11')](_0x4349e1, _0x283c9b[_0x3493('0xb')], {
                    'attrs': {
                        'label': _0x283c9b[_0x3493('0x12')],
                        'name': _0x283c9b[_0x3493('0x14')]
                    }
                }, [_0x283c9b[_0x3493('0x3')](_0x4349e1, _0x283c9b[_0x3493('0x1')], {
                        'directives': [{
                                'name': _0x283c9b[_0x3493('0x16')],
                                'rawName': _0x283c9b[_0x3493('0x18')],
                                'value': _0x49622c[_0x3493('0x1b')],
                                'expression': _0x283c9b[_0x3493('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0x283c9b[_0x3493('0x1c')],
                            'height': _0x283c9b[_0x3493('0x1e')]
                        }
                    }, [_0x283c9b[_0x3493('0x20')](_0x4349e1, _0x283c9b[_0x3493('0x21')], {
                            'ref': _0x283c9b[_0x3493('0x23')],
                            'attrs': { 'options': _0x49622c[_0x3493('0x2c')] }
                        })], 0x1)]),
                _0x283c9b[_0x3493('0x11')](_0x4349e1, _0x283c9b[_0x3493('0xb')], {
                    'attrs': {
                        'label': _0x283c9b[_0x3493('0x25')],
                        'name': _0x283c9b[_0x3493('0x27')]
                    }
                }, [_0x49622c['_v'](_0x283c9b[_0x3493('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x3b0955 = {};
            _0x3b0955[_0x3493('0x2d')] = function (_0x5bb5d2, _0x21caf0, _0x5e0a68, _0x57ee0e) {
                return _0x5bb5d2(_0x21caf0, _0x5e0a68, _0x57ee0e);
            };
            _0x3b0955[_0x3493('0x2e')] = _0x3493('0x2');
            _0x3b0955[_0x3493('0x2f')] = _0x3493('0x30');
            _0x3b0955[_0x3493('0x31')] = _0x3493('0x32');
            _0x3b0955[_0x3493('0x33')] = _0x3493('0x34');
            _0x3b0955[_0x3493('0x35')] = _0x3493('0x36');
            _0x3b0955[_0x3493('0x37')] = function (_0x20c4bd, _0x3b8d6f, _0x4eb68f) {
                return _0x20c4bd(_0x3b8d6f, _0x4eb68f);
            };
            _0x3b0955[_0x3493('0x38')] = _0x3493('0x39');
            var _0x225e8c = this, _0x47720e = _0x225e8c[_0x3493('0x29')], _0xe49871 = _0x225e8c[_0x3493('0x2a')]['_c'] || _0x47720e;
            return _0x3b0955[_0x3493('0x2d')](_0xe49871, _0x3b0955[_0x3493('0x2e')], {
                'staticStyle': {
                    'padding': _0x3b0955[_0x3493('0x2f')],
                    'color': _0x3b0955[_0x3493('0x31')],
                    'width': _0x3b0955[_0x3493('0x33')]
                }
            }, [
                _0x225e8c['_v'](_0x3b0955[_0x3493('0x35')]),
                _0x3b0955[_0x3493('0x37')](_0xe49871, _0x3b0955[_0x3493('0x2e')], [_0x225e8c['_v'](_0x3b0955[_0x3493('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x3493('0x3a')] = _0x3493('0x3b');
l[_0x3493('0x3c')] = {};
l[_0x3493('0x3d')] = function () {
    var _0x40f62a = {
        JUwOS: _0x3493('0x10'),
        VTlKG: _0x3493('0x3e'),
        RoqgW: _0x3493('0x3f'),
        yqtDY: _0x3493('0x40'),
        geUIk: _0x3493('0x41'),
        OhCyC: _0x3493('0x42'),
        pcjuo: _0x3493('0x43'),
        VvDkF: _0x3493('0x44'),
        QgPnR: _0x3493('0x45'),
        vSmYX: _0x3493('0x46'),
        AxQGN: _0x3493('0x47'),
        SrMYH: _0x3493('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x40f62a.JUwOS,
        demoname: _0x40f62a.VTlKG,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x40f62a.RoqgW,
                    layoutClassName: _0x40f62a.yqtDY,
                    defaultJunctionPoint: _0x40f62a.geUIk,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x40f62a.OhCyC,
                    max_per_width: _0x40f62a.pcjuo,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x40f62a.VvDkF
            },
            defaultExpandHolderPosition: _0x40f62a.QgPnR,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x40f62a.vSmYX,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x40f62a.AxQGN,
            defaultNodeColor: _0x40f62a.SrMYH
        }
    };
};
l[_0x3493('0x49')] = function () {
};
l[_0x3493('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x3493('0x4b')] = {};
l[_0x3493('0x4b')][_0x3493('0x4c')] = function () {
    var _0x4df0ce = {
        ypzzr: _0x3493('0x4d'),
        GcKfV: _0x3493('0x4e'),
        avyEI: _0x3493('0x4f'),
        OIxvB: _0x3493('0x50'),
        rhrpQ: _0x3493('0x51'),
        AAOcq: _0x3493('0x52'),
        KXFwQ: _0x3493('0x53'),
        tKqdd: _0x3493('0x54'),
        Yubwy: function (_0x298f79, _0x9ab3c9, _0x442a74) {
            return _0x298f79(_0x9ab3c9, _0x442a74);
        }
    };
    const _0x1f865e = {
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
                id: _0x4df0ce.ypzzr,
                text: _0x4df0ce.ypzzr
            },
            {
                id: _0x4df0ce.GcKfV,
                text: _0x4df0ce.GcKfV
            },
            {
                id: _0x4df0ce.avyEI,
                text: _0x4df0ce.avyEI
            },
            {
                id: _0x4df0ce.OIxvB,
                text: _0x4df0ce.OIxvB
            },
            {
                id: _0x4df0ce.rhrpQ,
                text: _0x4df0ce.rhrpQ
            },
            {
                id: _0x4df0ce.AAOcq,
                text: _0x4df0ce.AAOcq
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x4df0ce.KXFwQ,
                text: _0x4df0ce.KXFwQ
            },
            {
                id: _0x4df0ce.tKqdd,
                text: _0x4df0ce.tKqdd
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
                to: _0x4df0ce.ypzzr
            },
            {
                from: 'b1',
                to: _0x4df0ce.GcKfV
            },
            {
                from: 'b1',
                to: _0x4df0ce.avyEI
            },
            {
                from: 'b1',
                to: _0x4df0ce.OIxvB
            },
            {
                from: 'b1',
                to: _0x4df0ce.rhrpQ
            },
            {
                from: 'b1',
                to: _0x4df0ce.AAOcq
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x4df0ce.KXFwQ
            },
            {
                from: 'b2',
                to: _0x4df0ce.tKqdd
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
    console.log(JSON.stringify(_0x1f865e)), _0x4df0ce.Yubwy(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x1f865e, _0x1e0cac => {
            _0x1e0cac.refresh();
        });
    }, 0x3e8);
};
l[_0x3493('0x4b')][_0x3493('0x2b')] = function (_0x48316b, _0x18062b) {
    var _0x58c261 = {
        isSid: _0x3493('0x55'),
        AYUdE: function (_0x4234f5, _0x551ede) {
            return _0x4234f5 === _0x551ede;
        },
        OsBzR: _0x3493('0x15')
    };
    console.log(_0x58c261.isSid, this.activeTabName), _0x58c261.AYUdE(this.activeTabName, _0x58c261.OsBzR) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x2c2a32(l, n, d, !0x1, c, null, null, null);
function c(_0x302cf6) {
    for (let _0x55d392 in o)
        this[_0x55d392] = o[_0x55d392];
}
const m = function () {
    return s[_0x3493('0x56')];
}();
export {
    m as default
};