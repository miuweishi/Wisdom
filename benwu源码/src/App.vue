<template>
  <div id="app">
    <el-container>
      <app-header v-show="!this.$store.state.path.headerHidden.includes(this.$route.path)"></app-header>

      <el-main>
        <router-view />
      </el-main>

      <app-footer v-show="this.$store.state.path.footerShow.includes(this.$route.path)"></app-footer>
    </el-container>
  </div>
</template>

<script>
import appHeader from "./components/appHeader.vue";
import appFooter from "./components/appFooter.vue";

export default {
  name: "app",
  data: function () {
    return {};
  },
  methods: {
  },
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style>
#app,
.el-container {
  height: 100%;
  flex-direction: column !important;
}
.el-main {
  width: 100%;
  flex: 1;
  padding: 0 !important;
  overflow-y: auto;
}
</style>
