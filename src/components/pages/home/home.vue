<!-- @format -->

<template>
  <div class="home">
    <div class="main-0">
      <img
        src="@/assets/images/home/1.jpg"
        alt
        @click="goToAbout"
        class="clickImg"
        v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
      />
    </div>
    <!--SERVICE-->
    <h3
      class="title-text"
      @mouseover="hoverTitle('services')"
      @mouseout="noHoverTitle('services')"
      ref="services"
    >
      SERVICES
    </h3>
    <div class="main-1">
      <img
        :src="require('@/assets/images/home/2-' + item.number + '.jpg')"
        v-for="(item, index) in img2List"
        :key="item.number"
        @click="goToService(index)"
        class="clickImg"
        v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
      />
    </div>
    <!--OUR WORK-->
    <h3
      class="title-text"
      @mouseover="hoverTitle('work')"
      @mouseout="noHoverTitle('work')"
      ref="work"
    >
      OUR WORK
    </h3>
    <div class="main-2">
      <img
        :src="require('@/assets/images/home/3-' + item + '.jpg')"
        v-for="(item, index) in img3List"
        :key="item + 10"
        @click="goToWork(index)"
        class="clickImg"
        v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
      />
    </div>
    <!--CUSTOMER-->
    <h3
      class="title-text"
      @mouseover="hoverTitle('customer')"
      @mouseout="noHoverTitle('customer')"
      ref="customer"
    >
      CUSTOMER
    </h3>
    <div class="main-3">
      <img src="@/assets/images/home/4.jpg" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"/>
    </div>
    <!--CONTACT US-->
    <h3
      class="title-text"
      @mouseover="hoverTitle('contact')"
      @mouseout="noHoverTitle('contact')"
      ref="contact"
    >
      CONTACT US
    </h3>
    <div class="main-4">
      <img
        src="@/assets/images/home/5.jpg"
        alt
        @click="goToContact"
        class="clickImg"
        v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
      />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { addClass, removeClass } from '@/assets/js/common'
export default {
  props: {},
  components: {},
  data() {
    return {
      img2List: [
        { number: 1, route: '' },
        { number: 2, route: '' },
        { number: 3, route: '' },
        { number: 4, route: '' }
      ],
      img3List: [1, 2, 3],
      intersectionOptions: {
        root: document.querySelector('.home'),
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onWaypoint({ el, going, direction, _entry }) {
      // going: in, out
      // direction: top, right, bottom, left
      /*if (going === this.$waypointMap.GOING_IN) {
        console.log('waypoint going in!') //激活-出现了
        el.classList.add('animated')
        el.classList.add('slideInUp')
      }*/
      /*if (going === this.$waypointMap.GOING_OUT) {
        console.log('waypoint going out!')
      }*/
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log('waypoint going top!')
        el.classList.add('animated')
        el.classList.add('slideInUp')
      }
      /*if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        console.log('waypoint going bottom!')
      }*/
    },
    hoverTitle(e) {
      let dom = this.$refs[e]
      addClass(dom, 'shadow')
    },
    noHoverTitle(e) {
      let dom = this.$refs[e]
      removeClass(dom, 'shadow')
    },
    goToService(index) {
      this.$router.push({ name: 'serviceDetail', query: { index } })
    },
    goToWork(index) {
      this.$router.push({ name: 'workDetail', query: { index } })
    },
    goToAbout() {
      this.$router.push({ name: 'about' })
    },
    goToContact() {
      this.$router.push({ name: 'contact' })
    }
  }
}
</script>
<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7.5rem;
  .img-logo {
    display: block;
    width: 3.95rem;
    height: 1rem;
  }
  .title-text {
    cursor: pointer;
  }
  .main-0 {
    margin-bottom: 0.14rem;
  }
  .main-1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0.14rem;
    img {
      width: 3.65rem;
      height: 50%;
    }
  }
  .main-2 {
    margin-bottom: 0.14rem;
  }
  .main-3 {
    margin-bottom: 0.14rem;
  }
  .main-4 {
    margin-bottom: 0.14rem;
  }
}
img {
  width: 7.5rem;
  margin-bottom: 20px;
}
</style>
