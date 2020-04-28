<template lang="pug">
.container
  Header
  b-container.container-fluid
    b-row
      b-col.left(cols="2")
        LeftMenu
      b-col.right(cols="10")
        b-row.rightside
            .student-loop(v-for="(student, index) in studentObject" v-if='currentTags.length == 0 || isInSelectedTags(student.tags)' :key='componentKey + index')
              StudentWork( :student='student' :index='index' )
</template>

<script>

import { mapState } from 'vuex'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'
import LeftMenu from '~/components/LeftMenu.vue'
import StudentWork from '~/components/StudentWork.vue'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    HooperNavigation,
    Slide,
    Logo,
    Header,
    LeftMenu,
    StudentWork
  },
  data () {
    return {
      showslider: false,
      componentKey: 0,
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
  background-color: white

.right
  background-color: black

.video-bottom
  width: 100%
  transition opacity 1s ease

ul.leftul
  width 100%
  height 100%
  border-right 3px solid black

.rightside
  height: 92%
  top 8%
  position fixed
  width 83.3333333%
  overflow-y auto
  overflow-x hidden

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

.student-loop
  height: 100%
  width: 100%

.studentinfo
  height: 100%
  width: 100%
  overflow: hidden
  position: relative

</style>
