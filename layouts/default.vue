<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="stylus">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  }
*
  padding: 0
  margin: 0
  box-sizing: border-box

p
  margin 0
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container
  @media(min-width: 1px) {
    max-width: 100%;
  }
  padding 0

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto
  padding: 0
  margin: 0

.row
  margin 0

@font-face {
    font-family: 'Ciao-Regular';
    src: url('../assets/fonts/G2Ciao-Regular.woff2') format('woff2'),
         url('../assets/fonts/G2Ciao-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'Animal-Soul';
    src: url('../assets/fonts/glyphworld-animalsoul-webfont.woff2') format('woff2'),
         url('../assets/fonts/glyphworld-animalsoul-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'GT-Pressura';
    src: url('../assets/fonts/gt-pressura-mono-bold-webfont.woff2') format('woff2'),
         url('../assets/fonts/gt-pressura-mono-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

.slide-leave-active,
.slide-enter-active
  transition: .5s

.slide-enter
  transform: translate(100%, 0)

.slide-leave-to
  transform: translate(-100%, 0)

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

::-webkit-scrollbar-track
{
    border-left 2px solid black;
    background-color: #F5F5F5;
}

::-webkit-scrollbar
{
    width: 10px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
    background-color: #000000;
}

</style>
