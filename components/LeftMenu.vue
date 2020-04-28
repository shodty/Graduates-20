<template lang="pug">
.left-menu
    //b-row
        Logo(v-if="!showGraphic" class="logo")
    b-row.leftside
        ul.leftul
            li.discipline.graphic(@click="showDiscipline('graphic') " :class="{ bigger: show == 'graphic'}") Graphic Design
                transition(name="fade")
                    .graphic-things(v-if="show == 'graphic'")
                            img.discipline-logo(src='../assets/img/graphic-logo.png')
                            br
                            label.shuffle(@click="shuffleStudents") SHUFFLE
                            br
                            ul
                                li.taglist(v-for='tag in masterTags')
                                    label(name='test') {{tag}}
                                        input.check(type='checkbox' :name='tag' :value='tag' v-model='tags' @change='updateTags(tags)' display='none')
                            br
            li.discipline.interior(@click="showDiscipline('interior')" :class="{ bigger: show == 'interior' }") Interior Architecture
                transition(name="fade")
                    img.discipline-logo(v-if="show == 'interior'" src='../assets/img/interior-logo.png')
            li.discipline.photo(@click="showDiscipline('photo')" :class="{ bigger: show == 'photo' }") Photography
                transition(name="fade")
                    img.discipline-logo(v-if="show == 'photo'" src='../assets/img/photo-logo.png')
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
      showslider: false,
      tags: []
    }
  },
  computed: {
    studentObject () {
      return this.$store.state.students.studentObject
    },
    masterTags () {
      return this.$store.getters['students/masterTags']
    },
    ...mapState({
      show: state => state.general.show
    })
  },
  methods: {
    showDiscipline (discipline) {
      this.$store.dispatch('general/showDiscipline', discipline)
    },
    updateTags (tags) {
      this.$store.dispatch('students/toggleTags', tags)
    },
    shuffleStudents () {
      this.$bus.$emit('shuffleStudents')
    }
  }
}
</script>

<style lang="stylus">

.logo
  width 70%
  height 70%
  padding 50px 0

.discipline-logo
    width 60%
    margin 0 auto
    padding 5% 0 1% 0

ul.leftul
  width 100%
  height 100%
  border-right 3px solid black

li.discipline
  text-align left
  font-size 1.2vw
  font-family: 'GT-Pressura', sans-serif

.leftside
  height: 92%
  top 8%
  position fixed
  width 16.6666666%

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

.taglist
    padding-left 2%
    font-size 16px

.shuffle
    font-size 18px

.check
    margin-left: 5px
</style>
