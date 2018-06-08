import * as THREE from 'three'

export default {
  data () {
    return {
      uniforms: {}
    }
  },
  mounted () {
    this.setResolution()
  },
  methods: {
    getStage () {
      return document.getElementById('stage')
    },
    setResolution () {
      this.uniforms.resolution = {type: 'v2', value: new THREE.Vector2()}
      this.updateResolution()
      document.addEventListener('resize', () => {
        const stage = this.getStage()
        this.updateResolution(stage.clientWidth, stage.clientHeight)
      })
    },
    updateResolution (width=this.getStage().clientWidth, height=this.getStage().clientHeight) {
      this.uniforms.resolution.value.x = width / this.ratio
      this.uniforms.resolution.value.y = height / this.ratio
    }
  }
}
