
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x140d = [
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
    '507d3bfa',
    'exports',
    'ReUiC',
    'HUcsS',
    'ObjectEditToolBar',
    'XfurC',
    'vkqAk',
    'div',
    'kThal',
    'JYUSb',
    'calc(100vh\x20-\x2050px)',
    'jNYDU',
    'pcvou',
    'RelationGraph',
    'xhGaj',
    'graphRef',
    'ngrKk',
    'tool-bar',
    '$createElement',
    '_self',
    'graphOptions'
];
(function (_0x1337f9, _0x28d325) {
    var _0x1084c6 = function (_0x32695f) {
        while (--_0x32695f) {
            _0x1337f9['push'](_0x1337f9['shift']());
        }
    };
    _0x1084c6(++_0x28d325);
}(_0x140d, 0x105));
var _0x2d90 = function (_0x4bf7a2, _0x94223e) {
    _0x4bf7a2 = _0x4bf7a2 - 0x0;
    var _0x2bde56 = _0x140d[_0x4bf7a2];
    return _0x2bde56;
};
import _0x3d40fa from './VipObjectEditToolBar-973f1676.js';
import { n as _0x262861 } from './index-3f3d9b78.js';
var i = function () {
        var Bgfviu = {};
        Bgfviu[_0x2d90('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        Bgfviu[_0x2d90('0x1')] = _0x2d90('0x2');
        Bgfviu[_0x2d90('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        Bgfviu[_0x2d90('0x4')] = _0x2d90('0x5');
        Bgfviu[_0x2d90('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        Bgfviu[_0x2d90('0x7')] = _0x2d90('0x8');
        Bgfviu[_0x2d90('0x9')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        Bgfviu[_0x2d90('0xa')] = _0x2d90('0xb');
        Bgfviu[_0x2d90('0xc')] = _0x2d90('0xd');
        Bgfviu[_0x2d90('0xe')] = _0x2d90('0xf');
        var t = this, e = t[_0x2d90('0x10')], o = t[_0x2d90('0x11')]['_c'] || e;
        return Bgfviu[_0x2d90('0x3')](o, Bgfviu[_0x2d90('0x4')], [Bgfviu[_0x2d90('0x6')](o, Bgfviu[_0x2d90('0x4')], { 'staticStyle': { 'height': Bgfviu[_0x2d90('0x7')] } }, [Bgfviu[_0x2d90('0x9')](o, Bgfviu[_0x2d90('0xa')], {
                    'ref': Bgfviu[_0x2d90('0xc')],
                    'attrs': { 'options': t[_0x2d90('0x12')] },
                    'scopedSlots': t['_u']([{
                            'key': Bgfviu[_0x2d90('0xe')],
                            'fn': function () {
                                return [Bgfviu[_0x2d90('0x0')](o, Bgfviu[_0x2d90('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x2d90('0x13')] = _0x2d90('0x14');
l[_0x2d90('0x15')] = {};
l[_0x2d90('0x16')] = function () {
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
l[_0x2d90('0x17')] = function () {
    this.showGraph();
};
l[_0x2d90('0x18')] = {};
l[_0x2d90('0x18')][_0x2d90('0x19')] = function () {
    var PNEYfE = {
        PsBld: _0x2d90('0x1a'),
        mOQVX: _0x2d90('0x1b'),
        WLBsJ: _0x2d90('0x1c'),
        nnmfv: _0x2d90('0x1d'),
        AMZbS: _0x2d90('0x1e'),
        AhhCn: _0x2d90('0x1f')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: PNEYfE.PsBld
            },
            {
                id: 'b',
                text: 'B',
                color: PNEYfE.mOQVX,
                fontColor: PNEYfE.PsBld
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
                text: PNEYfE.WLBsJ,
                color: PNEYfE.mOQVX
            },
            {
                from: 'a',
                to: 'c',
                text: PNEYfE.nnmfv
            },
            {
                from: 'a',
                to: 'e',
                text: PNEYfE.AMZbS
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: PNEYfE.AhhCn
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x2d90('0x15')][_0x2d90('0x2')] = _0x3d40fa;
c[_0x2d90('0x20')] = !0x1;
c[_0x2d90('0x21')] = !0x0;
c[_0x2d90('0x22')] = !0x0;
c[_0x2d90('0x23')] = !0x0;
c[_0x2d90('0x24')] = _0x2d90('0x25');
var d = _0x262861(l, i, s, !0x1, h, _0x2d90('0x26'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x2d90('0x27')];
}();
export {
    _ as default
};