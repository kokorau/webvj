<template lang="pug">
  section.container
    img.logo(src="~assets/image/logo.png", alt="Nuxt.js Logo")
    h1.title SHADERS
    ul.shaders
      li.shader(v-for="(shader, index) in shaders", :key="index")
        nuxt-link(:to="`shader/${shader.path}`") {{ shader.name }}
</template>

<script>
  export default {
    async asyncData ({app}) {
      let {data} = await app.$axios.get("/api/shaders");
      return {
        shaders: data
      };
    },
    head () {
      return {
        title: "Users"
      };
    }
  };
</script>

<style scoped lang="sass">
  .title
    margin: 30px 0

  .users
    list-style: none
    margin: 0
    padding: 0

  .user
    margin: 10px 0
</style>
