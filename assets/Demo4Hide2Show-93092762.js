
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2b12 = [
    'graphOptions',
    'iuPCh',
    'QYivr',
    'UhkGT',
    '20px',
    'vUoZx',
    '#666666',
    'ncIBz',
    '600px',
    'rQKNN',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'fpxYn',
    'JPRNM',
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
    'wIzWX',
    'jXhuQ',
    'div',
    'UFlQI',
    'yRuvN',
    'el-tabs',
    'Simmk',
    'card',
    'nzOrN',
    'activeTabName',
    'cVFyd',
    'el-tab-pane',
    'wkKjW',
    '基本信息',
    'OCgOh',
    'base',
    'mGmhZ',
    'dTZqU',
    '关系图谱（点这里）',
    'XddHx',
    'relation',
    'jsJhL',
    'loading',
    'ZNGnO',
    'v-loading',
    'HZvvZ',
    'g_loading',
    'izyRD',
    'calc(100%)',
    'HkMdG',
    'calc(100vh\x20-\x20300px)',
    'vyPpF',
    'DDhDn',
    'RelationGraph',
    'nuVJA',
    'graphRef',
    'jXlWn',
    '风险信息',
    'RdWGO',
    'risk',
    '$createElement',
    '_self',
    'handleClick'
];
(function (_0x390dce, _0x43722e) {
    var _0x4ec945 = function (_0x34fafe) {
        while (--_0x34fafe) {
            _0x390dce['push'](_0x390dce['shift']());
        }
    };
    _0x4ec945(++_0x43722e);
}(_0x2b12, 0x7f));
var _0xd5ac = function (_0x54b303, _0x588d12) {
    _0x54b303 = _0x54b303 - 0x0;
    var _0x28724b = _0x2b12[_0x54b303];
    return _0x28724b;
};
import { n as _0x55a423 } from './index-f64bbabb.js';
var n = function () {
        var _0x396790 = {};
        _0x396790[_0xd5ac('0x0')] = function (_0x176529, _0x2df7c7, _0x171f76, _0x3e3ce5) {
            return _0x176529(_0x2df7c7, _0x171f76, _0x3e3ce5);
        };
        _0x396790[_0xd5ac('0x1')] = _0xd5ac('0x2');
        _0x396790[_0xd5ac('0x3')] = function (_0x5cd246, _0x40096c, _0x475ef5, _0x542e8f, _0x22f517) {
            return _0x5cd246(_0x40096c, _0x475ef5, _0x542e8f, _0x22f517);
        };
        _0x396790[_0xd5ac('0x4')] = _0xd5ac('0x5');
        _0x396790[_0xd5ac('0x6')] = _0xd5ac('0x7');
        _0x396790[_0xd5ac('0x8')] = _0xd5ac('0x9');
        _0x396790[_0xd5ac('0xa')] = _0xd5ac('0xb');
        _0x396790[_0xd5ac('0xc')] = _0xd5ac('0xd');
        _0x396790[_0xd5ac('0xe')] = _0xd5ac('0xf');
        _0x396790[_0xd5ac('0x10')] = function (_0x315105, _0x5bf11d, _0x2930e7, _0x5b0908) {
            return _0x315105(_0x5bf11d, _0x2930e7, _0x5b0908);
        };
        _0x396790[_0xd5ac('0x11')] = _0xd5ac('0x12');
        _0x396790[_0xd5ac('0x13')] = _0xd5ac('0x14');
        _0x396790[_0xd5ac('0x15')] = _0xd5ac('0x16');
        _0x396790[_0xd5ac('0x17')] = _0xd5ac('0x18');
        _0x396790[_0xd5ac('0x19')] = _0xd5ac('0x1a');
        _0x396790[_0xd5ac('0x1b')] = _0xd5ac('0x1c');
        _0x396790[_0xd5ac('0x1d')] = _0xd5ac('0x1e');
        _0x396790[_0xd5ac('0x1f')] = function (_0x3baa21, _0x3e7ace, _0x93a78e) {
            return _0x3baa21(_0x3e7ace, _0x93a78e);
        };
        _0x396790[_0xd5ac('0x20')] = _0xd5ac('0x21');
        _0x396790[_0xd5ac('0x22')] = _0xd5ac('0x23');
        _0x396790[_0xd5ac('0x24')] = _0xd5ac('0x25');
        _0x396790[_0xd5ac('0x26')] = _0xd5ac('0x27');
        var _0x168636 = this, _0x21ced7 = _0x168636[_0xd5ac('0x28')], _0x31e89c = _0x168636[_0xd5ac('0x29')]['_c'] || _0x21ced7;
        return _0x396790[_0xd5ac('0x0')](_0x31e89c, _0x396790[_0xd5ac('0x1')], [
            _0x168636['_m'](0x0),
            _0x396790[_0xd5ac('0x3')](_0x31e89c, _0x396790[_0xd5ac('0x4')], {
                'attrs': { 'type': _0x396790[_0xd5ac('0x6')] },
                'on': { 'tab-click': _0x168636[_0xd5ac('0x2a')] },
                'model': {
                    'value': _0x168636[_0xd5ac('0x9')],
                    'callback': function (_0x441f85) {
                        _0x168636[_0xd5ac('0x9')] = _0x441f85;
                    },
                    'expression': _0x396790[_0xd5ac('0x8')]
                }
            }, [
                _0x396790[_0xd5ac('0x0')](_0x31e89c, _0x396790[_0xd5ac('0xa')], {
                    'attrs': {
                        'label': _0x396790[_0xd5ac('0xc')],
                        'name': _0x396790[_0xd5ac('0xe')]
                    }
                }, [_0x168636['_v'](_0x396790[_0xd5ac('0xc')])]),
                _0x396790[_0xd5ac('0x10')](_0x31e89c, _0x396790[_0xd5ac('0xa')], {
                    'attrs': {
                        'label': _0x396790[_0xd5ac('0x11')],
                        'name': _0x396790[_0xd5ac('0x13')]
                    }
                }, [_0x396790[_0xd5ac('0x3')](_0x31e89c, _0x396790[_0xd5ac('0x1')], {
                        'directives': [{
                                'name': _0x396790[_0xd5ac('0x15')],
                                'rawName': _0x396790[_0xd5ac('0x17')],
                                'value': _0x168636[_0xd5ac('0x1a')],
                                'expression': _0x396790[_0xd5ac('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x396790[_0xd5ac('0x1b')],
                            'height': _0x396790[_0xd5ac('0x1d')]
                        }
                    }, [_0x396790[_0xd5ac('0x1f')](_0x31e89c, _0x396790[_0xd5ac('0x20')], {
                            'ref': _0x396790[_0xd5ac('0x22')],
                            'attrs': { 'options': _0x168636[_0xd5ac('0x2b')] }
                        })], 0x1)]),
                _0x396790[_0xd5ac('0x10')](_0x31e89c, _0x396790[_0xd5ac('0xa')], {
                    'attrs': {
                        'label': _0x396790[_0xd5ac('0x24')],
                        'name': _0x396790[_0xd5ac('0x26')]
                    }
                }, [_0x168636['_v'](_0x396790[_0xd5ac('0x24')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0xc9e15c = {};
            _0xc9e15c[_0xd5ac('0x2c')] = function (_0x4c5844, _0x5847d1, _0x35fbd9, _0x534814) {
                return _0x4c5844(_0x5847d1, _0x35fbd9, _0x534814);
            };
            _0xc9e15c[_0xd5ac('0x2d')] = _0xd5ac('0x2');
            _0xc9e15c[_0xd5ac('0x2e')] = _0xd5ac('0x2f');
            _0xc9e15c[_0xd5ac('0x30')] = _0xd5ac('0x31');
            _0xc9e15c[_0xd5ac('0x32')] = _0xd5ac('0x33');
            _0xc9e15c[_0xd5ac('0x34')] = _0xd5ac('0x35');
            _0xc9e15c[_0xd5ac('0x36')] = function (_0x1b48e6, _0x2a4ac9, _0x41efe6) {
                return _0x1b48e6(_0x2a4ac9, _0x41efe6);
            };
            _0xc9e15c[_0xd5ac('0x37')] = _0xd5ac('0x38');
            var _0x2a77fd = this, _0x5e43a1 = _0x2a77fd[_0xd5ac('0x28')], _0x58a91c = _0x2a77fd[_0xd5ac('0x29')]['_c'] || _0x5e43a1;
            return _0xc9e15c[_0xd5ac('0x2c')](_0x58a91c, _0xc9e15c[_0xd5ac('0x2d')], {
                'staticStyle': {
                    'padding': _0xc9e15c[_0xd5ac('0x2e')],
                    'color': _0xc9e15c[_0xd5ac('0x30')],
                    'width': _0xc9e15c[_0xd5ac('0x32')]
                }
            }, [
                _0x2a77fd['_v'](_0xc9e15c[_0xd5ac('0x34')]),
                _0xc9e15c[_0xd5ac('0x36')](_0x58a91c, _0xc9e15c[_0xd5ac('0x2d')], [_0x2a77fd['_v'](_0xc9e15c[_0xd5ac('0x37')])])
            ]);
        }];
const l = {}, o = {};
l[_0xd5ac('0x39')] = _0xd5ac('0x3a');
l[_0xd5ac('0x3b')] = {};
l[_0xd5ac('0x3c')] = function () {
    var _0x54c9ce = {
        aefdY: _0xd5ac('0xf'),
        puZap: _0xd5ac('0x3d'),
        KRora: _0xd5ac('0x3e'),
        RCyWH: _0xd5ac('0x3f'),
        mKDWC: _0xd5ac('0x40'),
        NTGEL: _0xd5ac('0x41'),
        KybFa: _0xd5ac('0x42'),
        SuHRp: _0xd5ac('0x43'),
        JzFAW: _0xd5ac('0x44'),
        FxPdX: _0xd5ac('0x45'),
        GBPVO: _0xd5ac('0x46')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x54c9ce.aefdY,
        demoname: _0x54c9ce.puZap,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x54c9ce.KRora,
                    layoutClassName: _0x54c9ce.RCyWH,
                    defaultJunctionPoint: _0x54c9ce.mKDWC,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x54c9ce.NTGEL,
                    max_per_width: _0x54c9ce.KybFa,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x54c9ce.SuHRp
            },
            defaultExpandHolderPosition: _0x54c9ce.JzFAW,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x54c9ce.FxPdX,
            defaultNodeColor: _0x54c9ce.GBPVO
        }
    };
};
l[_0xd5ac('0x47')] = function () {
};
l[_0xd5ac('0x48')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0xd5ac('0x49')] = {};
l[_0xd5ac('0x49')][_0xd5ac('0x4a')] = function () {
    var _0x2e1daa = {
        TEnNi: _0xd5ac('0x4b'),
        kVgSK: _0xd5ac('0x4c'),
        wmUbs: _0xd5ac('0x4d'),
        nXXXY: _0xd5ac('0x4e'),
        qtbno: _0xd5ac('0x4f'),
        Yafwj: _0xd5ac('0x50'),
        OBYgn: _0xd5ac('0x51'),
        sANnK: _0xd5ac('0x52'),
        JvQsq: function (_0x1f353f, _0x39c3e0, _0x16ff67) {
            return _0x1f353f(_0x39c3e0, _0x16ff67);
        }
    };
    const _0x154d36 = {
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
                id: _0x2e1daa.TEnNi,
                text: _0x2e1daa.TEnNi
            },
            {
                id: _0x2e1daa.kVgSK,
                text: _0x2e1daa.kVgSK
            },
            {
                id: _0x2e1daa.wmUbs,
                text: _0x2e1daa.wmUbs
            },
            {
                id: _0x2e1daa.nXXXY,
                text: _0x2e1daa.nXXXY
            },
            {
                id: _0x2e1daa.qtbno,
                text: _0x2e1daa.qtbno
            },
            {
                id: _0x2e1daa.Yafwj,
                text: _0x2e1daa.Yafwj
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x2e1daa.OBYgn,
                text: _0x2e1daa.OBYgn
            },
            {
                id: _0x2e1daa.sANnK,
                text: _0x2e1daa.sANnK
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
                to: _0x2e1daa.TEnNi
            },
            {
                from: 'b1',
                to: _0x2e1daa.kVgSK
            },
            {
                from: 'b1',
                to: _0x2e1daa.wmUbs
            },
            {
                from: 'b1',
                to: _0x2e1daa.nXXXY
            },
            {
                from: 'b1',
                to: _0x2e1daa.qtbno
            },
            {
                from: 'b1',
                to: _0x2e1daa.Yafwj
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x2e1daa.OBYgn
            },
            {
                from: 'b2',
                to: _0x2e1daa.sANnK
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
    console.log(JSON.stringify(_0x154d36)), _0x2e1daa.JvQsq(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x154d36, _0x221007 => {
            _0x221007.refresh();
        });
    }, 0x3e8);
};
l[_0xd5ac('0x49')][_0xd5ac('0x2a')] = function (_0x51eabd, _0x4e1d86) {
    var _0x5bfa5b = {
        FhWYz: _0xd5ac('0x53'),
        CBSpj: function (_0x1e3251, _0x26f2de) {
            return _0x1e3251 === _0x26f2de;
        },
        AdIFN: _0xd5ac('0x14')
    };
    console.log(_0x5bfa5b.FhWYz, this.activeTabName), _0x5bfa5b.CBSpj(this.activeTabName, _0x5bfa5b.AdIFN) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x55a423(l, n, d, !0x1, c, null, null, null);
function c(_0x899ae5) {
    for (let _0x55c1a4 in o)
        this[_0x55c1a4] = o[_0x55c1a4];
}
const m = function () {
    return s[_0xd5ac('0x54')];
}();
export {
    m as default
};