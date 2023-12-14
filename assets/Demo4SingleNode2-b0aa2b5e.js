
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x57f2 = [
    'onLineClick',
    'name',
    'Demo4SingleNode2',
    'components',
    'data',
    'border',
    '#333333',
    'force',
    'mounted',
    'methods',
    'showGraph',
    'onNodeClick:',
    'onLineClick:',
    'exports',
    'oGAlT',
    'RbGQn',
    'div',
    'DMmeD',
    'JLqsX',
    'calc(100vh\x20-\x2060px)',
    'cLfdJ',
    'RelationGraph',
    'fsqhZ',
    'graphRef',
    '$createElement',
    '_self',
    'graphOptions',
    'onNodeClick'
];
(function (_0x5e2360, _0x2145f8) {
    var _0x3d6031 = function (_0x4beb47) {
        while (--_0x4beb47) {
            _0x5e2360['push'](_0x5e2360['shift']());
        }
    };
    _0x3d6031(++_0x2145f8);
}(_0x57f2, 0x17a));
var _0x420e = function (_0x1c7410, _0x5e9af6) {
    _0x1c7410 = _0x1c7410 - 0x0;
    var _0x18d6b7 = _0x57f2[_0x1c7410];
    return _0x18d6b7;
};
import { n as _0x27a2ba } from './index-7cdfa577.js';
var d = function () {
        var _0x581e74 = {};
        _0x581e74[_0x420e('0x0')] = function (_0x38abd9, _0x30eab7, _0x373f53) {
            return _0x38abd9(_0x30eab7, _0x373f53);
        };
        _0x581e74[_0x420e('0x1')] = _0x420e('0x2');
        _0x581e74[_0x420e('0x3')] = function (_0xbcbe26, _0x4695c4, _0x1047a2, _0x5a91be, _0x3ab67b) {
            return _0xbcbe26(_0x4695c4, _0x1047a2, _0x5a91be, _0x3ab67b);
        };
        _0x581e74[_0x420e('0x4')] = _0x420e('0x5');
        _0x581e74[_0x420e('0x6')] = _0x420e('0x7');
        _0x581e74[_0x420e('0x8')] = _0x420e('0x9');
        var _0x5d9489 = this, _0x33ae23 = _0x5d9489[_0x420e('0xa')], _0xda49f2 = _0x5d9489[_0x420e('0xb')]['_c'] || _0x33ae23;
        return _0x581e74[_0x420e('0x0')](_0xda49f2, _0x581e74[_0x420e('0x1')], [_0x581e74[_0x420e('0x3')](_0xda49f2, _0x581e74[_0x420e('0x1')], { 'staticStyle': { 'height': _0x581e74[_0x420e('0x4')] } }, [_0x581e74[_0x420e('0x0')](_0xda49f2, _0x581e74[_0x420e('0x6')], {
                    'ref': _0x581e74[_0x420e('0x8')],
                    'attrs': {
                        'options': _0x5d9489[_0x420e('0xc')],
                        'on-node-click': _0x5d9489[_0x420e('0xd')],
                        'on-line-click': _0x5d9489[_0x420e('0xe')]
                    }
                })], 0x1)]);
    }, a = [];
const l = {}, n = {};
l[_0x420e('0xf')] = _0x420e('0x10');
l[_0x420e('0x11')] = {};
l[_0x420e('0x12')] = function () {
    var _0xd802a3 = {
        YWLRz: _0x420e('0x13'),
        LNHRt: _0x420e('0x14'),
        mFtBd: _0x420e('0x15')
    };
    return {
        isShowCodePanel: !0x1,
        graphOptions: {
            debug: !0x1,
            allowSwitchLineShape: !0x0,
            allowSwitchJunctionPoint: !0x0,
            allowShowDownloadButton: !0x0,
            defaultJunctionPoint: _0xd802a3.YWLRz,
            defaultLineWidth: 0x2,
            defaultLineColor: _0xd802a3.LNHRt,
            layout: { layoutName: _0xd802a3.mFtBd }
        }
    };
};
l[_0x420e('0x16')] = function () {
    this.showGraph();
};
l[_0x420e('0x17')] = {};
l[_0x420e('0x17')][_0x420e('0x18')] = function () {
    var _0x34dd4c = {
        kErLd: function (_0x33777a, _0x2c4e99) {
            return _0x33777a !== _0x2c4e99;
        }
    };
    const _0x5a1cd4 = {
            nodes: [
                {
                    id: 'a',
                    text: 'a'
                },
                {
                    id: 'b',
                    text: 'b'
                },
                {
                    id: 'b1',
                    text: 'b1'
                },
                {
                    id: 'b2',
                    text: 'b2'
                },
                {
                    id: 'b3',
                    text: 'b3'
                },
                {
                    id: 'b4',
                    text: 'b4'
                },
                {
                    id: 'b5',
                    text: 'b5'
                },
                {
                    id: 'b6',
                    text: 'b6'
                },
                {
                    id: 'c',
                    text: 'c'
                },
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
                },
                {
                    id: 'd',
                    text: 'd'
                },
                {
                    id: 'd1',
                    text: 'd1'
                },
                {
                    id: 'd2',
                    text: 'd2'
                },
                {
                    id: 'd3',
                    text: 'd3'
                },
                {
                    id: 'd4',
                    text: 'd4'
                },
                {
                    id: 'e',
                    text: 'e'
                },
                {
                    id: 'e1',
                    text: 'e1'
                },
                {
                    id: 'e2',
                    text: 'e2'
                }
            ],
            lines: [
                {
                    from: 'b',
                    to: 'b1'
                },
                {
                    from: 'b',
                    to: 'b2'
                },
                {
                    from: 'd',
                    to: 'd1'
                },
                {
                    from: 'd',
                    to: 'd2'
                },
                {
                    from: 'e',
                    to: 'e2'
                }
            ]
        }, _0x5b7721 = _0x5a1cd4.nodes[0x0].id;
    _0x5a1cd4.rootId = _0x5b7721, _0x5a1cd4.nodes.forEach(_0x44d42b => {
        _0x34dd4c.kErLd(_0x44d42b.id, _0x5b7721) && _0x5a1cd4.lines.push({
            from: _0x5b7721,
            to: _0x44d42b.id,
            opacity: 0x0
        });
    }), this.$refs.graphRef.setJsonData(_0x5a1cd4, _0x17522c => {
    });
};
l[_0x420e('0x17')][_0x420e('0xd')] = function (_0x1cc034, _0x46cd89) {
    var _0x5a9e9 = { DQpod: _0x420e('0x19') };
    console.log(_0x5a9e9.DQpod, _0x1cc034);
};
l[_0x420e('0x17')][_0x420e('0xe')] = function (_0x1550c7, _0x2624bd, _0x19aa8a) {
    var _0x2ca012 = { ZTnCM: _0x420e('0x1a') };
    console.log(_0x2ca012.ZTnCM, _0x1550c7);
};
var r = _0x27a2ba(l, d, a, !0x1, c, null, null, null);
function c(_0x597ecd) {
    for (let _0x7078a8 in n)
        this[_0x7078a8] = n[_0x7078a8];
}
const h = function () {
    return r[_0x420e('0x1b')];
}();
export {
    h as default
};