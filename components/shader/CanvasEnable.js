import * as THREE from 'three'
import AudioEnable from './input/AudioEnable'
import MouseEnable from "./input/MouseEnable";
import TextureEnable from "./input/TextureEnable";
import TimerEnable from "./input/TimerEnable";
import ResolutionEnable from "./input/ResolutionEnable";
import WebcamEnable from './input/WebcamEnable'

export default {
  mixins: [
    ResolutionEnable,
    TimerEnable,
    TextureEnable,
    MouseEnable,
    AudioEnable,
    WebcamEnable
  ],
  props: {
    fragmentShader: {
      type: String,
      default: require('@/assets/shader/default.frag'),
      required: false
    },
    vertexShader: {
      type: String,
      default: require('@/assets/shader/default.vert'),
      required: false
    },
    ratio: {
      type: Number,
      default: 1,
      required: false
    }
  },
  data () {
    return {
      renderer: null,
      scene: null,
      camera: null,
      updates: [],
      uniforms: {}
    }
  },
  mounted () {
    this.renderer = new THREE.WebGLRenderer({canvas: this.getStage()})
    this.scene = new THREE.Scene()

    this.scene.add(this.getPlane())
    this.scene.add(this.getCamera())

    this.resize()
    document.addEventListener('resize', this.resize)

    this.animate()
  },
  methods: {
    getStage () {
      return document.getElementById('stage')
    },
    resize () {
      const stage = this.getStage()
      const [ width, height ] = [ stage.clientWidth, stage.clientHeight ];
      this.renderer.setSize(width, height);
    },
    getPlane() {
      const geometry = new THREE.PlaneGeometry(2, 2)
      const material = new THREE.ShaderMaterial({
        fragmentShader: this.fragmentShader,
        vertexShader: this.vertexShader,
        uniforms: this.uniforms
      })

      const plane = new THREE.Mesh(geometry, material)
      return plane
    },
    getCamera () {
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
      camera.position.set(0, 0, 1)
      camera.lookAt(this.scene.position)
      this.camera = camera
      return camera
    },
    animate () {
      requestAnimationFrame(this.animate)

      this.updates.forEach(func => {func()})

      this.render()
    },
    render () {
      this.renderer.render(this.scene, this.camera)
    }
  }
}
