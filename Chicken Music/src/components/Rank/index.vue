<template>
  <div class='tab'>
     <div class="wrapper" ref='wrapper'>
       <ul>
         <li class="item" v-for="(item,index) in rankList" :key="index" @click="go(item.id)">
           <div class="icon"><img v-lazy="item.picUrl" alt=""></div>
           <ul class="songlist">
             <li class="song" v-for="(songItem,songIndex) in item.songList" :key="songIndex">
                <span>{{songIndex +1}}</span>
                <span class="songname">{{songItem.songname}}-{{songItem.singername}}</span>
             </li>
           </ul>
         </li>
       </ul>
     </div>
     <!--嵌套路由 -->
      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <router-view></router-view>
      </transition>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui';
import {getRankData} from '../../api/api';
import BS from  'better-scroll';
import { log } from 'util';
export default {
   data(){
    return{
      rankList:[]
    }
  },
 
  methods:{
    go(id){
      console.log('11111')
      this.$router.push(`/rank/${id}`)
    },
    initBs(){
      let wrapper = this.$refs.wrapper
      //开启下拉刷新
      this.bs= new BS(wrapper,{
        pullDownRefresh: {
          threshold: 50,
          stop: 20
        },
        pullUpLoad: {
          threshold: 50
        },
        mouseWheel: true,
        click:true
      })
      //监听下拉刷新
      this.bs.on('pullingDown',()=>{
        console.log('下拉刷新')
        // 上次下拉刷新已经结束 可以开始下一次
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        getRankData().then((res)=>{
          Indicator.close()
          this.rankList = res.data.list
          this.bs.finishPullDown()
        })
      })
      // 监听上拉加载
      this.bs.on('pullingUp',()=>{
        console.log('上拉加载 请求下一页的数据')
        // 上一次上拉加载已经结束可以开启下一次
        this.bs.finishPullUp()
      })
    }
  },
  mounted(){
    // console.log('推荐挂载')
    // 加载动画
    getRankData().then((res)=>{
      this.rankList = res.data.topList
      console.log(this.rankList);
      Indicator.close();
    })
    this.initBs() 
  },
  activated(){
    console.log('缓存组件激活')
  },
  deactivated(){
    console.log('缓存组件失活')
  },
  destroyed(){
    console.log('推荐销毁')
  }
}
</script>
<style lang="less" scoped>
ul,li{
  list-style: none;
}
.tab{
  .wrapper{
    position: fixed;
    top:88px;
    bottom: 0px;
    left:0px;
    right: 0px;
    overflow: hidden;
  ul{  
    .item{
    width: 335px;
    height: 100px;
    margin: 0px 20px;
    padding:20px 0px ;
      .icon{
        width: 100px;
        height: 100px;
        float: left;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .songlist{
        float: right;
        width: 235px;
        height: 100px;
        background: #333333;
        
        .song{
          padding:0px 20px;
          font-size: 12px;
          color:rgba(255,255,255,0.5);
          display: flex;
          align-content: center;
          justify-content: flex-start;
          width: 195px;
          height: 26px;
          line-height: 26px;
          .songname{
            white-space:nowrap; 
            overflow:hidden; 
            text-overflow:ellipsis;
          }
        }
      }
    }
  } 
}
}



</style>