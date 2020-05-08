<template lang="pug">
.left-menu
    b-row.leftside
            b-col.col-12.discipline.welcome(@click="showDiscipline('welcome') " :class="{ bigger: show == 'welcome'}")
                transition-group(name="fade")
                  span.cursor-pointer(key='span') Welcome
                  .group(v-if="show == 'welcome'" key='group')
                    img.main-logo(src='../assets/img/main-logo.png')
                    p.welcome-text The horizontal logo (↑↑↑) emphasizes “S-20” by turning to outline, or by having “GRADUATES” be outlined, and “S-20” staying solid. Animal Soul Glyphs can be used on S-20, regardless of if it is outlined or not.
            b-col.col-12.discipline.graphic(@click="showDiscipline('graphic') " :class="{ bigger: show == 'graphic'}")
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
            b-col.col-12.discipline.interior(@click="showDiscipline('interior')" :class="{ bigger: show == 'interior' }")
                transition-group(name="fade")
                  span.cursor-pointer(key='interior') Interior Architecture
                  .graphic-things(v-if="show == 'interior'" key='group')
                    img.discipline-logo(src='../assets/img/interior-logo.png')
            b-col.col-12.discipline.photo(@click="showDiscipline('photo')" :class="{ bigger: show == 'photo' }")
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
.left-menu
  height: 100%

.leftside
  height 94%

.discipline-logo, .main-logo
    width 60%
    margin 0 auto
    padding 5% 0 1% 0

.main-logo
    width 80%
    max-width 250px

.discipline
  border-top 3px solid #181819
  transition: height 1s;
  height 7%
  padding-top 1%
  font-size 1vw
  font-family 'Ciao-Regular', sans-serif
  font-weight bold
  padding 5% 0% 0% 6%

.welcome-text
    width 100%
    padding 5%
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
  border-bottom 3px solid #181819

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
