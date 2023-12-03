
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4acb = [
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
    'vrscX',
    'jUveI',
    'ObjectEditToolBar',
    'nXwGl',
    'NpUIx',
    'div',
    'LggYh',
    'SyjVf',
    'calc(100vh\x20-\x2050px)',
    'zHtfh',
    'pAIHB',
    'RelationGraph',
    'jzGXC',
    'graphRef',
    'ixcVM',
    'tool-bar'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x4acb, 0x1d0));
var _0xd61a = function (_0x5e6967, _0x3e3d9f) {
    _0x5e6967 = _0x5e6967 - 0x0;
    var _0x34b2d = _0x4acb[_0x5e6967];
    return _0x34b2d;
};
import _0x1695c9 from './VipObjectEditToolBar-3b323d06.js';
import { n as _0x106d20 } from './index-4e37fb25.js';
var i = function () {
        var aUBrst = {};
        aUBrst[_0xd61a('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        aUBrst[_0xd61a('0x1')] = _0xd61a('0x2');
        aUBrst[_0xd61a('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        aUBrst[_0xd61a('0x4')] = _0xd61a('0x5');
        aUBrst[_0xd61a('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        aUBrst[_0xd61a('0x7')] = _0xd61a('0x8');
        aUBrst[_0xd61a('0x9')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        aUBrst[_0xd61a('0xa')] = _0xd61a('0xb');
        aUBrst[_0xd61a('0xc')] = _0xd61a('0xd');
        aUBrst[_0xd61a('0xe')] = _0xd61a('0xf');
        var t = this, e = t[_0xd61a('0x10')], o = t[_0xd61a('0x11')]['_c'] || e;
        return aUBrst[_0xd61a('0x3')](o, aUBrst[_0xd61a('0x4')], [aUBrst[_0xd61a('0x6')](o, aUBrst[_0xd61a('0x4')], { 'staticStyle': { 'height': aUBrst[_0xd61a('0x7')] } }, [aUBrst[_0xd61a('0x9')](o, aUBrst[_0xd61a('0xa')], {
                    'ref': aUBrst[_0xd61a('0xc')],
                    'attrs': { 'options': t[_0xd61a('0x12')] },
                    'scopedSlots': t['_u']([{
                            'key': aUBrst[_0xd61a('0xe')],
                            'fn': function () {
                                return [aUBrst[_0xd61a('0x0')](o, aUBrst[_0xd61a('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0xd61a('0x13')] = _0xd61a('0x14');
l[_0xd61a('0x15')] = {};
l[_0xd61a('0x16')] = function () {
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
l[_0xd61a('0x17')] = function () {
    this.showGraph();
};
l[_0xd61a('0x18')] = {};
l[_0xd61a('0x18')][_0xd61a('0x19')] = function () {
    var RVLoip = {
        mkNKF: _0xd61a('0x1a'),
        PZinK: _0xd61a('0x1b'),
        AvKgu: _0xd61a('0x1c'),
        tcYtm: _0xd61a('0x1d'),
        FrfYq: _0xd61a('0x1e'),
        ZkhHU: _0xd61a('0x1f')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: RVLoip.mkNKF
            },
            {
                id: 'b',
                text: 'B',
                color: RVLoip.PZinK,
                fontColor: RVLoip.mkNKF
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
                text: RVLoip.AvKgu,
                color: RVLoip.PZinK
            },
            {
                from: 'a',
                to: 'c',
                text: RVLoip.tcYtm
            },
            {
                from: 'a',
                to: 'e',
                text: RVLoip.FrfYq
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: RVLoip.ZkhHU
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0xd61a('0x15')][_0xd61a('0x2')] = _0x1695c9;
c[_0xd61a('0x20')] = !0x1;
c[_0xd61a('0x21')] = !0x0;
c[_0xd61a('0x22')] = !0x0;
c[_0xd61a('0x23')] = !0x0;
c[_0xd61a('0x24')] = _0xd61a('0x25');
var d = _0x106d20(l, i, s, !0x1, h, _0xd61a('0x26'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0xd61a('0x27')];
}();
export {
    _ as default
};