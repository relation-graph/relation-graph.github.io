
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x11e9 = [
    'MpmIT',
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
    'dkvCi',
    'RerSv',
    'div',
    'lMaBv',
    'cRyry',
    'el-row',
    'neJWe',
    'vKGLl',
    'el-col',
    'PuFzZ',
    'KYeYa',
    'calc(100vh\x20-\x20100px)',
    'lKdui',
    'mkTlK',
    'RelationGraph',
    'jEGMn',
    'graphRef1',
    'pFqpW',
    'HCeEP',
    '#efefef\x20solid\x201px',
    'nWurZ',
    '15px',
    'JGUZk',
    '14px',
    'XIOfa',
    '25px',
    'wIVer',
    'Vljll',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'lIiZT',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'snjqt',
    'CqrKi',
    'vkJpo',
    'showStartArrow=true',
    'ZpMZQ',
    'showEndArrow=false',
    'QOImy',
    'Roytj',
    '以此来让上方线条看起来是反向展示。',
    'whbVV',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'ZfExh'
];
(function (_0x5db522, _0x143eaa) {
    var _0x50b579 = function (_0x1a4950) {
        while (--_0x1a4950) {
            _0x5db522['push'](_0x5db522['shift']());
        }
    };
    _0x50b579(++_0x143eaa);
}(_0x11e9, 0x75));
var _0x3b1c = function (_0xd9b874, _0x1cb6f0) {
    _0xd9b874 = _0xd9b874 - 0x0;
    var _0x11acbf = _0x11e9[_0xd9b874];
    return _0x11acbf;
};
import { n as _0x5d3c9a } from './index-0f873f6f.js';
var c = function () {
        var _0x2b9a14 = {};
        _0x2b9a14[_0x3b1c('0x0')] = function (_0xd67d5f, _0x7a7402, _0x888b5d, _0x4824da) {
            return _0xd67d5f(_0x7a7402, _0x888b5d, _0x4824da);
        };
        _0x2b9a14[_0x3b1c('0x1')] = _0x3b1c('0x2');
        _0x2b9a14[_0x3b1c('0x3')] = function (_0x48f186, _0x3ef8ce, _0x2c5968, _0x3116a4) {
            return _0x48f186(_0x3ef8ce, _0x2c5968, _0x3116a4);
        };
        _0x2b9a14[_0x3b1c('0x4')] = _0x3b1c('0x5');
        _0x2b9a14[_0x3b1c('0x6')] = function (_0x9fc05, _0x1922f4, _0x4dfaae, _0x4e6f92) {
            return _0x9fc05(_0x1922f4, _0x4dfaae, _0x4e6f92);
        };
        _0x2b9a14[_0x3b1c('0x7')] = _0x3b1c('0x8');
        _0x2b9a14[_0x3b1c('0x9')] = function (_0x34f08d, _0x211c76, _0x539319, _0x61dd2c, _0x2a2f06) {
            return _0x34f08d(_0x211c76, _0x539319, _0x61dd2c, _0x2a2f06);
        };
        _0x2b9a14[_0x3b1c('0xa')] = _0x3b1c('0xb');
        _0x2b9a14[_0x3b1c('0xc')] = function (_0x118a60, _0x1f87e9, _0x17628b) {
            return _0x118a60(_0x1f87e9, _0x17628b);
        };
        _0x2b9a14[_0x3b1c('0xd')] = _0x3b1c('0xe');
        _0x2b9a14[_0x3b1c('0xf')] = _0x3b1c('0x10');
        _0x2b9a14[_0x3b1c('0x11')] = function (_0x1398ab, _0x19f6f0, _0x5ad96e, _0x446b8f) {
            return _0x1398ab(_0x19f6f0, _0x5ad96e, _0x446b8f);
        };
        _0x2b9a14[_0x3b1c('0x12')] = _0x3b1c('0x13');
        _0x2b9a14[_0x3b1c('0x14')] = _0x3b1c('0x15');
        _0x2b9a14[_0x3b1c('0x16')] = _0x3b1c('0x17');
        _0x2b9a14[_0x3b1c('0x18')] = _0x3b1c('0x19');
        _0x2b9a14[_0x3b1c('0x1a')] = function (_0x178b89, _0xa33ae3, _0x2b2bfb) {
            return _0x178b89(_0xa33ae3, _0x2b2bfb);
        };
        _0x2b9a14[_0x3b1c('0x1b')] = _0x3b1c('0x1c');
        _0x2b9a14[_0x3b1c('0x1d')] = _0x3b1c('0x1e');
        _0x2b9a14[_0x3b1c('0x1f')] = function (_0x1dae61, _0x33cb99, _0x29e7d8) {
            return _0x1dae61(_0x33cb99, _0x29e7d8);
        };
        _0x2b9a14[_0x3b1c('0x20')] = function (_0x1cb13e, _0x54ea59, _0x46327f) {
            return _0x1cb13e(_0x54ea59, _0x46327f);
        };
        _0x2b9a14[_0x3b1c('0x21')] = _0x3b1c('0x22');
        _0x2b9a14[_0x3b1c('0x23')] = _0x3b1c('0x24');
        _0x2b9a14[_0x3b1c('0x25')] = function (_0x573384, _0x4926e8, _0x17f2d7) {
            return _0x573384(_0x4926e8, _0x17f2d7);
        };
        _0x2b9a14[_0x3b1c('0x26')] = _0x3b1c('0x27');
        _0x2b9a14[_0x3b1c('0x28')] = _0x3b1c('0x29');
        _0x2b9a14[_0x3b1c('0x2a')] = function (_0x4226c1, _0x4ed2bf, _0x40ed23, _0x17fb44, _0x478bed) {
            return _0x4226c1(_0x4ed2bf, _0x40ed23, _0x17fb44, _0x478bed);
        };
        _0x2b9a14[_0x3b1c('0x2b')] = _0x3b1c('0x2c');
        var _0x29569b = this, _0xa07d9d = _0x29569b[_0x3b1c('0x2d')], _0x5bc6f1 = _0x29569b[_0x3b1c('0x2e')]['_c'] || _0xa07d9d;
        return _0x2b9a14[_0x3b1c('0x0')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0x1')], [_0x2b9a14[_0x3b1c('0x3')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0x4')], [
                _0x2b9a14[_0x3b1c('0x6')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0x7')], { 'attrs': { 'span': 0x9 } }, [_0x2b9a14[_0x3b1c('0x9')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0x1')], { 'staticStyle': { 'height': _0x2b9a14[_0x3b1c('0xa')] } }, [_0x2b9a14[_0x3b1c('0xc')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0xd')], {
                            'ref': _0x2b9a14[_0x3b1c('0xf')],
                            'attrs': {
                                'options': _0x29569b[_0x3b1c('0x2f')],
                                'on-node-click': _0x29569b[_0x3b1c('0x30')],
                                'on-line-click': _0x29569b[_0x3b1c('0x31')]
                            }
                        })], 0x1)]),
                _0x2b9a14[_0x3b1c('0x6')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0x7')], { 'attrs': { 'span': 0x6 } }, [_0x2b9a14[_0x3b1c('0x11')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0x1')], {
                        'staticStyle': {
                            'height': _0x2b9a14[_0x3b1c('0xa')],
                            'border-left': _0x2b9a14[_0x3b1c('0x12')],
                            'border-right': _0x2b9a14[_0x3b1c('0x12')],
                            'padding': _0x2b9a14[_0x3b1c('0x14')],
                            'font-size': _0x2b9a14[_0x3b1c('0x16')],
                            'line-height': _0x2b9a14[_0x3b1c('0x18')]
                        }
                    }, [_0x2b9a14[_0x3b1c('0x1a')](_0x5bc6f1, 'ul', [
                            _0x2b9a14[_0x3b1c('0x1a')](_0x5bc6f1, 'li', [_0x29569b['_v'](_0x2b9a14[_0x3b1c('0x1b')])]),
                            _0x2b9a14[_0x3b1c('0x1a')](_0x5bc6f1, 'li', [_0x29569b['_v'](_0x2b9a14[_0x3b1c('0x1d')])]),
                            _0x2b9a14[_0x3b1c('0x1f')](_0x5bc6f1, 'ul', [
                                _0x2b9a14[_0x3b1c('0x20')](_0x5bc6f1, 'li', [_0x29569b['_v'](_0x2b9a14[_0x3b1c('0x21')])]),
                                _0x2b9a14[_0x3b1c('0x20')](_0x5bc6f1, 'li', [_0x29569b['_v'](_0x2b9a14[_0x3b1c('0x23')])])
                            ]),
                            _0x2b9a14[_0x3b1c('0x25')](_0x5bc6f1, 'li', [_0x29569b['_v'](_0x2b9a14[_0x3b1c('0x26')])]),
                            _0x2b9a14[_0x3b1c('0x25')](_0x5bc6f1, 'li', [_0x29569b['_v'](_0x2b9a14[_0x3b1c('0x28')])])
                        ])])]),
                _0x2b9a14[_0x3b1c('0x11')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0x7')], { 'attrs': { 'span': 0x9 } }, [_0x2b9a14[_0x3b1c('0x2a')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0x1')], { 'staticStyle': { 'height': _0x2b9a14[_0x3b1c('0xa')] } }, [_0x2b9a14[_0x3b1c('0x25')](_0x5bc6f1, _0x2b9a14[_0x3b1c('0xd')], {
                            'ref': _0x2b9a14[_0x3b1c('0x2b')],
                            'attrs': {
                                'options': _0x29569b[_0x3b1c('0x32')],
                                'on-node-click': _0x29569b[_0x3b1c('0x30')],
                                'on-line-click': _0x29569b[_0x3b1c('0x31')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x3b1c('0x33')] = _0x3b1c('0x34');
h[_0x3b1c('0x35')] = {};
h[_0x3b1c('0x36')] = function () {
    var _0x272412 = { YqPgh: _0x3b1c('0x37') };
    return {
        currentCase: _0x272412.YqPgh,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x3b1c('0x38')] = function () {
    this.show();
};
h[_0x3b1c('0x39')] = {};
h[_0x3b1c('0x39')][_0x3b1c('0x3a')] = function (_0x4d0a47) {
    var _0xd9ad61 = {
        qnXfZ: _0x3b1c('0x3b'),
        FIVqr: _0x3b1c('0x3c')
    };
    const _0x15509b = this.$refs.graphRef1;
    this.resetGraph(_0x15509b, _0xd9ad61.qnXfZ);
    const _0x39a560 = this.$refs.graphRef2;
    this.resetGraph(_0x39a560, _0xd9ad61.FIVqr);
};
h[_0x3b1c('0x39')][_0x3b1c('0x3d')] = function (_0x351364, _0x52a393) {
    var _0x4e76de = {
        krDhA: _0x3b1c('0x3e'),
        FZQmz: _0x3b1c('0x3f'),
        CSrOP: _0x3b1c('0x40'),
        QoFbM: _0x3b1c('0x41'),
        iaCwp: _0x3b1c('0x42'),
        kCSbF: _0x3b1c('0x43'),
        bEeWW: function (_0x19d019, _0x400e86) {
            return _0x19d019 === _0x400e86;
        },
        xEuog: _0x3b1c('0x3c'),
        FBnWB: _0x3b1c('0x44'),
        LPsHN: _0x3b1c('0x45'),
        HiMqf: _0x3b1c('0x46'),
        EYUQr: _0x3b1c('0x47'),
        AfQOH: _0x3b1c('0x48'),
        LSllL: _0x3b1c('0x49'),
        hMHJm: _0x3b1c('0x4a'),
        Usvdn: _0x3b1c('0x4b')
    };
    const _0x26f7cf = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x4e76de.krDhA,
                from: _0x4e76de.FZQmz,
                max_per_width: _0x4e76de.CSrOP,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x4e76de.QoFbM,
        defaultNodeColor: _0x4e76de.iaCwp
    };
    _0x26f7cf.layouts[0x0].from = _0x4e76de.kCSbF, _0x26f7cf.layouts[0x0].min_per_width = 0x46, _0x26f7cf.layouts[0x0].max_per_width = 0xc8, _0x26f7cf.layouts[0x0].min_per_height = 0xc8, _0x26f7cf.layouts[0x0].max_per_height = 0x190, _0x26f7cf.defaultNodeWidth = 0x1e, _0x26f7cf.defaultNodeHeight = 0x64, _0x26f7cf.defaultJunctionPoint = 'tb';
    let _0x1e1eb8, _0x1f6252, _0x6e6a71;
    _0x4e76de.bEeWW(_0x52a393, _0x4e76de.xEuog) && (_0x1e1eb8 = !0x0, _0x1f6252 = !0x1, _0x6e6a71 = _0x4e76de.FBnWB);
    const _0x4571d7 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x4e76de.LPsHN
            },
            {
                id: _0x4e76de.HiMqf,
                text: _0x4e76de.HiMqf
            },
            {
                id: _0x4e76de.EYUQr,
                text: _0x4e76de.EYUQr,
                expandHolderPosition: _0x4e76de.kCSbF
            },
            {
                id: _0x4e76de.AfQOH,
                text: _0x4e76de.AfQOH
            },
            {
                id: _0x4e76de.LSllL,
                text: _0x4e76de.LSllL
            },
            {
                id: _0x4e76de.hMHJm,
                text: _0x4e76de.hMHJm
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x4e76de.Usvdn
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
                from: _0x4e76de.HiMqf,
                to: 'a',
                showStartArrow: _0x1e1eb8,
                showEndArrow: _0x1f6252,
                color: _0x6e6a71
            },
            {
                from: _0x4e76de.EYUQr,
                to: 'a',
                showStartArrow: _0x1e1eb8,
                showEndArrow: _0x1f6252,
                color: _0x6e6a71
            },
            {
                from: _0x4e76de.AfQOH,
                to: _0x4e76de.EYUQr,
                showStartArrow: _0x1e1eb8,
                showEndArrow: _0x1f6252,
                color: _0x6e6a71
            },
            {
                from: _0x4e76de.LSllL,
                to: _0x4e76de.EYUQr,
                showStartArrow: _0x1e1eb8,
                showEndArrow: _0x1f6252,
                color: _0x6e6a71
            },
            {
                from: _0x4e76de.hMHJm,
                to: 'a',
                showStartArrow: _0x1e1eb8,
                showEndArrow: _0x1f6252,
                color: _0x6e6a71
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
    _0x351364.setOptions(_0x26f7cf, _0x52ebd8 => {
        this.showSeeksGraph(_0x351364, _0x4571d7);
    });
};
h[_0x3b1c('0x39')][_0x3b1c('0x4c')] = function (_0x197998, _0x5b971a) {
    _0x197998.setJsonData(_0x5b971a, _0x5bb802 => {
        _0x5bb802.focusNodeById('a');
    });
};
h[_0x3b1c('0x39')][_0x3b1c('0x30')] = function (_0x23d5a7, _0x376ed2) {
    var _0x3f78f7 = { QytSs: _0x3b1c('0x4d') };
    console.log(_0x3f78f7.QytSs, _0x23d5a7);
};
h[_0x3b1c('0x39')][_0x3b1c('0x31')] = function (_0x15330b, _0x2e8f6, _0x4b980f) {
    var _0x225981 = { psCbT: _0x3b1c('0x4e') };
    console.log(_0x225981.psCbT, _0x15330b);
};
var p = _0x5d3c9a(h, c, d, !0x1, f, null, null, null);
function f(_0x13fb5d) {
    for (let _0xdcd804 in n)
        this[_0xdcd804] = n[_0xdcd804];
}
const m = function () {
    return p[_0x3b1c('0x4f')];
}();
export {
    m as default
};