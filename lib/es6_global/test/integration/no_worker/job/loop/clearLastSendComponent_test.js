

import * as Curry from "../../../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Wonder_jest from "../../../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as Js_primitive from "../../../../../../../node_modules/bs-platform/lib/es6/js_primitive.js";
import * as CameraTool$Wonderjs from "../../../../tool/service/camera/CameraTool.js";
import * as FakeGlTool$Wonderjs from "../../../../tool/gl/FakeGlTool.js";
import * as DirectorTool$Wonderjs from "../../../../tool/core/DirectorTool.js";
import * as GameObjectAPI$Wonderjs from "../../../../../src/api/GameObjectAPI.js";
import * as MainStateTool$Wonderjs from "../../../../tool/service/state/MainStateTool.js";
import * as GameObjectTool$Wonderjs from "../../../../tool/service/gameObject/GameObjectTool.js";
import * as RenderJobsTool$Wonderjs from "../../../../tool/job/no_worker/loop/RenderJobsTool.js";
import * as BasicMaterialAPI$Wonderjs from "../../../../../src/api/material/BasicMaterialAPI.js";
import * as GLSLLocationTool$Wonderjs from "../../../../tool/service/location/GLSLLocationTool.js";
import * as LoopRenderJobTool$Wonderjs from "../../../../tool/job/no_worker/loop/LoopRenderJobTool.js";
import * as RenderBasicJobTool$Wonderjs from "../../../../tool/job/render_basic/RenderBasicJobTool.js";

describe("test clear last send component", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */MainStateTool$Wonderjs.createState(/* () */0)];
        var _prepare = function (state) {
          var match = RenderBasicJobTool$Wonderjs.prepareGameObject(sandbox, state);
          var match$1 = CameraTool$Wonderjs.createCameraGameObject(match[0]);
          return /* tuple */[
                  match$1[0],
                  match[1],
                  match[3]
                ];
        };
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = RenderJobsTool$Wonderjs.initWithJobConfig(sandbox, LoopRenderJobTool$Wonderjs.buildNoWorkerJobConfig(/* () */0));
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("clear lastSendMaterialData", (function () {
                describe("test create gameObject after dispose one", (function () {
                        return Wonder_jest.test("should send new one's material uniform record", (function () {
                                      var match = _prepare(state[0]);
                                      var colorArr1 = /* array */[
                                        1.0,
                                        0.1,
                                        0.2
                                      ];
                                      var state$1 = BasicMaterialAPI$Wonderjs.setBasicMaterialColor(match[2], colorArr1, match[0]);
                                      var getUniformLocation = GLSLLocationTool$Wonderjs.getUniformLocation(0, sandbox, "u_color");
                                      var uniform3f = Sinon.createEmptyStubWithJsObjSandbox(sandbox);
                                      var state$2 = FakeGlTool$Wonderjs.setFakeGl(FakeGlTool$Wonderjs.buildFakeGl(sandbox, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(getUniformLocation), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(uniform3f), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0), state$1);
                                      var state$3 = RenderJobsTool$Wonderjs.init(state$2);
                                      var state$4 = DirectorTool$Wonderjs.runWithDefaultTime(state$3);
                                      var state$5 = GameObjectTool$Wonderjs.disposeGameObject(match[1], state$4);
                                      var match$1 = RenderBasicJobTool$Wonderjs.prepareGameObject(sandbox, state$5);
                                      var state$6 = GameObjectAPI$Wonderjs.initGameObject(match$1[1], match$1[0]);
                                      var colorArr2 = /* array */[
                                        0.0,
                                        0.5,
                                        0.0
                                      ];
                                      var state$7 = BasicMaterialAPI$Wonderjs.setBasicMaterialColor(match$1[3], colorArr2, state$6);
                                      DirectorTool$Wonderjs.runWithDefaultTime(state$7);
                                      return Sinon.toCalledWith(/* array */[0].concat(colorArr2), Wonder_jest.Expect[/* expect */0](uniform3f));
                                    }));
                      }));
                return /* () */0;
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
