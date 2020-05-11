<template lang="pug">
.main-header
  b-container.container-fluid.header.static-container.d-none.d-lg-block.hide-on-mobile
    b-row.header.align-items-center
        .col-10.blankbg.align-self-center.h-100.d-inline-block
          .wrapped.h-100.d-flex(@click="showDiscipline('welcome')")
            img.logohorizontal.cursor-pointer.align-self-center.p-0(src='../assets/img/horizontal-logo.png')
        .col-2.blankbg.h-100.d-inline-block
            .d-flex.h-100.justify-content-end
              .align-self-center
                p.info.cursor-pointer(@click="showInfo") Info
  b-container.container-fluid.header.info-container.info-main.p-0(:class="{ showinginfo: showinfo }")
    transition(name='fade')
      b-row.information.justify-content-center(v-show='showinfo')
        .col-3.redbg
          h1(v-html="styleWord('Identity')")
          h2 Matt Vlach
          h1(v-html="styleWord('Website')")
          h2 Robbie Landsburg
          h1(v-html="styleWord('Concept')") info
          h2 Matt Vlach & Robbie Landsburg
          h3.concept.w-100
            | This website was conceptualized & created by Robbie Landsburg and Matt Vlach,
            | two alumnis of the 2018 & 2019 CSUS Graphic Design program. The idea emerged in response to the
            | current global health crisis preventing graduating students from having formal real-world ceremonies in which to showcase
            | the culmination of their work. We hope this online showcase helps the graduating students to connect with
            | opportunities for their future careers in this unprecedented new landscape and inspires them to adapt and find
            | new avenues by which to realize their creative potential.

        .col-3.bluebg
          h1(v-html="styleWord('Special Thanks')")
          h2 Animal Soul
          h2 Leah Moldanado
          br
          h2 G2 Ciao
          h2 Massimiliano Audretsch
          br
          h2 GT Pressura (Educational)
          h2 Grilli Type
          br
          h2 Lauren Kelly
          h2 Eric Howard
        .col-3.greenbg
          h1(v-html="styleWord('CSUS Design')")
          h2 Department of Design
          h2 design@csus.edu
          h2 csus.edu/college/arts-letters/design/
        video.video-background( src='../assets/video/G20-ColorWarp.mp4' autoplay muted loop :class="showinfo? 'showingvideo' : 'hidingvideo' ")
        img.up-arrow.cursor-pointer(@click="showInfo" src='../assets/img/up.png')
    b-row.mobile-header.align-items-center.hide-on-ipad
      .col-4.align-self-center.p-0.m-0.h-100.d-inline-block
        .header-graphic.d-flex.justify-content-center(@click="showDiscipline('graphic')")
          .align-self-center Graphic
      .col-4.align-self-center.p-0.m-0.h-100.d-inline-block
        .header-interior.d-flex.justify-content-center(@click="showDiscipline('interior')")
          .align-self-center Interior
      .col-4.p-0.m-0.h-100.d-inline-block
        .header-photo.d-flex.justify-content-center(@click="showDiscipline('photo')")
          .align-self-center Photo
</template>

<script>
import LogoHorizontal from '~/components/LogoHorizontal.vue'

export default {
  name: 'Header',
  components: {
    LogoHorizontal
  },
  data () {
    return {
      showinfo: false
    }
  },
  methods: {
    showDiscipline (discipline) {
      this.$store.dispatch('general/showDiscipline', discipline)
      this.$bus.$emit('homeReset')
      if (this.showinfo === true) { this.showInfo() }
      if (discipline === 'welcome') { this.$store.dispatch('students/hideAllStudentWork') }
    },
    showInfo () {
      this.showinfo = !this.showinfo
    },
    styleWord (word) {
      const words = word.split(' ')
      // const chars = words.split('')
      let repText = ''
      let newWord = ''
      for (let h = 0; h < words.length; h++) {
        const wordchars = words[h].split('')
        for (let i = 0; i < wordchars.length; i++) {
          if (i === 1 || i === (wordchars.length - 3)) {
            repText = `<span style="font-family: Animal-Soul; text-transform: lowercase">${wordchars[i]}</span>`
          } else {
            repText = wordchars[i]
          }
          newWord = newWord + repText
        }
        newWord = newWord + ' '
      }
      return newWord
    }
  }
}

</script>

<style scoped lang="stylus">
.mobile-header

  height 100%

.header-graphic, .header-interior, .header-photo
  min-height 100%
  font-family: 'GT-Pressura', sans-serif
  text-transform uppercase
  font-size 2vh
.header-graphic
  border-right 3px solid black
  background-color #c1abd3

.header-interior
  border-right 3px solid black
  background-color #b7dba7

.header-photo
  background-color #fbb03a

.main-header
  z-index 1000
  background white

.info-main
    border-bottom 3px solid #181819
    height 100%
.info
    font-family: 'GT-Pressura', sans-serif
    text-transform uppercase
    font-size 3vh
    font-weight 700
    text-align right

.header
    z-index: 1000
    height 100%

.pinkbg
  background-color #f4a1c6
  border-left 3px solid #181819

.logohorizontal
    height: 70%
    padding-top .5%

.showinginfo
  height: 100vh
  background rgba(255,255,255,1)

.information
  padding-top 9%
  width: 100%
  margin 0

h1
  font-family: 'GT-Pressura', sans-serif
  font-size 2vw
  text-transform uppercase
h2
  font-family: 'Ciao-Regular', serif
  font-size 1.5vw

h3
  padding-top 2%
  font-family: 'GT-Pressura', serif
  font-size 1vw

.redbg, .bluebg, .greenbg
  z-index: 1000

.blankbg
  z-index 1000

.static-container
  position fixed
  left 0
  top 0
  height 6vh
  z-index: 1000

.info-container
  z-index: 1000
  transition: height 1s ease, background 1s ease
  background white

.video-background
  position fixed
  top 0
  min-width 100vw
  min-height 100vh
  z-index: 0
  filter:opacity(70%)
  overflow: hidden
  transition: height 1s ease

.showingvideo
  min-width 100vw
  transition: height 1s ease

.concept
  padding-right 4%

.up-arrow
  position fixed
  bottom 2%
  left 50%
  height 1.5%

.d-md-block {
  display: flex !important
}
</style>
