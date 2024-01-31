
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4277 = [
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
    'kCeRc',
    'KmrVW',
    'div',
    'YQrIT',
    'gZqew',
    'calc(100vh\x20-\x2060px)',
    'thVaf',
    'RelationGraph',
    'ESzUk',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name'
];
(function (_0xb9d40e, _0x2ef731) {
    var _0x2d401d = function (_0x93ab5a) {
        while (--_0x93ab5a) {
            _0xb9d40e['push'](_0xb9d40e['shift']());
        }
    };
    _0x2d401d(++_0x2ef731);
}(_0x4277, 0xe5));
var _0x221b = function (_0x582759, _0x304e3f) {
    _0x582759 = _0x582759 - 0x0;
    var _0x505b49 = _0x4277[_0x582759];
    return _0x505b49;
};
import { n as _0x46ce3b } from './index-36eaf5cf.js';
var i = function () {
        var _0x2c8c3f = {};
        _0x2c8c3f[_0x221b('0x0')] = function (_0x8776fd, _0x5d5649, _0x4cc9ba) {
            return _0x8776fd(_0x5d5649, _0x4cc9ba);
        };
        _0x2c8c3f[_0x221b('0x1')] = _0x221b('0x2');
        _0x2c8c3f[_0x221b('0x3')] = function (_0x4c328b, _0x16b099, _0x5076c1, _0x11a411, _0x145863) {
            return _0x4c328b(_0x16b099, _0x5076c1, _0x11a411, _0x145863);
        };
        _0x2c8c3f[_0x221b('0x4')] = _0x221b('0x5');
        _0x2c8c3f[_0x221b('0x6')] = _0x221b('0x7');
        _0x2c8c3f[_0x221b('0x8')] = _0x221b('0x9');
        var _0x19eb5e = this, _0x25b94a = _0x19eb5e[_0x221b('0xa')], _0x36f88c = _0x19eb5e[_0x221b('0xb')]['_c'] || _0x25b94a;
        return _0x2c8c3f[_0x221b('0x0')](_0x36f88c, _0x2c8c3f[_0x221b('0x1')], [_0x2c8c3f[_0x221b('0x3')](_0x36f88c, _0x2c8c3f[_0x221b('0x1')], { 'staticStyle': { 'height': _0x2c8c3f[_0x221b('0x4')] } }, [_0x2c8c3f[_0x221b('0x0')](_0x36f88c, _0x2c8c3f[_0x221b('0x6')], {
                    'ref': _0x2c8c3f[_0x221b('0x8')],
                    'attrs': {
                        'options': _0x19eb5e[_0x221b('0xc')],
                        'on-node-click': _0x19eb5e[_0x221b('0xd')],
                        'on-line-click': _0x19eb5e[_0x221b('0xe')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, c = {}, n = {};
c[_0x221b('0xf')] = _0x221b('0x10');
c[_0x221b('0x11')] = {};
c[_0x221b('0x12')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: l
    };
};
c[_0x221b('0x13')] = function () {
    this.showSeeksGraph();
};
c[_0x221b('0x14')] = {};
c[_0x221b('0x14')][_0x221b('0x15')] = function () {
    var _0x71d10a = {
        LiEnl: _0x221b('0x16'),
        XyThS: _0x221b('0x17'),
        yXDaf: _0x221b('0x18'),
        vrZpP: _0x221b('0x19'),
        bsqIr: _0x221b('0x1a'),
        mTpol: _0x221b('0x1b')
    };
    const _0xd78205 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x71d10a.LiEnl
            },
            {
                id: 'b',
                text: 'B',
                color: _0x71d10a.XyThS,
                fontColor: _0x71d10a.LiEnl
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
                text: _0x71d10a.yXDaf,
                color: _0x71d10a.XyThS
            },
            {
                from: 'a',
                to: 'c',
                text: _0x71d10a.vrZpP
            },
            {
                from: 'a',
                to: 'e',
                text: _0x71d10a.bsqIr
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x71d10a.mTpol
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0xd78205, _0x4f00b5 => {
    });
};
c[_0x221b('0x14')][_0x221b('0xd')] = function (_0x42505c, _0x1c4115) {
    var _0x15b39c = { isGuh: _0x221b('0x1c') };
    console.log(_0x15b39c.isGuh, _0x42505c);
};
c[_0x221b('0x14')][_0x221b('0xe')] = function (_0x136cdf, _0x567840, _0x1fcfad) {
    var _0x2af6cb = { mTRcT: _0x221b('0x1d') };
    console.log(_0x2af6cb.mTRcT, _0x136cdf);
};
l[_0x221b('0x1e')] = !0x0;
l[_0x221b('0x1f')] = !0x0;
l[_0x221b('0x20')] = _0x221b('0x21');
var s = _0x46ce3b(c, i, a, !0x1, h, null, null, null);
function h(_0x5a7791) {
    for (let _0x1ee344 in n)
        this[_0x1ee344] = n[_0x1ee344];
}
const p = function () {
    return s[_0x221b('0x22')];
}();
export {
    p as default
};