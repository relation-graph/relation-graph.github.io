var _0x3946 = [
    'OZeBc',
    'irWeL',
    'div',
    'emgfT',
    'UGdkD',
    'calc(100vh\x20-\x2060px)',
    'QCYIZ',
    'MSrcn',
    'RelationGraph',
    'bZjIa',
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
    'exports'
];
(function (_0x7ebfd7, _0x4048a2) {
    var _0x38b4df = function (_0x3fa5a8) {
        while (--_0x3fa5a8) {
            _0x7ebfd7['push'](_0x7ebfd7['shift']());
        }
    };
    _0x38b4df(++_0x4048a2);
}(_0x3946, 0xd8));
var _0x4f66 = function (_0x512fc2, _0x5ba188) {
    _0x512fc2 = _0x512fc2 - 0x0;
    var _0xc74dc3 = _0x3946[_0x512fc2];
    return _0xc74dc3;
};
import { n as _0x8c0435 } from './index-ebbcd0b3.js';
var i = function () {
        var _0x376868 = {};
        _0x376868[_0x4f66('0x0')] = function (_0x52a1b0, _0x220859, _0x7ad84b) {
            return _0x52a1b0(_0x220859, _0x7ad84b);
        };
        _0x376868[_0x4f66('0x1')] = _0x4f66('0x2');
        _0x376868[_0x4f66('0x3')] = function (_0x169ab4, _0x24b9b0, _0xd267da, _0x5dda91, _0x569f86) {
            return _0x169ab4(_0x24b9b0, _0xd267da, _0x5dda91, _0x569f86);
        };
        _0x376868[_0x4f66('0x4')] = _0x4f66('0x5');
        _0x376868[_0x4f66('0x6')] = function (_0x1c0ee2, _0x4d685f, _0x3cda8b) {
            return _0x1c0ee2(_0x4d685f, _0x3cda8b);
        };
        _0x376868[_0x4f66('0x7')] = _0x4f66('0x8');
        _0x376868[_0x4f66('0x9')] = _0x4f66('0xa');
        var _0x1c71b1 = this, _0x311b24 = _0x1c71b1[_0x4f66('0xb')], _0x1ac6ca = _0x1c71b1[_0x4f66('0xc')]['_c'] || _0x311b24;
        return _0x376868[_0x4f66('0x0')](_0x1ac6ca, _0x376868[_0x4f66('0x1')], [_0x376868[_0x4f66('0x3')](_0x1ac6ca, _0x376868[_0x4f66('0x1')], { 'staticStyle': { 'height': _0x376868[_0x4f66('0x4')] } }, [_0x376868[_0x4f66('0x6')](_0x1ac6ca, _0x376868[_0x4f66('0x7')], {
                    'ref': _0x376868[_0x4f66('0x9')],
                    'attrs': {
                        'options': _0x1c71b1[_0x4f66('0xd')],
                        'on-node-click': _0x1c71b1[_0x4f66('0xe')],
                        'on-line-click': _0x1c71b1[_0x4f66('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, c = {}, n = {};
c[_0x4f66('0x10')] = _0x4f66('0x11');
c[_0x4f66('0x12')] = {};
c[_0x4f66('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: l
    };
};
c[_0x4f66('0x14')] = function () {
    this.showSeeksGraph();
};
c[_0x4f66('0x15')] = {};
c[_0x4f66('0x15')][_0x4f66('0x16')] = function () {
    var _0x451e80 = {
        OsdQQ: _0x4f66('0x17'),
        xYmbg: _0x4f66('0x18'),
        oVMBd: _0x4f66('0x19'),
        sqQSc: _0x4f66('0x1a'),
        jnlzT: _0x4f66('0x1b'),
        fuAGX: _0x4f66('0x1c')
    };
    const _0x442ab7 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x451e80.OsdQQ
            },
            {
                id: 'b',
                text: 'B',
                color: _0x451e80.xYmbg,
                fontColor: _0x451e80.OsdQQ
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
                text: _0x451e80.oVMBd,
                color: _0x451e80.xYmbg
            },
            {
                from: 'a',
                to: 'c',
                text: _0x451e80.sqQSc
            },
            {
                from: 'a',
                to: 'e',
                text: _0x451e80.jnlzT
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x451e80.fuAGX
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x442ab7, _0x215fdc => {
    });
};
c[_0x4f66('0x15')][_0x4f66('0xe')] = function (_0x2e2e62, _0x4c44c7) {
    var _0x48a377 = { IuPmK: _0x4f66('0x1d') };
    console.log(_0x48a377.IuPmK, _0x2e2e62);
};
c[_0x4f66('0x15')][_0x4f66('0xf')] = function (_0xd04071, _0x31b32b, _0x69186f) {
    var _0x73a15e = { zfaHM: _0x4f66('0x1e') };
    console.log(_0x73a15e.zfaHM, _0xd04071);
};
l[_0x4f66('0x1f')] = !0x0;
l[_0x4f66('0x20')] = !0x0;
l[_0x4f66('0x21')] = _0x4f66('0x22');
var s = _0x8c0435(c, i, a, !0x1, h, null, null, null);
function h(_0x5dbf84) {
    for (let _0x3f29ae in n)
        this[_0x3f29ae] = n[_0x3f29ae];
}
const p = function () {
    return s[_0x4f66('0x23')];
}();
export {
    p as default
};