
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3290 = [
    'name',
    'Demo4SingleNode',
    'components',
    'data',
    'border',
    'green',
    'mounted',
    'methods',
    'showGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'SiyWT',
    'JtLEW',
    'div',
    'YzvWw',
    'gWZda',
    'calc(100vh\x20-\x2060px)',
    'fIoIa',
    'RelationGraph',
    'YBQqT',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick'
];
(function (_0x1a026c, _0x2492de) {
    var _0x2d8f05 = function (_0x4b81bb) {
        while (--_0x4b81bb) {
            _0x1a026c['push'](_0x1a026c['shift']());
        }
    };
    _0x2d8f05(++_0x2492de);
}(_0x3290, 0x11a));
var _0x47c4 = function (_0x78f7cc, _0x58587f) {
    _0x78f7cc = _0x78f7cc - 0x0;
    var _0x1b2b15 = _0x3290[_0x78f7cc];
    return _0x1b2b15;
};
import { n as _0x2dbb4f } from './index-d3c29682.js';
var d = function () {
        var _0xaa8a0e = {};
        _0xaa8a0e[_0x47c4('0x0')] = function (_0x59502c, _0x290853, _0x3bd745) {
            return _0x59502c(_0x290853, _0x3bd745);
        };
        _0xaa8a0e[_0x47c4('0x1')] = _0x47c4('0x2');
        _0xaa8a0e[_0x47c4('0x3')] = function (_0x51be79, _0x2d5015, _0x40f8ca, _0x410893, _0x45c1b2) {
            return _0x51be79(_0x2d5015, _0x40f8ca, _0x410893, _0x45c1b2);
        };
        _0xaa8a0e[_0x47c4('0x4')] = _0x47c4('0x5');
        _0xaa8a0e[_0x47c4('0x6')] = _0x47c4('0x7');
        _0xaa8a0e[_0x47c4('0x8')] = _0x47c4('0x9');
        var _0x3941bd = this, _0x232b62 = _0x3941bd[_0x47c4('0xa')], _0x5f007e = _0x3941bd[_0x47c4('0xb')]['_c'] || _0x232b62;
        return _0xaa8a0e[_0x47c4('0x0')](_0x5f007e, _0xaa8a0e[_0x47c4('0x1')], [_0xaa8a0e[_0x47c4('0x3')](_0x5f007e, _0xaa8a0e[_0x47c4('0x1')], { 'staticStyle': { 'height': _0xaa8a0e[_0x47c4('0x4')] } }, [_0xaa8a0e[_0x47c4('0x0')](_0x5f007e, _0xaa8a0e[_0x47c4('0x6')], {
                    'ref': _0xaa8a0e[_0x47c4('0x8')],
                    'attrs': {
                        'options': _0x3941bd[_0x47c4('0xc')],
                        'on-node-click': _0x3941bd[_0x47c4('0xd')],
                        'on-line-click': _0x3941bd[_0x47c4('0xe')]
                    }
                })], 0x1)]);
    }, r = [];
const c = {}, n = {};
c[_0x47c4('0xf')] = _0x47c4('0x10');
c[_0x47c4('0x11')] = {};
c[_0x47c4('0x12')] = function () {
    var _0x5c87c6 = {
        gyWfO: _0x47c4('0x13'),
        ZWAuv: _0x47c4('0x14')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x5c87c6.gyWfO,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x5c87c6.ZWAuv
        }
    };
};
c[_0x47c4('0x15')] = function () {
    this.showGraph();
};
c[_0x47c4('0x16')] = {};
c[_0x47c4('0x16')][_0x47c4('0x17')] = function () {
    var _0x1f267b = {
        elPFj: function (_0x58c7ab, _0x3597cd) {
            return _0x58c7ab !== _0x3597cd;
        }
    };
    const _0x29b89b = {
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
        }, _0x3b269b = _0x29b89b.nodes[0x0].id;
    _0x29b89b.rootId = _0x3b269b, _0x29b89b.nodes.forEach(_0x34534d => {
        _0x1f267b.elPFj(_0x34534d.id, _0x3b269b) && _0x29b89b.lines.push({
            from: _0x3b269b,
            to: _0x34534d.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x29b89b, _0x23a6d9 => {
    });
};
c[_0x47c4('0x16')][_0x47c4('0xd')] = function (_0x3a3389, _0x55aa8a) {
    var _0x3c5ccf = { vPJPj: _0x47c4('0x18') };
    console.log(_0x3c5ccf.vPJPj, _0x3a3389);
};
c[_0x47c4('0x16')][_0x47c4('0xe')] = function (_0x256ecc, _0x5e8ec0, _0x35be41) {
    var _0x5a921c = { CUZsM: _0x47c4('0x19') };
    console.log(_0x5a921c.CUZsM, _0x256ecc);
};
var a = _0x2dbb4f(c, d, r, !0x1, l, null, null, null);
function l(_0x4b2bef) {
    for (let _0x17eded in n)
        this[_0x17eded] = n[_0x17eded];
}
const h = function () {
    return a[_0x47c4('0x1a')];
}();
export {
    h as default
};