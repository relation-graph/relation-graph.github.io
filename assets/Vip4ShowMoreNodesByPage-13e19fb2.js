
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x51f4 = [
    'rgba(255,\x20255,\x20255,\x200.6)',
    'CUXUx',
    'RelationGraph',
    'TItoi',
    'graphRef',
    'Rntob',
    'node',
    '$createElement',
    '_self',
    'graphOptions',
    'type',
    'text',
    '61e4fc30',
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
    'jwmRW',
    'uvvJC',
    'etaqO',
    'VUsjM',
    'FFLHG',
    'ifwRz',
    'div',
    'dbOuS',
    'my-node\x20more-btn',
    'JvvCF',
    'dJFoU',
    'nGyWU',
    'cpnrS',
    'my-node\x20my-root',
    'xkIEV',
    'klgyy',
    'DrfAH',
    'level1',
    'AhMDe',
    'DekrO',
    'my-node',
    'safLE',
    '100px',
    'zEzBJ',
    '0px',
    'EUIMa',
    'center',
    'qRCYx',
    '#2c3e50',
    'Mzbtk',
    '#ffffff',
    'RtaTo',
    'JYrqx',
    'XbKVk',
    'span',
    'KhZWZ',
    'c-circle-flag',
    'siLqW',
    '#efefef\x20solid\x201px',
    'TNKGk',
    '30px',
    'TJnqt',
    '\x20本页面使用的数据都是随机生成的，如果想要看看其他数据效果，可以重新进入此页面即可\x20',
    'vNLjx',
    'vIwgG',
    'loading',
    'kcBlr',
    'v-loading',
    'kVZGA',
    'g_loading',
    'HdePS',
    'calc(100vh\x20-\x2060px)',
    'BpHdT',
    '正在加载数据...',
    'MiztM',
    'el-icon-loading',
    'bhaqZ'
];
(function (_0x15bfee, _0x44975a) {
    var _0x28f019 = function (_0x237031) {
        while (--_0x237031) {
            _0x15bfee['push'](_0x15bfee['shift']());
        }
    };
    _0x28f019(++_0x44975a);
}(_0x51f4, 0xf4));
var _0x58e2 = function (_0xc47a0e, _0x212524) {
    _0xc47a0e = _0xc47a0e - 0x0;
    var _0x5439ce = _0x51f4[_0xc47a0e];
    return _0x5439ce;
};
import { n as _0x596de0 } from './index-08f7799e.js';
const m = {}, p = {}, h = [
        '',
        '天星',
        _0x58e2('0x0'),
        _0x58e2('0x1'),
        _0x58e2('0x2')
    ];
p[_0x58e2('0x3')] = _0x58e2('0x4');
p[_0x58e2('0x5')] = {};
p[_0x58e2('0x6')] = function () {
    var _0x3a9881 = { fTKAp: _0x58e2('0x7') };
    return {
        currentCase: _0x3a9881.fTKAp,
        isShowCodePanel: !0x1,
        g_loading: !0x1,
        newNodeIndex: 0x0,
        graphOptions: m
    };
};
p[_0x58e2('0x8')] = function () {
    this.showGraph();
};
p[_0x58e2('0x9')] = {};
p[_0x58e2('0x9')][_0x58e2('0xa')] = async function () {
    var _0xd6d879 = {
        UOGYX: _0x58e2('0xb'),
        oHAgj: _0x58e2('0xc'),
        PwlME: _0x58e2('0xd'),
        xiNjq: _0x58e2('0xe')
    };
    const _0xa9bc77 = {
        rootId: _0xd6d879.UOGYX,
        nodes: [{
                id: _0xd6d879.UOGYX,
                text: _0xd6d879.oHAgj,
                offset_x: 0x0,
                data: { type: _0xd6d879.UOGYX }
            }],
        lines: []
    };
    this.generateChildNodes(_0xd6d879.UOGYX, _0xd6d879.PwlME, _0xa9bc77), this.generateChildNodes(_0xd6d879.UOGYX, _0xd6d879.xiNjq, _0xa9bc77), console.log(JSON.stringify(_0xa9bc77));
    const _0x1c2898 = this.$refs.graphRef.getInstance();
    await _0x1c2898.setJsonData(_0xa9bc77, !0x0), await _0x1c2898.playShowEffect(), await this.hideMoreNodes(0x1);
};
p[_0x58e2('0x9')][_0x58e2('0xf')] = function (_0x265e39, _0x8d6727) {
    var _0x1fb293 = { KiFqk: _0x58e2('0x10') };
    console.log(_0x1fb293.KiFqk, _0x265e39);
};
p[_0x58e2('0x9')][_0x58e2('0x11')] = async function (_0x2a359) {
    var _0x513f20 = {
        kEBuC: function (_0x36e6cc, _0x2eaa8d) {
            return _0x36e6cc > _0x2eaa8d;
        },
        sbOJE: _0x58e2('0x12'),
        UxQbj: _0x58e2('0xd'),
        rKMui: _0x58e2('0x13'),
        gbKOu: _0x58e2('0x14'),
        rSZOP: _0x58e2('0xe'),
        SEFWb: _0x58e2('0x15')
    };
    const _0x533a90 = this.$refs.graphRef.getInstance(), _0x156316 = _0x533a90.getNodes();
    let _0x24bd06 = [], _0x197b1a = [];
    _0x156316.forEach(_0x1e64ea => {
        if (!_0x1e64ea.lot || !_0x1e64ea.lot.childs)
            return;
        let _0x4b4e47 = _0x1e64ea.targetTo;
        _0x513f20.kEBuC(_0x4b4e47.length, 0x2) && (_0x4b4e47.slice(0x2).forEach(_0x4082b7 => {
            _0x4082b7.isHide = !0x0;
        }), _0x197b1a.push({
            id: `${ _0x1e64ea.id }-to-more`,
            text: _0x513f20.sbOJE,
            alignItems: _0x513f20.UxQbj,
            data: { type: _0x513f20.rKMui }
        }), _0x24bd06.push({
            from: _0x1e64ea.id,
            to: `${ _0x1e64ea.id }-to-more`
        })), _0x4b4e47 = _0x1e64ea.targetFrom, _0x513f20.kEBuC(_0x4b4e47.length, 0x2) && (_0x4b4e47.slice(0x2).forEach(_0x2b9351 => {
            _0x2b9351.isHide = !0x0;
        }), _0x197b1a.push({
            id: `${ _0x1e64ea.id }-from-more`,
            text: _0x513f20.gbKOu,
            alignItems: _0x513f20.rSZOP,
            data: { type: _0x513f20.SEFWb }
        }), _0x24bd06.push({
            from: `${ _0x1e64ea.id }-from-more`,
            to: _0x1e64ea.id
        }));
    }), _0x533a90.addNodes(_0x197b1a), _0x533a90.addLines(_0x24bd06), await _0x533a90.doLayout(), await _0x533a90.setZoom(0x50);
};
p[_0x58e2('0x9')][_0x58e2('0x16')] = function (_0x3c183a) {
    var _0x2a61d3 = {
        XXwgI: _0x58e2('0x16'),
        YoxEL: function (_0x4569ee, _0x1ca595) {
            return _0x4569ee === _0x1ca595;
        },
        KXjTZ: _0x58e2('0x13'),
        EzpBI: _0x58e2('0x17'),
        jkPgq: function (_0x3ea14f, _0x267111) {
            return _0x3ea14f === _0x267111;
        },
        fhFiE: _0x58e2('0x15')
    };
    console.log(_0x2a61d3.XXwgI);
    const _0xbc0604 = this.$refs.graphRef.getInstance();
    if (_0x2a61d3.YoxEL(_0x3c183a.data.type, _0x2a61d3.KXjTZ)) {
        const _0x2065a2 = _0x3c183a.lot.parent.targetTo;
        console.log(_0x2a61d3.EzpBI, _0x2065a2.length), _0x2065a2.forEach(_0x23917b => {
            _0x23917b.isHide = !0x1;
        }), _0xbc0604.removeNodeById(_0x3c183a.id), _0xbc0604.doLayout();
    }
    if (_0x2a61d3.jkPgq(_0x3c183a.data.type, _0x2a61d3.fhFiE)) {
        const _0x33c69b = _0x3c183a.lot.parent.targetFrom;
        console.log(_0x2a61d3.EzpBI, _0x33c69b.length), _0x33c69b.forEach(_0x4694ba => {
            _0x4694ba.isHide = !0x1;
        }), _0xbc0604.removeNodeById(_0x3c183a.id), _0xbc0604.doLayout();
    }
};
p[_0x58e2('0x9')][_0x58e2('0x18')] = function (_0x2eb8a0, _0x69a40, _0x38fa4d) {
    var _0x353746 = { jMpYZ: _0x58e2('0x19') };
    console.log(_0x353746.jMpYZ, _0x2eb8a0);
};
p[_0x58e2('0x9')][_0x58e2('0x1a')] = function (_0x3985ad, _0x461e65, _0x267791, _0x5adf58 = 0x1) {
    var _0x32895e = {
        JDJOk: function (_0x2af189, _0x293267) {
            return _0x2af189 + _0x293267;
        },
        ICfRY: function (_0x417c7d, _0x28a6e3) {
            return _0x417c7d * _0x28a6e3;
        },
        FNcEf: _0x58e2('0x1b'),
        ftGBC: _0x58e2('0x1c'),
        KGjTi: function (_0x13b582, _0x52ddfb) {
            return _0x13b582 < _0x52ddfb;
        },
        TEHDO: function (_0x35d01a, _0x3f518f) {
            return _0x35d01a + _0x3f518f;
        },
        NGLJZ: function (_0x1c37d4, _0x4d1e8c) {
            return _0x1c37d4 === _0x4d1e8c;
        },
        zRWwd: _0x58e2('0xd'),
        aFCYq: _0x58e2('0xe'),
        jzXzH: function (_0x7a3e27, _0x6b1ec3) {
            return _0x7a3e27 < _0x6b1ec3;
        },
        IkOaV: function (_0x1a4b14, _0x13c527) {
            return _0x1a4b14 > _0x13c527;
        }
    };
    const _0xab63df = _0x32895e.JDJOk(0x1, Math.floor(_0x32895e.ICfRY(Math.random(), 0xa)));
    console.log(_0x32895e.FNcEf, _0x3985ad, _0x32895e.ftGBC, _0xab63df);
    for (let _0x3c8ce1 = 0x0; _0x32895e.KGjTi(_0x3c8ce1, _0xab63df); _0x3c8ce1++) {
        const _0x3e9927 = this.newNodeIndex++, _0x149e86 = _0x32895e.TEHDO('N', _0x3e9927), _0x4a7318 = `N${ _0x3e9927 }北京${ h[Math.floor(_0x32895e.ICfRY(Math.random(), h.length))] }第${ _0x149e86 }公司`, _0x5a9bdd = {
                id: _0x149e86,
                text: _0x4a7318,
                alignItems: _0x32895e.NGLJZ(_0x461e65, _0x32895e.zRWwd) ? _0x32895e.aFCYq : _0x32895e.zRWwd
            };
        let _0x5a75b3;
        _0x32895e.NGLJZ(_0x461e65, _0x32895e.zRWwd) ? _0x5a75b3 = {
            from: _0x149e86,
            to: _0x3985ad
        } : _0x5a75b3 = {
            from: _0x3985ad,
            to: _0x149e86
        }, _0x267791.nodes.push(_0x5a9bdd), _0x267791.lines.push(_0x5a75b3), _0x32895e.jzXzH(_0x5adf58, 0x3) && _0x32895e.IkOaV(Math.random(), 0.5) && _0x32895e.IkOaV(this.generateChildNodes(_0x149e86, _0x461e65, _0x267791, _0x32895e.TEHDO(_0x5adf58, 0x1)), 0x0) && (_0x5a9bdd.expandHolderPosition = _0x461e65);
    }
    return _0xab63df;
};
m[_0x58e2('0x1d')] = !0x1;
m[_0x58e2('0x1e')] = !0x0;
m[_0x58e2('0x1f')] = !0x0;
m[_0x58e2('0x20')] = [{
        layoutName: _0x58e2('0x21'),
        from: _0x58e2('0xd'),
        min_per_width: _0x58e2('0x22'),
        max_per_width: _0x58e2('0x22'),
        min_per_height: '40',
        max_per_height: '50',
        enableGatherNodes: !0x1,
        levelDistance: _0x58e2('0x23')
    }];
m[_0x58e2('0x24')] = 0x1;
m[_0x58e2('0x25')] = 0x4;
m[_0x58e2('0x26')] = 'lr';
m[_0x58e2('0x27')] = 0x0;
m[_0x58e2('0x28')] = _0x58e2('0x29');
m[_0x58e2('0x2a')] = _0x58e2('0x2b');
var u = function () {
        var _0x368a87 = {};
        _0x368a87[_0x58e2('0x2c')] = function (_0x4fe9b0, _0x1bc81b) {
            return _0x4fe9b0 === _0x1bc81b;
        };
        _0x368a87[_0x58e2('0x2d')] = _0x58e2('0x15');
        _0x368a87[_0x58e2('0x2e')] = function (_0xfd8367, _0x55b1bc) {
            return _0xfd8367 === _0x55b1bc;
        };
        _0x368a87[_0x58e2('0x2f')] = _0x58e2('0x13');
        _0x368a87[_0x58e2('0x30')] = function (_0x12abdf, _0x487c18, _0x450951, _0x97d67a) {
            return _0x12abdf(_0x487c18, _0x450951, _0x97d67a);
        };
        _0x368a87[_0x58e2('0x31')] = _0x58e2('0x32');
        _0x368a87[_0x58e2('0x33')] = _0x58e2('0x34');
        _0x368a87[_0x58e2('0x35')] = function (_0x2aede8, _0x5a2281) {
            return _0x2aede8 + _0x5a2281;
        };
        _0x368a87[_0x58e2('0x36')] = function (_0x5703f8, _0x34c34c) {
            return _0x5703f8 + _0x34c34c;
        };
        _0x368a87[_0x58e2('0x37')] = _0x58e2('0xb');
        _0x368a87[_0x58e2('0x38')] = _0x58e2('0x39');
        _0x368a87[_0x58e2('0x3a')] = function (_0x2769d1, _0x693c3c) {
            return _0x2769d1 + _0x693c3c;
        };
        _0x368a87[_0x58e2('0x3b')] = function (_0x3b8803, _0x3e987c) {
            return _0x3b8803 === _0x3e987c;
        };
        _0x368a87[_0x58e2('0x3c')] = _0x58e2('0x3d');
        _0x368a87[_0x58e2('0x3e')] = function (_0xf46cee, _0x2c635f, _0x4cf585, _0x2b39d7) {
            return _0xf46cee(_0x2c635f, _0x4cf585, _0x2b39d7);
        };
        _0x368a87[_0x58e2('0x3f')] = _0x58e2('0x40');
        _0x368a87[_0x58e2('0x41')] = _0x58e2('0x42');
        _0x368a87[_0x58e2('0x43')] = _0x58e2('0x44');
        _0x368a87[_0x58e2('0x45')] = _0x58e2('0x46');
        _0x368a87[_0x58e2('0x47')] = _0x58e2('0x48');
        _0x368a87[_0x58e2('0x49')] = _0x58e2('0x4a');
        _0x368a87[_0x58e2('0x4b')] = function (_0x44aa37, _0x2a4654, _0x4487a3, _0x247fd0) {
            return _0x44aa37(_0x2a4654, _0x4487a3, _0x247fd0);
        };
        _0x368a87[_0x58e2('0x4c')] = function (_0x2fbc71, _0x50b01e, _0x347198) {
            return _0x2fbc71(_0x50b01e, _0x347198);
        };
        _0x368a87[_0x58e2('0x4d')] = _0x58e2('0x4e');
        _0x368a87[_0x58e2('0x4f')] = _0x58e2('0x50');
        _0x368a87[_0x58e2('0x51')] = _0x58e2('0x52');
        _0x368a87[_0x58e2('0x53')] = _0x58e2('0x54');
        _0x368a87[_0x58e2('0x55')] = _0x58e2('0x56');
        _0x368a87[_0x58e2('0x57')] = function (_0x288307, _0x337c88, _0x5a3421, _0x26350c, _0x68243) {
            return _0x288307(_0x337c88, _0x5a3421, _0x26350c, _0x68243);
        };
        _0x368a87[_0x58e2('0x58')] = _0x58e2('0x59');
        _0x368a87[_0x58e2('0x5a')] = _0x58e2('0x5b');
        _0x368a87[_0x58e2('0x5c')] = _0x58e2('0x5d');
        _0x368a87[_0x58e2('0x5e')] = _0x58e2('0x5f');
        _0x368a87[_0x58e2('0x60')] = _0x58e2('0x61');
        _0x368a87[_0x58e2('0x62')] = _0x58e2('0x63');
        _0x368a87[_0x58e2('0x64')] = _0x58e2('0x65');
        _0x368a87[_0x58e2('0x66')] = _0x58e2('0x67');
        _0x368a87[_0x58e2('0x68')] = _0x58e2('0x69');
        _0x368a87[_0x58e2('0x6a')] = _0x58e2('0x6b');
        var _0x59d282 = this, _0x1e0896 = _0x59d282[_0x58e2('0x6c')], _0x275732 = _0x59d282[_0x58e2('0x6d')]['_c'] || _0x1e0896;
        return _0x368a87[_0x58e2('0x4c')](_0x275732, _0x368a87[_0x58e2('0x31')], [
            _0x368a87[_0x58e2('0x4b')](_0x275732, _0x368a87[_0x58e2('0x31')], {
                'staticStyle': {
                    'background-color': _0x368a87[_0x58e2('0x49')],
                    'border-bottom': _0x368a87[_0x58e2('0x51')],
                    'line-height': _0x368a87[_0x58e2('0x53')]
                }
            }, [_0x59d282['_v'](_0x368a87[_0x58e2('0x55')])]),
            _0x368a87[_0x58e2('0x57')](_0x275732, _0x368a87[_0x58e2('0x31')], {
                'directives': [{
                        'name': _0x368a87[_0x58e2('0x58')],
                        'rawName': _0x368a87[_0x58e2('0x5a')],
                        'value': _0x59d282[_0x58e2('0x5d')],
                        'expression': _0x368a87[_0x58e2('0x5c')]
                    }],
                'staticStyle': { 'height': _0x368a87[_0x58e2('0x5e')] },
                'attrs': {
                    'element-loading-text': _0x368a87[_0x58e2('0x60')],
                    'element-loading-spinner': _0x368a87[_0x58e2('0x62')],
                    'element-loading-background': _0x368a87[_0x58e2('0x64')]
                }
            }, [_0x368a87[_0x58e2('0x4c')](_0x275732, _0x368a87[_0x58e2('0x66')], {
                    'ref': _0x368a87[_0x58e2('0x68')],
                    'attrs': {
                        'options': _0x59d282[_0x58e2('0x6e')],
                        'on-node-click': _0x59d282[_0x58e2('0xf')],
                        'on-line-click': _0x59d282[_0x58e2('0x18')]
                    },
                    'scopedSlots': _0x59d282['_u']([{
                            'key': _0x368a87[_0x58e2('0x6a')],
                            'fn': function (_0x28715f) {
                                var _0x4eaebd = _0x28715f[_0x58e2('0x6b')];
                                return [_0x368a87[_0x58e2('0x2c')](_0x4eaebd[_0x58e2('0x6')][_0x58e2('0x6f')], _0x368a87[_0x58e2('0x2d')]) || _0x368a87[_0x58e2('0x2e')](_0x4eaebd[_0x58e2('0x6')][_0x58e2('0x6f')], _0x368a87[_0x58e2('0x2f')]) ? _0x368a87[_0x58e2('0x30')](_0x275732, _0x368a87[_0x58e2('0x31')], {
                                        'staticClass': _0x368a87[_0x58e2('0x33')],
                                        'on': {
                                            'click': function (_0x2522b4) {
                                                return _0x59d282[_0x58e2('0x16')](_0x4eaebd);
                                            }
                                        }
                                    }, [_0x59d282['_v'](_0x368a87[_0x58e2('0x35')](_0x368a87[_0x58e2('0x36')]('\x20', _0x59d282['_s'](_0x4eaebd[_0x58e2('0x70')])), '\x20'))]) : _0x368a87[_0x58e2('0x2e')](_0x4eaebd[_0x58e2('0x6')][_0x58e2('0x6f')], _0x368a87[_0x58e2('0x37')]) ? _0x368a87[_0x58e2('0x30')](_0x275732, _0x368a87[_0x58e2('0x31')], { 'staticClass': _0x368a87[_0x58e2('0x38')] }, [_0x59d282['_v'](_0x368a87[_0x58e2('0x36')](_0x368a87[_0x58e2('0x3a')]('\x20', _0x59d282['_s'](_0x4eaebd[_0x58e2('0x70')])), '\x20'))]) : _0x368a87[_0x58e2('0x3b')](_0x4eaebd[_0x58e2('0x6')][_0x58e2('0x6f')], _0x368a87[_0x58e2('0x3c')]) ? _0x368a87[_0x58e2('0x3e')](_0x275732, _0x368a87[_0x58e2('0x31')], {
                                        'staticClass': _0x368a87[_0x58e2('0x3f')],
                                        'staticStyle': {
                                            'width': _0x368a87[_0x58e2('0x41')],
                                            'padding-left': _0x368a87[_0x58e2('0x43')],
                                            'text-align': _0x368a87[_0x58e2('0x45')],
                                            'background-color': _0x368a87[_0x58e2('0x47')],
                                            'color': _0x368a87[_0x58e2('0x49')]
                                        }
                                    }, [_0x59d282['_v'](_0x368a87[_0x58e2('0x3a')](_0x368a87[_0x58e2('0x3a')]('\x20', _0x59d282['_s'](_0x4eaebd[_0x58e2('0x70')])), '\x20'))]) : _0x368a87[_0x58e2('0x4b')](_0x275732, _0x368a87[_0x58e2('0x31')], { 'staticClass': _0x368a87[_0x58e2('0x3f')] }, [
                                        _0x368a87[_0x58e2('0x4c')](_0x275732, _0x368a87[_0x58e2('0x4d')], { 'staticClass': _0x368a87[_0x58e2('0x4f')] }),
                                        _0x59d282['_v'](_0x368a87[_0x58e2('0x3a')](_0x59d282['_s'](_0x4eaebd[_0x58e2('0x70')]), '\x20'))
                                    ])];
                            }
                        }])
                })], 0x1)
        ]);
    }, _ = [];
const f = {};
var N = _0x596de0(p, u, _, !0x1, v, _0x58e2('0x71'), null, null);
function v(_0xdb5d) {
    for (let _0x1db5de in f)
        this[_0x1db5de] = f[_0x1db5de];
}
const C = function () {
    return N[_0x58e2('0x72')];
}();
export {
    C as default
};