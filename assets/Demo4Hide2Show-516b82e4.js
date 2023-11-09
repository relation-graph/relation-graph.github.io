
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x8ffa = [
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
    'vJTPz',
    'JPHyY',
    'div',
    'XlAXt',
    'uzFss',
    'el-tabs',
    'YYcjy',
    'card',
    'GSnhx',
    'activeTabName',
    'TdkZV',
    'EzeGR',
    'el-tab-pane',
    'fKSVB',
    '基本信息',
    'gInYC',
    'base',
    'HzCYr',
    '关系图谱（点这里）',
    'xPwAx',
    'relation',
    'gUFtm',
    'loading',
    'VeCJO',
    'v-loading',
    'uqLIa',
    'g_loading',
    'bopMY',
    'calc(100%)',
    'MeZcr',
    'calc(100vh\x20-\x20300px)',
    'kvfwO',
    'XxLTv',
    'RelationGraph',
    'qfisD',
    'graphRef',
    'AFTBT',
    'uMOsP',
    '风险信息',
    'uhYYh',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'jTveN',
    'psthb',
    'sgTLf',
    '20px',
    'JhwJf',
    '#666666',
    'ZNjKS',
    '600px',
    'emKWN',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'QgKbM',
    'uRBCN',
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
    'rgba(0,\x20186,\x20189,\x201)'
];
(function (_0xce9a7d, _0x4f5b04) {
    var _0x23073c = function (_0x3806a2) {
        while (--_0x3806a2) {
            _0xce9a7d['push'](_0xce9a7d['shift']());
        }
    };
    _0x23073c(++_0x4f5b04);
}(_0x8ffa, 0x16b));
var _0x3669 = function (_0x432aab, _0xd7b039) {
    _0x432aab = _0x432aab - 0x0;
    var _0x58e4a1 = _0x8ffa[_0x432aab];
    return _0x58e4a1;
};
import { n as _0x4587e1 } from './index-c396e703.js';
var n = function () {
        var _0x535d73 = {};
        _0x535d73[_0x3669('0x0')] = function (_0x20f828, _0x2801e8, _0x497fbc, _0x339691) {
            return _0x20f828(_0x2801e8, _0x497fbc, _0x339691);
        };
        _0x535d73[_0x3669('0x1')] = _0x3669('0x2');
        _0x535d73[_0x3669('0x3')] = function (_0x3df222, _0xe8688b, _0x1f1b32, _0x485677, _0x1f799d) {
            return _0x3df222(_0xe8688b, _0x1f1b32, _0x485677, _0x1f799d);
        };
        _0x535d73[_0x3669('0x4')] = _0x3669('0x5');
        _0x535d73[_0x3669('0x6')] = _0x3669('0x7');
        _0x535d73[_0x3669('0x8')] = _0x3669('0x9');
        _0x535d73[_0x3669('0xa')] = function (_0x57d37d, _0x50c171, _0xaad29e, _0x247c36) {
            return _0x57d37d(_0x50c171, _0xaad29e, _0x247c36);
        };
        _0x535d73[_0x3669('0xb')] = _0x3669('0xc');
        _0x535d73[_0x3669('0xd')] = _0x3669('0xe');
        _0x535d73[_0x3669('0xf')] = _0x3669('0x10');
        _0x535d73[_0x3669('0x11')] = _0x3669('0x12');
        _0x535d73[_0x3669('0x13')] = _0x3669('0x14');
        _0x535d73[_0x3669('0x15')] = _0x3669('0x16');
        _0x535d73[_0x3669('0x17')] = _0x3669('0x18');
        _0x535d73[_0x3669('0x19')] = _0x3669('0x1a');
        _0x535d73[_0x3669('0x1b')] = _0x3669('0x1c');
        _0x535d73[_0x3669('0x1d')] = _0x3669('0x1e');
        _0x535d73[_0x3669('0x1f')] = function (_0x1639a5, _0x3e8774, _0x3738dd) {
            return _0x1639a5(_0x3e8774, _0x3738dd);
        };
        _0x535d73[_0x3669('0x20')] = _0x3669('0x21');
        _0x535d73[_0x3669('0x22')] = _0x3669('0x23');
        _0x535d73[_0x3669('0x24')] = function (_0x4615ad, _0x582369, _0x4dd21d, _0x293412) {
            return _0x4615ad(_0x582369, _0x4dd21d, _0x293412);
        };
        _0x535d73[_0x3669('0x25')] = _0x3669('0x26');
        _0x535d73[_0x3669('0x27')] = _0x3669('0x28');
        var _0x39a2a5 = this, _0x236c3b = _0x39a2a5[_0x3669('0x29')], _0x22a8d6 = _0x39a2a5[_0x3669('0x2a')]['_c'] || _0x236c3b;
        return _0x535d73[_0x3669('0x0')](_0x22a8d6, _0x535d73[_0x3669('0x1')], [
            _0x39a2a5['_m'](0x0),
            _0x535d73[_0x3669('0x3')](_0x22a8d6, _0x535d73[_0x3669('0x4')], {
                'attrs': { 'type': _0x535d73[_0x3669('0x6')] },
                'on': { 'tab-click': _0x39a2a5[_0x3669('0x2b')] },
                'model': {
                    'value': _0x39a2a5[_0x3669('0x9')],
                    'callback': function (_0x54bed2) {
                        _0x39a2a5[_0x3669('0x9')] = _0x54bed2;
                    },
                    'expression': _0x535d73[_0x3669('0x8')]
                }
            }, [
                _0x535d73[_0x3669('0xa')](_0x22a8d6, _0x535d73[_0x3669('0xb')], {
                    'attrs': {
                        'label': _0x535d73[_0x3669('0xd')],
                        'name': _0x535d73[_0x3669('0xf')]
                    }
                }, [_0x39a2a5['_v'](_0x535d73[_0x3669('0xd')])]),
                _0x535d73[_0x3669('0xa')](_0x22a8d6, _0x535d73[_0x3669('0xb')], {
                    'attrs': {
                        'label': _0x535d73[_0x3669('0x11')],
                        'name': _0x535d73[_0x3669('0x13')]
                    }
                }, [_0x535d73[_0x3669('0x3')](_0x22a8d6, _0x535d73[_0x3669('0x1')], {
                        'directives': [{
                                'name': _0x535d73[_0x3669('0x15')],
                                'rawName': _0x535d73[_0x3669('0x17')],
                                'value': _0x39a2a5[_0x3669('0x1a')],
                                'expression': _0x535d73[_0x3669('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x535d73[_0x3669('0x1b')],
                            'height': _0x535d73[_0x3669('0x1d')]
                        }
                    }, [_0x535d73[_0x3669('0x1f')](_0x22a8d6, _0x535d73[_0x3669('0x20')], {
                            'ref': _0x535d73[_0x3669('0x22')],
                            'attrs': { 'options': _0x39a2a5[_0x3669('0x2c')] }
                        })], 0x1)]),
                _0x535d73[_0x3669('0x24')](_0x22a8d6, _0x535d73[_0x3669('0xb')], {
                    'attrs': {
                        'label': _0x535d73[_0x3669('0x25')],
                        'name': _0x535d73[_0x3669('0x27')]
                    }
                }, [_0x39a2a5['_v'](_0x535d73[_0x3669('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x3d8d8d = {};
            _0x3d8d8d[_0x3669('0x2d')] = function (_0x53f445, _0x1917df, _0xb5e740, _0x22a053) {
                return _0x53f445(_0x1917df, _0xb5e740, _0x22a053);
            };
            _0x3d8d8d[_0x3669('0x2e')] = _0x3669('0x2');
            _0x3d8d8d[_0x3669('0x2f')] = _0x3669('0x30');
            _0x3d8d8d[_0x3669('0x31')] = _0x3669('0x32');
            _0x3d8d8d[_0x3669('0x33')] = _0x3669('0x34');
            _0x3d8d8d[_0x3669('0x35')] = _0x3669('0x36');
            _0x3d8d8d[_0x3669('0x37')] = function (_0xe188d0, _0x4921cf, _0x49d40d) {
                return _0xe188d0(_0x4921cf, _0x49d40d);
            };
            _0x3d8d8d[_0x3669('0x38')] = _0x3669('0x39');
            var _0x173aec = this, _0x4653e8 = _0x173aec[_0x3669('0x29')], _0x390010 = _0x173aec[_0x3669('0x2a')]['_c'] || _0x4653e8;
            return _0x3d8d8d[_0x3669('0x2d')](_0x390010, _0x3d8d8d[_0x3669('0x2e')], {
                'staticStyle': {
                    'padding': _0x3d8d8d[_0x3669('0x2f')],
                    'color': _0x3d8d8d[_0x3669('0x31')],
                    'width': _0x3d8d8d[_0x3669('0x33')]
                }
            }, [
                _0x173aec['_v'](_0x3d8d8d[_0x3669('0x35')]),
                _0x3d8d8d[_0x3669('0x37')](_0x390010, _0x3d8d8d[_0x3669('0x2e')], [_0x173aec['_v'](_0x3d8d8d[_0x3669('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x3669('0x3a')] = _0x3669('0x3b');
l[_0x3669('0x3c')] = {};
l[_0x3669('0x3d')] = function () {
    var _0x5c913d = {
        dybVh: _0x3669('0x10'),
        YUEGC: _0x3669('0x3e'),
        cHofR: _0x3669('0x3f'),
        UotmY: _0x3669('0x40'),
        FLkvZ: _0x3669('0x41'),
        ZWYCo: _0x3669('0x42'),
        llrZG: _0x3669('0x43'),
        xNUvu: _0x3669('0x44'),
        gFCmz: _0x3669('0x45'),
        oFWIx: _0x3669('0x46'),
        nGAcE: _0x3669('0x47'),
        uVbZl: _0x3669('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x5c913d.dybVh,
        demoname: _0x5c913d.YUEGC,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x5c913d.cHofR,
                    layoutClassName: _0x5c913d.UotmY,
                    defaultJunctionPoint: _0x5c913d.FLkvZ,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x5c913d.ZWYCo,
                    max_per_width: _0x5c913d.llrZG,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x5c913d.xNUvu
            },
            defaultExpandHolderPosition: _0x5c913d.gFCmz,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x5c913d.oFWIx,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x5c913d.nGAcE,
            defaultNodeColor: _0x5c913d.uVbZl
        }
    };
};
l[_0x3669('0x49')] = function () {
};
l[_0x3669('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x3669('0x4b')] = {};
l[_0x3669('0x4b')][_0x3669('0x4c')] = function () {
    var _0x4b4fff = {
        SKyAb: _0x3669('0x4d'),
        JPQFM: _0x3669('0x4e'),
        WocUQ: _0x3669('0x4f'),
        tEuAi: _0x3669('0x50'),
        Ozyoh: _0x3669('0x51'),
        VSNLZ: _0x3669('0x52'),
        gXZxE: _0x3669('0x53'),
        BPATT: _0x3669('0x54'),
        bfqZx: function (_0x57f6ce, _0x34f941, _0x306908) {
            return _0x57f6ce(_0x34f941, _0x306908);
        }
    };
    const _0x101e6e = {
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
                id: _0x4b4fff.SKyAb,
                text: _0x4b4fff.SKyAb
            },
            {
                id: _0x4b4fff.JPQFM,
                text: _0x4b4fff.JPQFM
            },
            {
                id: _0x4b4fff.WocUQ,
                text: _0x4b4fff.WocUQ
            },
            {
                id: _0x4b4fff.tEuAi,
                text: _0x4b4fff.tEuAi
            },
            {
                id: _0x4b4fff.Ozyoh,
                text: _0x4b4fff.Ozyoh
            },
            {
                id: _0x4b4fff.VSNLZ,
                text: _0x4b4fff.VSNLZ
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x4b4fff.gXZxE,
                text: _0x4b4fff.gXZxE
            },
            {
                id: _0x4b4fff.BPATT,
                text: _0x4b4fff.BPATT
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
                to: _0x4b4fff.SKyAb
            },
            {
                from: 'b1',
                to: _0x4b4fff.JPQFM
            },
            {
                from: 'b1',
                to: _0x4b4fff.WocUQ
            },
            {
                from: 'b1',
                to: _0x4b4fff.tEuAi
            },
            {
                from: 'b1',
                to: _0x4b4fff.Ozyoh
            },
            {
                from: 'b1',
                to: _0x4b4fff.VSNLZ
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x4b4fff.gXZxE
            },
            {
                from: 'b2',
                to: _0x4b4fff.BPATT
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
    console.log(JSON.stringify(_0x101e6e)), _0x4b4fff.bfqZx(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x101e6e, _0x4d0c24 => {
            _0x4d0c24.refresh();
        });
    }, 0x3e8);
};
l[_0x3669('0x4b')][_0x3669('0x2b')] = function (_0x1f6d7c, _0x5e61bf) {
    var _0x45b199 = {
        vgGmD: _0x3669('0x55'),
        sVTVY: function (_0x1db9e6, _0x343716) {
            return _0x1db9e6 === _0x343716;
        },
        oaKNS: _0x3669('0x14')
    };
    console.log(_0x45b199.vgGmD, this.activeTabName), _0x45b199.sVTVY(this.activeTabName, _0x45b199.oaKNS) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x4587e1(l, n, d, !0x1, c, null, null, null);
function c(_0x5d5a1d) {
    for (let _0x18e710 in o)
        this[_0x18e710] = o[_0x18e710];
}
const m = function () {
    return s[_0x3669('0x56')];
}();
export {
    m as default
};