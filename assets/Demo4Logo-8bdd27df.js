
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x8de6 = [
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data',
    'border',
    'mounted',
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    'Line\x20Text',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'dwNEa',
    'ikJyr',
    'div',
    'RDish',
    'cLOWX',
    'calc(100vh\x20-\x2060px)',
    'bekHG',
    'RelationGraph',
    'nsRLL',
    'graphRef',
    '$createElement'
];
(function (_0x4c9dde, _0x3e02a4) {
    var _0x742818 = function (_0x508186) {
        while (--_0x508186) {
            _0x4c9dde['push'](_0x4c9dde['shift']());
        }
    };
    _0x742818(++_0x3e02a4);
}(_0x8de6, 0xe5));
var _0x2138 = function (_0x2201e7, _0x443b75) {
    _0x2201e7 = _0x2201e7 - 0x0;
    var _0x468be7 = _0x8de6[_0x2201e7];
    return _0x468be7;
};
import { n as _0x21f859 } from './index-c396e703.js';
var a = function () {
        var _0x25a288 = {};
        _0x25a288[_0x2138('0x0')] = function (_0x57cb44, _0x4f3d65, _0xd4542a) {
            return _0x57cb44(_0x4f3d65, _0xd4542a);
        };
        _0x25a288[_0x2138('0x1')] = _0x2138('0x2');
        _0x25a288[_0x2138('0x3')] = function (_0x1906a4, _0x35139b, _0x54daff, _0x4cdc9e, _0x521ea9) {
            return _0x1906a4(_0x35139b, _0x54daff, _0x4cdc9e, _0x521ea9);
        };
        _0x25a288[_0x2138('0x4')] = _0x2138('0x5');
        _0x25a288[_0x2138('0x6')] = _0x2138('0x7');
        _0x25a288[_0x2138('0x8')] = _0x2138('0x9');
        var _0x473cef = this, _0x5096fc = _0x473cef[_0x2138('0xa')], _0x35837a = _0x473cef[_0x2138('0xb')]['_c'] || _0x5096fc;
        return _0x25a288[_0x2138('0x0')](_0x35837a, _0x25a288[_0x2138('0x1')], [_0x25a288[_0x2138('0x3')](_0x35837a, _0x25a288[_0x2138('0x1')], { 'staticStyle': { 'height': _0x25a288[_0x2138('0x4')] } }, [_0x25a288[_0x2138('0x0')](_0x35837a, _0x25a288[_0x2138('0x6')], {
                    'ref': _0x25a288[_0x2138('0x8')],
                    'attrs': {
                        'options': _0x473cef[_0x2138('0xc')],
                        'on-node-click': _0x473cef[_0x2138('0xd')],
                        'on-line-click': _0x473cef[_0x2138('0xe')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x2138('0xf')] = _0x2138('0x10');
r[_0x2138('0x11')] = {};
r[_0x2138('0x12')] = function () {
    var _0x33bd7f = { zNDPT: _0x2138('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x33bd7f.zNDPT
        }
    };
};
r[_0x2138('0x14')] = function () {
    this.showGraph();
};
r[_0x2138('0x15')] = {};
r[_0x2138('0x15')][_0x2138('0x16')] = function () {
    var _0x3c7305 = {
        JMBTS: _0x2138('0x17'),
        FmfxM: _0x2138('0x18'),
        qluPv: _0x2138('0x19'),
        nhTUa: _0x2138('0x1a')
    };
    const _0x28e647 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x3c7305.JMBTS
            },
            {
                id: 'b',
                text: 'B',
                color: _0x3c7305.FmfxM,
                fontColor: _0x3c7305.JMBTS
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
                text: _0x3c7305.qluPv,
                color: _0x3c7305.FmfxM
            },
            {
                from: 'a',
                to: 'c',
                text: _0x3c7305.qluPv
            },
            {
                from: 'a',
                to: 'e',
                text: _0x3c7305.qluPv
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x3c7305.nhTUa
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x28e647, _0x3ec79a => {
    });
};
r[_0x2138('0x15')][_0x2138('0xd')] = function (_0x31da66, _0x304f94) {
    var _0x1e0b7e = { VSrsG: _0x2138('0x1b') };
    console.log(_0x1e0b7e.VSrsG, _0x31da66);
};
r[_0x2138('0x15')][_0x2138('0xe')] = function (_0x30770c, _0xd804c0, _0x5c1697) {
    var _0x52795f = { Bejjd: _0x2138('0x1c') };
    console.log(_0x52795f.Bejjd, _0x30770c);
};
var c = _0x21f859(r, a, l, !0x1, s, null, null, null);
function s(_0x3ec273) {
    for (let _0x3a02b0 in n)
        this[_0x3a02b0] = n[_0x3a02b0];
}
const d = function () {
    return c[_0x2138('0x1d')];
}();
export {
    d as default
};