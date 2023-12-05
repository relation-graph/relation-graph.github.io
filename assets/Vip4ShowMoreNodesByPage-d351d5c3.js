
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x13da = [
    'v-loading',
    'WwDQI',
    'g_loading',
    'lhxdb',
    'calc(100vh\x20-\x2060px)',
    'MJLQv',
    '正在加载数据...',
    'lFPEm',
    'el-icon-loading',
    'ROEmE',
    'rgba(255,\x20255,\x20255,\x200.6)',
    'RUKVf',
    'ghzSR',
    'RelationGraph',
    'vwxuR',
    'graphRef',
    'WQBiu',
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
    'kHTvM',
    'ALqfN',
    'mUxmQ',
    'iRDoi',
    'BnRni',
    'div',
    'euRsC',
    'my-node\x20more-btn',
    'EADto',
    'tebWP',
    'CdWrJ',
    'upGLr',
    'JbShP',
    'my-node\x20my-root',
    'cHSDa',
    'mNrFh',
    'mDOhJ',
    'teSml',
    'level1',
    'fOdLa',
    'my-node',
    'VtfYT',
    '100px',
    'eUpRF',
    '0px',
    'QKNxa',
    'center',
    'djiuI',
    '#2c3e50',
    'veQQE',
    '#ffffff',
    'QAggT',
    'bEySj',
    'eBLAV',
    'ohXIw',
    'span',
    'nRlky',
    'c-circle-flag',
    'RGHye',
    '#efefef\x20solid\x201px',
    'KgisI',
    '30px',
    'YKywm',
    '\x20本页面使用的数据都是随机生成的，如果想要看看其他数据效果，可以重新进入此页面即可\x20',
    'kRrqv',
    'NLpJY',
    'loading',
    'JNvqf'
];
(function (_0x31f204, _0x58c282) {
    var _0x26911f = function (_0x42ef24) {
        while (--_0x42ef24) {
            _0x31f204['push'](_0x31f204['shift']());
        }
    };
    _0x26911f(++_0x58c282);
}(_0x13da, 0x8e));
var _0x3194 = function (_0x4475d5, _0x2525f0) {
    _0x4475d5 = _0x4475d5 - 0x0;
    var _0x156849 = _0x13da[_0x4475d5];
    return _0x156849;
};
import { n as _0x471b2e } from './index-d3c29682.js';
const m = {}, p = {}, h = [
        '',
        '天星',
        _0x3194('0x0'),
        _0x3194('0x1'),
        _0x3194('0x2')
    ];
p[_0x3194('0x3')] = _0x3194('0x4');
p[_0x3194('0x5')] = {};
p[_0x3194('0x6')] = function () {
    var _0x4c702e = { ebiAJ: _0x3194('0x7') };
    return {
        currentCase: _0x4c702e.ebiAJ,
        isShowCodePanel: !0x1,
        g_loading: !0x1,
        newNodeIndex: 0x0,
        graphOptions: m
    };
};
p[_0x3194('0x8')] = function () {
    this.showGraph();
};
p[_0x3194('0x9')] = {};
p[_0x3194('0x9')][_0x3194('0xa')] = async function () {
    var _0x1f4aa7 = {
        RgPZZ: _0x3194('0xb'),
        IwmCC: _0x3194('0xc'),
        AeOUe: _0x3194('0xd'),
        QJmDS: _0x3194('0xe')
    };
    const _0x580dfa = {
        rootId: _0x1f4aa7.RgPZZ,
        nodes: [{
                id: _0x1f4aa7.RgPZZ,
                text: _0x1f4aa7.IwmCC,
                offset_x: 0x0,
                data: { type: _0x1f4aa7.RgPZZ }
            }],
        lines: []
    };
    this.generateChildNodes(_0x1f4aa7.RgPZZ, _0x1f4aa7.AeOUe, _0x580dfa), this.generateChildNodes(_0x1f4aa7.RgPZZ, _0x1f4aa7.QJmDS, _0x580dfa), console.log(JSON.stringify(_0x580dfa));
    const _0x46bb3e = this.$refs.graphRef.getInstance();
    await _0x46bb3e.setJsonData(_0x580dfa, !0x0), await _0x46bb3e.playShowEffect(), await this.hideMoreNodes(0x1);
};
p[_0x3194('0x9')][_0x3194('0xf')] = function (_0xc979fc, _0x25d115) {
    var _0x3cd31e = { BsUVL: _0x3194('0x10') };
    console.log(_0x3cd31e.BsUVL, _0xc979fc);
};
p[_0x3194('0x9')][_0x3194('0x11')] = async function (_0x22ad54) {
    var _0x2fa7c3 = {
        pCWUD: function (_0x5bd679, _0x1cac1f) {
            return _0x5bd679 > _0x1cac1f;
        },
        LiPHZ: _0x3194('0x12'),
        cyCiR: _0x3194('0xd'),
        SknWE: _0x3194('0x13'),
        aQsmy: _0x3194('0x14'),
        acHSl: _0x3194('0xe'),
        hPxPx: _0x3194('0x15')
    };
    const _0x5c1be9 = this.$refs.graphRef.getInstance(), _0x4af9d5 = _0x5c1be9.getNodes();
    let _0x33cddf = [], _0x5b1bfc = [];
    _0x4af9d5.forEach(_0x330613 => {
        if (!_0x330613.lot || !_0x330613.lot.childs)
            return;
        let _0xc323da = _0x330613.targetTo;
        _0x2fa7c3.pCWUD(_0xc323da.length, 0x2) && (_0xc323da.slice(0x2).forEach(_0xfc6381 => {
            _0xfc6381.isHide = !0x0;
        }), _0x5b1bfc.push({
            id: `${ _0x330613.id }-to-more`,
            text: _0x2fa7c3.LiPHZ,
            alignItems: _0x2fa7c3.cyCiR,
            data: { type: _0x2fa7c3.SknWE }
        }), _0x33cddf.push({
            from: _0x330613.id,
            to: `${ _0x330613.id }-to-more`
        })), _0xc323da = _0x330613.targetFrom, _0x2fa7c3.pCWUD(_0xc323da.length, 0x2) && (_0xc323da.slice(0x2).forEach(_0x45d954 => {
            _0x45d954.isHide = !0x0;
        }), _0x5b1bfc.push({
            id: `${ _0x330613.id }-from-more`,
            text: _0x2fa7c3.aQsmy,
            alignItems: _0x2fa7c3.acHSl,
            data: { type: _0x2fa7c3.hPxPx }
        }), _0x33cddf.push({
            from: `${ _0x330613.id }-from-more`,
            to: _0x330613.id
        }));
    }), _0x5c1be9.addNodes(_0x5b1bfc), _0x5c1be9.addLines(_0x33cddf), await _0x5c1be9.doLayout(), await _0x5c1be9.setZoom(0x50);
};
p[_0x3194('0x9')][_0x3194('0x16')] = function (_0x70a6de) {
    var _0x15d199 = {
        nJskG: _0x3194('0x16'),
        mqETh: function (_0x379f6c, _0x416912) {
            return _0x379f6c === _0x416912;
        },
        PjUKc: _0x3194('0x13'),
        DkQof: _0x3194('0x17'),
        GJdHw: function (_0x1d17e8, _0x49c34f) {
            return _0x1d17e8 === _0x49c34f;
        },
        IXDpL: _0x3194('0x15')
    };
    console.log(_0x15d199.nJskG);
    const _0x1fb0f3 = this.$refs.graphRef.getInstance();
    if (_0x15d199.mqETh(_0x70a6de.data.type, _0x15d199.PjUKc)) {
        const _0x3c227e = _0x70a6de.lot.parent.targetTo;
        console.log(_0x15d199.DkQof, _0x3c227e.length), _0x3c227e.forEach(_0x56f9e7 => {
            _0x56f9e7.isHide = !0x1;
        }), _0x1fb0f3.removeNodeById(_0x70a6de.id), _0x1fb0f3.doLayout();
    }
    if (_0x15d199.GJdHw(_0x70a6de.data.type, _0x15d199.IXDpL)) {
        const _0x145225 = _0x70a6de.lot.parent.targetFrom;
        console.log(_0x15d199.DkQof, _0x145225.length), _0x145225.forEach(_0x2b3653 => {
            _0x2b3653.isHide = !0x1;
        }), _0x1fb0f3.removeNodeById(_0x70a6de.id), _0x1fb0f3.doLayout();
    }
};
p[_0x3194('0x9')][_0x3194('0x18')] = function (_0x58dc69, _0x15f6e7, _0x57f83e) {
    var _0x144bb8 = { XnIfS: _0x3194('0x19') };
    console.log(_0x144bb8.XnIfS, _0x58dc69);
};
p[_0x3194('0x9')][_0x3194('0x1a')] = function (_0x58a4e4, _0x355f7e, _0x1f372c, _0x33c040 = 0x1) {
    var _0x344997 = {
        QxNca: function (_0x50aca4, _0x208415) {
            return _0x50aca4 + _0x208415;
        },
        meBWM: function (_0x232fba, _0x11debd) {
            return _0x232fba * _0x11debd;
        },
        iuSIt: _0x3194('0x1b'),
        Tzipz: _0x3194('0x1c'),
        QRJJt: function (_0x2cf229, _0x26ce0d) {
            return _0x2cf229 < _0x26ce0d;
        },
        IaZnB: function (_0x5410ce, _0x1d3736) {
            return _0x5410ce === _0x1d3736;
        },
        FYpgX: _0x3194('0xd'),
        rIeoP: _0x3194('0xe'),
        CSVJW: function (_0x4623a1, _0x1ae3a8) {
            return _0x4623a1 < _0x1ae3a8;
        },
        PDdAi: function (_0x5f5863, _0x23690b) {
            return _0x5f5863 > _0x23690b;
        },
        ooaDQ: function (_0x428fb0, _0x2820f0) {
            return _0x428fb0 + _0x2820f0;
        }
    };
    const _0x2dc83c = _0x344997.QxNca(0x1, Math.floor(_0x344997.meBWM(Math.random(), 0xa)));
    console.log(_0x344997.iuSIt, _0x58a4e4, _0x344997.Tzipz, _0x2dc83c);
    for (let _0x1dd1dc = 0x0; _0x344997.QRJJt(_0x1dd1dc, _0x2dc83c); _0x1dd1dc++) {
        const _0x4b9a0f = this.newNodeIndex++, _0x3d10dc = _0x344997.QxNca('N', _0x4b9a0f), _0x5e9e74 = `N${ _0x4b9a0f }北京${ h[Math.floor(_0x344997.meBWM(Math.random(), h.length))] }第${ _0x3d10dc }公司`, _0x590977 = {
                id: _0x3d10dc,
                text: _0x5e9e74,
                alignItems: _0x344997.IaZnB(_0x355f7e, _0x344997.FYpgX) ? _0x344997.rIeoP : _0x344997.FYpgX
            };
        let _0x1c62a0;
        _0x344997.IaZnB(_0x355f7e, _0x344997.FYpgX) ? _0x1c62a0 = {
            from: _0x3d10dc,
            to: _0x58a4e4
        } : _0x1c62a0 = {
            from: _0x58a4e4,
            to: _0x3d10dc
        }, _0x1f372c.nodes.push(_0x590977), _0x1f372c.lines.push(_0x1c62a0), _0x344997.CSVJW(_0x33c040, 0x3) && _0x344997.PDdAi(Math.random(), 0.5) && _0x344997.PDdAi(this.generateChildNodes(_0x3d10dc, _0x355f7e, _0x1f372c, _0x344997.ooaDQ(_0x33c040, 0x1)), 0x0) && (_0x590977.expandHolderPosition = _0x355f7e);
    }
    return _0x2dc83c;
};
m[_0x3194('0x1d')] = !0x1;
m[_0x3194('0x1e')] = !0x0;
m[_0x3194('0x1f')] = !0x0;
m[_0x3194('0x20')] = [{
        layoutName: _0x3194('0x21'),
        from: _0x3194('0xd'),
        min_per_width: _0x3194('0x22'),
        max_per_width: _0x3194('0x22'),
        min_per_height: '40',
        max_per_height: '50',
        enableGatherNodes: !0x1,
        levelDistance: _0x3194('0x23')
    }];
m[_0x3194('0x24')] = 0x1;
m[_0x3194('0x25')] = 0x4;
m[_0x3194('0x26')] = 'lr';
m[_0x3194('0x27')] = 0x0;
m[_0x3194('0x28')] = _0x3194('0x29');
m[_0x3194('0x2a')] = _0x3194('0x2b');
var u = function () {
        var _0x201a9a = {};
        _0x201a9a[_0x3194('0x2c')] = function (_0x4bed80, _0x357c00) {
            return _0x4bed80 === _0x357c00;
        };
        _0x201a9a[_0x3194('0x2d')] = _0x3194('0x15');
        _0x201a9a[_0x3194('0x2e')] = _0x3194('0x13');
        _0x201a9a[_0x3194('0x2f')] = function (_0x578f54, _0x15b3fc, _0x3db93f, _0x42831a) {
            return _0x578f54(_0x15b3fc, _0x3db93f, _0x42831a);
        };
        _0x201a9a[_0x3194('0x30')] = _0x3194('0x31');
        _0x201a9a[_0x3194('0x32')] = _0x3194('0x33');
        _0x201a9a[_0x3194('0x34')] = function (_0x34e681, _0x4edddf) {
            return _0x34e681 + _0x4edddf;
        };
        _0x201a9a[_0x3194('0x35')] = function (_0x43eb1a, _0x598a4f) {
            return _0x43eb1a === _0x598a4f;
        };
        _0x201a9a[_0x3194('0x36')] = _0x3194('0xb');
        _0x201a9a[_0x3194('0x37')] = function (_0x1d58fa, _0x254696, _0x5effd1, _0xdcd910) {
            return _0x1d58fa(_0x254696, _0x5effd1, _0xdcd910);
        };
        _0x201a9a[_0x3194('0x38')] = _0x3194('0x39');
        _0x201a9a[_0x3194('0x3a')] = function (_0x4614ac, _0x2019a6) {
            return _0x4614ac + _0x2019a6;
        };
        _0x201a9a[_0x3194('0x3b')] = function (_0x3473bc, _0x1ab3dd) {
            return _0x3473bc + _0x1ab3dd;
        };
        _0x201a9a[_0x3194('0x3c')] = function (_0xd31af4, _0x234324) {
            return _0xd31af4 === _0x234324;
        };
        _0x201a9a[_0x3194('0x3d')] = _0x3194('0x3e');
        _0x201a9a[_0x3194('0x3f')] = _0x3194('0x40');
        _0x201a9a[_0x3194('0x41')] = _0x3194('0x42');
        _0x201a9a[_0x3194('0x43')] = _0x3194('0x44');
        _0x201a9a[_0x3194('0x45')] = _0x3194('0x46');
        _0x201a9a[_0x3194('0x47')] = _0x3194('0x48');
        _0x201a9a[_0x3194('0x49')] = _0x3194('0x4a');
        _0x201a9a[_0x3194('0x4b')] = function (_0x2d0815, _0x406a57) {
            return _0x2d0815 + _0x406a57;
        };
        _0x201a9a[_0x3194('0x4c')] = function (_0x1f9b0f, _0xd05fe9, _0x4671e3, _0x2f543e) {
            return _0x1f9b0f(_0xd05fe9, _0x4671e3, _0x2f543e);
        };
        _0x201a9a[_0x3194('0x4d')] = function (_0x3379e8, _0x4835a7, _0x2a33d3) {
            return _0x3379e8(_0x4835a7, _0x2a33d3);
        };
        _0x201a9a[_0x3194('0x4e')] = _0x3194('0x4f');
        _0x201a9a[_0x3194('0x50')] = _0x3194('0x51');
        _0x201a9a[_0x3194('0x52')] = _0x3194('0x53');
        _0x201a9a[_0x3194('0x54')] = _0x3194('0x55');
        _0x201a9a[_0x3194('0x56')] = _0x3194('0x57');
        _0x201a9a[_0x3194('0x58')] = function (_0x135133, _0x3e41bf, _0x59d2a6, _0xe49c07, _0x5144ce) {
            return _0x135133(_0x3e41bf, _0x59d2a6, _0xe49c07, _0x5144ce);
        };
        _0x201a9a[_0x3194('0x59')] = _0x3194('0x5a');
        _0x201a9a[_0x3194('0x5b')] = _0x3194('0x5c');
        _0x201a9a[_0x3194('0x5d')] = _0x3194('0x5e');
        _0x201a9a[_0x3194('0x5f')] = _0x3194('0x60');
        _0x201a9a[_0x3194('0x61')] = _0x3194('0x62');
        _0x201a9a[_0x3194('0x63')] = _0x3194('0x64');
        _0x201a9a[_0x3194('0x65')] = _0x3194('0x66');
        _0x201a9a[_0x3194('0x67')] = function (_0x442195, _0x4363e0, _0xe04934) {
            return _0x442195(_0x4363e0, _0xe04934);
        };
        _0x201a9a[_0x3194('0x68')] = _0x3194('0x69');
        _0x201a9a[_0x3194('0x6a')] = _0x3194('0x6b');
        _0x201a9a[_0x3194('0x6c')] = _0x3194('0x6d');
        var _0x41b8e4 = this, _0x531d53 = _0x41b8e4[_0x3194('0x6e')], _0x53cb6e = _0x41b8e4[_0x3194('0x6f')]['_c'] || _0x531d53;
        return _0x201a9a[_0x3194('0x4d')](_0x53cb6e, _0x201a9a[_0x3194('0x30')], [
            _0x201a9a[_0x3194('0x4c')](_0x53cb6e, _0x201a9a[_0x3194('0x30')], {
                'staticStyle': {
                    'background-color': _0x201a9a[_0x3194('0x49')],
                    'border-bottom': _0x201a9a[_0x3194('0x52')],
                    'line-height': _0x201a9a[_0x3194('0x54')]
                }
            }, [_0x41b8e4['_v'](_0x201a9a[_0x3194('0x56')])]),
            _0x201a9a[_0x3194('0x58')](_0x53cb6e, _0x201a9a[_0x3194('0x30')], {
                'directives': [{
                        'name': _0x201a9a[_0x3194('0x59')],
                        'rawName': _0x201a9a[_0x3194('0x5b')],
                        'value': _0x41b8e4[_0x3194('0x5e')],
                        'expression': _0x201a9a[_0x3194('0x5d')]
                    }],
                'staticStyle': { 'height': _0x201a9a[_0x3194('0x5f')] },
                'attrs': {
                    'element-loading-text': _0x201a9a[_0x3194('0x61')],
                    'element-loading-spinner': _0x201a9a[_0x3194('0x63')],
                    'element-loading-background': _0x201a9a[_0x3194('0x65')]
                }
            }, [_0x201a9a[_0x3194('0x67')](_0x53cb6e, _0x201a9a[_0x3194('0x68')], {
                    'ref': _0x201a9a[_0x3194('0x6a')],
                    'attrs': {
                        'options': _0x41b8e4[_0x3194('0x70')],
                        'on-node-click': _0x41b8e4[_0x3194('0xf')],
                        'on-line-click': _0x41b8e4[_0x3194('0x18')]
                    },
                    'scopedSlots': _0x41b8e4['_u']([{
                            'key': _0x201a9a[_0x3194('0x6c')],
                            'fn': function (_0x57d0ac) {
                                var _0x57aa4d = _0x57d0ac[_0x3194('0x6d')];
                                return [_0x201a9a[_0x3194('0x2c')](_0x57aa4d[_0x3194('0x6')][_0x3194('0x71')], _0x201a9a[_0x3194('0x2d')]) || _0x201a9a[_0x3194('0x2c')](_0x57aa4d[_0x3194('0x6')][_0x3194('0x71')], _0x201a9a[_0x3194('0x2e')]) ? _0x201a9a[_0x3194('0x2f')](_0x53cb6e, _0x201a9a[_0x3194('0x30')], {
                                        'staticClass': _0x201a9a[_0x3194('0x32')],
                                        'on': {
                                            'click': function (_0x1c5199) {
                                                return _0x41b8e4[_0x3194('0x16')](_0x57aa4d);
                                            }
                                        }
                                    }, [_0x41b8e4['_v'](_0x201a9a[_0x3194('0x34')](_0x201a9a[_0x3194('0x34')]('\x20', _0x41b8e4['_s'](_0x57aa4d[_0x3194('0x72')])), '\x20'))]) : _0x201a9a[_0x3194('0x35')](_0x57aa4d[_0x3194('0x6')][_0x3194('0x71')], _0x201a9a[_0x3194('0x36')]) ? _0x201a9a[_0x3194('0x37')](_0x53cb6e, _0x201a9a[_0x3194('0x30')], { 'staticClass': _0x201a9a[_0x3194('0x38')] }, [_0x41b8e4['_v'](_0x201a9a[_0x3194('0x3a')](_0x201a9a[_0x3194('0x3b')]('\x20', _0x41b8e4['_s'](_0x57aa4d[_0x3194('0x72')])), '\x20'))]) : _0x201a9a[_0x3194('0x3c')](_0x57aa4d[_0x3194('0x6')][_0x3194('0x71')], _0x201a9a[_0x3194('0x3d')]) ? _0x201a9a[_0x3194('0x37')](_0x53cb6e, _0x201a9a[_0x3194('0x30')], {
                                        'staticClass': _0x201a9a[_0x3194('0x3f')],
                                        'staticStyle': {
                                            'width': _0x201a9a[_0x3194('0x41')],
                                            'padding-left': _0x201a9a[_0x3194('0x43')],
                                            'text-align': _0x201a9a[_0x3194('0x45')],
                                            'background-color': _0x201a9a[_0x3194('0x47')],
                                            'color': _0x201a9a[_0x3194('0x49')]
                                        }
                                    }, [_0x41b8e4['_v'](_0x201a9a[_0x3194('0x4b')](_0x201a9a[_0x3194('0x4b')]('\x20', _0x41b8e4['_s'](_0x57aa4d[_0x3194('0x72')])), '\x20'))]) : _0x201a9a[_0x3194('0x4c')](_0x53cb6e, _0x201a9a[_0x3194('0x30')], { 'staticClass': _0x201a9a[_0x3194('0x3f')] }, [
                                        _0x201a9a[_0x3194('0x4d')](_0x53cb6e, _0x201a9a[_0x3194('0x4e')], { 'staticClass': _0x201a9a[_0x3194('0x50')] }),
                                        _0x41b8e4['_v'](_0x201a9a[_0x3194('0x4b')](_0x41b8e4['_s'](_0x57aa4d[_0x3194('0x72')]), '\x20'))
                                    ])];
                            }
                        }])
                })], 0x1)
        ]);
    }, _ = [];
const f = {};
var N = _0x471b2e(p, u, _, !0x1, v, _0x3194('0x73'), null, null);
function v(_0x93c946) {
    for (let _0x3d133f in f)
        this[_0x3d133f] = f[_0x3d133f];
}
const C = function () {
    return N[_0x3194('0x74')];
}();
export {
    C as default
};