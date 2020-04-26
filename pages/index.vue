/* eslint-disable quotes */
<template lang="pug">
.container
  Header
  b-container.container-fluid
    b-row
      b-col.left(cols="4")
        //b-row
          Logo(v-if="!showGraphic" class="logo")
        b-row.leftside
          ul
            li.discipline.graphic(@click="showDiscipline('graphic')" v-bind:class="{ bigger: show == 'graphic'}") Graphic Design
              transition(name="fade")
                p(v-if="show == 'graphic'") TESTING!
            li.discipline.interior(@click="showDiscipline('interior')" v-bind:class="{ bigger: show == 'interior' }") Interior Architecture
              transition(name="fade")
                p(v-if="show == 'interior'") TESTING!
            li.discipline.photo(@click="showDiscipline('photo')" v-bind:class="{ bigger: show == 'photo' }") Photography
              transition(name="fade")
                p(v-if="show == 'photo'") TESTING!

      b-col.right(cols="8")
        b-row.rightside
            b-col.work(cols="12")
                transition(name="fade")
                  video(v-if="show == 'none'" class="video-bottom" src="../assets/video/G20_MaskSpin.mp4" autoplay muted loop)
                  .students.graphic(v-if="show == 'graphic'") test graphic
                  .students.interior(v-if="show == 'interior'") test interior
            b-col.projects(cols="12")
              .explanation.photo(v-if="show == 'graphic'") explanation
            b-col.work(cols="12")
                transition(name="fade")
                  video(v-if="show == 'none'" class="video-bottom" src="../assets/video/G20_MaskSpin.mp4" autoplay muted loop)
                  .students.graphic(v-if="show == 'graphic'") test graphic
                  .students.interior(v-if="show == 'interior'") test interior
            b-col.projects(cols="12")
              .explanation.photo(v-if="show == 'graphic'") explanation
</template>

<script>
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Logo,
    Header
  },
  data () {
    return {
      show: 'none'
    }
  },
  methods: {
    showDiscipline (discipline) {
      this.show = discipline
    }
  }
}
</script>

<style lang="stylus">
*
  padding: 0
  margin: 0
  box-sizing: border-box

.container
  @media(min-width: 1px) {
    max-width: 100%;
  }
  padding 0

.col-8, .col-4
  padding: 0
  margin: 0

.row
  margin 0

.title
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px

.logo
  width 70%
  height 70%
  padding 50px 0

.left
  height: 100vh
  margin 0 auto
  background-color: white

.right
  height: 100vh
  margin 0 auto
  background-color: black

.video-bottom
    width: 100%
    opacity 100%
    transition opacity 1s ease
ul
  width 100%
  height 100%
  border-right 3px solid black

li
  text-align center
  font-size 2vw
  font-weight: 600

.leftside
  height: 90%
  top 10%
  position fixed
  width 33.33333333333%

.rightside
  height: 90%
  top 10%
  position fixed
  width 66.6666666666%
  overflow-y auto

.discipline
  width: 100%
  border-top 3px solid black
  transition: height 1s;
  height 7%

.graphic
  border-top 0px
  background-color #c1abd3

.interior
  background-color #b7dba7

.photo
  background-color #fbb03a

.fade-enter-active
  transition: opacity .3s ease;

.fade-leave-active
  transition: opacity .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  opacity: 0;

.fade-enter, .slide-fade-leave-to
  opacity: 0;

.bigger
  height: 86%;
  transition: height 1s;

.students
  height: 100%
  width: 100%

.work
  height: 86%

.workside
  height: 100%

.projects
  height: 14%
  width: 100%

.explanation
  height: 100%
</style>
