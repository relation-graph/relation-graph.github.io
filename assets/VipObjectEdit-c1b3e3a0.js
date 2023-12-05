
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x29bc = [
    'iksgN',
    'graphRef',
    'qDbwG',
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
    'dreHb',
    'XOhTT',
    'ObjectEditToolBar',
    'HEhBX',
    'fvynj',
    'div',
    'xlDha',
    'GuXUJ',
    'calc(100vh\x20-\x2050px)',
    'KfdYI',
    'RelationGraph'
];
(function (_0x752c54, _0x14b6ec) {
    var _0x4fac1c = function (_0x5720d9) {
        while (--_0x5720d9) {
            _0x752c54['push'](_0x752c54['shift']());
        }
    };
    _0x4fac1c(++_0x14b6ec);
}(_0x29bc, 0x1c9));
var _0x1c61 = function (_0x5097d6, _0x22019e) {
    _0x5097d6 = _0x5097d6 - 0x0;
    var _0x442286 = _0x29bc[_0x5097d6];
    return _0x442286;
};
import _0x25d1ca from './VipObjectEditToolBar-23920623.js';
import { n as _0x406b01 } from './index-f0317518.js';
var i = function () {
        var PQByDu = {};
        PQByDu[_0x1c61('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        PQByDu[_0x1c61('0x1')] = _0x1c61('0x2');
        PQByDu[_0x1c61('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        PQByDu[_0x1c61('0x4')] = _0x1c61('0x5');
        PQByDu[_0x1c61('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        PQByDu[_0x1c61('0x7')] = _0x1c61('0x8');
        PQByDu[_0x1c61('0x9')] = _0x1c61('0xa');
        PQByDu[_0x1c61('0xb')] = _0x1c61('0xc');
        PQByDu[_0x1c61('0xd')] = _0x1c61('0xe');
        var t = this, e = t[_0x1c61('0xf')], o = t[_0x1c61('0x10')]['_c'] || e;
        return PQByDu[_0x1c61('0x3')](o, PQByDu[_0x1c61('0x4')], [PQByDu[_0x1c61('0x6')](o, PQByDu[_0x1c61('0x4')], { 'staticStyle': { 'height': PQByDu[_0x1c61('0x7')] } }, [PQByDu[_0x1c61('0x3')](o, PQByDu[_0x1c61('0x9')], {
                    'ref': PQByDu[_0x1c61('0xb')],
                    'attrs': { 'options': t[_0x1c61('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': PQByDu[_0x1c61('0xd')],
                            'fn': function () {
                                return [PQByDu[_0x1c61('0x0')](o, PQByDu[_0x1c61('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x1c61('0x12')] = _0x1c61('0x13');
l[_0x1c61('0x14')] = {};
l[_0x1c61('0x15')] = function () {
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
l[_0x1c61('0x16')] = function () {
    this.showGraph();
};
l[_0x1c61('0x17')] = {};
l[_0x1c61('0x17')][_0x1c61('0x18')] = function () {
    var tIQafG = {
        Mbcwo: _0x1c61('0x19'),
        zgJqT: _0x1c61('0x1a'),
        oqaIR: _0x1c61('0x1b'),
        uECbi: _0x1c61('0x1c'),
        JDoKM: _0x1c61('0x1d'),
        DuEUD: _0x1c61('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: tIQafG.Mbcwo
            },
            {
                id: 'b',
                text: 'B',
                color: tIQafG.zgJqT,
                fontColor: tIQafG.Mbcwo
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
                text: tIQafG.oqaIR,
                color: tIQafG.zgJqT
            },
            {
                from: 'a',
                to: 'c',
                text: tIQafG.uECbi
            },
            {
                from: 'a',
                to: 'e',
                text: tIQafG.JDoKM
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: tIQafG.DuEUD
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x1c61('0x14')][_0x1c61('0x2')] = _0x25d1ca;
c[_0x1c61('0x1f')] = !0x1;
c[_0x1c61('0x20')] = !0x0;
c[_0x1c61('0x21')] = !0x0;
c[_0x1c61('0x22')] = !0x0;
c[_0x1c61('0x23')] = _0x1c61('0x24');
var d = _0x406b01(l, i, s, !0x1, h, _0x1c61('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x1c61('0x26')];
}();
export {
    _ as default
};