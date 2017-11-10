open GLSLLocationType;

let getAttribLocation = (program, name, attributeLocationMap, gl) =>
  switch (attributeLocationMap |> HashMapSystem.get(name)) {
  | Some(pos) => pos
  | None =>
    let pos = Gl.getAttribLocation(program, name, gl);
    attributeLocationMap |> HashMapSystem.set(name, pos) |> ignore;
    pos
  };

let getUniformLocation = (program, name, uniformLocationMap, gl) =>
  switch (uniformLocationMap |> HashMapSystem.get(name)) {
  | Some(pos) => pos
  | None =>
    let pos = Gl.getUniformLocation(program, name, gl);
    uniformLocationMap |> HashMapSystem.set(name, pos) |> ignore;
    pos
  };

let getAttributeLocationMap = (shaderIndexStr: string, state: StateDataType.state) =>
  state.glslLocationData.attributeLocationMap |> HashMapSystem.get(shaderIndexStr);

let setAttributeLocationMap =
    (shaderIndexStr: string, attributeLocationMap: Js.Dict.t(int), state: StateDataType.state) => {
  state.glslLocationData.attributeLocationMap
  |> HashMapSystem.set(shaderIndexStr, attributeLocationMap)
  |> ignore;
  state
};

let getUniformLocationMap = (shaderIndexStr: string, state: StateDataType.state) =>
  state.glslLocationData.uniformLocationMap |> HashMapSystem.get(shaderIndexStr);

let setUniformLocationMap =
    (shaderIndexStr: string, uniformLocationMap, state: StateDataType.state) => {
  state.glslLocationData.uniformLocationMap
  |> HashMapSystem.set(shaderIndexStr, uniformLocationMap)
  |> ignore;
  state
};

let createLocationMap = () => HashMapSystem.createEmpty();

let initData = () => {
  attributeLocationMap: HashMapSystem.createEmpty(),
  uniformLocationMap: HashMapSystem.createEmpty()
};