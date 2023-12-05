
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3324 = [
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    'Line\x20Text',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'YIwhj',
    'LxqGJ',
    'div',
    'IXgPS',
    'mbmdt',
    'calc(100vh\x20-\x2060px)',
    'WAiav',
    'LMRdU',
    'RelationGraph',
    'UFCom',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data',
    'border',
    'mounted'
];
(function (_0x587021, _0x8b7952) {
    var _0x24ae2d = function (_0x188734) {
        while (--_0x188734) {
            _0x587021['push'](_0x587021['shift']());
        }
    };
    _0x24ae2d(++_0x8b7952);
}(_0x3324, 0xc3));
var _0x3d59 = function (_0x5f4366, _0x2ad2ae) {
    _0x5f4366 = _0x5f4366 - 0x0;
    var _0x9ff8b2 = _0x3324[_0x5f4366];
    return _0x9ff8b2;
};
import { n as _0x133ec5 } from './index-d3c29682.js';
var a = function () {
        var _0x170cbf = {};
        _0x170cbf[_0x3d59('0x0')] = function (_0x5d9158, _0x4cdb06, _0x558327) {
            return _0x5d9158(_0x4cdb06, _0x558327);
        };
        _0x170cbf[_0x3d59('0x1')] = _0x3d59('0x2');
        _0x170cbf[_0x3d59('0x3')] = function (_0x637d3, _0x40378d, _0x375fc0, _0x4175de, _0x5753bb) {
            return _0x637d3(_0x40378d, _0x375fc0, _0x4175de, _0x5753bb);
        };
        _0x170cbf[_0x3d59('0x4')] = _0x3d59('0x5');
        _0x170cbf[_0x3d59('0x6')] = function (_0x260cd8, _0x2e4bd5, _0x5a20be) {
            return _0x260cd8(_0x2e4bd5, _0x5a20be);
        };
        _0x170cbf[_0x3d59('0x7')] = _0x3d59('0x8');
        _0x170cbf[_0x3d59('0x9')] = _0x3d59('0xa');
        var _0x286032 = this, _0x1711f4 = _0x286032[_0x3d59('0xb')], _0xd8e530 = _0x286032[_0x3d59('0xc')]['_c'] || _0x1711f4;
        return _0x170cbf[_0x3d59('0x0')](_0xd8e530, _0x170cbf[_0x3d59('0x1')], [_0x170cbf[_0x3d59('0x3')](_0xd8e530, _0x170cbf[_0x3d59('0x1')], { 'staticStyle': { 'height': _0x170cbf[_0x3d59('0x4')] } }, [_0x170cbf[_0x3d59('0x6')](_0xd8e530, _0x170cbf[_0x3d59('0x7')], {
                    'ref': _0x170cbf[_0x3d59('0x9')],
                    'attrs': {
                        'options': _0x286032[_0x3d59('0xd')],
                        'on-node-click': _0x286032[_0x3d59('0xe')],
                        'on-line-click': _0x286032[_0x3d59('0xf')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x3d59('0x10')] = _0x3d59('0x11');
r[_0x3d59('0x12')] = {};
r[_0x3d59('0x13')] = function () {
    var _0xbf33dc = { htkop: _0x3d59('0x14') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0xbf33dc.htkop
        }
    };
};
r[_0x3d59('0x15')] = function () {
    this.showGraph();
};
r[_0x3d59('0x16')] = {};
r[_0x3d59('0x16')][_0x3d59('0x17')] = function () {
    var _0x34714d = {
        tsUAu: _0x3d59('0x18'),
        bgRkF: _0x3d59('0x19'),
        kxqtJ: _0x3d59('0x1a'),
        OHCsO: _0x3d59('0x1b')
    };
    const _0x5abf7c = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x34714d.tsUAu
            },
            {
                id: 'b',
                text: 'B',
                color: _0x34714d.bgRkF,
                fontColor: _0x34714d.tsUAu
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
                text: _0x34714d.kxqtJ,
                color: _0x34714d.bgRkF
            },
            {
                from: 'a',
                to: 'c',
                text: _0x34714d.kxqtJ
            },
            {
                from: 'a',
                to: 'e',
                text: _0x34714d.kxqtJ
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x34714d.OHCsO
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x5abf7c, _0x192ff0 => {
    });
};
r[_0x3d59('0x16')][_0x3d59('0xe')] = function (_0x48345c, _0xc5cd80) {
    var _0x2d0d73 = { puHff: _0x3d59('0x1c') };
    console.log(_0x2d0d73.puHff, _0x48345c);
};
r[_0x3d59('0x16')][_0x3d59('0xf')] = function (_0x2982c4, _0x5a7c30, _0x1b82a6) {
    var _0x212573 = { pILcx: _0x3d59('0x1d') };
    console.log(_0x212573.pILcx, _0x2982c4);
};
var c = _0x133ec5(r, a, l, !0x1, s, null, null, null);
function s(_0x231065) {
    for (let _0x113d29 in n)
        this[_0x113d29] = n[_0x113d29];
}
const d = function () {
    return c[_0x3d59('0x1e')];
}();
export {
    d as default
};