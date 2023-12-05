
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3e87 = [
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
    'DomRd',
    'JfzZk',
    'div',
    'DKKyk',
    'rULEc',
    'calc(100vh\x20-\x2060px)',
    'tHxZx',
    'hdVeQ',
    'RelationGraph',
    'yKGwa',
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
    'yellow'
];
(function (_0x28b50a, _0x149dc3) {
    var _0x1e801f = function (_0x35deca) {
        while (--_0x35deca) {
            _0x28b50a['push'](_0x28b50a['shift']());
        }
    };
    _0x1e801f(++_0x149dc3);
}(_0x3e87, 0x195));
var _0x1e00 = function (_0x18a1fe, _0x4a7544) {
    _0x18a1fe = _0x18a1fe - 0x0;
    var _0x5c82c1 = _0x3e87[_0x18a1fe];
    return _0x5c82c1;
};
import { n as _0x214482 } from './index-f0317518.js';
var l = function () {
        var _0x17082a = {};
        _0x17082a[_0x1e00('0x0')] = function (_0x354cb1, _0x229ea6, _0x53d6b7) {
            return _0x354cb1(_0x229ea6, _0x53d6b7);
        };
        _0x17082a[_0x1e00('0x1')] = _0x1e00('0x2');
        _0x17082a[_0x1e00('0x3')] = function (_0x38006a, _0x324369, _0x13468f, _0x299f93, _0x2e20c8) {
            return _0x38006a(_0x324369, _0x13468f, _0x299f93, _0x2e20c8);
        };
        _0x17082a[_0x1e00('0x4')] = _0x1e00('0x5');
        _0x17082a[_0x1e00('0x6')] = function (_0x465361, _0x540c41, _0x35d442) {
            return _0x465361(_0x540c41, _0x35d442);
        };
        _0x17082a[_0x1e00('0x7')] = _0x1e00('0x8');
        _0x17082a[_0x1e00('0x9')] = _0x1e00('0xa');
        var _0x193fd3 = this, _0x43919e = _0x193fd3[_0x1e00('0xb')], _0x301412 = _0x193fd3[_0x1e00('0xc')]['_c'] || _0x43919e;
        return _0x17082a[_0x1e00('0x0')](_0x301412, _0x17082a[_0x1e00('0x1')], [_0x17082a[_0x1e00('0x3')](_0x301412, _0x17082a[_0x1e00('0x1')], { 'staticStyle': { 'height': _0x17082a[_0x1e00('0x4')] } }, [_0x17082a[_0x1e00('0x6')](_0x301412, _0x17082a[_0x1e00('0x7')], {
                    'ref': _0x17082a[_0x1e00('0x9')],
                    'attrs': {
                        'options': _0x193fd3[_0x1e00('0xd')],
                        'on-canvas-click': _0x193fd3[_0x1e00('0xe')],
                        'on-node-click': _0x193fd3[_0x1e00('0xf')],
                        'on-line-click': _0x193fd3[_0x1e00('0x10')]
                    }
                })], 0x1)]);
    }, i = [];
const c = {}, r = {}, n = {};
r[_0x1e00('0x11')] = _0x1e00('0x12');
r[_0x1e00('0x13')] = {};
r[_0x1e00('0x14')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: c
    };
};
r[_0x1e00('0x15')] = function () {
    this.showGraph();
};
r[_0x1e00('0x16')] = {};
r[_0x1e00('0x16')][_0x1e00('0x17')] = function () {
    var _0x85bedb = {
        Kjphs: _0x1e00('0x18'),
        eVydx: _0x1e00('0x19'),
        IcXqd: _0x1e00('0x1a'),
        ufXbu: _0x1e00('0x1b'),
        kPSFU: _0x1e00('0x1c'),
        RFeGb: _0x1e00('0x1d')
    };
    const _0x399be0 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x85bedb.Kjphs
            },
            {
                id: 'b',
                text: 'B',
                color: _0x85bedb.eVydx,
                fontColor: _0x85bedb.Kjphs
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
                text: _0x85bedb.IcXqd,
                color: _0x85bedb.eVydx
            },
            {
                from: 'a',
                to: 'c',
                text: _0x85bedb.ufXbu
            },
            {
                from: 'a',
                to: 'e',
                text: _0x85bedb.kPSFU
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x85bedb.RFeGb
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x399be0, _0x167fb8 => {
    });
};
r[_0x1e00('0x16')][_0x1e00('0xf')] = function (_0x57008f, _0x3c9de3) {
    var _0x2222b6 = { swteO: _0x1e00('0x1e') };
    console.log(_0x2222b6.swteO, _0x57008f);
};
r[_0x1e00('0x16')][_0x1e00('0x10')] = function (_0x204d77, _0x1b71a3, _0x8905fe) {
    var _0x5a54bb = { YSLOx: _0x1e00('0x1f') };
    console.log(_0x5a54bb.YSLOx, _0x204d77);
};
r[_0x1e00('0x16')][_0x1e00('0xe')] = function (_0x214a1d) {
    var _0x2676eb = { tBPlS: _0x1e00('0x20') };
    const _0xc427b2 = this.$refs.graphRef.getInstance();
    console.log(_0x2676eb.tBPlS, _0x214a1d), _0xc427b2.clearChecked();
};
c[_0x1e00('0x21')] = !0x1;
c[_0x1e00('0x22')] = !0x0;
c[_0x1e00('0x23')] = !0x0;
c[_0x1e00('0x24')] = !0x0;
c[_0x1e00('0x25')] = _0x1e00('0x26');
c[_0x1e00('0x27')] = 0x3;
c[_0x1e00('0x28')] = _0x1e00('0x29');
var s = _0x214482(r, l, i, !0x1, h, null, null, null);
function h(_0x1cd114) {
    for (let _0xb8fa28 in n)
        this[_0xb8fa28] = n[_0xb8fa28];
}
const p = function () {
    return s[_0x1e00('0x2a')];
}();
export {
    p as default
};