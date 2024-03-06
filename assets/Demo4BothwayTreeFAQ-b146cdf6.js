
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1af6 = [
    'KleaE',
    'jrbXq',
    'ABlpe',
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
    'kkzPs',
    'cPJhp',
    'div',
    'ywUqz',
    'el-row',
    'SAOIW',
    'BDoHD',
    'el-col',
    'LftrL',
    'cZeYZ',
    'calc(100vh\x20-\x20100px)',
    'tZuHF',
    'HmxUi',
    'RelationGraph',
    'apzmd',
    'graphRef1',
    'pjhft',
    'JQUNG',
    '#efefef\x20solid\x201px',
    'TsZko',
    '15px',
    'zoMbq',
    '14px',
    'aiKYr',
    '25px',
    'QsNez',
    'IgMqT',
    'jQlRl',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'EOsZJ',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'BQgXx',
    'ADjJe',
    'jGpHY',
    'showStartArrow=true',
    'Oetcj',
    'cvurG',
    'showEndArrow=false',
    'ZPjbH',
    'BbwQr',
    '以此来让上方线条看起来是反向展示。',
    'LmRJL',
    'qjfWd',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。'
];
(function (_0x4dc575, _0x402dd3) {
    var _0x40f17f = function (_0x53e585) {
        while (--_0x53e585) {
            _0x4dc575['push'](_0x4dc575['shift']());
        }
    };
    _0x40f17f(++_0x402dd3);
}(_0x1af6, 0xcd));
var _0x4431 = function (_0x1bc43c, _0x25b2bd) {
    _0x1bc43c = _0x1bc43c - 0x0;
    var _0x427c6f = _0x1af6[_0x1bc43c];
    return _0x427c6f;
};
import { n as _0x3ff80c } from './index-589c1747.js';
var c = function () {
        var _0x32797b = {};
        _0x32797b[_0x4431('0x0')] = function (_0x30c594, _0x21ef00, _0x2921c2, _0x38dc17) {
            return _0x30c594(_0x21ef00, _0x2921c2, _0x38dc17);
        };
        _0x32797b[_0x4431('0x1')] = _0x4431('0x2');
        _0x32797b[_0x4431('0x3')] = _0x4431('0x4');
        _0x32797b[_0x4431('0x5')] = function (_0x76c685, _0x58f1c2, _0xfe33b5, _0x38e252) {
            return _0x76c685(_0x58f1c2, _0xfe33b5, _0x38e252);
        };
        _0x32797b[_0x4431('0x6')] = _0x4431('0x7');
        _0x32797b[_0x4431('0x8')] = function (_0x32210d, _0x2f78c0, _0x553402, _0x4ce021, _0x1aa7e4) {
            return _0x32210d(_0x2f78c0, _0x553402, _0x4ce021, _0x1aa7e4);
        };
        _0x32797b[_0x4431('0x9')] = _0x4431('0xa');
        _0x32797b[_0x4431('0xb')] = function (_0x2febd2, _0x403ca7, _0x37ee5b) {
            return _0x2febd2(_0x403ca7, _0x37ee5b);
        };
        _0x32797b[_0x4431('0xc')] = _0x4431('0xd');
        _0x32797b[_0x4431('0xe')] = _0x4431('0xf');
        _0x32797b[_0x4431('0x10')] = function (_0x45d9c1, _0x445a03, _0x973d3e, _0x519f7a) {
            return _0x45d9c1(_0x445a03, _0x973d3e, _0x519f7a);
        };
        _0x32797b[_0x4431('0x11')] = _0x4431('0x12');
        _0x32797b[_0x4431('0x13')] = _0x4431('0x14');
        _0x32797b[_0x4431('0x15')] = _0x4431('0x16');
        _0x32797b[_0x4431('0x17')] = _0x4431('0x18');
        _0x32797b[_0x4431('0x19')] = function (_0x4e3716, _0x2aae12, _0x5d119c) {
            return _0x4e3716(_0x2aae12, _0x5d119c);
        };
        _0x32797b[_0x4431('0x1a')] = function (_0x2a663f, _0x302c3, _0x4e0191) {
            return _0x2a663f(_0x302c3, _0x4e0191);
        };
        _0x32797b[_0x4431('0x1b')] = _0x4431('0x1c');
        _0x32797b[_0x4431('0x1d')] = _0x4431('0x1e');
        _0x32797b[_0x4431('0x1f')] = function (_0x54584d, _0x2885f3, _0x68f596) {
            return _0x54584d(_0x2885f3, _0x68f596);
        };
        _0x32797b[_0x4431('0x20')] = function (_0x5692d6, _0x20f6b6, _0x5a284a) {
            return _0x5692d6(_0x20f6b6, _0x5a284a);
        };
        _0x32797b[_0x4431('0x21')] = _0x4431('0x22');
        _0x32797b[_0x4431('0x23')] = function (_0x37d6bc, _0x2bcf7c, _0x17e384) {
            return _0x37d6bc(_0x2bcf7c, _0x17e384);
        };
        _0x32797b[_0x4431('0x24')] = _0x4431('0x25');
        _0x32797b[_0x4431('0x26')] = function (_0x341608, _0x37efbf, _0x234ef3) {
            return _0x341608(_0x37efbf, _0x234ef3);
        };
        _0x32797b[_0x4431('0x27')] = _0x4431('0x28');
        _0x32797b[_0x4431('0x29')] = function (_0x295681, _0x48edb8, _0x103226) {
            return _0x295681(_0x48edb8, _0x103226);
        };
        _0x32797b[_0x4431('0x2a')] = _0x4431('0x2b');
        _0x32797b[_0x4431('0x2c')] = function (_0x182e5d, _0x50f020, _0x236d06, _0x46a3fd, _0x5d65eb) {
            return _0x182e5d(_0x50f020, _0x236d06, _0x46a3fd, _0x5d65eb);
        };
        _0x32797b[_0x4431('0x2d')] = function (_0x4c60f4, _0x5090fb, _0x2b69bf) {
            return _0x4c60f4(_0x5090fb, _0x2b69bf);
        };
        _0x32797b[_0x4431('0x2e')] = _0x4431('0x2f');
        var _0x5c0e78 = this, _0x3dbcef = _0x5c0e78[_0x4431('0x30')], _0x4cb31d = _0x5c0e78[_0x4431('0x31')]['_c'] || _0x3dbcef;
        return _0x32797b[_0x4431('0x0')](_0x4cb31d, _0x32797b[_0x4431('0x1')], [_0x32797b[_0x4431('0x0')](_0x4cb31d, _0x32797b[_0x4431('0x3')], [
                _0x32797b[_0x4431('0x5')](_0x4cb31d, _0x32797b[_0x4431('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x32797b[_0x4431('0x8')](_0x4cb31d, _0x32797b[_0x4431('0x1')], { 'staticStyle': { 'height': _0x32797b[_0x4431('0x9')] } }, [_0x32797b[_0x4431('0xb')](_0x4cb31d, _0x32797b[_0x4431('0xc')], {
                            'ref': _0x32797b[_0x4431('0xe')],
                            'attrs': {
                                'options': _0x5c0e78[_0x4431('0x32')],
                                'on-node-click': _0x5c0e78[_0x4431('0x33')],
                                'on-line-click': _0x5c0e78[_0x4431('0x34')]
                            }
                        })], 0x1)]),
                _0x32797b[_0x4431('0x5')](_0x4cb31d, _0x32797b[_0x4431('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x32797b[_0x4431('0x10')](_0x4cb31d, _0x32797b[_0x4431('0x1')], {
                        'staticStyle': {
                            'height': _0x32797b[_0x4431('0x9')],
                            'border-left': _0x32797b[_0x4431('0x11')],
                            'border-right': _0x32797b[_0x4431('0x11')],
                            'padding': _0x32797b[_0x4431('0x13')],
                            'font-size': _0x32797b[_0x4431('0x15')],
                            'line-height': _0x32797b[_0x4431('0x17')]
                        }
                    }, [_0x32797b[_0x4431('0x19')](_0x4cb31d, 'ul', [
                            _0x32797b[_0x4431('0x1a')](_0x4cb31d, 'li', [_0x5c0e78['_v'](_0x32797b[_0x4431('0x1b')])]),
                            _0x32797b[_0x4431('0x1a')](_0x4cb31d, 'li', [_0x5c0e78['_v'](_0x32797b[_0x4431('0x1d')])]),
                            _0x32797b[_0x4431('0x1f')](_0x4cb31d, 'ul', [
                                _0x32797b[_0x4431('0x20')](_0x4cb31d, 'li', [_0x5c0e78['_v'](_0x32797b[_0x4431('0x21')])]),
                                _0x32797b[_0x4431('0x23')](_0x4cb31d, 'li', [_0x5c0e78['_v'](_0x32797b[_0x4431('0x24')])])
                            ]),
                            _0x32797b[_0x4431('0x26')](_0x4cb31d, 'li', [_0x5c0e78['_v'](_0x32797b[_0x4431('0x27')])]),
                            _0x32797b[_0x4431('0x29')](_0x4cb31d, 'li', [_0x5c0e78['_v'](_0x32797b[_0x4431('0x2a')])])
                        ])])]),
                _0x32797b[_0x4431('0x10')](_0x4cb31d, _0x32797b[_0x4431('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x32797b[_0x4431('0x2c')](_0x4cb31d, _0x32797b[_0x4431('0x1')], { 'staticStyle': { 'height': _0x32797b[_0x4431('0x9')] } }, [_0x32797b[_0x4431('0x2d')](_0x4cb31d, _0x32797b[_0x4431('0xc')], {
                            'ref': _0x32797b[_0x4431('0x2e')],
                            'attrs': {
                                'options': _0x5c0e78[_0x4431('0x35')],
                                'on-node-click': _0x5c0e78[_0x4431('0x33')],
                                'on-line-click': _0x5c0e78[_0x4431('0x34')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x4431('0x36')] = _0x4431('0x37');
h[_0x4431('0x38')] = {};
h[_0x4431('0x39')] = function () {
    var _0x410811 = { UbkiJ: _0x4431('0x3a') };
    return {
        currentCase: _0x410811.UbkiJ,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x4431('0x3b')] = function () {
    this.show();
};
h[_0x4431('0x3c')] = {};
h[_0x4431('0x3c')][_0x4431('0x3d')] = function (_0x868820) {
    var _0x3ca2d5 = {
        dmTUJ: _0x4431('0x3e'),
        qHUSN: _0x4431('0x3f')
    };
    const _0x4645cf = this.$refs.graphRef1;
    this.resetGraph(_0x4645cf, _0x3ca2d5.dmTUJ);
    const _0x27277b = this.$refs.graphRef2;
    this.resetGraph(_0x27277b, _0x3ca2d5.qHUSN);
};
h[_0x4431('0x3c')][_0x4431('0x40')] = function (_0x4e1b39, _0x3a24bf) {
    var _0x1251bc = {
        VPlvt: _0x4431('0x41'),
        VvIWP: _0x4431('0x42'),
        lEXAV: _0x4431('0x43'),
        SQfRC: _0x4431('0x44'),
        ZFFjw: _0x4431('0x45'),
        xGuXp: _0x4431('0x46'),
        Yowpl: function (_0x4b773b, _0x1788ab) {
            return _0x4b773b === _0x1788ab;
        },
        xLQWB: _0x4431('0x3f'),
        nccKN: _0x4431('0x47'),
        VAQbh: _0x4431('0x48'),
        kTWiV: _0x4431('0x49'),
        JfTYC: _0x4431('0x4a'),
        Atmjf: _0x4431('0x4b'),
        nIpBf: _0x4431('0x4c'),
        HbeLC: _0x4431('0x4d'),
        suilj: _0x4431('0x4e')
    };
    const _0x5ad40b = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x1251bc.VPlvt,
                from: _0x1251bc.VvIWP,
                max_per_width: _0x1251bc.lEXAV,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x1251bc.SQfRC,
        defaultNodeColor: _0x1251bc.ZFFjw
    };
    _0x5ad40b.layouts[0x0].from = _0x1251bc.xGuXp, _0x5ad40b.layouts[0x0].min_per_width = 0x46, _0x5ad40b.layouts[0x0].max_per_width = 0xc8, _0x5ad40b.layouts[0x0].min_per_height = 0xc8, _0x5ad40b.layouts[0x0].max_per_height = 0x190, _0x5ad40b.defaultNodeWidth = 0x1e, _0x5ad40b.defaultNodeHeight = 0x64, _0x5ad40b.defaultJunctionPoint = 'tb';
    let _0x3a8183, _0x2f7b1c, _0x6d30c4;
    _0x1251bc.Yowpl(_0x3a24bf, _0x1251bc.xLQWB) && (_0x3a8183 = !0x0, _0x2f7b1c = !0x1, _0x6d30c4 = _0x1251bc.nccKN);
    const _0x57fdad = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x1251bc.VAQbh
            },
            {
                id: _0x1251bc.kTWiV,
                text: _0x1251bc.kTWiV
            },
            {
                id: _0x1251bc.JfTYC,
                text: _0x1251bc.JfTYC,
                expandHolderPosition: _0x1251bc.xGuXp
            },
            {
                id: _0x1251bc.Atmjf,
                text: _0x1251bc.Atmjf
            },
            {
                id: _0x1251bc.nIpBf,
                text: _0x1251bc.nIpBf
            },
            {
                id: _0x1251bc.HbeLC,
                text: _0x1251bc.HbeLC
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x1251bc.suilj
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
                from: _0x1251bc.kTWiV,
                to: 'a',
                showStartArrow: _0x3a8183,
                showEndArrow: _0x2f7b1c,
                color: _0x6d30c4
            },
            {
                from: _0x1251bc.JfTYC,
                to: 'a',
                showStartArrow: _0x3a8183,
                showEndArrow: _0x2f7b1c,
                color: _0x6d30c4
            },
            {
                from: _0x1251bc.Atmjf,
                to: _0x1251bc.JfTYC,
                showStartArrow: _0x3a8183,
                showEndArrow: _0x2f7b1c,
                color: _0x6d30c4
            },
            {
                from: _0x1251bc.nIpBf,
                to: _0x1251bc.JfTYC,
                showStartArrow: _0x3a8183,
                showEndArrow: _0x2f7b1c,
                color: _0x6d30c4
            },
            {
                from: _0x1251bc.HbeLC,
                to: 'a',
                showStartArrow: _0x3a8183,
                showEndArrow: _0x2f7b1c,
                color: _0x6d30c4
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
    _0x4e1b39.setOptions(_0x5ad40b, _0x1e06a8 => {
        this.showSeeksGraph(_0x4e1b39, _0x57fdad);
    });
};
h[_0x4431('0x3c')][_0x4431('0x4f')] = function (_0x304ca0, _0x1578ba) {
    _0x304ca0.setJsonData(_0x1578ba, _0x50638f => {
        _0x50638f.focusNodeById('a');
    });
};
h[_0x4431('0x3c')][_0x4431('0x33')] = function (_0x286e01, _0x9fc16e) {
    var _0x3ee6e3 = { EWbWj: _0x4431('0x50') };
    console.log(_0x3ee6e3.EWbWj, _0x286e01);
};
h[_0x4431('0x3c')][_0x4431('0x34')] = function (_0x4498ca, _0x188034, _0x1fd5a5) {
    var _0x6d4ed0 = { AZXZX: _0x4431('0x51') };
    console.log(_0x6d4ed0.AZXZX, _0x4498ca);
};
var p = _0x3ff80c(h, c, d, !0x1, f, null, null, null);
function f(_0x111a38) {
    for (let _0x571f95 in n)
        this[_0x571f95] = n[_0x571f95];
}
const m = function () {
    return p[_0x4431('0x52')];
}();
export {
    m as default
};