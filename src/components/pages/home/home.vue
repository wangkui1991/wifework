<!-- @format -->

<template>
  <div class="home">
    <img
      src="@/assets/images/home/1.jpg"
      alt
      @click="goToAbout"
      class="clickImg"
    />
    <h3
      @mouseover="hoverTitle('services')"
      @mouseout="noHoverTitle('services')"
      ref="services"
    >
      SERVICES
    </h3>
    <div class="main-2">
      <img
        :src="require('@/assets/images/home/2-' + item.number + '.jpg')"
        v-for="(item, index) in img2List"
        :key="item.number"
        @click="goToService(index)"
        class="clickImg"
        alt
      />
    </div>
    <h3
      @mouseover="hoverTitle('work')"
      @mouseout="noHoverTitle('work')"
      ref="work"
    >
      OUR WORK
    </h3>
    <div class="main-3">
      <img
        :src="require('@/assets/images/home/3-' + item + '.jpg')"
        v-for="(item, index) in img3List"
        :key="item + 10"
        @click="goToWork(index)"
        class="clickImg"
        alt
      />
    </div>
    <h3
      @mouseover="hoverTitle('customer')"
      @mouseout="noHoverTitle('customer')"
      ref="customer"
    >
      CUSTOMER
    </h3>
    <img src="@/assets/images/home/4.jpg" alt />
    <h3
      @mouseover="hoverTitle('contact')"
      @mouseout="noHoverTitle('contact')"
      ref="contact"
    >
      CONTACT US
    </h3>
    <img
      src="@/assets/images/home/5.jpg"
      alt
      @click="goToContact"
      class="clickImg"
    />
  </div>
</template>

<script>
import { addClass, removeClass } from '@/assets/js/common'
export default {
  props: {},
  data() {
    return {
      img2List: [
        { number: 1, route: '' },
        { number: 2, route: '' },
        { number: 3, route: '' },
        { number: 4, route: '' }
      ],
      img3List: [1, 2, 3]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
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
  },
  components: {}
}
</script>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7.5rem;

  .main-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
      width: 3.65rem;
      height: 50%;
    }
  }
  .shadow {
    text-shadow: 2px 0 2px #333;
  }
}
img {
  width: 7.5rem;
  margin-bottom: 20px;
}
h3 {
  font-size: 0.3rem;
  align-self: flex-start;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
