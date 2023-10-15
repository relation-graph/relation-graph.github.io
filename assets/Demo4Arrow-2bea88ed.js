var _0xbd31 = [
    'border',
    'exports',
    'HJeEM',
    'hatJz',
    'div',
    'tmizM',
    'pNHHc',
    'calc(100vh\x20-\x2060px)',
    'MHkqD',
    'ZoZff',
    'RelationGraph',
    'bgsrf',
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
    'defaultJunctionPoint'
];
(function (_0x4064d6, _0x15d4a5) {
    var _0x110a21 = function (_0x3fddab) {
        while (--_0x3fddab) {
            _0x4064d6['push'](_0x4064d6['shift']());
        }
    };
    _0x110a21(++_0x15d4a5);
}(_0xbd31, 0x16a));
var _0x374a = function (_0x3bc567, _0x4f97ee) {
    _0x3bc567 = _0x3bc567 - 0x0;
    var _0x2f2e46 = _0xbd31[_0x3bc567];
    return _0x2f2e46;
};
import { n as _0x30da83 } from './index-826fe9ff.js';
var i = function () {
        var _0x44f1cb = {};
        _0x44f1cb[_0x374a('0x0')] = function (_0x2e4770, _0x4e7d95, _0x4d81f7) {
            return _0x2e4770(_0x4e7d95, _0x4d81f7);
        };
        _0x44f1cb[_0x374a('0x1')] = _0x374a('0x2');
        _0x44f1cb[_0x374a('0x3')] = function (_0x5865c7, _0x4a01e2, _0x2facd7, _0x322d66, _0x330c8d) {
            return _0x5865c7(_0x4a01e2, _0x2facd7, _0x322d66, _0x330c8d);
        };
        _0x44f1cb[_0x374a('0x4')] = _0x374a('0x5');
        _0x44f1cb[_0x374a('0x6')] = function (_0x19f6cd, _0x5c59dc, _0x3ebf2b) {
            return _0x19f6cd(_0x5c59dc, _0x3ebf2b);
        };
        _0x44f1cb[_0x374a('0x7')] = _0x374a('0x8');
        _0x44f1cb[_0x374a('0x9')] = _0x374a('0xa');
        var _0xc90f63 = this, _0x214846 = _0xc90f63[_0x374a('0xb')], _0x51e608 = _0xc90f63[_0x374a('0xc')]['_c'] || _0x214846;
        return _0x44f1cb[_0x374a('0x0')](_0x51e608, _0x44f1cb[_0x374a('0x1')], [_0x44f1cb[_0x374a('0x3')](_0x51e608, _0x44f1cb[_0x374a('0x1')], { 'staticStyle': { 'height': _0x44f1cb[_0x374a('0x4')] } }, [_0x44f1cb[_0x374a('0x6')](_0x51e608, _0x44f1cb[_0x374a('0x7')], {
                    'ref': _0x44f1cb[_0x374a('0x9')],
                    'attrs': {
                        'options': _0xc90f63[_0x374a('0xd')],
                        'on-node-click': _0xc90f63[_0x374a('0xe')],
                        'on-line-click': _0xc90f63[_0x374a('0xf')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, c = {}, n = {};
c[_0x374a('0x10')] = _0x374a('0x11');
c[_0x374a('0x12')] = {};
c[_0x374a('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: l
    };
};
c[_0x374a('0x14')] = function () {
    this.showSeeksGraph();
};
c[_0x374a('0x15')] = {};
c[_0x374a('0x15')][_0x374a('0x16')] = function () {
    var _0x2eda67 = {
        pjNZi: _0x374a('0x17'),
        JrjUR: _0x374a('0x18'),
        XvNix: _0x374a('0x19'),
        unmcV: _0x374a('0x1a'),
        bDHyk: _0x374a('0x1b'),
        tjXpq: _0x374a('0x1c')
    };
    const _0x52ab73 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x2eda67.pjNZi
            },
            {
                id: 'b',
                text: 'B',
                color: _0x2eda67.JrjUR,
                fontColor: _0x2eda67.pjNZi
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
                text: _0x2eda67.XvNix,
                color: _0x2eda67.JrjUR
            },
            {
                from: 'a',
                to: 'c',
                text: _0x2eda67.unmcV
            },
            {
                from: 'a',
                to: 'e',
                text: _0x2eda67.bDHyk
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x2eda67.tjXpq
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x52ab73, _0x117703 => {
    });
};
c[_0x374a('0x15')][_0x374a('0xe')] = function (_0x30b94d, _0x15fc9e) {
    var _0x33cc = { GYmyN: _0x374a('0x1d') };
    console.log(_0x33cc.GYmyN, _0x30b94d);
};
c[_0x374a('0x15')][_0x374a('0xf')] = function (_0x500629, _0xe4a1a3, _0x5d6f3d) {
    var _0x4c4127 = { HryDR: _0x374a('0x1e') };
    console.log(_0x4c4127.HryDR, _0x500629);
};
l[_0x374a('0x1f')] = !0x0;
l[_0x374a('0x20')] = !0x0;
l[_0x374a('0x21')] = _0x374a('0x22');
var s = _0x30da83(c, i, a, !0x1, h, null, null, null);
function h(_0x21858b) {
    for (let _0x4e2771 in n)
        this[_0x4e2771] = n[_0x4e2771];
}
const p = function () {
    return s[_0x374a('0x23')];
}();
export {
    p as default
};