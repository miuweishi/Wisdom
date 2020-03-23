<template>
  <div class="goodbutton clearfix">
    <div class="checkall fl">
      <el-checkbox v-model="checked" class="checkbox">全选</el-checkbox>
    </div>
    <div class="total fl">
      <p>
        <span>合计：</span>
        <span class="price">￥1096.00</span>
      </p>
      <span class="fr yunfei">不含运费</span>
    </div>
    <div class="type fr">
      <el-button type="danger" round class="jiesuan">结算</el-button>
      <el-button type="danger" round class="del" style="display:none">删除</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      num: 1
    };
  }
};
</script>