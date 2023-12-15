
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x40a5 = [
    'YSfqh',
    'isfxC',
    'loading',
    'wJDRL',
    'v-loading',
    'RCoqR',
    'g_loading',
    'sPvjL',
    'calc(100%)',
    'yBMdg',
    'calc(100vh\x20-\x20300px)',
    'skpuX',
    'TCXEU',
    'RelationGraph',
    'QTbUN',
    'graphRef',
    'YnHDa',
    '风险信息',
    'QEwHa',
    'risk',
    '$createElement',
    '_self',
    'handleClick',
    'graphOptions',
    'dghXL',
    'ymulM',
    'DUstS',
    '20px',
    'LXHHo',
    '#666666',
    'xVhXO',
    '600px',
    'tgMAY',
    '\x20这个例子将帮你应对这样的一种场景：图谱默认是不显示的，当点击某个动作（点击按钮、页签之后才显示）后才显示，这种情况需要特殊处理，否则图谱会显示异常（节点不显示、线条混乱等）。处理的主要逻辑是：\x20',
    'pqPNJ',
    'SpdbG',
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
    'STLbH',
    'JQcNR',
    'div',
    'MSzij',
    'qSlTT',
    'el-tabs',
    'jZfOm',
    'card',
    'ECRUg',
    'activeTabName',
    'cCwMj',
    'oZVpn',
    'el-tab-pane',
    'aQbsC',
    '基本信息',
    'JmCHp',
    'base',
    'OxTTS',
    'rxfMo',
    '关系图谱（点这里）',
    'ejjJL',
    'relation'
];
(function (_0x45d7db, _0x3374ea) {
    var _0x3e75df = function (_0x2d1ff6) {
        while (--_0x2d1ff6) {
            _0x45d7db['push'](_0x45d7db['shift']());
        }
    };
    _0x3e75df(++_0x3374ea);
}(_0x40a5, 0xef));
var _0x3299 = function (_0x4adaa9, _0x3122d3) {
    _0x4adaa9 = _0x4adaa9 - 0x0;
    var _0x2b9b5a = _0x40a5[_0x4adaa9];
    return _0x2b9b5a;
};
import { n as _0x566221 } from './index-0f873f6f.js';
var n = function () {
        var _0x24c7a0 = {};
        _0x24c7a0[_0x3299('0x0')] = function (_0x31389b, _0x5da580, _0x6496af, _0x265054) {
            return _0x31389b(_0x5da580, _0x6496af, _0x265054);
        };
        _0x24c7a0[_0x3299('0x1')] = _0x3299('0x2');
        _0x24c7a0[_0x3299('0x3')] = function (_0x38beed, _0x390e02, _0x4a93bd, _0x18d789, _0x162ad8) {
            return _0x38beed(_0x390e02, _0x4a93bd, _0x18d789, _0x162ad8);
        };
        _0x24c7a0[_0x3299('0x4')] = _0x3299('0x5');
        _0x24c7a0[_0x3299('0x6')] = _0x3299('0x7');
        _0x24c7a0[_0x3299('0x8')] = _0x3299('0x9');
        _0x24c7a0[_0x3299('0xa')] = function (_0x319a90, _0x1548f7, _0x55297e, _0x5f28af) {
            return _0x319a90(_0x1548f7, _0x55297e, _0x5f28af);
        };
        _0x24c7a0[_0x3299('0xb')] = _0x3299('0xc');
        _0x24c7a0[_0x3299('0xd')] = _0x3299('0xe');
        _0x24c7a0[_0x3299('0xf')] = _0x3299('0x10');
        _0x24c7a0[_0x3299('0x11')] = function (_0x2e08db, _0x21b859, _0x12d7ab, _0x371a40) {
            return _0x2e08db(_0x21b859, _0x12d7ab, _0x371a40);
        };
        _0x24c7a0[_0x3299('0x12')] = _0x3299('0x13');
        _0x24c7a0[_0x3299('0x14')] = _0x3299('0x15');
        _0x24c7a0[_0x3299('0x16')] = function (_0x5bae4f, _0x498205, _0x13ca1f, _0x227721, _0x1c20c3) {
            return _0x5bae4f(_0x498205, _0x13ca1f, _0x227721, _0x1c20c3);
        };
        _0x24c7a0[_0x3299('0x17')] = _0x3299('0x18');
        _0x24c7a0[_0x3299('0x19')] = _0x3299('0x1a');
        _0x24c7a0[_0x3299('0x1b')] = _0x3299('0x1c');
        _0x24c7a0[_0x3299('0x1d')] = _0x3299('0x1e');
        _0x24c7a0[_0x3299('0x1f')] = _0x3299('0x20');
        _0x24c7a0[_0x3299('0x21')] = function (_0x4a7577, _0x55a6b3, _0x43e456) {
            return _0x4a7577(_0x55a6b3, _0x43e456);
        };
        _0x24c7a0[_0x3299('0x22')] = _0x3299('0x23');
        _0x24c7a0[_0x3299('0x24')] = _0x3299('0x25');
        _0x24c7a0[_0x3299('0x26')] = _0x3299('0x27');
        _0x24c7a0[_0x3299('0x28')] = _0x3299('0x29');
        var _0x38abfe = this, _0x3d26fd = _0x38abfe[_0x3299('0x2a')], _0x5f1b32 = _0x38abfe[_0x3299('0x2b')]['_c'] || _0x3d26fd;
        return _0x24c7a0[_0x3299('0x0')](_0x5f1b32, _0x24c7a0[_0x3299('0x1')], [
            _0x38abfe['_m'](0x0),
            _0x24c7a0[_0x3299('0x3')](_0x5f1b32, _0x24c7a0[_0x3299('0x4')], {
                'attrs': { 'type': _0x24c7a0[_0x3299('0x6')] },
                'on': { 'tab-click': _0x38abfe[_0x3299('0x2c')] },
                'model': {
                    'value': _0x38abfe[_0x3299('0x9')],
                    'callback': function (_0x23684d) {
                        _0x38abfe[_0x3299('0x9')] = _0x23684d;
                    },
                    'expression': _0x24c7a0[_0x3299('0x8')]
                }
            }, [
                _0x24c7a0[_0x3299('0xa')](_0x5f1b32, _0x24c7a0[_0x3299('0xb')], {
                    'attrs': {
                        'label': _0x24c7a0[_0x3299('0xd')],
                        'name': _0x24c7a0[_0x3299('0xf')]
                    }
                }, [_0x38abfe['_v'](_0x24c7a0[_0x3299('0xd')])]),
                _0x24c7a0[_0x3299('0x11')](_0x5f1b32, _0x24c7a0[_0x3299('0xb')], {
                    'attrs': {
                        'label': _0x24c7a0[_0x3299('0x12')],
                        'name': _0x24c7a0[_0x3299('0x14')]
                    }
                }, [_0x24c7a0[_0x3299('0x16')](_0x5f1b32, _0x24c7a0[_0x3299('0x1')], {
                        'directives': [{
                                'name': _0x24c7a0[_0x3299('0x17')],
                                'rawName': _0x24c7a0[_0x3299('0x19')],
                                'value': _0x38abfe[_0x3299('0x1c')],
                                'expression': _0x24c7a0[_0x3299('0x1b')]
                            }],
                        'staticStyle': {
                            'width': _0x24c7a0[_0x3299('0x1d')],
                            'height': _0x24c7a0[_0x3299('0x1f')]
                        }
                    }, [_0x24c7a0[_0x3299('0x21')](_0x5f1b32, _0x24c7a0[_0x3299('0x22')], {
                            'ref': _0x24c7a0[_0x3299('0x24')],
                            'attrs': { 'options': _0x38abfe[_0x3299('0x2d')] }
                        })], 0x1)]),
                _0x24c7a0[_0x3299('0x11')](_0x5f1b32, _0x24c7a0[_0x3299('0xb')], {
                    'attrs': {
                        'label': _0x24c7a0[_0x3299('0x26')],
                        'name': _0x24c7a0[_0x3299('0x28')]
                    }
                }, [_0x38abfe['_v'](_0x24c7a0[_0x3299('0x26')])])
            ], 0x1)
        ], 0x1);
    }, d = [function () {
            var _0x2b4771 = {};
            _0x2b4771[_0x3299('0x2e')] = function (_0x428150, _0x32fc03, _0x146364, _0x337d20) {
                return _0x428150(_0x32fc03, _0x146364, _0x337d20);
            };
            _0x2b4771[_0x3299('0x2f')] = _0x3299('0x2');
            _0x2b4771[_0x3299('0x30')] = _0x3299('0x31');
            _0x2b4771[_0x3299('0x32')] = _0x3299('0x33');
            _0x2b4771[_0x3299('0x34')] = _0x3299('0x35');
            _0x2b4771[_0x3299('0x36')] = _0x3299('0x37');
            _0x2b4771[_0x3299('0x38')] = function (_0x125f0f, _0x193eb1, _0x58f0cb) {
                return _0x125f0f(_0x193eb1, _0x58f0cb);
            };
            _0x2b4771[_0x3299('0x39')] = _0x3299('0x3a');
            var _0x4f0988 = this, _0x145e17 = _0x4f0988[_0x3299('0x2a')], _0x1cb219 = _0x4f0988[_0x3299('0x2b')]['_c'] || _0x145e17;
            return _0x2b4771[_0x3299('0x2e')](_0x1cb219, _0x2b4771[_0x3299('0x2f')], {
                'staticStyle': {
                    'padding': _0x2b4771[_0x3299('0x30')],
                    'color': _0x2b4771[_0x3299('0x32')],
                    'width': _0x2b4771[_0x3299('0x34')]
                }
            }, [
                _0x4f0988['_v'](_0x2b4771[_0x3299('0x36')]),
                _0x2b4771[_0x3299('0x38')](_0x1cb219, _0x2b4771[_0x3299('0x2f')], [_0x4f0988['_v'](_0x2b4771[_0x3299('0x39')])])
            ]);
        }];
const l = {}, o = {};
l[_0x3299('0x3b')] = _0x3299('0x3c');
l[_0x3299('0x3d')] = {};
l[_0x3299('0x3e')] = function () {
    var _0x48e482 = {
        Izmfx: _0x3299('0x10'),
        wXnSj: _0x3299('0x3f'),
        xihMN: _0x3299('0x40'),
        fbYri: _0x3299('0x41'),
        HoBlk: _0x3299('0x42'),
        zYuKx: _0x3299('0x43'),
        eTFcE: _0x3299('0x44'),
        OkvZG: _0x3299('0x45'),
        gCJyC: _0x3299('0x46'),
        hcBjQ: _0x3299('0x47'),
        eArFc: _0x3299('0x48')
    };
    return {
        g_loading: !0x0,
        graphDataLoaded: !0x1,
        activeTabName: _0x48e482.Izmfx,
        demoname: _0x48e482.wXnSj,
        graphOptions: {
            layouts: [{
                    label: '中心',
                    layoutName: _0x48e482.xihMN,
                    layoutClassName: _0x48e482.fbYri,
                    defaultJunctionPoint: _0x48e482.HoBlk,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x48e482.zYuKx,
                    max_per_width: _0x48e482.eTFcE,
                    min_per_height: '40'
                }],
            defaultLineMarker: {
                markerWidth: 0xc,
                markerHeight: 0xc,
                refX: 0x6,
                refY: 0x6,
                data: _0x48e482.OkvZG
            },
            defaultExpandHolderPosition: _0x48e482.gCJyC,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x48e482.hcBjQ,
            defaultNodeColor: _0x48e482.eArFc
        }
    };
};
l[_0x3299('0x49')] = function () {
};
l[_0x3299('0x4a')] = function () {
    this.demoname = this.$route.params.demoname;
};
l[_0x3299('0x4b')] = {};
l[_0x3299('0x4b')][_0x3299('0x4c')] = function () {
    var _0x138399 = {
        pLAuT: _0x3299('0x4d'),
        EQNOL: _0x3299('0x4e'),
        ObzYm: _0x3299('0x4f'),
        LeNby: _0x3299('0x50'),
        nETuK: _0x3299('0x51'),
        eQYzs: _0x3299('0x52'),
        gtaiI: _0x3299('0x53'),
        vBBMn: _0x3299('0x54'),
        VTEil: function (_0x396c33, _0x12e840, _0xb859bd) {
            return _0x396c33(_0x12e840, _0xb859bd);
        }
    };
    const _0x1b7954 = {
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
                id: _0x138399.pLAuT,
                text: _0x138399.pLAuT
            },
            {
                id: _0x138399.EQNOL,
                text: _0x138399.EQNOL
            },
            {
                id: _0x138399.ObzYm,
                text: _0x138399.ObzYm
            },
            {
                id: _0x138399.LeNby,
                text: _0x138399.LeNby
            },
            {
                id: _0x138399.nETuK,
                text: _0x138399.nETuK
            },
            {
                id: _0x138399.eQYzs,
                text: _0x138399.eQYzs
            },
            {
                id: 'b2',
                text: 'b2'
            },
            {
                id: _0x138399.gtaiI,
                text: _0x138399.gtaiI
            },
            {
                id: _0x138399.vBBMn,
                text: _0x138399.vBBMn
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
                to: _0x138399.pLAuT
            },
            {
                from: 'b1',
                to: _0x138399.EQNOL
            },
            {
                from: 'b1',
                to: _0x138399.ObzYm
            },
            {
                from: 'b1',
                to: _0x138399.LeNby
            },
            {
                from: 'b1',
                to: _0x138399.nETuK
            },
            {
                from: 'b1',
                to: _0x138399.eQYzs
            },
            {
                from: 'b',
                to: 'b2'
            },
            {
                from: 'b2',
                to: _0x138399.gtaiI
            },
            {
                from: 'b2',
                to: _0x138399.vBBMn
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
    console.log(JSON.stringify(_0x1b7954)), _0x138399.VTEil(setTimeout, () => {
        this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x1b7954, _0x2e9316 => {
            _0x2e9316.refresh();
        });
    }, 0x3e8);
};
l[_0x3299('0x4b')][_0x3299('0x2c')] = function (_0x57f27a, _0x11ae86) {
    var _0x8f8eed = {
        RAkAj: _0x3299('0x55'),
        zcYyc: function (_0x32d0c4, _0x2488e7) {
            return _0x32d0c4 === _0x2488e7;
        },
        Fxsro: _0x3299('0x15')
    };
    console.log(_0x8f8eed.RAkAj, this.activeTabName), _0x8f8eed.zcYyc(this.activeTabName, _0x8f8eed.Fxsro) && (this.graphDataLoaded || (this.graphDataLoaded = !0x0, this.loadGraphData()));
};
var s = _0x566221(l, n, d, !0x1, c, null, null, null);
function c(_0x34ff99) {
    for (let _0x415c84 in o)
        this[_0x415c84] = o[_0x415c84];
}
const m = function () {
    return s[_0x3299('0x56')];
}();
export {
    m as default
};