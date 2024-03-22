
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x6cf1 = [
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
    '507d3bfa',
    'exports',
    'OtkwP',
    'zgSvL',
    'ObjectEditToolBar',
    'rUSjX',
    'Fxtgw',
    'div',
    'yaCPu',
    'UKPpu',
    'calc(100vh\x20-\x2050px)',
    'tePbQ',
    'RelationGraph',
    'XQPRY',
    'graphRef',
    'QeGhn',
    'tool-bar',
    '$createElement',
    '_self',
    'graphOptions',
    'name'
];
(function (_0x610810, _0x64bc50) {
    var _0x2a2176 = function (_0x5e0d06) {
        while (--_0x5e0d06) {
            _0x610810['push'](_0x610810['shift']());
        }
    };
    _0x2a2176(++_0x64bc50);
}(_0x6cf1, 0x125));
var _0x3f17 = function (_0x2235d4, _0x1111b7) {
    _0x2235d4 = _0x2235d4 - 0x0;
    var _0x9b36dd = _0x6cf1[_0x2235d4];
    return _0x9b36dd;
};
import _0x2b031b from './VipObjectEditToolBar-13abdf60.js';
import { n as _0x48b0a9 } from './index-95e0ef84.js';
var i = function () {
        var ylroUY = {};
        ylroUY[_0x3f17('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        ylroUY[_0x3f17('0x1')] = _0x3f17('0x2');
        ylroUY[_0x3f17('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        ylroUY[_0x3f17('0x4')] = _0x3f17('0x5');
        ylroUY[_0x3f17('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        ylroUY[_0x3f17('0x7')] = _0x3f17('0x8');
        ylroUY[_0x3f17('0x9')] = _0x3f17('0xa');
        ylroUY[_0x3f17('0xb')] = _0x3f17('0xc');
        ylroUY[_0x3f17('0xd')] = _0x3f17('0xe');
        var t = this, e = t[_0x3f17('0xf')], o = t[_0x3f17('0x10')]['_c'] || e;
        return ylroUY[_0x3f17('0x3')](o, ylroUY[_0x3f17('0x4')], [ylroUY[_0x3f17('0x6')](o, ylroUY[_0x3f17('0x4')], { 'staticStyle': { 'height': ylroUY[_0x3f17('0x7')] } }, [ylroUY[_0x3f17('0x3')](o, ylroUY[_0x3f17('0x9')], {
                    'ref': ylroUY[_0x3f17('0xb')],
                    'attrs': { 'options': t[_0x3f17('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': ylroUY[_0x3f17('0xd')],
                            'fn': function () {
                                return [ylroUY[_0x3f17('0x0')](o, ylroUY[_0x3f17('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x3f17('0x12')] = _0x3f17('0x13');
l[_0x3f17('0x14')] = {};
l[_0x3f17('0x15')] = function () {
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
l[_0x3f17('0x16')] = function () {
    this.showGraph();
};
l[_0x3f17('0x17')] = {};
l[_0x3f17('0x17')][_0x3f17('0x18')] = function () {
    var lJjMoF = {
        aOjeM: _0x3f17('0x19'),
        expiX: _0x3f17('0x1a'),
        wEqXX: _0x3f17('0x1b'),
        rDyoi: _0x3f17('0x1c'),
        KwWWt: _0x3f17('0x1d'),
        SnrXZ: _0x3f17('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: lJjMoF.aOjeM
            },
            {
                id: 'b',
                text: 'B',
                color: lJjMoF.expiX,
                fontColor: lJjMoF.aOjeM
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
                text: lJjMoF.wEqXX,
                color: lJjMoF.expiX
            },
            {
                from: 'a',
                to: 'c',
                text: lJjMoF.rDyoi
            },
            {
                from: 'a',
                to: 'e',
                text: lJjMoF.KwWWt
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: lJjMoF.SnrXZ
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x3f17('0x14')][_0x3f17('0x2')] = _0x2b031b;
c[_0x3f17('0x1f')] = !0x1;
c[_0x3f17('0x20')] = !0x0;
c[_0x3f17('0x21')] = !0x0;
c[_0x3f17('0x22')] = !0x0;
c[_0x3f17('0x23')] = _0x3f17('0x24');
var d = _0x48b0a9(l, i, s, !0x1, h, _0x3f17('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x3f17('0x26')];
}();
export {
    _ as default
};