
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2740 = [
    'this.activeTabName:',
    'exports',
    'tbZSc',
    'vjcWD',
    'div',
    'TDBDV',
    'XYrCr',
    'el-tabs',
    'DAyQG',
    'card',
    'tnvhg',
    'activeTabName',
    'uWzKR',
    'el-tab-pane',
    'norFD',
    '基本信息',
    'UHJQC',
    'base',
    'RjlzT',
    'zhMjk',
    '关系图谱（点这里）',
    'IPbXH',
    'relation',
    'fHXyd',
    'loading',
    'GjazA',
    'v-loading',
    'lzqMR',
    'g_loading',
    'xVILC',
    'calc(100%)',
    'jkdSJ',
    'calc(100vh\x20-\x20300px)',
    'hfqSd',
    'AZPWz',
    'RelationGraph',
    'pfphY',
    'graphRef',
    'MNtbr',
    'LoHYs',
    '风险信息',
    'tYbJl',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'ZHvoI',
    'osUXK',
    'zUzaX',
    '20px',
    'RdVPT',
    '#666666',
    'ElHgS',
    '600px',
    'SkBZq',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'SuEAU',
    'FnnDB',
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
    'b2-2'
];
(function (_0x406878, _0x55761a) {
    var _0x3a9228 = function (_0x20edfe) {
        while (--_0x20edfe) {
            _0x406878['push'](_0x406878['shift']());
        }
    };
    _0x3a9228(++_0x55761a);
}(_0x2740, 0x1b0));
var _0x2b07 = function (_0x4103a3, _0x9144f2) {
    _0x4103a3 = _0x4103a3 - 0x0;
    var _0x4266c4 = _0x2740[_0x4103a3];
    return _0x4266c4;
};
import { n as _0x1c6c1b } from './index-ef5ed09b.js';
var n = function () {
        var _0x5524e4 = {};
        _0x5524e4[_0x2b07('0x0')] = function (_0x4a0535, _0x754ed8, _0x1367f0, _0x4e2a77) {
            return _0x4a0535(_0x754ed8, _0x1367f0, _0x4e2a77);
        };
        _0x5524e4[_0x2b07('0x1')] = _0x2b07('0x2');
        _0x5524e4[_0x2b07('0x3')] = function (_0x4d6322, _0x5baf02, _0x28da79, _0x35d26e, _0x4916c8) {
            return _0x4d6322(_0x5baf02, _0x28da79, _0x35d26e, _0x4916c8);
        };
        _0x5524e4[_0x2b07('0x4')] = _0x2b07('0x5');
        _0x5524e4[_0x2b07('0x6')] = _0x2b07('0x7');
        _0x5524e4[_0x2b07('0x8')] = _0x2b07('0x9');
        _0x5524e4[_0x2b07('0xa')] = _0x2b07('0xb');
        _0x5524e4[_0x2b07('0xc')] = _0x2b07('0xd');
        _0x5524e4[_0x2b07('0xe')] = _0x2b07('0xf');
        _0x5524e4[_0x2b07('0x10')] = function (_0x19f626, _0x104009, _0xf2a50d, _0x516d03) {
            return _0x19f626(_0x104009, _0xf2a50d, _0x516d03);
        };
        _0x5524e4[_0x2b07('0x11')] = _0x2b07('0x12');
        _0x5524e4[_0x2b07('0x13')] = _0x2b07('0x14');
        _0x5524e4[_0x2b07('0x15')] = _0x2b07('0x16');
        _0x5524e4[_0x2b07('0x17')] = _0x2b07('0x18');
        _0x5524e4[_0x2b07('0x19')] = _0x2b07('0x1a');
        _0x5524e4[_0x2b07('0x1b')] = _0x2b07('0x1c');
        _0x5524e4[_0x2b07('0x1d')] = _0x2b07('0x1e');
        _0x5524e4[_0x2b07('0x1f')] = function (_0x126e1a, _0x2032c4, _0x4a5c22) {
            return _0x126e1a(_0x2032c4, _0x4a5c22);
        };
        _0x5524e4[_0x2b07('0x20')] = _0x2b07('0x21');
        _0x5524e4[_0x2b07('0x22')] = _0x2b07('0x23');
        _0x5524e4[_0x2b07('0x24')] = function (_0xd950be, _0x54e74d, _0x5ab4d8, _0x33cf08) {
            return _0xd950be(_0x54e74d, _0x5ab4d8, _0x33cf08);
        };
        _0x5524e4[_0x2b07('0x25')] = _0x2b07('0x26');
        _0x5524e4[_0x2b07('0x27')] = _0x2b07('0x28');
        var _0x29baa5 = this, _0x648d0 = _0x29baa5[_0x2b07('0x29')], _0x2eb8b9 = _0x29baa5[_0x2b07('0x2a')]['_c'] || _0x648d0;
        return _0x5524e4[_0x2b07('0x0')](_0x2eb8b9, _0x5524e4[_0x2b07('0x1')], [
            _0x29baa5['_m'](0x0),
            _0x5524e4[_0x2b07('0x3')](_0x2eb8b9, _0x5524e4[_0x2b07('0x4')], {
                'attrs': { 'type': _0x5524e4[_0x2b07('0x6')] },
                'on': { 'tab-click': _0x29baa5[_0x2b07('0x2b')] },
                'model': {
                    'value': _0x29baa5[_0x2b07('0x9')],
                    'callback': function (_0x40318a) {
                        _0x29baa5[_0x2b07('0x9')] = _0x40318a;
                    },
                    'expression': _0x5524e4[_0x2b07('0x8')]
                }
            }, [
                _0x5524e4[_0x2b07('0x0')](_0x2eb8b9, _0x5524e4[_0x2b07('0xa')], {
                    'attrs': {
                        'label': _0x5524e4[_0x2b07('0xc')],
                        'name': _0x5524e4[_0x2b07('0xe')]
                    }
                }, [_0x29baa5['_v'](_0x5524e4[_0x2b07('0xc')])]),
                _0x5524e4[_0x2b07('0x10')](_0x2eb8b9, _0x5524e4[_0x2b07('0xa')], {
                    'attrs': {
                        'label': _0x5524e4[_0x2b07('0x11')],
                        'name': _0x5524e4[_0x2b07('0x13')]
                    }
                }, [_0x5524e4[_0x2b07('0x3')](_0x2eb8b9, _0x5524e4[_0x2b07('0x1')], {
                        'directives': [{
                                'name': _0x5524e4[_0x2b07('0x15')],
                                'rawName': _0x5524e4[_0x2b07('0x17')],
                                'value': _0x29baa5[_0x2b07('0x1a')],
                                'expression': _0x5524e4[_0x2b07('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x5524e4[_0x2b07('0x1b')],
                            'height': _0x5524e4[_0x2b07('0x1d')]
                        }
                    }, [_0x5524e4[_0x2b07('0x1f')](_0x2eb8b9, _0x5524e4[_0x2b07('0x20')], {
                            'ref': _0x5524e4[_0x2b07('0x22')],
                            'attrs': { 'options': _0x29baa5[_0x2b07('0x2c')] }
                        })], 0x1)]),
                _0x5524e4[_0x2b07('0x24')](_0x2eb8b9, _0x5524e4[_0x2b07('0xa')], {
                    'attrs': {
                        'label': _0x5524e4[_0x2b07('0x25')],
                        'name': _0x5524e4[_0x2b07('0x27')]
                    }
                }, [_0x29baa5['_v'](_0x5524e4[_0x2b07('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x5ece61 = {};
            _0x5ece61[_0x2b07('0x2d')] = function (_0x258150, _0x1ed3ca, _0x2e23c2, _0x50a6f5) {
                return _0x258150(_0x1ed3ca, _0x2e23c2, _0x50a6f5);
            };
            _0x5ece61[_0x2b07('0x2e')] = _0x2b07('0x2');
            _0x5ece61[_0x2b07('0x2f')] = _0x2b07('0x30');
            _0x5ece61[_0x2b07('0x31')] = _0x2b07('0x32');
            _0x5ece61[_0x2b07('0x33')] = _0x2b07('0x34');
            _0x5ece61[_0x2b07('0x35')] = _0x2b07('0x36');
            _0x5ece61[_0x2b07('0x37')] = function (_0x5b20d3, _0x4aaf8e, _0x12ea6c) {
                return _0x5b20d3(_0x4aaf8e, _0x12ea6c);
            };
            _0x5ece61[_0x2b07('0x38')] = _0x2b07('0x39');
            var _0x3e1cb3 = this, _0x16bcb4 = _0x3e1cb3[_0x2b07('0x29')], _0x2a5e02 = _0x3e1cb3[_0x2b07('0x2a')]['_c'] || _0x16bcb4;
            return _0x5ece61[_0x2b07('0x2d')](_0x2a5e02, _0x5ece61[_0x2b07('0x2e')], {
                'staticStyle': {
                    'padding': _0x5ece61[_0x2b07('0x2f')],
                    'color': _0x5ece61[_0x2b07('0x31')],
                    'width': _0x5ece61[_0x2b07('0x33')]
                }
            }, [
                _0x3e1cb3['_v'](_0x5ece61[_0x2b07('0x35')]),
                _0x5ece61[_0x2b07('0x37')](_0x2a5e02, _0x5ece61[_0x2b07('0x2e')], [_0x3e1cb3['_v'](_0x5ece61[_0x2b07('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x2b07('0x3a')] = _0x2b07('0x3b');
l[_0x2b07('0x3c')] = {};
l[_0x2b07('0x3d')] = function () {
    var _0x37c66f = {
        BYWOj: _0x2b07('0xf'),
        FDfiO: _0x2b07('0x3e'),
        YAKPv: _0x2b07('0x3f'),
        rJLMJ: _0x2b07('0x40'),
        xAILR: _0x2b07('0x41'),
        YBfyF: _0x2b07('0x42'),
        pYzQf: _0x2b07('0x43'),
        YRIgC: _0x2b07('0x44'),
        YBfun: _0x2b07('0x45'),
        pYkKS: _0x2b07('0x46'),
        dfRIN: _0x2b07('0x47')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x37c66f.BYWOj,
        demoname: _0x37c66f.FDfiO,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x37c66f.YAKPv,
                    layoutClassName: _0x37c66f.rJLMJ,
                    defaultJunctionPoint: _0x37c66f.xAILR,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x37c66f.YBfyF,
                    max_per_width: _0x37c66f.pYzQf,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x37c66f.YRIgC
            },
            defaultExpandHolderPosition: _0x37c66f.YBfun,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x37c66f.pYkKS,
            defaultNodeColor: _0x37c66f.dfRIN
        }
    };
};
l[_0x2b07('0x48')] = function () {
};
l[_0x2b07('0x49')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x2b07('0x4a')] = {};
l[_0x2b07('0x4a')][_0x2b07('0x4b')] = function () {
    var _0x5012f3 = {
        eXLih: _0x2b07('0x4c'),
        wREce: _0x2b07('0x4d'),
        hZVlB: _0x2b07('0x4e'),
        lmTwr: _0x2b07('0x4f'),
        zEfxa: _0x2b07('0x50'),
        LMPeB: _0x2b07('0x51'),
        Gyqng: _0x2b07('0x52'),
        VzouK: _0x2b07('0x53'),
        KSJvz: function (_0x582ef3, _0x4ad146, _0x3df07c) {
            return _0x582ef3(_0x4ad146, _0x3df07c);
        }
    };
    const _0x2137b7 = {
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
                id: _0x5012f3.eXLih,
                text: _0x5012f3.eXLih
            },
            {
                id: _0x5012f3.wREce,
                text: _0x5012f3.wREce
            },
            {
                id: _0x5012f3.hZVlB,
                text: _0x5012f3.hZVlB
            },
            {
                id: _0x5012f3.lmTwr,
                text: _0x5012f3.lmTwr
            },
            {
                id: _0x5012f3.zEfxa,
                text: _0x5012f3.zEfxa
            },
            {
                id: _0x5012f3.LMPeB,
                text: _0x5012f3.LMPeB
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x5012f3.Gyqng,
                text: _0x5012f3.Gyqng
            },
            {
                id: _0x5012f3.VzouK,
                text: _0x5012f3.VzouK
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
                to: _0x5012f3.eXLih
            },
            {
                from: 'b1',
                to: _0x5012f3.wREce
            },
            {
                from: 'b1',
                to: _0x5012f3.hZVlB
            },
            {
                from: 'b1',
                to: _0x5012f3.lmTwr
            },
            {
                from: 'b1',
                to: _0x5012f3.zEfxa
            },
            {
                from: 'b1',
                to: _0x5012f3.LMPeB
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x5012f3.Gyqng
            },
            {
                from: 'b2',
                to: _0x5012f3.VzouK
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
    console.log(JSON.stringify(_0x2137b7)), _0x5012f3.KSJvz(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x2137b7, _0x5309f7 => {
            _0x5309f7.refresh();
        });
    }, 0x3e8);
};
l[_0x2b07('0x4a')][_0x2b07('0x2b')] = function (_0x74a284, _0x379dcc) {
    var _0x46d6b8 = {
        nzwXE: _0x2b07('0x54'),
        zZaTX: function (_0x358f8d, _0x447279) {
            return _0x358f8d === _0x447279;
        },
        puGja: _0x2b07('0x14')
    };
    console.log(_0x46d6b8.nzwXE, this.activeTabName), _0x46d6b8.zZaTX(this.activeTabName, _0x46d6b8.puGja) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x1c6c1b(l, n, d, !0x1, c, null, null, null);
function c(_0x3d6626) {
    for (let _0x5b40d5 in o)
        this[_0x5b40d5] = o[_0x5b40d5];
}
const m = function () {
    return s[_0x2b07('0x55')];
}();
export {
    m as default
};