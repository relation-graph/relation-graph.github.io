
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2cf1 = [
    '20px',
    'NdALK',
    '#666666',
    'hKEgd',
    '600px',
    'kWVkG',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'uyhMH',
    'LTKvy',
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
    'qISuR',
    'VmYZU',
    'div',
    'tMTiS',
    'hecxS',
    'el-tabs',
    'CNdGz',
    'card',
    'LyLBf',
    'activeTabName',
    'dXCbp',
    'el-tab-pane',
    'mSwWi',
    '基本信息',
    'dCKIP',
    'base',
    'FIlzh',
    'ebGQx',
    '关系图谱（点这里）',
    'egUYw',
    'relation',
    'VhFsP',
    'XKXxz',
    'loading',
    'nilge',
    'v-loading',
    'XjgKI',
    'g_loading',
    'LLMbl',
    'calc(100%)',
    'IDENN',
    'calc(100vh\x20-\x20300px)',
    'aAZur',
    'hgToi',
    'RelationGraph',
    'xmbri',
    'graphRef',
    'AsqNb',
    '风险信息',
    'qohyC',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'vAqzq',
    'FCKYF',
    'HmXiN'
];
(function (_0x5c5012, _0x5f595d) {
    var _0x126a52 = function (_0x2401c3) {
        while (--_0x2401c3) {
            _0x5c5012['push'](_0x5c5012['shift']());
        }
    };
    _0x126a52(++_0x5f595d);
}(_0x2cf1, 0x17e));
var _0x9e3f = function (_0x4dc575, _0x402dd3) {
    _0x4dc575 = _0x4dc575 - 0x0;
    var _0x40f17f = _0x2cf1[_0x4dc575];
    return _0x40f17f;
};
import { n as _0x7ffc66 } from './index-35e4fca6.js';
var n = function () {
        var _0x54a10f = {};
        _0x54a10f[_0x9e3f('0x0')] = function (_0x3861db, _0x498838, _0x40e1c0, _0x356dca) {
            return _0x3861db(_0x498838, _0x40e1c0, _0x356dca);
        };
        _0x54a10f[_0x9e3f('0x1')] = _0x9e3f('0x2');
        _0x54a10f[_0x9e3f('0x3')] = function (_0x340e6d, _0x2d8e55, _0x9388a2, _0x115057, _0x2984d9) {
            return _0x340e6d(_0x2d8e55, _0x9388a2, _0x115057, _0x2984d9);
        };
        _0x54a10f[_0x9e3f('0x4')] = _0x9e3f('0x5');
        _0x54a10f[_0x9e3f('0x6')] = _0x9e3f('0x7');
        _0x54a10f[_0x9e3f('0x8')] = _0x9e3f('0x9');
        _0x54a10f[_0x9e3f('0xa')] = _0x9e3f('0xb');
        _0x54a10f[_0x9e3f('0xc')] = _0x9e3f('0xd');
        _0x54a10f[_0x9e3f('0xe')] = _0x9e3f('0xf');
        _0x54a10f[_0x9e3f('0x10')] = function (_0x3944e6, _0x3e72f4, _0x315c1c, _0x5d90ed) {
            return _0x3944e6(_0x3e72f4, _0x315c1c, _0x5d90ed);
        };
        _0x54a10f[_0x9e3f('0x11')] = _0x9e3f('0x12');
        _0x54a10f[_0x9e3f('0x13')] = _0x9e3f('0x14');
        _0x54a10f[_0x9e3f('0x15')] = function (_0x54cf6d, _0x4d4b6c, _0x4ef507, _0x5e502e, _0x4af4e4) {
            return _0x54cf6d(_0x4d4b6c, _0x4ef507, _0x5e502e, _0x4af4e4);
        };
        _0x54a10f[_0x9e3f('0x16')] = _0x9e3f('0x17');
        _0x54a10f[_0x9e3f('0x18')] = _0x9e3f('0x19');
        _0x54a10f[_0x9e3f('0x1a')] = _0x9e3f('0x1b');
        _0x54a10f[_0x9e3f('0x1c')] = _0x9e3f('0x1d');
        _0x54a10f[_0x9e3f('0x1e')] = _0x9e3f('0x1f');
        _0x54a10f[_0x9e3f('0x20')] = function (_0x2d69df, _0x5b3771, _0x7de26) {
            return _0x2d69df(_0x5b3771, _0x7de26);
        };
        _0x54a10f[_0x9e3f('0x21')] = _0x9e3f('0x22');
        _0x54a10f[_0x9e3f('0x23')] = _0x9e3f('0x24');
        _0x54a10f[_0x9e3f('0x25')] = _0x9e3f('0x26');
        _0x54a10f[_0x9e3f('0x27')] = _0x9e3f('0x28');
        var _0x57a299 = this, _0x1a2270 = _0x57a299[_0x9e3f('0x29')], _0x6c8428 = _0x57a299[_0x9e3f('0x2a')]['_c'] || _0x1a2270;
        return _0x54a10f[_0x9e3f('0x0')](_0x6c8428, _0x54a10f[_0x9e3f('0x1')], [
            _0x57a299['_m'](0x0),
            _0x54a10f[_0x9e3f('0x3')](_0x6c8428, _0x54a10f[_0x9e3f('0x4')], {
                'attrs': { 'type': _0x54a10f[_0x9e3f('0x6')] },
                'on': { 'tab-click': _0x57a299[_0x9e3f('0x2b')] },
                'model': {
                    'value': _0x57a299[_0x9e3f('0x9')],
                    'callback': function (_0x766a50) {
                        _0x57a299[_0x9e3f('0x9')] = _0x766a50;
                    },
                    'expression': _0x54a10f[_0x9e3f('0x8')]
                }
            }, [
                _0x54a10f[_0x9e3f('0x0')](_0x6c8428, _0x54a10f[_0x9e3f('0xa')], {
                    'attrs': {
                        'label': _0x54a10f[_0x9e3f('0xc')],
                        'name': _0x54a10f[_0x9e3f('0xe')]
                    }
                }, [_0x57a299['_v'](_0x54a10f[_0x9e3f('0xc')])]),
                _0x54a10f[_0x9e3f('0x10')](_0x6c8428, _0x54a10f[_0x9e3f('0xa')], {
                    'attrs': {
                        'label': _0x54a10f[_0x9e3f('0x11')],
                        'name': _0x54a10f[_0x9e3f('0x13')]
                    }
                }, [_0x54a10f[_0x9e3f('0x15')](_0x6c8428, _0x54a10f[_0x9e3f('0x1')], {
                        'directives': [{
                                'name': _0x54a10f[_0x9e3f('0x16')],
                                'rawName': _0x54a10f[_0x9e3f('0x18')],
                                'value': _0x57a299[_0x9e3f('0x1b')],
                                'expression': _0x54a10f[_0x9e3f('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0x54a10f[_0x9e3f('0x1c')],
                            'height': _0x54a10f[_0x9e3f('0x1e')]
                        }
                    }, [_0x54a10f[_0x9e3f('0x20')](_0x6c8428, _0x54a10f[_0x9e3f('0x21')], {
                            'ref': _0x54a10f[_0x9e3f('0x23')],
                            'attrs': { 'options': _0x57a299[_0x9e3f('0x2c')] }
                        })], 0x1)]),
                _0x54a10f[_0x9e3f('0x10')](_0x6c8428, _0x54a10f[_0x9e3f('0xa')], {
                    'attrs': {
                        'label': _0x54a10f[_0x9e3f('0x25')],
                        'name': _0x54a10f[_0x9e3f('0x27')]
                    }
                }, [_0x57a299['_v'](_0x54a10f[_0x9e3f('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x83ace4 = {};
            _0x83ace4[_0x9e3f('0x2d')] = function (_0xb4a0f5, _0x2579b5, _0x48e274, _0x344a53) {
                return _0xb4a0f5(_0x2579b5, _0x48e274, _0x344a53);
            };
            _0x83ace4[_0x9e3f('0x2e')] = _0x9e3f('0x2');
            _0x83ace4[_0x9e3f('0x2f')] = _0x9e3f('0x30');
            _0x83ace4[_0x9e3f('0x31')] = _0x9e3f('0x32');
            _0x83ace4[_0x9e3f('0x33')] = _0x9e3f('0x34');
            _0x83ace4[_0x9e3f('0x35')] = _0x9e3f('0x36');
            _0x83ace4[_0x9e3f('0x37')] = function (_0x4aad02, _0x448bae, _0x3119a8) {
                return _0x4aad02(_0x448bae, _0x3119a8);
            };
            _0x83ace4[_0x9e3f('0x38')] = _0x9e3f('0x39');
            var _0x253ab1 = this, _0x5c5d8c = _0x253ab1[_0x9e3f('0x29')], _0x4e5a2b = _0x253ab1[_0x9e3f('0x2a')]['_c'] || _0x5c5d8c;
            return _0x83ace4[_0x9e3f('0x2d')](_0x4e5a2b, _0x83ace4[_0x9e3f('0x2e')], {
                'staticStyle': {
                    'padding': _0x83ace4[_0x9e3f('0x2f')],
                    'color': _0x83ace4[_0x9e3f('0x31')],
                    'width': _0x83ace4[_0x9e3f('0x33')]
                }
            }, [
                _0x253ab1['_v'](_0x83ace4[_0x9e3f('0x35')]),
                _0x83ace4[_0x9e3f('0x37')](_0x4e5a2b, _0x83ace4[_0x9e3f('0x2e')], [_0x253ab1['_v'](_0x83ace4[_0x9e3f('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x9e3f('0x3a')] = _0x9e3f('0x3b');
l[_0x9e3f('0x3c')] = {};
l[_0x9e3f('0x3d')] = function () {
    var _0xd2fcfc = {
        oWjQT: _0x9e3f('0xf'),
        oMhyV: _0x9e3f('0x3e'),
        UHmtl: _0x9e3f('0x3f'),
        tXutO: _0x9e3f('0x40'),
        dfiQU: _0x9e3f('0x41'),
        gFWBN: _0x9e3f('0x42'),
        CmNmA: _0x9e3f('0x43'),
        pKGci: _0x9e3f('0x44'),
        XoLLE: _0x9e3f('0x45'),
        zfJoQ: _0x9e3f('0x46'),
        WZZnb: _0x9e3f('0x47')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0xd2fcfc.oWjQT,
        demoname: _0xd2fcfc.oMhyV,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0xd2fcfc.UHmtl,
                    layoutClassName: _0xd2fcfc.tXutO,
                    defaultJunctionPoint: _0xd2fcfc.dfiQU,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0xd2fcfc.gFWBN,
                    max_per_width: _0xd2fcfc.CmNmA,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0xd2fcfc.pKGci
            },
            defaultExpandHolderPosition: _0xd2fcfc.XoLLE,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0xd2fcfc.zfJoQ,
            defaultNodeColor: _0xd2fcfc.WZZnb
        }
    };
};
l[_0x9e3f('0x48')] = function () {
};
l[_0x9e3f('0x49')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x9e3f('0x4a')] = {};
l[_0x9e3f('0x4a')][_0x9e3f('0x4b')] = function () {
    var _0x263829 = {
        GskDE: _0x9e3f('0x4c'),
        TgVFS: _0x9e3f('0x4d'),
        CtfYl: _0x9e3f('0x4e'),
        juoqG: _0x9e3f('0x4f'),
        JjnKj: _0x9e3f('0x50'),
        fGSnt: _0x9e3f('0x51'),
        AuAQi: _0x9e3f('0x52'),
        LupTW: _0x9e3f('0x53'),
        sEqmV: function (_0x4e4df6, _0x10535a, _0x71211a) {
            return _0x4e4df6(_0x10535a, _0x71211a);
        }
    };
    const _0x278ce3 = {
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
                id: _0x263829.GskDE,
                text: _0x263829.GskDE
            },
            {
                id: _0x263829.TgVFS,
                text: _0x263829.TgVFS
            },
            {
                id: _0x263829.CtfYl,
                text: _0x263829.CtfYl
            },
            {
                id: _0x263829.juoqG,
                text: _0x263829.juoqG
            },
            {
                id: _0x263829.JjnKj,
                text: _0x263829.JjnKj
            },
            {
                id: _0x263829.fGSnt,
                text: _0x263829.fGSnt
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x263829.AuAQi,
                text: _0x263829.AuAQi
            },
            {
                id: _0x263829.LupTW,
                text: _0x263829.LupTW
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
                to: _0x263829.GskDE
            },
            {
                from: 'b1',
                to: _0x263829.TgVFS
            },
            {
                from: 'b1',
                to: _0x263829.CtfYl
            },
            {
                from: 'b1',
                to: _0x263829.juoqG
            },
            {
                from: 'b1',
                to: _0x263829.JjnKj
            },
            {
                from: 'b1',
                to: _0x263829.fGSnt
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x263829.AuAQi
            },
            {
                from: 'b2',
                to: _0x263829.LupTW
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
    console.log(JSON.stringify(_0x278ce3)), _0x263829.sEqmV(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x278ce3, _0x494d45 => {
            _0x494d45.refresh();
        });
    }, 0x3e8);
};
l[_0x9e3f('0x4a')][_0x9e3f('0x2b')] = function (_0x45650c, _0x500c69) {
    var _0xa273db = {
        cffgp: _0x9e3f('0x54'),
        UOlhI: function (_0x4676dd, _0x4c1795) {
            return _0x4676dd === _0x4c1795;
        },
        gbaWQ: _0x9e3f('0x14')
    };
    console.log(_0xa273db.cffgp, this.activeTabName), _0xa273db.UOlhI(this.activeTabName, _0xa273db.gbaWQ) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x7ffc66(l, n, d, !0x1, c, null, null, null);
function c(_0x596dcb) {
    for (let _0x266917 in o)
        this[_0x266917] = o[_0x266917];
}
const m = function () {
    return s[_0x9e3f('0x55')];
}();
export {
    m as default
};