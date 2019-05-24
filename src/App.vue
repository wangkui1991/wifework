<!-- @format -->

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeMount() {
    let docEl = document.documentElement
    let resizeEvt =
      'orientationchange' in window ? 'orientationchange' : 'resize'
    let recalc = function() {
      let deviceWidth = docEl.clientWidth
      if (!deviceWidth) return
      if (deviceWidth > 1200) deviceWidth = 1200
      console.log('width', deviceWidth)
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
    }
    if (!document.addEventListener) return
    recalc()
    window.addEventListener(resizeEvt, recalc, false)
    document.addEventListener('DOMContentLoaded', recalc, false)
    window.recalc = recalc
  }
}
</script>

<style>
body {
  font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p a {
  margin: 0px 10px;
  text-decoration: underline;
}
</style>
