<template>
  <div class="order-box">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">全部</el-menu-item>

      <el-menu-item index="2">待付款</el-menu-item>

      <el-menu-item index="3">待接单</el-menu-item>
      <el-menu-item index="4">待发货</el-menu-item>
      <el-menu-item index="5">已发货</el-menu-item>
      <el-menu-item index="6">已完成</el-menu-item>
    </el-menu>

    <div class="order-list">
      <component
        :is="order"
        :kind="kind"
      ></component>
    </div>
  </div>
</template>

<script>
import order from './orderList.vue';
export default {
  data () {
    return {
      kind: '',
      list: ['', '待付款', '待接单', '待发货', '已发货', '已完成'],
      order: order,
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect (key) {
      this.kind = this.list[key - 1];
    }
  },
  components: {
    order
  }
}
</script>

<style scoped>
.el-menu-demo {
  display: flex;
}
.el-menu-item {
  padding: 0;
  flex: 1;
  text-align: center;
}
.order-box {
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.order-list {
  flex: 1;
  overflow-y: auto;
  background-color: #f3f3f3;
}
</style>