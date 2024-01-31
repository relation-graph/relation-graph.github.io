
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x18ba = [
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
    'dEGSF',
    'vgiNS',
    'div',
    'qiufr',
    'EeDUn',
    'el-tabs',
    'iVrgo',
    'card',
    'eNfmM',
    'activeTabName',
    'hGbWZ',
    'EOBnl',
    'el-tab-pane',
    'dILrH',
    '基本信息',
    'KlUjG',
    'base',
    'auLwh',
    '关系图谱（点这里）',
    'MvnvI',
    'relation',
    'amBvE',
    'loading',
    'VtJkw',
    'v-loading',
    'eJEgA',
    'g_loading',
    'UvBKL',
    'calc(100%)',
    'plXQU',
    'calc(100vh\x20-\x20300px)',
    'qWRCh',
    'bbhOx',
    'RelationGraph',
    'HiGRe',
    'graphRef',
    'keiVY',
    'WZoqr',
    '风险信息',
    'PgeOK',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'XyKBG',
    'oMfUJ',
    'xAkjh',
    '20px',
    'NewbV',
    '#666666',
    'Tgqee',
    '600px',
    'fRIfW',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'AYtfa',
    'wsVeP',
    '\x20比如点击按钮A时显示图谱，你需要在点击按钮A显示图谱之后，通过this.$nextTick()调用图谱的refresh()方法来刷新一下，这样就显示正常了，请参考当前demo的代码。\x20',
    'name',
    'RelationGraphDemo',
    'components',
    'data',
    '---'
];
(function (_0x1ae148, _0x4e4e2e) {
    var _0x2d158c = function (_0x5267c3) {
        while (--_0x5267c3) {
            _0x1ae148['push'](_0x1ae148['shift']());
        }
    };
    _0x2d158c(++_0x4e4e2e);
}(_0x18ba, 0xc3));
var _0x3949 = function (_0x2df4a8, _0x7fcc23) {
    _0x2df4a8 = _0x2df4a8 - 0x0;
    var _0x5e6740 = _0x18ba[_0x2df4a8];
    return _0x5e6740;
};
import { n as _0x3cbbab } from './index-36eaf5cf.js';
var n = function () {
        var _0x45e6cb = {};
        _0x45e6cb[_0x3949('0x0')] = function (_0x2f9569, _0x3d3e48, _0x1624e3, _0xfcf7d0) {
            return _0x2f9569(_0x3d3e48, _0x1624e3, _0xfcf7d0);
        };
        _0x45e6cb[_0x3949('0x1')] = _0x3949('0x2');
        _0x45e6cb[_0x3949('0x3')] = function (_0x341ecf, _0x580438, _0x3c9578, _0x2a9008, _0x52b2cb) {
            return _0x341ecf(_0x580438, _0x3c9578, _0x2a9008, _0x52b2cb);
        };
        _0x45e6cb[_0x3949('0x4')] = _0x3949('0x5');
        _0x45e6cb[_0x3949('0x6')] = _0x3949('0x7');
        _0x45e6cb[_0x3949('0x8')] = _0x3949('0x9');
        _0x45e6cb[_0x3949('0xa')] = function (_0x41dbcc, _0x168bdc, _0x5bdbee, _0xbdee08) {
            return _0x41dbcc(_0x168bdc, _0x5bdbee, _0xbdee08);
        };
        _0x45e6cb[_0x3949('0xb')] = _0x3949('0xc');
        _0x45e6cb[_0x3949('0xd')] = _0x3949('0xe');
        _0x45e6cb[_0x3949('0xf')] = _0x3949('0x10');
        _0x45e6cb[_0x3949('0x11')] = _0x3949('0x12');
        _0x45e6cb[_0x3949('0x13')] = _0x3949('0x14');
        _0x45e6cb[_0x3949('0x15')] = _0x3949('0x16');
        _0x45e6cb[_0x3949('0x17')] = _0x3949('0x18');
        _0x45e6cb[_0x3949('0x19')] = _0x3949('0x1a');
        _0x45e6cb[_0x3949('0x1b')] = _0x3949('0x1c');
        _0x45e6cb[_0x3949('0x1d')] = _0x3949('0x1e');
        _0x45e6cb[_0x3949('0x1f')] = function (_0x642bff, _0x10a969, _0x3093de) {
            return _0x642bff(_0x10a969, _0x3093de);
        };
        _0x45e6cb[_0x3949('0x20')] = _0x3949('0x21');
        _0x45e6cb[_0x3949('0x22')] = _0x3949('0x23');
        _0x45e6cb[_0x3949('0x24')] = function (_0x1e0e5f, _0xd71ca4, _0x200b80, _0x114232) {
            return _0x1e0e5f(_0xd71ca4, _0x200b80, _0x114232);
        };
        _0x45e6cb[_0x3949('0x25')] = _0x3949('0x26');
        _0x45e6cb[_0x3949('0x27')] = _0x3949('0x28');
        var _0x3255b2 = this, _0x189f15 = _0x3255b2[_0x3949('0x29')], _0x546e2b = _0x3255b2[_0x3949('0x2a')]['_c'] || _0x189f15;
        return _0x45e6cb[_0x3949('0x0')](_0x546e2b, _0x45e6cb[_0x3949('0x1')], [
            _0x3255b2['_m'](0x0),
            _0x45e6cb[_0x3949('0x3')](_0x546e2b, _0x45e6cb[_0x3949('0x4')], {
                'attrs': { 'type': _0x45e6cb[_0x3949('0x6')] },
                'on': { 'tab-click': _0x3255b2[_0x3949('0x2b')] },
                'model': {
                    'value': _0x3255b2[_0x3949('0x9')],
                    'callback': function (_0x26af5d) {
                        _0x3255b2[_0x3949('0x9')] = _0x26af5d;
                    },
                    'expression': _0x45e6cb[_0x3949('0x8')]
                }
            }, [
                _0x45e6cb[_0x3949('0xa')](_0x546e2b, _0x45e6cb[_0x3949('0xb')], {
                    'attrs': {
                        'label': _0x45e6cb[_0x3949('0xd')],
                        'name': _0x45e6cb[_0x3949('0xf')]
                    }
                }, [_0x3255b2['_v'](_0x45e6cb[_0x3949('0xd')])]),
                _0x45e6cb[_0x3949('0xa')](_0x546e2b, _0x45e6cb[_0x3949('0xb')], {
                    'attrs': {
                        'label': _0x45e6cb[_0x3949('0x11')],
                        'name': _0x45e6cb[_0x3949('0x13')]
                    }
                }, [_0x45e6cb[_0x3949('0x3')](_0x546e2b, _0x45e6cb[_0x3949('0x1')], {
                        'directives': [{
                                'name': _0x45e6cb[_0x3949('0x15')],
                                'rawName': _0x45e6cb[_0x3949('0x17')],
                                'value': _0x3255b2[_0x3949('0x1a')],
                                'expression': _0x45e6cb[_0x3949('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x45e6cb[_0x3949('0x1b')],
                            'height': _0x45e6cb[_0x3949('0x1d')]
                        }
                    }, [_0x45e6cb[_0x3949('0x1f')](_0x546e2b, _0x45e6cb[_0x3949('0x20')], {
                            'ref': _0x45e6cb[_0x3949('0x22')],
                            'attrs': { 'options': _0x3255b2[_0x3949('0x2c')] }
                        })], 0x1)]),
                _0x45e6cb[_0x3949('0x24')](_0x546e2b, _0x45e6cb[_0x3949('0xb')], {
                    'attrs': {
                        'label': _0x45e6cb[_0x3949('0x25')],
                        'name': _0x45e6cb[_0x3949('0x27')]
                    }
                }, [_0x3255b2['_v'](_0x45e6cb[_0x3949('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x4bd993 = {};
            _0x4bd993[_0x3949('0x2d')] = function (_0x2706a1, _0x5a04d7, _0x4e68ad, _0x1a1d4a) {
                return _0x2706a1(_0x5a04d7, _0x4e68ad, _0x1a1d4a);
            };
            _0x4bd993[_0x3949('0x2e')] = _0x3949('0x2');
            _0x4bd993[_0x3949('0x2f')] = _0x3949('0x30');
            _0x4bd993[_0x3949('0x31')] = _0x3949('0x32');
            _0x4bd993[_0x3949('0x33')] = _0x3949('0x34');
            _0x4bd993[_0x3949('0x35')] = _0x3949('0x36');
            _0x4bd993[_0x3949('0x37')] = function (_0x74095b, _0x26e787, _0x321933) {
                return _0x74095b(_0x26e787, _0x321933);
            };
            _0x4bd993[_0x3949('0x38')] = _0x3949('0x39');
            var _0x34238f = this, _0x3ee4a3 = _0x34238f[_0x3949('0x29')], _0x5446aa = _0x34238f[_0x3949('0x2a')]['_c'] || _0x3ee4a3;
            return _0x4bd993[_0x3949('0x2d')](_0x5446aa, _0x4bd993[_0x3949('0x2e')], {
                'staticStyle': {
                    'padding': _0x4bd993[_0x3949('0x2f')],
                    'color': _0x4bd993[_0x3949('0x31')],
                    'width': _0x4bd993[_0x3949('0x33')]
                }
            }, [
                _0x34238f['_v'](_0x4bd993[_0x3949('0x35')]),
                _0x4bd993[_0x3949('0x37')](_0x5446aa, _0x4bd993[_0x3949('0x2e')], [_0x34238f['_v'](_0x4bd993[_0x3949('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x3949('0x3a')] = _0x3949('0x3b');
l[_0x3949('0x3c')] = {};
l[_0x3949('0x3d')] = function () {
    var _0x46198d = {
        IkuuH: _0x3949('0x10'),
        PfNlq: _0x3949('0x3e'),
        UqjWO: _0x3949('0x3f'),
        dXUOA: _0x3949('0x40'),
        byrjd: _0x3949('0x41'),
        icETl: _0x3949('0x42'),
        jvqyK: _0x3949('0x43'),
        nTjYC: _0x3949('0x44'),
        hANeo: _0x3949('0x45'),
        YKUKC: _0x3949('0x46'),
        ZbPHV: _0x3949('0x47')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x46198d.IkuuH,
        demoname: _0x46198d.PfNlq,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x46198d.UqjWO,
                    layoutClassName: _0x46198d.dXUOA,
                    defaultJunctionPoint: _0x46198d.byrjd,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x46198d.icETl,
                    max_per_width: _0x46198d.jvqyK,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x46198d.nTjYC
            },
            defaultExpandHolderPosition: _0x46198d.hANeo,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x46198d.YKUKC,
            defaultNodeColor: _0x46198d.ZbPHV
        }
    };
};
l[_0x3949('0x48')] = function () {
};
l[_0x3949('0x49')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x3949('0x4a')] = {};
l[_0x3949('0x4a')][_0x3949('0x4b')] = function () {
    var _0x3b348 = {
        JUOhc: _0x3949('0x4c'),
        WmyjG: _0x3949('0x4d'),
        NKvyg: _0x3949('0x4e'),
        xCoRw: _0x3949('0x4f'),
        mMoOt: _0x3949('0x50'),
        wNAhU: _0x3949('0x51'),
        yAESP: _0x3949('0x52'),
        uWZkB: _0x3949('0x53'),
        TgqkM: function (_0x161785, _0x3a95a9, _0x59d258) {
            return _0x161785(_0x3a95a9, _0x59d258);
        }
    };
    const _0x322ae7 = {
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
                id: _0x3b348.JUOhc,
                text: _0x3b348.JUOhc
            },
            {
                id: _0x3b348.WmyjG,
                text: _0x3b348.WmyjG
            },
            {
                id: _0x3b348.NKvyg,
                text: _0x3b348.NKvyg
            },
            {
                id: _0x3b348.xCoRw,
                text: _0x3b348.xCoRw
            },
            {
                id: _0x3b348.mMoOt,
                text: _0x3b348.mMoOt
            },
            {
                id: _0x3b348.wNAhU,
                text: _0x3b348.wNAhU
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x3b348.yAESP,
                text: _0x3b348.yAESP
            },
            {
                id: _0x3b348.uWZkB,
                text: _0x3b348.uWZkB
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
                to: _0x3b348.JUOhc
            },
            {
                from: 'b1',
                to: _0x3b348.WmyjG
            },
            {
                from: 'b1',
                to: _0x3b348.NKvyg
            },
            {
                from: 'b1',
                to: _0x3b348.xCoRw
            },
            {
                from: 'b1',
                to: _0x3b348.mMoOt
            },
            {
                from: 'b1',
                to: _0x3b348.wNAhU
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x3b348.yAESP
            },
            {
                from: 'b2',
                to: _0x3b348.uWZkB
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
    console.log(JSON.stringify(_0x322ae7)), _0x3b348.TgqkM(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x322ae7, _0x4b49ba => {
            _0x4b49ba.refresh();
        });
    }, 0x3e8);
};
l[_0x3949('0x4a')][_0x3949('0x2b')] = function (_0x37826d, _0x30542d) {
    var _0x1dfd8f = {
        iwRre: _0x3949('0x54'),
        FbyYl: function (_0x4d0108, _0x1e1d0c) {
            return _0x4d0108 === _0x1e1d0c;
        },
        ZmqGh: _0x3949('0x14')
    };
    console.log(_0x1dfd8f.iwRre, this.activeTabName), _0x1dfd8f.FbyYl(this.activeTabName, _0x1dfd8f.ZmqGh) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x3cbbab(l, n, d, !0x1, c, null, null, null);
function c(_0x363f7e) {
    for (let _0x44b833 in o)
        this[_0x44b833] = o[_0x44b833];
}
const m = function () {
    return s[_0x3949('0x55')];
}();
export {
    m as default
};