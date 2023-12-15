
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x34da = [
    'hFnTo',
    'rlMzB',
    'RelationGraph',
    'fBguO',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
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
    'YDzTO',
    'vPbSR',
    'div',
    'cHoZZ',
    'RKQTW',
    'calc(100vh\x20-\x2060px)'
];
(function (_0x2776ea, _0x60edc1) {
    var _0x2f3e31 = function (_0x3a89c9) {
        while (--_0x3a89c9) {
            _0x2776ea['push'](_0x2776ea['shift']());
        }
    };
    _0x2f3e31(++_0x60edc1);
}(_0x34da, 0xff));
var _0x5eae = function (_0x555fb9, _0x7bc195) {
    _0x555fb9 = _0x555fb9 - 0x0;
    var _0x173255 = _0x34da[_0x555fb9];
    return _0x173255;
};
import { n as _0x3c7815 } from './index-0f873f6f.js';
var d = function () {
        var _0x1b6855 = {};
        _0x1b6855[_0x5eae('0x0')] = function (_0x53b895, _0x40af45, _0x5849a4) {
            return _0x53b895(_0x40af45, _0x5849a4);
        };
        _0x1b6855[_0x5eae('0x1')] = _0x5eae('0x2');
        _0x1b6855[_0x5eae('0x3')] = function (_0x1ff105, _0x49652c, _0x1e44d7, _0x301a52, _0x284dc4) {
            return _0x1ff105(_0x49652c, _0x1e44d7, _0x301a52, _0x284dc4);
        };
        _0x1b6855[_0x5eae('0x4')] = _0x5eae('0x5');
        _0x1b6855[_0x5eae('0x6')] = function (_0x1292f4, _0x135db5, _0x287fac) {
            return _0x1292f4(_0x135db5, _0x287fac);
        };
        _0x1b6855[_0x5eae('0x7')] = _0x5eae('0x8');
        _0x1b6855[_0x5eae('0x9')] = _0x5eae('0xa');
        var _0x54257b = this, _0x29b83b = _0x54257b[_0x5eae('0xb')], _0x5c8c8f = _0x54257b[_0x5eae('0xc')]['_c'] || _0x29b83b;
        return _0x1b6855[_0x5eae('0x0')](_0x5c8c8f, _0x1b6855[_0x5eae('0x1')], [_0x1b6855[_0x5eae('0x3')](_0x5c8c8f, _0x1b6855[_0x5eae('0x1')], { 'staticStyle': { 'height': _0x1b6855[_0x5eae('0x4')] } }, [_0x1b6855[_0x5eae('0x6')](_0x5c8c8f, _0x1b6855[_0x5eae('0x7')], {
                    'ref': _0x1b6855[_0x5eae('0x9')],
                    'attrs': {
                        'options': _0x54257b[_0x5eae('0xd')],
                        'on-node-click': _0x54257b[_0x5eae('0xe')],
                        'on-line-click': _0x54257b[_0x5eae('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x5eae('0x10')] = _0x5eae('0x11');
l[_0x5eae('0x12')] = {};
l[_0x5eae('0x13')] = function () {
    var _0xb31907 = {
        dDGfu: _0x5eae('0x14'),
        jGwiq: _0x5eae('0x15'),
        QCOqI: _0x5eae('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0xb31907.dDGfu,
            defaultLineWidth: 0x2,
            defaultLineColor: _0xb31907.jGwiq,
            layout: { layoutName: _0xb31907.QCOqI }
        }
    };
};
l[_0x5eae('0x17')] = function () {
    this.showGraph();
};
l[_0x5eae('0x18')] = {};
l[_0x5eae('0x18')][_0x5eae('0x19')] = function () {
    var _0x2be78f = {
        rtAlx: function (_0x599c39, _0x11e5b1) {
            return _0x599c39 !== _0x11e5b1;
        }
    };
    const _0x4447ed = {
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
        }, _0x53056f = _0x4447ed.nodes[0x0].id;
    _0x4447ed.rootId = _0x53056f, _0x4447ed.nodes.forEach(_0x1ee807 => {
        _0x2be78f.rtAlx(_0x1ee807.id, _0x53056f) && _0x4447ed.lines.push({
            from: _0x53056f,
            to: _0x1ee807.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x4447ed, _0x4bdc53 => {
    });
};
l[_0x5eae('0x18')][_0x5eae('0xe')] = function (_0x330446, _0x350269) {
    var _0x1bad08 = { VRLEz: _0x5eae('0x1a') };
    console.log(_0x1bad08.VRLEz, _0x330446);
};
l[_0x5eae('0x18')][_0x5eae('0xf')] = function (_0x5822c0, _0x41a8f5, _0x483967) {
    var _0x1a4536 = { QtlKN: _0x5eae('0x1b') };
    console.log(_0x1a4536.QtlKN, _0x5822c0);
};
var r = _0x3c7815(l, d, a, !0x1, c, null, null, null);
function c(_0x68fdef) {
    for (let _0x414b3c in n)
        this[_0x414b3c] = n[_0x414b3c];
}
const h = function () {
    return r[_0x5eae('0x1c')];
}();
export {
    h as default
};