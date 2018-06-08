import * as THREE from 'three'

export default {
  props: {
    isMouse: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data () {
    return {
      uniforms: {}
    }
  },
  mounted () {
    if (this.isMouse) {
      this.setMouse()
    }
  },
  methods: {
    setMouse () {
      this.uniforms.mouse = {type: 'v2', value: new THREE.Vector2()}
      document.addEventListener('mousemove', this.updateMouse)
    },
    updateMouse (e) {
      // mouse位置については、pageから取得 -> 内部での調整を要するものの、いったんはこれで開発。
      this.uniforms.mouse.value.x = e.offsetX - this.renderer.domElement.offsetLeft
      this.uniforms.mouse.value.y = e.offsetY - this.renderer.domElement.offsetTop
    }
  }
}
