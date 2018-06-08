// 極座標

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D texture;

float light( vec2 p ) {
    const int nr_light = 36;
    float b = 0.0;
    for( int i=0; i<nr_light; ++i ) {
        float t = time;
        float r = t + PI * 2.0 * float(i) / float(nr_light);
        vec2 lp = vec2(0.5) + 0.5 * cos(t) * ( abs(cos(t + float(i))) * 0.3 + 0.7 ) * vec2(cos(r), sin(r));
        float d = pow( 1.0 / ( distance( p, lp ) + 1.0 ), 60.0 );
        b += d;
    }
    return b;
}

void main(void) {
    vec2 p = gl_FragCoord.xy / resolution.xy;
    p -= vec2(0.5);
    float dist = length(p);
    float th = atan( p.y, p.x );
    p = vec2( th * 2.0 / PI, 0.1 / dist );
    p = mod( p*5.0, 1.0 );

    float d = light( p );
    d = clamp(d, 0.0, 1.0);

    float r = d * abs(sin(time));
    float g = d * 0.3;
    float b = d * 0.8;

    gl_FragColor = vec4( r, g, b, 1 );
}
