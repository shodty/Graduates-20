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
  b-container.container-fluid.header.info-main.p-0.hide-on-mobile(:class="{ 'showing-info': showinfo }")
    transition(name='fade')
      b-row.information.justify-content-center(v-show='showinfo')
        .col-4.redbg
          h1(v-html="styleWord('Identity')")
          h2
            a(href='https://www.instagram.com/matt_vlach.otf/' target="_blank") Matt Vlach
          h1(v-html="styleWord('Website')")
          h2
            a(href='https://www.instagram.com/shodty/' target="_blank") Robbie Landsburg
          h1(v-html="styleWord('Concept')") info
          h2 Matt Vlach & Robbie Landsburg
          h3.concept.w-100
            | This website was conceptualized & created by Robbie Landsburg and Matt Vlach,
            | two alumnis of the 2018 & 2019 CSUS Graphic Design program. The idea emerged in response to the
            | current global health crisis preventing graduating students from having formal real-world ceremonies in which to showcase
            | the culmination of their work. We hope this online showcase helps the graduating students to connect with
            | opportunities for their future careers in this unprecedented new landscape and inspires them to adapt and find
            | new avenues by which to realize their creative potential.

        .col-4.bluebg
          h1(v-html="styleWord('Special Thanks')")
          h3.concept.w-100
              | The following designers/studios donated & discounted their typefaces to help us build and style this project.
              | We could not have made this what it is without their generosity!
          br
          h2.animal Animal Soul
          h2
            a(href='https://leahmaldonado.com/' target="_blank") Leah Maldonado
          br
          h2.ciao G2 Ciao
          h2
            a(href='http://www.audretsch.it/' target="_blank") Massimiliano Audretsch
          br
          h2.pressura GT Pressura
          h2
            a(href='https://www.grillitype.com/' target="_blank") Grilli Type

        .col-2.greenbg
          h1(v-html="styleWord('CSUS Design')")
          h2
            a(href='http://csus.edu/college/arts-letters/design/' target='_blank') Department of Design
          h2 design@csus.edu
        video.video-background( src='../assets/video/G20-ColorWarp.mp4' autoplay muted loop :class="showinfo? 'showing-video' : 'hidingvideo' ")
        img.up-arrow.cursor-pointer(@click="showInfo" src='../assets/img/up.png')
  b-row.mobile-header.align-items-center.hide-on-ipad(  :class="{ borderbottom: !interior && !photo && !graphic}" )
      .col-4.align-self-center.p-0.m-0.h-100.d-inline-block
        .header-graphic.d-flex.justify-content-center(@click="showMenu('graphic')"  :class="{ borderbottom: interior || photo }")
          .align-self-center Graphic
      .col-4.align-self-center.p-0.m-0.h-100.d-inline-block
        .header-interior.d-flex.justify-content-center(@click="showMenu('interior')" :class="{ borderbottom: graphic || photo }")
          .align-self-center Interior
      .col-4.p-0.m-0.h-100.d-inline-block
        .header-photo.d-flex.justify-content-center(@click="showMenu('photo')"  :class="{ borderbottom: graphic || interior }")
          .align-self-center Photo
  b-container.container-fluid.info-mobile.graphic-mobile.p-0.hide-on-ipad(:class="{ 'showing-graphic' : graphic }")
      b-row.information.justify-content-center(v-show="graphic" )
        .col-12.graphic-mobile
          img.discipline-logohorizontal(src='../assets/img/graphic-mobile.png')
          p.mobile-desc The goal of the Graphic Design program is to provide the community with a comprehensive and adaptable problem solver. The program seeks to impart students with a strong aesthetic ability coupled with a clear understanding of the increasingly complex strategic, systemic and conceptual challenges facing them in practice,  as well as the ability to address these challenges.
          button.student-button.px-2.my-4(@click="showDiscipline('graphic')" style="color: #c1abd3") VIEW WORK
  b-container.container-fluid.info-mobile.interior-mobile.p-0.hide-on-ipad(:class="{ 'showing-interior': interior }")
      b-row.information.justify-content-center(v-show="interior")
        .col-12.interior-mobile
          img.discipline-logohorizontal(src='../assets/img/interior-mobile.png')
          p.mobile-desc The goal of the Interior Architecture program is to prepare students for professional practice and/or preparation for admission to graduate level study. The degree is intended for students who want to pursue careers in interior design, interior architecture and architecture.
          button.student-button.px-2.my-4(@click="showDiscipline('interior')" style="color: #b7dba7") VIEW WORK
  b-container.container-fluid.info-mobile.photo-mobile.p-0.hide-on-ipad(:class="{ 'showing-photo': photo }")
      b-row.information.justify-content-center(v-show="photo")
        .col-12.photo-mobile
          img.discipline-logohorizontal(src='../assets/img/photo-mobile.png')
          p.mobile-desc The goal of the Photography program is to educate students in contemporary photographic methodologies and in the current situation of photography, its use and its communicative effects. The curriculum is designed to give students a broad exposure to not only the technologies, processes, and models of contemporary practice, but also to introduce them to the aesthetic, cultural, and ethical dialogues surround the use and role of photography in our society.
          button.student-button.px-2.my-4(@click="showDiscipline('photo')" style="color: #fbb03a") VIEW WORK
  b-container.container-fluid.info-mobile.p-0.hide-on-ipad(:class="{ 'showing-mobile-info': showmobileinfo }")
      b-row.information.justify-content-center(v-show="showmobileinfo")
        .col-12
          .col-12.redbg
            .mobile-head(v-html="styleWord('Identity')")
            .mobile-subhead
              a(href='https://www.instagram.com/matt_vlach.otf/' target="_blank") Matt Vlach
            .mobile-head(v-html="styleWord('Website')")
            .mobile-subhead
              a(href='https://www.instagram.com/shodty/' target="_blank") Robbie Landsburg
            .mobile-head(v-html="styleWord('Concept')") info
            .mobile-subhead Matt Vlach & Robbie Landsburg
            .mobile-body.w-100
              | This website was conceptualized & created by Robbie Landsburg and Matt Vlach,
              | two alumnis of the 2018 & 2019 CSUS Graphic Design program. The idea emerged in response to the
              | current global health crisis preventing graduating students from having formal real-world ceremonies in which to showcase
              | the culmination of their work. We hope this online showcase helps the graduating students to connect with
              | opportunities for their future careers in this unprecedented new landscape and inspires them to adapt and find
              | new avenues by which to realize their creative potential.
            br
            .mobile-head(v-html="styleWord('Special Thanks')")
            .mobile-body.w-100
              | The following designers/studios donated & discounted their typefaces to help us build and style this project.
              | We could not have made this what it is without their generosity!
            br
            .mobile-subhead-animal Animal Soul
            .mobile-subhead
              a(href='https://leahmaldonado.com/' target="_blank") Leah Maldonado
            br
            .mobile-subhead-ciao G2 Ciao
            .mobile-subhead
              a(href='http://www.audretsch.it/' target="_blank") Massimiliano Audretsch
            br
            .mobile-subhead-pressura GT Pressura
            .mobile-subhead
              a(href='https://www.grillitype.com/' target="_blank") Grilli Type
            br
            .mobile-head(v-html="styleWord('CSUS Design')")
            .mobile-subhead
              a(href='https://csus.edu/college/arts-letters/design/') Department of Design
            .mobile-subhead design@csus.edu
            br
            br
            br
  .home-button.hide-on-ipad
    img.home-icon(src='../assets/img/home-button.png' @click="showDiscipline('welcome')")
  .info-button.hide-on-ipad
    img.home-icon(src='../assets/img/info-button.png' @click="showMobileInfo")
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
      showinfo: false,
      showmobileinfo: false,
      graphic: false,
      interior: false,
      photo: false
    }
  },
  methods: {
    showDiscipline (discipline) {
      this.$store.dispatch('general/showDiscipline', discipline)
      this.$bus.$emit('homeReset')
      this.$bus.$emit('shuffleStudents')
      this.graphic = false
      this.interior = false
      this.photo = false
      this.showmobileinfo = false
      console.log(this.showmobileinfo)
      if (this.showinfo === true) { this.showInfo() }
      if (discipline === 'welcome') { this.$store.dispatch('students/hideAllStudentWork') }
    },
    showInfo () {
      this.showinfo = !this.showinfo
      this.graphic = false
      this.interior = false
      this.photo = false
    },
    showMobileInfo () {
      this.showmobileinfo = !this.showmobileinfo
      this.graphic = false
      this.interior = false
      this.photo = false
    },
    showMenu (discipline) {
      if (discipline === 'graphic') {
        this.graphic = !this.graphic
        this.interior = false
        this.photo = false
        this.showmobileinfo = false
      }
      if (discipline === 'interior') {
        this.interior = !this.interior
        this.graphic = false
        this.photo = false
        this.showmobileinfo = false
      }
      if (discipline === 'photo') {
        this.photo = !this.photo
        this.interior = false
        this.graphic = false
        this.showmobileinfo = false
      }
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

body, p, h1, h2, h3
 color #181819

.header-graphic, .header-interior, .header-photo
  min-height 100%
  font-family: 'GT-Pressura', sans-serif
  text-transform uppercase
  font-size 2vh

.header-graphic
  border-right 3px solid #181819
  background-color #c1abd3

.header-interior
  border-right 3px solid #181819
  background-color #b7dba7

.header-photo
  background-color #fbb03a

.main-header
  z-index 1000
  background white

.info-main
    border-bottom 3px solid #181819
    height 100%
    z-index: 1000
    transition: height 1s ease, background 1s ease

.info-mobile
    height 0%
    z-index: 1000
    transition: opacity 1s ease
    overflow auto
.borderbottom
  border-bottom 3px solid #181819

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
    height: 50%
    padding-top .5%

.showing-info
  height: 100vh
  background rgba(255,255,255,1)

.showing-graphic, .showing-interior, .showing-photo, .showing-mobile-info
  height 100vh
  border-bottom 3px solid #181819

.showing-graphic
  background-color #c1abd3

.showing-interior
  background-color #b7dba7

.showing-photo
  background-color #fbb03a

.showing-mobile-info
  background white

.noborder
  border 0px
.information
  padding-top 9%
  width: 100%
  margin 0

.mobileinfo
  padding-top 9%
  width: 100%
  margin 0

h1
  font-family: 'GT-Pressura', sans-serif
  font-size 2vw
  text-transform uppercase

.mobile-head
  font-family: 'GT-Pressura', sans-serif
  font-size 3.6vh
  text-transform uppercase

h2
  font-family: 'Ciao-Regular', serif
  font-size 1.5vw

.mobile-subhead
  font-family: 'Ciao-Regular', serif
  font-weight 800
  font-size 2.5vh

.mobile-subhead-animal, .animal
  font-family: 'Animal-Soul', sans-serif
  font-size 4vh

.mobile-subhead-ciao, .ciao
  font-family: 'Ciao-Regular', serif
  font-weight 800
  font-size 4vh

.mobile-subhead-pressura, .pressura
  font-family: 'GT-Pressura', sans-serif
  font-weight 800
  font-size 4vh
h3
  padding-top 2%
  font-family: 'GT-Pressura', serif
  font-size 18px

.mobile-body
  padding-top 4%
  font-family: 'GT-Pressura', serif
  font-size 2vh

.mobile-smallhead
  font-family: 'GT-Pressura', serif
  font-weight 800
  font-size 2vh

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

.showing-video
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

.mobile-desc
  font-family 'Ciao-Regular', sans-serif
  font-weight 800
  font-size 2.2vh

.student-button
  background #181819
  border none
  font-family 'GT-Pressura', sans-serif
  font-size 3vh
  position fixed
  bottom 3%
  left 10%
.graphic-mobile, .interior-mobile, .photo-mobile
  padding 0 10%

.info-mobile
  padding 0 6%
.home-button
  position fixed
  top 8%
  right 4%

.info-button
  position fixed
  top 13.5%
  right 4%

.home-icon
  height 30px
  z-index 2000
a
  color #f26b64
  text-decoration underline
</style>
