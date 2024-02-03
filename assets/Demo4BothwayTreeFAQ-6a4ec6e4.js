
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4d9b = [
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
    'Wmuee',
    'hAVkS',
    'div',
    'cgQtJ',
    'el-row',
    'YNlPL',
    'kOGDj',
    'el-col',
    'yyUCj',
    'wGNZb',
    'calc(100vh\x20-\x20100px)',
    'EYQzr',
    'FzdSp',
    'RelationGraph',
    'dtkQp',
    'graphRef1',
    'doKpc',
    'rSuvt',
    '#efefef\x20solid\x201px',
    'LCQdO',
    '15px',
    'FLZVY',
    '14px',
    'FcyMU',
    '25px',
    'gCuBG',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'ySFTG',
    'xDvKq',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'mdZgn',
    'gCDLR',
    'showStartArrow=true',
    'iqAsY',
    'showEndArrow=false',
    'rLyUv',
    'pLclC',
    '以此来让上方线条看起来是反向展示。',
    'DwXgk',
    'bGIsp',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'sfzOR',
    'graphRef2',
    '$createElement',
    '_self',
    'graphOptions1',
    'onNodeClick'
];
(function (_0x44674d, _0x11315a) {
    var _0x2fda32 = function (_0x20e02f) {
        while (--_0x20e02f) {
            _0x44674d['push'](_0x44674d['shift']());
        }
    };
    _0x2fda32(++_0x11315a);
}(_0x4d9b, 0xbb));
var _0x5551 = function (_0x36a0e5, _0x4f85b1) {
    _0x36a0e5 = _0x36a0e5 - 0x0;
    var _0x12a91c = _0x4d9b[_0x36a0e5];
    return _0x12a91c;
};
import { n as _0x176536 } from './index-bc1c6247.js';
var c = function () {
        var _0x41e7d5 = {};
        _0x41e7d5[_0x5551('0x0')] = function (_0xb689ed, _0x9d6d07, _0x5747b5, _0x5c8ce9) {
            return _0xb689ed(_0x9d6d07, _0x5747b5, _0x5c8ce9);
        };
        _0x41e7d5[_0x5551('0x1')] = _0x5551('0x2');
        _0x41e7d5[_0x5551('0x3')] = _0x5551('0x4');
        _0x41e7d5[_0x5551('0x5')] = function (_0x45b4d8, _0xf8e834, _0x252066, _0x205bc1) {
            return _0x45b4d8(_0xf8e834, _0x252066, _0x205bc1);
        };
        _0x41e7d5[_0x5551('0x6')] = _0x5551('0x7');
        _0x41e7d5[_0x5551('0x8')] = function (_0x2fd159, _0x4b8036, _0x4e204b, _0x3db3ee, _0x4ee9e3) {
            return _0x2fd159(_0x4b8036, _0x4e204b, _0x3db3ee, _0x4ee9e3);
        };
        _0x41e7d5[_0x5551('0x9')] = _0x5551('0xa');
        _0x41e7d5[_0x5551('0xb')] = function (_0x5e5e1d, _0x3f4a2a, _0x30bd75) {
            return _0x5e5e1d(_0x3f4a2a, _0x30bd75);
        };
        _0x41e7d5[_0x5551('0xc')] = _0x5551('0xd');
        _0x41e7d5[_0x5551('0xe')] = _0x5551('0xf');
        _0x41e7d5[_0x5551('0x10')] = function (_0x38c0c5, _0x2f2923, _0x2d9d62, _0x13f16f) {
            return _0x38c0c5(_0x2f2923, _0x2d9d62, _0x13f16f);
        };
        _0x41e7d5[_0x5551('0x11')] = _0x5551('0x12');
        _0x41e7d5[_0x5551('0x13')] = _0x5551('0x14');
        _0x41e7d5[_0x5551('0x15')] = _0x5551('0x16');
        _0x41e7d5[_0x5551('0x17')] = _0x5551('0x18');
        _0x41e7d5[_0x5551('0x19')] = _0x5551('0x1a');
        _0x41e7d5[_0x5551('0x1b')] = function (_0x185b3c, _0xbbb916, _0x1236df) {
            return _0x185b3c(_0xbbb916, _0x1236df);
        };
        _0x41e7d5[_0x5551('0x1c')] = _0x5551('0x1d');
        _0x41e7d5[_0x5551('0x1e')] = function (_0x3dfb2c, _0x3cd117, _0x1e7970) {
            return _0x3dfb2c(_0x3cd117, _0x1e7970);
        };
        _0x41e7d5[_0x5551('0x1f')] = _0x5551('0x20');
        _0x41e7d5[_0x5551('0x21')] = _0x5551('0x22');
        _0x41e7d5[_0x5551('0x23')] = function (_0xd3390e, _0x49aecf, _0x15ad8e) {
            return _0xd3390e(_0x49aecf, _0x15ad8e);
        };
        _0x41e7d5[_0x5551('0x24')] = _0x5551('0x25');
        _0x41e7d5[_0x5551('0x26')] = function (_0x56541a, _0x4d9f8a, _0x4d3921) {
            return _0x56541a(_0x4d9f8a, _0x4d3921);
        };
        _0x41e7d5[_0x5551('0x27')] = _0x5551('0x28');
        _0x41e7d5[_0x5551('0x29')] = _0x5551('0x2a');
        var _0x2f5c39 = this, _0x45512b = _0x2f5c39[_0x5551('0x2b')], _0x480eaf = _0x2f5c39[_0x5551('0x2c')]['_c'] || _0x45512b;
        return _0x41e7d5[_0x5551('0x0')](_0x480eaf, _0x41e7d5[_0x5551('0x1')], [_0x41e7d5[_0x5551('0x0')](_0x480eaf, _0x41e7d5[_0x5551('0x3')], [
                _0x41e7d5[_0x5551('0x5')](_0x480eaf, _0x41e7d5[_0x5551('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x41e7d5[_0x5551('0x8')](_0x480eaf, _0x41e7d5[_0x5551('0x1')], { 'staticStyle': { 'height': _0x41e7d5[_0x5551('0x9')] } }, [_0x41e7d5[_0x5551('0xb')](_0x480eaf, _0x41e7d5[_0x5551('0xc')], {
                            'ref': _0x41e7d5[_0x5551('0xe')],
                            'attrs': {
                                'options': _0x2f5c39[_0x5551('0x2d')],
                                'on-node-click': _0x2f5c39[_0x5551('0x2e')],
                                'on-line-click': _0x2f5c39[_0x5551('0x2f')]
                            }
                        })], 0x1)]),
                _0x41e7d5[_0x5551('0x5')](_0x480eaf, _0x41e7d5[_0x5551('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x41e7d5[_0x5551('0x10')](_0x480eaf, _0x41e7d5[_0x5551('0x1')], {
                        'staticStyle': {
                            'height': _0x41e7d5[_0x5551('0x9')],
                            'border-left': _0x41e7d5[_0x5551('0x11')],
                            'border-right': _0x41e7d5[_0x5551('0x11')],
                            'padding': _0x41e7d5[_0x5551('0x13')],
                            'font-size': _0x41e7d5[_0x5551('0x15')],
                            'line-height': _0x41e7d5[_0x5551('0x17')]
                        }
                    }, [_0x41e7d5[_0x5551('0xb')](_0x480eaf, 'ul', [
                            _0x41e7d5[_0x5551('0xb')](_0x480eaf, 'li', [_0x2f5c39['_v'](_0x41e7d5[_0x5551('0x19')])]),
                            _0x41e7d5[_0x5551('0x1b')](_0x480eaf, 'li', [_0x2f5c39['_v'](_0x41e7d5[_0x5551('0x1c')])]),
                            _0x41e7d5[_0x5551('0x1b')](_0x480eaf, 'ul', [
                                _0x41e7d5[_0x5551('0x1e')](_0x480eaf, 'li', [_0x2f5c39['_v'](_0x41e7d5[_0x5551('0x1f')])]),
                                _0x41e7d5[_0x5551('0x1e')](_0x480eaf, 'li', [_0x2f5c39['_v'](_0x41e7d5[_0x5551('0x21')])])
                            ]),
                            _0x41e7d5[_0x5551('0x23')](_0x480eaf, 'li', [_0x2f5c39['_v'](_0x41e7d5[_0x5551('0x24')])]),
                            _0x41e7d5[_0x5551('0x26')](_0x480eaf, 'li', [_0x2f5c39['_v'](_0x41e7d5[_0x5551('0x27')])])
                        ])])]),
                _0x41e7d5[_0x5551('0x10')](_0x480eaf, _0x41e7d5[_0x5551('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x41e7d5[_0x5551('0x8')](_0x480eaf, _0x41e7d5[_0x5551('0x1')], { 'staticStyle': { 'height': _0x41e7d5[_0x5551('0x9')] } }, [_0x41e7d5[_0x5551('0x26')](_0x480eaf, _0x41e7d5[_0x5551('0xc')], {
                            'ref': _0x41e7d5[_0x5551('0x29')],
                            'attrs': {
                                'options': _0x2f5c39[_0x5551('0x30')],
                                'on-node-click': _0x2f5c39[_0x5551('0x2e')],
                                'on-line-click': _0x2f5c39[_0x5551('0x2f')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x5551('0x31')] = _0x5551('0x32');
h[_0x5551('0x33')] = {};
h[_0x5551('0x34')] = function () {
    var _0x404c07 = { XRJKA: _0x5551('0x35') };
    return {
        currentCase: _0x404c07.XRJKA,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x5551('0x36')] = function () {
    this.show();
};
h[_0x5551('0x37')] = {};
h[_0x5551('0x37')][_0x5551('0x38')] = function (_0x863a0d) {
    var _0x1ee7d1 = {
        UxxmJ: _0x5551('0x39'),
        IXwAU: _0x5551('0x3a')
    };
    const _0x4de7f2 = this.$refs.graphRef1;
    this.resetGraph(_0x4de7f2, _0x1ee7d1.UxxmJ);
    const _0x2ee811 = this.$refs.graphRef2;
    this.resetGraph(_0x2ee811, _0x1ee7d1.IXwAU);
};
h[_0x5551('0x37')][_0x5551('0x3b')] = function (_0x970f70, _0x40b995) {
    var _0x560acf = {
        cFJaA: _0x5551('0x3c'),
        UJsuM: _0x5551('0x3d'),
        MRJCU: _0x5551('0x3e'),
        zOiXU: _0x5551('0x3f'),
        wLpEg: _0x5551('0x40'),
        wdJlS: _0x5551('0x41'),
        EIoIk: function (_0x317337, _0x2f2f64) {
            return _0x317337 === _0x2f2f64;
        },
        lwnkh: _0x5551('0x3a'),
        BiwFx: _0x5551('0x42'),
        RuxdB: _0x5551('0x43'),
        jDqau: _0x5551('0x44'),
        Fhbzw: _0x5551('0x45'),
        WgflB: _0x5551('0x46'),
        KqKvI: _0x5551('0x47'),
        gjldh: _0x5551('0x48'),
        pJRlT: _0x5551('0x49')
    };
    const _0x2594bf = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x560acf.cFJaA,
                from: _0x560acf.UJsuM,
                max_per_width: _0x560acf.MRJCU,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x560acf.zOiXU,
        defaultNodeColor: _0x560acf.wLpEg
    };
    _0x2594bf.layouts[0x0].from = _0x560acf.wdJlS, _0x2594bf.layouts[0x0].min_per_width = 0x46, _0x2594bf.layouts[0x0].max_per_width = 0xc8, _0x2594bf.layouts[0x0].min_per_height = 0xc8, _0x2594bf.layouts[0x0].max_per_height = 0x190, _0x2594bf.defaultNodeWidth = 0x1e, _0x2594bf.defaultNodeHeight = 0x64, _0x2594bf.defaultJunctionPoint = 'tb';
    let _0x5f0c0c, _0x1e2b67, _0x38fba5;
    _0x560acf.EIoIk(_0x40b995, _0x560acf.lwnkh) && (_0x5f0c0c = !0x0, _0x1e2b67 = !0x1, _0x38fba5 = _0x560acf.BiwFx);
    const _0x39b0f1 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x560acf.RuxdB
            },
            {
                id: _0x560acf.jDqau,
                text: _0x560acf.jDqau
            },
            {
                id: _0x560acf.Fhbzw,
                text: _0x560acf.Fhbzw,
                expandHolderPosition: _0x560acf.wdJlS
            },
            {
                id: _0x560acf.WgflB,
                text: _0x560acf.WgflB
            },
            {
                id: _0x560acf.KqKvI,
                text: _0x560acf.KqKvI
            },
            {
                id: _0x560acf.gjldh,
                text: _0x560acf.gjldh
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x560acf.pJRlT
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
                from: _0x560acf.jDqau,
                to: 'a',
                showStartArrow: _0x5f0c0c,
                showEndArrow: _0x1e2b67,
                color: _0x38fba5
            },
            {
                from: _0x560acf.Fhbzw,
                to: 'a',
                showStartArrow: _0x5f0c0c,
                showEndArrow: _0x1e2b67,
                color: _0x38fba5
            },
            {
                from: _0x560acf.WgflB,
                to: _0x560acf.Fhbzw,
                showStartArrow: _0x5f0c0c,
                showEndArrow: _0x1e2b67,
                color: _0x38fba5
            },
            {
                from: _0x560acf.KqKvI,
                to: _0x560acf.Fhbzw,
                showStartArrow: _0x5f0c0c,
                showEndArrow: _0x1e2b67,
                color: _0x38fba5
            },
            {
                from: _0x560acf.gjldh,
                to: 'a',
                showStartArrow: _0x5f0c0c,
                showEndArrow: _0x1e2b67,
                color: _0x38fba5
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
    _0x970f70.setOptions(_0x2594bf, _0x57b403 => {
        this.showSeeksGraph(_0x970f70, _0x39b0f1);
    });
};
h[_0x5551('0x37')][_0x5551('0x4a')] = function (_0x2c8318, _0xae9b10) {
    _0x2c8318.setJsonData(_0xae9b10, _0x187213 => {
        _0x187213.focusNodeById('a');
    });
};
h[_0x5551('0x37')][_0x5551('0x2e')] = function (_0x435733, _0x4944fc) {
    var _0x35760a = { muyzl: _0x5551('0x4b') };
    console.log(_0x35760a.muyzl, _0x435733);
};
h[_0x5551('0x37')][_0x5551('0x2f')] = function (_0x24727a, _0x13942e, _0xcb4c9b) {
    var _0x237f67 = { acwzP: _0x5551('0x4c') };
    console.log(_0x237f67.acwzP, _0x24727a);
};
var p = _0x176536(h, c, d, !0x1, f, null, null, null);
function f(_0x4103d3) {
    for (let _0x55a883 in n)
        this[_0x55a883] = n[_0x55a883];
}
const m = function () {
    return p[_0x5551('0x4d')];
}();
export {
    m as default
};