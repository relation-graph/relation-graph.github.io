
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x39f1 = [
    'graphOptions2',
    'name',
    'Demo',
    'components',
    'data',
    '纵向树状图谱',
    'mounted',
    'methods',
    'show',
    'graph1',
    'graph2',
    'resetGraph',
    'tree',
    'left',
    '300',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'top',
    '#ff0000',
    '根节点a',
    'R-b',
    'R-c',
    'R-c-1',
    'R-c-2',
    'R-d',
    'bottom',
    'showSeeksGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'BFWIK',
    'FUgZU',
    'div',
    'cjXRD',
    'el-row',
    'otNpO',
    'rQUzk',
    'el-col',
    'QHatc',
    'MDrRt',
    'calc(100vh\x20-\x20100px)',
    'uAPwj',
    'kJrcT',
    'RelationGraph',
    'XdQWU',
    'graphRef1',
    'GSbId',
    '#efefef\x20solid\x201px',
    'veZCy',
    '15px',
    'DIxlm',
    '12px',
    'tEysO',
    '\x20原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'OzxLt',
    'BEdiz',
    '\x20如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'rueRb',
    '\x20showStartArrow=true',
    'yelXm',
    'VQDsP',
    '\x20showEndArrow=false',
    'PmBQW',
    'QdyNL',
    '\x20以此来让上方线条看起来是反向展示。',
    'cUTrp',
    'kJvnn',
    '\x20最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据需求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。\x20',
    'RBXPA',
    'IQIoo',
    'itBFL',
    'graphRef2',
    '$createElement',
    '_self',
    'graphOptions1',
    'onNodeClick',
    'onLineClick'
];
(function (_0x473261, _0x4fea53) {
    var _0x48ba47 = function (_0x6fe5f2) {
        while (--_0x6fe5f2) {
            _0x473261['push'](_0x473261['shift']());
        }
    };
    _0x48ba47(++_0x4fea53);
}(_0x39f1, 0xb8));
var _0x394e = function (_0x4dc7e7, _0x440980) {
    _0x4dc7e7 = _0x4dc7e7 - 0x0;
    var _0x35105c = _0x39f1[_0x4dc7e7];
    return _0x35105c;
};
import { n as _0x15da85 } from './index-c396e703.js';
var c = function () {
        var _0x4bb608 = {};
        _0x4bb608[_0x394e('0x0')] = function (_0x4dcde5, _0x1265dc, _0x4384a3, _0x48d41a) {
            return _0x4dcde5(_0x1265dc, _0x4384a3, _0x48d41a);
        };
        _0x4bb608[_0x394e('0x1')] = _0x394e('0x2');
        _0x4bb608[_0x394e('0x3')] = _0x394e('0x4');
        _0x4bb608[_0x394e('0x5')] = function (_0x3f594c, _0x28521c, _0x2867fc, _0x2bce0f) {
            return _0x3f594c(_0x28521c, _0x2867fc, _0x2bce0f);
        };
        _0x4bb608[_0x394e('0x6')] = _0x394e('0x7');
        _0x4bb608[_0x394e('0x8')] = function (_0x26bfac, _0x42b67e, _0x2e5fae, _0x1d943c, _0x2da3b7) {
            return _0x26bfac(_0x42b67e, _0x2e5fae, _0x1d943c, _0x2da3b7);
        };
        _0x4bb608[_0x394e('0x9')] = _0x394e('0xa');
        _0x4bb608[_0x394e('0xb')] = function (_0x25e5a6, _0x3dbd3f, _0x1caf95) {
            return _0x25e5a6(_0x3dbd3f, _0x1caf95);
        };
        _0x4bb608[_0x394e('0xc')] = _0x394e('0xd');
        _0x4bb608[_0x394e('0xe')] = _0x394e('0xf');
        _0x4bb608[_0x394e('0x10')] = _0x394e('0x11');
        _0x4bb608[_0x394e('0x12')] = _0x394e('0x13');
        _0x4bb608[_0x394e('0x14')] = _0x394e('0x15');
        _0x4bb608[_0x394e('0x16')] = _0x394e('0x17');
        _0x4bb608[_0x394e('0x18')] = function (_0x52909d, _0x1c1207) {
            return _0x52909d(_0x1c1207);
        };
        _0x4bb608[_0x394e('0x19')] = _0x394e('0x1a');
        _0x4bb608[_0x394e('0x1b')] = _0x394e('0x1c');
        _0x4bb608[_0x394e('0x1d')] = function (_0x8a4960, _0x482e0c) {
            return _0x8a4960(_0x482e0c);
        };
        _0x4bb608[_0x394e('0x1e')] = _0x394e('0x1f');
        _0x4bb608[_0x394e('0x20')] = function (_0x36924f, _0x5e9306) {
            return _0x36924f(_0x5e9306);
        };
        _0x4bb608[_0x394e('0x21')] = _0x394e('0x22');
        _0x4bb608[_0x394e('0x23')] = function (_0x5e8ee7, _0x8a2f41) {
            return _0x5e8ee7(_0x8a2f41);
        };
        _0x4bb608[_0x394e('0x24')] = _0x394e('0x25');
        _0x4bb608[_0x394e('0x26')] = function (_0x3cf572, _0x58195c, _0x4159b2, _0x29ddbd, _0xed9e87) {
            return _0x3cf572(_0x58195c, _0x4159b2, _0x29ddbd, _0xed9e87);
        };
        _0x4bb608[_0x394e('0x27')] = function (_0x3f7dff, _0x1ad0b7, _0x305780) {
            return _0x3f7dff(_0x1ad0b7, _0x305780);
        };
        _0x4bb608[_0x394e('0x28')] = _0x394e('0x29');
        var _0x2acb51 = this, _0x2ca4e0 = _0x2acb51[_0x394e('0x2a')], _0x32ed81 = _0x2acb51[_0x394e('0x2b')]['_c'] || _0x2ca4e0;
        return _0x4bb608[_0x394e('0x0')](_0x32ed81, _0x4bb608[_0x394e('0x1')], [_0x4bb608[_0x394e('0x0')](_0x32ed81, _0x4bb608[_0x394e('0x3')], [
                _0x4bb608[_0x394e('0x5')](_0x32ed81, _0x4bb608[_0x394e('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x4bb608[_0x394e('0x8')](_0x32ed81, _0x4bb608[_0x394e('0x1')], { 'staticStyle': { 'height': _0x4bb608[_0x394e('0x9')] } }, [_0x4bb608[_0x394e('0xb')](_0x32ed81, _0x4bb608[_0x394e('0xc')], {
                            'ref': _0x4bb608[_0x394e('0xe')],
                            'attrs': {
                                'options': _0x2acb51[_0x394e('0x2c')],
                                'on-node-click': _0x2acb51[_0x394e('0x2d')],
                                'on-line-click': _0x2acb51[_0x394e('0x2e')]
                            }
                        })], 0x1)]),
                _0x4bb608[_0x394e('0x5')](_0x32ed81, _0x4bb608[_0x394e('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x4bb608[_0x394e('0x5')](_0x32ed81, _0x4bb608[_0x394e('0x1')], {
                        'staticStyle': {
                            'height': _0x4bb608[_0x394e('0x9')],
                            'border-left': _0x4bb608[_0x394e('0x10')],
                            'border-right': _0x4bb608[_0x394e('0x10')],
                            'padding': _0x4bb608[_0x394e('0x12')],
                            'font-size': _0x4bb608[_0x394e('0x14')]
                        }
                    }, [
                        _0x2acb51['_v'](_0x4bb608[_0x394e('0x16')]),
                        _0x4bb608[_0x394e('0x18')](_0x32ed81, 'br'),
                        _0x2acb51['_v'](_0x4bb608[_0x394e('0x19')]),
                        _0x4bb608[_0x394e('0x18')](_0x32ed81, 'br'),
                        _0x2acb51['_v'](_0x4bb608[_0x394e('0x1b')]),
                        _0x4bb608[_0x394e('0x1d')](_0x32ed81, 'br'),
                        _0x2acb51['_v'](_0x4bb608[_0x394e('0x1e')]),
                        _0x4bb608[_0x394e('0x20')](_0x32ed81, 'br'),
                        _0x2acb51['_v'](_0x4bb608[_0x394e('0x21')]),
                        _0x4bb608[_0x394e('0x23')](_0x32ed81, 'br'),
                        _0x2acb51['_v'](_0x4bb608[_0x394e('0x24')])
                    ])]),
                _0x4bb608[_0x394e('0x5')](_0x32ed81, _0x4bb608[_0x394e('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x4bb608[_0x394e('0x26')](_0x32ed81, _0x4bb608[_0x394e('0x1')], { 'staticStyle': { 'height': _0x4bb608[_0x394e('0x9')] } }, [_0x4bb608[_0x394e('0x27')](_0x32ed81, _0x4bb608[_0x394e('0xc')], {
                            'ref': _0x4bb608[_0x394e('0x28')],
                            'attrs': {
                                'options': _0x2acb51[_0x394e('0x2f')],
                                'on-node-click': _0x2acb51[_0x394e('0x2d')],
                                'on-line-click': _0x2acb51[_0x394e('0x2e')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, i = {};
h[_0x394e('0x30')] = _0x394e('0x31');
h[_0x394e('0x32')] = {};
h[_0x394e('0x33')] = function () {
    var _0x434741 = { NbCWv: _0x394e('0x34') };
    return {
        currentCase: _0x434741.NbCWv,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x394e('0x35')] = function () {
    this.show();
};
h[_0x394e('0x36')] = {};
h[_0x394e('0x36')][_0x394e('0x37')] = function (_0x1cded3) {
    var _0x6a5dc2 = {
        frILC: _0x394e('0x38'),
        EUMHl: _0x394e('0x39')
    };
    const _0x24e9ab = this.$refs.graphRef1;
    this.resetGraph(_0x24e9ab, _0x6a5dc2.frILC);
    const _0x45e549 = this.$refs.graphRef2;
    this.resetGraph(_0x45e549, _0x6a5dc2.EUMHl);
};
h[_0x394e('0x36')][_0x394e('0x3a')] = function (_0x4320e2, _0x54ab5d) {
    var _0x32f342 = {
        DnmBC: _0x394e('0x3b'),
        ubAYd: _0x394e('0x3c'),
        vPKBJ: _0x394e('0x3d'),
        UHOFa: _0x394e('0x3e'),
        hOamD: _0x394e('0x3f'),
        oQtQi: _0x394e('0x40'),
        QOJPF: function (_0x554fd2, _0x2205ff) {
            return _0x554fd2 === _0x2205ff;
        },
        pfPVW: _0x394e('0x39'),
        UUOjK: _0x394e('0x41'),
        vkwWp: _0x394e('0x42'),
        zcXuI: _0x394e('0x43'),
        NuDOj: _0x394e('0x44'),
        eDZRw: _0x394e('0x45'),
        sIToX: _0x394e('0x46'),
        hXubL: _0x394e('0x47'),
        UrUBF: _0x394e('0x48')
    };
    const _0x310b89 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x32f342.DnmBC,
                from: _0x32f342.ubAYd,
                max_per_width: _0x32f342.vPKBJ,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x32f342.UHOFa,
        defaultNodeColor: _0x32f342.hOamD
    };
    _0x310b89.layouts[0x0].from = _0x32f342.oQtQi, _0x310b89.layouts[0x0].min_per_width = 0x46, _0x310b89.layouts[0x0].max_per_width = 0xc8, _0x310b89.layouts[0x0].min_per_height = 0xc8, _0x310b89.layouts[0x0].max_per_height = 0x190, _0x310b89.defaultNodeWidth = 0x1e, _0x310b89.defaultNodeHeight = 0x64, _0x310b89.defaultJunctionPoint = 'tb';
    let _0x5b4669, _0x56738c, _0x55df11;
    _0x32f342.QOJPF(_0x54ab5d, _0x32f342.pfPVW) && (_0x5b4669 = !0x0, _0x56738c = !0x1, _0x55df11 = _0x32f342.UUOjK);
    const _0x2f70e4 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x32f342.vkwWp
            },
            {
                id: _0x32f342.zcXuI,
                text: _0x32f342.zcXuI
            },
            {
                id: _0x32f342.NuDOj,
                text: _0x32f342.NuDOj,
                expandHolderPosition: _0x32f342.oQtQi
            },
            {
                id: _0x32f342.eDZRw,
                text: _0x32f342.eDZRw
            },
            {
                id: _0x32f342.sIToX,
                text: _0x32f342.sIToX
            },
            {
                id: _0x32f342.hXubL,
                text: _0x32f342.hXubL
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x32f342.UrUBF
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
            },
            {
                id: 'd',
                text: 'd'
            },
            {
                id: 'e',
                text: 'e'
            }
        ],
        lines: [
            {
                from: _0x32f342.zcXuI,
                to: 'a',
                showStartArrow: _0x5b4669,
                showEndArrow: _0x56738c,
                color: _0x55df11
            },
            {
                from: _0x32f342.NuDOj,
                to: 'a',
                showStartArrow: _0x5b4669,
                showEndArrow: _0x56738c,
                color: _0x55df11
            },
            {
                from: _0x32f342.eDZRw,
                to: _0x32f342.NuDOj,
                showStartArrow: _0x5b4669,
                showEndArrow: _0x56738c,
                color: _0x55df11
            },
            {
                from: _0x32f342.sIToX,
                to: _0x32f342.NuDOj,
                showStartArrow: _0x5b4669,
                showEndArrow: _0x56738c,
                color: _0x55df11
            },
            {
                from: _0x32f342.hXubL,
                to: 'a',
                showStartArrow: _0x5b4669,
                showEndArrow: _0x56738c,
                color: _0x55df11
            },
            {
                from: 'a',
                to: 'b'
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
            },
            {
                from: 'a',
                to: 'd'
            },
            {
                from: 'a',
                to: 'e'
            }
        ]
    };
    _0x4320e2.setOptions(_0x310b89, _0x1b1656 => {
        this.showSeeksGraph(_0x4320e2, _0x2f70e4);
    });
};
h[_0x394e('0x36')][_0x394e('0x49')] = function (_0x41528e, _0x41dddb) {
    _0x41528e.setJsonData(_0x41dddb, _0x55b991 => {
        _0x55b991.focusNodeById('a');
    });
};
h[_0x394e('0x36')][_0x394e('0x2d')] = function (_0x481b72, _0x2779e4) {
    var _0x3bac33 = { OlORm: _0x394e('0x4a') };
    console.log(_0x3bac33.OlORm, _0x481b72);
};
h[_0x394e('0x36')][_0x394e('0x2e')] = function (_0x41f24f, _0x4c5cf1, _0x38f94c) {
    var _0x2f67b5 = { EtLFw: _0x394e('0x4b') };
    console.log(_0x2f67b5.EtLFw, _0x41f24f);
};
var p = _0x15da85(h, c, d, !0x1, f, null, null, null);
function f(_0x17e7cb) {
    for (let _0x4a94ea in i)
        this[_0x4a94ea] = i[_0x4a94ea];
}
const u = function () {
    return p[_0x394e('0x4c')];
}();
export {
    u as default
};