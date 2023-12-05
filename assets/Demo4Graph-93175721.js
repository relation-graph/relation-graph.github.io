
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1dbf = [
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data',
    'border',
    'mounted',
    'methods',
    'showSeeksGraph',
    'yellow',
    '#43a2f1',
    '关系1',
    '关系2',
    '关系3',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'UpbHz',
    'nfcEo',
    'div',
    'gRsFc',
    'vsbAq',
    'calc(100vh\x20-\x2060px)',
    'kQbLD',
    'sExFC',
    'RelationGraph',
    'QzteX',
    'graphRef',
    '$createElement'
];
(function (_0x16cea4, _0x981fc1) {
    var _0x4db79f = function (_0x4325c5) {
        while (--_0x4325c5) {
            _0x16cea4['push'](_0x16cea4['shift']());
        }
    };
    _0x4db79f(++_0x981fc1);
}(_0x1dbf, 0x99));
var _0x568c = function (_0x44ed45, _0x413224) {
    _0x44ed45 = _0x44ed45 - 0x0;
    var _0x2699a9 = _0x1dbf[_0x44ed45];
    return _0x2699a9;
};
import { n as _0x1a8829 } from './index-d3c29682.js';
var i = function () {
        var _0xe201b0 = {};
        _0xe201b0[_0x568c('0x0')] = function (_0x4096ab, _0x2de86c, _0x1075c8) {
            return _0x4096ab(_0x2de86c, _0x1075c8);
        };
        _0xe201b0[_0x568c('0x1')] = _0x568c('0x2');
        _0xe201b0[_0x568c('0x3')] = function (_0xc06ced, _0x1d6af0, _0x2d676f, _0xf75416, _0x3d79c1) {
            return _0xc06ced(_0x1d6af0, _0x2d676f, _0xf75416, _0x3d79c1);
        };
        _0xe201b0[_0x568c('0x4')] = _0x568c('0x5');
        _0xe201b0[_0x568c('0x6')] = function (_0x3f1009, _0xf5dc9e, _0x32f045) {
            return _0x3f1009(_0xf5dc9e, _0x32f045);
        };
        _0xe201b0[_0x568c('0x7')] = _0x568c('0x8');
        _0xe201b0[_0x568c('0x9')] = _0x568c('0xa');
        var _0x579769 = this, _0x23df5d = _0x579769[_0x568c('0xb')], _0x951030 = _0x579769[_0x568c('0xc')]['_c'] || _0x23df5d;
        return _0xe201b0[_0x568c('0x0')](_0x951030, _0xe201b0[_0x568c('0x1')], [_0xe201b0[_0x568c('0x3')](_0x951030, _0xe201b0[_0x568c('0x1')], { 'staticStyle': { 'height': _0xe201b0[_0x568c('0x4')] } }, [_0xe201b0[_0x568c('0x6')](_0x951030, _0xe201b0[_0x568c('0x7')], {
                    'ref': _0xe201b0[_0x568c('0x9')],
                    'attrs': {
                        'options': _0x579769[_0x568c('0xd')],
                        'on-node-click': _0x579769[_0x568c('0xe')],
                        'on-line-click': _0x579769[_0x568c('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x568c('0x10')] = _0x568c('0x11');
l[_0x568c('0x12')] = {};
l[_0x568c('0x13')] = function () {
    var _0x2a112f = { EveVP: _0x568c('0x14') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            defaultJunctionPoint: _0x2a112f.EveVP
        }
    };
};
l[_0x568c('0x15')] = function () {
    this.showSeeksGraph();
};
l[_0x568c('0x16')] = {};
l[_0x568c('0x16')][_0x568c('0x17')] = function () {
    var _0x2eb093 = {
        lSWqW: _0x568c('0x18'),
        hcoBL: _0x568c('0x19'),
        iwsBT: _0x568c('0x1a'),
        UFEgj: _0x568c('0x1b'),
        irlLJ: _0x568c('0x1c'),
        MpUCc: _0x568c('0x1d')
    };
    const _0x33732c = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x2eb093.lSWqW
            },
            {
                id: 'b',
                text: 'B',
                color: _0x2eb093.hcoBL,
                fontColor: _0x2eb093.lSWqW
            },
            {
                id: 'c',
                text: 'C',
                nodeShape: 0x1,
                width: 0x50,
                height: 0x3c
            },
            {
                id: 'e',
                text: 'E',
                nodeShape: 0x0,
                width: 0x96,
                height: 0x96
            }
        ],
        lines: [
            {
                from: 'a',
                to: 'b',
                text: _0x2eb093.iwsBT,
                color: _0x2eb093.hcoBL
            },
            {
                from: 'a',
                to: 'c',
                text: _0x2eb093.UFEgj
            },
            {
                from: 'a',
                to: 'e',
                text: _0x2eb093.irlLJ
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x2eb093.MpUCc
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x33732c, _0x4c8525 => {
    });
};
l[_0x568c('0x16')][_0x568c('0xe')] = function (_0x344307, _0x2273cb) {
    var _0x2e805f = { HJyOe: _0x568c('0x1e') };
    console.log(_0x2e805f.HJyOe, _0x344307);
};
l[_0x568c('0x16')][_0x568c('0xf')] = function (_0x38fedf, _0x14eff4, _0x1a9be2) {
    var _0x490bed = { FSYDu: _0x568c('0x1f') };
    console.log(_0x490bed.FSYDu, _0x38fedf);
};
var c = _0x1a8829(l, i, a, !0x1, s, null, null, null);
function s(_0x18b7b2) {
    for (let _0x37c641 in n)
        this[_0x37c641] = n[_0x37c641];
}
const d = function () {
    return c[_0x568c('0x20')];
}();
export {
    d as default
};