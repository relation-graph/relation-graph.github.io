
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x33fa = [
    'JaivZ',
    '15px',
    'qMSoO',
    '12px',
    'mnewe',
    '\x20原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'mdFVf',
    'XCMRI',
    '\x20如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'KQVAH',
    '\x20showStartArrow=true',
    'cEyzR',
    'NQIkK',
    '\x20showEndArrow=false',
    'Kjcpc',
    '\x20以此来让上方线条看起来是反向展示。',
    'PSjUM',
    '\x20最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据需求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。\x20',
    'esvjG',
    'lEAQg',
    'otsbw',
    'UYqLR',
    'graphRef2',
    '$createElement',
    '_self',
    'graphOptions1',
    'onNodeClick',
    'onLineClick',
    'graphOptions2',
    'name',
    'Demo',
    'components',
    'data',
    '纵向树状图谱',
    'mounted',
    'methods',
    'show',
    'graph1',
    'graph2',
    'resetGraph',
    'tree',
    'left',
    '300',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'top',
    '#ff0000',
    '根节点a',
    'R-b',
    'R-c',
    'R-c-1',
    'R-c-2',
    'R-d',
    'bottom',
    'showSeeksGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'FWYlK',
    'WbKtq',
    'div',
    'XqIxR',
    'cZuHX',
    'el-row',
    'BbrqD',
    'el-col',
    'PONzG',
    'bjPVB',
    'calc(100vh\x20-\x20100px)',
    'tdjxf',
    'jnJXL',
    'RelationGraph',
    'WfBMs',
    'graphRef1',
    'ltPxf',
    'DRzVm',
    'pcVXQ',
    '#efefef\x20solid\x201px'
];
(function (_0x4e0e8e, _0x5a3256) {
    var _0x393175 = function (_0x4c4a3e) {
        while (--_0x4c4a3e) {
            _0x4e0e8e['push'](_0x4e0e8e['shift']());
        }
    };
    _0x393175(++_0x5a3256);
}(_0x33fa, 0xd6));
var _0x3d1b = function (_0x411a8f, _0x4ce229) {
    _0x411a8f = _0x411a8f - 0x0;
    var _0x3b1961 = _0x33fa[_0x411a8f];
    return _0x3b1961;
};
import { n as _0x4b3131 } from './index-ef5ed09b.js';
var c = function () {
        var _0x2fb68b = {};
        _0x2fb68b[_0x3d1b('0x0')] = function (_0x310143, _0x2e97ba, _0x3cc1c4, _0x523a7a) {
            return _0x310143(_0x2e97ba, _0x3cc1c4, _0x523a7a);
        };
        _0x2fb68b[_0x3d1b('0x1')] = _0x3d1b('0x2');
        _0x2fb68b[_0x3d1b('0x3')] = function (_0x4c35e5, _0x3e7d3, _0x4ee8b6, _0x378eb3) {
            return _0x4c35e5(_0x3e7d3, _0x4ee8b6, _0x378eb3);
        };
        _0x2fb68b[_0x3d1b('0x4')] = _0x3d1b('0x5');
        _0x2fb68b[_0x3d1b('0x6')] = _0x3d1b('0x7');
        _0x2fb68b[_0x3d1b('0x8')] = function (_0x2a29a8, _0x17b48d, _0x27aa06, _0x30400b, _0x576778) {
            return _0x2a29a8(_0x17b48d, _0x27aa06, _0x30400b, _0x576778);
        };
        _0x2fb68b[_0x3d1b('0x9')] = _0x3d1b('0xa');
        _0x2fb68b[_0x3d1b('0xb')] = function (_0x3146d5, _0x152829, _0x33a328) {
            return _0x3146d5(_0x152829, _0x33a328);
        };
        _0x2fb68b[_0x3d1b('0xc')] = _0x3d1b('0xd');
        _0x2fb68b[_0x3d1b('0xe')] = _0x3d1b('0xf');
        _0x2fb68b[_0x3d1b('0x10')] = function (_0x73aefe, _0x15a82d, _0x1da65b, _0x1477ca) {
            return _0x73aefe(_0x15a82d, _0x1da65b, _0x1477ca);
        };
        _0x2fb68b[_0x3d1b('0x11')] = function (_0x28d432, _0x50eaa4, _0x1b7e7c, _0x10167f) {
            return _0x28d432(_0x50eaa4, _0x1b7e7c, _0x10167f);
        };
        _0x2fb68b[_0x3d1b('0x12')] = _0x3d1b('0x13');
        _0x2fb68b[_0x3d1b('0x14')] = _0x3d1b('0x15');
        _0x2fb68b[_0x3d1b('0x16')] = _0x3d1b('0x17');
        _0x2fb68b[_0x3d1b('0x18')] = _0x3d1b('0x19');
        _0x2fb68b[_0x3d1b('0x1a')] = function (_0x1436dc, _0x511113) {
            return _0x1436dc(_0x511113);
        };
        _0x2fb68b[_0x3d1b('0x1b')] = _0x3d1b('0x1c');
        _0x2fb68b[_0x3d1b('0x1d')] = _0x3d1b('0x1e');
        _0x2fb68b[_0x3d1b('0x1f')] = function (_0x3bf800, _0x2d6580) {
            return _0x3bf800(_0x2d6580);
        };
        _0x2fb68b[_0x3d1b('0x20')] = _0x3d1b('0x21');
        _0x2fb68b[_0x3d1b('0x22')] = _0x3d1b('0x23');
        _0x2fb68b[_0x3d1b('0x24')] = _0x3d1b('0x25');
        _0x2fb68b[_0x3d1b('0x26')] = function (_0x21927a, _0x237c38, _0x1b787f, _0x2a746a) {
            return _0x21927a(_0x237c38, _0x1b787f, _0x2a746a);
        };
        _0x2fb68b[_0x3d1b('0x27')] = function (_0x2ab93f, _0x1d913f, _0xa1caca, _0x28993c, _0x3a3955) {
            return _0x2ab93f(_0x1d913f, _0xa1caca, _0x28993c, _0x3a3955);
        };
        _0x2fb68b[_0x3d1b('0x28')] = function (_0x48c09f, _0x309391, _0x15cfce) {
            return _0x48c09f(_0x309391, _0x15cfce);
        };
        _0x2fb68b[_0x3d1b('0x29')] = _0x3d1b('0x2a');
        var _0x27f13a = this, _0x1bb17b = _0x27f13a[_0x3d1b('0x2b')], _0x598307 = _0x27f13a[_0x3d1b('0x2c')]['_c'] || _0x1bb17b;
        return _0x2fb68b[_0x3d1b('0x0')](_0x598307, _0x2fb68b[_0x3d1b('0x1')], [_0x2fb68b[_0x3d1b('0x3')](_0x598307, _0x2fb68b[_0x3d1b('0x4')], [
                _0x2fb68b[_0x3d1b('0x3')](_0x598307, _0x2fb68b[_0x3d1b('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x2fb68b[_0x3d1b('0x8')](_0x598307, _0x2fb68b[_0x3d1b('0x1')], { 'staticStyle': { 'height': _0x2fb68b[_0x3d1b('0x9')] } }, [_0x2fb68b[_0x3d1b('0xb')](_0x598307, _0x2fb68b[_0x3d1b('0xc')], {
                            'ref': _0x2fb68b[_0x3d1b('0xe')],
                            'attrs': {
                                'options': _0x27f13a[_0x3d1b('0x2d')],
                                'on-node-click': _0x27f13a[_0x3d1b('0x2e')],
                                'on-line-click': _0x27f13a[_0x3d1b('0x2f')]
                            }
                        })], 0x1)]),
                _0x2fb68b[_0x3d1b('0x10')](_0x598307, _0x2fb68b[_0x3d1b('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x2fb68b[_0x3d1b('0x11')](_0x598307, _0x2fb68b[_0x3d1b('0x1')], {
                        'staticStyle': {
                            'height': _0x2fb68b[_0x3d1b('0x9')],
                            'border-left': _0x2fb68b[_0x3d1b('0x12')],
                            'border-right': _0x2fb68b[_0x3d1b('0x12')],
                            'padding': _0x2fb68b[_0x3d1b('0x14')],
                            'font-size': _0x2fb68b[_0x3d1b('0x16')]
                        }
                    }, [
                        _0x27f13a['_v'](_0x2fb68b[_0x3d1b('0x18')]),
                        _0x2fb68b[_0x3d1b('0x1a')](_0x598307, 'br'),
                        _0x27f13a['_v'](_0x2fb68b[_0x3d1b('0x1b')]),
                        _0x2fb68b[_0x3d1b('0x1a')](_0x598307, 'br'),
                        _0x27f13a['_v'](_0x2fb68b[_0x3d1b('0x1d')]),
                        _0x2fb68b[_0x3d1b('0x1f')](_0x598307, 'br'),
                        _0x27f13a['_v'](_0x2fb68b[_0x3d1b('0x20')]),
                        _0x2fb68b[_0x3d1b('0x1f')](_0x598307, 'br'),
                        _0x27f13a['_v'](_0x2fb68b[_0x3d1b('0x22')]),
                        _0x2fb68b[_0x3d1b('0x1f')](_0x598307, 'br'),
                        _0x27f13a['_v'](_0x2fb68b[_0x3d1b('0x24')])
                    ])]),
                _0x2fb68b[_0x3d1b('0x26')](_0x598307, _0x2fb68b[_0x3d1b('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x2fb68b[_0x3d1b('0x27')](_0x598307, _0x2fb68b[_0x3d1b('0x1')], { 'staticStyle': { 'height': _0x2fb68b[_0x3d1b('0x9')] } }, [_0x2fb68b[_0x3d1b('0x28')](_0x598307, _0x2fb68b[_0x3d1b('0xc')], {
                            'ref': _0x2fb68b[_0x3d1b('0x29')],
                            'attrs': {
                                'options': _0x27f13a[_0x3d1b('0x30')],
                                'on-node-click': _0x27f13a[_0x3d1b('0x2e')],
                                'on-line-click': _0x27f13a[_0x3d1b('0x2f')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, i = {};
h[_0x3d1b('0x31')] = _0x3d1b('0x32');
h[_0x3d1b('0x33')] = {};
h[_0x3d1b('0x34')] = function () {
    var _0xb7f56b = { wIDwP: _0x3d1b('0x35') };
    return {
        currentCase: _0xb7f56b.wIDwP,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x3d1b('0x36')] = function () {
    this.show();
};
h[_0x3d1b('0x37')] = {};
h[_0x3d1b('0x37')][_0x3d1b('0x38')] = function (_0x1fa5e7) {
    var _0x51bba0 = {
        eyYch: _0x3d1b('0x39'),
        lTBlN: _0x3d1b('0x3a')
    };
    const _0x2b80ed = this.$refs.graphRef1;
    this.resetGraph(_0x2b80ed, _0x51bba0.eyYch);
    const _0x4191ad = this.$refs.graphRef2;
    this.resetGraph(_0x4191ad, _0x51bba0.lTBlN);
};
h[_0x3d1b('0x37')][_0x3d1b('0x3b')] = function (_0x48872d, _0x5cf90b) {
    var _0x195daf = {
        RVFtw: _0x3d1b('0x3c'),
        JuZVx: _0x3d1b('0x3d'),
        xwuSU: _0x3d1b('0x3e'),
        ELTeg: _0x3d1b('0x3f'),
        BzpcT: _0x3d1b('0x40'),
        vQcNv: _0x3d1b('0x41'),
        IBXub: function (_0x347c0c, _0x5c4553) {
            return _0x347c0c === _0x5c4553;
        },
        NzsaP: _0x3d1b('0x3a'),
        vSWAk: _0x3d1b('0x42'),
        IMckU: _0x3d1b('0x43'),
        mtiQf: _0x3d1b('0x44'),
        vVrSZ: _0x3d1b('0x45'),
        rFdoY: _0x3d1b('0x46'),
        MOiCL: _0x3d1b('0x47'),
        hKlbP: _0x3d1b('0x48'),
        RmUGb: _0x3d1b('0x49')
    };
    const _0x16c6c0 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x195daf.RVFtw,
                from: _0x195daf.JuZVx,
                max_per_width: _0x195daf.xwuSU,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x195daf.ELTeg,
        defaultNodeColor: _0x195daf.BzpcT
    };
    _0x16c6c0.layouts[0x0].from = _0x195daf.vQcNv, _0x16c6c0.layouts[0x0].min_per_width = 0x46, _0x16c6c0.layouts[0x0].max_per_width = 0xc8, _0x16c6c0.layouts[0x0].min_per_height = 0xc8, _0x16c6c0.layouts[0x0].max_per_height = 0x190, _0x16c6c0.defaultNodeWidth = 0x1e, _0x16c6c0.defaultNodeHeight = 0x64, _0x16c6c0.defaultJunctionPoint = 'tb';
    let _0x462784, _0x2709d0, _0x9cc433;
    _0x195daf.IBXub(_0x5cf90b, _0x195daf.NzsaP) && (_0x462784 = !0x0, _0x2709d0 = !0x1, _0x9cc433 = _0x195daf.vSWAk);
    const _0x4cdc39 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x195daf.IMckU
            },
            {
                id: _0x195daf.mtiQf,
                text: _0x195daf.mtiQf
            },
            {
                id: _0x195daf.vVrSZ,
                text: _0x195daf.vVrSZ,
                expandHolderPosition: _0x195daf.vQcNv
            },
            {
                id: _0x195daf.rFdoY,
                text: _0x195daf.rFdoY
            },
            {
                id: _0x195daf.MOiCL,
                text: _0x195daf.MOiCL
            },
            {
                id: _0x195daf.hKlbP,
                text: _0x195daf.hKlbP
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x195daf.RmUGb
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
            },
            {
                id: 'd',
                text: 'd'
            },
            {
                id: 'e',
                text: 'e'
            }
        ],
        lines: [
            {
                from: _0x195daf.mtiQf,
                to: 'a',
                showStartArrow: _0x462784,
                showEndArrow: _0x2709d0,
                color: _0x9cc433
            },
            {
                from: _0x195daf.vVrSZ,
                to: 'a',
                showStartArrow: _0x462784,
                showEndArrow: _0x2709d0,
                color: _0x9cc433
            },
            {
                from: _0x195daf.rFdoY,
                to: _0x195daf.vVrSZ,
                showStartArrow: _0x462784,
                showEndArrow: _0x2709d0,
                color: _0x9cc433
            },
            {
                from: _0x195daf.MOiCL,
                to: _0x195daf.vVrSZ,
                showStartArrow: _0x462784,
                showEndArrow: _0x2709d0,
                color: _0x9cc433
            },
            {
                from: _0x195daf.hKlbP,
                to: 'a',
                showStartArrow: _0x462784,
                showEndArrow: _0x2709d0,
                color: _0x9cc433
            },
            {
                from: 'a',
                to: 'b'
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
            },
            {
                from: 'a',
                to: 'd'
            },
            {
                from: 'a',
                to: 'e'
            }
        ]
    };
    _0x48872d.setOptions(_0x16c6c0, _0x7cc512 => {
        this.showSeeksGraph(_0x48872d, _0x4cdc39);
    });
};
h[_0x3d1b('0x37')][_0x3d1b('0x4a')] = function (_0xab0495, _0x5a569f) {
    _0xab0495.setJsonData(_0x5a569f, _0x301f4d => {
        _0x301f4d.focusNodeById('a');
    });
};
h[_0x3d1b('0x37')][_0x3d1b('0x2e')] = function (_0x559d21, _0x352d39) {
    var _0x1259d9 = { jRWAW: _0x3d1b('0x4b') };
    console.log(_0x1259d9.jRWAW, _0x559d21);
};
h[_0x3d1b('0x37')][_0x3d1b('0x2f')] = function (_0x586cd2, _0x2684e2, _0x256b25) {
    var _0x1c912f = { byqZR: _0x3d1b('0x4c') };
    console.log(_0x1c912f.byqZR, _0x586cd2);
};
var p = _0x4b3131(h, c, d, !0x1, f, null, null, null);
function f(_0x58beab) {
    for (let _0x37353a in i)
        this[_0x37353a] = i[_0x37353a];
}
const u = function () {
    return p[_0x3d1b('0x4d')];
}();
export {
    u as default
};