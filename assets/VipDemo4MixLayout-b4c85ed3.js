
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2a6a = [
    'data',
    '横向树状图谱',
    'mounted',
    'methods',
    'beforeDestroy',
    'beforeDestroy:clear\x20timer:',
    'resetGraph',
    'left',
    'top',
    'showGraph',
    'setJsonData\x20done!',
    'my-root',
    '根节点',
    'ltrb',
    'R-b',
    'R-b-1',
    'R-b-2',
    'R-b-3',
    'R-c',
    'R-c-1',
    'R-c-2',
    'R-d',
    'R-d-1',
    'R-d-2',
    'R-d-3',
    'c1-1',
    'c1-2',
    'c1-3',
    'c1-4',
    'c1-5',
    'c1-6',
    'c1-7',
    'c2-1',
    'c2-2',
    'c3-1',
    'c3-2',
    'c3-3',
    'e1-1',
    'e1-2',
    'e1-3',
    'e1-4',
    'e1-5',
    'e1-6',
    'e2-1',
    'e2-2',
    'e2-3',
    'e2-4',
    'e2-5',
    'e2-6',
    'e2-7',
    'e2-8',
    'e2-9',
    't1-1',
    't1-2',
    't1-3',
    't1-4',
    't1-5',
    't1-6',
    't2-1',
    't2-2',
    't2-3',
    't2-4',
    't2-5',
    't2-6',
    't2-7',
    't2-8',
    't2-9',
    'layoutLeft',
    'tree',
    'right',
    'layoutLeft\x20Nodes:',
    'layoutRight',
    'layoutTop',
    'border',
    'force',
    'eGroupNodes\x20Nodes:',
    'randomSetNodePosition',
    'layoutBottom',
    'center',
    'onNodeClick',
    'onNodeClick:',
    'onLineClick',
    'onLineClick:',
    'debug',
    'layouts',
    '300',
    'defaultNodeShape',
    'defaultNodeWidth',
    '100',
    'defaultLineShape',
    'defaultJunctionPoint',
    'defaultNodeBorderWidth',
    'defaultLineColor',
    'rgba(0,\x20186,\x20189,\x201)',
    'defaultNodeColor',
    'rgba(0,\x20206,\x20209,\x201)',
    'iorxX',
    'aYXKm',
    'div',
    'BFnAA',
    'dvTWc',
    'calc(100vh\x20-\x2060px)',
    'OSxaz',
    'srPQW',
    'RelationGraph',
    'KwkjF',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'exports',
    'name',
    'Demo',
    'components'
];
(function (_0x5bede1, _0x3adcdd) {
    var _0x1b77b9 = function (_0x243984) {
        while (--_0x243984) {
            _0x5bede1['push'](_0x5bede1['shift']());
        }
    };
    _0x1b77b9(++_0x3adcdd);
}(_0x2a6a, 0xe1));
var _0x3956 = function (_0x52472b, _0x4392a0) {
    _0x52472b = _0x52472b - 0x0;
    var _0x185eeb = _0x2a6a[_0x52472b];
    return _0x185eeb;
};
import {
    R as _0xd85d10,
    n as _0x39a815
} from './index-28740cc1.js';
const f = {}, l = {};
l[_0x3956('0x0')] = _0x3956('0x1');
l[_0x3956('0x2')] = {};
l[_0x3956('0x3')] = function () {
    var _0x865ef3 = { frydx: _0x3956('0x4') };
    return {
        currentCase: _0x865ef3.frydx,
        isShowCodePanel: !0x1,
        randomTimer: null,
        graphOptions: f
    };
};
l[_0x3956('0x5')] = function () {
    this.resetGraph();
};
l[_0x3956('0x6')] = {};
l[_0x3956('0x7')] = function () {
    var _0x1f5ae0 = {
        oeAle: _0x3956('0x8'),
        zkvBp: function (_0x20ac79, _0x6a8038) {
            return _0x20ac79(_0x6a8038);
        }
    };
    console.log(_0x1f5ae0.oeAle, this.randomTimer), _0x1f5ae0.zkvBp(clearInterval, this.randomTimer);
};
l[_0x3956('0x6')][_0x3956('0x9')] = function () {
    var _0x43bda2 = {
        hKULJ: function (_0x54f091, _0x110fad) {
            return _0x54f091 === _0x110fad;
        },
        kXteR: _0x3956('0x4'),
        bzcYo: _0x3956('0xa'),
        OYfZa: _0x3956('0xb')
    };
    _0x43bda2.hKULJ(this.currentCase, _0x43bda2.kXteR) ? (this.graphOptions.layouts[0x0].from = _0x43bda2.bzcYo, this.graphOptions.layouts[0x0].min_per_width = 0x12c, this.graphOptions.layouts[0x0].min_per_height = 0x3c, this.graphOptions.defaultNodeWidth = 0x64, this.graphOptions.defaultNodeHeight = 0x1e, this.graphOptions.defaultJunctionPoint = 'lr') : (this.graphOptions.layouts[0x0].from = _0x43bda2.OYfZa, this.graphOptions.layouts[0x0].min_per_width = 0x3c, this.graphOptions.layouts[0x0].min_per_height = 0xc8, this.graphOptions.defaultNodeWidth = 0x1e, this.graphOptions.defaultNodeHeight = 0x64, this.graphOptions.defaultJunctionPoint = 'tb'), this.$refs.graphRef.setOptions(this.graphOptions, _0x5371e3 => {
        this.showGraph();
    });
};
l[_0x3956('0x6')][_0x3956('0xc')] = function () {
    var _0x3808f9 = {
        FVBpl: _0x3956('0xd'),
        gFRDg: _0x3956('0xe'),
        jpwif: _0x3956('0xf'),
        fionX: _0x3956('0x10'),
        OYvgF: _0x3956('0x11'),
        DQCTZ: _0x3956('0x12'),
        qYGII: _0x3956('0x13'),
        lugPI: _0x3956('0x14'),
        RzVHb: _0x3956('0x15'),
        xdXYy: _0x3956('0x16'),
        sdmyF: _0x3956('0x17'),
        dorwC: _0x3956('0x18'),
        NZbNq: _0x3956('0x19'),
        RCCOF: _0x3956('0x1a'),
        MbOjG: _0x3956('0x1b'),
        tXUJS: _0x3956('0x1c'),
        UqLRi: _0x3956('0x1d'),
        ISYwN: _0x3956('0x1e'),
        LaQDh: _0x3956('0x1f'),
        izcYv: _0x3956('0x20'),
        YxnHx: _0x3956('0x21'),
        LqOvC: _0x3956('0x22'),
        nXUxK: _0x3956('0x23'),
        gSFyT: _0x3956('0x24'),
        FzIfC: _0x3956('0x25'),
        mvXym: _0x3956('0x26'),
        lEIxH: _0x3956('0x27'),
        ulLul: _0x3956('0x28'),
        yosKp: _0x3956('0x29'),
        tJVIJ: _0x3956('0x2a'),
        zpjcO: _0x3956('0x2b'),
        XKJTo: _0x3956('0x2c'),
        aCEjJ: _0x3956('0x2d'),
        fNKhG: _0x3956('0x2e'),
        gMeqe: _0x3956('0x2f'),
        yUQDc: _0x3956('0x30'),
        CsUeT: _0x3956('0x31'),
        BZQdI: _0x3956('0x32'),
        Xoyri: _0x3956('0x33'),
        OvhIl: _0x3956('0x34'),
        RxAhl: _0x3956('0x35'),
        aKbas: _0x3956('0x36'),
        UuKUq: _0x3956('0x37'),
        dySTu: _0x3956('0x38'),
        zqFkP: _0x3956('0x39'),
        FliJf: _0x3956('0x3a'),
        OaOXb: _0x3956('0x3b'),
        eJCnb: _0x3956('0x3c'),
        MaJMu: _0x3956('0x3d'),
        aKYSB: _0x3956('0x3e'),
        LRxYf: _0x3956('0x3f'),
        aaWim: _0x3956('0x40'),
        yuZWD: _0x3956('0x41'),
        wUgvQ: _0x3956('0x42'),
        OUKaF: _0x3956('0x43'),
        wilqM: _0x3956('0x44'),
        fzdyL: _0x3956('0x45')
    };
    const _0x13d1ba = {
        rootId: _0x3808f9.gFRDg,
        nodes: [
            {
                id: _0x3808f9.gFRDg,
                text: _0x3808f9.jpwif,
                junctionPoint: _0x3808f9.fionX,
                data: { leftGroup: !0x0 }
            },
            {
                id: 'r',
                text: 'R',
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.OYvgF,
                text: _0x3808f9.OYvgF,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.DQCTZ,
                text: _0x3808f9.DQCTZ,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.qYGII,
                text: _0x3808f9.qYGII,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.lugPI,
                text: _0x3808f9.lugPI,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.RzVHb,
                text: _0x3808f9.RzVHb,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.xdXYy,
                text: _0x3808f9.xdXYy,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.sdmyF,
                text: _0x3808f9.sdmyF,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.dorwC,
                text: _0x3808f9.dorwC,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.NZbNq,
                text: _0x3808f9.NZbNq,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.RCCOF,
                text: _0x3808f9.RCCOF,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x3808f9.MbOjG,
                text: _0x3808f9.MbOjG,
                data: { leftGroup: !0x0 }
            },
            {
                id: 'a',
                text: 'a'
            },
            {
                id: 'c',
                text: 'c'
            },
            {
                id: 'c1',
                text: 'c1'
            },
            {
                id: _0x3808f9.tXUJS,
                text: _0x3808f9.tXUJS
            },
            {
                id: _0x3808f9.UqLRi,
                text: _0x3808f9.UqLRi
            },
            {
                id: _0x3808f9.ISYwN,
                text: _0x3808f9.ISYwN
            },
            {
                id: _0x3808f9.LaQDh,
                text: _0x3808f9.LaQDh
            },
            {
                id: _0x3808f9.izcYv,
                text: _0x3808f9.izcYv
            },
            {
                id: _0x3808f9.YxnHx,
                text: _0x3808f9.YxnHx
            },
            {
                id: _0x3808f9.LqOvC,
                text: _0x3808f9.LqOvC
            },
            {
                id: 'c2',
                text: 'c2'
            },
            {
                id: _0x3808f9.nXUxK,
                text: _0x3808f9.nXUxK
            },
            {
                id: _0x3808f9.gSFyT,
                text: _0x3808f9.gSFyT
            },
            {
                id: 'c3',
                text: 'c3'
            },
            {
                id: _0x3808f9.FzIfC,
                text: _0x3808f9.FzIfC
            },
            {
                id: _0x3808f9.mvXym,
                text: _0x3808f9.mvXym
            },
            {
                id: _0x3808f9.lEIxH,
                text: _0x3808f9.lEIxH
            },
            {
                id: 'e',
                text: 'e'
            },
            {
                id: 'e1',
                text: 'e1'
            },
            {
                id: _0x3808f9.ulLul,
                text: _0x3808f9.ulLul
            },
            {
                id: _0x3808f9.yosKp,
                text: _0x3808f9.yosKp
            },
            {
                id: _0x3808f9.tJVIJ,
                text: _0x3808f9.tJVIJ
            },
            {
                id: _0x3808f9.zpjcO,
                text: _0x3808f9.zpjcO
            },
            {
                id: _0x3808f9.XKJTo,
                text: _0x3808f9.XKJTo
            },
            {
                id: _0x3808f9.aCEjJ,
                text: _0x3808f9.aCEjJ
            },
            {
                id: 'e2',
                text: 'e2'
            },
            {
                id: _0x3808f9.fNKhG,
                text: _0x3808f9.fNKhG
            },
            {
                id: _0x3808f9.gMeqe,
                text: _0x3808f9.gMeqe
            },
            {
                id: _0x3808f9.yUQDc,
                text: _0x3808f9.yUQDc
            },
            {
                id: _0x3808f9.CsUeT,
                text: _0x3808f9.CsUeT
            },
            {
                id: _0x3808f9.BZQdI,
                text: _0x3808f9.BZQdI
            },
            {
                id: _0x3808f9.Xoyri,
                text: _0x3808f9.Xoyri
            },
            {
                id: _0x3808f9.OvhIl,
                text: _0x3808f9.OvhIl
            },
            {
                id: _0x3808f9.RxAhl,
                text: _0x3808f9.RxAhl
            },
            {
                id: _0x3808f9.aKbas,
                text: _0x3808f9.aKbas
            },
            {
                id: 't',
                text: 't'
            },
            {
                id: 't1',
                text: 't1'
            },
            {
                id: _0x3808f9.UuKUq,
                text: _0x3808f9.UuKUq
            },
            {
                id: _0x3808f9.dySTu,
                text: _0x3808f9.dySTu
            },
            {
                id: _0x3808f9.zqFkP,
                text: _0x3808f9.zqFkP
            },
            {
                id: _0x3808f9.FliJf,
                text: _0x3808f9.FliJf
            },
            {
                id: _0x3808f9.OaOXb,
                text: _0x3808f9.OaOXb
            },
            {
                id: _0x3808f9.eJCnb,
                text: _0x3808f9.eJCnb
            },
            {
                id: 't2',
                text: 't2'
            },
            {
                id: _0x3808f9.MaJMu,
                text: _0x3808f9.MaJMu
            },
            {
                id: _0x3808f9.aKYSB,
                text: _0x3808f9.aKYSB
            },
            {
                id: _0x3808f9.LRxYf,
                text: _0x3808f9.LRxYf
            },
            {
                id: _0x3808f9.aaWim,
                text: _0x3808f9.aaWim
            },
            {
                id: _0x3808f9.yuZWD,
                text: _0x3808f9.yuZWD
            },
            {
                id: _0x3808f9.wUgvQ,
                text: _0x3808f9.wUgvQ
            },
            {
                id: _0x3808f9.OUKaF,
                text: _0x3808f9.OUKaF
            },
            {
                id: _0x3808f9.wilqM,
                text: _0x3808f9.wilqM
            },
            {
                id: _0x3808f9.fzdyL,
                text: _0x3808f9.fzdyL
            }
        ],
        lines: [
            {
                from: _0x3808f9.gFRDg,
                to: 'a'
            },
            {
                from: _0x3808f9.gFRDg,
                to: 'r'
            },
            {
                to: _0x3808f9.OYvgF,
                from: 'r'
            },
            {
                to: _0x3808f9.DQCTZ,
                from: _0x3808f9.OYvgF
            },
            {
                to: _0x3808f9.qYGII,
                from: _0x3808f9.OYvgF
            },
            {
                to: _0x3808f9.lugPI,
                from: _0x3808f9.OYvgF
            },
            {
                to: _0x3808f9.RzVHb,
                from: 'r'
            },
            {
                to: _0x3808f9.xdXYy,
                from: _0x3808f9.RzVHb
            },
            {
                to: _0x3808f9.sdmyF,
                from: _0x3808f9.RzVHb
            },
            {
                to: _0x3808f9.dorwC,
                from: 'r'
            },
            {
                to: _0x3808f9.NZbNq,
                from: _0x3808f9.dorwC
            },
            {
                to: _0x3808f9.RCCOF,
                from: _0x3808f9.dorwC
            },
            {
                to: _0x3808f9.MbOjG,
                from: _0x3808f9.dorwC
            },
            {
                from: 'a',
                to: 'c'
            },
            {
                from: 'c',
                to: 'c1'
            },
            {
                from: 'c1',
                to: _0x3808f9.tXUJS
            },
            {
                from: 'c1',
                to: _0x3808f9.UqLRi
            },
            {
                from: 'c1',
                to: _0x3808f9.ISYwN
            },
            {
                from: 'c1',
                to: _0x3808f9.LaQDh
            },
            {
                from: 'c1',
                to: _0x3808f9.izcYv
            },
            {
                from: 'c1',
                to: _0x3808f9.YxnHx
            },
            {
                from: 'c1',
                to: _0x3808f9.LqOvC
            },
            {
                from: 'c',
                to: 'c2'
            },
            {
                from: 'c2',
                to: _0x3808f9.nXUxK
            },
            {
                from: 'c2',
                to: _0x3808f9.gSFyT
            },
            {
                from: 'c',
                to: 'c3'
            },
            {
                from: 'c3',
                to: _0x3808f9.FzIfC
            },
            {
                from: 'c3',
                to: _0x3808f9.mvXym
            },
            {
                from: 'c3',
                to: _0x3808f9.lEIxH
            },
            {
                from: _0x3808f9.gFRDg,
                to: 'e'
            },
            {
                from: 'e',
                to: 'e1'
            },
            {
                from: 'e1',
                to: _0x3808f9.ulLul
            },
            {
                from: 'e1',
                to: _0x3808f9.yosKp
            },
            {
                from: 'e1',
                to: _0x3808f9.tJVIJ
            },
            {
                from: 'e1',
                to: _0x3808f9.zpjcO
            },
            {
                from: 'e1',
                to: _0x3808f9.XKJTo
            },
            {
                from: 'e1',
                to: _0x3808f9.aCEjJ
            },
            {
                from: 'e',
                to: 'e2'
            },
            {
                from: 'e2',
                to: _0x3808f9.fNKhG
            },
            {
                from: 'e2',
                to: _0x3808f9.gMeqe
            },
            {
                from: 'e2',
                to: _0x3808f9.yUQDc
            },
            {
                from: 'e2',
                to: _0x3808f9.CsUeT
            },
            {
                from: 'e2',
                to: _0x3808f9.BZQdI
            },
            {
                from: 'e2',
                to: _0x3808f9.Xoyri
            },
            {
                from: 'e2',
                to: _0x3808f9.OvhIl
            },
            {
                from: 'e2',
                to: _0x3808f9.RxAhl
            },
            {
                from: 'e2',
                to: _0x3808f9.aKbas
            },
            {
                from: _0x3808f9.gFRDg,
                to: 't'
            },
            {
                from: 't',
                to: 't1'
            },
            {
                from: 't1',
                to: _0x3808f9.UuKUq
            },
            {
                from: 't1',
                to: _0x3808f9.dySTu
            },
            {
                from: 't1',
                to: _0x3808f9.zqFkP
            },
            {
                from: 't1',
                to: _0x3808f9.FliJf
            },
            {
                from: 't1',
                to: _0x3808f9.OaOXb
            },
            {
                from: 't1',
                to: _0x3808f9.eJCnb
            },
            {
                from: 't',
                to: 't2'
            },
            {
                from: 't2',
                to: _0x3808f9.MaJMu
            },
            {
                from: 't2',
                to: _0x3808f9.aKYSB
            },
            {
                from: 't2',
                to: _0x3808f9.LRxYf
            },
            {
                from: 't2',
                to: _0x3808f9.aaWim
            },
            {
                from: 't2',
                to: _0x3808f9.yuZWD
            },
            {
                from: 't2',
                to: _0x3808f9.wUgvQ
            },
            {
                from: 't2',
                to: _0x3808f9.OUKaF
            },
            {
                from: 't2',
                to: _0x3808f9.wilqM
            },
            {
                from: 't2',
                to: _0x3808f9.fzdyL
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x13d1ba, _0xa17c57 => {
        console.log(_0x3808f9.FVBpl), this.layoutLeft();
    });
};
l[_0x3956('0x6')][_0x3956('0x46')] = async function () {
    var _0x299bfd = {
        nnhbC: _0x3956('0x47'),
        tNzeD: _0x3956('0x48'),
        iXMPB: _0x3956('0x49')
    };
    const _0x1cb95c = this.$refs.graphRef.getInstance(), _0x77a3e = _0x1cb95c.getNodes().filter(_0x2033b1 => _0x2033b1.data && _0x2033b1.data.leftGroup), _0x16233c = _0x1cb95c.graphData.rootNode, _0x1e0196 = _0xd85d10.createLayout({
            layoutName: _0x299bfd.nnhbC,
            from: _0x299bfd.tNzeD
        }, _0x1cb95c.options);
    _0x1e0196.isMainLayouer = !0x1, _0x1e0196.layoutOptions.fixedRootNode = !0x0, console.log(_0x299bfd.iXMPB, _0x77a3e.length), await _0x1e0196.placeNodes(_0x77a3e, _0x16233c), await this.layoutRight();
};
l[_0x3956('0x6')][_0x3956('0x4a')] = async function () {
    var _0x94b27b = {
        VZNwJ: _0x3956('0x47'),
        nOEDV: _0x3956('0xa'),
        iPOOh: _0x3956('0x49')
    };
    const _0x37166c = this.$refs.graphRef.getInstance(), _0x4749a9 = _0x37166c.getNodes().filter(_0x3ee589 => !_0x3ee589.data || !_0x3ee589.data.leftGroup), _0x19b25e = _0x37166c.graphData.rootNode, _0x207973 = _0x37166c.getNodeById('a');
    _0x207973.y = _0x19b25e.y;
    const _0x528b5f = _0xd85d10.createLayout({
        layoutName: _0x94b27b.VZNwJ,
        from: _0x94b27b.nOEDV
    }, _0x37166c.options);
    _0x528b5f.isMainLayouer = !0x1, _0x528b5f.layoutOptions.fixedRootNode = !0x0, console.log(_0x94b27b.iPOOh, _0x4749a9.length), await _0x528b5f.placeNodes(_0x4749a9, _0x207973), await this.layoutTop();
};
l[_0x3956('0x6')][_0x3956('0x4b')] = async function () {
    var _0x17d96e = {
        HzBeN: _0x3956('0x4c'),
        ILZAi: function (_0x1704df, _0x14b260) {
            return _0x1704df !== _0x14b260;
        },
        cCMEq: function (_0x1a21e6, _0x196f8a) {
            return _0x1a21e6 !== _0x196f8a;
        },
        BaJsW: function (_0x49434d, _0x47cf64) {
            return _0x49434d - _0x47cf64;
        },
        vgBbV: _0x3956('0x4d'),
        PgBWc: _0x3956('0x4e')
    };
    const _0x16732b = this.$refs.graphRef.getInstance(), _0x5a0e79 = _0x16732b.getNodes().filter(_0x2cf056 => _0x2cf056.text.includes('t'));
    _0x5a0e79.forEach(_0xb076e5 => {
        _0xb076e5.junctionPoint = _0x17d96e.HzBeN, _0xb076e5.width = 0x50, _0xb076e5.height = 0x50, _0xb076e5.nodeShape = 0x0;
    }), _0x16732b.getLinks().forEach(_0xb826c6 => {
        _0x17d96e.ILZAi(_0x5a0e79.indexOf(_0xb826c6.fromNode), -0x1) && _0x17d96e.cCMEq(_0x5a0e79.indexOf(_0xb826c6.toNode), -0x1) && _0xb826c6.relations.forEach(_0x51eb3c => {
            _0x51eb3c.lineShape = 0x1;
        });
    });
    const _0x464751 = _0x16732b.graphData.rootNode, _0x24debb = _0x16732b.getNodeById('t');
    _0x24debb.x = _0x464751.x, _0x24debb.y = _0x17d96e.BaJsW(_0x464751.y, 0x1f4), _0x24debb.force_weight = 0x320;
    const _0x45ec0e = _0xd85d10.createLayout({ layoutName: _0x17d96e.vgBbV }, _0x16732b.options);
    _0x45ec0e.isMainLayouer = !0x1, _0x45ec0e.force_node_repulsion = 0.2, _0x45ec0e.force_line_elastic = 1.5, _0x45ec0e.maxLayoutTimes = 0x13880, _0x45ec0e.layoutOptions.fixedRootNode = !0x0, console.log(_0x17d96e.PgBWc, _0x5a0e79.length), await _0x45ec0e.placeNodes(_0x5a0e79, _0x24debb), this.randomSetNodePosition(_0x24debb, _0x24debb.x), await this.layoutBottom();
};
l[_0x3956('0x6')][_0x3956('0x4f')] = async function (_0x494d68, _0x46c625) {
    var _0x2e212b = {
        bUiQI: function (_0x330bfc, _0x4a41d7) {
            return _0x330bfc + _0x4a41d7;
        },
        HSdaU: function (_0x4ee240, _0x5ae93d) {
            return _0x4ee240 - _0x5ae93d;
        },
        sQvAe: function (_0xfe0fe3, _0x395d17) {
            return _0xfe0fe3 * _0x395d17;
        },
        EHofZ: function (_0x12a25b, _0x4ebeb9, _0x57f23a) {
            return _0x12a25b(_0x4ebeb9, _0x57f23a);
        }
    };
    this.randomTimer = _0x2e212b.EHofZ(setInterval, () => {
        _0x494d68.x = _0x2e212b.bUiQI(_0x46c625, Math.floor(_0x2e212b.HSdaU(_0x2e212b.sQvAe(Math.random(), 0x7d0), 0x3e8)));
    }, 0xbb8);
};
l[_0x3956('0x6')][_0x3956('0x50')] = async function () {
    var _0x4ed6f1 = {
        ItkmF: _0x3956('0x4c'),
        mowpF: function (_0x2c2ebe, _0x2ce6a6) {
            return _0x2c2ebe !== _0x2ce6a6;
        },
        zcPSb: function (_0x39cf1b, _0x3ca0a5) {
            return _0x39cf1b + _0x3ca0a5;
        },
        FSYNZ: _0x3956('0x51'),
        Djkcx: _0x3956('0x4e')
    };
    const _0x3c49e1 = this.$refs.graphRef.getInstance(), _0x3664f6 = _0x3c49e1.getNodes().filter(_0x1a3fa5 => _0x1a3fa5.text.includes('e'));
    _0x3664f6.forEach(_0x22d1c3 => {
        _0x22d1c3.junctionPoint = _0x4ed6f1.ItkmF, _0x22d1c3.width = 0x50, _0x22d1c3.height = 0x50, _0x22d1c3.nodeShape = 0x0;
    }), _0x3c49e1.getLinks().forEach(_0x44492f => {
        _0x4ed6f1.mowpF(_0x3664f6.indexOf(_0x44492f.fromNode), -0x1) && _0x4ed6f1.mowpF(_0x3664f6.indexOf(_0x44492f.toNode), -0x1) && _0x44492f.relations.forEach(_0x421d8d => {
            _0x421d8d.lineShape = 0x1;
        });
    });
    const _0x468bc2 = _0x3c49e1.graphData.rootNode, _0x346146 = _0x3c49e1.getNodeById('e');
    _0x346146.x = _0x468bc2.x, _0x346146.y = _0x4ed6f1.zcPSb(_0x468bc2.y, 0x1f4);
    const _0x1f1ecf = _0xd85d10.createLayout({ layoutName: _0x4ed6f1.FSYNZ }, _0x3c49e1.options);
    _0x1f1ecf.isMainLayouer = !0x1, _0x1f1ecf.layoutOptions.distance_coefficient = 0.5, _0x1f1ecf.layoutOptions.fixedRootNode = !0x0, console.log(_0x4ed6f1.Djkcx, _0x3664f6.length), await _0x1f1ecf.placeNodes(_0x3664f6, _0x346146);
};
l[_0x3956('0x6')][_0x3956('0x52')] = function (_0x376ea4, _0x5056b0) {
    var _0x4ef728 = { tRCyE: _0x3956('0x53') };
    console.log(_0x4ef728.tRCyE, _0x376ea4);
};
l[_0x3956('0x6')][_0x3956('0x54')] = function (_0x4bd7b8, _0x162627, _0x3f2efd) {
    var _0x1b0073 = { sfcEo: _0x3956('0x55') };
    console.log(_0x1b0073.sfcEo, _0x4bd7b8);
};
f[_0x3956('0x56')] = !0x1;
f[_0x3956('0x57')] = [{
        layoutName: _0x3956('0x47'),
        from: _0x3956('0xa'),
        max_per_width: _0x3956('0x58'),
        min_per_height: '40'
    }];
f[_0x3956('0x59')] = 0x1;
f[_0x3956('0x5a')] = _0x3956('0x5b');
f[_0x3956('0x5c')] = 0x3;
f[_0x3956('0x5d')] = _0x3956('0x10');
f[_0x3956('0x5e')] = 0x0;
f[_0x3956('0x5f')] = _0x3956('0x60');
f[_0x3956('0x61')] = _0x3956('0x62');
var u = function () {
        var _0x5caff3 = {};
        _0x5caff3[_0x3956('0x63')] = function (_0x4d1f89, _0x2d2b9b, _0x360090) {
            return _0x4d1f89(_0x2d2b9b, _0x360090);
        };
        _0x5caff3[_0x3956('0x64')] = _0x3956('0x65');
        _0x5caff3[_0x3956('0x66')] = function (_0x53e326, _0x58b1dc, _0x4059e5, _0x444674, _0x39a284) {
            return _0x53e326(_0x58b1dc, _0x4059e5, _0x444674, _0x39a284);
        };
        _0x5caff3[_0x3956('0x67')] = _0x3956('0x68');
        _0x5caff3[_0x3956('0x69')] = function (_0x127446, _0x509902, _0x55fa8d) {
            return _0x127446(_0x509902, _0x55fa8d);
        };
        _0x5caff3[_0x3956('0x6a')] = _0x3956('0x6b');
        _0x5caff3[_0x3956('0x6c')] = _0x3956('0x6d');
        var _0x1d21bc = this, _0x5341f3 = _0x1d21bc[_0x3956('0x6e')], _0x1e759e = _0x1d21bc[_0x3956('0x6f')]['_c'] || _0x5341f3;
        return _0x5caff3[_0x3956('0x63')](_0x1e759e, _0x5caff3[_0x3956('0x64')], [_0x5caff3[_0x3956('0x66')](_0x1e759e, _0x5caff3[_0x3956('0x64')], { 'staticStyle': { 'height': _0x5caff3[_0x3956('0x67')] } }, [_0x5caff3[_0x3956('0x69')](_0x1e759e, _0x5caff3[_0x3956('0x6a')], {
                    'ref': _0x5caff3[_0x3956('0x6c')],
                    'attrs': {
                        'options': _0x1d21bc[_0x3956('0x70')],
                        'on-node-click': _0x1d21bc[_0x3956('0x52')],
                        'on-line-click': _0x1d21bc[_0x3956('0x54')]
                    }
                })], 0x1)]);
    }, h = [];
const s = {};
var m = _0x39a815(l, u, h, !0x1, p, null, null, null);
function p(_0x38c595) {
    for (let _0x250f78 in s)
        this[_0x250f78] = s[_0x250f78];
}
const g = function () {
    return m[_0x3956('0x71')];
}();
export {
    g as default
};