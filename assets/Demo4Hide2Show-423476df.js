
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x68b0 = [
    'sMONz',
    'el-tabs',
    'acTmP',
    'card',
    'HfXpx',
    'activeTabName',
    'KJwjn',
    'el-tab-pane',
    'TrouX',
    '基本信息',
    'YnsAz',
    'base',
    'Dghmi',
    'NnrVO',
    '关系图谱（点这里）',
    'kFEWe',
    'relation',
    'IryQq',
    'loading',
    'ZIaki',
    'v-loading',
    'aWgUw',
    'g_loading',
    'OSPWy',
    'calc(100%)',
    'JHRQv',
    'calc(100vh\x20-\x20300px)',
    'lVfRh',
    'herOi',
    'RelationGraph',
    'gFpcW',
    'graphRef',
    'LlpiU',
    '风险信息',
    'PseHe',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'wVXZX',
    'NzQts',
    'CRzYi',
    '20px',
    'mwQkg',
    '#666666',
    'BOODS',
    '600px',
    'SbZfg',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'vzdPU',
    'AxYaX',
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
    'vJWtX',
    'LwCqf',
    'div',
    'Kttsx'
];
(function (_0x760368, _0x2e83e1) {
    var _0xd3e445 = function (_0x39521d) {
        while (--_0x39521d) {
            _0x760368['push'](_0x760368['shift']());
        }
    };
    _0xd3e445(++_0x2e83e1);
}(_0x68b0, 0x1a5));
var _0x4c2c = function (_0x45d19f, _0x4bb264) {
    _0x45d19f = _0x45d19f - 0x0;
    var _0x2f777c = _0x68b0[_0x45d19f];
    return _0x2f777c;
};
import { n as _0x359bb3 } from './index-3f3d9b78.js';
var n = function () {
        var _0x5245af = {};
        _0x5245af[_0x4c2c('0x0')] = function (_0xd372b3, _0x4a5ac5, _0x4ed8f2, _0x24f3b4) {
            return _0xd372b3(_0x4a5ac5, _0x4ed8f2, _0x24f3b4);
        };
        _0x5245af[_0x4c2c('0x1')] = _0x4c2c('0x2');
        _0x5245af[_0x4c2c('0x3')] = function (_0x562555, _0x2dfcfb, _0x45c926, _0x2df755, _0x10822d) {
            return _0x562555(_0x2dfcfb, _0x45c926, _0x2df755, _0x10822d);
        };
        _0x5245af[_0x4c2c('0x4')] = _0x4c2c('0x5');
        _0x5245af[_0x4c2c('0x6')] = _0x4c2c('0x7');
        _0x5245af[_0x4c2c('0x8')] = _0x4c2c('0x9');
        _0x5245af[_0x4c2c('0xa')] = _0x4c2c('0xb');
        _0x5245af[_0x4c2c('0xc')] = _0x4c2c('0xd');
        _0x5245af[_0x4c2c('0xe')] = _0x4c2c('0xf');
        _0x5245af[_0x4c2c('0x10')] = function (_0x3e8ab9, _0x9455e4, _0x5104b3, _0x130551) {
            return _0x3e8ab9(_0x9455e4, _0x5104b3, _0x130551);
        };
        _0x5245af[_0x4c2c('0x11')] = _0x4c2c('0x12');
        _0x5245af[_0x4c2c('0x13')] = _0x4c2c('0x14');
        _0x5245af[_0x4c2c('0x15')] = _0x4c2c('0x16');
        _0x5245af[_0x4c2c('0x17')] = _0x4c2c('0x18');
        _0x5245af[_0x4c2c('0x19')] = _0x4c2c('0x1a');
        _0x5245af[_0x4c2c('0x1b')] = _0x4c2c('0x1c');
        _0x5245af[_0x4c2c('0x1d')] = _0x4c2c('0x1e');
        _0x5245af[_0x4c2c('0x1f')] = function (_0x464bd3, _0x59936a, _0x2a6915) {
            return _0x464bd3(_0x59936a, _0x2a6915);
        };
        _0x5245af[_0x4c2c('0x20')] = _0x4c2c('0x21');
        _0x5245af[_0x4c2c('0x22')] = _0x4c2c('0x23');
        _0x5245af[_0x4c2c('0x24')] = _0x4c2c('0x25');
        _0x5245af[_0x4c2c('0x26')] = _0x4c2c('0x27');
        var _0x54798c = this, _0x42af25 = _0x54798c[_0x4c2c('0x28')], _0x586a16 = _0x54798c[_0x4c2c('0x29')]['_c'] || _0x42af25;
        return _0x5245af[_0x4c2c('0x0')](_0x586a16, _0x5245af[_0x4c2c('0x1')], [
            _0x54798c['_m'](0x0),
            _0x5245af[_0x4c2c('0x3')](_0x586a16, _0x5245af[_0x4c2c('0x4')], {
                'attrs': { 'type': _0x5245af[_0x4c2c('0x6')] },
                'on': { 'tab-click': _0x54798c[_0x4c2c('0x2a')] },
                'model': {
                    'value': _0x54798c[_0x4c2c('0x9')],
                    'callback': function (_0x29ed5b) {
                        _0x54798c[_0x4c2c('0x9')] = _0x29ed5b;
                    },
                    'expression': _0x5245af[_0x4c2c('0x8')]
                }
            }, [
                _0x5245af[_0x4c2c('0x0')](_0x586a16, _0x5245af[_0x4c2c('0xa')], {
                    'attrs': {
                        'label': _0x5245af[_0x4c2c('0xc')],
                        'name': _0x5245af[_0x4c2c('0xe')]
                    }
                }, [_0x54798c['_v'](_0x5245af[_0x4c2c('0xc')])]),
                _0x5245af[_0x4c2c('0x10')](_0x586a16, _0x5245af[_0x4c2c('0xa')], {
                    'attrs': {
                        'label': _0x5245af[_0x4c2c('0x11')],
                        'name': _0x5245af[_0x4c2c('0x13')]
                    }
                }, [_0x5245af[_0x4c2c('0x3')](_0x586a16, _0x5245af[_0x4c2c('0x1')], {
                        'directives': [{
                                'name': _0x5245af[_0x4c2c('0x15')],
                                'rawName': _0x5245af[_0x4c2c('0x17')],
                                'value': _0x54798c[_0x4c2c('0x1a')],
                                'expression': _0x5245af[_0x4c2c('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x5245af[_0x4c2c('0x1b')],
                            'height': _0x5245af[_0x4c2c('0x1d')]
                        }
                    }, [_0x5245af[_0x4c2c('0x1f')](_0x586a16, _0x5245af[_0x4c2c('0x20')], {
                            'ref': _0x5245af[_0x4c2c('0x22')],
                            'attrs': { 'options': _0x54798c[_0x4c2c('0x2b')] }
                        })], 0x1)]),
                _0x5245af[_0x4c2c('0x10')](_0x586a16, _0x5245af[_0x4c2c('0xa')], {
                    'attrs': {
                        'label': _0x5245af[_0x4c2c('0x24')],
                        'name': _0x5245af[_0x4c2c('0x26')]
                    }
                }, [_0x54798c['_v'](_0x5245af[_0x4c2c('0x24')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x50a271 = {};
            _0x50a271[_0x4c2c('0x2c')] = function (_0x40b55b, _0x2426b0, _0x5e38fc, _0x3f22ce) {
                return _0x40b55b(_0x2426b0, _0x5e38fc, _0x3f22ce);
            };
            _0x50a271[_0x4c2c('0x2d')] = _0x4c2c('0x2');
            _0x50a271[_0x4c2c('0x2e')] = _0x4c2c('0x2f');
            _0x50a271[_0x4c2c('0x30')] = _0x4c2c('0x31');
            _0x50a271[_0x4c2c('0x32')] = _0x4c2c('0x33');
            _0x50a271[_0x4c2c('0x34')] = _0x4c2c('0x35');
            _0x50a271[_0x4c2c('0x36')] = function (_0x359b8a, _0x6eda70, _0x2dda3e) {
                return _0x359b8a(_0x6eda70, _0x2dda3e);
            };
            _0x50a271[_0x4c2c('0x37')] = _0x4c2c('0x38');
            var _0x3df247 = this, _0x130a7a = _0x3df247[_0x4c2c('0x28')], _0x48d7d3 = _0x3df247[_0x4c2c('0x29')]['_c'] || _0x130a7a;
            return _0x50a271[_0x4c2c('0x2c')](_0x48d7d3, _0x50a271[_0x4c2c('0x2d')], {
                'staticStyle': {
                    'padding': _0x50a271[_0x4c2c('0x2e')],
                    'color': _0x50a271[_0x4c2c('0x30')],
                    'width': _0x50a271[_0x4c2c('0x32')]
                }
            }, [
                _0x3df247['_v'](_0x50a271[_0x4c2c('0x34')]),
                _0x50a271[_0x4c2c('0x36')](_0x48d7d3, _0x50a271[_0x4c2c('0x2d')], [_0x3df247['_v'](_0x50a271[_0x4c2c('0x37')])])
            ]);
        }];
const l = {}, o = {};
l[_0x4c2c('0x39')] = _0x4c2c('0x3a');
l[_0x4c2c('0x3b')] = {};
l[_0x4c2c('0x3c')] = function () {
    var _0x461be3 = {
        yXSQw: _0x4c2c('0xf'),
        lJhaK: _0x4c2c('0x3d'),
        kfmlE: _0x4c2c('0x3e'),
        aDaWz: _0x4c2c('0x3f'),
        DjcOL: _0x4c2c('0x40'),
        QAMbU: _0x4c2c('0x41'),
        EISit: _0x4c2c('0x42'),
        qSBAh: _0x4c2c('0x43'),
        jIQtt: _0x4c2c('0x44'),
        rfPjM: _0x4c2c('0x45'),
        HssdP: _0x4c2c('0x46')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x461be3.yXSQw,
        demoname: _0x461be3.lJhaK,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x461be3.kfmlE,
                    layoutClassName: _0x461be3.aDaWz,
                    defaultJunctionPoint: _0x461be3.DjcOL,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x461be3.QAMbU,
                    max_per_width: _0x461be3.EISit,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x461be3.qSBAh
            },
            defaultExpandHolderPosition: _0x461be3.jIQtt,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x461be3.rfPjM,
            defaultNodeColor: _0x461be3.HssdP
        }
    };
};
l[_0x4c2c('0x47')] = function () {
};
l[_0x4c2c('0x48')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x4c2c('0x49')] = {};
l[_0x4c2c('0x49')][_0x4c2c('0x4a')] = function () {
    var _0x258a34 = {
        KgEhi: _0x4c2c('0x4b'),
        yuPyo: _0x4c2c('0x4c'),
        XrcNY: _0x4c2c('0x4d'),
        YPCcT: _0x4c2c('0x4e'),
        urmrH: _0x4c2c('0x4f'),
        RseEG: _0x4c2c('0x50'),
        qeloL: _0x4c2c('0x51'),
        steQP: _0x4c2c('0x52'),
        LlAgd: function (_0x322cf6, _0x445736, _0x399257) {
            return _0x322cf6(_0x445736, _0x399257);
        }
    };
    const _0x21b894 = {
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
                id: _0x258a34.KgEhi,
                text: _0x258a34.KgEhi
            },
            {
                id: _0x258a34.yuPyo,
                text: _0x258a34.yuPyo
            },
            {
                id: _0x258a34.XrcNY,
                text: _0x258a34.XrcNY
            },
            {
                id: _0x258a34.YPCcT,
                text: _0x258a34.YPCcT
            },
            {
                id: _0x258a34.urmrH,
                text: _0x258a34.urmrH
            },
            {
                id: _0x258a34.RseEG,
                text: _0x258a34.RseEG
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x258a34.qeloL,
                text: _0x258a34.qeloL
            },
            {
                id: _0x258a34.steQP,
                text: _0x258a34.steQP
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
                to: _0x258a34.KgEhi
            },
            {
                from: 'b1',
                to: _0x258a34.yuPyo
            },
            {
                from: 'b1',
                to: _0x258a34.XrcNY
            },
            {
                from: 'b1',
                to: _0x258a34.YPCcT
            },
            {
                from: 'b1',
                to: _0x258a34.urmrH
            },
            {
                from: 'b1',
                to: _0x258a34.RseEG
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x258a34.qeloL
            },
            {
                from: 'b2',
                to: _0x258a34.steQP
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
    console.log(JSON.stringify(_0x21b894)), _0x258a34.LlAgd(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x21b894, _0x4a1797 => {
            _0x4a1797.refresh();
        });
    }, 0x3e8);
};
l[_0x4c2c('0x49')][_0x4c2c('0x2a')] = function (_0x4e17d8, _0x2725ca) {
    var _0x563999 = {
        TkmGR: _0x4c2c('0x53'),
        NOzdb: function (_0x59e24b, _0x4b10b1) {
            return _0x59e24b === _0x4b10b1;
        },
        ESPEW: _0x4c2c('0x14')
    };
    console.log(_0x563999.TkmGR, this.activeTabName), _0x563999.NOzdb(this.activeTabName, _0x563999.ESPEW) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x359bb3(l, n, d, !0x1, c, null, null, null);
function c(_0x43967f) {
    for (let _0x4b2436 in o)
        this[_0x4b2436] = o[_0x4b2436];
}
const m = function () {
    return s[_0x4c2c('0x54')];
}();
export {
    m as default
};