
<template>
  <TheHeader v-if="isAuthenticated" />
  <TheMenu v-if="isAuthenticated" />
  <RouterView></RouterView>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMenu from './components/TheMenu.vue';
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    TheMenu,
    TheHeader,
  },
  methods: {

  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style>
@import url(./css/generel.css);
</style>
