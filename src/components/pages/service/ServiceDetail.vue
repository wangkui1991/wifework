<!-- @format -->

<template>
  <div class="service-detail">
    <h3 class="title-text animated fadeInUp">{{ item.name }}</h3>
    <h5 class="animated fadeInUp">{{ item.des }}</h5>
    <p class="animated fadeInUp">{{ item.con }}</p>
    <img class="animated fadeInUp" :src="require(`@/assets/images/service/${item.imgNumber}.jpg`)" alt />
    <div class="tag-wrap animated fadeInUp">
      <div v-for="(a, i) in item.list" :key="i">
        <h4>{{ a.name }}</h4>
        <h5 v-if="a.des">{{ a.des }}</h5>
        <p v-for="b in a.conList" :key="b">{{ b }}</p>
      </div>
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
      item: null
    }
  },
  computed: {},
  created() {
    this.index = Number(this.$route.query.index)
    this.item = mockData[`detail_${this.index + 1}`]
  },
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="less">
.service-detail {
  width: 7.5rem;
  .title-text {
    font-family: SourceHanSans-Medium, '微软雅黑', 'Helvetica Neue', Arial,
      Roboto, 'Droid Sans', 'Heiti SC', 'Hiragino Sans GB', Simsun, sans-self,
      serif;
    margin-bottom: 0.14rem;
  }
  > h5 {
    margin-bottom: 0.07rem;
    font-weight: normal;
    font-size: 0.16rem;
    color: #333;
  }
  > p {
    text-align: left;
    font-size: 0.1rem;
    color: #666;
  }
  > img {
    width: 7.5rem;
    margin-top: 0.29rem;
    margin-bottom: 0.29rem;
  }
  .tag-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h4 {
      font-family: SourceHanSans-Medium, '微软雅黑', 'Helvetica Neue', Arial,
        Roboto, 'Droid Sans', 'Heiti SC', 'Hiragino Sans GB', Simsun, sans-self,
        serif;
      font-size: 0.17rem;
      line-height: 1;
      height: 0.25rem;
      color: #333;
    }
    h5 {
      margin-top: 10px;
      margin-bottom: 0;
      line-height: 1.5;
      font-size: 0.17rem;
      color: #4d4d4d;
    }
    p {
      text-align: left;
      line-height: 1.8;
      font-size: 0.1rem;
      color: #666;
    }
  }
}
</style>
