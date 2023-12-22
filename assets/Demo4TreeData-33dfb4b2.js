
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x527f = [
    '$createElement',
    '_self',
    'graphOptions',
    'name',
    'RelationGraphDemo',
    'components',
    'data',
    '---',
    'tree',
    'seeks-layout-center',
    'border',
    'left',
    '200',
    '500',
    'right',
    'rgba(0,\x20186,\x20189,\x201)',
    'rgba(0,\x20206,\x20209,\x201)',
    'created',
    'mounted',
    'methods',
    'setGraphData',
    'b1-1',
    'b1-2',
    'b1-3',
    'b1-4',
    'b1-5',
    'b1-6',
    'b2-1',
    'b2-2',
    '23f4c166',
    'exports',
    'gclku',
    'xeivB',
    'div',
    'qJnAw',
    'c-my-panel',
    'tzkWd',
    'fCLpW',
    'c-option-name',
    'yUUXn',
    '25px',
    'rYYLz',
    '0px',
    'VaqBs',
    '300px',
    'kynaL',
    '\x20这个示例中，调用setJsonData时传递的是一个典型的有层级结构的数据，图谱会自动识别（通过children属性识别子节点），再将其做扁平化处理。这样做仅仅是为了方便展示一些树状图谱。\x20',
    'NtupP',
    'ZaOVN',
    '\x20直接使用tree数据结构有明显的确缺陷：只能设置全局的线条默认样式，无法对具体的link设置属性，不能精细的定义线条的样式。\x20',
    'jqPDb',
    'hzqjs',
    'MZxNp',
    'loading',
    'GQrTz',
    'v-loading',
    'lUvdn',
    'g_loading',
    'TOyUV',
    'calc(100vh\x20-\x2060px)',
    'eqtGV',
    'OKRWY',
    'RelationGraph',
    'HCBCd',
    'graphRef',
    'jUbtm',
    'graph-plug'
];
(function (_0x2987f0, _0x4ebbc7) {
    var _0x3ca691 = function (_0x395854) {
        while (--_0x395854) {
            _0x2987f0['push'](_0x2987f0['shift']());
        }
    };
    _0x3ca691(++_0x4ebbc7);
}(_0x527f, 0x1b1));
var _0x25c8 = function (_0x4b0d09, _0x1b9d60) {
    _0x4b0d09 = _0x4b0d09 - 0x0;
    var _0x371e5f = _0x527f[_0x4b0d09];
    return _0x371e5f;
};
import { n } from './index-c22e9dce.js';
var o = function () {
        var _0x1f4d31 = {};
        _0x1f4d31[_0x25c8('0x0')] = function (_0x130841, _0x461f27, _0x498b22, _0x3410dd) {
            return _0x130841(_0x461f27, _0x498b22, _0x3410dd);
        };
        _0x1f4d31[_0x25c8('0x1')] = _0x25c8('0x2');
        _0x1f4d31[_0x25c8('0x3')] = _0x25c8('0x4');
        _0x1f4d31[_0x25c8('0x5')] = function (_0x5ad449, _0x47c624, _0x5b3d44, _0x2f36c6) {
            return _0x5ad449(_0x47c624, _0x5b3d44, _0x2f36c6);
        };
        _0x1f4d31[_0x25c8('0x6')] = _0x25c8('0x7');
        _0x1f4d31[_0x25c8('0x8')] = _0x25c8('0x9');
        _0x1f4d31[_0x25c8('0xa')] = _0x25c8('0xb');
        _0x1f4d31[_0x25c8('0xc')] = _0x25c8('0xd');
        _0x1f4d31[_0x25c8('0xe')] = _0x25c8('0xf');
        _0x1f4d31[_0x25c8('0x10')] = function (_0x3d9acc, _0x2d41dc) {
            return _0x3d9acc(_0x2d41dc);
        };
        _0x1f4d31[_0x25c8('0x11')] = _0x25c8('0x12');
        _0x1f4d31[_0x25c8('0x13')] = function (_0x51b83c, _0x2accb8, _0x52c26d, _0x1f70e1) {
            return _0x51b83c(_0x2accb8, _0x52c26d, _0x1f70e1);
        };
        _0x1f4d31[_0x25c8('0x14')] = function (_0x3bdadf, _0x5ab738, _0x318389, _0x153e1b, _0x599eab) {
            return _0x3bdadf(_0x5ab738, _0x318389, _0x153e1b, _0x599eab);
        };
        _0x1f4d31[_0x25c8('0x15')] = _0x25c8('0x16');
        _0x1f4d31[_0x25c8('0x17')] = _0x25c8('0x18');
        _0x1f4d31[_0x25c8('0x19')] = _0x25c8('0x1a');
        _0x1f4d31[_0x25c8('0x1b')] = _0x25c8('0x1c');
        _0x1f4d31[_0x25c8('0x1d')] = function (_0x12d32a, _0x51d0a8, _0x25cf9d) {
            return _0x12d32a(_0x51d0a8, _0x25cf9d);
        };
        _0x1f4d31[_0x25c8('0x1e')] = _0x25c8('0x1f');
        _0x1f4d31[_0x25c8('0x20')] = _0x25c8('0x21');
        _0x1f4d31[_0x25c8('0x22')] = _0x25c8('0x23');
        var _0x512b55 = this, _0x365b9a = _0x512b55[_0x25c8('0x24')], _0x496e95 = _0x512b55[_0x25c8('0x25')]['_c'] || _0x365b9a;
        return _0x1f4d31[_0x25c8('0x13')](_0x496e95, _0x1f4d31[_0x25c8('0x1')], {}, [_0x1f4d31[_0x25c8('0x14')](_0x496e95, _0x1f4d31[_0x25c8('0x1')], {
                'directives': [{
                        'name': _0x1f4d31[_0x25c8('0x15')],
                        'rawName': _0x1f4d31[_0x25c8('0x17')],
                        'value': _0x512b55[_0x25c8('0x1a')],
                        'expression': _0x1f4d31[_0x25c8('0x19')]
                    }],
                'staticStyle': { 'height': _0x1f4d31[_0x25c8('0x1b')] }
            }, [_0x1f4d31[_0x25c8('0x1d')](_0x496e95, _0x1f4d31[_0x25c8('0x1e')], {
                    'ref': _0x1f4d31[_0x25c8('0x20')],
                    'attrs': { 'options': _0x512b55[_0x25c8('0x26')] },
                    'scopedSlots': _0x512b55['_u']([{
                            'key': _0x1f4d31[_0x25c8('0x22')],
                            'fn': function () {
                                return [_0x1f4d31[_0x25c8('0x0')](_0x496e95, _0x1f4d31[_0x25c8('0x1')], { 'staticClass': _0x1f4d31[_0x25c8('0x3')] }, [_0x1f4d31[_0x25c8('0x5')](_0x496e95, _0x1f4d31[_0x25c8('0x1')], {
                                            'staticClass': _0x1f4d31[_0x25c8('0x6')],
                                            'staticStyle': {
                                                'line-height': _0x1f4d31[_0x25c8('0x8')],
                                                'padding': _0x1f4d31[_0x25c8('0xa')],
                                                'width': _0x1f4d31[_0x25c8('0xc')]
                                            }
                                        }, [
                                            _0x512b55['_v'](_0x1f4d31[_0x25c8('0xe')]),
                                            _0x1f4d31[_0x25c8('0x10')](_0x496e95, 'br'),
                                            _0x512b55['_v'](_0x1f4d31[_0x25c8('0x11')])
                                        ])])];
                            },
                            'proxy': !0x0
                        }])
                })], 0x1)]);
    }, r = [];
const d = {}, i = {};
d[_0x25c8('0x27')] = _0x25c8('0x28');
d[_0x25c8('0x29')] = {};
d[_0x25c8('0x2a')] = function () {
    var _0x263ff6 = {
        kFqpy: _0x25c8('0x2b'),
        JCsxn: _0x25c8('0x2c'),
        TUIxU: _0x25c8('0x2d'),
        DIdyu: _0x25c8('0x2e'),
        MfsnS: _0x25c8('0x2f'),
        QFDJI: _0x25c8('0x30'),
        PtYhn: _0x25c8('0x31'),
        MevQp: _0x25c8('0x32'),
        goCEn: _0x25c8('0x33'),
        mLSBL: _0x25c8('0x34')
    };
    return {
        g_loading: !0x0,
        demoname: _0x263ff6.kFqpy,
        graphOptions: {
            debug: !0x1,
            layouts: [{
                    label: '中心',
                    layoutName: _0x263ff6.JCsxn,
                    layoutClassName: _0x263ff6.TUIxU,
                    defaultJunctionPoint: _0x263ff6.DIdyu,
                    defaultNodeShape: 0x0,
                    defaultLineShape: 0x1,
                    from: _0x263ff6.MfsnS,
                    min_per_width: _0x263ff6.QFDJI,
                    max_per_width: _0x263ff6.PtYhn,
                    min_per_height: '40',
                    max_per_height: '60',
                    levelDistance: ''
                }],
            defaultExpandHolderPosition: _0x263ff6.MevQp,
            defaultNodeShape: 0x1,
            defaultNodeWidth: 0x64,
            defaultLineShape: 0x4,
            defaultJunctionPoint: 'lr',
            defaultNodeBorderWidth: 0x0,
            defaultLineColor: _0x263ff6.goCEn,
            defaultNodeColor: _0x263ff6.mLSBL
        }
    };
};
d[_0x25c8('0x35')] = function () {
};
d[_0x25c8('0x36')] = function () {
    this.demoname = this.$route.params.demoname, this.setGraphData();
};
d[_0x25c8('0x37')] = {};
d[_0x25c8('0x37')][_0x25c8('0x38')] = function () {
    var _0x350c2a = {
        kgUva: _0x25c8('0x39'),
        HNBTz: _0x25c8('0x3a'),
        ksOOP: _0x25c8('0x3b'),
        UPchX: _0x25c8('0x3c'),
        qzwiJ: _0x25c8('0x3d'),
        sfpFA: _0x25c8('0x3e'),
        IgzAY: _0x25c8('0x3f'),
        bqbOP: _0x25c8('0x40')
    };
    const _0x34e0f3 = {
        rootId: 'a',
        nodes: [{
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
                                        id: _0x350c2a.kgUva,
                                        text: _0x350c2a.kgUva
                                    },
                                    {
                                        id: _0x350c2a.HNBTz,
                                        text: _0x350c2a.HNBTz
                                    },
                                    {
                                        id: _0x350c2a.ksOOP,
                                        text: _0x350c2a.ksOOP
                                    },
                                    {
                                        id: _0x350c2a.UPchX,
                                        text: _0x350c2a.UPchX
                                    },
                                    {
                                        id: _0x350c2a.qzwiJ,
                                        text: _0x350c2a.qzwiJ
                                    },
                                    {
                                        id: _0x350c2a.sfpFA,
                                        text: _0x350c2a.sfpFA
                                    }
                                ]
                            },
                            {
                                id: 'b2',
                                text: 'b2',
                                children: [
                                    {
                                        id: _0x350c2a.IgzAY,
                                        text: _0x350c2a.IgzAY
                                    },
                                    {
                                        id: _0x350c2a.bqbOP,
                                        text: _0x350c2a.bqbOP
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
            }],
        lines: []
    };
    console.log(JSON.stringify(_0x34e0f3)), this.g_loading = !0x1, this.$refs.graphRef.setJsonData(_0x34e0f3, _0x458065 => {
    });
};
var l = n(d, o, r, !0x1, s, _0x25c8('0x41'), null, null);
function s(_0x3f9684) {
    for (let _0x2dc2b5 in i)
        this[_0x2dc2b5] = i[_0x2dc2b5];
}
const h = function () {
    return l[_0x25c8('0x42')];
}();
export {
    h as default
};