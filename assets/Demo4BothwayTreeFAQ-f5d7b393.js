
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3f7d = [
    '25px',
    'mpbgY',
    'FBwPY',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'tKhFq',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'RYnpo',
    'zkdEt',
    'eUqDc',
    'showStartArrow=true',
    'aKAUV',
    'showEndArrow=false',
    'esrPk',
    'tFNWq',
    '以此来让上方线条看起来是反向展示。',
    'nreAi',
    'MErBt',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'BXiXM',
    'QFSyV',
    'bdBMA',
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
    'eFCwo',
    'oOwhV',
    'div',
    'emOXN',
    'el-row',
    'hcYXM',
    'uvYVD',
    'el-col',
    'JgJzm',
    'YIiaL',
    'calc(100vh\x20-\x20100px)',
    'QgyVO',
    'UkjqP',
    'RelationGraph',
    'dIMYB',
    'graphRef1',
    'hmgnh',
    'BvAyq',
    'NSToQ',
    '#efefef\x20solid\x201px',
    'zbJZr',
    '15px',
    'TLxYF',
    '14px',
    'eukoy'
];
(function (_0x458ee4, _0x4c63f8) {
    var _0x2d6c13 = function (_0x324d0b) {
        while (--_0x324d0b) {
            _0x458ee4['push'](_0x458ee4['shift']());
        }
    };
    _0x2d6c13(++_0x4c63f8);
}(_0x3f7d, 0x8b));
var _0x2968 = function (_0x1dbd7a, _0x7f369a) {
    _0x1dbd7a = _0x1dbd7a - 0x0;
    var _0x51f981 = _0x3f7d[_0x1dbd7a];
    return _0x51f981;
};
import { n as _0x344ef6 } from './index-910d4d84.js';
var c = function () {
        var _0x4c7dd2 = {};
        _0x4c7dd2[_0x2968('0x0')] = function (_0x4d674e, _0x193b36, _0x581dd3, _0x685449) {
            return _0x4d674e(_0x193b36, _0x581dd3, _0x685449);
        };
        _0x4c7dd2[_0x2968('0x1')] = _0x2968('0x2');
        _0x4c7dd2[_0x2968('0x3')] = _0x2968('0x4');
        _0x4c7dd2[_0x2968('0x5')] = function (_0x39d753, _0x5f589b, _0x29f1cb, _0xbd1660) {
            return _0x39d753(_0x5f589b, _0x29f1cb, _0xbd1660);
        };
        _0x4c7dd2[_0x2968('0x6')] = _0x2968('0x7');
        _0x4c7dd2[_0x2968('0x8')] = function (_0x497baa, _0x30d1d2, _0xf0b5c0, _0x34e296, _0x28834d) {
            return _0x497baa(_0x30d1d2, _0xf0b5c0, _0x34e296, _0x28834d);
        };
        _0x4c7dd2[_0x2968('0x9')] = _0x2968('0xa');
        _0x4c7dd2[_0x2968('0xb')] = function (_0x54141b, _0x3b6005, _0x1245a1) {
            return _0x54141b(_0x3b6005, _0x1245a1);
        };
        _0x4c7dd2[_0x2968('0xc')] = _0x2968('0xd');
        _0x4c7dd2[_0x2968('0xe')] = _0x2968('0xf');
        _0x4c7dd2[_0x2968('0x10')] = function (_0x1fe191, _0x5e3a59, _0xad0cf5, _0x2e9a92) {
            return _0x1fe191(_0x5e3a59, _0xad0cf5, _0x2e9a92);
        };
        _0x4c7dd2[_0x2968('0x11')] = function (_0x2e5ff8, _0x149971, _0x204c30, _0x401232) {
            return _0x2e5ff8(_0x149971, _0x204c30, _0x401232);
        };
        _0x4c7dd2[_0x2968('0x12')] = _0x2968('0x13');
        _0x4c7dd2[_0x2968('0x14')] = _0x2968('0x15');
        _0x4c7dd2[_0x2968('0x16')] = _0x2968('0x17');
        _0x4c7dd2[_0x2968('0x18')] = _0x2968('0x19');
        _0x4c7dd2[_0x2968('0x1a')] = function (_0x3da826, _0x2ace73, _0x56bb4f) {
            return _0x3da826(_0x2ace73, _0x56bb4f);
        };
        _0x4c7dd2[_0x2968('0x1b')] = _0x2968('0x1c');
        _0x4c7dd2[_0x2968('0x1d')] = _0x2968('0x1e');
        _0x4c7dd2[_0x2968('0x1f')] = function (_0x2d9b87, _0x54c042, _0x2d14e5) {
            return _0x2d9b87(_0x54c042, _0x2d14e5);
        };
        _0x4c7dd2[_0x2968('0x20')] = function (_0x2a68a6, _0x5e0abb, _0x324145) {
            return _0x2a68a6(_0x5e0abb, _0x324145);
        };
        _0x4c7dd2[_0x2968('0x21')] = _0x2968('0x22');
        _0x4c7dd2[_0x2968('0x23')] = _0x2968('0x24');
        _0x4c7dd2[_0x2968('0x25')] = function (_0x1d3eaa, _0x34421d, _0x14bcf3) {
            return _0x1d3eaa(_0x34421d, _0x14bcf3);
        };
        _0x4c7dd2[_0x2968('0x26')] = _0x2968('0x27');
        _0x4c7dd2[_0x2968('0x28')] = function (_0x502459, _0x5469fb, _0x32c90b) {
            return _0x502459(_0x5469fb, _0x32c90b);
        };
        _0x4c7dd2[_0x2968('0x29')] = _0x2968('0x2a');
        _0x4c7dd2[_0x2968('0x2b')] = function (_0x3cf24f, _0x25a89b, _0x147003, _0x581a41) {
            return _0x3cf24f(_0x25a89b, _0x147003, _0x581a41);
        };
        _0x4c7dd2[_0x2968('0x2c')] = function (_0x261ce3, _0x277c78, _0x4b4643, _0x20ddac, _0x1d9576) {
            return _0x261ce3(_0x277c78, _0x4b4643, _0x20ddac, _0x1d9576);
        };
        _0x4c7dd2[_0x2968('0x2d')] = _0x2968('0x2e');
        var _0x432d6a = this, _0x42d59a = _0x432d6a[_0x2968('0x2f')], _0x36efa6 = _0x432d6a[_0x2968('0x30')]['_c'] || _0x42d59a;
        return _0x4c7dd2[_0x2968('0x0')](_0x36efa6, _0x4c7dd2[_0x2968('0x1')], [_0x4c7dd2[_0x2968('0x0')](_0x36efa6, _0x4c7dd2[_0x2968('0x3')], [
                _0x4c7dd2[_0x2968('0x5')](_0x36efa6, _0x4c7dd2[_0x2968('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x4c7dd2[_0x2968('0x8')](_0x36efa6, _0x4c7dd2[_0x2968('0x1')], { 'staticStyle': { 'height': _0x4c7dd2[_0x2968('0x9')] } }, [_0x4c7dd2[_0x2968('0xb')](_0x36efa6, _0x4c7dd2[_0x2968('0xc')], {
                            'ref': _0x4c7dd2[_0x2968('0xe')],
                            'attrs': {
                                'options': _0x432d6a[_0x2968('0x31')],
                                'on-node-click': _0x432d6a[_0x2968('0x32')],
                                'on-line-click': _0x432d6a[_0x2968('0x33')]
                            }
                        })], 0x1)]),
                _0x4c7dd2[_0x2968('0x10')](_0x36efa6, _0x4c7dd2[_0x2968('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x4c7dd2[_0x2968('0x11')](_0x36efa6, _0x4c7dd2[_0x2968('0x1')], {
                        'staticStyle': {
                            'height': _0x4c7dd2[_0x2968('0x9')],
                            'border-left': _0x4c7dd2[_0x2968('0x12')],
                            'border-right': _0x4c7dd2[_0x2968('0x12')],
                            'padding': _0x4c7dd2[_0x2968('0x14')],
                            'font-size': _0x4c7dd2[_0x2968('0x16')],
                            'line-height': _0x4c7dd2[_0x2968('0x18')]
                        }
                    }, [_0x4c7dd2[_0x2968('0x1a')](_0x36efa6, 'ul', [
                            _0x4c7dd2[_0x2968('0x1a')](_0x36efa6, 'li', [_0x432d6a['_v'](_0x4c7dd2[_0x2968('0x1b')])]),
                            _0x4c7dd2[_0x2968('0x1a')](_0x36efa6, 'li', [_0x432d6a['_v'](_0x4c7dd2[_0x2968('0x1d')])]),
                            _0x4c7dd2[_0x2968('0x1f')](_0x36efa6, 'ul', [
                                _0x4c7dd2[_0x2968('0x20')](_0x36efa6, 'li', [_0x432d6a['_v'](_0x4c7dd2[_0x2968('0x21')])]),
                                _0x4c7dd2[_0x2968('0x20')](_0x36efa6, 'li', [_0x432d6a['_v'](_0x4c7dd2[_0x2968('0x23')])])
                            ]),
                            _0x4c7dd2[_0x2968('0x25')](_0x36efa6, 'li', [_0x432d6a['_v'](_0x4c7dd2[_0x2968('0x26')])]),
                            _0x4c7dd2[_0x2968('0x28')](_0x36efa6, 'li', [_0x432d6a['_v'](_0x4c7dd2[_0x2968('0x29')])])
                        ])])]),
                _0x4c7dd2[_0x2968('0x2b')](_0x36efa6, _0x4c7dd2[_0x2968('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x4c7dd2[_0x2968('0x2c')](_0x36efa6, _0x4c7dd2[_0x2968('0x1')], { 'staticStyle': { 'height': _0x4c7dd2[_0x2968('0x9')] } }, [_0x4c7dd2[_0x2968('0x28')](_0x36efa6, _0x4c7dd2[_0x2968('0xc')], {
                            'ref': _0x4c7dd2[_0x2968('0x2d')],
                            'attrs': {
                                'options': _0x432d6a[_0x2968('0x34')],
                                'on-node-click': _0x432d6a[_0x2968('0x32')],
                                'on-line-click': _0x432d6a[_0x2968('0x33')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x2968('0x35')] = _0x2968('0x36');
h[_0x2968('0x37')] = {};
h[_0x2968('0x38')] = function () {
    var _0x43b02b = { Tzegn: _0x2968('0x39') };
    return {
        currentCase: _0x43b02b.Tzegn,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x2968('0x3a')] = function () {
    this.show();
};
h[_0x2968('0x3b')] = {};
h[_0x2968('0x3b')][_0x2968('0x3c')] = function (_0x274c1f) {
    var _0x35e59a = {
        INIpy: _0x2968('0x3d'),
        KWvyz: _0x2968('0x3e')
    };
    const _0x2182c2 = this.$refs.graphRef1;
    this.resetGraph(_0x2182c2, _0x35e59a.INIpy);
    const _0x41c314 = this.$refs.graphRef2;
    this.resetGraph(_0x41c314, _0x35e59a.KWvyz);
};
h[_0x2968('0x3b')][_0x2968('0x3f')] = function (_0x532b18, _0x40abcc) {
    var _0x50e842 = {
        buFST: _0x2968('0x40'),
        Itbtn: _0x2968('0x41'),
        mePBB: _0x2968('0x42'),
        RdSdp: _0x2968('0x43'),
        YZbzR: _0x2968('0x44'),
        oYPwM: _0x2968('0x45'),
        hsDtr: function (_0x103e9f, _0x5605e8) {
            return _0x103e9f === _0x5605e8;
        },
        MRhby: _0x2968('0x3e'),
        LeOdG: _0x2968('0x46'),
        uYgLN: _0x2968('0x47'),
        oyaCK: _0x2968('0x48'),
        uplMz: _0x2968('0x49'),
        MPYmW: _0x2968('0x4a'),
        eGShq: _0x2968('0x4b'),
        shgIE: _0x2968('0x4c'),
        cRzzO: _0x2968('0x4d')
    };
    const _0x221863 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x50e842.buFST,
                from: _0x50e842.Itbtn,
                max_per_width: _0x50e842.mePBB,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x50e842.RdSdp,
        defaultNodeColor: _0x50e842.YZbzR
    };
    _0x221863.layouts[0x0].from = _0x50e842.oYPwM, _0x221863.layouts[0x0].min_per_width = 0x46, _0x221863.layouts[0x0].max_per_width = 0xc8, _0x221863.layouts[0x0].min_per_height = 0xc8, _0x221863.layouts[0x0].max_per_height = 0x190, _0x221863.defaultNodeWidth = 0x1e, _0x221863.defaultNodeHeight = 0x64, _0x221863.defaultJunctionPoint = 'tb';
    let _0x14b11c, _0x37c909, _0x3faa8f;
    _0x50e842.hsDtr(_0x40abcc, _0x50e842.MRhby) && (_0x14b11c = !0x0, _0x37c909 = !0x1, _0x3faa8f = _0x50e842.LeOdG);
    const _0x578832 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x50e842.uYgLN
            },
            {
                id: _0x50e842.oyaCK,
                text: _0x50e842.oyaCK
            },
            {
                id: _0x50e842.uplMz,
                text: _0x50e842.uplMz,
                expandHolderPosition: _0x50e842.oYPwM
            },
            {
                id: _0x50e842.MPYmW,
                text: _0x50e842.MPYmW
            },
            {
                id: _0x50e842.eGShq,
                text: _0x50e842.eGShq
            },
            {
                id: _0x50e842.shgIE,
                text: _0x50e842.shgIE
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x50e842.cRzzO
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
                from: _0x50e842.oyaCK,
                to: 'a',
                showStartArrow: _0x14b11c,
                showEndArrow: _0x37c909,
                color: _0x3faa8f
            },
            {
                from: _0x50e842.uplMz,
                to: 'a',
                showStartArrow: _0x14b11c,
                showEndArrow: _0x37c909,
                color: _0x3faa8f
            },
            {
                from: _0x50e842.MPYmW,
                to: _0x50e842.uplMz,
                showStartArrow: _0x14b11c,
                showEndArrow: _0x37c909,
                color: _0x3faa8f
            },
            {
                from: _0x50e842.eGShq,
                to: _0x50e842.uplMz,
                showStartArrow: _0x14b11c,
                showEndArrow: _0x37c909,
                color: _0x3faa8f
            },
            {
                from: _0x50e842.shgIE,
                to: 'a',
                showStartArrow: _0x14b11c,
                showEndArrow: _0x37c909,
                color: _0x3faa8f
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
    _0x532b18.setOptions(_0x221863, _0x2c5f44 => {
        this.showSeeksGraph(_0x532b18, _0x578832);
    });
};
h[_0x2968('0x3b')][_0x2968('0x4e')] = function (_0x2e02c8, _0x28ac6b) {
    _0x2e02c8.setJsonData(_0x28ac6b, _0x2845c3 => {
        _0x2845c3.focusNodeById('a');
    });
};
h[_0x2968('0x3b')][_0x2968('0x32')] = function (_0x5937a6, _0x255ee5) {
    var _0x321ef5 = { YMYzp: _0x2968('0x4f') };
    console.log(_0x321ef5.YMYzp, _0x5937a6);
};
h[_0x2968('0x3b')][_0x2968('0x33')] = function (_0x54214a, _0x124999, _0x46dfaf) {
    var _0x4678cc = { DQeMz: _0x2968('0x50') };
    console.log(_0x4678cc.DQeMz, _0x54214a);
};
var p = _0x344ef6(h, c, d, !0x1, f, null, null, null);
function f(_0x23df58) {
    for (let _0x2a589 in n)
        this[_0x2a589] = n[_0x2a589];
}
const m = function () {
    return p[_0x2968('0x51')];
}();
export {
    m as default
};