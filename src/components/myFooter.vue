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
      <v-card-title class="black">
        <strong class="subheading">My other links. Please come to my other pages!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="item in items"
          :key="item.link"
          class="mx-3"
          dark
          icon
          :href="item.link"
          target="_blank"
          rel="noopener"
        >
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>

</template>

<style>
  /*@import url('https://maxcdn.bootstrapcdn.com/font-awesome/5.5.0/css/font-awesome.min.css');*/
</style>
<script>
export default {
  name: 'myFooter',
  data: () => ({
      items: [
        {icon:'fab fa-facebook', link:'https://www.facebook.com/kazuki.takahashi.3591'},
        {icon:'fab fa-twitter', link:'https://twitter.com/kzkzkzk55'},
        {icon:'fab fa-github', link:'https://github.com/kazuki5555'},
        {icon:'fab fa-quora', link:'https://qiita.com/kazuki5555'}
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
