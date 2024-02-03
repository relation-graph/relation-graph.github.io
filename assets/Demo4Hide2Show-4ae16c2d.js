
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x53de = [
    'el-tabs',
    'mRNEy',
    'card',
    'AXeFh',
    'activeTabName',
    'gniem',
    'el-tab-pane',
    'jyzfD',
    '基本信息',
    'fhhsw',
    'base',
    'sRGQZ',
    '关系图谱（点这里）',
    'uODDd',
    'relation',
    'tSfFG',
    'Stvoh',
    'loading',
    'GaBaE',
    'v-loading',
    'oSsLo',
    'g_loading',
    'Gcxug',
    'calc(100%)',
    'maMWs',
    'calc(100vh\x20-\x20300px)',
    'JiVcZ',
    'BYDCx',
    'RelationGraph',
    'FIuUS',
    'graphRef',
    'PEgDX',
    '风险信息',
    'DFrUQ',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'qIAMr',
    'bysbO',
    'LrBDX',
    '20px',
    'hZRrM',
    '#666666',
    'OwiTk',
    '600px',
    'kOSaw',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'tFFny',
    'MybQi',
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
    'GItSO',
    'qWwkb',
    'div',
    'ZyNmF',
    'SiDIC'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x53de, 0x1a4));
var _0xed7a = function (_0x40b027, _0x18b46c) {
    _0x40b027 = _0x40b027 - 0x0;
    var _0x4fe6b8 = _0x53de[_0x40b027];
    return _0x4fe6b8;
};
import { n as _0x312299 } from './index-bc1c6247.js';
var n = function () {
        var _0x4d0722 = {};
        _0x4d0722[_0xed7a('0x0')] = function (_0x4b38ba, _0x4ca54e, _0x3bb3e3, _0x1af170) {
            return _0x4b38ba(_0x4ca54e, _0x3bb3e3, _0x1af170);
        };
        _0x4d0722[_0xed7a('0x1')] = _0xed7a('0x2');
        _0x4d0722[_0xed7a('0x3')] = function (_0x3cb4f9, _0x48c1a1, _0x76b2d3, _0x35128b, _0x20336e) {
            return _0x3cb4f9(_0x48c1a1, _0x76b2d3, _0x35128b, _0x20336e);
        };
        _0x4d0722[_0xed7a('0x4')] = _0xed7a('0x5');
        _0x4d0722[_0xed7a('0x6')] = _0xed7a('0x7');
        _0x4d0722[_0xed7a('0x8')] = _0xed7a('0x9');
        _0x4d0722[_0xed7a('0xa')] = _0xed7a('0xb');
        _0x4d0722[_0xed7a('0xc')] = _0xed7a('0xd');
        _0x4d0722[_0xed7a('0xe')] = _0xed7a('0xf');
        _0x4d0722[_0xed7a('0x10')] = _0xed7a('0x11');
        _0x4d0722[_0xed7a('0x12')] = _0xed7a('0x13');
        _0x4d0722[_0xed7a('0x14')] = function (_0x3da1da, _0x129385, _0x2fc044, _0xdb88ae, _0x2e139c) {
            return _0x3da1da(_0x129385, _0x2fc044, _0xdb88ae, _0x2e139c);
        };
        _0x4d0722[_0xed7a('0x15')] = _0xed7a('0x16');
        _0x4d0722[_0xed7a('0x17')] = _0xed7a('0x18');
        _0x4d0722[_0xed7a('0x19')] = _0xed7a('0x1a');
        _0x4d0722[_0xed7a('0x1b')] = _0xed7a('0x1c');
        _0x4d0722[_0xed7a('0x1d')] = _0xed7a('0x1e');
        _0x4d0722[_0xed7a('0x1f')] = function (_0xd65c36, _0x524538, _0x5a2356) {
            return _0xd65c36(_0x524538, _0x5a2356);
        };
        _0x4d0722[_0xed7a('0x20')] = _0xed7a('0x21');
        _0x4d0722[_0xed7a('0x22')] = _0xed7a('0x23');
        _0x4d0722[_0xed7a('0x24')] = _0xed7a('0x25');
        _0x4d0722[_0xed7a('0x26')] = _0xed7a('0x27');
        var _0x7f3e53 = this, _0x10aed7 = _0x7f3e53[_0xed7a('0x28')], _0x4b607b = _0x7f3e53[_0xed7a('0x29')]['_c'] || _0x10aed7;
        return _0x4d0722[_0xed7a('0x0')](_0x4b607b, _0x4d0722[_0xed7a('0x1')], [
            _0x7f3e53['_m'](0x0),
            _0x4d0722[_0xed7a('0x3')](_0x4b607b, _0x4d0722[_0xed7a('0x4')], {
                'attrs': { 'type': _0x4d0722[_0xed7a('0x6')] },
                'on': { 'tab-click': _0x7f3e53[_0xed7a('0x2a')] },
                'model': {
                    'value': _0x7f3e53[_0xed7a('0x9')],
                    'callback': function (_0x477817) {
                        _0x7f3e53[_0xed7a('0x9')] = _0x477817;
                    },
                    'expression': _0x4d0722[_0xed7a('0x8')]
                }
            }, [
                _0x4d0722[_0xed7a('0x0')](_0x4b607b, _0x4d0722[_0xed7a('0xa')], {
                    'attrs': {
                        'label': _0x4d0722[_0xed7a('0xc')],
                        'name': _0x4d0722[_0xed7a('0xe')]
                    }
                }, [_0x7f3e53['_v'](_0x4d0722[_0xed7a('0xc')])]),
                _0x4d0722[_0xed7a('0x0')](_0x4b607b, _0x4d0722[_0xed7a('0xa')], {
                    'attrs': {
                        'label': _0x4d0722[_0xed7a('0x10')],
                        'name': _0x4d0722[_0xed7a('0x12')]
                    }
                }, [_0x4d0722[_0xed7a('0x14')](_0x4b607b, _0x4d0722[_0xed7a('0x1')], {
                        'directives': [{
                                'name': _0x4d0722[_0xed7a('0x15')],
                                'rawName': _0x4d0722[_0xed7a('0x17')],
                                'value': _0x7f3e53[_0xed7a('0x1a')],
                                'expression': _0x4d0722[_0xed7a('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x4d0722[_0xed7a('0x1b')],
                            'height': _0x4d0722[_0xed7a('0x1d')]
                        }
                    }, [_0x4d0722[_0xed7a('0x1f')](_0x4b607b, _0x4d0722[_0xed7a('0x20')], {
                            'ref': _0x4d0722[_0xed7a('0x22')],
                            'attrs': { 'options': _0x7f3e53[_0xed7a('0x2b')] }
                        })], 0x1)]),
                _0x4d0722[_0xed7a('0x0')](_0x4b607b, _0x4d0722[_0xed7a('0xa')], {
                    'attrs': {
                        'label': _0x4d0722[_0xed7a('0x24')],
                        'name': _0x4d0722[_0xed7a('0x26')]
                    }
                }, [_0x7f3e53['_v'](_0x4d0722[_0xed7a('0x24')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x292611 = {};
            _0x292611[_0xed7a('0x2c')] = function (_0x3204b1, _0x26803e, _0x12d26f, _0x11cbb5) {
                return _0x3204b1(_0x26803e, _0x12d26f, _0x11cbb5);
            };
            _0x292611[_0xed7a('0x2d')] = _0xed7a('0x2');
            _0x292611[_0xed7a('0x2e')] = _0xed7a('0x2f');
            _0x292611[_0xed7a('0x30')] = _0xed7a('0x31');
            _0x292611[_0xed7a('0x32')] = _0xed7a('0x33');
            _0x292611[_0xed7a('0x34')] = _0xed7a('0x35');
            _0x292611[_0xed7a('0x36')] = function (_0xd1fdd3, _0x4b5400, _0x5d7ba2) {
                return _0xd1fdd3(_0x4b5400, _0x5d7ba2);
            };
            _0x292611[_0xed7a('0x37')] = _0xed7a('0x38');
            var _0x18023e = this, _0x4e613e = _0x18023e[_0xed7a('0x28')], _0x26f464 = _0x18023e[_0xed7a('0x29')]['_c'] || _0x4e613e;
            return _0x292611[_0xed7a('0x2c')](_0x26f464, _0x292611[_0xed7a('0x2d')], {
                'staticStyle': {
                    'padding': _0x292611[_0xed7a('0x2e')],
                    'color': _0x292611[_0xed7a('0x30')],
                    'width': _0x292611[_0xed7a('0x32')]
                }
            }, [
                _0x18023e['_v'](_0x292611[_0xed7a('0x34')]),
                _0x292611[_0xed7a('0x36')](_0x26f464, _0x292611[_0xed7a('0x2d')], [_0x18023e['_v'](_0x292611[_0xed7a('0x37')])])
            ]);
        }];
const l = {}, o = {};
l[_0xed7a('0x39')] = _0xed7a('0x3a');
l[_0xed7a('0x3b')] = {};
l[_0xed7a('0x3c')] = function () {
    var _0x246844 = {
        EJtjj: _0xed7a('0xf'),
        rHuRD: _0xed7a('0x3d'),
        vzwhA: _0xed7a('0x3e'),
        SFOSp: _0xed7a('0x3f'),
        NyONf: _0xed7a('0x40'),
        rcHHU: _0xed7a('0x41'),
        dbJnP: _0xed7a('0x42'),
        tJBGI: _0xed7a('0x43'),
        bkmnw: _0xed7a('0x44'),
        HmdUv: _0xed7a('0x45'),
        lYbJV: _0xed7a('0x46')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x246844.EJtjj,
        demoname: _0x246844.rHuRD,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x246844.vzwhA,
                    layoutClassName: _0x246844.SFOSp,
                    defaultJunctionPoint: _0x246844.NyONf,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x246844.rcHHU,
                    max_per_width: _0x246844.dbJnP,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x246844.tJBGI
            },
            defaultExpandHolderPosition: _0x246844.bkmnw,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x246844.HmdUv,
            defaultNodeColor: _0x246844.lYbJV
        }
    };
};
l[_0xed7a('0x47')] = function () {
};
l[_0xed7a('0x48')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0xed7a('0x49')] = {};
l[_0xed7a('0x49')][_0xed7a('0x4a')] = function () {
    var _0x143e25 = {
        WxfMR: _0xed7a('0x4b'),
        RQRdQ: _0xed7a('0x4c'),
        NBrGa: _0xed7a('0x4d'),
        KWMNn: _0xed7a('0x4e'),
        LtbUX: _0xed7a('0x4f'),
        Nmcck: _0xed7a('0x50'),
        nZixi: _0xed7a('0x51'),
        ZdwxJ: _0xed7a('0x52'),
        CfzBs: function (_0x49b950, _0x491246, _0x31267d) {
            return _0x49b950(_0x491246, _0x31267d);
        }
    };
    const _0xa2ff81 = {
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
                id: _0x143e25.WxfMR,
                text: _0x143e25.WxfMR
            },
            {
                id: _0x143e25.RQRdQ,
                text: _0x143e25.RQRdQ
            },
            {
                id: _0x143e25.NBrGa,
                text: _0x143e25.NBrGa
            },
            {
                id: _0x143e25.KWMNn,
                text: _0x143e25.KWMNn
            },
            {
                id: _0x143e25.LtbUX,
                text: _0x143e25.LtbUX
            },
            {
                id: _0x143e25.Nmcck,
                text: _0x143e25.Nmcck
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x143e25.nZixi,
                text: _0x143e25.nZixi
            },
            {
                id: _0x143e25.ZdwxJ,
                text: _0x143e25.ZdwxJ
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
                to: _0x143e25.WxfMR
            },
            {
                from: 'b1',
                to: _0x143e25.RQRdQ
            },
            {
                from: 'b1',
                to: _0x143e25.NBrGa
            },
            {
                from: 'b1',
                to: _0x143e25.KWMNn
            },
            {
                from: 'b1',
                to: _0x143e25.LtbUX
            },
            {
                from: 'b1',
                to: _0x143e25.Nmcck
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x143e25.nZixi
            },
            {
                from: 'b2',
                to: _0x143e25.ZdwxJ
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
    console.log(JSON.stringify(_0xa2ff81)), _0x143e25.CfzBs(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0xa2ff81, _0x4ad642 => {
            _0x4ad642.refresh();
        });
    }, 0x3e8);
};
l[_0xed7a('0x49')][_0xed7a('0x2a')] = function (_0x43aed3, _0x721f21) {
    var _0x4cde0a = {
        rjjXR: _0xed7a('0x53'),
        kiHeB: function (_0x27511f, _0x38630e) {
            return _0x27511f === _0x38630e;
        },
        LYwdW: _0xed7a('0x13')
    };
    console.log(_0x4cde0a.rjjXR, this.activeTabName), _0x4cde0a.kiHeB(this.activeTabName, _0x4cde0a.LYwdW) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x312299(l, n, d, !0x1, c, null, null, null);
function c(_0x59d4b4) {
    for (let _0xa10981 in o)
        this[_0xa10981] = o[_0xa10981];
}
const m = function () {
    return s[_0xed7a('0x54')];
}();
export {
    m as default
};