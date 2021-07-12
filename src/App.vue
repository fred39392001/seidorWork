<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <div id="nav">
      <NavBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
@import './assets/all';
</style>
