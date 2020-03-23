<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="4.648148rem">
      <el-carousel-item v-for="item in picone" :key="item">
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
     picone:[
        "https://img.yzcdn.cn/upload_files/2019/10/16/FjgSfjXij9lDnin5yun6fbNTOzxU.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/08/08/FoZQGt8AIopnLvBcSfq22NDVSn77.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/24/FnTGdQ3eq4wtnMe_ycQY8B-XFhs-.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/11/08/FokudozAea4RuoiVedBdkHxYSsDN.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/11/FtT85Do2dvfWzosCfJ-CK4UxziEe.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/08/18/FkTSLeOXFQo_m1h6_XSN4T3iHlkB.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/08/08/Fl8kJpFbdK3IFahWMoe9S9NEDTwr.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/08/08/FvyK779xaiLWl_uXRlGlB2sDJMuk.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/10/FlVJ2Cx2pJ0pNVII532aGOvuG8XL.jpg!large.jpg"]
    }
  } ,
   methods: {
    goto(){
      this.$router.push({ path: "/sort"});
    }
  },  
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