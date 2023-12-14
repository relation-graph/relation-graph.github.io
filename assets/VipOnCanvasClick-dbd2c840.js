
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5821 = [
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
    'WXHsL',
    'Plsqg',
    'div',
    'uVMaJ',
    'OnPxH',
    'calc(100vh\x20-\x2060px)',
    'vtqRU',
    'RelationGraph',
    'smnKa',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onCanvasClick'
];
(function (_0x42945c, _0x36211c) {
    var _0x2b90ab = function (_0x5bc7c1) {
        while (--_0x5bc7c1) {
            _0x42945c['push'](_0x42945c['shift']());
        }
    };
    _0x2b90ab(++_0x36211c);
}(_0x5821, 0x142));
var _0x1bc6 = function (_0x5a3a6a, _0xa438a4) {
    _0x5a3a6a = _0x5a3a6a - 0x0;
    var _0x7b07c6 = _0x5821[_0x5a3a6a];
    return _0x7b07c6;
};
import { n as _0x2bfd2c } from './index-7cdfa577.js';
var l = function () {
        var _0x240f9e = {};
        _0x240f9e[_0x1bc6('0x0')] = function (_0x567ab5, _0x5e78a4, _0x1cabec) {
            return _0x567ab5(_0x5e78a4, _0x1cabec);
        };
        _0x240f9e[_0x1bc6('0x1')] = _0x1bc6('0x2');
        _0x240f9e[_0x1bc6('0x3')] = function (_0x197948, _0x11d095, _0x11d1f4, _0x32abc5, _0x1ee38c) {
            return _0x197948(_0x11d095, _0x11d1f4, _0x32abc5, _0x1ee38c);
        };
        _0x240f9e[_0x1bc6('0x4')] = _0x1bc6('0x5');
        _0x240f9e[_0x1bc6('0x6')] = _0x1bc6('0x7');
        _0x240f9e[_0x1bc6('0x8')] = _0x1bc6('0x9');
        var _0x49ad59 = this, _0xec46ca = _0x49ad59[_0x1bc6('0xa')], _0x11928c = _0x49ad59[_0x1bc6('0xb')]['_c'] || _0xec46ca;
        return _0x240f9e[_0x1bc6('0x0')](_0x11928c, _0x240f9e[_0x1bc6('0x1')], [_0x240f9e[_0x1bc6('0x3')](_0x11928c, _0x240f9e[_0x1bc6('0x1')], { 'staticStyle': { 'height': _0x240f9e[_0x1bc6('0x4')] } }, [_0x240f9e[_0x1bc6('0x0')](_0x11928c, _0x240f9e[_0x1bc6('0x6')], {
                    'ref': _0x240f9e[_0x1bc6('0x8')],
                    'attrs': {
                        'options': _0x49ad59[_0x1bc6('0xc')],
                        'on-canvas-click': _0x49ad59[_0x1bc6('0xd')],
                        'on-node-click': _0x49ad59[_0x1bc6('0xe')],
                        'on-line-click': _0x49ad59[_0x1bc6('0xf')]
                    }
                })], 0x1)]);
    }, i = [];
const c = {}, r = {}, n = {};
r[_0x1bc6('0x10')] = _0x1bc6('0x11');
r[_0x1bc6('0x12')] = {};
r[_0x1bc6('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: c
    };
};
r[_0x1bc6('0x14')] = function () {
    this.showGraph();
};
r[_0x1bc6('0x15')] = {};
r[_0x1bc6('0x15')][_0x1bc6('0x16')] = function () {
    var _0x4573f6 = {
        flYcT: _0x1bc6('0x17'),
        NpPer: _0x1bc6('0x18'),
        ToCWn: _0x1bc6('0x19'),
        RZVwG: _0x1bc6('0x1a'),
        xuhAm: _0x1bc6('0x1b'),
        tdZJy: _0x1bc6('0x1c')
    };
    const _0xf7b6a3 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x4573f6.flYcT
            },
            {
                id: 'b',
                text: 'B',
                color: _0x4573f6.NpPer,
                fontColor: _0x4573f6.flYcT
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
                text: _0x4573f6.ToCWn,
                color: _0x4573f6.NpPer
            },
            {
                from: 'a',
                to: 'c',
                text: _0x4573f6.RZVwG
            },
            {
                from: 'a',
                to: 'e',
                text: _0x4573f6.xuhAm
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x4573f6.tdZJy
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0xf7b6a3, _0x5050be => {
    });
};
r[_0x1bc6('0x15')][_0x1bc6('0xe')] = function (_0x5dc59e, _0xa8188) {
    var _0x43d035 = { yKDyX: _0x1bc6('0x1d') };
    console.log(_0x43d035.yKDyX, _0x5dc59e);
};
r[_0x1bc6('0x15')][_0x1bc6('0xf')] = function (_0x36a464, _0x2caed6, _0x4d48d4) {
    var _0x3cead6 = { icHjZ: _0x1bc6('0x1e') };
    console.log(_0x3cead6.icHjZ, _0x36a464);
};
r[_0x1bc6('0x15')][_0x1bc6('0xd')] = function (_0x5e4b2d) {
    var _0x38514b = { KquWW: _0x1bc6('0x1f') };
    const _0x20837a = this.$refs.graphRef.getInstance();
    console.log(_0x38514b.KquWW, _0x5e4b2d), _0x20837a.clearChecked();
};
c[_0x1bc6('0x20')] = !0x1;
c[_0x1bc6('0x21')] = !0x0;
c[_0x1bc6('0x22')] = !0x0;
c[_0x1bc6('0x23')] = !0x0;
c[_0x1bc6('0x24')] = _0x1bc6('0x25');
c[_0x1bc6('0x26')] = 0x3;
c[_0x1bc6('0x27')] = _0x1bc6('0x28');
var s = _0x2bfd2c(r, l, i, !0x1, h, null, null, null);
function h(_0x4e2ec2) {
    for (let _0x50a25a in n)
        this[_0x50a25a] = n[_0x50a25a];
}
const p = function () {
    return s[_0x1bc6('0x29')];
}();
export {
    p as default
};