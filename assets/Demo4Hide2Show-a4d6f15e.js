
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3c4a = [
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
    'aCsnq',
    'YZBgY',
    'div',
    'JXvTx',
    'EhKlb',
    'el-tabs',
    'HCfdz',
    'card',
    'UBLDr',
    'activeTabName',
    'JafBr',
    'eveYg',
    'el-tab-pane',
    'mbcHn',
    '基本信息',
    'cfGaz',
    'base',
    'qOMkG',
    'UCHxW',
    '关系图谱（点这里）',
    'KqPSf',
    'relation',
    'NlFQS',
    'loading',
    'yetLQ',
    'v-loading',
    'PUews',
    'g_loading',
    'sywGq',
    'calc(100%)',
    'nXoHX',
    'calc(100vh\x20-\x20300px)',
    'gPrEZ',
    'feVWa',
    'RelationGraph',
    'kJlMd',
    'graphRef',
    'xhTQu',
    'epUux',
    '风险信息',
    'slQav',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'QLMxe',
    'uGRZu',
    'pXSuL',
    '20px',
    'VaqMn',
    '#666666',
    'VWAxa',
    '600px',
    'pdGHs',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'fdyyU',
    'GUYpq',
    '\x20比如点击按钮A时显示图谱，你需要在点击按钮A显示图谱之后，通过this.$nextTick()调用图谱的refresh()方法来刷新一下，这样就显示正常了，请参考当前demo的代码。\x20',
    'name',
    'RelationGraphDemo',
    'components'
];
(function (_0x4a0200, _0x16ae44) {
    var _0x2c6112 = function (_0xc92b29) {
        while (--_0xc92b29) {
            _0x4a0200['push'](_0x4a0200['shift']());
        }
    };
    _0x2c6112(++_0x16ae44);
}(_0x3c4a, 0x1cc));
var _0x5251 = function (_0x1046c5, _0x4a733a) {
    _0x1046c5 = _0x1046c5 - 0x0;
    var _0x231bb0 = _0x3c4a[_0x1046c5];
    return _0x231bb0;
};
import { n as _0x1ae1b0 } from './index-ab96dab3.js';
var n = function () {
        var _0x42f1cc = {};
        _0x42f1cc[_0x5251('0x0')] = function (_0x1d1461, _0x8e0da0, _0x4668c8, _0x22ec36) {
            return _0x1d1461(_0x8e0da0, _0x4668c8, _0x22ec36);
        };
        _0x42f1cc[_0x5251('0x1')] = _0x5251('0x2');
        _0x42f1cc[_0x5251('0x3')] = function (_0x466aa5, _0x33f84f, _0x17508c, _0x28a4d5, _0x262a73) {
            return _0x466aa5(_0x33f84f, _0x17508c, _0x28a4d5, _0x262a73);
        };
        _0x42f1cc[_0x5251('0x4')] = _0x5251('0x5');
        _0x42f1cc[_0x5251('0x6')] = _0x5251('0x7');
        _0x42f1cc[_0x5251('0x8')] = _0x5251('0x9');
        _0x42f1cc[_0x5251('0xa')] = function (_0x2a35e5, _0x5cacf1, _0x5c37db, _0x4fa489) {
            return _0x2a35e5(_0x5cacf1, _0x5c37db, _0x4fa489);
        };
        _0x42f1cc[_0x5251('0xb')] = _0x5251('0xc');
        _0x42f1cc[_0x5251('0xd')] = _0x5251('0xe');
        _0x42f1cc[_0x5251('0xf')] = _0x5251('0x10');
        _0x42f1cc[_0x5251('0x11')] = function (_0x5702e0, _0x4b22d9, _0x3b4733, _0x2e6d93) {
            return _0x5702e0(_0x4b22d9, _0x3b4733, _0x2e6d93);
        };
        _0x42f1cc[_0x5251('0x12')] = _0x5251('0x13');
        _0x42f1cc[_0x5251('0x14')] = _0x5251('0x15');
        _0x42f1cc[_0x5251('0x16')] = _0x5251('0x17');
        _0x42f1cc[_0x5251('0x18')] = _0x5251('0x19');
        _0x42f1cc[_0x5251('0x1a')] = _0x5251('0x1b');
        _0x42f1cc[_0x5251('0x1c')] = _0x5251('0x1d');
        _0x42f1cc[_0x5251('0x1e')] = _0x5251('0x1f');
        _0x42f1cc[_0x5251('0x20')] = function (_0x49ee19, _0x3e8ed2, _0x55cdf8) {
            return _0x49ee19(_0x3e8ed2, _0x55cdf8);
        };
        _0x42f1cc[_0x5251('0x21')] = _0x5251('0x22');
        _0x42f1cc[_0x5251('0x23')] = _0x5251('0x24');
        _0x42f1cc[_0x5251('0x25')] = function (_0x50629a, _0x4e4db5, _0x2078c3, _0x1c8796) {
            return _0x50629a(_0x4e4db5, _0x2078c3, _0x1c8796);
        };
        _0x42f1cc[_0x5251('0x26')] = _0x5251('0x27');
        _0x42f1cc[_0x5251('0x28')] = _0x5251('0x29');
        var _0x446b0b = this, _0x56d572 = _0x446b0b[_0x5251('0x2a')], _0x45f319 = _0x446b0b[_0x5251('0x2b')]['_c'] || _0x56d572;
        return _0x42f1cc[_0x5251('0x0')](_0x45f319, _0x42f1cc[_0x5251('0x1')], [
            _0x446b0b['_m'](0x0),
            _0x42f1cc[_0x5251('0x3')](_0x45f319, _0x42f1cc[_0x5251('0x4')], {
                'attrs': { 'type': _0x42f1cc[_0x5251('0x6')] },
                'on': { 'tab-click': _0x446b0b[_0x5251('0x2c')] },
                'model': {
                    'value': _0x446b0b[_0x5251('0x9')],
                    'callback': function (_0x4903de) {
                        _0x446b0b[_0x5251('0x9')] = _0x4903de;
                    },
                    'expression': _0x42f1cc[_0x5251('0x8')]
                }
            }, [
                _0x42f1cc[_0x5251('0xa')](_0x45f319, _0x42f1cc[_0x5251('0xb')], {
                    'attrs': {
                        'label': _0x42f1cc[_0x5251('0xd')],
                        'name': _0x42f1cc[_0x5251('0xf')]
                    }
                }, [_0x446b0b['_v'](_0x42f1cc[_0x5251('0xd')])]),
                _0x42f1cc[_0x5251('0x11')](_0x45f319, _0x42f1cc[_0x5251('0xb')], {
                    'attrs': {
                        'label': _0x42f1cc[_0x5251('0x12')],
                        'name': _0x42f1cc[_0x5251('0x14')]
                    }
                }, [_0x42f1cc[_0x5251('0x3')](_0x45f319, _0x42f1cc[_0x5251('0x1')], {
                        'directives': [{
                                'name': _0x42f1cc[_0x5251('0x16')],
                                'rawName': _0x42f1cc[_0x5251('0x18')],
                                'value': _0x446b0b[_0x5251('0x1b')],
                                'expression': _0x42f1cc[_0x5251('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0x42f1cc[_0x5251('0x1c')],
                            'height': _0x42f1cc[_0x5251('0x1e')]
                        }
                    }, [_0x42f1cc[_0x5251('0x20')](_0x45f319, _0x42f1cc[_0x5251('0x21')], {
                            'ref': _0x42f1cc[_0x5251('0x23')],
                            'attrs': { 'options': _0x446b0b[_0x5251('0x2d')] }
                        })], 0x1)]),
                _0x42f1cc[_0x5251('0x25')](_0x45f319, _0x42f1cc[_0x5251('0xb')], {
                    'attrs': {
                        'label': _0x42f1cc[_0x5251('0x26')],
                        'name': _0x42f1cc[_0x5251('0x28')]
                    }
                }, [_0x446b0b['_v'](_0x42f1cc[_0x5251('0x26')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x29e990 = {};
            _0x29e990[_0x5251('0x2e')] = function (_0x2d5f57, _0x4e7aa0, _0x564d6c, _0x408873) {
                return _0x2d5f57(_0x4e7aa0, _0x564d6c, _0x408873);
            };
            _0x29e990[_0x5251('0x2f')] = _0x5251('0x2');
            _0x29e990[_0x5251('0x30')] = _0x5251('0x31');
            _0x29e990[_0x5251('0x32')] = _0x5251('0x33');
            _0x29e990[_0x5251('0x34')] = _0x5251('0x35');
            _0x29e990[_0x5251('0x36')] = _0x5251('0x37');
            _0x29e990[_0x5251('0x38')] = function (_0x25fa3d, _0x5781ba, _0x55955b) {
                return _0x25fa3d(_0x5781ba, _0x55955b);
            };
            _0x29e990[_0x5251('0x39')] = _0x5251('0x3a');
            var _0x246c94 = this, _0x3fb055 = _0x246c94[_0x5251('0x2a')], _0x4f97fd = _0x246c94[_0x5251('0x2b')]['_c'] || _0x3fb055;
            return _0x29e990[_0x5251('0x2e')](_0x4f97fd, _0x29e990[_0x5251('0x2f')], {
                'staticStyle': {
                    'padding': _0x29e990[_0x5251('0x30')],
                    'color': _0x29e990[_0x5251('0x32')],
                    'width': _0x29e990[_0x5251('0x34')]
                }
            }, [
                _0x246c94['_v'](_0x29e990[_0x5251('0x36')]),
                _0x29e990[_0x5251('0x38')](_0x4f97fd, _0x29e990[_0x5251('0x2f')], [_0x246c94['_v'](_0x29e990[_0x5251('0x39')])])
            ]);
        }];
const l = {}, o = {};
l[_0x5251('0x3b')] = _0x5251('0x3c');
l[_0x5251('0x3d')] = {};
l[_0x5251('0x3e')] = function () {
    var _0x5d945c = {
        cTksO: _0x5251('0x10'),
        LFEWZ: _0x5251('0x3f'),
        MkXgq: _0x5251('0x40'),
        DwMjq: _0x5251('0x41'),
        NUyyE: _0x5251('0x42'),
        IirhR: _0x5251('0x43'),
        YkCum: _0x5251('0x44'),
        ChCqs: _0x5251('0x45'),
        PSEsy: _0x5251('0x46'),
        WTBTE: _0x5251('0x47'),
        rhBvP: _0x5251('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x5d945c.cTksO,
        demoname: _0x5d945c.LFEWZ,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x5d945c.MkXgq,
                    layoutClassName: _0x5d945c.DwMjq,
                    defaultJunctionPoint: _0x5d945c.NUyyE,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x5d945c.IirhR,
                    max_per_width: _0x5d945c.YkCum,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x5d945c.ChCqs
            },
            defaultExpandHolderPosition: _0x5d945c.PSEsy,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x5d945c.WTBTE,
            defaultNodeColor: _0x5d945c.rhBvP
        }
    };
};
l[_0x5251('0x49')] = function () {
};
l[_0x5251('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x5251('0x4b')] = {};
l[_0x5251('0x4b')][_0x5251('0x4c')] = function () {
    var _0x217df9 = {
        ulyWM: _0x5251('0x4d'),
        JrnSZ: _0x5251('0x4e'),
        tJurr: _0x5251('0x4f'),
        qaEQC: _0x5251('0x50'),
        cJQMR: _0x5251('0x51'),
        yShWd: _0x5251('0x52'),
        VnckW: _0x5251('0x53'),
        MsSjI: _0x5251('0x54'),
        vVJoD: function (_0x51cbc7, _0x5ee68b, _0x207541) {
            return _0x51cbc7(_0x5ee68b, _0x207541);
        }
    };
    const _0x2bb015 = {
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
                id: _0x217df9.ulyWM,
                text: _0x217df9.ulyWM
            },
            {
                id: _0x217df9.JrnSZ,
                text: _0x217df9.JrnSZ
            },
            {
                id: _0x217df9.tJurr,
                text: _0x217df9.tJurr
            },
            {
                id: _0x217df9.qaEQC,
                text: _0x217df9.qaEQC
            },
            {
                id: _0x217df9.cJQMR,
                text: _0x217df9.cJQMR
            },
            {
                id: _0x217df9.yShWd,
                text: _0x217df9.yShWd
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x217df9.VnckW,
                text: _0x217df9.VnckW
            },
            {
                id: _0x217df9.MsSjI,
                text: _0x217df9.MsSjI
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
                to: _0x217df9.ulyWM
            },
            {
                from: 'b1',
                to: _0x217df9.JrnSZ
            },
            {
                from: 'b1',
                to: _0x217df9.tJurr
            },
            {
                from: 'b1',
                to: _0x217df9.qaEQC
            },
            {
                from: 'b1',
                to: _0x217df9.cJQMR
            },
            {
                from: 'b1',
                to: _0x217df9.yShWd
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x217df9.VnckW
            },
            {
                from: 'b2',
                to: _0x217df9.MsSjI
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
    console.log(JSON.stringify(_0x2bb015)), _0x217df9.vVJoD(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x2bb015, _0x3cca0b => {
            _0x3cca0b.refresh();
        });
    }, 0x3e8);
};
l[_0x5251('0x4b')][_0x5251('0x2c')] = function (_0x3f78f8, _0x1dbc0c) {
    var _0x452933 = {
        xaxnK: _0x5251('0x55'),
        prgHe: function (_0x38d33d, _0x17155e) {
            return _0x38d33d === _0x17155e;
        },
        ZfICj: _0x5251('0x15')
    };
    console.log(_0x452933.xaxnK, this.activeTabName), _0x452933.prgHe(this.activeTabName, _0x452933.ZfICj) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x1ae1b0(l, n, d, !0x1, c, null, null, null);
function c(_0x1ed164) {
    for (let _0x230c35 in o)
        this[_0x230c35] = o[_0x230c35];
}
const m = function () {
    return s[_0x5251('0x56')];
}();
export {
    m as default
};