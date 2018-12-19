<template>
  <v-toolbar
  dense
  color="black"
  ripple
  height="auto"
  style="overflow: scroll;"
  >
    <v-layout justify-center fill-height>
      <v-toolbar-items>
        <!-- なぜか下のスタイル内では効かないためボタンごとにベタで高さ調整 -->
        <router-link to='/' class="link">
          <v-btn
          flat
          color="white"
          style="height: 8vh; min-width: 10vw; font-weight: bold;"
          >
            Top
          </v-btn>
        </router-link>
        <router-link
          class="link"
          v-for="item in items"
          :key="item.to"
          :to="item.to"
        >
          <v-btn
          flat
          color="white"
          style="height: 8vh; min-width: 10vw; font-weight: bold;"
          >
            {{ item.to }}
          </v-btn>
        </router-link>
      </v-toolbar-items>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  name: 'myHeader',
  data: () => ({
      items: [
        {to:'Profile'},
        {to:'Skill'},
        {to:'Works'},
        {to:'Contact'},
      ]
    })
}
</script>

<style>
.link {
  text-decoration: none;
}



</style>
