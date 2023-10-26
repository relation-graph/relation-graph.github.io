
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4f4e = [
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
    'XpLob',
    'CPKNU',
    'div',
    'TlNTL',
    'zBeuH',
    'calc(100vh\x20-\x2060px)',
    'LEcYw',
    'VXHfh',
    'RelationGraph',
    'nBjMm',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick'
];
(function (_0x4c23d4, _0x4cbe22) {
    var _0x462f26 = function (_0x5e4fa1) {
        while (--_0x5e4fa1) {
            _0x4c23d4['push'](_0x4c23d4['shift']());
        }
    };
    _0x462f26(++_0x4cbe22);
}(_0x4f4e, 0x1cc));
var _0x39d2 = function (_0xcc938d, _0x9cf7d) {
    _0xcc938d = _0xcc938d - 0x0;
    var _0xaf7487 = _0x4f4e[_0xcc938d];
    return _0xaf7487;
};
import { n as _0x251b81 } from './index-08f7799e.js';
var d = function () {
        var _0x1d5a85 = {};
        _0x1d5a85[_0x39d2('0x0')] = function (_0x369672, _0x444748, _0x2dcd57) {
            return _0x369672(_0x444748, _0x2dcd57);
        };
        _0x1d5a85[_0x39d2('0x1')] = _0x39d2('0x2');
        _0x1d5a85[_0x39d2('0x3')] = function (_0x5f14a7, _0x34100d, _0x333923, _0x2a6ff5, _0x2a8cf6) {
            return _0x5f14a7(_0x34100d, _0x333923, _0x2a6ff5, _0x2a8cf6);
        };
        _0x1d5a85[_0x39d2('0x4')] = _0x39d2('0x5');
        _0x1d5a85[_0x39d2('0x6')] = function (_0x59ce35, _0x622515, _0xa7d772) {
            return _0x59ce35(_0x622515, _0xa7d772);
        };
        _0x1d5a85[_0x39d2('0x7')] = _0x39d2('0x8');
        _0x1d5a85[_0x39d2('0x9')] = _0x39d2('0xa');
        var _0x4fa1c6 = this, _0x42a76d = _0x4fa1c6[_0x39d2('0xb')], _0x214b78 = _0x4fa1c6[_0x39d2('0xc')]['_c'] || _0x42a76d;
        return _0x1d5a85[_0x39d2('0x0')](_0x214b78, _0x1d5a85[_0x39d2('0x1')], [_0x1d5a85[_0x39d2('0x3')](_0x214b78, _0x1d5a85[_0x39d2('0x1')], { 'staticStyle': { 'height': _0x1d5a85[_0x39d2('0x4')] } }, [_0x1d5a85[_0x39d2('0x6')](_0x214b78, _0x1d5a85[_0x39d2('0x7')], {
                    'ref': _0x1d5a85[_0x39d2('0x9')],
                    'attrs': {
                        'options': _0x4fa1c6[_0x39d2('0xd')],
                        'on-node-click': _0x4fa1c6[_0x39d2('0xe')],
                        'on-line-click': _0x4fa1c6[_0x39d2('0xf')]
                    }
                })], 0x1)]);
    }, r = [];
const c = {}, n = {};
c[_0x39d2('0x10')] = _0x39d2('0x11');
c[_0x39d2('0x12')] = {};
c[_0x39d2('0x13')] = function () {
    var _0x887b35 = {
        Cyndi: _0x39d2('0x14'),
        OdvtV: _0x39d2('0x15')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x887b35.Cyndi,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x887b35.OdvtV
        }
    };
};
c[_0x39d2('0x16')] = function () {
    this.showGraph();
};
c[_0x39d2('0x17')] = {};
c[_0x39d2('0x17')][_0x39d2('0x18')] = function () {
    var _0x337847 = {
        UNBnh: function (_0x8dc1a2, _0x4c5fda) {
            return _0x8dc1a2 !== _0x4c5fda;
        }
    };
    const _0x42b47b = {
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
        }, _0x143587 = _0x42b47b.nodes[0x0].id;
    _0x42b47b.rootId = _0x143587, _0x42b47b.nodes.forEach(_0x1b8830 => {
        _0x337847.UNBnh(_0x1b8830.id, _0x143587) && _0x42b47b.lines.push({
            from: _0x143587,
            to: _0x1b8830.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x42b47b, _0x35fc29 => {
    });
};
c[_0x39d2('0x17')][_0x39d2('0xe')] = function (_0x8f71c4, _0x4f2c93) {
    var _0x53f239 = { xhEiF: _0x39d2('0x19') };
    console.log(_0x53f239.xhEiF, _0x8f71c4);
};
c[_0x39d2('0x17')][_0x39d2('0xf')] = function (_0x477392, _0x518881, _0x12d153) {
    var _0x943ace = { DrXNU: _0x39d2('0x1a') };
    console.log(_0x943ace.DrXNU, _0x477392);
};
var a = _0x251b81(c, d, r, !0x1, l, null, null, null);
function l(_0x5bfb6d) {
    for (let _0x35a3fa in n)
        this[_0x35a3fa] = n[_0x35a3fa];
}
const h = function () {
    return a[_0x39d2('0x1b')];
}();
export {
    h as default
};