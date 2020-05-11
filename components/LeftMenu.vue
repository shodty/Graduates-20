<template lang="pug">
.left-menu
    b-row.leftside
      b-col.col-12.discipline.welcome(@click="showDiscipline('welcome') " :class="{ bigger: show == 'welcome'}")
          transition-group(name="fade")
            img.discipline-logo.cursor-pointer(src='../assets/img/welcome-h1.png' key='span')
            .group(v-if="show == 'welcome'" key='group')
              img.main-logo(src='../assets/img/main-logo.png')
              br
              br
              p.welcome-text Click the disciplines below to display student work. <br><br> Click the arrow to the right to hide this menu. <br> <br>Sort student work by selecting various tags
      b-col.col-12.discipline.graphic( :class="{ bigger: show == 'graphic'}")
          transition-group(name="fade")
              img.discipline-logo.cursor-pointer(src='../assets/img/graphic-h1.png' key='graphic' @click="showDiscipline('graphic') ")
              .graphic-things(v-if="show == 'graphic'" key='group')
                  p.disc-desc(v-if='!sortGraphic') The goal of the Graphic Design program is to provide the community with a comprehensive and adaptable problem solver. The program seeks to impart students with a strong aesthetic ability coupled with a clear understanding of the increasingly complex strategic, systemic and conceptual challenges facing them in practice,  as well as the ability to address these challenges.
                  // label.shuffle.cursor-pointer(@click="shuffleStudents") SHUFFLE
                  button.sortbutton.px-2.my-2(@click="sortGraphic = !sortGraphic") {{ sortGraphic ? 'Overview' : 'Tags' }}
                  button.sortbutton.px-2.my-2(@click="alphabetizeStudents(true)") A-Z
                  button.sortbutton.px-2.my-2(@click="alphabetizeStudents(false)") Z-A
                  ul(v-if='sortGraphic')
                      li.taglist(v-for='tag in graphicTags')
                        input.check(type='checkbox' :id='tag' :name='tag' :value='tag' v-model='currentgraphictags' @change="updateTags(currentgraphictags, 'graphic')" )
                        label.cursor-pointer.label-for-check(name='test' :for='tag') {{tag}}
                  br
      b-col.col-12.discipline.interior( :class="{ bigger: show == 'interior' }")
          transition-group(name="fade")
            img.discipline-logo.cursor-pointer(src='../assets/img/interior-h1.png' key='interior' @click="showDiscipline('interior')")
            .graphic-things(v-if="show == 'interior'" key='group')
              p.disc-desc(v-if='!sortInterior') The goal of the Interior Architecture program is to prepare students for professional practice and/or preparation for admission to graduate level study. The degree is intended for students who want to pursue careers in interior design, interior architecture and architecture.
              // label.shuffle.cursor-pointer(@click="shuffleStudents") SHUFFLE
              button.sortbutton.px-2.my-2(@click="sortInterior = !sortInterior") {{ sortInterior ? 'Overview' : 'Tags' }}
              button.sortbutton.px-2.my-2(@click="alphabetizeStudents(true)") A-Z
              button.sortbutton.px-2.my-2(@click="alphabetizeStudents(false)") Z-A
              ul(v-if='sortInterior')
                  li.taglist(v-for='tag in interiorTags')
                    input.check(type='checkbox' :id='tag' :name='tag' :value='tag' v-model='currentinteriortags' @change="updateTags(currentinteriortags, 'interior')" )
                    label.cursor-pointer.label-for-check(name='test' :for='tag') {{tag}}
              br
      b-col.col-12.discipline.photo( :class="{ bigger: show == 'photo' }")
          transition-group(name="fade")
            img.discipline-logo.cursor-pointer(src='../assets/img/photo-h1.png' key='photo' @click="showDiscipline('photo')")
            .graphic-things(v-if="show == 'photo'" key='group')
              p.disc-desc(v-if='!sortPhoto') The goal of the Photography program is aimed at educating students in contemporary photographic methodologies and in the current situation of photography, its use and its communicative effects. The curriculum is designed to give students a broad exposure to not only the technologies, processes, and models of contemporary practice, but also to introduce them to the aesthetic, cultural, and ethical dialogues surround the use and role of photography in our society.
              // label.shuffle.cursor-pointer(@click="shuffleStudents") SHUFFLE
              button.sortbutton.px-2.my-2(@click="sortPhoto = !sortPhoto") {{ sortPhoto ? 'Overview' : 'Tags' }}
              button.sortbutton.px-2.my-2(@click="alphabetizeStudents(true)") A-Z
              button.sortbutton.px-2.my-2(@click="alphabetizeStudents(false)") Z-A
              ul(v-if='sortPhoto')
                  li.taglist(v-for='tag in photoTags')
                    input.check(type='checkbox' :id='tag' :name='tag' :value='tag' v-model='currentphototags' @change="updateTags(currentphototags, 'photo')" )
                    label.cursor-pointer.label-for-check(name='test' :for='tag') {{tag}}
              br
</template>

<script>

import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      showslider: false,
      sortGraphic: false,
      sortInterior: false,
      sortPhoto: false,
      currentgraphictags: [],
      currentinteriortags: [],
      currentphototags: [],
      checked: false
    }
  },
  computed: {
    studentObject () {
      return this.$store.state.students.studentObject
    },
    graphicTags () {
      return this.$store.getters['students/graphicTags']
    },
    interiorTags () {
      return this.$store.getters['students/interiorTags']
    },
    photoTags () {
      return this.$store.getters['students/photoTags']
    },
    ...mapState({
      show: state => state.general.show
    })
  },
  methods: {
    showDiscipline (discipline) {
      this.shuffleStudents()
      this.$store.dispatch('general/showDiscipline', discipline)
    },
    updateTags (tags, discipline) {
      this.$store.dispatch('students/toggleTags', { tags, discipline })
    },
    shuffleStudents () {
      this.$bus.$emit('shuffleStudents')
    },
    alphabetizeStudents (dir) {
      this.$bus.$emit('alphabetizeStudents', dir)
    }
  }
}
</script>

<style lang="stylus">
.left-menu
  height: 100%

.leftside
  height 94%

.discipline-logo, .main-logo
    width 80%
    margin 0 auto
    padding 2% 0 1% 0

.main-logo
    width 80%
    max-width 250px

.discipline
  border-top 3px solid #181819
  transition: height 1s;
  height 7%
  font-size 1vw
  font-family 'Ciao-Regular', sans-serif
  font-weight bold
  padding 2% 0% 0% 6%

.welcome-text
    width 100%
    padding 5% 5% 5% 0
    font-size 16px
    font-family 'Ciao-Regular', sans-serif
    font-weight bold

.welcome
  border-top 0px

.graphic
  background-color #c1abd3

.interior
  background-color #b7dba7

.photo
  background-color #fbb03a
  border-bottom 3px solid #181819

.bigger
  height: 79%;
  transition: height 1s;

.taglist
    padding 0
    margin-right 2%
    font-size 14px
    font-family: 'GT-Pressura', sans-serif
    line-height: 0
    list-style-type: none
    display: inline

.label-for-check
    background white
    border-radius 15px
    padding 2%
    margin 0

.check:checked + .label-for-check {
    background #f3a1c6
}

.shuffle
    font-size 18px
    font-family: 'GT-Pressura', sans-serif

.check
  display none

.disc-desc
  font-size 14px
  font-weight 800
  padding-right 4%

.sortbutton
  background black
  color white
  font-weight 800

</style>
