<template>
  <v-layout row class="row">
    <v-flex xs12 sm6 offset-sm3 class="flex">
      <v-card class="card">
        <v-list two-line class="list">
          <v-list-tile class="head">
            <v-list-tile-content>
              <b><v-list-tile-title v-text="item.title"></v-list-tile-title></b>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content class="par-content">
              <v-list-tile-content v-text="item.content" class="content"></v-list-tile-content>
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


