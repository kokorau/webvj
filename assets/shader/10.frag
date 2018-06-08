// chaosity

#ifdef GL_ES
precision mediump float;
#endif

#define E  2.718281828459045

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D texture;
uniform sampler2D camera;

void main (void) {
  vec3 color = vec3(0.0);
  vec2 uv = gl_FragCoord.xy / resolution.xy;

  color = texture2D(texture, uv).rgb;

//  float chaos = log(time * 5.0 + E);
  float chaos = tan(time * 0.1);
  chaos = abs(chaos) + 1.0;
  chaos += sin(time);
  color.r = step(0.5, fract(chaos * color.r));
  color.g = step(0.5, fract(chaos * color.g));
  color.b = step(0.5, fract(chaos * color.b));

  gl_FragColor = vec4(color, 1.0);
}
