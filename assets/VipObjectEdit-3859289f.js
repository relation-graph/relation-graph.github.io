
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5669 = [
    'PiSRM',
    'ObjectEditToolBar',
    'gofbD',
    'pNoBX',
    'div',
    'RozIu',
    'bwece',
    'calc(100vh\x20-\x2050px)',
    'HAlIC',
    'RelationGraph',
    'UqyHQ',
    'graphRef',
    'osIIG',
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
    'TAUeg'
];
(function (_0x454374, _0xbf851) {
    var _0x4011d5 = function (_0x57b015) {
        while (--_0x57b015) {
            _0x454374['push'](_0x454374['shift']());
        }
    };
    _0x4011d5(++_0xbf851);
}(_0x5669, 0xe9));
var _0x5845 = function (_0x40878b, _0x30fd4b) {
    _0x40878b = _0x40878b - 0x0;
    var _0x166093 = _0x5669[_0x40878b];
    return _0x166093;
};
import _0x4eb572 from './VipObjectEditToolBar-434e6f9b.js';
import { n as _0x1c5469 } from './index-c396e703.js';
var i = function () {
        var qcWrTf = {};
        qcWrTf[_0x5845('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        qcWrTf[_0x5845('0x1')] = _0x5845('0x2');
        qcWrTf[_0x5845('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        qcWrTf[_0x5845('0x4')] = _0x5845('0x5');
        qcWrTf[_0x5845('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        qcWrTf[_0x5845('0x7')] = _0x5845('0x8');
        qcWrTf[_0x5845('0x9')] = _0x5845('0xa');
        qcWrTf[_0x5845('0xb')] = _0x5845('0xc');
        qcWrTf[_0x5845('0xd')] = _0x5845('0xe');
        var t = this, e = t[_0x5845('0xf')], o = t[_0x5845('0x10')]['_c'] || e;
        return qcWrTf[_0x5845('0x3')](o, qcWrTf[_0x5845('0x4')], [qcWrTf[_0x5845('0x6')](o, qcWrTf[_0x5845('0x4')], { 'staticStyle': { 'height': qcWrTf[_0x5845('0x7')] } }, [qcWrTf[_0x5845('0x3')](o, qcWrTf[_0x5845('0x9')], {
                    'ref': qcWrTf[_0x5845('0xb')],
                    'attrs': { 'options': t[_0x5845('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': qcWrTf[_0x5845('0xd')],
                            'fn': function () {
                                return [qcWrTf[_0x5845('0x0')](o, qcWrTf[_0x5845('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x5845('0x12')] = _0x5845('0x13');
l[_0x5845('0x14')] = {};
l[_0x5845('0x15')] = function () {
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
l[_0x5845('0x16')] = function () {
    this.showGraph();
};
l[_0x5845('0x17')] = {};
l[_0x5845('0x17')][_0x5845('0x18')] = function () {
    var WjakdQ = {
        FaWEC: _0x5845('0x19'),
        hEsic: _0x5845('0x1a'),
        oDufn: _0x5845('0x1b'),
        cxhqA: _0x5845('0x1c'),
        xAayr: _0x5845('0x1d'),
        JZZMK: _0x5845('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: WjakdQ.FaWEC
            },
            {
                id: 'b',
                text: 'B',
                color: WjakdQ.hEsic,
                fontColor: WjakdQ.FaWEC
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
                text: WjakdQ.oDufn,
                color: WjakdQ.hEsic
            },
            {
                from: 'a',
                to: 'c',
                text: WjakdQ.cxhqA
            },
            {
                from: 'a',
                to: 'e',
                text: WjakdQ.xAayr
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: WjakdQ.JZZMK
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x5845('0x14')][_0x5845('0x2')] = _0x4eb572;
c[_0x5845('0x1f')] = !0x1;
c[_0x5845('0x20')] = !0x0;
c[_0x5845('0x21')] = !0x0;
c[_0x5845('0x22')] = !0x0;
c[_0x5845('0x23')] = _0x5845('0x24');
var d = _0x1c5469(l, i, s, !0x1, h, _0x5845('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x5845('0x26')];
}();
export {
    _ as default
};