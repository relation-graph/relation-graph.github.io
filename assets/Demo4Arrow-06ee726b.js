
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x41fe = [
    'components',
    'data',
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
    'SGCIK',
    'IZJMd',
    'div',
    'XKxxq',
    'PlQTc',
    'calc(100vh\x20-\x2060px)',
    'OByyv',
    'RelationGraph',
    'kRwzk',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo'
];
(function (_0xada2ef, _0x55bf6b) {
    var _0x122330 = function (_0x18b501) {
        while (--_0x18b501) {
            _0xada2ef['push'](_0xada2ef['shift']());
        }
    };
    _0x122330(++_0x55bf6b);
}(_0x41fe, 0x107));
var _0x277b = function (_0x1a026c, _0x2492de) {
    _0x1a026c = _0x1a026c - 0x0;
    var _0x2d8f05 = _0x41fe[_0x1a026c];
    return _0x2d8f05;
};
import { n as _0x3c67e9 } from './index-ab96dab3.js';
var i = function () {
        var _0x387299 = {};
        _0x387299[_0x277b('0x0')] = function (_0x1c08e0, _0x14bbc2, _0x528fce) {
            return _0x1c08e0(_0x14bbc2, _0x528fce);
        };
        _0x387299[_0x277b('0x1')] = _0x277b('0x2');
        _0x387299[_0x277b('0x3')] = function (_0x2418b8, _0x500c47, _0x3c4503, _0x384f15, _0x3a5773) {
            return _0x2418b8(_0x500c47, _0x3c4503, _0x384f15, _0x3a5773);
        };
        _0x387299[_0x277b('0x4')] = _0x277b('0x5');
        _0x387299[_0x277b('0x6')] = _0x277b('0x7');
        _0x387299[_0x277b('0x8')] = _0x277b('0x9');
        var _0x1332fc = this, _0x3d366f = _0x1332fc[_0x277b('0xa')], _0x37d8b6 = _0x1332fc[_0x277b('0xb')]['_c'] || _0x3d366f;
        return _0x387299[_0x277b('0x0')](_0x37d8b6, _0x387299[_0x277b('0x1')], [_0x387299[_0x277b('0x3')](_0x37d8b6, _0x387299[_0x277b('0x1')], { 'staticStyle': { 'height': _0x387299[_0x277b('0x4')] } }, [_0x387299[_0x277b('0x0')](_0x37d8b6, _0x387299[_0x277b('0x6')], {
                    'ref': _0x387299[_0x277b('0x8')],
                    'attrs': {
                        'options': _0x1332fc[_0x277b('0xc')],
                        'on-node-click': _0x1332fc[_0x277b('0xd')],
                        'on-line-click': _0x1332fc[_0x277b('0xe')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, c = {}, n = {};
c[_0x277b('0xf')] = _0x277b('0x10');
c[_0x277b('0x11')] = {};
c[_0x277b('0x12')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: l
    };
};
c[_0x277b('0x13')] = function () {
    this.showSeeksGraph();
};
c[_0x277b('0x14')] = {};
c[_0x277b('0x14')][_0x277b('0x15')] = function () {
    var _0x44837c = {
        JUrUi: _0x277b('0x16'),
        uJKcd: _0x277b('0x17'),
        xTJyg: _0x277b('0x18'),
        iLVAU: _0x277b('0x19'),
        xfQPv: _0x277b('0x1a'),
        lZCog: _0x277b('0x1b')
    };
    const _0x48878b = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x44837c.JUrUi
            },
            {
                id: 'b',
                text: 'B',
                color: _0x44837c.uJKcd,
                fontColor: _0x44837c.JUrUi
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
                text: _0x44837c.xTJyg,
                color: _0x44837c.uJKcd
            },
            {
                from: 'a',
                to: 'c',
                text: _0x44837c.iLVAU
            },
            {
                from: 'a',
                to: 'e',
                text: _0x44837c.xfQPv
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x44837c.lZCog
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x48878b, _0x380357 => {
    });
};
c[_0x277b('0x14')][_0x277b('0xd')] = function (_0x5571c9, _0x377341) {
    var _0x1a313b = { HBWje: _0x277b('0x1c') };
    console.log(_0x1a313b.HBWje, _0x5571c9);
};
c[_0x277b('0x14')][_0x277b('0xe')] = function (_0x3b4384, _0x37e73e, _0x363153) {
    var _0x19d344 = { mAiIv: _0x277b('0x1d') };
    console.log(_0x19d344.mAiIv, _0x3b4384);
};
l[_0x277b('0x1e')] = !0x0;
l[_0x277b('0x1f')] = !0x0;
l[_0x277b('0x20')] = _0x277b('0x21');
var s = _0x3c67e9(c, i, a, !0x1, h, null, null, null);
function h(_0x3d022b) {
    for (let _0x59892d in n)
        this[_0x59892d] = n[_0x59892d];
}
const p = function () {
    return s[_0x277b('0x22')];
}();
export {
    p as default
};