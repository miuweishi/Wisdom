// 个人中心
<template>
  <div class="user-center">
    <header class="center-header">
      <div
        @click="login"
        v-if="!this.$store.state.login.user"
      >
        <el-avatar
          class="user-img"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576732923364&di=ac8212b8a73bcc30ad81c9099738fd30&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F37%2F09%2F22573c3a831082c.jpg"
        ></el-avatar>
      </div>

      <div v-else>
        <el-avatar
          class="user-img"
          :src="this.$store.state.login.user.imgurl"
        ></el-avatar>
      </div>

      <h3
        v-if="!this.$store.state.login.user"
        @click="login"
      >请登录</h3>

      <h3 v-else>{{ this.$store.state.login.user.uname }}</h3>
    </header>
    <main class="center-main">
      <div class="order-part">
        <router-link
          class="order-title"
          :to="{ path: '/myOrder'}"
        >
          <h2>我的订单</h2>
          <span class="el-icon-arrow-right"></span>
        </router-link>
        <div class="order-list">
          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-bank-card"></span>
            <h2>待付款</h2>
          </a>

          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-s-order"></span>
            <h2>待接单</h2>
          </a>

          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-takeaway-box"></span>
            <h2>待发货</h2>
          </a>

          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-truck"></span>
            <h2>已发货</h2>
          </a>

          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-s-claim"></span>
            <h2>已完成</h2>
          </a>
        </div>
      </div>

      <ul class="center-list">
        <li>
          <router-link :to="{ path: ''}">
            <div class="list-left">
              <el-avatar
                class="list-icon"
                icon="el-icon-service"
              ></el-avatar>
              <h2>我的客服</h2>
            </div>
            <span class="el-icon-arrow-right"></span>
          </router-link>
        </li>

        <li>
          <router-link :to="{ path: '/myOrder'}">
            <div class="list-left">
              <el-avatar
                class="list-icon"
                icon="el-icon-document"
              ></el-avatar>
              <h2>我的订单</h2>
            </div>
            <span class="el-icon-arrow-right"></span>
          </router-link>
        </li>

        <li>
          <router-link :to="{ path: '/info'}">
            <div class="list-left">
              <el-avatar
                class="list-icon"
                icon="el-icon-user"
              ></el-avatar>
              <h2>我的资料</h2>
            </div>
            <span class="el-icon-arrow-right"></span>
          </router-link>
        </li>

        <li>
          <router-link :to="{ path: ''}">
            <div class="list-left">
              <el-avatar
                class="list-icon"
                icon="el-icon-present"
              ></el-avatar>
              <h2>我的礼品</h2>
            </div>
            <span class="el-icon-arrow-right"></span>
          </router-link>
        </li>

        <li>
          <router-link :to="{ path: ''}">
            <div class="list-left">
              <el-avatar
                class="list-icon"
                icon="el-icon-goods"
              ></el-avatar>
              <h2>我的赠品</h2>
            </div>
            <span class="el-icon-arrow-right"></span>
          </router-link>
        </li>

        <li>
          <router-link :to="{ path: ''}">
            <div class="list-left">
              <el-avatar
                class="list-icon"
                icon="el-icon-postcard"
              ></el-avatar>
              <h2>销售员中心</h2>
            </div>
            <span class="el-icon-arrow-right"></span>
          </router-link>
        </li>
      </ul>

      <ul class="center-list">
        <li>
          <router-link :to="{ path: '/setting'}">
            <div class="list-left">
              <el-avatar
                class="list-icon"
                icon="el-icon-setting"
              ></el-avatar>
              <h2>设置</h2>
            </div>
            <span class="el-icon-arrow-right"></span>
          </router-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import qs from "qs";
export default {
  components: {},
  methods: {
    login () {
      if (!this.$store.state.login.user) {
        this.$router.push("/login");
      }
    }
  },
  beforeCreate () {
    if (!this.$store.state.login.user) {
      let storage = JSON.parse(localStorage.getItem("authorization"));
      if (storage) {
        this.$axios
          .post("http://47.112.39.163:1912/users/verify", qs.stringify(storage))
          .then(res => {
            if (res.data.result) {
              //token没有失效，直接跳转
              this.$store.state.login.user = res.data.data[0];
            }
          });
      }
    }
  }
};
</script>

<style src="../../public/css/center.css"></style>
