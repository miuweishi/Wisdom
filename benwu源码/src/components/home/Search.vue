<template>
  <div>
    <div class="searchbox" v-show="isok">
      <span class="el-icon-search"></span>
      <input type="search" class="search" placeholder="搜索商品" v-model="value" @click="jump()" />
    </div>
  </div>
</template>
<script>


export default {
  data: function() {
    return {
      value: "",
      isok: true
    };
  },
  methods: {
    jump() {
      this.isok = !this.isok;
      this.$router.push({ name: "搜索" });
    }
  },
  components:{
   
  }
};
</script>
<style scoped>
.searchbox {
  position: relative;
  padding: 0.138889rem 0.416667rem 0.694444rem;
}
.el-icon-search {
  position: absolute;
  left: 0.740741rem;
  top: 0.55037rem;
  font-size: 0.37037rem;
  margin-right: 0.185185rem;
}
.search {
  width: 9.166667rem;
  height: 1.111111rem;
  padding-left: 1.018519rem;
  display: inline-block;
  border-radius: 0.092593rem;
}
</style>>

