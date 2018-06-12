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
    musicPath: { // AudioNode
      default: null,
      required: false
    }
  },
  data () {
    return {
      uniforms: {},
      buffer: null,
      ctx: null,
      oscillator: null,
      audio: null,
      music: null
    }
  },
  mounted () {
    if (!this.musicPath) {return}
    this.ctx = new AudioContext()

    fetch(require(`@/assets/music/${this.musicPath}`)).then(res => {
      return res.arrayBuffer()
    }).then(arrayBuffer => {
      return this.ctx.decodeAudioData(arrayBuffer)
    }).then(buffer => {
      this.audio = buffer
    })

    this.playAudio()
  },
  methods: {
    setAudio () {
    },
    playAudio () {
      const source = this.ctx.createBufferSource()
      source.buffer = this.audio
      source.connect(this.ctx.destination)
      source.start(0)
    }
  }
}
