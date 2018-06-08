#ifdef GL_ES
precision mediump float;
#endif

#pragma glslify: plot = require(./utils/plot.frag)

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

void main() {
	vec2 st = gl_FragCoord.xy/resolution;

  // y = x^5.0
  float y = pow(st.x, 5.0);

  vec3 color = vec3(y);
  float pct = plot(st,y);

  color = (1.0-pct) * color + pct * vec3(0.0,1.0,0.0);

	gl_FragColor = vec4(color,1.0);
}
