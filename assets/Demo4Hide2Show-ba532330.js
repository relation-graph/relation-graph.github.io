
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x782e = [
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
    'DXKsX',
    'DUcQi',
    'div',
    'zskVz',
    'kDlaS',
    'el-tabs',
    'SvcLJ',
    'card',
    'eYuRH',
    'activeTabName',
    'pYvRA',
    'hIpFl',
    'el-tab-pane',
    'WlniT',
    '基本信息',
    'yALOw',
    'base',
    'fWqzs',
    'ptDkB',
    '关系图谱（点这里）',
    'NPLXG',
    'relation',
    'bUJQq',
    'SgpjU',
    'loading',
    'uZdts',
    'v-loading',
    'krTwE',
    'g_loading',
    'vgeTb',
    'calc(100%)',
    'EQmPi',
    'calc(100vh\x20-\x20300px)',
    'qnQjv',
    'BUNgz',
    'RelationGraph',
    'accZt',
    'graphRef',
    'WsKox',
    '风险信息',
    'dorpG',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'ukTVW',
    'MZOKr',
    'yxVnH',
    '20px',
    'YCyfs',
    '#666666',
    'YIAIH',
    '600px',
    'XsWcD',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'HbiyU',
    'ZSGSh',
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
    'rgba(0,\x20206,\x20209,\x201)'
];
(function (_0x28875e, _0x158b3d) {
    var _0x350433 = function (_0xa02939) {
        while (--_0xa02939) {
            _0x28875e['push'](_0x28875e['shift']());
        }
    };
    _0x350433(++_0x158b3d);
}(_0x782e, 0x1c1));
var _0x17b1 = function (_0xada2ef, _0x55bf6b) {
    _0xada2ef = _0xada2ef - 0x0;
    var _0x122330 = _0x782e[_0xada2ef];
    return _0x122330;
};
import { n as _0x4b6a64 } from './index-7cdfa577.js';
var n = function () {
        var _0x3e718f = {};
        _0x3e718f[_0x17b1('0x0')] = function (_0x2b9826, _0x22276b, _0x44c09d, _0x567dfe) {
            return _0x2b9826(_0x22276b, _0x44c09d, _0x567dfe);
        };
        _0x3e718f[_0x17b1('0x1')] = _0x17b1('0x2');
        _0x3e718f[_0x17b1('0x3')] = function (_0x5cc604, _0x3e9e76, _0x444f97, _0x5a4d4d, _0x4cf753) {
            return _0x5cc604(_0x3e9e76, _0x444f97, _0x5a4d4d, _0x4cf753);
        };
        _0x3e718f[_0x17b1('0x4')] = _0x17b1('0x5');
        _0x3e718f[_0x17b1('0x6')] = _0x17b1('0x7');
        _0x3e718f[_0x17b1('0x8')] = _0x17b1('0x9');
        _0x3e718f[_0x17b1('0xa')] = function (_0x1c40fb, _0x5c5489, _0x281001, _0x13299d) {
            return _0x1c40fb(_0x5c5489, _0x281001, _0x13299d);
        };
        _0x3e718f[_0x17b1('0xb')] = _0x17b1('0xc');
        _0x3e718f[_0x17b1('0xd')] = _0x17b1('0xe');
        _0x3e718f[_0x17b1('0xf')] = _0x17b1('0x10');
        _0x3e718f[_0x17b1('0x11')] = function (_0x45e4e8, _0x5ecf9f, _0x240bf7, _0x51b877) {
            return _0x45e4e8(_0x5ecf9f, _0x240bf7, _0x51b877);
        };
        _0x3e718f[_0x17b1('0x12')] = _0x17b1('0x13');
        _0x3e718f[_0x17b1('0x14')] = _0x17b1('0x15');
        _0x3e718f[_0x17b1('0x16')] = function (_0x197a6a, _0x2c9dc4, _0x2399c9, _0x4215a8, _0x3a9f8d) {
            return _0x197a6a(_0x2c9dc4, _0x2399c9, _0x4215a8, _0x3a9f8d);
        };
        _0x3e718f[_0x17b1('0x17')] = _0x17b1('0x18');
        _0x3e718f[_0x17b1('0x19')] = _0x17b1('0x1a');
        _0x3e718f[_0x17b1('0x1b')] = _0x17b1('0x1c');
        _0x3e718f[_0x17b1('0x1d')] = _0x17b1('0x1e');
        _0x3e718f[_0x17b1('0x1f')] = _0x17b1('0x20');
        _0x3e718f[_0x17b1('0x21')] = function (_0x598b1f, _0x72656f, _0x20b30e) {
            return _0x598b1f(_0x72656f, _0x20b30e);
        };
        _0x3e718f[_0x17b1('0x22')] = _0x17b1('0x23');
        _0x3e718f[_0x17b1('0x24')] = _0x17b1('0x25');
        _0x3e718f[_0x17b1('0x26')] = _0x17b1('0x27');
        _0x3e718f[_0x17b1('0x28')] = _0x17b1('0x29');
        var _0x1239d4 = this, _0x5d39f3 = _0x1239d4[_0x17b1('0x2a')], _0x4e133f = _0x1239d4[_0x17b1('0x2b')]['_c'] || _0x5d39f3;
        return _0x3e718f[_0x17b1('0x0')](_0x4e133f, _0x3e718f[_0x17b1('0x1')], [
            _0x1239d4['_m'](0x0),
            _0x3e718f[_0x17b1('0x3')](_0x4e133f, _0x3e718f[_0x17b1('0x4')], {
                'attrs': { 'type': _0x3e718f[_0x17b1('0x6')] },
                'on': { 'tab-click': _0x1239d4[_0x17b1('0x2c')] },
                'model': {
                    'value': _0x1239d4[_0x17b1('0x9')],
                    'callback': function (_0x3c18ad) {
                        _0x1239d4[_0x17b1('0x9')] = _0x3c18ad;
                    },
                    'expression': _0x3e718f[_0x17b1('0x8')]
                }
            }, [
                _0x3e718f[_0x17b1('0xa')](_0x4e133f, _0x3e718f[_0x17b1('0xb')], {
                    'attrs': {
                        'label': _0x3e718f[_0x17b1('0xd')],
                        'name': _0x3e718f[_0x17b1('0xf')]
                    }
                }, [_0x1239d4['_v'](_0x3e718f[_0x17b1('0xd')])]),
                _0x3e718f[_0x17b1('0x11')](_0x4e133f, _0x3e718f[_0x17b1('0xb')], {
                    'attrs': {
                        'label': _0x3e718f[_0x17b1('0x12')],
                        'name': _0x3e718f[_0x17b1('0x14')]
                    }
                }, [_0x3e718f[_0x17b1('0x16')](_0x4e133f, _0x3e718f[_0x17b1('0x1')], {
                        'directives': [{
                                'name': _0x3e718f[_0x17b1('0x17')],
                                'rawName': _0x3e718f[_0x17b1('0x19')],
                                'value': _0x1239d4[_0x17b1('0x1c')],
                                'expression': _0x3e718f[_0x17b1('0x1b')]
                            }],
                        'staticStyle': {
                            'width': _0x3e718f[_0x17b1('0x1d')],
                            'height': _0x3e718f[_0x17b1('0x1f')]
                        }
                    }, [_0x3e718f[_0x17b1('0x21')](_0x4e133f, _0x3e718f[_0x17b1('0x22')], {
                            'ref': _0x3e718f[_0x17b1('0x24')],
                            'attrs': { 'options': _0x1239d4[_0x17b1('0x2d')] }
                        })], 0x1)]),
                _0x3e718f[_0x17b1('0x11')](_0x4e133f, _0x3e718f[_0x17b1('0xb')], {
                    'attrs': {
                        'label': _0x3e718f[_0x17b1('0x26')],
                        'name': _0x3e718f[_0x17b1('0x28')]
                    }
                }, [_0x1239d4['_v'](_0x3e718f[_0x17b1('0x26')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x1a7754 = {};
            _0x1a7754[_0x17b1('0x2e')] = function (_0x555ae1, _0xb97147, _0x35686f, _0x2a257b) {
                return _0x555ae1(_0xb97147, _0x35686f, _0x2a257b);
            };
            _0x1a7754[_0x17b1('0x2f')] = _0x17b1('0x2');
            _0x1a7754[_0x17b1('0x30')] = _0x17b1('0x31');
            _0x1a7754[_0x17b1('0x32')] = _0x17b1('0x33');
            _0x1a7754[_0x17b1('0x34')] = _0x17b1('0x35');
            _0x1a7754[_0x17b1('0x36')] = _0x17b1('0x37');
            _0x1a7754[_0x17b1('0x38')] = function (_0x567c6c, _0x4eaec2, _0x39582a) {
                return _0x567c6c(_0x4eaec2, _0x39582a);
            };
            _0x1a7754[_0x17b1('0x39')] = _0x17b1('0x3a');
            var _0x37fe2c = this, _0x4cff95 = _0x37fe2c[_0x17b1('0x2a')], _0x532afb = _0x37fe2c[_0x17b1('0x2b')]['_c'] || _0x4cff95;
            return _0x1a7754[_0x17b1('0x2e')](_0x532afb, _0x1a7754[_0x17b1('0x2f')], {
                'staticStyle': {
                    'padding': _0x1a7754[_0x17b1('0x30')],
                    'color': _0x1a7754[_0x17b1('0x32')],
                    'width': _0x1a7754[_0x17b1('0x34')]
                }
            }, [
                _0x37fe2c['_v'](_0x1a7754[_0x17b1('0x36')]),
                _0x1a7754[_0x17b1('0x38')](_0x532afb, _0x1a7754[_0x17b1('0x2f')], [_0x37fe2c['_v'](_0x1a7754[_0x17b1('0x39')])])
            ]);
        }];
const l = {}, o = {};
l[_0x17b1('0x3b')] = _0x17b1('0x3c');
l[_0x17b1('0x3d')] = {};
l[_0x17b1('0x3e')] = function () {
    var _0x4bb7b4 = {
        vagHp: _0x17b1('0x10'),
        aqyYj: _0x17b1('0x3f'),
        vnQwz: _0x17b1('0x40'),
        iGaez: _0x17b1('0x41'),
        fQiso: _0x17b1('0x42'),
        bBVYt: _0x17b1('0x43'),
        ZIDkT: _0x17b1('0x44'),
        KzxuD: _0x17b1('0x45'),
        NErMK: _0x17b1('0x46'),
        TfaBO: _0x17b1('0x47'),
        DsKIx: _0x17b1('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x4bb7b4.vagHp,
        demoname: _0x4bb7b4.aqyYj,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x4bb7b4.vnQwz,
                    layoutClassName: _0x4bb7b4.iGaez,
                    defaultJunctionPoint: _0x4bb7b4.fQiso,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x4bb7b4.bBVYt,
                    max_per_width: _0x4bb7b4.ZIDkT,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x4bb7b4.KzxuD
            },
            defaultExpandHolderPosition: _0x4bb7b4.NErMK,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x4bb7b4.TfaBO,
            defaultNodeColor: _0x4bb7b4.DsKIx
        }
    };
};
l[_0x17b1('0x49')] = function () {
};
l[_0x17b1('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x17b1('0x4b')] = {};
l[_0x17b1('0x4b')][_0x17b1('0x4c')] = function () {
    var _0x3574ac = {
        dRumJ: _0x17b1('0x4d'),
        yOYEK: _0x17b1('0x4e'),
        BbmOk: _0x17b1('0x4f'),
        GmMvf: _0x17b1('0x50'),
        tYhVH: _0x17b1('0x51'),
        zRQFI: _0x17b1('0x52'),
        omenb: _0x17b1('0x53'),
        OmsZe: _0x17b1('0x54'),
        VYxyP: function (_0xba9f32, _0x5df38b, _0x41ac59) {
            return _0xba9f32(_0x5df38b, _0x41ac59);
        }
    };
    const _0x5d190d = {
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
                id: _0x3574ac.dRumJ,
                text: _0x3574ac.dRumJ
            },
            {
                id: _0x3574ac.yOYEK,
                text: _0x3574ac.yOYEK
            },
            {
                id: _0x3574ac.BbmOk,
                text: _0x3574ac.BbmOk
            },
            {
                id: _0x3574ac.GmMvf,
                text: _0x3574ac.GmMvf
            },
            {
                id: _0x3574ac.tYhVH,
                text: _0x3574ac.tYhVH
            },
            {
                id: _0x3574ac.zRQFI,
                text: _0x3574ac.zRQFI
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x3574ac.omenb,
                text: _0x3574ac.omenb
            },
            {
                id: _0x3574ac.OmsZe,
                text: _0x3574ac.OmsZe
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
                to: _0x3574ac.dRumJ
            },
            {
                from: 'b1',
                to: _0x3574ac.yOYEK
            },
            {
                from: 'b1',
                to: _0x3574ac.BbmOk
            },
            {
                from: 'b1',
                to: _0x3574ac.GmMvf
            },
            {
                from: 'b1',
                to: _0x3574ac.tYhVH
            },
            {
                from: 'b1',
                to: _0x3574ac.zRQFI
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x3574ac.omenb
            },
            {
                from: 'b2',
                to: _0x3574ac.OmsZe
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
    console.log(JSON.stringify(_0x5d190d)), _0x3574ac.VYxyP(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x5d190d, _0x4e1101 => {
            _0x4e1101.refresh();
        });
    }, 0x3e8);
};
l[_0x17b1('0x4b')][_0x17b1('0x2c')] = function (_0x28764b, _0x412b3e) {
    var _0xac2c8b = {
        nHttD: _0x17b1('0x55'),
        ARFam: function (_0x2dd13d, _0x3ad42e) {
            return _0x2dd13d === _0x3ad42e;
        },
        mLybb: _0x17b1('0x15')
    };
    console.log(_0xac2c8b.nHttD, this.activeTabName), _0xac2c8b.ARFam(this.activeTabName, _0xac2c8b.mLybb) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x4b6a64(l, n, d, !0x1, c, null, null, null);
function c(_0x5e5751) {
    for (let _0x5d04e8 in o)
        this[_0x5d04e8] = o[_0x5d04e8];
}
const m = function () {
    return s[_0x17b1('0x56')];
}();
export {
    m as default
};