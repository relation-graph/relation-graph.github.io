
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x465d = [
    'border',
    '550b423e',
    'exports',
    'EsJSI',
    'QFoId',
    'ObjectEditToolBar',
    'DJckm',
    'BMgCK',
    'div',
    'vrJZC',
    'ayYzk',
    'calc(100vh\x20-\x2050px)',
    'byWSD',
    'RelationGraph',
    'mIQxj',
    'graphRef',
    'ZYatq',
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
    'defaultJunctionPoint'
];
(function (_0x1c24db, _0x3e8420) {
    var _0x36d1ff = function (_0x11d477) {
        while (--_0x11d477) {
            _0x1c24db['push'](_0x1c24db['shift']());
        }
    };
    _0x36d1ff(++_0x3e8420);
}(_0x465d, 0x1b0));
var _0xcb87 = function (_0xd791db, _0x540148) {
    _0xd791db = _0xd791db - 0x0;
    var _0x320e71 = _0x465d[_0xd791db];
    return _0x320e71;
};
import _0x76c377 from './VipObjectEditToolBar-4069b038.js';
import { n as _0x1edf4f } from './index-a776829b.js';
var i = function () {
        var fpFjCo = {};
        fpFjCo[_0xcb87('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        fpFjCo[_0xcb87('0x1')] = _0xcb87('0x2');
        fpFjCo[_0xcb87('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        fpFjCo[_0xcb87('0x4')] = _0xcb87('0x5');
        fpFjCo[_0xcb87('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        fpFjCo[_0xcb87('0x7')] = _0xcb87('0x8');
        fpFjCo[_0xcb87('0x9')] = _0xcb87('0xa');
        fpFjCo[_0xcb87('0xb')] = _0xcb87('0xc');
        fpFjCo[_0xcb87('0xd')] = _0xcb87('0xe');
        var t = this, e = t[_0xcb87('0xf')], o = t[_0xcb87('0x10')]['_c'] || e;
        return fpFjCo[_0xcb87('0x3')](o, fpFjCo[_0xcb87('0x4')], [fpFjCo[_0xcb87('0x6')](o, fpFjCo[_0xcb87('0x4')], { 'staticStyle': { 'height': fpFjCo[_0xcb87('0x7')] } }, [fpFjCo[_0xcb87('0x3')](o, fpFjCo[_0xcb87('0x9')], {
                    'ref': fpFjCo[_0xcb87('0xb')],
                    'attrs': { 'options': t[_0xcb87('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': fpFjCo[_0xcb87('0xd')],
                            'fn': function () {
                                return [fpFjCo[_0xcb87('0x0')](o, fpFjCo[_0xcb87('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0xcb87('0x12')] = _0xcb87('0x13');
l[_0xcb87('0x14')] = {};
l[_0xcb87('0x15')] = function () {
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
l[_0xcb87('0x16')] = function () {
    this.showGraph();
};
l[_0xcb87('0x17')] = {};
l[_0xcb87('0x17')][_0xcb87('0x18')] = function () {
    var WFMteI = {
        qlErq: _0xcb87('0x19'),
        nYOcn: _0xcb87('0x1a'),
        oQyhs: _0xcb87('0x1b'),
        QmIVs: _0xcb87('0x1c'),
        sZynq: _0xcb87('0x1d'),
        aGpMj: _0xcb87('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: WFMteI.qlErq
            },
            {
                id: 'b',
                text: 'B',
                color: WFMteI.nYOcn,
                fontColor: WFMteI.qlErq
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
                text: WFMteI.oQyhs,
                color: WFMteI.nYOcn
            },
            {
                from: 'a',
                to: 'c',
                text: WFMteI.QmIVs
            },
            {
                from: 'a',
                to: 'e',
                text: WFMteI.sZynq
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: WFMteI.aGpMj
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0xcb87('0x14')][_0xcb87('0x2')] = _0x76c377;
c[_0xcb87('0x1f')] = !0x1;
c[_0xcb87('0x20')] = !0x0;
c[_0xcb87('0x21')] = !0x0;
c[_0xcb87('0x22')] = !0x0;
c[_0xcb87('0x23')] = _0xcb87('0x24');
var d = _0x1edf4f(l, i, s, !0x1, h, _0xcb87('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0xcb87('0x26')];
}();
export {
    _ as default
};