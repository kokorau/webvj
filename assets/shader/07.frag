// metaball

#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

vec2 p;
vec2 m;

void init() {
  p = gl_FragCoord.xy / resolution.xy;
  m = mouse.xy / resolution.xy;
}

void main (void) {
  init();

  float lights = 0.0;
  float size = 0.06;

  float r = 0.0;
  float g = 0.0;
  float b = 0.0;

  vec2 a1 = p - vec2(sin(time * 2.0) * 0.2 + 0.5, cos(time * 2.0) * 0.2 + 0.5);
  r += pow(size / length(a1), 2.0);

  vec2 a2 = p - vec2(0.6, cos(time * 2.0) * 0.4 + 0.5);
  r += pow(size / length(a2), 2.0);

  vec2 a3 = p - vec2(m.x, 1.0 - m.y);
  r += pow(size / length(a3), 2.0);

  vec2 a4 = p - vec2(1.0 - m.x, m.y);
  r += pow(size / length(a4), 2.0);

  r = step(0.6, r);
  g = step(0.6, g);
  b = step(0.6, b);

  gl_FragColor = vec4(r * 0.5 , 0.6, 0.4, 1.0);
}
