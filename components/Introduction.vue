<template lang="pug">
b-container(:class='next? "overlay-more" : "overlay-less"')
    b-row
        b-col.col-xs-8.offset-xs-2.col-lg-8.offset-lg-2.text-container
            p.intro-text(v-if='!next')
                | <span class="welcome-header">We<span style='font-family: Animal-Soul'>l</span>co<span style='font-family: Animal-Soul'>m</span>e</span>
                | <br>
            p.intro-text.indent(v-if='!next')
                | We are the Department of Design. We solve problems. We have a part in how we communicate
                | to and shape the world in which we live. This comes through the questions we ask of others and of
                | ourselves. Through image and word, form and color, texture and space our answers have a
                | substantial impact on how we live.
                | <br><br>
                | The disruption we are all working through is difficult. It is a loss to be cut off from working
                | directly with colleagues that have been held close for years while entering the final weeks of a
                | long journey. The moments of celebration to mark achievements have vanished but not the
                | achievements themselves.
                | <br><br>
                | With the support of some giving alumni and dedicated faculty, we have prepared this
                | celebration of our graduating seniors while acknowledging the moment we are all enduring.
                | This cannot replace the rather raucous celebration that is our annual spring show, but it can
                | reveal to the world the talent, dedication and achievements of our students as they move on to
                | the next step in their journey.
                | <br><br>
                | Thank you for taking the time to view this work. I encourage you to reach out and make new
                | connections for now or the future.
            p.intro-text(v-if='next')
                |<span class="welcome-header">T<span style='font-family: Animal-Soul'>h</span>e Depa<span style='font-family: Animal-Soul'>r</span>tment of De<span style='font-family: Animal-Soul'>s</span>ign</span>
                |<br><br>
                | The Department of Design recognizes that the environments in which we live and work are shaped by an
                | ever-increasing quantity of visual information. This information
                | comes to us from a multitude of sources, utilizing both traditional and technologically advanced modes of visual communication.
                | To a greater extent than at any other point in our history, artists and designers are dissolving the boundaries between
                | two- and three-dimensional visualization.
                |<br><br>
                | The Department of Design is well positioned to respond to the multifaceted nature of today’s visual culture.
                | By offering degree programs in Graphic Design, Interior Architecture, and Photography we prepare our students
                | for a wide range of design practices that play a part in creating our built environment.
                |<br><br>
                | The Department of Design strives to prepare students to have an impact in professional creative environments
                | that will require collaboration, adaptation to technology and leadership in solving complex problems.
                | The needs of the institutions, businesses and individuals they work with are rapidly changing.
                | The technology they will use to create, as well as the technology used by their audiences is ever-changing.
                | We want graduates to be capable of seizing opportunities as they arise and turn them into meaningful learning experiences
                | throughout their career.
                |<br><br>
                |The Department of Design is where creative and critical thinking come together in a curriculum that,
                | while preparing students for different career paths, fully engages students in relevant areas of technical and aesthetic
                | concern while establishing historical and social context to their disciplines. Students are taught how to utilize an iterative
                | process to create high quality solutions that respond to complex functional and aesthetic requirements that correspond to the
                | appropriate audience, occupant or user.
                |<br><br>
                | Furthermore, the Department seeks to prepare students to be articulate in their discipline: to be able to discuss and present
                | their work, both in writing and in conversation, from the perspective of the functional and aesthetic concepts that underlay
                | the work and how their decisions in these areas frame and solve a given problem.
            br
            .images
                img.cursor-pointer.more(v-if='!next' src='../assets/img/more.png' @click='next = !next')
                img.cursor-pointer.more(v-if='next' src='../assets/img/back.png' @click='next = !next')
            br
            .col-12
                button.next.gb.col-4(@click="showDiscipline('graphic')") GRAPHICS-2<span style="font-family: Animal-Soul">0</span>
                button.next.ib.col-4(@click="showDiscipline('interior')") INTERIORS-<span style="font-family: Animal-Soul">2</span>0
                button.next.pb.col-4(@click="showDiscipline('photo')") PHOTOS<span style="font-family: Animal-Soul">-</span>20
            br
            br
</template>

<script>

export default {
  components: {
  },
  props: {
  },
  data () {
    return {
      next: false
    }
  },
  computed: {

  },
  methods: {
    showDiscipline (discipline) {
      this.$store.dispatch('general/showDiscipline', discipline)
    }
  }
}
</script>

<style lang="stylus">

.overlay-less
    background rgba(255,255,255,.9)
    transition background 1s ease, opacity .7s ease
.overlay-more
    background rgba(243,161,198,.9)
    transition background 1s ease, opacity .7s ease

.text-container
    padding-top 3%

.intro-text
    font-family: 'Ciao-Regular', sans-serif
    font-size 20px
    font-weight 800
    padding 0 10%

.indent
    padding-top 4%
.welcome-header
    font-family: 'GT-Pressura', sans-serif
    font-size 5vw
    text-transform uppercase
    letter-spacing 12px
    line-height 1
    @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        font-size 5vh
        line-height 1.5
        letter-spacing 2px
    }
.next
  font-family: 'GT-Pressura', sans-serif
  font-size 2vw
  color #181819
  border: 3px solid #181919
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        font-size 1.4vh
        line-height 1.5
  }

.gb
    background #c1abd3
    border-right 0px
.ib
    background #b7dba7

.pb
    background #fbb03a
    border-left 0px
.images
    text-align right

.more
    padding-right 4%
</style>
