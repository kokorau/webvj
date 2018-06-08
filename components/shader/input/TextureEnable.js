import * as THREE from 'three'

export default {
  props: {
    texture: {
      type: String,
      default: null,
      required: false
    }
  },
  data () {
    return {
      uniforms: {}
    }
  },
  mounted () {
    if (this.texture) {
      this.setTexture()
    }
  },
  methods: {
    setTexture () {
      const texture = new THREE.TextureLoader().load(this.texture)
      this.uniforms.texture = {type: 't', value: texture}
    }
  }
}
