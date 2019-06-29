<!-- @format -->
<template>
  <div class="page service">
    <h3 class="title-text animated fadeInUp">SERVICES</h3>
    <ul class="case-list">
      <li v-for="(item, index) in caseList"
          :class="['animated fadeInUp', 'ani_delay_'+(index+1)]"
          :key="index"
          @click="goToService(index)">
        <img :src="require('@/assets/images/home/2-' + item.number + '.jpg')" alt="">
        <div class="txt-con">
          <h5>{{item.title}}</h5>
          <p>{{item.desc1}}</p>
          <p class="lp">{{item.desc2}}</p>
        </div>
      </li>
    </ul>
    <h3 class="title-text animated fadeInUp">CONTACT US</h3>
    <img
      src="@/assets/images/service/5.jpg"
      alt
      class="clickImg contact animated fadeInUp"
      @click="$router.push('contact')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseList: [
        {
          number: 1,
          title: '红色文化 | RED CULTURAL',
          desc1: '红色文化创新 | 红色历史底蕴挖掘',
          desc2: '党史党政党建宣传 | 红色文创产品创作',
          route: ''
        },
        {
          number: 2,
          title: '品牌全案 | BRAND DESIGN',
          desc1: '品牌创建：品牌形象丨品牌理念',
          desc2: '品牌推广：品牌传播策略丨品牌营销策略',
          route: ''
        },
        {
          number: 3,
          title: '整合营销 | MARKETING',
          desc1: '产品策略 | 渠道包装',
          desc2: '销售方案',
          route: ''
        },
        {
          number: 4,
          title: '销售方案',
          desc1: '销售方案',
          desc2: '新媒体平台运营',
          route: ''
        }
      ]
    }
  },
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
  padding-top: 10px;
  .case-list {
    overflow: hidden;
    li {
      position: relative;
      float: left;
      cursor: pointer;
      width: 3.67rem;
      height: 2rem;
      margin-bottom: 0.14rem;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
      img {
        position: relative;
        z-index: 1;
        display: block;
        width: 3.67rem;
        height: 2rem;
      }
      &:nth-child(2n + 1) {
        margin-right: 0.14rem;
      }
    }
    .txt-con {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
      left: 0;
      top: 0;
      text-align: left;
      color: #f2f2f2;
      h5 {
        position: absolute;
        bottom: 0.46rem;
        left: 0.14rem;
        line-height: 1;
        font-size: 0.12rem;
      }
      p {
        position: absolute;
        bottom: 0.34rem;
        left: 0.14rem;
        line-height: 1;
        font-size: 0.1rem;
        &.lp {
          bottom: 0.14rem;
        }
      }
    }
  }
  .title-text {
    margin: 0.18rem 0 0.28rem;
  }
  .contact {
    width: 7.5rem;
  }
}
</style>
