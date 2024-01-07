
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x24af = [
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'saveData',
    'graphSnapshots',
    'name',
    'redrawSnapshot',
    'Demo',
    'components',
    'data',
    'world',
    'border',
    '#f39930',
    'fixed',
    'mounted',
    'methods',
    'showGraph',
    'image-from',
    'image-to',
    'onNodeClick:',
    'onLineClick:',
    'The\x20data\x20has\x20not\x20changed',
    '7aedda71',
    'exports',
    'BpaXY',
    'yLuMs',
    'WorldMap',
    'XpatF',
    'uAcEQ',
    'div',
    'xjvuB',
    'c-snapshot-item',
    'qCyRV',
    'c-my-panel',
    'usOzc',
    'JPrtk',
    '10px',
    'ysuCb',
    'el-button',
    'EYnIU',
    'primary',
    'aJuYd',
    '保存当前图谱的内容',
    'frOru',
    'c-snapshots',
    'hjlZO',
    'c-option-name',
    'kMNaU',
    '已保存的快照：',
    'SgmgQ',
    'FPbXA',
    'calc(100vh\x20-\x2060px)',
    'MRlZI',
    'RelationGraph',
    'Uwixx',
    'graphRef',
    'YMGKT',
    'canvas-plug',
    'FaEGI',
    'graph-plug'
];
(function (_0x9555b9, _0x147a69) {
    var _0x1e96e4 = function (_0xef9731) {
        while (--_0xef9731) {
            _0x9555b9['push'](_0x9555b9['shift']());
        }
    };
    _0x1e96e4(++_0x147a69);
}(_0x24af, 0x1cc));
var _0xe7f7 = function (_0x222921, _0x58a353) {
    _0x222921 = _0x222921 - 0x0;
    var _0x3d4937 = _0x24af[_0x222921];
    return _0x3d4937;
};
import _0x349a28 from './res-map-world-9a81d9ef.js';
import { n as _0x2f6479 } from './index-973ba694.js';
var f = function () {
        var eZSpBS = {};
        eZSpBS[_0xe7f7('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        eZSpBS[_0xe7f7('0x1')] = _0xe7f7('0x2');
        eZSpBS[_0xe7f7('0x3')] = function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        };
        eZSpBS[_0xe7f7('0x4')] = _0xe7f7('0x5');
        eZSpBS[_0xe7f7('0x6')] = _0xe7f7('0x7');
        eZSpBS[_0xe7f7('0x8')] = _0xe7f7('0x9');
        eZSpBS[_0xe7f7('0xa')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        eZSpBS[_0xe7f7('0xb')] = _0xe7f7('0xc');
        eZSpBS[_0xe7f7('0xd')] = _0xe7f7('0xe');
        eZSpBS[_0xe7f7('0xf')] = _0xe7f7('0x10');
        eZSpBS[_0xe7f7('0x11')] = _0xe7f7('0x12');
        eZSpBS[_0xe7f7('0x13')] = _0xe7f7('0x14');
        eZSpBS[_0xe7f7('0x15')] = _0xe7f7('0x16');
        eZSpBS[_0xe7f7('0x17')] = _0xe7f7('0x18');
        eZSpBS[_0xe7f7('0x19')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        eZSpBS[_0xe7f7('0x1a')] = _0xe7f7('0x1b');
        eZSpBS[_0xe7f7('0x1c')] = _0xe7f7('0x1d');
        eZSpBS[_0xe7f7('0x1e')] = _0xe7f7('0x1f');
        eZSpBS[_0xe7f7('0x20')] = _0xe7f7('0x21');
        eZSpBS[_0xe7f7('0x22')] = _0xe7f7('0x23');
        var t = this, o = t[_0xe7f7('0x24')], e = t[_0xe7f7('0x25')]['_c'] || o;
        return eZSpBS[_0xe7f7('0x19')](e, eZSpBS[_0xe7f7('0x4')], [eZSpBS[_0xe7f7('0xa')](e, eZSpBS[_0xe7f7('0x4')], { 'staticStyle': { 'height': eZSpBS[_0xe7f7('0x1a')] } }, [eZSpBS[_0xe7f7('0x19')](e, eZSpBS[_0xe7f7('0x1c')], {
                    'ref': eZSpBS[_0xe7f7('0x1e')],
                    'attrs': {
                        'options': t[_0xe7f7('0x26')],
                        'on-node-click': t[_0xe7f7('0x27')],
                        'on-line-click': t[_0xe7f7('0x28')]
                    },
                    'scopedSlots': t['_u']([
                        {
                            'key': eZSpBS[_0xe7f7('0x20')],
                            'fn': function () {
                                return [eZSpBS[_0xe7f7('0x0')](e, eZSpBS[_0xe7f7('0x1')])];
                            },
                            'proxy': !0x0
                        },
                        {
                            'key': eZSpBS[_0xe7f7('0x22')],
                            'fn': function () {
                                return [eZSpBS[_0xe7f7('0x3')](e, eZSpBS[_0xe7f7('0x4')], { 'staticClass': eZSpBS[_0xe7f7('0x8')] }, [
                                        eZSpBS[_0xe7f7('0xa')](e, eZSpBS[_0xe7f7('0x4')], { 'staticStyle': { 'padding': eZSpBS[_0xe7f7('0xb')] } }, [eZSpBS[_0xe7f7('0x3')](e, eZSpBS[_0xe7f7('0xd')], {
                                                'attrs': {
                                                    'round': '',
                                                    'type': eZSpBS[_0xe7f7('0xf')]
                                                },
                                                'on': { 'click': t[_0xe7f7('0x29')] }
                                            }, [t['_v'](eZSpBS[_0xe7f7('0x11')])])], 0x1),
                                        eZSpBS[_0xe7f7('0xa')](e, eZSpBS[_0xe7f7('0x4')], { 'staticClass': eZSpBS[_0xe7f7('0x13')] }, [
                                            eZSpBS[_0xe7f7('0x3')](e, eZSpBS[_0xe7f7('0x4')], { 'staticClass': eZSpBS[_0xe7f7('0x15')] }, [t['_v'](eZSpBS[_0xe7f7('0x17')])]),
                                            t['_l'](t[_0xe7f7('0x2a')], function (n) {
                                                return [eZSpBS[_0xe7f7('0x3')](e, eZSpBS[_0xe7f7('0x4')], {
                                                        'key': n[_0xe7f7('0x2b')],
                                                        'staticClass': eZSpBS[_0xe7f7('0x6')],
                                                        'on': {
                                                            'click': function (a) {
                                                                return t[_0xe7f7('0x2c')](n);
                                                            }
                                                        }
                                                    }, [t['_v'](t['_s'](n[_0xe7f7('0x2b')]))])];
                                            })
                                        ], 0x2)
                                    ])];
                            },
                            'proxy': !0x0
                        }
                    ])
                })], 0x1)]);
    }, u = [];
const g = {}, i = {};
g[_0xe7f7('0x2b')] = _0xe7f7('0x2d');
g[_0xe7f7('0x2e')] = {};
g[_0xe7f7('0x2f')] = function () {
    var uDyYCm = {
        Jpiix: _0xe7f7('0x30'),
        cTtAI: _0xe7f7('0x31'),
        uAXkT: _0xe7f7('0x32'),
        VTtRS: _0xe7f7('0x33')
    };
    return {
        mapId: uDyYCm.Jpiix,
        graphSnapshots: [],
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: uDyYCm.cTtAI,
            placeOtherNodes: !0x1,
            placeSingleNode: !0x1,
            graphOffset_x: 0x0,
            graphOffset_y: 0x0,
            defaultNodeColor: uDyYCm.uAXkT,
            defaultNodeBorderWidth: 0x1,
            defaultNodeBorderColor: uDyYCm.uAXkT,
            defaultNodeWidth: 0x14,
            defaultNodeHeight: 0x14,
            defaultLineColor: uDyYCm.uAXkT,
            defaultLineWidth: 0x2,
            layout: { layoutName: uDyYCm.VTtRS }
        }
    };
};
g[_0xe7f7('0x34')] = function () {
    this.showGraph();
};
g[_0xe7f7('0x35')] = {};
g[_0xe7f7('0x35')][_0xe7f7('0x36')] = async function () {
    var HvDWRH = {
        iHxdW: function (x, y) {
            return x !== y;
        },
        EOAmY: function (x, y) {
            return x - y;
        },
        KBSUX: function (x, y) {
            return x + y;
        },
        faCcw: function (x, y) {
            return x * y;
        },
        FMOmr: function (x, y) {
            return x / y;
        },
        gsgBf: function (x, y) {
            return x - y;
        },
        viBHd: function (x, y) {
            return x / y;
        },
        IifOQ: _0xe7f7('0x37'),
        yqkgg: _0xe7f7('0x38')
    };
    const t = {
            rootId: 'R',
            nodes: [
                {
                    id: 'R',
                    text: 'R',
                    opacity: 0x1,
                    x: 0x23a,
                    y: 0xfa
                },
                {
                    id: 'A',
                    text: 'A',
                    opacity: 0x1,
                    x: 0x0,
                    y: 0x0
                },
                {
                    id: 'B',
                    text: 'B',
                    opacity: 0x1,
                    x: 0x0,
                    y: 0x0
                },
                {
                    id: 'C',
                    text: 'C',
                    opacity: 0x1,
                    x: 0x0,
                    y: 0x0
                },
                {
                    id: 'D',
                    text: 'D',
                    opacity: 0x1,
                    x: 0x0,
                    y: 0x0
                },
                {
                    id: HvDWRH.IifOQ,
                    text: '',
                    opacity: 0x0,
                    x: -0x31,
                    y: -0x14
                },
                {
                    id: HvDWRH.yqkgg,
                    text: '',
                    opacity: 0x0,
                    x: 0x4a0,
                    y: 0x28c
                }
            ],
            lines: [
                {
                    from: 'R',
                    to: 'A',
                    animation: 0x1,
                    lineShape: 0x3
                },
                {
                    from: 'R',
                    to: 'B',
                    animation: 0x2
                },
                {
                    from: 'R',
                    to: 'C',
                    animation: 0x3
                },
                {
                    from: 'R',
                    to: 'D',
                    animation: 0x4,
                    lineShape: 0x1
                }
            ]
        }, o = t.nodes.find(a => a.id === t.rootId), e = 0x1f4;
    t.nodes.forEach(a => {
        HvDWRH.iHxdW(a.id, o.id) && (a.x = HvDWRH.EOAmY(HvDWRH.KBSUX(o.x, Math.floor(HvDWRH.faCcw(Math.random(), e))), HvDWRH.FMOmr(e, 0x2)), a.y = HvDWRH.gsgBf(HvDWRH.KBSUX(o.y, Math.floor(HvDWRH.faCcw(Math.random(), e))), HvDWRH.viBHd(e, 0x2)));
    });
    const n = this.$refs.graphRef.getInstance();
    await n.setJsonData(t), await n.moveToCenter();
};
g[_0xe7f7('0x35')][_0xe7f7('0x27')] = function (t, o) {
    var NYDUbb = { QEFVG: _0xe7f7('0x39') };
    console.log(NYDUbb.QEFVG, t.text, `x: ${ t.x }, y: ${ t.y }`);
};
g[_0xe7f7('0x35')][_0xe7f7('0x28')] = function (t, o, e) {
    var GQxNoU = { oRLIY: _0xe7f7('0x3a') };
    console.log(GQxNoU.oRLIY, t);
};
g[_0xe7f7('0x35')][_0xe7f7('0x29')] = function () {
    var sjrfiR = {
        pNCKg: function (x, y) {
            return x > y;
        },
        VuokI: function (x, y) {
            return x === y;
        },
        IsntU: function (x, y) {
            return x - y;
        },
        WSlzQ: function (callee, param1) {
            return callee(param1);
        },
        XxOMD: _0xe7f7('0x3b')
    };
    const t = this.$refs.graphRef.getInstance(), o = t.getNodes().map(a => ({
            id: a.id,
            text: a.text,
            x: a.x,
            y: a.y,
            opacity: a.opacity
        })), e = t.getLinks().reduce((a, s) => {
            const {
                from: r,
                to: c,
                lineShape: l,
                animation: p
            } = s.relations[0x0];
            return a.concat([{
                    from: r,
                    to: c,
                    lineShape: l,
                    animation: p
                }]);
        }, []), n = {
            rootId: t.graphData.rootNode.id,
            nodes: o,
            lines: e
        };
    if (sjrfiR.pNCKg(this.graphSnapshots.length, 0x0) && sjrfiR.VuokI(JSON.stringify(n), JSON.stringify(this.graphSnapshots[sjrfiR.IsntU(this.graphSnapshots.length, 0x1)].data))) {
        sjrfiR.WSlzQ(alert, sjrfiR.XxOMD);
        return;
    }
    this.graphSnapshots.push({
        name: new Date().toLocaleTimeString(),
        data: n
    });
};
g[_0xe7f7('0x35')][_0xe7f7('0x2c')] = function (t) {
    this.$refs.graphRef.getInstance().setJsonData(t.data);
};
g[_0xe7f7('0x2e')][_0xe7f7('0x2')] = _0x349a28;
var m = _0x2f6479(g, f, u, !0x1, y, _0xe7f7('0x3c'), null, null);
function y(t) {
    for (let o in i)
        this[o] = i[o];
}
const v = function () {
    return m[_0xe7f7('0x3d')];
}();
export {
    v as default
};