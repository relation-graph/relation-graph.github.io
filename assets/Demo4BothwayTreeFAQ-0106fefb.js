
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2e85 = [
    'R-c-1',
    'R-c-2',
    'R-d',
    'bottom',
    'showSeeksGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'OmDun',
    'aFRsz',
    'div',
    'pJYQd',
    'el-row',
    'XgobB',
    'el-col',
    'epOsy',
    'UnQAk',
    'calc(100vh\x20-\x20100px)',
    'obSjl',
    'sFVjy',
    'RelationGraph',
    'HmWmY',
    'graphRef1',
    'GGKjB',
    'aGuwO',
    '#efefef\x20solid\x201px',
    'SJwXw',
    '15px',
    'kDcGI',
    '12px',
    'hRAyX',
    '\x20原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'YEijO',
    'XlpSD',
    '\x20如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'bVfLj',
    '\x20showStartArrow=true',
    'gOOci',
    '\x20showEndArrow=false',
    'VHJYW',
    'YrvoZ',
    '\x20以此来让上方线条看起来是反向展示。',
    'PXWcO',
    'JPQaH',
    '\x20最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据需求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。\x20',
    'zNLHI',
    'zWDtV',
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
    'R-c'
];
(function (_0x3ba4e3, _0x1e9174) {
    var _0x1072e5 = function (_0x219a58) {
        while (--_0x219a58) {
            _0x3ba4e3['push'](_0x3ba4e3['shift']());
        }
    };
    _0x1072e5(++_0x1e9174);
}(_0x2e85, 0x1ca));
var _0x57c2 = function (_0x24844d, _0x1e693b) {
    _0x24844d = _0x24844d - 0x0;
    var _0x1d2a47 = _0x2e85[_0x24844d];
    return _0x1d2a47;
};
import { n as _0x268618 } from './index-f0317518.js';
var c = function () {
        var _0x28756d = {};
        _0x28756d[_0x57c2('0x0')] = function (_0x1d2678, _0x475329, _0x3d028b, _0x36b9d1) {
            return _0x1d2678(_0x475329, _0x3d028b, _0x36b9d1);
        };
        _0x28756d[_0x57c2('0x1')] = _0x57c2('0x2');
        _0x28756d[_0x57c2('0x3')] = _0x57c2('0x4');
        _0x28756d[_0x57c2('0x5')] = _0x57c2('0x6');
        _0x28756d[_0x57c2('0x7')] = function (_0x85e4aa, _0x4ee988, _0x21b2ef, _0x1999d1, _0x2660a6) {
            return _0x85e4aa(_0x4ee988, _0x21b2ef, _0x1999d1, _0x2660a6);
        };
        _0x28756d[_0x57c2('0x8')] = _0x57c2('0x9');
        _0x28756d[_0x57c2('0xa')] = function (_0x63dd9, _0x354a59, _0x265dd2) {
            return _0x63dd9(_0x354a59, _0x265dd2);
        };
        _0x28756d[_0x57c2('0xb')] = _0x57c2('0xc');
        _0x28756d[_0x57c2('0xd')] = _0x57c2('0xe');
        _0x28756d[_0x57c2('0xf')] = function (_0x197561, _0x181e56, _0x21c72d, _0x1ba72e) {
            return _0x197561(_0x181e56, _0x21c72d, _0x1ba72e);
        };
        _0x28756d[_0x57c2('0x10')] = _0x57c2('0x11');
        _0x28756d[_0x57c2('0x12')] = _0x57c2('0x13');
        _0x28756d[_0x57c2('0x14')] = _0x57c2('0x15');
        _0x28756d[_0x57c2('0x16')] = _0x57c2('0x17');
        _0x28756d[_0x57c2('0x18')] = function (_0x21d0a6, _0x282543) {
            return _0x21d0a6(_0x282543);
        };
        _0x28756d[_0x57c2('0x19')] = _0x57c2('0x1a');
        _0x28756d[_0x57c2('0x1b')] = _0x57c2('0x1c');
        _0x28756d[_0x57c2('0x1d')] = _0x57c2('0x1e');
        _0x28756d[_0x57c2('0x1f')] = function (_0x391449, _0x5a0089) {
            return _0x391449(_0x5a0089);
        };
        _0x28756d[_0x57c2('0x20')] = _0x57c2('0x21');
        _0x28756d[_0x57c2('0x22')] = function (_0x4b1fca, _0x3ed329) {
            return _0x4b1fca(_0x3ed329);
        };
        _0x28756d[_0x57c2('0x23')] = _0x57c2('0x24');
        _0x28756d[_0x57c2('0x25')] = function (_0x4f94e0, _0x155d97, _0x400a44, _0x328c6b, _0x3f7206) {
            return _0x4f94e0(_0x155d97, _0x400a44, _0x328c6b, _0x3f7206);
        };
        _0x28756d[_0x57c2('0x26')] = _0x57c2('0x27');
        var _0x4b94e2 = this, _0x4b2aae = _0x4b94e2[_0x57c2('0x28')], _0x112f56 = _0x4b94e2[_0x57c2('0x29')]['_c'] || _0x4b2aae;
        return _0x28756d[_0x57c2('0x0')](_0x112f56, _0x28756d[_0x57c2('0x1')], [_0x28756d[_0x57c2('0x0')](_0x112f56, _0x28756d[_0x57c2('0x3')], [
                _0x28756d[_0x57c2('0x0')](_0x112f56, _0x28756d[_0x57c2('0x5')], { 'attrs': { 'span': 0x9 } }, [_0x28756d[_0x57c2('0x7')](_0x112f56, _0x28756d[_0x57c2('0x1')], { 'staticStyle': { 'height': _0x28756d[_0x57c2('0x8')] } }, [_0x28756d[_0x57c2('0xa')](_0x112f56, _0x28756d[_0x57c2('0xb')], {
                            'ref': _0x28756d[_0x57c2('0xd')],
                            'attrs': {
                                'options': _0x4b94e2[_0x57c2('0x2a')],
                                'on-node-click': _0x4b94e2[_0x57c2('0x2b')],
                                'on-line-click': _0x4b94e2[_0x57c2('0x2c')]
                            }
                        })], 0x1)]),
                _0x28756d[_0x57c2('0xf')](_0x112f56, _0x28756d[_0x57c2('0x5')], { 'attrs': { 'span': 0x6 } }, [_0x28756d[_0x57c2('0xf')](_0x112f56, _0x28756d[_0x57c2('0x1')], {
                        'staticStyle': {
                            'height': _0x28756d[_0x57c2('0x8')],
                            'border-left': _0x28756d[_0x57c2('0x10')],
                            'border-right': _0x28756d[_0x57c2('0x10')],
                            'padding': _0x28756d[_0x57c2('0x12')],
                            'font-size': _0x28756d[_0x57c2('0x14')]
                        }
                    }, [
                        _0x4b94e2['_v'](_0x28756d[_0x57c2('0x16')]),
                        _0x28756d[_0x57c2('0x18')](_0x112f56, 'br'),
                        _0x4b94e2['_v'](_0x28756d[_0x57c2('0x19')]),
                        _0x28756d[_0x57c2('0x18')](_0x112f56, 'br'),
                        _0x4b94e2['_v'](_0x28756d[_0x57c2('0x1b')]),
                        _0x28756d[_0x57c2('0x18')](_0x112f56, 'br'),
                        _0x4b94e2['_v'](_0x28756d[_0x57c2('0x1d')]),
                        _0x28756d[_0x57c2('0x1f')](_0x112f56, 'br'),
                        _0x4b94e2['_v'](_0x28756d[_0x57c2('0x20')]),
                        _0x28756d[_0x57c2('0x22')](_0x112f56, 'br'),
                        _0x4b94e2['_v'](_0x28756d[_0x57c2('0x23')])
                    ])]),
                _0x28756d[_0x57c2('0xf')](_0x112f56, _0x28756d[_0x57c2('0x5')], { 'attrs': { 'span': 0x9 } }, [_0x28756d[_0x57c2('0x25')](_0x112f56, _0x28756d[_0x57c2('0x1')], { 'staticStyle': { 'height': _0x28756d[_0x57c2('0x8')] } }, [_0x28756d[_0x57c2('0xa')](_0x112f56, _0x28756d[_0x57c2('0xb')], {
                            'ref': _0x28756d[_0x57c2('0x26')],
                            'attrs': {
                                'options': _0x4b94e2[_0x57c2('0x2d')],
                                'on-node-click': _0x4b94e2[_0x57c2('0x2b')],
                                'on-line-click': _0x4b94e2[_0x57c2('0x2c')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, i = {};
h[_0x57c2('0x2e')] = _0x57c2('0x2f');
h[_0x57c2('0x30')] = {};
h[_0x57c2('0x31')] = function () {
    var _0x3daa76 = { eNSlx: _0x57c2('0x32') };
    return {
        currentCase: _0x3daa76.eNSlx,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x57c2('0x33')] = function () {
    this.show();
};
h[_0x57c2('0x34')] = {};
h[_0x57c2('0x34')][_0x57c2('0x35')] = function (_0x1e45d7) {
    var _0xb44117 = {
        FMLny: _0x57c2('0x36'),
        XHRxs: _0x57c2('0x37')
    };
    const _0x4a7d57 = this.$refs.graphRef1;
    this.resetGraph(_0x4a7d57, _0xb44117.FMLny);
    const _0x141917 = this.$refs.graphRef2;
    this.resetGraph(_0x141917, _0xb44117.XHRxs);
};
h[_0x57c2('0x34')][_0x57c2('0x38')] = function (_0x12011e, _0xc12570) {
    var _0x523da5 = {
        HKHOQ: _0x57c2('0x39'),
        XaGgK: _0x57c2('0x3a'),
        HFdKz: _0x57c2('0x3b'),
        oRkRA: _0x57c2('0x3c'),
        ekItZ: _0x57c2('0x3d'),
        isKgZ: _0x57c2('0x3e'),
        YTfuH: function (_0x9d2d78, _0x1bcacf) {
            return _0x9d2d78 === _0x1bcacf;
        },
        tlHYs: _0x57c2('0x37'),
        YLIEt: _0x57c2('0x3f'),
        LTQsH: _0x57c2('0x40'),
        NDztf: _0x57c2('0x41'),
        FgVlr: _0x57c2('0x42'),
        uPElt: _0x57c2('0x43'),
        fSUBs: _0x57c2('0x44'),
        rKtxq: _0x57c2('0x45'),
        muwoP: _0x57c2('0x46')
    };
    const _0x21bec2 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x523da5.HKHOQ,
                from: _0x523da5.XaGgK,
                max_per_width: _0x523da5.HFdKz,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x523da5.oRkRA,
        defaultNodeColor: _0x523da5.ekItZ
    };
    _0x21bec2.layouts[0x0].from = _0x523da5.isKgZ, _0x21bec2.layouts[0x0].min_per_width = 0x46, _0x21bec2.layouts[0x0].max_per_width = 0xc8, _0x21bec2.layouts[0x0].min_per_height = 0xc8, _0x21bec2.layouts[0x0].max_per_height = 0x190, _0x21bec2.defaultNodeWidth = 0x1e, _0x21bec2.defaultNodeHeight = 0x64, _0x21bec2.defaultJunctionPoint = 'tb';
    let _0x6345, _0x335982, _0x1c4160;
    _0x523da5.YTfuH(_0xc12570, _0x523da5.tlHYs) && (_0x6345 = !0x0, _0x335982 = !0x1, _0x1c4160 = _0x523da5.YLIEt);
    const _0x40ba55 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x523da5.LTQsH
            },
            {
                id: _0x523da5.NDztf,
                text: _0x523da5.NDztf
            },
            {
                id: _0x523da5.FgVlr,
                text: _0x523da5.FgVlr,
                expandHolderPosition: _0x523da5.isKgZ
            },
            {
                id: _0x523da5.uPElt,
                text: _0x523da5.uPElt
            },
            {
                id: _0x523da5.fSUBs,
                text: _0x523da5.fSUBs
            },
            {
                id: _0x523da5.rKtxq,
                text: _0x523da5.rKtxq
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x523da5.muwoP
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
                from: _0x523da5.NDztf,
                to: 'a',
                showStartArrow: _0x6345,
                showEndArrow: _0x335982,
                color: _0x1c4160
            },
            {
                from: _0x523da5.FgVlr,
                to: 'a',
                showStartArrow: _0x6345,
                showEndArrow: _0x335982,
                color: _0x1c4160
            },
            {
                from: _0x523da5.uPElt,
                to: _0x523da5.FgVlr,
                showStartArrow: _0x6345,
                showEndArrow: _0x335982,
                color: _0x1c4160
            },
            {
                from: _0x523da5.fSUBs,
                to: _0x523da5.FgVlr,
                showStartArrow: _0x6345,
                showEndArrow: _0x335982,
                color: _0x1c4160
            },
            {
                from: _0x523da5.rKtxq,
                to: 'a',
                showStartArrow: _0x6345,
                showEndArrow: _0x335982,
                color: _0x1c4160
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
    _0x12011e.setOptions(_0x21bec2, _0xd697b4 => {
        this.showSeeksGraph(_0x12011e, _0x40ba55);
    });
};
h[_0x57c2('0x34')][_0x57c2('0x47')] = function (_0x1428c4, _0x11be21) {
    _0x1428c4.setJsonData(_0x11be21, _0x5034ff => {
        _0x5034ff.focusNodeById('a');
    });
};
h[_0x57c2('0x34')][_0x57c2('0x2b')] = function (_0x3c4d8e, _0x2428ef) {
    var _0x370a7c = { pMRSk: _0x57c2('0x48') };
    console.log(_0x370a7c.pMRSk, _0x3c4d8e);
};
h[_0x57c2('0x34')][_0x57c2('0x2c')] = function (_0x1f889b, _0x51e5be, _0x44323c) {
    var _0x104474 = { EMHlL: _0x57c2('0x49') };
    console.log(_0x104474.EMHlL, _0x1f889b);
};
var p = _0x268618(h, c, d, !0x1, f, null, null, null);
function f(_0x29aed6) {
    for (let _0x32998b in i)
        this[_0x32998b] = i[_0x32998b];
}
const u = function () {
    return p[_0x57c2('0x4a')];
}();
export {
    u as default
};