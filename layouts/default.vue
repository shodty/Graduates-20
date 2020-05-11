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
  overflow-y: scroll
}
html, body {
    height: 100%;
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

@font-face {
    font-family: 'Ciao-Regular';
    src: url('../assets/fonts/G2Ciao-Regular.woff2') format('woff2'),
         url('../assets/fonts/G2Ciao-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'Massi-Web';
    src: url('../assets/fonts/Massi-WEB.woff2') format('woff2'),
         url('../assets/fonts/Massi-WEB.woff') format('woff');
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
  transform: translate(-100%, 0)

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
    border-left 2px solid #181819;
    background-color: #F5F5F5;
}

::-webkit-scrollbar
{
    width: 10px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
    background-color: #181819;
}

.cursor-pointer
  cursor pointer

.hide-on-mobile {
  @media(max-width: 1200px) {
    display: none !important
  }
}

.hide-on-desktop {
  @media(min-width: 768px) {
    display: none !important;
  }
}

.hide-on-ipad {
 @media(min-width: 1200px) {
    display: none !important;
  }
}
</style>
