
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1d89 = [
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
    'keUag',
    'njDxX',
    'div',
    'ToTaQ',
    'pOclS',
    'calc(100vh\x20-\x2060px)',
    'jqqJe',
    'eiRkr',
    'RelationGraph',
    'siwJz',
    'graphRef',
    '$createElement',
    '_self'
];
(function (_0x1664d0, _0x3a5914) {
    var _0x1f9ac5 = function (_0xc70c42) {
        while (--_0xc70c42) {
            _0x1664d0['push'](_0x1664d0['shift']());
        }
    };
    _0x1f9ac5(++_0x3a5914);
}(_0x1d89, 0x186));
var _0x22b8 = function (_0x3c2277, _0x56cc3d) {
    _0x3c2277 = _0x3c2277 - 0x0;
    var _0x5e0908 = _0x1d89[_0x3c2277];
    return _0x5e0908;
};
import { n as _0x5e9cbb } from './index-35e4fca6.js';
var a = function () {
        var _0x2c88d7 = {};
        _0x2c88d7[_0x22b8('0x0')] = function (_0xde69e8, _0x13eb4e, _0x50ddfd) {
            return _0xde69e8(_0x13eb4e, _0x50ddfd);
        };
        _0x2c88d7[_0x22b8('0x1')] = _0x22b8('0x2');
        _0x2c88d7[_0x22b8('0x3')] = function (_0x5903d0, _0x5105ee, _0x1bd4f5, _0x2d8e03, _0x4a7464) {
            return _0x5903d0(_0x5105ee, _0x1bd4f5, _0x2d8e03, _0x4a7464);
        };
        _0x2c88d7[_0x22b8('0x4')] = _0x22b8('0x5');
        _0x2c88d7[_0x22b8('0x6')] = function (_0x37abd8, _0x28b275, _0x453e7e) {
            return _0x37abd8(_0x28b275, _0x453e7e);
        };
        _0x2c88d7[_0x22b8('0x7')] = _0x22b8('0x8');
        _0x2c88d7[_0x22b8('0x9')] = _0x22b8('0xa');
        var _0x46a06e = this, _0x31844d = _0x46a06e[_0x22b8('0xb')], _0x3f1253 = _0x46a06e[_0x22b8('0xc')]['_c'] || _0x31844d;
        return _0x2c88d7[_0x22b8('0x0')](_0x3f1253, _0x2c88d7[_0x22b8('0x1')], [_0x2c88d7[_0x22b8('0x3')](_0x3f1253, _0x2c88d7[_0x22b8('0x1')], { 'staticStyle': { 'height': _0x2c88d7[_0x22b8('0x4')] } }, [_0x2c88d7[_0x22b8('0x6')](_0x3f1253, _0x2c88d7[_0x22b8('0x7')], {
                    'ref': _0x2c88d7[_0x22b8('0x9')],
                    'attrs': {
                        'options': _0x46a06e[_0x22b8('0xd')],
                        'on-node-click': _0x46a06e[_0x22b8('0xe')],
                        'on-line-click': _0x46a06e[_0x22b8('0xf')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x22b8('0x10')] = _0x22b8('0x11');
r[_0x22b8('0x12')] = {};
r[_0x22b8('0x13')] = function () {
    var _0x2a84bf = { ygEFW: _0x22b8('0x14') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x2a84bf.ygEFW
        }
    };
};
r[_0x22b8('0x15')] = function () {
    this.showGraph();
};
r[_0x22b8('0x16')] = {};
r[_0x22b8('0x16')][_0x22b8('0x17')] = function () {
    var _0x3208a3 = {
        QetQH: _0x22b8('0x18'),
        RBHBj: _0x22b8('0x19'),
        kQWdY: _0x22b8('0x1a'),
        PAzBx: _0x22b8('0x1b')
    };
    const _0x39cf49 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x3208a3.QetQH
            },
            {
                id: 'b',
                text: 'B',
                color: _0x3208a3.RBHBj,
                fontColor: _0x3208a3.QetQH
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
                text: _0x3208a3.kQWdY,
                color: _0x3208a3.RBHBj
            },
            {
                from: 'a',
                to: 'c',
                text: _0x3208a3.kQWdY
            },
            {
                from: 'a',
                to: 'e',
                text: _0x3208a3.kQWdY
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x3208a3.PAzBx
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x39cf49, _0x9974d2 => {
    });
};
r[_0x22b8('0x16')][_0x22b8('0xe')] = function (_0x478736, _0x3c4e10) {
    var _0x4b4099 = { ezlXS: _0x22b8('0x1c') };
    console.log(_0x4b4099.ezlXS, _0x478736);
};
r[_0x22b8('0x16')][_0x22b8('0xf')] = function (_0x230206, _0x31f8a4, _0x15dbfc) {
    var _0x328f41 = { KjQoP: _0x22b8('0x1d') };
    console.log(_0x328f41.KjQoP, _0x230206);
};
var c = _0x5e9cbb(r, a, l, !0x1, s, null, null, null);
function s(_0x16c0f9) {
    for (let _0x530470 in n)
        this[_0x530470] = n[_0x530470];
}
const d = function () {
    return c[_0x22b8('0x1e')];
}();
export {
    d as default
};