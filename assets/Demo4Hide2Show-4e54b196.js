var _0x5ba3 = [
    'RrpAk',
    '\x20比如点击按钮A时显示图谱，你需要在点击按钮A显示图谱之后，通过this.$nextTick()调用图谱的refresh()方法来刷新一下，这样就显示正常了，请参考当前demo的代码。\x20',
    'name',
    'RelationGraphDemo',
    'components',
    'data',
    '---',
    'tree',
    'seeks-layout-center',
    'border',
    'left',
    '300',
    'M2,2\x20L10,6\x20L2,10\x20L6,6\x20L2,2',
    'right',
    '100',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'created',
    'mounted',
    'methods',
    'loadGraphData',
    'b1-1',
    'b1-2',
    'b1-3',
    'b1-4',
    'b1-5',
    'b1-6',
    'b2-1',
    'b2-2',
    'this.activeTabName:',
    'exports',
    'CEhwe',
    'dtuEy',
    'div',
    'MzFAG',
    'XDrmu',
    'el-tabs',
    'mmbwx',
    'card',
    'dQChM',
    'activeTabName',
    'OkisA',
    'el-tab-pane',
    'iunKu',
    '基本信息',
    'Hlswr',
    'base',
    'skVLy',
    'zamqO',
    '关系图谱（点这里）',
    'ULIuv',
    'relation',
    'nSxNq',
    'loading',
    'icYXT',
    'v-loading',
    'Paqnu',
    'g_loading',
    'WVwdh',
    'calc(100%)',
    'eKBkl',
    'calc(100vh\x20-\x20300px)',
    'ATdaH',
    'VwjiW',
    'RelationGraph',
    'MBAIt',
    'graphRef',
    'vBfBD',
    '风险信息',
    'SEGwW',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'jPYfR',
    'sXCZh',
    'lAwrB',
    '20px',
    'rLNHs',
    '#666666',
    'PIutI',
    '600px',
    'ULDZb',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'KCGXf'
];
(function (_0x48f56d, _0x4d62c6) {
    var _0x59e119 = function (_0x47043e) {
        while (--_0x47043e) {
            _0x48f56d['push'](_0x48f56d['shift']());
        }
    };
    _0x59e119(++_0x4d62c6);
}(_0x5ba3, 0x121));
var _0x400a = function (_0x57be94, _0x29b437) {
    _0x57be94 = _0x57be94 - 0x0;
    var _0x1ba58e = _0x5ba3[_0x57be94];
    return _0x1ba58e;
};
import { n as _0x3d9bd2 } from './index-826fe9ff.js';
var n = function () {
        var _0x3c5e1c = {};
        _0x3c5e1c[_0x400a('0x0')] = function (_0x1567a1, _0x2bf7db, _0x1970b6, _0x34ce3c) {
            return _0x1567a1(_0x2bf7db, _0x1970b6, _0x34ce3c);
        };
        _0x3c5e1c[_0x400a('0x1')] = _0x400a('0x2');
        _0x3c5e1c[_0x400a('0x3')] = function (_0x4e256e, _0x7372b5, _0x54cfe4, _0x1e3334, _0x45bc55) {
            return _0x4e256e(_0x7372b5, _0x54cfe4, _0x1e3334, _0x45bc55);
        };
        _0x3c5e1c[_0x400a('0x4')] = _0x400a('0x5');
        _0x3c5e1c[_0x400a('0x6')] = _0x400a('0x7');
        _0x3c5e1c[_0x400a('0x8')] = _0x400a('0x9');
        _0x3c5e1c[_0x400a('0xa')] = _0x400a('0xb');
        _0x3c5e1c[_0x400a('0xc')] = _0x400a('0xd');
        _0x3c5e1c[_0x400a('0xe')] = _0x400a('0xf');
        _0x3c5e1c[_0x400a('0x10')] = function (_0x592fdf, _0x363a9d, _0x9582ea, _0x2769a0) {
            return _0x592fdf(_0x363a9d, _0x9582ea, _0x2769a0);
        };
        _0x3c5e1c[_0x400a('0x11')] = _0x400a('0x12');
        _0x3c5e1c[_0x400a('0x13')] = _0x400a('0x14');
        _0x3c5e1c[_0x400a('0x15')] = _0x400a('0x16');
        _0x3c5e1c[_0x400a('0x17')] = _0x400a('0x18');
        _0x3c5e1c[_0x400a('0x19')] = _0x400a('0x1a');
        _0x3c5e1c[_0x400a('0x1b')] = _0x400a('0x1c');
        _0x3c5e1c[_0x400a('0x1d')] = _0x400a('0x1e');
        _0x3c5e1c[_0x400a('0x1f')] = function (_0x1838a9, _0x270f48, _0x1e3ab9) {
            return _0x1838a9(_0x270f48, _0x1e3ab9);
        };
        _0x3c5e1c[_0x400a('0x20')] = _0x400a('0x21');
        _0x3c5e1c[_0x400a('0x22')] = _0x400a('0x23');
        _0x3c5e1c[_0x400a('0x24')] = _0x400a('0x25');
        _0x3c5e1c[_0x400a('0x26')] = _0x400a('0x27');
        var _0x37fdb6 = this, _0x3a3cb7 = _0x37fdb6[_0x400a('0x28')], _0x570793 = _0x37fdb6[_0x400a('0x29')]['_c'] || _0x3a3cb7;
        return _0x3c5e1c[_0x400a('0x0')](_0x570793, _0x3c5e1c[_0x400a('0x1')], [
            _0x37fdb6['_m'](0x0),
            _0x3c5e1c[_0x400a('0x3')](_0x570793, _0x3c5e1c[_0x400a('0x4')], {
                'attrs': { 'type': _0x3c5e1c[_0x400a('0x6')] },
                'on': { 'tab-click': _0x37fdb6[_0x400a('0x2a')] },
                'model': {
                    'value': _0x37fdb6[_0x400a('0x9')],
                    'callback': function (_0x5580c9) {
                        _0x37fdb6[_0x400a('0x9')] = _0x5580c9;
                    },
                    'expression': _0x3c5e1c[_0x400a('0x8')]
                }
            }, [
                _0x3c5e1c[_0x400a('0x0')](_0x570793, _0x3c5e1c[_0x400a('0xa')], {
                    'attrs': {
                        'label': _0x3c5e1c[_0x400a('0xc')],
                        'name': _0x3c5e1c[_0x400a('0xe')]
                    }
                }, [_0x37fdb6['_v'](_0x3c5e1c[_0x400a('0xc')])]),
                _0x3c5e1c[_0x400a('0x10')](_0x570793, _0x3c5e1c[_0x400a('0xa')], {
                    'attrs': {
                        'label': _0x3c5e1c[_0x400a('0x11')],
                        'name': _0x3c5e1c[_0x400a('0x13')]
                    }
                }, [_0x3c5e1c[_0x400a('0x3')](_0x570793, _0x3c5e1c[_0x400a('0x1')], {
                        'directives': [{
                                'name': _0x3c5e1c[_0x400a('0x15')],
                                'rawName': _0x3c5e1c[_0x400a('0x17')],
                                'value': _0x37fdb6[_0x400a('0x1a')],
                                'expression': _0x3c5e1c[_0x400a('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x3c5e1c[_0x400a('0x1b')],
                            'height': _0x3c5e1c[_0x400a('0x1d')]
                        }
                    }, [_0x3c5e1c[_0x400a('0x1f')](_0x570793, _0x3c5e1c[_0x400a('0x20')], {
                            'ref': _0x3c5e1c[_0x400a('0x22')],
                            'attrs': { 'options': _0x37fdb6[_0x400a('0x2b')] }
                        })], 0x1)]),
                _0x3c5e1c[_0x400a('0x10')](_0x570793, _0x3c5e1c[_0x400a('0xa')], {
                    'attrs': {
                        'label': _0x3c5e1c[_0x400a('0x24')],
                        'name': _0x3c5e1c[_0x400a('0x26')]
                    }
                }, [_0x37fdb6['_v'](_0x3c5e1c[_0x400a('0x24')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x50a77d = {};
            _0x50a77d[_0x400a('0x2c')] = function (_0x2b6ab3, _0x5869a3, _0x453810, _0x7b0a30) {
                return _0x2b6ab3(_0x5869a3, _0x453810, _0x7b0a30);
            };
            _0x50a77d[_0x400a('0x2d')] = _0x400a('0x2');
            _0x50a77d[_0x400a('0x2e')] = _0x400a('0x2f');
            _0x50a77d[_0x400a('0x30')] = _0x400a('0x31');
            _0x50a77d[_0x400a('0x32')] = _0x400a('0x33');
            _0x50a77d[_0x400a('0x34')] = _0x400a('0x35');
            _0x50a77d[_0x400a('0x36')] = function (_0x2c5e60, _0x22609a, _0x96e5a5) {
                return _0x2c5e60(_0x22609a, _0x96e5a5);
            };
            _0x50a77d[_0x400a('0x37')] = _0x400a('0x38');
            var _0x38565e = this, _0x5905f8 = _0x38565e[_0x400a('0x28')], _0x7919e4 = _0x38565e[_0x400a('0x29')]['_c'] || _0x5905f8;
            return _0x50a77d[_0x400a('0x2c')](_0x7919e4, _0x50a77d[_0x400a('0x2d')], {
                'staticStyle': {
                    'padding': _0x50a77d[_0x400a('0x2e')],
                    'color': _0x50a77d[_0x400a('0x30')],
                    'width': _0x50a77d[_0x400a('0x32')]
                }
            }, [
                _0x38565e['_v'](_0x50a77d[_0x400a('0x34')]),
                _0x50a77d[_0x400a('0x36')](_0x7919e4, _0x50a77d[_0x400a('0x2d')], [_0x38565e['_v'](_0x50a77d[_0x400a('0x37')])])
            ]);
        }];
const l = {}, o = {};
l[_0x400a('0x39')] = _0x400a('0x3a');
l[_0x400a('0x3b')] = {};
l[_0x400a('0x3c')] = function () {
    var _0x350501 = {
        VUroK: _0x400a('0xf'),
        iAnNr: _0x400a('0x3d'),
        rjSFf: _0x400a('0x3e'),
        hcHyT: _0x400a('0x3f'),
        gALhO: _0x400a('0x40'),
        iBiko: _0x400a('0x41'),
        YYhvn: _0x400a('0x42'),
        HZzSO: _0x400a('0x43'),
        QtxyM: _0x400a('0x44'),
        yStQD: _0x400a('0x45'),
        MEkFZ: _0x400a('0x46'),
        cGVnw: _0x400a('0x47')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x350501.VUroK,
        demoname: _0x350501.iAnNr,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x350501.rjSFf,
                    layoutClassName: _0x350501.hcHyT,
                    defaultJunctionPoint: _0x350501.gALhO,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x350501.iBiko,
                    max_per_width: _0x350501.YYhvn,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x350501.HZzSO
            },
            defaultExpandHolderPosition: _0x350501.QtxyM,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x350501.yStQD,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x350501.MEkFZ,
            defaultNodeColor: _0x350501.cGVnw
        }
    };
};
l[_0x400a('0x48')] = function () {
};
l[_0x400a('0x49')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x400a('0x4a')] = {};
l[_0x400a('0x4a')][_0x400a('0x4b')] = function () {
    var _0xb71398 = {
        EzEch: _0x400a('0x4c'),
        eODdM: _0x400a('0x4d'),
        YlyVX: _0x400a('0x4e'),
        SletZ: _0x400a('0x4f'),
        WSSPc: _0x400a('0x50'),
        gSIAE: _0x400a('0x51'),
        PxYUb: _0x400a('0x52'),
        taMna: _0x400a('0x53'),
        wqGiO: function (_0x36c399, _0x509390, _0x299251) {
            return _0x36c399(_0x509390, _0x299251);
        }
    };
    const _0x4fc000 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'a'
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'b1',
                text: 'b1'
            },
            {
                id: _0xb71398.EzEch,
                text: _0xb71398.EzEch
            },
            {
                id: _0xb71398.eODdM,
                text: _0xb71398.eODdM
            },
            {
                id: _0xb71398.YlyVX,
                text: _0xb71398.YlyVX
            },
            {
                id: _0xb71398.SletZ,
                text: _0xb71398.SletZ
            },
            {
                id: _0xb71398.WSSPc,
                text: _0xb71398.WSSPc
            },
            {
                id: _0xb71398.gSIAE,
                text: _0xb71398.gSIAE
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0xb71398.PxYUb,
                text: _0xb71398.PxYUb
            },
            {
                id: _0xb71398.taMna,
                text: _0xb71398.taMna
            },
            {
                id: 'c',
                text: 'c'
            },
            {
                id: 'c1',
                text: 'c1'
            },
            {
                id: 'c2',
                text: 'c2'
            },
            {
                id: 'c3',
                text: 'c3'
            }
        ],
        lines: [
            {
                from: 'a',
                to: 'b'
            },
            {
                from: 'b',
                to: 'b1'
            },
            {
                from: 'b1',
                to: _0xb71398.EzEch
            },
            {
                from: 'b1',
                to: _0xb71398.eODdM
            },
            {
                from: 'b1',
                to: _0xb71398.YlyVX
            },
            {
                from: 'b1',
                to: _0xb71398.SletZ
            },
            {
                from: 'b1',
                to: _0xb71398.WSSPc
            },
            {
                from: 'b1',
                to: _0xb71398.gSIAE
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0xb71398.PxYUb
            },
            {
                from: 'b2',
                to: _0xb71398.taMna
            },
            {
                from: 'a',
                to: 'c'
            },
            {
                from: 'c',
                to: 'c1'
            },
            {
                from: 'c',
                to: 'c2'
            },
            {
                from: 'c',
                to: 'c3'
            }
        ]
    };
    console.log(JSON.stringify(_0x4fc000)), _0xb71398.wqGiO(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x4fc000, _0x1aba20 => {
            _0x1aba20.refresh();
        });
    }, 0x3e8);
};
l[_0x400a('0x4a')][_0x400a('0x2a')] = function (_0x2da2a2, _0x2ba1df) {
    var _0x41020f = {
        DjsMZ: _0x400a('0x54'),
        iBkrH: function (_0x2c8083, _0x184918) {
            return _0x2c8083 === _0x184918;
        },
        PLrvP: _0x400a('0x14')
    };
    console.log(_0x41020f.DjsMZ, this.activeTabName), _0x41020f.iBkrH(this.activeTabName, _0x41020f.PLrvP) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x3d9bd2(l, n, d, !0x1, c, null, null, null);
function c(_0x17874a) {
    for (let _0x2bd265 in o)
        this[_0x2bd265] = o[_0x2bd265];
}
const m = function () {
    return s[_0x400a('0x55')];
}();
export {
    m as default
};