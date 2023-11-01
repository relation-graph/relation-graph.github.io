
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x24e0 = [
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
    'LpxQx',
    'vISeN',
    'ObjectEditToolBar',
    'FYqDy',
    'ZmRja',
    'div',
    'xIoed',
    'lyxLW',
    'calc(100vh\x20-\x2050px)',
    'gQyNZ',
    'RelationGraph',
    'CYVBi',
    'graphRef',
    'relfm',
    'tool-bar'
];
(function (_0x252d56, _0x16586a) {
    var _0x1eb60b = function (_0x1b3c1d) {
        while (--_0x1b3c1d) {
            _0x252d56['push'](_0x252d56['shift']());
        }
    };
    _0x1eb60b(++_0x16586a);
}(_0x24e0, 0x150));
var _0x2cb9 = function (_0x52d2a6, _0x656007) {
    _0x52d2a6 = _0x52d2a6 - 0x0;
    var _0x27c379 = _0x24e0[_0x52d2a6];
    return _0x27c379;
};
import _0xc3eadb from './VipObjectEditToolBar-7fdf143c.js';
import { n as _0x81be41 } from './index-fca44c1d.js';
var i = function () {
        var CeglWT = {};
        CeglWT[_0x2cb9('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        CeglWT[_0x2cb9('0x1')] = _0x2cb9('0x2');
        CeglWT[_0x2cb9('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        CeglWT[_0x2cb9('0x4')] = _0x2cb9('0x5');
        CeglWT[_0x2cb9('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        CeglWT[_0x2cb9('0x7')] = _0x2cb9('0x8');
        CeglWT[_0x2cb9('0x9')] = _0x2cb9('0xa');
        CeglWT[_0x2cb9('0xb')] = _0x2cb9('0xc');
        CeglWT[_0x2cb9('0xd')] = _0x2cb9('0xe');
        var t = this, e = t[_0x2cb9('0xf')], o = t[_0x2cb9('0x10')]['_c'] || e;
        return CeglWT[_0x2cb9('0x3')](o, CeglWT[_0x2cb9('0x4')], [CeglWT[_0x2cb9('0x6')](o, CeglWT[_0x2cb9('0x4')], { 'staticStyle': { 'height': CeglWT[_0x2cb9('0x7')] } }, [CeglWT[_0x2cb9('0x3')](o, CeglWT[_0x2cb9('0x9')], {
                    'ref': CeglWT[_0x2cb9('0xb')],
                    'attrs': { 'options': t[_0x2cb9('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': CeglWT[_0x2cb9('0xd')],
                            'fn': function () {
                                return [CeglWT[_0x2cb9('0x0')](o, CeglWT[_0x2cb9('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x2cb9('0x12')] = _0x2cb9('0x13');
l[_0x2cb9('0x14')] = {};
l[_0x2cb9('0x15')] = function () {
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
l[_0x2cb9('0x16')] = function () {
    this.showGraph();
};
l[_0x2cb9('0x17')] = {};
l[_0x2cb9('0x17')][_0x2cb9('0x18')] = function () {
    var WoTgCt = {
        OUTTC: _0x2cb9('0x19'),
        WvWYq: _0x2cb9('0x1a'),
        jawkw: _0x2cb9('0x1b'),
        GKcEe: _0x2cb9('0x1c'),
        rsklF: _0x2cb9('0x1d'),
        ZGaCH: _0x2cb9('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: WoTgCt.OUTTC
            },
            {
                id: 'b',
                text: 'B',
                color: WoTgCt.WvWYq,
                fontColor: WoTgCt.OUTTC
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
                text: WoTgCt.jawkw,
                color: WoTgCt.WvWYq
            },
            {
                from: 'a',
                to: 'c',
                text: WoTgCt.GKcEe
            },
            {
                from: 'a',
                to: 'e',
                text: WoTgCt.rsklF
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: WoTgCt.ZGaCH
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x2cb9('0x14')][_0x2cb9('0x2')] = _0xc3eadb;
c[_0x2cb9('0x1f')] = !0x1;
c[_0x2cb9('0x20')] = !0x0;
c[_0x2cb9('0x21')] = !0x0;
c[_0x2cb9('0x22')] = !0x0;
c[_0x2cb9('0x23')] = _0x2cb9('0x24');
var d = _0x81be41(l, i, s, !0x1, h, _0x2cb9('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x2cb9('0x26')];
}();
export {
    _ as default
};