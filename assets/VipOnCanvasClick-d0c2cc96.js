var _0x327f = [
    '$createElement',
    '_self',
    'graphOptions',
    'onCanvasClick',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
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
    'CZruA',
    'EQTob',
    'div',
    'nnWMX',
    'KAbJo',
    'calc(100vh\x20-\x2060px)',
    'gpUqO',
    'RelationGraph',
    'vHZjD',
    'graphRef'
];
(function (_0x585e60, _0x57a30c) {
    var _0x323e47 = function (_0x10aea3) {
        while (--_0x10aea3) {
            _0x585e60['push'](_0x585e60['shift']());
        }
    };
    _0x323e47(++_0x57a30c);
}(_0x327f, 0x9e));
var _0x9d9c = function (_0x5a339d, _0x3f452e) {
    _0x5a339d = _0x5a339d - 0x0;
    var _0x5bbfb9 = _0x327f[_0x5a339d];
    return _0x5bbfb9;
};
import { n as _0x27a030 } from './index-ebbcd0b3.js';
var i = function () {
        var _0x596efd = {};
        _0x596efd[_0x9d9c('0x0')] = function (_0x1a592f, _0x19ce8b, _0x380cf4) {
            return _0x1a592f(_0x19ce8b, _0x380cf4);
        };
        _0x596efd[_0x9d9c('0x1')] = _0x9d9c('0x2');
        _0x596efd[_0x9d9c('0x3')] = function (_0x2baf83, _0x2339d3, _0x5afe59, _0x26a830, _0x4d1ecf) {
            return _0x2baf83(_0x2339d3, _0x5afe59, _0x26a830, _0x4d1ecf);
        };
        _0x596efd[_0x9d9c('0x4')] = _0x9d9c('0x5');
        _0x596efd[_0x9d9c('0x6')] = _0x9d9c('0x7');
        _0x596efd[_0x9d9c('0x8')] = _0x9d9c('0x9');
        var _0x46db58 = this, _0x26a9bb = _0x46db58[_0x9d9c('0xa')], _0x5387c1 = _0x46db58[_0x9d9c('0xb')]['_c'] || _0x26a9bb;
        return _0x596efd[_0x9d9c('0x0')](_0x5387c1, _0x596efd[_0x9d9c('0x1')], [_0x596efd[_0x9d9c('0x3')](_0x5387c1, _0x596efd[_0x9d9c('0x1')], { 'staticStyle': { 'height': _0x596efd[_0x9d9c('0x4')] } }, [_0x596efd[_0x9d9c('0x0')](_0x5387c1, _0x596efd[_0x9d9c('0x6')], {
                    'ref': _0x596efd[_0x9d9c('0x8')],
                    'attrs': {
                        'options': _0x46db58[_0x9d9c('0xc')],
                        'on-canvas-click': _0x46db58[_0x9d9c('0xd')],
                        'on-node-click': _0x46db58[_0x9d9c('0xe')],
                        'on-line-click': _0x46db58[_0x9d9c('0xf')]
                    }
                })], 0x1)]);
    }, c = [];
const l = {}, r = {}, n = {};
r[_0x9d9c('0x10')] = _0x9d9c('0x11');
r[_0x9d9c('0x12')] = {};
r[_0x9d9c('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: l
    };
};
r[_0x9d9c('0x14')] = function () {
    this.showGraph();
};
r[_0x9d9c('0x15')] = {};
r[_0x9d9c('0x15')][_0x9d9c('0x16')] = function () {
    var _0x5136b4 = {
        BkHbm: _0x9d9c('0x17'),
        mGoTG: _0x9d9c('0x18'),
        fToLE: _0x9d9c('0x19'),
        TctxU: _0x9d9c('0x1a'),
        KHToH: _0x9d9c('0x1b'),
        HzuSI: _0x9d9c('0x1c')
    };
    const _0x3a3f27 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x5136b4.BkHbm
            },
            {
                id: 'b',
                text: 'B',
                color: _0x5136b4.mGoTG,
                fontColor: _0x5136b4.BkHbm
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
                text: _0x5136b4.fToLE,
                color: _0x5136b4.mGoTG
            },
            {
                from: 'a',
                to: 'c',
                text: _0x5136b4.TctxU
            },
            {
                from: 'a',
                to: 'e',
                text: _0x5136b4.KHToH
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x5136b4.HzuSI
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x3a3f27, _0x2d6c1d => {
    });
};
r[_0x9d9c('0x15')][_0x9d9c('0xe')] = function (_0x5ed7fc, _0x23404d) {
    var _0x54c8f9 = { Hyawo: _0x9d9c('0x1d') };
    console.log(_0x54c8f9.Hyawo, _0x5ed7fc);
};
r[_0x9d9c('0x15')][_0x9d9c('0xf')] = function (_0x1f6964, _0x5085b8, _0x573953) {
    var _0x14e48f = { OwHOK: _0x9d9c('0x1e') };
    console.log(_0x14e48f.OwHOK, _0x1f6964);
};
r[_0x9d9c('0x15')][_0x9d9c('0xd')] = function (_0xd60b45) {
    var _0x2f59b9 = { Xvjdl: _0x9d9c('0x1f') };
    const _0x35175e = this.$refs.graphRef.getInstance();
    console.log(_0x2f59b9.Xvjdl, _0xd60b45), _0x35175e.options.checkedNodeId = '', _0x35175e.options.checkedLineId = '';
};
l[_0x9d9c('0x20')] = !0x1;
l[_0x9d9c('0x21')] = !0x0;
l[_0x9d9c('0x22')] = !0x0;
l[_0x9d9c('0x23')] = !0x0;
l[_0x9d9c('0x24')] = _0x9d9c('0x25');
l[_0x9d9c('0x26')] = 0x3;
l[_0x9d9c('0x27')] = _0x9d9c('0x28');
var s = _0x27a030(r, i, c, !0x1, h, null, null, null);
function h(_0x432b78) {
    for (let _0x4a1096 in n)
        this[_0x4a1096] = n[_0x4a1096];
}
const p = function () {
    return s[_0x9d9c('0x29')];
}();
export {
    p as default
};