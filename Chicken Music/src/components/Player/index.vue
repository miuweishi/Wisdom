<template>
  <div class='player' v-if='songList.length'>
    <div v-if='fullScreen' class='big'>
    <!-- 头部 -->
     <div class='top'> 
       <span class="iconfont" @click='changeScreen(false)'>&#xe604;</span>
       <div class="title">{{currentSong.songname}}</div>
     </div>
     <!-- 背景 -->
     <div class='bg'>
       <img :src="currentSong.albumUrl" alt="">
     </div>
     <!-- 歌手 -->
     <p class='name'>{{currentSong.singer[0].name}}</p>
     <!-- 专辑图片 -->
     <div class='img'>
       <img :class='cd' :src="currentSong.albumUrl" alt="">
     </div>
     <!-- 歌词 -->
     <Lyric :seekTime = 'seekTime' :play='play'></Lyric>
     <!-- 进度条 -->
     <MyProgress
      :startTime = 'startTime'
      :endTime = 'endTime'
      @seekFa='seek'
     ></MyProgress>
     <!-- 播放 -->
     <div class="play">
        <span @click='changeLoop' class="loopList">{{loops[loop]}}</span>
        <span class="iconfont" @click='prev'>&#xe607;</span>
        <span class="iconfont" @click='togglePlay'>&#xe60f;</span>
        <span class="iconfont" @click='next'>&#xe606;</span>
        <span class="iconfont" style="font-size: 28px;">&#xe656;</span>
    </div>
     <!-- 播放器 -->
     <audio ref='audio' 
            @ended='ended'
            @canplay='canplay'
            @timeupdate="timeupdate"
            :src='currentSong.audioUrl'></audio>
    </div>
    <div v-else class='small' @click='changeScreen(true)'>播放页</div>
  </div>
</template>
<script>
import MyProgress from 'components/Progress'
import Lyric from 'components/Lyric'
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  components:{MyProgress,Lyric},
  data(){
    return{
      startTime:0,
      endTime:0,
      loops:['不循环','单曲循环','列表循环','随机循环'],
      play:false,
      seekTime:0
    }
  },
  computed:{
    ...mapState(['songList','fullScreen','loop']),
    ...mapGetters(['currentSong']),
    cd(){
      return this.play?'cd':'cd paused'
    }
  },
  methods:{
    ...mapMutations(['changeScreen','nextCurrendIndex','prevCurrendIndex','changeCurrendIndex','changeLoop']),
    togglePlay(){
      this.play=!this.play;
      
    },
    timeupdate(e){
      // console.log('歌曲播放',e)
      // 随着播放更新时间
      this.startTime = e.target.currentTime
    },
    canplay(){
      // 歌曲可以播放 
      this.audio = this.$refs.audio 
      console.log('可以播放了')
      this.audio.play()
      this.play = true
      console.log(this.audio.__proto__)
      // 获取歌曲的总时长 
      this.endTime = this.audio.duration

    },
    seek(s){
      console.log('父组件的方法')
      if(!this.audio){ return false} 
      // 更改播放的时间 
      this.audio.currentTime = s
      // 更改歌词的时间
      this.seekTime = s
    },
    ended(){
      this.play = false
      console.log('播放完毕',this.loop)
      switch (this.loop) {
        case 1:
          //  单曲循环 
          this.play = true
          this.audio.play()
          break;
        case 2:
          // 列表相当于下一曲
          this.nextCurrendIndex()
          break;
        case 3 :
          //随机播放
          let count = this.songList.length    
          let index =parseInt(Math.random()*count)
          console.log('随机',index)
          this.changeCurrendIndex(index)
        default:
          break;
      }
    },
    next(){
      //下一曲 
      this.nextCurrendIndex()
    },
    prev(){
      // 上一曲 
      this.prevCurrendIndex()
    }
  },
  watch:{
    play(newValue,oldValue){
      console.log('播放状态',newValue,this.audio)
      if(!this.audio) return false 
      //点击按钮 还是循环
   
      if(newValue){
        this.audio.play()
      }else{
        this.audio.pause()
      }
    },
    currentSong(newValue,oldValue){
        //  歌曲发生改变 应该自动播放
        console.log('歌曲发生改变')
        setTimeout(()=>{
          console.log(this.$refs.audio)
        this.$refs.audio.play()

        },500)
    }
  } 
}

</script>
<style lang="less" scoped>
@import '~style/index.less';
.player{
  color: #fff;
  .big{
    position: fixed;
    top:0px;
    bottom: 0px;
    left:0;
    right:0;
    background: #222;
    .top{
      display: flex;
      justify-content: center;
      align-items: center;
      .title{
        width: 263px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        text-align: center;
        margin:0px 20px;
      }
      span{
        font-size: 22px;
        padding: 9px;
      }
     
    }
    .name{
      font-size: @fs-s;
      text-align: center;
      padding: 10px;
    }
    .bg{
      position: absolute;
      z-index: -9;
      top: 0px;
      width: 100%;
      height: 100%;
      filter: blur(15px);
      img{
         width: 100%;
         height: 100%;
      }
    }
    .img{
      text-align: center;
      .w(375);
      padding: 20px;
      box-sizing: border-box;
      img{
          width: 85%;
          border-radius:50%;
          border: 10px solid #ccc; 
      }
      & .cd{
        animation: rotate 10s linear infinite;
      }
      & .paused{
        animation-play-state: paused;
      }
    }
  }
  .small{
    position: fixed;
    .w(375);
    bottom: 0px;
    height: 60px;
    background: rgb(58, 59, 58);
    font-size: 14px;
    line-height: 60px;
    text-align: center;
  }
  @keyframes rotate {
    0% {
     transform: rotate(0deg)
    }
    100%{
      transform: rotate(360deg)
    }
  }
  .play{
    width: 375px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .loopList{
    font-size: 16px;
    }

  }
  
}  
.iconfont{
  color: @yellow;
  // font-size: @fs-l;
  font-size: 36px;
}
</style>