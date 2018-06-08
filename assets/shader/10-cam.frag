// chaosity

#ifdef GL_ES
precision mediump float;
#endif

#define E  2.718281828459045
#define PI 3.14159

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D texture;
uniform sampler2D camera;

void main (void) {
  vec3 color = vec3(0.0);
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec2 m = mouse.xy / resolution.xy;

  color = texture2D(camera, uv).rgb;

  float chaos = m.x * PI * 0.5;
  chaos = abs(tan(chaos));
  chaos += 2.0;

  color = step(0.5, fract(chaos * color));
  //  color.g = step(0.5, fract(chaos * color.g));
  //  color.b = step(0.5, fract(chaos * color.b));

  gl_FragColor = vec4(color, 1.0);
}