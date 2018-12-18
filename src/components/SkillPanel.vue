<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-expansion-panel popout>
          <v-expansion-panel-content>
            <div slot="header"><b>{{item.name}}</b></div>
            <v-card>
              <v-card-text>{{item.detail}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    name: 'skillPanel',
    props: ['item'],
    data () {
      return {
      }
    }
  }
</script>
