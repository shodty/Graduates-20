<template lang="pug">
.container.p-0
    b-row
        Header.header-class.fixed-top
        transition(name='fade')
            .col-2.hide-on-mobile(v-show='showmenu')
                LeftMenu.col-2#left
                img.hide-menu.cursor-pointer(src='../assets/img/left.png' @click="hideMenu")
        b-col.p-0.col-12( @mouseover="hover = true" @mouseleave="hover = false" :id="showmenu? 'right' : 'rightfull'")
            transition-group(name="fade")
                video.splash-video.hide-on-mobile(v-if="show == 'welcome'" src="../assets/video/G20_MaskSpin.mp4" autoplay muted loop key='vid' :class="showmenu? 'splash-video' : 'w-100'")
                img.splash-gif.hide-on-ipad(v-if="show == 'welcome'" src="../assets/video/G20_mobile.gif" key='gif')
                span.enter.hide-on-ipad(v-if="show == 'welcome' && !hover " key='enter') ENT<span style="font-family: Animal-Soul">E</span>R
                Introduction.overlay(v-if="hover && show == 'welcome'" key='intro')

            transition-group(name="fade" )
                b-row.rightside(v-if="show !== 'welcome'" key='students')
                    .student-loop(v-for="(student, index) in studentObject" v-if='isInSelectedTags(student)' :key='componentKey + index')
                        StudentWork( :student='student' :index='index' ref='studentwork')
                img.show-menu.cursor-pointer.hide-on-mobile(v-if="!showmenu" src='../assets/img/right.png' @click="hideMenu" key='hide')
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
      showmenu: true,
      hover: false,
      componentKey: 0
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
    this.$bus.$on('shuffleStudents', () => {
      this.$store.dispatch('students/shuffleStudents')
      this.forceRerender()
    })
    this.$bus.$on('alphabetizeStudents', (dir) => {
      this.$store.dispatch('students/alphabetizeStudents', dir)
      this.forceRerender()
    })
    this.$bus.$on('homeReset', () => {
      this.showmenu = true
    })
  },
  methods: {
    forceRerender () {
      this.componentKey += 1
    },
    hideMenu () {
      // this.forceRerender()
      this.$bus.$emit('resetImgCount')
      this.$store.dispatch('students/hideAllStudentWork')
      this.showmenu = !this.showmenu
    },
    isInSelectedTags (student) {
      const discipline = this.currentTags[student.discipline]
      if (discipline.length === 0) { return true } else { return discipline.some(tag => student.tags.includes(tag)) }
    }
  }
}
</script>

<style lang="stylus">

.header-class
    height: 6%
    z-index 2000

#left
    min-height 100%
    position fixed
    top 6%

#right
    position absolute
    left 16.6666%
    top 6%
    width 83.3333%
    transition width 1s ease, left 1s ease
    @media(max-width: 1200px) {
        width 100%
        left 0
    }

#rightfull
    position absolute
    left 0
    top 6%
    width 100%
    transition width 1s ease, left 1s ease

.rightside
    overflow-y hidden
    overflow-x hidden
    padding 0
    margin 0
    border-left 3px solid #181819
    @media(max-width: 1200px) {
        border-left 0px
    }

.hide-menu, .show-menu
    position fixed
    right 83.233%
    top 50%
    height 25px

.show-menu
    left 0

.splash-video
    position fixed
    top 0
    min-width: 84%
    min-height 100%
    overflow hidden
    border-left 3px solid #181819
    transition width 1s ease

.splash-gif
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  object-fit: cover
  overflow hidden

.overlay
    position absolute
    min-height: 100vh
    width: 100%
    color #181819
    left 0
    top 0
    padding 0
    padding-bottom 10%
    overflow-x hidden
    border-left 3px solid #181819

.student-loop
    height: 100%
    width 100%

.enter
  position fixed
  bottom 5%
  width 100%
  z-index 500
  color white
  text-align center
  font-family 'GT-Pressura', sans-serif
  font-size 42px
</style>
