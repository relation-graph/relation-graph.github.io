
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1b5c = [
    'border',
    'center',
    'mounted',
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    'Line\x20Text',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'tseMr',
    'lDDgg',
    'div',
    'zGqNk',
    'QySDd',
    'calc(100vh\x20-\x2060px)',
    'dCSFq',
    'VcKyR',
    'RelationGraph',
    'DUwMA',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data'
];
(function (_0xafdd72, _0x464ce6) {
    var _0x4b0d0c = function (_0x5e72f8) {
        while (--_0x5e72f8) {
            _0xafdd72['push'](_0xafdd72['shift']());
        }
    };
    _0x4b0d0c(++_0x464ce6);
}(_0x1b5c, 0x1ec));
var _0x4f1d = function (_0x20716f, _0x22ed3c) {
    _0x20716f = _0x20716f - 0x0;
    var _0x50ed13 = _0x1b5c[_0x20716f];
    return _0x50ed13;
};
import { n as _0x4b0819 } from './index-bc1c6247.js';
var i = function () {
        var _0x56bde6 = {};
        _0x56bde6[_0x4f1d('0x0')] = function (_0x4f43e1, _0x39b263, _0x55afb4) {
            return _0x4f43e1(_0x39b263, _0x55afb4);
        };
        _0x56bde6[_0x4f1d('0x1')] = _0x4f1d('0x2');
        _0x56bde6[_0x4f1d('0x3')] = function (_0x418fa3, _0x59c3e6, _0x609829, _0x2402fc, _0x2e6a9a) {
            return _0x418fa3(_0x59c3e6, _0x609829, _0x2402fc, _0x2e6a9a);
        };
        _0x56bde6[_0x4f1d('0x4')] = _0x4f1d('0x5');
        _0x56bde6[_0x4f1d('0x6')] = function (_0x493765, _0xa8ad6, _0x2aa39e) {
            return _0x493765(_0xa8ad6, _0x2aa39e);
        };
        _0x56bde6[_0x4f1d('0x7')] = _0x4f1d('0x8');
        _0x56bde6[_0x4f1d('0x9')] = _0x4f1d('0xa');
        var _0x3ef107 = this, _0x128b10 = _0x3ef107[_0x4f1d('0xb')], _0x401215 = _0x3ef107[_0x4f1d('0xc')]['_c'] || _0x128b10;
        return _0x56bde6[_0x4f1d('0x0')](_0x401215, _0x56bde6[_0x4f1d('0x1')], [_0x56bde6[_0x4f1d('0x3')](_0x401215, _0x56bde6[_0x4f1d('0x1')], { 'staticStyle': { 'height': _0x56bde6[_0x4f1d('0x4')] } }, [_0x56bde6[_0x4f1d('0x6')](_0x401215, _0x56bde6[_0x4f1d('0x7')], {
                    'ref': _0x56bde6[_0x4f1d('0x9')],
                    'attrs': {
                        'options': _0x3ef107[_0x4f1d('0xd')],
                        'on-node-click': _0x3ef107[_0x4f1d('0xe')],
                        'on-line-click': _0x3ef107[_0x4f1d('0xf')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x4f1d('0x10')] = _0x4f1d('0x11');
r[_0x4f1d('0x12')] = {};
r[_0x4f1d('0x13')] = function () {
    var _0x287544 = {
        QMlWk: _0x4f1d('0x14'),
        jWxjW: _0x4f1d('0x15')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x287544.QMlWk,
            layout: { layoutName: _0x287544.jWxjW }
        }
    };
};
r[_0x4f1d('0x16')] = function () {
    this.showGraph();
};
r[_0x4f1d('0x17')] = {};
r[_0x4f1d('0x17')][_0x4f1d('0x18')] = function () {
    var _0x76a086 = {
        EQRzZ: _0x4f1d('0x19'),
        BKyLE: _0x4f1d('0x1a'),
        numyd: _0x4f1d('0x1b'),
        FkoZB: _0x4f1d('0x1c')
    };
    const _0x296e2d = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x76a086.EQRzZ
            },
            {
                id: 'b',
                text: 'B',
                color: _0x76a086.BKyLE,
                fontColor: _0x76a086.EQRzZ
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
                text: _0x76a086.numyd,
                color: _0x76a086.BKyLE
            },
            {
                from: 'a',
                to: 'c',
                text: _0x76a086.numyd
            },
            {
                from: 'a',
                to: 'e',
                text: _0x76a086.numyd
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x76a086.FkoZB
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x296e2d, _0x1fdd40 => {
    });
};
r[_0x4f1d('0x17')][_0x4f1d('0xe')] = function (_0x34aa09, _0x2f7967) {
    var _0x437ecd = { RqNxc: _0x4f1d('0x1d') };
    console.log(_0x437ecd.RqNxc, _0x34aa09);
};
r[_0x4f1d('0x17')][_0x4f1d('0xf')] = function (_0x4039e1, _0x32b999, _0x52e074) {
    var _0x12aa65 = { xHHbx: _0x4f1d('0x1e') };
    console.log(_0x12aa65.xHHbx, _0x4039e1);
};
var c = _0x4b0819(r, i, l, !0x1, s, null, null, null);
function s(_0x77c0f3) {
    for (let _0xa96829 in n)
        this[_0xa96829] = n[_0xa96829];
}
const d = function () {
    return c[_0x4f1d('0x1f')];
}();
export {
    d as default
};