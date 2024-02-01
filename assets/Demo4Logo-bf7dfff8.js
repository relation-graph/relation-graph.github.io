
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
    'qGhFl',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data',
    'border',
    'center',
    'mounted',
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    'Line\x20Text',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'dreHb',
    'XOhTT',
    'div',
    'PPxBO',
    'hBXNB',
    'calc(100vh\x20-\x2060px)',
    'OMxlD',
    'RelationGraph'
];
(function (_0x56a1b1, _0x15955e) {
    var _0x1e00ee = function (_0x2b26e9) {
        while (--_0x2b26e9) {
            _0x56a1b1['push'](_0x56a1b1['shift']());
        }
    };
    _0x1e00ee(++_0x15955e);
}(_0x29bc, 0x1c9));
var _0x1c61 = function (_0x5f0923, _0x3dac6b) {
    _0x5f0923 = _0x5f0923 - 0x0;
    var _0x154eeb = _0x29bc[_0x5f0923];
    return _0x154eeb;
};
import { n as _0x1de09b } from './index-910d4d84.js';
var i = function () {
        var _0x541707 = {};
        _0x541707[_0x1c61('0x0')] = function (_0x4f41ae, _0x31916f, _0x3bfce8) {
            return _0x4f41ae(_0x31916f, _0x3bfce8);
        };
        _0x541707[_0x1c61('0x1')] = _0x1c61('0x2');
        _0x541707[_0x1c61('0x3')] = function (_0x1a180b, _0x289467, _0x4c1c0e, _0x546ef8, _0x11b61d) {
            return _0x1a180b(_0x289467, _0x4c1c0e, _0x546ef8, _0x11b61d);
        };
        _0x541707[_0x1c61('0x4')] = _0x1c61('0x5');
        _0x541707[_0x1c61('0x6')] = _0x1c61('0x7');
        _0x541707[_0x1c61('0x8')] = _0x1c61('0x9');
        var _0x4b38d9 = this, _0x5a594b = _0x4b38d9[_0x1c61('0xa')], _0x15e37d = _0x4b38d9[_0x1c61('0xb')]['_c'] || _0x5a594b;
        return _0x541707[_0x1c61('0x0')](_0x15e37d, _0x541707[_0x1c61('0x1')], [_0x541707[_0x1c61('0x3')](_0x15e37d, _0x541707[_0x1c61('0x1')], { 'staticStyle': { 'height': _0x541707[_0x1c61('0x4')] } }, [_0x541707[_0x1c61('0x0')](_0x15e37d, _0x541707[_0x1c61('0x6')], {
                    'ref': _0x541707[_0x1c61('0x8')],
                    'attrs': {
                        'options': _0x4b38d9[_0x1c61('0xc')],
                        'on-node-click': _0x4b38d9[_0x1c61('0xd')],
                        'on-line-click': _0x4b38d9[_0x1c61('0xe')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x1c61('0xf')] = _0x1c61('0x10');
r[_0x1c61('0x11')] = {};
r[_0x1c61('0x12')] = function () {
    var _0x148007 = {
        iksgN: _0x1c61('0x13'),
        sqDbw: _0x1c61('0x14')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x148007.iksgN,
            layout: { layoutName: _0x148007.sqDbw }
        }
    };
};
r[_0x1c61('0x15')] = function () {
    this.showGraph();
};
r[_0x1c61('0x16')] = {};
r[_0x1c61('0x16')][_0x1c61('0x17')] = function () {
    var _0x473fdc = {
        IQafG: _0x1c61('0x18'),
        YTyAY: _0x1c61('0x19'),
        vVdlK: _0x1c61('0x1a'),
        HLRpn: _0x1c61('0x1b')
    };
    const _0xc9a702 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x473fdc.IQafG
            },
            {
                id: 'b',
                text: 'B',
                color: _0x473fdc.YTyAY,
                fontColor: _0x473fdc.IQafG
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
                text: _0x473fdc.vVdlK,
                color: _0x473fdc.YTyAY
            },
            {
                from: 'a',
                to: 'c',
                text: _0x473fdc.vVdlK
            },
            {
                from: 'a',
                to: 'e',
                text: _0x473fdc.vVdlK
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x473fdc.HLRpn
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0xc9a702, _0x10b040 => {
    });
};
r[_0x1c61('0x16')][_0x1c61('0xd')] = function (_0x432fcc, _0x25c6e6) {
    var _0x2c2cb0 = { DoKMp: _0x1c61('0x1c') };
    console.log(_0x2c2cb0.DoKMp, _0x432fcc);
};
r[_0x1c61('0x16')][_0x1c61('0xe')] = function (_0x117c99, _0x138b8b, _0xdd268f) {
    var _0xfbd5ad = { lUXJx: _0x1c61('0x1d') };
    console.log(_0xfbd5ad.lUXJx, _0x117c99);
};
var c = _0x1de09b(r, i, l, !0x1, s, null, null, null);
function s(_0xbe9d19) {
    for (let _0x21eb86 in n)
        this[_0x21eb86] = n[_0x21eb86];
}
const d = function () {
    return c[_0x1c61('0x1e')];
}();
export {
    d as default
};