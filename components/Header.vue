<template lang="pug">
.main-header(:class="{ showinginfo: showinfo }")
  b-container.container-fluid.header.info-container
    b-row.header
        b-col.blankbg(cols="11" )
          .wrapped(@click="showDiscipline('welcome')")
            img.logohorizontal.cursor-pointer(src='../assets/img/horizontal-logo.png')
        b-col.blankbg.p-0(cols="1" )
            b-col
              p.info.cursor-pointer(@click="showInfo") Info
    transition(name='fade')
      b-row.information.justify-content-center(v-show='showinfo')
        b-col.redbg(cols="3")
          h1(v-html="styleWord('Identity')")
          h2 Matt Vlach
          h1(v-html="styleWord('Website')")
          h2 Robbie Landsburg
          h1(v-html="styleWord('Concept')")
          h2 Matt Vlach & Robbie Landsburg
          h3.concept
            | This website was conceptualized & created by Robbie Landsburg and Matt Vlach,
            | two alumnis of the 2018 & 2019 CSUS Graphic Design program. The idea emerged in response to the
            | current global health crisis preventing graduating students from having formal real-world ceremonies in which to showcase
            | the culmination of their work. We hope this online showcase helps the graduating students to connect with
            | opportunities for their future careers in this unprecedented new landscape and inspires them to adapt and find
            | new avenues by which to realize their creative potential.

        b-col.bluebg(cols="3")
          h1(v-html="styleWord('Special Thanks')")
          h2 Leah for Animal Soul
          h2 Massimo for Ciao
          h2 Lauren Kelly
          h2 Eric Howard
        b-col.greenbg(cols="3")
          h1(v-html="styleWord('CSUS Design')")
          h2 Department of Design
          h2 design@csus.edu
          h2 www.design.com
        video.video-background( src='../assets/video/G20-ColorWarp.mp4' autoplay muted loop :class="showinfo? 'showingvideo' : 'hidingvideo' ")
        img.up-arrow.cursor-pointer(@click="showInfo" src='../assets/img/up.png')
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

.main-header
  z-index 1000
  background white
  border-bottom 3px solid #181819
  transition: height 1s ease, background 1s ease

.info
    font-family: 'GT-Pressura', sans-serif
    text-transform uppercase
    font-size 3vh
    font-weight 700
    text-align center
    padding-top 5%

.header
    z-index: 1000

.pinkbg
  background-color #f4a1c6
  border-left 3px solid #181819

.logohorizontal
    height: 5vh
    padding-top .5%
.showinginfo
  height: 100vh
  background rgba(255,255,255,1)

.information
  padding-top 3%
  width: 94%
  margin 0 auto

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
  margin 0 .5%
  z-index: 1000

.blankbg
  z-index 1000

.info-container
  z-index: 1000

.video-background
  position fixed
  top 0
  min-width 100%
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
</style>
