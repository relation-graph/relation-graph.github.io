
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4ddc = [
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
    'EFPJa',
    'fMdfI',
    'div',
    'pjaxL',
    'OwWxh',
    'calc(100vh\x20-\x2060px)',
    'edAnW',
    'VMyid',
    'RelationGraph',
    'HmCZT'
];
(function (_0x25cfcc, _0xac1fa9) {
    var _0x482cde = function (_0x1b232c) {
        while (--_0x1b232c) {
            _0x25cfcc['push'](_0x25cfcc['shift']());
        }
    };
    _0x482cde(++_0xac1fa9);
}(_0x4ddc, 0x118));
var _0x4948 = function (_0x272902, _0x4e12b9) {
    _0x272902 = _0x272902 - 0x0;
    var _0x552c92 = _0x4ddc[_0x272902];
    return _0x552c92;
};
import { n as _0x208c52 } from './index-c847f99a.js';
var d = function () {
        var _0x203942 = {};
        _0x203942[_0x4948('0x0')] = function (_0x202472, _0x3afa10, _0x1c754a) {
            return _0x202472(_0x3afa10, _0x1c754a);
        };
        _0x203942[_0x4948('0x1')] = _0x4948('0x2');
        _0x203942[_0x4948('0x3')] = function (_0x5491fb, _0x3e116f, _0x48c6cc, _0x2c9882, _0x43a50e) {
            return _0x5491fb(_0x3e116f, _0x48c6cc, _0x2c9882, _0x43a50e);
        };
        _0x203942[_0x4948('0x4')] = _0x4948('0x5');
        _0x203942[_0x4948('0x6')] = function (_0x236dee, _0x1f546e, _0x2b338e) {
            return _0x236dee(_0x1f546e, _0x2b338e);
        };
        _0x203942[_0x4948('0x7')] = _0x4948('0x8');
        _0x203942[_0x4948('0x9')] = _0x4948('0xa');
        var _0xb2d24d = this, _0x45d22f = _0xb2d24d[_0x4948('0xb')], _0x26c1b8 = _0xb2d24d[_0x4948('0xc')]['_c'] || _0x45d22f;
        return _0x203942[_0x4948('0x0')](_0x26c1b8, _0x203942[_0x4948('0x1')], [_0x203942[_0x4948('0x3')](_0x26c1b8, _0x203942[_0x4948('0x1')], { 'staticStyle': { 'height': _0x203942[_0x4948('0x4')] } }, [_0x203942[_0x4948('0x6')](_0x26c1b8, _0x203942[_0x4948('0x7')], {
                    'ref': _0x203942[_0x4948('0x9')],
                    'attrs': {
                        'options': _0xb2d24d[_0x4948('0xd')],
                        'on-node-click': _0xb2d24d[_0x4948('0xe')],
                        'on-line-click': _0xb2d24d[_0x4948('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const c = {}, n = {};
c[_0x4948('0x10')] = _0x4948('0x11');
c[_0x4948('0x12')] = {};
c[_0x4948('0x13')] = function () {
    var _0x492fa2 = {
        ldTWb: _0x4948('0x14'),
        zZDPo: _0x4948('0x15'),
        TaSwl: _0x4948('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x492fa2.ldTWb,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x492fa2.zZDPo,
            layout: { layoutName: _0x492fa2.TaSwl }
        }
    };
};
c[_0x4948('0x17')] = function () {
    this.showGraph();
};
c[_0x4948('0x18')] = {};
c[_0x4948('0x18')][_0x4948('0x19')] = function () {
    var _0x5195e0 = {
        pZxKP: function (_0x20586d, _0x307e5a) {
            return _0x20586d !== _0x307e5a;
        }
    };
    const _0x586fec = {
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
        }, _0x52307d = _0x586fec.nodes[0x0].id;
    _0x586fec.rootId = _0x52307d, _0x586fec.nodes.forEach(_0x473c75 => {
        _0x5195e0.pZxKP(_0x473c75.id, _0x52307d) && _0x586fec.lines.push({
            from: _0x52307d,
            to: _0x473c75.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x586fec, _0x5cc5b6 => {
    });
};
c[_0x4948('0x18')][_0x4948('0xe')] = function (_0xeab420, _0x11eb45) {
    var _0x3197a6 = { iKvnY: _0x4948('0x1a') };
    console.log(_0x3197a6.iKvnY, _0xeab420);
};
c[_0x4948('0x18')][_0x4948('0xf')] = function (_0x32f7d4, _0x21de58, _0xadff4e) {
    var _0x373246 = { zYsNs: _0x4948('0x1b') };
    console.log(_0x373246.zYsNs, _0x32f7d4);
};
var l = _0x208c52(c, d, a, !0x1, r, null, null, null);
function r(_0x295cf9) {
    for (let _0x381970 in n)
        this[_0x381970] = n[_0x381970];
}
const h = function () {
    return l[_0x4948('0x1c')];
}();
export {
    h as default
};