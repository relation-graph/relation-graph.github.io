
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x11cb = [
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo4SingleNode',
    'components',
    'data',
    'border',
    'green',
    'circle',
    'mounted',
    'methods',
    'showGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'HUmhB',
    'wcwnS',
    'div',
    'mrhTZ',
    'jseBz',
    'calc(100vh\x20-\x2060px)',
    'rKvPT',
    'kmQFj',
    'RelationGraph',
    'dePvv',
    'graphRef',
    '$createElement',
    '_self'
];
(function (_0x382e65, _0x3f1563) {
    var _0x3dfa14 = function (_0x4c2556) {
        while (--_0x4c2556) {
            _0x382e65['push'](_0x382e65['shift']());
        }
    };
    _0x3dfa14(++_0x3f1563);
}(_0x11cb, 0x189));
var _0x516a = function (_0x1a026c, _0x2492de) {
    _0x1a026c = _0x1a026c - 0x0;
    var _0x2d8f05 = _0x11cb[_0x1a026c];
    return _0x2d8f05;
};
import { n as _0x3762b9 } from './index-f64bbabb.js';
var d = function () {
        var _0x3a951c = {};
        _0x3a951c[_0x516a('0x0')] = function (_0x521f01, _0x28ca93, _0x34aa00) {
            return _0x521f01(_0x28ca93, _0x34aa00);
        };
        _0x3a951c[_0x516a('0x1')] = _0x516a('0x2');
        _0x3a951c[_0x516a('0x3')] = function (_0x5afa31, _0x20398f, _0x58b6b0, _0x5681c5, _0x56ac7e) {
            return _0x5afa31(_0x20398f, _0x58b6b0, _0x5681c5, _0x56ac7e);
        };
        _0x3a951c[_0x516a('0x4')] = _0x516a('0x5');
        _0x3a951c[_0x516a('0x6')] = function (_0x4c2eaf, _0x1cfccb, _0x2fcdc2) {
            return _0x4c2eaf(_0x1cfccb, _0x2fcdc2);
        };
        _0x3a951c[_0x516a('0x7')] = _0x516a('0x8');
        _0x3a951c[_0x516a('0x9')] = _0x516a('0xa');
        var _0x4f2822 = this, _0x55262c = _0x4f2822[_0x516a('0xb')], _0x1beae3 = _0x4f2822[_0x516a('0xc')]['_c'] || _0x55262c;
        return _0x3a951c[_0x516a('0x0')](_0x1beae3, _0x3a951c[_0x516a('0x1')], [_0x3a951c[_0x516a('0x3')](_0x1beae3, _0x3a951c[_0x516a('0x1')], { 'staticStyle': { 'height': _0x3a951c[_0x516a('0x4')] } }, [_0x3a951c[_0x516a('0x6')](_0x1beae3, _0x3a951c[_0x516a('0x7')], {
                    'ref': _0x3a951c[_0x516a('0x9')],
                    'attrs': {
                        'options': _0x4f2822[_0x516a('0xd')],
                        'on-node-click': _0x4f2822[_0x516a('0xe')],
                        'on-line-click': _0x4f2822[_0x516a('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const c = {}, n = {};
c[_0x516a('0x10')] = _0x516a('0x11');
c[_0x516a('0x12')] = {};
c[_0x516a('0x13')] = function () {
    var _0x357a85 = {
        aqJcj: _0x516a('0x14'),
        KbSuB: _0x516a('0x15'),
        rwSHS: _0x516a('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x357a85.aqJcj,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x357a85.KbSuB,
            layout: { layoutName: _0x357a85.rwSHS }
        }
    };
};
c[_0x516a('0x17')] = function () {
    this.showGraph();
};
c[_0x516a('0x18')] = {};
c[_0x516a('0x18')][_0x516a('0x19')] = function () {
    var _0xde03e6 = {
        sRfvS: function (_0x5ce59c, _0x4c51ec) {
            return _0x5ce59c !== _0x4c51ec;
        }
    };
    const _0x2267e7 = {
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
        }, _0x289c9d = _0x2267e7.nodes[0x0].id;
    _0x2267e7.rootId = _0x289c9d, _0x2267e7.nodes.forEach(_0x2d6cb6 => {
        _0xde03e6.sRfvS(_0x2d6cb6.id, _0x289c9d) && _0x2267e7.lines.push({
            from: _0x289c9d,
            to: _0x2d6cb6.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x2267e7, _0x43a07d => {
    });
};
c[_0x516a('0x18')][_0x516a('0xe')] = function (_0x4dd05b, _0x1112cf) {
    var _0x3411f1 = { VUkRR: _0x516a('0x1a') };
    console.log(_0x3411f1.VUkRR, _0x4dd05b);
};
c[_0x516a('0x18')][_0x516a('0xf')] = function (_0x3e3c68, _0x1e03ec, _0x25296a) {
    var _0x164b6e = { EmCgB: _0x516a('0x1b') };
    console.log(_0x164b6e.EmCgB, _0x3e3c68);
};
var l = _0x3762b9(c, d, a, !0x1, r, null, null, null);
function r(_0x3b500b) {
    for (let _0x12342a in n)
        this[_0x12342a] = n[_0x12342a];
}
const h = function () {
    return l[_0x516a('0x1c')];
}();
export {
    h as default
};