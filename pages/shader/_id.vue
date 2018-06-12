<template lang="pug">
  #l-page
    .shader
      glsl-canvas(
        :fragmentShader="getFragmentShader()",
        :texture="texture && require(`@/assets/image/${texture}`)",
        :music-path="music",
        :is-mic="mic",
        :is-camera="camera"
      )
</template>

<script>
import GlslCanvas from "@/components/shader/GlslCanvas";
export default {
  components: {
    GlslCanvas
  },
  asyncData (context) {
    return {
      texture: context.query['t'] || null, // texture
      music: context.query['a'] || null, // audio
      mic: context.query['m'] === 'true', // mic
      camera: context.query['c'] === 'true'
    }
  },
  methods: {
    getFragmentShader () {
      return require(`@/assets/shader/${this.$route.params.id || 'default'}.frag`)
    }
  }
};
</script>

<style lang="sass">
.shader
  width: 1000px
  height: 1000px
</style>
