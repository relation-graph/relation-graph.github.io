
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4595 = [
    'XSVba',
    'calc(100vh\x20-\x20300px)',
    'GDEcU',
    'kMxMp',
    'RelationGraph',
    'nIWHx',
    'graphRef',
    'ODKNu',
    '风险信息',
    'amuvn',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'GgBzO',
    'mWWZJ',
    'zlNtL',
    '20px',
    'disFW',
    '#666666',
    'FyKOC',
    '600px',
    'SvujZ',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'SmJBZ',
    'WhjLP',
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
    'pmYUI',
    'rnXcW',
    'div',
    'JJLhR',
    'XJtUL',
    'el-tabs',
    'CCyFh',
    'card',
    'Codik',
    'activeTabName',
    'oPjYZ',
    'el-tab-pane',
    'wXWEx',
    '基本信息',
    'nqAhR',
    'base',
    'iaJrk',
    '关系图谱（点这里）',
    'MNRxM',
    'relation',
    'GurCb',
    'loading',
    'xhNHb',
    'v-loading',
    'NiFFv',
    'g_loading',
    'dOwlK',
    'calc(100%)'
];
(function (_0x309ad3, _0x22d5ac) {
    var _0x3a034e = function (_0x42782b) {
        while (--_0x42782b) {
            _0x309ad3['push'](_0x309ad3['shift']());
        }
    };
    _0x3a034e(++_0x22d5ac);
}(_0x4595, 0x134));
var _0x35bc = function (_0xfb115d, _0x5efbff) {
    _0xfb115d = _0xfb115d - 0x0;
    var _0x24467f = _0x4595[_0xfb115d];
    return _0x24467f;
};
import { n as _0x1daf94 } from './index-3a2b9e72.js';
var n = function () {
        var _0x27121f = {};
        _0x27121f[_0x35bc('0x0')] = function (_0x1f19c0, _0x9a4ad, _0x2c71b4, _0xa64f23) {
            return _0x1f19c0(_0x9a4ad, _0x2c71b4, _0xa64f23);
        };
        _0x27121f[_0x35bc('0x1')] = _0x35bc('0x2');
        _0x27121f[_0x35bc('0x3')] = function (_0x2737db, _0x5654ae, _0x30345b, _0x3ef26b, _0x341e7b) {
            return _0x2737db(_0x5654ae, _0x30345b, _0x3ef26b, _0x341e7b);
        };
        _0x27121f[_0x35bc('0x4')] = _0x35bc('0x5');
        _0x27121f[_0x35bc('0x6')] = _0x35bc('0x7');
        _0x27121f[_0x35bc('0x8')] = _0x35bc('0x9');
        _0x27121f[_0x35bc('0xa')] = _0x35bc('0xb');
        _0x27121f[_0x35bc('0xc')] = _0x35bc('0xd');
        _0x27121f[_0x35bc('0xe')] = _0x35bc('0xf');
        _0x27121f[_0x35bc('0x10')] = _0x35bc('0x11');
        _0x27121f[_0x35bc('0x12')] = _0x35bc('0x13');
        _0x27121f[_0x35bc('0x14')] = _0x35bc('0x15');
        _0x27121f[_0x35bc('0x16')] = _0x35bc('0x17');
        _0x27121f[_0x35bc('0x18')] = _0x35bc('0x19');
        _0x27121f[_0x35bc('0x1a')] = _0x35bc('0x1b');
        _0x27121f[_0x35bc('0x1c')] = _0x35bc('0x1d');
        _0x27121f[_0x35bc('0x1e')] = function (_0x4a1a29, _0x552acf, _0x22c4cc) {
            return _0x4a1a29(_0x552acf, _0x22c4cc);
        };
        _0x27121f[_0x35bc('0x1f')] = _0x35bc('0x20');
        _0x27121f[_0x35bc('0x21')] = _0x35bc('0x22');
        _0x27121f[_0x35bc('0x23')] = _0x35bc('0x24');
        _0x27121f[_0x35bc('0x25')] = _0x35bc('0x26');
        var _0xeef79d = this, _0x586997 = _0xeef79d[_0x35bc('0x27')], _0x1b12ee = _0xeef79d[_0x35bc('0x28')]['_c'] || _0x586997;
        return _0x27121f[_0x35bc('0x0')](_0x1b12ee, _0x27121f[_0x35bc('0x1')], [
            _0xeef79d['_m'](0x0),
            _0x27121f[_0x35bc('0x3')](_0x1b12ee, _0x27121f[_0x35bc('0x4')], {
                'attrs': { 'type': _0x27121f[_0x35bc('0x6')] },
                'on': { 'tab-click': _0xeef79d[_0x35bc('0x29')] },
                'model': {
                    'value': _0xeef79d[_0x35bc('0x9')],
                    'callback': function (_0x474663) {
                        _0xeef79d[_0x35bc('0x9')] = _0x474663;
                    },
                    'expression': _0x27121f[_0x35bc('0x8')]
                }
            }, [
                _0x27121f[_0x35bc('0x0')](_0x1b12ee, _0x27121f[_0x35bc('0xa')], {
                    'attrs': {
                        'label': _0x27121f[_0x35bc('0xc')],
                        'name': _0x27121f[_0x35bc('0xe')]
                    }
                }, [_0xeef79d['_v'](_0x27121f[_0x35bc('0xc')])]),
                _0x27121f[_0x35bc('0x0')](_0x1b12ee, _0x27121f[_0x35bc('0xa')], {
                    'attrs': {
                        'label': _0x27121f[_0x35bc('0x10')],
                        'name': _0x27121f[_0x35bc('0x12')]
                    }
                }, [_0x27121f[_0x35bc('0x3')](_0x1b12ee, _0x27121f[_0x35bc('0x1')], {
                        'directives': [{
                                'name': _0x27121f[_0x35bc('0x14')],
                                'rawName': _0x27121f[_0x35bc('0x16')],
                                'value': _0xeef79d[_0x35bc('0x19')],
                                'expression': _0x27121f[_0x35bc('0x18')]
                            }],
                        'staticStyle': {
                            'width': _0x27121f[_0x35bc('0x1a')],
                            'height': _0x27121f[_0x35bc('0x1c')]
                        }
                    }, [_0x27121f[_0x35bc('0x1e')](_0x1b12ee, _0x27121f[_0x35bc('0x1f')], {
                            'ref': _0x27121f[_0x35bc('0x21')],
                            'attrs': { 'options': _0xeef79d[_0x35bc('0x2a')] }
                        })], 0x1)]),
                _0x27121f[_0x35bc('0x0')](_0x1b12ee, _0x27121f[_0x35bc('0xa')], {
                    'attrs': {
                        'label': _0x27121f[_0x35bc('0x23')],
                        'name': _0x27121f[_0x35bc('0x25')]
                    }
                }, [_0xeef79d['_v'](_0x27121f[_0x35bc('0x23')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x405f8f = {};
            _0x405f8f[_0x35bc('0x2b')] = function (_0x1efc8c, _0x3f1a52, _0x51cb99, _0x388f04) {
                return _0x1efc8c(_0x3f1a52, _0x51cb99, _0x388f04);
            };
            _0x405f8f[_0x35bc('0x2c')] = _0x35bc('0x2');
            _0x405f8f[_0x35bc('0x2d')] = _0x35bc('0x2e');
            _0x405f8f[_0x35bc('0x2f')] = _0x35bc('0x30');
            _0x405f8f[_0x35bc('0x31')] = _0x35bc('0x32');
            _0x405f8f[_0x35bc('0x33')] = _0x35bc('0x34');
            _0x405f8f[_0x35bc('0x35')] = function (_0x35caea, _0x58c7b5, _0x5b8bd5) {
                return _0x35caea(_0x58c7b5, _0x5b8bd5);
            };
            _0x405f8f[_0x35bc('0x36')] = _0x35bc('0x37');
            var _0x460a48 = this, _0x3c212f = _0x460a48[_0x35bc('0x27')], _0x484201 = _0x460a48[_0x35bc('0x28')]['_c'] || _0x3c212f;
            return _0x405f8f[_0x35bc('0x2b')](_0x484201, _0x405f8f[_0x35bc('0x2c')], {
                'staticStyle': {
                    'padding': _0x405f8f[_0x35bc('0x2d')],
                    'color': _0x405f8f[_0x35bc('0x2f')],
                    'width': _0x405f8f[_0x35bc('0x31')]
                }
            }, [
                _0x460a48['_v'](_0x405f8f[_0x35bc('0x33')]),
                _0x405f8f[_0x35bc('0x35')](_0x484201, _0x405f8f[_0x35bc('0x2c')], [_0x460a48['_v'](_0x405f8f[_0x35bc('0x36')])])
            ]);
        }];
const l = {}, o = {};
l[_0x35bc('0x38')] = _0x35bc('0x39');
l[_0x35bc('0x3a')] = {};
l[_0x35bc('0x3b')] = function () {
    var _0x2161c4 = {
        FnwKy: _0x35bc('0xf'),
        oYuFh: _0x35bc('0x3c'),
        lqofu: _0x35bc('0x3d'),
        wOigJ: _0x35bc('0x3e'),
        VDIFG: _0x35bc('0x3f'),
        lAOgZ: _0x35bc('0x40'),
        tyIxm: _0x35bc('0x41'),
        CrJUF: _0x35bc('0x42'),
        GBNyS: _0x35bc('0x43'),
        FlWKZ: _0x35bc('0x44'),
        mSDQK: _0x35bc('0x45')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x2161c4.FnwKy,
        demoname: _0x2161c4.oYuFh,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x2161c4.lqofu,
                    layoutClassName: _0x2161c4.wOigJ,
                    defaultJunctionPoint: _0x2161c4.VDIFG,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x2161c4.lAOgZ,
                    max_per_width: _0x2161c4.tyIxm,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x2161c4.CrJUF
            },
            defaultExpandHolderPosition: _0x2161c4.GBNyS,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x2161c4.FlWKZ,
            defaultNodeColor: _0x2161c4.mSDQK
        }
    };
};
l[_0x35bc('0x46')] = function () {
};
l[_0x35bc('0x47')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x35bc('0x48')] = {};
l[_0x35bc('0x48')][_0x35bc('0x49')] = function () {
    var _0x2415b3 = {
        pcWyj: _0x35bc('0x4a'),
        aKIXu: _0x35bc('0x4b'),
        sMFlk: _0x35bc('0x4c'),
        DzZHJ: _0x35bc('0x4d'),
        YAbvt: _0x35bc('0x4e'),
        hyXPJ: _0x35bc('0x4f'),
        ruNSN: _0x35bc('0x50'),
        AoJWA: _0x35bc('0x51'),
        uUagI: function (_0x3435a3, _0x175106, _0x31e160) {
            return _0x3435a3(_0x175106, _0x31e160);
        }
    };
    const _0x1c62ef = {
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
                id: _0x2415b3.pcWyj,
                text: _0x2415b3.pcWyj
            },
            {
                id: _0x2415b3.aKIXu,
                text: _0x2415b3.aKIXu
            },
            {
                id: _0x2415b3.sMFlk,
                text: _0x2415b3.sMFlk
            },
            {
                id: _0x2415b3.DzZHJ,
                text: _0x2415b3.DzZHJ
            },
            {
                id: _0x2415b3.YAbvt,
                text: _0x2415b3.YAbvt
            },
            {
                id: _0x2415b3.hyXPJ,
                text: _0x2415b3.hyXPJ
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x2415b3.ruNSN,
                text: _0x2415b3.ruNSN
            },
            {
                id: _0x2415b3.AoJWA,
                text: _0x2415b3.AoJWA
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
                to: _0x2415b3.pcWyj
            },
            {
                from: 'b1',
                to: _0x2415b3.aKIXu
            },
            {
                from: 'b1',
                to: _0x2415b3.sMFlk
            },
            {
                from: 'b1',
                to: _0x2415b3.DzZHJ
            },
            {
                from: 'b1',
                to: _0x2415b3.YAbvt
            },
            {
                from: 'b1',
                to: _0x2415b3.hyXPJ
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x2415b3.ruNSN
            },
            {
                from: 'b2',
                to: _0x2415b3.AoJWA
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
    console.log(JSON.stringify(_0x1c62ef)), _0x2415b3.uUagI(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x1c62ef, _0x36c5de => {
            _0x36c5de.refresh();
        });
    }, 0x3e8);
};
l[_0x35bc('0x48')][_0x35bc('0x29')] = function (_0x18155c, _0x43b879) {
    var _0x5a6cce = {
        zfdxr: _0x35bc('0x52'),
        WoJzG: function (_0x45fc21, _0x355126) {
            return _0x45fc21 === _0x355126;
        },
        uNSnT: _0x35bc('0x13')
    };
    console.log(_0x5a6cce.zfdxr, this.activeTabName), _0x5a6cce.WoJzG(this.activeTabName, _0x5a6cce.uNSnT) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x1daf94(l, n, d, !0x1, c, null, null, null);
function c(_0x4c9470) {
    for (let _0x30dfa4 in o)
        this[_0x30dfa4] = o[_0x30dfa4];
}
const m = function () {
    return s[_0x35bc('0x53')];
}();
export {
    m as default
};