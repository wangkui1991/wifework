<!-- @format -->

<template>
  <div class="service-detail">
    <h3 class="title-text">{{ item.name }}</h3>
    <h5>{{ item.des }}</h5>
    <p>{{ item.con }}</p>
    <img :src="require(`@/assets/images/service/${item.imgNumber}.jpg`)" alt />
    <div class="tag-wrap">
      <div v-for="(a, i) in item.list" :key="i">
        <h4>{{ a.name }}</h4>
        <h5>{{ a.des }}</h5>
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
  p {
    font-size: 0.12rem;
    text-align: left;
  }
  img {
    width: 7.5rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .tag-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h4 {
      height: 0.25rem;
    }
  }
}
</style>
