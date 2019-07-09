<!-- @format -->

<template>
  <div class="page service-detail">
    <h3 class="title-text animated fadeInUp">{{ item.name }}</h3>
    <div class="content">
      <h5 class="animated fadeInUp">{{ item.des }}</h5>
      <p class="desc animated fadeInUp">{{ item.con }}</p>
      <img
        class="img-0 animated fadeInUp ani_delay_1"
        :src="require(`@/assets/images/service/${item.imgNumber}.jpg`)"
        alt
      />
      <div class="tag-wrap animated fadeInUp ani_delay_3">
        <div v-for="(a, i) in item.list" :key="i">
          <h4>{{ a.name }}</h4>
          <h5>{{ a.des }}</h5>
          <p v-for="b in a.conList" :key="b">{{ b }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mockData from './mockData'
export default {
  data() {
    return {
      item: null
    }
  },
  created() {
    this.index = Number(this.$route.query.index)
    this.item = mockData[`detail_${this.index + 1}`]
  }
}
</script>

<style scoped lang="less">
.service-detail {
  width: 7.5rem;
  .title-text {
    font-family: SourceHanSans-Medium, 'Microsoft YaHei', 'Helvetica Neue',
      Arial, Roboto, 'Droid Sans', 'Heiti SC', 'Hiragino Sans GB', Simsun,
      sans-self, serif;
    margin-bottom: 0.14rem;
  }
  > h5 {
    margin-bottom: 0.07rem;
    font-weight: normal;
    font-size: 0.16rem;
    color: #333;
  }
  .desc {
    margin-bottom: 20px;
    font-size: 0.12rem;
    text-align: left;
    color: #666;
  }
  .img-0 {
    width: 100%;
    margin: 0.29rem 0;
  }
  .tag-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h4 {
      font-family: SourceHanSans-Medium, 'Microsoft YaHei', 'Helvetica Neue',
        Arial, Roboto, 'Droid Sans', 'Heiti SC', 'Hiragino Sans GB', Simsun,
        sans-self, serif;
      font-size: 0.17rem;
      height: 0.2rem;
      margin-bottom: 0.14rem;
      color: #333;
    }
    h5 {
      margin-bottom: 0.1rem;
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
@media screen and (max-width: 1024px) {
  .service-detail {
    .content {
      padding: 0 0.14rem;
    }
  }
}
</style>
