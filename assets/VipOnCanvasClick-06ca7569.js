
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x84f3 = [
    'components',
    'data',
    'mounted',
    'methods',
    'showGraph',
    'yellow',
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
    'wagJJ',
    'CUtko',
    'div',
    'xNjAA',
    'JThFp',
    'calc(100vh\x20-\x2060px)',
    'mEOIk',
    'ZOWOG',
    'RelationGraph',
    'PNqBC',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onCanvasClick',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo'
];
(function (_0x1b1729, _0x17741e) {
    var _0x53a594 = function (_0x589da7) {
        while (--_0x589da7) {
            _0x1b1729['push'](_0x1b1729['shift']());
        }
    };
    _0x53a594(++_0x17741e);
}(_0x84f3, 0x145));
var _0x33c7 = function (_0x4997e4, _0x1cf9ff) {
    _0x4997e4 = _0x4997e4 - 0x0;
    var _0x243940 = _0x84f3[_0x4997e4];
    return _0x243940;
};
import { n as _0x1eee90 } from './index-cdb280d3.js';
var l = function () {
        var _0x840a2 = {};
        _0x840a2[_0x33c7('0x0')] = function (_0x1be786, _0x7a8209, _0x45f572) {
            return _0x1be786(_0x7a8209, _0x45f572);
        };
        _0x840a2[_0x33c7('0x1')] = _0x33c7('0x2');
        _0x840a2[_0x33c7('0x3')] = function (_0x34c5e1, _0x5607c1, _0x4527f0, _0x4b26fa, _0x14d0fd) {
            return _0x34c5e1(_0x5607c1, _0x4527f0, _0x4b26fa, _0x14d0fd);
        };
        _0x840a2[_0x33c7('0x4')] = _0x33c7('0x5');
        _0x840a2[_0x33c7('0x6')] = function (_0x58bcf1, _0x10779b, _0x5246b8) {
            return _0x58bcf1(_0x10779b, _0x5246b8);
        };
        _0x840a2[_0x33c7('0x7')] = _0x33c7('0x8');
        _0x840a2[_0x33c7('0x9')] = _0x33c7('0xa');
        var _0x5c4195 = this, _0x97e439 = _0x5c4195[_0x33c7('0xb')], _0x3f8d90 = _0x5c4195[_0x33c7('0xc')]['_c'] || _0x97e439;
        return _0x840a2[_0x33c7('0x0')](_0x3f8d90, _0x840a2[_0x33c7('0x1')], [_0x840a2[_0x33c7('0x3')](_0x3f8d90, _0x840a2[_0x33c7('0x1')], { 'staticStyle': { 'height': _0x840a2[_0x33c7('0x4')] } }, [_0x840a2[_0x33c7('0x6')](_0x3f8d90, _0x840a2[_0x33c7('0x7')], {
                    'ref': _0x840a2[_0x33c7('0x9')],
                    'attrs': {
                        'options': _0x5c4195[_0x33c7('0xd')],
                        'on-canvas-click': _0x5c4195[_0x33c7('0xe')],
                        'on-node-click': _0x5c4195[_0x33c7('0xf')],
                        'on-line-click': _0x5c4195[_0x33c7('0x10')]
                    }
                })], 0x1)]);
    }, i = [];
const c = {}, r = {}, n = {};
r[_0x33c7('0x11')] = _0x33c7('0x12');
r[_0x33c7('0x13')] = {};
r[_0x33c7('0x14')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: c
    };
};
r[_0x33c7('0x15')] = function () {
    this.showGraph();
};
r[_0x33c7('0x16')] = {};
r[_0x33c7('0x16')][_0x33c7('0x17')] = function () {
    var _0x3f884a = {
        KoUEZ: _0x33c7('0x18'),
        vdrli: _0x33c7('0x19'),
        kYfVU: _0x33c7('0x1a'),
        Ajjmk: _0x33c7('0x1b'),
        ETwnu: _0x33c7('0x1c'),
        yhpRA: _0x33c7('0x1d')
    };
    const _0x29a8cc = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x3f884a.KoUEZ
            },
            {
                id: 'b',
                text: 'B',
                color: _0x3f884a.vdrli,
                fontColor: _0x3f884a.KoUEZ
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
                text: _0x3f884a.kYfVU,
                color: _0x3f884a.vdrli
            },
            {
                from: 'a',
                to: 'c',
                text: _0x3f884a.Ajjmk
            },
            {
                from: 'a',
                to: 'e',
                text: _0x3f884a.ETwnu
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x3f884a.yhpRA
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x29a8cc, _0xa4c8fe => {
    });
};
r[_0x33c7('0x16')][_0x33c7('0xf')] = function (_0x413fb4, _0xb7fb1b) {
    var _0x3b824a = { JlgaG: _0x33c7('0x1e') };
    console.log(_0x3b824a.JlgaG, _0x413fb4);
};
r[_0x33c7('0x16')][_0x33c7('0x10')] = function (_0x3a3d61, _0x1ee078, _0x57df8c) {
    var _0x59a984 = { jQhXG: _0x33c7('0x1f') };
    console.log(_0x59a984.jQhXG, _0x3a3d61);
};
r[_0x33c7('0x16')][_0x33c7('0xe')] = function (_0x5b4413) {
    var _0x15c2e7 = { djbtX: _0x33c7('0x20') };
    const _0x38d30e = this.$refs.graphRef.getInstance();
    console.log(_0x15c2e7.djbtX, _0x5b4413), _0x38d30e.clearChecked();
};
c[_0x33c7('0x21')] = !0x1;
c[_0x33c7('0x22')] = !0x0;
c[_0x33c7('0x23')] = !0x0;
c[_0x33c7('0x24')] = !0x0;
c[_0x33c7('0x25')] = _0x33c7('0x26');
c[_0x33c7('0x27')] = 0x3;
c[_0x33c7('0x28')] = _0x33c7('0x29');
var s = _0x1eee90(r, l, i, !0x1, h, null, null, null);
function h(_0x439dc1) {
    for (let _0x5e241a in n)
        this[_0x5e241a] = n[_0x5e241a];
}
const p = function () {
    return s[_0x33c7('0x2a')];
}();
export {
    p as default
};