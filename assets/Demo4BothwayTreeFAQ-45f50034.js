
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5225 = [
    'LtqAl',
    '15px',
    'YYNoe',
    '14px',
    'rPyDE',
    '25px',
    'KqlGj',
    'vQcgt',
    'EPGzE',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'wIczR',
    'eLXjS',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'euUkV',
    'KUsNQ',
    'kAemB',
    'showStartArrow=true',
    'IBbtX',
    'showEndArrow=false',
    'kQBPr',
    '以此来让上方线条看起来是反向展示。',
    'IwxiV',
    'hqmKk',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'ipsKz',
    'NTDlG',
    'zHmog',
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
    'enlFl',
    'XHGyf',
    'div',
    'IWFZp',
    'el-row',
    'mPzYY',
    'btDZP',
    'el-col',
    'zjShw',
    'GTURD',
    'calc(100vh\x20-\x20100px)',
    'pfYBH',
    'vKrpx',
    'RelationGraph',
    'CqLoY',
    'graphRef1',
    'wViTr',
    'WfVLU',
    '#efefef\x20solid\x201px'
];
(function (_0x5d2b6e, _0xb7f18a) {
    var _0x52ed0b = function (_0x2dc1b5) {
        while (--_0x2dc1b5) {
            _0x5d2b6e['push'](_0x5d2b6e['shift']());
        }
    };
    _0x52ed0b(++_0xb7f18a);
}(_0x5225, 0x91));
var _0x45a0 = function (_0x37c9ec, _0xd5148d) {
    _0x37c9ec = _0x37c9ec - 0x0;
    var _0x51087c = _0x5225[_0x37c9ec];
    return _0x51087c;
};
import { n as _0x3400e1 } from './index-a776829b.js';
var c = function () {
        var _0xe8907c = {};
        _0xe8907c[_0x45a0('0x0')] = function (_0x3cacf3, _0x422502, _0x545e91, _0x2c72e6) {
            return _0x3cacf3(_0x422502, _0x545e91, _0x2c72e6);
        };
        _0xe8907c[_0x45a0('0x1')] = _0x45a0('0x2');
        _0xe8907c[_0x45a0('0x3')] = _0x45a0('0x4');
        _0xe8907c[_0x45a0('0x5')] = function (_0x46e6df, _0x3d7c66, _0x1023e6, _0x50909d) {
            return _0x46e6df(_0x3d7c66, _0x1023e6, _0x50909d);
        };
        _0xe8907c[_0x45a0('0x6')] = _0x45a0('0x7');
        _0xe8907c[_0x45a0('0x8')] = function (_0x2893d2, _0x4109ae, _0x3ec030, _0x2200a8, _0x322810) {
            return _0x2893d2(_0x4109ae, _0x3ec030, _0x2200a8, _0x322810);
        };
        _0xe8907c[_0x45a0('0x9')] = _0x45a0('0xa');
        _0xe8907c[_0x45a0('0xb')] = function (_0x3026e9, _0xceb8c7, _0x44bfba) {
            return _0x3026e9(_0xceb8c7, _0x44bfba);
        };
        _0xe8907c[_0x45a0('0xc')] = _0x45a0('0xd');
        _0xe8907c[_0x45a0('0xe')] = _0x45a0('0xf');
        _0xe8907c[_0x45a0('0x10')] = function (_0x321fed, _0x5b4802, _0xdd7822, _0x2530a9) {
            return _0x321fed(_0x5b4802, _0xdd7822, _0x2530a9);
        };
        _0xe8907c[_0x45a0('0x11')] = _0x45a0('0x12');
        _0xe8907c[_0x45a0('0x13')] = _0x45a0('0x14');
        _0xe8907c[_0x45a0('0x15')] = _0x45a0('0x16');
        _0xe8907c[_0x45a0('0x17')] = _0x45a0('0x18');
        _0xe8907c[_0x45a0('0x19')] = function (_0x537b66, _0x42d58e, _0x4db778) {
            return _0x537b66(_0x42d58e, _0x4db778);
        };
        _0xe8907c[_0x45a0('0x1a')] = function (_0x376d03, _0x3b69b5, _0x3170e1) {
            return _0x376d03(_0x3b69b5, _0x3170e1);
        };
        _0xe8907c[_0x45a0('0x1b')] = _0x45a0('0x1c');
        _0xe8907c[_0x45a0('0x1d')] = function (_0x4ec60b, _0x2aef26, _0x545ead) {
            return _0x4ec60b(_0x2aef26, _0x545ead);
        };
        _0xe8907c[_0x45a0('0x1e')] = _0x45a0('0x1f');
        _0xe8907c[_0x45a0('0x20')] = function (_0x110bd6, _0x5dfec7, _0x4c801d) {
            return _0x110bd6(_0x5dfec7, _0x4c801d);
        };
        _0xe8907c[_0x45a0('0x21')] = function (_0x184a00, _0x47476f, _0x22aca1) {
            return _0x184a00(_0x47476f, _0x22aca1);
        };
        _0xe8907c[_0x45a0('0x22')] = _0x45a0('0x23');
        _0xe8907c[_0x45a0('0x24')] = _0x45a0('0x25');
        _0xe8907c[_0x45a0('0x26')] = _0x45a0('0x27');
        _0xe8907c[_0x45a0('0x28')] = function (_0x24bf8d, _0x9c8bec, _0x42d15b) {
            return _0x24bf8d(_0x9c8bec, _0x42d15b);
        };
        _0xe8907c[_0x45a0('0x29')] = _0x45a0('0x2a');
        _0xe8907c[_0x45a0('0x2b')] = function (_0x336175, _0x1359ac, _0x1c9c34, _0x439e89) {
            return _0x336175(_0x1359ac, _0x1c9c34, _0x439e89);
        };
        _0xe8907c[_0x45a0('0x2c')] = function (_0x4df023, _0x4dd68f, _0x54a75f) {
            return _0x4df023(_0x4dd68f, _0x54a75f);
        };
        _0xe8907c[_0x45a0('0x2d')] = _0x45a0('0x2e');
        var _0xc68567 = this, _0x5665ac = _0xc68567[_0x45a0('0x2f')], _0x1c7ffa = _0xc68567[_0x45a0('0x30')]['_c'] || _0x5665ac;
        return _0xe8907c[_0x45a0('0x0')](_0x1c7ffa, _0xe8907c[_0x45a0('0x1')], [_0xe8907c[_0x45a0('0x0')](_0x1c7ffa, _0xe8907c[_0x45a0('0x3')], [
                _0xe8907c[_0x45a0('0x5')](_0x1c7ffa, _0xe8907c[_0x45a0('0x6')], { 'attrs': { 'span': 0x9 } }, [_0xe8907c[_0x45a0('0x8')](_0x1c7ffa, _0xe8907c[_0x45a0('0x1')], { 'staticStyle': { 'height': _0xe8907c[_0x45a0('0x9')] } }, [_0xe8907c[_0x45a0('0xb')](_0x1c7ffa, _0xe8907c[_0x45a0('0xc')], {
                            'ref': _0xe8907c[_0x45a0('0xe')],
                            'attrs': {
                                'options': _0xc68567[_0x45a0('0x31')],
                                'on-node-click': _0xc68567[_0x45a0('0x32')],
                                'on-line-click': _0xc68567[_0x45a0('0x33')]
                            }
                        })], 0x1)]),
                _0xe8907c[_0x45a0('0x10')](_0x1c7ffa, _0xe8907c[_0x45a0('0x6')], { 'attrs': { 'span': 0x6 } }, [_0xe8907c[_0x45a0('0x10')](_0x1c7ffa, _0xe8907c[_0x45a0('0x1')], {
                        'staticStyle': {
                            'height': _0xe8907c[_0x45a0('0x9')],
                            'border-left': _0xe8907c[_0x45a0('0x11')],
                            'border-right': _0xe8907c[_0x45a0('0x11')],
                            'padding': _0xe8907c[_0x45a0('0x13')],
                            'font-size': _0xe8907c[_0x45a0('0x15')],
                            'line-height': _0xe8907c[_0x45a0('0x17')]
                        }
                    }, [_0xe8907c[_0x45a0('0x19')](_0x1c7ffa, 'ul', [
                            _0xe8907c[_0x45a0('0x1a')](_0x1c7ffa, 'li', [_0xc68567['_v'](_0xe8907c[_0x45a0('0x1b')])]),
                            _0xe8907c[_0x45a0('0x1d')](_0x1c7ffa, 'li', [_0xc68567['_v'](_0xe8907c[_0x45a0('0x1e')])]),
                            _0xe8907c[_0x45a0('0x20')](_0x1c7ffa, 'ul', [
                                _0xe8907c[_0x45a0('0x21')](_0x1c7ffa, 'li', [_0xc68567['_v'](_0xe8907c[_0x45a0('0x22')])]),
                                _0xe8907c[_0x45a0('0x21')](_0x1c7ffa, 'li', [_0xc68567['_v'](_0xe8907c[_0x45a0('0x24')])])
                            ]),
                            _0xe8907c[_0x45a0('0x21')](_0x1c7ffa, 'li', [_0xc68567['_v'](_0xe8907c[_0x45a0('0x26')])]),
                            _0xe8907c[_0x45a0('0x28')](_0x1c7ffa, 'li', [_0xc68567['_v'](_0xe8907c[_0x45a0('0x29')])])
                        ])])]),
                _0xe8907c[_0x45a0('0x2b')](_0x1c7ffa, _0xe8907c[_0x45a0('0x6')], { 'attrs': { 'span': 0x9 } }, [_0xe8907c[_0x45a0('0x8')](_0x1c7ffa, _0xe8907c[_0x45a0('0x1')], { 'staticStyle': { 'height': _0xe8907c[_0x45a0('0x9')] } }, [_0xe8907c[_0x45a0('0x2c')](_0x1c7ffa, _0xe8907c[_0x45a0('0xc')], {
                            'ref': _0xe8907c[_0x45a0('0x2d')],
                            'attrs': {
                                'options': _0xc68567[_0x45a0('0x34')],
                                'on-node-click': _0xc68567[_0x45a0('0x32')],
                                'on-line-click': _0xc68567[_0x45a0('0x33')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x45a0('0x35')] = _0x45a0('0x36');
h[_0x45a0('0x37')] = {};
h[_0x45a0('0x38')] = function () {
    var _0x247adb = { PGdWC: _0x45a0('0x39') };
    return {
        currentCase: _0x247adb.PGdWC,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x45a0('0x3a')] = function () {
    this.show();
};
h[_0x45a0('0x3b')] = {};
h[_0x45a0('0x3b')][_0x45a0('0x3c')] = function (_0x2f4967) {
    var _0xc46a5c = {
        KyKsT: _0x45a0('0x3d'),
        NDLfL: _0x45a0('0x3e')
    };
    const _0x3ea9bd = this.$refs.graphRef1;
    this.resetGraph(_0x3ea9bd, _0xc46a5c.KyKsT);
    const _0x473254 = this.$refs.graphRef2;
    this.resetGraph(_0x473254, _0xc46a5c.NDLfL);
};
h[_0x45a0('0x3b')][_0x45a0('0x3f')] = function (_0xab2c0f, _0x3a7b8c) {
    var _0x481e54 = {
        UYrPZ: _0x45a0('0x40'),
        sskBJ: _0x45a0('0x41'),
        CrFEN: _0x45a0('0x42'),
        Ewrrd: _0x45a0('0x43'),
        YmhaC: _0x45a0('0x44'),
        DQCQf: _0x45a0('0x45'),
        SdVrn: function (_0x3b5ba7, _0x2f9a71) {
            return _0x3b5ba7 === _0x2f9a71;
        },
        GaCKV: _0x45a0('0x3e'),
        hWsVC: _0x45a0('0x46'),
        nGnLj: _0x45a0('0x47'),
        KJPKU: _0x45a0('0x48'),
        bTkBi: _0x45a0('0x49'),
        KeAWG: _0x45a0('0x4a'),
        epiJH: _0x45a0('0x4b'),
        iATbU: _0x45a0('0x4c'),
        mAvHt: _0x45a0('0x4d')
    };
    const _0x28758f = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x481e54.UYrPZ,
                from: _0x481e54.sskBJ,
                max_per_width: _0x481e54.CrFEN,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x481e54.Ewrrd,
        defaultNodeColor: _0x481e54.YmhaC
    };
    _0x28758f.layouts[0x0].from = _0x481e54.DQCQf, _0x28758f.layouts[0x0].min_per_width = 0x46, _0x28758f.layouts[0x0].max_per_width = 0xc8, _0x28758f.layouts[0x0].min_per_height = 0xc8, _0x28758f.layouts[0x0].max_per_height = 0x190, _0x28758f.defaultNodeWidth = 0x1e, _0x28758f.defaultNodeHeight = 0x64, _0x28758f.defaultJunctionPoint = 'tb';
    let _0x4fe9e3, _0x3ac27d, _0x3b3be6;
    _0x481e54.SdVrn(_0x3a7b8c, _0x481e54.GaCKV) && (_0x4fe9e3 = !0x0, _0x3ac27d = !0x1, _0x3b3be6 = _0x481e54.hWsVC);
    const _0x2b1c59 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x481e54.nGnLj
            },
            {
                id: _0x481e54.KJPKU,
                text: _0x481e54.KJPKU
            },
            {
                id: _0x481e54.bTkBi,
                text: _0x481e54.bTkBi,
                expandHolderPosition: _0x481e54.DQCQf
            },
            {
                id: _0x481e54.KeAWG,
                text: _0x481e54.KeAWG
            },
            {
                id: _0x481e54.epiJH,
                text: _0x481e54.epiJH
            },
            {
                id: _0x481e54.iATbU,
                text: _0x481e54.iATbU
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x481e54.mAvHt
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
                from: _0x481e54.KJPKU,
                to: 'a',
                showStartArrow: _0x4fe9e3,
                showEndArrow: _0x3ac27d,
                color: _0x3b3be6
            },
            {
                from: _0x481e54.bTkBi,
                to: 'a',
                showStartArrow: _0x4fe9e3,
                showEndArrow: _0x3ac27d,
                color: _0x3b3be6
            },
            {
                from: _0x481e54.KeAWG,
                to: _0x481e54.bTkBi,
                showStartArrow: _0x4fe9e3,
                showEndArrow: _0x3ac27d,
                color: _0x3b3be6
            },
            {
                from: _0x481e54.epiJH,
                to: _0x481e54.bTkBi,
                showStartArrow: _0x4fe9e3,
                showEndArrow: _0x3ac27d,
                color: _0x3b3be6
            },
            {
                from: _0x481e54.iATbU,
                to: 'a',
                showStartArrow: _0x4fe9e3,
                showEndArrow: _0x3ac27d,
                color: _0x3b3be6
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
    _0xab2c0f.setOptions(_0x28758f, _0x1e329f => {
        this.showSeeksGraph(_0xab2c0f, _0x2b1c59);
    });
};
h[_0x45a0('0x3b')][_0x45a0('0x4e')] = function (_0x177a77, _0x3ebd66) {
    _0x177a77.setJsonData(_0x3ebd66, _0x5550ec => {
        _0x5550ec.focusNodeById('a');
    });
};
h[_0x45a0('0x3b')][_0x45a0('0x32')] = function (_0xe7c501, _0x2ce0c5) {
    var _0x266a55 = { HrUWC: _0x45a0('0x4f') };
    console.log(_0x266a55.HrUWC, _0xe7c501);
};
h[_0x45a0('0x3b')][_0x45a0('0x33')] = function (_0xfcef8d, _0x11189d, _0x45935d) {
    var _0x276781 = { kRkCU: _0x45a0('0x50') };
    console.log(_0x276781.kRkCU, _0xfcef8d);
};
var p = _0x3400e1(h, c, d, !0x1, f, null, null, null);
function f(_0x57bdb3) {
    for (let _0x3d48f7 in n)
        this[_0x3d48f7] = n[_0x3d48f7];
}
const m = function () {
    return p[_0x45a0('0x51')];
}();
export {
    m as default
};