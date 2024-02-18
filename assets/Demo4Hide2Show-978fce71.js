
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x16a1 = [
    'Nbofz',
    'zAvSO',
    'eKXCS',
    '20px',
    'ZMfoc',
    '#666666',
    'hrYSS',
    '600px',
    'ErWhL',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'FfkRV',
    'NKvKL',
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
    'mcopb',
    'duwxf',
    'div',
    'WnTeE',
    'CEBAz',
    'el-tabs',
    'CuteJ',
    'card',
    'KeYIV',
    'activeTabName',
    'PjXsG',
    'el-tab-pane',
    'YyJFo',
    '基本信息',
    'lNjhy',
    'base',
    'KlniA',
    'sEKbV',
    '关系图谱（点这里）',
    'dZApQ',
    'relation',
    'RchBi',
    'loading',
    'lgJwi',
    'v-loading',
    'oIXfN',
    'g_loading',
    'SYMpq',
    'calc(100%)',
    'SibQB',
    'calc(100vh\x20-\x20300px)',
    'GurUa',
    'CrSqk',
    'RelationGraph',
    'uQaGJ',
    'graphRef',
    'LPjWs',
    'VAUvQ',
    '风险信息',
    'gurZI',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions'
];
(function (_0x3ffa1e, _0x9b679c) {
    var _0x417d16 = function (_0x4a5f0f) {
        while (--_0x4a5f0f) {
            _0x3ffa1e['push'](_0x3ffa1e['shift']());
        }
    };
    _0x417d16(++_0x9b679c);
}(_0x16a1, 0xd5));
var _0x111e = function (_0x443845, _0x2db8e8) {
    _0x443845 = _0x443845 - 0x0;
    var _0x5172a6 = _0x16a1[_0x443845];
    return _0x5172a6;
};
import { n as _0x5ea1d3 } from './index-a776829b.js';
var n = function () {
        var _0x4ad9d2 = {};
        _0x4ad9d2[_0x111e('0x0')] = function (_0x4274bc, _0x549a80, _0x1df5f3, _0x12d523) {
            return _0x4274bc(_0x549a80, _0x1df5f3, _0x12d523);
        };
        _0x4ad9d2[_0x111e('0x1')] = _0x111e('0x2');
        _0x4ad9d2[_0x111e('0x3')] = function (_0x5014e2, _0x1bbfcc, _0x862aef, _0x1705cc, _0x38a3bc) {
            return _0x5014e2(_0x1bbfcc, _0x862aef, _0x1705cc, _0x38a3bc);
        };
        _0x4ad9d2[_0x111e('0x4')] = _0x111e('0x5');
        _0x4ad9d2[_0x111e('0x6')] = _0x111e('0x7');
        _0x4ad9d2[_0x111e('0x8')] = _0x111e('0x9');
        _0x4ad9d2[_0x111e('0xa')] = _0x111e('0xb');
        _0x4ad9d2[_0x111e('0xc')] = _0x111e('0xd');
        _0x4ad9d2[_0x111e('0xe')] = _0x111e('0xf');
        _0x4ad9d2[_0x111e('0x10')] = function (_0x2295bc, _0x3cb2fd, _0x4e527d, _0x3af186) {
            return _0x2295bc(_0x3cb2fd, _0x4e527d, _0x3af186);
        };
        _0x4ad9d2[_0x111e('0x11')] = _0x111e('0x12');
        _0x4ad9d2[_0x111e('0x13')] = _0x111e('0x14');
        _0x4ad9d2[_0x111e('0x15')] = _0x111e('0x16');
        _0x4ad9d2[_0x111e('0x17')] = _0x111e('0x18');
        _0x4ad9d2[_0x111e('0x19')] = _0x111e('0x1a');
        _0x4ad9d2[_0x111e('0x1b')] = _0x111e('0x1c');
        _0x4ad9d2[_0x111e('0x1d')] = _0x111e('0x1e');
        _0x4ad9d2[_0x111e('0x1f')] = function (_0x2405da, _0x3be984, _0x209c46) {
            return _0x2405da(_0x3be984, _0x209c46);
        };
        _0x4ad9d2[_0x111e('0x20')] = _0x111e('0x21');
        _0x4ad9d2[_0x111e('0x22')] = _0x111e('0x23');
        _0x4ad9d2[_0x111e('0x24')] = function (_0x4fcd27, _0x2e3ef1, _0xf45936, _0x594ccd) {
            return _0x4fcd27(_0x2e3ef1, _0xf45936, _0x594ccd);
        };
        _0x4ad9d2[_0x111e('0x25')] = _0x111e('0x26');
        _0x4ad9d2[_0x111e('0x27')] = _0x111e('0x28');
        var _0x2fa3f2 = this, _0x1eada2 = _0x2fa3f2[_0x111e('0x29')], _0x3054aa = _0x2fa3f2[_0x111e('0x2a')]['_c'] || _0x1eada2;
        return _0x4ad9d2[_0x111e('0x0')](_0x3054aa, _0x4ad9d2[_0x111e('0x1')], [
            _0x2fa3f2['_m'](0x0),
            _0x4ad9d2[_0x111e('0x3')](_0x3054aa, _0x4ad9d2[_0x111e('0x4')], {
                'attrs': { 'type': _0x4ad9d2[_0x111e('0x6')] },
                'on': { 'tab-click': _0x2fa3f2[_0x111e('0x2b')] },
                'model': {
                    'value': _0x2fa3f2[_0x111e('0x9')],
                    'callback': function (_0x3571f1) {
                        _0x2fa3f2[_0x111e('0x9')] = _0x3571f1;
                    },
                    'expression': _0x4ad9d2[_0x111e('0x8')]
                }
            }, [
                _0x4ad9d2[_0x111e('0x0')](_0x3054aa, _0x4ad9d2[_0x111e('0xa')], {
                    'attrs': {
                        'label': _0x4ad9d2[_0x111e('0xc')],
                        'name': _0x4ad9d2[_0x111e('0xe')]
                    }
                }, [_0x2fa3f2['_v'](_0x4ad9d2[_0x111e('0xc')])]),
                _0x4ad9d2[_0x111e('0x10')](_0x3054aa, _0x4ad9d2[_0x111e('0xa')], {
                    'attrs': {
                        'label': _0x4ad9d2[_0x111e('0x11')],
                        'name': _0x4ad9d2[_0x111e('0x13')]
                    }
                }, [_0x4ad9d2[_0x111e('0x3')](_0x3054aa, _0x4ad9d2[_0x111e('0x1')], {
                        'directives': [{
                                'name': _0x4ad9d2[_0x111e('0x15')],
                                'rawName': _0x4ad9d2[_0x111e('0x17')],
                                'value': _0x2fa3f2[_0x111e('0x1a')],
                                'expression': _0x4ad9d2[_0x111e('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x4ad9d2[_0x111e('0x1b')],
                            'height': _0x4ad9d2[_0x111e('0x1d')]
                        }
                    }, [_0x4ad9d2[_0x111e('0x1f')](_0x3054aa, _0x4ad9d2[_0x111e('0x20')], {
                            'ref': _0x4ad9d2[_0x111e('0x22')],
                            'attrs': { 'options': _0x2fa3f2[_0x111e('0x2c')] }
                        })], 0x1)]),
                _0x4ad9d2[_0x111e('0x24')](_0x3054aa, _0x4ad9d2[_0x111e('0xa')], {
                    'attrs': {
                        'label': _0x4ad9d2[_0x111e('0x25')],
                        'name': _0x4ad9d2[_0x111e('0x27')]
                    }
                }, [_0x2fa3f2['_v'](_0x4ad9d2[_0x111e('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x36896d = {};
            _0x36896d[_0x111e('0x2d')] = function (_0x4e4970, _0x363033, _0x43b440, _0x5b5fe0) {
                return _0x4e4970(_0x363033, _0x43b440, _0x5b5fe0);
            };
            _0x36896d[_0x111e('0x2e')] = _0x111e('0x2');
            _0x36896d[_0x111e('0x2f')] = _0x111e('0x30');
            _0x36896d[_0x111e('0x31')] = _0x111e('0x32');
            _0x36896d[_0x111e('0x33')] = _0x111e('0x34');
            _0x36896d[_0x111e('0x35')] = _0x111e('0x36');
            _0x36896d[_0x111e('0x37')] = function (_0x32bd1b, _0x4c0309, _0xaaae41) {
                return _0x32bd1b(_0x4c0309, _0xaaae41);
            };
            _0x36896d[_0x111e('0x38')] = _0x111e('0x39');
            var _0x50e05d = this, _0x209550 = _0x50e05d[_0x111e('0x29')], _0xb48a0b = _0x50e05d[_0x111e('0x2a')]['_c'] || _0x209550;
            return _0x36896d[_0x111e('0x2d')](_0xb48a0b, _0x36896d[_0x111e('0x2e')], {
                'staticStyle': {
                    'padding': _0x36896d[_0x111e('0x2f')],
                    'color': _0x36896d[_0x111e('0x31')],
                    'width': _0x36896d[_0x111e('0x33')]
                }
            }, [
                _0x50e05d['_v'](_0x36896d[_0x111e('0x35')]),
                _0x36896d[_0x111e('0x37')](_0xb48a0b, _0x36896d[_0x111e('0x2e')], [_0x50e05d['_v'](_0x36896d[_0x111e('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x111e('0x3a')] = _0x111e('0x3b');
l[_0x111e('0x3c')] = {};
l[_0x111e('0x3d')] = function () {
    var _0x3749e8 = {
        nQSZq: _0x111e('0xf'),
        PtUBy: _0x111e('0x3e'),
        HEFYQ: _0x111e('0x3f'),
        kRmjP: _0x111e('0x40'),
        sgzDL: _0x111e('0x41'),
        MDoBi: _0x111e('0x42'),
        KGDef: _0x111e('0x43'),
        DLoSx: _0x111e('0x44'),
        SNfzi: _0x111e('0x45'),
        bQFKz: _0x111e('0x46'),
        zsVXN: _0x111e('0x47')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x3749e8.nQSZq,
        demoname: _0x3749e8.PtUBy,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x3749e8.HEFYQ,
                    layoutClassName: _0x3749e8.kRmjP,
                    defaultJunctionPoint: _0x3749e8.sgzDL,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x3749e8.MDoBi,
                    max_per_width: _0x3749e8.KGDef,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x3749e8.DLoSx
            },
            defaultExpandHolderPosition: _0x3749e8.SNfzi,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x3749e8.bQFKz,
            defaultNodeColor: _0x3749e8.zsVXN
        }
    };
};
l[_0x111e('0x48')] = function () {
};
l[_0x111e('0x49')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x111e('0x4a')] = {};
l[_0x111e('0x4a')][_0x111e('0x4b')] = function () {
    var _0x492221 = {
        ZAYir: _0x111e('0x4c'),
        UkTSz: _0x111e('0x4d'),
        cZRTy: _0x111e('0x4e'),
        crfcn: _0x111e('0x4f'),
        xwUwx: _0x111e('0x50'),
        uoSbG: _0x111e('0x51'),
        wWWvj: _0x111e('0x52'),
        vkDvv: _0x111e('0x53'),
        hImDj: function (_0x4323e5, _0x53beb1, _0x2e68e5) {
            return _0x4323e5(_0x53beb1, _0x2e68e5);
        }
    };
    const _0x30f138 = {
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
                id: _0x492221.ZAYir,
                text: _0x492221.ZAYir
            },
            {
                id: _0x492221.UkTSz,
                text: _0x492221.UkTSz
            },
            {
                id: _0x492221.cZRTy,
                text: _0x492221.cZRTy
            },
            {
                id: _0x492221.crfcn,
                text: _0x492221.crfcn
            },
            {
                id: _0x492221.xwUwx,
                text: _0x492221.xwUwx
            },
            {
                id: _0x492221.uoSbG,
                text: _0x492221.uoSbG
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x492221.wWWvj,
                text: _0x492221.wWWvj
            },
            {
                id: _0x492221.vkDvv,
                text: _0x492221.vkDvv
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
                to: _0x492221.ZAYir
            },
            {
                from: 'b1',
                to: _0x492221.UkTSz
            },
            {
                from: 'b1',
                to: _0x492221.cZRTy
            },
            {
                from: 'b1',
                to: _0x492221.crfcn
            },
            {
                from: 'b1',
                to: _0x492221.xwUwx
            },
            {
                from: 'b1',
                to: _0x492221.uoSbG
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x492221.wWWvj
            },
            {
                from: 'b2',
                to: _0x492221.vkDvv
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
    console.log(JSON.stringify(_0x30f138)), _0x492221.hImDj(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x30f138, _0x2543eb => {
            _0x2543eb.refresh();
        });
    }, 0x3e8);
};
l[_0x111e('0x4a')][_0x111e('0x2b')] = function (_0x3a822d, _0x4835a3) {
    var _0x51b79c = {
        XmlwO: _0x111e('0x54'),
        rQvKL: function (_0x1ab939, _0x325e98) {
            return _0x1ab939 === _0x325e98;
        },
        PClXr: _0x111e('0x14')
    };
    console.log(_0x51b79c.XmlwO, this.activeTabName), _0x51b79c.rQvKL(this.activeTabName, _0x51b79c.PClXr) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x5ea1d3(l, n, d, !0x1, c, null, null, null);
function c(_0x51ed26) {
    for (let _0xf9908c in o)
        this[_0xf9908c] = o[_0xf9908c];
}
const m = function () {
    return s[_0x111e('0x55')];
}();
export {
    m as default
};