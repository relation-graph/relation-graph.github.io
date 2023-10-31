
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1a43 = [
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
    'KZgiV',
    'MXTNy',
    'div',
    'mDgDB',
    'lAboC',
    'calc(100vh\x20-\x2060px)',
    'iYnyS',
    'RelationGraph',
    'sMILJ',
    'graphRef',
    '$createElement'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x1a43, 0x15d));
var _0x2872 = function (_0x4ebb21, _0x79c8cc) {
    _0x4ebb21 = _0x4ebb21 - 0x0;
    var _0x586c56 = _0x1a43[_0x4ebb21];
    return _0x586c56;
};
import { n as _0x2369e4 } from './index-28740cc1.js';
var a = function () {
        var _0x5756fc = {};
        _0x5756fc[_0x2872('0x0')] = function (_0x200b25, _0x453640, _0x520c16) {
            return _0x200b25(_0x453640, _0x520c16);
        };
        _0x5756fc[_0x2872('0x1')] = _0x2872('0x2');
        _0x5756fc[_0x2872('0x3')] = function (_0x51bfe6, _0x399e64, _0x2da712, _0x7ef69a, _0x19db80) {
            return _0x51bfe6(_0x399e64, _0x2da712, _0x7ef69a, _0x19db80);
        };
        _0x5756fc[_0x2872('0x4')] = _0x2872('0x5');
        _0x5756fc[_0x2872('0x6')] = _0x2872('0x7');
        _0x5756fc[_0x2872('0x8')] = _0x2872('0x9');
        var _0x3963f4 = this, _0x14ce2e = _0x3963f4[_0x2872('0xa')], _0x54c32e = _0x3963f4[_0x2872('0xb')]['_c'] || _0x14ce2e;
        return _0x5756fc[_0x2872('0x0')](_0x54c32e, _0x5756fc[_0x2872('0x1')], [_0x5756fc[_0x2872('0x3')](_0x54c32e, _0x5756fc[_0x2872('0x1')], { 'staticStyle': { 'height': _0x5756fc[_0x2872('0x4')] } }, [_0x5756fc[_0x2872('0x0')](_0x54c32e, _0x5756fc[_0x2872('0x6')], {
                    'ref': _0x5756fc[_0x2872('0x8')],
                    'attrs': {
                        'options': _0x3963f4[_0x2872('0xc')],
                        'on-node-click': _0x3963f4[_0x2872('0xd')],
                        'on-line-click': _0x3963f4[_0x2872('0xe')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x2872('0xf')] = _0x2872('0x10');
r[_0x2872('0x11')] = {};
r[_0x2872('0x12')] = function () {
    var _0x588ff9 = { kPRXa: _0x2872('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x588ff9.kPRXa
        }
    };
};
r[_0x2872('0x14')] = function () {
    this.showGraph();
};
r[_0x2872('0x15')] = {};
r[_0x2872('0x15')][_0x2872('0x16')] = function () {
    var _0x1c0f2e = {
        uTtbf: _0x2872('0x17'),
        xOcel: _0x2872('0x18'),
        caFEt: _0x2872('0x19'),
        ARZEg: _0x2872('0x1a')
    };
    const _0x342c28 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x1c0f2e.uTtbf
            },
            {
                id: 'b',
                text: 'B',
                color: _0x1c0f2e.xOcel,
                fontColor: _0x1c0f2e.uTtbf
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
                text: _0x1c0f2e.caFEt,
                color: _0x1c0f2e.xOcel
            },
            {
                from: 'a',
                to: 'c',
                text: _0x1c0f2e.caFEt
            },
            {
                from: 'a',
                to: 'e',
                text: _0x1c0f2e.caFEt
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x1c0f2e.ARZEg
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x342c28, _0x3353f6 => {
    });
};
r[_0x2872('0x15')][_0x2872('0xd')] = function (_0x34a412, _0x23c99f) {
    var _0x4de3d1 = { Kewjc: _0x2872('0x1b') };
    console.log(_0x4de3d1.Kewjc, _0x34a412);
};
r[_0x2872('0x15')][_0x2872('0xe')] = function (_0x8c82a5, _0x28b4d6, _0x54285b) {
    var _0x51ba4a = { EIZxD: _0x2872('0x1c') };
    console.log(_0x51ba4a.EIZxD, _0x8c82a5);
};
var c = _0x2369e4(r, a, l, !0x1, s, null, null, null);
function s(_0x57bd68) {
    for (let _0x5c3857 in n)
        this[_0x5c3857] = n[_0x5c3857];
}
const d = function () {
    return c[_0x2872('0x1d')];
}();
export {
    d as default
};