
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2f36 = [
    'ixzHj',
    'tool-bar',
    '$createElement',
    '_self',
    'graphOptions',
    'name',
    'ObjectEdit',
    'components',
    'data',
    'mounted',
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    '关系1',
    '关系2',
    '关系3',
    '#67C23A',
    'debug',
    'allowSwitchLineShape',
    'allowSwitchJunctionPoint',
    'allowShowDownloadButton',
    'defaultJunctionPoint',
    'border',
    '550b423e',
    'exports',
    'xizdY',
    'CGSgV',
    'ObjectEditToolBar',
    'sEkhM',
    'DOBrn',
    'div',
    'XVJZB',
    'xtPTL',
    'calc(100vh\x20-\x2050px)',
    'qizwO',
    'CALDl',
    'RelationGraph',
    'VCVIf',
    'graphRef'
];
(function (_0x37a53e, _0x2c66c7) {
    var _0x1844c4 = function (_0x3a60a8) {
        while (--_0x3a60a8) {
            _0x37a53e['push'](_0x37a53e['shift']());
        }
    };
    _0x1844c4(++_0x2c66c7);
}(_0x2f36, 0x182));
var _0x4b13 = function (_0x4be7f4, _0x6f3af3) {
    _0x4be7f4 = _0x4be7f4 - 0x0;
    var _0x57dc18 = _0x2f36[_0x4be7f4];
    return _0x57dc18;
};
import _0x98329e from './VipObjectEditToolBar-65ec7c42.js';
import { n as _0x377fb1 } from './index-7cdfa577.js';
var i = function () {
        var LYXrJY = {};
        LYXrJY[_0x4b13('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        LYXrJY[_0x4b13('0x1')] = _0x4b13('0x2');
        LYXrJY[_0x4b13('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        LYXrJY[_0x4b13('0x4')] = _0x4b13('0x5');
        LYXrJY[_0x4b13('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        LYXrJY[_0x4b13('0x7')] = _0x4b13('0x8');
        LYXrJY[_0x4b13('0x9')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        LYXrJY[_0x4b13('0xa')] = _0x4b13('0xb');
        LYXrJY[_0x4b13('0xc')] = _0x4b13('0xd');
        LYXrJY[_0x4b13('0xe')] = _0x4b13('0xf');
        var t = this, e = t[_0x4b13('0x10')], o = t[_0x4b13('0x11')]['_c'] || e;
        return LYXrJY[_0x4b13('0x3')](o, LYXrJY[_0x4b13('0x4')], [LYXrJY[_0x4b13('0x6')](o, LYXrJY[_0x4b13('0x4')], { 'staticStyle': { 'height': LYXrJY[_0x4b13('0x7')] } }, [LYXrJY[_0x4b13('0x9')](o, LYXrJY[_0x4b13('0xa')], {
                    'ref': LYXrJY[_0x4b13('0xc')],
                    'attrs': { 'options': t[_0x4b13('0x12')] },
                    'scopedSlots': t['_u']([{
                            'key': LYXrJY[_0x4b13('0xe')],
                            'fn': function () {
                                return [LYXrJY[_0x4b13('0x0')](o, LYXrJY[_0x4b13('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x4b13('0x13')] = _0x4b13('0x14');
l[_0x4b13('0x15')] = {};
l[_0x4b13('0x16')] = function () {
    return {
        isShowNodeTipsPanel: !0x1,
        nodeMenuPanelPosition: {
            x: 0x0,
            y: 0x0
        },
        currentObjectType: null,
        currentObject: '',
        newNodeIdIndex: 0x1,
        newLineIdIndex: 0x1,
        graphOptions: c
    };
};
l[_0x4b13('0x17')] = function () {
    this.showGraph();
};
l[_0x4b13('0x18')] = {};
l[_0x4b13('0x18')][_0x4b13('0x19')] = function () {
    var Oqlmol = {
        qboWj: _0x4b13('0x1a'),
        IRcuz: _0x4b13('0x1b'),
        yUThF: _0x4b13('0x1c'),
        PXAfB: _0x4b13('0x1d'),
        HRRTK: _0x4b13('0x1e'),
        Jtxwl: _0x4b13('0x1f')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: Oqlmol.qboWj
            },
            {
                id: 'b',
                text: 'B',
                color: Oqlmol.IRcuz,
                fontColor: Oqlmol.qboWj
            },
            {
                id: 'c',
                text: 'C',
                nodeShape: 0x1,
                width: 0x50,
                height: 0x3c
            },
            {
                id: 'e',
                text: 'E',
                nodeShape: 0x0,
                width: 0x96,
                height: 0x96
            }
        ],
        lines: [
            {
                from: 'a',
                to: 'b',
                text: Oqlmol.yUThF,
                color: Oqlmol.IRcuz
            },
            {
                from: 'a',
                to: 'c',
                text: Oqlmol.PXAfB
            },
            {
                from: 'a',
                to: 'e',
                text: Oqlmol.HRRTK
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: Oqlmol.Jtxwl
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x4b13('0x15')][_0x4b13('0x2')] = _0x98329e;
c[_0x4b13('0x20')] = !0x1;
c[_0x4b13('0x21')] = !0x0;
c[_0x4b13('0x22')] = !0x0;
c[_0x4b13('0x23')] = !0x0;
c[_0x4b13('0x24')] = _0x4b13('0x25');
var d = _0x377fb1(l, i, s, !0x1, h, _0x4b13('0x26'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x4b13('0x27')];
}();
export {
    _ as default
};