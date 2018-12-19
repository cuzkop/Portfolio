<template>
  <div class="hello">
    <h1 style="text-align: center;">Contact</h1>
    <v-layout row wrap justify-center>
      <v-flex xs4>
        <v-hover>
          <v-card
            raised
            class="gray--text mx-auto"
            :href="'mailto:'+address"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            contain
          >
            <v-card-text>
              <div class="headline" style="text-align:center; word-wrap: break-word;">
                <v-icon>fa-envelope</v-icon>
                <span>{{ address }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      address : 'kzk0829kop@gmail.com'
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
