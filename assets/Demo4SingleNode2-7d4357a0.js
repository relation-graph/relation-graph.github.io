
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x58c8 = [
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
    'SwwUG',
    'oOYRM',
    'div',
    'okYQD',
    'uPiYP',
    'calc(100vh\x20-\x2060px)',
    'cCHFk',
    'RelationGraph',
    'fpDZc',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name'
];
(function (_0x2d4fb1, _0x1ba4ef) {
    var _0x234d66 = function (_0x42045d) {
        while (--_0x42045d) {
            _0x2d4fb1['push'](_0x2d4fb1['shift']());
        }
    };
    _0x234d66(++_0x1ba4ef);
}(_0x58c8, 0x98));
var _0x3451 = function (_0x15588d, _0x5aee24) {
    _0x15588d = _0x15588d - 0x0;
    var _0x2095bd = _0x58c8[_0x15588d];
    return _0x2095bd;
};
import { n as _0x2cdbf8 } from './index-28740cc1.js';
var d = function () {
        var _0x1c2f41 = {};
        _0x1c2f41[_0x3451('0x0')] = function (_0x2399ec, _0x281c0d, _0x3366c1) {
            return _0x2399ec(_0x281c0d, _0x3366c1);
        };
        _0x1c2f41[_0x3451('0x1')] = _0x3451('0x2');
        _0x1c2f41[_0x3451('0x3')] = function (_0x15a6ed, _0x195dec, _0x3ca0ea, _0xfc8471, _0x3ce06d) {
            return _0x15a6ed(_0x195dec, _0x3ca0ea, _0xfc8471, _0x3ce06d);
        };
        _0x1c2f41[_0x3451('0x4')] = _0x3451('0x5');
        _0x1c2f41[_0x3451('0x6')] = _0x3451('0x7');
        _0x1c2f41[_0x3451('0x8')] = _0x3451('0x9');
        var _0x3f4a94 = this, _0x31a35f = _0x3f4a94[_0x3451('0xa')], _0x56d315 = _0x3f4a94[_0x3451('0xb')]['_c'] || _0x31a35f;
        return _0x1c2f41[_0x3451('0x0')](_0x56d315, _0x1c2f41[_0x3451('0x1')], [_0x1c2f41[_0x3451('0x3')](_0x56d315, _0x1c2f41[_0x3451('0x1')], { 'staticStyle': { 'height': _0x1c2f41[_0x3451('0x4')] } }, [_0x1c2f41[_0x3451('0x0')](_0x56d315, _0x1c2f41[_0x3451('0x6')], {
                    'ref': _0x1c2f41[_0x3451('0x8')],
                    'attrs': {
                        'options': _0x3f4a94[_0x3451('0xc')],
                        'on-node-click': _0x3f4a94[_0x3451('0xd')],
                        'on-line-click': _0x3f4a94[_0x3451('0xe')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x3451('0xf')] = _0x3451('0x10');
l[_0x3451('0x11')] = {};
l[_0x3451('0x12')] = function () {
    var _0x59c608 = {
        FXbnY: _0x3451('0x13'),
        WQIyo: _0x3451('0x14'),
        phLzV: _0x3451('0x15')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x59c608.FXbnY,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x59c608.WQIyo,
            layout: { layoutName: _0x59c608.phLzV }
        }
    };
};
l[_0x3451('0x16')] = function () {
    this.showGraph();
};
l[_0x3451('0x17')] = {};
l[_0x3451('0x17')][_0x3451('0x18')] = function () {
    var _0x4882af = {
        zmeKZ: function (_0x46a3e1, _0x1acf1a) {
            return _0x46a3e1 !== _0x1acf1a;
        }
    };
    const _0x34cce0 = {
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
        }, _0x5a4c87 = _0x34cce0.nodes[0x0].id;
    _0x34cce0.rootId = _0x5a4c87, _0x34cce0.nodes.forEach(_0x431e7b => {
        _0x4882af.zmeKZ(_0x431e7b.id, _0x5a4c87) && _0x34cce0.lines.push({
            from: _0x5a4c87,
            to: _0x431e7b.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x34cce0, _0x56bf3a => {
    });
};
l[_0x3451('0x17')][_0x3451('0xd')] = function (_0x249ebc, _0x420182) {
    var _0x286869 = { pKHcI: _0x3451('0x19') };
    console.log(_0x286869.pKHcI, _0x249ebc);
};
l[_0x3451('0x17')][_0x3451('0xe')] = function (_0x510496, _0x385044, _0x41e6ce) {
    var _0x49f130 = { ewLIt: _0x3451('0x1a') };
    console.log(_0x49f130.ewLIt, _0x510496);
};
var r = _0x2cdbf8(l, d, a, !0x1, c, null, null, null);
function c(_0x27bbac) {
    for (let _0x4aa7f4 in n)
        this[_0x4aa7f4] = n[_0x4aa7f4];
}
const h = function () {
    return r[_0x3451('0x1b')];
}();
export {
    h as default
};