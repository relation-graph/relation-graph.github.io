
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x205c = [
    'RelationGraph',
    'gqGHM',
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
    'YGPbY',
    'vzGbv',
    'div',
    'PTrVS',
    'gkGpa',
    'calc(100vh\x20-\x2060px)',
    'QPnEZ',
    'qGfOG'
];
(function (_0x490a92, _0x5e1a7d) {
    var _0x4ec78b = function (_0x20c0b9) {
        while (--_0x20c0b9) {
            _0x490a92['push'](_0x490a92['shift']());
        }
    };
    _0x4ec78b(++_0x5e1a7d);
}(_0x205c, 0x137));
var _0x4d4a = function (_0x176e65, _0x55cc67) {
    _0x176e65 = _0x176e65 - 0x0;
    var _0x2103a8 = _0x205c[_0x176e65];
    return _0x2103a8;
};
import { n as _0xba311 } from './index-973ba694.js';
var d = function () {
        var _0x3e0743 = {};
        _0x3e0743[_0x4d4a('0x0')] = function (_0x4b4bde, _0x37b26c, _0x10b2e7) {
            return _0x4b4bde(_0x37b26c, _0x10b2e7);
        };
        _0x3e0743[_0x4d4a('0x1')] = _0x4d4a('0x2');
        _0x3e0743[_0x4d4a('0x3')] = function (_0x3e632e, _0x1ff17d, _0x373f69, _0x89ab0d, _0x2c3c84) {
            return _0x3e632e(_0x1ff17d, _0x373f69, _0x89ab0d, _0x2c3c84);
        };
        _0x3e0743[_0x4d4a('0x4')] = _0x4d4a('0x5');
        _0x3e0743[_0x4d4a('0x6')] = function (_0x4d0811, _0x524d79, _0x1a46f6) {
            return _0x4d0811(_0x524d79, _0x1a46f6);
        };
        _0x3e0743[_0x4d4a('0x7')] = _0x4d4a('0x8');
        _0x3e0743[_0x4d4a('0x9')] = _0x4d4a('0xa');
        var _0x1b216d = this, _0x192de1 = _0x1b216d[_0x4d4a('0xb')], _0x344278 = _0x1b216d[_0x4d4a('0xc')]['_c'] || _0x192de1;
        return _0x3e0743[_0x4d4a('0x0')](_0x344278, _0x3e0743[_0x4d4a('0x1')], [_0x3e0743[_0x4d4a('0x3')](_0x344278, _0x3e0743[_0x4d4a('0x1')], { 'staticStyle': { 'height': _0x3e0743[_0x4d4a('0x4')] } }, [_0x3e0743[_0x4d4a('0x6')](_0x344278, _0x3e0743[_0x4d4a('0x7')], {
                    'ref': _0x3e0743[_0x4d4a('0x9')],
                    'attrs': {
                        'options': _0x1b216d[_0x4d4a('0xd')],
                        'on-node-click': _0x1b216d[_0x4d4a('0xe')],
                        'on-line-click': _0x1b216d[_0x4d4a('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x4d4a('0x10')] = _0x4d4a('0x11');
l[_0x4d4a('0x12')] = {};
l[_0x4d4a('0x13')] = function () {
    var _0x1e0498 = {
        ZpnDk: _0x4d4a('0x14'),
        JhEwG: _0x4d4a('0x15'),
        QMAmt: _0x4d4a('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x1e0498.ZpnDk,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x1e0498.JhEwG,
            layout: { layoutName: _0x1e0498.QMAmt }
        }
    };
};
l[_0x4d4a('0x17')] = function () {
    this.showGraph();
};
l[_0x4d4a('0x18')] = {};
l[_0x4d4a('0x18')][_0x4d4a('0x19')] = function () {
    var _0x423ecd = {
        omlBR: function (_0x2d5246, _0x11d22b) {
            return _0x2d5246 !== _0x11d22b;
        }
    };
    const _0x1d5067 = {
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
        }, _0x384a5e = _0x1d5067.nodes[0x0].id;
    _0x1d5067.rootId = _0x384a5e, _0x1d5067.nodes.forEach(_0x1f2077 => {
        _0x423ecd.omlBR(_0x1f2077.id, _0x384a5e) && _0x1d5067.lines.push({
            from: _0x384a5e,
            to: _0x1f2077.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x1d5067, _0x44d54b => {
    });
};
l[_0x4d4a('0x18')][_0x4d4a('0xe')] = function (_0x84ef1c, _0x3e569b) {
    var _0x570af8 = { eHNNx: _0x4d4a('0x1a') };
    console.log(_0x570af8.eHNNx, _0x84ef1c);
};
l[_0x4d4a('0x18')][_0x4d4a('0xf')] = function (_0x1e162c, _0x408bc5, _0x574b90) {
    var _0x371fa0 = { qubLJ: _0x4d4a('0x1b') };
    console.log(_0x371fa0.qubLJ, _0x1e162c);
};
var r = _0xba311(l, d, a, !0x1, c, null, null, null);
function c(_0x5d29ab) {
    for (let _0x39a31d in n)
        this[_0x39a31d] = n[_0x39a31d];
}
const h = function () {
    return r[_0x4d4a('0x1c')];
}();
export {
    h as default
};