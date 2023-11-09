
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x55df = [
    'name',
    'Demo',
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
    'lkQgN',
    'pdrTI',
    'div',
    'QDexP',
    'NMCTD',
    'calc(100vh\x20-\x2060px)',
    'iTEmn',
    'PIGIf',
    'RelationGraph',
    'vbVwD',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick'
];
(function (_0x4d60e9, _0x3a9905) {
    var _0x52f930 = function (_0x40bba1) {
        while (--_0x40bba1) {
            _0x4d60e9['push'](_0x4d60e9['shift']());
        }
    };
    _0x52f930(++_0x3a9905);
}(_0x55df, 0x134));
var _0x19fc = function (_0x3a8259, _0x3f66d9) {
    _0x3a8259 = _0x3a8259 - 0x0;
    var _0x1b4f89 = _0x55df[_0x3a8259];
    return _0x1b4f89;
};
import { n as _0x1e5b95 } from './index-c396e703.js';
var i = function () {
        var _0x18c54e = {};
        _0x18c54e[_0x19fc('0x0')] = function (_0x25be43, _0x2646de, _0x465261) {
            return _0x25be43(_0x2646de, _0x465261);
        };
        _0x18c54e[_0x19fc('0x1')] = _0x19fc('0x2');
        _0x18c54e[_0x19fc('0x3')] = function (_0x3bd7d5, _0x3e6d44, _0x27ebf5, _0x178dfc, _0x42c275) {
            return _0x3bd7d5(_0x3e6d44, _0x27ebf5, _0x178dfc, _0x42c275);
        };
        _0x18c54e[_0x19fc('0x4')] = _0x19fc('0x5');
        _0x18c54e[_0x19fc('0x6')] = function (_0x219216, _0xc7f39e, _0x2f3d53) {
            return _0x219216(_0xc7f39e, _0x2f3d53);
        };
        _0x18c54e[_0x19fc('0x7')] = _0x19fc('0x8');
        _0x18c54e[_0x19fc('0x9')] = _0x19fc('0xa');
        var _0x3d7116 = this, _0xd7f48a = _0x3d7116[_0x19fc('0xb')], _0x1d7191 = _0x3d7116[_0x19fc('0xc')]['_c'] || _0xd7f48a;
        return _0x18c54e[_0x19fc('0x0')](_0x1d7191, _0x18c54e[_0x19fc('0x1')], [_0x18c54e[_0x19fc('0x3')](_0x1d7191, _0x18c54e[_0x19fc('0x1')], { 'staticStyle': { 'height': _0x18c54e[_0x19fc('0x4')] } }, [_0x18c54e[_0x19fc('0x6')](_0x1d7191, _0x18c54e[_0x19fc('0x7')], {
                    'ref': _0x18c54e[_0x19fc('0x9')],
                    'attrs': {
                        'options': _0x3d7116[_0x19fc('0xd')],
                        'on-node-click': _0x3d7116[_0x19fc('0xe')],
                        'on-line-click': _0x3d7116[_0x19fc('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, c = {}, n = {};
c[_0x19fc('0x10')] = _0x19fc('0x11');
c[_0x19fc('0x12')] = {};
c[_0x19fc('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: l
    };
};
c[_0x19fc('0x14')] = function () {
    this.showSeeksGraph();
};
c[_0x19fc('0x15')] = {};
c[_0x19fc('0x15')][_0x19fc('0x16')] = function () {
    var _0x277128 = {
        eRNjP: _0x19fc('0x17'),
        BDFSF: _0x19fc('0x18'),
        qgwuy: _0x19fc('0x19'),
        jgOwv: _0x19fc('0x1a'),
        wuEmc: _0x19fc('0x1b'),
        wLmsz: _0x19fc('0x1c')
    };
    const _0x17a6ee = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x277128.eRNjP
            },
            {
                id: 'b',
                text: 'B',
                color: _0x277128.BDFSF,
                fontColor: _0x277128.eRNjP
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
                text: _0x277128.qgwuy,
                color: _0x277128.BDFSF
            },
            {
                from: 'a',
                to: 'c',
                text: _0x277128.jgOwv
            },
            {
                from: 'a',
                to: 'e',
                text: _0x277128.wuEmc
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x277128.wLmsz
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x17a6ee, _0x34f848 => {
    });
};
c[_0x19fc('0x15')][_0x19fc('0xe')] = function (_0x5dff21, _0x263afa) {
    var _0x319fa3 = { AuBtc: _0x19fc('0x1d') };
    console.log(_0x319fa3.AuBtc, _0x5dff21);
};
c[_0x19fc('0x15')][_0x19fc('0xf')] = function (_0x11e79a, _0x363e5c, _0x29a0ca) {
    var _0x4b0887 = { XXFPZ: _0x19fc('0x1e') };
    console.log(_0x4b0887.XXFPZ, _0x11e79a);
};
l[_0x19fc('0x1f')] = !0x0;
l[_0x19fc('0x20')] = !0x0;
l[_0x19fc('0x21')] = _0x19fc('0x22');
var s = _0x1e5b95(c, i, a, !0x1, h, null, null, null);
function h(_0x539b58) {
    for (let _0x211d81 in n)
        this[_0x211d81] = n[_0x211d81];
}
const p = function () {
    return s[_0x19fc('0x23')];
}();
export {
    p as default
};