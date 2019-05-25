<!-- @format -->
<template>
  <div class="work">
    <h3>OUR WORK</h3>
    <div class="title">
      <h4>墨缇斯（武汉）文化传媒有限公司，</h4>
      <h4>全方位品牌规划与设计服务为品牌塑造未来。</h4>
      <p>
        Metis文化始创于2007年，是中国最早从事成长性企业品牌综合服务机构。业务涵盖了包括调研、策略、设计、体验创新与推广等多个层面，具体到品牌建设及品牌推广、整合营销及销量提升、红色文化文创及馆藏文化文创、数字营销及新媒体运营
      </p>
    </div>
    <ul>
      <li
        v-for="(item, index) in listData"
        :key="index"
        :class="(index + 1) % 3 ? null : 'noRight'"
      >
        <img :src="require(`@/assets/images/work/${item.number}.jpg`)" alt />
        <p>Name | 项目名称</p>
        <p>{{ item.name }}</p>
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
  methods: {}
}
</script>

<style scoped lang="less">
.work {
  width: 7.5rem;
  padding-top: 20px;
  .title {
    h4 {
      text-align: left;
      font-weight: bold;
      font-size: 0.15rem;
      margin-bottom: 10px;
    }
    p {
      text-align: left;
      margin-top: 20px;
      margin-bottom: 30px;
      line-height: 0.18rem;
      font-size: 0.1rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 2.4rem;
      margin-right: 0.13rem;
      margin-bottom: 10px;
      &.noRight {
        margin-right: 0;
      }
      img {
        width: 2.4rem;
        height: 2.42rem;
      }
      p {
        text-align: left;
        margin-bottom: 10px;
        font-size: 0.12rem;
        font-weight: bold;
        color: #666;
      }
    }
  }
}
</style>
