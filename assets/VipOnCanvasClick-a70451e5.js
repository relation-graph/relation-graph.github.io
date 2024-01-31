
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x9d72 = [
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
    'QNZoS',
    'KzAmQ',
    'div',
    'fvnFg',
    'esBgx',
    'calc(100vh\x20-\x2060px)',
    'NfSWp',
    'RelationGraph',
    'lGrEo'
];
(function (_0x37bc1e, _0x512b04) {
    var _0x2933b6 = function (_0x2cf454) {
        while (--_0x2cf454) {
            _0x37bc1e['push'](_0x37bc1e['shift']());
        }
    };
    _0x2933b6(++_0x512b04);
}(_0x9d72, 0x9f));
var _0x93c1 = function (_0x552b4d, _0x554fe2) {
    _0x552b4d = _0x552b4d - 0x0;
    var _0x60c26e = _0x9d72[_0x552b4d];
    return _0x60c26e;
};
import { n as _0x15771b } from './index-36eaf5cf.js';
var l = function () {
        var _0x1b094c = {};
        _0x1b094c[_0x93c1('0x0')] = function (_0x41dbbb, _0x3c652e, _0xe46d5) {
            return _0x41dbbb(_0x3c652e, _0xe46d5);
        };
        _0x1b094c[_0x93c1('0x1')] = _0x93c1('0x2');
        _0x1b094c[_0x93c1('0x3')] = function (_0x18ed25, _0x5c47dd, _0x490f2e, _0xd2025c, _0x120627) {
            return _0x18ed25(_0x5c47dd, _0x490f2e, _0xd2025c, _0x120627);
        };
        _0x1b094c[_0x93c1('0x4')] = _0x93c1('0x5');
        _0x1b094c[_0x93c1('0x6')] = _0x93c1('0x7');
        _0x1b094c[_0x93c1('0x8')] = _0x93c1('0x9');
        var _0x1d88cf = this, _0x66856e = _0x1d88cf[_0x93c1('0xa')], _0x4786ee = _0x1d88cf[_0x93c1('0xb')]['_c'] || _0x66856e;
        return _0x1b094c[_0x93c1('0x0')](_0x4786ee, _0x1b094c[_0x93c1('0x1')], [_0x1b094c[_0x93c1('0x3')](_0x4786ee, _0x1b094c[_0x93c1('0x1')], { 'staticStyle': { 'height': _0x1b094c[_0x93c1('0x4')] } }, [_0x1b094c[_0x93c1('0x0')](_0x4786ee, _0x1b094c[_0x93c1('0x6')], {
                    'ref': _0x1b094c[_0x93c1('0x8')],
                    'attrs': {
                        'options': _0x1d88cf[_0x93c1('0xc')],
                        'on-canvas-click': _0x1d88cf[_0x93c1('0xd')],
                        'on-node-click': _0x1d88cf[_0x93c1('0xe')],
                        'on-line-click': _0x1d88cf[_0x93c1('0xf')]
                    }
                })], 0x1)]);
    }, i = [];
const c = {}, r = {}, n = {};
r[_0x93c1('0x10')] = _0x93c1('0x11');
r[_0x93c1('0x12')] = {};
r[_0x93c1('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: c
    };
};
r[_0x93c1('0x14')] = function () {
    this.showGraph();
};
r[_0x93c1('0x15')] = {};
r[_0x93c1('0x15')][_0x93c1('0x16')] = function () {
    var _0x4726df = {
        SMqUc: _0x93c1('0x17'),
        EPNUQ: _0x93c1('0x18'),
        qIPZz: _0x93c1('0x19'),
        rsNXP: _0x93c1('0x1a'),
        RHNhv: _0x93c1('0x1b'),
        OoLDf: _0x93c1('0x1c')
    };
    const _0x554a48 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x4726df.SMqUc
            },
            {
                id: 'b',
                text: 'B',
                color: _0x4726df.EPNUQ,
                fontColor: _0x4726df.SMqUc
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
                text: _0x4726df.qIPZz,
                color: _0x4726df.EPNUQ
            },
            {
                from: 'a',
                to: 'c',
                text: _0x4726df.rsNXP
            },
            {
                from: 'a',
                to: 'e',
                text: _0x4726df.RHNhv
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x4726df.OoLDf
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x554a48, _0x1cf050 => {
    });
};
r[_0x93c1('0x15')][_0x93c1('0xe')] = function (_0x53e631, _0x12d65f) {
    var _0x5c1e87 = { Irgxj: _0x93c1('0x1d') };
    console.log(_0x5c1e87.Irgxj, _0x53e631);
};
r[_0x93c1('0x15')][_0x93c1('0xf')] = function (_0x322fc4, _0x2b24e8, _0x10bc97) {
    var _0xb6cf9b = { tDacS: _0x93c1('0x1e') };
    console.log(_0xb6cf9b.tDacS, _0x322fc4);
};
r[_0x93c1('0x15')][_0x93c1('0xd')] = function (_0x237c06) {
    var _0x5e08c0 = { aQAOG: _0x93c1('0x1f') };
    const _0x4f4266 = this.$refs.graphRef.getInstance();
    console.log(_0x5e08c0.aQAOG, _0x237c06), _0x4f4266.clearChecked();
};
c[_0x93c1('0x20')] = !0x1;
c[_0x93c1('0x21')] = !0x0;
c[_0x93c1('0x22')] = !0x0;
c[_0x93c1('0x23')] = !0x0;
c[_0x93c1('0x24')] = _0x93c1('0x25');
c[_0x93c1('0x26')] = 0x3;
c[_0x93c1('0x27')] = _0x93c1('0x28');
var s = _0x15771b(r, l, i, !0x1, h, null, null, null);
function h(_0x4d2313) {
    for (let _0x228b26 in n)
        this[_0x228b26] = n[_0x228b26];
}
const p = function () {
    return s[_0x93c1('0x29')];
}();
export {
    p as default
};