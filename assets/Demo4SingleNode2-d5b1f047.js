
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3aef = [
    'onNodeClick',
    'onLineClick',
    'name',
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
    'CeoBU',
    'KkuUA',
    'div',
    'oRzOW',
    'ASCmD',
    'calc(100vh\x20-\x2060px)',
    'Ypdma',
    'jHgNQ',
    'RelationGraph',
    'QNltp',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x3aef, 0x188));
var _0x1dd1 = function (_0x8c70d5, _0x28b2a9) {
    _0x8c70d5 = _0x8c70d5 - 0x0;
    var _0x3f3c75 = _0x3aef[_0x8c70d5];
    return _0x3f3c75;
};
import { n as _0x32d940 } from './index-a776829b.js';
var d = function () {
        var _0x55901f = {};
        _0x55901f[_0x1dd1('0x0')] = function (_0x263338, _0x1f8c56, _0x1c9c22) {
            return _0x263338(_0x1f8c56, _0x1c9c22);
        };
        _0x55901f[_0x1dd1('0x1')] = _0x1dd1('0x2');
        _0x55901f[_0x1dd1('0x3')] = function (_0x65a1b, _0x1a078a, _0x1c57f8, _0x520525, _0x14723a) {
            return _0x65a1b(_0x1a078a, _0x1c57f8, _0x520525, _0x14723a);
        };
        _0x55901f[_0x1dd1('0x4')] = _0x1dd1('0x5');
        _0x55901f[_0x1dd1('0x6')] = function (_0x169fc6, _0x3518c3, _0x4f8181) {
            return _0x169fc6(_0x3518c3, _0x4f8181);
        };
        _0x55901f[_0x1dd1('0x7')] = _0x1dd1('0x8');
        _0x55901f[_0x1dd1('0x9')] = _0x1dd1('0xa');
        var _0x3b1598 = this, _0x1f10de = _0x3b1598[_0x1dd1('0xb')], _0x7aab8d = _0x3b1598[_0x1dd1('0xc')]['_c'] || _0x1f10de;
        return _0x55901f[_0x1dd1('0x0')](_0x7aab8d, _0x55901f[_0x1dd1('0x1')], [_0x55901f[_0x1dd1('0x3')](_0x7aab8d, _0x55901f[_0x1dd1('0x1')], { 'staticStyle': { 'height': _0x55901f[_0x1dd1('0x4')] } }, [_0x55901f[_0x1dd1('0x6')](_0x7aab8d, _0x55901f[_0x1dd1('0x7')], {
                    'ref': _0x55901f[_0x1dd1('0x9')],
                    'attrs': {
                        'options': _0x3b1598[_0x1dd1('0xd')],
                        'on-node-click': _0x3b1598[_0x1dd1('0xe')],
                        'on-line-click': _0x3b1598[_0x1dd1('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x1dd1('0x10')] = _0x1dd1('0x11');
l[_0x1dd1('0x12')] = {};
l[_0x1dd1('0x13')] = function () {
    var _0x747fbc = {
        lIhzy: _0x1dd1('0x14'),
        GGipv: _0x1dd1('0x15'),
        pPLrq: _0x1dd1('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x747fbc.lIhzy,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x747fbc.GGipv,
            layout: { layoutName: _0x747fbc.pPLrq }
        }
    };
};
l[_0x1dd1('0x17')] = function () {
    this.showGraph();
};
l[_0x1dd1('0x18')] = {};
l[_0x1dd1('0x18')][_0x1dd1('0x19')] = function () {
    var _0x1b715b = {
        FxKVr: function (_0x10a64a, _0x46345a) {
            return _0x10a64a !== _0x46345a;
        }
    };
    const _0x207319 = {
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
        }, _0xad09e7 = _0x207319.nodes[0x0].id;
    _0x207319.rootId = _0xad09e7, _0x207319.nodes.forEach(_0x3eb0cf => {
        _0x1b715b.FxKVr(_0x3eb0cf.id, _0xad09e7) && _0x207319.lines.push({
            from: _0xad09e7,
            to: _0x3eb0cf.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x207319, _0xe909a3 => {
    });
};
l[_0x1dd1('0x18')][_0x1dd1('0xe')] = function (_0x1c6da6, _0x1dd121) {
    var _0xd6585 = { dsJEj: _0x1dd1('0x1a') };
    console.log(_0xd6585.dsJEj, _0x1c6da6);
};
l[_0x1dd1('0x18')][_0x1dd1('0xf')] = function (_0x2e8ddc, _0x596dcf, _0x8bbb98) {
    var _0x28902e = { HogFE: _0x1dd1('0x1b') };
    console.log(_0x28902e.HogFE, _0x2e8ddc);
};
var r = _0x32d940(l, d, a, !0x1, c, null, null, null);
function c(_0x416e6e) {
    for (let _0x260690 in n)
        this[_0x260690] = n[_0x260690];
}
const h = function () {
    return r[_0x1dd1('0x1c')];
}();
export {
    h as default
};