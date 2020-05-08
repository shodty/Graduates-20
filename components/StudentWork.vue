<template lang="pug">
.student-work-container
    b-col.work(cols="12")
        b-col.students(v-if="show == 'graphic'")
              .studentinfo(key='studentinfo')
                  b-row.h-100
                      b-col.left-section.col-4
                          img.selfie( :src='getSrc(student, 0)')
                      b-col.col-8.work-section
                        transition-group(name="slide" mode='out-in')
                          div.info-section(v-if='!student.showWork' key='info')
                            span.main-name(v-html="styleName(student.name)")
                            br
                            ul.tagsone
                                li.tags(v-for='tag in student.tags') {{tag}}
                            p.main-text {{student.text}}
                            button.view-work(@click="showStudentWork(index)") VIEW WORK
                          hooper.student-work.h-100(v-if='student.showWork' :settings='hooperSettings' key='hooper' ref='hooper')
                              slide.slide-image(v-for="n in student.images" :key="student.code")
                                  video.vertical-center(v-if="student.ext[n-1] == 'mp4'" :class=" student.fill? 'project-image' : 'project-image' " :src='getSrc(student, n)' :alt='student.image1' autoplay muted loop)
                                  img.vertical-center(v-else :class="student.fill? 'project-image' : 'project-image'" :src='getSrc(student, n)' :alt='student.image1')
                              hooper-navigation.nav(slot='hooper-addons')
                          //button.fillbutton(v-if='student.showWork' @click='fill(index)' key='button')
                              img(src='../assets/img/expand.png' height='20px')
    //b-col.projects(cols="12")
        .explanation(v-if="show == 'graphic'")
            .student-name
                span {{student.name}}
                button.aboutbutton(@click="showStudentWork(index)" :class="{ buttonpressed: !student.showWork}") ABOUT
                button.workbutton(@click="showStudentWork(index)" :class="{ buttonpressed: student.showWork}") WORK
                transition(name="fade" key='index')
                    ul.tagstoo(v-if='student.showWork' )
                        li.tags(v-for='tag in student.tags') {{tag}}
</template>

<script>

import { mapState } from 'vuex'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    HooperNavigation,
    Slide
  },
  props: {
    student: { type: Object, default () { return { message: 'empty' } } },
    index: { type: Number, default: 0 },
    menu: { type: Boolean, default: true }
  },
  data () {
    return {
      showslider: false,
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        wheelControl: false
      }
    }
  },
  computed: {
    ...mapState({
      show: state => state.general.show,
      studentObject: state => state.students.studentObject
    })
  },
  mounted () {
    this.$bus.$on('resizePane', () => {
      this.testMethod()
      window.dispatchEvent(new Event('resize'))
    })
  },
  methods: {
    getSrc (student, imagenumber) {
      if (imagenumber === 0) {
        return require('../assets/students/' + student.code + '/' + student.code + imagenumber.toString() + '.jpg')
      } else {
        return require('../assets/students/' + student.code + '/' + student.code + imagenumber.toString() + '.' + student.ext[imagenumber - 1])
      }
    },
    testMethod () {
      console.log('made it')
    },
    styleName (name) {
      const words = name.split(' ')
      // const chars = words.split('')
      let repText = ''
      let newWord = ''
      for (let h = 0; h < words.length; h++) {
        const wordchars = words[h].split('')
        for (let i = 0; i < wordchars.length; i++) {
          if (i === (wordchars.length - 2)) {
            repText = `<span style="font-family: Animal-Soul">${wordchars[i]}</span>`
          } else {
            repText = wordchars[i]
          }
          newWord = newWord + repText
        }
        newWord = newWord + ' '
      }
      return newWord
    },
    showStudentWork (index) {
      this.$store.dispatch('students/showStudentWork', index)
    },
    fill (index) {
      this.$store.dispatch('students/fill', index)
    },
    updateHoop () {
      this.$refs.hooper.updateWidth()
    }
  }
}
</script>

<style lang="stylus">

.student-work-container
  height: 94vh
  @media(orientation:portrait) {
    height: 47vh
  }
  // phone screens in portrait
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    height: 23.5vh
  }
  // phone screens in landscape
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    height: 94vh
  }

  // ipad portrait
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
      height: 31.3333vh
  }

.students
  height: 100%
  width: 100%
  background white
  padding 1%
  position relative

.studentinfo
  height: 100%
  width: 100%
  overflow: hidden

.work
  height: 100%
  // height: 86%
  padding 0
  border-bottom 3px solid #181819

.projects
  height: 14%
  width: 100%
  padding 0

.explanation
  height: 100%
  background white
  color #181819
  padding 0 2%
  font-family: 'Ciao-Regular', sans-serif
  border-bottom 3px solid #181819

.student-name
  font-size: 1.4vw
  font-family: 'GT-Pressura', sans-serif
  text-transform: uppercase

.student-work
  outline none

.project-image
  width: 100%

.project-image-fill
  width: 108%
  margin 0 -53%

.work-section
  padding-left 0

.info-section
  height 100%
  padding-left 2%
.icon
  fill: #181819

.hooper-next:focus, .hooper-prev:focus
  outline: none

.hooper-prev, .hooper-next
  background rgba(255,255,255,1)
  margin 0 1%
  padding .05%
  top: 40%
.tagsone
  display inline

.tagstoo
  display inline
  padding-left 2%

.tags
  font-size 1vw
  display inline-block
  margin-right 2%
  padding 0 8px
  background #c1abd3
  border-radius 15px
  color #181819
  text-transform: uppercase
  font-family: 'GT-Pressura', sans-serif

.selfie
  width: 100%
  position relative
  padding-bottom 1%
  object-fill: cover
  z-index: 100
.main-name, .view-work
  color #181819
  font-size 3vw
  text-transform: uppercase
  font-family: 'GT-Pressura', sans-serif

.view-work
  background #181819
  color white
  margin-top 2%
  padding 0 2%
  outline none

.main-text
  color #181819
  font-family: 'Ciao-Regular', sans-serif
  padding-right: 15%
  font-size 1.5vw
  padding-top: 2%

.buttonpressed
  background #181819
  color white
  border 3px solid #c1abd3

.aboutbutton, .workbutton
  margin-left 1%
  padding 0 1%

.fillbutton
  position absolute
  right 1%
  bottom 0
  background #181819
  padding .3%

</style>
