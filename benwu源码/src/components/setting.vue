//设置
<template>
  <div class="content of-hidden">
    <ul class="center-list">
      <li>
        <router-link :to="{ path: ''}">
          <div class="list-left">
            <el-avatar
              class="list-icon"
              icon="el-icon-top"
            ></el-avatar>
            <h2>推送设置</h2>
          </div>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </router-link>
      </li>

      <li>
        <router-link :to="{ path: ''}">
          <div class="list-left">
            <el-avatar
              class="list-icon"
              icon="el-icon-setting"
            ></el-avatar>
            <h2>清除缓存</h2>
          </div>
          <span class="el-icon-arrow-right"></span>
        </router-link>
      </li>

      <li>
        <router-link :to="{ path: ''}">
          <div class="list-left">
            <el-avatar
              class="list-icon"
              icon="el-icon-refresh"
            ></el-avatar>
            <h2>检查更新</h2>
          </div>
          <span class="el-icon-arrow-right"></span>
        </router-link>
      </li>
    </ul>

    <ul class="center-list">
      <li>
        <router-link :to="{ path: ''}">
          <div class="list-left">
            <el-avatar
              class="list-icon"
              icon="el-icon-s-custom"
            ></el-avatar>
            <h2>推荐给朋友</h2>
          </div>
          <span class="el-icon-arrow-right"></span>
        </router-link>
      </li>

      <li>
        <router-link :to="{ path: ''}">
          <div class="list-left">
            <el-avatar
              class="list-icon"
              icon="el-icon-s-grid"
            ></el-avatar>
            <h2>我的二维码</h2>
          </div>
          <span class="el-icon-arrow-right"></span>
        </router-link>
      </li>

      <li>
        <router-link :to="{ path: ''}">
          <div class="list-left">
            <el-avatar
              class="list-icon"
              icon="el-icon-star-on"
            ></el-avatar>
            <h2>给我们评分</h2>
          </div>
          <span class="el-icon-arrow-right"></span>
        </router-link>
      </li>

      <li>
        <router-link :to="{ path: ''}">
          <div class="list-left">
            <el-avatar
              class="list-icon"
              icon="el-icon-phone"
            ></el-avatar>
            <h2>关于我们</h2>
          </div>
          <span class="el-icon-arrow-right"></span>
        </router-link>
      </li>
    </ul>

    <el-form class="demo-ruleForm">
      <el-form-item>
        <el-button
          type="primary"
          @click="logout()"
        >退出登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true
    }
  },
  methods: {
    logout () {
      this.$confirm('是否退出当前账号?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$store.commit("logout");
        this.$router.push({ path: "/center" });
      }).catch(() => { });
    }
  }
}
</script>

<style src="../../public/css/center.css"></style>