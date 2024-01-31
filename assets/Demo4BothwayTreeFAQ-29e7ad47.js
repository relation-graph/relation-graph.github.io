
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2b50 = [
    'GZdek',
    'NrsIH',
    'el-col',
    'NnCCZ',
    'Sopfu',
    'calc(100vh\x20-\x20100px)',
    'GNfHB',
    'jOpDO',
    'RelationGraph',
    'qJdtx',
    'graphRef1',
    'TuALA',
    '#efefef\x20solid\x201px',
    'pPQwt',
    '15px',
    'ZXOZk',
    '14px',
    'VYjff',
    '25px',
    'sxXUe',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'Cdiqo',
    'bFnlk',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'PYBxd',
    'BTFEB',
    'showStartArrow=true',
    'REFoQ',
    'LHNMN',
    'showEndArrow=false',
    'tUHWN',
    'pJQHu',
    '以此来让上方线条看起来是反向展示。',
    'IkMsE',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'aXGdX',
    'rhPMY',
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
    'qUEQw',
    'BGpSx',
    'div',
    'fTqEn',
    'el-row'
];
(function (_0x143b49, _0xbda4c7) {
    var _0x3d98e7 = function (_0x2e9c06) {
        while (--_0x2e9c06) {
            _0x143b49['push'](_0x143b49['shift']());
        }
    };
    _0x3d98e7(++_0xbda4c7);
}(_0x2b50, 0x133));
var _0x41e2 = function (_0x52f029, _0xe9eb91) {
    _0x52f029 = _0x52f029 - 0x0;
    var _0x1f9be9 = _0x2b50[_0x52f029];
    return _0x1f9be9;
};
import { n as _0x5ba7aa } from './index-36eaf5cf.js';
var c = function () {
        var _0x37613f = {};
        _0x37613f[_0x41e2('0x0')] = function (_0x26f241, _0x537f48, _0x4e1e2f, _0x46d8d1) {
            return _0x26f241(_0x537f48, _0x4e1e2f, _0x46d8d1);
        };
        _0x37613f[_0x41e2('0x1')] = _0x41e2('0x2');
        _0x37613f[_0x41e2('0x3')] = _0x41e2('0x4');
        _0x37613f[_0x41e2('0x5')] = function (_0x2d2374, _0x52d3c1, _0x4dc219, _0x5de0f9) {
            return _0x2d2374(_0x52d3c1, _0x4dc219, _0x5de0f9);
        };
        _0x37613f[_0x41e2('0x6')] = _0x41e2('0x7');
        _0x37613f[_0x41e2('0x8')] = function (_0xfe5973, _0x500219, _0x4dbbdc, _0x164815, _0x52aee9) {
            return _0xfe5973(_0x500219, _0x4dbbdc, _0x164815, _0x52aee9);
        };
        _0x37613f[_0x41e2('0x9')] = _0x41e2('0xa');
        _0x37613f[_0x41e2('0xb')] = function (_0x5d65bb, _0x19deea, _0x36ea99) {
            return _0x5d65bb(_0x19deea, _0x36ea99);
        };
        _0x37613f[_0x41e2('0xc')] = _0x41e2('0xd');
        _0x37613f[_0x41e2('0xe')] = _0x41e2('0xf');
        _0x37613f[_0x41e2('0x10')] = _0x41e2('0x11');
        _0x37613f[_0x41e2('0x12')] = _0x41e2('0x13');
        _0x37613f[_0x41e2('0x14')] = _0x41e2('0x15');
        _0x37613f[_0x41e2('0x16')] = _0x41e2('0x17');
        _0x37613f[_0x41e2('0x18')] = _0x41e2('0x19');
        _0x37613f[_0x41e2('0x1a')] = function (_0x1960fd, _0x180e49, _0x5d7ef8) {
            return _0x1960fd(_0x180e49, _0x5d7ef8);
        };
        _0x37613f[_0x41e2('0x1b')] = _0x41e2('0x1c');
        _0x37613f[_0x41e2('0x1d')] = function (_0x2c04c5, _0x137a58, _0x5d8c8e) {
            return _0x2c04c5(_0x137a58, _0x5d8c8e);
        };
        _0x37613f[_0x41e2('0x1e')] = _0x41e2('0x1f');
        _0x37613f[_0x41e2('0x20')] = function (_0x457e81, _0x351855, _0x328fa7) {
            return _0x457e81(_0x351855, _0x328fa7);
        };
        _0x37613f[_0x41e2('0x21')] = _0x41e2('0x22');
        _0x37613f[_0x41e2('0x23')] = function (_0x10d034, _0x55d88c, _0x481e87) {
            return _0x10d034(_0x55d88c, _0x481e87);
        };
        _0x37613f[_0x41e2('0x24')] = _0x41e2('0x25');
        _0x37613f[_0x41e2('0x26')] = _0x41e2('0x27');
        _0x37613f[_0x41e2('0x28')] = function (_0x25894d, _0x469def, _0x3bf593) {
            return _0x25894d(_0x469def, _0x3bf593);
        };
        _0x37613f[_0x41e2('0x29')] = _0x41e2('0x2a');
        var _0x5b255b = this, _0x25d3af = _0x5b255b[_0x41e2('0x2b')], _0xabacf1 = _0x5b255b[_0x41e2('0x2c')]['_c'] || _0x25d3af;
        return _0x37613f[_0x41e2('0x0')](_0xabacf1, _0x37613f[_0x41e2('0x1')], [_0x37613f[_0x41e2('0x0')](_0xabacf1, _0x37613f[_0x41e2('0x3')], [
                _0x37613f[_0x41e2('0x5')](_0xabacf1, _0x37613f[_0x41e2('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x37613f[_0x41e2('0x8')](_0xabacf1, _0x37613f[_0x41e2('0x1')], { 'staticStyle': { 'height': _0x37613f[_0x41e2('0x9')] } }, [_0x37613f[_0x41e2('0xb')](_0xabacf1, _0x37613f[_0x41e2('0xc')], {
                            'ref': _0x37613f[_0x41e2('0xe')],
                            'attrs': {
                                'options': _0x5b255b[_0x41e2('0x2d')],
                                'on-node-click': _0x5b255b[_0x41e2('0x2e')],
                                'on-line-click': _0x5b255b[_0x41e2('0x2f')]
                            }
                        })], 0x1)]),
                _0x37613f[_0x41e2('0x5')](_0xabacf1, _0x37613f[_0x41e2('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x37613f[_0x41e2('0x5')](_0xabacf1, _0x37613f[_0x41e2('0x1')], {
                        'staticStyle': {
                            'height': _0x37613f[_0x41e2('0x9')],
                            'border-left': _0x37613f[_0x41e2('0x10')],
                            'border-right': _0x37613f[_0x41e2('0x10')],
                            'padding': _0x37613f[_0x41e2('0x12')],
                            'font-size': _0x37613f[_0x41e2('0x14')],
                            'line-height': _0x37613f[_0x41e2('0x16')]
                        }
                    }, [_0x37613f[_0x41e2('0xb')](_0xabacf1, 'ul', [
                            _0x37613f[_0x41e2('0xb')](_0xabacf1, 'li', [_0x5b255b['_v'](_0x37613f[_0x41e2('0x18')])]),
                            _0x37613f[_0x41e2('0x1a')](_0xabacf1, 'li', [_0x5b255b['_v'](_0x37613f[_0x41e2('0x1b')])]),
                            _0x37613f[_0x41e2('0x1a')](_0xabacf1, 'ul', [
                                _0x37613f[_0x41e2('0x1d')](_0xabacf1, 'li', [_0x5b255b['_v'](_0x37613f[_0x41e2('0x1e')])]),
                                _0x37613f[_0x41e2('0x20')](_0xabacf1, 'li', [_0x5b255b['_v'](_0x37613f[_0x41e2('0x21')])])
                            ]),
                            _0x37613f[_0x41e2('0x23')](_0xabacf1, 'li', [_0x5b255b['_v'](_0x37613f[_0x41e2('0x24')])]),
                            _0x37613f[_0x41e2('0x23')](_0xabacf1, 'li', [_0x5b255b['_v'](_0x37613f[_0x41e2('0x26')])])
                        ])])]),
                _0x37613f[_0x41e2('0x5')](_0xabacf1, _0x37613f[_0x41e2('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x37613f[_0x41e2('0x8')](_0xabacf1, _0x37613f[_0x41e2('0x1')], { 'staticStyle': { 'height': _0x37613f[_0x41e2('0x9')] } }, [_0x37613f[_0x41e2('0x28')](_0xabacf1, _0x37613f[_0x41e2('0xc')], {
                            'ref': _0x37613f[_0x41e2('0x29')],
                            'attrs': {
                                'options': _0x5b255b[_0x41e2('0x30')],
                                'on-node-click': _0x5b255b[_0x41e2('0x2e')],
                                'on-line-click': _0x5b255b[_0x41e2('0x2f')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x41e2('0x31')] = _0x41e2('0x32');
h[_0x41e2('0x33')] = {};
h[_0x41e2('0x34')] = function () {
    var _0x5b7aed = { Rzftq: _0x41e2('0x35') };
    return {
        currentCase: _0x5b7aed.Rzftq,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x41e2('0x36')] = function () {
    this.show();
};
h[_0x41e2('0x37')] = {};
h[_0x41e2('0x37')][_0x41e2('0x38')] = function (_0x590e76) {
    var _0x4423e8 = {
        cyhyp: _0x41e2('0x39'),
        ESjjs: _0x41e2('0x3a')
    };
    const _0x163589 = this.$refs.graphRef1;
    this.resetGraph(_0x163589, _0x4423e8.cyhyp);
    const _0x5f3e31 = this.$refs.graphRef2;
    this.resetGraph(_0x5f3e31, _0x4423e8.ESjjs);
};
h[_0x41e2('0x37')][_0x41e2('0x3b')] = function (_0x1b86ab, _0x1ba0fb) {
    var _0x89f936 = {
        clbtO: _0x41e2('0x3c'),
        REHpA: _0x41e2('0x3d'),
        nHrNk: _0x41e2('0x3e'),
        Nhteb: _0x41e2('0x3f'),
        KdVQp: _0x41e2('0x40'),
        AXTXu: _0x41e2('0x41'),
        NFluG: function (_0x2a2f32, _0x28f7e2) {
            return _0x2a2f32 === _0x28f7e2;
        },
        qahep: _0x41e2('0x3a'),
        LXIuv: _0x41e2('0x42'),
        xcwWc: _0x41e2('0x43'),
        duQQh: _0x41e2('0x44'),
        ElxqX: _0x41e2('0x45'),
        BFIwo: _0x41e2('0x46'),
        nVKOK: _0x41e2('0x47'),
        pzIcG: _0x41e2('0x48'),
        PlIaX: _0x41e2('0x49')
    };
    const _0x24a7a0 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x89f936.clbtO,
                from: _0x89f936.REHpA,
                max_per_width: _0x89f936.nHrNk,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x89f936.Nhteb,
        defaultNodeColor: _0x89f936.KdVQp
    };
    _0x24a7a0.layouts[0x0].from = _0x89f936.AXTXu, _0x24a7a0.layouts[0x0].min_per_width = 0x46, _0x24a7a0.layouts[0x0].max_per_width = 0xc8, _0x24a7a0.layouts[0x0].min_per_height = 0xc8, _0x24a7a0.layouts[0x0].max_per_height = 0x190, _0x24a7a0.defaultNodeWidth = 0x1e, _0x24a7a0.defaultNodeHeight = 0x64, _0x24a7a0.defaultJunctionPoint = 'tb';
    let _0xce6d10, _0x2a6708, _0x115f72;
    _0x89f936.NFluG(_0x1ba0fb, _0x89f936.qahep) && (_0xce6d10 = !0x0, _0x2a6708 = !0x1, _0x115f72 = _0x89f936.LXIuv);
    const _0x4e6bd1 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x89f936.xcwWc
            },
            {
                id: _0x89f936.duQQh,
                text: _0x89f936.duQQh
            },
            {
                id: _0x89f936.ElxqX,
                text: _0x89f936.ElxqX,
                expandHolderPosition: _0x89f936.AXTXu
            },
            {
                id: _0x89f936.BFIwo,
                text: _0x89f936.BFIwo
            },
            {
                id: _0x89f936.nVKOK,
                text: _0x89f936.nVKOK
            },
            {
                id: _0x89f936.pzIcG,
                text: _0x89f936.pzIcG
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x89f936.PlIaX
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
                from: _0x89f936.duQQh,
                to: 'a',
                showStartArrow: _0xce6d10,
                showEndArrow: _0x2a6708,
                color: _0x115f72
            },
            {
                from: _0x89f936.ElxqX,
                to: 'a',
                showStartArrow: _0xce6d10,
                showEndArrow: _0x2a6708,
                color: _0x115f72
            },
            {
                from: _0x89f936.BFIwo,
                to: _0x89f936.ElxqX,
                showStartArrow: _0xce6d10,
                showEndArrow: _0x2a6708,
                color: _0x115f72
            },
            {
                from: _0x89f936.nVKOK,
                to: _0x89f936.ElxqX,
                showStartArrow: _0xce6d10,
                showEndArrow: _0x2a6708,
                color: _0x115f72
            },
            {
                from: _0x89f936.pzIcG,
                to: 'a',
                showStartArrow: _0xce6d10,
                showEndArrow: _0x2a6708,
                color: _0x115f72
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
    _0x1b86ab.setOptions(_0x24a7a0, _0x5b15fe => {
        this.showSeeksGraph(_0x1b86ab, _0x4e6bd1);
    });
};
h[_0x41e2('0x37')][_0x41e2('0x4a')] = function (_0x25d759, _0x533ba8) {
    _0x25d759.setJsonData(_0x533ba8, _0x4cb804 => {
        _0x4cb804.focusNodeById('a');
    });
};
h[_0x41e2('0x37')][_0x41e2('0x2e')] = function (_0x5c9f06, _0x5c0e3d) {
    var _0x4d6b40 = { GMALd: _0x41e2('0x4b') };
    console.log(_0x4d6b40.GMALd, _0x5c9f06);
};
h[_0x41e2('0x37')][_0x41e2('0x2f')] = function (_0x12fa12, _0x20c454, _0x3527ce) {
    var _0xbcf4e3 = { jIWnM: _0x41e2('0x4c') };
    console.log(_0xbcf4e3.jIWnM, _0x12fa12);
};
var p = _0x5ba7aa(h, c, d, !0x1, f, null, null, null);
function f(_0x22fde9) {
    for (let _0x1fa174 in n)
        this[_0x1fa174] = n[_0x1fa174];
}
const m = function () {
    return p[_0x41e2('0x4d')];
}();
export {
    m as default
};