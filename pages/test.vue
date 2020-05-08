<template lang="pug">
.container.p-0
    LeftMenu
</template>

<script>

import { mapState } from 'vuex'
import Header from '~/components/Header.vue'
import LeftMenu from '~/components/LeftMenu.vue'
import StudentWork from '~/components/StudentWork.vue'
import Introduction from '~/components/Introduction.vue'

export default {
  components: {
    LeftMenu,
    Header,
    StudentWork,
    Introduction
  },
  data () {
    return {
    }
  },
  computed: {
    studentObject () {
      return this.$store.state.students.studentObject
    },
    currentTags () {
      return this.$store.state.students.currentTags
    },
    ...mapState({
      show: state => state.general.show
    })
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">

</style>
