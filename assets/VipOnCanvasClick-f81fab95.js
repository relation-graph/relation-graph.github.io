
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2ecc = [
    'Demo',
    'components',
    'data',
    'mounted',
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    '关系1',
    '关系2',
    '关系3',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'onCanvasClick:',
    'debug',
    'allowSwitchLineShape',
    'allowSwitchJunctionPoint',
    'allowShowDownloadButton',
    'checkedLineColor',
    'green',
    'defaultLineWidth',
    'defaultJunctionPoint',
    'border',
    'exports',
    'LObXZ',
    'WCVOT',
    'div',
    'onCvH',
    'ltvkr',
    'calc(100vh\x20-\x2060px)',
    'aFxiA',
    'RelationGraph',
    'ZDJfU',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onCanvasClick',
    'onNodeClick',
    'onLineClick',
    'name'
];
(function (_0x28b028, _0x35fdaf) {
    var _0x51262f = function (_0x26e902) {
        while (--_0x26e902) {
            _0x28b028['push'](_0x28b028['shift']());
        }
    };
    _0x51262f(++_0x35fdaf);
}(_0x2ecc, 0x97));
var _0x2d40 = function (_0x13bbab, _0x3019b9) {
    _0x13bbab = _0x13bbab - 0x0;
    var _0x191779 = _0x2ecc[_0x13bbab];
    return _0x191779;
};
import { n as _0x21810c } from './index-0f873f6f.js';
var l = function () {
        var _0x4755e1 = {};
        _0x4755e1[_0x2d40('0x0')] = function (_0x352a5c, _0x2bf800, _0x46d36b) {
            return _0x352a5c(_0x2bf800, _0x46d36b);
        };
        _0x4755e1[_0x2d40('0x1')] = _0x2d40('0x2');
        _0x4755e1[_0x2d40('0x3')] = function (_0x11ea99, _0x43a047, _0x41e5a6, _0x4d4f56, _0x476856) {
            return _0x11ea99(_0x43a047, _0x41e5a6, _0x4d4f56, _0x476856);
        };
        _0x4755e1[_0x2d40('0x4')] = _0x2d40('0x5');
        _0x4755e1[_0x2d40('0x6')] = _0x2d40('0x7');
        _0x4755e1[_0x2d40('0x8')] = _0x2d40('0x9');
        var _0x1b1e09 = this, _0x2de228 = _0x1b1e09[_0x2d40('0xa')], _0x38ae30 = _0x1b1e09[_0x2d40('0xb')]['_c'] || _0x2de228;
        return _0x4755e1[_0x2d40('0x0')](_0x38ae30, _0x4755e1[_0x2d40('0x1')], [_0x4755e1[_0x2d40('0x3')](_0x38ae30, _0x4755e1[_0x2d40('0x1')], { 'staticStyle': { 'height': _0x4755e1[_0x2d40('0x4')] } }, [_0x4755e1[_0x2d40('0x0')](_0x38ae30, _0x4755e1[_0x2d40('0x6')], {
                    'ref': _0x4755e1[_0x2d40('0x8')],
                    'attrs': {
                        'options': _0x1b1e09[_0x2d40('0xc')],
                        'on-canvas-click': _0x1b1e09[_0x2d40('0xd')],
                        'on-node-click': _0x1b1e09[_0x2d40('0xe')],
                        'on-line-click': _0x1b1e09[_0x2d40('0xf')]
                    }
                })], 0x1)]);
    }, i = [];
const c = {}, r = {}, n = {};
r[_0x2d40('0x10')] = _0x2d40('0x11');
r[_0x2d40('0x12')] = {};
r[_0x2d40('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: c
    };
};
r[_0x2d40('0x14')] = function () {
    this.showGraph();
};
r[_0x2d40('0x15')] = {};
r[_0x2d40('0x15')][_0x2d40('0x16')] = function () {
    var _0x251c85 = {
        zoRlJ: _0x2d40('0x17'),
        fnZYW: _0x2d40('0x18'),
        MLsgg: _0x2d40('0x19'),
        RYKuI: _0x2d40('0x1a'),
        goXaA: _0x2d40('0x1b'),
        LAghu: _0x2d40('0x1c')
    };
    const _0x2a0d5e = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x251c85.zoRlJ
            },
            {
                id: 'b',
                text: 'B',
                color: _0x251c85.fnZYW,
                fontColor: _0x251c85.zoRlJ
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
                text: _0x251c85.MLsgg,
                color: _0x251c85.fnZYW
            },
            {
                from: 'a',
                to: 'c',
                text: _0x251c85.RYKuI
            },
            {
                from: 'a',
                to: 'e',
                text: _0x251c85.goXaA
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x251c85.LAghu
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x2a0d5e, _0x8df7d5 => {
    });
};
r[_0x2d40('0x15')][_0x2d40('0xe')] = function (_0x242933, _0x85c003) {
    var _0x4a4805 = { LBmGt: _0x2d40('0x1d') };
    console.log(_0x4a4805.LBmGt, _0x242933);
};
r[_0x2d40('0x15')][_0x2d40('0xf')] = function (_0xb9927f, _0x3b4a4e, _0x4eb1af) {
    var _0x147ca9 = { eAHAG: _0x2d40('0x1e') };
    console.log(_0x147ca9.eAHAG, _0xb9927f);
};
r[_0x2d40('0x15')][_0x2d40('0xd')] = function (_0x383912) {
    var _0x129ea1 = { ANoAc: _0x2d40('0x1f') };
    const _0x62874c = this.$refs.graphRef.getInstance();
    console.log(_0x129ea1.ANoAc, _0x383912), _0x62874c.clearChecked();
};
c[_0x2d40('0x20')] = !0x1;
c[_0x2d40('0x21')] = !0x0;
c[_0x2d40('0x22')] = !0x0;
c[_0x2d40('0x23')] = !0x0;
c[_0x2d40('0x24')] = _0x2d40('0x25');
c[_0x2d40('0x26')] = 0x3;
c[_0x2d40('0x27')] = _0x2d40('0x28');
var s = _0x21810c(r, l, i, !0x1, h, null, null, null);
function h(_0x2d0440) {
    for (let _0x5e3a02 in n)
        this[_0x5e3a02] = n[_0x5e3a02];
}
const p = function () {
    return s[_0x2d40('0x29')];
}();
export {
    p as default
};