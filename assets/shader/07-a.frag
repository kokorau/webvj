// metaball
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

void main (void) {
  vec2 p = gl_FragCoord.xy / resolution.xy;
  vec2 m = mouse.xy / resolution.xy;

  float lights = 0.0;
  float size = 0.06;

  vec3 color = vec3(0.0);

  const int col_amount = 10;
  const int row_amount = 10;
  for (int i=0; i < col_amount; ++ i) {
    for (int j=0; j < row_amount; ++j) {
      vec2 bp = vec2(
        p.x * float(i) / float(col_amount),
        p.y * float(j) / float(row_amount)
      );
    }
  }

  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
