
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x582a = [
    'FkzFp',
    'el-tab-pane',
    'zxNyJ',
    '基本信息',
    'FXDIY',
    'base',
    'xEYNE',
    'dnxEt',
    '关系图谱（点这里）',
    'fEXeB',
    'relation',
    'PjYcL',
    'mWZzt',
    'loading',
    'sGmuK',
    'v-loading',
    'yPpdU',
    'g_loading',
    'fXLCO',
    'calc(100%)',
    'hLDJd',
    'calc(100vh\x20-\x20300px)',
    'ReBPS',
    'wOQLZ',
    'RelationGraph',
    'evpXD',
    'graphRef',
    'yDHOR',
    'HxKtN',
    '风险信息',
    'yeyxL',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'voUGe',
    'uZCFV',
    'zvskI',
    '20px',
    'DbjiT',
    '#666666',
    'wJjyn',
    '600px',
    'ZdRSH',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'AnyFB',
    'aHoDk',
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
    'fTgGk',
    'FvrGY',
    'div',
    'zannl',
    'itGpQ',
    'el-tabs',
    'foNVN',
    'card',
    'uuQmM',
    'activeTabName',
    'SKrsc'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x582a, 0x1ad));
var _0x5c3e = function (_0x5805ee, _0x4b2ca7) {
    _0x5805ee = _0x5805ee - 0x0;
    var _0x19aae9 = _0x582a[_0x5805ee];
    return _0x19aae9;
};
import { n as _0x2f51f7 } from './index-d3c29682.js';
var n = function () {
        var _0x58939e = {};
        _0x58939e[_0x5c3e('0x0')] = function (_0x2a343c, _0x3b3c49, _0x59c55e, _0x2dfe22) {
            return _0x2a343c(_0x3b3c49, _0x59c55e, _0x2dfe22);
        };
        _0x58939e[_0x5c3e('0x1')] = _0x5c3e('0x2');
        _0x58939e[_0x5c3e('0x3')] = function (_0x9f2182, _0x525535, _0x222041, _0x5c0417, _0x499220) {
            return _0x9f2182(_0x525535, _0x222041, _0x5c0417, _0x499220);
        };
        _0x58939e[_0x5c3e('0x4')] = _0x5c3e('0x5');
        _0x58939e[_0x5c3e('0x6')] = _0x5c3e('0x7');
        _0x58939e[_0x5c3e('0x8')] = _0x5c3e('0x9');
        _0x58939e[_0x5c3e('0xa')] = function (_0x4514b1, _0x2f81ec, _0x3bf709, _0x1b3bba) {
            return _0x4514b1(_0x2f81ec, _0x3bf709, _0x1b3bba);
        };
        _0x58939e[_0x5c3e('0xb')] = _0x5c3e('0xc');
        _0x58939e[_0x5c3e('0xd')] = _0x5c3e('0xe');
        _0x58939e[_0x5c3e('0xf')] = _0x5c3e('0x10');
        _0x58939e[_0x5c3e('0x11')] = function (_0x4a4bae, _0x5afde7, _0x2dd30c, _0x580d73) {
            return _0x4a4bae(_0x5afde7, _0x2dd30c, _0x580d73);
        };
        _0x58939e[_0x5c3e('0x12')] = _0x5c3e('0x13');
        _0x58939e[_0x5c3e('0x14')] = _0x5c3e('0x15');
        _0x58939e[_0x5c3e('0x16')] = function (_0x552114, _0x1d807b, _0x4e4123, _0x1a9396, _0x1470e1) {
            return _0x552114(_0x1d807b, _0x4e4123, _0x1a9396, _0x1470e1);
        };
        _0x58939e[_0x5c3e('0x17')] = _0x5c3e('0x18');
        _0x58939e[_0x5c3e('0x19')] = _0x5c3e('0x1a');
        _0x58939e[_0x5c3e('0x1b')] = _0x5c3e('0x1c');
        _0x58939e[_0x5c3e('0x1d')] = _0x5c3e('0x1e');
        _0x58939e[_0x5c3e('0x1f')] = _0x5c3e('0x20');
        _0x58939e[_0x5c3e('0x21')] = function (_0x5405cd, _0x50d6d8, _0x62a104) {
            return _0x5405cd(_0x50d6d8, _0x62a104);
        };
        _0x58939e[_0x5c3e('0x22')] = _0x5c3e('0x23');
        _0x58939e[_0x5c3e('0x24')] = _0x5c3e('0x25');
        _0x58939e[_0x5c3e('0x26')] = function (_0xdee464, _0x184ec5, _0x266057, _0x2d7773) {
            return _0xdee464(_0x184ec5, _0x266057, _0x2d7773);
        };
        _0x58939e[_0x5c3e('0x27')] = _0x5c3e('0x28');
        _0x58939e[_0x5c3e('0x29')] = _0x5c3e('0x2a');
        var _0x32ed27 = this, _0x3f0544 = _0x32ed27[_0x5c3e('0x2b')], _0x3a32f9 = _0x32ed27[_0x5c3e('0x2c')]['_c'] || _0x3f0544;
        return _0x58939e[_0x5c3e('0x0')](_0x3a32f9, _0x58939e[_0x5c3e('0x1')], [
            _0x32ed27['_m'](0x0),
            _0x58939e[_0x5c3e('0x3')](_0x3a32f9, _0x58939e[_0x5c3e('0x4')], {
                'attrs': { 'type': _0x58939e[_0x5c3e('0x6')] },
                'on': { 'tab-click': _0x32ed27[_0x5c3e('0x2d')] },
                'model': {
                    'value': _0x32ed27[_0x5c3e('0x9')],
                    'callback': function (_0x5c24a0) {
                        _0x32ed27[_0x5c3e('0x9')] = _0x5c24a0;
                    },
                    'expression': _0x58939e[_0x5c3e('0x8')]
                }
            }, [
                _0x58939e[_0x5c3e('0xa')](_0x3a32f9, _0x58939e[_0x5c3e('0xb')], {
                    'attrs': {
                        'label': _0x58939e[_0x5c3e('0xd')],
                        'name': _0x58939e[_0x5c3e('0xf')]
                    }
                }, [_0x32ed27['_v'](_0x58939e[_0x5c3e('0xd')])]),
                _0x58939e[_0x5c3e('0x11')](_0x3a32f9, _0x58939e[_0x5c3e('0xb')], {
                    'attrs': {
                        'label': _0x58939e[_0x5c3e('0x12')],
                        'name': _0x58939e[_0x5c3e('0x14')]
                    }
                }, [_0x58939e[_0x5c3e('0x16')](_0x3a32f9, _0x58939e[_0x5c3e('0x1')], {
                        'directives': [{
                                'name': _0x58939e[_0x5c3e('0x17')],
                                'rawName': _0x58939e[_0x5c3e('0x19')],
                                'value': _0x32ed27[_0x5c3e('0x1c')],
                                'expression': _0x58939e[_0x5c3e('0x1b')]
                            }],
                        'staticStyle': {
                            'width': _0x58939e[_0x5c3e('0x1d')],
                            'height': _0x58939e[_0x5c3e('0x1f')]
                        }
                    }, [_0x58939e[_0x5c3e('0x21')](_0x3a32f9, _0x58939e[_0x5c3e('0x22')], {
                            'ref': _0x58939e[_0x5c3e('0x24')],
                            'attrs': { 'options': _0x32ed27[_0x5c3e('0x2e')] }
                        })], 0x1)]),
                _0x58939e[_0x5c3e('0x26')](_0x3a32f9, _0x58939e[_0x5c3e('0xb')], {
                    'attrs': {
                        'label': _0x58939e[_0x5c3e('0x27')],
                        'name': _0x58939e[_0x5c3e('0x29')]
                    }
                }, [_0x32ed27['_v'](_0x58939e[_0x5c3e('0x27')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x1daa7d = {};
            _0x1daa7d[_0x5c3e('0x2f')] = function (_0x12f788, _0x4c5e9d, _0x5c0dc3, _0x908742) {
                return _0x12f788(_0x4c5e9d, _0x5c0dc3, _0x908742);
            };
            _0x1daa7d[_0x5c3e('0x30')] = _0x5c3e('0x2');
            _0x1daa7d[_0x5c3e('0x31')] = _0x5c3e('0x32');
            _0x1daa7d[_0x5c3e('0x33')] = _0x5c3e('0x34');
            _0x1daa7d[_0x5c3e('0x35')] = _0x5c3e('0x36');
            _0x1daa7d[_0x5c3e('0x37')] = _0x5c3e('0x38');
            _0x1daa7d[_0x5c3e('0x39')] = function (_0x1a8774, _0xb394e0, _0x1c785d) {
                return _0x1a8774(_0xb394e0, _0x1c785d);
            };
            _0x1daa7d[_0x5c3e('0x3a')] = _0x5c3e('0x3b');
            var _0x334552 = this, _0x1e2785 = _0x334552[_0x5c3e('0x2b')], _0x3caf91 = _0x334552[_0x5c3e('0x2c')]['_c'] || _0x1e2785;
            return _0x1daa7d[_0x5c3e('0x2f')](_0x3caf91, _0x1daa7d[_0x5c3e('0x30')], {
                'staticStyle': {
                    'padding': _0x1daa7d[_0x5c3e('0x31')],
                    'color': _0x1daa7d[_0x5c3e('0x33')],
                    'width': _0x1daa7d[_0x5c3e('0x35')]
                }
            }, [
                _0x334552['_v'](_0x1daa7d[_0x5c3e('0x37')]),
                _0x1daa7d[_0x5c3e('0x39')](_0x3caf91, _0x1daa7d[_0x5c3e('0x30')], [_0x334552['_v'](_0x1daa7d[_0x5c3e('0x3a')])])
            ]);
        }];
const l = {}, o = {};
l[_0x5c3e('0x3c')] = _0x5c3e('0x3d');
l[_0x5c3e('0x3e')] = {};
l[_0x5c3e('0x3f')] = function () {
    var _0x12baf0 = {
        eeqMu: _0x5c3e('0x10'),
        smydN: _0x5c3e('0x40'),
        RzPQh: _0x5c3e('0x41'),
        HegxT: _0x5c3e('0x42'),
        NfYLC: _0x5c3e('0x43'),
        XGLdC: _0x5c3e('0x44'),
        FADQf: _0x5c3e('0x45'),
        qExgN: _0x5c3e('0x46'),
        vVwIl: _0x5c3e('0x47'),
        zsoZf: _0x5c3e('0x48'),
        Naufa: _0x5c3e('0x49')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x12baf0.eeqMu,
        demoname: _0x12baf0.smydN,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x12baf0.RzPQh,
                    layoutClassName: _0x12baf0.HegxT,
                    defaultJunctionPoint: _0x12baf0.NfYLC,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x12baf0.XGLdC,
                    max_per_width: _0x12baf0.FADQf,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x12baf0.qExgN
            },
            defaultExpandHolderPosition: _0x12baf0.vVwIl,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x12baf0.zsoZf,
            defaultNodeColor: _0x12baf0.Naufa
        }
    };
};
l[_0x5c3e('0x4a')] = function () {
};
l[_0x5c3e('0x4b')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x5c3e('0x4c')] = {};
l[_0x5c3e('0x4c')][_0x5c3e('0x4d')] = function () {
    var _0x4aa33f = {
        qkzlo: _0x5c3e('0x4e'),
        FSswU: _0x5c3e('0x4f'),
        mhIiE: _0x5c3e('0x50'),
        HcTYs: _0x5c3e('0x51'),
        IPLhe: _0x5c3e('0x52'),
        yHegt: _0x5c3e('0x53'),
        MKQkE: _0x5c3e('0x54'),
        rgaPA: _0x5c3e('0x55'),
        ewcUQ: function (_0x5222fa, _0x5dfb88, _0xe5c579) {
            return _0x5222fa(_0x5dfb88, _0xe5c579);
        }
    };
    const _0x54e28f = {
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
                id: _0x4aa33f.qkzlo,
                text: _0x4aa33f.qkzlo
            },
            {
                id: _0x4aa33f.FSswU,
                text: _0x4aa33f.FSswU
            },
            {
                id: _0x4aa33f.mhIiE,
                text: _0x4aa33f.mhIiE
            },
            {
                id: _0x4aa33f.HcTYs,
                text: _0x4aa33f.HcTYs
            },
            {
                id: _0x4aa33f.IPLhe,
                text: _0x4aa33f.IPLhe
            },
            {
                id: _0x4aa33f.yHegt,
                text: _0x4aa33f.yHegt
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x4aa33f.MKQkE,
                text: _0x4aa33f.MKQkE
            },
            {
                id: _0x4aa33f.rgaPA,
                text: _0x4aa33f.rgaPA
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
                to: _0x4aa33f.qkzlo
            },
            {
                from: 'b1',
                to: _0x4aa33f.FSswU
            },
            {
                from: 'b1',
                to: _0x4aa33f.mhIiE
            },
            {
                from: 'b1',
                to: _0x4aa33f.HcTYs
            },
            {
                from: 'b1',
                to: _0x4aa33f.IPLhe
            },
            {
                from: 'b1',
                to: _0x4aa33f.yHegt
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x4aa33f.MKQkE
            },
            {
                from: 'b2',
                to: _0x4aa33f.rgaPA
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
    console.log(JSON.stringify(_0x54e28f)), _0x4aa33f.ewcUQ(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x54e28f, _0x2673b9 => {
            _0x2673b9.refresh();
        });
    }, 0x3e8);
};
l[_0x5c3e('0x4c')][_0x5c3e('0x2d')] = function (_0x2b65a9, _0x34707f) {
    var _0x51c18e = {
        zenXi: _0x5c3e('0x56'),
        QXQqO: function (_0x437ce3, _0x203869) {
            return _0x437ce3 === _0x203869;
        },
        Gmagf: _0x5c3e('0x15')
    };
    console.log(_0x51c18e.zenXi, this.activeTabName), _0x51c18e.QXQqO(this.activeTabName, _0x51c18e.Gmagf) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x2f51f7(l, n, d, !0x1, c, null, null, null);
function c(_0x591498) {
    for (let _0x12f3c3 in o)
        this[_0x12f3c3] = o[_0x12f3c3];
}
const m = function () {
    return s[_0x5c3e('0x57')];
}();
export {
    m as default
};