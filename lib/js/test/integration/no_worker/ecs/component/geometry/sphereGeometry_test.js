'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var TestTool$Wonderjs = require("../../../../../tool/TestTool.js");
var GeometryAPI$Wonderjs = require("../../../../../../src/api/geometry/GeometryAPI.js");
var MainStateTool$Wonderjs = require("../../../../../tool/service/state/MainStateTool.js");

describe("sphere geometry", (function () {
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
        describe("createSphereGeometry", (function () {
                return Wonder_jest.test("create a new geometry which is just index(int)", (function () {
                              var match = GeometryAPI$Wonderjs.createSphereGeometry(0.5, 2, state[0]);
                              var geometry = match[1];
                              var state$1 = match[0];
                              return Curry._2(Wonder_jest.Expect[/* Operators */23][/* = */5], Wonder_jest.Expect[/* expect */0](/* tuple */[
                                              GeometryAPI$Wonderjs.getGeometryVertices(geometry, state$1),
                                              GeometryAPI$Wonderjs.getGeometryNormals(geometry, state$1),
                                              GeometryAPI$Wonderjs.getGeometryTexCoords(geometry, state$1),
                                              GeometryAPI$Wonderjs.getGeometryIndices(geometry, state$1)
                                            ]), /* tuple */[
                                          new Float32Array(/* array */[
                                                0,
                                                0.5,
                                                0,
                                                -0,
                                                0.5,
                                                0,
                                                0,
                                                0.5,
                                                -0,
                                                0.5,
                                                3.0616171314629196e-17,
                                                0,
                                                -0.5,
                                                3.0616171314629196e-17,
                                                6.123234262925839e-17,
                                                0.5,
                                                3.0616171314629196e-17,
                                                -1.2246468525851679e-16,
                                                6.123234262925839e-17,
                                                -0.5,
                                                0,
                                                -6.123234262925839e-17,
                                                -0.5,
                                                7.498798786105971e-33,
                                                6.123234262925839e-17,
                                                -0.5,
                                                -1.4997597572211942e-32
                                              ]),
                                          new Float32Array(/* array */[
                                                0,
                                                0.5,
                                                0,
                                                -0,
                                                0.5,
                                                0,
                                                0,
                                                0.5,
                                                -0,
                                                0.5,
                                                3.0616171314629196e-17,
                                                0,
                                                -0.5,
                                                3.0616171314629196e-17,
                                                6.123234262925839e-17,
                                                0.5,
                                                3.0616171314629196e-17,
                                                -1.2246468525851679e-16,
                                                6.123234262925839e-17,
                                                -0.5,
                                                0,
                                                -6.123234262925839e-17,
                                                -0.5,
                                                7.498798786105971e-33,
                                                6.123234262925839e-17,
                                                -0.5,
                                                -1.4997597572211942e-32
                                              ]),
                                          new Float32Array(/* array */[
                                                1,
                                                1,
                                                0.5,
                                                1,
                                                0,
                                                1,
                                                1,
                                                0.5,
                                                0.5,
                                                0.5,
                                                0,
                                                0.5,
                                                1,
                                                0,
                                                0.5,
                                                0,
                                                0,
                                                0
                                              ]),
                                          new Uint16Array(/* array */[
                                                1,
                                                3,
                                                0,
                                                1,
                                                4,
                                                3,
                                                2,
                                                4,
                                                1,
                                                2,
                                                5,
                                                4,
                                                4,
                                                6,
                                                3,
                                                4,
                                                7,
                                                6,
                                                5,
                                                7,
                                                4,
                                                5,
                                                8,
                                                7
                                              ])
                                        ]);
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */
