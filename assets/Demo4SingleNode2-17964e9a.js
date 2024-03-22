
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5744 = [
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
    'UTLBF',
    'HaIfR',
    'div',
    'rybxN',
    'JmWFJ',
    'calc(100vh\x20-\x2060px)',
    'fMvzE',
    'aaFhH',
    'RelationGraph',
    'Kkcba',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo4SingleNode2'
];
(function (_0x583c27, _0x13ec2d) {
    var _0x25fe6a = function (_0x558990) {
        while (--_0x558990) {
            _0x583c27['push'](_0x583c27['shift']());
        }
    };
    _0x25fe6a(++_0x13ec2d);
}(_0x5744, 0x167));
var _0xbb21 = function (_0x47f345, _0x326a60) {
    _0x47f345 = _0x47f345 - 0x0;
    var _0x36dd4b = _0x5744[_0x47f345];
    return _0x36dd4b;
};
import { n as _0x18dc75 } from './index-3f3d9b78.js';
var d = function () {
        var _0x43908b = {};
        _0x43908b[_0xbb21('0x0')] = function (_0x1af488, _0x374c38, _0x1237ac) {
            return _0x1af488(_0x374c38, _0x1237ac);
        };
        _0x43908b[_0xbb21('0x1')] = _0xbb21('0x2');
        _0x43908b[_0xbb21('0x3')] = function (_0x5cb35a, _0x42dd33, _0x9b2c8d, _0x557e83, _0x36830b) {
            return _0x5cb35a(_0x42dd33, _0x9b2c8d, _0x557e83, _0x36830b);
        };
        _0x43908b[_0xbb21('0x4')] = _0xbb21('0x5');
        _0x43908b[_0xbb21('0x6')] = function (_0x31bd48, _0x33f173, _0x5347c6) {
            return _0x31bd48(_0x33f173, _0x5347c6);
        };
        _0x43908b[_0xbb21('0x7')] = _0xbb21('0x8');
        _0x43908b[_0xbb21('0x9')] = _0xbb21('0xa');
        var _0x5b4390 = this, _0x2fea14 = _0x5b4390[_0xbb21('0xb')], _0x1f3c30 = _0x5b4390[_0xbb21('0xc')]['_c'] || _0x2fea14;
        return _0x43908b[_0xbb21('0x0')](_0x1f3c30, _0x43908b[_0xbb21('0x1')], [_0x43908b[_0xbb21('0x3')](_0x1f3c30, _0x43908b[_0xbb21('0x1')], { 'staticStyle': { 'height': _0x43908b[_0xbb21('0x4')] } }, [_0x43908b[_0xbb21('0x6')](_0x1f3c30, _0x43908b[_0xbb21('0x7')], {
                    'ref': _0x43908b[_0xbb21('0x9')],
                    'attrs': {
                        'options': _0x5b4390[_0xbb21('0xd')],
                        'on-node-click': _0x5b4390[_0xbb21('0xe')],
                        'on-line-click': _0x5b4390[_0xbb21('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0xbb21('0x10')] = _0xbb21('0x11');
l[_0xbb21('0x12')] = {};
l[_0xbb21('0x13')] = function () {
    var _0x33ec7e = {
        ukwzW: _0xbb21('0x14'),
        xZNqh: _0xbb21('0x15'),
        wqPTN: _0xbb21('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x33ec7e.ukwzW,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x33ec7e.xZNqh,
            layout: { layoutName: _0x33ec7e.wqPTN }
        }
    };
};
l[_0xbb21('0x17')] = function () {
    this.showGraph();
};
l[_0xbb21('0x18')] = {};
l[_0xbb21('0x18')][_0xbb21('0x19')] = function () {
    var _0x1849c2 = {
        gxKAr: function (_0x42f370, _0x1af494) {
            return _0x42f370 !== _0x1af494;
        }
    };
    const _0x363f19 = {
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
        }, _0x10a909 = _0x363f19.nodes[0x0].id;
    _0x363f19.rootId = _0x10a909, _0x363f19.nodes.forEach(_0x258cad => {
        _0x1849c2.gxKAr(_0x258cad.id, _0x10a909) && _0x363f19.lines.push({
            from: _0x10a909,
            to: _0x258cad.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x363f19, _0x25c11a => {
    });
};
l[_0xbb21('0x18')][_0xbb21('0xe')] = function (_0x80ce8c, _0x35f511) {
    var _0x5eb408 = { yLBXn: _0xbb21('0x1a') };
    console.log(_0x5eb408.yLBXn, _0x80ce8c);
};
l[_0xbb21('0x18')][_0xbb21('0xf')] = function (_0x5d8544, _0x58a90b, _0x2c6264) {
    var _0x3a3d1a = { LxUCp: _0xbb21('0x1b') };
    console.log(_0x3a3d1a.LxUCp, _0x5d8544);
};
var r = _0x18dc75(l, d, a, !0x1, c, null, null, null);
function c(_0x475539) {
    for (let _0x2417f9 in n)
        this[_0x2417f9] = n[_0x2417f9];
}
const h = function () {
    return r[_0xbb21('0x1c')];
}();
export {
    h as default
};