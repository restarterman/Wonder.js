open MainStateDataType;

let getMaterialRecord = (state) => state.lightMaterialRecord;

let createGameObject = (state) => {
  open LightMaterialAPI;
  open GameObjectAPI;
  let (state, material) = createLightMaterial(state);
  let (state, gameObject) = state |> createGameObject;
  let state = state |> addGameObjectLightMaterialComponent(gameObject, material);
  (state, gameObject, material)
};

let initMaterials = InitLightMaterialMainService.init;

let unsafeGetShaderIndex = (materialIndex: int, state: MainStateDataType.state) =>
  ShaderIndexLightMaterialMainService.unsafeGetShaderIndex(materialIndex, state);

let hasShaderIndex = (materialIndex: int, state: MainStateDataType.state) =>
  ShaderIndexLightMaterialMainService.hasShaderIndex(materialIndex, state);

let setShaderIndex = (materialIndex: int, shaderIndex, state: MainStateDataType.state) =>
  [@bs] ShaderIndexLightMaterialMainService.setShaderIndex(materialIndex, shaderIndex, state);

let dispose = (material, state: MainStateDataType.state) => {
  ...state,
  lightMaterialRecord:
    DisposeLightMaterialService.handleDisposeComponent(material, state.lightMaterialRecord)
};

let initMaterial = (materialIndex, state) =>
  [@bs]
  InitLightMaterialMainService.initMaterial(
    [@bs] DeviceManagerService.unsafeGetGl(state.deviceManagerRecord),
    materialIndex,
    state
  );

let isMaterialDisposed = (material, state) => {
  open LightMaterialType;
  let {disposedIndexArray} = state.lightMaterialRecord;
  disposedIndexArray |> Js.Array.includes(material)
};

let getGroupCount = (material, state) =>
  GroupLightMaterialService.getGroupCount(material, state.lightMaterialRecord);