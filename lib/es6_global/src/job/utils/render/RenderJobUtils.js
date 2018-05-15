// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as Log$WonderLog                                     from "../../../../../../node_modules/wonder-log/lib/es6_global/src/Log.js";
import * as ProgramService$Wonderjs                           from "../../../service/record/all/program/ProgramService.js";
import * as DrawGLSLService$Wonderjs                          from "../../../service/record/render/sender/DrawGLSLService.js";
import * as ArrayService$WonderCommonlib                      from "../../../../../../node_modules/wonder-commonlib/lib/es6_global/src/ArrayService.js";
import * as RenderGeometryService$Wonderjs                    from "../../../service/record/main/geometry/RenderGeometryService.js";
import * as UseProgramRenderService$Wonderjs                  from "../../../service/state/render/program/UseProgramRenderService.js";
import * as ArrayBufferRenderService$Wonderjs                 from "../../../service/state/render/vboBuffer/ArrayBufferRenderService.js";
import * as ElementArrayBufferRenderService$Wonderjs          from "../../../service/state/render/vboBuffer/ElementArrayBufferRenderService.js";
import * as HandleAttributeConfigDataService$Wonderjs         from "../../../service/record/render/sender/attribute/HandleAttributeConfigDataService.js";
import * as CurrentComponentDataMapRenderService$Wonderjs     from "../../../service/state/render/gameObject/CurrentComponentDataMapRenderService.js";
import * as HandleUniformRenderObjectModelService$Wonderjs    from "../../../service/record/render/sender/uniform/HandleUniformRenderObjectModelService.js";
import * as HandleUniformRenderObjectMaterialService$Wonderjs from "../../../service/record/render/sender/uniform/HandleUniformRenderObjectMaterialService.js";

function _getOrCreateBuffer(buffer, param, param$1, state) {
  var match = param$1[1];
  var match$1 = param$1[0];
  var geometryIndex = param[1];
  var gl = param[0];
  switch (buffer) {
    case "index" : 
        return ElementArrayBufferRenderService$Wonderjs.getOrCreateBuffer(gl, /* tuple */[
                    geometryIndex,
                    match$1[2]
                  ], match[2], state);
    case "normal" : 
        return ArrayBufferRenderService$Wonderjs.getOrCreateBuffer(gl, /* tuple */[
                    geometryIndex,
                    match$1[1]
                  ], match[1], state);
    case "vertex" : 
        return ArrayBufferRenderService$Wonderjs.getOrCreateBuffer(gl, /* tuple */[
                    geometryIndex,
                    match$1[0]
                  ], match[0], state);
    default:
      return Log$WonderLog.fatal(Log$WonderLog.buildFatalMessage("_sendAttributeData", "unknown buffer: " + (String(buffer) + ""), "", "", ""));
  }
}

function _directlySendAttributeData(gl, param, state) {
  var currentGeometryBufferMapAndGetPointsFuncsTuple = CurrentComponentDataMapRenderService$Wonderjs.getCurrentGeometryBufferMapAndGetPointsFuncs(param[2], state[/* vboBufferRecord */0]);
  var dataTuple_001 = param[1];
  var dataTuple = /* tuple */[
    gl,
    dataTuple_001
  ];
  return ArrayService$WonderCommonlib.reduceOneParam((function (state, param) {
                var arrayBuffer = _getOrCreateBuffer(param[/* buffer */2], dataTuple, currentGeometryBufferMapAndGetPointsFuncsTuple, state);
                return param[/* sendFunc */3](gl, /* tuple */[
                            param[/* size */1],
                            param[/* pos */0]
                          ], arrayBuffer, state);
              }), state, HandleAttributeConfigDataService$Wonderjs.unsafeGetAttributeSendData(param[0], state[/* glslSenderRecord */2]));
}

function _sendAttributeData(gl, indexTuple, state) {
  var geometryType = indexTuple[2];
  var geometryIndex = indexTuple[1];
  var record = state[/* glslSenderRecord */2];
  var lastSendGeometry = record[/* lastSendGeometry */11];
  var exit = 0;
  if (lastSendGeometry) {
    var match = lastSendGeometry[0];
    if (match[0] === geometryIndex && match[1] === geometryType) {
      return state;
    } else {
      exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    record[/* lastSendGeometry */11] = /* Some */[/* tuple */[
        geometryIndex,
        geometryType
      ]];
    return _directlySendAttributeData(gl, indexTuple, state);
  }
  
}

function _sendUniformRenderObjectModelData(gl, shaderIndex, transformIndex, state) {
  return ArrayService$WonderCommonlib.reduceOneParam((function (state, param) {
                param[/* sendDataFunc */2](gl, param[/* pos */0], param[/* getDataFunc */1](transformIndex, state));
                return state;
              }), state, HandleUniformRenderObjectModelService$Wonderjs.unsafeGetUniformSendData(shaderIndex, state[/* glslSenderRecord */2]));
}

function _sendUniformRenderObjectMaterialData(gl, shaderIndex, materialIndex, state) {
  return ArrayService$WonderCommonlib.reduceOneParam((function (state, param) {
                param[/* sendDataFunc */4](gl, param[/* shaderCacheMap */0], /* tuple */[
                      param[/* name */1],
                      param[/* pos */2]
                    ], param[/* getDataFunc */3](materialIndex, state));
                return state;
              }), state, HandleUniformRenderObjectMaterialService$Wonderjs.unsafeGetUniformSendData(shaderIndex, state[/* glslSenderRecord */2]));
}

function render(gl, param, state) {
  var shaderIndex = param[2];
  var materialIndex = param[1];
  var program = ProgramService$Wonderjs.unsafeGetProgram(shaderIndex, state[/* programRecord */3]);
  var state$1 = _sendUniformRenderObjectModelData(gl, shaderIndex, param[0], _sendAttributeData(gl, /* tuple */[
            shaderIndex,
            param[3],
            param[4]
          ], UseProgramRenderService$Wonderjs.use(gl, program, state)));
  var record = state$1[/* glslSenderRecord */2];
  var lastSendMaterial = record[/* lastSendMaterial */10];
  var exit = 0;
  if (lastSendMaterial) {
    if (lastSendMaterial[0] === materialIndex) {
      return state$1;
    } else {
      exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    record[/* lastSendMaterial */10] = /* Some */[materialIndex];
    return _sendUniformRenderObjectMaterialData(gl, shaderIndex, materialIndex, state$1);
  }
  
}

function draw(gl, geometryIndex, geometryType, state) {
  var getIndicesCountFunc = CurrentComponentDataMapRenderService$Wonderjs.getGetIndicesCountFunc(geometryType);
  return DrawGLSLService$Wonderjs.drawElement(/* tuple */[
              RenderGeometryService$Wonderjs.getDrawMode(gl),
              RenderGeometryService$Wonderjs.getIndexType(gl),
              RenderGeometryService$Wonderjs.getIndexTypeSize(gl),
              getIndicesCountFunc(geometryIndex, state)
            ], gl);
}

export {
  _getOrCreateBuffer                   ,
  _directlySendAttributeData           ,
  _sendAttributeData                   ,
  _sendUniformRenderObjectModelData    ,
  _sendUniformRenderObjectMaterialData ,
  render                               ,
  draw                                 ,
  
}
/* Log-WonderLog Not a pure module */