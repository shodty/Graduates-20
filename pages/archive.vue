<template lang="pug">
.container
  Header.header
  b-container.container-fluid
    b-row.no-gutters
        .left.d-none.d-lg-block( :class="showmenu? 'col-2' : 'd-none' " )
            .stuff.sticky(v-show='showmenu')
              LeftMenu
              img.hide-menu.cursor-pointer(src='../assets/img/left.png' @click="hideMenu")
        b-col.right( @mouseover="hover = true" @mouseleave="hover = false" key='work' :class="showmenu? 'col-10' : 'col-12' ")
          transition-group(name="fade")
              video.video-bottom(v-if="show == 'welcome'" src="../assets/video/G20_MaskSpin_full.mp4" autoplay muted loop key='vid')
              Introduction.overlay(v-if="hover" key='intro')
          transition-group(name="fade")
            b-row.no-gutters.rightside.col-sm-12(v-if="show !== 'welcome'" key='students')
                .student-loop(v-for="(student, index) in studentObject" v-if='currentTags.length == 0 || isInSelectedTags(student.tags)' :key='componentKey + index')
                  StudentWork( :student='student' :index='index' ref='studentwork' :menu='showmenu')
        img.show-menu.cursor-pointer(v-if="!showmenu" src='../assets/img/right.png' @click="hideMenu" key='hide')
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
      return this.currentTags.some(tag => studentTags.includes(tag))
    },
    hideMenu () {
      this.forceRerender()
      this.$store.dispatch('students/hideAllStudentWork')
      this.showmenu = !this.showmenu
    }
  }
}
</script>

<style lang="stylus">

.container
  padding 0
  overflow hidden

.header
  position: sticky
  top 0

.logo
  width 70%
  height 70%
  padding 50px 0

.left
  position sticky
  top 0
  background-color: white
  transition: width 1s ease, margin 0.3s ease

.sticky
  position sticky
  top 8%
  overflow none

.right
  border-left 3px solid #181819

.video-bottom
  position fixed
  transition opacity 1s ease
  min-height: 100vh
  min-width: 100%
  overflow hidden

.rightside
  overflow-y scroll
  overflow-x hidden
  padding 0

.full-right
  width 100%

.student-loop
  height: 100%
  width: 100%
  @media(max-width: 375px) {
    height: 25%
  }
  @media(min-width: 376px) {
    height: 50%
  }
  @media(min-width: 1000px) and (max-height: 1000px) {
    height: 100%
  }
  @media(min-width: 1400px) {
    height: 100%
  }
  @media(max-width: 1140px) and (orientation:portrait) {
    height: 33%
  }
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
  color #181819
  left 0
  top 0
  padding-bottom 10%
  overflow-y scroll
  overflow-x none

.hide-menu, .show-menu
  position absolute
  right -.5%
  top 50%
  height 2%

.show-menu
  left 0

.hiding-menu
  width 0
  @media(min-width: 376px) {
    height: 47vh
  }
  @media(min-width: 1000px) and (max-height: 1000px) {
    height: 94vh
  }
  @media(min-width: 1350px) {
    height: 94vh
  }
  @media(max-width: 1140px) and (orientation:portrait) {
    height: 31.3333vh
  }
  @media(max-width: 375px) {
    height: 23.5vh
  }
  @media(max-width: 812px) and (max-height: 375px) {
    height: 94vh
  }

</style>
