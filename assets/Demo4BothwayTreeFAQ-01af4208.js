
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5bf4 = [
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
    'qgzzj',
    'CsYzK',
    'div',
    'LyzlD',
    'el-row',
    'kfLqT',
    'el-col',
    'sBzVb',
    'GqdJM',
    'calc(100vh\x20-\x20100px)',
    'yZGjO',
    'SumAR',
    'RelationGraph',
    'oDcBU',
    'graphRef1',
    'ZdCRu',
    'LwKLf',
    '#efefef\x20solid\x201px',
    'OeyUF',
    '15px',
    'JoVaz',
    '14px',
    'qggMz',
    '25px',
    'qkKPy',
    'vYJIJ',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'tMNrj',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'XMTCw',
    'showStartArrow=true',
    'GndRh',
    'showEndArrow=false',
    'SBXNu',
    '以此来让上方线条看起来是反向展示。',
    'lQQSu',
    'HNfZt',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'mdOYy',
    'ZNowl',
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
    'mounted'
];
(function (_0x9f77bb, _0x3e59d7) {
    var _0x30d6d0 = function (_0x161e50) {
        while (--_0x161e50) {
            _0x9f77bb['push'](_0x9f77bb['shift']());
        }
    };
    _0x30d6d0(++_0x3e59d7);
}(_0x5bf4, 0xaf));
var _0x197d = function (_0x5db522, _0x143eaa) {
    _0x5db522 = _0x5db522 - 0x0;
    var _0x50b579 = _0x5bf4[_0x5db522];
    return _0x50b579;
};
import { n as _0x580ebe } from './index-f64bbabb.js';
var c = function () {
        var _0x5df0b8 = {};
        _0x5df0b8[_0x197d('0x0')] = function (_0x442cc7, _0x3307f8, _0x4e2156, _0x50e8cb) {
            return _0x442cc7(_0x3307f8, _0x4e2156, _0x50e8cb);
        };
        _0x5df0b8[_0x197d('0x1')] = _0x197d('0x2');
        _0x5df0b8[_0x197d('0x3')] = _0x197d('0x4');
        _0x5df0b8[_0x197d('0x5')] = _0x197d('0x6');
        _0x5df0b8[_0x197d('0x7')] = function (_0x483b34, _0x2bfd70, _0x391ea3, _0x4b42e9, _0x23779a) {
            return _0x483b34(_0x2bfd70, _0x391ea3, _0x4b42e9, _0x23779a);
        };
        _0x5df0b8[_0x197d('0x8')] = _0x197d('0x9');
        _0x5df0b8[_0x197d('0xa')] = function (_0xe4721c, _0x2cf3a4, _0x52aaeb) {
            return _0xe4721c(_0x2cf3a4, _0x52aaeb);
        };
        _0x5df0b8[_0x197d('0xb')] = _0x197d('0xc');
        _0x5df0b8[_0x197d('0xd')] = _0x197d('0xe');
        _0x5df0b8[_0x197d('0xf')] = function (_0x164c4c, _0x3ca7ce, _0x5929cc, _0x221d4d) {
            return _0x164c4c(_0x3ca7ce, _0x5929cc, _0x221d4d);
        };
        _0x5df0b8[_0x197d('0x10')] = _0x197d('0x11');
        _0x5df0b8[_0x197d('0x12')] = _0x197d('0x13');
        _0x5df0b8[_0x197d('0x14')] = _0x197d('0x15');
        _0x5df0b8[_0x197d('0x16')] = _0x197d('0x17');
        _0x5df0b8[_0x197d('0x18')] = function (_0x3572a6, _0x39f3f8, _0x3f46b0) {
            return _0x3572a6(_0x39f3f8, _0x3f46b0);
        };
        _0x5df0b8[_0x197d('0x19')] = _0x197d('0x1a');
        _0x5df0b8[_0x197d('0x1b')] = _0x197d('0x1c');
        _0x5df0b8[_0x197d('0x1d')] = _0x197d('0x1e');
        _0x5df0b8[_0x197d('0x1f')] = _0x197d('0x20');
        _0x5df0b8[_0x197d('0x21')] = _0x197d('0x22');
        _0x5df0b8[_0x197d('0x23')] = function (_0x254de7, _0x41f609, _0x3d97f3) {
            return _0x254de7(_0x41f609, _0x3d97f3);
        };
        _0x5df0b8[_0x197d('0x24')] = _0x197d('0x25');
        _0x5df0b8[_0x197d('0x26')] = function (_0x4a79d1, _0x32f5c4, _0x12ded5) {
            return _0x4a79d1(_0x32f5c4, _0x12ded5);
        };
        _0x5df0b8[_0x197d('0x27')] = _0x197d('0x28');
        var _0x2fc74d = this, _0x17015a = _0x2fc74d[_0x197d('0x29')], _0x51e9d9 = _0x2fc74d[_0x197d('0x2a')]['_c'] || _0x17015a;
        return _0x5df0b8[_0x197d('0x0')](_0x51e9d9, _0x5df0b8[_0x197d('0x1')], [_0x5df0b8[_0x197d('0x0')](_0x51e9d9, _0x5df0b8[_0x197d('0x3')], [
                _0x5df0b8[_0x197d('0x0')](_0x51e9d9, _0x5df0b8[_0x197d('0x5')], { 'attrs': { 'span': 0x9 } }, [_0x5df0b8[_0x197d('0x7')](_0x51e9d9, _0x5df0b8[_0x197d('0x1')], { 'staticStyle': { 'height': _0x5df0b8[_0x197d('0x8')] } }, [_0x5df0b8[_0x197d('0xa')](_0x51e9d9, _0x5df0b8[_0x197d('0xb')], {
                            'ref': _0x5df0b8[_0x197d('0xd')],
                            'attrs': {
                                'options': _0x2fc74d[_0x197d('0x2b')],
                                'on-node-click': _0x2fc74d[_0x197d('0x2c')],
                                'on-line-click': _0x2fc74d[_0x197d('0x2d')]
                            }
                        })], 0x1)]),
                _0x5df0b8[_0x197d('0x0')](_0x51e9d9, _0x5df0b8[_0x197d('0x5')], { 'attrs': { 'span': 0x6 } }, [_0x5df0b8[_0x197d('0xf')](_0x51e9d9, _0x5df0b8[_0x197d('0x1')], {
                        'staticStyle': {
                            'height': _0x5df0b8[_0x197d('0x8')],
                            'border-left': _0x5df0b8[_0x197d('0x10')],
                            'border-right': _0x5df0b8[_0x197d('0x10')],
                            'padding': _0x5df0b8[_0x197d('0x12')],
                            'font-size': _0x5df0b8[_0x197d('0x14')],
                            'line-height': _0x5df0b8[_0x197d('0x16')]
                        }
                    }, [_0x5df0b8[_0x197d('0xa')](_0x51e9d9, 'ul', [
                            _0x5df0b8[_0x197d('0x18')](_0x51e9d9, 'li', [_0x2fc74d['_v'](_0x5df0b8[_0x197d('0x19')])]),
                            _0x5df0b8[_0x197d('0x18')](_0x51e9d9, 'li', [_0x2fc74d['_v'](_0x5df0b8[_0x197d('0x1b')])]),
                            _0x5df0b8[_0x197d('0x18')](_0x51e9d9, 'ul', [
                                _0x5df0b8[_0x197d('0x18')](_0x51e9d9, 'li', [_0x2fc74d['_v'](_0x5df0b8[_0x197d('0x1d')])]),
                                _0x5df0b8[_0x197d('0x18')](_0x51e9d9, 'li', [_0x2fc74d['_v'](_0x5df0b8[_0x197d('0x1f')])])
                            ]),
                            _0x5df0b8[_0x197d('0x18')](_0x51e9d9, 'li', [_0x2fc74d['_v'](_0x5df0b8[_0x197d('0x21')])]),
                            _0x5df0b8[_0x197d('0x23')](_0x51e9d9, 'li', [_0x2fc74d['_v'](_0x5df0b8[_0x197d('0x24')])])
                        ])])]),
                _0x5df0b8[_0x197d('0xf')](_0x51e9d9, _0x5df0b8[_0x197d('0x5')], { 'attrs': { 'span': 0x9 } }, [_0x5df0b8[_0x197d('0x7')](_0x51e9d9, _0x5df0b8[_0x197d('0x1')], { 'staticStyle': { 'height': _0x5df0b8[_0x197d('0x8')] } }, [_0x5df0b8[_0x197d('0x26')](_0x51e9d9, _0x5df0b8[_0x197d('0xb')], {
                            'ref': _0x5df0b8[_0x197d('0x27')],
                            'attrs': {
                                'options': _0x2fc74d[_0x197d('0x2e')],
                                'on-node-click': _0x2fc74d[_0x197d('0x2c')],
                                'on-line-click': _0x2fc74d[_0x197d('0x2d')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x197d('0x2f')] = _0x197d('0x30');
h[_0x197d('0x31')] = {};
h[_0x197d('0x32')] = function () {
    var _0x5d9cd8 = { xVZzm: _0x197d('0x33') };
    return {
        currentCase: _0x5d9cd8.xVZzm,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x197d('0x34')] = function () {
    this.show();
};
h[_0x197d('0x35')] = {};
h[_0x197d('0x35')][_0x197d('0x36')] = function (_0x145e04) {
    var _0x50d049 = {
        NPxgi: _0x197d('0x37'),
        BExVq: _0x197d('0x38')
    };
    const _0x301659 = this.$refs.graphRef1;
    this.resetGraph(_0x301659, _0x50d049.NPxgi);
    const _0x198f5a = this.$refs.graphRef2;
    this.resetGraph(_0x198f5a, _0x50d049.BExVq);
};
h[_0x197d('0x35')][_0x197d('0x39')] = function (_0x8878cd, _0x3cf6da) {
    var _0x2b804c = {
        Sktlj: _0x197d('0x3a'),
        bgOJM: _0x197d('0x3b'),
        gJFNO: _0x197d('0x3c'),
        mnWac: _0x197d('0x3d'),
        tuAxH: _0x197d('0x3e'),
        jZQSI: _0x197d('0x3f'),
        vZXDb: function (_0x59d08d, _0xdef094) {
            return _0x59d08d === _0xdef094;
        },
        uJCLq: _0x197d('0x38'),
        GyutK: _0x197d('0x40'),
        wvkIi: _0x197d('0x41'),
        HtuER: _0x197d('0x42'),
        WUSPs: _0x197d('0x43'),
        kXTGi: _0x197d('0x44'),
        AFyPq: _0x197d('0x45'),
        cLNYm: _0x197d('0x46'),
        Ltkpf: _0x197d('0x47')
    };
    const _0x477bd7 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x2b804c.Sktlj,
                from: _0x2b804c.bgOJM,
                max_per_width: _0x2b804c.gJFNO,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x2b804c.mnWac,
        defaultNodeColor: _0x2b804c.tuAxH
    };
    _0x477bd7.layouts[0x0].from = _0x2b804c.jZQSI, _0x477bd7.layouts[0x0].min_per_width = 0x46, _0x477bd7.layouts[0x0].max_per_width = 0xc8, _0x477bd7.layouts[0x0].min_per_height = 0xc8, _0x477bd7.layouts[0x0].max_per_height = 0x190, _0x477bd7.defaultNodeWidth = 0x1e, _0x477bd7.defaultNodeHeight = 0x64, _0x477bd7.defaultJunctionPoint = 'tb';
    let _0x15115d, _0x4bdf96, _0x528f46;
    _0x2b804c.vZXDb(_0x3cf6da, _0x2b804c.uJCLq) && (_0x15115d = !0x0, _0x4bdf96 = !0x1, _0x528f46 = _0x2b804c.GyutK);
    const _0x1bddde = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x2b804c.wvkIi
            },
            {
                id: _0x2b804c.HtuER,
                text: _0x2b804c.HtuER
            },
            {
                id: _0x2b804c.WUSPs,
                text: _0x2b804c.WUSPs,
                expandHolderPosition: _0x2b804c.jZQSI
            },
            {
                id: _0x2b804c.kXTGi,
                text: _0x2b804c.kXTGi
            },
            {
                id: _0x2b804c.AFyPq,
                text: _0x2b804c.AFyPq
            },
            {
                id: _0x2b804c.cLNYm,
                text: _0x2b804c.cLNYm
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x2b804c.Ltkpf
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
                from: _0x2b804c.HtuER,
                to: 'a',
                showStartArrow: _0x15115d,
                showEndArrow: _0x4bdf96,
                color: _0x528f46
            },
            {
                from: _0x2b804c.WUSPs,
                to: 'a',
                showStartArrow: _0x15115d,
                showEndArrow: _0x4bdf96,
                color: _0x528f46
            },
            {
                from: _0x2b804c.kXTGi,
                to: _0x2b804c.WUSPs,
                showStartArrow: _0x15115d,
                showEndArrow: _0x4bdf96,
                color: _0x528f46
            },
            {
                from: _0x2b804c.AFyPq,
                to: _0x2b804c.WUSPs,
                showStartArrow: _0x15115d,
                showEndArrow: _0x4bdf96,
                color: _0x528f46
            },
            {
                from: _0x2b804c.cLNYm,
                to: 'a',
                showStartArrow: _0x15115d,
                showEndArrow: _0x4bdf96,
                color: _0x528f46
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
    _0x8878cd.setOptions(_0x477bd7, _0x29725c => {
        this.showSeeksGraph(_0x8878cd, _0x1bddde);
    });
};
h[_0x197d('0x35')][_0x197d('0x48')] = function (_0x14d776, _0xf053fe) {
    _0x14d776.setJsonData(_0xf053fe, _0x1552ee => {
        _0x1552ee.focusNodeById('a');
    });
};
h[_0x197d('0x35')][_0x197d('0x2c')] = function (_0x31fa99, _0x52acea) {
    var _0xc6b459 = { cErBp: _0x197d('0x49') };
    console.log(_0xc6b459.cErBp, _0x31fa99);
};
h[_0x197d('0x35')][_0x197d('0x2d')] = function (_0x2ab38, _0x187623, _0x2d47c0) {
    var _0xd37118 = { AEUtN: _0x197d('0x4a') };
    console.log(_0xd37118.AEUtN, _0x2ab38);
};
var p = _0x580ebe(h, c, d, !0x1, f, null, null, null);
function f(_0xbee8d0) {
    for (let _0x4e2396 in n)
        this[_0x4e2396] = n[_0x4e2396];
}
const m = function () {
    return p[_0x197d('0x4b')];
}();
export {
    m as default
};