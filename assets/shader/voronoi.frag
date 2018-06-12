#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

void main(void) {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  uv.x *= resolution.x / resolution.y;

  vec3 color = vec3(0.0);

  const int amount = 4;
  vec2 point[amount][amount];

  for (int i=0; i < amount; i++) {
    for (int j=0; j < amount; j++) {
      point[i][j] = vec2(float(i / amount), float(j /amount));
    }
  }

  float min_dist = 1.0;
  vec2 min_point = vec2(0.0);

  for (int i=0; i < 8; i++) {
    float dist = distance(uv, point[i]);
    if (dist < min_dist) {
      min_dist = dist;
      min_point = point[i];
    }
  }

  color += min_dist * 2.0;
  color.rg = min_point;
  color -= abs(step(0.99, sin(80.0*min_dist)))*0.07;
  color -= abs(sin(80.0*min_dist))*0.07;
  color += 1.0 - step(0.02, min_dist);

  gl_FragColor = vec4(color, 1.0);
}
