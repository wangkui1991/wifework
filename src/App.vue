<!-- @format -->

<template>
  <div id="app">
    <img
      src="@/assets/images/home/logo.jpg"
      alt
      class="clickImg"
      @click="goToHome"
    />
    <div class="nav">
      <div
        class="nav-item"
        v-for="(item, index) in navData"
        :key="index"
        @click="goTo(item)"
      >
        <p>{{ item.name }}</p>
        <span></span>
        <p>{{ item.en }}</p>
      </div>
    </div>
    <router-view />
    <div class="line"></div>
    <img src="@/assets/images/home/6.jpg" alt />
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
      if (deviceWidth > 1024) deviceWidth = 1024
      console.log('width', deviceWidth)
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
    }
    if (!document.addEventListener) return
    recalc()
    window.addEventListener(resizeEvt, recalc, false)
    document.addEventListener('DOMContentLoaded', recalc, false)
    window.recalc = recalc
  },
  data() {
    return {
      navData: [
        {
          name: '简介',
          en: 'ABOUT US',
          route: 'about'
        },
        {
          name: '服务',
          en: 'SERVICES',
          route: 'service'
        },
        {
          name: '案例',
          en: 'OUR WORK',
          route: 'work'
        },
        {
          name: '联系',
          en: 'CONTACT',
          route: 'contact'
        }
      ]
    }
  },
  methods: {
    goTo(item) {
      this.$router.push({ name: item.route })
    },
    goToHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="less">
body {
  font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  background: #fff;
  .img-logo {
    margin-top: 50px;
    width: 4rem;
  }
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    .nav-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 24px;
      cursor: pointer;
      margin-bottom: 20px;
      font-weight: bold;
      p {
        font-size: 0.1rem;
      }
      span {
        width: 1px;
        height: 0.1rem;
        margin: 0 8px;
        background: #333;
      }
    }
  }
  .line {
    height: 1px;
    width: 7.5rem;
    background: #ccc;
    margin-top: 50px;
  }
}

p a {
  margin: 0px 10px;
  text-decoration: underline;
}

h3 {
  font-size: 0.25rem;
  align-self: flex-start;
  text-align: left;
  margin-bottom: 20px;
}
h4 {
  font-size: 0.18rem;
  align-self: flex-start;
  text-align: left;
  margin-bottom: 10px;
}
h5 {
  font-size: 0.15rem;
  align-self: flex-start;
  text-align: left;
  margin-bottom: 10px;
}
img {
  margin-bottom: 20px;
}
.clickImg {
  cursor: pointer;
}
</style>
