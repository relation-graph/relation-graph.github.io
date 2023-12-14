
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x50c4 = [
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
    'kNCZI',
    'LAYqA',
    'div',
    'VGzeZ',
    'lwyNr',
    'calc(100vh\x20-\x2060px)',
    'VPqEY',
    'RelationGraph',
    'hRRoh',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components'
];
(function (_0xcc5043, _0x117764) {
    var _0x23215e = function (_0x2ece77) {
        while (--_0x2ece77) {
            _0xcc5043['push'](_0xcc5043['shift']());
        }
    };
    _0x23215e(++_0x117764);
}(_0x50c4, 0x14e));
var _0x8e45 = function (_0x14801b, _0x282077) {
    _0x14801b = _0x14801b - 0x0;
    var _0x1adc01 = _0x50c4[_0x14801b];
    return _0x1adc01;
};
import { n as _0x5b77fa } from './index-7cdfa577.js';
var i = function () {
        var _0x48977c = {};
        _0x48977c[_0x8e45('0x0')] = function (_0x28fda0, _0x122ccd, _0x572562) {
            return _0x28fda0(_0x122ccd, _0x572562);
        };
        _0x48977c[_0x8e45('0x1')] = _0x8e45('0x2');
        _0x48977c[_0x8e45('0x3')] = function (_0x16d6c5, _0x30e113, _0x528246, _0x573f53, _0x3859b1) {
            return _0x16d6c5(_0x30e113, _0x528246, _0x573f53, _0x3859b1);
        };
        _0x48977c[_0x8e45('0x4')] = _0x8e45('0x5');
        _0x48977c[_0x8e45('0x6')] = _0x8e45('0x7');
        _0x48977c[_0x8e45('0x8')] = _0x8e45('0x9');
        var _0x586c42 = this, _0x5d0166 = _0x586c42[_0x8e45('0xa')], _0x5785a8 = _0x586c42[_0x8e45('0xb')]['_c'] || _0x5d0166;
        return _0x48977c[_0x8e45('0x0')](_0x5785a8, _0x48977c[_0x8e45('0x1')], [_0x48977c[_0x8e45('0x3')](_0x5785a8, _0x48977c[_0x8e45('0x1')], { 'staticStyle': { 'height': _0x48977c[_0x8e45('0x4')] } }, [_0x48977c[_0x8e45('0x0')](_0x5785a8, _0x48977c[_0x8e45('0x6')], {
                    'ref': _0x48977c[_0x8e45('0x8')],
                    'attrs': {
                        'options': _0x586c42[_0x8e45('0xc')],
                        'on-node-click': _0x586c42[_0x8e45('0xd')],
                        'on-line-click': _0x586c42[_0x8e45('0xe')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x8e45('0xf')] = _0x8e45('0x10');
l[_0x8e45('0x11')] = {};
l[_0x8e45('0x12')] = function () {
    var _0x54ea23 = { cwVdX: _0x8e45('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            defaultJunctionPoint: _0x54ea23.cwVdX
        }
    };
};
l[_0x8e45('0x14')] = function () {
    this.showSeeksGraph();
};
l[_0x8e45('0x15')] = {};
l[_0x8e45('0x15')][_0x8e45('0x16')] = function () {
    var _0x440687 = {
        bvFty: _0x8e45('0x17'),
        CohqA: _0x8e45('0x18'),
        aFToe: _0x8e45('0x19'),
        SgQVF: _0x8e45('0x1a'),
        jlDfU: _0x8e45('0x1b'),
        xgNVo: _0x8e45('0x1c')
    };
    const _0x5d46d6 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x440687.bvFty
            },
            {
                id: 'b',
                text: 'B',
                color: _0x440687.CohqA,
                fontColor: _0x440687.bvFty
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
                text: _0x440687.aFToe,
                color: _0x440687.CohqA
            },
            {
                from: 'a',
                to: 'c',
                text: _0x440687.SgQVF
            },
            {
                from: 'a',
                to: 'e',
                text: _0x440687.jlDfU
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x440687.xgNVo
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x5d46d6, _0xb57ffa => {
    });
};
l[_0x8e45('0x15')][_0x8e45('0xd')] = function (_0xddc2ea, _0x5eb173) {
    var _0x2ac09a = { lfUQN: _0x8e45('0x1d') };
    console.log(_0x2ac09a.lfUQN, _0xddc2ea);
};
l[_0x8e45('0x15')][_0x8e45('0xe')] = function (_0x9214a6, _0x3d961e, _0x46ca00) {
    var _0x2e1785 = { PJsFY: _0x8e45('0x1e') };
    console.log(_0x2e1785.PJsFY, _0x9214a6);
};
var c = _0x5b77fa(l, i, a, !0x1, s, null, null, null);
function s(_0x25b8ca) {
    for (let _0x22f2e0 in n)
        this[_0x22f2e0] = n[_0x22f2e0];
}
const d = function () {
    return c[_0x8e45('0x1f')];
}();
export {
    d as default
};