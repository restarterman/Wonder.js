


function getGlFormat(gl, format) {
  switch (format) {
    case 0 : 
        return gl.RGB;
    case 1 : 
        return gl.RGBA;
    case 2 : 
        return gl.ALPHA;
    case 3 : 
        return gl.LUMINANCE;
    case 4 : 
        return gl.LUMINANCE_ALPHA;
    case 5 : 
        return gl.RGB_S3TC_DXT1;
    case 6 : 
        return gl.RGBA_S3TC_DXT1;
    case 7 : 
        return gl.RGBA_S3TC_DXT3;
    case 8 : 
        return gl.RGBA_S3TC_DXT5;
    
  }
}

export {
  getGlFormat ,
  
}
/* No side effect */
