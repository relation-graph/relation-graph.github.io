
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x315f = [
    'showSeeksGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'wtaop',
    'kYadG',
    'div',
    'pucFy',
    'oIHnT',
    'el-row',
    'tunmd',
    'UrMUy',
    'el-col',
    'Yfpbk',
    'CrSIi',
    'calc(100vh\x20-\x20100px)',
    'AfGOF',
    'mnwsj',
    'RelationGraph',
    'dUyHA',
    'graphRef1',
    'rIutN',
    'ivLJi',
    'pGFtC',
    '#efefef\x20solid\x201px',
    'BvryF',
    '15px',
    'Pglpj',
    '14px',
    'XUHBx',
    '25px',
    'jPoim',
    'kTieL',
    'gtEQS',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'yhcUk',
    'nOvHz',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'TdoPr',
    'mSFpF',
    'YcFpy',
    'showStartArrow=true',
    'cebro',
    'xrGso',
    'showEndArrow=false',
    'pHaNo',
    '以此来让上方线条看起来是反向展示。',
    'EuNif',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'QqtZm',
    'oBEqC',
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
    'bottom'
];
(function (_0x7b14f9, _0x36cd52) {
    var _0x3e443a = function (_0x15b1f9) {
        while (--_0x15b1f9) {
            _0x7b14f9['push'](_0x7b14f9['shift']());
        }
    };
    _0x3e443a(++_0x36cd52);
}(_0x315f, 0x1a3));
var _0x2514 = function (_0x4f74f9, _0x56bf63) {
    _0x4f74f9 = _0x4f74f9 - 0x0;
    var _0x1e791d = _0x315f[_0x4f74f9];
    return _0x1e791d;
};
import { n as _0x2a643f } from './index-c22e9dce.js';
var c = function () {
        var _0x46d5bf = {};
        _0x46d5bf[_0x2514('0x0')] = function (_0x3b61ce, _0x55c78f, _0x2b5096, _0x5977c0) {
            return _0x3b61ce(_0x55c78f, _0x2b5096, _0x5977c0);
        };
        _0x46d5bf[_0x2514('0x1')] = _0x2514('0x2');
        _0x46d5bf[_0x2514('0x3')] = function (_0x343fdf, _0x57c64b, _0x327a77, _0x4d3793) {
            return _0x343fdf(_0x57c64b, _0x327a77, _0x4d3793);
        };
        _0x46d5bf[_0x2514('0x4')] = _0x2514('0x5');
        _0x46d5bf[_0x2514('0x6')] = function (_0x41a73e, _0x380e8f, _0x4d047c, _0x59aadb) {
            return _0x41a73e(_0x380e8f, _0x4d047c, _0x59aadb);
        };
        _0x46d5bf[_0x2514('0x7')] = _0x2514('0x8');
        _0x46d5bf[_0x2514('0x9')] = function (_0x3c7ed9, _0x5a622f, _0xcb3d12, _0x1a06da, _0x85d972) {
            return _0x3c7ed9(_0x5a622f, _0xcb3d12, _0x1a06da, _0x85d972);
        };
        _0x46d5bf[_0x2514('0xa')] = _0x2514('0xb');
        _0x46d5bf[_0x2514('0xc')] = function (_0x52d65a, _0x4c3abc, _0x2bc389) {
            return _0x52d65a(_0x4c3abc, _0x2bc389);
        };
        _0x46d5bf[_0x2514('0xd')] = _0x2514('0xe');
        _0x46d5bf[_0x2514('0xf')] = _0x2514('0x10');
        _0x46d5bf[_0x2514('0x11')] = function (_0x3ef556, _0x9d21b8, _0x5c5947, _0x2b13ec) {
            return _0x3ef556(_0x9d21b8, _0x5c5947, _0x2b13ec);
        };
        _0x46d5bf[_0x2514('0x12')] = function (_0x178311, _0x2c3b42, _0x3e05ea, _0xb4ac14) {
            return _0x178311(_0x2c3b42, _0x3e05ea, _0xb4ac14);
        };
        _0x46d5bf[_0x2514('0x13')] = _0x2514('0x14');
        _0x46d5bf[_0x2514('0x15')] = _0x2514('0x16');
        _0x46d5bf[_0x2514('0x17')] = _0x2514('0x18');
        _0x46d5bf[_0x2514('0x19')] = _0x2514('0x1a');
        _0x46d5bf[_0x2514('0x1b')] = function (_0x39691f, _0x290266, _0x1ad674) {
            return _0x39691f(_0x290266, _0x1ad674);
        };
        _0x46d5bf[_0x2514('0x1c')] = function (_0x366c26, _0x297909, _0x3ef9f3) {
            return _0x366c26(_0x297909, _0x3ef9f3);
        };
        _0x46d5bf[_0x2514('0x1d')] = _0x2514('0x1e');
        _0x46d5bf[_0x2514('0x1f')] = function (_0x4f5323, _0x431197, _0x3cc059) {
            return _0x4f5323(_0x431197, _0x3cc059);
        };
        _0x46d5bf[_0x2514('0x20')] = _0x2514('0x21');
        _0x46d5bf[_0x2514('0x22')] = function (_0x5e06a7, _0x688c95, _0xe54919) {
            return _0x5e06a7(_0x688c95, _0xe54919);
        };
        _0x46d5bf[_0x2514('0x23')] = function (_0x597323, _0x23f762, _0x5091bb) {
            return _0x597323(_0x23f762, _0x5091bb);
        };
        _0x46d5bf[_0x2514('0x24')] = _0x2514('0x25');
        _0x46d5bf[_0x2514('0x26')] = function (_0x377649, _0x219476, _0x452c8e) {
            return _0x377649(_0x219476, _0x452c8e);
        };
        _0x46d5bf[_0x2514('0x27')] = _0x2514('0x28');
        _0x46d5bf[_0x2514('0x29')] = _0x2514('0x2a');
        _0x46d5bf[_0x2514('0x2b')] = _0x2514('0x2c');
        _0x46d5bf[_0x2514('0x2d')] = function (_0x501d75, _0x34c3d6, _0x59d19b) {
            return _0x501d75(_0x34c3d6, _0x59d19b);
        };
        _0x46d5bf[_0x2514('0x2e')] = _0x2514('0x2f');
        var _0x21e2bd = this, _0xba6508 = _0x21e2bd[_0x2514('0x30')], _0x4b7b00 = _0x21e2bd[_0x2514('0x31')]['_c'] || _0xba6508;
        return _0x46d5bf[_0x2514('0x0')](_0x4b7b00, _0x46d5bf[_0x2514('0x1')], [_0x46d5bf[_0x2514('0x3')](_0x4b7b00, _0x46d5bf[_0x2514('0x4')], [
                _0x46d5bf[_0x2514('0x6')](_0x4b7b00, _0x46d5bf[_0x2514('0x7')], { 'attrs': { 'span': 0x9 } }, [_0x46d5bf[_0x2514('0x9')](_0x4b7b00, _0x46d5bf[_0x2514('0x1')], { 'staticStyle': { 'height': _0x46d5bf[_0x2514('0xa')] } }, [_0x46d5bf[_0x2514('0xc')](_0x4b7b00, _0x46d5bf[_0x2514('0xd')], {
                            'ref': _0x46d5bf[_0x2514('0xf')],
                            'attrs': {
                                'options': _0x21e2bd[_0x2514('0x32')],
                                'on-node-click': _0x21e2bd[_0x2514('0x33')],
                                'on-line-click': _0x21e2bd[_0x2514('0x34')]
                            }
                        })], 0x1)]),
                _0x46d5bf[_0x2514('0x11')](_0x4b7b00, _0x46d5bf[_0x2514('0x7')], { 'attrs': { 'span': 0x6 } }, [_0x46d5bf[_0x2514('0x12')](_0x4b7b00, _0x46d5bf[_0x2514('0x1')], {
                        'staticStyle': {
                            'height': _0x46d5bf[_0x2514('0xa')],
                            'border-left': _0x46d5bf[_0x2514('0x13')],
                            'border-right': _0x46d5bf[_0x2514('0x13')],
                            'padding': _0x46d5bf[_0x2514('0x15')],
                            'font-size': _0x46d5bf[_0x2514('0x17')],
                            'line-height': _0x46d5bf[_0x2514('0x19')]
                        }
                    }, [_0x46d5bf[_0x2514('0x1b')](_0x4b7b00, 'ul', [
                            _0x46d5bf[_0x2514('0x1c')](_0x4b7b00, 'li', [_0x21e2bd['_v'](_0x46d5bf[_0x2514('0x1d')])]),
                            _0x46d5bf[_0x2514('0x1f')](_0x4b7b00, 'li', [_0x21e2bd['_v'](_0x46d5bf[_0x2514('0x20')])]),
                            _0x46d5bf[_0x2514('0x22')](_0x4b7b00, 'ul', [
                                _0x46d5bf[_0x2514('0x23')](_0x4b7b00, 'li', [_0x21e2bd['_v'](_0x46d5bf[_0x2514('0x24')])]),
                                _0x46d5bf[_0x2514('0x26')](_0x4b7b00, 'li', [_0x21e2bd['_v'](_0x46d5bf[_0x2514('0x27')])])
                            ]),
                            _0x46d5bf[_0x2514('0x26')](_0x4b7b00, 'li', [_0x21e2bd['_v'](_0x46d5bf[_0x2514('0x29')])]),
                            _0x46d5bf[_0x2514('0x26')](_0x4b7b00, 'li', [_0x21e2bd['_v'](_0x46d5bf[_0x2514('0x2b')])])
                        ])])]),
                _0x46d5bf[_0x2514('0x12')](_0x4b7b00, _0x46d5bf[_0x2514('0x7')], { 'attrs': { 'span': 0x9 } }, [_0x46d5bf[_0x2514('0x9')](_0x4b7b00, _0x46d5bf[_0x2514('0x1')], { 'staticStyle': { 'height': _0x46d5bf[_0x2514('0xa')] } }, [_0x46d5bf[_0x2514('0x2d')](_0x4b7b00, _0x46d5bf[_0x2514('0xd')], {
                            'ref': _0x46d5bf[_0x2514('0x2e')],
                            'attrs': {
                                'options': _0x21e2bd[_0x2514('0x35')],
                                'on-node-click': _0x21e2bd[_0x2514('0x33')],
                                'on-line-click': _0x21e2bd[_0x2514('0x34')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x2514('0x36')] = _0x2514('0x37');
h[_0x2514('0x38')] = {};
h[_0x2514('0x39')] = function () {
    var _0xb0f28 = { xxeOp: _0x2514('0x3a') };
    return {
        currentCase: _0xb0f28.xxeOp,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x2514('0x3b')] = function () {
    this.show();
};
h[_0x2514('0x3c')] = {};
h[_0x2514('0x3c')][_0x2514('0x3d')] = function (_0x1837aa) {
    var _0x75f5c6 = {
        ZFTFB: _0x2514('0x3e'),
        LEMsh: _0x2514('0x3f')
    };
    const _0x454671 = this.$refs.graphRef1;
    this.resetGraph(_0x454671, _0x75f5c6.ZFTFB);
    const _0x3e8b81 = this.$refs.graphRef2;
    this.resetGraph(_0x3e8b81, _0x75f5c6.LEMsh);
};
h[_0x2514('0x3c')][_0x2514('0x40')] = function (_0x2ba115, _0x14f9aa) {
    var _0x3f9225 = {
        YnruO: _0x2514('0x41'),
        Kqwlk: _0x2514('0x42'),
        BdmFC: _0x2514('0x43'),
        xmCHJ: _0x2514('0x44'),
        UcuME: _0x2514('0x45'),
        PFluR: _0x2514('0x46'),
        THRIk: function (_0x5267f6, _0x12fafa) {
            return _0x5267f6 === _0x12fafa;
        },
        sXpdf: _0x2514('0x3f'),
        NRQHu: _0x2514('0x47'),
        DIZWr: _0x2514('0x48'),
        XalxM: _0x2514('0x49'),
        SoSej: _0x2514('0x4a'),
        dCBxA: _0x2514('0x4b'),
        zQWRF: _0x2514('0x4c'),
        armnS: _0x2514('0x4d'),
        ktyTB: _0x2514('0x4e')
    };
    const _0x25e8e8 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x3f9225.YnruO,
                from: _0x3f9225.Kqwlk,
                max_per_width: _0x3f9225.BdmFC,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x3f9225.xmCHJ,
        defaultNodeColor: _0x3f9225.UcuME
    };
    _0x25e8e8.layouts[0x0].from = _0x3f9225.PFluR, _0x25e8e8.layouts[0x0].min_per_width = 0x46, _0x25e8e8.layouts[0x0].max_per_width = 0xc8, _0x25e8e8.layouts[0x0].min_per_height = 0xc8, _0x25e8e8.layouts[0x0].max_per_height = 0x190, _0x25e8e8.defaultNodeWidth = 0x1e, _0x25e8e8.defaultNodeHeight = 0x64, _0x25e8e8.defaultJunctionPoint = 'tb';
    let _0x2fd1c8, _0x10d71b, _0xbac32a;
    _0x3f9225.THRIk(_0x14f9aa, _0x3f9225.sXpdf) && (_0x2fd1c8 = !0x0, _0x10d71b = !0x1, _0xbac32a = _0x3f9225.NRQHu);
    const _0x25c291 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x3f9225.DIZWr
            },
            {
                id: _0x3f9225.XalxM,
                text: _0x3f9225.XalxM
            },
            {
                id: _0x3f9225.SoSej,
                text: _0x3f9225.SoSej,
                expandHolderPosition: _0x3f9225.PFluR
            },
            {
                id: _0x3f9225.dCBxA,
                text: _0x3f9225.dCBxA
            },
            {
                id: _0x3f9225.zQWRF,
                text: _0x3f9225.zQWRF
            },
            {
                id: _0x3f9225.armnS,
                text: _0x3f9225.armnS
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x3f9225.ktyTB
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
                from: _0x3f9225.XalxM,
                to: 'a',
                showStartArrow: _0x2fd1c8,
                showEndArrow: _0x10d71b,
                color: _0xbac32a
            },
            {
                from: _0x3f9225.SoSej,
                to: 'a',
                showStartArrow: _0x2fd1c8,
                showEndArrow: _0x10d71b,
                color: _0xbac32a
            },
            {
                from: _0x3f9225.dCBxA,
                to: _0x3f9225.SoSej,
                showStartArrow: _0x2fd1c8,
                showEndArrow: _0x10d71b,
                color: _0xbac32a
            },
            {
                from: _0x3f9225.zQWRF,
                to: _0x3f9225.SoSej,
                showStartArrow: _0x2fd1c8,
                showEndArrow: _0x10d71b,
                color: _0xbac32a
            },
            {
                from: _0x3f9225.armnS,
                to: 'a',
                showStartArrow: _0x2fd1c8,
                showEndArrow: _0x10d71b,
                color: _0xbac32a
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
    _0x2ba115.setOptions(_0x25e8e8, _0x128733 => {
        this.showSeeksGraph(_0x2ba115, _0x25c291);
    });
};
h[_0x2514('0x3c')][_0x2514('0x4f')] = function (_0x5917d4, _0x2aafa0) {
    _0x5917d4.setJsonData(_0x2aafa0, _0x2148c9 => {
        _0x2148c9.focusNodeById('a');
    });
};
h[_0x2514('0x3c')][_0x2514('0x33')] = function (_0x52f38f, _0x7d8626) {
    var _0x3b00a4 = { DgoJg: _0x2514('0x50') };
    console.log(_0x3b00a4.DgoJg, _0x52f38f);
};
h[_0x2514('0x3c')][_0x2514('0x34')] = function (_0x55ab00, _0x3b244b, _0x3cccd8) {
    var _0x3b5a50 = { wIDVi: _0x2514('0x51') };
    console.log(_0x3b5a50.wIDVi, _0x55ab00);
};
var p = _0x2a643f(h, c, d, !0x1, f, null, null, null);
function f(_0x4e8243) {
    for (let _0x5da726 in n)
        this[_0x5da726] = n[_0x5da726];
}
const m = function () {
    return p[_0x2514('0x52')];
}();
export {
    m as default
};