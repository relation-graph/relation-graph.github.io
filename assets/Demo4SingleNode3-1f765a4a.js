
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4f64 = [
    'RelationGraph',
    'AjAEa',
    'graphRef',
    '$createElement',
    '_self',
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
    'OaHVH',
    'TQAdz',
    'div',
    'qFRBI',
    'UJksB',
    'calc(100vh\x20-\x2060px)',
    'sljmE',
    'IOwCc'
];
(function (_0x2b3d03, _0x4e39d5) {
    var _0x4adc7d = function (_0x25f49c) {
        while (--_0x25f49c) {
            _0x2b3d03['push'](_0x2b3d03['shift']());
        }
    };
    _0x4adc7d(++_0x4e39d5);
}(_0x4f64, 0x11a));
var _0x2a99 = function (_0x2eda8a, _0x4bd2c2) {
    _0x2eda8a = _0x2eda8a - 0x0;
    var _0x1c2b22 = _0x4f64[_0x2eda8a];
    return _0x1c2b22;
};
import { n as _0x4f2691 } from './index-d3c29682.js';
var d = function () {
        var _0x23bcfa = {};
        _0x23bcfa[_0x2a99('0x0')] = function (_0x1bb5cd, _0x4296d4, _0x130519) {
            return _0x1bb5cd(_0x4296d4, _0x130519);
        };
        _0x23bcfa[_0x2a99('0x1')] = _0x2a99('0x2');
        _0x23bcfa[_0x2a99('0x3')] = function (_0x20d677, _0x48ed04, _0x269428, _0x35d7ce, _0x2a5bf5) {
            return _0x20d677(_0x48ed04, _0x269428, _0x35d7ce, _0x2a5bf5);
        };
        _0x23bcfa[_0x2a99('0x4')] = _0x2a99('0x5');
        _0x23bcfa[_0x2a99('0x6')] = function (_0x45f825, _0x324c69, _0x400941) {
            return _0x45f825(_0x324c69, _0x400941);
        };
        _0x23bcfa[_0x2a99('0x7')] = _0x2a99('0x8');
        _0x23bcfa[_0x2a99('0x9')] = _0x2a99('0xa');
        var _0x1ba12b = this, _0x239e02 = _0x1ba12b[_0x2a99('0xb')], _0x542d3b = _0x1ba12b[_0x2a99('0xc')]['_c'] || _0x239e02;
        return _0x23bcfa[_0x2a99('0x0')](_0x542d3b, _0x23bcfa[_0x2a99('0x1')], [_0x23bcfa[_0x2a99('0x3')](_0x542d3b, _0x23bcfa[_0x2a99('0x1')], { 'staticStyle': { 'height': _0x23bcfa[_0x2a99('0x4')] } }, [_0x23bcfa[_0x2a99('0x6')](_0x542d3b, _0x23bcfa[_0x2a99('0x7')], {
                    'ref': _0x23bcfa[_0x2a99('0x9')],
                    'attrs': {
                        'options': _0x1ba12b[_0x2a99('0xd')],
                        'on-node-click': _0x1ba12b[_0x2a99('0xe')],
                        'on-line-click': _0x1ba12b[_0x2a99('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const c = {}, n = {};
c[_0x2a99('0x10')] = _0x2a99('0x11');
c[_0x2a99('0x12')] = {};
c[_0x2a99('0x13')] = function () {
    var _0x4f2025 = {
        naEsI: _0x2a99('0x14'),
        KYnoD: _0x2a99('0x15'),
        qISeK: _0x2a99('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x4f2025.naEsI,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x4f2025.KYnoD,
            layout: { layoutName: _0x4f2025.qISeK }
        }
    };
};
c[_0x2a99('0x17')] = function () {
    this.showGraph();
};
c[_0x2a99('0x18')] = {};
c[_0x2a99('0x18')][_0x2a99('0x19')] = function () {
    var _0xaf7572 = {
        TEBWR: function (_0x5a559c, _0x123002) {
            return _0x5a559c !== _0x123002;
        }
    };
    const _0x36a7eb = {
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
        }, _0x386bdc = _0x36a7eb.nodes[0x0].id;
    _0x36a7eb.rootId = _0x386bdc, _0x36a7eb.nodes.forEach(_0x4d023c => {
        _0xaf7572.TEBWR(_0x4d023c.id, _0x386bdc) && _0x36a7eb.lines.push({
            from: _0x386bdc,
            to: _0x4d023c.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x36a7eb, _0x542fd4 => {
    });
};
c[_0x2a99('0x18')][_0x2a99('0xe')] = function (_0x5786b2, _0x13fe54) {
    var _0x14715f = { lxhjd: _0x2a99('0x1a') };
    console.log(_0x14715f.lxhjd, _0x5786b2);
};
c[_0x2a99('0x18')][_0x2a99('0xf')] = function (_0x3a77d9, _0x16eeae, _0x359233) {
    var _0x2131ca = { GyZIu: _0x2a99('0x1b') };
    console.log(_0x2131ca.GyZIu, _0x3a77d9);
};
var l = _0x4f2691(c, d, a, !0x1, r, null, null, null);
function r(_0x52eb54) {
    for (let _0xb544f9 in n)
        this[_0xb544f9] = n[_0xb544f9];
}
const h = function () {
    return l[_0x2a99('0x1c')];
}();
export {
    h as default
};