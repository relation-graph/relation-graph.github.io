
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x408b = [
    'name',
    'Demo',
    'components',
    'data',
    'border',
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
    'pFPqQ',
    'ekhrb',
    'div',
    'wjZzR',
    'PfTme',
    'calc(100vh\x20-\x2060px)',
    'uzsaA',
    'RelationGraph',
    'KjKJZ',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick'
];
(function (_0xa27044, _0x4fe105) {
    var _0x3b3fbf = function (_0x515026) {
        while (--_0x515026) {
            _0xa27044['push'](_0xa27044['shift']());
        }
    };
    _0x3b3fbf(++_0x4fe105);
}(_0x408b, 0xe1));
var _0x381d = function (_0x23e34f, _0x9cbddb) {
    _0x23e34f = _0x23e34f - 0x0;
    var _0x5bd322 = _0x408b[_0x23e34f];
    return _0x5bd322;
};
import { n as _0x12b5b1 } from './index-973ba694.js';
var a = function () {
        var _0x2918e3 = {};
        _0x2918e3[_0x381d('0x0')] = function (_0x41ffd8, _0x4b1828, _0x444470) {
            return _0x41ffd8(_0x4b1828, _0x444470);
        };
        _0x2918e3[_0x381d('0x1')] = _0x381d('0x2');
        _0x2918e3[_0x381d('0x3')] = function (_0x47e652, _0x5aa6cb, _0x482d1a, _0x16ab7e, _0x548eef) {
            return _0x47e652(_0x5aa6cb, _0x482d1a, _0x16ab7e, _0x548eef);
        };
        _0x2918e3[_0x381d('0x4')] = _0x381d('0x5');
        _0x2918e3[_0x381d('0x6')] = _0x381d('0x7');
        _0x2918e3[_0x381d('0x8')] = _0x381d('0x9');
        var _0x52c101 = this, _0x3d1a03 = _0x52c101[_0x381d('0xa')], _0x1e778f = _0x52c101[_0x381d('0xb')]['_c'] || _0x3d1a03;
        return _0x2918e3[_0x381d('0x0')](_0x1e778f, _0x2918e3[_0x381d('0x1')], [_0x2918e3[_0x381d('0x3')](_0x1e778f, _0x2918e3[_0x381d('0x1')], { 'staticStyle': { 'height': _0x2918e3[_0x381d('0x4')] } }, [_0x2918e3[_0x381d('0x0')](_0x1e778f, _0x2918e3[_0x381d('0x6')], {
                    'ref': _0x2918e3[_0x381d('0x8')],
                    'attrs': {
                        'options': _0x52c101[_0x381d('0xc')],
                        'on-node-click': _0x52c101[_0x381d('0xd')],
                        'on-line-click': _0x52c101[_0x381d('0xe')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x381d('0xf')] = _0x381d('0x10');
r[_0x381d('0x11')] = {};
r[_0x381d('0x12')] = function () {
    var _0x253d84 = { ZrmWs: _0x381d('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x253d84.ZrmWs
        }
    };
};
r[_0x381d('0x14')] = function () {
    this.showGraph();
};
r[_0x381d('0x15')] = {};
r[_0x381d('0x15')][_0x381d('0x16')] = function () {
    var _0xb0c1a4 = {
        Ibulx: _0x381d('0x17'),
        JGOMH: _0x381d('0x18'),
        voPXr: _0x381d('0x19'),
        fMZsC: _0x381d('0x1a')
    };
    const _0x14dd82 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0xb0c1a4.Ibulx
            },
            {
                id: 'b',
                text: 'B',
                color: _0xb0c1a4.JGOMH,
                fontColor: _0xb0c1a4.Ibulx
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
                text: _0xb0c1a4.voPXr,
                color: _0xb0c1a4.JGOMH
            },
            {
                from: 'a',
                to: 'c',
                text: _0xb0c1a4.voPXr
            },
            {
                from: 'a',
                to: 'e',
                text: _0xb0c1a4.voPXr
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0xb0c1a4.fMZsC
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x14dd82, _0x2727b7 => {
    });
};
r[_0x381d('0x15')][_0x381d('0xd')] = function (_0x5c41cc, _0x2c1950) {
    var _0x446232 = { yFJPh: _0x381d('0x1b') };
    console.log(_0x446232.yFJPh, _0x5c41cc);
};
r[_0x381d('0x15')][_0x381d('0xe')] = function (_0x38f7e4, _0x337ee8, _0x5b7218) {
    var _0x11461e = { JUJmn: _0x381d('0x1c') };
    console.log(_0x11461e.JUJmn, _0x38f7e4);
};
var c = _0x12b5b1(r, a, l, !0x1, s, null, null, null);
function s(_0x344e0f) {
    for (let _0x439316 in n)
        this[_0x439316] = n[_0x439316];
}
const d = function () {
    return c[_0x381d('0x1d')];
}();
export {
    d as default
};