<template>
  <header>
    <div class="link">
      <router-link to='/'>Top</router-link>
      <router-link to='/About'>About</router-link>
      <router-link to='/Skill'>Skill</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
    }
  }
}
</script>

<style>
header {
  width: 100%;
  text-align: center;
  background-color: white;
  position: relative;
  top: 0px;
}
</style>
