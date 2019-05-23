<template>
    <div>
        <img src="@/assets/images/home/logo.jpg"
             alt="">
        <div class="nav">
            <div class="nav-item"
                 v-for="(item,index) in navData"
                 :key="index">
                <p>{{item.name}}</p>
                <span></span>
                <p>{{item.en}}</p>
            </div>
        </div>
        <img src="@/assets/images/home/1.jpg"
             alt="">
        <h3>SERVICES</h3>
        <div class="main-2">
            <img :src="'@/assets/images/home/2-'+item+'.jpg'"
                 v-for="item in img2List"
                 :key="item"
                 alt="">
        </div>
        <h3>OUR WORK</h3>
        <div class="main-3">
            <img :src="'@/assets/images/home/3-'+item+'.jpg'"
                 v-for="item in img3List"
                 :key="item"
                 alt="">
        </div>
        <h3>CUSTOMER</h3>
        <img src="@/assets/images/home/4.jpg"
             alt="">
        <h3>CONTACT US</h3>
        <img src="@/assets/images/home/5.jpg"
             alt="">
        <div class="line"></div>
        <img src="@/assets/images/home/6.jpg"
             alt="">
    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      img2List: [1, 2, 3, 4],
      img3List: [1, 2, 3],
      navData: [
        {
          name: '简介',
          en: 'ABOUT US'
        },
        {
          name: '服务',
          en: 'SERVICES'
        },
        {
          name: '案例',
          en: 'OUR WORK'
        },
        {
          name: '联系',
          en: 'CONTACT'
        }
      ]
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
</style>
