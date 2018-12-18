<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <v-list-tile style="background-color: #E0E0E0;">
            <v-list-tile-content>
              <b><v-list-tile-title v-text="item.title"></v-list-tile-title></b>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-content v-text="item.content"></v-list-tile-content>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'profile',
    props: ['item'],
    data () {
      return {
      }
    }
  }
</script>

