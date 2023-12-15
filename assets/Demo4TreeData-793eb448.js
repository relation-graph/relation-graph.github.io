
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x11ec = [
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
    '23f4c166',
    'exports',
    'Nymmq',
    'hTELw',
    'div',
    'ENPvB',
    'c-my-panel',
    'ISThw',
    'c-option-name',
    'MdMBv',
    '25px',
    'eiJJF',
    '0px',
    'mukEB',
    '300px',
    'LZgBy',
    '\x20这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。\x20',
    'yAfot',
    'DLChj',
    '\x20直接使用tree数据结构有明显的确缺陷：只能设置全局的线条默认样式，无法对具体的link设置属性，不能精细的定义线条的样式。\x20',
    'ZBoAP',
    'zCizV',
    'jOxgD',
    'loading',
    'tvNCK',
    'v-loading',
    'mLThx',
    'g_loading',
    'HMNWv',
    'calc(100vh\x20-\x2060px)',
    'lzyAl',
    'DiqBb',
    'RelationGraph',
    'WuTaQ',
    'graphRef',
    'Plext',
    'graph-plug',
    '$createElement',
    '_self',
    'graphOptions',
    'name',
    'RelationGraphDemo'
];
(function (_0x28074f, _0x1e53a8) {
    var _0x1d9bc5 = function (_0xf16592) {
        while (--_0xf16592) {
            _0x28074f['push'](_0x28074f['shift']());
        }
    };
    _0x1d9bc5(++_0x1e53a8);
}(_0x11ec, 0x122));
var _0x5a7f = function (_0x12ada3, _0x5d3621) {
    _0x12ada3 = _0x12ada3 - 0x0;
    var _0x77b696 = _0x11ec[_0x12ada3];
    return _0x77b696;
};
import { n } from './index-0f873f6f.js';
var o = function () {
        var _0x4c4db1 = {};
        _0x4c4db1[_0x5a7f('0x0')] = function (_0x565cd1, _0xa3ddab, _0x9b3284, _0x36de62) {
            return _0x565cd1(_0xa3ddab, _0x9b3284, _0x36de62);
        };
        _0x4c4db1[_0x5a7f('0x1')] = _0x5a7f('0x2');
        _0x4c4db1[_0x5a7f('0x3')] = _0x5a7f('0x4');
        _0x4c4db1[_0x5a7f('0x5')] = _0x5a7f('0x6');
        _0x4c4db1[_0x5a7f('0x7')] = _0x5a7f('0x8');
        _0x4c4db1[_0x5a7f('0x9')] = _0x5a7f('0xa');
        _0x4c4db1[_0x5a7f('0xb')] = _0x5a7f('0xc');
        _0x4c4db1[_0x5a7f('0xd')] = _0x5a7f('0xe');
        _0x4c4db1[_0x5a7f('0xf')] = function (_0x3f04d2, _0x2caee5) {
            return _0x3f04d2(_0x2caee5);
        };
        _0x4c4db1[_0x5a7f('0x10')] = _0x5a7f('0x11');
        _0x4c4db1[_0x5a7f('0x12')] = function (_0x1ef3e1, _0x5b1c7b, _0x227f38, _0x2f4d1f) {
            return _0x1ef3e1(_0x5b1c7b, _0x227f38, _0x2f4d1f);
        };
        _0x4c4db1[_0x5a7f('0x13')] = function (_0x425e1c, _0x14accf, _0x9c81e4, _0x208579, _0x4d87ae) {
            return _0x425e1c(_0x14accf, _0x9c81e4, _0x208579, _0x4d87ae);
        };
        _0x4c4db1[_0x5a7f('0x14')] = _0x5a7f('0x15');
        _0x4c4db1[_0x5a7f('0x16')] = _0x5a7f('0x17');
        _0x4c4db1[_0x5a7f('0x18')] = _0x5a7f('0x19');
        _0x4c4db1[_0x5a7f('0x1a')] = _0x5a7f('0x1b');
        _0x4c4db1[_0x5a7f('0x1c')] = function (_0x19d817, _0x385a50, _0x1bdf77) {
            return _0x19d817(_0x385a50, _0x1bdf77);
        };
        _0x4c4db1[_0x5a7f('0x1d')] = _0x5a7f('0x1e');
        _0x4c4db1[_0x5a7f('0x1f')] = _0x5a7f('0x20');
        _0x4c4db1[_0x5a7f('0x21')] = _0x5a7f('0x22');
        var _0x4066f9 = this, _0x40b3ce = _0x4066f9[_0x5a7f('0x23')], _0xe32668 = _0x4066f9[_0x5a7f('0x24')]['_c'] || _0x40b3ce;
        return _0x4c4db1[_0x5a7f('0x12')](_0xe32668, _0x4c4db1[_0x5a7f('0x1')], {}, [_0x4c4db1[_0x5a7f('0x13')](_0xe32668, _0x4c4db1[_0x5a7f('0x1')], {
                'directives': [{
                        'name': _0x4c4db1[_0x5a7f('0x14')],
                        'rawName': _0x4c4db1[_0x5a7f('0x16')],
                        'value': _0x4066f9[_0x5a7f('0x19')],
                        'expression': _0x4c4db1[_0x5a7f('0x18')]
                    }],
                'staticStyle': { 'height': _0x4c4db1[_0x5a7f('0x1a')] }
            }, [_0x4c4db1[_0x5a7f('0x1c')](_0xe32668, _0x4c4db1[_0x5a7f('0x1d')], {
                    'ref': _0x4c4db1[_0x5a7f('0x1f')],
                    'attrs': { 'options': _0x4066f9[_0x5a7f('0x25')] },
                    'scopedSlots': _0x4066f9['_u']([{
                            'key': _0x4c4db1[_0x5a7f('0x21')],
                            'fn': function () {
                                return [_0x4c4db1[_0x5a7f('0x0')](_0xe32668, _0x4c4db1[_0x5a7f('0x1')], { 'staticClass': _0x4c4db1[_0x5a7f('0x3')] }, [_0x4c4db1[_0x5a7f('0x0')](_0xe32668, _0x4c4db1[_0x5a7f('0x1')], {
                                            'staticClass': _0x4c4db1[_0x5a7f('0x5')],
                                            'staticStyle': {
                                                'line-height': _0x4c4db1[_0x5a7f('0x7')],
                                                'padding': _0x4c4db1[_0x5a7f('0x9')],
                                                'width': _0x4c4db1[_0x5a7f('0xb')]
                                            }
                                        }, [
                                            _0x4066f9['_v'](_0x4c4db1[_0x5a7f('0xd')]),
                                            _0x4c4db1[_0x5a7f('0xf')](_0xe32668, 'br'),
                                            _0x4066f9['_v'](_0x4c4db1[_0x5a7f('0x10')])
                                        ])])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, r = [];
const d = {}, i = {};
d[_0x5a7f('0x26')] = _0x5a7f('0x27');
d[_0x5a7f('0x28')] = {};
d[_0x5a7f('0x29')] = function () {
    var _0x3e56d3 = {
        RGISt: _0x5a7f('0x2a'),
        ejTHW: _0x5a7f('0x2b'),
        yzTRv: _0x5a7f('0x2c'),
        VJwmd: _0x5a7f('0x2d'),
        bSmYK: _0x5a7f('0x2e'),
        xYkZg: _0x5a7f('0x2f'),
        RqXKY: _0x5a7f('0x30'),
        ZccLu: _0x5a7f('0x31'),
        Khmiv: _0x5a7f('0x32'),
        smxIz: _0x5a7f('0x33')
    };
    return {
        g_loading: !0x0,
        demoname: _0x3e56d3.RGISt,
        graphOptions: {
            debug: !0x1,
            layouts: [{
                    label: '中心',
                    layoutName: _0x3e56d3.ejTHW,
                    layoutClassName: _0x3e56d3.yzTRv,
                    defaultJunctionPoint: _0x3e56d3.VJwmd,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x3e56d3.bSmYK,
                    min_per_width: _0x3e56d3.xYkZg,
                    max_per_width: _0x3e56d3.RqXKY,
                    min_per_height: '40',
                    max_per_height: '60',
                    levelDistance: ''
                }],
            defaultExpandHolderPosition: _0x3e56d3.ZccLu,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x3e56d3.Khmiv,
            defaultNodeColor: _0x3e56d3.smxIz
        }
    };
};
d[_0x5a7f('0x34')] = function () {
};
d[_0x5a7f('0x35')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
d[_0x5a7f('0x36')] = {};
d[_0x5a7f('0x36')][_0x5a7f('0x37')] = function () {
    var _0x46186e = {
        nxMDM: _0x5a7f('0x38'),
        MmLnK: _0x5a7f('0x39'),
        UeNMk: _0x5a7f('0x3a'),
        GEaYe: _0x5a7f('0x3b'),
        ebAZv: _0x5a7f('0x3c'),
        QqtNi: _0x5a7f('0x3d'),
        rBNuw: _0x5a7f('0x3e'),
        kjoBI: _0x5a7f('0x3f')
    };
    const _0x5e1fe2 = {
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
                                        id: _0x46186e.nxMDM,
                                        text: _0x46186e.nxMDM
                                    },
                                    {
                                        id: _0x46186e.MmLnK,
                                        text: _0x46186e.MmLnK
                                    },
                                    {
                                        id: _0x46186e.UeNMk,
                                        text: _0x46186e.UeNMk
                                    },
                                    {
                                        id: _0x46186e.GEaYe,
                                        text: _0x46186e.GEaYe
                                    },
                                    {
                                        id: _0x46186e.ebAZv,
                                        text: _0x46186e.ebAZv
                                    },
                                    {
                                        id: _0x46186e.QqtNi,
                                        text: _0x46186e.QqtNi
                                    }
                                ]
                            },
                            {
                                id: 'b2',
                                text: 'b2',
                                children: [
                                    {
                                        id: _0x46186e.rBNuw,
                                        text: _0x46186e.rBNuw
                                    },
                                    {
                                        id: _0x46186e.kjoBI,
                                        text: _0x46186e.kjoBI
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
    console.log(JSON.stringify(_0x5e1fe2)), this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x5e1fe2, _0x20a3ae => {
    });
};
var l = n(d, o, r, !0x1, s, _0x5a7f('0x40'), null, null);
function s(_0x7d1b0a) {
    for (let _0x527d96 in i)
        this[_0x527d96] = i[_0x527d96];
}
const h = function () {
    return l[_0x5a7f('0x41')];
}();
export {
    h as default
};