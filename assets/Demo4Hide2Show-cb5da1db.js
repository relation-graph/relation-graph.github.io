
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x33a9 = [
    'rpZOi',
    '#666666',
    'ciQXU',
    '600px',
    'CVoXJ',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'OLpUk',
    'wBlsK',
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
    'HLfuc',
    'yCmFi',
    'div',
    'lgfsX',
    'bbILm',
    'el-tabs',
    'DpjTn',
    'card',
    'xpCSd',
    'activeTabName',
    'Iswnn',
    'naEyV',
    'el-tab-pane',
    'VmyZq',
    '基本信息',
    'dhfEi',
    'base',
    'oTLCm',
    'QjSuv',
    '关系图谱（点这里）',
    'lCuVc',
    'relation',
    'opLrQ',
    'loading',
    'nzoEr',
    'v-loading',
    'NiyqT',
    'g_loading',
    'JsJCU',
    'calc(100%)',
    'egqJG',
    'calc(100vh\x20-\x20300px)',
    'ethde',
    'xMFbs',
    'RelationGraph',
    'QsOUe',
    'graphRef',
    'nQdYm',
    '风险信息',
    'JeIjY',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'KkjAd',
    'lMOvO',
    'BOugS',
    '20px'
];
(function (_0x74519d, _0x5dd859) {
    var _0x1f1ae6 = function (_0x34d6e4) {
        while (--_0x34d6e4) {
            _0x74519d['push'](_0x74519d['shift']());
        }
    };
    _0x1f1ae6(++_0x5dd859);
}(_0x33a9, 0x12b));
var _0x160a = function (_0x202808, _0x49b753) {
    _0x202808 = _0x202808 - 0x0;
    var _0x3c5cb8 = _0x33a9[_0x202808];
    return _0x3c5cb8;
};
import { n as _0x1f7d11 } from './index-120b3164.js';
var n = function () {
        var _0x5bb348 = {};
        _0x5bb348[_0x160a('0x0')] = function (_0x237dce, _0x2420fd, _0x2d695a, _0x4cde98) {
            return _0x237dce(_0x2420fd, _0x2d695a, _0x4cde98);
        };
        _0x5bb348[_0x160a('0x1')] = _0x160a('0x2');
        _0x5bb348[_0x160a('0x3')] = function (_0x13a985, _0x4a144b, _0x2e8fdc, _0x466912, _0x307a88) {
            return _0x13a985(_0x4a144b, _0x2e8fdc, _0x466912, _0x307a88);
        };
        _0x5bb348[_0x160a('0x4')] = _0x160a('0x5');
        _0x5bb348[_0x160a('0x6')] = _0x160a('0x7');
        _0x5bb348[_0x160a('0x8')] = _0x160a('0x9');
        _0x5bb348[_0x160a('0xa')] = function (_0x3dc413, _0x1f9d8c, _0x45e5c1, _0x33e7dd) {
            return _0x3dc413(_0x1f9d8c, _0x45e5c1, _0x33e7dd);
        };
        _0x5bb348[_0x160a('0xb')] = _0x160a('0xc');
        _0x5bb348[_0x160a('0xd')] = _0x160a('0xe');
        _0x5bb348[_0x160a('0xf')] = _0x160a('0x10');
        _0x5bb348[_0x160a('0x11')] = function (_0xfdf37a, _0x3c9d11, _0x21cc61, _0x3a9f74) {
            return _0xfdf37a(_0x3c9d11, _0x21cc61, _0x3a9f74);
        };
        _0x5bb348[_0x160a('0x12')] = _0x160a('0x13');
        _0x5bb348[_0x160a('0x14')] = _0x160a('0x15');
        _0x5bb348[_0x160a('0x16')] = _0x160a('0x17');
        _0x5bb348[_0x160a('0x18')] = _0x160a('0x19');
        _0x5bb348[_0x160a('0x1a')] = _0x160a('0x1b');
        _0x5bb348[_0x160a('0x1c')] = _0x160a('0x1d');
        _0x5bb348[_0x160a('0x1e')] = _0x160a('0x1f');
        _0x5bb348[_0x160a('0x20')] = function (_0x56d46d, _0x110cfa, _0xd4c5b8) {
            return _0x56d46d(_0x110cfa, _0xd4c5b8);
        };
        _0x5bb348[_0x160a('0x21')] = _0x160a('0x22');
        _0x5bb348[_0x160a('0x23')] = _0x160a('0x24');
        _0x5bb348[_0x160a('0x25')] = _0x160a('0x26');
        _0x5bb348[_0x160a('0x27')] = _0x160a('0x28');
        var _0x34acb6 = this, _0x190dc9 = _0x34acb6[_0x160a('0x29')], _0x589b03 = _0x34acb6[_0x160a('0x2a')]['_c'] || _0x190dc9;
        return _0x5bb348[_0x160a('0x0')](_0x589b03, _0x5bb348[_0x160a('0x1')], [
            _0x34acb6['_m'](0x0),
            _0x5bb348[_0x160a('0x3')](_0x589b03, _0x5bb348[_0x160a('0x4')], {
                'attrs': { 'type': _0x5bb348[_0x160a('0x6')] },
                'on': { 'tab-click': _0x34acb6[_0x160a('0x2b')] },
                'model': {
                    'value': _0x34acb6[_0x160a('0x9')],
                    'callback': function (_0x3b097d) {
                        _0x34acb6[_0x160a('0x9')] = _0x3b097d;
                    },
                    'expression': _0x5bb348[_0x160a('0x8')]
                }
            }, [
                _0x5bb348[_0x160a('0xa')](_0x589b03, _0x5bb348[_0x160a('0xb')], {
                    'attrs': {
                        'label': _0x5bb348[_0x160a('0xd')],
                        'name': _0x5bb348[_0x160a('0xf')]
                    }
                }, [_0x34acb6['_v'](_0x5bb348[_0x160a('0xd')])]),
                _0x5bb348[_0x160a('0x11')](_0x589b03, _0x5bb348[_0x160a('0xb')], {
                    'attrs': {
                        'label': _0x5bb348[_0x160a('0x12')],
                        'name': _0x5bb348[_0x160a('0x14')]
                    }
                }, [_0x5bb348[_0x160a('0x3')](_0x589b03, _0x5bb348[_0x160a('0x1')], {
                        'directives': [{
                                'name': _0x5bb348[_0x160a('0x16')],
                                'rawName': _0x5bb348[_0x160a('0x18')],
                                'value': _0x34acb6[_0x160a('0x1b')],
                                'expression': _0x5bb348[_0x160a('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0x5bb348[_0x160a('0x1c')],
                            'height': _0x5bb348[_0x160a('0x1e')]
                        }
                    }, [_0x5bb348[_0x160a('0x20')](_0x589b03, _0x5bb348[_0x160a('0x21')], {
                            'ref': _0x5bb348[_0x160a('0x23')],
                            'attrs': { 'options': _0x34acb6[_0x160a('0x2c')] }
                        })], 0x1)]),
                _0x5bb348[_0x160a('0x11')](_0x589b03, _0x5bb348[_0x160a('0xb')], {
                    'attrs': {
                        'label': _0x5bb348[_0x160a('0x25')],
                        'name': _0x5bb348[_0x160a('0x27')]
                    }
                }, [_0x34acb6['_v'](_0x5bb348[_0x160a('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x3c8e4a = {};
            _0x3c8e4a[_0x160a('0x2d')] = function (_0x679f5a, _0x2c6de5, _0x28a54e, _0x131033) {
                return _0x679f5a(_0x2c6de5, _0x28a54e, _0x131033);
            };
            _0x3c8e4a[_0x160a('0x2e')] = _0x160a('0x2');
            _0x3c8e4a[_0x160a('0x2f')] = _0x160a('0x30');
            _0x3c8e4a[_0x160a('0x31')] = _0x160a('0x32');
            _0x3c8e4a[_0x160a('0x33')] = _0x160a('0x34');
            _0x3c8e4a[_0x160a('0x35')] = _0x160a('0x36');
            _0x3c8e4a[_0x160a('0x37')] = function (_0x443ac0, _0x226b00, _0x1c7ef7) {
                return _0x443ac0(_0x226b00, _0x1c7ef7);
            };
            _0x3c8e4a[_0x160a('0x38')] = _0x160a('0x39');
            var _0x8fb75f = this, _0x3e4954 = _0x8fb75f[_0x160a('0x29')], _0x214b0e = _0x8fb75f[_0x160a('0x2a')]['_c'] || _0x3e4954;
            return _0x3c8e4a[_0x160a('0x2d')](_0x214b0e, _0x3c8e4a[_0x160a('0x2e')], {
                'staticStyle': {
                    'padding': _0x3c8e4a[_0x160a('0x2f')],
                    'color': _0x3c8e4a[_0x160a('0x31')],
                    'width': _0x3c8e4a[_0x160a('0x33')]
                }
            }, [
                _0x8fb75f['_v'](_0x3c8e4a[_0x160a('0x35')]),
                _0x3c8e4a[_0x160a('0x37')](_0x214b0e, _0x3c8e4a[_0x160a('0x2e')], [_0x8fb75f['_v'](_0x3c8e4a[_0x160a('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x160a('0x3a')] = _0x160a('0x3b');
l[_0x160a('0x3c')] = {};
l[_0x160a('0x3d')] = function () {
    var _0x456732 = {
        rLUPL: _0x160a('0x10'),
        WPmEP: _0x160a('0x3e'),
        urmRJ: _0x160a('0x3f'),
        taDAM: _0x160a('0x40'),
        zfUsw: _0x160a('0x41'),
        HJaos: _0x160a('0x42'),
        WlzCY: _0x160a('0x43'),
        Qnvto: _0x160a('0x44'),
        KjlDn: _0x160a('0x45'),
        CGJFC: _0x160a('0x46'),
        WfBAP: _0x160a('0x47'),
        Bsxgm: _0x160a('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x456732.rLUPL,
        demoname: _0x456732.WPmEP,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x456732.urmRJ,
                    layoutClassName: _0x456732.taDAM,
                    defaultJunctionPoint: _0x456732.zfUsw,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x456732.HJaos,
                    max_per_width: _0x456732.WlzCY,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x456732.Qnvto
            },
            defaultExpandHolderPosition: _0x456732.KjlDn,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x456732.CGJFC,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x456732.WfBAP,
            defaultNodeColor: _0x456732.Bsxgm
        }
    };
};
l[_0x160a('0x49')] = function () {
};
l[_0x160a('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x160a('0x4b')] = {};
l[_0x160a('0x4b')][_0x160a('0x4c')] = function () {
    var _0x2e8ab9 = {
        DIqJh: _0x160a('0x4d'),
        mVDuB: _0x160a('0x4e'),
        yCOFp: _0x160a('0x4f'),
        RbNlj: _0x160a('0x50'),
        bIorH: _0x160a('0x51'),
        ZJYTE: _0x160a('0x52'),
        bFHTW: _0x160a('0x53'),
        yLwjM: _0x160a('0x54'),
        EyyVt: function (_0x5f8ed0, _0x4e8ab9, _0x5e5a0b) {
            return _0x5f8ed0(_0x4e8ab9, _0x5e5a0b);
        }
    };
    const _0x1d9a2e = {
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
                id: _0x2e8ab9.DIqJh,
                text: _0x2e8ab9.DIqJh
            },
            {
                id: _0x2e8ab9.mVDuB,
                text: _0x2e8ab9.mVDuB
            },
            {
                id: _0x2e8ab9.yCOFp,
                text: _0x2e8ab9.yCOFp
            },
            {
                id: _0x2e8ab9.RbNlj,
                text: _0x2e8ab9.RbNlj
            },
            {
                id: _0x2e8ab9.bIorH,
                text: _0x2e8ab9.bIorH
            },
            {
                id: _0x2e8ab9.ZJYTE,
                text: _0x2e8ab9.ZJYTE
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x2e8ab9.bFHTW,
                text: _0x2e8ab9.bFHTW
            },
            {
                id: _0x2e8ab9.yLwjM,
                text: _0x2e8ab9.yLwjM
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
                to: _0x2e8ab9.DIqJh
            },
            {
                from: 'b1',
                to: _0x2e8ab9.mVDuB
            },
            {
                from: 'b1',
                to: _0x2e8ab9.yCOFp
            },
            {
                from: 'b1',
                to: _0x2e8ab9.RbNlj
            },
            {
                from: 'b1',
                to: _0x2e8ab9.bIorH
            },
            {
                from: 'b1',
                to: _0x2e8ab9.ZJYTE
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x2e8ab9.bFHTW
            },
            {
                from: 'b2',
                to: _0x2e8ab9.yLwjM
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
    console.log(JSON.stringify(_0x1d9a2e)), _0x2e8ab9.EyyVt(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x1d9a2e, _0x26034a => {
            _0x26034a.refresh();
        });
    }, 0x3e8);
};
l[_0x160a('0x4b')][_0x160a('0x2b')] = function (_0x997fa3, _0x26b53e) {
    var _0x17215c = {
        YUmqA: _0x160a('0x55'),
        NUHrN: function (_0x4611a0, _0x2e176a) {
            return _0x4611a0 === _0x2e176a;
        },
        qgSEb: _0x160a('0x15')
    };
    console.log(_0x17215c.YUmqA, this.activeTabName), _0x17215c.NUHrN(this.activeTabName, _0x17215c.qgSEb) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x1f7d11(l, n, d, !0x1, c, null, null, null);
function c(_0xa2bd6a) {
    for (let _0x36b2cd in o)
        this[_0x36b2cd] = o[_0x36b2cd];
}
const m = function () {
    return s[_0x160a('0x56')];
}();
export {
    m as default
};