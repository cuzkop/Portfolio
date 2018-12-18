<template>
  <div class="hello">
    <h1 style="text-align: center;">Profile</h1>
    <p>
      <profile v-for='profile in profiles' v-bind:item='profile' :key='profile.title'></profile>
    </p>
  </div>
</template>

<script>
import profile from '@/components/Profile'
export default {
  name: 'About',
  components: {
    profile
  },
  data() {
    return {
      profiles: [
        {
          title: 'Name',
          content: '高橋一貴(タカハシカズキ)'
        },
        {
          title: 'BirthDay',
          content: '1995/08/29'
        },
        {
          title: 'Engineer Carrer',
          content: '2018/04~'
        },
        {
          title: 'Education',
          content: '立教大学経済学部'
        },
        {
          title: 'Licenses',
          content: '普通自動車免許,IELTS Over All Score6.0'
        },
        {
          title: 'Favorite',
          content: 'サッカー、水泳、サーフィン、音楽、お酒'
        },
      ]
    }
  }
}
</script>
