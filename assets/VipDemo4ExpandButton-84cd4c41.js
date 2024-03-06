
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xb3e0 = [
    '#ef6504',
    'right',
    'c2-动态获取子节点',
    'c3-动态获取子节点',
    'onNodeExpand:',
    '这个节点的子节点已经加载过了',
    'loadChildNodesFromRemoteServer',
    '-child-1',
    '-的动态子节点1',
    '-child-2',
    '-的动态子节点2',
    '-child-3',
    '-的动态子节点3',
    '动态子节点',
    'layouts',
    'tree',
    'seeks-layout-center',
    'border',
    'left',
    '300',
    'defaultLineMarker',
    'moveToCenterWhenRefresh',
    'reLayoutWhenExpandedOrCollapsed',
    'defaultExpandHolderPosition',
    'defaultNodeShape',
    'defaultNodeWidth',
    'defaultLineShape',
    'defaultJunctionPoint',
    'defaultNodeBorderWidth',
    'defaultLineColor',
    'rgba(0,\x20186,\x20189,\x201)',
    'defaultNodeColor',
    'rgba(0,\x20206,\x20209,\x201)',
    'markerWidth',
    'markerHeight',
    'refX',
    'refY',
    'M2,2\x20L10,6\x20L2,10\x20L6,6\x20L2,2',
    'exports',
    'hvYlJ',
    'EEENI',
    'div',
    'oYqkK',
    'WBOyb',
    'loading',
    'cXzMI',
    'v-loading',
    'ewsEv',
    'g_loading',
    'OiENl',
    '50px',
    'DqxyS',
    'calc(100%\x20-\x2010px)',
    'cgiop',
    'calc(100vh\x20-\x20140px)',
    'Nbmzr',
    'RelationGraph',
    'omfzQ',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeExpand',
    'name',
    'RelationGraphDemo',
    'components',
    'data',
    '---',
    'created',
    'mounted',
    'methods',
    'setGraphData',
    'b-固定数据展开/关闭',
    '#ff0099',
    '#2fce03',
    'b1-1',
    'b1-2',
    'b1-3',
    'b1-4',
    'b1-5',
    'b1-6',
    '#06a1c4',
    'b2-1',
    'b2-2',
    'c-动态数据展开/关闭',
    '#dcb106',
    'c1-动态获取子节点'
];
(function (_0xbaad99, _0x47b2ba) {
    var _0x3396b6 = function (_0x2e1c8b) {
        while (--_0x2e1c8b) {
            _0xbaad99['push'](_0xbaad99['shift']());
        }
    };
    _0x3396b6(++_0x47b2ba);
}(_0xb3e0, 0x7e));
var _0x28e3 = function (_0x1cdd78, _0xee8a7a) {
    _0x1cdd78 = _0x1cdd78 - 0x0;
    var _0x47e4f4 = _0xb3e0[_0x1cdd78];
    return _0x47e4f4;
};
import { n as _0xac0510 } from './index-a8fcf52e.js';
var r = function () {
        var _0x30b53f = {};
        _0x30b53f[_0x28e3('0x0')] = function (_0x38adaa, _0x3968c9, _0x209c84) {
            return _0x38adaa(_0x3968c9, _0x209c84);
        };
        _0x30b53f[_0x28e3('0x1')] = _0x28e3('0x2');
        _0x30b53f[_0x28e3('0x3')] = function (_0x31e930, _0x469c93, _0x322262, _0x101e11, _0x5f058f) {
            return _0x31e930(_0x469c93, _0x322262, _0x101e11, _0x5f058f);
        };
        _0x30b53f[_0x28e3('0x4')] = _0x28e3('0x5');
        _0x30b53f[_0x28e3('0x6')] = _0x28e3('0x7');
        _0x30b53f[_0x28e3('0x8')] = _0x28e3('0x9');
        _0x30b53f[_0x28e3('0xa')] = _0x28e3('0xb');
        _0x30b53f[_0x28e3('0xc')] = _0x28e3('0xd');
        _0x30b53f[_0x28e3('0xe')] = _0x28e3('0xf');
        _0x30b53f[_0x28e3('0x10')] = _0x28e3('0x11');
        _0x30b53f[_0x28e3('0x12')] = _0x28e3('0x13');
        var _0x28b5fe = this, _0x368040 = _0x28b5fe[_0x28e3('0x14')], _0x47a7a6 = _0x28b5fe[_0x28e3('0x15')]['_c'] || _0x368040;
        return _0x30b53f[_0x28e3('0x0')](_0x47a7a6, _0x30b53f[_0x28e3('0x1')], [_0x30b53f[_0x28e3('0x3')](_0x47a7a6, _0x30b53f[_0x28e3('0x1')], {
                'directives': [{
                        'name': _0x30b53f[_0x28e3('0x4')],
                        'rawName': _0x30b53f[_0x28e3('0x6')],
                        'value': _0x28b5fe[_0x28e3('0x9')],
                        'expression': _0x30b53f[_0x28e3('0x8')]
                    }],
                'staticStyle': {
                    'margin-top': _0x30b53f[_0x28e3('0xa')],
                    'width': _0x30b53f[_0x28e3('0xc')],
                    'height': _0x30b53f[_0x28e3('0xe')]
                }
            }, [_0x30b53f[_0x28e3('0x0')](_0x47a7a6, _0x30b53f[_0x28e3('0x10')], {
                    'ref': _0x30b53f[_0x28e3('0x12')],
                    'attrs': {
                        'options': _0x28b5fe[_0x28e3('0x16')],
                        'on-node-expand': _0x28b5fe[_0x28e3('0x17')]
                    }
                })], 0x1)]);
    }, i = [];
const n = {}, l = {}, a = {};
l[_0x28e3('0x18')] = _0x28e3('0x19');
l[_0x28e3('0x1a')] = {};
l[_0x28e3('0x1b')] = function () {
    var _0x55b96b = { LcVhg: _0x28e3('0x1c') };
    return {
        g_loading: !0x0,
        demoname: _0x55b96b.LcVhg,
        graphOptions: n
    };
};
l[_0x28e3('0x1d')] = function () {
};
l[_0x28e3('0x1e')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
l[_0x28e3('0x1f')] = {};
l[_0x28e3('0x1f')][_0x28e3('0x20')] = function () {
    var _0x114ea2 = {
        xcmnc: _0x28e3('0x21'),
        WlRGh: _0x28e3('0x22'),
        khWDi: _0x28e3('0x23'),
        sMJLH: _0x28e3('0x24'),
        CAHQV: _0x28e3('0x25'),
        aYbVy: _0x28e3('0x26'),
        WsYRa: _0x28e3('0x27'),
        mEOfp: _0x28e3('0x28'),
        jLgdH: _0x28e3('0x29'),
        CbSMV: _0x28e3('0x2a'),
        FyuBa: _0x28e3('0x2b'),
        pnmuX: _0x28e3('0x2c'),
        iuwFF: _0x28e3('0x2d'),
        WdjHt: _0x28e3('0x2e'),
        NNdxI: _0x28e3('0x2f'),
        cOSjX: _0x28e3('0x30'),
        QhuKe: _0x28e3('0x31'),
        pDzGu: _0x28e3('0x32'),
        TBilr: _0x28e3('0x33'),
        jJMKy: function (_0x4ef529, _0x809f3e, _0x5a72ab) {
            return _0x4ef529(_0x809f3e, _0x5a72ab);
        }
    };
    const _0x5c67b8 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'a'
            },
            {
                id: 'b',
                text: _0x114ea2.xcmnc,
                color: _0x114ea2.WlRGh
            },
            {
                id: 'b1',
                text: 'b1',
                color: _0x114ea2.khWDi
            },
            {
                id: _0x114ea2.sMJLH,
                text: _0x114ea2.sMJLH
            },
            {
                id: _0x114ea2.CAHQV,
                text: _0x114ea2.CAHQV
            },
            {
                id: _0x114ea2.aYbVy,
                text: _0x114ea2.aYbVy
            },
            {
                id: _0x114ea2.WsYRa,
                text: _0x114ea2.WsYRa
            },
            {
                id: _0x114ea2.mEOfp,
                text: _0x114ea2.mEOfp
            },
            {
                id: _0x114ea2.jLgdH,
                text: _0x114ea2.jLgdH
            },
            {
                id: 'b2',
                text: 'b2',
                color: _0x114ea2.CbSMV
            },
            {
                id: _0x114ea2.FyuBa,
                text: _0x114ea2.FyuBa
            },
            {
                id: _0x114ea2.pnmuX,
                text: _0x114ea2.pnmuX
            },
            {
                id: 'c',
                text: _0x114ea2.iuwFF,
                color: _0x114ea2.WdjHt
            },
            {
                id: 'c1',
                text: _0x114ea2.NNdxI,
                color: _0x114ea2.cOSjX,
                expandHolderPosition: _0x114ea2.QhuKe,
                expanded: !0x1,
                data: {
                    isNeedLoadDataFromRemoteServer: !0x0,
                    childrenLoaded: !0x1
                }
            },
            {
                id: 'c2',
                text: _0x114ea2.pDzGu,
                expandHolderPosition: _0x114ea2.QhuKe,
                expanded: !0x1,
                data: {
                    isNeedLoadDataFromRemoteServer: !0x0,
                    childrenLoaded: !0x1
                }
            },
            {
                id: 'c3',
                text: _0x114ea2.TBilr,
                expandHolderPosition: _0x114ea2.QhuKe,
                expanded: !0x1,
                data: {
                    isNeedLoadDataFromRemoteServer: !0x0,
                    childrenLoaded: !0x1
                }
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
                to: _0x114ea2.sMJLH
            },
            {
                from: 'b1',
                to: _0x114ea2.CAHQV
            },
            {
                from: 'b1',
                to: _0x114ea2.aYbVy
            },
            {
                from: 'b1',
                to: _0x114ea2.WsYRa
            },
            {
                from: 'b1',
                to: _0x114ea2.mEOfp
            },
            {
                from: 'b1',
                to: _0x114ea2.jLgdH
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x114ea2.FyuBa
            },
            {
                from: 'b2',
                to: _0x114ea2.pnmuX
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
    console.log(JSON.stringify(_0x5c67b8)), _0x114ea2.jJMKy(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x5c67b8, _0x597b14 => {
        });
    }, 0x3e8);
};
l[_0x28e3('0x1f')][_0x28e3('0x17')] = function (_0x3ad138, _0x4c816c) {
    var _0x343e51 = {
        niMAt: _0x28e3('0x34'),
        uEutz: _0x28e3('0x35')
    };
    if (console.log(_0x343e51.niMAt, _0x3ad138), !_0x3ad138.data.isNeedLoadDataFromRemoteServer) {
        console.log(_0x343e51.uEutz);
        return;
    }
    if (_0x3ad138.data.childrenLoaded) {
        console.log(_0x343e51.uEutz);
        return;
    }
    this.g_loading = !0x0, _0x3ad138.data.childrenLoaded = !0x0, this.loadChildNodesFromRemoteServer(_0x3ad138, _0x5eb01c => {
        this.g_loading = !0x1, this.$refs.graphRef.getInstance().appendJsonData(_0x5eb01c, _0x1b1719 => {
        });
    });
};
l[_0x28e3('0x1f')][_0x28e3('0x36')] = function (_0x1552ca, _0x47ebbd) {
    var _0x211fd7 = {
        mwFBr: function (_0xf63f60, _0x46f5eb) {
            return _0xf63f60 + _0x46f5eb;
        },
        iKizq: _0x28e3('0x37'),
        KlYlC: function (_0x3188b5, _0x26c00f) {
            return _0x3188b5 + _0x26c00f;
        },
        hiTOp: _0x28e3('0x38'),
        DtAEz: _0x28e3('0x39'),
        rEEMv: _0x28e3('0x3a'),
        wjfck: function (_0x5e32c4, _0x2e2a6c) {
            return _0x5e32c4 + _0x2e2a6c;
        },
        KymvI: _0x28e3('0x3b'),
        ZxsAU: function (_0x2f636c, _0x1006f0) {
            return _0x2f636c + _0x1006f0;
        },
        dbgPH: _0x28e3('0x3c'),
        TphsN: _0x28e3('0x3d'),
        fmSOH: function (_0x3c8c33, _0x5dd56a) {
            return _0x3c8c33 + _0x5dd56a;
        },
        weyJB: function (_0x26d0c7, _0x5e2bfe) {
            return _0x26d0c7 + _0x5e2bfe;
        },
        VcRkq: function (_0x42f61e, _0x364e8a) {
            return _0x42f61e(_0x364e8a);
        },
        tGuGw: function (_0x418705, _0x315d09, _0x4238fb) {
            return _0x418705(_0x315d09, _0x4238fb);
        }
    };
    _0x211fd7.tGuGw(setTimeout, function () {
        const _0x58eeb3 = {
            nodes: [
                {
                    id: _0x211fd7.mwFBr(_0x1552ca.id, _0x211fd7.iKizq),
                    text: _0x211fd7.KlYlC(_0x1552ca.id, _0x211fd7.hiTOp),
                    width: 0x96
                },
                {
                    id: _0x211fd7.KlYlC(_0x1552ca.id, _0x211fd7.DtAEz),
                    text: _0x211fd7.KlYlC(_0x1552ca.id, _0x211fd7.rEEMv),
                    width: 0x96
                },
                {
                    id: _0x211fd7.wjfck(_0x1552ca.id, _0x211fd7.KymvI),
                    text: _0x211fd7.ZxsAU(_0x1552ca.id, _0x211fd7.dbgPH),
                    width: 0x96
                }
            ],
            lines: [
                {
                    from: _0x1552ca.id,
                    to: _0x211fd7.ZxsAU(_0x1552ca.id, _0x211fd7.iKizq),
                    text: _0x211fd7.TphsN
                },
                {
                    from: _0x1552ca.id,
                    to: _0x211fd7.fmSOH(_0x1552ca.id, _0x211fd7.DtAEz),
                    text: _0x211fd7.TphsN
                },
                {
                    from: _0x1552ca.id,
                    to: _0x211fd7.weyJB(_0x1552ca.id, _0x211fd7.KymvI),
                    text: _0x211fd7.TphsN
                }
            ]
        };
        _0x211fd7.VcRkq(_0x47ebbd, _0x58eeb3);
    }, 0x3e8);
};
n[_0x28e3('0x3e')] = [{
        label: '中心',
        layoutName: _0x28e3('0x3f'),
        layoutClassName: _0x28e3('0x40'),
        defaultJunctionPoint: _0x28e3('0x41'),
        defaultNodeShape: 0x0,
        defaultLineShape: 0x1,
        from: _0x28e3('0x42'),
        max_per_width: _0x28e3('0x43'),
        min_per_height: '40'
    }];
n[_0x28e3('0x44')] = {};
n[_0x28e3('0x45')] = !0x0;
n[_0x28e3('0x46')] = !0x0;
n[_0x28e3('0x47')] = _0x28e3('0x31');
n[_0x28e3('0x48')] = 0x1;
n[_0x28e3('0x49')] = 0x64;
n[_0x28e3('0x4a')] = 0x4;
n[_0x28e3('0x4b')] = 'lr';
n[_0x28e3('0x4c')] = 0x0;
n[_0x28e3('0x4d')] = _0x28e3('0x4e');
n[_0x28e3('0x4f')] = _0x28e3('0x50');
n[_0x28e3('0x44')][_0x28e3('0x51')] = 0xc;
n[_0x28e3('0x44')][_0x28e3('0x52')] = 0xc;
n[_0x28e3('0x44')][_0x28e3('0x53')] = 0x6;
n[_0x28e3('0x44')][_0x28e3('0x54')] = 0x6;
n[_0x28e3('0x44')][_0x28e3('0x1b')] = _0x28e3('0x55');
var s = _0xac0510(l, r, i, !0x1, c, null, null, null);
function c(_0x367e93) {
    for (let _0x685b81 in a)
        this[_0x685b81] = a[_0x685b81];
}
const m = function () {
    return s[_0x28e3('0x56')];
}();
export {
    m as default
};