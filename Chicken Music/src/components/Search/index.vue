<template>
  <div class='tab'>
    <div class="search-box">
      <i class="icon-search"></i>
      <input placeholder="搜索歌曲、歌手" class="box" >
      <i class="icon-dismiss" style="display: none;"></i>
    </div>
    <p class="hotsearch">热门搜索</p>
    <ul class="item">
      <li></li>
    </ul>
  </div>
</template>
<script>

import {getSearchData} from '../../api/api';

export default {
  data(){
    return{
      list:[]
    }
  },
  mounted(){
    getSearchData().then((res)=>{
      this.rankList = res.data.topList
      console.log(this.rankList);
      // Indicator.close();
      // this.list = 
    })
  }
}
</script>
<style lang="less" scoped>
.search-box{
  width: 335px;
  height: 40px;
  background: #3333;
  border-radius: 5px;
  margin:0px 20px;
  display: flex;
  align-items: center;
  .box{
    width: 273px;
    height: 18px;
    color: #fff;
    background: none;
    border: none;
    outline:none;
    margin: 0px 5px;
    padding: 0px 6px;
  }
}
.hotsearch{
  font-size: 14px;
  margin: 20px 20px;
  color:rgba(255,255,255,0.5)
}
.item{
  li{
    font-size: 14px;
    color:#fff;
    background: #3333;
    margin:0px 10px 20px 0px;
    padding:5px 10px;
  }
}
</style>