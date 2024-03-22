
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x24c2 = [
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
    'JMIPQ',
    'nOWXT',
    'div',
    'JYGGY',
    'SjLlM',
    'el-tabs',
    'UXixE',
    'card',
    'dUxiY',
    'activeTabName',
    'pIhbh',
    'YghfK',
    'el-tab-pane',
    'MXMjR',
    '基本信息',
    'MGwre',
    'base',
    'UBlei',
    '关系图谱（点这里）',
    'xiFfv',
    'relation',
    'inbhO',
    'QNwTH',
    'loading',
    'XtJHl',
    'v-loading',
    'JYyrl',
    'g_loading',
    'QJocB',
    'calc(100%)',
    'UULaA',
    'calc(100vh\x20-\x20300px)',
    'CAPrF',
    'Eymia',
    'RelationGraph',
    'lHmYE',
    'graphRef',
    'lIkni',
    'LQRRn',
    '风险信息',
    'qlnqz',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'FKzMl',
    'FTiLl',
    'xuVzr',
    '20px',
    'NLmRW',
    '#666666',
    'JOAKd',
    '600px',
    'UGGUC',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'jlOCw',
    'hhpgR',
    '\x20比如点击按钮A时显示图谱，你需要在点击按钮A显示图谱之后，通过this.$nextTick()调用图谱的refresh()方法来刷新一下，这样就显示正常了，请参考当前demo的代码。\x20',
    'name',
    'RelationGraphDemo',
    'components',
    'data',
    '---',
    'tree',
    'seeks-layout-center',
    'border'
];
(function (_0x4166bb, _0x3bcfc6) {
    var _0x33a460 = function (_0x5dc88b) {
        while (--_0x5dc88b) {
            _0x4166bb['push'](_0x4166bb['shift']());
        }
    };
    _0x33a460(++_0x3bcfc6);
}(_0x24c2, 0xc2));
var _0x2158 = function (_0x2590ae, _0x6d1a73) {
    _0x2590ae = _0x2590ae - 0x0;
    var _0x52eac6 = _0x24c2[_0x2590ae];
    return _0x52eac6;
};
import { n as _0x515f01 } from './index-95e0ef84.js';
var n = function () {
        var _0x1f5e5b = {};
        _0x1f5e5b[_0x2158('0x0')] = function (_0x233819, _0x22e737, _0x2fea54, _0x405ab3) {
            return _0x233819(_0x22e737, _0x2fea54, _0x405ab3);
        };
        _0x1f5e5b[_0x2158('0x1')] = _0x2158('0x2');
        _0x1f5e5b[_0x2158('0x3')] = function (_0x52b1d3, _0x589751, _0x307d38, _0x10fd28, _0x32fbab) {
            return _0x52b1d3(_0x589751, _0x307d38, _0x10fd28, _0x32fbab);
        };
        _0x1f5e5b[_0x2158('0x4')] = _0x2158('0x5');
        _0x1f5e5b[_0x2158('0x6')] = _0x2158('0x7');
        _0x1f5e5b[_0x2158('0x8')] = _0x2158('0x9');
        _0x1f5e5b[_0x2158('0xa')] = function (_0x610819, _0x1e4383, _0x3d6502, _0x277b80) {
            return _0x610819(_0x1e4383, _0x3d6502, _0x277b80);
        };
        _0x1f5e5b[_0x2158('0xb')] = _0x2158('0xc');
        _0x1f5e5b[_0x2158('0xd')] = _0x2158('0xe');
        _0x1f5e5b[_0x2158('0xf')] = _0x2158('0x10');
        _0x1f5e5b[_0x2158('0x11')] = _0x2158('0x12');
        _0x1f5e5b[_0x2158('0x13')] = _0x2158('0x14');
        _0x1f5e5b[_0x2158('0x15')] = function (_0x3a81fc, _0x282401, _0x5c2866, _0x3a3ada, _0x484978) {
            return _0x3a81fc(_0x282401, _0x5c2866, _0x3a3ada, _0x484978);
        };
        _0x1f5e5b[_0x2158('0x16')] = _0x2158('0x17');
        _0x1f5e5b[_0x2158('0x18')] = _0x2158('0x19');
        _0x1f5e5b[_0x2158('0x1a')] = _0x2158('0x1b');
        _0x1f5e5b[_0x2158('0x1c')] = _0x2158('0x1d');
        _0x1f5e5b[_0x2158('0x1e')] = _0x2158('0x1f');
        _0x1f5e5b[_0x2158('0x20')] = function (_0x16adad, _0x5a40c2, _0x59a3f8) {
            return _0x16adad(_0x5a40c2, _0x59a3f8);
        };
        _0x1f5e5b[_0x2158('0x21')] = _0x2158('0x22');
        _0x1f5e5b[_0x2158('0x23')] = _0x2158('0x24');
        _0x1f5e5b[_0x2158('0x25')] = function (_0x29ef54, _0x514249, _0x5e38c7, _0x52ddb7) {
            return _0x29ef54(_0x514249, _0x5e38c7, _0x52ddb7);
        };
        _0x1f5e5b[_0x2158('0x26')] = _0x2158('0x27');
        _0x1f5e5b[_0x2158('0x28')] = _0x2158('0x29');
        var _0x3698a3 = this, _0x1e6ddb = _0x3698a3[_0x2158('0x2a')], _0x5308fd = _0x3698a3[_0x2158('0x2b')]['_c'] || _0x1e6ddb;
        return _0x1f5e5b[_0x2158('0x0')](_0x5308fd, _0x1f5e5b[_0x2158('0x1')], [
            _0x3698a3['_m'](0x0),
            _0x1f5e5b[_0x2158('0x3')](_0x5308fd, _0x1f5e5b[_0x2158('0x4')], {
                'attrs': { 'type': _0x1f5e5b[_0x2158('0x6')] },
                'on': { 'tab-click': _0x3698a3[_0x2158('0x2c')] },
                'model': {
                    'value': _0x3698a3[_0x2158('0x9')],
                    'callback': function (_0x449cb4) {
                        _0x3698a3[_0x2158('0x9')] = _0x449cb4;
                    },
                    'expression': _0x1f5e5b[_0x2158('0x8')]
                }
            }, [
                _0x1f5e5b[_0x2158('0xa')](_0x5308fd, _0x1f5e5b[_0x2158('0xb')], {
                    'attrs': {
                        'label': _0x1f5e5b[_0x2158('0xd')],
                        'name': _0x1f5e5b[_0x2158('0xf')]
                    }
                }, [_0x3698a3['_v'](_0x1f5e5b[_0x2158('0xd')])]),
                _0x1f5e5b[_0x2158('0xa')](_0x5308fd, _0x1f5e5b[_0x2158('0xb')], {
                    'attrs': {
                        'label': _0x1f5e5b[_0x2158('0x11')],
                        'name': _0x1f5e5b[_0x2158('0x13')]
                    }
                }, [_0x1f5e5b[_0x2158('0x15')](_0x5308fd, _0x1f5e5b[_0x2158('0x1')], {
                        'directives': [{
                                'name': _0x1f5e5b[_0x2158('0x16')],
                                'rawName': _0x1f5e5b[_0x2158('0x18')],
                                'value': _0x3698a3[_0x2158('0x1b')],
                                'expression': _0x1f5e5b[_0x2158('0x1a')]
                            }],
                        'staticStyle': {
                            'width': _0x1f5e5b[_0x2158('0x1c')],
                            'height': _0x1f5e5b[_0x2158('0x1e')]
                        }
                    }, [_0x1f5e5b[_0x2158('0x20')](_0x5308fd, _0x1f5e5b[_0x2158('0x21')], {
                            'ref': _0x1f5e5b[_0x2158('0x23')],
                            'attrs': { 'options': _0x3698a3[_0x2158('0x2d')] }
                        })], 0x1)]),
                _0x1f5e5b[_0x2158('0x25')](_0x5308fd, _0x1f5e5b[_0x2158('0xb')], {
                    'attrs': {
                        'label': _0x1f5e5b[_0x2158('0x26')],
                        'name': _0x1f5e5b[_0x2158('0x28')]
                    }
                }, [_0x3698a3['_v'](_0x1f5e5b[_0x2158('0x26')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x28986d = {};
            _0x28986d[_0x2158('0x2e')] = function (_0x28860f, _0x1bff0a, _0xfc577b, _0x615c) {
                return _0x28860f(_0x1bff0a, _0xfc577b, _0x615c);
            };
            _0x28986d[_0x2158('0x2f')] = _0x2158('0x2');
            _0x28986d[_0x2158('0x30')] = _0x2158('0x31');
            _0x28986d[_0x2158('0x32')] = _0x2158('0x33');
            _0x28986d[_0x2158('0x34')] = _0x2158('0x35');
            _0x28986d[_0x2158('0x36')] = _0x2158('0x37');
            _0x28986d[_0x2158('0x38')] = function (_0x5c34b7, _0x266fb1, _0x125dc5) {
                return _0x5c34b7(_0x266fb1, _0x125dc5);
            };
            _0x28986d[_0x2158('0x39')] = _0x2158('0x3a');
            var _0x4b89ec = this, _0x124024 = _0x4b89ec[_0x2158('0x2a')], _0x261b6f = _0x4b89ec[_0x2158('0x2b')]['_c'] || _0x124024;
            return _0x28986d[_0x2158('0x2e')](_0x261b6f, _0x28986d[_0x2158('0x2f')], {
                'staticStyle': {
                    'padding': _0x28986d[_0x2158('0x30')],
                    'color': _0x28986d[_0x2158('0x32')],
                    'width': _0x28986d[_0x2158('0x34')]
                }
            }, [
                _0x4b89ec['_v'](_0x28986d[_0x2158('0x36')]),
                _0x28986d[_0x2158('0x38')](_0x261b6f, _0x28986d[_0x2158('0x2f')], [_0x4b89ec['_v'](_0x28986d[_0x2158('0x39')])])
            ]);
        }];
const l = {}, o = {};
l[_0x2158('0x3b')] = _0x2158('0x3c');
l[_0x2158('0x3d')] = {};
l[_0x2158('0x3e')] = function () {
    var _0x31ce6e = {
        YvSiE: _0x2158('0x10'),
        gvGQW: _0x2158('0x3f'),
        SZmlr: _0x2158('0x40'),
        YauvY: _0x2158('0x41'),
        peaEq: _0x2158('0x42'),
        nmPiG: _0x2158('0x43'),
        HFwJz: _0x2158('0x44'),
        qPBYo: _0x2158('0x45'),
        JSTeR: _0x2158('0x46'),
        McLex: _0x2158('0x47'),
        Dnnxr: _0x2158('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x31ce6e.YvSiE,
        demoname: _0x31ce6e.gvGQW,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x31ce6e.SZmlr,
                    layoutClassName: _0x31ce6e.YauvY,
                    defaultJunctionPoint: _0x31ce6e.peaEq,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x31ce6e.nmPiG,
                    max_per_width: _0x31ce6e.HFwJz,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x31ce6e.qPBYo
            },
            defaultExpandHolderPosition: _0x31ce6e.JSTeR,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x31ce6e.McLex,
            defaultNodeColor: _0x31ce6e.Dnnxr
        }
    };
};
l[_0x2158('0x49')] = function () {
};
l[_0x2158('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x2158('0x4b')] = {};
l[_0x2158('0x4b')][_0x2158('0x4c')] = function () {
    var _0x5e20ac = {
        xOyPL: _0x2158('0x4d'),
        ZVAmL: _0x2158('0x4e'),
        VDSxR: _0x2158('0x4f'),
        NiJhD: _0x2158('0x50'),
        xPXMZ: _0x2158('0x51'),
        extrw: _0x2158('0x52'),
        YVwKT: _0x2158('0x53'),
        QQshT: _0x2158('0x54'),
        aQahQ: function (_0x5dc8b7, _0x2a084b, _0x31354e) {
            return _0x5dc8b7(_0x2a084b, _0x31354e);
        }
    };
    const _0x4e477b = {
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
                id: _0x5e20ac.xOyPL,
                text: _0x5e20ac.xOyPL
            },
            {
                id: _0x5e20ac.ZVAmL,
                text: _0x5e20ac.ZVAmL
            },
            {
                id: _0x5e20ac.VDSxR,
                text: _0x5e20ac.VDSxR
            },
            {
                id: _0x5e20ac.NiJhD,
                text: _0x5e20ac.NiJhD
            },
            {
                id: _0x5e20ac.xPXMZ,
                text: _0x5e20ac.xPXMZ
            },
            {
                id: _0x5e20ac.extrw,
                text: _0x5e20ac.extrw
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x5e20ac.YVwKT,
                text: _0x5e20ac.YVwKT
            },
            {
                id: _0x5e20ac.QQshT,
                text: _0x5e20ac.QQshT
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
                to: _0x5e20ac.xOyPL
            },
            {
                from: 'b1',
                to: _0x5e20ac.ZVAmL
            },
            {
                from: 'b1',
                to: _0x5e20ac.VDSxR
            },
            {
                from: 'b1',
                to: _0x5e20ac.NiJhD
            },
            {
                from: 'b1',
                to: _0x5e20ac.xPXMZ
            },
            {
                from: 'b1',
                to: _0x5e20ac.extrw
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x5e20ac.YVwKT
            },
            {
                from: 'b2',
                to: _0x5e20ac.QQshT
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
    console.log(JSON.stringify(_0x4e477b)), _0x5e20ac.aQahQ(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x4e477b, _0x489f77 => {
            _0x489f77.refresh();
        });
    }, 0x3e8);
};
l[_0x2158('0x4b')][_0x2158('0x2c')] = function (_0x298239, _0xf682ec) {
    var _0x227f7c = {
        Xoekd: _0x2158('0x55'),
        twChM: function (_0x1e247f, _0x1dd175) {
            return _0x1e247f === _0x1dd175;
        },
        EuVZx: _0x2158('0x14')
    };
    console.log(_0x227f7c.Xoekd, this.activeTabName), _0x227f7c.twChM(this.activeTabName, _0x227f7c.EuVZx) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x515f01(l, n, d, !0x1, c, null, null, null);
function c(_0x3c081d) {
    for (let _0x5caba2 in o)
        this[_0x5caba2] = o[_0x5caba2];
}
const m = function () {
    return s[_0x2158('0x56')];
}();
export {
    m as default
};