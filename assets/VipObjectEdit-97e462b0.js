
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xc690 = [
    'graphRef',
    'QbWzN',
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
    'Mcvbd',
    'UZPqq',
    'ObjectEditToolBar',
    'ikFGF',
    'KOxNK',
    'div',
    'gmVkC',
    'xyPyV',
    'calc(100vh\x20-\x2050px)',
    'Bennx',
    'RelationGraph',
    'rbCcb'
];
(function (_0x488c5e, _0x9867e1) {
    var _0x4d4c2b = function (_0x1d6d4d) {
        while (--_0x1d6d4d) {
            _0x488c5e['push'](_0x488c5e['shift']());
        }
    };
    _0x4d4c2b(++_0x9867e1);
}(_0xc690, 0xb7));
var _0x356d = function (_0x21dad9, _0x318e97) {
    _0x21dad9 = _0x21dad9 - 0x0;
    var _0x20cdff = _0xc690[_0x21dad9];
    return _0x20cdff;
};
import _0x1bb499 from './VipObjectEditToolBar-96775f1f.js';
import { n as _0x4c7389 } from './index-973ba694.js';
var i = function () {
        var FhvTiL = {};
        FhvTiL[_0x356d('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        FhvTiL[_0x356d('0x1')] = _0x356d('0x2');
        FhvTiL[_0x356d('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        FhvTiL[_0x356d('0x4')] = _0x356d('0x5');
        FhvTiL[_0x356d('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        FhvTiL[_0x356d('0x7')] = _0x356d('0x8');
        FhvTiL[_0x356d('0x9')] = _0x356d('0xa');
        FhvTiL[_0x356d('0xb')] = _0x356d('0xc');
        FhvTiL[_0x356d('0xd')] = _0x356d('0xe');
        var t = this, e = t[_0x356d('0xf')], o = t[_0x356d('0x10')]['_c'] || e;
        return FhvTiL[_0x356d('0x3')](o, FhvTiL[_0x356d('0x4')], [FhvTiL[_0x356d('0x6')](o, FhvTiL[_0x356d('0x4')], { 'staticStyle': { 'height': FhvTiL[_0x356d('0x7')] } }, [FhvTiL[_0x356d('0x3')](o, FhvTiL[_0x356d('0x9')], {
                    'ref': FhvTiL[_0x356d('0xb')],
                    'attrs': { 'options': t[_0x356d('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': FhvTiL[_0x356d('0xd')],
                            'fn': function () {
                                return [FhvTiL[_0x356d('0x0')](o, FhvTiL[_0x356d('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x356d('0x12')] = _0x356d('0x13');
l[_0x356d('0x14')] = {};
l[_0x356d('0x15')] = function () {
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
l[_0x356d('0x16')] = function () {
    this.showGraph();
};
l[_0x356d('0x17')] = {};
l[_0x356d('0x17')][_0x356d('0x18')] = function () {
    var NmvVSp = {
        Zwdsm: _0x356d('0x19'),
        IBVkB: _0x356d('0x1a'),
        KMziK: _0x356d('0x1b'),
        pENbV: _0x356d('0x1c'),
        IMNRy: _0x356d('0x1d'),
        DIqjL: _0x356d('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: NmvVSp.Zwdsm
            },
            {
                id: 'b',
                text: 'B',
                color: NmvVSp.IBVkB,
                fontColor: NmvVSp.Zwdsm
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
                text: NmvVSp.KMziK,
                color: NmvVSp.IBVkB
            },
            {
                from: 'a',
                to: 'c',
                text: NmvVSp.pENbV
            },
            {
                from: 'a',
                to: 'e',
                text: NmvVSp.IMNRy
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: NmvVSp.DIqjL
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x356d('0x14')][_0x356d('0x2')] = _0x1bb499;
c[_0x356d('0x1f')] = !0x1;
c[_0x356d('0x20')] = !0x0;
c[_0x356d('0x21')] = !0x0;
c[_0x356d('0x22')] = !0x0;
c[_0x356d('0x23')] = _0x356d('0x24');
var d = _0x4c7389(l, i, s, !0x1, h, _0x356d('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x356d('0x26')];
}();
export {
    _ as default
};