
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x38dc = [
    'yYBmR',
    '删除节点',
    'FzoLJ',
    'gaEnc',
    'ixFxI',
    '添加连线',
    'pLhtG',
    'eESfP',
    '删除关系',
    'vogHp',
    'bCOzW',
    'QjPJu',
    'calc(100vh\x20-\x2050px)',
    'rOunp',
    'RjTay',
    'RelationGraph',
    'rhxtJ',
    'graphRef',
    'wQDQk',
    'graph-plug',
    '$createElement',
    '_self',
    'graphOptions',
    'onContextmenu',
    'isShowNodeTipsPanel',
    'nodeMenuPanelPosition',
    'currentObjectType',
    'currentObject',
    'fromNode',
    'text',
    'toNode',
    'addNode',
    'deleteNode',
    'createLineFromNode',
    'deleteLink',
    'name',
    'ObjectEdit',
    'components',
    'data',
    'mounted',
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    '关系1',
    '关系2',
    '关系3',
    '#67C23A',
    'click',
    'showNodeMenus:',
    'addFromCanvas-',
    'New-',
    '#5da0f8',
    '新增连线：',
    '#e85f84',
    '新连线',
    'allowSwitchLineShape',
    'allowSwitchJunctionPoint',
    'allowShowDownloadButton',
    'defaultJunctionPoint',
    'border',
    '423b63f9',
    'exports',
    'cdvML',
    'MzYAa',
    'div',
    'tjjGG',
    'c-right-menu-panel',
    'zONvg',
    'UVUDs',
    'JJYIM',
    'c-object-info',
    'uTPlp',
    'wYuIT',
    '当前右键事件信息：',
    'XyoHj',
    'aOyAI',
    '类型：',
    'ahaWm',
    'ObqAi',
    'link',
    'nlWUG',
    '\x20->\x20',
    'tDTHt',
    'ZYkbS',
    'node',
    'OjFLg',
    'XCbHo',
    'yNqOB',
    'ID:',
    'wXKJv',
    'eWMWs',
    'Text:',
    'NpVtK',
    '你可以对这个对象做以下操作：',
    'rVaHx',
    'tzPXw',
    'canvas',
    'tEGej',
    'c-node-menu-item',
    'RufIG',
    '添加节点',
    'ZTUAE'
];
(function (_0x197e2c, _0x4263f8) {
    var _0xfaad97 = function (_0x13eaac) {
        while (--_0x13eaac) {
            _0x197e2c['push'](_0x197e2c['shift']());
        }
    };
    _0xfaad97(++_0x4263f8);
}(_0x38dc, 0xa6));
var _0x6ac5 = function (_0x2ecc34, _0x2e7a70) {
    _0x2ecc34 = _0x2ecc34 - 0x0;
    var _0x241b24 = _0x38dc[_0x2ecc34];
    return _0x241b24;
};
import { n as _0xd22e7b } from './index-95e0ef84.js';
var a = function () {
        var _0x540c86 = {};
        _0x540c86[_0x6ac5('0x0')] = function (_0x1837cb, _0x26af9a, _0x11bee7, _0x5cacc1) {
            return _0x1837cb(_0x26af9a, _0x11bee7, _0x5cacc1);
        };
        _0x540c86[_0x6ac5('0x1')] = _0x6ac5('0x2');
        _0x540c86[_0x6ac5('0x3')] = _0x6ac5('0x4');
        _0x540c86[_0x6ac5('0x5')] = function (_0x51c96a, _0xaaa86f) {
            return _0x51c96a + _0xaaa86f;
        };
        _0x540c86[_0x6ac5('0x6')] = function (_0x40a229, _0x4f6853) {
            return _0x40a229 + _0x4f6853;
        };
        _0x540c86[_0x6ac5('0x7')] = _0x6ac5('0x8');
        _0x540c86[_0x6ac5('0x9')] = function (_0x1cf2e5, _0x5e923f, _0x432e6a) {
            return _0x1cf2e5(_0x5e923f, _0x432e6a);
        };
        _0x540c86[_0x6ac5('0xa')] = _0x6ac5('0xb');
        _0x540c86[_0x6ac5('0xc')] = function (_0x1ae9a3, _0x5e22f4, _0x23096e) {
            return _0x1ae9a3(_0x5e22f4, _0x23096e);
        };
        _0x540c86[_0x6ac5('0xd')] = _0x6ac5('0xe');
        _0x540c86[_0x6ac5('0xf')] = function (_0x5e541d, _0x14792a) {
            return _0x5e541d === _0x14792a;
        };
        _0x540c86[_0x6ac5('0x10')] = _0x6ac5('0x11');
        _0x540c86[_0x6ac5('0x12')] = _0x6ac5('0x13');
        _0x540c86[_0x6ac5('0x14')] = function (_0x46c310, _0x4f0b3b) {
            return _0x46c310 === _0x4f0b3b;
        };
        _0x540c86[_0x6ac5('0x15')] = _0x6ac5('0x16');
        _0x540c86[_0x6ac5('0x17')] = function (_0x2130ae, _0x399fa0, _0x9a5800) {
            return _0x2130ae(_0x399fa0, _0x9a5800);
        };
        _0x540c86[_0x6ac5('0x18')] = function (_0x5ec5f2, _0x593711) {
            return _0x5ec5f2 + _0x593711;
        };
        _0x540c86[_0x6ac5('0x19')] = _0x6ac5('0x1a');
        _0x540c86[_0x6ac5('0x1b')] = function (_0x2600c3, _0x393ce2) {
            return _0x2600c3 === _0x393ce2;
        };
        _0x540c86[_0x6ac5('0x1c')] = _0x6ac5('0x1d');
        _0x540c86[_0x6ac5('0x1e')] = _0x6ac5('0x1f');
        _0x540c86[_0x6ac5('0x20')] = function (_0x188991, _0x1dcdd9) {
            return _0x188991 === _0x1dcdd9;
        };
        _0x540c86[_0x6ac5('0x21')] = _0x6ac5('0x22');
        _0x540c86[_0x6ac5('0x23')] = _0x6ac5('0x24');
        _0x540c86[_0x6ac5('0x25')] = _0x6ac5('0x26');
        _0x540c86[_0x6ac5('0x27')] = function (_0x292f74, _0x3bced1, _0x55a1bf, _0x8400c1) {
            return _0x292f74(_0x3bced1, _0x55a1bf, _0x8400c1);
        };
        _0x540c86[_0x6ac5('0x28')] = _0x6ac5('0x29');
        _0x540c86[_0x6ac5('0x2a')] = function (_0x3dbfd7, _0x3dc2fe) {
            return _0x3dbfd7 === _0x3dc2fe;
        };
        _0x540c86[_0x6ac5('0x2b')] = function (_0x3b58cc, _0x17cc7c, _0x2f3924, _0x466e9b) {
            return _0x3b58cc(_0x17cc7c, _0x2f3924, _0x466e9b);
        };
        _0x540c86[_0x6ac5('0x2c')] = _0x6ac5('0x2d');
        _0x540c86[_0x6ac5('0x2e')] = function (_0x2b5c0a, _0xb7290b) {
            return _0x2b5c0a === _0xb7290b;
        };
        _0x540c86[_0x6ac5('0x2f')] = _0x6ac5('0x30');
        _0x540c86[_0x6ac5('0x31')] = function (_0x4a48b4, _0xb8cb9c, _0x5c8c00) {
            return _0x4a48b4(_0xb8cb9c, _0x5c8c00);
        };
        _0x540c86[_0x6ac5('0x32')] = function (_0x3c1aba, _0x32c864, _0x4a2353, _0x399db9, _0x2209e4) {
            return _0x3c1aba(_0x32c864, _0x4a2353, _0x399db9, _0x2209e4);
        };
        _0x540c86[_0x6ac5('0x33')] = _0x6ac5('0x34');
        _0x540c86[_0x6ac5('0x35')] = function (_0x4db18b, _0x51b62c, _0x1e957d) {
            return _0x4db18b(_0x51b62c, _0x1e957d);
        };
        _0x540c86[_0x6ac5('0x36')] = _0x6ac5('0x37');
        _0x540c86[_0x6ac5('0x38')] = _0x6ac5('0x39');
        _0x540c86[_0x6ac5('0x3a')] = _0x6ac5('0x3b');
        var _0x1ec08a = this, _0x462183 = _0x1ec08a[_0x6ac5('0x3c')], _0x5b316b = _0x1ec08a[_0x6ac5('0x3d')]['_c'] || _0x462183;
        return _0x540c86[_0x6ac5('0x31')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], [_0x540c86[_0x6ac5('0x32')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], { 'staticStyle': { 'height': _0x540c86[_0x6ac5('0x33')] } }, [_0x540c86[_0x6ac5('0x35')](_0x5b316b, _0x540c86[_0x6ac5('0x36')], {
                    'ref': _0x540c86[_0x6ac5('0x38')],
                    'attrs': {
                        'options': _0x1ec08a[_0x6ac5('0x3e')],
                        'on-contextmenu': _0x1ec08a[_0x6ac5('0x3f')]
                    },
                    'scopedSlots': _0x1ec08a['_u']([{
                            'key': _0x540c86[_0x6ac5('0x3a')],
                            'fn': function () {
                                return [_0x1ec08a[_0x6ac5('0x40')] ? _0x540c86[_0x6ac5('0x0')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], {
                                        'staticClass': _0x540c86[_0x6ac5('0x3')],
                                        'style': {
                                            'left': _0x540c86[_0x6ac5('0x5')](_0x1ec08a[_0x6ac5('0x41')]['x'], 'px'),
                                            'top': _0x540c86[_0x6ac5('0x6')](_0x1ec08a[_0x6ac5('0x41')]['y'], 'px')
                                        }
                                    }, [
                                        _0x540c86[_0x6ac5('0x0')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], { 'staticClass': _0x540c86[_0x6ac5('0x7')] }, [
                                            _0x540c86[_0x6ac5('0x9')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0xa')])]),
                                            _0x540c86[_0x6ac5('0xc')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0x6')](_0x540c86[_0x6ac5('0xd')], _0x1ec08a['_s'](_0x1ec08a[_0x6ac5('0x42')])))]),
                                            _0x540c86[_0x6ac5('0xf')](_0x1ec08a[_0x6ac5('0x42')], _0x540c86[_0x6ac5('0x10')]) ? _0x540c86[_0x6ac5('0xc')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0x6')](_0x540c86[_0x6ac5('0x6')](_0x1ec08a['_s'](_0x1ec08a[_0x6ac5('0x43')][_0x6ac5('0x44')][_0x6ac5('0x45')]), _0x540c86[_0x6ac5('0x12')]), _0x1ec08a['_s'](_0x1ec08a[_0x6ac5('0x43')][_0x6ac5('0x46')][_0x6ac5('0x45')])))]) : _0x1ec08a['_e'](),
                                            _0x540c86[_0x6ac5('0x14')](_0x1ec08a[_0x6ac5('0x42')], _0x540c86[_0x6ac5('0x15')]) ? _0x540c86[_0x6ac5('0x17')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0x18')](_0x540c86[_0x6ac5('0x19')], _0x1ec08a['_s'](_0x1ec08a[_0x6ac5('0x43')]['id'])))]) : _0x1ec08a['_e'](),
                                            _0x540c86[_0x6ac5('0x1b')](_0x1ec08a[_0x6ac5('0x42')], _0x540c86[_0x6ac5('0x15')]) ? _0x540c86[_0x6ac5('0x17')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0x18')](_0x540c86[_0x6ac5('0x1c')], _0x1ec08a['_s'](_0x1ec08a[_0x6ac5('0x43')][_0x6ac5('0x45')])))]) : _0x1ec08a['_e'](),
                                            _0x540c86[_0x6ac5('0x17')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0x1e')])])
                                        ]),
                                        _0x540c86[_0x6ac5('0x20')](_0x1ec08a[_0x6ac5('0x42')], _0x540c86[_0x6ac5('0x21')]) ? _0x540c86[_0x6ac5('0x0')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], {
                                            'staticClass': _0x540c86[_0x6ac5('0x23')],
                                            'on': { 'click': _0x1ec08a[_0x6ac5('0x47')] }
                                        }, [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0x25')])]) : _0x1ec08a['_e'](),
                                        _0x540c86[_0x6ac5('0x20')](_0x1ec08a[_0x6ac5('0x42')], _0x540c86[_0x6ac5('0x15')]) ? _0x540c86[_0x6ac5('0x27')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], {
                                            'staticClass': _0x540c86[_0x6ac5('0x23')],
                                            'on': { 'click': _0x1ec08a[_0x6ac5('0x48')] }
                                        }, [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0x28')])]) : _0x1ec08a['_e'](),
                                        _0x540c86[_0x6ac5('0x2a')](_0x1ec08a[_0x6ac5('0x42')], _0x540c86[_0x6ac5('0x15')]) ? _0x540c86[_0x6ac5('0x2b')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], {
                                            'staticClass': _0x540c86[_0x6ac5('0x23')],
                                            'on': { 'click': _0x1ec08a[_0x6ac5('0x49')] }
                                        }, [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0x2c')])]) : _0x1ec08a['_e'](),
                                        _0x540c86[_0x6ac5('0x2e')](_0x1ec08a[_0x6ac5('0x42')], _0x540c86[_0x6ac5('0x10')]) ? _0x540c86[_0x6ac5('0x2b')](_0x5b316b, _0x540c86[_0x6ac5('0x1')], {
                                            'staticClass': _0x540c86[_0x6ac5('0x23')],
                                            'on': { 'click': _0x1ec08a[_0x6ac5('0x4a')] }
                                        }, [_0x1ec08a['_v'](_0x540c86[_0x6ac5('0x2f')])]) : _0x1ec08a['_e']()
                                    ]) : _0x1ec08a['_e']()];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, d = [];
const l = {}, h = {}, r = {};
h[_0x6ac5('0x4b')] = _0x6ac5('0x4c');
h[_0x6ac5('0x4d')] = {};
h[_0x6ac5('0x4e')] = function () {
    return {
        isShowNodeTipsPanel: !0x1,
        nodeMenuPanelPosition: {
            x: 0x0,
            y: 0x0
        },
        currentObjectType: null,
        currentObject: '',
        newNodeIdIndex: 0x1,
        newLineIdIndex: 0x1,
        graphOptions: l
    };
};
h[_0x6ac5('0x4f')] = function () {
    this.showGraph();
};
h[_0x6ac5('0x50')] = {};
h[_0x6ac5('0x50')][_0x6ac5('0x51')] = function () {
    var _0x4327c1 = {
        Tsnxv: _0x6ac5('0x52'),
        vzPJs: _0x6ac5('0x53'),
        DeVRg: _0x6ac5('0x54'),
        AQYZH: _0x6ac5('0x55'),
        HXlRR: _0x6ac5('0x56'),
        FXsgD: _0x6ac5('0x57')
    };
    const _0x498cd4 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x4327c1.Tsnxv
            },
            {
                id: 'b',
                text: 'B',
                color: _0x4327c1.vzPJs,
                fontColor: _0x4327c1.Tsnxv
            },
            {
                id: 'c',
                text: 'C',
                nodeShape: 0x1,
                width: 0x50,
                height: 0x3c
            },
            {
                id: 'e',
                text: 'E',
                nodeShape: 0x0,
                width: 0x96,
                height: 0x96
            }
        ],
        lines: [
            {
                from: 'a',
                to: 'b',
                text: _0x4327c1.DeVRg,
                color: _0x4327c1.vzPJs
            },
            {
                from: 'a',
                to: 'c',
                text: _0x4327c1.AQYZH
            },
            {
                from: 'a',
                to: 'e',
                text: _0x4327c1.HXlRR
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x4327c1.FXsgD
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x498cd4, _0x217c59 => {
    });
};
h[_0x6ac5('0x50')][_0x6ac5('0x3f')] = function (_0x350385, _0x3ea2f4, _0x574694) {
    var _0x30624f = {
        SkuYV: _0x6ac5('0x58'),
        AIDHd: _0x6ac5('0x59'),
        PSrqS: function (_0x206c27, _0x500112) {
            return _0x206c27 + _0x500112;
        },
        JUFMT: function (_0x5ceaa3, _0x2ecf14) {
            return _0x5ceaa3 - _0x2ecf14;
        },
        qvlls: function (_0xf85fe2, _0x24a6a8) {
            return _0xf85fe2 + _0x24a6a8;
        }
    };
    const _0x2ba106 = this.$refs.graphRef.getInstance();
    this.currentObjectType = _0x3ea2f4, this.currentObject = _0x574694;
    const _0x3d6e52 = _0x2ba106.getBoundingClientRect();
    console.log(_0x30624f.AIDHd, _0x350385, _0x3d6e52), this.isShowNodeTipsPanel = !0x0, this.nodeMenuPanelPosition.x = _0x30624f.PSrqS(_0x30624f.JUFMT(_0x350385.clientX, _0x3d6e52.x), 0xa), this.nodeMenuPanelPosition.y = _0x30624f.qvlls(_0x30624f.JUFMT(_0x350385.clientY, _0x3d6e52.y), 0xa);
    const _0x1b7209 = () => {
        this.isShowNodeTipsPanel = !0x1, document.body.removeEventListener(_0x30624f.SkuYV, _0x1b7209);
    };
    document.body.addEventListener(_0x30624f.SkuYV, _0x1b7209);
};
h[_0x6ac5('0x50')][_0x6ac5('0x47')] = function (_0x1dc993) {
    var _0x16ac5c = {
        KTlMq: function (_0x5c78b9, _0x5bd5c6) {
            return _0x5c78b9 + _0x5bd5c6;
        },
        ywhcH: function (_0x1479cb, _0x5c0a3c) {
            return _0x1479cb - _0x5c0a3c;
        },
        ZjBzC: function (_0x2a027e, _0x405e38) {
            return _0x2a027e - _0x405e38;
        },
        vMLGf: function (_0x2993c7, _0x45efb5) {
            return _0x2993c7 + _0x45efb5;
        },
        eSySO: _0x6ac5('0x5a'),
        lqeXW: _0x6ac5('0x5b'),
        rtGBc: _0x6ac5('0x5c')
    };
    const _0x4a3278 = this.$refs.graphRef.getInstance(), _0x5259fc = _0x4a3278.getBoundingClientRect(), _0x281519 = _0x4a3278.getCanvasCoordinateByClientCoordinate({
            x: _0x16ac5c.KTlMq(_0x16ac5c.ywhcH(this.nodeMenuPanelPosition.x, 0xa), _0x5259fc.x),
            y: _0x16ac5c.KTlMq(_0x16ac5c.ZjBzC(this.nodeMenuPanelPosition.y, 0xa), _0x5259fc.y)
        }), _0x1bc53c = this.newNodeIdIndex++;
    _0x4a3278.addNodes([{
            id: _0x16ac5c.vMLGf(_0x16ac5c.eSySO, _0x1bc53c),
            text: _0x16ac5c.vMLGf(_0x16ac5c.lqeXW, _0x1bc53c),
            color: _0x16ac5c.rtGBc,
            x: _0x281519.x,
            y: _0x281519.y
        }]);
};
h[_0x6ac5('0x50')][_0x6ac5('0x48')] = function (_0xc26057) {
    this.$refs.graphRef.getInstance().removeNodeById(this.currentObject.id);
};
h[_0x6ac5('0x50')][_0x6ac5('0x4a')] = function (_0x12b472) {
    this.$refs.graphRef.getInstance().removeLinkById(this.currentObject.seeks_id);
};
h[_0x6ac5('0x50')][_0x6ac5('0x49')] = function (_0x326f86) {
    var _0x410051 = {
        GETlg: _0x6ac5('0x5d'),
        pPVWi: _0x6ac5('0x5e'),
        ktLYe: function (_0x59dc40, _0x49b426) {
            return _0x59dc40 + _0x49b426;
        },
        ZGwtm: _0x6ac5('0x5f')
    };
    const _0x1ca255 = this.$refs.graphRef.getInstance();
    _0x1ca255.startCreatingLinePlot(_0x326f86, {
        template: {
            lineWidth: 0x3,
            color: _0x410051.pPVWi,
            text: _0x410051.ZGwtm
        },
        fromNode: this.currentObject,
        onCreateLine: (_0xe9f0ff, _0x274e7f) => {
            if (console.log(_0x410051.GETlg, _0xe9f0ff, _0x274e7f), _0x274e7f.id) {
                const _0xa18052 = this.newLineIdIndex++;
                _0x1ca255.addLines([{
                        from: _0xe9f0ff.id,
                        to: _0x274e7f.id,
                        lineWidth: 0x3,
                        color: _0x410051.pPVWi,
                        text: _0x410051.ktLYe(_0x410051.ZGwtm, _0xa18052)
                    }]);
            }
        }
    });
};
l[_0x6ac5('0x60')] = !0x0;
l[_0x6ac5('0x61')] = !0x0;
l[_0x6ac5('0x62')] = !0x0;
l[_0x6ac5('0x63')] = _0x6ac5('0x64');
var u = _0xd22e7b(h, a, d, !0x1, p, _0x6ac5('0x65'), null, null);
function p(_0x1bd4b6) {
    for (let _0x143b6d in r)
        this[_0x143b6d] = r[_0x143b6d];
}
const v = function () {
    return u[_0x6ac5('0x66')];
}();
export {
    v as default
};