/* eslint-disable quotes */
<template lang="pug">
.container
  Header
  b-container.container-fluid
    b-row
      b-col(cols="4" class="red-bg")
        b-row
          Logo(class="logo")
        b-row
          b-row.discipline.graphic
            h1 Graphic Design
          b-row.discipline.interior
            h1 Interior Architecture
          b-row.discipline.photo
            h1 Photography
      b-col(cols="8" class="blue-bg")
        video(class="video-bottom" src="../assets/video/G20_MaskSpin.mp4" autoplay muted loop)

</template>

<script>
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Logo,
    Header
  }
}
</script>

<style lang="stylus">
*
  padding: 0
  margin: 0

.container
  @media(min-width: 1px) {
    max-width: 100%;
  }
  padding 0

.col-8, .col-4
  padding: 0
  margin: 0

.row
  margin 0

.title
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px

.logo
  width 70%
  height 70%
  padding 50px 0

.red-bg
  height: 100vh
  margin 0 auto
  background-color: white

.red-bg h1
  padding-left: 15%
  font-size: 2.1vw
  width: 100%
.blue-bg
  background-color: black

.video-bottom
    width: 100%

.discipline
  width: 100%
  border-top 3px solid black

.graphic
  background-color #c1abd3

.interior
  background-color #b7dba7

.photo
  background-color #fbb03a
</style>
