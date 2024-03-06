
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1490 = [
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    'Line\x20Text',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'UsrcW',
    'NQZjS',
    'div',
    'XXiwf',
    'YYMsA',
    'calc(100vh\x20-\x2060px)',
    'dgHnv',
    'RelationGraph',
    'oJTmp',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo4Logo',
    'components',
    'data',
    'border',
    'center',
    'mounted'
];
(function (_0x5282d7, _0x51645b) {
    var _0xddb16a = function (_0x41b9ae) {
        while (--_0x41b9ae) {
            _0x5282d7['push'](_0x5282d7['shift']());
        }
    };
    _0xddb16a(++_0x51645b);
}(_0x1490, 0x15e));
var _0x3721 = function (_0x3e3bc5, _0x3e85e4) {
    _0x3e3bc5 = _0x3e3bc5 - 0x0;
    var _0x5bdaa5 = _0x1490[_0x3e3bc5];
    return _0x5bdaa5;
};
import { n as _0xe835e } from './index-589c1747.js';
var i = function () {
        var _0x3cb1ec = {};
        _0x3cb1ec[_0x3721('0x0')] = function (_0x252c8a, _0x2f95c1, _0x526236) {
            return _0x252c8a(_0x2f95c1, _0x526236);
        };
        _0x3cb1ec[_0x3721('0x1')] = _0x3721('0x2');
        _0x3cb1ec[_0x3721('0x3')] = function (_0x5e3d19, _0x3aec0a, _0x261642, _0xdd1878, _0x3fb120) {
            return _0x5e3d19(_0x3aec0a, _0x261642, _0xdd1878, _0x3fb120);
        };
        _0x3cb1ec[_0x3721('0x4')] = _0x3721('0x5');
        _0x3cb1ec[_0x3721('0x6')] = _0x3721('0x7');
        _0x3cb1ec[_0x3721('0x8')] = _0x3721('0x9');
        var _0x31e403 = this, _0x3a18a1 = _0x31e403[_0x3721('0xa')], _0x538c8a = _0x31e403[_0x3721('0xb')]['_c'] || _0x3a18a1;
        return _0x3cb1ec[_0x3721('0x0')](_0x538c8a, _0x3cb1ec[_0x3721('0x1')], [_0x3cb1ec[_0x3721('0x3')](_0x538c8a, _0x3cb1ec[_0x3721('0x1')], { 'staticStyle': { 'height': _0x3cb1ec[_0x3721('0x4')] } }, [_0x3cb1ec[_0x3721('0x0')](_0x538c8a, _0x3cb1ec[_0x3721('0x6')], {
                    'ref': _0x3cb1ec[_0x3721('0x8')],
                    'attrs': {
                        'options': _0x31e403[_0x3721('0xc')],
                        'on-node-click': _0x31e403[_0x3721('0xd')],
                        'on-line-click': _0x31e403[_0x3721('0xe')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x3721('0xf')] = _0x3721('0x10');
r[_0x3721('0x11')] = {};
r[_0x3721('0x12')] = function () {
    var _0x12d05b = {
        HtYFO: _0x3721('0x13'),
        OdeJz: _0x3721('0x14')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x12d05b.HtYFO,
            layout: { layoutName: _0x12d05b.OdeJz }
        }
    };
};
r[_0x3721('0x15')] = function () {
    this.showGraph();
};
r[_0x3721('0x16')] = {};
r[_0x3721('0x16')][_0x3721('0x17')] = function () {
    var _0x3608d7 = {
        TyakJ: _0x3721('0x18'),
        XXqQC: _0x3721('0x19'),
        gyHIS: _0x3721('0x1a'),
        ZGtIX: _0x3721('0x1b')
    };
    const _0x23f52a = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x3608d7.TyakJ
            },
            {
                id: 'b',
                text: 'B',
                color: _0x3608d7.XXqQC,
                fontColor: _0x3608d7.TyakJ
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
                text: _0x3608d7.gyHIS,
                color: _0x3608d7.XXqQC
            },
            {
                from: 'a',
                to: 'c',
                text: _0x3608d7.gyHIS
            },
            {
                from: 'a',
                to: 'e',
                text: _0x3608d7.gyHIS
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x3608d7.ZGtIX
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x23f52a, _0x38c855 => {
    });
};
r[_0x3721('0x16')][_0x3721('0xd')] = function (_0x14ab25, _0x9dd7bd) {
    var _0x395337 = { kWmTl: _0x3721('0x1c') };
    console.log(_0x395337.kWmTl, _0x14ab25);
};
r[_0x3721('0x16')][_0x3721('0xe')] = function (_0x3c50bb, _0x580475, _0x1a9a94) {
    var _0x37c6be = { tLlyy: _0x3721('0x1d') };
    console.log(_0x37c6be.tLlyy, _0x3c50bb);
};
var c = _0xe835e(r, i, l, !0x1, s, null, null, null);
function s(_0x514b12) {
    for (let _0x21c13e in n)
        this[_0x21c13e] = n[_0x21c13e];
}
const d = function () {
    return c[_0x3721('0x1e')];
}();
export {
    d as default
};