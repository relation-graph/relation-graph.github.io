
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1c39 = [
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
    'cVlkn',
    'gwmLZ',
    'div',
    'zNZwl',
    'rmiNp',
    'loading',
    'vbWPM',
    'v-loading',
    'CYIFH',
    'g_loading',
    'psedg',
    '50px',
    'eexsP',
    'calc(100%\x20-\x2010px)',
    'CptxS',
    'calc(100vh\x20-\x20140px)',
    'hmPhT',
    'RelationGraph',
    'btojJ',
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
    'c1-动态获取子节点',
    '#ef6504'
];
(function (_0x503e4e, _0x4ceb8d) {
    var _0x3aa36f = function (_0x55b8a9) {
        while (--_0x55b8a9) {
            _0x503e4e['push'](_0x503e4e['shift']());
        }
    };
    _0x3aa36f(++_0x4ceb8d);
}(_0x1c39, 0x7d));
var _0x3a1a = function (_0x807c83, _0x678a4d) {
    _0x807c83 = _0x807c83 - 0x0;
    var _0x4c86e5 = _0x1c39[_0x807c83];
    return _0x4c86e5;
};
import { n as _0x3809c4 } from './index-3f3d9b78.js';
var r = function () {
        var _0x10f376 = {};
        _0x10f376[_0x3a1a('0x0')] = function (_0x1ae7cb, _0x3e104f, _0x43e84b) {
            return _0x1ae7cb(_0x3e104f, _0x43e84b);
        };
        _0x10f376[_0x3a1a('0x1')] = _0x3a1a('0x2');
        _0x10f376[_0x3a1a('0x3')] = function (_0x15395f, _0x4e22df, _0x389b5b, _0x18bafa, _0x33d5bf) {
            return _0x15395f(_0x4e22df, _0x389b5b, _0x18bafa, _0x33d5bf);
        };
        _0x10f376[_0x3a1a('0x4')] = _0x3a1a('0x5');
        _0x10f376[_0x3a1a('0x6')] = _0x3a1a('0x7');
        _0x10f376[_0x3a1a('0x8')] = _0x3a1a('0x9');
        _0x10f376[_0x3a1a('0xa')] = _0x3a1a('0xb');
        _0x10f376[_0x3a1a('0xc')] = _0x3a1a('0xd');
        _0x10f376[_0x3a1a('0xe')] = _0x3a1a('0xf');
        _0x10f376[_0x3a1a('0x10')] = _0x3a1a('0x11');
        _0x10f376[_0x3a1a('0x12')] = _0x3a1a('0x13');
        var _0x49bf7e = this, _0x5080fd = _0x49bf7e[_0x3a1a('0x14')], _0x4f7717 = _0x49bf7e[_0x3a1a('0x15')]['_c'] || _0x5080fd;
        return _0x10f376[_0x3a1a('0x0')](_0x4f7717, _0x10f376[_0x3a1a('0x1')], [_0x10f376[_0x3a1a('0x3')](_0x4f7717, _0x10f376[_0x3a1a('0x1')], {
                'directives': [{
                        'name': _0x10f376[_0x3a1a('0x4')],
                        'rawName': _0x10f376[_0x3a1a('0x6')],
                        'value': _0x49bf7e[_0x3a1a('0x9')],
                        'expression': _0x10f376[_0x3a1a('0x8')]
                    }],
                'staticStyle': {
                    'margin-top': _0x10f376[_0x3a1a('0xa')],
                    'width': _0x10f376[_0x3a1a('0xc')],
                    'height': _0x10f376[_0x3a1a('0xe')]
                }
            }, [_0x10f376[_0x3a1a('0x0')](_0x4f7717, _0x10f376[_0x3a1a('0x10')], {
                    'ref': _0x10f376[_0x3a1a('0x12')],
                    'attrs': {
                        'options': _0x49bf7e[_0x3a1a('0x16')],
                        'on-node-expand': _0x49bf7e[_0x3a1a('0x17')]
                    }
                })], 0x1)]);
    }, i = [];
const n = {}, l = {}, a = {};
l[_0x3a1a('0x18')] = _0x3a1a('0x19');
l[_0x3a1a('0x1a')] = {};
l[_0x3a1a('0x1b')] = function () {
    var _0x5ee1e7 = { xrInJ: _0x3a1a('0x1c') };
    return {
        g_loading: !0x0,
        demoname: _0x5ee1e7.xrInJ,
        graphOptions: n
    };
};
l[_0x3a1a('0x1d')] = function () {
};
l[_0x3a1a('0x1e')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
l[_0x3a1a('0x1f')] = {};
l[_0x3a1a('0x1f')][_0x3a1a('0x20')] = function () {
    var _0x1bba1b = {
        DupXJ: _0x3a1a('0x21'),
        oarTJ: _0x3a1a('0x22'),
        jsjvv: _0x3a1a('0x23'),
        AJzDo: _0x3a1a('0x24'),
        XJMgm: _0x3a1a('0x25'),
        flgbz: _0x3a1a('0x26'),
        BTIqn: _0x3a1a('0x27'),
        bjPQh: _0x3a1a('0x28'),
        IzdTt: _0x3a1a('0x29'),
        CSGxu: _0x3a1a('0x2a'),
        iwyvZ: _0x3a1a('0x2b'),
        yFeit: _0x3a1a('0x2c'),
        DBfAa: _0x3a1a('0x2d'),
        YDnnJ: _0x3a1a('0x2e'),
        sgIuq: _0x3a1a('0x2f'),
        bifib: _0x3a1a('0x30'),
        BuglQ: _0x3a1a('0x31'),
        ThuaI: _0x3a1a('0x32'),
        LvJSF: _0x3a1a('0x33'),
        DirUa: function (_0x1873b5, _0x87184a, _0x2af201) {
            return _0x1873b5(_0x87184a, _0x2af201);
        }
    };
    const _0x4bd8c8 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'a'
            },
            {
                id: 'b',
                text: _0x1bba1b.DupXJ,
                color: _0x1bba1b.oarTJ
            },
            {
                id: 'b1',
                text: 'b1',
                color: _0x1bba1b.jsjvv
            },
            {
                id: _0x1bba1b.AJzDo,
                text: _0x1bba1b.AJzDo
            },
            {
                id: _0x1bba1b.XJMgm,
                text: _0x1bba1b.XJMgm
            },
            {
                id: _0x1bba1b.flgbz,
                text: _0x1bba1b.flgbz
            },
            {
                id: _0x1bba1b.BTIqn,
                text: _0x1bba1b.BTIqn
            },
            {
                id: _0x1bba1b.bjPQh,
                text: _0x1bba1b.bjPQh
            },
            {
                id: _0x1bba1b.IzdTt,
                text: _0x1bba1b.IzdTt
            },
            {
                id: 'b2',
                text: 'b2',
                color: _0x1bba1b.CSGxu
            },
            {
                id: _0x1bba1b.iwyvZ,
                text: _0x1bba1b.iwyvZ
            },
            {
                id: _0x1bba1b.yFeit,
                text: _0x1bba1b.yFeit
            },
            {
                id: 'c',
                text: _0x1bba1b.DBfAa,
                color: _0x1bba1b.YDnnJ
            },
            {
                id: 'c1',
                text: _0x1bba1b.sgIuq,
                color: _0x1bba1b.bifib,
                expandHolderPosition: _0x1bba1b.BuglQ,
                expanded: !0x1,
                data: {
                    isNeedLoadDataFromRemoteServer: !0x0,
                    childrenLoaded: !0x1
                }
            },
            {
                id: 'c2',
                text: _0x1bba1b.ThuaI,
                expandHolderPosition: _0x1bba1b.BuglQ,
                expanded: !0x1,
                data: {
                    isNeedLoadDataFromRemoteServer: !0x0,
                    childrenLoaded: !0x1
                }
            },
            {
                id: 'c3',
                text: _0x1bba1b.LvJSF,
                expandHolderPosition: _0x1bba1b.BuglQ,
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
                to: _0x1bba1b.AJzDo
            },
            {
                from: 'b1',
                to: _0x1bba1b.XJMgm
            },
            {
                from: 'b1',
                to: _0x1bba1b.flgbz
            },
            {
                from: 'b1',
                to: _0x1bba1b.BTIqn
            },
            {
                from: 'b1',
                to: _0x1bba1b.bjPQh
            },
            {
                from: 'b1',
                to: _0x1bba1b.IzdTt
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x1bba1b.iwyvZ
            },
            {
                from: 'b2',
                to: _0x1bba1b.yFeit
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
    console.log(JSON.stringify(_0x4bd8c8)), _0x1bba1b.DirUa(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x4bd8c8, _0x397b26 => {
        });
    }, 0x3e8);
};
l[_0x3a1a('0x1f')][_0x3a1a('0x17')] = function (_0x120360, _0x554500) {
    var _0x182e05 = {
        ITumP: _0x3a1a('0x34'),
        AoPWp: _0x3a1a('0x35')
    };
    if (console.log(_0x182e05.ITumP, _0x120360), !_0x120360.data.isNeedLoadDataFromRemoteServer) {
        console.log(_0x182e05.AoPWp);
        return;
    }
    if (_0x120360.data.childrenLoaded) {
        console.log(_0x182e05.AoPWp);
        return;
    }
    this.g_loading = !0x0, _0x120360.data.childrenLoaded = !0x0, this.loadChildNodesFromRemoteServer(_0x120360, _0x11b21a => {
        this.g_loading = !0x1, this.$refs.graphRef.getInstance().appendJsonData(_0x11b21a, _0x2dc73b => {
        });
    });
};
l[_0x3a1a('0x1f')][_0x3a1a('0x36')] = function (_0x342fb1, _0x4c9c35) {
    var _0x1ae8bc = {
        NMMGV: function (_0x224d83, _0x3d99c2) {
            return _0x224d83 + _0x3d99c2;
        },
        UgoRC: _0x3a1a('0x37'),
        UQVbW: function (_0x7f49b, _0x2e09f6) {
            return _0x7f49b + _0x2e09f6;
        },
        edSIV: _0x3a1a('0x38'),
        oXQrX: _0x3a1a('0x39'),
        TlZNS: function (_0x4f1fd4, _0x44d705) {
            return _0x4f1fd4 + _0x44d705;
        },
        Nvnsm: _0x3a1a('0x3a'),
        DlSbA: function (_0x55e5ee, _0x4b96a3) {
            return _0x55e5ee + _0x4b96a3;
        },
        AYLfm: _0x3a1a('0x3b'),
        naFWU: function (_0x4fa57e, _0x234c03) {
            return _0x4fa57e + _0x234c03;
        },
        JhQea: _0x3a1a('0x3c'),
        NddjN: _0x3a1a('0x3d'),
        CahIM: function (_0x289d3a, _0x5ba767) {
            return _0x289d3a + _0x5ba767;
        },
        nZNfp: function (_0x505aab, _0x141780) {
            return _0x505aab(_0x141780);
        },
        VCyvC: function (_0x47e251, _0x4584f2, _0x25382e) {
            return _0x47e251(_0x4584f2, _0x25382e);
        }
    };
    _0x1ae8bc.VCyvC(setTimeout, function () {
        const _0x1663e1 = {
            nodes: [
                {
                    id: _0x1ae8bc.NMMGV(_0x342fb1.id, _0x1ae8bc.UgoRC),
                    text: _0x1ae8bc.UQVbW(_0x342fb1.id, _0x1ae8bc.edSIV),
                    width: 0x96
                },
                {
                    id: _0x1ae8bc.UQVbW(_0x342fb1.id, _0x1ae8bc.oXQrX),
                    text: _0x1ae8bc.TlZNS(_0x342fb1.id, _0x1ae8bc.Nvnsm),
                    width: 0x96
                },
                {
                    id: _0x1ae8bc.DlSbA(_0x342fb1.id, _0x1ae8bc.AYLfm),
                    text: _0x1ae8bc.naFWU(_0x342fb1.id, _0x1ae8bc.JhQea),
                    width: 0x96
                }
            ],
            lines: [
                {
                    from: _0x342fb1.id,
                    to: _0x1ae8bc.naFWU(_0x342fb1.id, _0x1ae8bc.UgoRC),
                    text: _0x1ae8bc.NddjN
                },
                {
                    from: _0x342fb1.id,
                    to: _0x1ae8bc.CahIM(_0x342fb1.id, _0x1ae8bc.oXQrX),
                    text: _0x1ae8bc.NddjN
                },
                {
                    from: _0x342fb1.id,
                    to: _0x1ae8bc.CahIM(_0x342fb1.id, _0x1ae8bc.AYLfm),
                    text: _0x1ae8bc.NddjN
                }
            ]
        };
        _0x1ae8bc.nZNfp(_0x4c9c35, _0x1663e1);
    }, 0x3e8);
};
n[_0x3a1a('0x3e')] = [{
        label: '中心',
        layoutName: _0x3a1a('0x3f'),
        layoutClassName: _0x3a1a('0x40'),
        defaultJunctionPoint: _0x3a1a('0x41'),
        defaultNodeShape: 0x0,
        defaultLineShape: 0x1,
        from: _0x3a1a('0x42'),
        max_per_width: _0x3a1a('0x43'),
        min_per_height: '40'
    }];
n[_0x3a1a('0x44')] = {};
n[_0x3a1a('0x45')] = !0x0;
n[_0x3a1a('0x46')] = !0x0;
n[_0x3a1a('0x47')] = _0x3a1a('0x31');
n[_0x3a1a('0x48')] = 0x1;
n[_0x3a1a('0x49')] = 0x64;
n[_0x3a1a('0x4a')] = 0x4;
n[_0x3a1a('0x4b')] = 'lr';
n[_0x3a1a('0x4c')] = 0x0;
n[_0x3a1a('0x4d')] = _0x3a1a('0x4e');
n[_0x3a1a('0x4f')] = _0x3a1a('0x50');
n[_0x3a1a('0x44')][_0x3a1a('0x51')] = 0xc;
n[_0x3a1a('0x44')][_0x3a1a('0x52')] = 0xc;
n[_0x3a1a('0x44')][_0x3a1a('0x53')] = 0x6;
n[_0x3a1a('0x44')][_0x3a1a('0x54')] = 0x6;
n[_0x3a1a('0x44')][_0x3a1a('0x1b')] = _0x3a1a('0x55');
var s = _0x3809c4(l, r, i, !0x1, c, null, null, null);
function c(_0x5ee12a) {
    for (let _0x1a5145 in a)
        this[_0x1a5145] = a[_0x1a5145];
}
const m = function () {
    return s[_0x3a1a('0x56')];
}();
export {
    m as default
};