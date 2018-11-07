<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
          :href="icon.link"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-actions>
    </v-card>
  </v-footer>

</template>

<script>
export default {
  name: 'myFooter',
  data: () => ({
      icons: [
        {icon:'fab fa-facebook', link:'https://www.facebook.com/'},
        {icon:'fab fa-twitter', link:'https://twitter.com/'},
        {icon:'fab fa-github', link:'https://github.com/kazuki5555'},
        {icon:'fab fa-quora', link:'https://qiita.com/kazuki5555'},
        {icon:'fab fa-instagram', link:'https://www.instagram.com/?hl=ja'}
      ]
    })
}
</script>

<style>
v-footer {
  height: 10vh;
  min-width: 100vw;

}
</style>
