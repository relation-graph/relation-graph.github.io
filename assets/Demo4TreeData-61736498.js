
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2629 = [
    'wenIy',
    '\x20这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。\x20',
    'axzei',
    'zjnKZ',
    '\x20直接使用tree数据结构有明显的确缺陷：只能设置全局的线条默认样式，无法对具体的link设置属性，不能精细的定义线条的样式。\x20',
    'name',
    'RelationGraphDemo',
    'components',
    'data',
    '---',
    'tree',
    'seeks-layout-center',
    'border',
    'left',
    '200',
    '500',
    'right',
    '100',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'created',
    'mounted',
    'methods',
    'setGraphData',
    'b1-1',
    'b1-2',
    'b1-3',
    'b1-4',
    'b1-5',
    'b1-6',
    'b2-1',
    'b2-2',
    'exports',
    'ABDmv',
    'SVItY',
    'div',
    'PhvKG',
    'ZiHSM',
    'loading',
    'jaYdu',
    'v-loading',
    'vmKZA',
    'g_loading',
    'DVISG',
    'calc(100vh\x20-\x20140px)',
    'tcyaw',
    '#efefef\x20solid\x201px',
    'lyZQo',
    'PQTwH',
    'RelationGraph',
    'OuuMX',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'LVVpb',
    'TZJqH',
    'zHfmX',
    '10px',
    'nJkdg',
    '700px',
    'VoXNd',
    '20px',
    'kvXMm',
    '12px'
];
(function (_0x1c6689, _0x4030ab) {
    var _0x94799b = function (_0x50f751) {
        while (--_0x50f751) {
            _0x1c6689['push'](_0x1c6689['shift']());
        }
    };
    _0x94799b(++_0x4030ab);
}(_0x2629, 0x1e8));
var _0x9f00 = function (_0x4d0b7d, _0x2f9313) {
    _0x4d0b7d = _0x4d0b7d - 0x0;
    var _0x30ed32 = _0x2629[_0x4d0b7d];
    return _0x30ed32;
};
import { n } from './index-a76d1c04.js';
var o = function () {
        var _0x1c6c01 = {};
        _0x1c6c01[_0x9f00('0x0')] = function (_0x7a43eb, _0x38dc10, _0x3fafd6, _0x2c608a) {
            return _0x7a43eb(_0x38dc10, _0x3fafd6, _0x2c608a);
        };
        _0x1c6c01[_0x9f00('0x1')] = _0x9f00('0x2');
        _0x1c6c01[_0x9f00('0x3')] = function (_0x327f00, _0x589670, _0x161cf6, _0x16fc07, _0x1350f2) {
            return _0x327f00(_0x589670, _0x161cf6, _0x16fc07, _0x1350f2);
        };
        _0x1c6c01[_0x9f00('0x4')] = _0x9f00('0x5');
        _0x1c6c01[_0x9f00('0x6')] = _0x9f00('0x7');
        _0x1c6c01[_0x9f00('0x8')] = _0x9f00('0x9');
        _0x1c6c01[_0x9f00('0xa')] = _0x9f00('0xb');
        _0x1c6c01[_0x9f00('0xc')] = _0x9f00('0xd');
        _0x1c6c01[_0x9f00('0xe')] = function (_0x35709a, _0x365de9, _0x40d05e) {
            return _0x35709a(_0x365de9, _0x40d05e);
        };
        _0x1c6c01[_0x9f00('0xf')] = _0x9f00('0x10');
        _0x1c6c01[_0x9f00('0x11')] = _0x9f00('0x12');
        var _0x153b20 = this, _0x3f7289 = _0x153b20[_0x9f00('0x13')], _0x420ac1 = _0x153b20[_0x9f00('0x14')]['_c'] || _0x3f7289;
        return _0x1c6c01[_0x9f00('0x0')](_0x420ac1, _0x1c6c01[_0x9f00('0x1')], {}, [
            _0x153b20['_m'](0x0),
            _0x1c6c01[_0x9f00('0x3')](_0x420ac1, _0x1c6c01[_0x9f00('0x1')], {
                'directives': [{
                        'name': _0x1c6c01[_0x9f00('0x4')],
                        'rawName': _0x1c6c01[_0x9f00('0x6')],
                        'value': _0x153b20[_0x9f00('0x9')],
                        'expression': _0x1c6c01[_0x9f00('0x8')]
                    }],
                'staticStyle': {
                    'height': _0x1c6c01[_0x9f00('0xa')],
                    'border-top': _0x1c6c01[_0x9f00('0xc')]
                }
            }, [_0x1c6c01[_0x9f00('0xe')](_0x420ac1, _0x1c6c01[_0x9f00('0xf')], {
                    'ref': _0x1c6c01[_0x9f00('0x11')],
                    'attrs': { 'options': _0x153b20[_0x9f00('0x15')] }
                })], 0x1)
        ]);
    }, r = [function () {
            var _0x47b8ca = {};
            _0x47b8ca[_0x9f00('0x16')] = function (_0x5c5c0c, _0x44422c, _0x52ad25, _0x9d2f49) {
                return _0x5c5c0c(_0x44422c, _0x52ad25, _0x9d2f49);
            };
            _0x47b8ca[_0x9f00('0x17')] = _0x9f00('0x2');
            _0x47b8ca[_0x9f00('0x18')] = _0x9f00('0x19');
            _0x47b8ca[_0x9f00('0x1a')] = _0x9f00('0x1b');
            _0x47b8ca[_0x9f00('0x1c')] = _0x9f00('0x1d');
            _0x47b8ca[_0x9f00('0x1e')] = _0x9f00('0x1f');
            _0x47b8ca[_0x9f00('0x20')] = _0x9f00('0x21');
            _0x47b8ca[_0x9f00('0x22')] = function (_0x5e3ebf, _0x5a0318) {
                return _0x5e3ebf(_0x5a0318);
            };
            _0x47b8ca[_0x9f00('0x23')] = _0x9f00('0x24');
            var _0x3d1a3c = this, _0x598296 = _0x3d1a3c[_0x9f00('0x13')], _0x27e66e = _0x3d1a3c[_0x9f00('0x14')]['_c'] || _0x598296;
            return _0x47b8ca[_0x9f00('0x16')](_0x27e66e, _0x47b8ca[_0x9f00('0x17')], {
                'staticStyle': {
                    'margin-top': _0x47b8ca[_0x9f00('0x18')],
                    'width': _0x47b8ca[_0x9f00('0x1a')],
                    'padding-left': _0x47b8ca[_0x9f00('0x1c')],
                    'font-size': _0x47b8ca[_0x9f00('0x1e')]
                }
            }, [
                _0x3d1a3c['_v'](_0x47b8ca[_0x9f00('0x20')]),
                _0x47b8ca[_0x9f00('0x22')](_0x27e66e, 'br'),
                _0x3d1a3c['_v'](_0x47b8ca[_0x9f00('0x23')])
            ]);
        }];
const d = {}, i = {};
d[_0x9f00('0x25')] = _0x9f00('0x26');
d[_0x9f00('0x27')] = {};
d[_0x9f00('0x28')] = function () {
    var _0x503c13 = {
        mrdyi: _0x9f00('0x29'),
        dHBJD: _0x9f00('0x2a'),
        ZWGiP: _0x9f00('0x2b'),
        pUHQo: _0x9f00('0x2c'),
        xAgcE: _0x9f00('0x2d'),
        rUNXp: _0x9f00('0x2e'),
        jSSNf: _0x9f00('0x2f'),
        lOfmo: _0x9f00('0x30'),
        TTScn: _0x9f00('0x31'),
        UYlgt: _0x9f00('0x32'),
        LKxdw: _0x9f00('0x33')
    };
    return {
        g_loading: !0x0,
        demoname: _0x503c13.mrdyi,
        graphOptions: {
            debug: !0x1,
            layouts: [{
                    label: '中心',
                    layoutName: _0x503c13.dHBJD,
                    layoutClassName: _0x503c13.ZWGiP,
                    defaultJunctionPoint: _0x503c13.pUHQo,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x503c13.xAgcE,
                    min_per_width: _0x503c13.rUNXp,
                    max_per_width: _0x503c13.jSSNf,
                    min_per_height: '40',
                    max_per_height: '60',
                    levelDistance: ''
                }],
            defaultExpandHolderPosition: _0x503c13.lOfmo,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x503c13.TTScn,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x503c13.UYlgt,
            defaultNodeColor: _0x503c13.LKxdw
        }
    };
};
d[_0x9f00('0x34')] = function () {
};
d[_0x9f00('0x35')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
d[_0x9f00('0x36')] = {};
d[_0x9f00('0x36')][_0x9f00('0x37')] = function () {
    var _0xa4cfe9 = {
        WqaGJ: _0x9f00('0x38'),
        Amtfa: _0x9f00('0x39'),
        FckIO: _0x9f00('0x3a'),
        TAqWN: _0x9f00('0x3b'),
        lHerM: _0x9f00('0x3c'),
        ezpdY: _0x9f00('0x3d'),
        ZShUg: _0x9f00('0x3e'),
        xqTrt: _0x9f00('0x3f')
    };
    const _0x293c54 = {
        rootId: 'a',
        nodes: [{
                id: 'a',
                text: 'a',
                children: [
                    {
                        id: 'b',
                        text: 'b',
                        children: [
                            {
                                id: 'b1',
                                text: 'b1',
                                children: [
                                    {
                                        id: _0xa4cfe9.WqaGJ,
                                        text: _0xa4cfe9.WqaGJ
                                    },
                                    {
                                        id: _0xa4cfe9.Amtfa,
                                        text: _0xa4cfe9.Amtfa
                                    },
                                    {
                                        id: _0xa4cfe9.FckIO,
                                        text: _0xa4cfe9.FckIO
                                    },
                                    {
                                        id: _0xa4cfe9.TAqWN,
                                        text: _0xa4cfe9.TAqWN
                                    },
                                    {
                                        id: _0xa4cfe9.lHerM,
                                        text: _0xa4cfe9.lHerM
                                    },
                                    {
                                        id: _0xa4cfe9.ezpdY,
                                        text: _0xa4cfe9.ezpdY
                                    }
                                ]
                            },
                            {
                                id: 'b2',
                                text: 'b2',
                                children: [
                                    {
                                        id: _0xa4cfe9.ZShUg,
                                        text: _0xa4cfe9.ZShUg
                                    },
                                    {
                                        id: _0xa4cfe9.xqTrt,
                                        text: _0xa4cfe9.xqTrt
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 'c',
                        text: 'c',
                        children: [
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
                            }
                        ]
                    }
                ]
            }],
        lines: []
    };
    console.log(JSON.stringify(_0x293c54)), this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x293c54, _0x48144e => {
    });
};
var l = n(d, o, r, !0x1, s, null, null, null);
function s(_0x22cc7d) {
    for (let _0x5a9fd4 in i)
        this[_0x5a9fd4] = i[_0x5a9fd4];
}
const h = function () {
    return l[_0x9f00('0x40')];
}();
export {
    h as default
};