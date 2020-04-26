<template lang="pug">
#main-header
  b-container.container-fluid.header
    b-row.header
        b-col(cols="11")
            LogoHorizontal.logohorizontal
        b-col(cols="1")
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
  height 10%
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
    font-size 4vh
    font-weight 700
    line-height 0
    text-align center
    background-color #f4a1c6
    border-left 3px solid black
    height: 100%
    padding-top 25%

.logohorizontal
    height: 100%
    width: 25%
    padding 1% 2%

</style>
