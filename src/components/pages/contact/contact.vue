<!-- @format -->
<template>
  <div class="contact">
    <h3>CONTACT US</h3>
    <div class="main">
      <div class="left">
        <div class="top">
          <div>
            <p class="name">方案资讯</p>
            <p class="des">Design Consultation</p>
          </div>
          <div>
            <p class="name">商务合作</p>
            <p class="des">Bussiness Cooperation</p>
          </div>
        </div>
        <div class="center">
          <p>TEA | 027-88317739</p>
          <p>ADD | 武汉市武昌区恒大世纪广场11层1101.1102</p>
        </div>
        <div class="bottom">
          <img src="@/assets/images/contact/2.jpg" alt />
          <p>微信公众号</p>
        </div>
      </div>
      <img src="@/assets/images/contact/1.jpg" alt class="right" />
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
    padding-top: 20px;
    .left {
      width: 3.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 3.75rem;
      .top {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .name {
          font-size: 0.12rem;
          font-weight: bold;
        }
        .des {
          font-size: 0.1rem;
          margin-top: 10px;
        }
      }
      .center {
        font-size: 0.15rem;
        font-weight: Bold;
        p {
          margin-bottom: 10px;
        }
      }
      .bottom {
        p {
          font-size: 0.12rem;
          font-weight: bold;
        }
      }
    }
    .right {
      width: 3.75rem;
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
        height: 7rem;
      }
      .right {
        width: 6rem;
        height: 6rem;
      }
    }
  }
}
</style>
