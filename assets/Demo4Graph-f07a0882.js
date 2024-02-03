
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x197d = [
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
    'mounted',
    'methods',
    'showSeeksGraph',
    'yellow',
    '#43a2f1',
    '关系1',
    '关系2',
    '关系3',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'arGzp',
    'ihXYI',
    'div',
    'jfTqq',
    'dtCTJ',
    'calc(100vh\x20-\x2060px)',
    'WZDTF',
    'NLhta',
    'RelationGraph',
    'obvBn',
    'graphRef'
];
(function (_0x16a79f, _0x41839f) {
    var _0x4b8c20 = function (_0x1d0c22) {
        while (--_0x1d0c22) {
            _0x16a79f['push'](_0x16a79f['shift']());
        }
    };
    _0x4b8c20(++_0x41839f);
}(_0x197d, 0x160));
var _0x1213 = function (_0x1c73c8, _0x4082df) {
    _0x1c73c8 = _0x1c73c8 - 0x0;
    var _0x78d43b = _0x197d[_0x1c73c8];
    return _0x78d43b;
};
import { n as _0x2577a8 } from './index-bc1c6247.js';
var i = function () {
        var _0x29e751 = {};
        _0x29e751[_0x1213('0x0')] = function (_0x16502f, _0x454297, _0x1a14ca) {
            return _0x16502f(_0x454297, _0x1a14ca);
        };
        _0x29e751[_0x1213('0x1')] = _0x1213('0x2');
        _0x29e751[_0x1213('0x3')] = function (_0x12dcaa, _0x112dea, _0xc62ac7, _0x3c9a4b, _0x359d90) {
            return _0x12dcaa(_0x112dea, _0xc62ac7, _0x3c9a4b, _0x359d90);
        };
        _0x29e751[_0x1213('0x4')] = _0x1213('0x5');
        _0x29e751[_0x1213('0x6')] = function (_0x5a2d62, _0xb622c7, _0x2e283a) {
            return _0x5a2d62(_0xb622c7, _0x2e283a);
        };
        _0x29e751[_0x1213('0x7')] = _0x1213('0x8');
        _0x29e751[_0x1213('0x9')] = _0x1213('0xa');
        var _0x4d53e1 = this, _0x137928 = _0x4d53e1[_0x1213('0xb')], _0x57f33b = _0x4d53e1[_0x1213('0xc')]['_c'] || _0x137928;
        return _0x29e751[_0x1213('0x0')](_0x57f33b, _0x29e751[_0x1213('0x1')], [_0x29e751[_0x1213('0x3')](_0x57f33b, _0x29e751[_0x1213('0x1')], { 'staticStyle': { 'height': _0x29e751[_0x1213('0x4')] } }, [_0x29e751[_0x1213('0x6')](_0x57f33b, _0x29e751[_0x1213('0x7')], {
                    'ref': _0x29e751[_0x1213('0x9')],
                    'attrs': {
                        'options': _0x4d53e1[_0x1213('0xd')],
                        'on-node-click': _0x4d53e1[_0x1213('0xe')],
                        'on-line-click': _0x4d53e1[_0x1213('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x1213('0x10')] = _0x1213('0x11');
l[_0x1213('0x12')] = {};
l[_0x1213('0x13')] = function () {
    var _0x490dd9 = { dqIyC: _0x1213('0x14') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            defaultJunctionPoint: _0x490dd9.dqIyC
        }
    };
};
l[_0x1213('0x15')] = function () {
    this.showSeeksGraph();
};
l[_0x1213('0x16')] = {};
l[_0x1213('0x16')][_0x1213('0x17')] = function () {
    var _0x3de18e = {
        qhxLz: _0x1213('0x18'),
        biuAL: _0x1213('0x19'),
        JjmfG: _0x1213('0x1a'),
        Tvwij: _0x1213('0x1b'),
        BbngV: _0x1213('0x1c'),
        KTkkv: _0x1213('0x1d')
    };
    const _0x529576 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x3de18e.qhxLz
            },
            {
                id: 'b',
                text: 'B',
                color: _0x3de18e.biuAL,
                fontColor: _0x3de18e.qhxLz
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
                text: _0x3de18e.JjmfG,
                color: _0x3de18e.biuAL
            },
            {
                from: 'a',
                to: 'c',
                text: _0x3de18e.Tvwij
            },
            {
                from: 'a',
                to: 'e',
                text: _0x3de18e.BbngV
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x3de18e.KTkkv
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x529576, _0x3435ed => {
    });
};
l[_0x1213('0x16')][_0x1213('0xe')] = function (_0x1dd894, _0x588441) {
    var _0x26e080 = { FxCPU: _0x1213('0x1e') };
    console.log(_0x26e080.FxCPU, _0x1dd894);
};
l[_0x1213('0x16')][_0x1213('0xf')] = function (_0x5e6486, _0x5f0fca, _0x4c3de6) {
    var _0x399d45 = { RBOYS: _0x1213('0x1f') };
    console.log(_0x399d45.RBOYS, _0x5e6486);
};
var c = _0x2577a8(l, i, a, !0x1, s, null, null, null);
function s(_0x45eabf) {
    for (let _0x2c9889 in n)
        this[_0x2c9889] = n[_0x2c9889];
}
const d = function () {
    return c[_0x1213('0x20')];
}();
export {
    d as default
};