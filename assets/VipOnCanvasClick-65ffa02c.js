
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3f1d = [
    'exports',
    'mREqV',
    'UYDWP',
    'div',
    'CKyrf',
    'HJvgw',
    'calc(100vh\x20-\x2060px)',
    'snyiS',
    'RelationGraph',
    'bIyel',
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
    'border'
];
(function (_0xdcfa68, _0x1017e3) {
    var _0x447009 = function (_0x3fafb4) {
        while (--_0x3fafb4) {
            _0xdcfa68['push'](_0xdcfa68['shift']());
        }
    };
    _0x447009(++_0x1017e3);
}(_0x3f1d, 0x17b));
var _0x5ba0 = function (_0x24f7f4, _0x55955b) {
    _0x24f7f4 = _0x24f7f4 - 0x0;
    var _0x332ecb = _0x3f1d[_0x24f7f4];
    return _0x332ecb;
};
import { n as _0x1a044d } from './index-95e0ef84.js';
var l = function () {
        var _0x4683e6 = {};
        _0x4683e6[_0x5ba0('0x0')] = function (_0x1ca872, _0x76dd06, _0x333534) {
            return _0x1ca872(_0x76dd06, _0x333534);
        };
        _0x4683e6[_0x5ba0('0x1')] = _0x5ba0('0x2');
        _0x4683e6[_0x5ba0('0x3')] = function (_0x5ee248, _0x120d74, _0xd5d49e, _0x14d6c7, _0x46a49f) {
            return _0x5ee248(_0x120d74, _0xd5d49e, _0x14d6c7, _0x46a49f);
        };
        _0x4683e6[_0x5ba0('0x4')] = _0x5ba0('0x5');
        _0x4683e6[_0x5ba0('0x6')] = _0x5ba0('0x7');
        _0x4683e6[_0x5ba0('0x8')] = _0x5ba0('0x9');
        var _0x3d3335 = this, _0x5867e1 = _0x3d3335[_0x5ba0('0xa')], _0x4192ed = _0x3d3335[_0x5ba0('0xb')]['_c'] || _0x5867e1;
        return _0x4683e6[_0x5ba0('0x0')](_0x4192ed, _0x4683e6[_0x5ba0('0x1')], [_0x4683e6[_0x5ba0('0x3')](_0x4192ed, _0x4683e6[_0x5ba0('0x1')], { 'staticStyle': { 'height': _0x4683e6[_0x5ba0('0x4')] } }, [_0x4683e6[_0x5ba0('0x0')](_0x4192ed, _0x4683e6[_0x5ba0('0x6')], {
                    'ref': _0x4683e6[_0x5ba0('0x8')],
                    'attrs': {
                        'options': _0x3d3335[_0x5ba0('0xc')],
                        'on-canvas-click': _0x3d3335[_0x5ba0('0xd')],
                        'on-node-click': _0x3d3335[_0x5ba0('0xe')],
                        'on-line-click': _0x3d3335[_0x5ba0('0xf')]
                    }
                })], 0x1)]);
    }, i = [];
const c = {}, r = {}, n = {};
r[_0x5ba0('0x10')] = _0x5ba0('0x11');
r[_0x5ba0('0x12')] = {};
r[_0x5ba0('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: c
    };
};
r[_0x5ba0('0x14')] = function () {
    this.showGraph();
};
r[_0x5ba0('0x15')] = {};
r[_0x5ba0('0x15')][_0x5ba0('0x16')] = function () {
    var _0x5d225a = {
        rgDfL: _0x5ba0('0x17'),
        Fwzsi: _0x5ba0('0x18'),
        ksLGR: _0x5ba0('0x19'),
        QBGeY: _0x5ba0('0x1a'),
        oxjIv: _0x5ba0('0x1b'),
        cPDKl: _0x5ba0('0x1c')
    };
    const _0x2558b1 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x5d225a.rgDfL
            },
            {
                id: 'b',
                text: 'B',
                color: _0x5d225a.Fwzsi,
                fontColor: _0x5d225a.rgDfL
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
                text: _0x5d225a.ksLGR,
                color: _0x5d225a.Fwzsi
            },
            {
                from: 'a',
                to: 'c',
                text: _0x5d225a.QBGeY
            },
            {
                from: 'a',
                to: 'e',
                text: _0x5d225a.oxjIv
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x5d225a.cPDKl
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x2558b1, _0x2df9ea => {
    });
};
r[_0x5ba0('0x15')][_0x5ba0('0xe')] = function (_0x85882d, _0x155193) {
    var _0x507034 = { AueRQ: _0x5ba0('0x1d') };
    console.log(_0x507034.AueRQ, _0x85882d);
};
r[_0x5ba0('0x15')][_0x5ba0('0xf')] = function (_0x566109, _0x47efac, _0x23d9ab) {
    var _0x2fd44b = { AyORf: _0x5ba0('0x1e') };
    console.log(_0x2fd44b.AyORf, _0x566109);
};
r[_0x5ba0('0x15')][_0x5ba0('0xd')] = function (_0x5d3537) {
    var _0x12a31d = { eocys: _0x5ba0('0x1f') };
    const _0x46a4f1 = this.$refs.graphRef.getInstance();
    console.log(_0x12a31d.eocys, _0x5d3537), _0x46a4f1.clearChecked();
};
c[_0x5ba0('0x20')] = !0x1;
c[_0x5ba0('0x21')] = !0x0;
c[_0x5ba0('0x22')] = !0x0;
c[_0x5ba0('0x23')] = !0x0;
c[_0x5ba0('0x24')] = _0x5ba0('0x25');
c[_0x5ba0('0x26')] = 0x3;
c[_0x5ba0('0x27')] = _0x5ba0('0x28');
var s = _0x1a044d(r, l, i, !0x1, h, null, null, null);
function h(_0x7887f9) {
    for (let _0x13fee3 in n)
        this[_0x13fee3] = n[_0x13fee3];
}
const p = function () {
    return s[_0x5ba0('0x29')];
}();
export {
    p as default
};