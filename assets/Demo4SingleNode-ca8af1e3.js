
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x896c = [
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
    'BkYba',
    'DTtnT',
    'div',
    'YBjUo',
    'PwEXG',
    'calc(100vh\x20-\x2060px)',
    'CjcOA',
    'gRVvH',
    'RelationGraph',
    'naZCA',
    'graphRef',
    '$createElement',
    '_self'
];
(function (_0x153972, _0x35dbc1) {
    var _0x31430d = function (_0x10fad2) {
        while (--_0x10fad2) {
            _0x153972['push'](_0x153972['shift']());
        }
    };
    _0x31430d(++_0x35dbc1);
}(_0x896c, 0xb7));
var _0x52b8 = function (_0xc2db74, _0x7d4ff0) {
    _0xc2db74 = _0xc2db74 - 0x0;
    var _0x2ffe47 = _0x896c[_0xc2db74];
    return _0x2ffe47;
};
import { n as _0x5874fb } from './index-f64bbabb.js';
var d = function () {
        var _0x569864 = {};
        _0x569864[_0x52b8('0x0')] = function (_0xfe1706, _0x343b7e, _0x462eac) {
            return _0xfe1706(_0x343b7e, _0x462eac);
        };
        _0x569864[_0x52b8('0x1')] = _0x52b8('0x2');
        _0x569864[_0x52b8('0x3')] = function (_0x5a8129, _0x59d609, _0x4b73ad, _0x70c7d1, _0x958cba) {
            return _0x5a8129(_0x59d609, _0x4b73ad, _0x70c7d1, _0x958cba);
        };
        _0x569864[_0x52b8('0x4')] = _0x52b8('0x5');
        _0x569864[_0x52b8('0x6')] = function (_0x26c20d, _0x6c8121, _0x534746) {
            return _0x26c20d(_0x6c8121, _0x534746);
        };
        _0x569864[_0x52b8('0x7')] = _0x52b8('0x8');
        _0x569864[_0x52b8('0x9')] = _0x52b8('0xa');
        var _0x34d70d = this, _0x1da412 = _0x34d70d[_0x52b8('0xb')], _0x7d9edd = _0x34d70d[_0x52b8('0xc')]['_c'] || _0x1da412;
        return _0x569864[_0x52b8('0x0')](_0x7d9edd, _0x569864[_0x52b8('0x1')], [_0x569864[_0x52b8('0x3')](_0x7d9edd, _0x569864[_0x52b8('0x1')], { 'staticStyle': { 'height': _0x569864[_0x52b8('0x4')] } }, [_0x569864[_0x52b8('0x6')](_0x7d9edd, _0x569864[_0x52b8('0x7')], {
                    'ref': _0x569864[_0x52b8('0x9')],
                    'attrs': {
                        'options': _0x34d70d[_0x52b8('0xd')],
                        'on-node-click': _0x34d70d[_0x52b8('0xe')],
                        'on-line-click': _0x34d70d[_0x52b8('0xf')]
                    }
                })], 0x1)]);
    }, r = [];
const c = {}, n = {};
c[_0x52b8('0x10')] = _0x52b8('0x11');
c[_0x52b8('0x12')] = {};
c[_0x52b8('0x13')] = function () {
    var _0x243cf9 = {
        tdIzK: _0x52b8('0x14'),
        vkBsq: _0x52b8('0x15')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x243cf9.tdIzK,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x243cf9.vkBsq
        }
    };
};
c[_0x52b8('0x16')] = function () {
    this.showGraph();
};
c[_0x52b8('0x17')] = {};
c[_0x52b8('0x17')][_0x52b8('0x18')] = function () {
    var _0x294018 = {
        aEpUm: function (_0xcd31b1, _0x5a07d4) {
            return _0xcd31b1 !== _0x5a07d4;
        }
    };
    const _0x86c0cc = {
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
        }, _0x4e3b58 = _0x86c0cc.nodes[0x0].id;
    _0x86c0cc.rootId = _0x4e3b58, _0x86c0cc.nodes.forEach(_0x7801be => {
        _0x294018.aEpUm(_0x7801be.id, _0x4e3b58) && _0x86c0cc.lines.push({
            from: _0x4e3b58,
            to: _0x7801be.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x86c0cc, _0x1dfb17 => {
    });
};
c[_0x52b8('0x17')][_0x52b8('0xe')] = function (_0x5f5ae6, _0x42fb82) {
    var _0x5bfca7 = { Xuylx: _0x52b8('0x19') };
    console.log(_0x5bfca7.Xuylx, _0x5f5ae6);
};
c[_0x52b8('0x17')][_0x52b8('0xf')] = function (_0x3b2672, _0x228d36, _0x505b08) {
    var _0x7c5ee8 = { IqRzk: _0x52b8('0x1a') };
    console.log(_0x7c5ee8.IqRzk, _0x3b2672);
};
var a = _0x5874fb(c, d, r, !0x1, l, null, null, null);
function l(_0x5c68d7) {
    for (let _0x5ca307 in n)
        this[_0x5ca307] = n[_0x5ca307];
}
const h = function () {
    return a[_0x52b8('0x1b')];
}();
export {
    h as default
};