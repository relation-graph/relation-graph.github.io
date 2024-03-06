
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x29b3 = [
    'components',
    'data',
    'folder',
    'left',
    'right',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'created',
    'mounted',
    'methods',
    'setGraphData',
    'bottom',
    'b1-1',
    'b1-2',
    'b1-3',
    'b1-4',
    'b1-5',
    'b1-6',
    'b2-1',
    'b2-2',
    'graphJsonData:',
    '6edbce97',
    'exports',
    'aKVHE',
    'DOqzW',
    'div',
    'DjtVx',
    'c-my-panel',
    'oLKOT',
    'HTTzD',
    'c-option-name',
    'WLYEd',
    '25px',
    'fRvlY',
    '0px',
    'idqkZ',
    '300px',
    'cPDsS',
    '\x20这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。\x20',
    'beRSC',
    'CESZD',
    '\x20直接使用tree数据结构有明显的确缺陷：只能设置全局的线条默认样式，无法对具体的link设置属性，不能精细的定义线条的样式。\x20',
    'qVYtZ',
    'xAOPK',
    'loading',
    'YLdXF',
    'v-loading',
    'EByWA',
    'g_loading',
    'rxscu',
    'calc(100vh\x20-\x2060px)',
    'oOjMO',
    'PzbhF',
    'RelationGraph',
    'LKDuc',
    'graphRef',
    'MJpDK',
    'graph-plug',
    '$createElement',
    '_self',
    'graphOptions',
    'name',
    'RelationGraphDemo'
];
(function (_0x501c89, _0x94daf0) {
    var _0x4c613a = function (_0x5bf292) {
        while (--_0x5bf292) {
            _0x501c89['push'](_0x501c89['shift']());
        }
    };
    _0x4c613a(++_0x94daf0);
}(_0x29b3, 0x1d0));
var _0x12d9 = function (_0x2d0f85, _0x3816df) {
    _0x2d0f85 = _0x2d0f85 - 0x0;
    var _0x504837 = _0x29b3[_0x2d0f85];
    return _0x504837;
};
import { n as _0x1abb7d } from './index-ab96dab3.js';
var d = function () {
        var _0x485718 = {};
        _0x485718[_0x12d9('0x0')] = function (_0x243932, _0x576def, _0x2e5312, _0x1cd23e) {
            return _0x243932(_0x576def, _0x2e5312, _0x1cd23e);
        };
        _0x485718[_0x12d9('0x1')] = _0x12d9('0x2');
        _0x485718[_0x12d9('0x3')] = _0x12d9('0x4');
        _0x485718[_0x12d9('0x5')] = function (_0x185e6f, _0x3816fa, _0xe2b536, _0x3c6b9a) {
            return _0x185e6f(_0x3816fa, _0xe2b536, _0x3c6b9a);
        };
        _0x485718[_0x12d9('0x6')] = _0x12d9('0x7');
        _0x485718[_0x12d9('0x8')] = _0x12d9('0x9');
        _0x485718[_0x12d9('0xa')] = _0x12d9('0xb');
        _0x485718[_0x12d9('0xc')] = _0x12d9('0xd');
        _0x485718[_0x12d9('0xe')] = _0x12d9('0xf');
        _0x485718[_0x12d9('0x10')] = function (_0xeedaf, _0xc116b3) {
            return _0xeedaf(_0xc116b3);
        };
        _0x485718[_0x12d9('0x11')] = _0x12d9('0x12');
        _0x485718[_0x12d9('0x13')] = function (_0x91214b, _0x40d675, _0x5c4256, _0x2593fe, _0x57694a) {
            return _0x91214b(_0x40d675, _0x5c4256, _0x2593fe, _0x57694a);
        };
        _0x485718[_0x12d9('0x14')] = _0x12d9('0x15');
        _0x485718[_0x12d9('0x16')] = _0x12d9('0x17');
        _0x485718[_0x12d9('0x18')] = _0x12d9('0x19');
        _0x485718[_0x12d9('0x1a')] = _0x12d9('0x1b');
        _0x485718[_0x12d9('0x1c')] = function (_0x726e81, _0x182528, _0x371776) {
            return _0x726e81(_0x182528, _0x371776);
        };
        _0x485718[_0x12d9('0x1d')] = _0x12d9('0x1e');
        _0x485718[_0x12d9('0x1f')] = _0x12d9('0x20');
        _0x485718[_0x12d9('0x21')] = _0x12d9('0x22');
        var _0x30c426 = this, _0x49074f = _0x30c426[_0x12d9('0x23')], _0x23a41c = _0x30c426[_0x12d9('0x24')]['_c'] || _0x49074f;
        return _0x485718[_0x12d9('0x5')](_0x23a41c, _0x485718[_0x12d9('0x1')], {}, [_0x485718[_0x12d9('0x13')](_0x23a41c, _0x485718[_0x12d9('0x1')], {
                'directives': [{
                        'name': _0x485718[_0x12d9('0x14')],
                        'rawName': _0x485718[_0x12d9('0x16')],
                        'value': _0x30c426[_0x12d9('0x19')],
                        'expression': _0x485718[_0x12d9('0x18')]
                    }],
                'staticStyle': { 'height': _0x485718[_0x12d9('0x1a')] }
            }, [_0x485718[_0x12d9('0x1c')](_0x23a41c, _0x485718[_0x12d9('0x1d')], {
                    'ref': _0x485718[_0x12d9('0x1f')],
                    'attrs': { 'options': _0x30c426[_0x12d9('0x25')] },
                    'scopedSlots': _0x30c426['_u']([{
                            'key': _0x485718[_0x12d9('0x21')],
                            'fn': function () {
                                return [_0x485718[_0x12d9('0x0')](_0x23a41c, _0x485718[_0x12d9('0x1')], { 'staticClass': _0x485718[_0x12d9('0x3')] }, [_0x485718[_0x12d9('0x5')](_0x23a41c, _0x485718[_0x12d9('0x1')], {
                                            'staticClass': _0x485718[_0x12d9('0x6')],
                                            'staticStyle': {
                                                'line-height': _0x485718[_0x12d9('0x8')],
                                                'padding': _0x485718[_0x12d9('0xa')],
                                                'width': _0x485718[_0x12d9('0xc')]
                                            }
                                        }, [
                                            _0x30c426['_v'](_0x485718[_0x12d9('0xe')]),
                                            _0x485718[_0x12d9('0x10')](_0x23a41c, 'br'),
                                            _0x30c426['_v'](_0x485718[_0x12d9('0x11')])
                                        ])])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, r = [];
const l = {}, n = {};
l[_0x12d9('0x26')] = _0x12d9('0x27');
l[_0x12d9('0x28')] = {};
l[_0x12d9('0x29')] = function () {
    var _0x25f4cb = {
        CScxT: _0x12d9('0x2a'),
        bKLTy: _0x12d9('0x2b'),
        wUpQg: _0x12d9('0x2c'),
        QmbfD: _0x12d9('0x2d'),
        TTqRJ: _0x12d9('0x2e')
    };
    return {
        g_loading: !0x0,
        graphOptions: {
            debug: !0x1,
            layout: {
                layoutName: _0x25f4cb.CScxT,
                from: _0x25f4cb.bKLTy,
                min_per_width: 0x32,
                min_per_height: 0x28,
                max_per_height: 0x28
            },
            defaultExpandHolderPosition: _0x25f4cb.wUpQg,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x29,
            defaultPloyLineRadius: 0x4,
            defaultBottomJuctionPoint_X: 0x1c,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x25f4cb.QmbfD,
            defaultNodeColor: _0x25f4cb.TTqRJ,
            reLayoutWhenExpandedOrCollapsed: !0x0
        }
    };
};
l[_0x12d9('0x2f')] = function () {
};
l[_0x12d9('0x30')] = function () {
    this.setGraphData();
};
l[_0x12d9('0x31')] = {};
l[_0x12d9('0x31')][_0x12d9('0x32')] = async function () {
    var _0x5ae58f = {
        hlrMY: _0x12d9('0x33'),
        AQzUZ: _0x12d9('0x2b'),
        AxnmU: _0x12d9('0x34'),
        PEQUG: _0x12d9('0x35'),
        DqHTi: _0x12d9('0x36'),
        wneOF: _0x12d9('0x37'),
        jsvfh: _0x12d9('0x38'),
        GIOyk: _0x12d9('0x39'),
        lgwWI: _0x12d9('0x3a'),
        REsUk: _0x12d9('0x3b'),
        kpmsd: _0x12d9('0x3c')
    };
    const _0x1963ba = [{
            id: 'a',
            text: 'a',
            children: [
                {
                    id: 'b',
                    text: 'b',
                    children: [
                        {
                            id: 'b1',
                            text: 'b1',
                            children: [
                                {
                                    id: _0x5ae58f.AxnmU,
                                    text: _0x5ae58f.AxnmU
                                },
                                {
                                    id: _0x5ae58f.PEQUG,
                                    text: _0x5ae58f.PEQUG
                                },
                                {
                                    id: _0x5ae58f.DqHTi,
                                    text: _0x5ae58f.DqHTi
                                },
                                {
                                    id: _0x5ae58f.wneOF,
                                    text: _0x5ae58f.wneOF
                                },
                                {
                                    id: _0x5ae58f.jsvfh,
                                    text: _0x5ae58f.jsvfh
                                },
                                {
                                    id: _0x5ae58f.GIOyk,
                                    text: _0x5ae58f.GIOyk
                                }
                            ]
                        },
                        {
                            id: 'b2',
                            text: 'b2',
                            children: [
                                {
                                    id: _0x5ae58f.lgwWI,
                                    text: _0x5ae58f.lgwWI
                                },
                                {
                                    id: _0x5ae58f.REsUk,
                                    text: _0x5ae58f.REsUk
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'c',
                    text: 'c',
                    children: [
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
                    ]
                }
            ]
        }];
    this.g_loading = !0x1;
    const _0x23bc13 = this.$refs.graphRef.getInstance(), _0x578e72 = {
            rootId: 'a',
            nodes: [],
            lines: []
        };
    _0x23bc13.flatNodeData(_0x1963ba, null, _0x578e72.nodes, _0x578e72.lines), _0x578e72.lines.forEach(_0x5357c3 => {
        _0x5357c3.fromJunctionPoint = _0x5ae58f.hlrMY, _0x5357c3.toJunctionPoint = _0x5ae58f.AQzUZ;
    }), console.log(_0x5ae58f.kpmsd, _0x578e72), await _0x23bc13.addNodes(_0x578e72.nodes), await _0x23bc13.addLines(_0x578e72.lines), _0x23bc13.graphData.rootNode = _0x23bc13.getNodeById(_0x578e72.rootId), await _0x23bc13.doLayout(), await _0x23bc13.playShowEffect();
};
var s = _0x1abb7d(l, d, r, !0x1, c, _0x12d9('0x3d'), null, null);
function c(_0x13a9bd) {
    for (let _0x409d00 in n)
        this[_0x409d00] = n[_0x409d00];
}
const h = function () {
    return s[_0x12d9('0x3e')];
}();
export {
    h as default
};