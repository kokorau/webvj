#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D texture;

void main (void) {
  vec2 uv = gl_FragCoord.xy / resolution.xy;

  vec2 st = uv.xy - vec2(0.5);
  float a = atan(st.y, st.x);

  float d = min(cos(1 * 2.5));

  gl_FragColor = vec4(d, 0.0, 0.0, 1.0);
}
