//弹出来的搜索框
<template>
  <div class="wrap">
    <div class="searchbox">
      <span class="el-icon-search"></span>
      <input type="search" class="search" placeholder="搜索商品" v-model="value" />
      <span class="del" @click="back()">取消</span>
    </div>
   <sideserve></sideserve>
  </div>
</template>
<script>
import sideserve from "../home/sideserve";
export default {
  data:function(){
    return{
      value:'',
    }
  },
  methods:{
    back(){
       this.$router.push({name:'首页'})
    }
  },
  components:{
    sideserve
  }
};
</script>
<style scoped lang="scss">
.wrap {
  position: fixed;
  height: 19.796296rem;
  width: 100%;
  background: #fff;
  .searchbox {
    background: #f4f4fb;
    position: relative;
    padding: 0.138889rem 0.416667rem  0.138889rem;
    .el-icon-search {
      position: absolute;
      left: 0.740741rem;
      top: 0.65037rem;
      font-size: 0.37037rem;
      margin-right: 0.185185rem;
    }
    .search {
      width: 8.025926rem;
      height: 1.111111rem;
      padding-left: 1.018519rem;
      display: inline-block;
      border-radius: 0.092593rem;
    }
    .del {
      float: right;
      display: block;
      // width: 0.740741rem;
      height: 1.111111rem;
      line-height: 1.111111rem;
      color:#58bc58;
      font-size: .407778rem;
    }
  }
}
</style>>