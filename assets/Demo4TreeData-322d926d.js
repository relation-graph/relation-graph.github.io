
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x29bc = [
    'b2-2',
    'exports',
    'dreHb',
    'XOhTT',
    'div',
    'xBOJg',
    'XNBfv',
    'loading',
    'jOMxl',
    'v-loading',
    'aqGhF',
    'g_loading',
    'uXUJx',
    'calc(100vh\x20-\x20140px)',
    'UKfdY',
    '#efefef\x20solid\x201px',
    'Iiksg',
    'FsqDb',
    'RelationGraph',
    'ZXfHk',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'irfJI',
    'OkXtI',
    'GRJeY',
    '10px',
    'yAYcF',
    '700px',
    'cwoYg',
    '20px',
    'gJqTv',
    '12px',
    'KDDSn',
    '\x20这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。\x20',
    'VeVDe',
    'IRgHL',
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
    'b2-1'
];
(function (_0xa0b360, _0x34a479) {
    var _0x584749 = function (_0x125eb5) {
        while (--_0x125eb5) {
            _0xa0b360['push'](_0xa0b360['shift']());
        }
    };
    _0x584749(++_0x34a479);
}(_0x29bc, 0x1c9));
var _0x1c61 = function (_0x3b31c1, _0x352133) {
    _0x3b31c1 = _0x3b31c1 - 0x0;
    var _0x3a97eb = _0x29bc[_0x3b31c1];
    return _0x3a97eb;
};
import { n } from './index-b2490647.js';
var o = function () {
        var _0x1fa90d = {};
        _0x1fa90d[_0x1c61('0x0')] = function (_0x176840, _0x2937e0, _0x281c7d, _0x47bb43) {
            return _0x176840(_0x2937e0, _0x281c7d, _0x47bb43);
        };
        _0x1fa90d[_0x1c61('0x1')] = _0x1c61('0x2');
        _0x1fa90d[_0x1c61('0x3')] = function (_0x242745, _0x4556c5, _0x9375fb, _0x19c995, _0x186f39) {
            return _0x242745(_0x4556c5, _0x9375fb, _0x19c995, _0x186f39);
        };
        _0x1fa90d[_0x1c61('0x4')] = _0x1c61('0x5');
        _0x1fa90d[_0x1c61('0x6')] = _0x1c61('0x7');
        _0x1fa90d[_0x1c61('0x8')] = _0x1c61('0x9');
        _0x1fa90d[_0x1c61('0xa')] = _0x1c61('0xb');
        _0x1fa90d[_0x1c61('0xc')] = _0x1c61('0xd');
        _0x1fa90d[_0x1c61('0xe')] = function (_0x2a28c0, _0x4257c9, _0x5150a4) {
            return _0x2a28c0(_0x4257c9, _0x5150a4);
        };
        _0x1fa90d[_0x1c61('0xf')] = _0x1c61('0x10');
        _0x1fa90d[_0x1c61('0x11')] = _0x1c61('0x12');
        var _0x1148a1 = this, _0x30944e = _0x1148a1[_0x1c61('0x13')], _0x4b341d = _0x1148a1[_0x1c61('0x14')]['_c'] || _0x30944e;
        return _0x1fa90d[_0x1c61('0x0')](_0x4b341d, _0x1fa90d[_0x1c61('0x1')], {}, [
            _0x1148a1['_m'](0x0),
            _0x1fa90d[_0x1c61('0x3')](_0x4b341d, _0x1fa90d[_0x1c61('0x1')], {
                'directives': [{
                        'name': _0x1fa90d[_0x1c61('0x4')],
                        'rawName': _0x1fa90d[_0x1c61('0x6')],
                        'value': _0x1148a1[_0x1c61('0x9')],
                        'expression': _0x1fa90d[_0x1c61('0x8')]
                    }],
                'staticStyle': {
                    'height': _0x1fa90d[_0x1c61('0xa')],
                    'border-top': _0x1fa90d[_0x1c61('0xc')]
                }
            }, [_0x1fa90d[_0x1c61('0xe')](_0x4b341d, _0x1fa90d[_0x1c61('0xf')], {
                    'ref': _0x1fa90d[_0x1c61('0x11')],
                    'attrs': { 'options': _0x1148a1[_0x1c61('0x15')] }
                })], 0x1)
        ]);
    }, r = [function () {
            var _0x5512d1 = {};
            _0x5512d1[_0x1c61('0x16')] = function (_0xcbc8b2, _0x12ccdb, _0x4a4fc7, _0x2bdc44) {
                return _0xcbc8b2(_0x12ccdb, _0x4a4fc7, _0x2bdc44);
            };
            _0x5512d1[_0x1c61('0x17')] = _0x1c61('0x2');
            _0x5512d1[_0x1c61('0x18')] = _0x1c61('0x19');
            _0x5512d1[_0x1c61('0x1a')] = _0x1c61('0x1b');
            _0x5512d1[_0x1c61('0x1c')] = _0x1c61('0x1d');
            _0x5512d1[_0x1c61('0x1e')] = _0x1c61('0x1f');
            _0x5512d1[_0x1c61('0x20')] = _0x1c61('0x21');
            _0x5512d1[_0x1c61('0x22')] = function (_0x5b7fc3, _0x109ccb) {
                return _0x5b7fc3(_0x109ccb);
            };
            _0x5512d1[_0x1c61('0x23')] = _0x1c61('0x24');
            var _0x361b21 = this, _0x4abc8f = _0x361b21[_0x1c61('0x13')], _0x290d43 = _0x361b21[_0x1c61('0x14')]['_c'] || _0x4abc8f;
            return _0x5512d1[_0x1c61('0x16')](_0x290d43, _0x5512d1[_0x1c61('0x17')], {
                'staticStyle': {
                    'margin-top': _0x5512d1[_0x1c61('0x18')],
                    'width': _0x5512d1[_0x1c61('0x1a')],
                    'padding-left': _0x5512d1[_0x1c61('0x1c')],
                    'font-size': _0x5512d1[_0x1c61('0x1e')]
                }
            }, [
                _0x361b21['_v'](_0x5512d1[_0x1c61('0x20')]),
                _0x5512d1[_0x1c61('0x22')](_0x290d43, 'br'),
                _0x361b21['_v'](_0x5512d1[_0x1c61('0x23')])
            ]);
        }];
const d = {}, i = {};
d[_0x1c61('0x25')] = _0x1c61('0x26');
d[_0x1c61('0x27')] = {};
d[_0x1c61('0x28')] = function () {
    var _0x11da9c = {
        tahJD: _0x1c61('0x29'),
        YwmND: _0x1c61('0x2a'),
        UDHlU: _0x1c61('0x2b'),
        xxSYK: _0x1c61('0x2c'),
        vuJTm: _0x1c61('0x2d'),
        TYKEL: _0x1c61('0x2e'),
        BXlHu: _0x1c61('0x2f'),
        ypLIo: _0x1c61('0x30'),
        MwThf: _0x1c61('0x31'),
        CDbHY: _0x1c61('0x32'),
        wlUht: _0x1c61('0x33')
    };
    return {
        g_loading: !0x0,
        demoname: _0x11da9c.tahJD,
        graphOptions: {
            debug: !0x1,
            layouts: [{
                    label: '中心',
                    layoutName: _0x11da9c.YwmND,
                    layoutClassName: _0x11da9c.UDHlU,
                    defaultJunctionPoint: _0x11da9c.xxSYK,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x11da9c.vuJTm,
                    min_per_width: _0x11da9c.TYKEL,
                    max_per_width: _0x11da9c.BXlHu,
                    min_per_height: '40',
                    max_per_height: '60',
                    levelDistance: ''
                }],
            defaultExpandHolderPosition: _0x11da9c.ypLIo,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x11da9c.MwThf,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x11da9c.CDbHY,
            defaultNodeColor: _0x11da9c.wlUht
        }
    };
};
d[_0x1c61('0x34')] = function () {
};
d[_0x1c61('0x35')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
d[_0x1c61('0x36')] = {};
d[_0x1c61('0x36')][_0x1c61('0x37')] = function () {
    var _0x5637a1 = {
        xvLcT: _0x1c61('0x38'),
        aNsXL: _0x1c61('0x39'),
        crkja: _0x1c61('0x3a'),
        rXWFK: _0x1c61('0x3b'),
        GcEKm: _0x1c61('0x3c'),
        BSENL: _0x1c61('0x3d'),
        jlXDM: _0x1c61('0x3e'),
        nedcw: _0x1c61('0x3f')
    };
    const _0x2973d3 = {
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
                                        id: _0x5637a1.xvLcT,
                                        text: _0x5637a1.xvLcT
                                    },
                                    {
                                        id: _0x5637a1.aNsXL,
                                        text: _0x5637a1.aNsXL
                                    },
                                    {
                                        id: _0x5637a1.crkja,
                                        text: _0x5637a1.crkja
                                    },
                                    {
                                        id: _0x5637a1.rXWFK,
                                        text: _0x5637a1.rXWFK
                                    },
                                    {
                                        id: _0x5637a1.GcEKm,
                                        text: _0x5637a1.GcEKm
                                    },
                                    {
                                        id: _0x5637a1.BSENL,
                                        text: _0x5637a1.BSENL
                                    }
                                ]
                            },
                            {
                                id: 'b2',
                                text: 'b2',
                                children: [
                                    {
                                        id: _0x5637a1.jlXDM,
                                        text: _0x5637a1.jlXDM
                                    },
                                    {
                                        id: _0x5637a1.nedcw,
                                        text: _0x5637a1.nedcw
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
    console.log(JSON.stringify(_0x2973d3)), this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x2973d3, _0x3ca9b9 => {
    });
};
var l = n(d, o, r, !0x1, s, null, null, null);
function s(_0x45c109) {
    for (let _0x16e5b9 in i)
        this[_0x16e5b9] = i[_0x16e5b9];
}
const h = function () {
    return l[_0x1c61('0x40')];
}();
export {
    h as default
};