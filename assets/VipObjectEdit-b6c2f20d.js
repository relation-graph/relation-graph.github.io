
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5708 = [
    'GlPey',
    'mcJtZ',
    'div',
    'yaUrQ',
    'TTyUi',
    'calc(100vh\x20-\x2050px)',
    'pGffM',
    'grXoQ',
    'RelationGraph',
    'xLyRk',
    'graphRef',
    'jHAaJ',
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
    'XxPhh',
    'IrIRY',
    'ObjectEditToolBar'
];
(function (_0x4c3799, _0xc5a537) {
    var _0x39e1d5 = function (_0x5ef4da) {
        while (--_0x5ef4da) {
            _0x4c3799['push'](_0x4c3799['shift']());
        }
    };
    _0x39e1d5(++_0xc5a537);
}(_0x5708, 0x75));
var _0x5f4f = function (_0x5c395f, _0x5e82fa) {
    _0x5c395f = _0x5c395f - 0x0;
    var _0x501b68 = _0x5708[_0x5c395f];
    return _0x501b68;
};
import _0x3fd128 from './VipObjectEditToolBar-fd6a0607.js';
import { n as _0x21b6f8 } from './index-120b3164.js';
var i = function () {
        var LseNps = {};
        LseNps[_0x5f4f('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        LseNps[_0x5f4f('0x1')] = _0x5f4f('0x2');
        LseNps[_0x5f4f('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        LseNps[_0x5f4f('0x4')] = _0x5f4f('0x5');
        LseNps[_0x5f4f('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        LseNps[_0x5f4f('0x7')] = _0x5f4f('0x8');
        LseNps[_0x5f4f('0x9')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        LseNps[_0x5f4f('0xa')] = _0x5f4f('0xb');
        LseNps[_0x5f4f('0xc')] = _0x5f4f('0xd');
        LseNps[_0x5f4f('0xe')] = _0x5f4f('0xf');
        var t = this, e = t[_0x5f4f('0x10')], o = t[_0x5f4f('0x11')]['_c'] || e;
        return LseNps[_0x5f4f('0x3')](o, LseNps[_0x5f4f('0x4')], [LseNps[_0x5f4f('0x6')](o, LseNps[_0x5f4f('0x4')], { 'staticStyle': { 'height': LseNps[_0x5f4f('0x7')] } }, [LseNps[_0x5f4f('0x9')](o, LseNps[_0x5f4f('0xa')], {
                    'ref': LseNps[_0x5f4f('0xc')],
                    'attrs': { 'options': t[_0x5f4f('0x12')] },
                    'scopedSlots': t['_u']([{
                            'key': LseNps[_0x5f4f('0xe')],
                            'fn': function () {
                                return [LseNps[_0x5f4f('0x0')](o, LseNps[_0x5f4f('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x5f4f('0x13')] = _0x5f4f('0x14');
l[_0x5f4f('0x15')] = {};
l[_0x5f4f('0x16')] = function () {
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
l[_0x5f4f('0x17')] = function () {
    this.showGraph();
};
l[_0x5f4f('0x18')] = {};
l[_0x5f4f('0x18')][_0x5f4f('0x19')] = function () {
    var mROgDZ = {
        LAOul: _0x5f4f('0x1a'),
        JMpsJ: _0x5f4f('0x1b'),
        YbbTn: _0x5f4f('0x1c'),
        Xmipy: _0x5f4f('0x1d'),
        aGzNJ: _0x5f4f('0x1e'),
        bRxdo: _0x5f4f('0x1f')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: mROgDZ.LAOul
            },
            {
                id: 'b',
                text: 'B',
                color: mROgDZ.JMpsJ,
                fontColor: mROgDZ.LAOul
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
                text: mROgDZ.YbbTn,
                color: mROgDZ.JMpsJ
            },
            {
                from: 'a',
                to: 'c',
                text: mROgDZ.Xmipy
            },
            {
                from: 'a',
                to: 'e',
                text: mROgDZ.aGzNJ
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: mROgDZ.bRxdo
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x5f4f('0x15')][_0x5f4f('0x2')] = _0x3fd128;
c[_0x5f4f('0x20')] = !0x1;
c[_0x5f4f('0x21')] = !0x0;
c[_0x5f4f('0x22')] = !0x0;
c[_0x5f4f('0x23')] = !0x0;
c[_0x5f4f('0x24')] = _0x5f4f('0x25');
var d = _0x21b6f8(l, i, s, !0x1, h, _0x5f4f('0x26'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x5f4f('0x27')];
}();
export {
    _ as default
};