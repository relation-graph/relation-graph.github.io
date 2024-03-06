
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3610 = [
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
    'jWlpi',
    'NaeOY',
    'div',
    'hVDkp',
    'eVQKY',
    'calc(100vh\x20-\x2060px)',
    'szgvQ',
    'QBTke',
    'RelationGraph',
    'AlTJv',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name'
];
(function (_0x111434, _0x5025d3) {
    var _0x4299ad = function (_0x3e7d7a) {
        while (--_0x3e7d7a) {
            _0x111434['push'](_0x111434['shift']());
        }
    };
    _0x4299ad(++_0x5025d3);
}(_0x3610, 0x14b));
var _0xb338 = function (_0x23f191, _0x1d14a8) {
    _0x23f191 = _0x23f191 - 0x0;
    var _0x45658b = _0x3610[_0x23f191];
    return _0x45658b;
};
import { n as _0x9997c5 } from './index-19b173b5.js';
var d = function () {
        var _0x107ea1 = {};
        _0x107ea1[_0xb338('0x0')] = function (_0x55960a, _0x15e4b3, _0x15b280) {
            return _0x55960a(_0x15e4b3, _0x15b280);
        };
        _0x107ea1[_0xb338('0x1')] = _0xb338('0x2');
        _0x107ea1[_0xb338('0x3')] = function (_0x1ecf6c, _0x38aff8, _0x23720a, _0x204615, _0x486b82) {
            return _0x1ecf6c(_0x38aff8, _0x23720a, _0x204615, _0x486b82);
        };
        _0x107ea1[_0xb338('0x4')] = _0xb338('0x5');
        _0x107ea1[_0xb338('0x6')] = function (_0x159642, _0x58281d, _0x2d6b56) {
            return _0x159642(_0x58281d, _0x2d6b56);
        };
        _0x107ea1[_0xb338('0x7')] = _0xb338('0x8');
        _0x107ea1[_0xb338('0x9')] = _0xb338('0xa');
        var _0x40eadc = this, _0x497cb8 = _0x40eadc[_0xb338('0xb')], _0x287781 = _0x40eadc[_0xb338('0xc')]['_c'] || _0x497cb8;
        return _0x107ea1[_0xb338('0x0')](_0x287781, _0x107ea1[_0xb338('0x1')], [_0x107ea1[_0xb338('0x3')](_0x287781, _0x107ea1[_0xb338('0x1')], { 'staticStyle': { 'height': _0x107ea1[_0xb338('0x4')] } }, [_0x107ea1[_0xb338('0x6')](_0x287781, _0x107ea1[_0xb338('0x7')], {
                    'ref': _0x107ea1[_0xb338('0x9')],
                    'attrs': {
                        'options': _0x40eadc[_0xb338('0xd')],
                        'on-node-click': _0x40eadc[_0xb338('0xe')],
                        'on-line-click': _0x40eadc[_0xb338('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0xb338('0x10')] = _0xb338('0x11');
l[_0xb338('0x12')] = {};
l[_0xb338('0x13')] = function () {
    var _0x157a55 = {
        uKzSQ: _0xb338('0x14'),
        bclPY: _0xb338('0x15'),
        gjfzS: _0xb338('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x157a55.uKzSQ,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x157a55.bclPY,
            layout: { layoutName: _0x157a55.gjfzS }
        }
    };
};
l[_0xb338('0x17')] = function () {
    this.showGraph();
};
l[_0xb338('0x18')] = {};
l[_0xb338('0x18')][_0xb338('0x19')] = function () {
    var _0x132c46 = {
        yJJpE: function (_0x41c580, _0x2d3dcd) {
            return _0x41c580 !== _0x2d3dcd;
        }
    };
    const _0x300230 = {
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
        }, _0x4a91ec = _0x300230.nodes[0x0].id;
    _0x300230.rootId = _0x4a91ec, _0x300230.nodes.forEach(_0x2913cf => {
        _0x132c46.yJJpE(_0x2913cf.id, _0x4a91ec) && _0x300230.lines.push({
            from: _0x4a91ec,
            to: _0x2913cf.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x300230, _0x2c426b => {
    });
};
l[_0xb338('0x18')][_0xb338('0xe')] = function (_0x973099, _0x3ec266) {
    var _0x72ea05 = { XoZWz: _0xb338('0x1a') };
    console.log(_0x72ea05.XoZWz, _0x973099);
};
l[_0xb338('0x18')][_0xb338('0xf')] = function (_0x259ec1, _0x3520b2, _0x1be59a) {
    var _0x4482f7 = { xzPVD: _0xb338('0x1b') };
    console.log(_0x4482f7.xzPVD, _0x259ec1);
};
var r = _0x9997c5(l, d, a, !0x1, c, null, null, null);
function c(_0x2104d0) {
    for (let _0x26464c in n)
        this[_0x26464c] = n[_0x26464c];
}
const h = function () {
    return r[_0xb338('0x1c')];
}();
export {
    h as default
};