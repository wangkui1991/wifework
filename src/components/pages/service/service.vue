<!-- @format -->
<template>
  <div class="service">
    <h3>SERVICES</h3>
    <div class="main-2">
      <img
        :src="require('@/assets/images/home/2-' + item.number + '.jpg')"
        v-for="(item, index) in img2List"
        :key="item"
        @click="goToService(index)"
        class="clickImg"
        alt
      />
    </div>
    <h3>CONTACT US</h3>
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
    img {
      width: 3.65rem;
      height: 50%;
    }
  }
  h3 {
    text-align: left;
  }
  .contact {
    width: 7.5rem;
  }
}
</style>
