<template>
  <div class='header'>
    <!-- 如果图片在public目录直接用根路径 -->
    <img src="/chicken.png" alt="">
    <span>Miu MUSIC</span>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
@import '../../style/index.less';
.header{
  color: @yellow;
  font-size:@fs-l;
  display: flex;
  justify-content: center;
  align-items: center;
  .w(375);
  height: 44px;
  img{
    width: 20px;
    height: 20px;
    padding-right:8px;
  }
}
</style>