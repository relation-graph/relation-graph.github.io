
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1175 = [
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
    'ZivCu',
    'qqSUg',
    'div',
    'TlPuE',
    'aUIbs',
    'calc(100vh\x20-\x2060px)',
    'rHSSj',
    'Mrnsq',
    'RelationGraph',
    'dJjTi',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick'
];
(function (_0x585e60, _0x57a30c) {
    var _0x323e47 = function (_0x10aea3) {
        while (--_0x10aea3) {
            _0x585e60['push'](_0x585e60['shift']());
        }
    };
    _0x323e47(++_0x57a30c);
}(_0x1175, 0x1c4));
var _0x935b = function (_0x244f1c, _0x1c8740) {
    _0x244f1c = _0x244f1c - 0x0;
    var _0x42eb50 = _0x1175[_0x244f1c];
    return _0x42eb50;
};
import { n as _0x55c69f } from './index-c847f99a.js';
var i = function () {
        var _0x31237f = {};
        _0x31237f[_0x935b('0x0')] = function (_0x528c4d, _0x523771, _0x3ab2c7) {
            return _0x528c4d(_0x523771, _0x3ab2c7);
        };
        _0x31237f[_0x935b('0x1')] = _0x935b('0x2');
        _0x31237f[_0x935b('0x3')] = function (_0x465cee, _0x1a1139, _0x202726, _0x186749, _0x5070b8) {
            return _0x465cee(_0x1a1139, _0x202726, _0x186749, _0x5070b8);
        };
        _0x31237f[_0x935b('0x4')] = _0x935b('0x5');
        _0x31237f[_0x935b('0x6')] = function (_0xd2358f, _0x752e23, _0x9b073) {
            return _0xd2358f(_0x752e23, _0x9b073);
        };
        _0x31237f[_0x935b('0x7')] = _0x935b('0x8');
        _0x31237f[_0x935b('0x9')] = _0x935b('0xa');
        var _0x3f4e94 = this, _0xace6c1 = _0x3f4e94[_0x935b('0xb')], _0x117256 = _0x3f4e94[_0x935b('0xc')]['_c'] || _0xace6c1;
        return _0x31237f[_0x935b('0x0')](_0x117256, _0x31237f[_0x935b('0x1')], [_0x31237f[_0x935b('0x3')](_0x117256, _0x31237f[_0x935b('0x1')], { 'staticStyle': { 'height': _0x31237f[_0x935b('0x4')] } }, [_0x31237f[_0x935b('0x6')](_0x117256, _0x31237f[_0x935b('0x7')], {
                    'ref': _0x31237f[_0x935b('0x9')],
                    'attrs': {
                        'options': _0x3f4e94[_0x935b('0xd')],
                        'on-node-click': _0x3f4e94[_0x935b('0xe')],
                        'on-line-click': _0x3f4e94[_0x935b('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, c = {}, n = {};
c[_0x935b('0x10')] = _0x935b('0x11');
c[_0x935b('0x12')] = {};
c[_0x935b('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: l
    };
};
c[_0x935b('0x14')] = function () {
    this.showSeeksGraph();
};
c[_0x935b('0x15')] = {};
c[_0x935b('0x15')][_0x935b('0x16')] = function () {
    var _0x38db4a = {
        uOleo: _0x935b('0x17'),
        zDLHu: _0x935b('0x18'),
        MnlGG: _0x935b('0x19'),
        oJMSK: _0x935b('0x1a'),
        ZZwpb: _0x935b('0x1b'),
        FXVMh: _0x935b('0x1c')
    };
    const _0x64179a = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x38db4a.uOleo
            },
            {
                id: 'b',
                text: 'B',
                color: _0x38db4a.zDLHu,
                fontColor: _0x38db4a.uOleo
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
                text: _0x38db4a.MnlGG,
                color: _0x38db4a.zDLHu
            },
            {
                from: 'a',
                to: 'c',
                text: _0x38db4a.oJMSK
            },
            {
                from: 'a',
                to: 'e',
                text: _0x38db4a.ZZwpb
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x38db4a.FXVMh
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x64179a, _0x4ba7e8 => {
    });
};
c[_0x935b('0x15')][_0x935b('0xe')] = function (_0x263851, _0x293d61) {
    var _0x5ae00e = { HWhRn: _0x935b('0x1d') };
    console.log(_0x5ae00e.HWhRn, _0x263851);
};
c[_0x935b('0x15')][_0x935b('0xf')] = function (_0x11a185, _0xbc3755, _0x5d091d) {
    var _0xf367bc = { IhWYo: _0x935b('0x1e') };
    console.log(_0xf367bc.IhWYo, _0x11a185);
};
l[_0x935b('0x1f')] = !0x0;
l[_0x935b('0x20')] = !0x0;
l[_0x935b('0x21')] = _0x935b('0x22');
var s = _0x55c69f(c, i, a, !0x1, h, null, null, null);
function h(_0x5c6972) {
    for (let _0x5d533b in n)
        this[_0x5d533b] = n[_0x5d533b];
}
const p = function () {
    return s[_0x935b('0x23')];
}();
export {
    p as default
};