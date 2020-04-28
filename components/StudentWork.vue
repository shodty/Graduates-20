<template lang="pug">
.student-work-container
    b-col.work(cols="12")
        .students(v-if="show == 'graphic'")
            transition(name="slide")
            .studentinfo(v-if='!student.showWork')
                b-row
                    b-col(cols='4')
                        img.selfie( :src='getSrc(student, 0)')
                    b-col(close='8')
                        span.main-name(v-html="styleName(student.name)")
                        br
                        ul.tagsone
                            li.tags(v-for='tag in student.tags') {{tag}}
                        p.main-text {{student.text}}
                        button.view-work(@click="showStudentWork(index)") VIEW WORK
            hooper(v-if='student.showWork' :settings='hooperSettings' class='student-work' style="height: 100%" )
                slide(v-for="n in student.images" :key="student.code")
                    video.vertical-center(v-if="student.ext[n-1] == 'mp4'" :class=" student.fill? 'project-image-fill' : 'project-image' " :src='getSrc(student, n)' :alt='student.image1' autoplay muted loop)
                    img.vertical-center(v-else :class="student.fill? 'project-image-fill' : 'project-image'" :src='getSrc(student, n)' :alt='student.image1')
                hooper-navigation(slot='hooper-addons')
            button.fillbutton(v-if='student.showWork' @click='fill(index)')
                img(src='../assets/img/expand.png' height='20px')
    b-col.projects(cols="12")
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
    index: { type: Number, default: 0 }

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
  methods: {
    getSrc (student, imagenumber) {
      if (imagenumber === 0) {
        return require('../assets/students/' + student.code + '/' + student.code + imagenumber.toString() + '.jpg')
      } else {
        return require('../assets/students/' + student.code + '/' + student.code + imagenumber.toString() + '.' + student.ext[imagenumber - 1])
      }
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
    }

  }
}
</script>

<style lang="stylus">
.student-work-container
    height: 100%
    width: 100%

.students
  height: 100%
  width: 100%
  background white

.studentinfo
  height: 100%
  width: 100%
  overflow: hidden
  position: relative

.work
  height: 86%

.projects
  height: 14%
  width: 100%

.explanation
  height: 100%
  background white
  color black
  padding 0 2%
  font-family: 'Ciao-Regular', sans-serif
  border-bottom 3px solid black

.student-name
  font-size: 1.4vw
  font-family: 'GT-Pressura', sans-serif
  text-transform: uppercase

.student-work
  width: 100%
  padding: 1%
  outline: none
  position absolute
  right 0
  left 0
  top 0
  bottom 0

.project-image
  width: 80%
  margin 0 -41%

.project-image-fill
  width: 108%
  margin 0 -53%

.vertical-center
  position: absolute
  top: 50%
  transform: translateY(-50%)

li.hooper-slide
  text-align center

.icon
  fill: black

.hooper-next:focus, .hooper-prev:focus
  outline: none

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
  color black
  text-transform: uppercase
  font-family: 'GT-Pressura', sans-serif

.selfie
  width: 84%
  padding 5%

.main-name, .view-work
  color black
  font-size 3vw
  text-transform: uppercase
  font-family: 'GT-Pressura', sans-serif

.view-work
  background black
  color white
  margin-top 2%
  padding 0 2%
  outline none

.main-text
  color black
  font-family: 'Ciao-Regular', sans-serif
  padding-right: 15%
  font-size 1.5vw
  padding-top: 2%

.buttonpressed
  background black
  color white
  border 3px solid #c1abd3

.aboutbutton, .workbutton
  margin-left 1%
  padding 0 1%

.fillbutton
  position absolute
  right 1%
  bottom 0
  background black
  padding .3%

</style>
