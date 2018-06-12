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
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 color = texture2D(camera, uv);

  color.r = texture2D(texture, vec2(uv.x + sin(time * 123.45) * 0.2, uv.y)).r;
  color.g = texture2D(texture, vec2(uv.x + sin(time * 457.67) * 0.2, uv.x)).g;
  color.b = texture2D(texture, vec2(uv.x + sin(time * 9123.67) * 0.2, uv.y)).b;

  gl_FragColor = color;
}
