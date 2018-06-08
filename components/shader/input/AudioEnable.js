import * as THREE from 'three'

// TODO: Analyserの部分
// 1. Audioの準備は外部で行う
// 2. Audioを受け取って、uniformに受け渡す部分

export default {
  props: {
    isMic: {
      type: Boolean,
      default: false,
      required: false
    },
    music: {
      default: null,
      required: false
    }
  },
  data () {
    return {
      buffer: null
    }
  },
  mounted () {
    if (this.isMic || this.music) {
      try {
        this.audioCtx = new window.AudioContext()
      } catch (e) {
        console.log(e)
      }

      const audio = new Audio(this.music)

      audio.play()

      this.playAudio()
    }
  },
  methods: {
    playAudio () {
      const source = this.audioCtx.createBufferSource()
      source.buffer = this.buffer
      source.connect(this.audioCtx.destination)
      source.start(0)
    }
  }
}
