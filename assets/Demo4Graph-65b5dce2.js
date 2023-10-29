
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1af4 = [
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
    'qVwye',
    'QbFuU',
    'div',
    'luFvV',
    'WdYGD',
    'calc(100vh\x20-\x2060px)',
    'fnEgP',
    'zOChl',
    'RelationGraph',
    'yBZlU',
    'graphRef'
];
(function (_0xa71f02, _0x52606d) {
    var _0x1f3bed = function (_0x439329) {
        while (--_0x439329) {
            _0xa71f02['push'](_0xa71f02['shift']());
        }
    };
    _0x1f3bed(++_0x52606d);
}(_0x1af4, 0xdc));
var _0x3234 = function (_0x4ae3ca, _0x103f9c) {
    _0x4ae3ca = _0x4ae3ca - 0x0;
    var _0x377dc1 = _0x1af4[_0x4ae3ca];
    return _0x377dc1;
};
import { n as _0x5c7094 } from './index-b2490647.js';
var i = function () {
        var _0x367d32 = {};
        _0x367d32[_0x3234('0x0')] = function (_0x5a78b0, _0x4d1646, _0x8d4d66) {
            return _0x5a78b0(_0x4d1646, _0x8d4d66);
        };
        _0x367d32[_0x3234('0x1')] = _0x3234('0x2');
        _0x367d32[_0x3234('0x3')] = function (_0x27039c, _0x41d120, _0x7bea6e, _0x10bc8a, _0xed13f2) {
            return _0x27039c(_0x41d120, _0x7bea6e, _0x10bc8a, _0xed13f2);
        };
        _0x367d32[_0x3234('0x4')] = _0x3234('0x5');
        _0x367d32[_0x3234('0x6')] = function (_0x4677fc, _0x3f3c53, _0x4bc100) {
            return _0x4677fc(_0x3f3c53, _0x4bc100);
        };
        _0x367d32[_0x3234('0x7')] = _0x3234('0x8');
        _0x367d32[_0x3234('0x9')] = _0x3234('0xa');
        var _0x3f16cf = this, _0x21b036 = _0x3f16cf[_0x3234('0xb')], _0xe36841 = _0x3f16cf[_0x3234('0xc')]['_c'] || _0x21b036;
        return _0x367d32[_0x3234('0x0')](_0xe36841, _0x367d32[_0x3234('0x1')], [_0x367d32[_0x3234('0x3')](_0xe36841, _0x367d32[_0x3234('0x1')], { 'staticStyle': { 'height': _0x367d32[_0x3234('0x4')] } }, [_0x367d32[_0x3234('0x6')](_0xe36841, _0x367d32[_0x3234('0x7')], {
                    'ref': _0x367d32[_0x3234('0x9')],
                    'attrs': {
                        'options': _0x3f16cf[_0x3234('0xd')],
                        'on-node-click': _0x3f16cf[_0x3234('0xe')],
                        'on-line-click': _0x3f16cf[_0x3234('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x3234('0x10')] = _0x3234('0x11');
l[_0x3234('0x12')] = {};
l[_0x3234('0x13')] = function () {
    var _0x2260ff = { UfwZp: _0x3234('0x14') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            defaultJunctionPoint: _0x2260ff.UfwZp
        }
    };
};
l[_0x3234('0x15')] = function () {
    this.showSeeksGraph();
};
l[_0x3234('0x16')] = {};
l[_0x3234('0x16')][_0x3234('0x17')] = function () {
    var _0x4616a9 = {
        ksywr: _0x3234('0x18'),
        kOfUo: _0x3234('0x19'),
        IbEpn: _0x3234('0x1a'),
        WlyWQ: _0x3234('0x1b'),
        KXtrZ: _0x3234('0x1c'),
        WJVlp: _0x3234('0x1d')
    };
    const _0x33fb22 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x4616a9.ksywr
            },
            {
                id: 'b',
                text: 'B',
                color: _0x4616a9.kOfUo,
                fontColor: _0x4616a9.ksywr
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
                text: _0x4616a9.IbEpn,
                color: _0x4616a9.kOfUo
            },
            {
                from: 'a',
                to: 'c',
                text: _0x4616a9.WlyWQ
            },
            {
                from: 'a',
                to: 'e',
                text: _0x4616a9.KXtrZ
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x4616a9.WJVlp
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x33fb22, _0x174b59 => {
    });
};
l[_0x3234('0x16')][_0x3234('0xe')] = function (_0x56fa9d, _0x5ae051) {
    var _0x4a49ea = { uZlmW: _0x3234('0x1e') };
    console.log(_0x4a49ea.uZlmW, _0x56fa9d);
};
l[_0x3234('0x16')][_0x3234('0xf')] = function (_0x59b947, _0x438d24, _0x174b94) {
    var _0x1f76e3 = { pYNIR: _0x3234('0x1f') };
    console.log(_0x1f76e3.pYNIR, _0x59b947);
};
var c = _0x5c7094(l, i, a, !0x1, s, null, null, null);
function s(_0x2fc12c) {
    for (let _0x28468b in n)
        this[_0x28468b] = n[_0x28468b];
}
const d = function () {
    return c[_0x3234('0x20')];
}();
export {
    d as default
};