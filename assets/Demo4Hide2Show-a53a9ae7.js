
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1e27 = [
    'el-tabs',
    'erkEk',
    'card',
    'gxlZo',
    'activeTabName',
    'TCMSb',
    'xLuXE',
    'el-tab-pane',
    'qqWrX',
    '基本信息',
    'RQoem',
    'base',
    'OMgaS',
    '关系图谱（点这里）',
    'xADpt',
    'relation',
    'GyJFu',
    'RlSfB',
    'loading',
    'AQjcU',
    'v-loading',
    'EaGEu',
    'g_loading',
    'AemxD',
    'calc(100%)',
    'tDNZc',
    'calc(100vh\x20-\x20300px)',
    'ZYpSg',
    'YYpKK',
    'RelationGraph',
    'evdaX',
    'graphRef',
    'nwxwH',
    '风险信息',
    'PpaiW',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'SxZZo',
    'oUzGY',
    'uMLBd',
    '20px',
    'nefbF',
    '#666666',
    'MMOtb',
    '600px',
    'uPdCc',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'vrMZj',
    'cwBCd',
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
    'jJVEs',
    'WrZAo',
    'div',
    'sObHh',
    'ksXeZ'
];
(function (_0x2f2207, _0x347079) {
    var _0xfe9741 = function (_0x35fc8e) {
        while (--_0x35fc8e) {
            _0x2f2207['push'](_0x2f2207['shift']());
        }
    };
    _0xfe9741(++_0x347079);
}(_0x1e27, 0x1a9));
var _0x4408 = function (_0x561a3d, _0x4823dc) {
    _0x561a3d = _0x561a3d - 0x0;
    var _0x46fdee = _0x1e27[_0x561a3d];
    return _0x46fdee;
};
import { n as _0x412b1e } from './index-cdb280d3.js';
var n = function () {
        var _0x2e9716 = {};
        _0x2e9716[_0x4408('0x0')] = function (_0x25d64d, _0x356ba0, _0x26621f, _0x57440b) {
            return _0x25d64d(_0x356ba0, _0x26621f, _0x57440b);
        };
        _0x2e9716[_0x4408('0x1')] = _0x4408('0x2');
        _0x2e9716[_0x4408('0x3')] = function (_0x49fc90, _0x4f438, _0x3ace56, _0xd18639, _0xac929) {
            return _0x49fc90(_0x4f438, _0x3ace56, _0xd18639, _0xac929);
        };
        _0x2e9716[_0x4408('0x4')] = _0x4408('0x5');
        _0x2e9716[_0x4408('0x6')] = _0x4408('0x7');
        _0x2e9716[_0x4408('0x8')] = _0x4408('0x9');
        _0x2e9716[_0x4408('0xa')] = function (_0x4e84ac, _0x1e770b, _0x639809, _0x5cc1e9) {
            return _0x4e84ac(_0x1e770b, _0x639809, _0x5cc1e9);
        };
        _0x2e9716[_0x4408('0xb')] = _0x4408('0xc');
        _0x2e9716[_0x4408('0xd')] = _0x4408('0xe');
        _0x2e9716[_0x4408('0xf')] = _0x4408('0x10');
        _0x2e9716[_0x4408('0x11')] = _0x4408('0x12');
        _0x2e9716[_0x4408('0x13')] = _0x4408('0x14');
        _0x2e9716[_0x4408('0x15')] = function (_0x561eda, _0x581966, _0x27fcc7, _0x41bd92, _0xad1361) {
            return _0x561eda(_0x581966, _0x27fcc7, _0x41bd92, _0xad1361);
        };
        _0x2e9716[_0x4408('0x16')] = _0x4408('0x17');
        _0x2e9716[_0x4408('0x18')] = _0x4408('0x19');
        _0x2e9716[_0x4408('0x1a')] = _0x4408('0x1b');
        _0x2e9716[_0x4408('0x1c')] = _0x4408('0x1d');
        _0x2e9716[_0x4408('0x1e')] = _0x4408('0x1f');
        _0x2e9716[_0x4408('0x20')] = function (_0x12fe7c, _0x21c26e, _0x23b547) {
            return _0x12fe7c(_0x21c26e, _0x23b547);
        };
        _0x2e9716[_0x4408('0x21')] = _0x4408('0x22');
        _0x2e9716[_0x4408('0x23')] = _0x4408('0x24');
        _0x2e9716[_0x4408('0x25')] = _0x4408('0x26');
        _0x2e9716[_0x4408('0x27')] = _0x4408('0x28');
        var _0x4e1636 = this, _0x904f9b = _0x4e1636[_0x4408('0x29')], _0x4aad6a = _0x4e1636[_0x4408('0x2a')]['_c'] || _0x904f9b;
        return _0x2e9716[_0x4408('0x0')](_0x4aad6a, _0x2e9716[_0x4408('0x1')], [
            _0x4e1636['_m'](0x0),
            _0x2e9716[_0x4408('0x3')](_0x4aad6a, _0x2e9716[_0x4408('0x4')], {
                'attrs': { 'type': _0x2e9716[_0x4408('0x6')] },
                'on': { 'tab-click': _0x4e1636[_0x4408('0x2b')] },
                'model': {
                    'value': _0x4e1636[_0x4408('0x9')],
                    'callback': function (_0x2e70d8) {
                        _0x4e1636[_0x4408('0x9')] = _0x2e70d8;
                    },
                    'expression': _0x2e9716[_0x4408('0x8')]
                }
            }, [
                _0x2e9716[_0x4408('0xa')](_0x4aad6a, _0x2e9716[_0x4408('0xb')], {
                    'attrs': {
                        'label': _0x2e9716[_0x4408('0xd')],
                        'name': _0x2e9716[_0x4408('0xf')]
                    }
                }, [_0x4e1636['_v'](_0x2e9716[_0x4408('0xd')])]),
                _0x2e9716[_0x4408('0xa')](_0x4aad6a, _0x2e9716[_0x4408('0xb')], {
                    'attrs': {
                        'label': _0x2e9716[_0x4408('0x11')],
                        'name': _0x2e9716[_0x4408('0x13')]
                    }
                }, [_0x2e9716[_0x4408('0x15')](_0x4aad6a, _0x2e9716[_0x4408('0x1')], {
                        'directives': [{
                                'name': _0x2e9716[_0x4408('0x16')],
                                'rawName': _0x2e9716[_0x4408('0x18')],
                                'value': _0x4e1636[_0x4408('0x1b')],
                                'expression': _0x2e9716[_0x4408('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0x2e9716[_0x4408('0x1c')],
                            'height': _0x2e9716[_0x4408('0x1e')]
                        }
                    }, [_0x2e9716[_0x4408('0x20')](_0x4aad6a, _0x2e9716[_0x4408('0x21')], {
                            'ref': _0x2e9716[_0x4408('0x23')],
                            'attrs': { 'options': _0x4e1636[_0x4408('0x2c')] }
                        })], 0x1)]),
                _0x2e9716[_0x4408('0xa')](_0x4aad6a, _0x2e9716[_0x4408('0xb')], {
                    'attrs': {
                        'label': _0x2e9716[_0x4408('0x25')],
                        'name': _0x2e9716[_0x4408('0x27')]
                    }
                }, [_0x4e1636['_v'](_0x2e9716[_0x4408('0x25')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x5ab499 = {};
            _0x5ab499[_0x4408('0x2d')] = function (_0x27e7b6, _0x558fa3, _0xd817d7, _0x5060f3) {
                return _0x27e7b6(_0x558fa3, _0xd817d7, _0x5060f3);
            };
            _0x5ab499[_0x4408('0x2e')] = _0x4408('0x2');
            _0x5ab499[_0x4408('0x2f')] = _0x4408('0x30');
            _0x5ab499[_0x4408('0x31')] = _0x4408('0x32');
            _0x5ab499[_0x4408('0x33')] = _0x4408('0x34');
            _0x5ab499[_0x4408('0x35')] = _0x4408('0x36');
            _0x5ab499[_0x4408('0x37')] = function (_0x3a269b, _0xf70379, _0x44e7d4) {
                return _0x3a269b(_0xf70379, _0x44e7d4);
            };
            _0x5ab499[_0x4408('0x38')] = _0x4408('0x39');
            var _0x226e13 = this, _0x4d5b40 = _0x226e13[_0x4408('0x29')], _0x17c55b = _0x226e13[_0x4408('0x2a')]['_c'] || _0x4d5b40;
            return _0x5ab499[_0x4408('0x2d')](_0x17c55b, _0x5ab499[_0x4408('0x2e')], {
                'staticStyle': {
                    'padding': _0x5ab499[_0x4408('0x2f')],
                    'color': _0x5ab499[_0x4408('0x31')],
                    'width': _0x5ab499[_0x4408('0x33')]
                }
            }, [
                _0x226e13['_v'](_0x5ab499[_0x4408('0x35')]),
                _0x5ab499[_0x4408('0x37')](_0x17c55b, _0x5ab499[_0x4408('0x2e')], [_0x226e13['_v'](_0x5ab499[_0x4408('0x38')])])
            ]);
        }];
const l = {}, o = {};
l[_0x4408('0x3a')] = _0x4408('0x3b');
l[_0x4408('0x3c')] = {};
l[_0x4408('0x3d')] = function () {
    var _0x5a232c = {
        hecHr: _0x4408('0x10'),
        uXovQ: _0x4408('0x3e'),
        oQSBL: _0x4408('0x3f'),
        pCmtY: _0x4408('0x40'),
        Yxxut: _0x4408('0x41'),
        FyoeW: _0x4408('0x42'),
        BktKn: _0x4408('0x43'),
        pdhqB: _0x4408('0x44'),
        FHXGQ: _0x4408('0x45'),
        WxvLL: _0x4408('0x46'),
        DfuQJ: _0x4408('0x47')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x5a232c.hecHr,
        demoname: _0x5a232c.uXovQ,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x5a232c.oQSBL,
                    layoutClassName: _0x5a232c.pCmtY,
                    defaultJunctionPoint: _0x5a232c.Yxxut,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x5a232c.FyoeW,
                    max_per_width: _0x5a232c.BktKn,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x5a232c.pdhqB
            },
            defaultExpandHolderPosition: _0x5a232c.FHXGQ,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x5a232c.WxvLL,
            defaultNodeColor: _0x5a232c.DfuQJ
        }
    };
};
l[_0x4408('0x48')] = function () {
};
l[_0x4408('0x49')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x4408('0x4a')] = {};
l[_0x4408('0x4a')][_0x4408('0x4b')] = function () {
    var _0x26430d = {
        DRWTc: _0x4408('0x4c'),
        PdLdB: _0x4408('0x4d'),
        oQClH: _0x4408('0x4e'),
        zGIcT: _0x4408('0x4f'),
        sAwmj: _0x4408('0x50'),
        oosjD: _0x4408('0x51'),
        eoUaC: _0x4408('0x52'),
        QHLGy: _0x4408('0x53'),
        mUqiD: function (_0x782536, _0x1b5806, _0x3f2ab7) {
            return _0x782536(_0x1b5806, _0x3f2ab7);
        }
    };
    const _0x5f5c9a = {
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
                id: _0x26430d.DRWTc,
                text: _0x26430d.DRWTc
            },
            {
                id: _0x26430d.PdLdB,
                text: _0x26430d.PdLdB
            },
            {
                id: _0x26430d.oQClH,
                text: _0x26430d.oQClH
            },
            {
                id: _0x26430d.zGIcT,
                text: _0x26430d.zGIcT
            },
            {
                id: _0x26430d.sAwmj,
                text: _0x26430d.sAwmj
            },
            {
                id: _0x26430d.oosjD,
                text: _0x26430d.oosjD
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x26430d.eoUaC,
                text: _0x26430d.eoUaC
            },
            {
                id: _0x26430d.QHLGy,
                text: _0x26430d.QHLGy
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
                to: _0x26430d.DRWTc
            },
            {
                from: 'b1',
                to: _0x26430d.PdLdB
            },
            {
                from: 'b1',
                to: _0x26430d.oQClH
            },
            {
                from: 'b1',
                to: _0x26430d.zGIcT
            },
            {
                from: 'b1',
                to: _0x26430d.sAwmj
            },
            {
                from: 'b1',
                to: _0x26430d.oosjD
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x26430d.eoUaC
            },
            {
                from: 'b2',
                to: _0x26430d.QHLGy
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
    console.log(JSON.stringify(_0x5f5c9a)), _0x26430d.mUqiD(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x5f5c9a, _0x24b087 => {
            _0x24b087.refresh();
        });
    }, 0x3e8);
};
l[_0x4408('0x4a')][_0x4408('0x2b')] = function (_0x1cb967, _0x17f368) {
    var _0xc89d7c = {
        IUgDn: _0x4408('0x54'),
        dfxEm: function (_0x5d5e71, _0x1be6d8) {
            return _0x5d5e71 === _0x1be6d8;
        },
        rewoa: _0x4408('0x14')
    };
    console.log(_0xc89d7c.IUgDn, this.activeTabName), _0xc89d7c.dfxEm(this.activeTabName, _0xc89d7c.rewoa) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x412b1e(l, n, d, !0x1, c, null, null, null);
function c(_0xc54558) {
    for (let _0x21eced in o)
        this[_0x21eced] = o[_0x21eced];
}
const m = function () {
    return s[_0x4408('0x55')];
}();
export {
    m as default
};