
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x585c = [
    'qHPmv',
    'div',
    'wWsEn',
    'xWezI',
    'calc(100vh\x20-\x2060px)',
    'RfhpR',
    'ZvhQZ',
    'RelationGraph',
    'hEJrQ',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data',
    '#ff0000',
    'fixed',
    'mounted',
    'methods',
    'showSeeksGraph',
    'M-2',
    'M-3',
    'M-4',
    'P-3',
    'P-4',
    'a\x20>\x20c',
    'rgba(30,\x20144,\x20255,\x201)',
    'c\x20>\x20a',
    'rgba(255,\x20140,\x200,\x201)',
    '双向箭头',
    '不显示箭头',
    '样式3',
    '#00ced1',
    '数据为：i\x20>\x20m\x20但显示为\x20m\x20>\x20i',
    '数据为：i\x20>\x20m',
    '这条关系线的文字非常长，但不顺着这条线走',
    '#ffd700',
    '这条关系线的文字非常长，它可以顺着这条线走',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'Sbjrj'
];
(function (_0x2256fa, _0x47e380) {
    var _0x131f05 = function (_0x9ae91b) {
        while (--_0x9ae91b) {
            _0x2256fa['push'](_0x2256fa['shift']());
        }
    };
    _0x131f05(++_0x47e380);
}(_0x585c, 0x19d));
var _0x5a7c = function (_0x12c8f2, _0x391c97) {
    _0x12c8f2 = _0x12c8f2 - 0x0;
    var _0x304e94 = _0x585c[_0x12c8f2];
    return _0x304e94;
};
import { n } from './index-023a64e5.js';
var i = function () {
        var _0x3e9dbe = {};
        _0x3e9dbe[_0x5a7c('0x0')] = function (_0x7adda7, _0x32e863, _0x226d6d) {
            return _0x7adda7(_0x32e863, _0x226d6d);
        };
        _0x3e9dbe[_0x5a7c('0x1')] = _0x5a7c('0x2');
        _0x3e9dbe[_0x5a7c('0x3')] = function (_0x4f8bed, _0x2b64ac, _0x169aae, _0x374443, _0x54996a) {
            return _0x4f8bed(_0x2b64ac, _0x169aae, _0x374443, _0x54996a);
        };
        _0x3e9dbe[_0x5a7c('0x4')] = _0x5a7c('0x5');
        _0x3e9dbe[_0x5a7c('0x6')] = function (_0x4cef3a, _0x5eab81, _0x52c618) {
            return _0x4cef3a(_0x5eab81, _0x52c618);
        };
        _0x3e9dbe[_0x5a7c('0x7')] = _0x5a7c('0x8');
        _0x3e9dbe[_0x5a7c('0x9')] = _0x5a7c('0xa');
        var _0x5cb4fa = this, _0x155779 = _0x5cb4fa[_0x5a7c('0xb')], _0x6790f6 = _0x5cb4fa[_0x5a7c('0xc')]['_c'] || _0x155779;
        return _0x3e9dbe[_0x5a7c('0x0')](_0x6790f6, _0x3e9dbe[_0x5a7c('0x1')], [_0x3e9dbe[_0x5a7c('0x3')](_0x6790f6, _0x3e9dbe[_0x5a7c('0x1')], { 'staticStyle': { 'height': _0x3e9dbe[_0x5a7c('0x4')] } }, [_0x3e9dbe[_0x5a7c('0x6')](_0x6790f6, _0x3e9dbe[_0x5a7c('0x7')], {
                    'ref': _0x3e9dbe[_0x5a7c('0x9')],
                    'attrs': {
                        'options': _0x5cb4fa[_0x5a7c('0xd')],
                        'on-node-click': _0x5cb4fa[_0x5a7c('0xe')],
                        'on-line-click': _0x5cb4fa[_0x5a7c('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const c = {}, r = {};
c[_0x5a7c('0x10')] = _0x5a7c('0x11');
c[_0x5a7c('0x12')] = {};
c[_0x5a7c('0x13')] = function () {
    var _0x46a8aa = {
        QcZzr: _0x5a7c('0x14'),
        lmGHr: _0x5a7c('0x15')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            defaultNodeBorderWidth: 0x0,
            checkedLineColor: _0x46a8aa.QcZzr,
            layouts: [{ layoutName: _0x46a8aa.lmGHr }]
        }
    };
};
c[_0x5a7c('0x16')] = function () {
    this.showSeeksGraph();
};
c[_0x5a7c('0x17')] = {};
c[_0x5a7c('0x17')][_0x5a7c('0x18')] = function () {
    var _0x3ca35e = {
        mLwhd: _0x5a7c('0x19'),
        DKQXN: _0x5a7c('0x1a'),
        oWlcz: _0x5a7c('0x1b'),
        YKLVI: _0x5a7c('0x1c'),
        VOCQY: _0x5a7c('0x1d'),
        VGvXP: _0x5a7c('0x1e'),
        DYkZB: _0x5a7c('0x1f'),
        nDNjS: _0x5a7c('0x20'),
        FZzoK: _0x5a7c('0x21'),
        qZGpv: _0x5a7c('0x22'),
        PYXlk: _0x5a7c('0x23'),
        Shytw: _0x5a7c('0x24'),
        FQbih: _0x5a7c('0x25'),
        UfJgS: _0x5a7c('0x26'),
        RnhQC: _0x5a7c('0x27'),
        yjLjB: _0x5a7c('0x28'),
        HmVsd: _0x5a7c('0x29'),
        evJGr: _0x5a7c('0x2a')
    };
    const _0x6a887a = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                x: 0x0,
                y: 0x0
            },
            {
                id: 'c',
                text: 'C',
                x: 0x15e,
                y: 0x5
            },
            {
                id: 'b',
                text: 'B',
                x: -0xdc,
                y: 0x0
            },
            {
                id: 'e',
                text: 'E',
                x: 0x7e,
                y: -0xab
            },
            {
                id: 'i',
                text: 'I',
                x: 0x1,
                y: 0xad
            },
            {
                id: 'm',
                text: 'M',
                x: 0x1a9,
                y: 0xab
            },
            {
                id: 'm2',
                text: _0x3ca35e.mLwhd,
                x: 0x1cb,
                y: -0xbd
            },
            {
                id: 'm3',
                text: _0x3ca35e.DKQXN,
                x: 0xec,
                y: -0xb1
            },
            {
                id: 'm4',
                text: _0x3ca35e.oWlcz,
                x: 0x162,
                y: -0xb7
            },
            {
                id: 'p3',
                text: _0x3ca35e.YKLVI,
                x: -0x182,
                y: -0x185
            },
            {
                id: 'p4',
                text: _0x3ca35e.VOCQY,
                x: 0x1c2,
                y: -0x1cb
            }
        ],
        lines: [
            {
                from: 'a',
                to: 'c',
                text: _0x3ca35e.VGvXP,
                color: _0x3ca35e.DYkZB
            },
            {
                from: 'c',
                to: 'a',
                text: _0x3ca35e.nDNjS,
                color: _0x3ca35e.FZzoK
            },
            {
                from: 'a',
                to: 'b',
                text: _0x3ca35e.qZGpv,
                showStartArrow: !0x0,
                showEndArrow: !0x0
            },
            {
                from: 'a',
                to: 'e',
                text: _0x3ca35e.PYXlk,
                isHideArrow: !0x0
            },
            {
                from: 'b',
                to: 'i',
                text: '折线',
                lineShape: 0x4
            },
            {
                from: 'c',
                to: 'm2',
                text: _0x3ca35e.Shytw,
                lineShape: 0x3,
                color: _0x3ca35e.FQbih
            },
            {
                from: 'c',
                to: 'm3',
                text: _0x3ca35e.Shytw,
                lineShape: 0x3,
                color: _0x3ca35e.FQbih
            },
            {
                from: 'c',
                to: 'm4',
                text: _0x3ca35e.Shytw,
                lineShape: 0x3,
                color: _0x3ca35e.FQbih
            },
            {
                from: 'i',
                to: 'm',
                text: _0x3ca35e.UfJgS,
                showStartArrow: !0x0,
                showEndArrow: !0x1,
                color: _0x3ca35e.FQbih
            },
            {
                from: 'i',
                to: 'm',
                text: _0x3ca35e.RnhQC,
                showStartArrow: !0x1,
                showEndArrow: !0x0,
                color: _0x3ca35e.FZzoK
            },
            {
                from: 'e',
                to: 'p3',
                text: _0x3ca35e.yjLjB,
                lineShape: 0x5,
                color: _0x3ca35e.HmVsd
            },
            {
                from: 'e',
                to: 'p4',
                text: _0x3ca35e.evJGr,
                useTextPath: !0x0,
                lineShape: 0x5,
                color: _0x3ca35e.HmVsd
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x6a887a, _0x19a430 => {
    });
};
c[_0x5a7c('0x17')][_0x5a7c('0xe')] = function (_0x4d8980, _0x1df2a5) {
    var _0x148eb2 = { sSNyp: _0x5a7c('0x2b') };
    console.log(_0x148eb2.sSNyp, _0x4d8980);
};
c[_0x5a7c('0x17')][_0x5a7c('0xf')] = function (_0x19c373, _0x4bfd9f, _0x3156e5) {
    var _0x4857d0 = { XeWkW: _0x5a7c('0x2c') };
    console.log(_0x4857d0.XeWkW, _0x19c373, _0x4bfd9f);
};
var s = n(c, i, a, !0x1, l, null, null, null);
function l(_0x49ddaf) {
    for (let _0x2bf748 in r)
        this[_0x2bf748] = r[_0x2bf748];
}
const m = function () {
    return s[_0x5a7c('0x2d')];
}();
export {
    m as default
};