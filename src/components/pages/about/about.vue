<!-- @format -->
<template>
  <div class="page about">
    <h3 class="title-text animated fadeInUp">ABOUT US</h3>
    <div class="title">
      <h4 class="animated fadeInUp">墨缇斯（武汉）文化传媒有限公司，</h4>
      <h4 class="animated fadeInUp">成长型企业品牌建设与升级的创领者，</h4>
      <h4 class="animated fadeInUp">全方位品牌规划与设计服务为品牌塑造未来。</h4>
      <p class="animated fadeInUp" v-html="sum.s1"></p>
      <p class="animated fadeInUp" v-html="sum.s2"></p>
      <p class="animated fadeInUp" v-html="sum.s3"></p>
    </div>
    <div v-for="(item, index) in listText" :key="index" :class="['des animated fadeInUp', 'ani_delay_'+(index+1)]">
      <h5>{{ item.title }}</h5>
      <p>{{ item.sum }}</p>
    </div>
    <img src="@/assets/images/about/1.jpg" alt class="img-1 animated fadeInUp" />
    <h3 class="title-text animated fadeInUp">OUR TEAM</h3>
    <ul>
      <li v-for="(item, index) in person" :key="index" :class="['animated fadeInUp', 'ani_delay_'+(index+1)]">
        <img :src="require(`@/assets/images/about/${item.number}.jpg`)" alt />
        <div class="person-sum">
          <h5>{{ item.name }}</h5>
          <h6>{{ item.title }}</h6>
          <p :title="item.sum">{{ item.sum }}</p>
        </div>
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
      sum: {
        s1:
          '墨缇斯（武汉）文化传媒有限公司，是中国最早从事成长型企业品牌综合服务机构，完成从品牌到销量的转化是墨缇斯存在的核心价值！',
        s2:
          '墨缇斯文化始创于2007年，业务涵盖了品牌综合服务的全内容：调研、策略、设计、体验创新与推广等多个层面，品牌建设及品牌推广、整合营销及销量提升、红色文化及馆藏文化、数字营销及新媒体运营及创办的几大核心业务板块。 墨缇斯核心团队均有十年以上从业经验，来自联勤、奥美、世邦等知名咨询企业。2019年墨缇斯进行团队再扩建，以武汉为第二总部继续扩大市场份额和市场占有率。我们坚持为客户提供更优质的服务，为员工提供更广大的发展平台，为社会承担更多的社会责任。',
        s3:
          '我们的口号：和你一起惊艳世界！<br/>    我们的使命：完成客户从品牌到销量的转化！<br/>  我们的愿景：跳出思维的框架解决客户的一切问题，做中国最具生产力的成长型企业品牌综合服务商！'
      },
      listText: [
        {
          title: '品牌建设与推广',
          sum:
            '我们通过前期品牌调研与品牌诊断为客户量身定制品牌需求和品牌策略，根据品牌定位设计品牌形象并确定品牌调性。凭借丰富的实战经验，为企业提供有别于其他竞品的全方位定制的系统化、高效率、易执行、可管控的品牌定位策略。将能够联系消费者，并最终促进销售的品牌创意付诸实现。'
        },
        {
          title: '整合营销助力销量提升',
          sum:
            '我们充分整合线上线下资源，坚持以社会化营销和内容营销为主体的整合营销，锁定目标客户精准传播。帮助品牌搭建多化元销售平台，拓宽产品销售渠道;以销量增长为目的制定易转化可执行的动销方案；进一步发挥资源优势和品牌优势，极大提升品牌知名度和影响力，创造新的经济增长点，实现品牌的健康和可持续发展。'
        },
        {
          title: '红色文化传播与执行',
          sum:
            '墨缇斯文化特色红色文化是对中国红色文化资源系统梳理和保护基础上的一种文化活化，是一种推动传承的用心探索。我们专注于蕴含着丰富的革命精神和厚重的历史文化内涵的“红色文化”的宣传创新，我们执着于红色历史底蕴的挖掘，并在此基础上创作出通俗化、趣味化的红色文创产品。我们协助党政机关、事业单位及大型国有企业进行全面的党史、党建等红色文化宣传建设，辅以专业设计及富有艺术性的表现手法，展现我党艰苦奋斗历史和卓越峥嵘风貌，借势新媒体平台资源，在新一代中国青年中形成口碑，广泛传播。'
        },
        {
          title: '新媒体数字营销',
          sum:
            '数字营销时代，墨缇斯文化根据数据进行营销决策，帮助客户制定数字媒体广告的优化组合。正确认识到不同数据同品牌营销之间的关系，合理运用数据进行营销指导，让企业的互联网在线影响实现优化，让品牌覆盖正确的消费者群体。在市场和目标受众上占据一席之地，够迅速占领用户的注意力，形成品牌记忆，从而帮助企业获得销售增长，在长期的商业竞争中保持优势。'
        }
      ],
      person: [
        {
          number: 2,
          name: '王超',
          title: '创意总监 | 15年从业经验',
          sum:
            '曾就职于奥美、世邦等知名企业，为奥组委、cctv8、旅游文化局、等企大型事业机构提供过卓越的平面、创意类服务。'
        },
        {
          number: 3,
          name: '林光希',
          title: '美术指导 | 10年从业经验',
          sum:
            '曾就职于百度、奥美等知名企业及digital agency，服务过LINEFRIENDS、尊尼获加、轩尼诗、奔驰、英菲尼迪等众多品牌。'
        },
        {
          number: 4,
          name: '李剑',
          title: '联合创始人 | 20年从业经验',
          sum:
            '策划了《中国好声音》、《我是歌手》、《爸爸去哪儿》、《大上海》等综艺、影视的卡通化包装宣传，创立了国内综艺卡通化包装领先品牌僵尸诗诗，为伊利、立白、联想、苏泊尔、百雀羚、京东、中央电视台、灿星、湖南卫视、江苏卫视等众多国内知名企业、机构提供策划、设计服务。'
        },
        {
          number: 5,
          name: 'ANKI',
          title: '执行董事 | 10年从业经验',
          sum:
            '美国加州大学EMBA、资深职业经理人、曾服务多家国内知名上市企业。擅长解决企业管理及销量提升问题以及快消品及商业地产的全案营销、红色文创产业的建设与推广。'
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
.about {
  width: 7.5rem;
  padding-top: 20px;
  .title {
    h4 {
      text-align: left;
      font-weight: normal;
      font-size: 0.15rem;
      margin-bottom: 10px;
      color: #333;
    }
    p {
      text-align: left;
      margin: 10px 0;
      line-height: 20px;
      font-size: 0.1rem;
      color: #666;
    }
  }
  .des {
    margin-top: 30px;
    text-align: left;
    h5 {
      font-weight: bold;
      font-size: 0.12rem;
      margin-bottom: 5px;
      color: #333;
    }
    p {
      line-height: 20px;
      font-size: 0.1rem;
      color: #666;
    }
  }
  .img-1 {
    margin-top: 0.29rem;
    width: 7.5rem;
    margin-bottom: 0.29rem;
  }
  ul {
    overflow: hidden;
    li {
      float: left;
      margin-bottom: 0.3rem;
      width: 3.6rem;
      &:nth-child(2n + 1) {
        margin-right: 0.3rem;
      }
      img {
        display: block;
        width: 3.6rem;
        height: 3.5rem;
        margin: 0 0 0.14rem;
      }
      .person-sum {
        overflow: hidden;
        h5 {
          text-align: left;
          margin-bottom: 10px;
          font-weight: bold;
          overflow: hidden;
          font-size: 0.12rem;
          color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        h6 {
          text-align: left;
          margin-bottom: 10px;
          font-weight: bold;
          font-size: 0.12rem;
          color: #333;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p {
          text-align: left;
          letter-spacing: 1px;
          overflow: hidden;
          display: -webkit-box;
          font-size: 0.1rem;
          color: #666;
          white-space: normal;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          line-clamp: 2;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
  }
}
</style>
