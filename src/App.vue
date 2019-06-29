<!-- @format -->

<template>
  <div id="app">
    <div class="header-wrap"
         @mouseover="show"
         @mouseout="hide">
      <img
        src="@/assets/images/home/logo.jpg"
        alt
        class="clickImg img-logo"
        @click="goToHome"
      />
      <div class="nav-wrap">
        <transition name="slide">
          <div class="nav" v-if="showNav">
            <div
              class="nav-item"
              :style="index === 3 ? { marginRight: 0 } : null"
              v-for="(item, index) in navData"
              :key="index"
              @click="goTo(item)"
            >
              <p class="zh">{{ item.name }}</p>
              <p class="en"><em>|</em>{{ item.en }}</p>
            </div>
          </div>
        </transition>
      </div>
      <!--<div class="mobile-nav-wrap" v-else>
        <img src="@/assets/images/home/logo.jpg" class="img-logo">
        <dl>
          <dt>三</dt>
          <dd>简介</dd>
          <dd>服务</dd>
          <dd>案例</dd>
          <dd>联系我们</dd>
        </dl>
      </div>-->
    </div>
    <router-view/>
    <div class="footer">
      <p>版权所有 ©墨缇斯（武汉）文化传媒有限公司 鄂ICP备19014244号</p>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'

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
      // console.log('width', deviceWidth)
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
    }
    if (!document.addEventListener) return
    recalc()
    window.addEventListener(resizeEvt, throttle(recalc, 100), false)
    document.addEventListener('DOMContentLoaded', recalc, false)
    window.recalc = recalc
  },
  data() {
    return {
      showNav: true,
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
    },
    show() {
      this.showNav = true
    },
    hide() {
      this.showNav = false
    }
  }
}
</script>

<style lang="less">
body {
  font-size: 16px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  background: #fff;

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  .page {
    box-sizing: border-box;
  }
  .img-logo {
    width: 4.4rem;
    margin: 50px auto 20px;
  }
  .nav-wrap {
    height: 0.5rem;
  }
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .nav-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 40px;
      cursor: pointer;
      margin-bottom: 20px;
      transition: 0.3s transform cubic-bezier(0.19, 1, 0.22, 1),
        0.6s opacity cubic-bezier(0.19, 1, 0.22, 1),
        0.6s background-color cubic-bezier(0.19, 1, 0.22, 1),
        0.6s -webkit-transform cubic-bezier(0.19, 1, 0.22, 1);
      p {
        font-family: SourceHanSans-Light, 'Microsoft YaHei', 'Helvetica Neue',
          Arial, Roboto, 'Droid Sans', 'Heiti SC', 'Hiragino Sans GB', Simsun,
          sans-self, serif;
        margin-bottom: 5px;
        font-size: 14px;
        line-height: 1;
        font-weight: normal;
        color: #333;
        &.en {
          color: #b3b3b3;
          em {
            padding: 0 8px;
            color: #e5e5e5;
          }
        }
      }
    }
  }
  .footer {
    width: 7.5rem;
    margin-top: 0.36rem;
    padding: 0.29rem 10px;
    border-top: 1px solid #e6e6e6;
    p {
      text-align: center;
      font-size: 12px;
      color: #b3b3b3;
    }
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
  display: block;
  margin-bottom: 20px;
}

.clickImg {
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .title-text {
    padding-left: 0.14rem;
    font-weight: 300;
  }
}
@media screen and (max-width: 622px) {
  #app {
    .img-logo {
      margin: 40px auto 16px;
    }
    .nav-wrap {
      height: 0.8rem;
    }
    .nav {
      .nav-item {
        flex-direction: column;
        text-align: center;
        margin-right: 0.5rem;
        p {
          font-size: 0.14rem;
          &.zh {
            font-weight: bold;
          }
        }
        em {
          display: none;
        }
      }
    }
    .title-text {
      font-weight: 300;
    }
    h5 {
      font-size: 0.16rem;
    }
    p {
      font-size: 0.14rem;
    }
  }
}
</style>
