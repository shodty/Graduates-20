<template lang="pug">
.container
  Header
  b-container.container-fluid
    b-row.no-gutters
        .left(key='menu' :class=" showmenu? 'showing-menu' : 'hiding-menu'")
            .stuff(v-if='showmenu')
              LeftMenu
              img.hide-menu.cursor-pointer(src='../assets/img/left.png' @click="hideMenu")
        b-col.right.overflow-hidden( @mouseover="hover = true" @mouseleave="hover = false" key='work')
          transition-group(name="fade")
              video.video-bottom(v-if="show == 'welcome'" src="../assets/video/G20_MaskSpin_full.mp4" autoplay muted loop key='vid')
              Introduction.overlay(v-if="hover" key='intro')
          transition(name="fade")
            b-row.no-gutters.rightside(v-if="show !== 'welcome'")
                .student-loop(v-for="(student, index) in studentObject" v-if='currentTags.length == 0 || isInSelectedTags(student.tags)' :key='componentKey + index')
                  StudentWork( :student='student' :index='index' )
          img.show-menu.cursor-pointer(v-if="!showmenu" src='../assets/img/right.png' @click="hideMenu")
</template>

<script>

import { mapState } from 'vuex'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'
import LeftMenu from '~/components/LeftMenu.vue'
import StudentWork from '~/components/StudentWork.vue'
import Introduction from '~/components/Introduction.vue'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    HooperNavigation,
    Slide,
    Logo,
    Header,
    LeftMenu,
    StudentWork,
    Introduction
  },
  data () {
    return {
      showslider: false,
      componentKey: 0,
      hover: false,
      showmenu: true,
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        wheelControl: false
      }
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
  },
  methods: {
    forceRerender () {
      this.componentKey += 1
    },
    isInSelectedTags (studentTags) {
      // console.log(this.currentTags)
      return this.currentTags.some(tag => studentTags.includes(tag))
    },
    hideMenu () {
      this.showmenu = !this.showmenu
    }
  }
}
</script>

<style lang="stylus">

.logo
  width 70%
  height 70%
  padding 50px 0

.left, .right
  height: 100vh
  margin 0 auto
  padding 0
  background-color: white

.col-2, .col-0, .left, .right, .row
  transition: width 1s ease, margin 0.3s ease
.right
  background-color: black

.video-bottom
  transition opacity 1s ease
  min-height: 100vh

ul.leftul
  width 100%
  height 100%
  border-right 3px solid black

.rightside
  height: 92%
  top 8%
  position fixed
  overflow-y scroll
  overflow-x hidden

.student-loop
  height: 100%
  width: 100%

.studentinfo
  height: 100%
  width: 100%
  overflow: hidden
  position: relative

.overlay
  position absolute
  height: 100%
  width: 100%
  background-color rgba(255,255,255,.9)
  color black
  left 0
  top 8%
  padding-bottom 10%
  overflow auto

.hide-menu, .show-menu
  position absolute
  right 75%
  top 50%
  height 3%

.show-menu
  left 0

.hiding-menu
  width 0

.showing-menu
  width 25%
</style>
