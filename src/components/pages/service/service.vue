<!-- @format -->
<template>
  <div class="service">
    <h3 class="title-text">SERVICES</h3>
    <div class="main-2">
      <img
        :src="require('@/assets/images/home/2-' + item.number + '.jpg')"
        v-for="(item, index) in img2List"
        :key="index"
        @click="goToService(index)"
        class="clickImg"
        alt
      />
    </div>
    <h3 class="title-text">CONTACT US</h3>
    <img
      src="@/assets/images/service/5"
      alt
      class="clickImg contact"
      @click="$router.push('contact')"
    />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      img2List: [
        { number: 1, route: '' },
        { number: 2, route: '' },
        { number: 3, route: '' },
        { number: 4, route: '' }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    goToService(index) {
      this.$router.push({ name: 'serviceDetail', query: { index } })
    }
  }
}
</script>

<style scoped lang="less">
.service {
  width: 7.5rem;
  .main-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    /*margin-bottom: 20px;*/
    img {
      width: 3.67rem;
      height: 1.99rem;
      margin-bottom: 0.14rem;
      &:nth-child(2n + 1) {
        margin-right: 0.14rem;
      }
    }
  }
  .title-text {
    padding-top: 20px;
    margin-bottom: 0.29rem;
  }
  .contact {
    width: 7.5rem;
  }
}
</style>
