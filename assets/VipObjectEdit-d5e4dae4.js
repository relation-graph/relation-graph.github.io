
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5299 = [
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
    '507d3bfa',
    'exports',
    'tKsvd',
    'WvbHc',
    'ObjectEditToolBar',
    'qEztV',
    'RLRHB',
    'div',
    'HMbdU',
    'oumxe',
    'calc(100vh\x20-\x2050px)',
    'AaDzj',
    'RelationGraph',
    'nTpLX',
    'graphRef',
    'kYTBK',
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
(function (_0x155bb7, _0x4b6ec7) {
    var _0x347c99 = function (_0x3a275e) {
        while (--_0x3a275e) {
            _0x155bb7['push'](_0x155bb7['shift']());
        }
    };
    _0x347c99(++_0x4b6ec7);
}(_0x5299, 0x1e4));
var _0x2633 = function (_0x4563a3, _0x38a23c) {
    _0x4563a3 = _0x4563a3 - 0x0;
    var _0x3a6b61 = _0x5299[_0x4563a3];
    return _0x3a6b61;
};
import _0x349882 from './VipObjectEditToolBar-eaa41270.js';
import { n as _0x5a78bb } from './index-8bb9272c.js';
var i = function () {
        var xkhSuj = {};
        xkhSuj[_0x2633('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        xkhSuj[_0x2633('0x1')] = _0x2633('0x2');
        xkhSuj[_0x2633('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        xkhSuj[_0x2633('0x4')] = _0x2633('0x5');
        xkhSuj[_0x2633('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        xkhSuj[_0x2633('0x7')] = _0x2633('0x8');
        xkhSuj[_0x2633('0x9')] = _0x2633('0xa');
        xkhSuj[_0x2633('0xb')] = _0x2633('0xc');
        xkhSuj[_0x2633('0xd')] = _0x2633('0xe');
        var t = this, e = t[_0x2633('0xf')], o = t[_0x2633('0x10')]['_c'] || e;
        return xkhSuj[_0x2633('0x3')](o, xkhSuj[_0x2633('0x4')], [xkhSuj[_0x2633('0x6')](o, xkhSuj[_0x2633('0x4')], { 'staticStyle': { 'height': xkhSuj[_0x2633('0x7')] } }, [xkhSuj[_0x2633('0x3')](o, xkhSuj[_0x2633('0x9')], {
                    'ref': xkhSuj[_0x2633('0xb')],
                    'attrs': { 'options': t[_0x2633('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': xkhSuj[_0x2633('0xd')],
                            'fn': function () {
                                return [xkhSuj[_0x2633('0x0')](o, xkhSuj[_0x2633('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x2633('0x12')] = _0x2633('0x13');
l[_0x2633('0x14')] = {};
l[_0x2633('0x15')] = function () {
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
l[_0x2633('0x16')] = function () {
    this.showGraph();
};
l[_0x2633('0x17')] = {};
l[_0x2633('0x17')][_0x2633('0x18')] = function () {
    var oisjFF = {
        EDZyR: _0x2633('0x19'),
        FDDGq: _0x2633('0x1a'),
        HvpdJ: _0x2633('0x1b'),
        SORut: _0x2633('0x1c'),
        MTSTa: _0x2633('0x1d'),
        LTrtP: _0x2633('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: oisjFF.EDZyR
            },
            {
                id: 'b',
                text: 'B',
                color: oisjFF.FDDGq,
                fontColor: oisjFF.EDZyR
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
                text: oisjFF.HvpdJ,
                color: oisjFF.FDDGq
            },
            {
                from: 'a',
                to: 'c',
                text: oisjFF.SORut
            },
            {
                from: 'a',
                to: 'e',
                text: oisjFF.MTSTa
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: oisjFF.LTrtP
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x2633('0x14')][_0x2633('0x2')] = _0x349882;
c[_0x2633('0x1f')] = !0x1;
c[_0x2633('0x20')] = !0x0;
c[_0x2633('0x21')] = !0x0;
c[_0x2633('0x22')] = !0x0;
c[_0x2633('0x23')] = _0x2633('0x24');
var d = _0x5a78bb(l, i, s, !0x1, h, _0x2633('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x2633('0x26')];
}();
export {
    _ as default
};