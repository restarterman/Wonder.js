

import * as Caml_array from "../../../../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as RecordLightMaterialMainService$Wonderjs from "./RecordLightMaterialMainService.js";
import * as ManageMapLightMaterialMainService$Wonderjs from "./mapManager/ManageMapLightMaterialMainService.js";
import * as OperateTypeArrayLightMaterialService$Wonderjs from "../../../../record/all/material/light/OperateTypeArrayLightMaterialService.js";

function getDiffuseColor(material, state) {
  return OperateTypeArrayLightMaterialService$Wonderjs.getDiffuseColor(material, RecordLightMaterialMainService$Wonderjs.getRecord(state)[/* diffuseColors */3]);
}

function setDiffuseColor(material, color, state) {
  var lightMaterialRecord = RecordLightMaterialMainService$Wonderjs.getRecord(state);
  var newrecord = Caml_array.caml_array_dup(state);
  newrecord[/* lightMaterialRecord */16] = /* record */[
    /* index */lightMaterialRecord[/* index */0],
    /* buffer */lightMaterialRecord[/* buffer */1],
    /* shaderIndices */lightMaterialRecord[/* shaderIndices */2],
    /* diffuseColors */OperateTypeArrayLightMaterialService$Wonderjs.setDiffuseColor(material, color, lightMaterialRecord[/* diffuseColors */3]),
    /* specularColors */lightMaterialRecord[/* specularColors */4],
    /* shininess */lightMaterialRecord[/* shininess */5],
    /* textureIndices */lightMaterialRecord[/* textureIndices */6],
    /* diffuseMapUnits */lightMaterialRecord[/* diffuseMapUnits */7],
    /* specularMapUnits */lightMaterialRecord[/* specularMapUnits */8],
    /* emptyMapUnitArrayMap */lightMaterialRecord[/* emptyMapUnitArrayMap */9],
    /* defaultDiffuseColor */lightMaterialRecord[/* defaultDiffuseColor */10],
    /* defaultSpecularColor */lightMaterialRecord[/* defaultSpecularColor */11],
    /* defaultShininess */lightMaterialRecord[/* defaultShininess */12],
    /* gameObjectsMap */lightMaterialRecord[/* gameObjectsMap */13],
    /* disposedIndexArray */lightMaterialRecord[/* disposedIndexArray */14],
    /* nameMap */lightMaterialRecord[/* nameMap */15],
    /* materialArrayForWorkerInit */lightMaterialRecord[/* materialArrayForWorkerInit */16]
  ];
  return newrecord;
}

function getSpecularColor(material, state) {
  return OperateTypeArrayLightMaterialService$Wonderjs.getSpecularColor(material, RecordLightMaterialMainService$Wonderjs.getRecord(state)[/* specularColors */4]);
}

function setSpecularColor(material, color, state) {
  var lightMaterialRecord = RecordLightMaterialMainService$Wonderjs.getRecord(state);
  var newrecord = Caml_array.caml_array_dup(state);
  newrecord[/* lightMaterialRecord */16] = /* record */[
    /* index */lightMaterialRecord[/* index */0],
    /* buffer */lightMaterialRecord[/* buffer */1],
    /* shaderIndices */lightMaterialRecord[/* shaderIndices */2],
    /* diffuseColors */lightMaterialRecord[/* diffuseColors */3],
    /* specularColors */OperateTypeArrayLightMaterialService$Wonderjs.setSpecularColor(material, color, lightMaterialRecord[/* specularColors */4]),
    /* shininess */lightMaterialRecord[/* shininess */5],
    /* textureIndices */lightMaterialRecord[/* textureIndices */6],
    /* diffuseMapUnits */lightMaterialRecord[/* diffuseMapUnits */7],
    /* specularMapUnits */lightMaterialRecord[/* specularMapUnits */8],
    /* emptyMapUnitArrayMap */lightMaterialRecord[/* emptyMapUnitArrayMap */9],
    /* defaultDiffuseColor */lightMaterialRecord[/* defaultDiffuseColor */10],
    /* defaultSpecularColor */lightMaterialRecord[/* defaultSpecularColor */11],
    /* defaultShininess */lightMaterialRecord[/* defaultShininess */12],
    /* gameObjectsMap */lightMaterialRecord[/* gameObjectsMap */13],
    /* disposedIndexArray */lightMaterialRecord[/* disposedIndexArray */14],
    /* nameMap */lightMaterialRecord[/* nameMap */15],
    /* materialArrayForWorkerInit */lightMaterialRecord[/* materialArrayForWorkerInit */16]
  ];
  return newrecord;
}

function getShininess(material, state) {
  return OperateTypeArrayLightMaterialService$Wonderjs.getShininess(material, RecordLightMaterialMainService$Wonderjs.getRecord(state)[/* shininess */5]);
}

function setShininess(material, value, state) {
  var lightMaterialRecord = RecordLightMaterialMainService$Wonderjs.getRecord(state);
  var newrecord = Caml_array.caml_array_dup(state);
  newrecord[/* lightMaterialRecord */16] = /* record */[
    /* index */lightMaterialRecord[/* index */0],
    /* buffer */lightMaterialRecord[/* buffer */1],
    /* shaderIndices */lightMaterialRecord[/* shaderIndices */2],
    /* diffuseColors */lightMaterialRecord[/* diffuseColors */3],
    /* specularColors */lightMaterialRecord[/* specularColors */4],
    /* shininess */OperateTypeArrayLightMaterialService$Wonderjs.setShininess(material, value, lightMaterialRecord[/* shininess */5]),
    /* textureIndices */lightMaterialRecord[/* textureIndices */6],
    /* diffuseMapUnits */lightMaterialRecord[/* diffuseMapUnits */7],
    /* specularMapUnits */lightMaterialRecord[/* specularMapUnits */8],
    /* emptyMapUnitArrayMap */lightMaterialRecord[/* emptyMapUnitArrayMap */9],
    /* defaultDiffuseColor */lightMaterialRecord[/* defaultDiffuseColor */10],
    /* defaultSpecularColor */lightMaterialRecord[/* defaultSpecularColor */11],
    /* defaultShininess */lightMaterialRecord[/* defaultShininess */12],
    /* gameObjectsMap */lightMaterialRecord[/* gameObjectsMap */13],
    /* disposedIndexArray */lightMaterialRecord[/* disposedIndexArray */14],
    /* nameMap */lightMaterialRecord[/* nameMap */15],
    /* materialArrayForWorkerInit */lightMaterialRecord[/* materialArrayForWorkerInit */16]
  ];
  return newrecord;
}

var getDiffuseMap = ManageMapLightMaterialMainService$Wonderjs.getDiffuseMap;

var unsafeGetDiffuseMap = ManageMapLightMaterialMainService$Wonderjs.unsafeGetDiffuseMap;

var setDiffuseMap = ManageMapLightMaterialMainService$Wonderjs.setDiffuseMap;

var hasDiffuseMap = ManageMapLightMaterialMainService$Wonderjs.hasDiffuseMap;

var removeDiffuseMap = ManageMapLightMaterialMainService$Wonderjs.removeDiffuseMap;

var getSpecularMap = ManageMapLightMaterialMainService$Wonderjs.getSpecularMap;

var unsafeGetSpecularMap = ManageMapLightMaterialMainService$Wonderjs.unsafeGetSpecularMap;

var setSpecularMap = ManageMapLightMaterialMainService$Wonderjs.setSpecularMap;

var hasSpecularMap = ManageMapLightMaterialMainService$Wonderjs.hasSpecularMap;

var removeSpecularMap = ManageMapLightMaterialMainService$Wonderjs.removeSpecularMap;

export {
  getDiffuseColor ,
  setDiffuseColor ,
  getSpecularColor ,
  setSpecularColor ,
  getShininess ,
  setShininess ,
  getDiffuseMap ,
  unsafeGetDiffuseMap ,
  setDiffuseMap ,
  hasDiffuseMap ,
  removeDiffuseMap ,
  getSpecularMap ,
  unsafeGetSpecularMap ,
  setSpecularMap ,
  hasSpecularMap ,
  removeSpecularMap ,
  
}
/* RecordLightMaterialMainService-Wonderjs Not a pure module */
