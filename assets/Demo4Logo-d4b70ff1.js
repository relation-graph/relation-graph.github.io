
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x45fb = [
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
    'VvZNQ',
    'IdUJg',
    'div',
    'UnloC',
    'ETixK',
    'calc(100vh\x20-\x2060px)',
    'FOyxj',
    'hIFEn',
    'RelationGraph',
    'SpSNJ',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions'
];
(function (_0x5810d8, _0x54f21d) {
    var _0x40fe37 = function (_0x15d069) {
        while (--_0x15d069) {
            _0x5810d8['push'](_0x5810d8['shift']());
        }
    };
    _0x40fe37(++_0x54f21d);
}(_0x45fb, 0x8d));
var _0x5a17 = function (_0x319ff2, _0x39ccb2) {
    _0x319ff2 = _0x319ff2 - 0x0;
    var _0x27279c = _0x45fb[_0x319ff2];
    return _0x27279c;
};
import { n as _0x12bdcf } from './index-023a64e5.js';
var a = function () {
        var _0x38730b = {};
        _0x38730b[_0x5a17('0x0')] = function (_0x26fe5b, _0x14d1f3, _0xa9143c) {
            return _0x26fe5b(_0x14d1f3, _0xa9143c);
        };
        _0x38730b[_0x5a17('0x1')] = _0x5a17('0x2');
        _0x38730b[_0x5a17('0x3')] = function (_0x2471dc, _0x16d554, _0x49644e, _0x48aecc, _0xa65cfe) {
            return _0x2471dc(_0x16d554, _0x49644e, _0x48aecc, _0xa65cfe);
        };
        _0x38730b[_0x5a17('0x4')] = _0x5a17('0x5');
        _0x38730b[_0x5a17('0x6')] = function (_0x54f9e8, _0x1d0746, _0x4e34cd) {
            return _0x54f9e8(_0x1d0746, _0x4e34cd);
        };
        _0x38730b[_0x5a17('0x7')] = _0x5a17('0x8');
        _0x38730b[_0x5a17('0x9')] = _0x5a17('0xa');
        var _0xa5532b = this, _0x3c8745 = _0xa5532b[_0x5a17('0xb')], _0x5ec401 = _0xa5532b[_0x5a17('0xc')]['_c'] || _0x3c8745;
        return _0x38730b[_0x5a17('0x0')](_0x5ec401, _0x38730b[_0x5a17('0x1')], [_0x38730b[_0x5a17('0x3')](_0x5ec401, _0x38730b[_0x5a17('0x1')], { 'staticStyle': { 'height': _0x38730b[_0x5a17('0x4')] } }, [_0x38730b[_0x5a17('0x6')](_0x5ec401, _0x38730b[_0x5a17('0x7')], {
                    'ref': _0x38730b[_0x5a17('0x9')],
                    'attrs': {
                        'options': _0xa5532b[_0x5a17('0xd')],
                        'on-node-click': _0xa5532b[_0x5a17('0xe')],
                        'on-line-click': _0xa5532b[_0x5a17('0xf')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x5a17('0x10')] = _0x5a17('0x11');
r[_0x5a17('0x12')] = {};
r[_0x5a17('0x13')] = function () {
    var _0x3016d0 = { IPZFh: _0x5a17('0x14') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x3016d0.IPZFh
        }
    };
};
r[_0x5a17('0x15')] = function () {
    this.showGraph();
};
r[_0x5a17('0x16')] = {};
r[_0x5a17('0x16')][_0x5a17('0x17')] = function () {
    var _0x31f8d6 = {
        DSxRw: _0x5a17('0x18'),
        BaDph: _0x5a17('0x19'),
        nPFDD: _0x5a17('0x1a'),
        xqiTG: _0x5a17('0x1b')
    };
    const _0x1d1e10 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x31f8d6.DSxRw
            },
            {
                id: 'b',
                text: 'B',
                color: _0x31f8d6.BaDph,
                fontColor: _0x31f8d6.DSxRw
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
                text: _0x31f8d6.nPFDD,
                color: _0x31f8d6.BaDph
            },
            {
                from: 'a',
                to: 'c',
                text: _0x31f8d6.nPFDD
            },
            {
                from: 'a',
                to: 'e',
                text: _0x31f8d6.nPFDD
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x31f8d6.xqiTG
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x1d1e10, _0x108419 => {
    });
};
r[_0x5a17('0x16')][_0x5a17('0xe')] = function (_0x5bd517, _0x544242) {
    var _0x33f9b1 = { cPxxS: _0x5a17('0x1c') };
    console.log(_0x33f9b1.cPxxS, _0x5bd517);
};
r[_0x5a17('0x16')][_0x5a17('0xf')] = function (_0x28cc91, _0x49db81, _0x4ceea1) {
    var _0x3ee70 = { cleRW: _0x5a17('0x1d') };
    console.log(_0x3ee70.cleRW, _0x28cc91);
};
var c = _0x12bdcf(r, a, l, !0x1, s, null, null, null);
function s(_0x3acca1) {
    for (let _0xcd5124 in n)
        this[_0xcd5124] = n[_0xcd5124];
}
const d = function () {
    return c[_0x5a17('0x1e')];
}();
export {
    d as default
};