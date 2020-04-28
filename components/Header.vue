<template lang="pug">
.main-header(:class="{ showinginfo: showinfo }")
  b-container.container-fluid.header.info-container
    b-row.header
        b-col.blankbg(cols="11" )
          .wrapped(@click="showDiscipline('welcome')")
            img.logohorizontal(src='../assets/img/horizontal-logo.png')
        b-col.blankbg(cols="1" )
            b-col
              p.info(@click="showInfo") Info
    transition(name='fade')
      b-row.information.justify-content-center(v-if='showinfo')
        b-col.redbg(cols="3")
          h1(v-html="styleWord('Identity')")
          h2 Matt Vlach
          h1(v-html="styleWord('Website')")
          h2 Robbie Landsburg
          h1(v-html="styleWord('Concept')")
          h2 Matt Vlach & Robbie Landsburg
          h3
            | This website was conceptualized & created by Matt Vlach and Robbie Landsburg,
            | two alumnis of the 2018 & 2019 CSUS Graphic Design program in response to the
            | current global crisis preventing students from having formal ceremonies to showcase
            | their graduating work. We hope this online showcase helps the graduating students to connect with
            | opportunities for work in this unprecedented new landscape and inspires them to adapt and find
            | new avenues by which to realize their creative potential

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
        video.video-background(v-if='showinfo' src='../assets/img/G20-ColorWarp.mp4' autoplay muted loop)
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
  position fixed
  top 0
  left 0
  z-index 100
  height 8%
  width 100%
  background white
  border-bottom 3px solid black
  transition: height 1s, background 1s

.marquee
    width: 100vw;
    margin: 0 auto;
    text-align left

.info
    font-family: 'GT-Pressura', sans-serif
    text-transform uppercase
    font-size 2vh
    font-weight 700
    text-align center
    padding-top 15%
.header
    z-index: 1000
.pinkbg
  background-color #f4a1c6
  border-left 3px solid black

.logohorizontal
    height: 100%
    width: 18%
    padding 1% .75%

.showinginfo
  height: 100%
  background rgba(255,255,255,1)

.information
  padding-top 5%
  width: 90%
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
  font-size .8vw

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
    min-height: 100%
    min-width: 100%
    z-index: 0
    filter:opacity(70%)
    overflow: hidden
</style>
