<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-app>
      <v-content>
        <v-container>Hello world</v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to my web site'
    }
  }
}
</script>
<style>
  .hello {
    height: 94vh;
    width: 100vw;
  }
</style>
