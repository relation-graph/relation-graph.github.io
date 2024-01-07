
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x204c = [
    'RelationGraph',
    'hJmKY',
    'graphRef1',
    'qxHCt',
    '#efefef\x20solid\x201px',
    'LrVMz',
    '15px',
    'BGtlq',
    '14px',
    'YKWqX',
    '25px',
    'QmYyk',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'XjqmY',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'gtcPi',
    'PQsya',
    'eYujG',
    'showStartArrow=true',
    'CTNsK',
    'showEndArrow=false',
    'iUoRK',
    'mtLTD',
    '以此来让上方线条看起来是反向展示。',
    'Hmjfp',
    'iZBkb',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'RNDLG',
    'EPLFu',
    'pxUuH',
    'zXAAZ',
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
    'OMdux',
    'doyyC',
    'div',
    'OmPPS',
    'el-row',
    'mkDza',
    'bbDAd',
    'el-col',
    'YwVbs',
    'mOYXI',
    'calc(100vh\x20-\x20100px)',
    'fSRpg',
    'BFeZL'
];
(function (_0x5a8baf, _0x5865ee) {
    var _0x2c3b55 = function (_0x353292) {
        while (--_0x353292) {
            _0x5a8baf['push'](_0x5a8baf['shift']());
        }
    };
    _0x2c3b55(++_0x5865ee);
}(_0x204c, 0xe3));
var _0x3f61 = function (_0x33a09a, _0x4dd9df) {
    _0x33a09a = _0x33a09a - 0x0;
    var _0x5dcc2a = _0x204c[_0x33a09a];
    return _0x5dcc2a;
};
import { n as _0x40b137 } from './index-973ba694.js';
var c = function () {
        var _0x5ca9f1 = {};
        _0x5ca9f1[_0x3f61('0x0')] = function (_0x572b8f, _0x53e28f, _0x136e37, _0x31a51d) {
            return _0x572b8f(_0x53e28f, _0x136e37, _0x31a51d);
        };
        _0x5ca9f1[_0x3f61('0x1')] = _0x3f61('0x2');
        _0x5ca9f1[_0x3f61('0x3')] = _0x3f61('0x4');
        _0x5ca9f1[_0x3f61('0x5')] = function (_0x45ff2b, _0x2798e9, _0x5cf6d3, _0x152ce7) {
            return _0x45ff2b(_0x2798e9, _0x5cf6d3, _0x152ce7);
        };
        _0x5ca9f1[_0x3f61('0x6')] = _0x3f61('0x7');
        _0x5ca9f1[_0x3f61('0x8')] = function (_0x1e15bf, _0x25e397, _0x4d9ba1, _0x1e05b2, _0x1d7f30) {
            return _0x1e15bf(_0x25e397, _0x4d9ba1, _0x1e05b2, _0x1d7f30);
        };
        _0x5ca9f1[_0x3f61('0x9')] = _0x3f61('0xa');
        _0x5ca9f1[_0x3f61('0xb')] = function (_0x3c49b7, _0x25ae71, _0x2b8beb) {
            return _0x3c49b7(_0x25ae71, _0x2b8beb);
        };
        _0x5ca9f1[_0x3f61('0xc')] = _0x3f61('0xd');
        _0x5ca9f1[_0x3f61('0xe')] = _0x3f61('0xf');
        _0x5ca9f1[_0x3f61('0x10')] = _0x3f61('0x11');
        _0x5ca9f1[_0x3f61('0x12')] = _0x3f61('0x13');
        _0x5ca9f1[_0x3f61('0x14')] = _0x3f61('0x15');
        _0x5ca9f1[_0x3f61('0x16')] = _0x3f61('0x17');
        _0x5ca9f1[_0x3f61('0x18')] = _0x3f61('0x19');
        _0x5ca9f1[_0x3f61('0x1a')] = _0x3f61('0x1b');
        _0x5ca9f1[_0x3f61('0x1c')] = function (_0x5000fb, _0x1e0665, _0x345f9e) {
            return _0x5000fb(_0x1e0665, _0x345f9e);
        };
        _0x5ca9f1[_0x3f61('0x1d')] = function (_0x36d8c9, _0x2b0949, _0x1b2205) {
            return _0x36d8c9(_0x2b0949, _0x1b2205);
        };
        _0x5ca9f1[_0x3f61('0x1e')] = _0x3f61('0x1f');
        _0x5ca9f1[_0x3f61('0x20')] = _0x3f61('0x21');
        _0x5ca9f1[_0x3f61('0x22')] = function (_0x209d33, _0x35ec67, _0x4de405) {
            return _0x209d33(_0x35ec67, _0x4de405);
        };
        _0x5ca9f1[_0x3f61('0x23')] = _0x3f61('0x24');
        _0x5ca9f1[_0x3f61('0x25')] = function (_0x3035fc, _0xe60111, _0x56e01a) {
            return _0x3035fc(_0xe60111, _0x56e01a);
        };
        _0x5ca9f1[_0x3f61('0x26')] = _0x3f61('0x27');
        _0x5ca9f1[_0x3f61('0x28')] = function (_0x181b83, _0x1be522, _0xfaa94c, _0x47512d) {
            return _0x181b83(_0x1be522, _0xfaa94c, _0x47512d);
        };
        _0x5ca9f1[_0x3f61('0x29')] = function (_0x1fa899, _0x3375b5, _0x3dd1cb, _0x376e55, _0x5152c9) {
            return _0x1fa899(_0x3375b5, _0x3dd1cb, _0x376e55, _0x5152c9);
        };
        _0x5ca9f1[_0x3f61('0x2a')] = function (_0x208227, _0xf320c0, _0x5bab8f) {
            return _0x208227(_0xf320c0, _0x5bab8f);
        };
        _0x5ca9f1[_0x3f61('0x2b')] = _0x3f61('0x2c');
        var _0x413e67 = this, _0xbcaf35 = _0x413e67[_0x3f61('0x2d')], _0x8f1e05 = _0x413e67[_0x3f61('0x2e')]['_c'] || _0xbcaf35;
        return _0x5ca9f1[_0x3f61('0x0')](_0x8f1e05, _0x5ca9f1[_0x3f61('0x1')], [_0x5ca9f1[_0x3f61('0x0')](_0x8f1e05, _0x5ca9f1[_0x3f61('0x3')], [
                _0x5ca9f1[_0x3f61('0x5')](_0x8f1e05, _0x5ca9f1[_0x3f61('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x5ca9f1[_0x3f61('0x8')](_0x8f1e05, _0x5ca9f1[_0x3f61('0x1')], { 'staticStyle': { 'height': _0x5ca9f1[_0x3f61('0x9')] } }, [_0x5ca9f1[_0x3f61('0xb')](_0x8f1e05, _0x5ca9f1[_0x3f61('0xc')], {
                            'ref': _0x5ca9f1[_0x3f61('0xe')],
                            'attrs': {
                                'options': _0x413e67[_0x3f61('0x2f')],
                                'on-node-click': _0x413e67[_0x3f61('0x30')],
                                'on-line-click': _0x413e67[_0x3f61('0x31')]
                            }
                        })], 0x1)]),
                _0x5ca9f1[_0x3f61('0x5')](_0x8f1e05, _0x5ca9f1[_0x3f61('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x5ca9f1[_0x3f61('0x5')](_0x8f1e05, _0x5ca9f1[_0x3f61('0x1')], {
                        'staticStyle': {
                            'height': _0x5ca9f1[_0x3f61('0x9')],
                            'border-left': _0x5ca9f1[_0x3f61('0x10')],
                            'border-right': _0x5ca9f1[_0x3f61('0x10')],
                            'padding': _0x5ca9f1[_0x3f61('0x12')],
                            'font-size': _0x5ca9f1[_0x3f61('0x14')],
                            'line-height': _0x5ca9f1[_0x3f61('0x16')]
                        }
                    }, [_0x5ca9f1[_0x3f61('0xb')](_0x8f1e05, 'ul', [
                            _0x5ca9f1[_0x3f61('0xb')](_0x8f1e05, 'li', [_0x413e67['_v'](_0x5ca9f1[_0x3f61('0x18')])]),
                            _0x5ca9f1[_0x3f61('0xb')](_0x8f1e05, 'li', [_0x413e67['_v'](_0x5ca9f1[_0x3f61('0x1a')])]),
                            _0x5ca9f1[_0x3f61('0x1c')](_0x8f1e05, 'ul', [
                                _0x5ca9f1[_0x3f61('0x1d')](_0x8f1e05, 'li', [_0x413e67['_v'](_0x5ca9f1[_0x3f61('0x1e')])]),
                                _0x5ca9f1[_0x3f61('0x1d')](_0x8f1e05, 'li', [_0x413e67['_v'](_0x5ca9f1[_0x3f61('0x20')])])
                            ]),
                            _0x5ca9f1[_0x3f61('0x22')](_0x8f1e05, 'li', [_0x413e67['_v'](_0x5ca9f1[_0x3f61('0x23')])]),
                            _0x5ca9f1[_0x3f61('0x25')](_0x8f1e05, 'li', [_0x413e67['_v'](_0x5ca9f1[_0x3f61('0x26')])])
                        ])])]),
                _0x5ca9f1[_0x3f61('0x28')](_0x8f1e05, _0x5ca9f1[_0x3f61('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x5ca9f1[_0x3f61('0x29')](_0x8f1e05, _0x5ca9f1[_0x3f61('0x1')], { 'staticStyle': { 'height': _0x5ca9f1[_0x3f61('0x9')] } }, [_0x5ca9f1[_0x3f61('0x2a')](_0x8f1e05, _0x5ca9f1[_0x3f61('0xc')], {
                            'ref': _0x5ca9f1[_0x3f61('0x2b')],
                            'attrs': {
                                'options': _0x413e67[_0x3f61('0x32')],
                                'on-node-click': _0x413e67[_0x3f61('0x30')],
                                'on-line-click': _0x413e67[_0x3f61('0x31')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x3f61('0x33')] = _0x3f61('0x34');
h[_0x3f61('0x35')] = {};
h[_0x3f61('0x36')] = function () {
    var _0x441ae5 = { VAJiV: _0x3f61('0x37') };
    return {
        currentCase: _0x441ae5.VAJiV,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x3f61('0x38')] = function () {
    this.show();
};
h[_0x3f61('0x39')] = {};
h[_0x3f61('0x39')][_0x3f61('0x3a')] = function (_0xd0a189) {
    var _0x28ac5a = {
        qOVTB: _0x3f61('0x3b'),
        wQABT: _0x3f61('0x3c')
    };
    const _0x172ddd = this.$refs.graphRef1;
    this.resetGraph(_0x172ddd, _0x28ac5a.qOVTB);
    const _0x1e58bd = this.$refs.graphRef2;
    this.resetGraph(_0x1e58bd, _0x28ac5a.wQABT);
};
h[_0x3f61('0x39')][_0x3f61('0x3d')] = function (_0x346d94, _0x1cf6d3) {
    var _0x22da02 = {
        VFsEZ: _0x3f61('0x3e'),
        eNWsZ: _0x3f61('0x3f'),
        CYGlH: _0x3f61('0x40'),
        nOwgc: _0x3f61('0x41'),
        Jpbug: _0x3f61('0x42'),
        mWopL: _0x3f61('0x43'),
        FQgfo: function (_0x1acaad, _0x3fd90c) {
            return _0x1acaad === _0x3fd90c;
        },
        HOfpz: _0x3f61('0x3c'),
        hDKKb: _0x3f61('0x44'),
        XQMAk: _0x3f61('0x45'),
        ZzKBz: _0x3f61('0x46'),
        MFoWs: _0x3f61('0x47'),
        ltzDZ: _0x3f61('0x48'),
        vlDPQ: _0x3f61('0x49'),
        luOoP: _0x3f61('0x4a'),
        Bssjz: _0x3f61('0x4b')
    };
    const _0x5775aa = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x22da02.VFsEZ,
                from: _0x22da02.eNWsZ,
                max_per_width: _0x22da02.CYGlH,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x22da02.nOwgc,
        defaultNodeColor: _0x22da02.Jpbug
    };
    _0x5775aa.layouts[0x0].from = _0x22da02.mWopL, _0x5775aa.layouts[0x0].min_per_width = 0x46, _0x5775aa.layouts[0x0].max_per_width = 0xc8, _0x5775aa.layouts[0x0].min_per_height = 0xc8, _0x5775aa.layouts[0x0].max_per_height = 0x190, _0x5775aa.defaultNodeWidth = 0x1e, _0x5775aa.defaultNodeHeight = 0x64, _0x5775aa.defaultJunctionPoint = 'tb';
    let _0x4c4343, _0x1bd7c3, _0x2518ca;
    _0x22da02.FQgfo(_0x1cf6d3, _0x22da02.HOfpz) && (_0x4c4343 = !0x0, _0x1bd7c3 = !0x1, _0x2518ca = _0x22da02.hDKKb);
    const _0x1bf98d = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x22da02.XQMAk
            },
            {
                id: _0x22da02.ZzKBz,
                text: _0x22da02.ZzKBz
            },
            {
                id: _0x22da02.MFoWs,
                text: _0x22da02.MFoWs,
                expandHolderPosition: _0x22da02.mWopL
            },
            {
                id: _0x22da02.ltzDZ,
                text: _0x22da02.ltzDZ
            },
            {
                id: _0x22da02.vlDPQ,
                text: _0x22da02.vlDPQ
            },
            {
                id: _0x22da02.luOoP,
                text: _0x22da02.luOoP
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x22da02.Bssjz
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
                from: _0x22da02.ZzKBz,
                to: 'a',
                showStartArrow: _0x4c4343,
                showEndArrow: _0x1bd7c3,
                color: _0x2518ca
            },
            {
                from: _0x22da02.MFoWs,
                to: 'a',
                showStartArrow: _0x4c4343,
                showEndArrow: _0x1bd7c3,
                color: _0x2518ca
            },
            {
                from: _0x22da02.ltzDZ,
                to: _0x22da02.MFoWs,
                showStartArrow: _0x4c4343,
                showEndArrow: _0x1bd7c3,
                color: _0x2518ca
            },
            {
                from: _0x22da02.vlDPQ,
                to: _0x22da02.MFoWs,
                showStartArrow: _0x4c4343,
                showEndArrow: _0x1bd7c3,
                color: _0x2518ca
            },
            {
                from: _0x22da02.luOoP,
                to: 'a',
                showStartArrow: _0x4c4343,
                showEndArrow: _0x1bd7c3,
                color: _0x2518ca
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
    _0x346d94.setOptions(_0x5775aa, _0x383f50 => {
        this.showSeeksGraph(_0x346d94, _0x1bf98d);
    });
};
h[_0x3f61('0x39')][_0x3f61('0x4c')] = function (_0x3d6f39, _0x2bc3cb) {
    _0x3d6f39.setJsonData(_0x2bc3cb, _0x32c516 => {
        _0x32c516.focusNodeById('a');
    });
};
h[_0x3f61('0x39')][_0x3f61('0x30')] = function (_0x3da6c2, _0x369c9c) {
    var _0x401217 = { bpRNu: _0x3f61('0x4d') };
    console.log(_0x401217.bpRNu, _0x3da6c2);
};
h[_0x3f61('0x39')][_0x3f61('0x31')] = function (_0x485bfe, _0x120b8d, _0x2ecd34) {
    var _0x78ee0d = { iDSsI: _0x3f61('0x4e') };
    console.log(_0x78ee0d.iDSsI, _0x485bfe);
};
var p = _0x40b137(h, c, d, !0x1, f, null, null, null);
function f(_0x45543d) {
    for (let _0x4a901e in n)
        this[_0x4a901e] = n[_0x4a901e];
}
const m = function () {
    return p[_0x3f61('0x4f')];
}();
export {
    m as default
};