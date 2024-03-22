
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x216b = [
    '#43a2f1',
    '关系1',
    '关系2',
    '关系3',
    '#67C23A',
    'onNodeClick:',
    'onLineClick:',
    'onCanvasClick:',
    'debug',
    'allowSwitchLineShape',
    'allowSwitchJunctionPoint',
    'allowShowDownloadButton',
    'checkedLineColor',
    'green',
    'defaultLineWidth',
    'defaultJunctionPoint',
    'border',
    'exports',
    'UjcZW',
    'chcXo',
    'div',
    'wQkcK',
    'VTyDO',
    'calc(100vh\x20-\x2060px)',
    'iHpeU',
    'RelationGraph',
    'VevpS',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onCanvasClick',
    'onNodeClick',
    'onLineClick',
    'name',
    'Demo',
    'components',
    'data',
    'mounted',
    'methods',
    'showGraph',
    'yellow'
];
(function (_0x55d85a, _0x1ed357) {
    var _0x3bbc49 = function (_0x40eff8) {
        while (--_0x40eff8) {
            _0x55d85a['push'](_0x55d85a['shift']());
        }
    };
    _0x3bbc49(++_0x1ed357);
}(_0x216b, 0x1b6));
var _0x5539 = function (_0x784bbe, _0x38f02e) {
    _0x784bbe = _0x784bbe - 0x0;
    var _0x2e55a9 = _0x216b[_0x784bbe];
    return _0x2e55a9;
};
import { n as _0x1f8120 } from './index-3a2b9e72.js';
var l = function () {
        var _0x594559 = {};
        _0x594559[_0x5539('0x0')] = function (_0x58b0f5, _0x19df1e, _0x4b3281) {
            return _0x58b0f5(_0x19df1e, _0x4b3281);
        };
        _0x594559[_0x5539('0x1')] = _0x5539('0x2');
        _0x594559[_0x5539('0x3')] = function (_0x160ae4, _0x1d58d3, _0x382e3d, _0xec1c13, _0xa63b34) {
            return _0x160ae4(_0x1d58d3, _0x382e3d, _0xec1c13, _0xa63b34);
        };
        _0x594559[_0x5539('0x4')] = _0x5539('0x5');
        _0x594559[_0x5539('0x6')] = _0x5539('0x7');
        _0x594559[_0x5539('0x8')] = _0x5539('0x9');
        var _0x5249ee = this, _0x2c873a = _0x5249ee[_0x5539('0xa')], _0x46ac8c = _0x5249ee[_0x5539('0xb')]['_c'] || _0x2c873a;
        return _0x594559[_0x5539('0x0')](_0x46ac8c, _0x594559[_0x5539('0x1')], [_0x594559[_0x5539('0x3')](_0x46ac8c, _0x594559[_0x5539('0x1')], { 'staticStyle': { 'height': _0x594559[_0x5539('0x4')] } }, [_0x594559[_0x5539('0x0')](_0x46ac8c, _0x594559[_0x5539('0x6')], {
                    'ref': _0x594559[_0x5539('0x8')],
                    'attrs': {
                        'options': _0x5249ee[_0x5539('0xc')],
                        'on-canvas-click': _0x5249ee[_0x5539('0xd')],
                        'on-node-click': _0x5249ee[_0x5539('0xe')],
                        'on-line-click': _0x5249ee[_0x5539('0xf')]
                    }
                })], 0x1)]);
    }, i = [];
const c = {}, r = {}, n = {};
r[_0x5539('0x10')] = _0x5539('0x11');
r[_0x5539('0x12')] = {};
r[_0x5539('0x13')] = function () {
    return {
        isShowCodePanel: !0x1,
        graphOptions: c
    };
};
r[_0x5539('0x14')] = function () {
    this.showGraph();
};
r[_0x5539('0x15')] = {};
r[_0x5539('0x15')][_0x5539('0x16')] = function () {
    var _0x2b190c = {
        RWVsd: _0x5539('0x17'),
        iuAuA: _0x5539('0x18'),
        mMwAJ: _0x5539('0x19'),
        znMOQ: _0x5539('0x1a'),
        KNCUQ: _0x5539('0x1b'),
        oOsQN: _0x5539('0x1c')
    };
    const _0x547f5f = {
        rootId: 'a',
        nodes: [
            {
                id: 'a',
                text: 'A',
                borderColor: _0x2b190c.RWVsd
            },
            {
                id: 'b',
                text: 'B',
                color: _0x2b190c.iuAuA,
                fontColor: _0x2b190c.RWVsd
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
                text: _0x2b190c.mMwAJ,
                color: _0x2b190c.iuAuA
            },
            {
                from: 'a',
                to: 'c',
                text: _0x2b190c.znMOQ
            },
            {
                from: 'a',
                to: 'e',
                text: _0x2b190c.KNCUQ
            },
            {
                from: 'b',
                to: 'e',
                text: '',
                color: _0x2b190c.oOsQN
            }
        ]
    };
    this.$refs.graphRef.setJsonData(_0x547f5f, _0x5e62e9 => {
    });
};
r[_0x5539('0x15')][_0x5539('0xe')] = function (_0x1e76e5, _0x4c3437) {
    var _0xe64526 = { HAorw: _0x5539('0x1d') };
    console.log(_0xe64526.HAorw, _0x1e76e5);
};
r[_0x5539('0x15')][_0x5539('0xf')] = function (_0x1e3661, _0x4cb7c1, _0x2ba5d1) {
    var _0x270b2c = { nXxfz: _0x5539('0x1e') };
    console.log(_0x270b2c.nXxfz, _0x1e3661);
};
r[_0x5539('0x15')][_0x5539('0xd')] = function (_0x3ff464) {
    var _0x289abb = { DEuIj: _0x5539('0x1f') };
    const _0x473b01 = this.$refs.graphRef.getInstance();
    console.log(_0x289abb.DEuIj, _0x3ff464), _0x473b01.clearChecked();
};
c[_0x5539('0x20')] = !0x1;
c[_0x5539('0x21')] = !0x0;
c[_0x5539('0x22')] = !0x0;
c[_0x5539('0x23')] = !0x0;
c[_0x5539('0x24')] = _0x5539('0x25');
c[_0x5539('0x26')] = 0x3;
c[_0x5539('0x27')] = _0x5539('0x28');
var s = _0x1f8120(r, l, i, !0x1, h, null, null, null);
function h(_0x18ed43) {
    for (let _0x5b124 in n)
        this[_0x5b124] = n[_0x5b124];
}
const p = function () {
    return s[_0x5539('0x29')];
}();
export {
    p as default
};