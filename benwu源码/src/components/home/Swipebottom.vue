<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="4.648148rem">
      <el-carousel-item v-for="item in picthree" :key="item">
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
         picthree:[
        "https://img.yzcdn.cn/upload_files/2019/07/24/FttaD0N6zBaP8OIJwdFdDxLBkbV0.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/24/FhzBmbblPie_qtHP-pETCB20cdtf.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/24/FgcF6Jwa8n7T4EBBDThJDYOPI4Md.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/24/Flc41udUln7EEe34HUfJrrXB8jI5.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/24/Fm4NmQuRYs_VLUDemBfMk9pPgf0a.jpg!large.jpg",
        "https://img.yzcdn.cn/upload_files/2019/07/24/Ftzf86DbwS-PGs0BiClinwGsFIis.jpg!large.jpg"
        ]
    }
  },
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