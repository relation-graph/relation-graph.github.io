
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x1331 = [
    '$createElement',
    '_self',
    'graphOptions',
    'type',
    'text',
    '61e4fc30',
    'exports',
    '星月夜',
    '风云际会',
    '金凯宾斯基',
    'name',
    'Vip4ShowMoreNodesByPage',
    'components',
    'data',
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
    'kzdKl',
    'QPMUc',
    'yjmEh',
    'vUYjo',
    'qidyj',
    'eJdcP',
    'div',
    'qBmwA',
    'my-node\x20more-btn',
    'xSKRn',
    'knjFM',
    'ABtrF',
    'my-node\x20my-root',
    'qhtYn',
    'ixRvX',
    'FrZgC',
    'ApHzk',
    'level1',
    'plFcV',
    'my-node',
    'CkfyK',
    '100px',
    'wIfGY',
    '0px',
    'OzwYN',
    'center',
    'lrZBd',
    '#2c3e50',
    'WVYsX',
    '#ffffff',
    'nMnTr',
    'Slcll',
    'sTkyB',
    'span',
    'NEDIw',
    'c-circle-flag',
    'SBCKo',
    'BTLdl',
    'eRWhD',
    '#efefef\x20solid\x201px',
    'IMkaI',
    '30px',
    'zruNf',
    '\x20本页面使用的数据都是随机生成的，如果想要看看其他数据效果，可以重新进入此页面即可\x20',
    'jrwAD',
    'caqhm',
    'loading',
    'OqGQr',
    'v-loading',
    'OmTea',
    'g_loading',
    'WetjL',
    'calc(100vh\x20-\x2060px)',
    'mCAUU',
    '正在加载数据...',
    'ZpLzD',
    'el-icon-loading',
    'vENKs',
    'rgba(255,\x20255,\x20255,\x200.6)',
    'OvLcO',
    'RelationGraph',
    'sNUQq',
    'graphRef',
    'kVseb',
    'node'
];
(function (_0x2def98, _0x55eb9b) {
    var _0x11a624 = function (_0x4da077) {
        while (--_0x4da077) {
            _0x2def98['push'](_0x2def98['shift']());
        }
    };
    _0x11a624(++_0x55eb9b);
}(_0x1331, 0x1d7));
var _0x568b = function (_0xe38a74, _0x1f4e7f) {
    _0xe38a74 = _0xe38a74 - 0x0;
    var _0x3bd41b = _0x1331[_0xe38a74];
    return _0x3bd41b;
};
import { n as _0x315426 } from './index-c847f99a.js';
const m = {}, p = {}, h = [
        '',
        '天星',
        _0x568b('0x0'),
        _0x568b('0x1'),
        _0x568b('0x2')
    ];
p[_0x568b('0x3')] = _0x568b('0x4');
p[_0x568b('0x5')] = {};
p[_0x568b('0x6')] = function () {
    var _0x4696d6 = { eXHIB: _0x568b('0x7') };
    return {
        currentCase: _0x4696d6.eXHIB,
        isShowCodePanel: !0x1,
        g_loading: !0x1,
        newNodeIndex: 0x0,
        graphOptions: m
    };
};
p[_0x568b('0x8')] = function () {
    this.showGraph();
};
p[_0x568b('0x9')] = {};
p[_0x568b('0x9')][_0x568b('0xa')] = async function () {
    var _0x209190 = {
        XpOAW: _0x568b('0xb'),
        juHVP: _0x568b('0xc'),
        kVoYC: _0x568b('0xd'),
        jEZCH: _0x568b('0xe')
    };
    const _0x2104f2 = {
        rootId: _0x209190.XpOAW,
        nodes: [{
                id: _0x209190.XpOAW,
                text: _0x209190.juHVP,
                offset_x: 0x0,
                data: { type: _0x209190.XpOAW }
            }],
        lines: []
    };
    this.generateChildNodes(_0x209190.XpOAW, _0x209190.kVoYC, _0x2104f2), this.generateChildNodes(_0x209190.XpOAW, _0x209190.jEZCH, _0x2104f2), console.log(JSON.stringify(_0x2104f2));
    const _0x208c80 = this.$refs.graphRef.getInstance();
    await _0x208c80.setJsonData(_0x2104f2, !0x0), await _0x208c80.playShowEffect(), await this.hideMoreNodes(0x1);
};
p[_0x568b('0x9')][_0x568b('0xf')] = function (_0x46827c, _0x35efb3) {
    var _0x5a3129 = { ARHVH: _0x568b('0x10') };
    console.log(_0x5a3129.ARHVH, _0x46827c);
};
p[_0x568b('0x9')][_0x568b('0x11')] = async function (_0x5a4d6c) {
    var _0x3e29c0 = {
        nYssR: function (_0x38a754, _0x32879d) {
            return _0x38a754 > _0x32879d;
        },
        DhWEi: _0x568b('0x12'),
        WWbYd: _0x568b('0xd'),
        VGhlo: _0x568b('0x13'),
        tmUAV: _0x568b('0x14'),
        PaByr: _0x568b('0xe'),
        Faxcz: _0x568b('0x15')
    };
    const _0x39d10b = this.$refs.graphRef.getInstance(), _0x143bc6 = _0x39d10b.getNodes();
    let _0x260fba = [], _0x5f0380 = [];
    _0x143bc6.forEach(_0x190e2c => {
        if (!_0x190e2c.lot || !_0x190e2c.lot.childs)
            return;
        let _0x432539 = _0x190e2c.targetTo;
        _0x3e29c0.nYssR(_0x432539.length, 0x2) && (_0x432539.slice(0x2).forEach(_0x4a57de => {
            _0x4a57de.isHide = !0x0;
        }), _0x5f0380.push({
            id: `${ _0x190e2c.id }-to-more`,
            text: _0x3e29c0.DhWEi,
            alignItems: _0x3e29c0.WWbYd,
            data: { type: _0x3e29c0.VGhlo }
        }), _0x260fba.push({
            from: _0x190e2c.id,
            to: `${ _0x190e2c.id }-to-more`
        })), _0x432539 = _0x190e2c.targetFrom, _0x3e29c0.nYssR(_0x432539.length, 0x2) && (_0x432539.slice(0x2).forEach(_0x108792 => {
            _0x108792.isHide = !0x0;
        }), _0x5f0380.push({
            id: `${ _0x190e2c.id }-from-more`,
            text: _0x3e29c0.tmUAV,
            alignItems: _0x3e29c0.PaByr,
            data: { type: _0x3e29c0.Faxcz }
        }), _0x260fba.push({
            from: `${ _0x190e2c.id }-from-more`,
            to: _0x190e2c.id
        }));
    }), _0x39d10b.addNodes(_0x5f0380), _0x39d10b.addLines(_0x260fba), await _0x39d10b.doLayout(), await _0x39d10b.setZoom(0x50);
};
p[_0x568b('0x9')][_0x568b('0x16')] = function (_0x5817ee) {
    var _0x5d745d = {
        EUJAT: _0x568b('0x16'),
        HsDBk: function (_0x137e1e, _0x55e2ec) {
            return _0x137e1e === _0x55e2ec;
        },
        NiNxH: _0x568b('0x13'),
        zFYrL: _0x568b('0x17'),
        sAByj: _0x568b('0x15')
    };
    console.log(_0x5d745d.EUJAT);
    const _0x2438a3 = this.$refs.graphRef.getInstance();
    if (_0x5d745d.HsDBk(_0x5817ee.data.type, _0x5d745d.NiNxH)) {
        const _0x3d4b46 = _0x5817ee.lot.parent.targetTo;
        console.log(_0x5d745d.zFYrL, _0x3d4b46.length), _0x3d4b46.forEach(_0x1833ee => {
            _0x1833ee.isHide = !0x1;
        }), _0x2438a3.removeNodeById(_0x5817ee.id), _0x2438a3.doLayout();
    }
    if (_0x5d745d.HsDBk(_0x5817ee.data.type, _0x5d745d.sAByj)) {
        const _0x5e5301 = _0x5817ee.lot.parent.targetFrom;
        console.log(_0x5d745d.zFYrL, _0x5e5301.length), _0x5e5301.forEach(_0x591e12 => {
            _0x591e12.isHide = !0x1;
        }), _0x2438a3.removeNodeById(_0x5817ee.id), _0x2438a3.doLayout();
    }
};
p[_0x568b('0x9')][_0x568b('0x18')] = function (_0x4a464e, _0x24c787, _0x31f240) {
    var _0x26872b = { VziXH: _0x568b('0x19') };
    console.log(_0x26872b.VziXH, _0x4a464e);
};
p[_0x568b('0x9')][_0x568b('0x1a')] = function (_0x42bcf8, _0x2490b4, _0x18474f, _0x2bbc7c = 0x1) {
    var _0x6236ec = {
        tTTsd: function (_0x2dba3a, _0x345339) {
            return _0x2dba3a + _0x345339;
        },
        MJfuQ: function (_0xa022ab, _0x2363e8) {
            return _0xa022ab * _0x2363e8;
        },
        lOpIb: _0x568b('0x1b'),
        QQcbn: _0x568b('0x1c'),
        JfwHp: function (_0x3ee9ac, _0x43a33f) {
            return _0x3ee9ac < _0x43a33f;
        },
        WnBlw: function (_0x32e80c, _0x3f5e1b) {
            return _0x32e80c + _0x3f5e1b;
        },
        HbrvQ: function (_0x9b4e10, _0xc609a1) {
            return _0x9b4e10 === _0xc609a1;
        },
        rMFxM: _0x568b('0xd'),
        jsWxX: _0x568b('0xe'),
        JuMys: function (_0xf96aec, _0x49d4a1) {
            return _0xf96aec < _0x49d4a1;
        },
        SxAYF: function (_0x3a0704, _0xce4555) {
            return _0x3a0704 > _0xce4555;
        },
        tkeQM: function (_0x57d356, _0x3f816f) {
            return _0x57d356 + _0x3f816f;
        }
    };
    const _0x13c939 = _0x6236ec.tTTsd(0x1, Math.floor(_0x6236ec.MJfuQ(Math.random(), 0xa)));
    console.log(_0x6236ec.lOpIb, _0x42bcf8, _0x6236ec.QQcbn, _0x13c939);
    for (let _0x11b55f = 0x0; _0x6236ec.JfwHp(_0x11b55f, _0x13c939); _0x11b55f++) {
        const _0xbb45e3 = this.newNodeIndex++, _0x5dc7d2 = _0x6236ec.WnBlw('N', _0xbb45e3), _0x42c2ef = `N${ _0xbb45e3 }北京${ h[Math.floor(_0x6236ec.MJfuQ(Math.random(), h.length))] }第${ _0x5dc7d2 }公司`, _0x2cac6b = {
                id: _0x5dc7d2,
                text: _0x42c2ef,
                alignItems: _0x6236ec.HbrvQ(_0x2490b4, _0x6236ec.rMFxM) ? _0x6236ec.jsWxX : _0x6236ec.rMFxM
            };
        let _0x438356;
        _0x6236ec.HbrvQ(_0x2490b4, _0x6236ec.rMFxM) ? _0x438356 = {
            from: _0x5dc7d2,
            to: _0x42bcf8
        } : _0x438356 = {
            from: _0x42bcf8,
            to: _0x5dc7d2
        }, _0x18474f.nodes.push(_0x2cac6b), _0x18474f.lines.push(_0x438356), _0x6236ec.JuMys(_0x2bbc7c, 0x3) && _0x6236ec.SxAYF(Math.random(), 0.5) && _0x6236ec.SxAYF(this.generateChildNodes(_0x5dc7d2, _0x2490b4, _0x18474f, _0x6236ec.tkeQM(_0x2bbc7c, 0x1)), 0x0) && (_0x2cac6b.expandHolderPosition = _0x2490b4);
    }
    return _0x13c939;
};
m[_0x568b('0x1d')] = !0x1;
m[_0x568b('0x1e')] = !0x0;
m[_0x568b('0x1f')] = !0x0;
m[_0x568b('0x20')] = [{
        layoutName: _0x568b('0x21'),
        from: _0x568b('0xd'),
        min_per_width: _0x568b('0x22'),
        max_per_width: _0x568b('0x22'),
        min_per_height: '40',
        max_per_height: '50',
        enableGatherNodes: !0x1,
        levelDistance: _0x568b('0x23')
    }];
m[_0x568b('0x24')] = 0x1;
m[_0x568b('0x25')] = 0x4;
m[_0x568b('0x26')] = 'lr';
m[_0x568b('0x27')] = 0x0;
m[_0x568b('0x28')] = _0x568b('0x29');
m[_0x568b('0x2a')] = _0x568b('0x2b');
var u = function () {
        var _0x335168 = {};
        _0x335168[_0x568b('0x2c')] = function (_0x141e29, _0x18b3d7) {
            return _0x141e29 === _0x18b3d7;
        };
        _0x335168[_0x568b('0x2d')] = _0x568b('0x15');
        _0x335168[_0x568b('0x2e')] = function (_0x1b8a40, _0x5b5b4b) {
            return _0x1b8a40 === _0x5b5b4b;
        };
        _0x335168[_0x568b('0x2f')] = _0x568b('0x13');
        _0x335168[_0x568b('0x30')] = function (_0x259982, _0x1e5948, _0x29faab, _0x590b63) {
            return _0x259982(_0x1e5948, _0x29faab, _0x590b63);
        };
        _0x335168[_0x568b('0x31')] = _0x568b('0x32');
        _0x335168[_0x568b('0x33')] = _0x568b('0x34');
        _0x335168[_0x568b('0x35')] = function (_0x49f1a0, _0x2a340d) {
            return _0x49f1a0 + _0x2a340d;
        };
        _0x335168[_0x568b('0x36')] = _0x568b('0xb');
        _0x335168[_0x568b('0x37')] = _0x568b('0x38');
        _0x335168[_0x568b('0x39')] = function (_0x28669f, _0x19a989) {
            return _0x28669f + _0x19a989;
        };
        _0x335168[_0x568b('0x3a')] = function (_0x12136b, _0x1992f7) {
            return _0x12136b + _0x1992f7;
        };
        _0x335168[_0x568b('0x3b')] = function (_0x29837e, _0x4a9be7) {
            return _0x29837e === _0x4a9be7;
        };
        _0x335168[_0x568b('0x3c')] = _0x568b('0x3d');
        _0x335168[_0x568b('0x3e')] = _0x568b('0x3f');
        _0x335168[_0x568b('0x40')] = _0x568b('0x41');
        _0x335168[_0x568b('0x42')] = _0x568b('0x43');
        _0x335168[_0x568b('0x44')] = _0x568b('0x45');
        _0x335168[_0x568b('0x46')] = _0x568b('0x47');
        _0x335168[_0x568b('0x48')] = _0x568b('0x49');
        _0x335168[_0x568b('0x4a')] = function (_0x380052, _0x2bdcf2) {
            return _0x380052 + _0x2bdcf2;
        };
        _0x335168[_0x568b('0x4b')] = function (_0x1a0a3e, _0x2be7fd, _0x37be75) {
            return _0x1a0a3e(_0x2be7fd, _0x37be75);
        };
        _0x335168[_0x568b('0x4c')] = _0x568b('0x4d');
        _0x335168[_0x568b('0x4e')] = _0x568b('0x4f');
        _0x335168[_0x568b('0x50')] = function (_0x3a94ce, _0x10f1ab) {
            return _0x3a94ce + _0x10f1ab;
        };
        _0x335168[_0x568b('0x51')] = function (_0x2b567c, _0x2f2e7e, _0x1a5e00, _0x212e4f) {
            return _0x2b567c(_0x2f2e7e, _0x1a5e00, _0x212e4f);
        };
        _0x335168[_0x568b('0x52')] = _0x568b('0x53');
        _0x335168[_0x568b('0x54')] = _0x568b('0x55');
        _0x335168[_0x568b('0x56')] = _0x568b('0x57');
        _0x335168[_0x568b('0x58')] = function (_0xccec29, _0x3763e3, _0xcabe66, _0x411d4d, _0x5c462b) {
            return _0xccec29(_0x3763e3, _0xcabe66, _0x411d4d, _0x5c462b);
        };
        _0x335168[_0x568b('0x59')] = _0x568b('0x5a');
        _0x335168[_0x568b('0x5b')] = _0x568b('0x5c');
        _0x335168[_0x568b('0x5d')] = _0x568b('0x5e');
        _0x335168[_0x568b('0x5f')] = _0x568b('0x60');
        _0x335168[_0x568b('0x61')] = _0x568b('0x62');
        _0x335168[_0x568b('0x63')] = _0x568b('0x64');
        _0x335168[_0x568b('0x65')] = _0x568b('0x66');
        _0x335168[_0x568b('0x67')] = _0x568b('0x68');
        _0x335168[_0x568b('0x69')] = _0x568b('0x6a');
        _0x335168[_0x568b('0x6b')] = _0x568b('0x6c');
        var _0x2c5942 = this, _0x4e657e = _0x2c5942[_0x568b('0x6d')], _0x19f935 = _0x2c5942[_0x568b('0x6e')]['_c'] || _0x4e657e;
        return _0x335168[_0x568b('0x4b')](_0x19f935, _0x335168[_0x568b('0x31')], [
            _0x335168[_0x568b('0x51')](_0x19f935, _0x335168[_0x568b('0x31')], {
                'staticStyle': {
                    'background-color': _0x335168[_0x568b('0x48')],
                    'border-bottom': _0x335168[_0x568b('0x52')],
                    'line-height': _0x335168[_0x568b('0x54')]
                }
            }, [_0x2c5942['_v'](_0x335168[_0x568b('0x56')])]),
            _0x335168[_0x568b('0x58')](_0x19f935, _0x335168[_0x568b('0x31')], {
                'directives': [{
                        'name': _0x335168[_0x568b('0x59')],
                        'rawName': _0x335168[_0x568b('0x5b')],
                        'value': _0x2c5942[_0x568b('0x5e')],
                        'expression': _0x335168[_0x568b('0x5d')]
                    }],
                'staticStyle': { 'height': _0x335168[_0x568b('0x5f')] },
                'attrs': {
                    'element-loading-text': _0x335168[_0x568b('0x61')],
                    'element-loading-spinner': _0x335168[_0x568b('0x63')],
                    'element-loading-background': _0x335168[_0x568b('0x65')]
                }
            }, [_0x335168[_0x568b('0x4b')](_0x19f935, _0x335168[_0x568b('0x67')], {
                    'ref': _0x335168[_0x568b('0x69')],
                    'attrs': {
                        'options': _0x2c5942[_0x568b('0x6f')],
                        'on-node-click': _0x2c5942[_0x568b('0xf')],
                        'on-line-click': _0x2c5942[_0x568b('0x18')]
                    },
                    'scopedSlots': _0x2c5942['_u']([{
                            'key': _0x335168[_0x568b('0x6b')],
                            'fn': function (_0x32adaa) {
                                var _0x7214e2 = _0x32adaa[_0x568b('0x6c')];
                                return [_0x335168[_0x568b('0x2c')](_0x7214e2[_0x568b('0x6')][_0x568b('0x70')], _0x335168[_0x568b('0x2d')]) || _0x335168[_0x568b('0x2e')](_0x7214e2[_0x568b('0x6')][_0x568b('0x70')], _0x335168[_0x568b('0x2f')]) ? _0x335168[_0x568b('0x30')](_0x19f935, _0x335168[_0x568b('0x31')], {
                                        'staticClass': _0x335168[_0x568b('0x33')],
                                        'on': {
                                            'click': function (_0x1a8752) {
                                                return _0x2c5942[_0x568b('0x16')](_0x7214e2);
                                            }
                                        }
                                    }, [_0x2c5942['_v'](_0x335168[_0x568b('0x35')](_0x335168[_0x568b('0x35')]('\x20', _0x2c5942['_s'](_0x7214e2[_0x568b('0x71')])), '\x20'))]) : _0x335168[_0x568b('0x2e')](_0x7214e2[_0x568b('0x6')][_0x568b('0x70')], _0x335168[_0x568b('0x36')]) ? _0x335168[_0x568b('0x30')](_0x19f935, _0x335168[_0x568b('0x31')], { 'staticClass': _0x335168[_0x568b('0x37')] }, [_0x2c5942['_v'](_0x335168[_0x568b('0x39')](_0x335168[_0x568b('0x3a')]('\x20', _0x2c5942['_s'](_0x7214e2[_0x568b('0x71')])), '\x20'))]) : _0x335168[_0x568b('0x3b')](_0x7214e2[_0x568b('0x6')][_0x568b('0x70')], _0x335168[_0x568b('0x3c')]) ? _0x335168[_0x568b('0x30')](_0x19f935, _0x335168[_0x568b('0x31')], {
                                        'staticClass': _0x335168[_0x568b('0x3e')],
                                        'staticStyle': {
                                            'width': _0x335168[_0x568b('0x40')],
                                            'padding-left': _0x335168[_0x568b('0x42')],
                                            'text-align': _0x335168[_0x568b('0x44')],
                                            'background-color': _0x335168[_0x568b('0x46')],
                                            'color': _0x335168[_0x568b('0x48')]
                                        }
                                    }, [_0x2c5942['_v'](_0x335168[_0x568b('0x3a')](_0x335168[_0x568b('0x4a')]('\x20', _0x2c5942['_s'](_0x7214e2[_0x568b('0x71')])), '\x20'))]) : _0x335168[_0x568b('0x30')](_0x19f935, _0x335168[_0x568b('0x31')], { 'staticClass': _0x335168[_0x568b('0x3e')] }, [
                                        _0x335168[_0x568b('0x4b')](_0x19f935, _0x335168[_0x568b('0x4c')], { 'staticClass': _0x335168[_0x568b('0x4e')] }),
                                        _0x2c5942['_v'](_0x335168[_0x568b('0x50')](_0x2c5942['_s'](_0x7214e2[_0x568b('0x71')]), '\x20'))
                                    ])];
                            }
                        }])
                })], 0x1)
        ]);
    }, _ = [];
const f = {};
var N = _0x315426(p, u, _, !0x1, v, _0x568b('0x72'), null, null);
function v(_0x3a4705) {
    for (let _0x46dc12 in f)
        this[_0x46dc12] = f[_0x46dc12];
}
const C = function () {
    return N[_0x568b('0x73')];
}();
export {
    C as default
};