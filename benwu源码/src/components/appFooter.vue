// 底部栏
<template>
  <el-footer height="1.268519rem">
    <div
      v-for="(item, index) in this.$store.state.path.route"
      :key="item.path"
      class="link-box"
    >
      <router-link
        class="footer-link"
        :class="{ active: item.path == activeIndex }"
        :to="item.path"
      >
        <span class="footer-icon" :class="tabsIcon[index]"></span>
        {{ item.name }}</router-link
      >
    </div>
  </el-footer>
</template>

<script>
export default {
  name: "appFooter",
  data: function() {
    return {
      tabsIcon: [
        "el-icon-s-home",
        "el-icon-menu",
        "el-icon-shopping-cart-2",
        "el-icon-service"
      ]
    };
  },
  computed: {
    activeIndex() {
      return this.$route.path;
    }
  },
  components: {},
  methods: {}
};
</script>

<style src="../../public/css/container.css"></style>
