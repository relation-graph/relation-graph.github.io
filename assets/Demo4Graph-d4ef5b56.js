var _0x3505 = [
    'onLineClick:',
    'exports',
    'gDJBr',
    'RJMyN',
    'div',
    'vLqdX',
    'VWECh',
    'calc(100vh\x20-\x2060px)',
    'MxLdq',
    'RelationGraph',
    'fTXWy',
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
    'mounted',
    'methods',
    'showSeeksGraph',
    'yellow',
    '#43a2f1',
    '关系1',
    '关系2',
    '关系3',
    '#67C23A',
    'onNodeClick:'
];
(function (_0x3b4f78, _0x1caa8) {
    var _0x420427 = function (_0x4ede90) {
        while (--_0x4ede90) {
            _0x3b4f78['push'](_0x3b4f78['shift']());
        }
    };
    _0x420427(++_0x1caa8);
}(_0x3505, 0xe2));
var _0x5144 = function (_0xd06ea4, _0x11fb43) {
    _0xd06ea4 = _0xd06ea4 - 0x0;
    var _0xc069d9 = _0x3505[_0xd06ea4];
    return _0xc069d9;
};
import { n as _0x3bc799 } from './index-826fe9ff.js';
var i = function () {
        var _0x3d9d67 = {};
        _0x3d9d67[_0x5144('0x0')] = function (_0x2be2c0, _0x235df7, _0x3eb04f) {
            return _0x2be2c0(_0x235df7, _0x3eb04f);
        };
        _0x3d9d67[_0x5144('0x1')] = _0x5144('0x2');
        _0x3d9d67[_0x5144('0x3')] = function (_0x5688a1, _0x183a68, _0x3be298, _0x8a1be0, _0x2ea47f) {
            return _0x5688a1(_0x183a68, _0x3be298, _0x8a1be0, _0x2ea47f);
        };
        _0x3d9d67[_0x5144('0x4')] = _0x5144('0x5');
        _0x3d9d67[_0x5144('0x6')] = _0x5144('0x7');
        _0x3d9d67[_0x5144('0x8')] = _0x5144('0x9');
        var _0x6fe77b = this, _0x270d52 = _0x6fe77b[_0x5144('0xa')], _0x7b4e67 = _0x6fe77b[_0x5144('0xb')]['_c'] || _0x270d52;
        return _0x3d9d67[_0x5144('0x0')](_0x7b4e67, _0x3d9d67[_0x5144('0x1')], [_0x3d9d67[_0x5144('0x3')](_0x7b4e67, _0x3d9d67[_0x5144('0x1')], { 'staticStyle': { 'height': _0x3d9d67[_0x5144('0x4')] } }, [_0x3d9d67[_0x5144('0x0')](_0x7b4e67, _0x3d9d67[_0x5144('0x6')], {
                    'ref': _0x3d9d67[_0x5144('0x8')],
                    'attrs': {
                        'options': _0x6fe77b[_0x5144('0xc')],
                        'on-node-click': _0x6fe77b[_0x5144('0xd')],
                        'on-line-click': _0x6fe77b[_0x5144('0xe')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x5144('0xf')] = _0x5144('0x10');
l[_0x5144('0x11')] = {};
l[_0x5144('0x12')] = function () {
    var _0x493066 = { iveBF: _0x5144('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            defaultJunctionPoint: _0x493066.iveBF
        }
    };
};
l[_0x5144('0x14')] = function () {
    this.showSeeksGraph();
};
l[_0x5144('0x15')] = {};
l[_0x5144('0x15')][_0x5144('0x16')] = function () {
    var _0x599ecb = {
        IEVpz: _0x5144('0x17'),
        atHZG: _0x5144('0x18'),
        AIKBc: _0x5144('0x19'),
        Ogcdu: _0x5144('0x1a'),
        tfvUT: _0x5144('0x1b'),
        ZkSaf: _0x5144('0x1c')
    };
    const _0x1c37c6 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x599ecb.IEVpz
            },
            {
                id: 'b',
                text: 'B',
                color: _0x599ecb.atHZG,
                fontColor: _0x599ecb.IEVpz
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
                text: _0x599ecb.AIKBc,
                color: _0x599ecb.atHZG
            },
            {
                from: 'a',
                to: 'c',
                text: _0x599ecb.Ogcdu
            },
            {
                from: 'a',
                to: 'e',
                text: _0x599ecb.tfvUT
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x599ecb.ZkSaf
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x1c37c6, _0x55791b => {
    });
};
l[_0x5144('0x15')][_0x5144('0xd')] = function (_0x59c153, _0x2f435e) {
    var _0x4c1127 = { DfQrk: _0x5144('0x1d') };
    console.log(_0x4c1127.DfQrk, _0x59c153);
};
l[_0x5144('0x15')][_0x5144('0xe')] = function (_0x4d9245, _0x3e9e62, _0x336ff2) {
    var _0x314145 = { WkgyK: _0x5144('0x1e') };
    console.log(_0x314145.WkgyK, _0x4d9245);
};
var c = _0x3bc799(l, i, a, !0x1, s, null, null, null);
function s(_0x4c6837) {
    for (let _0x2458cb in n)
        this[_0x2458cb] = n[_0x2458cb];
}
const d = function () {
    return c[_0x5144('0x1f')];
}();
export {
    d as default
};