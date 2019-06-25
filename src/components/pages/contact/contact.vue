<!-- @format -->
<template>
  <div class="contact">
    <h3 class="title-text animated slideInUp">CONTACT US</h3>
    <div class="main">
      <div class="left">
        <div class="top animated slideInUp">
          <div>
            <p class="name">方案资讯</p>
            <p class="des">Design Consultation</p>
          </div>
          <div>
            <p class="name">商务合作</p>
            <p class="des">Bussiness Cooperation</p>
          </div>
          <div>
            <p class="name">媒体合作</p>
            <p class="des">Media Cooperation</p>
          </div>
        </div>
        <!--<img class="top" src="@/assets/images/contact/0.jpg" alt="">-->
        <div class="center animated slideInUp">
          <img class="qrcode" src="@/assets/images/contact/2.jpg" alt />
          <span>Wechat | 微信公众号</span>
          <p>墨缇斯文化</p>
        </div>
        <div class="bottom animated slideInUp">
          <p>TEL | 027-88317739</p>
          <p>ADD | 武汉市武昌区恒大世纪广场11层1101.1102</p>
        </div>
      </div>
      <img src="@/assets/images/contact/1.jpg" alt class="right animated slideInUp" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="less">
.contact {
  width: 7.5rem;
  .main {
    display: flex;
    .left {
      width: 3.75rem;
      height: 3.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top {
        display: flex;
        justify-content: space-around;
        margin-right: 20px;
        > div {
          padding: 0 20px;
          border-left: 1px solid #999;
          &:last-child {
            border-right: 1px solid #999;
          }
        }
        .name {
          padding-bottom: 0.02rem;
          line-height: 1;
          font-size: 0.12rem;
          color: #333;
        }
        .des {
          line-height: 1;
          font-size: 0.08rem;
          margin-top: 10px;
          color: #b3b3b3;
        }
      }
      .center {
        line-height: 1;
        text-align: center;
        font-size: 0.12rem;
        .qrcode {
          display: block;
          width: 1.46rem;
          margin: 0 auto 10px;
        }
        span {
          color: #b3b3b3;
        }
        p {
          padding-top: 10px;
          color: #333;
        }
      }
      .bottom {
        p {
          font-size: 0.13rem;
          margin-top: 10px;
          letter-spacing: 0.02rem;
        }
      }
    }
    .right {
      display: block;
      width: 3.67rem;
      height: 3.75rem;
    }
  }
}
h3 {
  margin-top: 20px;
  text-align: left;
}
@media screen and (max-width: 500px) {
  .contact {
    .main {
      flex-direction: column;
      align-items: center;
      .left {
        width: 6rem;
        margin-bottom: 20px;
        height: 5rem;
      }
      .right {
        width: 6rem;
        height: 6rem;
      }
    }
  }
}
</style>
