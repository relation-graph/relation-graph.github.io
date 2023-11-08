
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4959 = [
    'graphOptions',
    'onNodeClick',
    'onLineClick',
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
    'ZHaOK',
    'VtAYc',
    'div',
    'pNeBm',
    'eVXdo',
    'calc(100vh\x20-\x2060px)',
    'uiEVs',
    'jBaGM',
    'RelationGraph',
    'vTLNI',
    'graphRef',
    '$createElement',
    '_self'
];
(function (_0x355de3, _0x3f79e3) {
    var _0x254b69 = function (_0x245891) {
        while (--_0x245891) {
            _0x355de3['push'](_0x355de3['shift']());
        }
    };
    _0x254b69(++_0x3f79e3);
}(_0x4959, 0x127));
var _0x2507 = function (_0x1a026c, _0x2492de) {
    _0x1a026c = _0x1a026c - 0x0;
    var _0x2d8f05 = _0x4959[_0x1a026c];
    return _0x2d8f05;
};
import { n as _0xf18226 } from './index-023a64e5.js';
var d = function () {
        var _0x3c8c12 = {};
        _0x3c8c12[_0x2507('0x0')] = function (_0x89c3e3, _0x3fdd4e, _0x4f790c) {
            return _0x89c3e3(_0x3fdd4e, _0x4f790c);
        };
        _0x3c8c12[_0x2507('0x1')] = _0x2507('0x2');
        _0x3c8c12[_0x2507('0x3')] = function (_0x3d8ffd, _0x152fff, _0x390718, _0x5a0063, _0x4d0d2a) {
            return _0x3d8ffd(_0x152fff, _0x390718, _0x5a0063, _0x4d0d2a);
        };
        _0x3c8c12[_0x2507('0x4')] = _0x2507('0x5');
        _0x3c8c12[_0x2507('0x6')] = function (_0x693e16, _0x3f551c, _0x2d5eb9) {
            return _0x693e16(_0x3f551c, _0x2d5eb9);
        };
        _0x3c8c12[_0x2507('0x7')] = _0x2507('0x8');
        _0x3c8c12[_0x2507('0x9')] = _0x2507('0xa');
        var _0x5f0c90 = this, _0x2161bc = _0x5f0c90[_0x2507('0xb')], _0x4a7ec8 = _0x5f0c90[_0x2507('0xc')]['_c'] || _0x2161bc;
        return _0x3c8c12[_0x2507('0x0')](_0x4a7ec8, _0x3c8c12[_0x2507('0x1')], [_0x3c8c12[_0x2507('0x3')](_0x4a7ec8, _0x3c8c12[_0x2507('0x1')], { 'staticStyle': { 'height': _0x3c8c12[_0x2507('0x4')] } }, [_0x3c8c12[_0x2507('0x6')](_0x4a7ec8, _0x3c8c12[_0x2507('0x7')], {
                    'ref': _0x3c8c12[_0x2507('0x9')],
                    'attrs': {
                        'options': _0x5f0c90[_0x2507('0xd')],
                        'on-node-click': _0x5f0c90[_0x2507('0xe')],
                        'on-line-click': _0x5f0c90[_0x2507('0xf')]
                    }
                })], 0x1)]);
    }, r = [];
const c = {}, n = {};
c[_0x2507('0x10')] = _0x2507('0x11');
c[_0x2507('0x12')] = {};
c[_0x2507('0x13')] = function () {
    var _0x55afc2 = {
        eoKNT: _0x2507('0x14'),
        bZFZI: _0x2507('0x15')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x55afc2.eoKNT,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x55afc2.bZFZI
        }
    };
};
c[_0x2507('0x16')] = function () {
    this.showGraph();
};
c[_0x2507('0x17')] = {};
c[_0x2507('0x17')][_0x2507('0x18')] = function () {
    var _0xc40043 = {
        GKIMA: function (_0x3e72c3, _0x263f53) {
            return _0x3e72c3 !== _0x263f53;
        }
    };
    const _0x101308 = {
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
        }, _0x5c136 = _0x101308.nodes[0x0].id;
    _0x101308.rootId = _0x5c136, _0x101308.nodes.forEach(_0x536c54 => {
        _0xc40043.GKIMA(_0x536c54.id, _0x5c136) && _0x101308.lines.push({
            from: _0x5c136,
            to: _0x536c54.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x101308, _0x45b81d => {
    });
};
c[_0x2507('0x17')][_0x2507('0xe')] = function (_0xc3bd4c, _0x7d153f) {
    var _0x2d0bfe = { fGwGj: _0x2507('0x19') };
    console.log(_0x2d0bfe.fGwGj, _0xc3bd4c);
};
c[_0x2507('0x17')][_0x2507('0xf')] = function (_0x3765c6, _0x43a69b, _0x34b4b7) {
    var _0x353f00 = { NwzCv: _0x2507('0x1a') };
    console.log(_0x353f00.NwzCv, _0x3765c6);
};
var a = _0xf18226(c, d, r, !0x1, l, null, null, null);
function l(_0x38a0b2) {
    for (let _0x27b607 in n)
        this[_0x27b607] = n[_0x27b607];
}
const h = function () {
    return a[_0x2507('0x1b')];
}();
export {
    h as default
};