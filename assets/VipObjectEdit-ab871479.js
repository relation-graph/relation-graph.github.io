
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4680 = [
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
    'oVCmM',
    'bMckZ',
    'ObjectEditToolBar',
    'cOIiP',
    'PxXlC',
    'div',
    'dcoto',
    'VqSZL',
    'calc(100vh\x20-\x2050px)',
    'mNSzy',
    'RelationGraph',
    'tMabN',
    'graphRef',
    'AZiLV',
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
(function (_0x1a3834, _0x2b7341) {
    var _0x57af4b = function (_0x41ece3) {
        while (--_0x41ece3) {
            _0x1a3834['push'](_0x1a3834['shift']());
        }
    };
    _0x57af4b(++_0x2b7341);
}(_0x4680, 0x85));
var _0x236f = function (_0x56306d, _0x5305ed) {
    _0x56306d = _0x56306d - 0x0;
    var _0x45f027 = _0x4680[_0x56306d];
    return _0x45f027;
};
import _0xf9bc2 from './VipObjectEditToolBar-9e16a4b6.js';
import { n as _0x49d2c5 } from './index-19b173b5.js';
var i = function () {
        var udDvnJ = {};
        udDvnJ[_0x236f('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        udDvnJ[_0x236f('0x1')] = _0x236f('0x2');
        udDvnJ[_0x236f('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        udDvnJ[_0x236f('0x4')] = _0x236f('0x5');
        udDvnJ[_0x236f('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        udDvnJ[_0x236f('0x7')] = _0x236f('0x8');
        udDvnJ[_0x236f('0x9')] = _0x236f('0xa');
        udDvnJ[_0x236f('0xb')] = _0x236f('0xc');
        udDvnJ[_0x236f('0xd')] = _0x236f('0xe');
        var t = this, e = t[_0x236f('0xf')], o = t[_0x236f('0x10')]['_c'] || e;
        return udDvnJ[_0x236f('0x3')](o, udDvnJ[_0x236f('0x4')], [udDvnJ[_0x236f('0x6')](o, udDvnJ[_0x236f('0x4')], { 'staticStyle': { 'height': udDvnJ[_0x236f('0x7')] } }, [udDvnJ[_0x236f('0x3')](o, udDvnJ[_0x236f('0x9')], {
                    'ref': udDvnJ[_0x236f('0xb')],
                    'attrs': { 'options': t[_0x236f('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': udDvnJ[_0x236f('0xd')],
                            'fn': function () {
                                return [udDvnJ[_0x236f('0x0')](o, udDvnJ[_0x236f('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x236f('0x12')] = _0x236f('0x13');
l[_0x236f('0x14')] = {};
l[_0x236f('0x15')] = function () {
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
l[_0x236f('0x16')] = function () {
    this.showGraph();
};
l[_0x236f('0x17')] = {};
l[_0x236f('0x17')][_0x236f('0x18')] = function () {
    var euuYFh = {
        kTScE: _0x236f('0x19'),
        oCwXs: _0x236f('0x1a'),
        UghOk: _0x236f('0x1b'),
        hjzLS: _0x236f('0x1c'),
        cspTd: _0x236f('0x1d'),
        vNfiK: _0x236f('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: euuYFh.kTScE
            },
            {
                id: 'b',
                text: 'B',
                color: euuYFh.oCwXs,
                fontColor: euuYFh.kTScE
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
                text: euuYFh.UghOk,
                color: euuYFh.oCwXs
            },
            {
                from: 'a',
                to: 'c',
                text: euuYFh.hjzLS
            },
            {
                from: 'a',
                to: 'e',
                text: euuYFh.cspTd
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: euuYFh.vNfiK
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x236f('0x14')][_0x236f('0x2')] = _0xf9bc2;
c[_0x236f('0x1f')] = !0x1;
c[_0x236f('0x20')] = !0x0;
c[_0x236f('0x21')] = !0x0;
c[_0x236f('0x22')] = !0x0;
c[_0x236f('0x23')] = _0x236f('0x24');
var d = _0x49d2c5(l, i, s, !0x1, h, _0x236f('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x236f('0x26')];
}();
export {
    _ as default
};