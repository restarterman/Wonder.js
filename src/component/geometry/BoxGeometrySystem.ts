import { BoxGeometry, BoxGeometryConfigData } from "./BoxGeometry";
// import { BoxGeometryConfigData } from "./BoxGeometryData";
import { ensureFunc, it, requireCheckFunc } from "../../definition/typescript/decorator/contract";
import { expect } from "wonder-expect.js";
import { Vector3 } from "../../math/Vector3";
import { create as createGeometry } from "./GeometrySystem";

export var create = (GeometryData: any) => {
    var geometry = new BoxGeometry();

    geometry = createGeometry(geometry, GeometryData);

    GeometryData.computeDataFuncMap[geometry.index] = _computeData;

    return geometry;
}

var _computeData = (index: number, GeometryData: any) => {
    var {
            width,
            height,
            depth,
            widthSegments,
            heightSegments,
            depthSegments
        } = _getConfigData(index, GeometryData),
        sides = {
            FRONT: 0,
            BACK: 1,
            TOP: 2,
            BOTTOM: 3,
            RIGHT: 4,
            LEFT: 5
        };
    var faceAxes = [
        [0, 1, 3], // FRONT
        [4, 5, 7], // BACK
        [3, 2, 6], // TOP
        [1, 0, 4], // BOTTOM
        [1, 4, 2], // RIGHT
        [5, 0, 6]  // LEFT
    ];

    // var faceNormals = [
    //     [  0,  0,  1 ], // FRONT
    //     [  0,  0, -1 ], // BACK
    //     [  0,  1,  0 ], // TOP
    //     [  0, -1,  0 ], // BOTTOM
    //     [  1,  0,  0 ], // RIGHT
    //     [ -1,  0,  0 ]  // LEFT
    // ];
    var corners = [
        Vector3.create(-width, -height, depth),
        Vector3.create(width, -height, depth),
        Vector3.create(width, height, depth),
        Vector3.create(-width, height, depth),
        Vector3.create(width, -height, -depth),
        Vector3.create(-width, -height, -depth),
        Vector3.create(-width, height, -depth),
        Vector3.create(width, height, -depth)
    ];

    var vertices = [];
    // var normals = [];
    // var texCoords = [];
    var indices = [];

    function generateFace(side, uSegments, vSegments) {
        var x, y, z, u, v;
        var i, j;
        var offset = vertices.length / 3;

        for (i = 0; i <= uSegments; i++) {
            for (j = 0; j <= vSegments; j++) {
                let temp1 = Vector3.create()
                var temp2 = Vector3.create();
                var temp3 = Vector3.create();
                var r = Vector3.create();
                temp1.lerp(corners[faceAxes[side][0]], corners[faceAxes[side][1]], i / uSegments);
                temp2.lerp(corners[faceAxes[side][0]], corners[faceAxes[side][2]], j / vSegments);
                temp3.sub2(temp2, corners[faceAxes[side][0]]);
                r.add2(temp1, temp3);
                u = i / uSegments;
                v = j / vSegments;

                vertices.push(r.x, r.y, r.z);
                // normals.push(faceNormals[side][0], faceNormals[side][1], faceNormals[side][2]);
                // texCoords.push(u, v);

                if ((i < uSegments) && (j < vSegments)) {
                    indices.push(offset + j + i * (uSegments + 1), offset + j + (i + 1) * (uSegments + 1), offset + j + i * (uSegments + 1) + 1);
                    indices.push(offset + j + (i + 1) * (uSegments + 1), offset + j + (i + 1) * (uSegments + 1) + 1, offset + j + i * (uSegments + 1) + 1);

                }
            }
        }
    }

    generateFace(sides.FRONT, widthSegments, heightSegments);
    generateFace(sides.BACK, widthSegments, heightSegments);
    generateFace(sides.TOP, widthSegments, depthSegments);
    generateFace(sides.BOTTOM, widthSegments, depthSegments);
    generateFace(sides.RIGHT, depthSegments, heightSegments);
    generateFace(sides.LEFT, depthSegments, heightSegments);

    return {
        vertices: vertices,
        //todo direct add to faces, remove indices,normals
        // faces: GeometryUtils.convertToFaces(indices, normals)
        // faces: GeometryUtils.convertToFaces(indices)
        indices: indices
        // texCoords: texCoords
    };
}

var _getConfigData = ensureFunc((data: BoxGeometryConfigData) => {
    it("config data should be defined", () => {
        expect(data).exist;
        expect(data.width).exist;
        expect(data.height).exist;
        expect(data.depth).exist;
        expect(data.widthSegments).exist;
        expect(data.heightSegments).exist;
        expect(data.depthSegments).exist;
    })
}, (index: number, GeometryData: any) => {
    return GeometryData.configDataMap[index];
})

export var setData = requireCheckFunc((geometry: BoxGeometry, data: BoxGeometryConfigData, GeometryData: any) => {
    it("should set all config data", () => {
        expect(data.width).exist;
        expect(data.height).exist;
        expect(data.depth).exist;
        expect(data.widthSegments).exist;
        expect(data.heightSegments).exist;
        expect(data.depthSegments).exist;
    })
}, (geometry: BoxGeometry, data: BoxGeometryConfigData, GeometryData: any) => {
    GeometryData.configDataMap[geometry.index] = data;
})

