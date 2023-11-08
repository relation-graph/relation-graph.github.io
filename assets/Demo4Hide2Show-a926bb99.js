
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0xeedb = [
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'NXsPX',
    'pAkaU',
    'HRbci',
    '20px',
    'DQKUp',
    '#666666',
    'QwyIB',
    '600px',
    'nzniz',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'ueDRs',
    'yUJDd',
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
    'oFAPI',
    'WVcRh',
    'div',
    'EkERP',
    'bSMCI',
    'el-tabs',
    'eoEBx',
    'card',
    'HqLLo',
    'activeTabName',
    'rqDVf',
    'el-tab-pane',
    'DaJZo',
    '基本信息',
    'zfaTZ',
    'base',
    'QVXLg',
    '关系图谱（点这里）',
    'FaLpp',
    'relation',
    'PzTdH',
    'CznBO',
    'loading',
    'REjxS',
    'v-loading',
    'gDRdS',
    'g_loading',
    'ZXEvo',
    'calc(100%)',
    'aUQCl',
    'calc(100vh\x20-\x20300px)',
    'ZoATu',
    'lRfIa',
    'RelationGraph',
    'ELFFk',
    'graphRef',
    'TPqdF',
    '风险信息',
    'PPnxi',
    'risk'
];
(function (_0x33dd6a, _0x140156) {
    var _0x42fef8 = function (_0x13ab42) {
        while (--_0x13ab42) {
            _0x33dd6a['push'](_0x33dd6a['shift']());
        }
    };
    _0x42fef8(++_0x140156);
}(_0xeedb, 0x84));
var _0x3f63 = function (_0x212de3, _0x589fbf) {
    _0x212de3 = _0x212de3 - 0x0;
    var _0x31e268 = _0xeedb[_0x212de3];
    return _0x31e268;
};
import { n as _0xf7f9fc } from './index-023a64e5.js';
var n = function () {
        var _0x1f79f0 = {};
        _0x1f79f0[_0x3f63('0x0')] = function (_0x332a31, _0x55a7f2, _0x4567af, _0x2beafe) {
            return _0x332a31(_0x55a7f2, _0x4567af, _0x2beafe);
        };
        _0x1f79f0[_0x3f63('0x1')] = _0x3f63('0x2');
        _0x1f79f0[_0x3f63('0x3')] = function (_0x466199, _0x4db7a8, _0x196b79, _0x2e37df, _0x3b6119) {
            return _0x466199(_0x4db7a8, _0x196b79, _0x2e37df, _0x3b6119);
        };
        _0x1f79f0[_0x3f63('0x4')] = _0x3f63('0x5');
        _0x1f79f0[_0x3f63('0x6')] = _0x3f63('0x7');
        _0x1f79f0[_0x3f63('0x8')] = _0x3f63('0x9');
        _0x1f79f0[_0x3f63('0xa')] = _0x3f63('0xb');
        _0x1f79f0[_0x3f63('0xc')] = _0x3f63('0xd');
        _0x1f79f0[_0x3f63('0xe')] = _0x3f63('0xf');
        _0x1f79f0[_0x3f63('0x10')] = _0x3f63('0x11');
        _0x1f79f0[_0x3f63('0x12')] = _0x3f63('0x13');
        _0x1f79f0[_0x3f63('0x14')] = function (_0x6d5dff, _0x226bf2, _0x311a5d, _0x51f8cf, _0x434df6) {
            return _0x6d5dff(_0x226bf2, _0x311a5d, _0x51f8cf, _0x434df6);
        };
        _0x1f79f0[_0x3f63('0x15')] = _0x3f63('0x16');
        _0x1f79f0[_0x3f63('0x17')] = _0x3f63('0x18');
        _0x1f79f0[_0x3f63('0x19')] = _0x3f63('0x1a');
        _0x1f79f0[_0x3f63('0x1b')] = _0x3f63('0x1c');
        _0x1f79f0[_0x3f63('0x1d')] = _0x3f63('0x1e');
        _0x1f79f0[_0x3f63('0x1f')] = function (_0x47fd4b, _0x4cf208, _0x417d03) {
            return _0x47fd4b(_0x4cf208, _0x417d03);
        };
        _0x1f79f0[_0x3f63('0x20')] = _0x3f63('0x21');
        _0x1f79f0[_0x3f63('0x22')] = _0x3f63('0x23');
        _0x1f79f0[_0x3f63('0x24')] = _0x3f63('0x25');
        _0x1f79f0[_0x3f63('0x26')] = _0x3f63('0x27');
        var _0x1dd148 = this, _0x3eb30d = _0x1dd148[_0x3f63('0x28')], _0x4407c = _0x1dd148[_0x3f63('0x29')]['_c'] || _0x3eb30d;
        return _0x1f79f0[_0x3f63('0x0')](_0x4407c, _0x1f79f0[_0x3f63('0x1')], [
            _0x1dd148['_m'](0x0),
            _0x1f79f0[_0x3f63('0x3')](_0x4407c, _0x1f79f0[_0x3f63('0x4')], {
                'attrs': { 'type': _0x1f79f0[_0x3f63('0x6')] },
                'on': { 'tab-click': _0x1dd148[_0x3f63('0x2a')] },
                'model': {
                    'value': _0x1dd148[_0x3f63('0x9')],
                    'callback': function (_0x12561a) {
                        _0x1dd148[_0x3f63('0x9')] = _0x12561a;
                    },
                    'expression': _0x1f79f0[_0x3f63('0x8')]
                }
            }, [
                _0x1f79f0[_0x3f63('0x0')](_0x4407c, _0x1f79f0[_0x3f63('0xa')], {
                    'attrs': {
                        'label': _0x1f79f0[_0x3f63('0xc')],
                        'name': _0x1f79f0[_0x3f63('0xe')]
                    }
                }, [_0x1dd148['_v'](_0x1f79f0[_0x3f63('0xc')])]),
                _0x1f79f0[_0x3f63('0x0')](_0x4407c, _0x1f79f0[_0x3f63('0xa')], {
                    'attrs': {
                        'label': _0x1f79f0[_0x3f63('0x10')],
                        'name': _0x1f79f0[_0x3f63('0x12')]
                    }
                }, [_0x1f79f0[_0x3f63('0x14')](_0x4407c, _0x1f79f0[_0x3f63('0x1')], {
                        'directives': [{
                                'name': _0x1f79f0[_0x3f63('0x15')],
                                'rawName': _0x1f79f0[_0x3f63('0x17')],
                                'value': _0x1dd148[_0x3f63('0x1a')],
                                'expression': _0x1f79f0[_0x3f63('0x19')]
                            }],
                        'staticStyle': {
                            'width': _0x1f79f0[_0x3f63('0x1b')],
                            'height': _0x1f79f0[_0x3f63('0x1d')]
                        }
                    }, [_0x1f79f0[_0x3f63('0x1f')](_0x4407c, _0x1f79f0[_0x3f63('0x20')], {
                            'ref': _0x1f79f0[_0x3f63('0x22')],
                            'attrs': { 'options': _0x1dd148[_0x3f63('0x2b')] }
                        })], 0x1)]),
                _0x1f79f0[_0x3f63('0x0')](_0x4407c, _0x1f79f0[_0x3f63('0xa')], {
                    'attrs': {
                        'label': _0x1f79f0[_0x3f63('0x24')],
                        'name': _0x1f79f0[_0x3f63('0x26')]
                    }
                }, [_0x1dd148['_v'](_0x1f79f0[_0x3f63('0x24')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x461ced = {};
            _0x461ced[_0x3f63('0x2c')] = function (_0x329e25, _0x19494d, _0x2182ff, _0x438ac6) {
                return _0x329e25(_0x19494d, _0x2182ff, _0x438ac6);
            };
            _0x461ced[_0x3f63('0x2d')] = _0x3f63('0x2');
            _0x461ced[_0x3f63('0x2e')] = _0x3f63('0x2f');
            _0x461ced[_0x3f63('0x30')] = _0x3f63('0x31');
            _0x461ced[_0x3f63('0x32')] = _0x3f63('0x33');
            _0x461ced[_0x3f63('0x34')] = _0x3f63('0x35');
            _0x461ced[_0x3f63('0x36')] = function (_0x101f5c, _0x56eb44, _0x420c0f) {
                return _0x101f5c(_0x56eb44, _0x420c0f);
            };
            _0x461ced[_0x3f63('0x37')] = _0x3f63('0x38');
            var _0x22ba4f = this, _0x16fda5 = _0x22ba4f[_0x3f63('0x28')], _0x21fcbb = _0x22ba4f[_0x3f63('0x29')]['_c'] || _0x16fda5;
            return _0x461ced[_0x3f63('0x2c')](_0x21fcbb, _0x461ced[_0x3f63('0x2d')], {
                'staticStyle': {
                    'padding': _0x461ced[_0x3f63('0x2e')],
                    'color': _0x461ced[_0x3f63('0x30')],
                    'width': _0x461ced[_0x3f63('0x32')]
                }
            }, [
                _0x22ba4f['_v'](_0x461ced[_0x3f63('0x34')]),
                _0x461ced[_0x3f63('0x36')](_0x21fcbb, _0x461ced[_0x3f63('0x2d')], [_0x22ba4f['_v'](_0x461ced[_0x3f63('0x37')])])
            ]);
        }];
const l = {}, o = {};
l[_0x3f63('0x39')] = _0x3f63('0x3a');
l[_0x3f63('0x3b')] = {};
l[_0x3f63('0x3c')] = function () {
    var _0x1786fe = {
        qnXUg: _0x3f63('0xf'),
        SHXun: _0x3f63('0x3d'),
        MWIqX: _0x3f63('0x3e'),
        VFXKu: _0x3f63('0x3f'),
        aDxUy: _0x3f63('0x40'),
        xeAuT: _0x3f63('0x41'),
        UcyAJ: _0x3f63('0x42'),
        cKMCP: _0x3f63('0x43'),
        scIPt: _0x3f63('0x44'),
        EPstt: _0x3f63('0x45'),
        YBafb: _0x3f63('0x46'),
        nlQPw: _0x3f63('0x47')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x1786fe.qnXUg,
        demoname: _0x1786fe.SHXun,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x1786fe.MWIqX,
                    layoutClassName: _0x1786fe.VFXKu,
                    defaultJunctionPoint: _0x1786fe.aDxUy,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x1786fe.xeAuT,
                    max_per_width: _0x1786fe.UcyAJ,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x1786fe.cKMCP
            },
            defaultExpandHolderPosition: _0x1786fe.scIPt,
            defaultNodeShape: 0x1,
            defaultNodeWidth: _0x1786fe.EPstt,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x1786fe.YBafb,
            defaultNodeColor: _0x1786fe.nlQPw
        }
    };
};
l[_0x3f63('0x48')] = function () {
};
l[_0x3f63('0x49')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x3f63('0x4a')] = {};
l[_0x3f63('0x4a')][_0x3f63('0x4b')] = function () {
    var _0xa40eab = {
        nzoGv: _0x3f63('0x4c'),
        keWGC: _0x3f63('0x4d'),
        PZXht: _0x3f63('0x4e'),
        azpWV: _0x3f63('0x4f'),
        OIoGF: _0x3f63('0x50'),
        MrNGK: _0x3f63('0x51'),
        gwDtZ: _0x3f63('0x52'),
        jBoCT: _0x3f63('0x53'),
        udkNB: function (_0x1f30ab, _0x5ddc75, _0x4f8d9c) {
            return _0x1f30ab(_0x5ddc75, _0x4f8d9c);
        }
    };
    const _0x1dba30 = {
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
                id: _0xa40eab.nzoGv,
                text: _0xa40eab.nzoGv
            },
            {
                id: _0xa40eab.keWGC,
                text: _0xa40eab.keWGC
            },
            {
                id: _0xa40eab.PZXht,
                text: _0xa40eab.PZXht
            },
            {
                id: _0xa40eab.azpWV,
                text: _0xa40eab.azpWV
            },
            {
                id: _0xa40eab.OIoGF,
                text: _0xa40eab.OIoGF
            },
            {
                id: _0xa40eab.MrNGK,
                text: _0xa40eab.MrNGK
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0xa40eab.gwDtZ,
                text: _0xa40eab.gwDtZ
            },
            {
                id: _0xa40eab.jBoCT,
                text: _0xa40eab.jBoCT
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
                to: _0xa40eab.nzoGv
            },
            {
                from: 'b1',
                to: _0xa40eab.keWGC
            },
            {
                from: 'b1',
                to: _0xa40eab.PZXht
            },
            {
                from: 'b1',
                to: _0xa40eab.azpWV
            },
            {
                from: 'b1',
                to: _0xa40eab.OIoGF
            },
            {
                from: 'b1',
                to: _0xa40eab.MrNGK
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0xa40eab.gwDtZ
            },
            {
                from: 'b2',
                to: _0xa40eab.jBoCT
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
    console.log(JSON.stringify(_0x1dba30)), _0xa40eab.udkNB(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x1dba30, _0x1c6044 => {
            _0x1c6044.refresh();
        });
    }, 0x3e8);
};
l[_0x3f63('0x4a')][_0x3f63('0x2a')] = function (_0x4ba3d2, _0x2a0c41) {
    var _0x5c5c02 = {
        rhhcw: _0x3f63('0x54'),
        AIwYB: function (_0x392b01, _0x4bb7c6) {
            return _0x392b01 === _0x4bb7c6;
        },
        uXGDE: _0x3f63('0x13')
    };
    console.log(_0x5c5c02.rhhcw, this.activeTabName), _0x5c5c02.AIwYB(this.activeTabName, _0x5c5c02.uXGDE) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0xf7f9fc(l, n, d, !0x1, c, null, null, null);
function c(_0x3a6191) {
    for (let _0x52b557 in o)
        this[_0x52b557] = o[_0x52b557];
}
const m = function () {
    return s[_0x3f63('0x55')];
}();
export {
    m as default
};