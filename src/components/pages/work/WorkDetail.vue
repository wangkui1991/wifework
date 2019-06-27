<!-- @format -->

<template>
  <div class="page work-detail">
    <h3 class="title-text animated fadeInUp">OUR WORK</h3>
    <h4 class="animated fadeInUp">Name | 项目名称</h4>
    <h5 class="animated fadeInUp">{{ item.name }}</h5>
    <p class="animated fadeInUp">{{ item.des }}</p>
    <div class="img-wrap">
      <img
        :src="
          require(`@/assets/images/workDetail_${itemIndex + 1}/${i + 1}.jpg`)
        "
        v-for="(a, i) in item.imgConfig"
        :class="['animated fadeInUp',`img-${a}`,'ani_delay_'+(i+1)]"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import mockData from './mockData'
export default {
  components: {},
  props: {},
  data() {
    return {
      item: null,
      itemIndex: 0
    }
  },
  computed: {},
  created() {
    this.itemIndex = Number(this.$route.query.index)
    this.item = mockData[`detail_${this.itemIndex + 1}`]
  },
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="less">
.work-detail {
  width: 7.5rem;
  > h4 {
    margin-bottom: 5px;
    font-size: 0.16rem;
    color: #333;
  }
  > h5 {
    margin-bottom: 0.14rem;
    font-size: 0.16rem;
    color: #333;
  }
  > p {
    font-size: 0.12rem;
    line-height: 20px;
    text-align: left;
    margin-bottom: 20px;
    color: #666;
  }
  .img-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    > img {
      display: inline-block;
      margin-bottom: 0.29rem;
    }
    .img-0 {
      width: 3.6rem;
      height: 5.1rem;
    }
    .img-1 {
      width: 2.4rem;
      height: 4rem;
    }
    .img-2 {
      width: 3.54rem;
      height: 5rem;
    }
    .img-3 {
      width: 7.5rem;
      height: 6.24rem;
    }
    .img-4 {
      width: 7.5rem;
      height: 5rem;
    }
    .img-5 {
      width: 7.5rem;
      height: 5.54rem;
    }
    .img-6 {
      width: 7.5rem;
      height: 8.4rem;
    }
    .img-7 {
      width: 7.5rem;
      height: 10.6rem;
    }
  }
}
</style>
