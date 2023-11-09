
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x148d = [
    'YJOIB',
    'level1',
    'hSWPv',
    'yILUn',
    'my-node',
    'WVVev',
    '100px',
    'oKUIw',
    '0px',
    'HvdTk',
    'center',
    'lnbaw',
    '#2c3e50',
    'rzdMe',
    '#ffffff',
    'zLNaw',
    'fEIHY',
    'SHmcV',
    'span',
    'QOeku',
    'c-circle-flag',
    'egMjk',
    'LLEwK',
    '#efefef\x20solid\x201px',
    'xZZLr',
    '30px',
    'Zevew',
    '\x20本页面使用的数据都是随机生成的，如果想要看看其他数据效果，可以重新进入此页面即可\x20',
    'XBZSr',
    'rMiDq',
    'loading',
    'UoCXB',
    'v-loading',
    'oaDkC',
    'g_loading',
    'ScSSL',
    'calc(100vh\x20-\x2060px)',
    'MCxRF',
    '正在加载数据...',
    'xYxtg',
    'el-icon-loading',
    'IsDgI',
    'rgba(255,\x20255,\x20255,\x200.6)',
    'IAqvO',
    'qALYG',
    'RelationGraph',
    'HUOcd',
    'graphRef',
    'SCdiu',
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
    'bahkV',
    'QiVVi',
    'tGzfr',
    'PjnQm',
    'cmvTu',
    'div',
    'fbEML',
    'my-node\x20more-btn',
    'KKRcx',
    'ovGpv',
    'Licvy',
    'lAftA',
    'EaNOb',
    'my-node\x20my-root'
];
(function (_0x225049, _0x3385aa) {
    var _0xead29b = function (_0x5dc087) {
        while (--_0x5dc087) {
            _0x225049['push'](_0x225049['shift']());
        }
    };
    _0xead29b(++_0x3385aa);
}(_0x148d, 0x192));
var _0x26bb = function (_0x506b79, _0x5775a0) {
    _0x506b79 = _0x506b79 - 0x0;
    var _0x4516ee = _0x148d[_0x506b79];
    return _0x4516ee;
};
import { n as _0x23c5b9 } from './index-a76d1c04.js';
const m = {}, p = {}, h = [
        '',
        '天星',
        _0x26bb('0x0'),
        _0x26bb('0x1'),
        _0x26bb('0x2')
    ];
p[_0x26bb('0x3')] = _0x26bb('0x4');
p[_0x26bb('0x5')] = {};
p[_0x26bb('0x6')] = function () {
    var _0x280f0e = { BPqYg: _0x26bb('0x7') };
    return {
        currentCase: _0x280f0e.BPqYg,
        isShowCodePanel: !0x1,
        g_loading: !0x1,
        newNodeIndex: 0x0,
        graphOptions: m
    };
};
p[_0x26bb('0x8')] = function () {
    this.showGraph();
};
p[_0x26bb('0x9')] = {};
p[_0x26bb('0x9')][_0x26bb('0xa')] = async function () {
    var _0x3dd9ab = {
        pKEKL: _0x26bb('0xb'),
        BRQhp: _0x26bb('0xc'),
        MAdfg: _0x26bb('0xd'),
        PHCFy: _0x26bb('0xe')
    };
    const _0x356c28 = {
        rootId: _0x3dd9ab.pKEKL,
        nodes: [{
                id: _0x3dd9ab.pKEKL,
                text: _0x3dd9ab.BRQhp,
                offset_x: 0x0,
                data: { type: _0x3dd9ab.pKEKL }
            }],
        lines: []
    };
    this.generateChildNodes(_0x3dd9ab.pKEKL, _0x3dd9ab.MAdfg, _0x356c28), this.generateChildNodes(_0x3dd9ab.pKEKL, _0x3dd9ab.PHCFy, _0x356c28), console.log(JSON.stringify(_0x356c28));
    const _0x3a5451 = this.$refs.graphRef.getInstance();
    await _0x3a5451.setJsonData(_0x356c28, !0x0), await _0x3a5451.playShowEffect(), await this.hideMoreNodes(0x1);
};
p[_0x26bb('0x9')][_0x26bb('0xf')] = function (_0x56c9a9, _0x4ea910) {
    var _0x25515d = { EiiJR: _0x26bb('0x10') };
    console.log(_0x25515d.EiiJR, _0x56c9a9);
};
p[_0x26bb('0x9')][_0x26bb('0x11')] = async function (_0x37b71b) {
    var _0x210131 = {
        IxBzx: function (_0x426d63, _0x5f507c) {
            return _0x426d63 > _0x5f507c;
        },
        axDJk: _0x26bb('0x12'),
        pVHJt: _0x26bb('0xd'),
        CBXBE: _0x26bb('0x13'),
        ksKQe: _0x26bb('0x14'),
        cEdyr: _0x26bb('0xe'),
        LgZFH: _0x26bb('0x15')
    };
    const _0x23b0a8 = this.$refs.graphRef.getInstance(), _0x313cf8 = _0x23b0a8.getNodes();
    let _0x35fbf7 = [], _0x4f036d = [];
    _0x313cf8.forEach(_0xc229bc => {
        if (!_0xc229bc.lot || !_0xc229bc.lot.childs)
            return;
        let _0x15aa79 = _0xc229bc.targetTo;
        _0x210131.IxBzx(_0x15aa79.length, 0x2) && (_0x15aa79.slice(0x2).forEach(_0x1fa9aa => {
            _0x1fa9aa.isHide = !0x0;
        }), _0x4f036d.push({
            id: `${ _0xc229bc.id }-to-more`,
            text: _0x210131.axDJk,
            alignItems: _0x210131.pVHJt,
            data: { type: _0x210131.CBXBE }
        }), _0x35fbf7.push({
            from: _0xc229bc.id,
            to: `${ _0xc229bc.id }-to-more`
        })), _0x15aa79 = _0xc229bc.targetFrom, _0x210131.IxBzx(_0x15aa79.length, 0x2) && (_0x15aa79.slice(0x2).forEach(_0x1beaa9 => {
            _0x1beaa9.isHide = !0x0;
        }), _0x4f036d.push({
            id: `${ _0xc229bc.id }-from-more`,
            text: _0x210131.ksKQe,
            alignItems: _0x210131.cEdyr,
            data: { type: _0x210131.LgZFH }
        }), _0x35fbf7.push({
            from: `${ _0xc229bc.id }-from-more`,
            to: _0xc229bc.id
        }));
    }), _0x23b0a8.addNodes(_0x4f036d), _0x23b0a8.addLines(_0x35fbf7), await _0x23b0a8.doLayout(), await _0x23b0a8.setZoom(0x50);
};
p[_0x26bb('0x9')][_0x26bb('0x16')] = function (_0xfa438d) {
    var _0x16dfeb = {
        bGpms: _0x26bb('0x16'),
        QFJnv: function (_0x57e3dd, _0x24aad0) {
            return _0x57e3dd === _0x24aad0;
        },
        oellH: _0x26bb('0x13'),
        uFkhb: _0x26bb('0x17'),
        NQWQz: _0x26bb('0x15')
    };
    console.log(_0x16dfeb.bGpms);
    const _0x28b2bb = this.$refs.graphRef.getInstance();
    if (_0x16dfeb.QFJnv(_0xfa438d.data.type, _0x16dfeb.oellH)) {
        const _0x30fa1b = _0xfa438d.lot.parent.targetTo;
        console.log(_0x16dfeb.uFkhb, _0x30fa1b.length), _0x30fa1b.forEach(_0x6de900 => {
            _0x6de900.isHide = !0x1;
        }), _0x28b2bb.removeNodeById(_0xfa438d.id), _0x28b2bb.doLayout();
    }
    if (_0x16dfeb.QFJnv(_0xfa438d.data.type, _0x16dfeb.NQWQz)) {
        const _0xc46d61 = _0xfa438d.lot.parent.targetFrom;
        console.log(_0x16dfeb.uFkhb, _0xc46d61.length), _0xc46d61.forEach(_0x1777a7 => {
            _0x1777a7.isHide = !0x1;
        }), _0x28b2bb.removeNodeById(_0xfa438d.id), _0x28b2bb.doLayout();
    }
};
p[_0x26bb('0x9')][_0x26bb('0x18')] = function (_0x5980d4, _0x5b16ba, _0x4ea2b8) {
    var _0x56254f = { tJpEN: _0x26bb('0x19') };
    console.log(_0x56254f.tJpEN, _0x5980d4);
};
p[_0x26bb('0x9')][_0x26bb('0x1a')] = function (_0x1ee565, _0x47ec1c, _0x549101, _0x26f3a7 = 0x1) {
    var _0x11ca13 = {
        XLmRJ: function (_0x24d726, _0x410d50) {
            return _0x24d726 + _0x410d50;
        },
        Xkgbu: function (_0xb0ed1, _0x36e933) {
            return _0xb0ed1 * _0x36e933;
        },
        eyAYo: _0x26bb('0x1b'),
        IUzlp: _0x26bb('0x1c'),
        YOQJL: function (_0x2c5d67, _0x921133) {
            return _0x2c5d67 < _0x921133;
        },
        MkdTL: function (_0x3a57fd, _0x5ccc33) {
            return _0x3a57fd + _0x5ccc33;
        },
        GkXRb: function (_0x55c60a, _0x3fff30) {
            return _0x55c60a === _0x3fff30;
        },
        lMEJK: _0x26bb('0xd'),
        lcFJp: _0x26bb('0xe'),
        MFSUW: function (_0x1cae24, _0x3ecdc8) {
            return _0x1cae24 === _0x3ecdc8;
        },
        iEjgJ: function (_0x15e77a, _0x2f6a5a) {
            return _0x15e77a < _0x2f6a5a;
        },
        KfzHc: function (_0x5b5d1f, _0x36e270) {
            return _0x5b5d1f > _0x36e270;
        },
        ZCVaz: function (_0x456676, _0x1a671e) {
            return _0x456676 > _0x1a671e;
        }
    };
    const _0x5324b8 = _0x11ca13.XLmRJ(0x1, Math.floor(_0x11ca13.Xkgbu(Math.random(), 0xa)));
    console.log(_0x11ca13.eyAYo, _0x1ee565, _0x11ca13.IUzlp, _0x5324b8);
    for (let _0x298cf3 = 0x0; _0x11ca13.YOQJL(_0x298cf3, _0x5324b8); _0x298cf3++) {
        const _0x3acd15 = this.newNodeIndex++, _0x4f9ebe = _0x11ca13.MkdTL('N', _0x3acd15), _0x560ae0 = `N${ _0x3acd15 }北京${ h[Math.floor(_0x11ca13.Xkgbu(Math.random(), h.length))] }第${ _0x4f9ebe }公司`, _0x1bd540 = {
                id: _0x4f9ebe,
                text: _0x560ae0,
                alignItems: _0x11ca13.GkXRb(_0x47ec1c, _0x11ca13.lMEJK) ? _0x11ca13.lcFJp : _0x11ca13.lMEJK
            };
        let _0xb42075;
        _0x11ca13.MFSUW(_0x47ec1c, _0x11ca13.lMEJK) ? _0xb42075 = {
            from: _0x4f9ebe,
            to: _0x1ee565
        } : _0xb42075 = {
            from: _0x1ee565,
            to: _0x4f9ebe
        }, _0x549101.nodes.push(_0x1bd540), _0x549101.lines.push(_0xb42075), _0x11ca13.iEjgJ(_0x26f3a7, 0x3) && _0x11ca13.KfzHc(Math.random(), 0.5) && _0x11ca13.ZCVaz(this.generateChildNodes(_0x4f9ebe, _0x47ec1c, _0x549101, _0x11ca13.MkdTL(_0x26f3a7, 0x1)), 0x0) && (_0x1bd540.expandHolderPosition = _0x47ec1c);
    }
    return _0x5324b8;
};
m[_0x26bb('0x1d')] = !0x1;
m[_0x26bb('0x1e')] = !0x0;
m[_0x26bb('0x1f')] = !0x0;
m[_0x26bb('0x20')] = [{
        layoutName: _0x26bb('0x21'),
        from: _0x26bb('0xd'),
        min_per_width: _0x26bb('0x22'),
        max_per_width: _0x26bb('0x22'),
        min_per_height: '40',
        max_per_height: '50',
        enableGatherNodes: !0x1,
        levelDistance: _0x26bb('0x23')
    }];
m[_0x26bb('0x24')] = 0x1;
m[_0x26bb('0x25')] = 0x4;
m[_0x26bb('0x26')] = 'lr';
m[_0x26bb('0x27')] = 0x0;
m[_0x26bb('0x28')] = _0x26bb('0x29');
m[_0x26bb('0x2a')] = _0x26bb('0x2b');
var u = function () {
        var _0x100330 = {};
        _0x100330[_0x26bb('0x2c')] = function (_0x3a7bff, _0x918d27) {
            return _0x3a7bff === _0x918d27;
        };
        _0x100330[_0x26bb('0x2d')] = _0x26bb('0x15');
        _0x100330[_0x26bb('0x2e')] = _0x26bb('0x13');
        _0x100330[_0x26bb('0x2f')] = function (_0x8d6a63, _0x221339, _0x308cbd, _0x5bbff1) {
            return _0x8d6a63(_0x221339, _0x308cbd, _0x5bbff1);
        };
        _0x100330[_0x26bb('0x30')] = _0x26bb('0x31');
        _0x100330[_0x26bb('0x32')] = _0x26bb('0x33');
        _0x100330[_0x26bb('0x34')] = function (_0x7489fc, _0x2d3145) {
            return _0x7489fc + _0x2d3145;
        };
        _0x100330[_0x26bb('0x35')] = function (_0x56632b, _0x1e8fa4) {
            return _0x56632b + _0x1e8fa4;
        };
        _0x100330[_0x26bb('0x36')] = _0x26bb('0xb');
        _0x100330[_0x26bb('0x37')] = function (_0x4eae1e, _0x1a8ddd, _0x31c9e8, _0x280306) {
            return _0x4eae1e(_0x1a8ddd, _0x31c9e8, _0x280306);
        };
        _0x100330[_0x26bb('0x38')] = _0x26bb('0x39');
        _0x100330[_0x26bb('0x3a')] = _0x26bb('0x3b');
        _0x100330[_0x26bb('0x3c')] = function (_0x495f79, _0x4d512a, _0x28051a, _0x4cad64) {
            return _0x495f79(_0x4d512a, _0x28051a, _0x4cad64);
        };
        _0x100330[_0x26bb('0x3d')] = _0x26bb('0x3e');
        _0x100330[_0x26bb('0x3f')] = _0x26bb('0x40');
        _0x100330[_0x26bb('0x41')] = _0x26bb('0x42');
        _0x100330[_0x26bb('0x43')] = _0x26bb('0x44');
        _0x100330[_0x26bb('0x45')] = _0x26bb('0x46');
        _0x100330[_0x26bb('0x47')] = _0x26bb('0x48');
        _0x100330[_0x26bb('0x49')] = function (_0x35af1f, _0x4af923, _0x4b845a, _0x7a934c) {
            return _0x35af1f(_0x4af923, _0x4b845a, _0x7a934c);
        };
        _0x100330[_0x26bb('0x4a')] = function (_0xc13c16, _0x1de141, _0x1133ab) {
            return _0xc13c16(_0x1de141, _0x1133ab);
        };
        _0x100330[_0x26bb('0x4b')] = _0x26bb('0x4c');
        _0x100330[_0x26bb('0x4d')] = _0x26bb('0x4e');
        _0x100330[_0x26bb('0x4f')] = function (_0x3345da, _0xd197c1, _0x422899, _0x1fe25a) {
            return _0x3345da(_0xd197c1, _0x422899, _0x1fe25a);
        };
        _0x100330[_0x26bb('0x50')] = _0x26bb('0x51');
        _0x100330[_0x26bb('0x52')] = _0x26bb('0x53');
        _0x100330[_0x26bb('0x54')] = _0x26bb('0x55');
        _0x100330[_0x26bb('0x56')] = function (_0x5b7881, _0x2214c, _0x39ba72, _0xde2bac, _0x4639ae) {
            return _0x5b7881(_0x2214c, _0x39ba72, _0xde2bac, _0x4639ae);
        };
        _0x100330[_0x26bb('0x57')] = _0x26bb('0x58');
        _0x100330[_0x26bb('0x59')] = _0x26bb('0x5a');
        _0x100330[_0x26bb('0x5b')] = _0x26bb('0x5c');
        _0x100330[_0x26bb('0x5d')] = _0x26bb('0x5e');
        _0x100330[_0x26bb('0x5f')] = _0x26bb('0x60');
        _0x100330[_0x26bb('0x61')] = _0x26bb('0x62');
        _0x100330[_0x26bb('0x63')] = _0x26bb('0x64');
        _0x100330[_0x26bb('0x65')] = function (_0x47f68a, _0x4b7efb, _0xbf8c2e) {
            return _0x47f68a(_0x4b7efb, _0xbf8c2e);
        };
        _0x100330[_0x26bb('0x66')] = _0x26bb('0x67');
        _0x100330[_0x26bb('0x68')] = _0x26bb('0x69');
        _0x100330[_0x26bb('0x6a')] = _0x26bb('0x6b');
        var _0x108569 = this, _0x3679a3 = _0x108569[_0x26bb('0x6c')], _0x3f383c = _0x108569[_0x26bb('0x6d')]['_c'] || _0x3679a3;
        return _0x100330[_0x26bb('0x4a')](_0x3f383c, _0x100330[_0x26bb('0x30')], [
            _0x100330[_0x26bb('0x4f')](_0x3f383c, _0x100330[_0x26bb('0x30')], {
                'staticStyle': {
                    'background-color': _0x100330[_0x26bb('0x47')],
                    'border-bottom': _0x100330[_0x26bb('0x50')],
                    'line-height': _0x100330[_0x26bb('0x52')]
                }
            }, [_0x108569['_v'](_0x100330[_0x26bb('0x54')])]),
            _0x100330[_0x26bb('0x56')](_0x3f383c, _0x100330[_0x26bb('0x30')], {
                'directives': [{
                        'name': _0x100330[_0x26bb('0x57')],
                        'rawName': _0x100330[_0x26bb('0x59')],
                        'value': _0x108569[_0x26bb('0x5c')],
                        'expression': _0x100330[_0x26bb('0x5b')]
                    }],
                'staticStyle': { 'height': _0x100330[_0x26bb('0x5d')] },
                'attrs': {
                    'element-loading-text': _0x100330[_0x26bb('0x5f')],
                    'element-loading-spinner': _0x100330[_0x26bb('0x61')],
                    'element-loading-background': _0x100330[_0x26bb('0x63')]
                }
            }, [_0x100330[_0x26bb('0x65')](_0x3f383c, _0x100330[_0x26bb('0x66')], {
                    'ref': _0x100330[_0x26bb('0x68')],
                    'attrs': {
                        'options': _0x108569[_0x26bb('0x6e')],
                        'on-node-click': _0x108569[_0x26bb('0xf')],
                        'on-line-click': _0x108569[_0x26bb('0x18')]
                    },
                    'scopedSlots': _0x108569['_u']([{
                            'key': _0x100330[_0x26bb('0x6a')],
                            'fn': function (_0x4db0b3) {
                                var _0x22b18a = _0x4db0b3[_0x26bb('0x6b')];
                                return [_0x100330[_0x26bb('0x2c')](_0x22b18a[_0x26bb('0x6')][_0x26bb('0x6f')], _0x100330[_0x26bb('0x2d')]) || _0x100330[_0x26bb('0x2c')](_0x22b18a[_0x26bb('0x6')][_0x26bb('0x6f')], _0x100330[_0x26bb('0x2e')]) ? _0x100330[_0x26bb('0x2f')](_0x3f383c, _0x100330[_0x26bb('0x30')], {
                                        'staticClass': _0x100330[_0x26bb('0x32')],
                                        'on': {
                                            'click': function (_0x1cf1ee) {
                                                return _0x108569[_0x26bb('0x16')](_0x22b18a);
                                            }
                                        }
                                    }, [_0x108569['_v'](_0x100330[_0x26bb('0x34')](_0x100330[_0x26bb('0x35')]('\x20', _0x108569['_s'](_0x22b18a[_0x26bb('0x70')])), '\x20'))]) : _0x100330[_0x26bb('0x2c')](_0x22b18a[_0x26bb('0x6')][_0x26bb('0x6f')], _0x100330[_0x26bb('0x36')]) ? _0x100330[_0x26bb('0x37')](_0x3f383c, _0x100330[_0x26bb('0x30')], { 'staticClass': _0x100330[_0x26bb('0x38')] }, [_0x108569['_v'](_0x100330[_0x26bb('0x35')](_0x100330[_0x26bb('0x35')]('\x20', _0x108569['_s'](_0x22b18a[_0x26bb('0x70')])), '\x20'))]) : _0x100330[_0x26bb('0x2c')](_0x22b18a[_0x26bb('0x6')][_0x26bb('0x6f')], _0x100330[_0x26bb('0x3a')]) ? _0x100330[_0x26bb('0x3c')](_0x3f383c, _0x100330[_0x26bb('0x30')], {
                                        'staticClass': _0x100330[_0x26bb('0x3d')],
                                        'staticStyle': {
                                            'width': _0x100330[_0x26bb('0x3f')],
                                            'padding-left': _0x100330[_0x26bb('0x41')],
                                            'text-align': _0x100330[_0x26bb('0x43')],
                                            'background-color': _0x100330[_0x26bb('0x45')],
                                            'color': _0x100330[_0x26bb('0x47')]
                                        }
                                    }, [_0x108569['_v'](_0x100330[_0x26bb('0x35')](_0x100330[_0x26bb('0x35')]('\x20', _0x108569['_s'](_0x22b18a[_0x26bb('0x70')])), '\x20'))]) : _0x100330[_0x26bb('0x49')](_0x3f383c, _0x100330[_0x26bb('0x30')], { 'staticClass': _0x100330[_0x26bb('0x3d')] }, [
                                        _0x100330[_0x26bb('0x4a')](_0x3f383c, _0x100330[_0x26bb('0x4b')], { 'staticClass': _0x100330[_0x26bb('0x4d')] }),
                                        _0x108569['_v'](_0x100330[_0x26bb('0x35')](_0x108569['_s'](_0x22b18a[_0x26bb('0x70')]), '\x20'))
                                    ])];
                            }
                        }])
                })], 0x1)
        ]);
    }, _ = [];
const f = {};
var N = _0x23c5b9(p, u, _, !0x1, v, _0x26bb('0x71'), null, null);
function v(_0x2faf12) {
    for (let _0x54a87c in f)
        this[_0x54a87c] = f[_0x54a87c];
}
const C = function () {
    return N[_0x26bb('0x72')];
}();
export {
    C as default
};