<template lang="pug">
b-col.work(cols="12")
    b-col.students
            .studentinfo(key='studentinfo')
                b-row.h-100
                    b-col.left-section.col-4
                        img.selfie(v-if='!student.showWork' :src='getSrc(student, 0)' )
                        div(v-if='student.showWork')
                            span.main-name(v-html="styleName(student.name)")
                            h1.proj-title {{student.projecttext[currentImg].title}}
                            p.proj-desc {{student.projecttext[currentImg].description}}
                            button.aboutbutton(@click="showStudentWork(index)" :class="{ buttonpressed: !student.showWork}") ABOUT
                    b-col.col-8.work-section
                        transition-group(name="slide" mode='out-in')
                            div.info-section(v-if='!student.showWork' key='info')
                                span.main-name(v-html="styleName(student.name)")
                                br
                                ul.tagsone
                                    li.tags(v-for='tag in student.tags') {{tag}}
                                p.main-text {{student.text}}
                                button.view-work(@click="showStudentWork(index)") VIEW WORK
                            hooper.student-work.h-100(v-if='student.showWork' :settings='hooperSettings' key='hooper' ref='hooper' v-on:slide='doSomething')
                                slide.slide-image(v-for="n in student.images" :key="student.code")
                                    video.vertical-center(v-if="student.ext[n-1] == 'mp4'" :class=" student.fill? 'project-image' : 'project-image' " :src='getSrc(student, n)' :alt='student.image1' autoplay muted loop controls)
                                    img.vertical-center(v-else :class="student.fill? 'project-image' : 'project-image'" :src='getSrc(student, n)' :alt='student.image1')
                                hooper-navigation.nav(slot='hooper-addons' )
                            //button.fillbutton(v-if='student.showWork' @click='fill(index)' key='button')
                                img(src='../assets/img/expand.png' height='20px')
                //button.workbutton(@click="showStudentWork(index)" :class="{ buttonpressed: student.showWork}") WORK

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
      currentImg: 1,
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
      show: state => state.general.show
    })
  },
  mounted () {
    this.$bus.$on('resetImgCount', () => {
      this.currentImg = 1
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
      this.currentImg = 1
      this.$store.dispatch('students/showStudentWork', index)
    },
    fill (index) {
      this.$store.dispatch('students/fill', index)
    },
    updateHoop () {
      this.$refs.hooper.updateWidth()
    },
    doSomething (slide) {
      if (slide.currentSlide > slide.slideFrom) {
        this.currentImg++
        if (this.currentImg === this.student.images) { this.currentImg = 0 }
      } else {
        this.currentImg--
        if (this.currentImg < 0) { this.currentImg = this.student.images + this.currentImg }
      }
    }
  }
}
</script>

<style lang="stylus">

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
  top: 30%

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
  font-weight 800
  padding-right: 15%
  font-size 1.2vw
  padding-top: 2%
  overflow-y auto
.buttonpressed
  background #181819
  color white

.aboutbutton, .workbutton
  margin-top 5%
  margin-right 1%
  padding 0 1%
  font-family: 'GT-Pressura', sans-serif
  font-size 2vw
.fillbutton
  position absolute
  right 1%
  bottom 0
  background #181819
  padding .3%

.proj-title
  font-family: 'GT-Pressura', sans-serif
  font-size 1vw

.proj-desc
  color #181819
  font-family: 'Ciao-Regular', sans-serif
  font-weight 800
  font-size 16px
  padding-top: 2%
</style>
