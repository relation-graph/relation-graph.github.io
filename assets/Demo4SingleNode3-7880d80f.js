
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x244b = [
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
    'bmdIH',
    'NnmcN',
    'div',
    'yaTej',
    'YwfZL',
    'calc(100vh\x20-\x2060px)',
    'KiOZO',
    'EQXJa',
    'RelationGraph',
    'OyzkK',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick'
];
(function (_0x1ed48e, _0x490cbb) {
    var _0x33eb71 = function (_0x243712) {
        while (--_0x243712) {
            _0x1ed48e['push'](_0x1ed48e['shift']());
        }
    };
    _0x33eb71(++_0x490cbb);
}(_0x244b, 0x14c));
var _0x4ea7 = function (_0x42e679, _0x36b170) {
    _0x42e679 = _0x42e679 - 0x0;
    var _0x2d0c4a = _0x244b[_0x42e679];
    return _0x2d0c4a;
};
import { n as _0x540342 } from './index-4e37fb25.js';
var d = function () {
        var _0x2bf4ec = {};
        _0x2bf4ec[_0x4ea7('0x0')] = function (_0x18404c, _0x87ae4d, _0x23a458) {
            return _0x18404c(_0x87ae4d, _0x23a458);
        };
        _0x2bf4ec[_0x4ea7('0x1')] = _0x4ea7('0x2');
        _0x2bf4ec[_0x4ea7('0x3')] = function (_0x4e5bc0, _0x4dfcd7, _0x396186, _0x48d391, _0x55b2fe) {
            return _0x4e5bc0(_0x4dfcd7, _0x396186, _0x48d391, _0x55b2fe);
        };
        _0x2bf4ec[_0x4ea7('0x4')] = _0x4ea7('0x5');
        _0x2bf4ec[_0x4ea7('0x6')] = function (_0x522f94, _0x493ba5, _0x80ca1e) {
            return _0x522f94(_0x493ba5, _0x80ca1e);
        };
        _0x2bf4ec[_0x4ea7('0x7')] = _0x4ea7('0x8');
        _0x2bf4ec[_0x4ea7('0x9')] = _0x4ea7('0xa');
        var _0x733ec3 = this, _0x289001 = _0x733ec3[_0x4ea7('0xb')], _0x21e336 = _0x733ec3[_0x4ea7('0xc')]['_c'] || _0x289001;
        return _0x2bf4ec[_0x4ea7('0x0')](_0x21e336, _0x2bf4ec[_0x4ea7('0x1')], [_0x2bf4ec[_0x4ea7('0x3')](_0x21e336, _0x2bf4ec[_0x4ea7('0x1')], { 'staticStyle': { 'height': _0x2bf4ec[_0x4ea7('0x4')] } }, [_0x2bf4ec[_0x4ea7('0x6')](_0x21e336, _0x2bf4ec[_0x4ea7('0x7')], {
                    'ref': _0x2bf4ec[_0x4ea7('0x9')],
                    'attrs': {
                        'options': _0x733ec3[_0x4ea7('0xd')],
                        'on-node-click': _0x733ec3[_0x4ea7('0xe')],
                        'on-line-click': _0x733ec3[_0x4ea7('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const c = {}, n = {};
c[_0x4ea7('0x10')] = _0x4ea7('0x11');
c[_0x4ea7('0x12')] = {};
c[_0x4ea7('0x13')] = function () {
    var _0x2c11c0 = {
        KdGLJ: _0x4ea7('0x14'),
        SJwhO: _0x4ea7('0x15'),
        AywFz: _0x4ea7('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x2c11c0.KdGLJ,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x2c11c0.SJwhO,
            layout: { layoutName: _0x2c11c0.AywFz }
        }
    };
};
c[_0x4ea7('0x17')] = function () {
    this.showGraph();
};
c[_0x4ea7('0x18')] = {};
c[_0x4ea7('0x18')][_0x4ea7('0x19')] = function () {
    var _0x5a7b44 = {
        IRpEn: function (_0x8b4000, _0x222e1e) {
            return _0x8b4000 !== _0x222e1e;
        }
    };
    const _0x5b9077 = {
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
        }, _0x2112fd = _0x5b9077.nodes[0x0].id;
    _0x5b9077.rootId = _0x2112fd, _0x5b9077.nodes.forEach(_0x4c0b84 => {
        _0x5a7b44.IRpEn(_0x4c0b84.id, _0x2112fd) && _0x5b9077.lines.push({
            from: _0x2112fd,
            to: _0x4c0b84.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x5b9077, _0x19c13c => {
    });
};
c[_0x4ea7('0x18')][_0x4ea7('0xe')] = function (_0x246de2, _0x15a5fb) {
    var _0x498f8a = { UxAVq: _0x4ea7('0x1a') };
    console.log(_0x498f8a.UxAVq, _0x246de2);
};
c[_0x4ea7('0x18')][_0x4ea7('0xf')] = function (_0x449b80, _0x1df58c, _0x529f32) {
    var _0x5133a8 = { sfsyO: _0x4ea7('0x1b') };
    console.log(_0x5133a8.sfsyO, _0x449b80);
};
var l = _0x540342(c, d, a, !0x1, r, null, null, null);
function r(_0x1ca4fa) {
    for (let _0x2fcc0a in n)
        this[_0x2fcc0a] = n[_0x2fcc0a];
}
const h = function () {
    return l[_0x4ea7('0x1c')];
}();
export {
    h as default
};