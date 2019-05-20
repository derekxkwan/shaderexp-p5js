
precision mediump float;

// texcoords from the vertex shader
varying vec2 vTexCoord;

// our textures coming from p5
uniform sampler2D tex0;


uniform float numpix;

void main() {

  vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  //uv = vec2(1.0, 0.0) - uv * vec2(1.0, -1.0);
  uv = vec2(uv.x, 1.0 - uv.y);

  uv = floor(uv*numpix)/numpix;

  vec4 ret_color = texture2D(tex0, uv);
  
  gl_FragColor = ret_color;
  //gl_FragColor = vec4(vec3(min_dist), 1.0);
 // gl_FragColor = cur_state;
}
