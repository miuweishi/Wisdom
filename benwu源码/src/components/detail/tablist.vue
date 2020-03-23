<template>
  <div class="tablist">
    <!-- <div class="shangdetar">商品详情</div>
    <div class="jilu">成交记录</div>-->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="tabs">
      <el-tab-pane label="商品详情" name="first">
        <div class="cap-richtext">
          <img
            src="https://img.yzcdn.cn/upload_files/2019/10/15/FtSHCEOB8aEb20C0_ACzajJOXJ9_.jpg!large.jpg"
            alt
          />
          <img
            src="https://img.yzcdn.cn/upload_files/2019/10/15/FsIAzPMJsu5SUIrJtLis8MZYprCW.jpg!large.jpg"
            alt
          />
          <img
            src="https://img.yzcdn.cn/upload_files/2019/10/15/FoV2KgN_nCow8pnnip3jqj3DZnG5.jpg!large.jpg"
            alt
          />
          <img
            src="https://img.yzcdn.cn/upload_files/2019/10/15/FjwvAwIHgLnaeVP_jphM2P1V7bPB.jpg!large.jpg"
            alt
          />
          <img
            src="https://img.yzcdn.cn/upload_files/2019/10/15/FhHNcKkXIlyqiO34Sivg9QSAy6LA.jpg!large.jpg"
            alt
          />
          <img
            src="https://img.yzcdn.cn/upload_files/2019/10/15/FhKa_bc0UVCxPPB93atmb62MWrFW.jpg!large.jpg"
            alt
          />
          <img
            src="https://img.yzcdn.cn/upload_files/2019/10/15/Fnjcb0fJP8AzutHlUluRZk9NLcRb.jpg!large.jpg"
            alt
          />
          <img
            src="https://img.yzcdn.cn/upload_files/2019/10/15/Fj47C9ycb49O2u8QfyUtJ_GA3poi.jpg!large.jpg"
            alt
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="成交记录" name="second"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      window.console.log(tab, event);
    }
  }
};
</script>