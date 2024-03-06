
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1d4a = [
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
    'tVQkl',
    'oqxIb',
    'div',
    'WUtOJ',
    'c-right-menu-panel',
    'wNKOS',
    'YJODD',
    'ovdrq',
    'c-object-info',
    'fmXBA',
    'MBQfN',
    '当前右键事件信息：',
    'NhHEv',
    'vJrBM',
    '类型：',
    'SOPoT',
    'VhKUf',
    'link',
    'JiLHc',
    'RfOYA',
    'GATkk',
    '\x20->\x20',
    'DtIdu',
    'node',
    'lvyxq',
    'JitNi',
    'smEsC',
    'ID:',
    'OqybY',
    'PTiCS',
    'oCrwk',
    'yNKtE',
    'Text:',
    'ESBjY',
    'NxZao',
    '你可以对这个对象做以下操作：',
    'YnLVe',
    'canvas',
    'FkrgH',
    'c-node-menu-item',
    'BauuH',
    '添加节点',
    'Rbrzp',
    'UqeOl',
    '删除节点',
    'ulgQO',
    'LuthV',
    'zJCDy',
    '添加连线',
    'mRZiW',
    '删除关系',
    'OPEvU',
    'fyFUo',
    'calc(100vh\x20-\x2050px)',
    'DzNxf',
    'DgIjt',
    'RelationGraph',
    'DfXmY',
    'graphRef',
    'ErmhU',
    'graph-plug',
    '$createElement',
    '_self',
    'graphOptions',
    'onContextmenu'
];
(function (_0x224f00, _0xbf576d) {
    var _0x21ed10 = function (_0x2ff28b) {
        while (--_0x2ff28b) {
            _0x224f00['push'](_0x224f00['shift']());
        }
    };
    _0x21ed10(++_0xbf576d);
}(_0x1d4a, 0xf7));
var _0x124f = function (_0x16bbe6, _0x39fcc7) {
    _0x16bbe6 = _0x16bbe6 - 0x0;
    var _0x4a1684 = _0x1d4a[_0x16bbe6];
    return _0x4a1684;
};
import { n as _0x4d7bae } from './index-19b173b5.js';
var a = function () {
        var _0x214ed2 = {};
        _0x214ed2[_0x124f('0x0')] = function (_0x5dffec, _0x2f3d27, _0x174510, _0x4f3985) {
            return _0x5dffec(_0x2f3d27, _0x174510, _0x4f3985);
        };
        _0x214ed2[_0x124f('0x1')] = _0x124f('0x2');
        _0x214ed2[_0x124f('0x3')] = _0x124f('0x4');
        _0x214ed2[_0x124f('0x5')] = function (_0x4eb67c, _0x4773b8) {
            return _0x4eb67c + _0x4773b8;
        };
        _0x214ed2[_0x124f('0x6')] = function (_0x32bea5, _0x42f4a0) {
            return _0x32bea5 + _0x42f4a0;
        };
        _0x214ed2[_0x124f('0x7')] = _0x124f('0x8');
        _0x214ed2[_0x124f('0x9')] = function (_0x4572da, _0x33c83e, _0x2e01eb) {
            return _0x4572da(_0x33c83e, _0x2e01eb);
        };
        _0x214ed2[_0x124f('0xa')] = _0x124f('0xb');
        _0x214ed2[_0x124f('0xc')] = function (_0x42c2fc, _0x1eb644, _0x12278e) {
            return _0x42c2fc(_0x1eb644, _0x12278e);
        };
        _0x214ed2[_0x124f('0xd')] = _0x124f('0xe');
        _0x214ed2[_0x124f('0xf')] = function (_0x1d5f20, _0x9617dc) {
            return _0x1d5f20 === _0x9617dc;
        };
        _0x214ed2[_0x124f('0x10')] = _0x124f('0x11');
        _0x214ed2[_0x124f('0x12')] = function (_0x39992c, _0x1c3cfa, _0x287f9e) {
            return _0x39992c(_0x1c3cfa, _0x287f9e);
        };
        _0x214ed2[_0x124f('0x13')] = function (_0x529e4c, _0x3de2ec) {
            return _0x529e4c + _0x3de2ec;
        };
        _0x214ed2[_0x124f('0x14')] = _0x124f('0x15');
        _0x214ed2[_0x124f('0x16')] = _0x124f('0x17');
        _0x214ed2[_0x124f('0x18')] = function (_0x165557, _0x20f266, _0xe2dcb) {
            return _0x165557(_0x20f266, _0xe2dcb);
        };
        _0x214ed2[_0x124f('0x19')] = function (_0x308005, _0x3c73cc) {
            return _0x308005 + _0x3c73cc;
        };
        _0x214ed2[_0x124f('0x1a')] = _0x124f('0x1b');
        _0x214ed2[_0x124f('0x1c')] = function (_0x22435c, _0x32c472) {
            return _0x22435c === _0x32c472;
        };
        _0x214ed2[_0x124f('0x1d')] = function (_0x3eea20, _0x11379e, _0x4f9117) {
            return _0x3eea20(_0x11379e, _0x4f9117);
        };
        _0x214ed2[_0x124f('0x1e')] = function (_0x1fdc7a, _0x515950) {
            return _0x1fdc7a + _0x515950;
        };
        _0x214ed2[_0x124f('0x1f')] = _0x124f('0x20');
        _0x214ed2[_0x124f('0x21')] = function (_0x807b56, _0x45f25f, _0x2f8549) {
            return _0x807b56(_0x45f25f, _0x2f8549);
        };
        _0x214ed2[_0x124f('0x22')] = _0x124f('0x23');
        _0x214ed2[_0x124f('0x24')] = _0x124f('0x25');
        _0x214ed2[_0x124f('0x26')] = _0x124f('0x27');
        _0x214ed2[_0x124f('0x28')] = _0x124f('0x29');
        _0x214ed2[_0x124f('0x2a')] = function (_0x5628b4, _0x35a2ce, _0x2d3bca, _0x3dc86c) {
            return _0x5628b4(_0x35a2ce, _0x2d3bca, _0x3dc86c);
        };
        _0x214ed2[_0x124f('0x2b')] = _0x124f('0x2c');
        _0x214ed2[_0x124f('0x2d')] = function (_0x2ee876, _0x4e6a80) {
            return _0x2ee876 === _0x4e6a80;
        };
        _0x214ed2[_0x124f('0x2e')] = function (_0x160a2b, _0x59530c, _0x45d78d, _0x2d15f2) {
            return _0x160a2b(_0x59530c, _0x45d78d, _0x2d15f2);
        };
        _0x214ed2[_0x124f('0x2f')] = _0x124f('0x30');
        _0x214ed2[_0x124f('0x31')] = _0x124f('0x32');
        _0x214ed2[_0x124f('0x33')] = function (_0x1f9b43, _0x4b12b5, _0x38ff67, _0x2f651e, _0xc1ab0e) {
            return _0x1f9b43(_0x4b12b5, _0x38ff67, _0x2f651e, _0xc1ab0e);
        };
        _0x214ed2[_0x124f('0x34')] = _0x124f('0x35');
        _0x214ed2[_0x124f('0x36')] = function (_0xf50859, _0x29a1ee, _0x3889dd) {
            return _0xf50859(_0x29a1ee, _0x3889dd);
        };
        _0x214ed2[_0x124f('0x37')] = _0x124f('0x38');
        _0x214ed2[_0x124f('0x39')] = _0x124f('0x3a');
        _0x214ed2[_0x124f('0x3b')] = _0x124f('0x3c');
        var _0x4be9ae = this, _0x58c0e0 = _0x4be9ae[_0x124f('0x3d')], _0x4de315 = _0x4be9ae[_0x124f('0x3e')]['_c'] || _0x58c0e0;
        return _0x214ed2[_0x124f('0x21')](_0x4de315, _0x214ed2[_0x124f('0x1')], [_0x214ed2[_0x124f('0x33')](_0x4de315, _0x214ed2[_0x124f('0x1')], { 'staticStyle': { 'height': _0x214ed2[_0x124f('0x34')] } }, [_0x214ed2[_0x124f('0x36')](_0x4de315, _0x214ed2[_0x124f('0x37')], {
                    'ref': _0x214ed2[_0x124f('0x39')],
                    'attrs': {
                        'options': _0x4be9ae[_0x124f('0x3f')],
                        'on-contextmenu': _0x4be9ae[_0x124f('0x40')]
                    },
                    'scopedSlots': _0x4be9ae['_u']([{
                            'key': _0x214ed2[_0x124f('0x3b')],
                            'fn': function () {
                                return [_0x4be9ae[_0x124f('0x41')] ? _0x214ed2[_0x124f('0x0')](_0x4de315, _0x214ed2[_0x124f('0x1')], {
                                        'staticClass': _0x214ed2[_0x124f('0x3')],
                                        'style': {
                                            'left': _0x214ed2[_0x124f('0x5')](_0x4be9ae[_0x124f('0x42')]['x'], 'px'),
                                            'top': _0x214ed2[_0x124f('0x6')](_0x4be9ae[_0x124f('0x42')]['y'], 'px')
                                        }
                                    }, [
                                        _0x214ed2[_0x124f('0x0')](_0x4de315, _0x214ed2[_0x124f('0x1')], { 'staticClass': _0x214ed2[_0x124f('0x7')] }, [
                                            _0x214ed2[_0x124f('0x9')](_0x4de315, _0x214ed2[_0x124f('0x1')], [_0x4be9ae['_v'](_0x214ed2[_0x124f('0xa')])]),
                                            _0x214ed2[_0x124f('0xc')](_0x4de315, _0x214ed2[_0x124f('0x1')], [_0x4be9ae['_v'](_0x214ed2[_0x124f('0x6')](_0x214ed2[_0x124f('0xd')], _0x4be9ae['_s'](_0x4be9ae[_0x124f('0x43')])))]),
                                            _0x214ed2[_0x124f('0xf')](_0x4be9ae[_0x124f('0x43')], _0x214ed2[_0x124f('0x10')]) ? _0x214ed2[_0x124f('0x12')](_0x4de315, _0x214ed2[_0x124f('0x1')], [_0x4be9ae['_v'](_0x214ed2[_0x124f('0x6')](_0x214ed2[_0x124f('0x13')](_0x4be9ae['_s'](_0x4be9ae[_0x124f('0x44')][_0x124f('0x45')][_0x124f('0x46')]), _0x214ed2[_0x124f('0x14')]), _0x4be9ae['_s'](_0x4be9ae[_0x124f('0x44')][_0x124f('0x47')][_0x124f('0x46')])))]) : _0x4be9ae['_e'](),
                                            _0x214ed2[_0x124f('0xf')](_0x4be9ae[_0x124f('0x43')], _0x214ed2[_0x124f('0x16')]) ? _0x214ed2[_0x124f('0x18')](_0x4de315, _0x214ed2[_0x124f('0x1')], [_0x4be9ae['_v'](_0x214ed2[_0x124f('0x19')](_0x214ed2[_0x124f('0x1a')], _0x4be9ae['_s'](_0x4be9ae[_0x124f('0x44')]['id'])))]) : _0x4be9ae['_e'](),
                                            _0x214ed2[_0x124f('0x1c')](_0x4be9ae[_0x124f('0x43')], _0x214ed2[_0x124f('0x16')]) ? _0x214ed2[_0x124f('0x1d')](_0x4de315, _0x214ed2[_0x124f('0x1')], [_0x4be9ae['_v'](_0x214ed2[_0x124f('0x1e')](_0x214ed2[_0x124f('0x1f')], _0x4be9ae['_s'](_0x4be9ae[_0x124f('0x44')][_0x124f('0x46')])))]) : _0x4be9ae['_e'](),
                                            _0x214ed2[_0x124f('0x21')](_0x4de315, _0x214ed2[_0x124f('0x1')], [_0x4be9ae['_v'](_0x214ed2[_0x124f('0x22')])])
                                        ]),
                                        _0x214ed2[_0x124f('0x1c')](_0x4be9ae[_0x124f('0x43')], _0x214ed2[_0x124f('0x24')]) ? _0x214ed2[_0x124f('0x0')](_0x4de315, _0x214ed2[_0x124f('0x1')], {
                                            'staticClass': _0x214ed2[_0x124f('0x26')],
                                            'on': { 'click': _0x4be9ae[_0x124f('0x48')] }
                                        }, [_0x4be9ae['_v'](_0x214ed2[_0x124f('0x28')])]) : _0x4be9ae['_e'](),
                                        _0x214ed2[_0x124f('0x1c')](_0x4be9ae[_0x124f('0x43')], _0x214ed2[_0x124f('0x16')]) ? _0x214ed2[_0x124f('0x2a')](_0x4de315, _0x214ed2[_0x124f('0x1')], {
                                            'staticClass': _0x214ed2[_0x124f('0x26')],
                                            'on': { 'click': _0x4be9ae[_0x124f('0x49')] }
                                        }, [_0x4be9ae['_v'](_0x214ed2[_0x124f('0x2b')])]) : _0x4be9ae['_e'](),
                                        _0x214ed2[_0x124f('0x2d')](_0x4be9ae[_0x124f('0x43')], _0x214ed2[_0x124f('0x16')]) ? _0x214ed2[_0x124f('0x2e')](_0x4de315, _0x214ed2[_0x124f('0x1')], {
                                            'staticClass': _0x214ed2[_0x124f('0x26')],
                                            'on': { 'click': _0x4be9ae[_0x124f('0x4a')] }
                                        }, [_0x4be9ae['_v'](_0x214ed2[_0x124f('0x2f')])]) : _0x4be9ae['_e'](),
                                        _0x214ed2[_0x124f('0x2d')](_0x4be9ae[_0x124f('0x43')], _0x214ed2[_0x124f('0x10')]) ? _0x214ed2[_0x124f('0x2e')](_0x4de315, _0x214ed2[_0x124f('0x1')], {
                                            'staticClass': _0x214ed2[_0x124f('0x26')],
                                            'on': { 'click': _0x4be9ae[_0x124f('0x4b')] }
                                        }, [_0x4be9ae['_v'](_0x214ed2[_0x124f('0x31')])]) : _0x4be9ae['_e']()
                                    ]) : _0x4be9ae['_e']()];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, d = [];
const l = {}, h = {}, r = {};
h[_0x124f('0x4c')] = _0x124f('0x4d');
h[_0x124f('0x4e')] = {};
h[_0x124f('0x4f')] = function () {
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
h[_0x124f('0x50')] = function () {
    this.showGraph();
};
h[_0x124f('0x51')] = {};
h[_0x124f('0x51')][_0x124f('0x52')] = function () {
    var _0x26bf6b = {
        qfsSF: _0x124f('0x53'),
        FjMlS: _0x124f('0x54'),
        VVLjs: _0x124f('0x55'),
        cImlV: _0x124f('0x56'),
        jCVni: _0x124f('0x57'),
        SwZZd: _0x124f('0x58')
    };
    const _0x242553 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x26bf6b.qfsSF
            },
            {
                id: 'b',
                text: 'B',
                color: _0x26bf6b.FjMlS,
                fontColor: _0x26bf6b.qfsSF
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
                text: _0x26bf6b.VVLjs,
                color: _0x26bf6b.FjMlS
            },
            {
                from: 'a',
                to: 'c',
                text: _0x26bf6b.cImlV
            },
            {
                from: 'a',
                to: 'e',
                text: _0x26bf6b.jCVni
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x26bf6b.SwZZd
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x242553, _0x207ea2 => {
    });
};
h[_0x124f('0x51')][_0x124f('0x40')] = function (_0x4a60d9, _0x46ffe9, _0x344df0) {
    var _0x48ce2f = {
        ejslm: _0x124f('0x59'),
        QXFeB: _0x124f('0x5a'),
        eOmjE: function (_0x36da89, _0xaa62dd) {
            return _0x36da89 + _0xaa62dd;
        },
        wtoGo: function (_0x4f2127, _0x27a653) {
            return _0x4f2127 - _0x27a653;
        },
        lBmTc: function (_0x27a218, _0x5144e3) {
            return _0x27a218 + _0x5144e3;
        },
        AmMjC: function (_0x3b9bf0, _0x150b23) {
            return _0x3b9bf0 - _0x150b23;
        }
    };
    const _0x2cfdf5 = this.$refs.graphRef.getInstance();
    this.currentObjectType = _0x46ffe9, this.currentObject = _0x344df0;
    const _0x49c8f8 = _0x2cfdf5.getBoundingClientRect();
    console.log(_0x48ce2f.QXFeB, _0x4a60d9, _0x49c8f8), this.isShowNodeTipsPanel = !0x0, this.nodeMenuPanelPosition.x = _0x48ce2f.eOmjE(_0x48ce2f.wtoGo(_0x4a60d9.clientX, _0x49c8f8.x), 0xa), this.nodeMenuPanelPosition.y = _0x48ce2f.lBmTc(_0x48ce2f.AmMjC(_0x4a60d9.clientY, _0x49c8f8.y), 0xa);
    const _0x2747fa = () => {
        this.isShowNodeTipsPanel = !0x1, document.body.removeEventListener(_0x48ce2f.ejslm, _0x2747fa);
    };
    document.body.addEventListener(_0x48ce2f.ejslm, _0x2747fa);
};
h[_0x124f('0x51')][_0x124f('0x48')] = function (_0x10a8bd) {
    var _0x5d0deb = {
        RLPud: function (_0x321536, _0x1eacc4) {
            return _0x321536 + _0x1eacc4;
        },
        UulBM: function (_0x4d7929, _0x5de9c7) {
            return _0x4d7929 - _0x5de9c7;
        },
        bIUnJ: function (_0x43297f, _0x2299af) {
            return _0x43297f - _0x2299af;
        },
        BdQcf: function (_0x5be1d2, _0x3e72d6) {
            return _0x5be1d2 + _0x3e72d6;
        },
        flLqP: _0x124f('0x5b'),
        TyKKC: _0x124f('0x5c'),
        epFqA: _0x124f('0x5d')
    };
    const _0x2aa5f8 = this.$refs.graphRef.getInstance(), _0x57dbd2 = _0x2aa5f8.getBoundingClientRect(), _0xfc1774 = _0x2aa5f8.getCanvasCoordinateByClientCoordinate({
            x: _0x5d0deb.RLPud(_0x5d0deb.UulBM(this.nodeMenuPanelPosition.x, 0xa), _0x57dbd2.x),
            y: _0x5d0deb.RLPud(_0x5d0deb.bIUnJ(this.nodeMenuPanelPosition.y, 0xa), _0x57dbd2.y)
        }), _0x15c6f4 = this.newNodeIdIndex++;
    _0x2aa5f8.addNodes([{
            id: _0x5d0deb.BdQcf(_0x5d0deb.flLqP, _0x15c6f4),
            text: _0x5d0deb.BdQcf(_0x5d0deb.TyKKC, _0x15c6f4),
            color: _0x5d0deb.epFqA,
            x: _0xfc1774.x,
            y: _0xfc1774.y
        }]);
};
h[_0x124f('0x51')][_0x124f('0x49')] = function (_0x3b47dd) {
    this.$refs.graphRef.getInstance().removeNodeById(this.currentObject.id);
};
h[_0x124f('0x51')][_0x124f('0x4b')] = function (_0x506797) {
    this.$refs.graphRef.getInstance().removeLinkById(this.currentObject.seeks_id);
};
h[_0x124f('0x51')][_0x124f('0x4a')] = function (_0xe73ef3) {
    var _0x518bf7 = {
        dEUyZ: _0x124f('0x5e'),
        xZQoA: _0x124f('0x5f'),
        roAVI: function (_0x2105b8, _0x3ecab9) {
            return _0x2105b8 + _0x3ecab9;
        },
        LAxIH: _0x124f('0x60')
    };
    const _0x4871d0 = this.$refs.graphRef.getInstance();
    _0x4871d0.startCreatingLinePlot(_0xe73ef3, {
        template: {
            lineWidth: 0x3,
            color: _0x518bf7.xZQoA,
            text: _0x518bf7.LAxIH
        },
        fromNode: this.currentObject,
        onCreateLine: (_0x4a99c7, _0x3cb7cb) => {
            if (console.log(_0x518bf7.dEUyZ, _0x4a99c7, _0x3cb7cb), _0x3cb7cb.id) {
                const _0x309c3c = this.newLineIdIndex++;
                _0x4871d0.addLines([{
                        from: _0x4a99c7.id,
                        to: _0x3cb7cb.id,
                        lineWidth: 0x3,
                        color: _0x518bf7.xZQoA,
                        text: _0x518bf7.roAVI(_0x518bf7.LAxIH, _0x309c3c)
                    }]);
            }
        }
    });
};
l[_0x124f('0x61')] = !0x0;
l[_0x124f('0x62')] = !0x0;
l[_0x124f('0x63')] = !0x0;
l[_0x124f('0x64')] = _0x124f('0x65');
var u = _0x4d7bae(h, a, d, !0x1, p, _0x124f('0x66'), null, null);
function p(_0x4f4c60) {
    for (let _0xb9b79b in r)
        this[_0xb9b79b] = r[_0xb9b79b];
}
const v = function () {
    return u[_0x124f('0x67')];
}();
export {
    v as default
};