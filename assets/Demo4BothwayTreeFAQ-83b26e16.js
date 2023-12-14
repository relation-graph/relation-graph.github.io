
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xcd02 = [
    'RelationGraph',
    'KeiIs',
    'graphRef1',
    'ATcjr',
    'tEMcT',
    'sIzrL',
    '#efefef\x20solid\x201px',
    'ZTUFC',
    '15px',
    'VlByt',
    '14px',
    'flaUR',
    '25px',
    'bMKRA',
    'Isxeq',
    '原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'pcjUA',
    '如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'fTcGM',
    'yImul',
    'showStartArrow=true',
    'yKaCa',
    'nIsuw',
    'showEndArrow=false',
    'rDZIC',
    '以此来让上方线条看起来是反向展示。',
    'BrMbN',
    'AaXxy',
    '最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据要求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。',
    'fTnMI',
    'rYdgh',
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
    'WwLlo',
    'rnJOR',
    'div',
    'JZLFH',
    'el-row',
    'SRMWw',
    'gKfSg',
    'el-col',
    'awqJd',
    'JzxEv',
    'calc(100vh\x20-\x20100px)',
    'VWayq',
    'HYMRd'
];
(function (_0x30b016, _0x2ae593) {
    var _0x4eef63 = function (_0x19b1e8) {
        while (--_0x19b1e8) {
            _0x30b016['push'](_0x30b016['shift']());
        }
    };
    _0x4eef63(++_0x2ae593);
}(_0xcd02, 0x183));
var _0x30c0 = function (_0x595c31, _0x256ce9) {
    _0x595c31 = _0x595c31 - 0x0;
    var _0x1e6f1c = _0xcd02[_0x595c31];
    return _0x1e6f1c;
};
import { n as _0x1940ea } from './index-7cdfa577.js';
var c = function () {
        var _0x692b9d = {};
        _0x692b9d[_0x30c0('0x0')] = function (_0x2e83da, _0x187aaa, _0x456556, _0x2e4836) {
            return _0x2e83da(_0x187aaa, _0x456556, _0x2e4836);
        };
        _0x692b9d[_0x30c0('0x1')] = _0x30c0('0x2');
        _0x692b9d[_0x30c0('0x3')] = _0x30c0('0x4');
        _0x692b9d[_0x30c0('0x5')] = function (_0x18a905, _0x3c1e2b, _0x194f6f, _0x4b10dd) {
            return _0x18a905(_0x3c1e2b, _0x194f6f, _0x4b10dd);
        };
        _0x692b9d[_0x30c0('0x6')] = _0x30c0('0x7');
        _0x692b9d[_0x30c0('0x8')] = function (_0x2dcbe7, _0x7990cf, _0x47a9d5, _0x5a87e6, _0x3cc1ab) {
            return _0x2dcbe7(_0x7990cf, _0x47a9d5, _0x5a87e6, _0x3cc1ab);
        };
        _0x692b9d[_0x30c0('0x9')] = _0x30c0('0xa');
        _0x692b9d[_0x30c0('0xb')] = function (_0x1bfda0, _0x8698b7, _0xb4b8fc) {
            return _0x1bfda0(_0x8698b7, _0xb4b8fc);
        };
        _0x692b9d[_0x30c0('0xc')] = _0x30c0('0xd');
        _0x692b9d[_0x30c0('0xe')] = _0x30c0('0xf');
        _0x692b9d[_0x30c0('0x10')] = function (_0x5001e5, _0x3cd05f, _0x8ddce8, _0x3d028f) {
            return _0x5001e5(_0x3cd05f, _0x8ddce8, _0x3d028f);
        };
        _0x692b9d[_0x30c0('0x11')] = function (_0x1a43f5, _0x159953, _0x48143f, _0x103346) {
            return _0x1a43f5(_0x159953, _0x48143f, _0x103346);
        };
        _0x692b9d[_0x30c0('0x12')] = _0x30c0('0x13');
        _0x692b9d[_0x30c0('0x14')] = _0x30c0('0x15');
        _0x692b9d[_0x30c0('0x16')] = _0x30c0('0x17');
        _0x692b9d[_0x30c0('0x18')] = _0x30c0('0x19');
        _0x692b9d[_0x30c0('0x1a')] = function (_0x3050a2, _0x310cd2, _0x321d46) {
            return _0x3050a2(_0x310cd2, _0x321d46);
        };
        _0x692b9d[_0x30c0('0x1b')] = _0x30c0('0x1c');
        _0x692b9d[_0x30c0('0x1d')] = _0x30c0('0x1e');
        _0x692b9d[_0x30c0('0x1f')] = function (_0x4e756f, _0xe1dfa7, _0x4d8734) {
            return _0x4e756f(_0xe1dfa7, _0x4d8734);
        };
        _0x692b9d[_0x30c0('0x20')] = _0x30c0('0x21');
        _0x692b9d[_0x30c0('0x22')] = function (_0x3599d2, _0x11570e, _0x2fe0c3) {
            return _0x3599d2(_0x11570e, _0x2fe0c3);
        };
        _0x692b9d[_0x30c0('0x23')] = _0x30c0('0x24');
        _0x692b9d[_0x30c0('0x25')] = _0x30c0('0x26');
        _0x692b9d[_0x30c0('0x27')] = function (_0x5f11a7, _0x1467ac, _0x165dd5) {
            return _0x5f11a7(_0x1467ac, _0x165dd5);
        };
        _0x692b9d[_0x30c0('0x28')] = _0x30c0('0x29');
        _0x692b9d[_0x30c0('0x2a')] = function (_0x530fe1, _0x4f93b8, _0x4b8e09, _0x58721a) {
            return _0x530fe1(_0x4f93b8, _0x4b8e09, _0x58721a);
        };
        _0x692b9d[_0x30c0('0x2b')] = _0x30c0('0x2c');
        var _0x1e4997 = this, _0x5ee279 = _0x1e4997[_0x30c0('0x2d')], _0x557702 = _0x1e4997[_0x30c0('0x2e')]['_c'] || _0x5ee279;
        return _0x692b9d[_0x30c0('0x0')](_0x557702, _0x692b9d[_0x30c0('0x1')], [_0x692b9d[_0x30c0('0x0')](_0x557702, _0x692b9d[_0x30c0('0x3')], [
                _0x692b9d[_0x30c0('0x5')](_0x557702, _0x692b9d[_0x30c0('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x692b9d[_0x30c0('0x8')](_0x557702, _0x692b9d[_0x30c0('0x1')], { 'staticStyle': { 'height': _0x692b9d[_0x30c0('0x9')] } }, [_0x692b9d[_0x30c0('0xb')](_0x557702, _0x692b9d[_0x30c0('0xc')], {
                            'ref': _0x692b9d[_0x30c0('0xe')],
                            'attrs': {
                                'options': _0x1e4997[_0x30c0('0x2f')],
                                'on-node-click': _0x1e4997[_0x30c0('0x30')],
                                'on-line-click': _0x1e4997[_0x30c0('0x31')]
                            }
                        })], 0x1)]),
                _0x692b9d[_0x30c0('0x10')](_0x557702, _0x692b9d[_0x30c0('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x692b9d[_0x30c0('0x11')](_0x557702, _0x692b9d[_0x30c0('0x1')], {
                        'staticStyle': {
                            'height': _0x692b9d[_0x30c0('0x9')],
                            'border-left': _0x692b9d[_0x30c0('0x12')],
                            'border-right': _0x692b9d[_0x30c0('0x12')],
                            'padding': _0x692b9d[_0x30c0('0x14')],
                            'font-size': _0x692b9d[_0x30c0('0x16')],
                            'line-height': _0x692b9d[_0x30c0('0x18')]
                        }
                    }, [_0x692b9d[_0x30c0('0xb')](_0x557702, 'ul', [
                            _0x692b9d[_0x30c0('0x1a')](_0x557702, 'li', [_0x1e4997['_v'](_0x692b9d[_0x30c0('0x1b')])]),
                            _0x692b9d[_0x30c0('0x1a')](_0x557702, 'li', [_0x1e4997['_v'](_0x692b9d[_0x30c0('0x1d')])]),
                            _0x692b9d[_0x30c0('0x1a')](_0x557702, 'ul', [
                                _0x692b9d[_0x30c0('0x1f')](_0x557702, 'li', [_0x1e4997['_v'](_0x692b9d[_0x30c0('0x20')])]),
                                _0x692b9d[_0x30c0('0x22')](_0x557702, 'li', [_0x1e4997['_v'](_0x692b9d[_0x30c0('0x23')])])
                            ]),
                            _0x692b9d[_0x30c0('0x22')](_0x557702, 'li', [_0x1e4997['_v'](_0x692b9d[_0x30c0('0x25')])]),
                            _0x692b9d[_0x30c0('0x27')](_0x557702, 'li', [_0x1e4997['_v'](_0x692b9d[_0x30c0('0x28')])])
                        ])])]),
                _0x692b9d[_0x30c0('0x2a')](_0x557702, _0x692b9d[_0x30c0('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x692b9d[_0x30c0('0x8')](_0x557702, _0x692b9d[_0x30c0('0x1')], { 'staticStyle': { 'height': _0x692b9d[_0x30c0('0x9')] } }, [_0x692b9d[_0x30c0('0x27')](_0x557702, _0x692b9d[_0x30c0('0xc')], {
                            'ref': _0x692b9d[_0x30c0('0x2b')],
                            'attrs': {
                                'options': _0x1e4997[_0x30c0('0x32')],
                                'on-node-click': _0x1e4997[_0x30c0('0x30')],
                                'on-line-click': _0x1e4997[_0x30c0('0x31')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, n = {};
h[_0x30c0('0x33')] = _0x30c0('0x34');
h[_0x30c0('0x35')] = {};
h[_0x30c0('0x36')] = function () {
    var _0x546fbe = { rWDaF: _0x30c0('0x37') };
    return {
        currentCase: _0x546fbe.rWDaF,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x30c0('0x38')] = function () {
    this.show();
};
h[_0x30c0('0x39')] = {};
h[_0x30c0('0x39')][_0x30c0('0x3a')] = function (_0x5be1de) {
    var _0x512d2a = {
        UhBfl: _0x30c0('0x3b'),
        PxYXq: _0x30c0('0x3c')
    };
    const _0x505808 = this.$refs.graphRef1;
    this.resetGraph(_0x505808, _0x512d2a.UhBfl);
    const _0x4f0a18 = this.$refs.graphRef2;
    this.resetGraph(_0x4f0a18, _0x512d2a.PxYXq);
};
h[_0x30c0('0x39')][_0x30c0('0x3d')] = function (_0x231f4e, _0x22bd57) {
    var _0x19d497 = {
        RPKdE: _0x30c0('0x3e'),
        Lmwno: _0x30c0('0x3f'),
        OXdQG: _0x30c0('0x40'),
        Miqnc: _0x30c0('0x41'),
        NxWFk: _0x30c0('0x42'),
        iCztn: _0x30c0('0x43'),
        tlAEE: function (_0x3793d5, _0x1ad32b) {
            return _0x3793d5 === _0x1ad32b;
        },
        hupys: _0x30c0('0x3c'),
        KZYTz: _0x30c0('0x44'),
        lvOaQ: _0x30c0('0x45'),
        mGYOI: _0x30c0('0x46'),
        GEKCd: _0x30c0('0x47'),
        JbsSz: _0x30c0('0x48'),
        mZOAS: _0x30c0('0x49'),
        xQwRW: _0x30c0('0x4a'),
        HtKnW: _0x30c0('0x4b')
    };
    const _0x28db2e = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x19d497.RPKdE,
                from: _0x19d497.Lmwno,
                max_per_width: _0x19d497.OXdQG,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x19d497.Miqnc,
        defaultNodeColor: _0x19d497.NxWFk
    };
    _0x28db2e.layouts[0x0].from = _0x19d497.iCztn, _0x28db2e.layouts[0x0].min_per_width = 0x46, _0x28db2e.layouts[0x0].max_per_width = 0xc8, _0x28db2e.layouts[0x0].min_per_height = 0xc8, _0x28db2e.layouts[0x0].max_per_height = 0x190, _0x28db2e.defaultNodeWidth = 0x1e, _0x28db2e.defaultNodeHeight = 0x64, _0x28db2e.defaultJunctionPoint = 'tb';
    let _0xce93b4, _0x401170, _0x2f89b3;
    _0x19d497.tlAEE(_0x22bd57, _0x19d497.hupys) && (_0xce93b4 = !0x0, _0x401170 = !0x1, _0x2f89b3 = _0x19d497.KZYTz);
    const _0x3c4fc1 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x19d497.lvOaQ
            },
            {
                id: _0x19d497.mGYOI,
                text: _0x19d497.mGYOI
            },
            {
                id: _0x19d497.GEKCd,
                text: _0x19d497.GEKCd,
                expandHolderPosition: _0x19d497.iCztn
            },
            {
                id: _0x19d497.JbsSz,
                text: _0x19d497.JbsSz
            },
            {
                id: _0x19d497.mZOAS,
                text: _0x19d497.mZOAS
            },
            {
                id: _0x19d497.xQwRW,
                text: _0x19d497.xQwRW
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x19d497.HtKnW
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
                from: _0x19d497.mGYOI,
                to: 'a',
                showStartArrow: _0xce93b4,
                showEndArrow: _0x401170,
                color: _0x2f89b3
            },
            {
                from: _0x19d497.GEKCd,
                to: 'a',
                showStartArrow: _0xce93b4,
                showEndArrow: _0x401170,
                color: _0x2f89b3
            },
            {
                from: _0x19d497.JbsSz,
                to: _0x19d497.GEKCd,
                showStartArrow: _0xce93b4,
                showEndArrow: _0x401170,
                color: _0x2f89b3
            },
            {
                from: _0x19d497.mZOAS,
                to: _0x19d497.GEKCd,
                showStartArrow: _0xce93b4,
                showEndArrow: _0x401170,
                color: _0x2f89b3
            },
            {
                from: _0x19d497.xQwRW,
                to: 'a',
                showStartArrow: _0xce93b4,
                showEndArrow: _0x401170,
                color: _0x2f89b3
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
    _0x231f4e.setOptions(_0x28db2e, _0x47c0f2 => {
        this.showSeeksGraph(_0x231f4e, _0x3c4fc1);
    });
};
h[_0x30c0('0x39')][_0x30c0('0x4c')] = function (_0x8fec4b, _0x378812) {
    _0x8fec4b.setJsonData(_0x378812, _0x544ddc => {
        _0x544ddc.focusNodeById('a');
    });
};
h[_0x30c0('0x39')][_0x30c0('0x30')] = function (_0x333133, _0xd978db) {
    var _0x7a86a7 = { ijUTH: _0x30c0('0x4d') };
    console.log(_0x7a86a7.ijUTH, _0x333133);
};
h[_0x30c0('0x39')][_0x30c0('0x31')] = function (_0x1f52d5, _0x5d2222, _0x166610) {
    var _0x1bbdb9 = { cCCHa: _0x30c0('0x4e') };
    console.log(_0x1bbdb9.cCCHa, _0x1f52d5);
};
var p = _0x1940ea(h, c, d, !0x1, f, null, null, null);
function f(_0x2450b6) {
    for (let _0x40887a in n)
        this[_0x40887a] = n[_0x40887a];
}
const m = function () {
    return p[_0x30c0('0x4f')];
}();
export {
    m as default
};