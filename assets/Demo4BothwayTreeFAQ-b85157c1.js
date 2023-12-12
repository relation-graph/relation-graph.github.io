
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x23b9 = [
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
    'ydqbR',
    'tRahr',
    'div',
    'WQecH',
    'DBapp',
    'el-row',
    'EKTPs',
    'el-col',
    'MclqU',
    'nPrPN',
    'calc(100vh\x20-\x20100px)',
    'ZDjtv',
    'cAbOE',
    'RelationGraph',
    'mwOOX',
    'graphRef1',
    'bcENU',
    '#efefef\x20solid\x201px',
    'uYMfh',
    '15px',
    'BXYYD',
    '12px',
    'sZkWd',
    '\x20原本数据中的关系都是从上到下的。只有这样双向树才能从根节点向上、向下同时展开。',
    'SiPFB',
    'qzCst',
    '\x20如果想要展示成根节点上方的箭头朝上，下方的根节点箭头朝下，你可以设置上方的所有线条属性：',
    'PPaZx',
    '\x20showStartArrow=true',
    'fGYNc',
    'oQBiz',
    '\x20showEndArrow=false',
    'zFUVq',
    'nHxwq',
    '\x20以此来让上方线条看起来是反向展示。',
    'jAtmk',
    'NDlbD',
    '\x20最终，你可以实现通过from,to来设置关系从上到下，来满足双向树的数据需求。但又通过showStartArrow=true;showEndArrow=false让上方的箭头朝上展示。\x20',
    'bMIIK',
    'WaMnz',
    'graphRef2',
    '$createElement',
    '_self',
    'graphOptions1',
    'onNodeClick',
    'onLineClick',
    'graphOptions2',
    'name',
    'Demo',
    'components',
    'data',
    '纵向树状图谱',
    'mounted',
    'methods'
];
(function (_0x17bf30, _0x4bc8bd) {
    var _0x3fb3a5 = function (_0x7f252c) {
        while (--_0x7f252c) {
            _0x17bf30['push'](_0x17bf30['shift']());
        }
    };
    _0x3fb3a5(++_0x4bc8bd);
}(_0x23b9, 0x192));
var _0x3b5a = function (_0x2ae96a, _0x5e23f2) {
    _0x2ae96a = _0x2ae96a - 0x0;
    var _0x3c8122 = _0x23b9[_0x2ae96a];
    return _0x3c8122;
};
import { n as _0x21708c } from './index-35e4fca6.js';
var c = function () {
        var _0x2d09fd = {};
        _0x2d09fd[_0x3b5a('0x0')] = function (_0x569de0, _0x511b54, _0x2264d2, _0x460fca) {
            return _0x569de0(_0x511b54, _0x2264d2, _0x460fca);
        };
        _0x2d09fd[_0x3b5a('0x1')] = _0x3b5a('0x2');
        _0x2d09fd[_0x3b5a('0x3')] = function (_0x3eff9c, _0x157a9c, _0x324e5d, _0x4a9fcc) {
            return _0x3eff9c(_0x157a9c, _0x324e5d, _0x4a9fcc);
        };
        _0x2d09fd[_0x3b5a('0x4')] = _0x3b5a('0x5');
        _0x2d09fd[_0x3b5a('0x6')] = _0x3b5a('0x7');
        _0x2d09fd[_0x3b5a('0x8')] = function (_0x36194a, _0x4fe594, _0x23cf89, _0xdcc539, _0x43ba27) {
            return _0x36194a(_0x4fe594, _0x23cf89, _0xdcc539, _0x43ba27);
        };
        _0x2d09fd[_0x3b5a('0x9')] = _0x3b5a('0xa');
        _0x2d09fd[_0x3b5a('0xb')] = function (_0x56852d, _0x11305f, _0x464b4b) {
            return _0x56852d(_0x11305f, _0x464b4b);
        };
        _0x2d09fd[_0x3b5a('0xc')] = _0x3b5a('0xd');
        _0x2d09fd[_0x3b5a('0xe')] = _0x3b5a('0xf');
        _0x2d09fd[_0x3b5a('0x10')] = _0x3b5a('0x11');
        _0x2d09fd[_0x3b5a('0x12')] = _0x3b5a('0x13');
        _0x2d09fd[_0x3b5a('0x14')] = _0x3b5a('0x15');
        _0x2d09fd[_0x3b5a('0x16')] = _0x3b5a('0x17');
        _0x2d09fd[_0x3b5a('0x18')] = function (_0x519622, _0x13dbba) {
            return _0x519622(_0x13dbba);
        };
        _0x2d09fd[_0x3b5a('0x19')] = _0x3b5a('0x1a');
        _0x2d09fd[_0x3b5a('0x1b')] = _0x3b5a('0x1c');
        _0x2d09fd[_0x3b5a('0x1d')] = function (_0x55a7d0, _0x339d45) {
            return _0x55a7d0(_0x339d45);
        };
        _0x2d09fd[_0x3b5a('0x1e')] = _0x3b5a('0x1f');
        _0x2d09fd[_0x3b5a('0x20')] = function (_0x16718e, _0x4e4878) {
            return _0x16718e(_0x4e4878);
        };
        _0x2d09fd[_0x3b5a('0x21')] = _0x3b5a('0x22');
        _0x2d09fd[_0x3b5a('0x23')] = function (_0x2cbeec, _0x107153) {
            return _0x2cbeec(_0x107153);
        };
        _0x2d09fd[_0x3b5a('0x24')] = _0x3b5a('0x25');
        _0x2d09fd[_0x3b5a('0x26')] = function (_0x16154d, _0x5c4503, _0x4a9a9a) {
            return _0x16154d(_0x5c4503, _0x4a9a9a);
        };
        _0x2d09fd[_0x3b5a('0x27')] = _0x3b5a('0x28');
        var _0x4afe02 = this, _0x1642fc = _0x4afe02[_0x3b5a('0x29')], _0x23a436 = _0x4afe02[_0x3b5a('0x2a')]['_c'] || _0x1642fc;
        return _0x2d09fd[_0x3b5a('0x0')](_0x23a436, _0x2d09fd[_0x3b5a('0x1')], [_0x2d09fd[_0x3b5a('0x3')](_0x23a436, _0x2d09fd[_0x3b5a('0x4')], [
                _0x2d09fd[_0x3b5a('0x3')](_0x23a436, _0x2d09fd[_0x3b5a('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x2d09fd[_0x3b5a('0x8')](_0x23a436, _0x2d09fd[_0x3b5a('0x1')], { 'staticStyle': { 'height': _0x2d09fd[_0x3b5a('0x9')] } }, [_0x2d09fd[_0x3b5a('0xb')](_0x23a436, _0x2d09fd[_0x3b5a('0xc')], {
                            'ref': _0x2d09fd[_0x3b5a('0xe')],
                            'attrs': {
                                'options': _0x4afe02[_0x3b5a('0x2b')],
                                'on-node-click': _0x4afe02[_0x3b5a('0x2c')],
                                'on-line-click': _0x4afe02[_0x3b5a('0x2d')]
                            }
                        })], 0x1)]),
                _0x2d09fd[_0x3b5a('0x3')](_0x23a436, _0x2d09fd[_0x3b5a('0x6')], { 'attrs': { 'span': 0x6 } }, [_0x2d09fd[_0x3b5a('0x3')](_0x23a436, _0x2d09fd[_0x3b5a('0x1')], {
                        'staticStyle': {
                            'height': _0x2d09fd[_0x3b5a('0x9')],
                            'border-left': _0x2d09fd[_0x3b5a('0x10')],
                            'border-right': _0x2d09fd[_0x3b5a('0x10')],
                            'padding': _0x2d09fd[_0x3b5a('0x12')],
                            'font-size': _0x2d09fd[_0x3b5a('0x14')]
                        }
                    }, [
                        _0x4afe02['_v'](_0x2d09fd[_0x3b5a('0x16')]),
                        _0x2d09fd[_0x3b5a('0x18')](_0x23a436, 'br'),
                        _0x4afe02['_v'](_0x2d09fd[_0x3b5a('0x19')]),
                        _0x2d09fd[_0x3b5a('0x18')](_0x23a436, 'br'),
                        _0x4afe02['_v'](_0x2d09fd[_0x3b5a('0x1b')]),
                        _0x2d09fd[_0x3b5a('0x1d')](_0x23a436, 'br'),
                        _0x4afe02['_v'](_0x2d09fd[_0x3b5a('0x1e')]),
                        _0x2d09fd[_0x3b5a('0x20')](_0x23a436, 'br'),
                        _0x4afe02['_v'](_0x2d09fd[_0x3b5a('0x21')]),
                        _0x2d09fd[_0x3b5a('0x23')](_0x23a436, 'br'),
                        _0x4afe02['_v'](_0x2d09fd[_0x3b5a('0x24')])
                    ])]),
                _0x2d09fd[_0x3b5a('0x3')](_0x23a436, _0x2d09fd[_0x3b5a('0x6')], { 'attrs': { 'span': 0x9 } }, [_0x2d09fd[_0x3b5a('0x8')](_0x23a436, _0x2d09fd[_0x3b5a('0x1')], { 'staticStyle': { 'height': _0x2d09fd[_0x3b5a('0x9')] } }, [_0x2d09fd[_0x3b5a('0x26')](_0x23a436, _0x2d09fd[_0x3b5a('0xc')], {
                            'ref': _0x2d09fd[_0x3b5a('0x27')],
                            'attrs': {
                                'options': _0x4afe02[_0x3b5a('0x2e')],
                                'on-node-click': _0x4afe02[_0x3b5a('0x2c')],
                                'on-line-click': _0x4afe02[_0x3b5a('0x2d')]
                            }
                        })], 0x1)])
            ], 0x1)], 0x1);
    }, d = [];
const h = {}, i = {};
h[_0x3b5a('0x2f')] = _0x3b5a('0x30');
h[_0x3b5a('0x31')] = {};
h[_0x3b5a('0x32')] = function () {
    var _0x24dfaf = { arHPc: _0x3b5a('0x33') };
    return {
        currentCase: _0x24dfaf.arHPc,
        isShowCodePanel: !0x1,
        graphOptions1: {},
        graphOptions2: {}
    };
};
h[_0x3b5a('0x34')] = function () {
    this.show();
};
h[_0x3b5a('0x35')] = {};
h[_0x3b5a('0x35')][_0x3b5a('0x36')] = function (_0x410eb7) {
    var _0xfa3780 = {
        snXAi: _0x3b5a('0x37'),
        GtKjy: _0x3b5a('0x38')
    };
    const _0x266b75 = this.$refs.graphRef1;
    this.resetGraph(_0x266b75, _0xfa3780.snXAi);
    const _0x41e00b = this.$refs.graphRef2;
    this.resetGraph(_0x41e00b, _0xfa3780.GtKjy);
};
h[_0x3b5a('0x35')][_0x3b5a('0x39')] = function (_0x315137, _0x11e7e4) {
    var _0x2b8043 = {
        SPfau: _0x3b5a('0x3a'),
        wmknb: _0x3b5a('0x3b'),
        mbJvI: _0x3b5a('0x3c'),
        SncDn: _0x3b5a('0x3d'),
        yEOGv: _0x3b5a('0x3e'),
        VxtUC: _0x3b5a('0x3f'),
        KouDM: function (_0x1eae73, _0x325f01) {
            return _0x1eae73 === _0x325f01;
        },
        zCwLG: _0x3b5a('0x38'),
        HZjRW: _0x3b5a('0x40'),
        DWPtd: _0x3b5a('0x41'),
        CixUi: _0x3b5a('0x42'),
        afAdb: _0x3b5a('0x43'),
        LspBv: _0x3b5a('0x44'),
        lSdwy: _0x3b5a('0x45'),
        NGbFC: _0x3b5a('0x46'),
        tGlKl: _0x3b5a('0x47')
    };
    const _0x4e2e43 = {
        debug: !0x1,
        layouts: [{
                layoutName: _0x2b8043.SPfau,
                from: _0x2b8043.wmknb,
                max_per_width: _0x2b8043.mbJvI,
                min_per_height: '40'
            }],
        allowShowMiniToolBar: !0x1,
        defaultNodeShape: 0x1,
        defaultLineShape: 0x4,
        defaultNodeBorderWidth: 0x0,
        defaultLineColor: _0x2b8043.SncDn,
        defaultNodeColor: _0x2b8043.yEOGv
    };
    _0x4e2e43.layouts[0x0].from = _0x2b8043.VxtUC, _0x4e2e43.layouts[0x0].min_per_width = 0x46, _0x4e2e43.layouts[0x0].max_per_width = 0xc8, _0x4e2e43.layouts[0x0].min_per_height = 0xc8, _0x4e2e43.layouts[0x0].max_per_height = 0x190, _0x4e2e43.defaultNodeWidth = 0x1e, _0x4e2e43.defaultNodeHeight = 0x64, _0x4e2e43.defaultJunctionPoint = 'tb';
    let _0x48bd21, _0x369e37, _0x59f791;
    _0x2b8043.KouDM(_0x11e7e4, _0x2b8043.zCwLG) && (_0x48bd21 = !0x0, _0x369e37 = !0x1, _0x59f791 = _0x2b8043.HZjRW);
    const _0x1e2192 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: _0x2b8043.DWPtd
            },
            {
                id: _0x2b8043.CixUi,
                text: _0x2b8043.CixUi
            },
            {
                id: _0x2b8043.afAdb,
                text: _0x2b8043.afAdb,
                expandHolderPosition: _0x2b8043.VxtUC
            },
            {
                id: _0x2b8043.LspBv,
                text: _0x2b8043.LspBv
            },
            {
                id: _0x2b8043.lSdwy,
                text: _0x2b8043.lSdwy
            },
            {
                id: _0x2b8043.NGbFC,
                text: _0x2b8043.NGbFC
            },
            {
                id: 'b',
                text: 'b'
            },
            {
                id: 'c',
                text: 'c',
                expandHolderPosition: _0x2b8043.tGlKl
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
                from: _0x2b8043.CixUi,
                to: 'a',
                showStartArrow: _0x48bd21,
                showEndArrow: _0x369e37,
                color: _0x59f791
            },
            {
                from: _0x2b8043.afAdb,
                to: 'a',
                showStartArrow: _0x48bd21,
                showEndArrow: _0x369e37,
                color: _0x59f791
            },
            {
                from: _0x2b8043.LspBv,
                to: _0x2b8043.afAdb,
                showStartArrow: _0x48bd21,
                showEndArrow: _0x369e37,
                color: _0x59f791
            },
            {
                from: _0x2b8043.lSdwy,
                to: _0x2b8043.afAdb,
                showStartArrow: _0x48bd21,
                showEndArrow: _0x369e37,
                color: _0x59f791
            },
            {
                from: _0x2b8043.NGbFC,
                to: 'a',
                showStartArrow: _0x48bd21,
                showEndArrow: _0x369e37,
                color: _0x59f791
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
    _0x315137.setOptions(_0x4e2e43, _0x1a93f1 => {
        this.showSeeksGraph(_0x315137, _0x1e2192);
    });
};
h[_0x3b5a('0x35')][_0x3b5a('0x48')] = function (_0x33a1be, _0x28b2c3) {
    _0x33a1be.setJsonData(_0x28b2c3, _0x421b0c => {
        _0x421b0c.focusNodeById('a');
    });
};
h[_0x3b5a('0x35')][_0x3b5a('0x2c')] = function (_0x28f07e, _0x14e95d) {
    var _0x302ceb = { tckta: _0x3b5a('0x49') };
    console.log(_0x302ceb.tckta, _0x28f07e);
};
h[_0x3b5a('0x35')][_0x3b5a('0x2d')] = function (_0x321fdf, _0x3b5e14, _0x3d048f) {
    var _0x5f3a80 = { pCJsa: _0x3b5a('0x4a') };
    console.log(_0x5f3a80.pCJsa, _0x321fdf);
};
var p = _0x21708c(h, c, d, !0x1, f, null, null, null);
function f(_0x398509) {
    for (let _0x42dc50 in i)
        this[_0x42dc50] = i[_0x42dc50];
}
const u = function () {
    return p[_0x3b5a('0x4b')];
}();
export {
    u as default
};