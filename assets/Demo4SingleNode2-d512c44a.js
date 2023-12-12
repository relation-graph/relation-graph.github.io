
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xab3a = [
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
    'EIOaf',
    'ovsgE',
    'div',
    'ElaWb',
    'mVwzb',
    'calc(100vh\x20-\x2060px)',
    'dOgEm',
    'RelationGraph',
    'dWdIb',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick'
];
(function (_0x2fe1ad, _0x24d461) {
    var _0x1a4f34 = function (_0x41af3f) {
        while (--_0x41af3f) {
            _0x2fe1ad['push'](_0x2fe1ad['shift']());
        }
    };
    _0x1a4f34(++_0x24d461);
}(_0xab3a, 0xed));
var _0x2f69 = function (_0x23969d, _0x36392a) {
    _0x23969d = _0x23969d - 0x0;
    var _0x125303 = _0xab3a[_0x23969d];
    return _0x125303;
};
import { n as _0x5285af } from './index-35e4fca6.js';
var d = function () {
        var _0x5809e7 = {};
        _0x5809e7[_0x2f69('0x0')] = function (_0x3d902c, _0x31a4d6, _0x1a4877) {
            return _0x3d902c(_0x31a4d6, _0x1a4877);
        };
        _0x5809e7[_0x2f69('0x1')] = _0x2f69('0x2');
        _0x5809e7[_0x2f69('0x3')] = function (_0x15fc34, _0x396d83, _0x90cc94, _0x136286, _0x515d8d) {
            return _0x15fc34(_0x396d83, _0x90cc94, _0x136286, _0x515d8d);
        };
        _0x5809e7[_0x2f69('0x4')] = _0x2f69('0x5');
        _0x5809e7[_0x2f69('0x6')] = _0x2f69('0x7');
        _0x5809e7[_0x2f69('0x8')] = _0x2f69('0x9');
        var _0x3dd6e0 = this, _0x297fee = _0x3dd6e0[_0x2f69('0xa')], _0x15e87b = _0x3dd6e0[_0x2f69('0xb')]['_c'] || _0x297fee;
        return _0x5809e7[_0x2f69('0x0')](_0x15e87b, _0x5809e7[_0x2f69('0x1')], [_0x5809e7[_0x2f69('0x3')](_0x15e87b, _0x5809e7[_0x2f69('0x1')], { 'staticStyle': { 'height': _0x5809e7[_0x2f69('0x4')] } }, [_0x5809e7[_0x2f69('0x0')](_0x15e87b, _0x5809e7[_0x2f69('0x6')], {
                    'ref': _0x5809e7[_0x2f69('0x8')],
                    'attrs': {
                        'options': _0x3dd6e0[_0x2f69('0xc')],
                        'on-node-click': _0x3dd6e0[_0x2f69('0xd')],
                        'on-line-click': _0x3dd6e0[_0x2f69('0xe')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x2f69('0xf')] = _0x2f69('0x10');
l[_0x2f69('0x11')] = {};
l[_0x2f69('0x12')] = function () {
    var _0x390d92 = {
        cURqN: _0x2f69('0x13'),
        zmFpf: _0x2f69('0x14'),
        eeMSP: _0x2f69('0x15')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x390d92.cURqN,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x390d92.zmFpf,
            layout: { layoutName: _0x390d92.eeMSP }
        }
    };
};
l[_0x2f69('0x16')] = function () {
    this.showGraph();
};
l[_0x2f69('0x17')] = {};
l[_0x2f69('0x17')][_0x2f69('0x18')] = function () {
    var _0x4c5a2b = {
        hIWIi: function (_0x1901e5, _0xb585c2) {
            return _0x1901e5 !== _0xb585c2;
        }
    };
    const _0x1d13a1 = {
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
        }, _0x3f3709 = _0x1d13a1.nodes[0x0].id;
    _0x1d13a1.rootId = _0x3f3709, _0x1d13a1.nodes.forEach(_0x46809b => {
        _0x4c5a2b.hIWIi(_0x46809b.id, _0x3f3709) && _0x1d13a1.lines.push({
            from: _0x3f3709,
            to: _0x46809b.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x1d13a1, _0x4ac6b8 => {
    });
};
l[_0x2f69('0x17')][_0x2f69('0xd')] = function (_0x3d444f, _0xedaf68) {
    var _0x52ae05 = { RuWJk: _0x2f69('0x19') };
    console.log(_0x52ae05.RuWJk, _0x3d444f);
};
l[_0x2f69('0x17')][_0x2f69('0xe')] = function (_0x5af06f, _0x4974bb, _0x1bceda) {
    var _0x1faa8c = { NqdEw: _0x2f69('0x1a') };
    console.log(_0x1faa8c.NqdEw, _0x5af06f);
};
var r = _0x5285af(l, d, a, !0x1, c, null, null, null);
function c(_0x47a613) {
    for (let _0x26a216 in n)
        this[_0x26a216] = n[_0x26a216];
}
const h = function () {
    return r[_0x2f69('0x1b')];
}();
export {
    h as default
};