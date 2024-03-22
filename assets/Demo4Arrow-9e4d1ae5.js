
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3505 = [
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
    'allowSwitchLineShape',
    'allowSwitchJunctionPoint',
    'defaultJunctionPoint',
    'border',
    'exports',
    'gDJBr',
    'RJMyN',
    'div',
    'vLqdX',
    'VWECh',
    'calc(100vh\x20-\x2060px)',
    'MxLdq',
    'RelationGraph',
    'fTXWy',
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
(function (_0xee66c, _0x5e5273) {
    var _0x9e6e69 = function (_0x327b17) {
        while (--_0x327b17) {
            _0xee66c['push'](_0xee66c['shift']());
        }
    };
    _0x9e6e69(++_0x5e5273);
}(_0x3505, 0xe2));
var _0x5144 = function (_0x1ae336, _0x352d3c) {
    _0x1ae336 = _0x1ae336 - 0x0;
    var _0x99a6d5 = _0x3505[_0x1ae336];
    return _0x99a6d5;
};
import { n as _0x5b1126 } from './index-3a2b9e72.js';
var i = function () {
        var _0x240b0e = {};
        _0x240b0e[_0x5144('0x0')] = function (_0x2b772f, _0x18667c, _0x1e3dbf) {
            return _0x2b772f(_0x18667c, _0x1e3dbf);
        };
        _0x240b0e[_0x5144('0x1')] = _0x5144('0x2');
        _0x240b0e[_0x5144('0x3')] = function (_0xf612e6, _0x1d60b8, _0x4b1541, _0x2be2c0, _0x235df7) {
            return _0xf612e6(_0x1d60b8, _0x4b1541, _0x2be2c0, _0x235df7);
        };
        _0x240b0e[_0x5144('0x4')] = _0x5144('0x5');
        _0x240b0e[_0x5144('0x6')] = _0x5144('0x7');
        _0x240b0e[_0x5144('0x8')] = _0x5144('0x9');
        var _0x3be298 = this, _0x8a1be0 = _0x3be298[_0x5144('0xa')], _0x2ea47f = _0x3be298[_0x5144('0xb')]['_c'] || _0x8a1be0;
        return _0x240b0e[_0x5144('0x0')](_0x2ea47f, _0x240b0e[_0x5144('0x1')], [_0x240b0e[_0x5144('0x3')](_0x2ea47f, _0x240b0e[_0x5144('0x1')], { 'staticStyle': { 'height': _0x240b0e[_0x5144('0x4')] } }, [_0x240b0e[_0x5144('0x0')](_0x2ea47f, _0x240b0e[_0x5144('0x6')], {
                    'ref': _0x240b0e[_0x5144('0x8')],
                    'attrs': {
                        'options': _0x3be298[_0x5144('0xc')],
                        'on-node-click': _0x3be298[_0x5144('0xd')],
                        'on-line-click': _0x3be298[_0x5144('0xe')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, c = {}, n = {};
c[_0x5144('0xf')] = _0x5144('0x10');
c[_0x5144('0x11')] = {};
c[_0x5144('0x12')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: l
    };
};
c[_0x5144('0x13')] = function () {
    this.showSeeksGraph();
};
c[_0x5144('0x14')] = {};
c[_0x5144('0x14')][_0x5144('0x15')] = function () {
    var _0x35c8ff = {
        OEeEP: _0x5144('0x16'),
        IEVpz: _0x5144('0x17'),
        XeaXw: _0x5144('0x18'),
        BcvqM: _0x5144('0x19'),
        Ogcdu: _0x5144('0x1a'),
        fvUTn: _0x5144('0x1b')
    };
    const _0x39c5b8 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x35c8ff.OEeEP
            },
            {
                id: 'b',
                text: 'B',
                color: _0x35c8ff.IEVpz,
                fontColor: _0x35c8ff.OEeEP
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
                text: _0x35c8ff.XeaXw,
                color: _0x35c8ff.IEVpz
            },
            {
                from: 'a',
                to: 'c',
                text: _0x35c8ff.BcvqM
            },
            {
                from: 'a',
                to: 'e',
                text: _0x35c8ff.Ogcdu
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x35c8ff.fvUTn
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x39c5b8, _0x403f54 => {
    });
};
c[_0x5144('0x14')][_0x5144('0xd')] = function (_0x3f1c35, _0x599ecb) {
    var _0x3c5cde = { jFnqD: _0x5144('0x1c') };
    console.log(_0x3c5cde.jFnqD, _0x3f1c35);
};
c[_0x5144('0x14')][_0x5144('0xe')] = function (_0x6c7bec, _0x4e09b7, _0x5f28e7) {
    var _0x1c37c6 = { yhAAd: _0x5144('0x1d') };
    console.log(_0x1c37c6.yhAAd, _0x6c7bec);
};
l[_0x5144('0x1e')] = !0x0;
l[_0x5144('0x1f')] = !0x0;
l[_0x5144('0x20')] = _0x5144('0x21');
var s = _0x5b1126(c, i, a, !0x1, h, null, null, null);
function h(_0x1e795e) {
    for (let _0x1b0373 in n)
        this[_0x1b0373] = n[_0x1b0373];
}
const p = function () {
    return s[_0x5144('0x22')];
}();
export {
    p as default
};