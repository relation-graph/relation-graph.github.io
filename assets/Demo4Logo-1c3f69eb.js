
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xd494 = [
    'mounted',
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    'Line\x20Text',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'oRVQG',
    'fEaEc',
    'div',
    'noPHb',
    'HWmTc',
    'calc(100vh\x20-\x2060px)',
    'qiMAL',
    'RelationGraph',
    'rBfKl',
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
    'border'
];
(function (_0x52f700, _0x2e4613) {
    var _0x4091b8 = function (_0x4318db) {
        while (--_0x4318db) {
            _0x52f700['push'](_0x52f700['shift']());
        }
    };
    _0x4091b8(++_0x2e4613);
}(_0xd494, 0xbe));
var _0x235a = function (_0x4c4aa7, _0x271495) {
    _0x4c4aa7 = _0x4c4aa7 - 0x0;
    var _0x216590 = _0xd494[_0x4c4aa7];
    return _0x216590;
};
import { n as _0x5b337a } from './index-f64bbabb.js';
var a = function () {
        var _0x18f156 = {};
        _0x18f156[_0x235a('0x0')] = function (_0x171fc0, _0x591dcd, _0x3951ea) {
            return _0x171fc0(_0x591dcd, _0x3951ea);
        };
        _0x18f156[_0x235a('0x1')] = _0x235a('0x2');
        _0x18f156[_0x235a('0x3')] = function (_0x1bd477, _0x3b1176, _0x232dde, _0x173698, _0x4a95d8) {
            return _0x1bd477(_0x3b1176, _0x232dde, _0x173698, _0x4a95d8);
        };
        _0x18f156[_0x235a('0x4')] = _0x235a('0x5');
        _0x18f156[_0x235a('0x6')] = _0x235a('0x7');
        _0x18f156[_0x235a('0x8')] = _0x235a('0x9');
        var _0x10106e = this, _0x39ecb4 = _0x10106e[_0x235a('0xa')], _0x59459b = _0x10106e[_0x235a('0xb')]['_c'] || _0x39ecb4;
        return _0x18f156[_0x235a('0x0')](_0x59459b, _0x18f156[_0x235a('0x1')], [_0x18f156[_0x235a('0x3')](_0x59459b, _0x18f156[_0x235a('0x1')], { 'staticStyle': { 'height': _0x18f156[_0x235a('0x4')] } }, [_0x18f156[_0x235a('0x0')](_0x59459b, _0x18f156[_0x235a('0x6')], {
                    'ref': _0x18f156[_0x235a('0x8')],
                    'attrs': {
                        'options': _0x10106e[_0x235a('0xc')],
                        'on-node-click': _0x10106e[_0x235a('0xd')],
                        'on-line-click': _0x10106e[_0x235a('0xe')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x235a('0xf')] = _0x235a('0x10');
r[_0x235a('0x11')] = {};
r[_0x235a('0x12')] = function () {
    var _0x289331 = { nctln: _0x235a('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x289331.nctln
        }
    };
};
r[_0x235a('0x14')] = function () {
    this.showGraph();
};
r[_0x235a('0x15')] = {};
r[_0x235a('0x15')][_0x235a('0x16')] = function () {
    var _0x26cd0b = {
        eyGcl: _0x235a('0x17'),
        wyNmv: _0x235a('0x18'),
        dWtub: _0x235a('0x19'),
        JbuxT: _0x235a('0x1a')
    };
    const _0x7d4043 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x26cd0b.eyGcl
            },
            {
                id: 'b',
                text: 'B',
                color: _0x26cd0b.wyNmv,
                fontColor: _0x26cd0b.eyGcl
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
                text: _0x26cd0b.dWtub,
                color: _0x26cd0b.wyNmv
            },
            {
                from: 'a',
                to: 'c',
                text: _0x26cd0b.dWtub
            },
            {
                from: 'a',
                to: 'e',
                text: _0x26cd0b.dWtub
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x26cd0b.JbuxT
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x7d4043, _0x56d8b6 => {
    });
};
r[_0x235a('0x15')][_0x235a('0xd')] = function (_0x46bd08, _0x3a36ee) {
    var _0x1c1a1b = { Oidvg: _0x235a('0x1b') };
    console.log(_0x1c1a1b.Oidvg, _0x46bd08);
};
r[_0x235a('0x15')][_0x235a('0xe')] = function (_0x1b6a3f, _0x23881d, _0x1f3cfb) {
    var _0x44d7da = { RZkPo: _0x235a('0x1c') };
    console.log(_0x44d7da.RZkPo, _0x1b6a3f);
};
var c = _0x5b337a(r, a, l, !0x1, s, null, null, null);
function s(_0x5631ba) {
    for (let _0x1f7f48 in n)
        this[_0x1f7f48] = n[_0x1f7f48];
}
const d = function () {
    return c[_0x235a('0x1d')];
}();
export {
    d as default
};