
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1095 = [
    'OVJqJ',
    '20px',
    'TTcUR',
    '#666666',
    'FUTga',
    '600px',
    'tBmFS',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'oQguT',
    'oAjhd',
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
    'sOKyd',
    'syhBC',
    'div',
    'liiOX',
    'zEnzB',
    'el-tabs',
    'Wytan',
    'card',
    'DebDI',
    'activeTabName',
    'KNKOD',
    'zJJxP',
    'el-tab-pane',
    'QAkoH',
    '基本信息',
    'BwcHG',
    'base',
    'MQFag',
    '关系图谱（点这里）',
    'rubZD',
    'relation',
    'yCzaf',
    'loading',
    'thzKw',
    'v-loading',
    'cAWbC',
    'g_loading',
    'IIYzv',
    'calc(100%)',
    'LyFov',
    'calc(100vh\x20-\x20300px)',
    'tUcrv',
    'QqoyA',
    'RelationGraph',
    'iCbRc',
    'graphRef',
    'SKIRI',
    '风险信息',
    'fhnKS',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'dZpzu',
    'bgnVM'
];
(function (_0x43d32f, _0x3a9bde) {
    var _0x4b4c20 = function (_0x44f150) {
        while (--_0x44f150) {
            _0x43d32f['push'](_0x43d32f['shift']());
        }
    };
    _0x4b4c20(++_0x3a9bde);
}(_0x1095, 0x1d0));
var _0x4cfa = function (_0x163cf1, _0x298d80) {
    _0x163cf1 = _0x163cf1 - 0x0;
    var _0x528fbf = _0x1095[_0x163cf1];
    return _0x528fbf;
};
import { n as _0x3eb5b1 } from './index-19b173b5.js';
var n = function () {
        var _0x2e385e = {};
        _0x2e385e[_0x4cfa('0x0')] = function (_0x244a5b, _0x2afaa4, _0x186209, _0x20f5e5) {
            return _0x244a5b(_0x2afaa4, _0x186209, _0x20f5e5);
        };
        _0x2e385e[_0x4cfa('0x1')] = _0x4cfa('0x2');
        _0x2e385e[_0x4cfa('0x3')] = function (_0x2fbccf, _0x14f9a1, _0x397e4, _0x2a6645, _0x9c5592) {
            return _0x2fbccf(_0x14f9a1, _0x397e4, _0x2a6645, _0x9c5592);
        };
        _0x2e385e[_0x4cfa('0x4')] = _0x4cfa('0x5');
        _0x2e385e[_0x4cfa('0x6')] = _0x4cfa('0x7');
        _0x2e385e[_0x4cfa('0x8')] = _0x4cfa('0x9');
        _0x2e385e[_0x4cfa('0xa')] = function (_0x335ef1, _0x23a095, _0x228dc6, _0x4d69c5) {
            return _0x335ef1(_0x23a095, _0x228dc6, _0x4d69c5);
        };
        _0x2e385e[_0x4cfa('0xb')] = _0x4cfa('0xc');
        _0x2e385e[_0x4cfa('0xd')] = _0x4cfa('0xe');
        _0x2e385e[_0x4cfa('0xf')] = _0x4cfa('0x10');
        _0x2e385e[_0x4cfa('0x11')] = _0x4cfa('0x12');
        _0x2e385e[_0x4cfa('0x13')] = _0x4cfa('0x14');
        _0x2e385e[_0x4cfa('0x15')] = _0x4cfa('0x16');
        _0x2e385e[_0x4cfa('0x17')] = _0x4cfa('0x18');
        _0x2e385e[_0x4cfa('0x19')] = _0x4cfa('0x1a');
        _0x2e385e[_0x4cfa('0x1b')] = _0x4cfa('0x1c');
        _0x2e385e[_0x4cfa('0x1d')] = _0x4cfa('0x1e');
        _0x2e385e[_0x4cfa('0x1f')] = function (_0x11e890, _0x5befc3, _0x409d20) {
            return _0x11e890(_0x5befc3, _0x409d20);
        };
        _0x2e385e[_0x4cfa('0x20')] = _0x4cfa('0x21');
        _0x2e385e[_0x4cfa('0x22')] = _0x4cfa('0x23');
        _0x2e385e[_0x4cfa('0x24')] = _0x4cfa('0x25');
        _0x2e385e[_0x4cfa('0x26')] = _0x4cfa('0x27');
        var _0x3b5bc6 = this, _0x2ced78 = _0x3b5bc6[_0x4cfa('0x28')], _0x35de54 = _0x3b5bc6[_0x4cfa('0x29')]['_c'] || _0x2ced78;
        return _0x2e385e[_0x4cfa('0x0')](_0x35de54, _0x2e385e[_0x4cfa('0x1')], [
            _0x3b5bc6['_m'](0x0),
            _0x2e385e[_0x4cfa('0x3')](_0x35de54, _0x2e385e[_0x4cfa('0x4')], {
                'attrs': { 'type': _0x2e385e[_0x4cfa('0x6')] },
                'on': { 'tab-click': _0x3b5bc6[_0x4cfa('0x2a')] },
                'model': {
                    'value': _0x3b5bc6[_0x4cfa('0x9')],
                    'callback': function (_0x44cee2) {
                        _0x3b5bc6[_0x4cfa('0x9')] = _0x44cee2;
                    },
                    'expression': _0x2e385e[_0x4cfa('0x8')]
                }
            }, [
                _0x2e385e[_0x4cfa('0xa')](_0x35de54, _0x2e385e[_0x4cfa('0xb')], {
                    'attrs': {
                        'label': _0x2e385e[_0x4cfa('0xd')],
                        'name': _0x2e385e[_0x4cfa('0xf')]
                    }
                }, [_0x3b5bc6['_v'](_0x2e385e[_0x4cfa('0xd')])]),
                _0x2e385e[_0x4cfa('0xa')](_0x35de54, _0x2e385e[_0x4cfa('0xb')], {
                    'attrs': {
                        'label': _0x2e385e[_0x4cfa('0x11')],
                        'name': _0x2e385e[_0x4cfa('0x13')]
                    }
                }, [_0x2e385e[_0x4cfa('0x3')](_0x35de54, _0x2e385e[_0x4cfa('0x1')], {
                        'directives': [{
                                'name': _0x2e385e[_0x4cfa('0x15')],
                                'rawName': _0x2e385e[_0x4cfa('0x17')],
                                'value': _0x3b5bc6[_0x4cfa('0x1a')],
                                'expression': _0x2e385e[_0x4cfa('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x2e385e[_0x4cfa('0x1b')],
                            'height': _0x2e385e[_0x4cfa('0x1d')]
                        }
                    }, [_0x2e385e[_0x4cfa('0x1f')](_0x35de54, _0x2e385e[_0x4cfa('0x20')], {
                            'ref': _0x2e385e[_0x4cfa('0x22')],
                            'attrs': { 'options': _0x3b5bc6[_0x4cfa('0x2b')] }
                        })], 0x1)]),
                _0x2e385e[_0x4cfa('0xa')](_0x35de54, _0x2e385e[_0x4cfa('0xb')], {
                    'attrs': {
                        'label': _0x2e385e[_0x4cfa('0x24')],
                        'name': _0x2e385e[_0x4cfa('0x26')]
                    }
                }, [_0x3b5bc6['_v'](_0x2e385e[_0x4cfa('0x24')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x5230d1 = {};
            _0x5230d1[_0x4cfa('0x2c')] = function (_0x6997c5, _0x53c7c4, _0x573c48, _0x42d36a) {
                return _0x6997c5(_0x53c7c4, _0x573c48, _0x42d36a);
            };
            _0x5230d1[_0x4cfa('0x2d')] = _0x4cfa('0x2');
            _0x5230d1[_0x4cfa('0x2e')] = _0x4cfa('0x2f');
            _0x5230d1[_0x4cfa('0x30')] = _0x4cfa('0x31');
            _0x5230d1[_0x4cfa('0x32')] = _0x4cfa('0x33');
            _0x5230d1[_0x4cfa('0x34')] = _0x4cfa('0x35');
            _0x5230d1[_0x4cfa('0x36')] = function (_0x301fbe, _0x4c219b, _0x2031bf) {
                return _0x301fbe(_0x4c219b, _0x2031bf);
            };
            _0x5230d1[_0x4cfa('0x37')] = _0x4cfa('0x38');
            var _0x47d9cb = this, _0x3dc240 = _0x47d9cb[_0x4cfa('0x28')], _0x552012 = _0x47d9cb[_0x4cfa('0x29')]['_c'] || _0x3dc240;
            return _0x5230d1[_0x4cfa('0x2c')](_0x552012, _0x5230d1[_0x4cfa('0x2d')], {
                'staticStyle': {
                    'padding': _0x5230d1[_0x4cfa('0x2e')],
                    'color': _0x5230d1[_0x4cfa('0x30')],
                    'width': _0x5230d1[_0x4cfa('0x32')]
                }
            }, [
                _0x47d9cb['_v'](_0x5230d1[_0x4cfa('0x34')]),
                _0x5230d1[_0x4cfa('0x36')](_0x552012, _0x5230d1[_0x4cfa('0x2d')], [_0x47d9cb['_v'](_0x5230d1[_0x4cfa('0x37')])])
            ]);
        }];
const l = {}, o = {};
l[_0x4cfa('0x39')] = _0x4cfa('0x3a');
l[_0x4cfa('0x3b')] = {};
l[_0x4cfa('0x3c')] = function () {
    var _0xd5e52b = {
        wMbEB: _0x4cfa('0x10'),
        yJDPi: _0x4cfa('0x3d'),
        BdYYz: _0x4cfa('0x3e'),
        HXlKE: _0x4cfa('0x3f'),
        qrfOa: _0x4cfa('0x40'),
        gpeFn: _0x4cfa('0x41'),
        KWFhA: _0x4cfa('0x42'),
        ndgyV: _0x4cfa('0x43'),
        EaMfT: _0x4cfa('0x44'),
        xovwL: _0x4cfa('0x45'),
        dMBSh: _0x4cfa('0x46')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0xd5e52b.wMbEB,
        demoname: _0xd5e52b.yJDPi,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0xd5e52b.BdYYz,
                    layoutClassName: _0xd5e52b.HXlKE,
                    defaultJunctionPoint: _0xd5e52b.qrfOa,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0xd5e52b.gpeFn,
                    max_per_width: _0xd5e52b.KWFhA,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0xd5e52b.ndgyV
            },
            defaultExpandHolderPosition: _0xd5e52b.EaMfT,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0xd5e52b.xovwL,
            defaultNodeColor: _0xd5e52b.dMBSh
        }
    };
};
l[_0x4cfa('0x47')] = function () {
};
l[_0x4cfa('0x48')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x4cfa('0x49')] = {};
l[_0x4cfa('0x49')][_0x4cfa('0x4a')] = function () {
    var _0x4de80f = {
        XCKwR: _0x4cfa('0x4b'),
        JjPOh: _0x4cfa('0x4c'),
        wIbZF: _0x4cfa('0x4d'),
        bEuqx: _0x4cfa('0x4e'),
        buFgh: _0x4cfa('0x4f'),
        BzgbI: _0x4cfa('0x50'),
        ZAbUP: _0x4cfa('0x51'),
        whZoC: _0x4cfa('0x52'),
        zZppq: function (_0x18f014, _0xdc0c11, _0x177d7b) {
            return _0x18f014(_0xdc0c11, _0x177d7b);
        }
    };
    const _0x46e46b = {
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
                id: _0x4de80f.XCKwR,
                text: _0x4de80f.XCKwR
            },
            {
                id: _0x4de80f.JjPOh,
                text: _0x4de80f.JjPOh
            },
            {
                id: _0x4de80f.wIbZF,
                text: _0x4de80f.wIbZF
            },
            {
                id: _0x4de80f.bEuqx,
                text: _0x4de80f.bEuqx
            },
            {
                id: _0x4de80f.buFgh,
                text: _0x4de80f.buFgh
            },
            {
                id: _0x4de80f.BzgbI,
                text: _0x4de80f.BzgbI
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x4de80f.ZAbUP,
                text: _0x4de80f.ZAbUP
            },
            {
                id: _0x4de80f.whZoC,
                text: _0x4de80f.whZoC
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
                to: _0x4de80f.XCKwR
            },
            {
                from: 'b1',
                to: _0x4de80f.JjPOh
            },
            {
                from: 'b1',
                to: _0x4de80f.wIbZF
            },
            {
                from: 'b1',
                to: _0x4de80f.bEuqx
            },
            {
                from: 'b1',
                to: _0x4de80f.buFgh
            },
            {
                from: 'b1',
                to: _0x4de80f.BzgbI
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x4de80f.ZAbUP
            },
            {
                from: 'b2',
                to: _0x4de80f.whZoC
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
    console.log(JSON.stringify(_0x46e46b)), _0x4de80f.zZppq(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x46e46b, _0x365b4f => {
            _0x365b4f.refresh();
        });
    }, 0x3e8);
};
l[_0x4cfa('0x49')][_0x4cfa('0x2a')] = function (_0x5e5641, _0x106b38) {
    var _0x362c03 = {
        UlNLe: _0x4cfa('0x53'),
        ichPR: function (_0x24260e, _0x3afe92) {
            return _0x24260e === _0x3afe92;
        },
        qvOJb: _0x4cfa('0x14')
    };
    console.log(_0x362c03.UlNLe, this.activeTabName), _0x362c03.ichPR(this.activeTabName, _0x362c03.qvOJb) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x3eb5b1(l, n, d, !0x1, c, null, null, null);
function c(_0x228c3f) {
    for (let _0x330365 in o)
        this[_0x330365] = o[_0x330365];
}
const m = function () {
    return s[_0x4cfa('0x54')];
}();
export {
    m as default
};