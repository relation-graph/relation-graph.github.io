
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x29bc = [
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
    'khwLt',
    'lojEP',
    'gJAog',
    'KuyDR',
    'hizgs',
    'bNMMe',
    'div',
    'eMCME',
    'my-node\x20more-btn',
    'pomJf',
    'ZoKEj',
    'zEYOT',
    'zWLPz',
    'my-node\x20my-root',
    'zpRSk',
    'aYsSh',
    'zaHot',
    'wQpju',
    'level1',
    'YrXPV',
    'my-node',
    'sruep',
    '100px',
    'WgqcX',
    '0px',
    'BOphT',
    'center',
    'JIQmw',
    '#2c3e50',
    'CRStL',
    '#ffffff',
    'jAPec',
    'kOSOJ',
    'span',
    'tdEao',
    'c-circle-flag',
    'ybOwC',
    'uhXij',
    '#efefef\x20solid\x201px',
    'CexVT',
    '30px',
    'LTueV',
    '\x20本页面使用的数据都是随机生成的，如果想要看看其他数据效果，可以重新进入此页面即可\x20',
    'yKErL',
    'NiaPq',
    'loading',
    'xAEXS',
    'v-loading',
    'fXGDS',
    'g_loading',
    'VZQei',
    'calc(100vh\x20-\x2060px)',
    'uXdWw',
    '正在加载数据...',
    'SMbpX',
    'el-icon-loading',
    'suaBj',
    'rgba(255,\x20255,\x20255,\x200.6)',
    'fFXfT',
    'RelationGraph',
    'cqemm',
    'graphRef',
    'AwHdC',
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
    '金凯宾斯基'
];
(function (_0x2fefec, _0x14e622) {
    var _0x53c720 = function (_0x3ef433) {
        while (--_0x3ef433) {
            _0x2fefec['push'](_0x2fefec['shift']());
        }
    };
    _0x53c720(++_0x14e622);
}(_0x29bc, 0x1c9));
var _0x1c61 = function (_0x22b90e, _0x14094c) {
    _0x22b90e = _0x22b90e - 0x0;
    var _0xff4b89 = _0x29bc[_0x22b90e];
    return _0xff4b89;
};
import { n as _0x23b447 } from './index-28740cc1.js';
const m = {}, p = {}, h = [
        '',
        '天星',
        _0x1c61('0x0'),
        _0x1c61('0x1'),
        _0x1c61('0x2')
    ];
p[_0x1c61('0x3')] = _0x1c61('0x4');
p[_0x1c61('0x5')] = {};
p[_0x1c61('0x6')] = function () {
    var _0x2be526 = { RdreH: _0x1c61('0x7') };
    return {
        currentCase: _0x2be526.RdreH,
        isShowCodePanel: !0x1,
        g_loading: !0x1,
        newNodeIndex: 0x0,
        graphOptions: m
    };
};
p[_0x1c61('0x8')] = function () {
    this.showGraph();
};
p[_0x1c61('0x9')] = {};
p[_0x1c61('0x9')][_0x1c61('0xa')] = async function () {
    var _0x57f0ad = {
        hBXNB: _0x1c61('0xb'),
        OMxlD: _0x1c61('0xc'),
        UJxsF: _0x1c61('0xd'),
        IHIik: _0x1c61('0xe')
    };
    const _0xea8bd1 = {
        rootId: _0x57f0ad.hBXNB,
        nodes: [{
                id: _0x57f0ad.hBXNB,
                text: _0x57f0ad.OMxlD,
                offset_x: 0x0,
                data: { type: _0x57f0ad.hBXNB }
            }],
        lines: []
    };
    this.generateChildNodes(_0x57f0ad.hBXNB, _0x57f0ad.UJxsF, _0xea8bd1), this.generateChildNodes(_0x57f0ad.hBXNB, _0x57f0ad.IHIik, _0xea8bd1), console.log(JSON.stringify(_0xea8bd1));
    const _0x253f74 = this.$refs.graphRef.getInstance();
    await _0x253f74.setJsonData(_0xea8bd1, !0x0), await _0x253f74.playShowEffect(), await this.hideMoreNodes(0x1);
};
p[_0x1c61('0x9')][_0x1c61('0xf')] = function (_0x20ae21, _0x566b90) {
    var _0x3b581c = { ZHEnv: _0x1c61('0x10') };
    console.log(_0x3b581c.ZHEnv, _0x20ae21);
};
p[_0x1c61('0x9')][_0x1c61('0x11')] = async function (_0x5c65fc) {
    var _0x1402c7 = {
        FxMbc: function (_0x41e446, _0xb0af1e) {
            return _0x41e446 > _0xb0af1e;
        },
        gJqTv: _0x1c61('0x12'),
        lKDDS: _0x1c61('0xd'),
        BVeVD: _0x1c61('0x13'),
        njuEC: _0x1c61('0x14'),
        RtahJ: _0x1c61('0xe'),
        KMpYw: _0x1c61('0x15')
    };
    const _0x451010 = this.$refs.graphRef.getInstance(), _0x5a7dad = _0x451010.getNodes();
    let _0x251753 = [], _0x446e6 = [];
    _0x5a7dad.forEach(_0x15a9ed => {
        if (!_0x15a9ed.lot || !_0x15a9ed.lot.childs)
            return;
        let _0x3db98f = _0x15a9ed.targetTo;
        _0x1402c7.FxMbc(_0x3db98f.length, 0x2) && (_0x3db98f.slice(0x2).forEach(_0x2b624e => {
            _0x2b624e.isHide = !0x0;
        }), _0x446e6.push({
            id: `${ _0x15a9ed.id }-to-more`,
            text: _0x1402c7.gJqTv,
            alignItems: _0x1402c7.lKDDS,
            data: { type: _0x1402c7.BVeVD }
        }), _0x251753.push({
            from: _0x15a9ed.id,
            to: `${ _0x15a9ed.id }-to-more`
        })), _0x3db98f = _0x15a9ed.targetFrom, _0x1402c7.FxMbc(_0x3db98f.length, 0x2) && (_0x3db98f.slice(0x2).forEach(_0x3942fd => {
            _0x3942fd.isHide = !0x0;
        }), _0x446e6.push({
            id: `${ _0x15a9ed.id }-from-more`,
            text: _0x1402c7.njuEC,
            alignItems: _0x1402c7.RtahJ,
            data: { type: _0x1402c7.KMpYw }
        }), _0x251753.push({
            from: `${ _0x15a9ed.id }-from-more`,
            to: _0x15a9ed.id
        }));
    }), _0x451010.addNodes(_0x446e6), _0x451010.addLines(_0x251753), await _0x451010.doLayout(), await _0x451010.setZoom(0x50);
};
p[_0x1c61('0x9')][_0x1c61('0x16')] = function (_0x382687) {
    var _0x4f854b = {
        pLIop: _0x1c61('0x16'),
        wThfp: function (_0x573df6, _0x19e4e6) {
            return _0x573df6 === _0x19e4e6;
        },
        sECDb: _0x1c61('0x13'),
        qwlUh: _0x1c61('0x17'),
        nPBKx: function (_0x2a07d0, _0x4d99a8) {
            return _0x2a07d0 === _0x4d99a8;
        },
        VsLyZ: _0x1c61('0x15')
    };
    console.log(_0x4f854b.pLIop);
    const _0x309fa9 = this.$refs.graphRef.getInstance();
    if (_0x4f854b.wThfp(_0x382687.data.type, _0x4f854b.sECDb)) {
        const _0x3ddbc7 = _0x382687.lot.parent.targetTo;
        console.log(_0x4f854b.qwlUh, _0x3ddbc7.length), _0x3ddbc7.forEach(_0x1fdb10 => {
            _0x1fdb10.isHide = !0x1;
        }), _0x309fa9.removeNodeById(_0x382687.id), _0x309fa9.doLayout();
    }
    if (_0x4f854b.nPBKx(_0x382687.data.type, _0x4f854b.VsLyZ)) {
        const _0x2c8d1d = _0x382687.lot.parent.targetFrom;
        console.log(_0x4f854b.qwlUh, _0x2c8d1d.length), _0x2c8d1d.forEach(_0x4b6c21 => {
            _0x4b6c21.isHide = !0x1;
        }), _0x309fa9.removeNodeById(_0x382687.id), _0x309fa9.doLayout();
    }
};
p[_0x1c61('0x9')][_0x1c61('0x18')] = function (_0x9484c8, _0x33bcb2, _0x2a293f) {
    var _0x5e85d0 = { vbdZK: _0x1c61('0x19') };
    console.log(_0x5e85d0.vbdZK, _0x9484c8);
};
p[_0x1c61('0x9')][_0x1c61('0x1a')] = function (_0x422f0a, _0x4cee8c, _0x8ad1c0, _0x2bf85d = 0x1) {
    var _0x15ba6b = {
        laNsX: function (_0x4eda8f, _0x272291) {
            return _0x4eda8f + _0x272291;
        },
        Bzcrk: function (_0x336b30, _0x3b7213) {
            return _0x336b30 * _0x3b7213;
        },
        lTrXW: _0x1c61('0x1b'),
        FbOiA: _0x1c61('0x1c'),
        KmZWn: function (_0x53ef46, _0x3b04fd) {
            return _0x53ef46 < _0x3b04fd;
        },
        BSENL: function (_0x1f50db, _0xcbc73c) {
            return _0x1f50db + _0xcbc73c;
        },
        lXDMx: function (_0x26931c, _0x5d83fd) {
            return _0x26931c === _0x5d83fd;
        },
        lJned: _0x1c61('0xd'),
        zqTKY: _0x1c61('0xe'),
        ZylxI: function (_0x3b4af9, _0x2ff2ab) {
            return _0x3b4af9 < _0x2ff2ab;
        },
        blNTq: function (_0x242f23, _0x57f673) {
            return _0x242f23 > _0x57f673;
        },
        qRBGa: function (_0x33b4b3, _0x33a26c) {
            return _0x33b4b3 > _0x33a26c;
        }
    };
    const _0xb8a476 = _0x15ba6b.laNsX(0x1, Math.floor(_0x15ba6b.Bzcrk(Math.random(), 0xa)));
    console.log(_0x15ba6b.lTrXW, _0x422f0a, _0x15ba6b.FbOiA, _0xb8a476);
    for (let _0x580dd6 = 0x0; _0x15ba6b.KmZWn(_0x580dd6, _0xb8a476); _0x580dd6++) {
        const _0x40eb5d = this.newNodeIndex++, _0x4f2594 = _0x15ba6b.BSENL('N', _0x40eb5d), _0x1b637c = `N${ _0x40eb5d }北京${ h[Math.floor(_0x15ba6b.Bzcrk(Math.random(), h.length))] }第${ _0x4f2594 }公司`, _0x5c57e1 = {
                id: _0x4f2594,
                text: _0x1b637c,
                alignItems: _0x15ba6b.lXDMx(_0x4cee8c, _0x15ba6b.lJned) ? _0x15ba6b.zqTKY : _0x15ba6b.lJned
            };
        let _0x41b90a;
        _0x15ba6b.lXDMx(_0x4cee8c, _0x15ba6b.lJned) ? _0x41b90a = {
            from: _0x4f2594,
            to: _0x422f0a
        } : _0x41b90a = {
            from: _0x422f0a,
            to: _0x4f2594
        }, _0x8ad1c0.nodes.push(_0x5c57e1), _0x8ad1c0.lines.push(_0x41b90a), _0x15ba6b.ZylxI(_0x2bf85d, 0x3) && _0x15ba6b.blNTq(Math.random(), 0.5) && _0x15ba6b.qRBGa(this.generateChildNodes(_0x4f2594, _0x4cee8c, _0x8ad1c0, _0x15ba6b.BSENL(_0x2bf85d, 0x1)), 0x0) && (_0x5c57e1.expandHolderPosition = _0x4cee8c);
    }
    return _0xb8a476;
};
m[_0x1c61('0x1d')] = !0x1;
m[_0x1c61('0x1e')] = !0x0;
m[_0x1c61('0x1f')] = !0x0;
m[_0x1c61('0x20')] = [{
        layoutName: _0x1c61('0x21'),
        from: _0x1c61('0xd'),
        min_per_width: _0x1c61('0x22'),
        max_per_width: _0x1c61('0x22'),
        min_per_height: '40',
        max_per_height: '50',
        enableGatherNodes: !0x1,
        levelDistance: _0x1c61('0x23')
    }];
m[_0x1c61('0x24')] = 0x1;
m[_0x1c61('0x25')] = 0x4;
m[_0x1c61('0x26')] = 'lr';
m[_0x1c61('0x27')] = 0x0;
m[_0x1c61('0x28')] = _0x1c61('0x29');
m[_0x1c61('0x2a')] = _0x1c61('0x2b');
var u = function () {
        var _0x16b578 = {};
        _0x16b578[_0x1c61('0x2c')] = function (_0x3766d7, _0xf49ed4) {
            return _0x3766d7 === _0xf49ed4;
        };
        _0x16b578[_0x1c61('0x2d')] = _0x1c61('0x15');
        _0x16b578[_0x1c61('0x2e')] = function (_0x29fdfe, _0x3ba897) {
            return _0x29fdfe === _0x3ba897;
        };
        _0x16b578[_0x1c61('0x2f')] = _0x1c61('0x13');
        _0x16b578[_0x1c61('0x30')] = function (_0x56e148, _0x1799d8, _0x53c7de, _0x3c9854) {
            return _0x56e148(_0x1799d8, _0x53c7de, _0x3c9854);
        };
        _0x16b578[_0x1c61('0x31')] = _0x1c61('0x32');
        _0x16b578[_0x1c61('0x33')] = _0x1c61('0x34');
        _0x16b578[_0x1c61('0x35')] = function (_0x5691ac, _0x119708) {
            return _0x5691ac + _0x119708;
        };
        _0x16b578[_0x1c61('0x36')] = function (_0x2977a7, _0x55a599) {
            return _0x2977a7 === _0x55a599;
        };
        _0x16b578[_0x1c61('0x37')] = _0x1c61('0xb');
        _0x16b578[_0x1c61('0x38')] = _0x1c61('0x39');
        _0x16b578[_0x1c61('0x3a')] = function (_0x1d0a78, _0x1e93f5) {
            return _0x1d0a78 + _0x1e93f5;
        };
        _0x16b578[_0x1c61('0x3b')] = function (_0x4e1b3, _0x228c10) {
            return _0x4e1b3 + _0x228c10;
        };
        _0x16b578[_0x1c61('0x3c')] = function (_0x2ce3be, _0x3de77e) {
            return _0x2ce3be === _0x3de77e;
        };
        _0x16b578[_0x1c61('0x3d')] = _0x1c61('0x3e');
        _0x16b578[_0x1c61('0x3f')] = _0x1c61('0x40');
        _0x16b578[_0x1c61('0x41')] = _0x1c61('0x42');
        _0x16b578[_0x1c61('0x43')] = _0x1c61('0x44');
        _0x16b578[_0x1c61('0x45')] = _0x1c61('0x46');
        _0x16b578[_0x1c61('0x47')] = _0x1c61('0x48');
        _0x16b578[_0x1c61('0x49')] = _0x1c61('0x4a');
        _0x16b578[_0x1c61('0x4b')] = function (_0x2675a5, _0x1b1757, _0x3c6082) {
            return _0x2675a5(_0x1b1757, _0x3c6082);
        };
        _0x16b578[_0x1c61('0x4c')] = _0x1c61('0x4d');
        _0x16b578[_0x1c61('0x4e')] = _0x1c61('0x4f');
        _0x16b578[_0x1c61('0x50')] = function (_0x5885c3, _0x2b8ad4, _0x387817, _0x2030cf) {
            return _0x5885c3(_0x2b8ad4, _0x387817, _0x2030cf);
        };
        _0x16b578[_0x1c61('0x51')] = _0x1c61('0x52');
        _0x16b578[_0x1c61('0x53')] = _0x1c61('0x54');
        _0x16b578[_0x1c61('0x55')] = _0x1c61('0x56');
        _0x16b578[_0x1c61('0x57')] = function (_0x20c130, _0x3e365c, _0x385e5d, _0x4e5dec, _0x3ede01) {
            return _0x20c130(_0x3e365c, _0x385e5d, _0x4e5dec, _0x3ede01);
        };
        _0x16b578[_0x1c61('0x58')] = _0x1c61('0x59');
        _0x16b578[_0x1c61('0x5a')] = _0x1c61('0x5b');
        _0x16b578[_0x1c61('0x5c')] = _0x1c61('0x5d');
        _0x16b578[_0x1c61('0x5e')] = _0x1c61('0x5f');
        _0x16b578[_0x1c61('0x60')] = _0x1c61('0x61');
        _0x16b578[_0x1c61('0x62')] = _0x1c61('0x63');
        _0x16b578[_0x1c61('0x64')] = _0x1c61('0x65');
        _0x16b578[_0x1c61('0x66')] = _0x1c61('0x67');
        _0x16b578[_0x1c61('0x68')] = _0x1c61('0x69');
        _0x16b578[_0x1c61('0x6a')] = _0x1c61('0x6b');
        var _0x19f800 = this, _0x20007e = _0x19f800[_0x1c61('0x6c')], _0x7d59a9 = _0x19f800[_0x1c61('0x6d')]['_c'] || _0x20007e;
        return _0x16b578[_0x1c61('0x4b')](_0x7d59a9, _0x16b578[_0x1c61('0x31')], [
            _0x16b578[_0x1c61('0x50')](_0x7d59a9, _0x16b578[_0x1c61('0x31')], {
                'staticStyle': {
                    'background-color': _0x16b578[_0x1c61('0x49')],
                    'border-bottom': _0x16b578[_0x1c61('0x51')],
                    'line-height': _0x16b578[_0x1c61('0x53')]
                }
            }, [_0x19f800['_v'](_0x16b578[_0x1c61('0x55')])]),
            _0x16b578[_0x1c61('0x57')](_0x7d59a9, _0x16b578[_0x1c61('0x31')], {
                'directives': [{
                        'name': _0x16b578[_0x1c61('0x58')],
                        'rawName': _0x16b578[_0x1c61('0x5a')],
                        'value': _0x19f800[_0x1c61('0x5d')],
                        'expression': _0x16b578[_0x1c61('0x5c')]
                    }],
                'staticStyle': { 'height': _0x16b578[_0x1c61('0x5e')] },
                'attrs': {
                    'element-loading-text': _0x16b578[_0x1c61('0x60')],
                    'element-loading-spinner': _0x16b578[_0x1c61('0x62')],
                    'element-loading-background': _0x16b578[_0x1c61('0x64')]
                }
            }, [_0x16b578[_0x1c61('0x4b')](_0x7d59a9, _0x16b578[_0x1c61('0x66')], {
                    'ref': _0x16b578[_0x1c61('0x68')],
                    'attrs': {
                        'options': _0x19f800[_0x1c61('0x6e')],
                        'on-node-click': _0x19f800[_0x1c61('0xf')],
                        'on-line-click': _0x19f800[_0x1c61('0x18')]
                    },
                    'scopedSlots': _0x19f800['_u']([{
                            'key': _0x16b578[_0x1c61('0x6a')],
                            'fn': function (_0x550cbf) {
                                var _0x26223f = _0x550cbf[_0x1c61('0x6b')];
                                return [_0x16b578[_0x1c61('0x2c')](_0x26223f[_0x1c61('0x6')][_0x1c61('0x6f')], _0x16b578[_0x1c61('0x2d')]) || _0x16b578[_0x1c61('0x2e')](_0x26223f[_0x1c61('0x6')][_0x1c61('0x6f')], _0x16b578[_0x1c61('0x2f')]) ? _0x16b578[_0x1c61('0x30')](_0x7d59a9, _0x16b578[_0x1c61('0x31')], {
                                        'staticClass': _0x16b578[_0x1c61('0x33')],
                                        'on': {
                                            'click': function (_0x89d2cb) {
                                                return _0x19f800[_0x1c61('0x16')](_0x26223f);
                                            }
                                        }
                                    }, [_0x19f800['_v'](_0x16b578[_0x1c61('0x35')](_0x16b578[_0x1c61('0x35')]('\x20', _0x19f800['_s'](_0x26223f[_0x1c61('0x70')])), '\x20'))]) : _0x16b578[_0x1c61('0x36')](_0x26223f[_0x1c61('0x6')][_0x1c61('0x6f')], _0x16b578[_0x1c61('0x37')]) ? _0x16b578[_0x1c61('0x30')](_0x7d59a9, _0x16b578[_0x1c61('0x31')], { 'staticClass': _0x16b578[_0x1c61('0x38')] }, [_0x19f800['_v'](_0x16b578[_0x1c61('0x3a')](_0x16b578[_0x1c61('0x3b')]('\x20', _0x19f800['_s'](_0x26223f[_0x1c61('0x70')])), '\x20'))]) : _0x16b578[_0x1c61('0x3c')](_0x26223f[_0x1c61('0x6')][_0x1c61('0x6f')], _0x16b578[_0x1c61('0x3d')]) ? _0x16b578[_0x1c61('0x30')](_0x7d59a9, _0x16b578[_0x1c61('0x31')], {
                                        'staticClass': _0x16b578[_0x1c61('0x3f')],
                                        'staticStyle': {
                                            'width': _0x16b578[_0x1c61('0x41')],
                                            'padding-left': _0x16b578[_0x1c61('0x43')],
                                            'text-align': _0x16b578[_0x1c61('0x45')],
                                            'background-color': _0x16b578[_0x1c61('0x47')],
                                            'color': _0x16b578[_0x1c61('0x49')]
                                        }
                                    }, [_0x19f800['_v'](_0x16b578[_0x1c61('0x3b')](_0x16b578[_0x1c61('0x3b')]('\x20', _0x19f800['_s'](_0x26223f[_0x1c61('0x70')])), '\x20'))]) : _0x16b578[_0x1c61('0x30')](_0x7d59a9, _0x16b578[_0x1c61('0x31')], { 'staticClass': _0x16b578[_0x1c61('0x3f')] }, [
                                        _0x16b578[_0x1c61('0x4b')](_0x7d59a9, _0x16b578[_0x1c61('0x4c')], { 'staticClass': _0x16b578[_0x1c61('0x4e')] }),
                                        _0x19f800['_v'](_0x16b578[_0x1c61('0x3b')](_0x19f800['_s'](_0x26223f[_0x1c61('0x70')]), '\x20'))
                                    ])];
                            }
                        }])
                })], 0x1)
        ]);
    }, _ = [];
const f = {};
var N = _0x23b447(p, u, _, !0x1, v, _0x1c61('0x71'), null, null);
function v(_0x3cf607) {
    for (let _0x2460f6 in f)
        this[_0x2460f6] = f[_0x2460f6];
}
const C = function () {
    return N[_0x1c61('0x72')];
}();
export {
    C as default
};