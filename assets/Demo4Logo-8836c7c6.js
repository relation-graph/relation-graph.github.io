
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x164f = [
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data',
    'border',
    'mounted',
    'methods',
    'showGraph',
    'yellow',
    '#43a2f1',
    '关系1',
    '关系2',
    '关系3',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'ZtHpl',
    'iEjyT',
    'div',
    'AIyKn',
    'EmccF',
    'calc(100vh\x20-\x2060px)',
    'MdBiM',
    'RelationGraph',
    'RnwEk',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick'
];
(function (_0x14f222, _0x348d0c) {
    var _0x20613c = function (_0x197331) {
        while (--_0x197331) {
            _0x14f222['push'](_0x14f222['shift']());
        }
    };
    _0x20613c(++_0x348d0c);
}(_0x164f, 0x192));
var _0x3c17 = function (_0x677cd2, _0x2b63c5) {
    _0x677cd2 = _0x677cd2 - 0x0;
    var _0x139d60 = _0x164f[_0x677cd2];
    return _0x139d60;
};
import { n as _0x1a9914 } from './index-08f7799e.js';
var l = function () {
        var _0x18edf5 = {};
        _0x18edf5[_0x3c17('0x0')] = function (_0x242779, _0x5ea746, _0x277c5b) {
            return _0x242779(_0x5ea746, _0x277c5b);
        };
        _0x18edf5[_0x3c17('0x1')] = _0x3c17('0x2');
        _0x18edf5[_0x3c17('0x3')] = function (_0x3c5ad4, _0x2bf506, _0x16b38f, _0x5a9912, _0x20e66c) {
            return _0x3c5ad4(_0x2bf506, _0x16b38f, _0x5a9912, _0x20e66c);
        };
        _0x18edf5[_0x3c17('0x4')] = _0x3c17('0x5');
        _0x18edf5[_0x3c17('0x6')] = _0x3c17('0x7');
        _0x18edf5[_0x3c17('0x8')] = _0x3c17('0x9');
        var _0x3f500a = this, _0x1e2083 = _0x3f500a[_0x3c17('0xa')], _0x4e0a80 = _0x3f500a[_0x3c17('0xb')]['_c'] || _0x1e2083;
        return _0x18edf5[_0x3c17('0x0')](_0x4e0a80, _0x18edf5[_0x3c17('0x1')], [_0x18edf5[_0x3c17('0x3')](_0x4e0a80, _0x18edf5[_0x3c17('0x1')], { 'staticStyle': { 'height': _0x18edf5[_0x3c17('0x4')] } }, [_0x18edf5[_0x3c17('0x0')](_0x4e0a80, _0x18edf5[_0x3c17('0x6')], {
                    'ref': _0x18edf5[_0x3c17('0x8')],
                    'attrs': {
                        'options': _0x3f500a[_0x3c17('0xc')],
                        'on-node-click': _0x3f500a[_0x3c17('0xd')],
                        'on-line-click': _0x3f500a[_0x3c17('0xe')]
                    }
                })], 0x1)]);
    }, r = [];
const i = {}, n = {};
i[_0x3c17('0xf')] = _0x3c17('0x10');
i[_0x3c17('0x11')] = {};
i[_0x3c17('0x12')] = function () {
    var _0x31066a = { ikKAy: _0x3c17('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x31066a.ikKAy
        }
    };
};
i[_0x3c17('0x14')] = function () {
    this.showGraph();
};
i[_0x3c17('0x15')] = {};
i[_0x3c17('0x15')][_0x3c17('0x16')] = function () {
    var _0x54014c = {
        diPwU: _0x3c17('0x17'),
        IpHln: _0x3c17('0x18'),
        WrFTz: _0x3c17('0x19'),
        mQCun: _0x3c17('0x1a'),
        pbElE: _0x3c17('0x1b'),
        RHpGD: _0x3c17('0x1c')
    };
    const _0x1c6640 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x54014c.diPwU
            },
            {
                id: 'b',
                text: 'B',
                color: _0x54014c.IpHln,
                fontColor: _0x54014c.diPwU
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
                text: _0x54014c.WrFTz,
                color: _0x54014c.IpHln
            },
            {
                from: 'a',
                to: 'c',
                text: _0x54014c.mQCun
            },
            {
                from: 'a',
                to: 'e',
                text: _0x54014c.pbElE
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x54014c.RHpGD
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x1c6640, _0x53978f => {
    });
};
i[_0x3c17('0x15')][_0x3c17('0xd')] = function (_0xb8e13a, _0x261143) {
    var _0x53fe4c = { cEaRd: _0x3c17('0x1d') };
    console.log(_0x53fe4c.cEaRd, _0xb8e13a);
};
i[_0x3c17('0x15')][_0x3c17('0xe')] = function (_0x1ed0e1, _0x5ecc9b, _0xd202a7) {
    var _0x12477c = { joNQr: _0x3c17('0x1e') };
    console.log(_0x12477c.joNQr, _0x1ed0e1);
};
var c = _0x1a9914(i, l, r, !0x1, s, null, null, null);
function s(_0x1bff2b) {
    for (let _0x587cb3 in n)
        this[_0x587cb3] = n[_0x587cb3];
}
const d = function () {
    return c[_0x3c17('0x1f')];
}();
export {
    d as default
};