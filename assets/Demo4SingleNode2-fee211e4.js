
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4e16 = [
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
    'ENmup',
    'LpnSS',
    'div',
    'HSeUb',
    'xSqVf',
    'calc(100vh\x20-\x2060px)',
    'JjYEf',
    'reWbN',
    'RelationGraph',
    'yUXWl',
    'graphRef',
    '$createElement'
];
(function (_0x294059, _0x3a9957) {
    var _0x477d71 = function (_0x327f13) {
        while (--_0x327f13) {
            _0x294059['push'](_0x294059['shift']());
        }
    };
    _0x477d71(++_0x3a9957);
}(_0x4e16, 0x1c4));
var _0x596a = function (_0x49e612, _0x169fc3) {
    _0x49e612 = _0x49e612 - 0x0;
    var _0x351a49 = _0x4e16[_0x49e612];
    return _0x351a49;
};
import { n as _0x5afc38 } from './index-f64bbabb.js';
var d = function () {
        var _0x37ed5d = {};
        _0x37ed5d[_0x596a('0x0')] = function (_0x336061, _0x294fbd, _0x593230) {
            return _0x336061(_0x294fbd, _0x593230);
        };
        _0x37ed5d[_0x596a('0x1')] = _0x596a('0x2');
        _0x37ed5d[_0x596a('0x3')] = function (_0x90d58f, _0xf3a96d, _0x1b2a7a, _0x812efd, _0x1c2b87) {
            return _0x90d58f(_0xf3a96d, _0x1b2a7a, _0x812efd, _0x1c2b87);
        };
        _0x37ed5d[_0x596a('0x4')] = _0x596a('0x5');
        _0x37ed5d[_0x596a('0x6')] = function (_0x1cd848, _0x35f748, _0x25f90f) {
            return _0x1cd848(_0x35f748, _0x25f90f);
        };
        _0x37ed5d[_0x596a('0x7')] = _0x596a('0x8');
        _0x37ed5d[_0x596a('0x9')] = _0x596a('0xa');
        var _0x2bb4b3 = this, _0x57f325 = _0x2bb4b3[_0x596a('0xb')], _0x519607 = _0x2bb4b3[_0x596a('0xc')]['_c'] || _0x57f325;
        return _0x37ed5d[_0x596a('0x0')](_0x519607, _0x37ed5d[_0x596a('0x1')], [_0x37ed5d[_0x596a('0x3')](_0x519607, _0x37ed5d[_0x596a('0x1')], { 'staticStyle': { 'height': _0x37ed5d[_0x596a('0x4')] } }, [_0x37ed5d[_0x596a('0x6')](_0x519607, _0x37ed5d[_0x596a('0x7')], {
                    'ref': _0x37ed5d[_0x596a('0x9')],
                    'attrs': {
                        'options': _0x2bb4b3[_0x596a('0xd')],
                        'on-node-click': _0x2bb4b3[_0x596a('0xe')],
                        'on-line-click': _0x2bb4b3[_0x596a('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x596a('0x10')] = _0x596a('0x11');
l[_0x596a('0x12')] = {};
l[_0x596a('0x13')] = function () {
    var _0x3c55cd = {
        JtIjn: _0x596a('0x14'),
        dCJWB: _0x596a('0x15'),
        NFZPd: _0x596a('0x16')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x3c55cd.JtIjn,
            defaultLineWidth: 0x2,
            defaultLineColor: _0x3c55cd.dCJWB,
            layout: { layoutName: _0x3c55cd.NFZPd }
        }
    };
};
l[_0x596a('0x17')] = function () {
    this.showGraph();
};
l[_0x596a('0x18')] = {};
l[_0x596a('0x18')][_0x596a('0x19')] = function () {
    var _0x161c15 = {
        McUUT: function (_0x508524, _0x1637eb) {
            return _0x508524 !== _0x1637eb;
        }
    };
    const _0x3d12dd = {
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
        }, _0x4b70df = _0x3d12dd.nodes[0x0].id;
    _0x3d12dd.rootId = _0x4b70df, _0x3d12dd.nodes.forEach(_0x3c6b02 => {
        _0x161c15.McUUT(_0x3c6b02.id, _0x4b70df) && _0x3d12dd.lines.push({
            from: _0x4b70df,
            to: _0x3c6b02.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x3d12dd, _0x48414e => {
    });
};
l[_0x596a('0x18')][_0x596a('0xe')] = function (_0x2354b4, _0x43fa97) {
    var _0x45e121 = { gFFKD: _0x596a('0x1a') };
    console.log(_0x45e121.gFFKD, _0x2354b4);
};
l[_0x596a('0x18')][_0x596a('0xf')] = function (_0x3a4304, _0x2fa743, _0x101ec9) {
    var _0x2c4301 = { kjaVc: _0x596a('0x1b') };
    console.log(_0x2c4301.kjaVc, _0x3a4304);
};
var r = _0x5afc38(l, d, a, !0x1, c, null, null, null);
function c(_0x26abf8) {
    for (let _0x290a03 in n)
        this[_0x290a03] = n[_0x290a03];
}
const h = function () {
    return r[_0x596a('0x1c')];
}();
export {
    h as default
};