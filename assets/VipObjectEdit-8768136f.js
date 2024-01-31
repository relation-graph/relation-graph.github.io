
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xe2c0 = [
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
    'hvXVr',
    'DuTrB',
    'ObjectEditToolBar',
    'hRTFV',
    'pcWtW',
    'div',
    'LEAEA',
    'npkSZ',
    'calc(100vh\x20-\x2050px)',
    'sPLNf',
    'pHaXK',
    'RelationGraph',
    'ZgDAc',
    'graphRef',
    'PoZSa',
    'tool-bar',
    '$createElement',
    '_self',
    'graphOptions'
];
(function (_0x3818b3, _0x3f422a) {
    var _0x503bb0 = function (_0x150dd9) {
        while (--_0x150dd9) {
            _0x3818b3['push'](_0x3818b3['shift']());
        }
    };
    _0x503bb0(++_0x3f422a);
}(_0xe2c0, 0x105));
var _0x3f92 = function (_0x3cc5e9, _0x5d9ff5) {
    _0x3cc5e9 = _0x3cc5e9 - 0x0;
    var _0xf6bb43 = _0xe2c0[_0x3cc5e9];
    return _0xf6bb43;
};
import _0xd841e5 from './VipObjectEditToolBar-25d2a55d.js';
import { n as _0x464399 } from './index-36eaf5cf.js';
var i = function () {
        var xjEGhe = {};
        xjEGhe[_0x3f92('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        xjEGhe[_0x3f92('0x1')] = _0x3f92('0x2');
        xjEGhe[_0x3f92('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        xjEGhe[_0x3f92('0x4')] = _0x3f92('0x5');
        xjEGhe[_0x3f92('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        xjEGhe[_0x3f92('0x7')] = _0x3f92('0x8');
        xjEGhe[_0x3f92('0x9')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        xjEGhe[_0x3f92('0xa')] = _0x3f92('0xb');
        xjEGhe[_0x3f92('0xc')] = _0x3f92('0xd');
        xjEGhe[_0x3f92('0xe')] = _0x3f92('0xf');
        var t = this, e = t[_0x3f92('0x10')], o = t[_0x3f92('0x11')]['_c'] || e;
        return xjEGhe[_0x3f92('0x3')](o, xjEGhe[_0x3f92('0x4')], [xjEGhe[_0x3f92('0x6')](o, xjEGhe[_0x3f92('0x4')], { 'staticStyle': { 'height': xjEGhe[_0x3f92('0x7')] } }, [xjEGhe[_0x3f92('0x9')](o, xjEGhe[_0x3f92('0xa')], {
                    'ref': xjEGhe[_0x3f92('0xc')],
                    'attrs': { 'options': t[_0x3f92('0x12')] },
                    'scopedSlots': t['_u']([{
                            'key': xjEGhe[_0x3f92('0xe')],
                            'fn': function () {
                                return [xjEGhe[_0x3f92('0x0')](o, xjEGhe[_0x3f92('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x3f92('0x13')] = _0x3f92('0x14');
l[_0x3f92('0x15')] = {};
l[_0x3f92('0x16')] = function () {
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
l[_0x3f92('0x17')] = function () {
    this.showGraph();
};
l[_0x3f92('0x18')] = {};
l[_0x3f92('0x18')][_0x3f92('0x19')] = function () {
    var xYLXfV = {
        DCSjE: _0x3f92('0x1a'),
        fpHVU: _0x3f92('0x1b'),
        ARNET: _0x3f92('0x1c'),
        gHbjp: _0x3f92('0x1d'),
        AldCt: _0x3f92('0x1e'),
        CvTMC: _0x3f92('0x1f')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: xYLXfV.DCSjE
            },
            {
                id: 'b',
                text: 'B',
                color: xYLXfV.fpHVU,
                fontColor: xYLXfV.DCSjE
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
                text: xYLXfV.ARNET,
                color: xYLXfV.fpHVU
            },
            {
                from: 'a',
                to: 'c',
                text: xYLXfV.gHbjp
            },
            {
                from: 'a',
                to: 'e',
                text: xYLXfV.AldCt
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: xYLXfV.CvTMC
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x3f92('0x15')][_0x3f92('0x2')] = _0xd841e5;
c[_0x3f92('0x20')] = !0x1;
c[_0x3f92('0x21')] = !0x0;
c[_0x3f92('0x22')] = !0x0;
c[_0x3f92('0x23')] = !0x0;
c[_0x3f92('0x24')] = _0x3f92('0x25');
var d = _0x464399(l, i, s, !0x1, h, _0x3f92('0x26'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x3f92('0x27')];
}();
export {
    _ as default
};