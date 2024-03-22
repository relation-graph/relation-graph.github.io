
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5332 = [
    'c1-动态获取子节点',
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
    'exports',
    'vHuIn',
    'DenTX',
    'div',
    'VkFYD',
    'wSRLa',
    'loading',
    'TMRyx',
    'v-loading',
    'syGVA',
    'g_loading',
    'jLuvi',
    '50px',
    'Zdwsd',
    'calc(100%\x20-\x2010px)',
    'GOPWq',
    'calc(100vh\x20-\x20140px)',
    'dfPPR',
    'bymTf',
    'RelationGraph',
    'pXROc',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeExpand',
    'onNodeCollapse',
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
    'setGraphData',
    'b-固定数据展开/关闭',
    'b1-1',
    'b1-2',
    'b1-3',
    'b1-4',
    'b1-5',
    'b1-6',
    'b2-1',
    'b2-2',
    'c-动态数据展开/关闭'
];
(function (_0x2776ea, _0x60edc1) {
    var _0x2f3e31 = function (_0x3a89c9) {
        while (--_0x3a89c9) {
            _0x2776ea['push'](_0x2776ea['shift']());
        }
    };
    _0x2f3e31(++_0x60edc1);
}(_0x5332, 0xda));
var _0x479a = function (_0xded7a5, _0x4b70b8) {
    _0xded7a5 = _0xded7a5 - 0x0;
    var _0x15f7f5 = _0x5332[_0xded7a5];
    return _0x15f7f5;
};
import { n as _0x273617 } from './index-3a2b9e72.js';
var d = function () {
        var _0x7b898d = {};
        _0x7b898d[_0x479a('0x0')] = function (_0x17ce65, _0x4530d1, _0x5ad69a) {
            return _0x17ce65(_0x4530d1, _0x5ad69a);
        };
        _0x7b898d[_0x479a('0x1')] = _0x479a('0x2');
        _0x7b898d[_0x479a('0x3')] = function (_0x4e94ec, _0xf41a96, _0x201107, _0x17ab0c, _0x4218f4) {
            return _0x4e94ec(_0xf41a96, _0x201107, _0x17ab0c, _0x4218f4);
        };
        _0x7b898d[_0x479a('0x4')] = _0x479a('0x5');
        _0x7b898d[_0x479a('0x6')] = _0x479a('0x7');
        _0x7b898d[_0x479a('0x8')] = _0x479a('0x9');
        _0x7b898d[_0x479a('0xa')] = _0x479a('0xb');
        _0x7b898d[_0x479a('0xc')] = _0x479a('0xd');
        _0x7b898d[_0x479a('0xe')] = _0x479a('0xf');
        _0x7b898d[_0x479a('0x10')] = function (_0x5476ff, _0xf0ed91, _0x15091e) {
            return _0x5476ff(_0xf0ed91, _0x15091e);
        };
        _0x7b898d[_0x479a('0x11')] = _0x479a('0x12');
        _0x7b898d[_0x479a('0x13')] = _0x479a('0x14');
        var _0x2e13d3 = this, _0x36c176 = _0x2e13d3[_0x479a('0x15')], _0x3bfb7b = _0x2e13d3[_0x479a('0x16')]['_c'] || _0x36c176;
        return _0x7b898d[_0x479a('0x0')](_0x3bfb7b, _0x7b898d[_0x479a('0x1')], [_0x7b898d[_0x479a('0x3')](_0x3bfb7b, _0x7b898d[_0x479a('0x1')], {
                'directives': [{
                        'name': _0x7b898d[_0x479a('0x4')],
                        'rawName': _0x7b898d[_0x479a('0x6')],
                        'value': _0x2e13d3[_0x479a('0x9')],
                        'expression': _0x7b898d[_0x479a('0x8')]
                    }],
                'staticStyle': {
                    'margin-top': _0x7b898d[_0x479a('0xa')],
                    'width': _0x7b898d[_0x479a('0xc')],
                    'height': _0x7b898d[_0x479a('0xe')]
                }
            }, [_0x7b898d[_0x479a('0x10')](_0x3bfb7b, _0x7b898d[_0x479a('0x11')], {
                    'ref': _0x7b898d[_0x479a('0x13')],
                    'attrs': {
                        'options': _0x2e13d3[_0x479a('0x17')],
                        'on-node-expand': _0x2e13d3[_0x479a('0x18')],
                        'on-node-collapse': _0x2e13d3[_0x479a('0x19')]
                    }
                })], 0x1)]);
    }, i = [];
const n = {}, a = {};
n[_0x479a('0x1a')] = _0x479a('0x1b');
n[_0x479a('0x1c')] = {};
n[_0x479a('0x1d')] = function () {
    var _0x413100 = {
        JqiaP: _0x479a('0x1e'),
        XAaMs: _0x479a('0x1f'),
        meaxO: _0x479a('0x20'),
        TIGgh: _0x479a('0x21'),
        LcmFf: _0x479a('0x22'),
        rmdLs: _0x479a('0x23'),
        tARAm: _0x479a('0x24'),
        esQfR: _0x479a('0x25'),
        GzGng: _0x479a('0x26'),
        pGEno: _0x479a('0x27')
    };
    return {
        g_loading: !0x0,
        demoname: _0x413100.JqiaP,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x413100.XAaMs,
                    layoutClassName: _0x413100.meaxO,
                    defaultJunctionPoint: _0x413100.TIGgh,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x413100.LcmFf,
                    max_per_width: _0x413100.rmdLs,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x413100.tARAm
            },
            moveToCenterWhenRefresh: !0x1,
            defaultExpandHolderPosition: _0x413100.esQfR,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x413100.GzGng,
            defaultNodeColor: _0x413100.pGEno
        }
    };
};
n[_0x479a('0x28')] = function () {
};
n[_0x479a('0x29')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
n[_0x479a('0x2a')] = {};
n[_0x479a('0x2a')][_0x479a('0x2b')] = function () {
    var _0x590dea = {
        ykcoo: _0x479a('0x2c'),
        OnvDg: _0x479a('0x2d'),
        AUhmh: _0x479a('0x2e'),
        ewEWT: _0x479a('0x2f'),
        zFkdW: _0x479a('0x30'),
        KhIsS: _0x479a('0x31'),
        tFcFM: _0x479a('0x32'),
        HCeXZ: _0x479a('0x33'),
        gYRrk: _0x479a('0x34'),
        LXsEO: _0x479a('0x35'),
        okWiE: _0x479a('0x36'),
        OUWbZ: _0x479a('0x25'),
        wbtBq: _0x479a('0x37'),
        XNRGr: _0x479a('0x38'),
        LJikW: function (_0x870427, _0x47edec, _0x32fc96) {
            return _0x870427(_0x47edec, _0x32fc96);
        }
    };
    const _0x508b22 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'a'
            },
            {
                id: 'b',
                text: _0x590dea.ykcoo
            },
            {
                id: 'b1',
                text: 'b1'
            },
            {
                id: _0x590dea.OnvDg,
                text: _0x590dea.OnvDg
            },
            {
                id: _0x590dea.AUhmh,
                text: _0x590dea.AUhmh
            },
            {
                id: _0x590dea.ewEWT,
                text: _0x590dea.ewEWT
            },
            {
                id: _0x590dea.zFkdW,
                text: _0x590dea.zFkdW
            },
            {
                id: _0x590dea.KhIsS,
                text: _0x590dea.KhIsS
            },
            {
                id: _0x590dea.tFcFM,
                text: _0x590dea.tFcFM
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x590dea.HCeXZ,
                text: _0x590dea.HCeXZ
            },
            {
                id: _0x590dea.gYRrk,
                text: _0x590dea.gYRrk
            },
            {
                id: 'c',
                text: _0x590dea.LXsEO
            },
            {
                id: 'c1',
                text: _0x590dea.okWiE,
                expandHolderPosition: _0x590dea.OUWbZ,
                expanded: !0x1,
                data: {
                    isNeedLoadDataFromRemoteServer: !0x0,
                    childrenLoaded: !0x1
                }
            },
            {
                id: 'c2',
                text: _0x590dea.wbtBq,
                expandHolderPosition: _0x590dea.OUWbZ,
                expanded: !0x1,
                data: {
                    isNeedLoadDataFromRemoteServer: !0x0,
                    childrenLoaded: !0x1
                }
            },
            {
                id: 'c3',
                text: _0x590dea.XNRGr,
                expandHolderPosition: _0x590dea.OUWbZ,
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
                to: _0x590dea.OnvDg
            },
            {
                from: 'b1',
                to: _0x590dea.AUhmh
            },
            {
                from: 'b1',
                to: _0x590dea.ewEWT
            },
            {
                from: 'b1',
                to: _0x590dea.zFkdW
            },
            {
                from: 'b1',
                to: _0x590dea.KhIsS
            },
            {
                from: 'b1',
                to: _0x590dea.tFcFM
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x590dea.HCeXZ
            },
            {
                from: 'b2',
                to: _0x590dea.gYRrk
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
    console.log(JSON.stringify(_0x508b22)), _0x590dea.LJikW(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x508b22, _0x440eaa => {
        });
    }, 0x3e8);
};
n[_0x479a('0x2a')][_0x479a('0x19')] = function (_0x60ef1a, _0x1f3250) {
    this.$refs.graphRef.refresh();
};
n[_0x479a('0x2a')][_0x479a('0x18')] = function (_0x18facf, _0x1249a5) {
    var _0x341af9 = {
        xmyyh: _0x479a('0x39'),
        MsOrr: _0x479a('0x3a')
    };
    if (console.log(_0x341af9.xmyyh, _0x18facf), !_0x18facf.data.isNeedLoadDataFromRemoteServer) {
        console.log(_0x341af9.MsOrr), this.$refs.graphRef.refresh();
        return;
    }
    if (_0x18facf.data.childrenLoaded) {
        console.log(_0x341af9.MsOrr), this.$refs.graphRef.refresh();
        return;
    }
    this.g_loading = !0x0, _0x18facf.data.childrenLoaded = !0x0, this.loadChildNodesFromRemoteServer(_0x18facf, _0x43381e => {
        this.g_loading = !0x1, this.$refs.graphRef.getInstance().appendJsonData(_0x43381e, _0x271d47 => {
        });
    });
};
n[_0x479a('0x2a')][_0x479a('0x3b')] = function (_0x1ce66e, _0x4fda14) {
    var _0x19d4d3 = {
        XOGFP: function (_0xe9faa5, _0x26887e) {
            return _0xe9faa5 + _0x26887e;
        },
        wXAXN: _0x479a('0x3c'),
        NOUHd: _0x479a('0x3d'),
        hgrcb: _0x479a('0x3e'),
        fUVQE: function (_0xdc8821, _0x3af49d) {
            return _0xdc8821 + _0x3af49d;
        },
        qNhuO: _0x479a('0x3f'),
        syhyU: _0x479a('0x40'),
        KwstT: function (_0x6353f0, _0x742f04) {
            return _0x6353f0 + _0x742f04;
        },
        HhFbL: _0x479a('0x41'),
        WHMWm: function (_0x5bb1a8, _0x1584d0) {
            return _0x5bb1a8 + _0x1584d0;
        },
        CBzQB: _0x479a('0x42'),
        KzVqY: function (_0x1c4bfe, _0x184e1d) {
            return _0x1c4bfe + _0x184e1d;
        },
        BgiXA: function (_0x4f9ba4, _0x200879) {
            return _0x4f9ba4(_0x200879);
        },
        leiOo: function (_0x1bffb6, _0x3b98ea, _0x58577a) {
            return _0x1bffb6(_0x3b98ea, _0x58577a);
        }
    };
    _0x19d4d3.leiOo(setTimeout, function () {
        const _0x1a7489 = {
            nodes: [
                {
                    id: _0x19d4d3.XOGFP(_0x1ce66e.id, _0x19d4d3.wXAXN),
                    text: _0x19d4d3.XOGFP(_0x1ce66e.id, _0x19d4d3.NOUHd),
                    width: 0x96
                },
                {
                    id: _0x19d4d3.XOGFP(_0x1ce66e.id, _0x19d4d3.hgrcb),
                    text: _0x19d4d3.fUVQE(_0x1ce66e.id, _0x19d4d3.qNhuO),
                    width: 0x96
                },
                {
                    id: _0x19d4d3.fUVQE(_0x1ce66e.id, _0x19d4d3.syhyU),
                    text: _0x19d4d3.KwstT(_0x1ce66e.id, _0x19d4d3.HhFbL),
                    width: 0x96
                }
            ],
            lines: [
                {
                    from: _0x1ce66e.id,
                    to: _0x19d4d3.WHMWm(_0x1ce66e.id, _0x19d4d3.wXAXN),
                    text: _0x19d4d3.CBzQB
                },
                {
                    from: _0x1ce66e.id,
                    to: _0x19d4d3.WHMWm(_0x1ce66e.id, _0x19d4d3.hgrcb),
                    text: _0x19d4d3.CBzQB
                },
                {
                    from: _0x1ce66e.id,
                    to: _0x19d4d3.KzVqY(_0x1ce66e.id, _0x19d4d3.syhyU),
                    text: _0x19d4d3.CBzQB
                }
            ]
        };
        _0x19d4d3.BgiXA(_0x4fda14, _0x1a7489);
    }, 0x3e8);
};
var s = _0x273617(n, d, i, !0x1, l, null, null, null);
function l(_0x4b1ff9) {
    for (let _0x40d6e9 in a)
        this[_0x40d6e9] = a[_0x40d6e9];
}
const c = function () {
    return s[_0x479a('0x43')];
}();
export {
    c as default
};