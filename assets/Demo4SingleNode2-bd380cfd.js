
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3900 = [
    'Demo4SingleNode2',
    'components',
    'data',
    'border',
    '#333333',
    'force',
    'mounted',
    'methods',
    'showGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'GEdgH',
    'zfoOc',
    'div',
    'mKBjx',
    'mDVAz',
    'calc(100vh\x20-\x2060px)',
    'eJzjQ',
    'ILxlJ',
    'RelationGraph',
    'WtALv',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name'
];
(function (_0x3ba694, _0x1bde55) {
    var _0x2eba9a = function (_0x57002f) {
        while (--_0x57002f) {
            _0x3ba694['push'](_0x3ba694['shift']());
        }
    };
    _0x2eba9a(++_0x1bde55);
}(_0x3900, 0x1bf));
var _0x5ec8 = function (_0x3ff3c7, _0x57f328) {
    _0x3ff3c7 = _0x3ff3c7 - 0x0;
    var _0x59c083 = _0x3900[_0x3ff3c7];
    return _0x59c083;
};
import { n as _0x3a3828 } from './index-bc1c6247.js';
var d = function () {
        var _0x142eef = {};
        _0x142eef[_0x5ec8('0x0')] = function (_0x547eb4, _0x103f23, _0x1eebda) {
            return _0x547eb4(_0x103f23, _0x1eebda);
        };
        _0x142eef[_0x5ec8('0x1')] = _0x5ec8('0x2');
        _0x142eef[_0x5ec8('0x3')] = function (_0x5ee974, _0xdd6269, _0x4e6b13, _0x22fe39, _0x2de140) {
            return _0x5ee974(_0xdd6269, _0x4e6b13, _0x22fe39, _0x2de140);
        };
        _0x142eef[_0x5ec8('0x4')] = _0x5ec8('0x5');
        _0x142eef[_0x5ec8('0x6')] = function (_0x40fe76, _0x25c8d5, _0x2a11db) {
            return _0x40fe76(_0x25c8d5, _0x2a11db);
        };
        _0x142eef[_0x5ec8('0x7')] = _0x5ec8('0x8');
        _0x142eef[_0x5ec8('0x9')] = _0x5ec8('0xa');
        var _0x17dfba = this, _0x3bd811 = _0x17dfba[_0x5ec8('0xb')], _0x1139de = _0x17dfba[_0x5ec8('0xc')]['_c'] || _0x3bd811;
        return _0x142eef[_0x5ec8('0x0')](_0x1139de, _0x142eef[_0x5ec8('0x1')], [_0x142eef[_0x5ec8('0x3')](_0x1139de, _0x142eef[_0x5ec8('0x1')], { 'staticStyle': { 'height': _0x142eef[_0x5ec8('0x4')] } }, [_0x142eef[_0x5ec8('0x6')](_0x1139de, _0x142eef[_0x5ec8('0x7')], {
                    'ref': _0x142eef[_0x5ec8('0x9')],
                    'attrs': {
                        'options': _0x17dfba[_0x5ec8('0xd')],
                        'on-node-click': _0x17dfba[_0x5ec8('0xe')],
                        'on-line-click': _0x17dfba[_0x5ec8('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x5ec8('0x10')] = _0x5ec8('0x11');
l[_0x5ec8('0x12')] = {};
l[_0x5ec8('0x13')] = function () {
    var _0x27197b = {
        cQPzv: _0x5ec8('0x14'),
        mjCJf: _0x5ec8('0x15'),
        cJHlt: _0x5ec8('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x27197b.cQPzv,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x27197b.mjCJf,
            layout: { layoutName: _0x27197b.cJHlt }
        }
    };
};
l[_0x5ec8('0x17')] = function () {
    this.showGraph();
};
l[_0x5ec8('0x18')] = {};
l[_0x5ec8('0x18')][_0x5ec8('0x19')] = function () {
    var _0x1c82d3 = {
        lBwBD: function (_0x4d54ce, _0xc266cf) {
            return _0x4d54ce !== _0xc266cf;
        }
    };
    const _0x4d9a19 = {
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
                    id: 'e1',
                    text: 'e1'
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
                    from: 'b',
                    to: 'b2'
                },
                {
                    from: 'd',
                    to: 'd1'
                },
                {
                    from: 'd',
                    to: 'd2'
                },
                {
                    from: 'e',
                    to: 'e2'
                }
            ]
        }, _0x5462a9 = _0x4d9a19.nodes[0x0].id;
    _0x4d9a19.rootId = _0x5462a9, _0x4d9a19.nodes.forEach(_0x21248b => {
        _0x1c82d3.lBwBD(_0x21248b.id, _0x5462a9) && _0x4d9a19.lines.push({
            from: _0x5462a9,
            to: _0x21248b.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x4d9a19, _0x3f4122 => {
    });
};
l[_0x5ec8('0x18')][_0x5ec8('0xe')] = function (_0x1688ba, _0x1de67c) {
    var _0x302c68 = { ZaGus: _0x5ec8('0x1a') };
    console.log(_0x302c68.ZaGus, _0x1688ba);
};
l[_0x5ec8('0x18')][_0x5ec8('0xf')] = function (_0x3fb3ac, _0x4b9eb2, _0x33aad1) {
    var _0x240494 = { HuWbK: _0x5ec8('0x1b') };
    console.log(_0x240494.HuWbK, _0x3fb3ac);
};
var r = _0x3a3828(l, d, a, !0x1, c, null, null, null);
function c(_0x470b64) {
    for (let _0x543578 in n)
        this[_0x543578] = n[_0x543578];
}
const h = function () {
    return r[_0x5ec8('0x1c')];
}();
export {
    h as default
};