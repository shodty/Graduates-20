<template lang="pug">
#main-header
  b-container.container-fluid.header
    b-row.header
        b-col(cols="11")
            LogoHorizontal.logohorizontal
        b-col.my-auto(cols="1" )
            b-col
              p.info Info
</template>

<script>
import LogoHorizontal from '~/components/LogoHorizontal.vue'

export default {
  name: 'Header',
  components: {
    LogoHorizontal
  }
}

</script>

<style scoped lang="stylus">

#main-header
  position fixed
  top 0
  left 0
  z-index 100
  height 8%
  width 100%
  background white
  border-bottom 3px solid black

.header
  height 100%
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

.pinkbg
  background-color #f4a1c6
  border-left 3px solid black

.logohorizontal
    height: 100%
    width: 18%
    padding 1% .75%

</style>
