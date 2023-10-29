
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2590 = [
    'showGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'FGCGu',
    'qIxzU',
    'div',
    'RavAH',
    'eZeyf',
    'calc(100vh\x20-\x2060px)',
    'XGWuN',
    'vLPOQ',
    'RelationGraph',
    'kanOj',
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
    'methods'
];
(function (_0x1e605e, _0x55fe8a) {
    var _0x241938 = function (_0x234494) {
        while (--_0x234494) {
            _0x1e605e['push'](_0x1e605e['shift']());
        }
    };
    _0x241938(++_0x55fe8a);
}(_0x2590, 0x95));
var _0x484f = function (_0x248fdb, _0x136c61) {
    _0x248fdb = _0x248fdb - 0x0;
    var _0x3ee1d1 = _0x2590[_0x248fdb];
    return _0x3ee1d1;
};
import { n as _0x40e7c5 } from './index-b2490647.js';
var d = function () {
        var _0x506704 = {};
        _0x506704[_0x484f('0x0')] = function (_0xecbfa, _0xb46bec, _0x392635) {
            return _0xecbfa(_0xb46bec, _0x392635);
        };
        _0x506704[_0x484f('0x1')] = _0x484f('0x2');
        _0x506704[_0x484f('0x3')] = function (_0x34fac4, _0x230318, _0x22e2f7, _0x334abf, _0x3f0409) {
            return _0x34fac4(_0x230318, _0x22e2f7, _0x334abf, _0x3f0409);
        };
        _0x506704[_0x484f('0x4')] = _0x484f('0x5');
        _0x506704[_0x484f('0x6')] = function (_0x39db6c, _0x4d3e07, _0x52638d) {
            return _0x39db6c(_0x4d3e07, _0x52638d);
        };
        _0x506704[_0x484f('0x7')] = _0x484f('0x8');
        _0x506704[_0x484f('0x9')] = _0x484f('0xa');
        var _0x2d7086 = this, _0x394d8d = _0x2d7086[_0x484f('0xb')], _0x6f714b = _0x2d7086[_0x484f('0xc')]['_c'] || _0x394d8d;
        return _0x506704[_0x484f('0x0')](_0x6f714b, _0x506704[_0x484f('0x1')], [_0x506704[_0x484f('0x3')](_0x6f714b, _0x506704[_0x484f('0x1')], { 'staticStyle': { 'height': _0x506704[_0x484f('0x4')] } }, [_0x506704[_0x484f('0x6')](_0x6f714b, _0x506704[_0x484f('0x7')], {
                    'ref': _0x506704[_0x484f('0x9')],
                    'attrs': {
                        'options': _0x2d7086[_0x484f('0xd')],
                        'on-node-click': _0x2d7086[_0x484f('0xe')],
                        'on-line-click': _0x2d7086[_0x484f('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x484f('0x10')] = _0x484f('0x11');
l[_0x484f('0x12')] = {};
l[_0x484f('0x13')] = function () {
    var _0x3497f3 = {
        jaxeU: _0x484f('0x14'),
        DXgMs: _0x484f('0x15'),
        nIjOO: _0x484f('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x3497f3.jaxeU,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x3497f3.DXgMs,
            layout: { layoutName: _0x3497f3.nIjOO }
        }
    };
};
l[_0x484f('0x17')] = function () {
    this.showGraph();
};
l[_0x484f('0x18')] = {};
l[_0x484f('0x18')][_0x484f('0x19')] = function () {
    var _0x1620a3 = {
        ZUKgJ: function (_0xe546c3, _0x21905f) {
            return _0xe546c3 !== _0x21905f;
        }
    };
    const _0x901f4a = {
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
        }, _0x23ba92 = _0x901f4a.nodes[0x0].id;
    _0x901f4a.rootId = _0x23ba92, _0x901f4a.nodes.forEach(_0x365951 => {
        _0x1620a3.ZUKgJ(_0x365951.id, _0x23ba92) && _0x901f4a.lines.push({
            from: _0x23ba92,
            to: _0x365951.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x901f4a, _0x3296f3 => {
    });
};
l[_0x484f('0x18')][_0x484f('0xe')] = function (_0x2830b8, _0x35ab76) {
    var _0x28989b = { RpqUC: _0x484f('0x1a') };
    console.log(_0x28989b.RpqUC, _0x2830b8);
};
l[_0x484f('0x18')][_0x484f('0xf')] = function (_0x8a8ca0, _0x3c6093, _0x535e6d) {
    var _0x579230 = { BrnNz: _0x484f('0x1b') };
    console.log(_0x579230.BrnNz, _0x8a8ca0);
};
var r = _0x40e7c5(l, d, a, !0x1, c, null, null, null);
function c(_0x18634b) {
    for (let _0x468850 in n)
        this[_0x468850] = n[_0x468850];
}
const h = function () {
    return r[_0x484f('0x1c')];
}();
export {
    h as default
};