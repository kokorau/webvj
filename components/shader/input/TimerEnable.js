import * as THREE from 'three'

export default {
  data () {
    return {
      uniforms: {},
      clock: new THREE.Clock(),
      updates: []
    }
  },
  mounted () {
    this.setTimer()
    this.updates.push(this.updateTimer)
  },
  methods: {
    setTimer () {
      this.uniforms.time = {type: 'f', value: 0.0}
    },
    updateTimer () {
      this.uniforms.time.value = this.clock.getElapsedTime()
    }
  }
}
