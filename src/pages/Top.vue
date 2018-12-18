<template class="hello">
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    height='824'
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">Kazuki Takahashi's Portfolio</h1>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Profile'
    }
  }
}
</script>
<style>
  .hello {
    height: 85vh;
    width: 100vw;
  }
</style>
