
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x3813 = [
    'phSYs',
    'c-rg-line',
    'olkCd',
    'xMhbe',
    'rg-line-dashtype-',
    'ppPmf',
    'sIKBh',
    'rg-line-anm-',
    'pdEWb',
    'c-rg-line-checked',
    'aqdgb',
    'none',
    'ItqMf',
    'wRXje',
    'dIFeR',
    'text',
    'MBjQR',
    'c-rg-line-text',
    'KeQKE',
    'middle',
    'QyYum',
    '$createElement',
    '_self',
    'className',
    'styleClass',
    'dashType',
    'animation',
    'opacity',
    'disableDefaultClickEffect',
    'lineWidth',
    'defaultLineWidth',
    'color',
    'defaultLineColor',
    'defaultShowLineLabel',
    'canvasZoom',
    'textTransform',
    'seeks_id',
    'fontColor',
    'defaultLineFontColor',
    'textOffset_x',
    'defaultLineTextOffset_x',
    'textOffset_y',
    'defaultLineTextOffset_y',
    'exports',
    'name',
    'SeeksRGLine',
    'props',
    'data',
    'inject',
    'graph',
    'graphInstance',
    'computed',
    'show',
    'watch',
    'methods',
    'onClick',
    'checked',
    'showStartArrow',
    'showEndArrow',
    'pathData',
    'my-line-slot:error:',
    'options',
    'relationGraph',
    'link',
    'relation',
    'relationIndex',
    'mustUseProp',
    'default',
    'type',
    'UmPQt',
    'mffeQ',
    'nMduH',
    'path'
];
(function (_0x1c6d5c, _0x5f7756) {
    var _0x1a7de3 = function (_0x2e1e97) {
        while (--_0x2e1e97) {
            _0x1c6d5c['push'](_0x1c6d5c['shift']());
        }
    };
    _0x1a7de3(++_0x5f7756);
}(_0x3813, 0x150));
var _0x27b5 = function (_0x4d3a67, _0x1a78aa) {
    _0x4d3a67 = _0x4d3a67 - 0x0;
    var _0x67a1dd = _0x3813[_0x4d3a67];
    return _0x67a1dd;
};
import { n as _0xeeb371 } from './index-ab96dab3.js';
const a = {};
a[_0x27b5('0x0')] = _0x27b5('0x1');
a[_0x27b5('0x2')] = {};
a[_0x27b5('0x3')] = function () {
    return { is_flashing: !0x1 };
};
a[_0x27b5('0x4')] = [
    _0x27b5('0x5'),
    _0x27b5('0x6')
];
a[_0x27b5('0x7')] = {};
a[_0x27b5('0x8')] = function () {
    this.isShow = !0x0;
};
a[_0x27b5('0x9')] = {};
a[_0x27b5('0xa')] = {};
a[_0x27b5('0xa')][_0x27b5('0xb')] = function (_0x3f6132, _0x272596) {
    this.relationGraph.onLineClick(_0x3f6132, this.link, _0x272596);
};
a[_0x27b5('0x7')][_0x27b5('0xc')] = function () {
    var _0x185dab = {
        RmsZl: function (_0x1a55e6, _0x3f72ad) {
            return _0x1a55e6 === _0x3f72ad;
        }
    };
    return _0x185dab.RmsZl(this.relation.id, this.options.checkedLineId);
};
a[_0x27b5('0x7')][_0x27b5('0xd')] = function () {
    return this.relation.showStartArrow && this.relationGraph.getArrow(this.relation, this.link, !0x0);
};
a[_0x27b5('0x7')][_0x27b5('0xe')] = function () {
    return this.relation.showEndArrow && this.relationGraph.getArrow(this.relation, this.link, !0x1);
};
a[_0x27b5('0x7')][_0x27b5('0xf')] = function () {
    var _0x419bce = { XwkOp: _0x27b5('0x10') };
    try {
        const {
            path: t,
            textPosition: e
        } = this.relationGraph.createLinePath(this.link, this.relation, this.relationIndex);
        let _0x4d96a2 = {};
        try {
            _0x4d96a2 = this.relationGraph.getTextTransform(this.relation, e.x, e.y, e.rotate);
        } catch (_0x5a9291) {
            console.log(_0x419bce.XwkOp, _0x5a9291);
        }
        return {
            path: t,
            textTransform: _0x4d96a2
        };
    } catch (_0x155c48) {
        console.log(_0x419bce.XwkOp, _0x155c48);
    }
    return {
        path: null,
        textTransform: null
    };
};
a[_0x27b5('0x7')][_0x27b5('0x11')] = function () {
    return this.graph.options;
};
a[_0x27b5('0x7')][_0x27b5('0x12')] = function () {
    return this.graphInstance();
};
a[_0x27b5('0x2')][_0x27b5('0x13')] = {};
a[_0x27b5('0x2')][_0x27b5('0x14')] = {};
a[_0x27b5('0x2')][_0x27b5('0x15')] = {};
a[_0x27b5('0x2')][_0x27b5('0x15')][_0x27b5('0x16')] = !0x0;
a[_0x27b5('0x2')][_0x27b5('0x15')][_0x27b5('0x17')] = () => 0x0;
a[_0x27b5('0x2')][_0x27b5('0x15')][_0x27b5('0x18')] = Number;
a[_0x27b5('0x2')][_0x27b5('0x14')][_0x27b5('0x16')] = !0x0;
a[_0x27b5('0x2')][_0x27b5('0x14')][_0x27b5('0x17')] = () => ({});
a[_0x27b5('0x2')][_0x27b5('0x14')][_0x27b5('0x18')] = Object;
a[_0x27b5('0x2')][_0x27b5('0x13')][_0x27b5('0x16')] = !0x0;
a[_0x27b5('0x2')][_0x27b5('0x13')][_0x27b5('0x17')] = () => ({});
a[_0x27b5('0x2')][_0x27b5('0x13')][_0x27b5('0x18')] = Object;
var l = function () {
        var _0x2abb7b = {};
        _0x2abb7b[_0x27b5('0x19')] = function (_0x82be27, _0x441ae4, _0x5f1ea7, _0x37a87a) {
            return _0x82be27(_0x441ae4, _0x5f1ea7, _0x37a87a);
        };
        _0x2abb7b[_0x27b5('0x1a')] = function (_0x109276, _0x34d4c0, _0x150717) {
            return _0x109276(_0x34d4c0, _0x150717);
        };
        _0x2abb7b[_0x27b5('0x1b')] = _0x27b5('0x1c');
        _0x2abb7b[_0x27b5('0x1d')] = _0x27b5('0x1e');
        _0x2abb7b[_0x27b5('0x1f')] = function (_0x164841, _0x20c08e) {
            return _0x164841 + _0x20c08e;
        };
        _0x2abb7b[_0x27b5('0x20')] = _0x27b5('0x21');
        _0x2abb7b[_0x27b5('0x22')] = function (_0x249782, _0x753cb8) {
            return _0x249782 + _0x753cb8;
        };
        _0x2abb7b[_0x27b5('0x23')] = _0x27b5('0x24');
        _0x2abb7b[_0x27b5('0x25')] = _0x27b5('0x26');
        _0x2abb7b[_0x27b5('0x27')] = _0x27b5('0x28');
        _0x2abb7b[_0x27b5('0x29')] = function (_0x4ce1ad, _0x480c2c) {
            return _0x4ce1ad > _0x480c2c;
        };
        _0x2abb7b[_0x27b5('0x2a')] = function (_0x5b218c, _0x47cb1d, _0x27c8d4, _0x1509a3) {
            return _0x5b218c(_0x47cb1d, _0x27c8d4, _0x1509a3);
        };
        _0x2abb7b[_0x27b5('0x2b')] = _0x27b5('0x2c');
        _0x2abb7b[_0x27b5('0x2d')] = _0x27b5('0x2e');
        _0x2abb7b[_0x27b5('0x2f')] = _0x27b5('0x30');
        _0x2abb7b[_0x27b5('0x31')] = function (_0xded44e, _0x1c870c) {
            return _0xded44e + _0x1c870c;
        };
        var _0x2faf5f = this, _0xe0a06a = _0x2faf5f[_0x27b5('0x32')], _0x24de97 = _0x2faf5f[_0x27b5('0x33')]['_c'] || _0xe0a06a;
        return _0x2abb7b[_0x27b5('0x19')](_0x24de97, 'g', { 'class': [_0x2faf5f[_0x27b5('0x14')][_0x27b5('0x34')]] }, [
            _0x2abb7b[_0x27b5('0x1a')](_0x24de97, _0x2abb7b[_0x27b5('0x1b')], {
                'staticClass': _0x2abb7b[_0x27b5('0x1d')],
                'class': [
                    _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x35')],
                    _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x36')] ? _0x2abb7b[_0x27b5('0x1f')](_0x2abb7b[_0x27b5('0x20')], _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x36')]) : void 0x0,
                    _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x37')] ? _0x2abb7b[_0x27b5('0x22')](_0x2abb7b[_0x27b5('0x23')], _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x37')]) : void 0x0,
                    _0x2faf5f[_0x27b5('0xc')] ? _0x2abb7b[_0x27b5('0x25')] : void 0x0
                ],
                'style': {
                    'opacity': _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x38')],
                    'pointer-events': _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x39')] && _0x2abb7b[_0x27b5('0x27')],
                    'stroke-width': _0x2abb7b[_0x27b5('0x22')](_0x2faf5f[_0x27b5('0x14')][_0x27b5('0x3a')] ? _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x3a')] : _0x2faf5f[_0x27b5('0x11')][_0x27b5('0x3b')], 'px')
                },
                'attrs': {
                    'd': _0x2faf5f[_0x27b5('0xf')][_0x27b5('0x1c')],
                    'stroke': _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x3c')] ? _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x3c')] : _0x2faf5f[_0x27b5('0x11')][_0x27b5('0x3d')],
                    'marker-start': _0x2faf5f[_0x27b5('0xd')],
                    'marker-end': _0x2faf5f[_0x27b5('0xe')],
                    'fill': _0x2abb7b[_0x27b5('0x27')]
                },
                'on': {
                    'touchstart': function (_0x4efb3d) {
                        return _0x2faf5f[_0x27b5('0xb')](_0x2faf5f[_0x27b5('0x14')], _0x4efb3d);
                    },
                    'click': function (_0x59cd0e) {
                        return _0x2faf5f[_0x27b5('0xb')](_0x2faf5f[_0x27b5('0x14')], _0x59cd0e);
                    }
                }
            }),
            _0x2faf5f[_0x27b5('0x11')][_0x27b5('0x3e')] && _0x2abb7b[_0x27b5('0x29')](_0x2faf5f[_0x27b5('0x11')][_0x27b5('0x3f')], 0x28) ? _0x2abb7b[_0x27b5('0x2a')](_0x24de97, 'g', { 'attrs': { 'transform': _0x2faf5f[_0x27b5('0xf')][_0x27b5('0x40')] } }, [_0x2abb7b[_0x27b5('0x2a')](_0x24de97, _0x2abb7b[_0x27b5('0x2b')], {
                    'key': _0x2abb7b[_0x27b5('0x22')]('t-', _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x41')]),
                    'staticClass': _0x2abb7b[_0x27b5('0x2d')],
                    'class': { 'c-rg-line-text-checked': _0x2faf5f[_0x27b5('0xc')] },
                    'style': {
                        'opacity': _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x38')],
                        'fill': _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x42')] ? _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x42')] : _0x2faf5f[_0x27b5('0x11')][_0x27b5('0x43')] ? _0x2faf5f[_0x27b5('0x11')][_0x27b5('0x43')] : _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x3c')] ? _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x3c')] : _0x2faf5f[_0x27b5('0x11')][_0x27b5('0x3d')]
                    },
                    'attrs': {
                        'x': _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x44')] || _0x2faf5f[_0x27b5('0x11')][_0x27b5('0x45')] || 0x0,
                        'y': _0x2faf5f[_0x27b5('0x14')][_0x27b5('0x46')] || _0x2faf5f[_0x27b5('0x11')][_0x27b5('0x47')] || 0xa,
                        'text-anchor': _0x2abb7b[_0x27b5('0x2f')]
                    },
                    'on': {
                        'touchstart': function (_0xbd222) {
                            return _0x2faf5f[_0x27b5('0xb')](_0x2faf5f[_0x27b5('0x14')], _0xbd222);
                        },
                        'click': function (_0x21bd73) {
                            return _0x2faf5f[_0x27b5('0xb')](_0x2faf5f[_0x27b5('0x14')], _0x21bd73);
                        }
                    }
                }, [_0x2faf5f['_v'](_0x2abb7b[_0x27b5('0x22')](_0x2abb7b[_0x27b5('0x31')]('\x20', _0x2faf5f['_s'](_0x2faf5f[_0x27b5('0x14')][_0x27b5('0x2c')])), '\x20'))])]) : _0x2faf5f['_e']()
        ]);
    }, s = [];
const o = {};
var c = _0xeeb371(a, l, s, !0x1, h, null, null, null);
function h(_0x45a34a) {
    for (let _0x53afaf in o)
        this[_0x53afaf] = o[_0x53afaf];
}
const p = function () {
    return c[_0x27b5('0x48')];
}();
export {
    p as default
};