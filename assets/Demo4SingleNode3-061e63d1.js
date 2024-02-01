
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1e0f = [
    'green',
    'circle',
    'mounted',
    'methods',
    'showGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'YvQIa',
    'xRmyT',
    'div',
    'aQWWm',
    'jBKwU',
    'calc(100vh\x20-\x2060px)',
    'PBJaM',
    'rEMFT',
    'RelationGraph',
    'aumjO',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo4SingleNode',
    'components',
    'data',
    'border'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x1e0f, 0x181));
var _0xeadd = function (_0x16f7fc, _0x1a40b9) {
    _0x16f7fc = _0x16f7fc - 0x0;
    var _0x6ea2d = _0x1e0f[_0x16f7fc];
    return _0x6ea2d;
};
import { n as _0x9f0121 } from './index-910d4d84.js';
var d = function () {
        var _0x928fb3 = {};
        _0x928fb3[_0xeadd('0x0')] = function (_0x355284, _0xaab8d0, _0x5128cd) {
            return _0x355284(_0xaab8d0, _0x5128cd);
        };
        _0x928fb3[_0xeadd('0x1')] = _0xeadd('0x2');
        _0x928fb3[_0xeadd('0x3')] = function (_0x5c71a8, _0x5e3b7c, _0x43d3e0, _0x5db668, _0x31ab6c) {
            return _0x5c71a8(_0x5e3b7c, _0x43d3e0, _0x5db668, _0x31ab6c);
        };
        _0x928fb3[_0xeadd('0x4')] = _0xeadd('0x5');
        _0x928fb3[_0xeadd('0x6')] = function (_0x5c610b, _0x5919c1, _0x57ff10) {
            return _0x5c610b(_0x5919c1, _0x57ff10);
        };
        _0x928fb3[_0xeadd('0x7')] = _0xeadd('0x8');
        _0x928fb3[_0xeadd('0x9')] = _0xeadd('0xa');
        var _0x1e0812 = this, _0xdb5e2 = _0x1e0812[_0xeadd('0xb')], _0x1a76d0 = _0x1e0812[_0xeadd('0xc')]['_c'] || _0xdb5e2;
        return _0x928fb3[_0xeadd('0x0')](_0x1a76d0, _0x928fb3[_0xeadd('0x1')], [_0x928fb3[_0xeadd('0x3')](_0x1a76d0, _0x928fb3[_0xeadd('0x1')], { 'staticStyle': { 'height': _0x928fb3[_0xeadd('0x4')] } }, [_0x928fb3[_0xeadd('0x6')](_0x1a76d0, _0x928fb3[_0xeadd('0x7')], {
                    'ref': _0x928fb3[_0xeadd('0x9')],
                    'attrs': {
                        'options': _0x1e0812[_0xeadd('0xd')],
                        'on-node-click': _0x1e0812[_0xeadd('0xe')],
                        'on-line-click': _0x1e0812[_0xeadd('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const c = {}, n = {};
c[_0xeadd('0x10')] = _0xeadd('0x11');
c[_0xeadd('0x12')] = {};
c[_0xeadd('0x13')] = function () {
    var _0x5e81e0 = {
        YIdtv: _0xeadd('0x14'),
        lrhJF: _0xeadd('0x15'),
        VevWW: _0xeadd('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x5e81e0.YIdtv,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x5e81e0.lrhJF,
            layout: { layoutName: _0x5e81e0.VevWW }
        }
    };
};
c[_0xeadd('0x17')] = function () {
    this.showGraph();
};
c[_0xeadd('0x18')] = {};
c[_0xeadd('0x18')][_0xeadd('0x19')] = function () {
    var _0x21a3b6 = {
        isvrW: function (_0xe6abae, _0x2cc16b) {
            return _0xe6abae !== _0x2cc16b;
        }
    };
    const _0x32b233 = {
            nodes: [
                {
                    id: 'a',
                    text: 'a'
                },
                {
                    id: 'b',
                    text: 'b'
                },
                {
                    id: 'b1',
                    text: 'b1'
                },
                {
                    id: 'b2',
                    text: 'b2'
                },
                {
                    id: 'b3',
                    text: 'b3'
                },
                {
                    id: 'b4',
                    text: 'b4'
                },
                {
                    id: 'b5',
                    text: 'b5'
                },
                {
                    id: 'b6',
                    text: 'b6'
                },
                {
                    id: 'c',
                    text: 'c'
                },
                {
                    id: 'c1',
                    text: 'c1'
                },
                {
                    id: 'c2',
                    text: 'c2'
                },
                {
                    id: 'c3',
                    text: 'c3'
                },
                {
                    id: 'd',
                    text: 'd'
                },
                {
                    id: 'd1',
                    text: 'd1'
                },
                {
                    id: 'd2',
                    text: 'd2'
                },
                {
                    id: 'd3',
                    text: 'd3'
                },
                {
                    id: 'd4',
                    text: 'd4'
                },
                {
                    id: 'e',
                    text: 'e'
                },
                {
                    id: 'e2',
                    text: 'e2'
                }
            ],
            lines: [
                {
                    from: 'b',
                    to: 'b1'
                },
                {
                    from: 'c2',
                    to: 'b5'
                },
                {
                    from: 'd3',
                    to: 'b3'
                },
                {
                    from: 'd',
                    to: 'd1'
                },
                {
                    from: 'e',
                    to: 'e2'
                }
            ]
        }, _0x2203f2 = _0x32b233.nodes[0x0].id;
    _0x32b233.rootId = _0x2203f2, _0x32b233.nodes.forEach(_0x21a950 => {
        _0x21a3b6.isvrW(_0x21a950.id, _0x2203f2) && _0x32b233.lines.push({
            from: _0x2203f2,
            to: _0x21a950.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x32b233, _0x369c56 => {
    });
};
c[_0xeadd('0x18')][_0xeadd('0xe')] = function (_0x2c033f, _0x50193b) {
    var _0x3d09d4 = { yDFpa: _0xeadd('0x1a') };
    console.log(_0x3d09d4.yDFpa, _0x2c033f);
};
c[_0xeadd('0x18')][_0xeadd('0xf')] = function (_0x15abbb, _0x2b4df9, _0x13f34a) {
    var _0x3ec2f7 = { Eqhcs: _0xeadd('0x1b') };
    console.log(_0x3ec2f7.Eqhcs, _0x15abbb);
};
var l = _0x9f0121(c, d, a, !0x1, r, null, null, null);
function r(_0xb457e4) {
    for (let _0x416b70 in n)
        this[_0x416b70] = n[_0x416b70];
}
const h = function () {
    return l[_0xeadd('0x1c')];
}();
export {
    h as default
};