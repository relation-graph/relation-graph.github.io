
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5f57 = [
    'green',
    'circle',
    'mounted',
    'methods',
    'showGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'Sgeuh',
    'ozKiG',
    'div',
    'rKnBK',
    'KWjIu',
    'calc(100vh\x20-\x2060px)',
    'QlTSL',
    'fXqJa',
    'RelationGraph',
    'cMVrR',
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
    'border'
];
(function (_0x884fc, _0x2e18a5) {
    var _0x1ea804 = function (_0x3a8744) {
        while (--_0x3a8744) {
            _0x884fc['push'](_0x884fc['shift']());
        }
    };
    _0x1ea804(++_0x2e18a5);
}(_0x5f57, 0xb6));
var _0x571b = function (_0x1a9b94, _0x24eea4) {
    _0x1a9b94 = _0x1a9b94 - 0x0;
    var _0x6e952a = _0x5f57[_0x1a9b94];
    return _0x6e952a;
};
import { n as _0x1e6509 } from './index-a76d1c04.js';
var d = function () {
        var _0x2ef18f = {};
        _0x2ef18f[_0x571b('0x0')] = function (_0x1f0023, _0x28e8c3, _0x2ca04f) {
            return _0x1f0023(_0x28e8c3, _0x2ca04f);
        };
        _0x2ef18f[_0x571b('0x1')] = _0x571b('0x2');
        _0x2ef18f[_0x571b('0x3')] = function (_0xa0d2d5, _0x549d74, _0x5aa4b3, _0x548534, _0x45aeec) {
            return _0xa0d2d5(_0x549d74, _0x5aa4b3, _0x548534, _0x45aeec);
        };
        _0x2ef18f[_0x571b('0x4')] = _0x571b('0x5');
        _0x2ef18f[_0x571b('0x6')] = function (_0x425f69, _0x279834, _0x55f47f) {
            return _0x425f69(_0x279834, _0x55f47f);
        };
        _0x2ef18f[_0x571b('0x7')] = _0x571b('0x8');
        _0x2ef18f[_0x571b('0x9')] = _0x571b('0xa');
        var _0x3a368d = this, _0x26fd0b = _0x3a368d[_0x571b('0xb')], _0x1a8535 = _0x3a368d[_0x571b('0xc')]['_c'] || _0x26fd0b;
        return _0x2ef18f[_0x571b('0x0')](_0x1a8535, _0x2ef18f[_0x571b('0x1')], [_0x2ef18f[_0x571b('0x3')](_0x1a8535, _0x2ef18f[_0x571b('0x1')], { 'staticStyle': { 'height': _0x2ef18f[_0x571b('0x4')] } }, [_0x2ef18f[_0x571b('0x6')](_0x1a8535, _0x2ef18f[_0x571b('0x7')], {
                    'ref': _0x2ef18f[_0x571b('0x9')],
                    'attrs': {
                        'options': _0x3a368d[_0x571b('0xd')],
                        'on-node-click': _0x3a368d[_0x571b('0xe')],
                        'on-line-click': _0x3a368d[_0x571b('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const c = {}, n = {};
c[_0x571b('0x10')] = _0x571b('0x11');
c[_0x571b('0x12')] = {};
c[_0x571b('0x13')] = function () {
    var _0x21cdec = {
        TVLQG: _0x571b('0x14'),
        CiuCF: _0x571b('0x15'),
        aEWMO: _0x571b('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x21cdec.TVLQG,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x21cdec.CiuCF,
            layout: { layoutName: _0x21cdec.aEWMO }
        }
    };
};
c[_0x571b('0x17')] = function () {
    this.showGraph();
};
c[_0x571b('0x18')] = {};
c[_0x571b('0x18')][_0x571b('0x19')] = function () {
    var _0x474564 = {
        DsoOa: function (_0x2047f9, _0x40a5bd) {
            return _0x2047f9 !== _0x40a5bd;
        }
    };
    const _0xd723ad = {
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
        }, _0xbb0148 = _0xd723ad.nodes[0x0].id;
    _0xd723ad.rootId = _0xbb0148, _0xd723ad.nodes.forEach(_0x3c3677 => {
        _0x474564.DsoOa(_0x3c3677.id, _0xbb0148) && _0xd723ad.lines.push({
            from: _0xbb0148,
            to: _0x3c3677.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0xd723ad, _0xd6160e => {
    });
};
c[_0x571b('0x18')][_0x571b('0xe')] = function (_0x30e4f7, _0x5aa418) {
    var _0x4adf22 = { LckzF: _0x571b('0x1a') };
    console.log(_0x4adf22.LckzF, _0x30e4f7);
};
c[_0x571b('0x18')][_0x571b('0xf')] = function (_0x45029f, _0x1ec479, _0x400d2c) {
    var _0x3e41af = { HgoiT: _0x571b('0x1b') };
    console.log(_0x3e41af.HgoiT, _0x45029f);
};
var l = _0x1e6509(c, d, a, !0x1, r, null, null, null);
function r(_0x501dad) {
    for (let _0x2d67f7 in n)
        this[_0x2d67f7] = n[_0x2d67f7];
}
const h = function () {
    return l[_0x571b('0x1c')];
}();
export {
    h as default
};