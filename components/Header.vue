<template lang="pug">
#main-header
  b-container.container-fluid
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

.header
    border-bottom 3px solid black

.marquee
    width: 100vw;
    margin: 0 auto;
    text-align left

.info
    font-size 4vh
    font-weight 700
    text-align center
    background-color #f4a1c6
    border-left 3px solid black
    padding 15% 0
    height: 100%

.logohorizontal
    height: 100%
    width: 30%
    padding 1% 2%

</style>
