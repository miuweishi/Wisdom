// 头部
<template>
  <el-header height="1.175926rem">
    <span
      v-if="leftShow.includes(this.$route.path)"
      class="el-icon-shopping-bag-2" @click="goto()"
    ></span>
    <span v-else-if="this.$route.path=='/cart'"></span>
    <span
      v-else
      class="el-icon-arrow-left"
      @click="goBack"
    ></span>
    <h2>{{this.$route.name}}</h2>
    <span
      v-if="leftShow.includes(this.$route.path)"
      class="el-icon-chat-dot-round"
    ></span>
    <span v-else></span>
  </el-header>
</template>

<script>

export default {
  name: "appHeader",
  data: function () {
    return {
      leftShow: ['/home', '/sort']
    }
  },
  computed: {
    activeIndex () {
      return this.$store.state.path.currntIndex;
    }
  },
  methods: {
    goBack () {
      if (this.$route.meta.previousPage) {
        this.$router.push({ path: this.$route.meta.previousPage });
      } else { this.$router.back(); }

    },
    goto(){
      this.$router.push({path:"sort"})
    }
  },
  components: {

  }
};
</script>

<style src="../../public/css/container.css"></style>