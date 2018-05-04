<template>
  <div>
    <navbar
      background-color="#89313D"
      text-color="white"
      active-text-color="#F1D302">
    </navbar>
    <nuxt/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">

body {
  font-family: 'Mitr', sans-serif !important;
  background-color: whitesmoke;
  margin: 0px;
}
</style>
