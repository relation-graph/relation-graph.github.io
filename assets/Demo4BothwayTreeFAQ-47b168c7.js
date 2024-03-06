
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x126e = [
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
    'kAegQ',
    'ATrXz',
    'div',
    'DvNTY',
    'el-row',
    'BiYQg',
    'dSJKr',
    'el-col',
    'JEDAz',
    'ioZae',
    'calc(100vh\x20-\x20100px)',
    'SMRHy',
    'KccrL',
    'RelationGraph',
    'hBRHR',
    'graphRef1',
    'YiCck',
    'CWsLj',
    '#efefef\x20solid\x201px',
    'ogKXe',
    '15px',
    'lilEl',
    '14px',
    'PXFYb',
    '25px',
    'cEled',
    'AIudQ',
    'GUxeS',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'fbpFy',
    'ozoGl',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'XaXAW',
    'KEPcK',
    'NitVc',
    'showStartArrow=true',
    'dDeoX',
    'Gvxgn',
    'showEndArrow=false',
    'JNocG',
    'JjajW',
    '以此来让上方线条看起来是反向展示。',
    'yhlsJ',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'nHcnd',
    'Wxmnx',
    'JrzMf',
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
    'top'
];
(function (_0x51f97a, _0x31c9ce) {
    var _0x3aad1c = function (_0xfdfb58) {
        while (--_0xfdfb58) {
            _0x51f97a['push'](_0x51f97a['shift']());
        }
    };
    _0x3aad1c(++_0x31c9ce);
}(_0x126e, 0x158));
var _0x339c = function (_0x2e307e, _0x5dddef) {
    _0x2e307e = _0x2e307e - 0x0;
    var _0x29eed8 = _0x126e[_0x2e307e];
    return _0x29eed8;
};
import { n as _0x1b9464 } from './index-a8fcf52e.js';
var c = function () {
        var _0x455ce8 = {};
        _0x455ce8[_0x339c('0x0')] = function (_0x36aa23, _0x2fdb9b, _0x20ea76, _0x5572d2) {
            return _0x36aa23(_0x2fdb9b, _0x20ea76, _0x5572d2);
        };
        _0x455ce8[_0x339c('0x1')] = _0x339c('0x2');
        _0x455ce8[_0x339c('0x3')] = _0x339c('0x4');
        _0x455ce8[_0x339c('0x5')] = function (_0x2d254e, _0x27cdfd, _0x4ecf02, _0x423179) {
            return _0x2d254e(_0x27cdfd, _0x4ecf02, _0x423179);
        };
        _0x455ce8[_0x339c('0x6')] = _0x339c('0x7');
        _0x455ce8[_0x339c('0x8')] = function (_0x50878c, _0x56d1ca, _0x16011c, _0x42022a, _0x3f9c87) {
            return _0x50878c(_0x56d1ca, _0x16011c, _0x42022a, _0x3f9c87);
        };
        _0x455ce8[_0x339c('0x9')] = _0x339c('0xa');
        _0x455ce8[_0x339c('0xb')] = function (_0x326107, _0x678f12, _0x41e484) {
            return _0x326107(_0x678f12, _0x41e484);
        };
        _0x455ce8[_0x339c('0xc')] = _0x339c('0xd');
        _0x455ce8[_0x339c('0xe')] = _0x339c('0xf');
        _0x455ce8[_0x339c('0x10')] = function (_0x443f59, _0x43f3dd, _0x4d790d, _0x25a572) {
            return _0x443f59(_0x43f3dd, _0x4d790d, _0x25a572);
        };
        _0x455ce8[_0x339c('0x11')] = _0x339c('0x12');
        _0x455ce8[_0x339c('0x13')] = _0x339c('0x14');
        _0x455ce8[_0x339c('0x15')] = _0x339c('0x16');
        _0x455ce8[_0x339c('0x17')] = _0x339c('0x18');
        _0x455ce8[_0x339c('0x19')] = function (_0x325c01, _0x13681e, _0x1c0057) {
            return _0x325c01(_0x13681e, _0x1c0057);
        };
        _0x455ce8[_0x339c('0x1a')] = function (_0x433ad6, _0x4f9ec0, _0x32c4fd) {
            return _0x433ad6(_0x4f9ec0, _0x32c4fd);
        };
        _0x455ce8[_0x339c('0x1b')] = _0x339c('0x1c');
        _0x455ce8[_0x339c('0x1d')] = function (_0x37b511, _0x51c288, _0x1dac24) {
            return _0x37b511(_0x51c288, _0x1dac24);
        };
        _0x455ce8[_0x339c('0x1e')] = _0x339c('0x1f');
        _0x455ce8[_0x339c('0x20')] = function (_0x515e84, _0x8f6a5a, _0x4be547) {
            return _0x515e84(_0x8f6a5a, _0x4be547);
        };
        _0x455ce8[_0x339c('0x21')] = function (_0x4f8699, _0x19f99a, _0x34068f) {
            return _0x4f8699(_0x19f99a, _0x34068f);
        };
        _0x455ce8[_0x339c('0x22')] = _0x339c('0x23');
        _0x455ce8[_0x339c('0x24')] = function (_0x4ff3c9, _0x3ae6de, _0x58963c) {
            return _0x4ff3c9(_0x3ae6de, _0x58963c);
        };
        _0x455ce8[_0x339c('0x25')] = _0x339c('0x26');
        _0x455ce8[_0x339c('0x27')] = function (_0x304079, _0x8a21d5, _0x16b733) {
            return _0x304079(_0x8a21d5, _0x16b733);
        };
        _0x455ce8[_0x339c('0x28')] = _0x339c('0x29');
        _0x455ce8[_0x339c('0x2a')] = _0x339c('0x2b');
        _0x455ce8[_0x339c('0x2c')] = function (_0xd14078, _0x137152, _0xb519b1, _0x3fe8be) {
            return _0xd14078(_0x137152, _0xb519b1, _0x3fe8be);
        };
        _0x455ce8[_0x339c('0x2d')] = function (_0x53d897, _0x5634b3, _0xd34137) {
            return _0x53d897(_0x5634b3, _0xd34137);
        };
        _0x455ce8[_0x339c('0x2e')] = _0x339c('0x2f');
        var _0x8441f4 = this, _0x2c5307 = _0x8441f4[_0x339c('0x30')], _0x51ef22 = _0x8441f4[_0x339c('0x31')]['_c'] || _0x2c5307;
        return _0x455ce8[_0x339c('0x0')](_0x51ef22, _0x455ce8[_0x339c('0x1')], [_0x455ce8[_0x339c('0x0')](_0x51ef22, _0x455ce8[_0x339c('0x3')], [
                _0x455ce8[_0x339c('0x5')](_0x51ef22, _0x455ce8[_0x339c('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x455ce8[_0x339c('0x8')](_0x51ef22, _0x455ce8[_0x339c('0x1')], { 'staticStyle': { 'height': _0x455ce8[_0x339c('0x9')] } }, [_0x455ce8[_0x339c('0xb')](_0x51ef22, _0x455ce8[_0x339c('0xc')], {
                            'ref': _0x455ce8[_0x339c('0xe')],
                            'attrs': {
                                'options': _0x8441f4[_0x339c('0x32')],
                                'on-node-click': _0x8441f4[_0x339c('0x33')],
                                'on-line-click': _0x8441f4[_0x339c('0x34')]
                            }
                        })], 0x1)]),
                _0x455ce8[_0x339c('0x5')](_0x51ef22, _0x455ce8[_0x339c('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x455ce8[_0x339c('0x10')](_0x51ef22, _0x455ce8[_0x339c('0x1')], {
                        'staticStyle': {
                            'height': _0x455ce8[_0x339c('0x9')],
                            'border-left': _0x455ce8[_0x339c('0x11')],
                            'border-right': _0x455ce8[_0x339c('0x11')],
                            'padding': _0x455ce8[_0x339c('0x13')],
                            'font-size': _0x455ce8[_0x339c('0x15')],
                            'line-height': _0x455ce8[_0x339c('0x17')]
                        }
                    }, [_0x455ce8[_0x339c('0x19')](_0x51ef22, 'ul', [
                            _0x455ce8[_0x339c('0x1a')](_0x51ef22, 'li', [_0x8441f4['_v'](_0x455ce8[_0x339c('0x1b')])]),
                            _0x455ce8[_0x339c('0x1d')](_0x51ef22, 'li', [_0x8441f4['_v'](_0x455ce8[_0x339c('0x1e')])]),
                            _0x455ce8[_0x339c('0x20')](_0x51ef22, 'ul', [
                                _0x455ce8[_0x339c('0x21')](_0x51ef22, 'li', [_0x8441f4['_v'](_0x455ce8[_0x339c('0x22')])]),
                                _0x455ce8[_0x339c('0x24')](_0x51ef22, 'li', [_0x8441f4['_v'](_0x455ce8[_0x339c('0x25')])])
                            ]),
                            _0x455ce8[_0x339c('0x27')](_0x51ef22, 'li', [_0x8441f4['_v'](_0x455ce8[_0x339c('0x28')])]),
                            _0x455ce8[_0x339c('0x27')](_0x51ef22, 'li', [_0x8441f4['_v'](_0x455ce8[_0x339c('0x2a')])])
                        ])])]),
                _0x455ce8[_0x339c('0x2c')](_0x51ef22, _0x455ce8[_0x339c('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x455ce8[_0x339c('0x8')](_0x51ef22, _0x455ce8[_0x339c('0x1')], { 'staticStyle': { 'height': _0x455ce8[_0x339c('0x9')] } }, [_0x455ce8[_0x339c('0x2d')](_0x51ef22, _0x455ce8[_0x339c('0xc')], {
                            'ref': _0x455ce8[_0x339c('0x2e')],
                            'attrs': {
                                'options': _0x8441f4[_0x339c('0x35')],
                                'on-node-click': _0x8441f4[_0x339c('0x33')],
                                'on-line-click': _0x8441f4[_0x339c('0x34')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x339c('0x36')] = _0x339c('0x37');
h[_0x339c('0x38')] = {};
h[_0x339c('0x39')] = function () {
    var _0x40930e = { RoeDX: _0x339c('0x3a') };
    return {
        currentCase: _0x40930e.RoeDX,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x339c('0x3b')] = function () {
    this.show();
};
h[_0x339c('0x3c')] = {};
h[_0x339c('0x3c')][_0x339c('0x3d')] = function (_0x23febb) {
    var _0xef7678 = {
        MQREA: _0x339c('0x3e'),
        WVqSm: _0x339c('0x3f')
    };
    const _0x15a1f5 = this.$refs.graphRef1;
    this.resetGraph(_0x15a1f5, _0xef7678.MQREA);
    const _0x567ea6 = this.$refs.graphRef2;
    this.resetGraph(_0x567ea6, _0xef7678.WVqSm);
};
h[_0x339c('0x3c')][_0x339c('0x40')] = function (_0xd4aada, _0x4923c2) {
    var _0x3c98bb = {
        zgZlV: _0x339c('0x41'),
        DoFtV: _0x339c('0x42'),
        Wcexg: _0x339c('0x43'),
        kzbmT: _0x339c('0x44'),
        lqwCB: _0x339c('0x45'),
        dELQQ: _0x339c('0x46'),
        rMfas: function (_0x476c6e, _0x5c2517) {
            return _0x476c6e === _0x5c2517;
        },
        TgUaU: _0x339c('0x3f'),
        jRLCz: _0x339c('0x47'),
        qXmZj: _0x339c('0x48'),
        GUPEF: _0x339c('0x49'),
        dSTgH: _0x339c('0x4a'),
        vkXuA: _0x339c('0x4b'),
        WaTrh: _0x339c('0x4c'),
        owccI: _0x339c('0x4d'),
        CmCEK: _0x339c('0x4e')
    };
    const _0x55d700 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x3c98bb.zgZlV,
                from: _0x3c98bb.DoFtV,
                max_per_width: _0x3c98bb.Wcexg,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x3c98bb.kzbmT,
        defaultNodeColor: _0x3c98bb.lqwCB
    };
    _0x55d700.layouts[0x0].from = _0x3c98bb.dELQQ, _0x55d700.layouts[0x0].min_per_width = 0x46, _0x55d700.layouts[0x0].max_per_width = 0xc8, _0x55d700.layouts[0x0].min_per_height = 0xc8, _0x55d700.layouts[0x0].max_per_height = 0x190, _0x55d700.defaultNodeWidth = 0x1e, _0x55d700.defaultNodeHeight = 0x64, _0x55d700.defaultJunctionPoint = 'tb';
    let _0x434247, _0x400a56, _0x2f49fc;
    _0x3c98bb.rMfas(_0x4923c2, _0x3c98bb.TgUaU) && (_0x434247 = !0x0, _0x400a56 = !0x1, _0x2f49fc = _0x3c98bb.jRLCz);
    const _0x13c552 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x3c98bb.qXmZj
            },
            {
                id: _0x3c98bb.GUPEF,
                text: _0x3c98bb.GUPEF
            },
            {
                id: _0x3c98bb.dSTgH,
                text: _0x3c98bb.dSTgH,
                expandHolderPosition: _0x3c98bb.dELQQ
            },
            {
                id: _0x3c98bb.vkXuA,
                text: _0x3c98bb.vkXuA
            },
            {
                id: _0x3c98bb.WaTrh,
                text: _0x3c98bb.WaTrh
            },
            {
                id: _0x3c98bb.owccI,
                text: _0x3c98bb.owccI
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x3c98bb.CmCEK
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
                from: _0x3c98bb.GUPEF,
                to: 'a',
                showStartArrow: _0x434247,
                showEndArrow: _0x400a56,
                color: _0x2f49fc
            },
            {
                from: _0x3c98bb.dSTgH,
                to: 'a',
                showStartArrow: _0x434247,
                showEndArrow: _0x400a56,
                color: _0x2f49fc
            },
            {
                from: _0x3c98bb.vkXuA,
                to: _0x3c98bb.dSTgH,
                showStartArrow: _0x434247,
                showEndArrow: _0x400a56,
                color: _0x2f49fc
            },
            {
                from: _0x3c98bb.WaTrh,
                to: _0x3c98bb.dSTgH,
                showStartArrow: _0x434247,
                showEndArrow: _0x400a56,
                color: _0x2f49fc
            },
            {
                from: _0x3c98bb.owccI,
                to: 'a',
                showStartArrow: _0x434247,
                showEndArrow: _0x400a56,
                color: _0x2f49fc
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
    _0xd4aada.setOptions(_0x55d700, _0x16a842 => {
        this.showSeeksGraph(_0xd4aada, _0x13c552);
    });
};
h[_0x339c('0x3c')][_0x339c('0x4f')] = function (_0x2c4785, _0x2b2178) {
    _0x2c4785.setJsonData(_0x2b2178, _0x43bd94 => {
        _0x43bd94.focusNodeById('a');
    });
};
h[_0x339c('0x3c')][_0x339c('0x33')] = function (_0x1b9d26, _0x4eb214) {
    var _0x32c343 = { jtDsw: _0x339c('0x50') };
    console.log(_0x32c343.jtDsw, _0x1b9d26);
};
h[_0x339c('0x3c')][_0x339c('0x34')] = function (_0xec71a9, _0x2753fc, _0x558b81) {
    var _0x38cd91 = { olTpz: _0x339c('0x51') };
    console.log(_0x38cd91.olTpz, _0xec71a9);
};
var p = _0x1b9464(h, c, d, !0x1, f, null, null, null);
function f(_0x1e8be5) {
    for (let _0x3eb9af in n)
        this[_0x3eb9af] = n[_0x3eb9af];
}
const m = function () {
    return p[_0x339c('0x52')];
}();
export {
    m as default
};