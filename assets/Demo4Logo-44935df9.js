
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2f6e = [
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    'Line\x20Text',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'ZXbzl',
    'WkhIG',
    'div',
    'dVufz',
    'nabvT',
    'calc(100vh\x20-\x2060px)',
    'mvYNm',
    'RelationGraph',
    'SpBFf',
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
    'border',
    'mounted'
];
(function (_0x55680c, _0x52a581) {
    var _0x3191b1 = function (_0x4df660) {
        while (--_0x4df660) {
            _0x55680c['push'](_0x55680c['shift']());
        }
    };
    _0x3191b1(++_0x52a581);
}(_0x2f6e, 0x153));
var _0x1ffa = function (_0x21c653, _0x32482f) {
    _0x21c653 = _0x21c653 - 0x0;
    var _0x3684c8 = _0x2f6e[_0x21c653];
    return _0x3684c8;
};
import { n as _0x4de131 } from './index-a76d1c04.js';
var a = function () {
        var _0x3f8770 = {};
        _0x3f8770[_0x1ffa('0x0')] = function (_0x3b2f48, _0xc4f361, _0x549e52) {
            return _0x3b2f48(_0xc4f361, _0x549e52);
        };
        _0x3f8770[_0x1ffa('0x1')] = _0x1ffa('0x2');
        _0x3f8770[_0x1ffa('0x3')] = function (_0xd950f1, _0x26f8c4, _0x3dcaa9, _0x5cc9a5, _0x51b27b) {
            return _0xd950f1(_0x26f8c4, _0x3dcaa9, _0x5cc9a5, _0x51b27b);
        };
        _0x3f8770[_0x1ffa('0x4')] = _0x1ffa('0x5');
        _0x3f8770[_0x1ffa('0x6')] = _0x1ffa('0x7');
        _0x3f8770[_0x1ffa('0x8')] = _0x1ffa('0x9');
        var _0x2f9e9b = this, _0x15fdd2 = _0x2f9e9b[_0x1ffa('0xa')], _0xd6bc3e = _0x2f9e9b[_0x1ffa('0xb')]['_c'] || _0x15fdd2;
        return _0x3f8770[_0x1ffa('0x0')](_0xd6bc3e, _0x3f8770[_0x1ffa('0x1')], [_0x3f8770[_0x1ffa('0x3')](_0xd6bc3e, _0x3f8770[_0x1ffa('0x1')], { 'staticStyle': { 'height': _0x3f8770[_0x1ffa('0x4')] } }, [_0x3f8770[_0x1ffa('0x0')](_0xd6bc3e, _0x3f8770[_0x1ffa('0x6')], {
                    'ref': _0x3f8770[_0x1ffa('0x8')],
                    'attrs': {
                        'options': _0x2f9e9b[_0x1ffa('0xc')],
                        'on-node-click': _0x2f9e9b[_0x1ffa('0xd')],
                        'on-line-click': _0x2f9e9b[_0x1ffa('0xe')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x1ffa('0xf')] = _0x1ffa('0x10');
r[_0x1ffa('0x11')] = {};
r[_0x1ffa('0x12')] = function () {
    var _0x5a7a87 = { XmiGb: _0x1ffa('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x5a7a87.XmiGb
        }
    };
};
r[_0x1ffa('0x14')] = function () {
    this.showGraph();
};
r[_0x1ffa('0x15')] = {};
r[_0x1ffa('0x15')][_0x1ffa('0x16')] = function () {
    var _0x34d430 = {
        ObvIs: _0x1ffa('0x17'),
        MpaWG: _0x1ffa('0x18'),
        PphzJ: _0x1ffa('0x19'),
        KAxss: _0x1ffa('0x1a')
    };
    const _0x28f7be = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x34d430.ObvIs
            },
            {
                id: 'b',
                text: 'B',
                color: _0x34d430.MpaWG,
                fontColor: _0x34d430.ObvIs
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
                text: _0x34d430.PphzJ,
                color: _0x34d430.MpaWG
            },
            {
                from: 'a',
                to: 'c',
                text: _0x34d430.PphzJ
            },
            {
                from: 'a',
                to: 'e',
                text: _0x34d430.PphzJ
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x34d430.KAxss
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x28f7be, _0x591fdd => {
    });
};
r[_0x1ffa('0x15')][_0x1ffa('0xd')] = function (_0x2c0a65, _0x4453a8) {
    var _0x4a2c59 = { Gfjtu: _0x1ffa('0x1b') };
    console.log(_0x4a2c59.Gfjtu, _0x2c0a65);
};
r[_0x1ffa('0x15')][_0x1ffa('0xe')] = function (_0x8c858e, _0x47fe8e, _0x5d30bd) {
    var _0x15c5e4 = { gabCN: _0x1ffa('0x1c') };
    console.log(_0x15c5e4.gabCN, _0x8c858e);
};
var c = _0x4de131(r, a, l, !0x1, s, null, null, null);
function s(_0xc697d9) {
    for (let _0x371e98 in n)
        this[_0x371e98] = n[_0x371e98];
}
const d = function () {
    return c[_0x1ffa('0x1d')];
}();
export {
    d as default
};