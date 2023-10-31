
/**
*  亲爱的朋友：
*      很高兴你能看到这段文字，这说明你是非常热爱技术、热爱学习的。
*      组件中所有示例都可以通过文档 + typescript描述找到相关配置及用法
*      示例可以为你提供额外的灵感、方便你完成开发目标、节省你工作时间
*      以下代码也许花些时间很容易破解，但相比下面这个方案，通过破解代码来学习知识显然是不划算的：
*      https://relation-graph.com/#/vip-services
*      因为你的时间非常宝贵，开通会员直接查看代码学习、直接沟通解决问题，是最最高效的学习和工作方法，期待你的加入。
**/
              var _0x4f60 = [
    'UJztJ',
    'hHbXM',
    '删除节点',
    'lOwCh',
    'FxkOM',
    '添加连线',
    'LxFoW',
    'PXJrS',
    '删除关系',
    'LvcJR',
    'pqWTd',
    'LgEKB',
    'loading',
    'zHGyv',
    'v-loading',
    'ixSYp',
    'calc(100vh\x20-\x2050px)',
    'yFWoc',
    '正在检测您的登录状态...',
    'wloLo',
    'XjANu',
    'RelationGraph',
    'pgGjo',
    'graphRef',
    'CFtvV',
    'tool-bar',
    'FxhYG',
    'graph-plug',
    '$createElement',
    '_self',
    'graphOptions',
    'onContextmenu',
    'saveGraph',
    'isShowNodeTipsPanel',
    'nodeMenuPanelPosition',
    'currentObjectType',
    'currentObject',
    'fromNode',
    'text',
    'toNode',
    'addNode',
    'deleteNode',
    'createLineFromNode',
    'deleteLink',
    'name',
    'ObjectEdit',
    'components',
    'data',
    'computed',
    'mounted',
    'methods',
    'showGraph',
    '提示：',
    '这是一个示例，可以对图谱内容、位置进行更改并保存，在以后打开时重新展示为保存时的状态。',
    'success',
    '-my-demo',
    '这个示例需要您登录',
    '这个示例需要您登录才能演示保存，并在下次打开时重新还原保存时的状态。',
    'loadUserGraphData',
    '您第一次打开图谱',
    '您之前还未保存过这个图谱，所以当前展示的是默认数据，且数据会被布局器分配位置。',
    '展示您之前保存的图谱状态',
    '您之前保存过这个图谱，现在将还原您之前保存的数据状态。',
    'loadGraphDataFromCloudByDocId',
    '/my-graph/get-graph',
    'graphInfo:',
    'graphJsonData.jsonData:',
    'graphJsonData.options:',
    'showDataOnGraph',
    '请先登录',
    '这个示例在演示【保存】功能时需要您登录，这样才可以避免不同使用者的操作冲突。',
    '/my-graph/save-graph',
    'My\x20demo\x20graph',
    'saveResult:',
    'info',
    '文档保存成功！',
    '您可以尝试刷新页面重新访问这个图谱，它将还原您保存时的数据状态。',
    'click',
    'showNodeMenus:',
    'addFromCanvas-',
    'New-',
    '#5da0f8',
    '新增连线：',
    '#e85f84',
    '新连线',
    'userNickName',
    'debug',
    'disableDragLine',
    'allowSwitchLineShape',
    'allowSwitchJunctionPoint',
    'allowShowDownloadButton',
    'defaultJunctionPoint',
    'border',
    'layout',
    'layoutName',
    'fixed',
    'center',
    'rootId',
    'nodes',
    '节点-1',
    'el-icon-star-on',
    '节点-2',
    'el-icon-setting',
    '节点-3',
    '节点-4',
    '节点-6',
    '节点-7',
    '节点-8',
    '节点-9',
    'el-icon-headset',
    '节点-71',
    '节点-72',
    'el-icon-s-tools',
    '节点-73',
    '节点-81',
    'el-icon-s-promotion',
    '节点-82',
    '节点-83',
    '节点-84',
    '节点-85',
    'el-icon-sunny',
    '节点-91',
    '节点-5',
    'lines',
    'e43f13e2',
    'exports',
    'qwDqW',
    'NKvpm',
    'VipMyGraphToolBar',
    'pwlqf',
    'RYDRs',
    'div',
    'KyXeZ',
    'c-right-menu-panel',
    'txmRv',
    'dzEeL',
    'c-object-info',
    'FaflG',
    'JYGVt',
    '当前右键事件信息：',
    'AOVLQ',
    'EiqQe',
    'MieEA',
    '类型：',
    'YsbLs',
    'MiLTh',
    'link',
    'wFlXq',
    'izAfn',
    'ZCdhO',
    '\x20->\x20',
    'YXJzc',
    'XzlBA',
    'node',
    'UkMaF',
    'cJAgY',
    'ID:',
    'wOwpZ',
    'Text:',
    'fqjoK',
    'NFGbV',
    '你可以对这个对象做以下操作：',
    'zBXXT',
    'LPbdH',
    'canvas',
    'IZViR',
    'c-node-menu-item',
    'OPJNE',
    '添加节点',
    'MtFIY'
];
(function (_0x51266a, _0x6e4a0) {
    var _0x290875 = function (_0x2f4b0c) {
        while (--_0x2f4b0c) {
            _0x51266a['push'](_0x51266a['shift']());
        }
    };
    _0x290875(++_0x6e4a0);
}(_0x4f60, 0x7e));
var _0x5e94 = function (_0x4241d4, _0x5a0320) {
    _0x4241d4 = _0x4241d4 - 0x0;
    var _0x3fdd01 = _0x4f60[_0x4241d4];
    return _0x3fdd01;
};
import {
    b as _0x46dffc,
    n as _0x4efa14
} from './index-28740cc1.js';
import _0x535a88 from './VipMyGraphToolBar-17c10293.js';
var h = function () {
        var JcTnUU = {};
        JcTnUU[_0x5e94('0x0')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        JcTnUU[_0x5e94('0x1')] = _0x5e94('0x2');
        JcTnUU[_0x5e94('0x3')] = function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        };
        JcTnUU[_0x5e94('0x4')] = _0x5e94('0x5');
        JcTnUU[_0x5e94('0x6')] = _0x5e94('0x7');
        JcTnUU[_0x5e94('0x8')] = function (x, y) {
            return x + y;
        };
        JcTnUU[_0x5e94('0x9')] = _0x5e94('0xa');
        JcTnUU[_0x5e94('0xb')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        JcTnUU[_0x5e94('0xc')] = _0x5e94('0xd');
        JcTnUU[_0x5e94('0xe')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        JcTnUU[_0x5e94('0xf')] = function (x, y) {
            return x + y;
        };
        JcTnUU[_0x5e94('0x10')] = _0x5e94('0x11');
        JcTnUU[_0x5e94('0x12')] = function (x, y) {
            return x === y;
        };
        JcTnUU[_0x5e94('0x13')] = _0x5e94('0x14');
        JcTnUU[_0x5e94('0x15')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        JcTnUU[_0x5e94('0x16')] = function (x, y) {
            return x + y;
        };
        JcTnUU[_0x5e94('0x17')] = _0x5e94('0x18');
        JcTnUU[_0x5e94('0x19')] = function (x, y) {
            return x === y;
        };
        JcTnUU[_0x5e94('0x1a')] = _0x5e94('0x1b');
        JcTnUU[_0x5e94('0x1c')] = function (x, y) {
            return x + y;
        };
        JcTnUU[_0x5e94('0x1d')] = _0x5e94('0x1e');
        JcTnUU[_0x5e94('0x1f')] = _0x5e94('0x20');
        JcTnUU[_0x5e94('0x21')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        JcTnUU[_0x5e94('0x22')] = _0x5e94('0x23');
        JcTnUU[_0x5e94('0x24')] = function (x, y) {
            return x === y;
        };
        JcTnUU[_0x5e94('0x25')] = _0x5e94('0x26');
        JcTnUU[_0x5e94('0x27')] = _0x5e94('0x28');
        JcTnUU[_0x5e94('0x29')] = _0x5e94('0x2a');
        JcTnUU[_0x5e94('0x2b')] = function (x, y) {
            return x === y;
        };
        JcTnUU[_0x5e94('0x2c')] = function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        };
        JcTnUU[_0x5e94('0x2d')] = _0x5e94('0x2e');
        JcTnUU[_0x5e94('0x2f')] = function (x, y) {
            return x === y;
        };
        JcTnUU[_0x5e94('0x30')] = _0x5e94('0x31');
        JcTnUU[_0x5e94('0x32')] = function (x, y) {
            return x === y;
        };
        JcTnUU[_0x5e94('0x33')] = _0x5e94('0x34');
        JcTnUU[_0x5e94('0x35')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        JcTnUU[_0x5e94('0x36')] = function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        };
        JcTnUU[_0x5e94('0x37')] = _0x5e94('0x38');
        JcTnUU[_0x5e94('0x39')] = _0x5e94('0x3a');
        JcTnUU[_0x5e94('0x3b')] = _0x5e94('0x3c');
        JcTnUU[_0x5e94('0x3d')] = _0x5e94('0x3e');
        JcTnUU[_0x5e94('0x3f')] = function (callee, param1, param2) {
            return callee(param1, param2);
        };
        JcTnUU[_0x5e94('0x40')] = _0x5e94('0x41');
        JcTnUU[_0x5e94('0x42')] = _0x5e94('0x43');
        JcTnUU[_0x5e94('0x44')] = _0x5e94('0x45');
        JcTnUU[_0x5e94('0x46')] = _0x5e94('0x47');
        var t = this, n = t[_0x5e94('0x48')], e = t[_0x5e94('0x49')]['_c'] || n;
        return JcTnUU[_0x5e94('0x35')](e, JcTnUU[_0x5e94('0x4')], [JcTnUU[_0x5e94('0x36')](e, JcTnUU[_0x5e94('0x4')], {
                'directives': [{
                        'name': JcTnUU[_0x5e94('0x37')],
                        'rawName': JcTnUU[_0x5e94('0x39')],
                        'value': t[_0x5e94('0x38')],
                        'expression': JcTnUU[_0x5e94('0x37')]
                    }],
                'staticStyle': { 'height': JcTnUU[_0x5e94('0x3b')] },
                'attrs': { 'element-loading-text': JcTnUU[_0x5e94('0x3d')] }
            }, [JcTnUU[_0x5e94('0x3f')](e, JcTnUU[_0x5e94('0x40')], {
                    'ref': JcTnUU[_0x5e94('0x42')],
                    'attrs': {
                        'options': t[_0x5e94('0x4a')],
                        'on-contextmenu': t[_0x5e94('0x4b')]
                    },
                    'scopedSlots': t['_u']([
                        {
                            'key': JcTnUU[_0x5e94('0x44')],
                            'fn': function () {
                                return [JcTnUU[_0x5e94('0x0')](e, JcTnUU[_0x5e94('0x1')], { 'attrs': { 'onSave': t[_0x5e94('0x4c')] } })];
                            },
                            'proxy': !0x0
                        },
                        {
                            'key': JcTnUU[_0x5e94('0x46')],
                            'fn': function () {
                                return [t[_0x5e94('0x4d')] ? JcTnUU[_0x5e94('0x3')](e, JcTnUU[_0x5e94('0x4')], {
                                        'staticClass': JcTnUU[_0x5e94('0x6')],
                                        'style': {
                                            'left': JcTnUU[_0x5e94('0x8')](t[_0x5e94('0x4e')]['x'], 'px'),
                                            'top': JcTnUU[_0x5e94('0x8')](t[_0x5e94('0x4e')]['y'], 'px')
                                        }
                                    }, [
                                        JcTnUU[_0x5e94('0x3')](e, JcTnUU[_0x5e94('0x4')], { 'staticClass': JcTnUU[_0x5e94('0x9')] }, [
                                            JcTnUU[_0x5e94('0xb')](e, JcTnUU[_0x5e94('0x4')], [t['_v'](JcTnUU[_0x5e94('0xc')])]),
                                            JcTnUU[_0x5e94('0xe')](e, JcTnUU[_0x5e94('0x4')], [t['_v'](JcTnUU[_0x5e94('0xf')](JcTnUU[_0x5e94('0x10')], t['_s'](t[_0x5e94('0x4f')])))]),
                                            JcTnUU[_0x5e94('0x12')](t[_0x5e94('0x4f')], JcTnUU[_0x5e94('0x13')]) ? JcTnUU[_0x5e94('0x15')](e, JcTnUU[_0x5e94('0x4')], [t['_v'](JcTnUU[_0x5e94('0xf')](JcTnUU[_0x5e94('0x16')](t['_s'](t[_0x5e94('0x50')][_0x5e94('0x51')][_0x5e94('0x52')]), JcTnUU[_0x5e94('0x17')]), t['_s'](t[_0x5e94('0x50')][_0x5e94('0x53')][_0x5e94('0x52')])))]) : t['_e'](),
                                            JcTnUU[_0x5e94('0x19')](t[_0x5e94('0x4f')], JcTnUU[_0x5e94('0x1a')]) ? JcTnUU[_0x5e94('0x15')](e, JcTnUU[_0x5e94('0x4')], [t['_v'](JcTnUU[_0x5e94('0x1c')](JcTnUU[_0x5e94('0x1d')], t['_s'](t[_0x5e94('0x50')]['id'])))]) : t['_e'](),
                                            JcTnUU[_0x5e94('0x19')](t[_0x5e94('0x4f')], JcTnUU[_0x5e94('0x1a')]) ? JcTnUU[_0x5e94('0x15')](e, JcTnUU[_0x5e94('0x4')], [t['_v'](JcTnUU[_0x5e94('0x1c')](JcTnUU[_0x5e94('0x1f')], t['_s'](t[_0x5e94('0x50')][_0x5e94('0x52')])))]) : t['_e'](),
                                            JcTnUU[_0x5e94('0x21')](e, JcTnUU[_0x5e94('0x4')], [t['_v'](JcTnUU[_0x5e94('0x22')])])
                                        ]),
                                        JcTnUU[_0x5e94('0x24')](t[_0x5e94('0x4f')], JcTnUU[_0x5e94('0x25')]) ? JcTnUU[_0x5e94('0x3')](e, JcTnUU[_0x5e94('0x4')], {
                                            'staticClass': JcTnUU[_0x5e94('0x27')],
                                            'on': { 'click': t[_0x5e94('0x54')] }
                                        }, [t['_v'](JcTnUU[_0x5e94('0x29')])]) : t['_e'](),
                                        JcTnUU[_0x5e94('0x2b')](t[_0x5e94('0x4f')], JcTnUU[_0x5e94('0x1a')]) ? JcTnUU[_0x5e94('0x2c')](e, JcTnUU[_0x5e94('0x4')], {
                                            'staticClass': JcTnUU[_0x5e94('0x27')],
                                            'on': { 'click': t[_0x5e94('0x55')] }
                                        }, [t['_v'](JcTnUU[_0x5e94('0x2d')])]) : t['_e'](),
                                        JcTnUU[_0x5e94('0x2f')](t[_0x5e94('0x4f')], JcTnUU[_0x5e94('0x1a')]) ? JcTnUU[_0x5e94('0x2c')](e, JcTnUU[_0x5e94('0x4')], {
                                            'staticClass': JcTnUU[_0x5e94('0x27')],
                                            'on': { 'click': t[_0x5e94('0x56')] }
                                        }, [t['_v'](JcTnUU[_0x5e94('0x30')])]) : t['_e'](),
                                        JcTnUU[_0x5e94('0x32')](t[_0x5e94('0x4f')], JcTnUU[_0x5e94('0x13')]) ? JcTnUU[_0x5e94('0x2c')](e, JcTnUU[_0x5e94('0x4')], {
                                            'staticClass': JcTnUU[_0x5e94('0x27')],
                                            'on': { 'click': t[_0x5e94('0x57')] }
                                        }, [t['_v'](JcTnUU[_0x5e94('0x33')])]) : t['_e']()
                                    ]) : t['_e']()];
                            },
                            'proxy': !0x0
                        }
                    ])
                })], 0x1)]);
    }, u = [];
const i = {}, p = {}, m = {}, f = {}, r = {};
f[_0x5e94('0x58')] = _0x5e94('0x59');
f[_0x5e94('0x5a')] = {};
f[_0x5e94('0x5b')] = function () {
    return {
        isShowNodeTipsPanel: !0x1,
        nodeMenuPanelPosition: {
            x: 0x0,
            y: 0x0
        },
        currentObjectType: null,
        currentObject: '',
        newNodeIdIndex: 0x1,
        newLineIdIndex: 0x1,
        graphOptions: p,
        graphOptionsForUserGraph: m,
        loading: !0x0,
        savingToServer: !0x1,
        docId: ''
    };
};
f[_0x5e94('0x5c')] = { ..._0x46dffc({ userInfo: t => t.user.userInfo }) };
f[_0x5e94('0x5d')] = function () {
    var nNONDC = {
        MhsHQ: function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    nNONDC.MhsHQ(setTimeout, () => {
        this.loading = !0x1, this.showGraph();
    }, 0xbb8);
};
f[_0x5e94('0x5e')] = {};
f[_0x5e94('0x5e')][_0x5e94('0x5f')] = async function () {
    var QXRXNe = {
        ICOVt: _0x5e94('0x60'),
        dMotn: _0x5e94('0x61'),
        OKyOs: _0x5e94('0x62'),
        DSWes: function (x, y) {
            return x + y;
        },
        AWTYZ: _0x5e94('0x63'),
        yezdF: _0x5e94('0x64'),
        TuQUH: _0x5e94('0x65')
    };
    await this.$notify({
        title: QXRXNe.ICOVt,
        message: QXRXNe.dMotn,
        type: QXRXNe.OKyOs,
        duration: 0x4e20
    }), this.userInfo ? (this.docId = QXRXNe.DSWes(this.userInfo.userId, QXRXNe.AWTYZ), await this.loadUserGraphData(this.docId)) : (await this.$notify({
        title: QXRXNe.yezdF,
        message: QXRXNe.TuQUH,
        type: QXRXNe.OKyOs,
        duration: 0x4e20
    }), await this.showDataOnGraph(i));
};
f[_0x5e94('0x5e')][_0x5e94('0x66')] = async function (t) {
    var xqFQLq = {
        IOMXu: _0x5e94('0x67'),
        elFAY: _0x5e94('0x68'),
        rImgp: _0x5e94('0x62'),
        drfrj: _0x5e94('0x69'),
        FCKUN: _0x5e94('0x6a')
    };
    const n = await this.loadGraphDataFromCloudByDocId(t);
    if (!n)
        await this.$notify({
            title: xqFQLq.IOMXu,
            message: xqFQLq.elFAY,
            type: xqFQLq.rImgp,
            duration: 0x4e20
        }), await this.showDataOnGraph(i);
    else {
        await this.$notify({
            title: xqFQLq.drfrj,
            message: xqFQLq.FCKUN,
            type: xqFQLq.rImgp,
            duration: 0x4e20
        });
        const e = this.$refs.graphRef.getInstance();
        await e.setOptions(this.graphOptionsForUserGraph), await this.showDataOnGraph(n), await e.moveToCenter(), await e.zoomToFit();
    }
};
f[_0x5e94('0x5e')][_0x5e94('0x6b')] = async function (t) {
    var PgrWuj = {
        iCuUQ: _0x5e94('0x6c'),
        LrgaD: _0x5e94('0x6d'),
        pKCWI: _0x5e94('0x6e'),
        VtuQD: _0x5e94('0x6f')
    };
    const n = await this.SeeksHttp.postJson(PgrWuj.iCuUQ, {
        docId: t,
        ignoreErrors: !0x0
    });
    if (n.data && n.data.data) {
        const e = n.data.data, {docContent: o} = e;
        console.log(PgrWuj.LrgaD, e);
        const s = JSON.parse(o);
        return console.log(PgrWuj.pKCWI, s.jsonData), console.log(PgrWuj.VtuQD, s.options), s.jsonData;
    } else
        return null;
};
f[_0x5e94('0x5e')][_0x5e94('0x70')] = async function (t) {
    await this.$refs.graphRef.setJsonData(t, async e => {
    });
};
f[_0x5e94('0x5e')][_0x5e94('0x4c')] = async function () {
    var LhDxQj = {
        uzhqr: _0x5e94('0x71'),
        aWwJX: _0x5e94('0x72'),
        LeOTB: _0x5e94('0x62'),
        oWAJx: function (callee, param1, param2) {
            return callee(param1, param2);
        },
        FYUdR: _0x5e94('0x73'),
        fbNFY: _0x5e94('0x74'),
        TcYaB: _0x5e94('0x75'),
        cJwXW: _0x5e94('0x76'),
        lbBLJ: _0x5e94('0x77'),
        OCbIm: _0x5e94('0x78')
    };
    if (!this.userNickName) {
        await this.$notify({
            title: LhDxQj.uzhqr,
            message: LhDxQj.aWwJX,
            type: LhDxQj.LeOTB,
            duration: 0x4e20
        });
        return;
    }
    if (this.savingToServer)
        return;
    this.savingToServer = !0x0, LhDxQj.oWAJx(setTimeout, () => {
        this.savingToServer = !0x1;
    }, 0x3a98);
    const n = this.$refs.graphRef.getInstance().getGraphJsonData(), e = await this.SeeksHttp.postJson(LhDxQj.FYUdR, {
            docId: this.docId,
            name: LhDxQj.fbNFY,
            docContent: JSON.stringify({
                options: void 0x0,
                jsonData: n
            })
        });
    this.savingToServer = !0x1;
    const o = e.data.data;
    if (console.log(LhDxQj.TcYaB, o), !o.updated) {
        this.$message({
            type: LhDxQj.cJwXW,
            message: o.message
        });
        return;
    }
    await this.$notify({
        title: LhDxQj.lbBLJ,
        message: LhDxQj.OCbIm,
        type: LhDxQj.LeOTB,
        duration: 0x4e20
    });
};
f[_0x5e94('0x5e')][_0x5e94('0x4b')] = function (t, n, e) {
    var mHEDPB = {
        GNcft: _0x5e94('0x79'),
        GjGxU: _0x5e94('0x7a'),
        svSJQ: function (x, y) {
            return x + y;
        },
        JfFqr: function (x, y) {
            return x - y;
        }
    };
    const o = this.$refs.graphRef.getInstance();
    this.currentObjectType = n, this.currentObject = e;
    const s = o.getBoundingClientRect();
    console.log(mHEDPB.GjGxU, t, s), this.isShowNodeTipsPanel = !0x0, this.nodeMenuPanelPosition.x = mHEDPB.svSJQ(mHEDPB.JfFqr(t.clientX, s.x), 0xa), this.nodeMenuPanelPosition.y = mHEDPB.svSJQ(mHEDPB.JfFqr(t.clientY, s.y), 0xa);
    const a = () => {
        this.isShowNodeTipsPanel = !0x1, document.body.removeEventListener(mHEDPB.GNcft, a);
    };
    document.body.addEventListener(mHEDPB.GNcft, a);
};
f[_0x5e94('0x5e')][_0x5e94('0x54')] = function (t) {
    var dUqEph = {
        uxsVv: function (x, y) {
            return x + y;
        },
        BFXzu: function (x, y) {
            return x - y;
        },
        hMRhC: function (x, y) {
            return x + y;
        },
        fcYFT: _0x5e94('0x7b'),
        eqLLo: function (x, y) {
            return x + y;
        },
        DECnf: _0x5e94('0x7c'),
        kTFSF: _0x5e94('0x7d')
    };
    const n = this.$refs.graphRef.getInstance(), e = n.getBoundingClientRect(), o = n.getCanvasCoordinateByClientCoordinate({
            x: dUqEph.uxsVv(dUqEph.BFXzu(this.nodeMenuPanelPosition.x, 0xa), e.x),
            y: dUqEph.hMRhC(dUqEph.BFXzu(this.nodeMenuPanelPosition.y, 0xa), e.y)
        }), s = this.newNodeIdIndex++;
    n.addNodes([{
            id: dUqEph.hMRhC(dUqEph.fcYFT, s),
            text: dUqEph.eqLLo(dUqEph.DECnf, s),
            color: dUqEph.kTFSF,
            x: o.x,
            y: o.y
        }]);
};
f[_0x5e94('0x5e')][_0x5e94('0x55')] = function (t) {
    this.$refs.graphRef.getInstance().removeNodeById(this.currentObject.id);
};
f[_0x5e94('0x5e')][_0x5e94('0x57')] = function (t) {
    this.$refs.graphRef.getInstance().removeLinkById(this.currentObject.seeks_id);
};
f[_0x5e94('0x5e')][_0x5e94('0x56')] = function (t) {
    var bJvoMo = {
        ELEAC: _0x5e94('0x7e'),
        jojKD: _0x5e94('0x7f'),
        bNWzV: function (x, y) {
            return x + y;
        },
        bRtoo: _0x5e94('0x80')
    };
    const n = this.$refs.graphRef.getInstance();
    n.startCreatingLinePlot(t, {
        template: {
            lineWidth: 0x3,
            color: bJvoMo.jojKD,
            text: bJvoMo.bRtoo
        },
        fromNode: this.currentObject,
        onCreateLine: (e, o) => {
            if (console.log(bJvoMo.ELEAC, e, o), o.id) {
                const s = this.newLineIdIndex++;
                n.addLines([{
                        from: e.id,
                        to: o.id,
                        lineWidth: 0x3,
                        color: bJvoMo.jojKD,
                        text: bJvoMo.bNWzV(bJvoMo.bRtoo, s)
                    }]);
            }
        }
    });
};
f[_0x5e94('0x5c')][_0x5e94('0x81')] = function () {
    return this.userInfo && this.userInfo.account || '';
};
f[_0x5e94('0x5a')][_0x5e94('0x2')] = _0x535a88;
m[_0x5e94('0x82')] = !0x0;
m[_0x5e94('0x83')] = !0x1;
m[_0x5e94('0x84')] = !0x0;
m[_0x5e94('0x85')] = !0x0;
m[_0x5e94('0x86')] = !0x0;
m[_0x5e94('0x87')] = _0x5e94('0x88');
m[_0x5e94('0x89')] = {};
m[_0x5e94('0x89')][_0x5e94('0x8a')] = _0x5e94('0x8b');
p[_0x5e94('0x83')] = !0x1;
p[_0x5e94('0x84')] = !0x0;
p[_0x5e94('0x85')] = !0x0;
p[_0x5e94('0x86')] = !0x0;
p[_0x5e94('0x87')] = _0x5e94('0x88');
p[_0x5e94('0x89')] = {};
p[_0x5e94('0x89')][_0x5e94('0x8a')] = _0x5e94('0x8c');
i[_0x5e94('0x8d')] = '2';
i[_0x5e94('0x8e')] = [
    {
        id: '1',
        text: _0x5e94('0x8f'),
        myicon: _0x5e94('0x90')
    },
    {
        id: '2',
        text: _0x5e94('0x91'),
        myicon: _0x5e94('0x92')
    },
    {
        id: '3',
        text: _0x5e94('0x93'),
        myicon: _0x5e94('0x92')
    },
    {
        id: '4',
        text: _0x5e94('0x94'),
        myicon: _0x5e94('0x90')
    },
    {
        id: '6',
        text: _0x5e94('0x95'),
        myicon: _0x5e94('0x92')
    },
    {
        id: '7',
        text: _0x5e94('0x96'),
        myicon: _0x5e94('0x92')
    },
    {
        id: '8',
        text: _0x5e94('0x97'),
        myicon: _0x5e94('0x90')
    },
    {
        id: '9',
        text: _0x5e94('0x98'),
        myicon: _0x5e94('0x99')
    },
    {
        id: '71',
        text: _0x5e94('0x9a'),
        myicon: _0x5e94('0x99')
    },
    {
        id: '72',
        text: _0x5e94('0x9b'),
        myicon: _0x5e94('0x9c')
    },
    {
        id: '73',
        text: _0x5e94('0x9d'),
        myicon: _0x5e94('0x90')
    },
    {
        id: '81',
        text: _0x5e94('0x9e'),
        myicon: _0x5e94('0x9f')
    },
    {
        id: '82',
        text: _0x5e94('0xa0'),
        myicon: _0x5e94('0x9f')
    },
    {
        id: '83',
        text: _0x5e94('0xa1'),
        myicon: _0x5e94('0x90')
    },
    {
        id: '84',
        text: _0x5e94('0xa2'),
        myicon: _0x5e94('0x9f')
    },
    {
        id: '85',
        text: _0x5e94('0xa3'),
        myicon: _0x5e94('0xa4')
    },
    {
        id: '91',
        text: _0x5e94('0xa5'),
        myicon: _0x5e94('0xa4')
    },
    {
        id: '92',
        text: _0x5e94('0xa0'),
        myicon: _0x5e94('0xa4')
    },
    {
        id: '5',
        text: _0x5e94('0xa6'),
        myicon: _0x5e94('0xa4')
    }
];
i[_0x5e94('0xa7')] = [
    {
        from: '7',
        to: '71',
        text: '投资'
    },
    {
        from: '7',
        to: '72',
        text: '投资'
    },
    {
        from: '7',
        to: '73',
        text: '投资'
    },
    {
        from: '8',
        to: '81',
        text: '投资'
    },
    {
        from: '8',
        to: '82',
        text: '投资'
    },
    {
        from: '8',
        to: '83',
        text: '投资'
    },
    {
        from: '8',
        to: '84',
        text: '投资'
    },
    {
        from: '8',
        to: '85',
        text: '投资'
    },
    {
        from: '9',
        to: '91',
        text: '投资'
    },
    {
        from: '9',
        to: '92',
        text: '投资'
    },
    {
        from: '1',
        to: '2',
        text: '投资'
    },
    {
        from: '3',
        to: '1',
        text: '高管'
    },
    {
        from: '4',
        to: '2',
        text: '高管'
    },
    {
        from: '6',
        to: '2',
        text: '高管'
    },
    {
        from: '7',
        to: '2',
        text: '高管'
    },
    {
        from: '8',
        to: '2',
        text: '高管'
    },
    {
        from: '9',
        to: '2',
        text: '高管'
    },
    {
        from: '1',
        to: '5',
        text: '投资'
    }
];
var g = _0x4efa14(f, h, u, !0x1, y, _0x5e94('0xa8'), null, null);
function y(t) {
    for (let n in r)
        this[n] = r[n];
}
const _ = function () {
    return g[_0x5e94('0xa9')];
}();
export {
    _ as default
};