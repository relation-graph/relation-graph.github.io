
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x43e7 = [
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
    'MOaXV',
    'VdOUb',
    'div',
    'EZxdz',
    'vwhsC',
    'el-tabs',
    'kxgiS',
    'card',
    'KjFiI',
    'activeTabName',
    'fIRfz',
    'el-tab-pane',
    'xBVZx',
    '基本信息',
    'ZEGKT',
    'base',
    'HXhRW',
    '关系图谱（点这里）',
    'NfOcG',
    'relation',
    'TVWAT',
    'JFZXQ',
    'loading',
    'GZeHH',
    'v-loading',
    'IPSWi',
    'g_loading',
    'hEEsT',
    'calc(100%)',
    'elxpu',
    'calc(100vh\x20-\x20300px)',
    'HkdPM',
    'SGoEX',
    'RelationGraph',
    'ixdbC',
    'graphRef',
    'YaKLx',
    'KjClj',
    '风险信息',
    'rxcZU',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'prdEp',
    'MgAwJ',
    'tkaSA',
    '20px',
    'fEykV',
    '#666666',
    'BZFhg',
    '600px',
    'oAjCA',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'NRvrW',
    'VQRYe',
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
    '100'
];
(function (_0x20e158, _0x21330d) {
    var _0x1664a3 = function (_0x5a8ac3) {
        while (--_0x5a8ac3) {
            _0x20e158['push'](_0x20e158['shift']());
        }
    };
    _0x1664a3(++_0x21330d);
}(_0x43e7, 0x1c3));
var _0x297e = function (_0x12fa0d, _0x16951d) {
    _0x12fa0d = _0x12fa0d - 0x0;
    var _0x11786e = _0x43e7[_0x12fa0d];
    return _0x11786e;
};
import { n as _0x3b02de } from './index-28740cc1.js';
var n = function () {
        var _0x13eead = {};
        _0x13eead[_0x297e('0x0')] = function (_0x30721a, _0x12db7f, _0x2d81de, _0x8fd2af) {
            return _0x30721a(_0x12db7f, _0x2d81de, _0x8fd2af);
        };
        _0x13eead[_0x297e('0x1')] = _0x297e('0x2');
        _0x13eead[_0x297e('0x3')] = function (_0x5e6425, _0x436036, _0x13a735, _0x2798e5, _0x2e06fe) {
            return _0x5e6425(_0x436036, _0x13a735, _0x2798e5, _0x2e06fe);
        };
        _0x13eead[_0x297e('0x4')] = _0x297e('0x5');
        _0x13eead[_0x297e('0x6')] = _0x297e('0x7');
        _0x13eead[_0x297e('0x8')] = _0x297e('0x9');
        _0x13eead[_0x297e('0xa')] = _0x297e('0xb');
        _0x13eead[_0x297e('0xc')] = _0x297e('0xd');
        _0x13eead[_0x297e('0xe')] = _0x297e('0xf');
        _0x13eead[_0x297e('0x10')] = _0x297e('0x11');
        _0x13eead[_0x297e('0x12')] = _0x297e('0x13');
        _0x13eead[_0x297e('0x14')] = function (_0x5c1203, _0x5f2274, _0x746b99, _0x4cfa75, _0x47bbda) {
            return _0x5c1203(_0x5f2274, _0x746b99, _0x4cfa75, _0x47bbda);
        };
        _0x13eead[_0x297e('0x15')] = _0x297e('0x16');
        _0x13eead[_0x297e('0x17')] = _0x297e('0x18');
        _0x13eead[_0x297e('0x19')] = _0x297e('0x1a');
        _0x13eead[_0x297e('0x1b')] = _0x297e('0x1c');
        _0x13eead[_0x297e('0x1d')] = _0x297e('0x1e');
        _0x13eead[_0x297e('0x1f')] = function (_0x4f93fd, _0x4004ad, _0x500c07) {
            return _0x4f93fd(_0x4004ad, _0x500c07);
        };
        _0x13eead[_0x297e('0x20')] = _0x297e('0x21');
        _0x13eead[_0x297e('0x22')] = _0x297e('0x23');
        _0x13eead[_0x297e('0x24')] = function (_0x168a05, _0x1c3b7c, _0x487214, _0x26c1e9) {
            return _0x168a05(_0x1c3b7c, _0x487214, _0x26c1e9);
        };
        _0x13eead[_0x297e('0x25')] = _0x297e('0x26');
        _0x13eead[_0x297e('0x27')] = _0x297e('0x28');
        var _0x49efd3 = this, _0x1f795c = _0x49efd3[_0x297e('0x29')], _0x8951f6 = _0x49efd3[_0x297e('0x2a')]['_c'] || _0x1f795c;
        return _0x13eead[_0x297e('0x0')](_0x8951f6, _0x13eead[_0x297e('0x1')], [
            _0x49efd3['_m'](0x0),
            _0x13eead[_0x297e('0x3')](_0x8951f6, _0x13eead[_0x297e('0x4')], {
                'attrs': { 'type': _0x13eead[_0x297e('0x6')] },
                'on': { 'tab-click': _0x49efd3[_0x297e('0x2b')] },
                'model': {
                    'value': _0x49efd3[_0x297e('0x9')],
                    'callback': function (_0x227ebe) {
                        _0x49efd3[_0x297e('0x9')] = _0x227ebe;
                    },
                    'expression': _0x13eead[_0x297e('0x8')]
                }
            }, [
                _0x13eead[_0x297e('0x0')](_0x8951f6, _0x13eead[_0x297e('0xa')], {
                    'attrs': {
                        'label': _0x13eead[_0x297e('0xc')],
                        'name': _0x13eead[_0x297e('0xe')]
                    }
                }, [_0x49efd3['_v'](_0x13eead[_0x297e('0xc')])]),
                _0x13eead[_0x297e('0x0')](_0x8951f6, _0x13eead[_0x297e('0xa')], {
                    'attrs': {
                        'label': _0x13eead[_0x297e('0x10')],
                        'name': _0x13eead[_0x297e('0x12')]
                    }
                }, [_0x13eead[_0x297e('0x14')](_0x8951f6, _0x13eead[_0x297e('0x1')], {
                        'directives': [{
                                'name': _0x13eead[_0x297e('0x15')],
                                'rawName': _0x13eead[_0x297e('0x17')],
                                'value': _0x49efd3[_0x297e('0x1a')],
                                'expression': _0x13eead[_0x297e('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x13eead[_0x297e('0x1b')],
                            'height': _0x13eead[_0x297e('0x1d')]
                        }
                    }, [_0x13eead[_0x297e('0x1f')](_0x8951f6, _0x13eead[_0x297e('0x20')], {
                            'ref': _0x13eead[_0x297e('0x22')],
                            'attrs': { 'options': _0x49efd3[_0x297e('0x2c')] }
                        })], 0x1)]),
                _0x13eead[_0x297e('0x24')](_0x8951f6, _0x13eead[_0x297e('0xa')], {
                    'attrs': {
                        'label': _0x13eead[_0x297e('0x25')],
                        'name': _0x13eead[_0x297e('0x27')]
                    }
                }, [_0x49efd3['_v'](_0x13eead[_0x297e('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x2a0b91 = {};
            _0x2a0b91[_0x297e('0x2d')] = function (_0x1740ce, _0x174fb1, _0x49ec92, _0x33cfb9) {
                return _0x1740ce(_0x174fb1, _0x49ec92, _0x33cfb9);
            };
            _0x2a0b91[_0x297e('0x2e')] = _0x297e('0x2');
            _0x2a0b91[_0x297e('0x2f')] = _0x297e('0x30');
            _0x2a0b91[_0x297e('0x31')] = _0x297e('0x32');
            _0x2a0b91[_0x297e('0x33')] = _0x297e('0x34');
            _0x2a0b91[_0x297e('0x35')] = _0x297e('0x36');
            _0x2a0b91[_0x297e('0x37')] = function (_0x4c4735, _0x3b7bf6, _0x554d66) {
                return _0x4c4735(_0x3b7bf6, _0x554d66);
            };
            _0x2a0b91[_0x297e('0x38')] = _0x297e('0x39');
            var _0x34c708 = this, _0x57661c = _0x34c708[_0x297e('0x29')], _0x3ac8be = _0x34c708[_0x297e('0x2a')]['_c'] || _0x57661c;
            return _0x2a0b91[_0x297e('0x2d')](_0x3ac8be, _0x2a0b91[_0x297e('0x2e')], {
                'staticStyle': {
                    'padding': _0x2a0b91[_0x297e('0x2f')],
                    'color': _0x2a0b91[_0x297e('0x31')],
                    'width': _0x2a0b91[_0x297e('0x33')]
                }
            }, [
                _0x34c708['_v'](_0x2a0b91[_0x297e('0x35')]),
                _0x2a0b91[_0x297e('0x37')](_0x3ac8be, _0x2a0b91[_0x297e('0x2e')], [_0x34c708['_v'](_0x2a0b91[_0x297e('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x297e('0x3a')] = _0x297e('0x3b');
l[_0x297e('0x3c')] = {};
l[_0x297e('0x3d')] = function () {
    var _0xca0bb0 = {
        nXmwy: _0x297e('0xf'),
        jsYse: _0x297e('0x3e'),
        TxdFh: _0x297e('0x3f'),
        kbIeK: _0x297e('0x40'),
        XyXwq: _0x297e('0x41'),
        heanw: _0x297e('0x42'),
        imjqD: _0x297e('0x43'),
        swYDm: _0x297e('0x44'),
        HvGIc: _0x297e('0x45'),
        zypeu: _0x297e('0x46'),
        yWDcr: _0x297e('0x47'),
        AzyAD: _0x297e('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0xca0bb0.nXmwy,
        demoname: _0xca0bb0.jsYse,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0xca0bb0.TxdFh,
                    layoutClassName: _0xca0bb0.kbIeK,
                    defaultJunctionPoint: _0xca0bb0.XyXwq,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0xca0bb0.heanw,
                    max_per_width: _0xca0bb0.imjqD,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0xca0bb0.swYDm
            },
            defaultExpandHolderPosition: _0xca0bb0.HvGIc,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0xca0bb0.zypeu,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0xca0bb0.yWDcr,
            defaultNodeColor: _0xca0bb0.AzyAD
        }
    };
};
l[_0x297e('0x49')] = function () {
};
l[_0x297e('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x297e('0x4b')] = {};
l[_0x297e('0x4b')][_0x297e('0x4c')] = function () {
    var _0x30b13a = {
        JTcLf: _0x297e('0x4d'),
        ggFUV: _0x297e('0x4e'),
        lucCB: _0x297e('0x4f'),
        zVduk: _0x297e('0x50'),
        WNwKj: _0x297e('0x51'),
        vmsvY: _0x297e('0x52'),
        laSCx: _0x297e('0x53'),
        xRCTZ: _0x297e('0x54'),
        duXAN: function (_0x3cdd92, _0x16e851, _0x108e1d) {
            return _0x3cdd92(_0x16e851, _0x108e1d);
        }
    };
    const _0x1488a4 = {
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
                id: _0x30b13a.JTcLf,
                text: _0x30b13a.JTcLf
            },
            {
                id: _0x30b13a.ggFUV,
                text: _0x30b13a.ggFUV
            },
            {
                id: _0x30b13a.lucCB,
                text: _0x30b13a.lucCB
            },
            {
                id: _0x30b13a.zVduk,
                text: _0x30b13a.zVduk
            },
            {
                id: _0x30b13a.WNwKj,
                text: _0x30b13a.WNwKj
            },
            {
                id: _0x30b13a.vmsvY,
                text: _0x30b13a.vmsvY
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x30b13a.laSCx,
                text: _0x30b13a.laSCx
            },
            {
                id: _0x30b13a.xRCTZ,
                text: _0x30b13a.xRCTZ
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
                to: _0x30b13a.JTcLf
            },
            {
                from: 'b1',
                to: _0x30b13a.ggFUV
            },
            {
                from: 'b1',
                to: _0x30b13a.lucCB
            },
            {
                from: 'b1',
                to: _0x30b13a.zVduk
            },
            {
                from: 'b1',
                to: _0x30b13a.WNwKj
            },
            {
                from: 'b1',
                to: _0x30b13a.vmsvY
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x30b13a.laSCx
            },
            {
                from: 'b2',
                to: _0x30b13a.xRCTZ
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
    console.log(JSON.stringify(_0x1488a4)), _0x30b13a.duXAN(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x1488a4, _0x26faca => {
            _0x26faca.refresh();
        });
    }, 0x3e8);
};
l[_0x297e('0x4b')][_0x297e('0x2b')] = function (_0x47779d, _0x10c06d) {
    var _0xb145f8 = {
        XFhgm: _0x297e('0x55'),
        RWKfr: function (_0x188110, _0x28ddb6) {
            return _0x188110 === _0x28ddb6;
        },
        bebkh: _0x297e('0x13')
    };
    console.log(_0xb145f8.XFhgm, this.activeTabName), _0xb145f8.RWKfr(this.activeTabName, _0xb145f8.bebkh) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x3b02de(l, n, d, !0x1, c, null, null, null);
function c(_0x4b7639) {
    for (let _0x3e67aa in o)
        this[_0x3e67aa] = o[_0x3e67aa];
}
const m = function () {
    return s[_0x297e('0x56')];
}();
export {
    m as default
};