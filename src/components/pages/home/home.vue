<!-- @format -->

<template>
  <div class="home">
    <div class="box box-0" @click="goToAbout">
      <div class="left-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"><img
        src="@/assets/images/home/1-1.jpg"></div>
      <div class="right-c">
        <div class="r-top">
          <div class="rl-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"><img
            class="l-img" src="@/assets/images/home/1-2.jpg"></div>
          <div class="rr-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"><img
            class="r-img" src="@/assets/images/home/1-3.jpg"></div>
        </div>
        <div class="r-middle slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
          <h5 class="text-c">和你一起惊艳世界</h5>
          <img src="@/assets/images/home/1-4.jpg"></div>
        <div class="r-bottom">
          <div class="slice rl-c" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"><img
            class="l-img" src="@/assets/images/home/1-5.jpg"></div>
          <div class="slice rr-c" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"><img
            class="r-img" src="@/assets/images/home/1-6.jpg"></div>
        </div>
      </div>
    </div>
    <!--SERVICE-->
    <h3
      class="title-text"
      @mouseover="hoverTitle('services')"
      @mouseout="noHoverTitle('services')"
      ref="services"
    >
      SERVICES
    </h3>
    <div class="box box-1">
      <ul class="case-list">
        <li v-for="(item, index) in caseList"
            :style="{'background-image':'url('+require('@/assets/images/home/2-' + item.number + '.jpg')+')','-webkit-animation-delay' : index/10+'s','animation-delay' : index/10+'s'}"
            :key="item.number"
            @click="goToService(index)"
            v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
          <div class="txt-con">
            <h5>{{item.title}}</h5>
            <p>{{item.desc1}}</p>
            <p class="lp">{{item.desc2}}</p>
          </div>
        </li>
      </ul>
    </div>
    <!--OUR WORK-->
    <h3
      class="title-text"
      @mouseover="hoverTitle('work')"
      @mouseout="noHoverTitle('work')"
      ref="work"
    >
      OUR WORK
    </h3>
    <div class="box box-2">
      <div class="col col-1" @click="goToWork(0)">
        <div class="top-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"><img
          src="@/assets/images/home/3-1.jpg"></div>
        <div class="bottom-c">
          <div class="left-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <img src="@/assets/images/home/3-2.jpg"></div>
          <div class="middle-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <img src="@/assets/images/home/3-3.jpg"></div>
          <div class="right-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <div class="txt-c">
              <h5>Name | 项目名称</h5>
              <p>UR COLLECTION | 奥普</p>
            </div>
            <img src="@/assets/images/home/3-4.jpg">
          </div>
        </div>
      </div>
      <div class="col col-2" @click="goToWork(1)">
        <div class="left-c">
          <div class="l-top slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <img src="@/assets/images/home/4-1.jpg"></div>
          <div class="l-middle">
            <div class="left-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
              <img src="@/assets/images/home/4-2.jpg"></div>
            <div class="right-c slice"
                 v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"><img
              src="@/assets/images/home/4-3.jpg"></div>
          </div>
          <div class="l-bottom">
            <div class="left-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
              <img src="@/assets/images/home/4-4.jpg"></div>
            <div class="right-c slice"
                 v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"><img
              src="@/assets/images/home/4-5.jpg"></div>
          </div>
        </div>
        <div class="right-c">
          <div class="l-top slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <img src="@/assets/images/home/4-6.jpg"></div>
          <div class="l-middle slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <img src="@/assets/images/home/4-7.jpg"></div>
          <div class="l-bottom slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <div class="txt-c">
              <h5>Name | 项目名称</h5>
              <p>UR COLLECTION | 邮储</p>
            </div>
            <img src="@/assets/images/home/4-8.jpg">
          </div>
        </div>
      </div>
      <div class="col col-3">
        <div class="left-c">
          <div class="l-top slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <img src="@/assets/images/home/5-1.jpg"></div>
          <div class="l-middle">
            <div class="left-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
              <img src="@/assets/images/home/5-2.jpg"></div>
            <div class="right-c slice"
                 v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"><img
              src="@/assets/images/home/5-3.jpg"></div>
          </div>
          <div class="l-bottom slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
            <img src="@/assets/images/home/5-4.jpg"></div>
        </div>
        <div class="right-c slice" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
          <div class="txt-c">
            <h5>Name | 项目名称</h5>
            <p>UR COLLECTION | 五粮液</p>
          </div>
          <img src="@/assets/images/home/5-5.jpg">
        </div>
      </div>
    </div>
    <!--CUSTOMER-->
    <h3
      class="title-text"
      @mouseover="hoverTitle('customer')"
      @mouseout="noHoverTitle('customer')"
      ref="customer"
    >
      CUSTOMER
    </h3>
    <div class="box box-3">
      <ul class="logo-list">
        <li v-for="(item, index) in 9"
            :style="{'background-image':'url('+require('@/assets/images/home/6-' + (index+1) + '.jpg')+')','-webkit-animation-delay' : index/10+'s','animation-delay' : index/10+'s'}"
            :key="index" class="slice"
            v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></li>
      </ul>
    </div>
    <!--CONTACT US-->
    <h3
      class="title-text"
      @mouseover="hoverTitle('contact')"
      @mouseout="noHoverTitle('contact')"
      ref="contact"
    >
      CONTACT US
    </h3>
    <div class="box box-4">
      <div class="slice" @click="goToContact"
           v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
        <img
          src="@/assets/images/home/5.jpg"
          class="clickImg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { addClass, removeClass } from '@/assets/js/common'

export default {
  props: {},
  components: {},
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
          desc2: '品牌创建：品牌形象丨品牌理念',
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
      ],
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0.2, 0.75] // [0.25, 0.75] if you want a 25% offset!
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onWaypoint({ el, going, direction, _entry }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        //          console.log('waypoint going in!') //激活-出现了
        el.classList.add('animated')
        el.classList.add('slideInUp')
      }
      /*if (going === this.$waypointMap.GOING_OUT) {
          console.log('waypoint going out!')
        }
        if (direction === this.$waypointMap.DIRECTION_TOP) {
          console.log('waypoint going top!')
          el.classList.add('animated')
          el.classList.add('slideInUp')
        }*/
      /*if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
                          console.log('waypoint going bottom!')
                        }*/
    },
    hoverTitle(e) {
      let dom = this.$refs[e]
      addClass(dom, 'shadow')
    },
    noHoverTitle(e) {
      let dom = this.$refs[e]
      removeClass(dom, 'shadow')
    },
    goToService(index) {
      this.$router.push({ name: 'serviceDetail', query: { index } })
    },
    goToWork(index) {
      this.$router.push({ name: 'workDetail', query: { index } })
    },
    goToAbout() {
      this.$router.push({ name: 'about' })
    },
    goToContact() {
      this.$router.push({ name: 'contact' })
    }
  }
}
</script>
<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7.5rem;
  .img-logo {
    display: block;
    width: 3.95rem;
    height: 1rem;
  }
  .title-text {
    cursor: pointer;
  }
  .box {
    position: relative;
    width: 7.5rem;
    overflow: hidden;
    display: block;
    .left-c {
      float: left;
    }
    .right-c {
      float: right;
    }
    .slice {
      position: relative;
      cursor: pointer;
      &:before {
        opacity: 0;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        transition: all 0.3s ease;
      }
    }
    &.box-2:hover {
      .slice:before {
        opacity: 0;
      }
      .text-c {
        opacity: 0;
      }
    }
    &:hover {
      .slice:before {
        opacity: 1;
      }
      .text-c {
        opacity: 1;
      }
    }
  }
  .box-0 {
    margin-bottom: 0.28rem;
    .left-c {
      width: 2.34rem;
      height: 3.51rem;
      img {
        width: 2.34rem;
        height: 3.51rem;
      }
    }
    .right-c {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 5rem;
      height: 3.51rem;
    }
    .r-top {
      overflow: hidden;
      .rl-c {
        float: left;
        width: 2.72rem;
        height: 1.12rem;
      }
      .rr-c {
        float: right;
        width: 2.13rem;
        height: 1.12rem;
      }
      .l-img {
        width: 2.72rem;
        height: 1.12rem;
      }
      .r-img {
        width: 2.13rem;
        height: 1.12rem;
      }
    }
    .r-middle {
      width: 5rem;
      height: 0.98rem;
      img {
        width: 5rem;
        height: 0.98rem;
      }
    }
    .text-c {
      opacity: 0;
      position: absolute;
      height: 0.98rem;
      line-height: 0.98rem;
      text-indent: 20px;
      z-index: 2;
      font-size: 0.28rem;
      color: #fff;
      transition: all 0.3s ease;
    }
    .r-bottom {
      overflow: hidden;
      .rl-c {
        float: left;
        width: 2.72rem;
        height: 1.1rem;
      }
      .rr-c {
        float: right;
        width: 2.13rem;
        height: 1.1rem;
      }
      .l-img {
        width: 2.72rem;
        height: 1.1rem;
      }
      .r-img {
        width: 2.13rem;
        height: 1.1rem;
      }
    }
  }
  .box-1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0.14rem;
    .case-list {
      overflow: hidden;
      li {
        float: left;
        cursor: pointer;
        width: 3.67rem;
        height: 2rem;
        margin-bottom: 0.14rem;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        &:hover {
          .txt-con {
            opacity: 1;
          }
        }
        &:nth-child(2n + 1) {
          margin-right: 0.14rem;
        }
      }
      .txt-con {
        position: relative;
        opacity: 0;
        width: 100%;
        height: 100%;
        text-align: left;
        color: #f2f2f2;
        background: rgba(0, 0, 0, 0.4);
        transition: all 0.3s ease;
        h5 {
          position: absolute;
          bottom: 0.5rem;
          left: 0.14rem;
          line-height: 1;
          font-size: 0.13rem;
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
  }
  .box-2 {
    margin-bottom: 0.28rem;
    .txt-c {
      opacity: 0;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      text-align: left;
      color: #f2f2f2;
      background: rgba(0, 0, 0, 0.4);
      transition: all 0.3s ease;
      h5 {
        position: absolute;
        bottom: 0.3rem;
        right: 0.16rem;
        line-height: 1;
        font-size: 0.13rem;
      }
      p {
        position: absolute;
        bottom: 0.16rem;
        right: 0.16rem;
        line-height: 1;
        font-size: 0.1rem;
      }
    }
    .col:hover {
      .slice:before {
        opacity: 1;
      }
      .txt-c {
        opacity: 1;
      }
    }
  }
  .box-3 {
    margin-bottom: 0.14rem;
    .logo-list {
      overflow: hidden;
      li {
        cursor: default;
        float: left;
        width: 2.4rem;
        height: 1.2rem;
        margin-bottom: 0.14rem;
        margin-right: 0.14rem;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
  .box-4 {
    margin-bottom: 0.14rem;
    img {
      display: block;
      margin-bottom: 0;
    }
  }

  .col-1 {
    overflow: hidden;
    margin-bottom: 0.28rem;
    .top-c {
      width: 7.5rem;
      height: 2.24rem;
      img {
        width: 7.5rem;
        height: 2.24rem;
      }
    }
    .bottom-c {
      display: flex;
      justify-content: space-between;
      > div {
        width: 2.4rem;
        height: 1.12rem;
        margin-top: 0.14rem;
      }
      img {
        width: 2.4rem;
        height: 1.12rem;
      }
    }
  }
  .col-2 {
    overflow: hidden;
    margin-bottom: 0.28rem;
    .left-c {
      height: 3.51rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .l-top {
        width: 4.95rem;
        height: 1.12rem;
        img {
          width: 4.95rem;
          height: 1.12rem;
        }
      }
      .l-middle {
        overflow: hidden;
        .left-c,
        .right-c {
          width: 2.4rem;
          height: 0.96rem;
          img {
            width: 2.4rem;
            height: 0.96rem;
          }
        }
      }
      .l-bottom {
        overflow: hidden;
        .left-c,
        .right-c {
          width: 2.4rem;
          height: 1.12rem;
          img {
            width: 2.4rem;
            height: 1.12rem;
          }
        }
      }
    }
    .right-c {
      height: 3.51rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .l-top {
        width: 2.4rem;
        height: 1.12rem;
        img {
          width: 2.4rem;
          height: 1.12rem;
        }
      }
      .l-middle {
        width: 2.4rem;
        height: 0.96rem;
        img {
          width: 2.4rem;
          height: 0.96rem;
        }
      }
      .l-bottom {
        width: 2.4rem;
        height: 1.12rem;
        img {
          width: 2.4rem;
          height: 1.12rem;
        }
      }
    }
  }
  .col-3 {
    overflow: hidden;
    .left-c {
      height: 3.51rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .l-top {
        width: 4.95rem;
        height: 0.96rem;
        img {
          width: 4.95rem;
          height: 0.96rem;
        }
      }
      .l-middle {
        overflow: hidden;
        .left-c,
        .right-c {
          width: 2.4rem;
          height: 1.12rem;
          img {
            width: 2.4rem;
            height: 1.12rem;
          }
        }
      }
      .l-bottom {
        width: 4.95rem;
        height: 1.12rem;
        img {
          width: 4.95rem;
          height: 1.12rem;
        }
      }
    }
    .right-c {
      width: 2.4rem;
      height: 3.51rem;
      img {
        width: 2.4rem;
        height: 3.51rem;
      }
    }
  }
}
</style>
