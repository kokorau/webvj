// bounce pattern

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
uniform sampler2D texture;

void main (void) {
  vec3 color = vec3(0.0);
  vec2 p = gl_FragCoord.xy / resolution.xy;
  p -= vec2(0.5);

  float dist = length(p) * 2.0;
  float th = atan(p.y, p.x);

  float t = time * 3.0;
//  t = t - fract(t);
  float d = fract(th * 3.0 / PI + t);
  d = abs(d);
  d = smoothstep(d, d+0.02, sin(dist * 30.0 * sin(t)));
  d = 1.0 - d;
  color = vec3(d);

  color.r *= 1.0;
  color.g *= 0.0;
  color.b *= 0.0;

  gl_FragColor = vec4(color, 1.0);
}
