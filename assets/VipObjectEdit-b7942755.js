
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x33f8 = [
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
    'xpVYT',
    'GXkbM',
    'ObjectEditToolBar',
    'qmrlp',
    'OLmmZ',
    'div',
    'OhSCN',
    'xMWAz',
    'calc(100vh\x20-\x2050px)',
    'SvTUm',
    'RelationGraph',
    'jLpSd',
    'graphRef',
    'HrWwU',
    'tool-bar',
    '$createElement',
    '_self',
    'graphOptions',
    'name'
];
(function (_0x2bef9b, _0x2a4d99) {
    var _0x219982 = function (_0x382145) {
        while (--_0x382145) {
            _0x2bef9b['push'](_0x2bef9b['shift']());
        }
    };
    _0x219982(++_0x2a4d99);
}(_0x33f8, 0x1c1));
var _0x2428 = function (_0x5def69, _0x371504) {
    _0x5def69 = _0x5def69 - 0x0;
    var _0x4b915b = _0x33f8[_0x5def69];
    return _0x4b915b;
};
import _0x3f1cdb from './VipObjectEditToolBar-5776fe86.js';
import { n as _0x44b8dd } from './index-3a2b9e72.js';
var i = function () {
        var omAkyu = {};
        omAkyu[_0x2428('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        omAkyu[_0x2428('0x1')] = _0x2428('0x2');
        omAkyu[_0x2428('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        omAkyu[_0x2428('0x4')] = _0x2428('0x5');
        omAkyu[_0x2428('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        omAkyu[_0x2428('0x7')] = _0x2428('0x8');
        omAkyu[_0x2428('0x9')] = _0x2428('0xa');
        omAkyu[_0x2428('0xb')] = _0x2428('0xc');
        omAkyu[_0x2428('0xd')] = _0x2428('0xe');
        var t = this, e = t[_0x2428('0xf')], o = t[_0x2428('0x10')]['_c'] || e;
        return omAkyu[_0x2428('0x3')](o, omAkyu[_0x2428('0x4')], [omAkyu[_0x2428('0x6')](o, omAkyu[_0x2428('0x4')], { 'staticStyle': { 'height': omAkyu[_0x2428('0x7')] } }, [omAkyu[_0x2428('0x3')](o, omAkyu[_0x2428('0x9')], {
                    'ref': omAkyu[_0x2428('0xb')],
                    'attrs': { 'options': t[_0x2428('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': omAkyu[_0x2428('0xd')],
                            'fn': function () {
                                return [omAkyu[_0x2428('0x0')](o, omAkyu[_0x2428('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x2428('0x12')] = _0x2428('0x13');
l[_0x2428('0x14')] = {};
l[_0x2428('0x15')] = function () {
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
l[_0x2428('0x16')] = function () {
    this.showGraph();
};
l[_0x2428('0x17')] = {};
l[_0x2428('0x17')][_0x2428('0x18')] = function () {
    var kjoUBh = {
        Degin: _0x2428('0x19'),
        uQkBu: _0x2428('0x1a'),
        hzwgc: _0x2428('0x1b'),
        iMyfH: _0x2428('0x1c'),
        HLrzK: _0x2428('0x1d'),
        DSbur: _0x2428('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: kjoUBh.Degin
            },
            {
                id: 'b',
                text: 'B',
                color: kjoUBh.uQkBu,
                fontColor: kjoUBh.Degin
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
                text: kjoUBh.hzwgc,
                color: kjoUBh.uQkBu
            },
            {
                from: 'a',
                to: 'c',
                text: kjoUBh.iMyfH
            },
            {
                from: 'a',
                to: 'e',
                text: kjoUBh.HLrzK
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: kjoUBh.DSbur
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x2428('0x14')][_0x2428('0x2')] = _0x3f1cdb;
c[_0x2428('0x1f')] = !0x1;
c[_0x2428('0x20')] = !0x0;
c[_0x2428('0x21')] = !0x0;
c[_0x2428('0x22')] = !0x0;
c[_0x2428('0x23')] = _0x2428('0x24');
var d = _0x44b8dd(l, i, s, !0x1, h, _0x2428('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x2428('0x26')];
}();
export {
    _ as default
};