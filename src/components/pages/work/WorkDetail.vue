<!-- @format -->

<template>
  <div class="work-detail">
    <h3>OUR WORK</h3>
    <h4>Name | 项目名称</h4>
    <h5>{{ item.name }}</h5>
    <p>{{ item.des }}</p>
    <div class="img-wrap">
      <img
        :src="
          require(`@/assets/images/workDetail_${itemIndex + 1}/${i + 1}.jpg`)
        "
        alt
        v-for="(a, i) in item.imgConfig"
        :class="`img-${a}`"
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
  p {
    font-size: 0.12rem;
    text-align: left;
    margin-bottom: 20px;
  }
  .img-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    .img-1 {
      width: 2.3rem;
    }
    .img-2 {
      width: 3.6rem;
    }
    .img-3 {
      width: 7.5rem;
    }
  }
}
</style>
