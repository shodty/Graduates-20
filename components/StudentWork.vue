<template lang="pug">
div
  .student-work-container(v-if="student.discipline == 'graphic' && show == 'graphic'")
    Student(:student='student' :index='index')
  .student-work-container(v-else-if="student.discipline == 'interior' && show == 'interior'")
    Student(:student='student' :index='index')
  .student-work-container(v-else-if="student.discipline == 'photo' && show == 'photo'")
    Student(:student='student' :index='index')
</template>

<script>

import { mapState } from 'vuex'
import Student from '~/components/Student.vue'

export default {
  components: {
    Student
  },
  props: {
    student: { type: Object, default () { return { message: 'empty' } } },
    index: { type: Number, default: 0 }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      show: state => state.general.show,
      studentObject: state => state.students.studentObject
    })
  },
  methods: {
  }
}
</script>

<style lang="stylus">

.student-work-container
  height: 94vh
  @media(orientation:portrait) {
    height: 47vh
  }
  @media(max-width: 1000px) {
    height: 47vh
  }
  @media(max-width: 1000px) {
    height: 47vh
  }
  // phone screens in portrait
  @media only screen and (min-device-width: 0px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    height: 23.5vh
  }
  // phone screens in landscape
  @media only screen and (min-device-width: 0px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    height: 94vh
  }

  // ipad portrait
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
      height: 31.3333vh
  }

</style>
