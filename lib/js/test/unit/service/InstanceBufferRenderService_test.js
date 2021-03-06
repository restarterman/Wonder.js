'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var TestTool$Wonderjs = require("../../tool/TestTool.js");
var MainStateTool$Wonderjs = require("../../tool/service/state/MainStateTool.js");
var RenderStateTool$Wonderjs = require("../../tool/state/RenderStateTool.js");
var TypeArrayPoolTool$Wonderjs = require("../../tool/structure/TypeArrayPoolTool.js");
var TypeArrayPoolService$Wonderjs = require("../../../src/service/record/main/typeArrayPool/TypeArrayPoolService.js");
var SparseMapService$WonderCommonlib = require("wonder-commonlib/lib/js/src/SparseMapService.js");
var InstanceBufferRenderService$Wonderjs = require("../../../src/service/state/render/vboBuffer/InstanceBufferRenderService.js");

describe("InstanceBufferRenderService", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */MainStateTool$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.init(sandbox, undefined, undefined, /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("getOrCreateMatrixFloat32Array", (function () {
                return Wonder_jest.test("test get typeArr from pool", (function () {
                              var capacityMap = SparseMapService$WonderCommonlib.createEmpty(/* () */0);
                              var matrixFloat32ArrayMap = SparseMapService$WonderCommonlib.createEmpty(/* () */0);
                              var typeArr1 = new Float32Array(/* array */[
                                    0,
                                    0,
                                    1
                                  ]);
                              TypeArrayPoolTool$Wonderjs.addFloat32TypeArrayToPool(typeArr1, 1000, TypeArrayPoolService$Wonderjs.getFloat32ArrayPoolMap(state[0][/* typeArrayPoolRecord */35]));
                              var typeArr2 = InstanceBufferRenderService$Wonderjs.getOrCreateMatrixFloat32Array(0, 12, /* tuple */[
                                    capacityMap,
                                    matrixFloat32ArrayMap
                                  ], RenderStateTool$Wonderjs.createState(state[0]));
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                              typeArr2,
                                              Caml_array.caml_array_get(TypeArrayPoolTool$Wonderjs.getFloat32ArrayPoolMap(state[0][/* typeArrayPoolRecord */35]), typeArr1.length).length
                                            ]), /* tuple */[
                                          typeArr1,
                                          0
                                        ]);
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */
