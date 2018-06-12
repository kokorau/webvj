uniform sampler2D texture;
uniform sampler2D camera;
uniform vec2 resolution;

const float tFrag = 1.0 / 512.0;
const float nFrag = 1.0 / 64.0;

void main(void){
  vec2 uv = gl_FragCoord.xy / resolution;
  vec2 nuv = vec2(1.0 - uv.x, uv.y);
  nuv = nuv - mod(nuv);

  vec4 color = texture2D(camera, nuv);

  gl_FragColor = color;
}
