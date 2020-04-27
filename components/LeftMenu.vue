<template lang="pug">
.left-menu
    //b-row
        Logo(v-if="!showGraphic" class="logo")
    b-row.leftside
        ul.leftul
            li.discipline.graphic(@click="showDiscipline('graphic') " :class="{ bigger: show == 'graphic'}") Graphic Design
                transition(name="fade")
                    p(v-if="show == 'graphic'") TESTING!
            li.discipline.interior(@click="showDiscipline('interior')" :class="{ bigger: show == 'interior' }") Interior Architecture
                transition(name="fade")
                    p(v-if="show == 'interior'") TESTING!
            li.discipline.photo(@click="showDiscipline('photo')" :class="{ bigger: show == 'photo' }") Photography
                transition(name="fade")
                    p(v-if="show == 'photo'") TESTING!
</template>

<script>

import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      showslider: false
    }
  },
  computed: {
    studentObject () {
      return this.$store.state.students.studentObject
    },
    ...mapState({
      show: state => state.general.show
    })
  },
  methods: {
    showDiscipline (discipline) {
      this.$bus.$emit('shuffleStudents')
      this.$store.dispatch('general/showDiscipline', discipline)
    }
  }
}
</script>

<style lang="stylus">

.logo
  width 70%
  height 70%
  padding 50px 0

ul.leftul
  width 100%
  height 100%
  border-right 3px solid black

li.discipline
  text-align left
  font-size 2vw
  font-weight: 600
  font-family: 'GT-Pressura', sans-serif

.leftside
  height: 90%
  top 10%
  position fixed
  width 25%

.discipline
  width: 100%
  border-top 3px solid black
  transition: height 1s;
  height 7%
  padding-left: 4%

.graphic
  border-top 0px
  background-color #c1abd3

.interior
  background-color #b7dba7

.photo
  background-color #fbb03a

.bigger
  height: 86%;
  transition: height 1s;

</style>
