<template lang="pug">
Main
</template>

<script>

import { page } from 'vue-analytics'
import Main from './Main.vue'

export default {
  name: 'Graduates20',
  components: {
    Main
  },
  data () {
    return {
    }
  },
  methods: {
    track () {
      page('/')
    }
  }
}
</script>

<style lang="stylus">

</style>
