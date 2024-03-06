
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2b17 = [
    'allowSwitchLineShape',
    'allowSwitchJunctionPoint',
    'allowShowDownloadButton',
    'checkedLineColor',
    'green',
    'defaultLineWidth',
    'defaultJunctionPoint',
    'border',
    'exports',
    'NlDBS',
    'VPPjp',
    'div',
    'oJwnU',
    'OhxJY',
    'calc(100vh\x20-\x2060px)',
    'gAjCS',
    'RelationGraph',
    'HyeZz',
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
    'debug'
];
(function (_0x1ed9c5, _0x3f5708) {
    var _0x9a14d4 = function (_0x5df79f) {
        while (--_0x5df79f) {
            _0x1ed9c5['push'](_0x1ed9c5['shift']());
        }
    };
    _0x9a14d4(++_0x3f5708);
}(_0x2b17, 0x183));
var _0x8a7b = function (_0x58ed0c, _0x124753) {
    _0x58ed0c = _0x58ed0c - 0x0;
    var _0x35d67b = _0x2b17[_0x58ed0c];
    return _0x35d67b;
};
import { n as _0x4fbefb } from './index-a8fcf52e.js';
var l = function () {
        var _0x3aa23b = {};
        _0x3aa23b[_0x8a7b('0x0')] = function (_0x441502, _0x2e289b, _0x552fe3) {
            return _0x441502(_0x2e289b, _0x552fe3);
        };
        _0x3aa23b[_0x8a7b('0x1')] = _0x8a7b('0x2');
        _0x3aa23b[_0x8a7b('0x3')] = function (_0x38ab39, _0x36fc33, _0x380dcc, _0x350e45, _0x11a8fc) {
            return _0x38ab39(_0x36fc33, _0x380dcc, _0x350e45, _0x11a8fc);
        };
        _0x3aa23b[_0x8a7b('0x4')] = _0x8a7b('0x5');
        _0x3aa23b[_0x8a7b('0x6')] = _0x8a7b('0x7');
        _0x3aa23b[_0x8a7b('0x8')] = _0x8a7b('0x9');
        var _0x5defef = this, _0x3027c6 = _0x5defef[_0x8a7b('0xa')], _0x4f7686 = _0x5defef[_0x8a7b('0xb')]['_c'] || _0x3027c6;
        return _0x3aa23b[_0x8a7b('0x0')](_0x4f7686, _0x3aa23b[_0x8a7b('0x1')], [_0x3aa23b[_0x8a7b('0x3')](_0x4f7686, _0x3aa23b[_0x8a7b('0x1')], { 'staticStyle': { 'height': _0x3aa23b[_0x8a7b('0x4')] } }, [_0x3aa23b[_0x8a7b('0x0')](_0x4f7686, _0x3aa23b[_0x8a7b('0x6')], {
                    'ref': _0x3aa23b[_0x8a7b('0x8')],
                    'attrs': {
                        'options': _0x5defef[_0x8a7b('0xc')],
                        'on-canvas-click': _0x5defef[_0x8a7b('0xd')],
                        'on-node-click': _0x5defef[_0x8a7b('0xe')],
                        'on-line-click': _0x5defef[_0x8a7b('0xf')]
                    }
                })], 0x1)]);
    }, i = [];
const c = {}, r = {}, n = {};
r[_0x8a7b('0x10')] = _0x8a7b('0x11');
r[_0x8a7b('0x12')] = {};
r[_0x8a7b('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: c
    };
};
r[_0x8a7b('0x14')] = function () {
    this.showGraph();
};
r[_0x8a7b('0x15')] = {};
r[_0x8a7b('0x15')][_0x8a7b('0x16')] = function () {
    var _0x59b316 = {
        dSpfO: _0x8a7b('0x17'),
        pdZeb: _0x8a7b('0x18'),
        Biibc: _0x8a7b('0x19'),
        gKIkr: _0x8a7b('0x1a'),
        LAQij: _0x8a7b('0x1b'),
        tVLql: _0x8a7b('0x1c')
    };
    const _0x4c40d8 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x59b316.dSpfO
            },
            {
                id: 'b',
                text: 'B',
                color: _0x59b316.pdZeb,
                fontColor: _0x59b316.dSpfO
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
                text: _0x59b316.Biibc,
                color: _0x59b316.pdZeb
            },
            {
                from: 'a',
                to: 'c',
                text: _0x59b316.gKIkr
            },
            {
                from: 'a',
                to: 'e',
                text: _0x59b316.LAQij
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x59b316.tVLql
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x4c40d8, _0x276a1c => {
    });
};
r[_0x8a7b('0x15')][_0x8a7b('0xe')] = function (_0x880998, _0x33021f) {
    var _0x45ba9a = { ttUud: _0x8a7b('0x1d') };
    console.log(_0x45ba9a.ttUud, _0x880998);
};
r[_0x8a7b('0x15')][_0x8a7b('0xf')] = function (_0x1d4435, _0x50f672, _0x4ea704) {
    var _0x1a2e8d = { wHdhl: _0x8a7b('0x1e') };
    console.log(_0x1a2e8d.wHdhl, _0x1d4435);
};
r[_0x8a7b('0x15')][_0x8a7b('0xd')] = function (_0x4ed1ec) {
    var _0x524254 = { VKNZs: _0x8a7b('0x1f') };
    const _0x442203 = this.$refs.graphRef.getInstance();
    console.log(_0x524254.VKNZs, _0x4ed1ec), _0x442203.clearChecked();
};
c[_0x8a7b('0x20')] = !0x1;
c[_0x8a7b('0x21')] = !0x0;
c[_0x8a7b('0x22')] = !0x0;
c[_0x8a7b('0x23')] = !0x0;
c[_0x8a7b('0x24')] = _0x8a7b('0x25');
c[_0x8a7b('0x26')] = 0x3;
c[_0x8a7b('0x27')] = _0x8a7b('0x28');
var s = _0x4fbefb(r, l, i, !0x1, h, null, null, null);
function h(_0x1ad071) {
    for (let _0x3a53d6 in n)
        this[_0x3a53d6] = n[_0x3a53d6];
}
const p = function () {
    return s[_0x8a7b('0x29')];
}();
export {
    p as default
};