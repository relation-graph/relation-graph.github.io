
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xd150 = [
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
    'qAqFv',
    'SLnoQ',
    'div',
    'hjFoa',
    'ptSWe',
    'el-tabs',
    'OIYKh',
    'card',
    'WfZkk',
    'activeTabName',
    'TbhlG',
    'pYnul',
    'el-tab-pane',
    'IGhLv',
    '基本信息',
    'zGXTE',
    'base',
    'mebTp',
    '关系图谱（点这里）',
    'jAnzO',
    'relation',
    'zlUdX',
    'wqHzj',
    'loading',
    'aCtTc',
    'v-loading',
    'OEiEe',
    'g_loading',
    'ZTuzT',
    'calc(100%)',
    'gQabe',
    'calc(100vh\x20-\x20300px)',
    'aEoer',
    'EoBOn',
    'RelationGraph',
    'FtMfS',
    'graphRef',
    'yqXWQ',
    'dXwdA',
    '风险信息',
    'KDKuP',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'oOjAH',
    'RTWGR',
    'UPtJu',
    '20px',
    'FWQya',
    '#666666',
    'YzKwa',
    '600px',
    'GYzIS',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'uYjLY',
    'WKQvw',
    '\x20比如点击按钮A时显示图谱，你需要在点击按钮A显示图谱之后，通过this.$nextTick()调用图谱的refresh()方法来刷新一下，这样就显示正常了，请参考当前demo的代码。\x20',
    'name',
    'RelationGraphDemo',
    'components',
    'data'
];
(function (_0x53d215, _0x47ecbd) {
    var _0x543515 = function (_0x1767b5) {
        while (--_0x1767b5) {
            _0x53d215['push'](_0x53d215['shift']());
        }
    };
    _0x543515(++_0x47ecbd);
}(_0xd150, 0x174));
var _0x217b = function (_0x15eb61, _0x5510c8) {
    _0x15eb61 = _0x15eb61 - 0x0;
    var _0x3a73bc = _0xd150[_0x15eb61];
    return _0x3a73bc;
};
import { n as _0x16aceb } from './index-589c1747.js';
var n = function () {
        var _0xcdfbb0 = {};
        _0xcdfbb0[_0x217b('0x0')] = function (_0x1ad38b, _0x45c73f, _0x3d97de, _0xeb4204) {
            return _0x1ad38b(_0x45c73f, _0x3d97de, _0xeb4204);
        };
        _0xcdfbb0[_0x217b('0x1')] = _0x217b('0x2');
        _0xcdfbb0[_0x217b('0x3')] = function (_0x34aa61, _0x24d08c, _0x24d2c0, _0x144ad4, _0x3615da) {
            return _0x34aa61(_0x24d08c, _0x24d2c0, _0x144ad4, _0x3615da);
        };
        _0xcdfbb0[_0x217b('0x4')] = _0x217b('0x5');
        _0xcdfbb0[_0x217b('0x6')] = _0x217b('0x7');
        _0xcdfbb0[_0x217b('0x8')] = _0x217b('0x9');
        _0xcdfbb0[_0x217b('0xa')] = function (_0x34c6a2, _0xbe6f1b, _0x3d5ec6, _0x5deebc) {
            return _0x34c6a2(_0xbe6f1b, _0x3d5ec6, _0x5deebc);
        };
        _0xcdfbb0[_0x217b('0xb')] = _0x217b('0xc');
        _0xcdfbb0[_0x217b('0xd')] = _0x217b('0xe');
        _0xcdfbb0[_0x217b('0xf')] = _0x217b('0x10');
        _0xcdfbb0[_0x217b('0x11')] = _0x217b('0x12');
        _0xcdfbb0[_0x217b('0x13')] = _0x217b('0x14');
        _0xcdfbb0[_0x217b('0x15')] = function (_0x2c13af, _0x1db81b, _0x411f8a, _0x44c907, _0x59ecf6) {
            return _0x2c13af(_0x1db81b, _0x411f8a, _0x44c907, _0x59ecf6);
        };
        _0xcdfbb0[_0x217b('0x16')] = _0x217b('0x17');
        _0xcdfbb0[_0x217b('0x18')] = _0x217b('0x19');
        _0xcdfbb0[_0x217b('0x1a')] = _0x217b('0x1b');
        _0xcdfbb0[_0x217b('0x1c')] = _0x217b('0x1d');
        _0xcdfbb0[_0x217b('0x1e')] = _0x217b('0x1f');
        _0xcdfbb0[_0x217b('0x20')] = function (_0x2bd68e, _0x2ab219, _0x2e229d) {
            return _0x2bd68e(_0x2ab219, _0x2e229d);
        };
        _0xcdfbb0[_0x217b('0x21')] = _0x217b('0x22');
        _0xcdfbb0[_0x217b('0x23')] = _0x217b('0x24');
        _0xcdfbb0[_0x217b('0x25')] = function (_0x7d294c, _0x4fd315, _0x4242e9, _0x28a21d) {
            return _0x7d294c(_0x4fd315, _0x4242e9, _0x28a21d);
        };
        _0xcdfbb0[_0x217b('0x26')] = _0x217b('0x27');
        _0xcdfbb0[_0x217b('0x28')] = _0x217b('0x29');
        var _0x5d6f10 = this, _0x3fca82 = _0x5d6f10[_0x217b('0x2a')], _0x35886f = _0x5d6f10[_0x217b('0x2b')]['_c'] || _0x3fca82;
        return _0xcdfbb0[_0x217b('0x0')](_0x35886f, _0xcdfbb0[_0x217b('0x1')], [
            _0x5d6f10['_m'](0x0),
            _0xcdfbb0[_0x217b('0x3')](_0x35886f, _0xcdfbb0[_0x217b('0x4')], {
                'attrs': { 'type': _0xcdfbb0[_0x217b('0x6')] },
                'on': { 'tab-click': _0x5d6f10[_0x217b('0x2c')] },
                'model': {
                    'value': _0x5d6f10[_0x217b('0x9')],
                    'callback': function (_0x437144) {
                        _0x5d6f10[_0x217b('0x9')] = _0x437144;
                    },
                    'expression': _0xcdfbb0[_0x217b('0x8')]
                }
            }, [
                _0xcdfbb0[_0x217b('0xa')](_0x35886f, _0xcdfbb0[_0x217b('0xb')], {
                    'attrs': {
                        'label': _0xcdfbb0[_0x217b('0xd')],
                        'name': _0xcdfbb0[_0x217b('0xf')]
                    }
                }, [_0x5d6f10['_v'](_0xcdfbb0[_0x217b('0xd')])]),
                _0xcdfbb0[_0x217b('0xa')](_0x35886f, _0xcdfbb0[_0x217b('0xb')], {
                    'attrs': {
                        'label': _0xcdfbb0[_0x217b('0x11')],
                        'name': _0xcdfbb0[_0x217b('0x13')]
                    }
                }, [_0xcdfbb0[_0x217b('0x15')](_0x35886f, _0xcdfbb0[_0x217b('0x1')], {
                        'directives': [{
                                'name': _0xcdfbb0[_0x217b('0x16')],
                                'rawName': _0xcdfbb0[_0x217b('0x18')],
                                'value': _0x5d6f10[_0x217b('0x1b')],
                                'expression': _0xcdfbb0[_0x217b('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0xcdfbb0[_0x217b('0x1c')],
                            'height': _0xcdfbb0[_0x217b('0x1e')]
                        }
                    }, [_0xcdfbb0[_0x217b('0x20')](_0x35886f, _0xcdfbb0[_0x217b('0x21')], {
                            'ref': _0xcdfbb0[_0x217b('0x23')],
                            'attrs': { 'options': _0x5d6f10[_0x217b('0x2d')] }
                        })], 0x1)]),
                _0xcdfbb0[_0x217b('0x25')](_0x35886f, _0xcdfbb0[_0x217b('0xb')], {
                    'attrs': {
                        'label': _0xcdfbb0[_0x217b('0x26')],
                        'name': _0xcdfbb0[_0x217b('0x28')]
                    }
                }, [_0x5d6f10['_v'](_0xcdfbb0[_0x217b('0x26')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x20ae39 = {};
            _0x20ae39[_0x217b('0x2e')] = function (_0x4e30dd, _0x402e77, _0x17b47d, _0x454d92) {
                return _0x4e30dd(_0x402e77, _0x17b47d, _0x454d92);
            };
            _0x20ae39[_0x217b('0x2f')] = _0x217b('0x2');
            _0x20ae39[_0x217b('0x30')] = _0x217b('0x31');
            _0x20ae39[_0x217b('0x32')] = _0x217b('0x33');
            _0x20ae39[_0x217b('0x34')] = _0x217b('0x35');
            _0x20ae39[_0x217b('0x36')] = _0x217b('0x37');
            _0x20ae39[_0x217b('0x38')] = function (_0x38acd1, _0x374c9d, _0x5c47c9) {
                return _0x38acd1(_0x374c9d, _0x5c47c9);
            };
            _0x20ae39[_0x217b('0x39')] = _0x217b('0x3a');
            var _0xa35902 = this, _0xe2e5b3 = _0xa35902[_0x217b('0x2a')], _0x2d8e50 = _0xa35902[_0x217b('0x2b')]['_c'] || _0xe2e5b3;
            return _0x20ae39[_0x217b('0x2e')](_0x2d8e50, _0x20ae39[_0x217b('0x2f')], {
                'staticStyle': {
                    'padding': _0x20ae39[_0x217b('0x30')],
                    'color': _0x20ae39[_0x217b('0x32')],
                    'width': _0x20ae39[_0x217b('0x34')]
                }
            }, [
                _0xa35902['_v'](_0x20ae39[_0x217b('0x36')]),
                _0x20ae39[_0x217b('0x38')](_0x2d8e50, _0x20ae39[_0x217b('0x2f')], [_0xa35902['_v'](_0x20ae39[_0x217b('0x39')])])
            ]);
        }];
const l = {}, o = {};
l[_0x217b('0x3b')] = _0x217b('0x3c');
l[_0x217b('0x3d')] = {};
l[_0x217b('0x3e')] = function () {
    var _0x19022a = {
        tJKzw: _0x217b('0x10'),
        fyzOq: _0x217b('0x3f'),
        mgUUq: _0x217b('0x40'),
        NFzJg: _0x217b('0x41'),
        gtwHZ: _0x217b('0x42'),
        sdvPA: _0x217b('0x43'),
        QznSo: _0x217b('0x44'),
        UmAtx: _0x217b('0x45'),
        UTCjz: _0x217b('0x46'),
        PeRSa: _0x217b('0x47'),
        okdIE: _0x217b('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x19022a.tJKzw,
        demoname: _0x19022a.fyzOq,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x19022a.mgUUq,
                    layoutClassName: _0x19022a.NFzJg,
                    defaultJunctionPoint: _0x19022a.gtwHZ,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x19022a.sdvPA,
                    max_per_width: _0x19022a.QznSo,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x19022a.UmAtx
            },
            defaultExpandHolderPosition: _0x19022a.UTCjz,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x19022a.PeRSa,
            defaultNodeColor: _0x19022a.okdIE
        }
    };
};
l[_0x217b('0x49')] = function () {
};
l[_0x217b('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x217b('0x4b')] = {};
l[_0x217b('0x4b')][_0x217b('0x4c')] = function () {
    var _0x4a8d15 = {
        MVJaf: _0x217b('0x4d'),
        WxjCP: _0x217b('0x4e'),
        NoPcS: _0x217b('0x4f'),
        SthlU: _0x217b('0x50'),
        qsluU: _0x217b('0x51'),
        wPkpQ: _0x217b('0x52'),
        GlLgV: _0x217b('0x53'),
        QrTac: _0x217b('0x54'),
        ncgHt: function (_0x34fe8d, _0x4dd4ad, _0x4f4eb6) {
            return _0x34fe8d(_0x4dd4ad, _0x4f4eb6);
        }
    };
    const _0x5450f6 = {
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
                id: _0x4a8d15.MVJaf,
                text: _0x4a8d15.MVJaf
            },
            {
                id: _0x4a8d15.WxjCP,
                text: _0x4a8d15.WxjCP
            },
            {
                id: _0x4a8d15.NoPcS,
                text: _0x4a8d15.NoPcS
            },
            {
                id: _0x4a8d15.SthlU,
                text: _0x4a8d15.SthlU
            },
            {
                id: _0x4a8d15.qsluU,
                text: _0x4a8d15.qsluU
            },
            {
                id: _0x4a8d15.wPkpQ,
                text: _0x4a8d15.wPkpQ
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x4a8d15.GlLgV,
                text: _0x4a8d15.GlLgV
            },
            {
                id: _0x4a8d15.QrTac,
                text: _0x4a8d15.QrTac
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
                to: _0x4a8d15.MVJaf
            },
            {
                from: 'b1',
                to: _0x4a8d15.WxjCP
            },
            {
                from: 'b1',
                to: _0x4a8d15.NoPcS
            },
            {
                from: 'b1',
                to: _0x4a8d15.SthlU
            },
            {
                from: 'b1',
                to: _0x4a8d15.qsluU
            },
            {
                from: 'b1',
                to: _0x4a8d15.wPkpQ
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x4a8d15.GlLgV
            },
            {
                from: 'b2',
                to: _0x4a8d15.QrTac
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
    console.log(JSON.stringify(_0x5450f6)), _0x4a8d15.ncgHt(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x5450f6, _0x23daf0 => {
            _0x23daf0.refresh();
        });
    }, 0x3e8);
};
l[_0x217b('0x4b')][_0x217b('0x2c')] = function (_0x4fc86b, _0x3cc643) {
    var _0x4f8036 = {
        TKzhq: _0x217b('0x55'),
        tiTEC: function (_0x109228, _0x1c0868) {
            return _0x109228 === _0x1c0868;
        },
        SNtuD: _0x217b('0x14')
    };
    console.log(_0x4f8036.TKzhq, this.activeTabName), _0x4f8036.tiTEC(this.activeTabName, _0x4f8036.SNtuD) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x16aceb(l, n, d, !0x1, c, null, null, null);
function c(_0x372814) {
    for (let _0x153b3d in o)
        this[_0x153b3d] = o[_0x153b3d];
}
const m = function () {
    return s[_0x217b('0x56')];
}();
export {
    m as default
};