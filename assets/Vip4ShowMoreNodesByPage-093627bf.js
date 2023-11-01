
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x2bb4 = [
    '横向树状图谱',
    'mounted',
    'methods',
    'showGraph',
    'root',
    '北京天天天科技有限公司',
    'left',
    'right',
    'onNodeClick',
    'onNodeClick:',
    'hideMoreNodes',
    '展开全部T',
    'btn-more-to',
    '展开全部F',
    'btn-more-from',
    'showMoreNodes',
    'showMoreNodes:allSublingNodes',
    'onLineClick',
    'onLineClick:',
    'generateChildNodes',
    'generateChildNodes\x20for:',
    'size:',
    'debug',
    'lineUseTextPath',
    'useAnimationWhenExpanded',
    'layouts',
    'tree',
    '400',
    '200,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300',
    'defaultNodeShape',
    'defaultLineShape',
    'defaultJunctionPoint',
    'defaultNodeBorderWidth',
    'defaultLineColor',
    '#dddddd',
    'defaultNodeColor',
    'transparent',
    'FvNVj',
    'quZWd',
    'eGrPe',
    'MkCbT',
    'auJgz',
    'TmFKY',
    'div',
    'qhBvc',
    'my-node\x20more-btn',
    'lgGmZ',
    'AVaDg',
    'qCsMj',
    'Zcipu',
    'XPzIg',
    'my-node\x20my-root',
    'ZOHBq',
    'nSsmJ',
    'AZbFc',
    'level1',
    'owRNE',
    'my-node',
    'gFbTL',
    '100px',
    'gknGA',
    '0px',
    'ErYfe',
    'center',
    'UlPGP',
    '#2c3e50',
    'ZqCSe',
    '#ffffff',
    'rpaCs',
    'XwpZL',
    'tsMNf',
    'HHVyd',
    'span',
    'PvECD',
    'c-circle-flag',
    'APTjx',
    'ArxBt',
    'crAfY',
    '#efefef\x20solid\x201px',
    'Lkeex',
    '30px',
    'SGwxf',
    '\x20本页面使用的数据都是随机生成的，如果想要看看其他数据效果，可以重新进入此页面即可\x20',
    'FKMkm',
    'YMCDF',
    'loading',
    'PyWoy',
    'v-loading',
    'XeAwz',
    'g_loading',
    'mFfTt',
    'calc(100vh\x20-\x2060px)',
    'nySSm',
    '正在加载数据...',
    'wnNrz',
    'el-icon-loading',
    'urnmT',
    'rgba(255,\x20255,\x20255,\x200.6)',
    'yzumv',
    'dNdTR',
    'RelationGraph',
    'oZsfR',
    'graphRef',
    'oFMqs',
    'node',
    '$createElement',
    '_self',
    'graphOptions',
    'type',
    'text',
    '620336f0',
    'exports',
    '星月夜',
    '风云际会',
    '金凯宾斯基',
    'name',
    'Vip4ShowMoreNodesByPage',
    'components',
    'data'
];
(function (_0x5d5e89, _0x305ea0) {
    var _0xe059d7 = function (_0x3e158e) {
        while (--_0x3e158e) {
            _0x5d5e89['push'](_0x5d5e89['shift']());
        }
    };
    _0xe059d7(++_0x305ea0);
}(_0x2bb4, 0x15e));
var _0x1a35 = function (_0x234d26, _0x420667) {
    _0x234d26 = _0x234d26 - 0x0;
    var _0x5a53c7 = _0x2bb4[_0x234d26];
    return _0x5a53c7;
};
import { n as _0x3a9b70 } from './index-fca44c1d.js';
const m = {}, p = {}, h = [
        '',
        '天星',
        _0x1a35('0x0'),
        _0x1a35('0x1'),
        _0x1a35('0x2')
    ];
p[_0x1a35('0x3')] = _0x1a35('0x4');
p[_0x1a35('0x5')] = {};
p[_0x1a35('0x6')] = function () {
    var _0x19da63 = { nhKCk: _0x1a35('0x7') };
    return {
        currentCase: _0x19da63.nhKCk,
        isShowCodePanel: !0x1,
        g_loading: !0x1,
        newNodeIndex: 0x0,
        graphOptions: m
    };
};
p[_0x1a35('0x8')] = function () {
    this.showGraph();
};
p[_0x1a35('0x9')] = {};
p[_0x1a35('0x9')][_0x1a35('0xa')] = async function () {
    var _0x13b77b = {
        IhsMy: _0x1a35('0xb'),
        xNclh: _0x1a35('0xc'),
        hFcVi: _0x1a35('0xd'),
        pYYMK: _0x1a35('0xe')
    };
    const _0x286c24 = {
        rootId: _0x13b77b.IhsMy,
        nodes: [{
                id: _0x13b77b.IhsMy,
                text: _0x13b77b.xNclh,
                offset_x: 0x0,
                data: { type: _0x13b77b.IhsMy }
            }],
        lines: []
    };
    this.generateChildNodes(_0x13b77b.IhsMy, _0x13b77b.hFcVi, _0x286c24), this.generateChildNodes(_0x13b77b.IhsMy, _0x13b77b.pYYMK, _0x286c24), console.log(JSON.stringify(_0x286c24));
    const _0x15cb61 = this.$refs.graphRef.getInstance();
    await _0x15cb61.setJsonData(_0x286c24, !0x0), await _0x15cb61.playShowEffect(), await this.hideMoreNodes(0x1);
};
p[_0x1a35('0x9')][_0x1a35('0xf')] = function (_0x10aa6f, _0x4f40f0) {
    var _0x5b41e5 = { HgwEN: _0x1a35('0x10') };
    console.log(_0x5b41e5.HgwEN, _0x10aa6f);
};
p[_0x1a35('0x9')][_0x1a35('0x11')] = async function (_0x336a1a) {
    var _0x4993e0 = {
        csHTK: function (_0x3b2395, _0x2a4da8) {
            return _0x3b2395 > _0x2a4da8;
        },
        bltal: _0x1a35('0x12'),
        Cksnl: _0x1a35('0xd'),
        uKCmt: _0x1a35('0x13'),
        SLELf: function (_0x521473, _0x2efa47) {
            return _0x521473 > _0x2efa47;
        },
        qnAKA: _0x1a35('0x14'),
        DUHVq: _0x1a35('0xe'),
        QSzcf: _0x1a35('0x15')
    };
    const _0x13d8e8 = this.$refs.graphRef.getInstance(), _0x526045 = _0x13d8e8.getNodes();
    let _0x571a18 = [], _0x4bfa94 = [];
    _0x526045.forEach(_0x5a76af => {
        if (!_0x5a76af.lot || !_0x5a76af.lot.childs)
            return;
        let _0x3aaff2 = _0x5a76af.targetTo;
        _0x4993e0.csHTK(_0x3aaff2.length, 0x2) && (_0x3aaff2.slice(0x2).forEach(_0x359d4c => {
            _0x359d4c.isHide = !0x0;
        }), _0x4bfa94.push({
            id: `${ _0x5a76af.id }-to-more`,
            text: _0x4993e0.bltal,
            alignItems: _0x4993e0.Cksnl,
            data: { type: _0x4993e0.uKCmt }
        }), _0x571a18.push({
            from: _0x5a76af.id,
            to: `${ _0x5a76af.id }-to-more`
        })), _0x3aaff2 = _0x5a76af.targetFrom, _0x4993e0.SLELf(_0x3aaff2.length, 0x2) && (_0x3aaff2.slice(0x2).forEach(_0x1d827f => {
            _0x1d827f.isHide = !0x0;
        }), _0x4bfa94.push({
            id: `${ _0x5a76af.id }-from-more`,
            text: _0x4993e0.qnAKA,
            alignItems: _0x4993e0.DUHVq,
            data: { type: _0x4993e0.QSzcf }
        }), _0x571a18.push({
            from: `${ _0x5a76af.id }-from-more`,
            to: _0x5a76af.id
        }));
    }), _0x13d8e8.addNodes(_0x4bfa94), _0x13d8e8.addLines(_0x571a18), await _0x13d8e8.doLayout(), await _0x13d8e8.setZoom(0x50);
};
p[_0x1a35('0x9')][_0x1a35('0x16')] = function (_0x15840a) {
    var _0x349134 = {
        uEaVg: _0x1a35('0x16'),
        QTiYj: function (_0x17b052, _0x3bd722) {
            return _0x17b052 === _0x3bd722;
        },
        vYjsQ: _0x1a35('0x13'),
        mspvp: _0x1a35('0x17'),
        UaMaY: _0x1a35('0x15')
    };
    console.log(_0x349134.uEaVg);
    const _0x3ae04c = this.$refs.graphRef.getInstance();
    if (_0x349134.QTiYj(_0x15840a.data.type, _0x349134.vYjsQ)) {
        const _0x4a47f8 = _0x15840a.lot.parent.targetTo;
        console.log(_0x349134.mspvp, _0x4a47f8.length), _0x4a47f8.forEach(_0x1ecba4 => {
            _0x1ecba4.isHide = !0x1;
        }), _0x3ae04c.removeNodeById(_0x15840a.id), _0x3ae04c.doLayout();
    }
    if (_0x349134.QTiYj(_0x15840a.data.type, _0x349134.UaMaY)) {
        const _0x45442e = _0x15840a.lot.parent.targetFrom;
        console.log(_0x349134.mspvp, _0x45442e.length), _0x45442e.forEach(_0x4920c6 => {
            _0x4920c6.isHide = !0x1;
        }), _0x3ae04c.removeNodeById(_0x15840a.id), _0x3ae04c.doLayout();
    }
};
p[_0x1a35('0x9')][_0x1a35('0x18')] = function (_0x543cfd, _0x55989a, _0x1d4f2e) {
    var _0x17fed4 = { ZmTCH: _0x1a35('0x19') };
    console.log(_0x17fed4.ZmTCH, _0x543cfd);
};
p[_0x1a35('0x9')][_0x1a35('0x1a')] = function (_0x16cb14, _0x513b82, _0x52ca04, _0x376223 = 0x1) {
    var _0x24d728 = {
        MPfWY: function (_0x59fdd0, _0x5f0265) {
            return _0x59fdd0 + _0x5f0265;
        },
        gWZnT: function (_0x35f063, _0x583cc8) {
            return _0x35f063 * _0x583cc8;
        },
        xLbtv: _0x1a35('0x1b'),
        QrvxM: _0x1a35('0x1c'),
        uLCQC: function (_0x3c5c4f, _0x5e4385) {
            return _0x3c5c4f < _0x5e4385;
        },
        thHZO: function (_0x3c3ecb, _0x224567) {
            return _0x3c3ecb + _0x224567;
        },
        flSlz: function (_0x2b0403, _0x252a09) {
            return _0x2b0403 === _0x252a09;
        },
        zcWHf: _0x1a35('0xd'),
        vAkwo: _0x1a35('0xe'),
        ArTrI: function (_0x4c0011, _0x10cd8d) {
            return _0x4c0011 < _0x10cd8d;
        },
        YflPV: function (_0xe6cbf3, _0x1852f3) {
            return _0xe6cbf3 > _0x1852f3;
        },
        GjLIo: function (_0x1ec8bf, _0x33b70e) {
            return _0x1ec8bf > _0x33b70e;
        },
        xVlMr: function (_0x297121, _0x13356a) {
            return _0x297121 + _0x13356a;
        }
    };
    const _0x4c844e = _0x24d728.MPfWY(0x1, Math.floor(_0x24d728.gWZnT(Math.random(), 0xa)));
    console.log(_0x24d728.xLbtv, _0x16cb14, _0x24d728.QrvxM, _0x4c844e);
    for (let _0xc1fa64 = 0x0; _0x24d728.uLCQC(_0xc1fa64, _0x4c844e); _0xc1fa64++) {
        const _0x45b575 = this.newNodeIndex++, _0x47a150 = _0x24d728.thHZO('N', _0x45b575), _0x25cfe8 = `N${ _0x45b575 }北京${ h[Math.floor(_0x24d728.gWZnT(Math.random(), h.length))] }第${ _0x47a150 }公司`, _0x246a6a = {
                id: _0x47a150,
                text: _0x25cfe8,
                alignItems: _0x24d728.flSlz(_0x513b82, _0x24d728.zcWHf) ? _0x24d728.vAkwo : _0x24d728.zcWHf
            };
        let _0x1138cd;
        _0x24d728.flSlz(_0x513b82, _0x24d728.zcWHf) ? _0x1138cd = {
            from: _0x47a150,
            to: _0x16cb14
        } : _0x1138cd = {
            from: _0x16cb14,
            to: _0x47a150
        }, _0x52ca04.nodes.push(_0x246a6a), _0x52ca04.lines.push(_0x1138cd), _0x24d728.ArTrI(_0x376223, 0x3) && _0x24d728.YflPV(Math.random(), 0.5) && _0x24d728.GjLIo(this.generateChildNodes(_0x47a150, _0x513b82, _0x52ca04, _0x24d728.xVlMr(_0x376223, 0x1)), 0x0) && (_0x246a6a.expandHolderPosition = _0x513b82);
    }
    return _0x4c844e;
};
m[_0x1a35('0x1d')] = !0x1;
m[_0x1a35('0x1e')] = !0x0;
m[_0x1a35('0x1f')] = !0x0;
m[_0x1a35('0x20')] = [{
        layoutName: _0x1a35('0x21'),
        from: _0x1a35('0xd'),
        min_per_width: _0x1a35('0x22'),
        max_per_width: _0x1a35('0x22'),
        min_per_height: '40',
        max_per_height: '50',
        enableGatherNodes: !0x1,
        levelDistance: _0x1a35('0x23')
    }];
m[_0x1a35('0x24')] = 0x1;
m[_0x1a35('0x25')] = 0x4;
m[_0x1a35('0x26')] = 'lr';
m[_0x1a35('0x27')] = 0x0;
m[_0x1a35('0x28')] = _0x1a35('0x29');
m[_0x1a35('0x2a')] = _0x1a35('0x2b');
var u = function () {
        var _0x367686 = {};
        _0x367686[_0x1a35('0x2c')] = function (_0x2e9769, _0x2c9333) {
            return _0x2e9769 === _0x2c9333;
        };
        _0x367686[_0x1a35('0x2d')] = _0x1a35('0x15');
        _0x367686[_0x1a35('0x2e')] = function (_0x43c471, _0xfe30ad) {
            return _0x43c471 === _0xfe30ad;
        };
        _0x367686[_0x1a35('0x2f')] = _0x1a35('0x13');
        _0x367686[_0x1a35('0x30')] = function (_0x493d51, _0x32447e, _0x582dfc, _0x3e37a7) {
            return _0x493d51(_0x32447e, _0x582dfc, _0x3e37a7);
        };
        _0x367686[_0x1a35('0x31')] = _0x1a35('0x32');
        _0x367686[_0x1a35('0x33')] = _0x1a35('0x34');
        _0x367686[_0x1a35('0x35')] = function (_0x19f3f0, _0x525668) {
            return _0x19f3f0 + _0x525668;
        };
        _0x367686[_0x1a35('0x36')] = function (_0xf0c19f, _0x4e2c49) {
            return _0xf0c19f + _0x4e2c49;
        };
        _0x367686[_0x1a35('0x37')] = _0x1a35('0xb');
        _0x367686[_0x1a35('0x38')] = function (_0x2c5849, _0x2a5585, _0x2c322f, _0x313081) {
            return _0x2c5849(_0x2a5585, _0x2c322f, _0x313081);
        };
        _0x367686[_0x1a35('0x39')] = _0x1a35('0x3a');
        _0x367686[_0x1a35('0x3b')] = function (_0x3e87e1, _0xae9621) {
            return _0x3e87e1 + _0xae9621;
        };
        _0x367686[_0x1a35('0x3c')] = function (_0x4ac1a7, _0x4e8f4b) {
            return _0x4ac1a7 === _0x4e8f4b;
        };
        _0x367686[_0x1a35('0x3d')] = _0x1a35('0x3e');
        _0x367686[_0x1a35('0x3f')] = _0x1a35('0x40');
        _0x367686[_0x1a35('0x41')] = _0x1a35('0x42');
        _0x367686[_0x1a35('0x43')] = _0x1a35('0x44');
        _0x367686[_0x1a35('0x45')] = _0x1a35('0x46');
        _0x367686[_0x1a35('0x47')] = _0x1a35('0x48');
        _0x367686[_0x1a35('0x49')] = _0x1a35('0x4a');
        _0x367686[_0x1a35('0x4b')] = function (_0x6ce50, _0x27d7ea) {
            return _0x6ce50 + _0x27d7ea;
        };
        _0x367686[_0x1a35('0x4c')] = function (_0x29d363, _0x4f83c1, _0x255fc1, _0x51d0c2) {
            return _0x29d363(_0x4f83c1, _0x255fc1, _0x51d0c2);
        };
        _0x367686[_0x1a35('0x4d')] = function (_0x14aef5, _0x2fb162, _0xbffff7) {
            return _0x14aef5(_0x2fb162, _0xbffff7);
        };
        _0x367686[_0x1a35('0x4e')] = _0x1a35('0x4f');
        _0x367686[_0x1a35('0x50')] = _0x1a35('0x51');
        _0x367686[_0x1a35('0x52')] = function (_0x28d3ba, _0x450a6b) {
            return _0x28d3ba + _0x450a6b;
        };
        _0x367686[_0x1a35('0x53')] = function (_0x339132, _0x2bcfb3, _0x5496f2) {
            return _0x339132(_0x2bcfb3, _0x5496f2);
        };
        _0x367686[_0x1a35('0x54')] = _0x1a35('0x55');
        _0x367686[_0x1a35('0x56')] = _0x1a35('0x57');
        _0x367686[_0x1a35('0x58')] = _0x1a35('0x59');
        _0x367686[_0x1a35('0x5a')] = function (_0x5ad354, _0x159b07, _0x5ad5d2, _0x4b75d1, _0x5e1fe9) {
            return _0x5ad354(_0x159b07, _0x5ad5d2, _0x4b75d1, _0x5e1fe9);
        };
        _0x367686[_0x1a35('0x5b')] = _0x1a35('0x5c');
        _0x367686[_0x1a35('0x5d')] = _0x1a35('0x5e');
        _0x367686[_0x1a35('0x5f')] = _0x1a35('0x60');
        _0x367686[_0x1a35('0x61')] = _0x1a35('0x62');
        _0x367686[_0x1a35('0x63')] = _0x1a35('0x64');
        _0x367686[_0x1a35('0x65')] = _0x1a35('0x66');
        _0x367686[_0x1a35('0x67')] = _0x1a35('0x68');
        _0x367686[_0x1a35('0x69')] = function (_0x28301e, _0x14e5ec, _0x1442ea) {
            return _0x28301e(_0x14e5ec, _0x1442ea);
        };
        _0x367686[_0x1a35('0x6a')] = _0x1a35('0x6b');
        _0x367686[_0x1a35('0x6c')] = _0x1a35('0x6d');
        _0x367686[_0x1a35('0x6e')] = _0x1a35('0x6f');
        var _0x263944 = this, _0x2f3737 = _0x263944[_0x1a35('0x70')], _0x3e498f = _0x263944[_0x1a35('0x71')]['_c'] || _0x2f3737;
        return _0x367686[_0x1a35('0x53')](_0x3e498f, _0x367686[_0x1a35('0x31')], [
            _0x367686[_0x1a35('0x4c')](_0x3e498f, _0x367686[_0x1a35('0x31')], {
                'staticStyle': {
                    'background-color': _0x367686[_0x1a35('0x49')],
                    'border-bottom': _0x367686[_0x1a35('0x54')],
                    'line-height': _0x367686[_0x1a35('0x56')]
                }
            }, [_0x263944['_v'](_0x367686[_0x1a35('0x58')])]),
            _0x367686[_0x1a35('0x5a')](_0x3e498f, _0x367686[_0x1a35('0x31')], {
                'directives': [{
                        'name': _0x367686[_0x1a35('0x5b')],
                        'rawName': _0x367686[_0x1a35('0x5d')],
                        'value': _0x263944[_0x1a35('0x60')],
                        'expression': _0x367686[_0x1a35('0x5f')]
                    }],
                'staticStyle': { 'height': _0x367686[_0x1a35('0x61')] },
                'attrs': {
                    'element-loading-text': _0x367686[_0x1a35('0x63')],
                    'element-loading-spinner': _0x367686[_0x1a35('0x65')],
                    'element-loading-background': _0x367686[_0x1a35('0x67')]
                }
            }, [_0x367686[_0x1a35('0x69')](_0x3e498f, _0x367686[_0x1a35('0x6a')], {
                    'ref': _0x367686[_0x1a35('0x6c')],
                    'attrs': {
                        'options': _0x263944[_0x1a35('0x72')],
                        'on-node-click': _0x263944[_0x1a35('0xf')],
                        'on-line-click': _0x263944[_0x1a35('0x18')]
                    },
                    'scopedSlots': _0x263944['_u']([{
                            'key': _0x367686[_0x1a35('0x6e')],
                            'fn': function (_0x1913f7) {
                                var _0x4c43e0 = _0x1913f7[_0x1a35('0x6f')];
                                return [_0x367686[_0x1a35('0x2c')](_0x4c43e0[_0x1a35('0x6')][_0x1a35('0x73')], _0x367686[_0x1a35('0x2d')]) || _0x367686[_0x1a35('0x2e')](_0x4c43e0[_0x1a35('0x6')][_0x1a35('0x73')], _0x367686[_0x1a35('0x2f')]) ? _0x367686[_0x1a35('0x30')](_0x3e498f, _0x367686[_0x1a35('0x31')], {
                                        'staticClass': _0x367686[_0x1a35('0x33')],
                                        'on': {
                                            'click': function (_0x1d28da) {
                                                return _0x263944[_0x1a35('0x16')](_0x4c43e0);
                                            }
                                        }
                                    }, [_0x263944['_v'](_0x367686[_0x1a35('0x35')](_0x367686[_0x1a35('0x36')]('\x20', _0x263944['_s'](_0x4c43e0[_0x1a35('0x74')])), '\x20'))]) : _0x367686[_0x1a35('0x2e')](_0x4c43e0[_0x1a35('0x6')][_0x1a35('0x73')], _0x367686[_0x1a35('0x37')]) ? _0x367686[_0x1a35('0x38')](_0x3e498f, _0x367686[_0x1a35('0x31')], { 'staticClass': _0x367686[_0x1a35('0x39')] }, [_0x263944['_v'](_0x367686[_0x1a35('0x3b')](_0x367686[_0x1a35('0x3b')]('\x20', _0x263944['_s'](_0x4c43e0[_0x1a35('0x74')])), '\x20'))]) : _0x367686[_0x1a35('0x3c')](_0x4c43e0[_0x1a35('0x6')][_0x1a35('0x73')], _0x367686[_0x1a35('0x3d')]) ? _0x367686[_0x1a35('0x38')](_0x3e498f, _0x367686[_0x1a35('0x31')], {
                                        'staticClass': _0x367686[_0x1a35('0x3f')],
                                        'staticStyle': {
                                            'width': _0x367686[_0x1a35('0x41')],
                                            'padding-left': _0x367686[_0x1a35('0x43')],
                                            'text-align': _0x367686[_0x1a35('0x45')],
                                            'background-color': _0x367686[_0x1a35('0x47')],
                                            'color': _0x367686[_0x1a35('0x49')]
                                        }
                                    }, [_0x263944['_v'](_0x367686[_0x1a35('0x3b')](_0x367686[_0x1a35('0x4b')]('\x20', _0x263944['_s'](_0x4c43e0[_0x1a35('0x74')])), '\x20'))]) : _0x367686[_0x1a35('0x4c')](_0x3e498f, _0x367686[_0x1a35('0x31')], { 'staticClass': _0x367686[_0x1a35('0x3f')] }, [
                                        _0x367686[_0x1a35('0x4d')](_0x3e498f, _0x367686[_0x1a35('0x4e')], { 'staticClass': _0x367686[_0x1a35('0x50')] }),
                                        _0x263944['_v'](_0x367686[_0x1a35('0x52')](_0x263944['_s'](_0x4c43e0[_0x1a35('0x74')]), '\x20'))
                                    ])];
                            }
                        }])
                })], 0x1)
        ]);
    }, _ = [];
const f = {};
var N = _0x3a9b70(p, u, _, !0x1, v, _0x1a35('0x75'), null, null);
function v(_0x5c1795) {
    for (let _0x50f4d9 in f)
        this[_0x50f4d9] = f[_0x50f4d9];
}
const C = function () {
    return N[_0x1a35('0x76')];
}();
export {
    C as default
};