<template lang="pug">
.left-menu
    //b-row
        Logo(v-if="!showGraphic" class="logo")
    b-row.leftside.no-gutters
        ul.leftul
            li.discipline.welcome(@click="showDiscipline('welcome') " :class="{ bigger: show == 'welcome'}")
                transition-group(name="fade")
                  span.cursor-pointer(key='span') Welcome
                  .group(v-if="show == 'welcome'" key='group')
                    img.main-logo(src='../assets/img/main-logo.png')
                    p.welcome-text The horizontal logo (↑↑↑) emphasizes “S-20” by turning to outline, or by having “GRADUATES” be outlined, and “S-20” staying solid. Animal Soul Glyphs can be used on S-20, regardless of if it is outlined or not.
            li.discipline.graphic(@click="showDiscipline('graphic') " :class="{ bigger: show == 'graphic'}")
                transition-group(name="fade")
                    span.cursor-pointer(key='design') Graphic Design
                    .graphic-things(v-if="show == 'graphic'" key='group')
                        img.discipline-logo(src='../assets/img/graphic-logo.png')
                        br
                        label.shuffle(@click="shuffleStudents") SHUFFLE
                        br
                        ul
                            li.taglist(v-for='tag in masterTags')
                              input.check(type='checkbox' :id='tag' :name='tag' :value='tag' v-model='tags' @change='updateTags(tags)' )
                              label.cursor-pointer.label-for-check(name='test' :for='tag') {{tag}}
                        br
            li.discipline.interior(@click="showDiscipline('interior')" :class="{ bigger: show == 'interior' }")
                transition-group(name="fade")
                  span.cursor-pointer(key='interior') Interior Architecture
                  .graphic-things(v-if="show == 'interior'" key='group')
                    img.discipline-logo(src='../assets/img/interior-logo.png')
            li.discipline.photo(@click="showDiscipline('photo')" :class="{ bigger: show == 'photo' }")
                transition-group(name="fade")
                  span.cursor-pointer(key='photo') Photography
                  .graphic-things(v-if="show == 'photo'" key='group')
                    img.discipline-logo(src='../assets/img/photo-logo.png')
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
      tags: [],
      checked: false
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

.discipline-logo, .main-logo
    width 60%
    margin 0 auto
    padding 5% 0 1% 0

.main-logo
    width 60%

ul.leftul
  width 100%
  height 100%
  border-right 3px solid black

li.discipline
  text-align left
  font-size 1.2vw
  font-family: 'Ciao-Regular', sans-serif
  font-weight bold
.leftside
  height: 92%
  top 8%
  position fixed
  width 25%

.discipline
  width: 100%
  border-top 3px solid black
  transition: height 1s;
  height 7%
  padding-left: 4%
  padding-top 2%

.welcome-text
    width 60%
    font-size 16px
    font-family 'Ciao-Regular', sans-serif
    font-weight bold
.welcome
  border-top 0px

.graphic
  background-color #c1abd3

.interior
  background-color #b7dba7

.photo
  background-color #fbb03a
  border-bottom 3px solid black

.bigger
  height: 79%;
  transition: height 1s;

.taglist
    padding 0 1%
    font-size 16px
    font-family: 'GT-Pressura', sans-serif
    line-height: 0
    list-style-type: none
    display: inline

.label-for-check
    background white
    border-radius 15px
    padding 2%

.check:checked + .label-for-check {
    background #fbb03a
}

.shuffle
    font-size 18px
    font-family: 'GT-Pressura', sans-serif

.check
  display none
</style>
