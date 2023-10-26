
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x42f3 = [
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
    'izoFT',
    'OVyUE',
    'div',
    'tKBpJ',
    'TQyWb',
    'calc(100vh\x20-\x2060px)',
    'qOoKf',
    'lcgEQ',
    'RelationGraph',
    'xOpCG',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onCanvasClick',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data'
];
(function (_0x2b9e10, _0x8a760b) {
    var _0x83eb1e = function (_0x6f4665) {
        while (--_0x6f4665) {
            _0x2b9e10['push'](_0x2b9e10['shift']());
        }
    };
    _0x83eb1e(++_0x8a760b);
}(_0x42f3, 0x97));
var _0x5421 = function (_0x1e94ab, _0x117fc3) {
    _0x1e94ab = _0x1e94ab - 0x0;
    var _0x49c97d = _0x42f3[_0x1e94ab];
    return _0x49c97d;
};
import { n as _0x42059f } from './index-08f7799e.js';
var i = function () {
        var _0x201528 = {};
        _0x201528[_0x5421('0x0')] = function (_0x21f800, _0x2a7f63, _0x3792d5) {
            return _0x21f800(_0x2a7f63, _0x3792d5);
        };
        _0x201528[_0x5421('0x1')] = _0x5421('0x2');
        _0x201528[_0x5421('0x3')] = function (_0x3c4304, _0x3281a5, _0x4de8af, _0x361a1d, _0x53184f) {
            return _0x3c4304(_0x3281a5, _0x4de8af, _0x361a1d, _0x53184f);
        };
        _0x201528[_0x5421('0x4')] = _0x5421('0x5');
        _0x201528[_0x5421('0x6')] = function (_0x216e5a, _0x233918, _0x240bde) {
            return _0x216e5a(_0x233918, _0x240bde);
        };
        _0x201528[_0x5421('0x7')] = _0x5421('0x8');
        _0x201528[_0x5421('0x9')] = _0x5421('0xa');
        var _0x45d512 = this, _0x219916 = _0x45d512[_0x5421('0xb')], _0x357053 = _0x45d512[_0x5421('0xc')]['_c'] || _0x219916;
        return _0x201528[_0x5421('0x0')](_0x357053, _0x201528[_0x5421('0x1')], [_0x201528[_0x5421('0x3')](_0x357053, _0x201528[_0x5421('0x1')], { 'staticStyle': { 'height': _0x201528[_0x5421('0x4')] } }, [_0x201528[_0x5421('0x6')](_0x357053, _0x201528[_0x5421('0x7')], {
                    'ref': _0x201528[_0x5421('0x9')],
                    'attrs': {
                        'options': _0x45d512[_0x5421('0xd')],
                        'on-canvas-click': _0x45d512[_0x5421('0xe')],
                        'on-node-click': _0x45d512[_0x5421('0xf')],
                        'on-line-click': _0x45d512[_0x5421('0x10')]
                    }
                })], 0x1)]);
    }, c = [];
const l = {}, r = {}, n = {};
r[_0x5421('0x11')] = _0x5421('0x12');
r[_0x5421('0x13')] = {};
r[_0x5421('0x14')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: l
    };
};
r[_0x5421('0x15')] = function () {
    this.showGraph();
};
r[_0x5421('0x16')] = {};
r[_0x5421('0x16')][_0x5421('0x17')] = function () {
    var _0x40d537 = {
        RmUsL: _0x5421('0x18'),
        xSWLF: _0x5421('0x19'),
        WfVdE: _0x5421('0x1a'),
        DitXl: _0x5421('0x1b'),
        UcYyZ: _0x5421('0x1c'),
        sYjLI: _0x5421('0x1d')
    };
    const _0x453d42 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x40d537.RmUsL
            },
            {
                id: 'b',
                text: 'B',
                color: _0x40d537.xSWLF,
                fontColor: _0x40d537.RmUsL
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
                text: _0x40d537.WfVdE,
                color: _0x40d537.xSWLF
            },
            {
                from: 'a',
                to: 'c',
                text: _0x40d537.DitXl
            },
            {
                from: 'a',
                to: 'e',
                text: _0x40d537.UcYyZ
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x40d537.sYjLI
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x453d42, _0x37b034 => {
    });
};
r[_0x5421('0x16')][_0x5421('0xf')] = function (_0x3512d9, _0x2cff21) {
    var _0x1587ca = { fXZdT: _0x5421('0x1e') };
    console.log(_0x1587ca.fXZdT, _0x3512d9);
};
r[_0x5421('0x16')][_0x5421('0x10')] = function (_0x6a8f12, _0x2d0379, _0x251952) {
    var _0x58c22c = { CPCuG: _0x5421('0x1f') };
    console.log(_0x58c22c.CPCuG, _0x6a8f12);
};
r[_0x5421('0x16')][_0x5421('0xe')] = function (_0x5ec06e) {
    var _0x2aea8 = { jeIjB: _0x5421('0x20') };
    const _0x265c04 = this.$refs.graphRef.getInstance();
    console.log(_0x2aea8.jeIjB, _0x5ec06e), _0x265c04.options.checkedNodeId = '', _0x265c04.options.checkedLineId = '';
};
l[_0x5421('0x21')] = !0x1;
l[_0x5421('0x22')] = !0x0;
l[_0x5421('0x23')] = !0x0;
l[_0x5421('0x24')] = !0x0;
l[_0x5421('0x25')] = _0x5421('0x26');
l[_0x5421('0x27')] = 0x3;
l[_0x5421('0x28')] = _0x5421('0x29');
var s = _0x42059f(r, i, c, !0x1, h, null, null, null);
function h(_0x3edea6) {
    for (let _0xcf9771 in n)
        this[_0xcf9771] = n[_0xcf9771];
}
const p = function () {
    return s[_0x5421('0x2a')];
}();
export {
    p as default
};