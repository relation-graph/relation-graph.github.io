
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1daa = [
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
    'yyHsb',
    'uLrOY',
    'ObjectEditToolBar',
    'MFWPo',
    'XRCNI',
    'div',
    'LHpgL',
    'nynts',
    'calc(100vh\x20-\x2050px)',
    'viFuB',
    'RelationGraph',
    'jbGpa',
    'graphRef',
    'MkurQ',
    'tool-bar',
    '$createElement'
];
(function (_0x2ece3d, _0x8ac0f0) {
    var _0x18d1cf = function (_0x468882) {
        while (--_0x468882) {
            _0x2ece3d['push'](_0x2ece3d['shift']());
        }
    };
    _0x18d1cf(++_0x8ac0f0);
}(_0x1daa, 0x1eb));
var _0x1ba8 = function (_0x163670, _0x266cae) {
    _0x163670 = _0x163670 - 0x0;
    var _0x569593 = _0x1daa[_0x163670];
    return _0x569593;
};
import _0x3b2ab7 from './VipObjectEditToolBar-87f8d7bf.js';
import { n as _0x2cf13a } from './index-f64bbabb.js';
var i = function () {
        var GRYDng = {};
        GRYDng[_0x1ba8('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        GRYDng[_0x1ba8('0x1')] = _0x1ba8('0x2');
        GRYDng[_0x1ba8('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        GRYDng[_0x1ba8('0x4')] = _0x1ba8('0x5');
        GRYDng[_0x1ba8('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        GRYDng[_0x1ba8('0x7')] = _0x1ba8('0x8');
        GRYDng[_0x1ba8('0x9')] = _0x1ba8('0xa');
        GRYDng[_0x1ba8('0xb')] = _0x1ba8('0xc');
        GRYDng[_0x1ba8('0xd')] = _0x1ba8('0xe');
        var t = this, e = t[_0x1ba8('0xf')], o = t[_0x1ba8('0x10')]['_c'] || e;
        return GRYDng[_0x1ba8('0x3')](o, GRYDng[_0x1ba8('0x4')], [GRYDng[_0x1ba8('0x6')](o, GRYDng[_0x1ba8('0x4')], { 'staticStyle': { 'height': GRYDng[_0x1ba8('0x7')] } }, [GRYDng[_0x1ba8('0x3')](o, GRYDng[_0x1ba8('0x9')], {
                    'ref': GRYDng[_0x1ba8('0xb')],
                    'attrs': { 'options': t[_0x1ba8('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': GRYDng[_0x1ba8('0xd')],
                            'fn': function () {
                                return [GRYDng[_0x1ba8('0x0')](o, GRYDng[_0x1ba8('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x1ba8('0x12')] = _0x1ba8('0x13');
l[_0x1ba8('0x14')] = {};
l[_0x1ba8('0x15')] = function () {
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
l[_0x1ba8('0x16')] = function () {
    this.showGraph();
};
l[_0x1ba8('0x17')] = {};
l[_0x1ba8('0x17')][_0x1ba8('0x18')] = function () {
    var xenZpA = {
        diQPw: _0x1ba8('0x19'),
        NDdLk: _0x1ba8('0x1a'),
        Vackw: _0x1ba8('0x1b'),
        DOXKk: _0x1ba8('0x1c'),
        WFFlq: _0x1ba8('0x1d'),
        KddmM: _0x1ba8('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: xenZpA.diQPw
            },
            {
                id: 'b',
                text: 'B',
                color: xenZpA.NDdLk,
                fontColor: xenZpA.diQPw
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
                text: xenZpA.Vackw,
                color: xenZpA.NDdLk
            },
            {
                from: 'a',
                to: 'c',
                text: xenZpA.DOXKk
            },
            {
                from: 'a',
                to: 'e',
                text: xenZpA.WFFlq
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: xenZpA.KddmM
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x1ba8('0x14')][_0x1ba8('0x2')] = _0x3b2ab7;
c[_0x1ba8('0x1f')] = !0x1;
c[_0x1ba8('0x20')] = !0x0;
c[_0x1ba8('0x21')] = !0x0;
c[_0x1ba8('0x22')] = !0x0;
c[_0x1ba8('0x23')] = _0x1ba8('0x24');
var d = _0x2cf13a(l, i, s, !0x1, h, _0x1ba8('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x1ba8('0x26')];
}();
export {
    _ as default
};