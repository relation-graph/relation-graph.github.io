
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x279b = [
    'iXYnN',
    '#icon-lianjiezhong',
    'gKxWE',
    'axxma',
    '#icon-zidong',
    'NNfHZ',
    'OxTiD',
    '\x27刷新\x27',
    'tFHDg',
    'tdtVV',
    'TizrM',
    '#icon-ico_reset',
    'uCyeS',
    '下载图片',
    'pdNlU',
    '\x27下载图片\x27',
    'fFGrH',
    'gNTZy',
    '#icon-tupian',
    'sUrdB',
    '隐藏连线文字',
    'bKOfu',
    '\x27隐藏连线文字\x27',
    'iUiSA',
    'KsDMP',
    'default',
    'omoup',
    'both',
    '$createElement',
    '_self',
    'toolBarPositionH',
    'toolBarPositionV',
    'toolBarDirection',
    'fullscreen',
    'zoom',
    'canvasZoom',
    'isNeedShowAutoLayoutButton',
    'autoLayouting',
    'exports',
    'name',
    'VipToolbarTooltipsMyToolbar',
    'data',
    'inject',
    'graph',
    'computed',
    'mounted',
    'methods',
    'refresh',
    'switchLayout',
    'change\x20layout:',
    'toggleAutoLayout',
    'downloadAsImage',
    'png',
    'zoomToFit',
    'toggleLineText',
    'relationGraph',
    'options',
    'pUfDf',
    'RFNwe',
    'div',
    'zGFfi',
    'rel-toolbar',
    'HLHVs',
    'lOHrz',
    'rel-toolbar-h-',
    'eYusl',
    'WKqys',
    'rel-toolbar-v-',
    'wuHsD',
    'kqauz',
    'rel-toolbar-',
    'xbzsy',
    'sBsYQ',
    'tooltip',
    'VENYg',
    'v-tooltip.left',
    'REdqq',
    '全屏/退出全屏',
    'iRfmb',
    '\x27全屏/退出全屏\x27',
    'kDSag',
    'c-mb-button',
    'KBXfm',
    '0px',
    'vdYzj',
    'svg',
    'bhqWQ',
    'rg-icon',
    'laJwp',
    'true',
    'MhtHb',
    'cbNZq',
    'use',
    'somhV',
    '#icon-resize-',
    'uNuXB',
    '\x27放大\x27',
    'exJms',
    '#icon-fangda',
    'qeQTP',
    'nQVAA',
    'c-current-zoom',
    'FbAIE',
    'hyvKL',
    '\x27缩小\x27',
    'DgPKL',
    '#icon-suoxiao',
    'wAuxl',
    'lUYhE',
    '点击停止自动布局',
    'otMUK',
    '点击开始自动调整布局',
    'YnUfN',
    'options.autoLayouting?\x27点击停止自动布局\x27:\x27点击开始自动调整布局\x27',
    'eaLcX',
    'c-loading-icon\x20rg-icon'
];
(function (_0x4d15ad, _0x3630e0) {
    var _0x442741 = function (_0x30a9ff) {
        while (--_0x30a9ff) {
            _0x4d15ad['push'](_0x4d15ad['shift']());
        }
    };
    _0x442741(++_0x3630e0);
}(_0x279b, 0x183));
var _0x13f9 = function (_0x509a77, _0x10adc2) {
    _0x509a77 = _0x509a77 - 0x0;
    var _0x3ac08d = _0x279b[_0x509a77];
    return _0x3ac08d;
};
import { n as _0x11d840 } from './index-bc1c6247.js';
const r = {};
r[_0x13f9('0x0')] = _0x13f9('0x1');
r[_0x13f9('0x2')] = function () {
    return {};
};
r[_0x13f9('0x3')] = [_0x13f9('0x4')];
r[_0x13f9('0x5')] = {};
r[_0x13f9('0x6')] = function () {
};
r[_0x13f9('0x7')] = {};
r[_0x13f9('0x7')][_0x13f9('0x8')] = function () {
    this.relationGraph.refresh();
};
r[_0x13f9('0x7')][_0x13f9('0x9')] = function (_0x578ef5) {
    var _0x1d3970 = { TGEmf: _0x13f9('0xa') };
    console.log(_0x1d3970.TGEmf, _0x578ef5), this.relationGraph.switchLayout(_0x578ef5);
};
r[_0x13f9('0x7')][_0x13f9('0xb')] = function () {
    this.relationGraph.toggleAutoLayout();
};
r[_0x13f9('0x7')][_0x13f9('0xc')] = function () {
    var _0x1b362b = { MFWkE: _0x13f9('0xd') };
    this.relationGraph.downloadAsImage(_0x1b362b.MFWkE);
};
r[_0x13f9('0x7')][_0x13f9('0xe')] = async function () {
    await this.relationGraph.setZoom(0x64), await this.relationGraph.moveToCenter(), await this.relationGraph.zoomToFit();
};
r[_0x13f9('0x7')][_0x13f9('0xf')] = function () {
    this.relationGraph.options.defaultShowLineLabel = !this.relationGraph.options.defaultShowLineLabel;
};
r[_0x13f9('0x5')][_0x13f9('0x10')] = function () {
    return this.graph.instance;
};
r[_0x13f9('0x5')][_0x13f9('0x11')] = function () {
    return this.graph.options;
};
var n = function () {
        var _0x2e0acf = {};
        _0x2e0acf[_0x13f9('0x12')] = function (_0x3fe158, _0x1290cc, _0xedaffa, _0x386e5d, _0x1e933b) {
            return _0x3fe158(_0x1290cc, _0xedaffa, _0x386e5d, _0x1e933b);
        };
        _0x2e0acf[_0x13f9('0x13')] = _0x13f9('0x14');
        _0x2e0acf[_0x13f9('0x15')] = _0x13f9('0x16');
        _0x2e0acf[_0x13f9('0x17')] = function (_0x53450d, _0x4cd40a) {
            return _0x53450d + _0x4cd40a;
        };
        _0x2e0acf[_0x13f9('0x18')] = _0x13f9('0x19');
        _0x2e0acf[_0x13f9('0x1a')] = function (_0x351bd5, _0x44f1bc) {
            return _0x351bd5 + _0x44f1bc;
        };
        _0x2e0acf[_0x13f9('0x1b')] = _0x13f9('0x1c');
        _0x2e0acf[_0x13f9('0x1d')] = function (_0x2f4716, _0x1757cb) {
            return _0x2f4716 + _0x1757cb;
        };
        _0x2e0acf[_0x13f9('0x1e')] = _0x13f9('0x1f');
        _0x2e0acf[_0x13f9('0x20')] = function (_0x1cc258, _0x35bb27, _0x265b47, _0x409f04) {
            return _0x1cc258(_0x35bb27, _0x265b47, _0x409f04);
        };
        _0x2e0acf[_0x13f9('0x21')] = _0x13f9('0x22');
        _0x2e0acf[_0x13f9('0x23')] = _0x13f9('0x24');
        _0x2e0acf[_0x13f9('0x25')] = _0x13f9('0x26');
        _0x2e0acf[_0x13f9('0x27')] = _0x13f9('0x28');
        _0x2e0acf[_0x13f9('0x29')] = _0x13f9('0x2a');
        _0x2e0acf[_0x13f9('0x2b')] = _0x13f9('0x2c');
        _0x2e0acf[_0x13f9('0x2d')] = _0x13f9('0x2e');
        _0x2e0acf[_0x13f9('0x2f')] = _0x13f9('0x30');
        _0x2e0acf[_0x13f9('0x31')] = _0x13f9('0x32');
        _0x2e0acf[_0x13f9('0x33')] = function (_0xb6aa9, _0x435dfd, _0x41b18c) {
            return _0xb6aa9(_0x435dfd, _0x41b18c);
        };
        _0x2e0acf[_0x13f9('0x34')] = _0x13f9('0x35');
        _0x2e0acf[_0x13f9('0x36')] = _0x13f9('0x37');
        _0x2e0acf[_0x13f9('0x38')] = _0x13f9('0x39');
        _0x2e0acf[_0x13f9('0x3a')] = _0x13f9('0x3b');
        _0x2e0acf[_0x13f9('0x3c')] = function (_0x396bd6, _0xeb88a6, _0x522447, _0x3ae725) {
            return _0x396bd6(_0xeb88a6, _0x522447, _0x3ae725);
        };
        _0x2e0acf[_0x13f9('0x3d')] = _0x13f9('0x3e');
        _0x2e0acf[_0x13f9('0x3f')] = function (_0x1bd40d, _0xe2357f, _0x19ac2a, _0x229ee0) {
            return _0x1bd40d(_0xe2357f, _0x19ac2a, _0x229ee0);
        };
        _0x2e0acf[_0x13f9('0x40')] = _0x13f9('0x41');
        _0x2e0acf[_0x13f9('0x42')] = _0x13f9('0x43');
        _0x2e0acf[_0x13f9('0x44')] = function (_0x28e783, _0xcf5350, _0x125482, _0x5bd6e0) {
            return _0x28e783(_0xcf5350, _0x125482, _0x5bd6e0);
        };
        _0x2e0acf[_0x13f9('0x45')] = _0x13f9('0x46');
        _0x2e0acf[_0x13f9('0x47')] = _0x13f9('0x48');
        _0x2e0acf[_0x13f9('0x49')] = _0x13f9('0x4a');
        _0x2e0acf[_0x13f9('0x4b')] = _0x13f9('0x4c');
        _0x2e0acf[_0x13f9('0x4d')] = _0x13f9('0x4e');
        _0x2e0acf[_0x13f9('0x4f')] = function (_0x376e16, _0x271a9c, _0x435fd5, _0x270e74) {
            return _0x376e16(_0x271a9c, _0x435fd5, _0x270e74);
        };
        _0x2e0acf[_0x13f9('0x50')] = _0x13f9('0x51');
        _0x2e0acf[_0x13f9('0x52')] = function (_0x1cd753, _0xb80db3, _0x1707b2, _0xa1c8f5) {
            return _0x1cd753(_0xb80db3, _0x1707b2, _0xa1c8f5);
        };
        _0x2e0acf[_0x13f9('0x53')] = _0x13f9('0x54');
        _0x2e0acf[_0x13f9('0x55')] = function (_0x373b2f, _0x243165, _0x5811ae, _0x2311ab) {
            return _0x373b2f(_0x243165, _0x5811ae, _0x2311ab);
        };
        _0x2e0acf[_0x13f9('0x56')] = function (_0x5f0593, _0x616ac5, _0x5a0fab) {
            return _0x5f0593(_0x616ac5, _0x5a0fab);
        };
        _0x2e0acf[_0x13f9('0x57')] = _0x13f9('0x58');
        _0x2e0acf[_0x13f9('0x59')] = _0x13f9('0x5a');
        _0x2e0acf[_0x13f9('0x5b')] = _0x13f9('0x5c');
        _0x2e0acf[_0x13f9('0x5d')] = function (_0x3e5a30, _0x5a961f, _0x2dc091) {
            return _0x3e5a30(_0x5a961f, _0x2dc091);
        };
        _0x2e0acf[_0x13f9('0x5e')] = _0x13f9('0x5f');
        _0x2e0acf[_0x13f9('0x60')] = _0x13f9('0x61');
        _0x2e0acf[_0x13f9('0x62')] = _0x13f9('0x63');
        _0x2e0acf[_0x13f9('0x64')] = function (_0x2bb13b, _0x326c42, _0x63d8d8) {
            return _0x2bb13b(_0x326c42, _0x63d8d8);
        };
        _0x2e0acf[_0x13f9('0x65')] = _0x13f9('0x66');
        _0x2e0acf[_0x13f9('0x67')] = _0x13f9('0x68');
        var _0x154962 = this, _0x2e9ddd = _0x154962[_0x13f9('0x69')], _0x154a81 = _0x154962[_0x13f9('0x6a')]['_c'] || _0x2e9ddd;
        return _0x2e0acf[_0x13f9('0x12')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], {
            'staticClass': _0x2e0acf[_0x13f9('0x15')],
            'class': [
                _0x2e0acf[_0x13f9('0x17')](_0x2e0acf[_0x13f9('0x18')], _0x154962[_0x13f9('0x11')][_0x13f9('0x6b')]),
                _0x2e0acf[_0x13f9('0x1a')](_0x2e0acf[_0x13f9('0x1b')], _0x154962[_0x13f9('0x11')][_0x13f9('0x6c')]),
                _0x2e0acf[_0x13f9('0x1d')](_0x2e0acf[_0x13f9('0x1e')], _0x154962[_0x13f9('0x11')][_0x13f9('0x6d')])
            ]
        }, [
            _0x2e0acf[_0x13f9('0x20')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], {
                'directives': [{
                        'name': _0x2e0acf[_0x13f9('0x21')],
                        'rawName': _0x2e0acf[_0x13f9('0x23')],
                        'value': _0x2e0acf[_0x13f9('0x25')],
                        'expression': _0x2e0acf[_0x13f9('0x27')],
                        'modifiers': { 'left': !0x0 }
                    }],
                'staticClass': _0x2e0acf[_0x13f9('0x29')],
                'staticStyle': { 'margin-top': _0x2e0acf[_0x13f9('0x2b')] },
                'on': {
                    'click': function (_0x43500d) {
                        return _0x154962[_0x13f9('0x10')][_0x13f9('0x6e')]();
                    }
                }
            }, [_0x2e0acf[_0x13f9('0x20')](_0x154a81, _0x2e0acf[_0x13f9('0x2d')], {
                    'staticClass': _0x2e0acf[_0x13f9('0x2f')],
                    'attrs': { 'aria-hidden': _0x2e0acf[_0x13f9('0x31')] }
                }, [_0x2e0acf[_0x13f9('0x33')](_0x154a81, _0x2e0acf[_0x13f9('0x34')], { 'attrs': { 'xlink:href': _0x2e0acf[_0x13f9('0x36')] } })])]),
            _0x2e0acf[_0x13f9('0x20')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], {
                'directives': [{
                        'name': _0x2e0acf[_0x13f9('0x21')],
                        'rawName': _0x2e0acf[_0x13f9('0x23')],
                        'value': '放大',
                        'expression': _0x2e0acf[_0x13f9('0x38')],
                        'modifiers': { 'left': !0x0 }
                    }],
                'staticClass': _0x2e0acf[_0x13f9('0x29')],
                'on': {
                    'click': function (_0x80c79) {
                        return _0x154962[_0x13f9('0x10')][_0x13f9('0x6f')](0x14);
                    }
                }
            }, [_0x2e0acf[_0x13f9('0x20')](_0x154a81, _0x2e0acf[_0x13f9('0x2d')], {
                    'staticClass': _0x2e0acf[_0x13f9('0x2f')],
                    'attrs': { 'aria-hidden': _0x2e0acf[_0x13f9('0x31')] }
                }, [_0x2e0acf[_0x13f9('0x33')](_0x154a81, _0x2e0acf[_0x13f9('0x34')], { 'attrs': { 'xlink:href': _0x2e0acf[_0x13f9('0x3a')] } })])]),
            _0x2e0acf[_0x13f9('0x3c')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], {
                'staticClass': _0x2e0acf[_0x13f9('0x3d')],
                'on': { 'dblclick': _0x154962[_0x13f9('0xe')] }
            }, [_0x154962['_v'](_0x2e0acf[_0x13f9('0x1d')](_0x154962['_s'](_0x154962[_0x13f9('0x11')][_0x13f9('0x70')]), '%'))]),
            _0x2e0acf[_0x13f9('0x3f')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], {
                'directives': [{
                        'name': _0x2e0acf[_0x13f9('0x21')],
                        'rawName': _0x2e0acf[_0x13f9('0x23')],
                        'value': '缩小',
                        'expression': _0x2e0acf[_0x13f9('0x40')],
                        'modifiers': { 'left': !0x0 }
                    }],
                'staticClass': _0x2e0acf[_0x13f9('0x29')],
                'staticStyle': { 'margin-top': _0x2e0acf[_0x13f9('0x2b')] },
                'on': {
                    'click': function (_0x1edbeb) {
                        return _0x154962[_0x13f9('0x10')][_0x13f9('0x6f')](-0x14);
                    }
                }
            }, [_0x2e0acf[_0x13f9('0x3f')](_0x154a81, _0x2e0acf[_0x13f9('0x2d')], {
                    'staticClass': _0x2e0acf[_0x13f9('0x2f')],
                    'attrs': { 'aria-hidden': _0x2e0acf[_0x13f9('0x31')] }
                }, [_0x2e0acf[_0x13f9('0x33')](_0x154a81, _0x2e0acf[_0x13f9('0x34')], { 'attrs': { 'xlink:href': _0x2e0acf[_0x13f9('0x42')] } })])]),
            _0x154962[_0x13f9('0x11')][_0x13f9('0x71')] ? _0x2e0acf[_0x13f9('0x44')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], {
                'directives': [{
                        'name': _0x2e0acf[_0x13f9('0x21')],
                        'rawName': _0x2e0acf[_0x13f9('0x23')],
                        'value': _0x154962[_0x13f9('0x11')][_0x13f9('0x72')] ? _0x2e0acf[_0x13f9('0x45')] : _0x2e0acf[_0x13f9('0x47')],
                        'expression': _0x2e0acf[_0x13f9('0x49')],
                        'modifiers': { 'left': !0x0 }
                    }],
                'staticClass': _0x2e0acf[_0x13f9('0x29')],
                'class': { 'c-mb-button-on': _0x154962[_0x13f9('0x11')][_0x13f9('0x72')] },
                'on': { 'click': _0x154962[_0x13f9('0xb')] }
            }, [_0x154962[_0x13f9('0x11')][_0x13f9('0x72')] ? _0x2e0acf[_0x13f9('0x44')](_0x154a81, _0x2e0acf[_0x13f9('0x2d')], {
                    'staticClass': _0x2e0acf[_0x13f9('0x4b')],
                    'attrs': { 'aria-hidden': _0x2e0acf[_0x13f9('0x31')] }
                }, [_0x2e0acf[_0x13f9('0x33')](_0x154a81, _0x2e0acf[_0x13f9('0x34')], { 'attrs': { 'xlink:href': _0x2e0acf[_0x13f9('0x4d')] } })]) : _0x2e0acf[_0x13f9('0x4f')](_0x154a81, _0x2e0acf[_0x13f9('0x2d')], {
                    'staticClass': _0x2e0acf[_0x13f9('0x2f')],
                    'attrs': { 'aria-hidden': _0x2e0acf[_0x13f9('0x31')] }
                }, [_0x2e0acf[_0x13f9('0x33')](_0x154a81, _0x2e0acf[_0x13f9('0x34')], { 'attrs': { 'xlink:href': _0x2e0acf[_0x13f9('0x50')] } })])]) : _0x154962['_e'](),
            _0x2e0acf[_0x13f9('0x52')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], {
                'directives': [{
                        'name': _0x2e0acf[_0x13f9('0x21')],
                        'rawName': _0x2e0acf[_0x13f9('0x23')],
                        'value': '刷新',
                        'expression': _0x2e0acf[_0x13f9('0x53')],
                        'modifiers': { 'left': !0x0 }
                    }],
                'staticClass': _0x2e0acf[_0x13f9('0x29')],
                'on': { 'click': _0x154962[_0x13f9('0x8')] }
            }, [_0x2e0acf[_0x13f9('0x55')](_0x154a81, _0x2e0acf[_0x13f9('0x2d')], {
                    'staticClass': _0x2e0acf[_0x13f9('0x2f')],
                    'attrs': { 'aria-hidden': _0x2e0acf[_0x13f9('0x31')] }
                }, [_0x2e0acf[_0x13f9('0x56')](_0x154a81, _0x2e0acf[_0x13f9('0x34')], { 'attrs': { 'xlink:href': _0x2e0acf[_0x13f9('0x57')] } })])]),
            _0x2e0acf[_0x13f9('0x55')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], {
                'directives': [{
                        'name': _0x2e0acf[_0x13f9('0x21')],
                        'rawName': _0x2e0acf[_0x13f9('0x23')],
                        'value': _0x2e0acf[_0x13f9('0x59')],
                        'expression': _0x2e0acf[_0x13f9('0x5b')],
                        'modifiers': { 'left': !0x0 }
                    }],
                'staticClass': _0x2e0acf[_0x13f9('0x29')],
                'on': { 'click': _0x154962[_0x13f9('0xc')] }
            }, [_0x2e0acf[_0x13f9('0x55')](_0x154a81, _0x2e0acf[_0x13f9('0x2d')], {
                    'staticClass': _0x2e0acf[_0x13f9('0x2f')],
                    'attrs': { 'aria-hidden': _0x2e0acf[_0x13f9('0x31')] }
                }, [_0x2e0acf[_0x13f9('0x5d')](_0x154a81, _0x2e0acf[_0x13f9('0x34')], { 'attrs': { 'xlink:href': _0x2e0acf[_0x13f9('0x5e')] } })])]),
            _0x2e0acf[_0x13f9('0x55')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], {
                'directives': [{
                        'name': _0x2e0acf[_0x13f9('0x21')],
                        'rawName': _0x2e0acf[_0x13f9('0x23')],
                        'value': _0x2e0acf[_0x13f9('0x60')],
                        'expression': _0x2e0acf[_0x13f9('0x62')],
                        'modifiers': { 'left': !0x0 }
                    }],
                'staticClass': _0x2e0acf[_0x13f9('0x29')],
                'on': { 'click': _0x154962[_0x13f9('0xf')] }
            }, [_0x2e0acf[_0x13f9('0x55')](_0x154a81, _0x2e0acf[_0x13f9('0x2d')], {
                    'staticClass': _0x2e0acf[_0x13f9('0x2f')],
                    'attrs': { 'aria-hidden': _0x2e0acf[_0x13f9('0x31')] }
                }, [_0x2e0acf[_0x13f9('0x64')](_0x154a81, _0x2e0acf[_0x13f9('0x34')], { 'attrs': { 'xlink:href': _0x2e0acf[_0x13f9('0x5e')] } })])]),
            _0x154962['_t'](_0x2e0acf[_0x13f9('0x65')]),
            _0x2e0acf[_0x13f9('0x64')](_0x154a81, _0x2e0acf[_0x13f9('0x13')], { 'staticStyle': { 'clear': _0x2e0acf[_0x13f9('0x67')] } })
        ], 0x2);
    }, l = [];
const a = {};
var c = _0x11d840(r, n, l, !0x1, u, null, null, null);
function u(_0x28b05e) {
    for (let _0x1c8962 in a)
        this[_0x1c8962] = a[_0x1c8962];
}
const d = function () {
    return c[_0x13f9('0x73')];
}();
export {
    d as default
};