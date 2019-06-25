<!-- @format -->
<template>
  <div class="work">
    <h3 class="title-text animated slideInUp">OUR WORK</h3>
    <div class="title">
      <h4 class="animated slideInUp">墨缇斯（武汉）文化传媒有限公司，</h4>
      <h4 class="animated slideInUp">全方位品牌规划与设计服务为品牌塑造未来。</h4>
      <p class="animated slideInUp">
        墨缇斯文化始创于2007年，是中国最早从事成长性企业品牌综合服务机构。业务涵盖了包括调研、策略、设计、体验创新与推广等多个层面，具体到品牌建设及品牌推广、整合营销及销量提升、红色文化文创及馆藏文化文创、数字营销及新媒体运营。
      </p>
    </div>
    <ul>
      <li
        v-for="(item, index) in listData"
        :key="index"
        :class="(index + 1) % 3 ? null : 'noRight'"
        @click="goToPages(index)"
        class="clickImg animated slideInUp"
        :style="{'-webkit-animation-delay' : index/10+'s','animation-delay' : index/10+'s'}"
      >
        <img :src="require(`@/assets/images/work/${item.number}.jpg`)" alt />
        <p class="pt">Name | 项目名称</p>
        <p :title="item.name">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      listData: [
        {
          number: 1,
          name: '奥普'
        },
        {
          number: 2,
          name: '中国邮政储蓄银行'
        },
        {
          number: 3,
          name: '红星美凯龙'
        },
        {
          number: 4,
          name: '红色文化宣传'
        },
        {
          number: 5,
          name: '中国经济年度任务颁奖典礼海报'
        },
        {
          number: 6,
          name: '中国旅游产业投融资促进大会logo'
        },
        {
          number: 7,
          name: '五粮液创意海报'
        },
        {
          number: 8,
          name: '沙棘小姐产品包装'
        },
        {
          number: 9,
          name: '读山名片设计'
        },
        {
          number: 10,
          name: '国家旅游局活动策划'
        },
        {
          number: 11,
          name: '郎酒广告创意'
        }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    goToPages(index) {
      if (index >= 3) {
        return
      }

      this.$router.push({ name: 'workDetail', query: { index } })
    }
  }
}
</script>

<style scoped lang="less">
.work {
  width: 7.5rem;
  padding-top: 20px;
  .title {
    h4 {
      text-align: left;
      font-size: 0.16rem;
      line-height: 0.19rem;
      color: #333;
    }
    p {
      text-align: left;
      margin-top: 20px;
      margin-bottom: 40px;
      line-height: 20px;
      font-size: 0.1rem;
      color: #666;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 2.4rem;
      margin-right: 0.14rem;
      margin-bottom: 0.29rem;
      &.noRight {
        margin-right: 0;
      }
      img {
        display: block;
        width: 2.4rem;
        height: 2.4rem;
        margin-bottom: 0.14rem;
      }
      p {
        text-align: left;
        line-height: 1;
        font-size: 0.12rem;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &.pt {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
