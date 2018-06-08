#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D texture;

void main (void) {
  vec2 uv = gl_FragCoord.xy / resolution.xy;

  vec3 color = texture2D(texture, uv).rgb;

  float a = abs(sin(time));
  float r = step(0.7, color.r);
  float g = 0.6;
  float b = 0.7;

  gl_FragColor = vec4(r, g, b, 1.0);
//  gl_FragColor = vec4(color, 1.0);
}
