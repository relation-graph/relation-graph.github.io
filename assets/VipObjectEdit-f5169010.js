
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2162 = [
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
    'EKAAx',
    'ZWGva',
    'ObjectEditToolBar',
    'awgdg',
    'gxgqe',
    'div',
    'QaEzl',
    'ppqtj',
    'calc(100vh\x20-\x2050px)',
    'QDnwY',
    'RelationGraph',
    'ifjrx',
    'graphRef',
    'UMEiN',
    'tool-bar',
    '$createElement',
    '_self',
    'graphOptions',
    'name',
    'ObjectEdit',
    'components',
    'data',
    'mounted',
    'methods'
];
(function (_0x50ee54, _0x53cd24) {
    var _0x6a8013 = function (_0x7a70a2) {
        while (--_0x7a70a2) {
            _0x50ee54['push'](_0x50ee54['shift']());
        }
    };
    _0x6a8013(++_0x53cd24);
}(_0x2162, 0xd2));
var _0x494b = function (_0x4e32dd, _0xe3ea2f) {
    _0x4e32dd = _0x4e32dd - 0x0;
    var _0x46d489 = _0x2162[_0x4e32dd];
    return _0x46d489;
};
import _0x43112a from './VipObjectEditToolBar-b98532f8.js';
import { n as _0x488089 } from './index-ab96dab3.js';
var i = function () {
        var boCowc = {};
        boCowc[_0x494b('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        boCowc[_0x494b('0x1')] = _0x494b('0x2');
        boCowc[_0x494b('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        boCowc[_0x494b('0x4')] = _0x494b('0x5');
        boCowc[_0x494b('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        boCowc[_0x494b('0x7')] = _0x494b('0x8');
        boCowc[_0x494b('0x9')] = _0x494b('0xa');
        boCowc[_0x494b('0xb')] = _0x494b('0xc');
        boCowc[_0x494b('0xd')] = _0x494b('0xe');
        var t = this, e = t[_0x494b('0xf')], o = t[_0x494b('0x10')]['_c'] || e;
        return boCowc[_0x494b('0x3')](o, boCowc[_0x494b('0x4')], [boCowc[_0x494b('0x6')](o, boCowc[_0x494b('0x4')], { 'staticStyle': { 'height': boCowc[_0x494b('0x7')] } }, [boCowc[_0x494b('0x3')](o, boCowc[_0x494b('0x9')], {
                    'ref': boCowc[_0x494b('0xb')],
                    'attrs': { 'options': t[_0x494b('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': boCowc[_0x494b('0xd')],
                            'fn': function () {
                                return [boCowc[_0x494b('0x0')](o, boCowc[_0x494b('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x494b('0x12')] = _0x494b('0x13');
l[_0x494b('0x14')] = {};
l[_0x494b('0x15')] = function () {
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
l[_0x494b('0x16')] = function () {
    this.showGraph();
};
l[_0x494b('0x17')] = {};
l[_0x494b('0x17')][_0x494b('0x18')] = function () {
    var LIOlpM = {
        mYCtu: _0x494b('0x19'),
        uvxQr: _0x494b('0x1a'),
        bIwVi: _0x494b('0x1b'),
        tdAWz: _0x494b('0x1c'),
        laqcd: _0x494b('0x1d'),
        IhflU: _0x494b('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: LIOlpM.mYCtu
            },
            {
                id: 'b',
                text: 'B',
                color: LIOlpM.uvxQr,
                fontColor: LIOlpM.mYCtu
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
                text: LIOlpM.bIwVi,
                color: LIOlpM.uvxQr
            },
            {
                from: 'a',
                to: 'c',
                text: LIOlpM.tdAWz
            },
            {
                from: 'a',
                to: 'e',
                text: LIOlpM.laqcd
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: LIOlpM.IhflU
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x494b('0x14')][_0x494b('0x2')] = _0x43112a;
c[_0x494b('0x1f')] = !0x1;
c[_0x494b('0x20')] = !0x0;
c[_0x494b('0x21')] = !0x0;
c[_0x494b('0x22')] = !0x0;
c[_0x494b('0x23')] = _0x494b('0x24');
var d = _0x488089(l, i, s, !0x1, h, _0x494b('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x494b('0x26')];
}();
export {
    _ as default
};