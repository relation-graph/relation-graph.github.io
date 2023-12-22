
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x29da = [
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
    'iMpus',
    'JuWKc',
    'ObjectEditToolBar',
    'LLaRi',
    'UvSNp',
    'div',
    'viaGw',
    'jCZMB',
    'calc(100vh\x20-\x2050px)',
    'lfXEr',
    'RelationGraph',
    'WsUZJ',
    'graphRef',
    'LuNuR',
    'tool-bar',
    '$createElement',
    '_self',
    'graphOptions',
    'name',
    'ObjectEdit',
    'components',
    'data',
    'mounted'
];
(function (_0x3947b4, _0x1d2197) {
    var _0x1d229b = function (_0x4fa9bc) {
        while (--_0x4fa9bc) {
            _0x3947b4['push'](_0x3947b4['shift']());
        }
    };
    _0x1d229b(++_0x1d2197);
}(_0x29da, 0x85));
var _0x391c = function (_0x3473c3, _0x517848) {
    _0x3473c3 = _0x3473c3 - 0x0;
    var _0x1e6691 = _0x29da[_0x3473c3];
    return _0x1e6691;
};
import _0x41be3e from './VipObjectEditToolBar-e891a563.js';
import { n as _0x2701ad } from './index-c22e9dce.js';
var i = function () {
        var tnmHwu = {};
        tnmHwu[_0x391c('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        tnmHwu[_0x391c('0x1')] = _0x391c('0x2');
        tnmHwu[_0x391c('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        tnmHwu[_0x391c('0x4')] = _0x391c('0x5');
        tnmHwu[_0x391c('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        tnmHwu[_0x391c('0x7')] = _0x391c('0x8');
        tnmHwu[_0x391c('0x9')] = _0x391c('0xa');
        tnmHwu[_0x391c('0xb')] = _0x391c('0xc');
        tnmHwu[_0x391c('0xd')] = _0x391c('0xe');
        var t = this, e = t[_0x391c('0xf')], o = t[_0x391c('0x10')]['_c'] || e;
        return tnmHwu[_0x391c('0x3')](o, tnmHwu[_0x391c('0x4')], [tnmHwu[_0x391c('0x6')](o, tnmHwu[_0x391c('0x4')], { 'staticStyle': { 'height': tnmHwu[_0x391c('0x7')] } }, [tnmHwu[_0x391c('0x3')](o, tnmHwu[_0x391c('0x9')], {
                    'ref': tnmHwu[_0x391c('0xb')],
                    'attrs': { 'options': t[_0x391c('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': tnmHwu[_0x391c('0xd')],
                            'fn': function () {
                                return [tnmHwu[_0x391c('0x0')](o, tnmHwu[_0x391c('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x391c('0x12')] = _0x391c('0x13');
l[_0x391c('0x14')] = {};
l[_0x391c('0x15')] = function () {
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
l[_0x391c('0x16')] = function () {
    this.showGraph();
};
l[_0x391c('0x17')] = {};
l[_0x391c('0x17')][_0x391c('0x18')] = function () {
    var hhCyFa = {
        vrVTm: _0x391c('0x19'),
        aPiZB: _0x391c('0x1a'),
        DTbRs: _0x391c('0x1b'),
        pLeaM: _0x391c('0x1c'),
        jRGGr: _0x391c('0x1d'),
        DcUhQ: _0x391c('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: hhCyFa.vrVTm
            },
            {
                id: 'b',
                text: 'B',
                color: hhCyFa.aPiZB,
                fontColor: hhCyFa.vrVTm
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
                text: hhCyFa.DTbRs,
                color: hhCyFa.aPiZB
            },
            {
                from: 'a',
                to: 'c',
                text: hhCyFa.pLeaM
            },
            {
                from: 'a',
                to: 'e',
                text: hhCyFa.jRGGr
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: hhCyFa.DcUhQ
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x391c('0x14')][_0x391c('0x2')] = _0x41be3e;
c[_0x391c('0x1f')] = !0x1;
c[_0x391c('0x20')] = !0x0;
c[_0x391c('0x21')] = !0x0;
c[_0x391c('0x22')] = !0x0;
c[_0x391c('0x23')] = _0x391c('0x24');
var d = _0x2701ad(l, i, s, !0x1, h, _0x391c('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x391c('0x26')];
}();
export {
    _ as default
};