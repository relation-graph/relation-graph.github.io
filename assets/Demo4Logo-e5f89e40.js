
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x5e28 = [
    'WgAtB',
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
    'IbnAP',
    'DbwUu',
    'div',
    'criGf',
    'edSpW',
    'calc(100vh\x20-\x2060px)',
    'BXnCC',
    'RelationGraph'
];
(function (_0x329c53, _0x408228) {
    var _0x48be78 = function (_0x222fa9) {
        while (--_0x222fa9) {
            _0x329c53['push'](_0x329c53['shift']());
        }
    };
    _0x48be78(++_0x408228);
}(_0x5e28, 0x19c));
var _0x4889 = function (_0x21a12e, _0x48626b) {
    _0x21a12e = _0x21a12e - 0x0;
    var _0x21f362 = _0x5e28[_0x21a12e];
    return _0x21f362;
};
import { n as _0x23629b } from './index-0f873f6f.js';
var a = function () {
        var _0x3fa293 = {};
        _0x3fa293[_0x4889('0x0')] = function (_0x1cc2a8, _0x4017e2, _0x153bdb) {
            return _0x1cc2a8(_0x4017e2, _0x153bdb);
        };
        _0x3fa293[_0x4889('0x1')] = _0x4889('0x2');
        _0x3fa293[_0x4889('0x3')] = function (_0x14c1df, _0x4614cd, _0x4e81f6, _0x201366, _0x204775) {
            return _0x14c1df(_0x4614cd, _0x4e81f6, _0x201366, _0x204775);
        };
        _0x3fa293[_0x4889('0x4')] = _0x4889('0x5');
        _0x3fa293[_0x4889('0x6')] = _0x4889('0x7');
        _0x3fa293[_0x4889('0x8')] = _0x4889('0x9');
        var _0x12dfe4 = this, _0x3d2d82 = _0x12dfe4[_0x4889('0xa')], _0x5a5f65 = _0x12dfe4[_0x4889('0xb')]['_c'] || _0x3d2d82;
        return _0x3fa293[_0x4889('0x0')](_0x5a5f65, _0x3fa293[_0x4889('0x1')], [_0x3fa293[_0x4889('0x3')](_0x5a5f65, _0x3fa293[_0x4889('0x1')], { 'staticStyle': { 'height': _0x3fa293[_0x4889('0x4')] } }, [_0x3fa293[_0x4889('0x0')](_0x5a5f65, _0x3fa293[_0x4889('0x6')], {
                    'ref': _0x3fa293[_0x4889('0x8')],
                    'attrs': {
                        'options': _0x12dfe4[_0x4889('0xc')],
                        'on-node-click': _0x12dfe4[_0x4889('0xd')],
                        'on-line-click': _0x12dfe4[_0x4889('0xe')]
                    }
                })], 0x1)]);
    }, l = [];
const r = {}, n = {};
r[_0x4889('0xf')] = _0x4889('0x10');
r[_0x4889('0x11')] = {};
r[_0x4889('0x12')] = function () {
    var _0x1cefec = { rhBhi: _0x4889('0x13') };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0x1cefec.rhBhi
        }
    };
};
r[_0x4889('0x14')] = function () {
    this.showGraph();
};
r[_0x4889('0x15')] = {};
r[_0x4889('0x15')][_0x4889('0x16')] = function () {
    var _0x1ab839 = {
        qsnni: _0x4889('0x17'),
        nSJFx: _0x4889('0x18'),
        iJOde: _0x4889('0x19'),
        evxxu: _0x4889('0x1a')
    };
    const _0x19e0e6 = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x1ab839.qsnni
            },
            {
                id: 'b',
                text: 'B',
                color: _0x1ab839.nSJFx,
                fontColor: _0x1ab839.qsnni
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
                text: _0x1ab839.iJOde,
                color: _0x1ab839.nSJFx
            },
            {
                from: 'a',
                to: 'c',
                text: _0x1ab839.iJOde
            },
            {
                from: 'a',
                to: 'e',
                text: _0x1ab839.iJOde
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x1ab839.evxxu
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x19e0e6, _0x159bbe => {
    });
};
r[_0x4889('0x15')][_0x4889('0xd')] = function (_0xe138e1, _0x4d4a42) {
    var _0x16200d = { GruTn: _0x4889('0x1b') };
    console.log(_0x16200d.GruTn, _0xe138e1);
};
r[_0x4889('0x15')][_0x4889('0xe')] = function (_0x3accc0, _0x55995e, _0x577b92) {
    var _0x321687 = { EWKld: _0x4889('0x1c') };
    console.log(_0x321687.EWKld, _0x3accc0);
};
var c = _0x23629b(r, a, l, !0x1, s, null, null, null);
function s(_0x49a19d) {
    for (let _0x11c4a0 in n)
        this[_0x11c4a0] = n[_0x11c4a0];
}
const d = function () {
    return c[_0x4889('0x1d')];
}();
export {
    d as default
};