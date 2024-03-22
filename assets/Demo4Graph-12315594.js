
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x75d5 = [
    'graphRef',
    '$createElement',
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
    'oTOFd',
    'WXvdj',
    'div',
    'amwAg',
    'mojDN',
    'calc(100vh\x20-\x2060px)',
    'gJRkL',
    'RelationGraph',
    'KaoAQ'
];
(function (_0x4befa8, _0x54e331) {
    var _0x2e6ff7 = function (_0x440ef7) {
        while (--_0x440ef7) {
            _0x4befa8['push'](_0x4befa8['shift']());
        }
    };
    _0x2e6ff7(++_0x54e331);
}(_0x75d5, 0x157));
var _0x1e5e = function (_0x184805, _0x285f7e) {
    _0x184805 = _0x184805 - 0x0;
    var _0xf1e06c = _0x75d5[_0x184805];
    return _0xf1e06c;
};
import { n as _0x3c10e4 } from './index-cdb280d3.js';
var i = function () {
        var _0x3c57e7 = {};
        _0x3c57e7[_0x1e5e('0x0')] = function (_0xfaa24f, _0x2e0563, _0x18a6d6) {
            return _0xfaa24f(_0x2e0563, _0x18a6d6);
        };
        _0x3c57e7[_0x1e5e('0x1')] = _0x1e5e('0x2');
        _0x3c57e7[_0x1e5e('0x3')] = function (_0x16f2cc, _0x40a3b6, _0x193756, _0x35071d, _0x42db1e) {
            return _0x16f2cc(_0x40a3b6, _0x193756, _0x35071d, _0x42db1e);
        };
        _0x3c57e7[_0x1e5e('0x4')] = _0x1e5e('0x5');
        _0x3c57e7[_0x1e5e('0x6')] = _0x1e5e('0x7');
        _0x3c57e7[_0x1e5e('0x8')] = _0x1e5e('0x9');
        var _0x3857a2 = this, _0x4fe545 = _0x3857a2[_0x1e5e('0xa')], _0x5e0fcf = _0x3857a2[_0x1e5e('0xb')]['_c'] || _0x4fe545;
        return _0x3c57e7[_0x1e5e('0x0')](_0x5e0fcf, _0x3c57e7[_0x1e5e('0x1')], [_0x3c57e7[_0x1e5e('0x3')](_0x5e0fcf, _0x3c57e7[_0x1e5e('0x1')], { 'staticStyle': { 'height': _0x3c57e7[_0x1e5e('0x4')] } }, [_0x3c57e7[_0x1e5e('0x0')](_0x5e0fcf, _0x3c57e7[_0x1e5e('0x6')], {
                    'ref': _0x3c57e7[_0x1e5e('0x8')],
                    'attrs': {
                        'options': _0x3857a2[_0x1e5e('0xc')],
                        'on-node-click': _0x3857a2[_0x1e5e('0xd')],
                        'on-line-click': _0x3857a2[_0x1e5e('0xe')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x1e5e('0xf')] = _0x1e5e('0x10');
l[_0x1e5e('0x11')] = {};
l[_0x1e5e('0x12')] = function () {
    var _0x7abeda = { SPhLD: _0x1e5e('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            defaultJunctionPoint: _0x7abeda.SPhLD
        }
    };
};
l[_0x1e5e('0x14')] = function () {
    this.showSeeksGraph();
};
l[_0x1e5e('0x15')] = {};
l[_0x1e5e('0x15')][_0x1e5e('0x16')] = function () {
    var _0x35e2bb = {
        lTkCa: _0x1e5e('0x17'),
        JsLWl: _0x1e5e('0x18'),
        SzXXp: _0x1e5e('0x19'),
        xkhdv: _0x1e5e('0x1a'),
        nUEOM: _0x1e5e('0x1b'),
        Bvzqr: _0x1e5e('0x1c')
    };
    const _0x392e06 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x35e2bb.lTkCa
            },
            {
                id: 'b',
                text: 'B',
                color: _0x35e2bb.JsLWl,
                fontColor: _0x35e2bb.lTkCa
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
                text: _0x35e2bb.SzXXp,
                color: _0x35e2bb.JsLWl
            },
            {
                from: 'a',
                to: 'c',
                text: _0x35e2bb.xkhdv
            },
            {
                from: 'a',
                to: 'e',
                text: _0x35e2bb.nUEOM
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x35e2bb.Bvzqr
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x392e06, _0x18441a => {
    });
};
l[_0x1e5e('0x15')][_0x1e5e('0xd')] = function (_0x283031, _0x32ac9c) {
    var _0xaa135f = { IDDlP: _0x1e5e('0x1d') };
    console.log(_0xaa135f.IDDlP, _0x283031);
};
l[_0x1e5e('0x15')][_0x1e5e('0xe')] = function (_0x488808, _0x46db5c, _0x14ee02) {
    var _0x2e74cc = { ZEYlJ: _0x1e5e('0x1e') };
    console.log(_0x2e74cc.ZEYlJ, _0x488808);
};
var c = _0x3c10e4(l, i, a, !0x1, s, null, null, null);
function s(_0x516a6b) {
    for (let _0x3916a8 in n)
        this[_0x3916a8] = n[_0x3916a8];
}
const d = function () {
    return c[_0x1e5e('0x1f')];
}();
export {
    d as default
};