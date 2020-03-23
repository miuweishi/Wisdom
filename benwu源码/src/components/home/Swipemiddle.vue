<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="4.648148rem">
      <el-carousel-item v-for="item in pictwo" :key="item">
        <img :src="item" @click="goto()">
        <h4 class="small" >{{item}}</h4>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  
  data:function(){
    return{
     pictwo:[
        "https://img.yzcdn.cn/upload_files/2019/07/24/FpZcXfOd-YqwwomtYXWYWzCaHWPH.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/24/FghRTbP9ABn4W75jLf2M0iB4IDfR.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/24/FlRm0IfMCxxo_zPPhkuVpp49FcLK.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/24/FpjuCp4hm9_aCFfWPLjnwAHua3Gn.jpg!large.jpg"]
    }
  } ,
   methods: {
    goto(){
      this.$router.push({ path: "/sort"});
    }
  }   
};
</script>
<style>
img{
  height: 4.666667rem;
  width: 100%;
}
.block{
  transform: translateZ(0);
}
.el-carousel__item h4 {
  color: #475669;
  font-size: 0.175926rem;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__button {
  width: .311111rem !important;
  height: .048519rem !important;
}

.el-carousel__indicator--horizontal {
  padding: 4px 2px !important;
}
</style>