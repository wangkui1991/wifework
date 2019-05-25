<!-- @format -->

<template>
  <div class="home">
    <img src="@/assets/images/home/1.jpg" alt />
    <h3>SERVICES</h3>
    <div class="main-2">
      <img
        :src="require('@/assets/images/home/2-' + item.number + '.jpg')"
        v-for="item in img2List"
        :key="item"
        alt
      />
    </div>
    <h3>OUR WORK</h3>
    <div class="main-3">
      <img
        :src="require('@/assets/images/home/3-' + item + '.jpg')"
        v-for="item in img3List"
        :key="item"
        alt
      />
    </div>
    <h3>CUSTOMER</h3>
    <img src="@/assets/images/home/4.jpg" alt />
    <h3>CONTACT US</h3>
    <img src="@/assets/images/home/5.jpg" alt />
  </div>
</template>

<script>
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
  methods: {},
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
      width: 3.6rem;
      height: 50%;
    }
  }
}
img {
  width: 7.5rem;
  margin-bottom: 20px;
}
h3 {
  font-size: 0.3rem;
  align-self: flex-start;

  margin-bottom: 20px;
}
</style>
