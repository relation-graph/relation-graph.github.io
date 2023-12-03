
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x30e7 = [
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
    'xTdbQ',
    'SSgku',
    'div',
    'FZTTK',
    'el-row',
    'JPjRf',
    'el-col',
    'WRgxM',
    'DJEzU',
    'calc(100vh\x20-\x20100px)',
    'sWdYZ',
    'BWQBP',
    'RelationGraph',
    'ETDqZ',
    'graphRef1',
    'GEDak',
    'ncnGu',
    '#efefef\x20solid\x201px',
    'wVUaT',
    '15px',
    'RXvPB',
    '12px',
    'GoeeR',
    '\x20原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'JfXGJ',
    'utLqG',
    '\x20如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'zTyhi',
    '\x20showStartArrow=true',
    'rnaLv',
    '\x20showEndArrow=false',
    'ECRnU',
    '\x20以此来让上方线条看起来是反向展示。',
    'hCjfg',
    '\x20最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据需求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。\x20',
    'YYYuI',
    'AhOVW',
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
    'rgba(0,\x20206,\x20209,\x201)'
];
(function (_0x39d42d, _0x5aa533) {
    var _0x7e2d73 = function (_0x123945) {
        while (--_0x123945) {
            _0x39d42d['push'](_0x39d42d['shift']());
        }
    };
    _0x7e2d73(++_0x5aa533);
}(_0x30e7, 0x1c3));
var _0x1f11 = function (_0x38f9d1, _0x358740) {
    _0x38f9d1 = _0x38f9d1 - 0x0;
    var _0x817d8a = _0x30e7[_0x38f9d1];
    return _0x817d8a;
};
import { n as _0x119b63 } from './index-4e37fb25.js';
var c = function () {
        var _0x4aee09 = {};
        _0x4aee09[_0x1f11('0x0')] = function (_0x1e0b8e, _0x2a72eb, _0x46eb03, _0x23a554) {
            return _0x1e0b8e(_0x2a72eb, _0x46eb03, _0x23a554);
        };
        _0x4aee09[_0x1f11('0x1')] = _0x1f11('0x2');
        _0x4aee09[_0x1f11('0x3')] = _0x1f11('0x4');
        _0x4aee09[_0x1f11('0x5')] = _0x1f11('0x6');
        _0x4aee09[_0x1f11('0x7')] = function (_0x47c7c8, _0x46de48, _0x1691e2, _0x49e419, _0x540cdb) {
            return _0x47c7c8(_0x46de48, _0x1691e2, _0x49e419, _0x540cdb);
        };
        _0x4aee09[_0x1f11('0x8')] = _0x1f11('0x9');
        _0x4aee09[_0x1f11('0xa')] = function (_0x3ab8b4, _0x52cb57, _0x5ea899) {
            return _0x3ab8b4(_0x52cb57, _0x5ea899);
        };
        _0x4aee09[_0x1f11('0xb')] = _0x1f11('0xc');
        _0x4aee09[_0x1f11('0xd')] = _0x1f11('0xe');
        _0x4aee09[_0x1f11('0xf')] = function (_0x181c4d, _0x24bb83, _0x174682, _0x27591f) {
            return _0x181c4d(_0x24bb83, _0x174682, _0x27591f);
        };
        _0x4aee09[_0x1f11('0x10')] = _0x1f11('0x11');
        _0x4aee09[_0x1f11('0x12')] = _0x1f11('0x13');
        _0x4aee09[_0x1f11('0x14')] = _0x1f11('0x15');
        _0x4aee09[_0x1f11('0x16')] = _0x1f11('0x17');
        _0x4aee09[_0x1f11('0x18')] = function (_0x3c59f5, _0x4ca04d) {
            return _0x3c59f5(_0x4ca04d);
        };
        _0x4aee09[_0x1f11('0x19')] = _0x1f11('0x1a');
        _0x4aee09[_0x1f11('0x1b')] = _0x1f11('0x1c');
        _0x4aee09[_0x1f11('0x1d')] = _0x1f11('0x1e');
        _0x4aee09[_0x1f11('0x1f')] = _0x1f11('0x20');
        _0x4aee09[_0x1f11('0x21')] = _0x1f11('0x22');
        _0x4aee09[_0x1f11('0x23')] = function (_0x5c3a0e, _0x5f4d22, _0x12d6f4) {
            return _0x5c3a0e(_0x5f4d22, _0x12d6f4);
        };
        _0x4aee09[_0x1f11('0x24')] = _0x1f11('0x25');
        var _0xdf2200 = this, _0x595c73 = _0xdf2200[_0x1f11('0x26')], _0x9dd8f4 = _0xdf2200[_0x1f11('0x27')]['_c'] || _0x595c73;
        return _0x4aee09[_0x1f11('0x0')](_0x9dd8f4, _0x4aee09[_0x1f11('0x1')], [_0x4aee09[_0x1f11('0x0')](_0x9dd8f4, _0x4aee09[_0x1f11('0x3')], [
                _0x4aee09[_0x1f11('0x0')](_0x9dd8f4, _0x4aee09[_0x1f11('0x5')], { 'attrs': { 'span': 0x9 } }, [_0x4aee09[_0x1f11('0x7')](_0x9dd8f4, _0x4aee09[_0x1f11('0x1')], { 'staticStyle': { 'height': _0x4aee09[_0x1f11('0x8')] } }, [_0x4aee09[_0x1f11('0xa')](_0x9dd8f4, _0x4aee09[_0x1f11('0xb')], {
                            'ref': _0x4aee09[_0x1f11('0xd')],
                            'attrs': {
                                'options': _0xdf2200[_0x1f11('0x28')],
                                'on-node-click': _0xdf2200[_0x1f11('0x29')],
                                'on-line-click': _0xdf2200[_0x1f11('0x2a')]
                            }
                        })], 0x1)]),
                _0x4aee09[_0x1f11('0x0')](_0x9dd8f4, _0x4aee09[_0x1f11('0x5')], { 'attrs': { 'span': 0x6 } }, [_0x4aee09[_0x1f11('0xf')](_0x9dd8f4, _0x4aee09[_0x1f11('0x1')], {
                        'staticStyle': {
                            'height': _0x4aee09[_0x1f11('0x8')],
                            'border-left': _0x4aee09[_0x1f11('0x10')],
                            'border-right': _0x4aee09[_0x1f11('0x10')],
                            'padding': _0x4aee09[_0x1f11('0x12')],
                            'font-size': _0x4aee09[_0x1f11('0x14')]
                        }
                    }, [
                        _0xdf2200['_v'](_0x4aee09[_0x1f11('0x16')]),
                        _0x4aee09[_0x1f11('0x18')](_0x9dd8f4, 'br'),
                        _0xdf2200['_v'](_0x4aee09[_0x1f11('0x19')]),
                        _0x4aee09[_0x1f11('0x18')](_0x9dd8f4, 'br'),
                        _0xdf2200['_v'](_0x4aee09[_0x1f11('0x1b')]),
                        _0x4aee09[_0x1f11('0x18')](_0x9dd8f4, 'br'),
                        _0xdf2200['_v'](_0x4aee09[_0x1f11('0x1d')]),
                        _0x4aee09[_0x1f11('0x18')](_0x9dd8f4, 'br'),
                        _0xdf2200['_v'](_0x4aee09[_0x1f11('0x1f')]),
                        _0x4aee09[_0x1f11('0x18')](_0x9dd8f4, 'br'),
                        _0xdf2200['_v'](_0x4aee09[_0x1f11('0x21')])
                    ])]),
                _0x4aee09[_0x1f11('0xf')](_0x9dd8f4, _0x4aee09[_0x1f11('0x5')], { 'attrs': { 'span': 0x9 } }, [_0x4aee09[_0x1f11('0x7')](_0x9dd8f4, _0x4aee09[_0x1f11('0x1')], { 'staticStyle': { 'height': _0x4aee09[_0x1f11('0x8')] } }, [_0x4aee09[_0x1f11('0x23')](_0x9dd8f4, _0x4aee09[_0x1f11('0xb')], {
                            'ref': _0x4aee09[_0x1f11('0x24')],
                            'attrs': {
                                'options': _0xdf2200[_0x1f11('0x2b')],
                                'on-node-click': _0xdf2200[_0x1f11('0x29')],
                                'on-line-click': _0xdf2200[_0x1f11('0x2a')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, i = {};
h[_0x1f11('0x2c')] = _0x1f11('0x2d');
h[_0x1f11('0x2e')] = {};
h[_0x1f11('0x2f')] = function () {
    var _0xe24cd8 = { NOTva: _0x1f11('0x30') };
    return {
        currentCase: _0xe24cd8.NOTva,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x1f11('0x31')] = function () {
    this.show();
};
h[_0x1f11('0x32')] = {};
h[_0x1f11('0x32')][_0x1f11('0x33')] = function (_0x3ad12a) {
    var _0x3eda26 = {
        wSDaP: _0x1f11('0x34'),
        QtSvL: _0x1f11('0x35')
    };
    const _0x46eb25 = this.$refs.graphRef1;
    this.resetGraph(_0x46eb25, _0x3eda26.wSDaP);
    const _0x2639ad = this.$refs.graphRef2;
    this.resetGraph(_0x2639ad, _0x3eda26.QtSvL);
};
h[_0x1f11('0x32')][_0x1f11('0x36')] = function (_0x5aab2e, _0x103ca5) {
    var _0x4b94e6 = {
        HEluK: _0x1f11('0x37'),
        fIUeP: _0x1f11('0x38'),
        QPutb: _0x1f11('0x39'),
        GpQkF: _0x1f11('0x3a'),
        WbwDC: _0x1f11('0x3b'),
        nHJSA: _0x1f11('0x3c'),
        yMYlb: function (_0x4f779e, _0x5bd67b) {
            return _0x4f779e === _0x5bd67b;
        },
        mEKNU: _0x1f11('0x35'),
        iOWQs: _0x1f11('0x3d'),
        aqYLi: _0x1f11('0x3e'),
        jZrBH: _0x1f11('0x3f'),
        PSHtF: _0x1f11('0x40'),
        SfWrz: _0x1f11('0x41'),
        jhJOl: _0x1f11('0x42'),
        hCkVQ: _0x1f11('0x43'),
        cDetv: _0x1f11('0x44')
    };
    const _0x129cc5 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x4b94e6.HEluK,
                from: _0x4b94e6.fIUeP,
                max_per_width: _0x4b94e6.QPutb,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x4b94e6.GpQkF,
        defaultNodeColor: _0x4b94e6.WbwDC
    };
    _0x129cc5.layouts[0x0].from = _0x4b94e6.nHJSA, _0x129cc5.layouts[0x0].min_per_width = 0x46, _0x129cc5.layouts[0x0].max_per_width = 0xc8, _0x129cc5.layouts[0x0].min_per_height = 0xc8, _0x129cc5.layouts[0x0].max_per_height = 0x190, _0x129cc5.defaultNodeWidth = 0x1e, _0x129cc5.defaultNodeHeight = 0x64, _0x129cc5.defaultJunctionPoint = 'tb';
    let _0x36302a, _0x16ee35, _0x5b46f1;
    _0x4b94e6.yMYlb(_0x103ca5, _0x4b94e6.mEKNU) && (_0x36302a = !0x0, _0x16ee35 = !0x1, _0x5b46f1 = _0x4b94e6.iOWQs);
    const _0x405355 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x4b94e6.aqYLi
            },
            {
                id: _0x4b94e6.jZrBH,
                text: _0x4b94e6.jZrBH
            },
            {
                id: _0x4b94e6.PSHtF,
                text: _0x4b94e6.PSHtF,
                expandHolderPosition: _0x4b94e6.nHJSA
            },
            {
                id: _0x4b94e6.SfWrz,
                text: _0x4b94e6.SfWrz
            },
            {
                id: _0x4b94e6.jhJOl,
                text: _0x4b94e6.jhJOl
            },
            {
                id: _0x4b94e6.hCkVQ,
                text: _0x4b94e6.hCkVQ
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x4b94e6.cDetv
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
                from: _0x4b94e6.jZrBH,
                to: 'a',
                showStartArrow: _0x36302a,
                showEndArrow: _0x16ee35,
                color: _0x5b46f1
            },
            {
                from: _0x4b94e6.PSHtF,
                to: 'a',
                showStartArrow: _0x36302a,
                showEndArrow: _0x16ee35,
                color: _0x5b46f1
            },
            {
                from: _0x4b94e6.SfWrz,
                to: _0x4b94e6.PSHtF,
                showStartArrow: _0x36302a,
                showEndArrow: _0x16ee35,
                color: _0x5b46f1
            },
            {
                from: _0x4b94e6.jhJOl,
                to: _0x4b94e6.PSHtF,
                showStartArrow: _0x36302a,
                showEndArrow: _0x16ee35,
                color: _0x5b46f1
            },
            {
                from: _0x4b94e6.hCkVQ,
                to: 'a',
                showStartArrow: _0x36302a,
                showEndArrow: _0x16ee35,
                color: _0x5b46f1
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
    _0x5aab2e.setOptions(_0x129cc5, _0xd45d17 => {
        this.showSeeksGraph(_0x5aab2e, _0x405355);
    });
};
h[_0x1f11('0x32')][_0x1f11('0x45')] = function (_0x42a1a3, _0x2f00d5) {
    _0x42a1a3.setJsonData(_0x2f00d5, _0x2b6f16 => {
        _0x2b6f16.focusNodeById('a');
    });
};
h[_0x1f11('0x32')][_0x1f11('0x29')] = function (_0x1e79f3, _0x464354) {
    var _0x48b2eb = { BgRuQ: _0x1f11('0x46') };
    console.log(_0x48b2eb.BgRuQ, _0x1e79f3);
};
h[_0x1f11('0x32')][_0x1f11('0x2a')] = function (_0x42505a, _0x3d3a1f, _0x459da7) {
    var _0x563018 = { gyzky: _0x1f11('0x47') };
    console.log(_0x563018.gyzky, _0x42505a);
};
var p = _0x119b63(h, c, d, !0x1, f, null, null, null);
function f(_0x3d3ea4) {
    for (let _0x32cf9d in i)
        this[_0x32cf9d] = i[_0x32cf9d];
}
const u = function () {
    return p[_0x1f11('0x48')];
}();
export {
    u as default
};