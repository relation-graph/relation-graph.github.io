
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x404c = [
    'YJEuh',
    'v-loading',
    'iGxGV',
    'g_loading',
    'QEXnH',
    'calc(100%)',
    'BguRc',
    'calc(100vh\x20-\x20300px)',
    'YaLET',
    'DPoRX',
    'RelationGraph',
    'TcoSH',
    'graphRef',
    'KgXzg',
    '风险信息',
    'mKPnE',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'sewUR',
    'JmOQk',
    'McesG',
    '20px',
    'kAhrk',
    '#666666',
    'yvFIk',
    '600px',
    'jhFFu',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'OqYBO',
    'nECMz',
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
    'NeLKp',
    'xXOph',
    'div',
    'IYfQm',
    'zFUmd',
    'el-tabs',
    'TnCxh',
    'card',
    'ChadU',
    'activeTabName',
    'WFOkD',
    'YwqsM',
    'el-tab-pane',
    'Qesqd',
    '基本信息',
    'BrCuC',
    'base',
    'dUylr',
    '关系图谱（点这里）',
    'AdJUL',
    'relation',
    'hadwm',
    'kWQlW',
    'loading'
];
(function (_0x4ee861, _0x9acc00) {
    var _0x3a09ce = function (_0x437e25) {
        while (--_0x437e25) {
            _0x4ee861['push'](_0x4ee861['shift']());
        }
    };
    _0x3a09ce(++_0x9acc00);
}(_0x404c, 0x140));
var _0x188f = function (_0x224381, _0x3db399) {
    _0x224381 = _0x224381 - 0x0;
    var _0x235a58 = _0x404c[_0x224381];
    return _0x235a58;
};
import { n as _0x2f480b } from './index-4e37fb25.js';
var n = function () {
        var _0x58d33a = {};
        _0x58d33a[_0x188f('0x0')] = function (_0x4ba4e7, _0x5dc3f2, _0x424938, _0x538850) {
            return _0x4ba4e7(_0x5dc3f2, _0x424938, _0x538850);
        };
        _0x58d33a[_0x188f('0x1')] = _0x188f('0x2');
        _0x58d33a[_0x188f('0x3')] = function (_0x4d15d0, _0x35c40f, _0x85d3ff, _0x28556b, _0x395d0f) {
            return _0x4d15d0(_0x35c40f, _0x85d3ff, _0x28556b, _0x395d0f);
        };
        _0x58d33a[_0x188f('0x4')] = _0x188f('0x5');
        _0x58d33a[_0x188f('0x6')] = _0x188f('0x7');
        _0x58d33a[_0x188f('0x8')] = _0x188f('0x9');
        _0x58d33a[_0x188f('0xa')] = function (_0x376a27, _0x34af1f, _0x2faeba, _0x2fc1e8) {
            return _0x376a27(_0x34af1f, _0x2faeba, _0x2fc1e8);
        };
        _0x58d33a[_0x188f('0xb')] = _0x188f('0xc');
        _0x58d33a[_0x188f('0xd')] = _0x188f('0xe');
        _0x58d33a[_0x188f('0xf')] = _0x188f('0x10');
        _0x58d33a[_0x188f('0x11')] = _0x188f('0x12');
        _0x58d33a[_0x188f('0x13')] = _0x188f('0x14');
        _0x58d33a[_0x188f('0x15')] = function (_0x16a89e, _0x220324, _0x3d7be5, _0x102f53, _0x963c21) {
            return _0x16a89e(_0x220324, _0x3d7be5, _0x102f53, _0x963c21);
        };
        _0x58d33a[_0x188f('0x16')] = _0x188f('0x17');
        _0x58d33a[_0x188f('0x18')] = _0x188f('0x19');
        _0x58d33a[_0x188f('0x1a')] = _0x188f('0x1b');
        _0x58d33a[_0x188f('0x1c')] = _0x188f('0x1d');
        _0x58d33a[_0x188f('0x1e')] = _0x188f('0x1f');
        _0x58d33a[_0x188f('0x20')] = function (_0x270fbf, _0x36a6bf, _0x4c1dc3) {
            return _0x270fbf(_0x36a6bf, _0x4c1dc3);
        };
        _0x58d33a[_0x188f('0x21')] = _0x188f('0x22');
        _0x58d33a[_0x188f('0x23')] = _0x188f('0x24');
        _0x58d33a[_0x188f('0x25')] = _0x188f('0x26');
        _0x58d33a[_0x188f('0x27')] = _0x188f('0x28');
        var _0xd794ae = this, _0x154c5d = _0xd794ae[_0x188f('0x29')], _0x577925 = _0xd794ae[_0x188f('0x2a')]['_c'] || _0x154c5d;
        return _0x58d33a[_0x188f('0x0')](_0x577925, _0x58d33a[_0x188f('0x1')], [
            _0xd794ae['_m'](0x0),
            _0x58d33a[_0x188f('0x3')](_0x577925, _0x58d33a[_0x188f('0x4')], {
                'attrs': { 'type': _0x58d33a[_0x188f('0x6')] },
                'on': { 'tab-click': _0xd794ae[_0x188f('0x2b')] },
                'model': {
                    'value': _0xd794ae[_0x188f('0x9')],
                    'callback': function (_0x423fe0) {
                        _0xd794ae[_0x188f('0x9')] = _0x423fe0;
                    },
                    'expression': _0x58d33a[_0x188f('0x8')]
                }
            }, [
                _0x58d33a[_0x188f('0xa')](_0x577925, _0x58d33a[_0x188f('0xb')], {
                    'attrs': {
                        'label': _0x58d33a[_0x188f('0xd')],
                        'name': _0x58d33a[_0x188f('0xf')]
                    }
                }, [_0xd794ae['_v'](_0x58d33a[_0x188f('0xd')])]),
                _0x58d33a[_0x188f('0xa')](_0x577925, _0x58d33a[_0x188f('0xb')], {
                    'attrs': {
                        'label': _0x58d33a[_0x188f('0x11')],
                        'name': _0x58d33a[_0x188f('0x13')]
                    }
                }, [_0x58d33a[_0x188f('0x15')](_0x577925, _0x58d33a[_0x188f('0x1')], {
                        'directives': [{
                                'name': _0x58d33a[_0x188f('0x16')],
                                'rawName': _0x58d33a[_0x188f('0x18')],
                                'value': _0xd794ae[_0x188f('0x1b')],
                                'expression': _0x58d33a[_0x188f('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0x58d33a[_0x188f('0x1c')],
                            'height': _0x58d33a[_0x188f('0x1e')]
                        }
                    }, [_0x58d33a[_0x188f('0x20')](_0x577925, _0x58d33a[_0x188f('0x21')], {
                            'ref': _0x58d33a[_0x188f('0x23')],
                            'attrs': { 'options': _0xd794ae[_0x188f('0x2c')] }
                        })], 0x1)]),
                _0x58d33a[_0x188f('0xa')](_0x577925, _0x58d33a[_0x188f('0xb')], {
                    'attrs': {
                        'label': _0x58d33a[_0x188f('0x25')],
                        'name': _0x58d33a[_0x188f('0x27')]
                    }
                }, [_0xd794ae['_v'](_0x58d33a[_0x188f('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x1608db = {};
            _0x1608db[_0x188f('0x2d')] = function (_0x30a4ae, _0xe7e1, _0xe6d912, _0x6f4919) {
                return _0x30a4ae(_0xe7e1, _0xe6d912, _0x6f4919);
            };
            _0x1608db[_0x188f('0x2e')] = _0x188f('0x2');
            _0x1608db[_0x188f('0x2f')] = _0x188f('0x30');
            _0x1608db[_0x188f('0x31')] = _0x188f('0x32');
            _0x1608db[_0x188f('0x33')] = _0x188f('0x34');
            _0x1608db[_0x188f('0x35')] = _0x188f('0x36');
            _0x1608db[_0x188f('0x37')] = function (_0x3a9632, _0x282314, _0x2c3ac0) {
                return _0x3a9632(_0x282314, _0x2c3ac0);
            };
            _0x1608db[_0x188f('0x38')] = _0x188f('0x39');
            var _0x4d072a = this, _0x8ee8e4 = _0x4d072a[_0x188f('0x29')], _0xd97af2 = _0x4d072a[_0x188f('0x2a')]['_c'] || _0x8ee8e4;
            return _0x1608db[_0x188f('0x2d')](_0xd97af2, _0x1608db[_0x188f('0x2e')], {
                'staticStyle': {
                    'padding': _0x1608db[_0x188f('0x2f')],
                    'color': _0x1608db[_0x188f('0x31')],
                    'width': _0x1608db[_0x188f('0x33')]
                }
            }, [
                _0x4d072a['_v'](_0x1608db[_0x188f('0x35')]),
                _0x1608db[_0x188f('0x37')](_0xd97af2, _0x1608db[_0x188f('0x2e')], [_0x4d072a['_v'](_0x1608db[_0x188f('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x188f('0x3a')] = _0x188f('0x3b');
l[_0x188f('0x3c')] = {};
l[_0x188f('0x3d')] = function () {
    var _0x259751 = {
        LdhUy: _0x188f('0x10'),
        xOupD: _0x188f('0x3e'),
        NWTbX: _0x188f('0x3f'),
        QDHyn: _0x188f('0x40'),
        Evffq: _0x188f('0x41'),
        OpTxk: _0x188f('0x42'),
        vOmAy: _0x188f('0x43'),
        KAwwv: _0x188f('0x44'),
        uPPek: _0x188f('0x45'),
        fOMgg: _0x188f('0x46'),
        UqMlz: _0x188f('0x47')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x259751.LdhUy,
        demoname: _0x259751.xOupD,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x259751.NWTbX,
                    layoutClassName: _0x259751.QDHyn,
                    defaultJunctionPoint: _0x259751.Evffq,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x259751.OpTxk,
                    max_per_width: _0x259751.vOmAy,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x259751.KAwwv
            },
            defaultExpandHolderPosition: _0x259751.uPPek,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x259751.fOMgg,
            defaultNodeColor: _0x259751.UqMlz
        }
    };
};
l[_0x188f('0x48')] = function () {
};
l[_0x188f('0x49')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x188f('0x4a')] = {};
l[_0x188f('0x4a')][_0x188f('0x4b')] = function () {
    var _0x46d68b = {
        OiGgg: _0x188f('0x4c'),
        EQDXw: _0x188f('0x4d'),
        ppluZ: _0x188f('0x4e'),
        ekgdO: _0x188f('0x4f'),
        zyaGf: _0x188f('0x50'),
        ycAGO: _0x188f('0x51'),
        iPkPh: _0x188f('0x52'),
        ejDXO: _0x188f('0x53'),
        YfEYJ: function (_0x2efaad, _0x44d1f7, _0x342687) {
            return _0x2efaad(_0x44d1f7, _0x342687);
        }
    };
    const _0x1b61b7 = {
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
                id: _0x46d68b.OiGgg,
                text: _0x46d68b.OiGgg
            },
            {
                id: _0x46d68b.EQDXw,
                text: _0x46d68b.EQDXw
            },
            {
                id: _0x46d68b.ppluZ,
                text: _0x46d68b.ppluZ
            },
            {
                id: _0x46d68b.ekgdO,
                text: _0x46d68b.ekgdO
            },
            {
                id: _0x46d68b.zyaGf,
                text: _0x46d68b.zyaGf
            },
            {
                id: _0x46d68b.ycAGO,
                text: _0x46d68b.ycAGO
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x46d68b.iPkPh,
                text: _0x46d68b.iPkPh
            },
            {
                id: _0x46d68b.ejDXO,
                text: _0x46d68b.ejDXO
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
                to: _0x46d68b.OiGgg
            },
            {
                from: 'b1',
                to: _0x46d68b.EQDXw
            },
            {
                from: 'b1',
                to: _0x46d68b.ppluZ
            },
            {
                from: 'b1',
                to: _0x46d68b.ekgdO
            },
            {
                from: 'b1',
                to: _0x46d68b.zyaGf
            },
            {
                from: 'b1',
                to: _0x46d68b.ycAGO
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x46d68b.iPkPh
            },
            {
                from: 'b2',
                to: _0x46d68b.ejDXO
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
    console.log(JSON.stringify(_0x1b61b7)), _0x46d68b.YfEYJ(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x1b61b7, _0x4b81f5 => {
            _0x4b81f5.refresh();
        });
    }, 0x3e8);
};
l[_0x188f('0x4a')][_0x188f('0x2b')] = function (_0x378590, _0x52dcdc) {
    var _0x1bb495 = {
        RVkMw: _0x188f('0x54'),
        OEVhh: function (_0x1873db, _0x4c38eb) {
            return _0x1873db === _0x4c38eb;
        },
        JIrgu: _0x188f('0x14')
    };
    console.log(_0x1bb495.RVkMw, this.activeTabName), _0x1bb495.OEVhh(this.activeTabName, _0x1bb495.JIrgu) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x2f480b(l, n, d, !0x1, c, null, null, null);
function c(_0x1e5d7d) {
    for (let _0x12d3aa in o)
        this[_0x12d3aa] = o[_0x12d3aa];
}
const m = function () {
    return s[_0x188f('0x55')];
}();
export {
    m as default
};