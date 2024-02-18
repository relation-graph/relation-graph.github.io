
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3a6d = [
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
    'KXHPj',
    'efIvR',
    'div',
    'TnrpD',
    'kMVGV',
    'calc(100vh\x20-\x2060px)',
    'DxwyT',
    'deDcB',
    'RelationGraph',
    'fxvEA',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions'
];
(function (_0x169e70, _0x4f28f4) {
    var _0x360e5f = function (_0xa5856a) {
        while (--_0xa5856a) {
            _0x169e70['push'](_0x169e70['shift']());
        }
    };
    _0x360e5f(++_0x4f28f4);
}(_0x3a6d, 0x97));
var _0x44c6 = function (_0x1880cd, _0x5c2e0a) {
    _0x1880cd = _0x1880cd - 0x0;
    var _0x366964 = _0x3a6d[_0x1880cd];
    return _0x366964;
};
import { n as _0x236253 } from './index-a776829b.js';
var i = function () {
        var _0x56126a = {};
        _0x56126a[_0x44c6('0x0')] = function (_0x280a19, _0x390935, _0x198fff) {
            return _0x280a19(_0x390935, _0x198fff);
        };
        _0x56126a[_0x44c6('0x1')] = _0x44c6('0x2');
        _0x56126a[_0x44c6('0x3')] = function (_0x58fc24, _0x34bccd, _0x28b165, _0x5d2b78, _0x279fee) {
            return _0x58fc24(_0x34bccd, _0x28b165, _0x5d2b78, _0x279fee);
        };
        _0x56126a[_0x44c6('0x4')] = _0x44c6('0x5');
        _0x56126a[_0x44c6('0x6')] = function (_0xe35191, _0x3f82ea, _0x508ebd) {
            return _0xe35191(_0x3f82ea, _0x508ebd);
        };
        _0x56126a[_0x44c6('0x7')] = _0x44c6('0x8');
        _0x56126a[_0x44c6('0x9')] = _0x44c6('0xa');
        var _0x5247ae = this, _0x24dc52 = _0x5247ae[_0x44c6('0xb')], _0x49b9d4 = _0x5247ae[_0x44c6('0xc')]['_c'] || _0x24dc52;
        return _0x56126a[_0x44c6('0x0')](_0x49b9d4, _0x56126a[_0x44c6('0x1')], [_0x56126a[_0x44c6('0x3')](_0x49b9d4, _0x56126a[_0x44c6('0x1')], { 'staticStyle': { 'height': _0x56126a[_0x44c6('0x4')] } }, [_0x56126a[_0x44c6('0x6')](_0x49b9d4, _0x56126a[_0x44c6('0x7')], {
                    'ref': _0x56126a[_0x44c6('0x9')],
                    'attrs': {
                        'options': _0x5247ae[_0x44c6('0xd')],
                        'on-node-click': _0x5247ae[_0x44c6('0xe')],
                        'on-line-click': _0x5247ae[_0x44c6('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x44c6('0x10')] = _0x44c6('0x11');
l[_0x44c6('0x12')] = {};
l[_0x44c6('0x13')] = function () {
    var _0x5f5a37 = { SlLDg: _0x44c6('0x14') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            defaultJunctionPoint: _0x5f5a37.SlLDg
        }
    };
};
l[_0x44c6('0x15')] = function () {
    this.showSeeksGraph();
};
l[_0x44c6('0x16')] = {};
l[_0x44c6('0x16')][_0x44c6('0x17')] = function () {
    var _0x5eded0 = {
        gRFdV: _0x44c6('0x18'),
        BJmQM: _0x44c6('0x19'),
        vORrH: _0x44c6('0x1a'),
        YVBSZ: _0x44c6('0x1b'),
        TPzTi: _0x44c6('0x1c'),
        EwIfS: _0x44c6('0x1d')
    };
    const _0x28d94d = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x5eded0.gRFdV
            },
            {
                id: 'b',
                text: 'B',
                color: _0x5eded0.BJmQM,
                fontColor: _0x5eded0.gRFdV
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
                text: _0x5eded0.vORrH,
                color: _0x5eded0.BJmQM
            },
            {
                from: 'a',
                to: 'c',
                text: _0x5eded0.YVBSZ
            },
            {
                from: 'a',
                to: 'e',
                text: _0x5eded0.TPzTi
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x5eded0.EwIfS
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x28d94d, _0x404ce0 => {
    });
};
l[_0x44c6('0x16')][_0x44c6('0xe')] = function (_0x59753c, _0x19d3d9) {
    var _0x38979b = { eWTHs: _0x44c6('0x1e') };
    console.log(_0x38979b.eWTHs, _0x59753c);
};
l[_0x44c6('0x16')][_0x44c6('0xf')] = function (_0xe785ae, _0xc2c8fd, _0x4e26d6) {
    var _0x4b15f4 = { LvivM: _0x44c6('0x1f') };
    console.log(_0x4b15f4.LvivM, _0xe785ae);
};
var c = _0x236253(l, i, a, !0x1, s, null, null, null);
function s(_0x925fb4) {
    for (let _0x2f0e92 in n)
        this[_0x2f0e92] = n[_0x2f0e92];
}
const d = function () {
    return c[_0x44c6('0x20')];
}();
export {
    d as default
};