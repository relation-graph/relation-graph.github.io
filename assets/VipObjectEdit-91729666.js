
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x6e90 = [
    'Dbsiz',
    'graphRef',
    'KRkjy',
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
    'hkgwQ',
    'lCpuk',
    'ObjectEditToolBar',
    'dVKca',
    'IIwNs',
    'div',
    'aNWNx',
    'VENdT',
    'calc(100vh\x20-\x2050px)',
    'MNsIw',
    'RelationGraph'
];
(function (_0x936c62, _0x4d922b) {
    var _0x46d40f = function (_0x374945) {
        while (--_0x374945) {
            _0x936c62['push'](_0x936c62['shift']());
        }
    };
    _0x46d40f(++_0x4d922b);
}(_0x6e90, 0x1f0));
var _0x1680 = function (_0x24cfee, _0x372764) {
    _0x24cfee = _0x24cfee - 0x0;
    var _0x19471e = _0x6e90[_0x24cfee];
    return _0x19471e;
};
import _0x43e71a from './VipObjectEditToolBar-5864cccb.js';
import { n as _0x41b2fb } from './index-ef5ed09b.js';
var i = function () {
        var vYLtiF = {};
        vYLtiF[_0x1680('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        vYLtiF[_0x1680('0x1')] = _0x1680('0x2');
        vYLtiF[_0x1680('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        vYLtiF[_0x1680('0x4')] = _0x1680('0x5');
        vYLtiF[_0x1680('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        vYLtiF[_0x1680('0x7')] = _0x1680('0x8');
        vYLtiF[_0x1680('0x9')] = _0x1680('0xa');
        vYLtiF[_0x1680('0xb')] = _0x1680('0xc');
        vYLtiF[_0x1680('0xd')] = _0x1680('0xe');
        var t = this, e = t[_0x1680('0xf')], o = t[_0x1680('0x10')]['_c'] || e;
        return vYLtiF[_0x1680('0x3')](o, vYLtiF[_0x1680('0x4')], [vYLtiF[_0x1680('0x6')](o, vYLtiF[_0x1680('0x4')], { 'staticStyle': { 'height': vYLtiF[_0x1680('0x7')] } }, [vYLtiF[_0x1680('0x3')](o, vYLtiF[_0x1680('0x9')], {
                    'ref': vYLtiF[_0x1680('0xb')],
                    'attrs': { 'options': t[_0x1680('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': vYLtiF[_0x1680('0xd')],
                            'fn': function () {
                                return [vYLtiF[_0x1680('0x0')](o, vYLtiF[_0x1680('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x1680('0x12')] = _0x1680('0x13');
l[_0x1680('0x14')] = {};
l[_0x1680('0x15')] = function () {
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
l[_0x1680('0x16')] = function () {
    this.showGraph();
};
l[_0x1680('0x17')] = {};
l[_0x1680('0x17')][_0x1680('0x18')] = function () {
    var IYoGJv = {
        TlwKf: _0x1680('0x19'),
        cuRRa: _0x1680('0x1a'),
        pdtHZ: _0x1680('0x1b'),
        AoTWR: _0x1680('0x1c'),
        jzLqd: _0x1680('0x1d'),
        dLQrC: _0x1680('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: IYoGJv.TlwKf
            },
            {
                id: 'b',
                text: 'B',
                color: IYoGJv.cuRRa,
                fontColor: IYoGJv.TlwKf
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
                text: IYoGJv.pdtHZ,
                color: IYoGJv.cuRRa
            },
            {
                from: 'a',
                to: 'c',
                text: IYoGJv.AoTWR
            },
            {
                from: 'a',
                to: 'e',
                text: IYoGJv.jzLqd
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: IYoGJv.dLQrC
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x1680('0x14')][_0x1680('0x2')] = _0x43e71a;
c[_0x1680('0x1f')] = !0x1;
c[_0x1680('0x20')] = !0x0;
c[_0x1680('0x21')] = !0x0;
c[_0x1680('0x22')] = !0x0;
c[_0x1680('0x23')] = _0x1680('0x24');
var d = _0x41b2fb(l, i, s, !0x1, h, _0x1680('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x1680('0x26')];
}();
export {
    _ as default
};