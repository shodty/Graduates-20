<template lang="pug">
b-container(:class='next? "overlay-more" : "overlay"')
    b-row
        b-col.col-sm-8.offset-sm-2.col-lg-8.offset-lg-2.text-container
            p.intro-text(v-if='!next')
                | <span class="welcome-header">We<span style='font-family: Animal-Soul'>l</span>co<span style='font-family: Animal-Soul'>m</span>e</span>
                | <br><br>
                | We are the Department of Design. We solve problems. We have a part in how we communicate
                | to and shape the world we live in. This comes through the questions we ask of others and
                | ourselves. Through image and word, form and color, texture and space our answers have a
                | substantial impact on how we live.
                | <br><br>
                | The disruption we are all working through is difficult. It is a loss being cut off from working
                | directly with colleagues that have been held close for years while entering the final weeks of a
                | long journey. The moments of celebration to mark achievements have vanished but not the
                | achievements themselves. While acknowledging this loss we must remember as members of
                | the creative community our capacity to adapt to what is given and make something new.
                | <br><br>
                | With the support of some giving alumni and dedicated faculty we have prepared this
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
                |The Department of Design recognizes that the environments in which we live and work are shaped by an ever-increasing quantity of visual information. This information, in the form of two- and three-dimensional forms, comes to us from a variety of sources that utilize both traditional and technologically advanced modes of visual communication. To a greater extent than at any other point in our history, artists and designers are dissolving the boundaries between two- and three-dimensional visualization.
                |<br><br>
                |The Department of Design is well positioned to respond to the multifaceted nature of today’s visual culture. By offering degree programs in Graphic Design, Interior Architecture, and Photography we prepare our students for a wide range of visual and design practices that play a part in creating our built environment.
                |<br><br>
                |The Department of Design strives to prepare students to have an impact in professional creative environments that will require collaboration, adaptation to technology and leadership in solving complex problems. The needs of the institutions, businesses and individuals they work with are rapidly changing. The technology they will use to create, as well as the technology used by their audiences, will change the most. We want graduates to be capable of seizing opportunities as they arise and turn them into meaningful learning experiences throughout their career.
                |<br><br>
                |The Department of Design is where creative and critical thinking come together in a curriculum that, while preparing students for different career paths, fully engages students in relevant areas of technical and aesthetic concern while establishing historical and social context to their disciplines. Students are taught how to utilize an iterative process to create high quality solutions that respond to complex functional and aesthetic requirements that correspond to the appropriate audience, occupant or user.
                |<br><br>
                |Furthermore, the Department seeks to prepare students to be articulate in their discipline: to be able to discuss and present their work, both in writing and in conversation, from the perspective of the functional and aesthetic concepts that underlay the work and how their decisions in these areas frame and solve a given problem.
            br
            .images
                img.cursor-pointer(v-if='!next' src='../assets/img/more.png' @click='next = !next')
                img.cursor-pointer(v-if='next' src='../assets/img/back.png' @click='next = !next')
            br
            button.next.gb(@click="showDiscipline('graphic')") GRAPHIC
            button.next.ib(@click="showDiscipline('interior')") INTERIOR
            button.next.pb(@click="showDiscipline('photo')") PHOTO
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

.overlay
    background rgba(255,255,255,.9)
    transition background 1s ease
.overlay-more
    background rgba(243,161,198,.9)
    transition background 1s ease

.text-container
    padding-top 3%

.intro-text
    font-family: 'Ciao-Regular', sans-serif
    font-size 20px
    font-weight 800

.welcome-header
    font-family: 'GT-Pressura', sans-serif
    font-size 5vw
    text-transform uppercase
    letter-spacing 15px
    line-height 1

.next
  margin-right 1%
  padding 0 1%
  font-family: 'GT-Pressura', sans-serif
  font-size 2vw

.gb
    background #c1abd3

.ib
    background #b7dba7

.pb
    background #fbb03a

.images
    text-align right
</style>
