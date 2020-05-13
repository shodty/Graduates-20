<template lang="pug">
b-col.work(cols="12")
    b-col.students
            .studentinfo(key='studentinfo')
              b-container.h-100.mobile-cont
                b-row.h-100(align-v='start')
                    b-col.left-section.h-100(v-if='!student.showWork' cols='5' md='4')
                        // transition-group(name="fade" mode='out-in')
                        img.selfie( :src='getSrc(student, 0)' key='img')
                        b-row.info-section.col-12.hide-on-desktop( key='info')
                                .links-container.col-12.p-0
                                    ul.social-links
                                        li(v-if="hasWeb")
                                            a(:href='"https://" + student.links.website' target="_blank")
                                                img.social-img(src='../assets/img/website.png' )
                                        li(v-if='hasIg')
                                            a(:href='"https://" + student.links.instagram' target="_blank")
                                                img.social-img(src='../assets/img/instagram.png')
                                        li(v-if='hasLi')
                                            a(:href=' "https://" + student.links.linkedin' target="_blank")
                                                img.social-img(src='../assets/img/linkedin.png')
                                        li(v-if='hasBe')
                                            a(:href=' "https://" + student.links.behance' target="_blank")
                                                img.social-img(src='../assets/img/behance.png')
                                        li(v-if='hasTw')
                                            a(:href=' "https://" + student.links.twitter' target="_blank")
                                                img.social-img(src='../assets/img/twitter.png')
                                ul.tagsone.col-12
                                    li.tags(v-for='tag in student.tags') {{tag}} +
                    b-col.left-section.h-100(v-if='student.showWork' cols='12' md='4')
                        //div.col-sm-12(v-if='student.showWork' key='info')
                        span.main-name(v-html="styleName(student.name)")
                        h1.proj-title {{student.projecttext[currentImg].title}}
                        p.proj-desc {{student.projecttext[currentImg].description}}
                        button.aboutbutton(v-if='student.showWork' @click="showStudentWork(index)" :class="{ buttonpressed: !student.showWork}") ⟵
                    b-col.work-section(v-if='!student.showWork' cols='7' md='8')
                            // transition-group(name="fade" mode='out-in')
                            b-row.info-section.col-12( key='info')
                                span.main-name.col-12.p-0(v-html="styleName(student.name)")
                                .links-container.col-12.p-0.hide-on-mobile
                                    ul.social-links
                                        li(v-if="hasWeb")
                                            a(:href='"https://" + student.links.website' target="_blank")
                                                img.social-img(src='../assets/img/website.png' )
                                        li(v-if='hasIg')
                                            a(:href='"https://" + student.links.instagram' target="_blank")
                                                img.social-img(src='../assets/img/instagram.png')
                                        li(v-if='hasLi')
                                            a(:href=' "https://" + student.links.linkedin' target="_blank")
                                                img.social-img(src='../assets/img/linkedin.png')
                                        li(v-if='hasBe')
                                            a(:href=' "https://" + student.links.behance' target="_blank")
                                                img.social-img(src='../assets/img/behance.png')
                                        li(v-if='hasTw')
                                            a(:href=' "https://" + student.links.twitter' target="_blank")
                                                img.social-img(src='../assets/img/twitter.png')
                                ul.tagsone.col-12.hide-on-mobile
                                    li.tags(v-for='tag in student.tags') {{tag}} /
                                .main-text.col-12.p-0 {{student.text}}
                                button.view-work.col-sm-12.p-0(@click="showStudentWork(index)") WORK⟶
                    b-col.work-section(v-if='student.showWork'  cols='12' md='8')
                            hooper.student-work.h-100(:settings='hooperSettings' key='hooper' ref='hooper' v-on:slide='changeImageDesc')
                                slide.h-100( v-for="n in student.images" :key="student.code")
                                    video.video-slide(v-if="student.ext[n-1] == 'mp4'" :src='getSrc(student, n)' :alt='student.image1' muted loop controls)
                                    expandable-image(v-else :src='getSrc(student, n)' :alt='student.image1')
                                hooper-navigation.nav(slot='hooper-addons' )
                            p.slide-number( v-if='student.showWork') {{currentImg + 1}} / {{student.images}}
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
        infiniteScroll: true,
        wheelControl: true,
        mouseDrag: false,
        trimWhiteSpace: true
      }
    }
  },
  computed: {
    ...mapState({
      show: state => state.general.show
    }),
    hasWeb () {
      return this.containsKey(this.student.links, 'website')
    },
    hasIg () {
      return this.containsKey(this.student.links, 'instagram')
    },
    hasLi () {
      return this.containsKey(this.student.links, 'linkedin')
    },
    hasBe () {
      return this.containsKey(this.student.links, 'behance')
    },
    hasTw () {
      return this.containsKey(this.student.links, 'twitter')
    }
  },
  mounted () {
    this.$bus.$on('resetImgCount', () => {
      this.currentImg = 1
    })
  },
  methods: {
    containsKey (obj, key) {
      if (typeof (obj) === 'object') { return Object.keys(obj).includes(key) } else { return false }
    },
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
      setTimeout(function () { window.dispatchEvent(new Event('resize')) }, 10)
    },
    fill (index) {
      this.$store.dispatch('students/fill', index)
    },
    updateHoop () {
      this.$refs.hooper.update()
    },
    changeImageDesc (slide) {
      if (slide.currentSlide > slide.slideFrom) {
        this.currentImg++
        if (this.currentImg === this.student.images) {
          this.currentImg = 0
        }
      } else {
        this.currentImg--
        if (this.currentImg < 0) { this.currentImg = this.student.images + this.currentImg }
      }
    }
  }
}
</script>

<style lang="stylus">

.mobile-cont
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    padding 0
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

.video-slide
    width 100%

.left-section
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    height 10% !important
  }
.work-section
  padding-left 0
  max-height 100%

.info-section
  padding-left 2%
  margin 0
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width 100% !important
    padding-right 0 !important
    margin-right 0 !important
  }
.icon
  fill: #181819

.hooper-next:focus, .hooper-prev:focus
  outline: none

.hooper-prev, .hooper-next

.tagsone
  display inline
  padding 1% 0 4% 0
  line-height 0

.tagstoo
  display inline
  padding-left 2%

.tags
  font-size 1.3vw
  display inline-block
  color #181819
  text-transform: uppercase
  font-family: 'GT-Pressura', sans-serif
  line-height 1
  padding-right 2%
  @media only screen and (min-device-width: 0px) and (max-device-width: 800px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    font-size 1.5vh
  }
.selfie
  width: 100%
  position relative
  padding-bottom 1%
  object-fill: cover
  z-index: 100

.main-name, .view-work
  color #181819
  font-size 3vw
  line-height 1.2
  text-transform: uppercase
  font-family: 'GT-Pressura', sans-serif

.view-work
  @media only screen and (min-device-width: 0px) and (max-device-width: 800px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
      display inline-block
  }

.view-work
  background #181819
  color white
  margin-top 2%
  padding 0 2%
  outline none
  border none

.main-text
  color #181819
  font-family: 'Ciao-Regular', sans-serif
  font-weight 800
  padding-right: 15%
  font-size 1.2vw
  padding-top: 2%
  overflow-y auto
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    font-size 1.2vh
  }
.buttonpressed
  background #181819
  color white

.aboutbutton, .workbutton
  margin-top 5%
  margin-right 1%
  padding 0 3%
  font-family: 'GT-Pressura', sans-serif
  font-size 3vw !important
  color white
  background #181819
  border none
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
  font-size 1vw
  padding-top: 2%
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    display none
  }

.vertical-center, .hooper-list
    display: inline-block;
    height: 100%;
    vertical-align: middle;

.social-links li
    display inline

.social-img
    width 5%
    padding-right 1%
    @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
      width 15%
      margin 4% 4% 4% 0
    }
ul
    margin 0
    padding-top 0

.links-container, .social-links
    padding  1% 0 2% 0
    line-height 0

.nav
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    display none
  }
  // phone screens in landscape
  @media only screen and (min-device-width: 0px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    display none
  }

.main-name, .proj-title, .aboutbutton
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {

    font-size 2vh
    padding 0
    margin 0
    margin-right 4%
  }

.aboutbutton
  position absolute
  bottom 0
  line-height 1.2
  font-size 2vw !important
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    position absolute
    padding 0 2%
    height 40%
    top 0
    right 1%
    border none
    color white
    background #181819
  }

.slide-number
  color #989590
  text-align center
  font-size .8vw
  padding-top 1%
  font-family: 'Ciao-Regular', sans-serif
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    padding-top 5%
    font-size 2vw
  }
</style>
