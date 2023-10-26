
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x56b9 = [
    'PWwvy',
    'jbQyK',
    'loading',
    'UiHSW',
    'v-loading',
    'rqOtM',
    'g_loading',
    'FtmQH',
    'calc(100vh\x20-\x2060px)',
    'lhaQs',
    '正在加载数据...',
    'QCgwa',
    'el-icon-loading',
    'jnBER',
    'rgba(255,\x20255,\x20255,\x200.6)',
    'VnNUL',
    'xQJYh',
    'RelationGraph',
    'Iakib',
    'graphRef',
    'XLBYt',
    'node',
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
    'hfTta',
    'xYvFk',
    'EiEiK',
    'xsmWs',
    'hESaR',
    'iLbCG',
    'div',
    'FQbJE',
    'my-node\x20more-btn',
    'AxWRv',
    'sKPtd',
    'klslz',
    'XAcnJ',
    'BiOBH',
    'my-node\x20my-root',
    'KEAoe',
    'iJyXX',
    'level1',
    'hNMNX',
    'AvZMh',
    'my-node',
    'rpksO',
    '100px',
    'EoBui',
    '0px',
    'KIamv',
    'center',
    'ZuiBr',
    '#2c3e50',
    'qfWgl',
    '#ffffff',
    'Zwfhp',
    'LnQiT',
    'sEoYR',
    'WUJLw',
    'span',
    'wLEBf',
    'c-circle-flag',
    'pnAxq',
    'LDWea',
    '#efefef\x20solid\x201px',
    'WKpHA',
    '30px',
    'fvvaF',
    '\x20本页面使用的数据都是随机生成的，如果想要看看其他数据效果，可以重新进入此页面即可\x20'
];
(function (_0x2df82d, _0x2c8c03) {
    var _0x48f2f1 = function (_0x1effd9) {
        while (--_0x1effd9) {
            _0x2df82d['push'](_0x2df82d['shift']());
        }
    };
    _0x48f2f1(++_0x2c8c03);
}(_0x56b9, 0x17f));
var _0x285c = function (_0x5a0e22, _0x256e5e) {
    _0x5a0e22 = _0x5a0e22 - 0x0;
    var _0x2d6eaf = _0x56b9[_0x5a0e22];
    return _0x2d6eaf;
};
import { n as _0x7ed669 } from './index-120b3164.js';
const m = {}, p = {}, h = [
        '',
        '天星',
        _0x285c('0x0'),
        _0x285c('0x1'),
        _0x285c('0x2')
    ];
p[_0x285c('0x3')] = _0x285c('0x4');
p[_0x285c('0x5')] = {};
p[_0x285c('0x6')] = function () {
    var _0x3455dd = { fiMtN: _0x285c('0x7') };
    return {
        currentCase: _0x3455dd.fiMtN,
        isShowCodePanel: !0x1,
        g_loading: !0x1,
        newNodeIndex: 0x0,
        graphOptions: m
    };
};
p[_0x285c('0x8')] = function () {
    this.showGraph();
};
p[_0x285c('0x9')] = {};
p[_0x285c('0x9')][_0x285c('0xa')] = async function () {
    var _0x208c41 = {
        vJska: _0x285c('0xb'),
        YHYen: _0x285c('0xc'),
        EclNl: _0x285c('0xd'),
        kNDKB: _0x285c('0xe')
    };
    const _0xc8d96d = {
        rootId: _0x208c41.vJska,
        nodes: [{
                id: _0x208c41.vJska,
                text: _0x208c41.YHYen,
                offset_x: 0x0,
                data: { type: _0x208c41.vJska }
            }],
        lines: []
    };
    this.generateChildNodes(_0x208c41.vJska, _0x208c41.EclNl, _0xc8d96d), this.generateChildNodes(_0x208c41.vJska, _0x208c41.kNDKB, _0xc8d96d), console.log(JSON.stringify(_0xc8d96d));
    const _0x4ffa2f = this.$refs.graphRef.getInstance();
    await _0x4ffa2f.setJsonData(_0xc8d96d, !0x0), await _0x4ffa2f.playShowEffect(), await this.hideMoreNodes(0x1);
};
p[_0x285c('0x9')][_0x285c('0xf')] = function (_0x16305f, _0x57b58f) {
    var _0x16ca46 = { rrTqq: _0x285c('0x10') };
    console.log(_0x16ca46.rrTqq, _0x16305f);
};
p[_0x285c('0x9')][_0x285c('0x11')] = async function (_0x3162b0) {
    var _0x163744 = {
        GPUSB: function (_0x141947, _0x487988) {
            return _0x141947 > _0x487988;
        },
        PaFdG: _0x285c('0x12'),
        sXTVQ: _0x285c('0xd'),
        EGmTG: _0x285c('0x13'),
        XPARA: function (_0x149919, _0x26000b) {
            return _0x149919 > _0x26000b;
        },
        uDDKu: _0x285c('0x14'),
        ncUYE: _0x285c('0xe'),
        DNteK: _0x285c('0x15')
    };
    const _0x2fa4e2 = this.$refs.graphRef.getInstance(), _0x4d32c5 = _0x2fa4e2.getNodes();
    let _0x2fc417 = [], _0xb003a9 = [];
    _0x4d32c5.forEach(_0x33d027 => {
        if (!_0x33d027.lot || !_0x33d027.lot.childs)
            return;
        let _0x2c96e6 = _0x33d027.targetTo;
        _0x163744.GPUSB(_0x2c96e6.length, 0x2) && (_0x2c96e6.slice(0x2).forEach(_0x1b7bd3 => {
            _0x1b7bd3.isHide = !0x0;
        }), _0xb003a9.push({
            id: `${ _0x33d027.id }-to-more`,
            text: _0x163744.PaFdG,
            alignItems: _0x163744.sXTVQ,
            data: { type: _0x163744.EGmTG }
        }), _0x2fc417.push({
            from: _0x33d027.id,
            to: `${ _0x33d027.id }-to-more`
        })), _0x2c96e6 = _0x33d027.targetFrom, _0x163744.XPARA(_0x2c96e6.length, 0x2) && (_0x2c96e6.slice(0x2).forEach(_0x20f4d6 => {
            _0x20f4d6.isHide = !0x0;
        }), _0xb003a9.push({
            id: `${ _0x33d027.id }-from-more`,
            text: _0x163744.uDDKu,
            alignItems: _0x163744.ncUYE,
            data: { type: _0x163744.DNteK }
        }), _0x2fc417.push({
            from: `${ _0x33d027.id }-from-more`,
            to: _0x33d027.id
        }));
    }), _0x2fa4e2.addNodes(_0xb003a9), _0x2fa4e2.addLines(_0x2fc417), await _0x2fa4e2.doLayout(), await _0x2fa4e2.setZoom(0x50);
};
p[_0x285c('0x9')][_0x285c('0x16')] = function (_0x383115) {
    var _0x251b93 = {
        LmIeS: _0x285c('0x16'),
        LBBFl: function (_0x5c4b4a, _0x328196) {
            return _0x5c4b4a === _0x328196;
        },
        wNzGy: _0x285c('0x13'),
        XMNmF: _0x285c('0x17'),
        atCDe: function (_0x83ea23, _0x2c7470) {
            return _0x83ea23 === _0x2c7470;
        },
        GTpyL: _0x285c('0x15')
    };
    console.log(_0x251b93.LmIeS);
    const _0x20d056 = this.$refs.graphRef.getInstance();
    if (_0x251b93.LBBFl(_0x383115.data.type, _0x251b93.wNzGy)) {
        const _0x5d34e7 = _0x383115.lot.parent.targetTo;
        console.log(_0x251b93.XMNmF, _0x5d34e7.length), _0x5d34e7.forEach(_0x3b650b => {
            _0x3b650b.isHide = !0x1;
        }), _0x20d056.removeNodeById(_0x383115.id), _0x20d056.doLayout();
    }
    if (_0x251b93.atCDe(_0x383115.data.type, _0x251b93.GTpyL)) {
        const _0x3735fa = _0x383115.lot.parent.targetFrom;
        console.log(_0x251b93.XMNmF, _0x3735fa.length), _0x3735fa.forEach(_0x1cb1ec => {
            _0x1cb1ec.isHide = !0x1;
        }), _0x20d056.removeNodeById(_0x383115.id), _0x20d056.doLayout();
    }
};
p[_0x285c('0x9')][_0x285c('0x18')] = function (_0xf9ac20, _0x570a35, _0x1fd40e) {
    var _0x377562 = { nFnec: _0x285c('0x19') };
    console.log(_0x377562.nFnec, _0xf9ac20);
};
p[_0x285c('0x9')][_0x285c('0x1a')] = function (_0x3c5456, _0x290b52, _0x40072e, _0x404036 = 0x1) {
    var _0x4c91dc = {
        NJEMU: function (_0x3f76ca, _0x1899ae) {
            return _0x3f76ca + _0x1899ae;
        },
        FeaKY: function (_0xe229f6, _0x2ced20) {
            return _0xe229f6 * _0x2ced20;
        },
        nbNeq: _0x285c('0x1b'),
        tUCeY: _0x285c('0x1c'),
        sokEl: function (_0x165d4b, _0x59643) {
            return _0x165d4b < _0x59643;
        },
        XpLcx: function (_0x23c1f9, _0x1f9101) {
            return _0x23c1f9 === _0x1f9101;
        },
        nrvkJ: _0x285c('0xd'),
        MWcSs: _0x285c('0xe'),
        NcalN: function (_0x52064e, _0x324ec5) {
            return _0x52064e < _0x324ec5;
        },
        qaeQB: function (_0x429dc8, _0x447eda) {
            return _0x429dc8 > _0x447eda;
        },
        kFqgi: function (_0x2f9302, _0x546fbd) {
            return _0x2f9302 > _0x546fbd;
        }
    };
    const _0x4b8ccc = _0x4c91dc.NJEMU(0x1, Math.floor(_0x4c91dc.FeaKY(Math.random(), 0xa)));
    console.log(_0x4c91dc.nbNeq, _0x3c5456, _0x4c91dc.tUCeY, _0x4b8ccc);
    for (let _0x55705f = 0x0; _0x4c91dc.sokEl(_0x55705f, _0x4b8ccc); _0x55705f++) {
        const _0x3b8fdd = this.newNodeIndex++, _0x20ce13 = _0x4c91dc.NJEMU('N', _0x3b8fdd), _0x8d95f = `N${ _0x3b8fdd }北京${ h[Math.floor(_0x4c91dc.FeaKY(Math.random(), h.length))] }第${ _0x20ce13 }公司`, _0x54b704 = {
                id: _0x20ce13,
                text: _0x8d95f,
                alignItems: _0x4c91dc.XpLcx(_0x290b52, _0x4c91dc.nrvkJ) ? _0x4c91dc.MWcSs : _0x4c91dc.nrvkJ
            };
        let _0x329342;
        _0x4c91dc.XpLcx(_0x290b52, _0x4c91dc.nrvkJ) ? _0x329342 = {
            from: _0x20ce13,
            to: _0x3c5456
        } : _0x329342 = {
            from: _0x3c5456,
            to: _0x20ce13
        }, _0x40072e.nodes.push(_0x54b704), _0x40072e.lines.push(_0x329342), _0x4c91dc.NcalN(_0x404036, 0x3) && _0x4c91dc.qaeQB(Math.random(), 0.5) && _0x4c91dc.kFqgi(this.generateChildNodes(_0x20ce13, _0x290b52, _0x40072e, _0x4c91dc.NJEMU(_0x404036, 0x1)), 0x0) && (_0x54b704.expandHolderPosition = _0x290b52);
    }
    return _0x4b8ccc;
};
m[_0x285c('0x1d')] = !0x1;
m[_0x285c('0x1e')] = !0x0;
m[_0x285c('0x1f')] = !0x0;
m[_0x285c('0x20')] = [{
        layoutName: _0x285c('0x21'),
        from: _0x285c('0xd'),
        min_per_width: _0x285c('0x22'),
        max_per_width: _0x285c('0x22'),
        min_per_height: '40',
        max_per_height: '50',
        enableGatherNodes: !0x1,
        levelDistance: _0x285c('0x23')
    }];
m[_0x285c('0x24')] = 0x1;
m[_0x285c('0x25')] = 0x4;
m[_0x285c('0x26')] = 'lr';
m[_0x285c('0x27')] = 0x0;
m[_0x285c('0x28')] = _0x285c('0x29');
m[_0x285c('0x2a')] = _0x285c('0x2b');
var u = function () {
        var _0x406bcf = {};
        _0x406bcf[_0x285c('0x2c')] = function (_0x17dfd6, _0x2a67ce) {
            return _0x17dfd6 === _0x2a67ce;
        };
        _0x406bcf[_0x285c('0x2d')] = _0x285c('0x15');
        _0x406bcf[_0x285c('0x2e')] = function (_0x548eba, _0x30fe28) {
            return _0x548eba === _0x30fe28;
        };
        _0x406bcf[_0x285c('0x2f')] = _0x285c('0x13');
        _0x406bcf[_0x285c('0x30')] = function (_0x2700bd, _0x4b17e0, _0x33afd6, _0x1acca8) {
            return _0x2700bd(_0x4b17e0, _0x33afd6, _0x1acca8);
        };
        _0x406bcf[_0x285c('0x31')] = _0x285c('0x32');
        _0x406bcf[_0x285c('0x33')] = _0x285c('0x34');
        _0x406bcf[_0x285c('0x35')] = function (_0x531da7, _0x30ec85) {
            return _0x531da7 + _0x30ec85;
        };
        _0x406bcf[_0x285c('0x36')] = function (_0x305caf, _0x290928) {
            return _0x305caf + _0x290928;
        };
        _0x406bcf[_0x285c('0x37')] = _0x285c('0xb');
        _0x406bcf[_0x285c('0x38')] = function (_0x18c046, _0x275d0d, _0x2cad7c, _0x569c77) {
            return _0x18c046(_0x275d0d, _0x2cad7c, _0x569c77);
        };
        _0x406bcf[_0x285c('0x39')] = _0x285c('0x3a');
        _0x406bcf[_0x285c('0x3b')] = function (_0x4232dd, _0x459f0f) {
            return _0x4232dd + _0x459f0f;
        };
        _0x406bcf[_0x285c('0x3c')] = _0x285c('0x3d');
        _0x406bcf[_0x285c('0x3e')] = function (_0xec798f, _0x2c55d6, _0x43dc8b, _0x364ae2) {
            return _0xec798f(_0x2c55d6, _0x43dc8b, _0x364ae2);
        };
        _0x406bcf[_0x285c('0x3f')] = _0x285c('0x40');
        _0x406bcf[_0x285c('0x41')] = _0x285c('0x42');
        _0x406bcf[_0x285c('0x43')] = _0x285c('0x44');
        _0x406bcf[_0x285c('0x45')] = _0x285c('0x46');
        _0x406bcf[_0x285c('0x47')] = _0x285c('0x48');
        _0x406bcf[_0x285c('0x49')] = _0x285c('0x4a');
        _0x406bcf[_0x285c('0x4b')] = function (_0x22b276, _0x48086a) {
            return _0x22b276 + _0x48086a;
        };
        _0x406bcf[_0x285c('0x4c')] = function (_0x4bf790, _0x3122de, _0x4cd146, _0x159394) {
            return _0x4bf790(_0x3122de, _0x4cd146, _0x159394);
        };
        _0x406bcf[_0x285c('0x4d')] = function (_0x400214, _0x50a2f9, _0x1c15f8) {
            return _0x400214(_0x50a2f9, _0x1c15f8);
        };
        _0x406bcf[_0x285c('0x4e')] = _0x285c('0x4f');
        _0x406bcf[_0x285c('0x50')] = _0x285c('0x51');
        _0x406bcf[_0x285c('0x52')] = function (_0x3cc757, _0x3cdd7d, _0x9a6618) {
            return _0x3cc757(_0x3cdd7d, _0x9a6618);
        };
        _0x406bcf[_0x285c('0x53')] = _0x285c('0x54');
        _0x406bcf[_0x285c('0x55')] = _0x285c('0x56');
        _0x406bcf[_0x285c('0x57')] = _0x285c('0x58');
        _0x406bcf[_0x285c('0x59')] = function (_0x3903bb, _0x5e9a1e, _0x22d0aa, _0x25c8b3, _0x26c428) {
            return _0x3903bb(_0x5e9a1e, _0x22d0aa, _0x25c8b3, _0x26c428);
        };
        _0x406bcf[_0x285c('0x5a')] = _0x285c('0x5b');
        _0x406bcf[_0x285c('0x5c')] = _0x285c('0x5d');
        _0x406bcf[_0x285c('0x5e')] = _0x285c('0x5f');
        _0x406bcf[_0x285c('0x60')] = _0x285c('0x61');
        _0x406bcf[_0x285c('0x62')] = _0x285c('0x63');
        _0x406bcf[_0x285c('0x64')] = _0x285c('0x65');
        _0x406bcf[_0x285c('0x66')] = _0x285c('0x67');
        _0x406bcf[_0x285c('0x68')] = function (_0x921c6c, _0x497eea, _0x109722) {
            return _0x921c6c(_0x497eea, _0x109722);
        };
        _0x406bcf[_0x285c('0x69')] = _0x285c('0x6a');
        _0x406bcf[_0x285c('0x6b')] = _0x285c('0x6c');
        _0x406bcf[_0x285c('0x6d')] = _0x285c('0x6e');
        var _0x3ae965 = this, _0x20c40 = _0x3ae965[_0x285c('0x6f')], _0x52ea44 = _0x3ae965[_0x285c('0x70')]['_c'] || _0x20c40;
        return _0x406bcf[_0x285c('0x52')](_0x52ea44, _0x406bcf[_0x285c('0x31')], [
            _0x406bcf[_0x285c('0x4c')](_0x52ea44, _0x406bcf[_0x285c('0x31')], {
                'staticStyle': {
                    'background-color': _0x406bcf[_0x285c('0x49')],
                    'border-bottom': _0x406bcf[_0x285c('0x53')],
                    'line-height': _0x406bcf[_0x285c('0x55')]
                }
            }, [_0x3ae965['_v'](_0x406bcf[_0x285c('0x57')])]),
            _0x406bcf[_0x285c('0x59')](_0x52ea44, _0x406bcf[_0x285c('0x31')], {
                'directives': [{
                        'name': _0x406bcf[_0x285c('0x5a')],
                        'rawName': _0x406bcf[_0x285c('0x5c')],
                        'value': _0x3ae965[_0x285c('0x5f')],
                        'expression': _0x406bcf[_0x285c('0x5e')]
                    }],
                'staticStyle': { 'height': _0x406bcf[_0x285c('0x60')] },
                'attrs': {
                    'element-loading-text': _0x406bcf[_0x285c('0x62')],
                    'element-loading-spinner': _0x406bcf[_0x285c('0x64')],
                    'element-loading-background': _0x406bcf[_0x285c('0x66')]
                }
            }, [_0x406bcf[_0x285c('0x68')](_0x52ea44, _0x406bcf[_0x285c('0x69')], {
                    'ref': _0x406bcf[_0x285c('0x6b')],
                    'attrs': {
                        'options': _0x3ae965[_0x285c('0x71')],
                        'on-node-click': _0x3ae965[_0x285c('0xf')],
                        'on-line-click': _0x3ae965[_0x285c('0x18')]
                    },
                    'scopedSlots': _0x3ae965['_u']([{
                            'key': _0x406bcf[_0x285c('0x6d')],
                            'fn': function (_0x4e7c67) {
                                var _0x382b49 = _0x4e7c67[_0x285c('0x6e')];
                                return [_0x406bcf[_0x285c('0x2c')](_0x382b49[_0x285c('0x6')][_0x285c('0x72')], _0x406bcf[_0x285c('0x2d')]) || _0x406bcf[_0x285c('0x2e')](_0x382b49[_0x285c('0x6')][_0x285c('0x72')], _0x406bcf[_0x285c('0x2f')]) ? _0x406bcf[_0x285c('0x30')](_0x52ea44, _0x406bcf[_0x285c('0x31')], {
                                        'staticClass': _0x406bcf[_0x285c('0x33')],
                                        'on': {
                                            'click': function (_0x3f863a) {
                                                return _0x3ae965[_0x285c('0x16')](_0x382b49);
                                            }
                                        }
                                    }, [_0x3ae965['_v'](_0x406bcf[_0x285c('0x35')](_0x406bcf[_0x285c('0x36')]('\x20', _0x3ae965['_s'](_0x382b49[_0x285c('0x73')])), '\x20'))]) : _0x406bcf[_0x285c('0x2e')](_0x382b49[_0x285c('0x6')][_0x285c('0x72')], _0x406bcf[_0x285c('0x37')]) ? _0x406bcf[_0x285c('0x38')](_0x52ea44, _0x406bcf[_0x285c('0x31')], { 'staticClass': _0x406bcf[_0x285c('0x39')] }, [_0x3ae965['_v'](_0x406bcf[_0x285c('0x3b')](_0x406bcf[_0x285c('0x3b')]('\x20', _0x3ae965['_s'](_0x382b49[_0x285c('0x73')])), '\x20'))]) : _0x406bcf[_0x285c('0x2e')](_0x382b49[_0x285c('0x6')][_0x285c('0x72')], _0x406bcf[_0x285c('0x3c')]) ? _0x406bcf[_0x285c('0x3e')](_0x52ea44, _0x406bcf[_0x285c('0x31')], {
                                        'staticClass': _0x406bcf[_0x285c('0x3f')],
                                        'staticStyle': {
                                            'width': _0x406bcf[_0x285c('0x41')],
                                            'padding-left': _0x406bcf[_0x285c('0x43')],
                                            'text-align': _0x406bcf[_0x285c('0x45')],
                                            'background-color': _0x406bcf[_0x285c('0x47')],
                                            'color': _0x406bcf[_0x285c('0x49')]
                                        }
                                    }, [_0x3ae965['_v'](_0x406bcf[_0x285c('0x3b')](_0x406bcf[_0x285c('0x4b')]('\x20', _0x3ae965['_s'](_0x382b49[_0x285c('0x73')])), '\x20'))]) : _0x406bcf[_0x285c('0x4c')](_0x52ea44, _0x406bcf[_0x285c('0x31')], { 'staticClass': _0x406bcf[_0x285c('0x3f')] }, [
                                        _0x406bcf[_0x285c('0x4d')](_0x52ea44, _0x406bcf[_0x285c('0x4e')], { 'staticClass': _0x406bcf[_0x285c('0x50')] }),
                                        _0x3ae965['_v'](_0x406bcf[_0x285c('0x4b')](_0x3ae965['_s'](_0x382b49[_0x285c('0x73')]), '\x20'))
                                    ])];
                            }
                        }])
                })], 0x1)
        ]);
    }, _ = [];
const f = {};
var N = _0x7ed669(p, u, _, !0x1, v, _0x285c('0x74'), null, null);
function v(_0x4ba7fe) {
    for (let _0x49ebbd in f)
        this[_0x49ebbd] = f[_0x49ebbd];
}
const C = function () {
    return N[_0x285c('0x75')];
}();
export {
    C as default
};