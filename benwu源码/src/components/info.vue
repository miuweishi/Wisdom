//个人资料
<template>
  <div class="content">
    <router-link :to="{path:''}">
      <div class="item-label">头像</div>
      <div class="item-right">
        <img :src="this.$store.state.login.user.imgurl">
      </div>
    </router-link>

    <router-link :to="{path:'/changeName'}">
      <div class="item-label">昵称</div>
      <div class="item-right">
        <p>{{this.$store.state.login.user.uname}}</p>
        <span class="el-icon-arrow-right"></span>
      </div>
    </router-link>

    <router-link :to="{path:'/changePWD'}">
      <div class="item-label">密码</div>
      <div class="item-right">
        <p>******</p>
        <span class="el-icon-arrow-right"></span>
      </div>
    </router-link>

    <router-link :to="{path:''}">
      <div class="item-label">邮箱</div>
      <div class="item-right">
        <p>{{this.$store.state.login.user.email}}</p>
        <span class="el-icon-arrow-right"></span>
      </div>
    </router-link>

    <router-link :to="{path:''}">
      <div class="item-label">签名</div>
      <div class="item-right">
        <p>{{this.$store.state.login.user.word}}</p>
        <span class="el-icon-arrow-right"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style src="../../public/css/center.css"></style>