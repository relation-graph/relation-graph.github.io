
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xb10d = [
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
    'IMwAC',
    'uFbCP',
    'div',
    'ppbaA',
    'OgKpK',
    'calc(100vh\x20-\x2060px)',
    'pTLbK',
    'RelationGraph',
    'wTTNl',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onCanvasClick',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data'
];
(function (_0x2f8617, _0x5b02d7) {
    var _0x39d748 = function (_0x13e75a) {
        while (--_0x13e75a) {
            _0x2f8617['push'](_0x2f8617['shift']());
        }
    };
    _0x39d748(++_0x5b02d7);
}(_0xb10d, 0x112));
var _0x5e90 = function (_0x18d625, _0x42d7ef) {
    _0x18d625 = _0x18d625 - 0x0;
    var _0x8e2b17 = _0xb10d[_0x18d625];
    return _0x8e2b17;
};
import { n as _0x59a27b } from './index-bc1c6247.js';
var l = function () {
        var _0x26ba0a = {};
        _0x26ba0a[_0x5e90('0x0')] = function (_0x23a421, _0x11cae7, _0x40200c) {
            return _0x23a421(_0x11cae7, _0x40200c);
        };
        _0x26ba0a[_0x5e90('0x1')] = _0x5e90('0x2');
        _0x26ba0a[_0x5e90('0x3')] = function (_0x475728, _0xac0b43, _0x56d6a7, _0x1d75aa, _0x16832d) {
            return _0x475728(_0xac0b43, _0x56d6a7, _0x1d75aa, _0x16832d);
        };
        _0x26ba0a[_0x5e90('0x4')] = _0x5e90('0x5');
        _0x26ba0a[_0x5e90('0x6')] = _0x5e90('0x7');
        _0x26ba0a[_0x5e90('0x8')] = _0x5e90('0x9');
        var _0x5987e1 = this, _0x1c6dc2 = _0x5987e1[_0x5e90('0xa')], _0x5b81b3 = _0x5987e1[_0x5e90('0xb')]['_c'] || _0x1c6dc2;
        return _0x26ba0a[_0x5e90('0x0')](_0x5b81b3, _0x26ba0a[_0x5e90('0x1')], [_0x26ba0a[_0x5e90('0x3')](_0x5b81b3, _0x26ba0a[_0x5e90('0x1')], { 'staticStyle': { 'height': _0x26ba0a[_0x5e90('0x4')] } }, [_0x26ba0a[_0x5e90('0x0')](_0x5b81b3, _0x26ba0a[_0x5e90('0x6')], {
                    'ref': _0x26ba0a[_0x5e90('0x8')],
                    'attrs': {
                        'options': _0x5987e1[_0x5e90('0xc')],
                        'on-canvas-click': _0x5987e1[_0x5e90('0xd')],
                        'on-node-click': _0x5987e1[_0x5e90('0xe')],
                        'on-line-click': _0x5987e1[_0x5e90('0xf')]
                    }
                })], 0x1)]);
    }, i = [];
const c = {}, r = {}, n = {};
r[_0x5e90('0x10')] = _0x5e90('0x11');
r[_0x5e90('0x12')] = {};
r[_0x5e90('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: c
    };
};
r[_0x5e90('0x14')] = function () {
    this.showGraph();
};
r[_0x5e90('0x15')] = {};
r[_0x5e90('0x15')][_0x5e90('0x16')] = function () {
    var _0x56e4e4 = {
        lGBjR: _0x5e90('0x17'),
        sNFaG: _0x5e90('0x18'),
        cFGxB: _0x5e90('0x19'),
        GMmrz: _0x5e90('0x1a'),
        BENYa: _0x5e90('0x1b'),
        MawQv: _0x5e90('0x1c')
    };
    const _0x4e4c18 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x56e4e4.lGBjR
            },
            {
                id: 'b',
                text: 'B',
                color: _0x56e4e4.sNFaG,
                fontColor: _0x56e4e4.lGBjR
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
                text: _0x56e4e4.cFGxB,
                color: _0x56e4e4.sNFaG
            },
            {
                from: 'a',
                to: 'c',
                text: _0x56e4e4.GMmrz
            },
            {
                from: 'a',
                to: 'e',
                text: _0x56e4e4.BENYa
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x56e4e4.MawQv
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x4e4c18, _0x597a2a => {
    });
};
r[_0x5e90('0x15')][_0x5e90('0xe')] = function (_0x8d998f, _0x3233b2) {
    var _0x2e7247 = { oCYqV: _0x5e90('0x1d') };
    console.log(_0x2e7247.oCYqV, _0x8d998f);
};
r[_0x5e90('0x15')][_0x5e90('0xf')] = function (_0x394db5, _0x487eb1, _0x38e744) {
    var _0x1be32a = { OGKPf: _0x5e90('0x1e') };
    console.log(_0x1be32a.OGKPf, _0x394db5);
};
r[_0x5e90('0x15')][_0x5e90('0xd')] = function (_0x544a47) {
    var _0x37a45a = { kdxUi: _0x5e90('0x1f') };
    const _0x178a89 = this.$refs.graphRef.getInstance();
    console.log(_0x37a45a.kdxUi, _0x544a47), _0x178a89.clearChecked();
};
c[_0x5e90('0x20')] = !0x1;
c[_0x5e90('0x21')] = !0x0;
c[_0x5e90('0x22')] = !0x0;
c[_0x5e90('0x23')] = !0x0;
c[_0x5e90('0x24')] = _0x5e90('0x25');
c[_0x5e90('0x26')] = 0x3;
c[_0x5e90('0x27')] = _0x5e90('0x28');
var s = _0x59a27b(r, l, i, !0x1, h, null, null, null);
function h(_0x595e31) {
    for (let _0x7f404c in n)
        this[_0x7f404c] = n[_0x7f404c];
}
const p = function () {
    return s[_0x5e90('0x29')];
}();
export {
    p as default
};