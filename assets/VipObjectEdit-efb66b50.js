var _0x3b93 = [
    '关系3',
    '#67C23A',
    'debug',
    'allowSwitchLineShape',
    'allowSwitchJunctionPoint',
    'allowShowDownloadButton',
    'defaultJunctionPoint',
    'border',
    '550b423e',
    'exports',
    'McqUY',
    'wDmiI',
    'ObjectEditToolBar',
    'VxeWD',
    'dpMPj',
    'div',
    'XwUIx',
    'JpSCp',
    'calc(100vh\x20-\x2050px)',
    'AHnth',
    'qtDbv',
    'RelationGraph',
    'koaAa',
    'graphRef',
    'kEcwY',
    'tool-bar',
    '$createElement',
    '_self',
    'graphOptions',
    'name',
    'ObjectEdit',
    'components',
    'data',
    'mounted',
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    '关系1',
    '关系2'
];
(function (_0x5df783, _0x1bf800) {
    var _0x5154ce = function (_0x3f2018) {
        while (--_0x3f2018) {
            _0x5df783['push'](_0x5df783['shift']());
        }
    };
    _0x5154ce(++_0x1bf800);
}(_0x3b93, 0x122));
var _0x4af1 = function (_0x1806c0, _0x1b02c9) {
    _0x1806c0 = _0x1806c0 - 0x0;
    var _0x308549 = _0x3b93[_0x1806c0];
    return _0x308549;
};
import _0x32d8d5 from './VipObjectEditToolBar-517332cf.js';
import { n as _0x589ded } from './index-ebbcd0b3.js';
var i = function () {
        var owBsKG = {};
        owBsKG[_0x4af1('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        owBsKG[_0x4af1('0x1')] = _0x4af1('0x2');
        owBsKG[_0x4af1('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        owBsKG[_0x4af1('0x4')] = _0x4af1('0x5');
        owBsKG[_0x4af1('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        owBsKG[_0x4af1('0x7')] = _0x4af1('0x8');
        owBsKG[_0x4af1('0x9')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        owBsKG[_0x4af1('0xa')] = _0x4af1('0xb');
        owBsKG[_0x4af1('0xc')] = _0x4af1('0xd');
        owBsKG[_0x4af1('0xe')] = _0x4af1('0xf');
        var t = this, e = t[_0x4af1('0x10')], o = t[_0x4af1('0x11')]['_c'] || e;
        return owBsKG[_0x4af1('0x3')](o, owBsKG[_0x4af1('0x4')], [owBsKG[_0x4af1('0x6')](o, owBsKG[_0x4af1('0x4')], { 'staticStyle': { 'height': owBsKG[_0x4af1('0x7')] } }, [owBsKG[_0x4af1('0x9')](o, owBsKG[_0x4af1('0xa')], {
                    'ref': owBsKG[_0x4af1('0xc')],
                    'attrs': { 'options': t[_0x4af1('0x12')] },
                    'scopedSlots': t['_u']([{
                            'key': owBsKG[_0x4af1('0xe')],
                            'fn': function () {
                                return [owBsKG[_0x4af1('0x0')](o, owBsKG[_0x4af1('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x4af1('0x13')] = _0x4af1('0x14');
l[_0x4af1('0x15')] = {};
l[_0x4af1('0x16')] = function () {
    return {
        isShowNodeTipsPanel: !0x1,
        nodeMenuPanelPosition: {
            x: 0x0,
            y: 0x0
        },
        currentObjectType: null,
        currentObject: '',
        newNodeIdIndex: 0x1,
        newLineIdIndex: 0x1,
        graphOptions: c
    };
};
l[_0x4af1('0x17')] = function () {
    this.showGraph();
};
l[_0x4af1('0x18')] = {};
l[_0x4af1('0x18')][_0x4af1('0x19')] = function () {
    var UCIJeL = {
        vrDnw: _0x4af1('0x1a'),
        SPrXE: _0x4af1('0x1b'),
        KpZtt: _0x4af1('0x1c'),
        lSOML: _0x4af1('0x1d'),
        IUnbj: _0x4af1('0x1e'),
        qXABi: _0x4af1('0x1f')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: UCIJeL.vrDnw
            },
            {
                id: 'b',
                text: 'B',
                color: UCIJeL.SPrXE,
                fontColor: UCIJeL.vrDnw
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
                text: UCIJeL.KpZtt,
                color: UCIJeL.SPrXE
            },
            {
                from: 'a',
                to: 'c',
                text: UCIJeL.lSOML
            },
            {
                from: 'a',
                to: 'e',
                text: UCIJeL.IUnbj
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: UCIJeL.qXABi
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x4af1('0x15')][_0x4af1('0x2')] = _0x32d8d5;
c[_0x4af1('0x20')] = !0x1;
c[_0x4af1('0x21')] = !0x0;
c[_0x4af1('0x22')] = !0x0;
c[_0x4af1('0x23')] = !0x0;
c[_0x4af1('0x24')] = _0x4af1('0x25');
var d = _0x589ded(l, i, s, !0x1, h, _0x4af1('0x26'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x4af1('0x27')];
}();
export {
    _ as default
};