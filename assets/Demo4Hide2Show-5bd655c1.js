
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xabc3 = [
    'KJNrK',
    '600px',
    'iqlxp',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'Yrssu',
    'AFTxs',
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
    'ZEhJI',
    'AMkjr',
    'div',
    'leNLx',
    'PZCgh',
    'el-tabs',
    'fqJfX',
    'card',
    'rfNGP',
    'activeTabName',
    'WAgcO',
    'vHOdJ',
    'el-tab-pane',
    'dbZsZ',
    '基本信息',
    'YRIBV',
    'base',
    'PnRLG',
    'vSztK',
    '关系图谱（点这里）',
    'VVJhd',
    'relation',
    'drefX',
    'loading',
    'frbGm',
    'v-loading',
    'QdOsO',
    'g_loading',
    'kWITz',
    'calc(100%)',
    'DSIaS',
    'calc(100vh\x20-\x20300px)',
    'gJQTQ',
    'elQSR',
    'RelationGraph',
    'cRZzi',
    'graphRef',
    'vAdCn',
    'auKrG',
    '风险信息',
    'xpqcn',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'fMwfR',
    'JlAGg',
    'SAbDr',
    '20px',
    'ZieTn',
    '#666666'
];
(function (_0x2bd2f0, _0x4ec31b) {
    var _0x1edba0 = function (_0x2d2048) {
        while (--_0x2d2048) {
            _0x2bd2f0['push'](_0x2bd2f0['shift']());
        }
    };
    _0x1edba0(++_0x4ec31b);
}(_0xabc3, 0x7a));
var _0xf175 = function (_0x91bd2, _0x21bfe8) {
    _0x91bd2 = _0x91bd2 - 0x0;
    var _0x4602a3 = _0xabc3[_0x91bd2];
    return _0x4602a3;
};
import { n as _0x25c36 } from './index-c22e9dce.js';
var n = function () {
        var _0x4a4eef = {};
        _0x4a4eef[_0xf175('0x0')] = function (_0x3a5402, _0x46519a, _0x550739, _0x3d7633) {
            return _0x3a5402(_0x46519a, _0x550739, _0x3d7633);
        };
        _0x4a4eef[_0xf175('0x1')] = _0xf175('0x2');
        _0x4a4eef[_0xf175('0x3')] = function (_0x275909, _0x4b279e, _0x2da477, _0x104714, _0x1cf665) {
            return _0x275909(_0x4b279e, _0x2da477, _0x104714, _0x1cf665);
        };
        _0x4a4eef[_0xf175('0x4')] = _0xf175('0x5');
        _0x4a4eef[_0xf175('0x6')] = _0xf175('0x7');
        _0x4a4eef[_0xf175('0x8')] = _0xf175('0x9');
        _0x4a4eef[_0xf175('0xa')] = function (_0x3df31e, _0x189f8c, _0x2aa26b, _0x96507d) {
            return _0x3df31e(_0x189f8c, _0x2aa26b, _0x96507d);
        };
        _0x4a4eef[_0xf175('0xb')] = _0xf175('0xc');
        _0x4a4eef[_0xf175('0xd')] = _0xf175('0xe');
        _0x4a4eef[_0xf175('0xf')] = _0xf175('0x10');
        _0x4a4eef[_0xf175('0x11')] = function (_0x2b3f9f, _0x47ec8a, _0x31a083, _0x56fa73) {
            return _0x2b3f9f(_0x47ec8a, _0x31a083, _0x56fa73);
        };
        _0x4a4eef[_0xf175('0x12')] = _0xf175('0x13');
        _0x4a4eef[_0xf175('0x14')] = _0xf175('0x15');
        _0x4a4eef[_0xf175('0x16')] = _0xf175('0x17');
        _0x4a4eef[_0xf175('0x18')] = _0xf175('0x19');
        _0x4a4eef[_0xf175('0x1a')] = _0xf175('0x1b');
        _0x4a4eef[_0xf175('0x1c')] = _0xf175('0x1d');
        _0x4a4eef[_0xf175('0x1e')] = _0xf175('0x1f');
        _0x4a4eef[_0xf175('0x20')] = function (_0x3efee9, _0x37272a, _0x17c9b7) {
            return _0x3efee9(_0x37272a, _0x17c9b7);
        };
        _0x4a4eef[_0xf175('0x21')] = _0xf175('0x22');
        _0x4a4eef[_0xf175('0x23')] = _0xf175('0x24');
        _0x4a4eef[_0xf175('0x25')] = function (_0x5dc9aa, _0x345b7e, _0x3e57ff, _0x2d3365) {
            return _0x5dc9aa(_0x345b7e, _0x3e57ff, _0x2d3365);
        };
        _0x4a4eef[_0xf175('0x26')] = _0xf175('0x27');
        _0x4a4eef[_0xf175('0x28')] = _0xf175('0x29');
        var _0x4ca92f = this, _0x31f13d = _0x4ca92f[_0xf175('0x2a')], _0x375443 = _0x4ca92f[_0xf175('0x2b')]['_c'] || _0x31f13d;
        return _0x4a4eef[_0xf175('0x0')](_0x375443, _0x4a4eef[_0xf175('0x1')], [
            _0x4ca92f['_m'](0x0),
            _0x4a4eef[_0xf175('0x3')](_0x375443, _0x4a4eef[_0xf175('0x4')], {
                'attrs': { 'type': _0x4a4eef[_0xf175('0x6')] },
                'on': { 'tab-click': _0x4ca92f[_0xf175('0x2c')] },
                'model': {
                    'value': _0x4ca92f[_0xf175('0x9')],
                    'callback': function (_0x312530) {
                        _0x4ca92f[_0xf175('0x9')] = _0x312530;
                    },
                    'expression': _0x4a4eef[_0xf175('0x8')]
                }
            }, [
                _0x4a4eef[_0xf175('0xa')](_0x375443, _0x4a4eef[_0xf175('0xb')], {
                    'attrs': {
                        'label': _0x4a4eef[_0xf175('0xd')],
                        'name': _0x4a4eef[_0xf175('0xf')]
                    }
                }, [_0x4ca92f['_v'](_0x4a4eef[_0xf175('0xd')])]),
                _0x4a4eef[_0xf175('0x11')](_0x375443, _0x4a4eef[_0xf175('0xb')], {
                    'attrs': {
                        'label': _0x4a4eef[_0xf175('0x12')],
                        'name': _0x4a4eef[_0xf175('0x14')]
                    }
                }, [_0x4a4eef[_0xf175('0x3')](_0x375443, _0x4a4eef[_0xf175('0x1')], {
                        'directives': [{
                                'name': _0x4a4eef[_0xf175('0x16')],
                                'rawName': _0x4a4eef[_0xf175('0x18')],
                                'value': _0x4ca92f[_0xf175('0x1b')],
                                'expression': _0x4a4eef[_0xf175('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0x4a4eef[_0xf175('0x1c')],
                            'height': _0x4a4eef[_0xf175('0x1e')]
                        }
                    }, [_0x4a4eef[_0xf175('0x20')](_0x375443, _0x4a4eef[_0xf175('0x21')], {
                            'ref': _0x4a4eef[_0xf175('0x23')],
                            'attrs': { 'options': _0x4ca92f[_0xf175('0x2d')] }
                        })], 0x1)]),
                _0x4a4eef[_0xf175('0x25')](_0x375443, _0x4a4eef[_0xf175('0xb')], {
                    'attrs': {
                        'label': _0x4a4eef[_0xf175('0x26')],
                        'name': _0x4a4eef[_0xf175('0x28')]
                    }
                }, [_0x4ca92f['_v'](_0x4a4eef[_0xf175('0x26')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x33c51a = {};
            _0x33c51a[_0xf175('0x2e')] = function (_0x1c8774, _0x43c883, _0x2b84e9, _0x5df06c) {
                return _0x1c8774(_0x43c883, _0x2b84e9, _0x5df06c);
            };
            _0x33c51a[_0xf175('0x2f')] = _0xf175('0x2');
            _0x33c51a[_0xf175('0x30')] = _0xf175('0x31');
            _0x33c51a[_0xf175('0x32')] = _0xf175('0x33');
            _0x33c51a[_0xf175('0x34')] = _0xf175('0x35');
            _0x33c51a[_0xf175('0x36')] = _0xf175('0x37');
            _0x33c51a[_0xf175('0x38')] = function (_0x14c572, _0x53ef4d, _0x547175) {
                return _0x14c572(_0x53ef4d, _0x547175);
            };
            _0x33c51a[_0xf175('0x39')] = _0xf175('0x3a');
            var _0x912ef2 = this, _0x1e5e93 = _0x912ef2[_0xf175('0x2a')], _0x275522 = _0x912ef2[_0xf175('0x2b')]['_c'] || _0x1e5e93;
            return _0x33c51a[_0xf175('0x2e')](_0x275522, _0x33c51a[_0xf175('0x2f')], {
                'staticStyle': {
                    'padding': _0x33c51a[_0xf175('0x30')],
                    'color': _0x33c51a[_0xf175('0x32')],
                    'width': _0x33c51a[_0xf175('0x34')]
                }
            }, [
                _0x912ef2['_v'](_0x33c51a[_0xf175('0x36')]),
                _0x33c51a[_0xf175('0x38')](_0x275522, _0x33c51a[_0xf175('0x2f')], [_0x912ef2['_v'](_0x33c51a[_0xf175('0x39')])])
            ]);
        }];
const l = {}, o = {};
l[_0xf175('0x3b')] = _0xf175('0x3c');
l[_0xf175('0x3d')] = {};
l[_0xf175('0x3e')] = function () {
    var _0x12cf70 = {
        qmapX: _0xf175('0x10'),
        QzfNk: _0xf175('0x3f'),
        TaWGK: _0xf175('0x40'),
        wpebp: _0xf175('0x41'),
        yhnUC: _0xf175('0x42'),
        HuMUY: _0xf175('0x43'),
        JIuzX: _0xf175('0x44'),
        qyjup: _0xf175('0x45'),
        OAKDH: _0xf175('0x46'),
        IovbS: _0xf175('0x47'),
        ngdFP: _0xf175('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x12cf70.qmapX,
        demoname: _0x12cf70.QzfNk,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x12cf70.TaWGK,
                    layoutClassName: _0x12cf70.wpebp,
                    defaultJunctionPoint: _0x12cf70.yhnUC,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x12cf70.HuMUY,
                    max_per_width: _0x12cf70.JIuzX,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x12cf70.qyjup
            },
            defaultExpandHolderPosition: _0x12cf70.OAKDH,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x12cf70.IovbS,
            defaultNodeColor: _0x12cf70.ngdFP
        }
    };
};
l[_0xf175('0x49')] = function () {
};
l[_0xf175('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0xf175('0x4b')] = {};
l[_0xf175('0x4b')][_0xf175('0x4c')] = function () {
    var _0x404f73 = {
        LtFwO: _0xf175('0x4d'),
        pAdWL: _0xf175('0x4e'),
        sZXWo: _0xf175('0x4f'),
        kCejZ: _0xf175('0x50'),
        pDGgC: _0xf175('0x51'),
        Nokia: _0xf175('0x52'),
        Ekarc: _0xf175('0x53'),
        zNSGu: _0xf175('0x54'),
        QBFXl: function (_0x1959a3, _0x154eb5, _0x4517be) {
            return _0x1959a3(_0x154eb5, _0x4517be);
        }
    };
    const _0x1604a9 = {
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
                id: _0x404f73.LtFwO,
                text: _0x404f73.LtFwO
            },
            {
                id: _0x404f73.pAdWL,
                text: _0x404f73.pAdWL
            },
            {
                id: _0x404f73.sZXWo,
                text: _0x404f73.sZXWo
            },
            {
                id: _0x404f73.kCejZ,
                text: _0x404f73.kCejZ
            },
            {
                id: _0x404f73.pDGgC,
                text: _0x404f73.pDGgC
            },
            {
                id: _0x404f73.Nokia,
                text: _0x404f73.Nokia
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x404f73.Ekarc,
                text: _0x404f73.Ekarc
            },
            {
                id: _0x404f73.zNSGu,
                text: _0x404f73.zNSGu
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
                to: _0x404f73.LtFwO
            },
            {
                from: 'b1',
                to: _0x404f73.pAdWL
            },
            {
                from: 'b1',
                to: _0x404f73.sZXWo
            },
            {
                from: 'b1',
                to: _0x404f73.kCejZ
            },
            {
                from: 'b1',
                to: _0x404f73.pDGgC
            },
            {
                from: 'b1',
                to: _0x404f73.Nokia
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x404f73.Ekarc
            },
            {
                from: 'b2',
                to: _0x404f73.zNSGu
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
    console.log(JSON.stringify(_0x1604a9)), _0x404f73.QBFXl(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x1604a9, _0x4236a5 => {
            _0x4236a5.refresh();
        });
    }, 0x3e8);
};
l[_0xf175('0x4b')][_0xf175('0x2c')] = function (_0x2b525f, _0x3d8c9f) {
    var _0x33a692 = {
        rJiBV: _0xf175('0x55'),
        gqrNy: function (_0x4027bd, _0x5e0940) {
            return _0x4027bd === _0x5e0940;
        },
        brPsL: _0xf175('0x15')
    };
    console.log(_0x33a692.rJiBV, this.activeTabName), _0x33a692.gqrNy(this.activeTabName, _0x33a692.brPsL) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x25c36(l, n, d, !0x1, c, null, null, null);
function c(_0x206740) {
    for (let _0x186da8 in o)
        this[_0x186da8] = o[_0x186da8];
}
const m = function () {
    return s[_0xf175('0x56')];
}();
export {
    m as default
};