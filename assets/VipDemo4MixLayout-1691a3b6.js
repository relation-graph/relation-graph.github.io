var _0x4981 = [
    'RelationGraph',
    'mULwa',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'exports',
    'name',
    'Demo',
    'components',
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
    'rIFqo',
    'RNtEf',
    'div',
    'dWkKD',
    'mDpPX',
    'calc(100vh\x20-\x2060px)',
    'wCbUV',
    'IbIfV'
];
(function (_0x5f2f0f, _0x13a497) {
    var _0x2874e2 = function (_0x464e6d) {
        while (--_0x464e6d) {
            _0x5f2f0f['push'](_0x5f2f0f['shift']());
        }
    };
    _0x2874e2(++_0x13a497);
}(_0x4981, 0x15d));
var _0x1954 = function (_0xb16395, _0x59732e) {
    _0xb16395 = _0xb16395 - 0x0;
    var _0x415340 = _0x4981[_0xb16395];
    return _0x415340;
};
import {
    e as _0x10a070,
    n as _0x181cc2
} from './index-ebbcd0b3.js';
const f = {}, l = {};
l[_0x1954('0x0')] = _0x1954('0x1');
l[_0x1954('0x2')] = {};
l[_0x1954('0x3')] = function () {
    var _0x51f71e = { kharz: _0x1954('0x4') };
    return {
        currentCase: _0x51f71e.kharz,
        isShowCodePanel: !0x1,
        randomTimer: null,
        graphOptions: f
    };
};
l[_0x1954('0x5')] = function () {
    this.resetGraph();
};
l[_0x1954('0x6')] = {};
l[_0x1954('0x7')] = function () {
    var _0x3d2bd7 = {
        bdigO: _0x1954('0x8'),
        zoGYQ: function (_0x2b4255, _0x52b3b5) {
            return _0x2b4255(_0x52b3b5);
        }
    };
    console.log(_0x3d2bd7.bdigO, this.randomTimer), _0x3d2bd7.zoGYQ(clearInterval, this.randomTimer);
};
l[_0x1954('0x6')][_0x1954('0x9')] = function () {
    var _0x46e884 = {
        qjeIt: function (_0x6554c1, _0x3e880d) {
            return _0x6554c1 === _0x3e880d;
        },
        DRrkE: _0x1954('0x4'),
        FAKhL: _0x1954('0xa'),
        CQgQY: _0x1954('0xb')
    };
    _0x46e884.qjeIt(this.currentCase, _0x46e884.DRrkE) ? (this.graphOptions.layouts[0x0].from = _0x46e884.FAKhL, this.graphOptions.layouts[0x0].min_per_width = 0x12c, this.graphOptions.layouts[0x0].min_per_height = 0x3c, this.graphOptions.defaultNodeWidth = 0x64, this.graphOptions.defaultNodeHeight = 0x1e, this.graphOptions.defaultJunctionPoint = 'lr') : (this.graphOptions.layouts[0x0].from = _0x46e884.CQgQY, this.graphOptions.layouts[0x0].min_per_width = 0x3c, this.graphOptions.layouts[0x0].min_per_height = 0xc8, this.graphOptions.defaultNodeWidth = 0x1e, this.graphOptions.defaultNodeHeight = 0x64, this.graphOptions.defaultJunctionPoint = 'tb'), this.$refs.graphRef.setOptions(this.graphOptions, _0x2193af => {
        this.showGraph();
    });
};
l[_0x1954('0x6')][_0x1954('0xc')] = function () {
    var _0x52f806 = {
        deYyX: _0x1954('0xd'),
        rmtGG: _0x1954('0xe'),
        EiAGu: _0x1954('0xf'),
        YSzuu: _0x1954('0x10'),
        IWpSO: _0x1954('0x11'),
        HUYGr: _0x1954('0x12'),
        txipB: _0x1954('0x13'),
        lKnez: _0x1954('0x14'),
        cwTCM: _0x1954('0x15'),
        UESvK: _0x1954('0x16'),
        ydHNc: _0x1954('0x17'),
        Mhvff: _0x1954('0x18'),
        eaEhW: _0x1954('0x19'),
        uhwOc: _0x1954('0x1a'),
        rPcJg: _0x1954('0x1b'),
        aUhDU: _0x1954('0x1c'),
        EEEnm: _0x1954('0x1d'),
        aQCrV: _0x1954('0x1e'),
        EYZtC: _0x1954('0x1f'),
        QykEJ: _0x1954('0x20'),
        oyhea: _0x1954('0x21'),
        EFukC: _0x1954('0x22'),
        vkJLc: _0x1954('0x23'),
        alBBa: _0x1954('0x24'),
        Cfovv: _0x1954('0x25'),
        SaLoZ: _0x1954('0x26'),
        sBdBn: _0x1954('0x27'),
        HIHqs: _0x1954('0x28'),
        fVNiI: _0x1954('0x29'),
        LSSpq: _0x1954('0x2a'),
        FlmLO: _0x1954('0x2b'),
        OQhdv: _0x1954('0x2c'),
        asXNc: _0x1954('0x2d'),
        ojLLm: _0x1954('0x2e'),
        oGUEf: _0x1954('0x2f'),
        VXPrL: _0x1954('0x30'),
        znCrp: _0x1954('0x31'),
        ATlsR: _0x1954('0x32'),
        ifBUc: _0x1954('0x33'),
        qWjJZ: _0x1954('0x34'),
        EUmRP: _0x1954('0x35'),
        ZliVH: _0x1954('0x36'),
        MMmLX: _0x1954('0x37'),
        OjwmS: _0x1954('0x38'),
        FcEJk: _0x1954('0x39'),
        UlvPS: _0x1954('0x3a'),
        bJrJk: _0x1954('0x3b'),
        EaWAm: _0x1954('0x3c'),
        bwSJU: _0x1954('0x3d'),
        JKEcp: _0x1954('0x3e'),
        wFAAs: _0x1954('0x3f'),
        XaQWK: _0x1954('0x40'),
        NdHys: _0x1954('0x41'),
        LTxBh: _0x1954('0x42'),
        LQplc: _0x1954('0x43'),
        PmmaP: _0x1954('0x44'),
        zYKUN: _0x1954('0x45')
    };
    const _0x2478a1 = {
        rootId: _0x52f806.rmtGG,
        nodes: [
            {
                id: _0x52f806.rmtGG,
                text: _0x52f806.EiAGu,
                junctionPoint: _0x52f806.YSzuu,
                data: { leftGroup: !0x0 }
            },
            {
                id: 'r',
                text: 'R',
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.IWpSO,
                text: _0x52f806.IWpSO,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.HUYGr,
                text: _0x52f806.HUYGr,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.txipB,
                text: _0x52f806.txipB,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.lKnez,
                text: _0x52f806.lKnez,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.cwTCM,
                text: _0x52f806.cwTCM,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.UESvK,
                text: _0x52f806.UESvK,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.ydHNc,
                text: _0x52f806.ydHNc,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.Mhvff,
                text: _0x52f806.Mhvff,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.eaEhW,
                text: _0x52f806.eaEhW,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.uhwOc,
                text: _0x52f806.uhwOc,
                data: { leftGroup: !0x0 }
            },
            {
                id: _0x52f806.rPcJg,
                text: _0x52f806.rPcJg,
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
                id: _0x52f806.aUhDU,
                text: _0x52f806.aUhDU
            },
            {
                id: _0x52f806.EEEnm,
                text: _0x52f806.EEEnm
            },
            {
                id: _0x52f806.aQCrV,
                text: _0x52f806.aQCrV
            },
            {
                id: _0x52f806.EYZtC,
                text: _0x52f806.EYZtC
            },
            {
                id: _0x52f806.QykEJ,
                text: _0x52f806.QykEJ
            },
            {
                id: _0x52f806.oyhea,
                text: _0x52f806.oyhea
            },
            {
                id: _0x52f806.EFukC,
                text: _0x52f806.EFukC
            },
            {
                id: 'c2',
                text: 'c2'
            },
            {
                id: _0x52f806.vkJLc,
                text: _0x52f806.vkJLc
            },
            {
                id: _0x52f806.alBBa,
                text: _0x52f806.alBBa
            },
            {
                id: 'c3',
                text: 'c3'
            },
            {
                id: _0x52f806.Cfovv,
                text: _0x52f806.Cfovv
            },
            {
                id: _0x52f806.SaLoZ,
                text: _0x52f806.SaLoZ
            },
            {
                id: _0x52f806.sBdBn,
                text: _0x52f806.sBdBn
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
                id: _0x52f806.HIHqs,
                text: _0x52f806.HIHqs
            },
            {
                id: _0x52f806.fVNiI,
                text: _0x52f806.fVNiI
            },
            {
                id: _0x52f806.LSSpq,
                text: _0x52f806.LSSpq
            },
            {
                id: _0x52f806.FlmLO,
                text: _0x52f806.FlmLO
            },
            {
                id: _0x52f806.OQhdv,
                text: _0x52f806.OQhdv
            },
            {
                id: _0x52f806.asXNc,
                text: _0x52f806.asXNc
            },
            {
                id: 'e2',
                text: 'e2'
            },
            {
                id: _0x52f806.ojLLm,
                text: _0x52f806.ojLLm
            },
            {
                id: _0x52f806.oGUEf,
                text: _0x52f806.oGUEf
            },
            {
                id: _0x52f806.VXPrL,
                text: _0x52f806.VXPrL
            },
            {
                id: _0x52f806.znCrp,
                text: _0x52f806.znCrp
            },
            {
                id: _0x52f806.ATlsR,
                text: _0x52f806.ATlsR
            },
            {
                id: _0x52f806.ifBUc,
                text: _0x52f806.ifBUc
            },
            {
                id: _0x52f806.qWjJZ,
                text: _0x52f806.qWjJZ
            },
            {
                id: _0x52f806.EUmRP,
                text: _0x52f806.EUmRP
            },
            {
                id: _0x52f806.ZliVH,
                text: _0x52f806.ZliVH
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
                id: _0x52f806.MMmLX,
                text: _0x52f806.MMmLX
            },
            {
                id: _0x52f806.OjwmS,
                text: _0x52f806.OjwmS
            },
            {
                id: _0x52f806.FcEJk,
                text: _0x52f806.FcEJk
            },
            {
                id: _0x52f806.UlvPS,
                text: _0x52f806.UlvPS
            },
            {
                id: _0x52f806.bJrJk,
                text: _0x52f806.bJrJk
            },
            {
                id: _0x52f806.EaWAm,
                text: _0x52f806.EaWAm
            },
            {
                id: 't2',
                text: 't2'
            },
            {
                id: _0x52f806.bwSJU,
                text: _0x52f806.bwSJU
            },
            {
                id: _0x52f806.JKEcp,
                text: _0x52f806.JKEcp
            },
            {
                id: _0x52f806.wFAAs,
                text: _0x52f806.wFAAs
            },
            {
                id: _0x52f806.XaQWK,
                text: _0x52f806.XaQWK
            },
            {
                id: _0x52f806.NdHys,
                text: _0x52f806.NdHys
            },
            {
                id: _0x52f806.LTxBh,
                text: _0x52f806.LTxBh
            },
            {
                id: _0x52f806.LQplc,
                text: _0x52f806.LQplc
            },
            {
                id: _0x52f806.PmmaP,
                text: _0x52f806.PmmaP
            },
            {
                id: _0x52f806.zYKUN,
                text: _0x52f806.zYKUN
            }
        ],
        lines: [
            {
                from: _0x52f806.rmtGG,
                to: 'a'
            },
            {
                from: _0x52f806.rmtGG,
                to: 'r'
            },
            {
                to: _0x52f806.IWpSO,
                from: 'r'
            },
            {
                to: _0x52f806.HUYGr,
                from: _0x52f806.IWpSO
            },
            {
                to: _0x52f806.txipB,
                from: _0x52f806.IWpSO
            },
            {
                to: _0x52f806.lKnez,
                from: _0x52f806.IWpSO
            },
            {
                to: _0x52f806.cwTCM,
                from: 'r'
            },
            {
                to: _0x52f806.UESvK,
                from: _0x52f806.cwTCM
            },
            {
                to: _0x52f806.ydHNc,
                from: _0x52f806.cwTCM
            },
            {
                to: _0x52f806.Mhvff,
                from: 'r'
            },
            {
                to: _0x52f806.eaEhW,
                from: _0x52f806.Mhvff
            },
            {
                to: _0x52f806.uhwOc,
                from: _0x52f806.Mhvff
            },
            {
                to: _0x52f806.rPcJg,
                from: _0x52f806.Mhvff
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
                to: _0x52f806.aUhDU
            },
            {
                from: 'c1',
                to: _0x52f806.EEEnm
            },
            {
                from: 'c1',
                to: _0x52f806.aQCrV
            },
            {
                from: 'c1',
                to: _0x52f806.EYZtC
            },
            {
                from: 'c1',
                to: _0x52f806.QykEJ
            },
            {
                from: 'c1',
                to: _0x52f806.oyhea
            },
            {
                from: 'c1',
                to: _0x52f806.EFukC
            },
            {
                from: 'c',
                to: 'c2'
            },
            {
                from: 'c2',
                to: _0x52f806.vkJLc
            },
            {
                from: 'c2',
                to: _0x52f806.alBBa
            },
            {
                from: 'c',
                to: 'c3'
            },
            {
                from: 'c3',
                to: _0x52f806.Cfovv
            },
            {
                from: 'c3',
                to: _0x52f806.SaLoZ
            },
            {
                from: 'c3',
                to: _0x52f806.sBdBn
            },
            {
                from: _0x52f806.rmtGG,
                to: 'e'
            },
            {
                from: 'e',
                to: 'e1'
            },
            {
                from: 'e1',
                to: _0x52f806.HIHqs
            },
            {
                from: 'e1',
                to: _0x52f806.fVNiI
            },
            {
                from: 'e1',
                to: _0x52f806.LSSpq
            },
            {
                from: 'e1',
                to: _0x52f806.FlmLO
            },
            {
                from: 'e1',
                to: _0x52f806.OQhdv
            },
            {
                from: 'e1',
                to: _0x52f806.asXNc
            },
            {
                from: 'e',
                to: 'e2'
            },
            {
                from: 'e2',
                to: _0x52f806.ojLLm
            },
            {
                from: 'e2',
                to: _0x52f806.oGUEf
            },
            {
                from: 'e2',
                to: _0x52f806.VXPrL
            },
            {
                from: 'e2',
                to: _0x52f806.znCrp
            },
            {
                from: 'e2',
                to: _0x52f806.ATlsR
            },
            {
                from: 'e2',
                to: _0x52f806.ifBUc
            },
            {
                from: 'e2',
                to: _0x52f806.qWjJZ
            },
            {
                from: 'e2',
                to: _0x52f806.EUmRP
            },
            {
                from: 'e2',
                to: _0x52f806.ZliVH
            },
            {
                from: _0x52f806.rmtGG,
                to: 't'
            },
            {
                from: 't',
                to: 't1'
            },
            {
                from: 't1',
                to: _0x52f806.MMmLX
            },
            {
                from: 't1',
                to: _0x52f806.OjwmS
            },
            {
                from: 't1',
                to: _0x52f806.FcEJk
            },
            {
                from: 't1',
                to: _0x52f806.UlvPS
            },
            {
                from: 't1',
                to: _0x52f806.bJrJk
            },
            {
                from: 't1',
                to: _0x52f806.EaWAm
            },
            {
                from: 't',
                to: 't2'
            },
            {
                from: 't2',
                to: _0x52f806.bwSJU
            },
            {
                from: 't2',
                to: _0x52f806.JKEcp
            },
            {
                from: 't2',
                to: _0x52f806.wFAAs
            },
            {
                from: 't2',
                to: _0x52f806.XaQWK
            },
            {
                from: 't2',
                to: _0x52f806.NdHys
            },
            {
                from: 't2',
                to: _0x52f806.LTxBh
            },
            {
                from: 't2',
                to: _0x52f806.LQplc
            },
            {
                from: 't2',
                to: _0x52f806.PmmaP
            },
            {
                from: 't2',
                to: _0x52f806.zYKUN
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x2478a1, _0x2af1c6 => {
        console.log(_0x52f806.deYyX), this.layoutLeft();
    });
};
l[_0x1954('0x6')][_0x1954('0x46')] = async function () {
    var _0x8e0a37 = {
        XAkUl: _0x1954('0x47'),
        FUhph: _0x1954('0x48'),
        rXSWz: _0x1954('0x49')
    };
    const _0x2cc761 = this.$refs.graphRef.getInstance(), _0x93f9b2 = _0x2cc761.getNodes().filter(_0x1cb156 => _0x1cb156.data && _0x1cb156.data.leftGroup), _0x4d3b2f = _0x2cc761.graphData.rootNode, _0x4e4e50 = _0x10a070.createLayout({
            layoutName: _0x8e0a37.XAkUl,
            from: _0x8e0a37.FUhph
        }, _0x2cc761.options);
    _0x4e4e50.isMainLayouer = !0x1, _0x4e4e50.layoutOptions.fixedRootNode = !0x0, console.log(_0x8e0a37.rXSWz, _0x93f9b2.length), await _0x4e4e50.placeNodes(_0x93f9b2, _0x4d3b2f), await this.layoutRight();
};
l[_0x1954('0x6')][_0x1954('0x4a')] = async function () {
    var _0x3fe0de = {
        ZqpeK: _0x1954('0x47'),
        pDmHn: _0x1954('0xa'),
        ErLdT: _0x1954('0x49')
    };
    const _0x5b4369 = this.$refs.graphRef.getInstance(), _0x53877b = _0x5b4369.getNodes().filter(_0x4d1169 => !_0x4d1169.data || !_0x4d1169.data.leftGroup), _0x5556b = _0x5b4369.graphData.rootNode, _0x33e35c = _0x5b4369.getNodeById('a');
    _0x33e35c.y = _0x5556b.y;
    const _0x3e350d = _0x10a070.createLayout({
        layoutName: _0x3fe0de.ZqpeK,
        from: _0x3fe0de.pDmHn
    }, _0x5b4369.options);
    _0x3e350d.isMainLayouer = !0x1, _0x3e350d.layoutOptions.fixedRootNode = !0x0, console.log(_0x3fe0de.ErLdT, _0x53877b.length), await _0x3e350d.placeNodes(_0x53877b, _0x33e35c), await this.layoutTop();
};
l[_0x1954('0x6')][_0x1954('0x4b')] = async function () {
    var _0x9b9e89 = {
        RpHGz: _0x1954('0x4c'),
        elxlW: function (_0x35aadb, _0x38bfaa) {
            return _0x35aadb !== _0x38bfaa;
        },
        ZYAcl: function (_0x1544db, _0x214b5e) {
            return _0x1544db !== _0x214b5e;
        },
        oeJvN: function (_0x4a9e68, _0xbeccbf) {
            return _0x4a9e68 - _0xbeccbf;
        },
        sQYsT: _0x1954('0x4d'),
        JWEOc: _0x1954('0x4e')
    };
    const _0x494a01 = this.$refs.graphRef.getInstance(), _0x5672c7 = _0x494a01.getNodes().filter(_0x1b90b4 => _0x1b90b4.text.includes('t'));
    _0x5672c7.forEach(_0x6a79fb => {
        _0x6a79fb.junctionPoint = _0x9b9e89.RpHGz, _0x6a79fb.width = 0x50, _0x6a79fb.height = 0x50, _0x6a79fb.nodeShape = 0x0;
    }), _0x494a01.getLinks().forEach(_0x573aba => {
        _0x9b9e89.elxlW(_0x5672c7.indexOf(_0x573aba.fromNode), -0x1) && _0x9b9e89.ZYAcl(_0x5672c7.indexOf(_0x573aba.toNode), -0x1) && _0x573aba.relations.forEach(_0x57af11 => {
            _0x57af11.lineShape = 0x1;
        });
    });
    const _0x3bacd1 = _0x494a01.graphData.rootNode, _0x306ee2 = _0x494a01.getNodeById('t');
    _0x306ee2.x = _0x3bacd1.x, _0x306ee2.y = _0x9b9e89.oeJvN(_0x3bacd1.y, 0x1f4), _0x306ee2.force_weight = 0x320;
    const _0x202444 = _0x10a070.createLayout({ layoutName: _0x9b9e89.sQYsT }, _0x494a01.options);
    _0x202444.isMainLayouer = !0x1, _0x202444.force_node_repulsion = 0.2, _0x202444.force_line_elastic = 1.5, _0x202444.maxLayoutTimes = 0x13880, _0x202444.layoutOptions.fixedRootNode = !0x0, console.log(_0x9b9e89.JWEOc, _0x5672c7.length), await _0x202444.placeNodes(_0x5672c7, _0x306ee2), this.randomSetNodePosition(_0x306ee2, _0x306ee2.x), await this.layoutBottom();
};
l[_0x1954('0x6')][_0x1954('0x4f')] = async function (_0x458b73, _0x1f3b60) {
    var _0x8734fa = {
        ozKGa: function (_0xcedf57, _0x46895a) {
            return _0xcedf57 + _0x46895a;
        },
        yteil: function (_0x18b817, _0xb880cf) {
            return _0x18b817 - _0xb880cf;
        },
        bcSgm: function (_0x283962, _0x49a7e8) {
            return _0x283962 * _0x49a7e8;
        },
        uvnuZ: function (_0x3118a7, _0x2604e7, _0x4eaae1) {
            return _0x3118a7(_0x2604e7, _0x4eaae1);
        }
    };
    this.randomTimer = _0x8734fa.uvnuZ(setInterval, () => {
        _0x458b73.x = _0x8734fa.ozKGa(_0x1f3b60, Math.floor(_0x8734fa.yteil(_0x8734fa.bcSgm(Math.random(), 0x7d0), 0x3e8)));
    }, 0xbb8);
};
l[_0x1954('0x6')][_0x1954('0x50')] = async function () {
    var _0x1e82af = {
        sbOYx: _0x1954('0x4c'),
        GEMZR: function (_0x1df552, _0x5541eb) {
            return _0x1df552 !== _0x5541eb;
        },
        xhkcV: function (_0x25dc2d, _0x4513ba) {
            return _0x25dc2d + _0x4513ba;
        },
        nCiid: _0x1954('0x51'),
        nYomM: _0x1954('0x4e')
    };
    const _0x3cf694 = this.$refs.graphRef.getInstance(), _0x5393a5 = _0x3cf694.getNodes().filter(_0x372625 => _0x372625.text.includes('e'));
    _0x5393a5.forEach(_0x9cebff => {
        _0x9cebff.junctionPoint = _0x1e82af.sbOYx, _0x9cebff.width = 0x50, _0x9cebff.height = 0x50, _0x9cebff.nodeShape = 0x0;
    }), _0x3cf694.getLinks().forEach(_0x99b66c => {
        _0x1e82af.GEMZR(_0x5393a5.indexOf(_0x99b66c.fromNode), -0x1) && _0x1e82af.GEMZR(_0x5393a5.indexOf(_0x99b66c.toNode), -0x1) && _0x99b66c.relations.forEach(_0x59563b => {
            _0x59563b.lineShape = 0x1;
        });
    });
    const _0x434127 = _0x3cf694.graphData.rootNode, _0x31d002 = _0x3cf694.getNodeById('e');
    _0x31d002.x = _0x434127.x, _0x31d002.y = _0x1e82af.xhkcV(_0x434127.y, 0x1f4);
    const _0x19488d = _0x10a070.createLayout({ layoutName: _0x1e82af.nCiid }, _0x3cf694.options);
    _0x19488d.isMainLayouer = !0x1, _0x19488d.layoutOptions.distance_coefficient = 0.5, _0x19488d.layoutOptions.fixedRootNode = !0x0, console.log(_0x1e82af.nYomM, _0x5393a5.length), await _0x19488d.placeNodes(_0x5393a5, _0x31d002);
};
l[_0x1954('0x6')][_0x1954('0x52')] = function (_0x41d41c, _0x422c77) {
    var _0xb9dec4 = { NRjHw: _0x1954('0x53') };
    console.log(_0xb9dec4.NRjHw, _0x41d41c);
};
l[_0x1954('0x6')][_0x1954('0x54')] = function (_0x7da1a6, _0x9c0df, _0xc7137c) {
    var _0x1b3b0f = { ZADue: _0x1954('0x55') };
    console.log(_0x1b3b0f.ZADue, _0x7da1a6);
};
f[_0x1954('0x56')] = !0x1;
f[_0x1954('0x57')] = [{
        layoutName: _0x1954('0x47'),
        from: _0x1954('0xa'),
        max_per_width: _0x1954('0x58'),
        min_per_height: '40'
    }];
f[_0x1954('0x59')] = 0x1;
f[_0x1954('0x5a')] = _0x1954('0x5b');
f[_0x1954('0x5c')] = 0x3;
f[_0x1954('0x5d')] = _0x1954('0x10');
f[_0x1954('0x5e')] = 0x0;
f[_0x1954('0x5f')] = _0x1954('0x60');
f[_0x1954('0x61')] = _0x1954('0x62');
var h = function () {
        var _0x6b0dd7 = {};
        _0x6b0dd7[_0x1954('0x63')] = function (_0x38ed2f, _0x4f36cc, _0x8986ba) {
            return _0x38ed2f(_0x4f36cc, _0x8986ba);
        };
        _0x6b0dd7[_0x1954('0x64')] = _0x1954('0x65');
        _0x6b0dd7[_0x1954('0x66')] = function (_0x424dc8, _0x1b6b71, _0x1291eb, _0x406eca, _0x51c432) {
            return _0x424dc8(_0x1b6b71, _0x1291eb, _0x406eca, _0x51c432);
        };
        _0x6b0dd7[_0x1954('0x67')] = _0x1954('0x68');
        _0x6b0dd7[_0x1954('0x69')] = function (_0xa85b9a, _0x39a24e, _0x2ece09) {
            return _0xa85b9a(_0x39a24e, _0x2ece09);
        };
        _0x6b0dd7[_0x1954('0x6a')] = _0x1954('0x6b');
        _0x6b0dd7[_0x1954('0x6c')] = _0x1954('0x6d');
        var _0x6e394f = this, _0x1d28c9 = _0x6e394f[_0x1954('0x6e')], _0xf05cf8 = _0x6e394f[_0x1954('0x6f')]['_c'] || _0x1d28c9;
        return _0x6b0dd7[_0x1954('0x63')](_0xf05cf8, _0x6b0dd7[_0x1954('0x64')], [_0x6b0dd7[_0x1954('0x66')](_0xf05cf8, _0x6b0dd7[_0x1954('0x64')], { 'staticStyle': { 'height': _0x6b0dd7[_0x1954('0x67')] } }, [_0x6b0dd7[_0x1954('0x69')](_0xf05cf8, _0x6b0dd7[_0x1954('0x6a')], {
                    'ref': _0x6b0dd7[_0x1954('0x6c')],
                    'attrs': {
                        'options': _0x6e394f[_0x1954('0x70')],
                        'on-node-click': _0x6e394f[_0x1954('0x52')],
                        'on-line-click': _0x6e394f[_0x1954('0x54')]
                    }
                })], 0x1)]);
    }, u = [];
const s = {};
var m = _0x181cc2(l, h, u, !0x1, p, null, null, null);
function p(_0x4284f9) {
    for (let _0x363ef2 in s)
        this[_0x363ef2] = s[_0x363ef2];
}
const g = function () {
    return m[_0x1954('0x71')];
}();
export {
    g as default
};