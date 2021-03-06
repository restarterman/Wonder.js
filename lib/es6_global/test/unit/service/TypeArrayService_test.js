

import * as Curry from "../../../../../node_modules/bs-platform/lib/es6/curry.js";
import * as Sinon from "../../../../../node_modules/wonder-bs-sinon/lib/es6_global/src/sinon.js";
import * as Sinon$1 from "sinon";
import * as Wonder_jest from "../../../../../node_modules/wonder-bs-jest/lib/es6_global/src/wonder_jest.js";
import * as TestTool$Wonderjs from "../../tool/TestTool.js";
import * as TypeArrayService$Wonderjs from "../../../src/service/primitive/buffer/TypeArrayService.js";
import * as CreateStateMainService$Wonderjs from "../../../src/service/state/main/state/CreateStateMainService.js";

describe("TypeArrayService", (function () {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var state = /* record */[/* contents */CreateStateMainService$Wonderjs.createState(/* () */0)];
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                state[0] = TestTool$Wonderjs.init(sandbox, undefined, undefined, /* () */0);
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        describe("contract check", (function () {
                describe("setUint32_1", (function () {
                        Wonder_jest.test("test not throw", (function () {
                                TestTool$Wonderjs.openContractCheck(/* () */0);
                                return Wonder_jest.Expect[/* toThrow */18](Wonder_jest.Expect[/* not_ */22](Wonder_jest.Expect[/* expect */0]((function () {
                                                      return TypeArrayService$Wonderjs.setUint32_1(0, 1, new Uint32Array(1));
                                                    }))));
                              }));
                        return Wonder_jest.test("test throw", (function () {
                                      TestTool$Wonderjs.openContractCheck(/* () */0);
                                      return Wonder_jest.Expect[/* toThrowMessage */20]("expect not exceed bound", Wonder_jest.Expect[/* expect */0]((function () {
                                                        return TypeArrayService$Wonderjs.setUint32_1(0, 1, new Uint32Array(0));
                                                      })));
                                    }));
                      }));
                describe("setFloat1", (function () {
                        return Wonder_jest.test("test throw", (function () {
                                      TestTool$Wonderjs.openContractCheck(/* () */0);
                                      return Wonder_jest.Expect[/* toThrowMessage */20]("expect not exceed bound", Wonder_jest.Expect[/* expect */0]((function () {
                                                        return TypeArrayService$Wonderjs.setFloat1(1, 1, new Float32Array(1));
                                                      })));
                                    }));
                      }));
                describe("setFloat3", (function () {
                        Wonder_jest.test("test not throw", (function () {
                                TestTool$Wonderjs.openContractCheck(/* () */0);
                                return Wonder_jest.Expect[/* toThrow */18](Wonder_jest.Expect[/* not_ */22](Wonder_jest.Expect[/* expect */0]((function () {
                                                      return TypeArrayService$Wonderjs.setFloat3(1, /* array */[
                                                                  1,
                                                                  2,
                                                                  3
                                                                ], new Float32Array(4));
                                                    }))));
                              }));
                        return Wonder_jest.test("test throw", (function () {
                                      TestTool$Wonderjs.openContractCheck(/* () */0);
                                      return Wonder_jest.Expect[/* toThrowMessage */20]("expect not exceed bound", Wonder_jest.Expect[/* expect */0]((function () {
                                                        return TypeArrayService$Wonderjs.setFloat3(1, /* array */[
                                                                    1,
                                                                    2,
                                                                    3
                                                                  ], new Float32Array(3));
                                                      })));
                                    }));
                      }));
                return /* () */0;
              }));
        return /* () */0;
      }));

export {
  
}
/*  Not a pure module */
