<template lang="pug">
  #glsl-canvas
    canvas#stage
</template>

<script>
  import * as THREE from 'three'
  import CanvasEnable from './CanvasEnable';

  export default {
    name: 'GlslCanvas',
    mixins: [
      CanvasEnable
    ]
  }
</script>

<style lang="sass">
#glsl-canvas
  width: 100%
  height: 100%

#stage
  width: 100%
  height: 100%
</style>
