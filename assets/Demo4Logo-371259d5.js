
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x521a = [
    'graphOptions',
    'onNodeClick',
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
    'Line\x20Text',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'WpIFK',
    'OeGhD',
    'div',
    'FvKjb',
    'IEdnV',
    'calc(100vh\x20-\x2060px)',
    'FvdVt',
    'NBDxV',
    'RelationGraph',
    'pwrkG',
    'graphRef',
    '$createElement',
    '_self'
];
(function (_0xa7873e, _0x5b6817) {
    var _0x414724 = function (_0x3bfb21) {
        while (--_0x3bfb21) {
            _0xa7873e['push'](_0xa7873e['shift']());
        }
    };
    _0x414724(++_0x5b6817);
}(_0x521a, 0x6f));
var _0xd2ce = function (_0x4baa55, _0x47f897) {
    _0x4baa55 = _0x4baa55 - 0x0;
    var _0x39b391 = _0x521a[_0x4baa55];
    return _0x39b391;
};
import { n as _0x4d5704 } from './index-c22e9dce.js';
var a = function () {
        var _0x16e69a = {};
        _0x16e69a[_0xd2ce('0x0')] = function (_0x41398b, _0x7f18da, _0x5aa2fc) {
            return _0x41398b(_0x7f18da, _0x5aa2fc);
        };
        _0x16e69a[_0xd2ce('0x1')] = _0xd2ce('0x2');
        _0x16e69a[_0xd2ce('0x3')] = function (_0x476aa8, _0x242d2a, _0xb0b71f, _0x4245b0, _0xed0199) {
            return _0x476aa8(_0x242d2a, _0xb0b71f, _0x4245b0, _0xed0199);
        };
        _0x16e69a[_0xd2ce('0x4')] = _0xd2ce('0x5');
        _0x16e69a[_0xd2ce('0x6')] = function (_0x592eef, _0x11d0ab, _0x3083dc) {
            return _0x592eef(_0x11d0ab, _0x3083dc);
        };
        _0x16e69a[_0xd2ce('0x7')] = _0xd2ce('0x8');
        _0x16e69a[_0xd2ce('0x9')] = _0xd2ce('0xa');
        var _0x228a73 = this, _0x39a1f5 = _0x228a73[_0xd2ce('0xb')], _0x3b805a = _0x228a73[_0xd2ce('0xc')]['_c'] || _0x39a1f5;
        return _0x16e69a[_0xd2ce('0x0')](_0x3b805a, _0x16e69a[_0xd2ce('0x1')], [_0x16e69a[_0xd2ce('0x3')](_0x3b805a, _0x16e69a[_0xd2ce('0x1')], { 'staticStyle': { 'height': _0x16e69a[_0xd2ce('0x4')] } }, [_0x16e69a[_0xd2ce('0x6')](_0x3b805a, _0x16e69a[_0xd2ce('0x7')], {
                    'ref': _0x16e69a[_0xd2ce('0x9')],
                    'attrs': {
                        'options': _0x228a73[_0xd2ce('0xd')],
                        'on-node-click': _0x228a73[_0xd2ce('0xe')],
                        'on-line-click': _0x228a73[_0xd2ce('0xf')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0xd2ce('0x10')] = _0xd2ce('0x11');
r[_0xd2ce('0x12')] = {};
r[_0xd2ce('0x13')] = function () {
    var _0x423033 = { hieNh: _0xd2ce('0x14') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x423033.hieNh
        }
    };
};
r[_0xd2ce('0x15')] = function () {
    this.showGraph();
};
r[_0xd2ce('0x16')] = {};
r[_0xd2ce('0x16')][_0xd2ce('0x17')] = function () {
    var _0x5cefee = {
        VQWBm: _0xd2ce('0x18'),
        VUbUH: _0xd2ce('0x19'),
        ylhuD: _0xd2ce('0x1a'),
        KkNzM: _0xd2ce('0x1b')
    };
    const _0x71b62c = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x5cefee.VQWBm
            },
            {
                id: 'b',
                text: 'B',
                color: _0x5cefee.VUbUH,
                fontColor: _0x5cefee.VQWBm
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
                text: _0x5cefee.ylhuD,
                color: _0x5cefee.VUbUH
            },
            {
                from: 'a',
                to: 'c',
                text: _0x5cefee.ylhuD
            },
            {
                from: 'a',
                to: 'e',
                text: _0x5cefee.ylhuD
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x5cefee.KkNzM
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x71b62c, _0x142d19 => {
    });
};
r[_0xd2ce('0x16')][_0xd2ce('0xe')] = function (_0x446262, _0x2a4e5c) {
    var _0x4941f4 = { efHaV: _0xd2ce('0x1c') };
    console.log(_0x4941f4.efHaV, _0x446262);
};
r[_0xd2ce('0x16')][_0xd2ce('0xf')] = function (_0x108ec9, _0x1408a1, _0xa5588e) {
    var _0x264c48 = { xPtnf: _0xd2ce('0x1d') };
    console.log(_0x264c48.xPtnf, _0x108ec9);
};
var c = _0x4d5704(r, a, l, !0x1, s, null, null, null);
function s(_0x596d67) {
    for (let _0x1b007e in n)
        this[_0x1b007e] = n[_0x1b007e];
}
const d = function () {
    return c[_0xd2ce('0x1e')];
}();
export {
    d as default
};