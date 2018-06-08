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

  vec2 point[8];

  point[0] = vec2(0.83,0.75);
  point[1] = vec2(0.60,0.07);
  point[2] = vec2(0.20,0.89);
  point[3] = vec2((cos(time * 0.3) * 0.4) + 0.5, (sin(time * 0.3) * 0.4) + 0.5);
  point[4] =  vec2(0.31,0.26);
  point[5] =  vec2(0.4,0.2);
  point[6] =  vec2(0.58,0.90);
  point[7] = vec2(mouse.x / resolution.x, 1.0 - mouse.y / resolution.y);

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
