
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x6e98 = [
    '550b423e',
    'exports',
    'agoPc',
    'vYYip',
    'ObjectEditToolBar',
    'fFJwp',
    'AxAxp',
    'div',
    'lQyjN',
    'kepEg',
    'calc(100vh\x20-\x2050px)',
    'VwjRn',
    'RelationGraph',
    'KnAMP',
    'graphRef',
    'McZmO',
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
    'border'
];
(function (_0x44818f, _0x543baa) {
    var _0x2ebda1 = function (_0x3e48fa) {
        while (--_0x3e48fa) {
            _0x44818f['push'](_0x44818f['shift']());
        }
    };
    _0x2ebda1(++_0x543baa);
}(_0x6e98, 0x13a));
var _0x4c7b = function (_0x1a026c, _0x2492de) {
    _0x1a026c = _0x1a026c - 0x0;
    var _0x2d8f05 = _0x6e98[_0x1a026c];
    return _0x2d8f05;
};
import _0x1a5b05 from './VipObjectEditToolBar-eb6f2853.js';
import { n as _0x56cd52 } from './index-bc1c6247.js';
var i = function () {
        var xXdhsq = {};
        xXdhsq[_0x4c7b('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        xXdhsq[_0x4c7b('0x1')] = _0x4c7b('0x2');
        xXdhsq[_0x4c7b('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        xXdhsq[_0x4c7b('0x4')] = _0x4c7b('0x5');
        xXdhsq[_0x4c7b('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        xXdhsq[_0x4c7b('0x7')] = _0x4c7b('0x8');
        xXdhsq[_0x4c7b('0x9')] = _0x4c7b('0xa');
        xXdhsq[_0x4c7b('0xb')] = _0x4c7b('0xc');
        xXdhsq[_0x4c7b('0xd')] = _0x4c7b('0xe');
        var t = this, e = t[_0x4c7b('0xf')], o = t[_0x4c7b('0x10')]['_c'] || e;
        return xXdhsq[_0x4c7b('0x3')](o, xXdhsq[_0x4c7b('0x4')], [xXdhsq[_0x4c7b('0x6')](o, xXdhsq[_0x4c7b('0x4')], { 'staticStyle': { 'height': xXdhsq[_0x4c7b('0x7')] } }, [xXdhsq[_0x4c7b('0x3')](o, xXdhsq[_0x4c7b('0x9')], {
                    'ref': xXdhsq[_0x4c7b('0xb')],
                    'attrs': { 'options': t[_0x4c7b('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': xXdhsq[_0x4c7b('0xd')],
                            'fn': function () {
                                return [xXdhsq[_0x4c7b('0x0')](o, xXdhsq[_0x4c7b('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x4c7b('0x12')] = _0x4c7b('0x13');
l[_0x4c7b('0x14')] = {};
l[_0x4c7b('0x15')] = function () {
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
l[_0x4c7b('0x16')] = function () {
    this.showGraph();
};
l[_0x4c7b('0x17')] = {};
l[_0x4c7b('0x17')][_0x4c7b('0x18')] = function () {
    var fBCVhU = {
        HfQqv: _0x4c7b('0x19'),
        tpCyU: _0x4c7b('0x1a'),
        ujCyx: _0x4c7b('0x1b'),
        pqieG: _0x4c7b('0x1c'),
        cTENg: _0x4c7b('0x1d'),
        XUlBH: _0x4c7b('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: fBCVhU.HfQqv
            },
            {
                id: 'b',
                text: 'B',
                color: fBCVhU.tpCyU,
                fontColor: fBCVhU.HfQqv
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
                text: fBCVhU.ujCyx,
                color: fBCVhU.tpCyU
            },
            {
                from: 'a',
                to: 'c',
                text: fBCVhU.pqieG
            },
            {
                from: 'a',
                to: 'e',
                text: fBCVhU.cTENg
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: fBCVhU.XUlBH
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x4c7b('0x14')][_0x4c7b('0x2')] = _0x1a5b05;
c[_0x4c7b('0x1f')] = !0x1;
c[_0x4c7b('0x20')] = !0x0;
c[_0x4c7b('0x21')] = !0x0;
c[_0x4c7b('0x22')] = !0x0;
c[_0x4c7b('0x23')] = _0x4c7b('0x24');
var d = _0x56cd52(l, i, s, !0x1, h, _0x4c7b('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x4c7b('0x26')];
}();
export {
    _ as default
};