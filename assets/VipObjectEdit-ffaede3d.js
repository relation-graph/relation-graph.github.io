var _0xcc15 = [
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
    '关系2',
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
    'hJqFQ',
    'lwyzm',
    'ObjectEditToolBar',
    'isBfE',
    'tqsVp',
    'div',
    'nrtja',
    'hEPzT',
    'calc(100vh\x20-\x2050px)',
    'coWOi',
    'RelationGraph',
    'DPKAc',
    'graphRef',
    'jKNOJ',
    'tool-bar',
    '$createElement',
    '_self'
];
(function (_0x5e9f2c, _0x3bafbe) {
    var _0x111f1d = function (_0x379891) {
        while (--_0x379891) {
            _0x5e9f2c['push'](_0x5e9f2c['shift']());
        }
    };
    _0x111f1d(++_0x3bafbe);
}(_0xcc15, 0x19c));
var _0x21ca = function (_0x518642, _0x3f3829) {
    _0x518642 = _0x518642 - 0x0;
    var _0x522dca = _0xcc15[_0x518642];
    return _0x522dca;
};
import _0x3d4105 from './VipObjectEditToolBar-3b43bb41.js';
import { n as _0x37b459 } from './index-826fe9ff.js';
var i = function () {
        var jtPqdB = {};
        jtPqdB[_0x21ca('0x0')] = function (callee, param1) {
            return callee(param1);
        };
        jtPqdB[_0x21ca('0x1')] = _0x21ca('0x2');
        jtPqdB[_0x21ca('0x3')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        jtPqdB[_0x21ca('0x4')] = _0x21ca('0x5');
        jtPqdB[_0x21ca('0x6')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        jtPqdB[_0x21ca('0x7')] = _0x21ca('0x8');
        jtPqdB[_0x21ca('0x9')] = _0x21ca('0xa');
        jtPqdB[_0x21ca('0xb')] = _0x21ca('0xc');
        jtPqdB[_0x21ca('0xd')] = _0x21ca('0xe');
        var t = this, e = t[_0x21ca('0xf')], o = t[_0x21ca('0x10')]['_c'] || e;
        return jtPqdB[_0x21ca('0x3')](o, jtPqdB[_0x21ca('0x4')], [jtPqdB[_0x21ca('0x6')](o, jtPqdB[_0x21ca('0x4')], { 'staticStyle': { 'height': jtPqdB[_0x21ca('0x7')] } }, [jtPqdB[_0x21ca('0x3')](o, jtPqdB[_0x21ca('0x9')], {
                    'ref': jtPqdB[_0x21ca('0xb')],
                    'attrs': { 'options': t[_0x21ca('0x11')] },
                    'scopedSlots': t['_u']([{
                            'key': jtPqdB[_0x21ca('0xd')],
                            'fn': function () {
                                return [jtPqdB[_0x21ca('0x0')](o, jtPqdB[_0x21ca('0x1')])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, s = [];
const c = {}, l = {}, n = {};
l[_0x21ca('0x12')] = _0x21ca('0x13');
l[_0x21ca('0x14')] = {};
l[_0x21ca('0x15')] = function () {
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
l[_0x21ca('0x16')] = function () {
    this.showGraph();
};
l[_0x21ca('0x17')] = {};
l[_0x21ca('0x17')][_0x21ca('0x18')] = function () {
    var YQYJva = {
        xmuyw: _0x21ca('0x19'),
        ZUSnI: _0x21ca('0x1a'),
        DKPMP: _0x21ca('0x1b'),
        QxuUY: _0x21ca('0x1c'),
        MlmEo: _0x21ca('0x1d'),
        WWtvB: _0x21ca('0x1e')
    };
    const t = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: YQYJva.xmuyw
            },
            {
                id: 'b',
                text: 'B',
                color: YQYJva.ZUSnI,
                fontColor: YQYJva.xmuyw
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
                text: YQYJva.DKPMP,
                color: YQYJva.ZUSnI
            },
            {
                from: 'a',
                to: 'c',
                text: YQYJva.QxuUY
            },
            {
                from: 'a',
                to: 'e',
                text: YQYJva.MlmEo
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: YQYJva.WWtvB
            }
        ]
    };
    this.$refs.graphRef.setJsonData(t, o => {
    });
};
l[_0x21ca('0x14')][_0x21ca('0x2')] = _0x3d4105;
c[_0x21ca('0x1f')] = !0x1;
c[_0x21ca('0x20')] = !0x0;
c[_0x21ca('0x21')] = !0x0;
c[_0x21ca('0x22')] = !0x0;
c[_0x21ca('0x23')] = _0x21ca('0x24');
var d = _0x37b459(l, i, s, !0x1, h, _0x21ca('0x25'), null, null);
function h(t) {
    for (let e in n)
        this[e] = n[e];
}
const _ = function () {
    return d[_0x21ca('0x26')];
}();
export {
    _ as default
};