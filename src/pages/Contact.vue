<template>
  <div class="hello">
    <h1 style="text-align: center;">Contact</h1>
    <v-layout row wrap justify-center>
      <v-flex xs4>
        <v-hover>
          <v-card
            raised
            tile
            class="gray--text mx-auto"
            :href="'mailto:${address}'"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
          >
            <v-card-text>
              <div class="headline" style="text-align:center;">
                <v-icon>email</v-icon>
                <address>{{ address }}</address>
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
