// 固定在每一个页面的加号
<template>
  <div class="fix_add">
    <div class="add" @click="show()" v-show="!isShow">
      <p class="bg">
        <span class="el-icon-plus"></span>
      </p>
    </div>
    <transition name="show">
      <div class="showlist" v-show="isShow" @click="hidden()">
        <p class="bgshow">
          <span class="el-icon-close"></span>
        </p>
        <div class="list">
          <p class="bg1">
            <span class="el-icon-user"></span>
          </p>
          <p class="bg2">
            <span class="el-icon-share"></span>
          </p>
          <p class="bg3">
            <span class="el-icon-shopping-cart-1" @click="goto()"></span>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hidden() {
      this.isShow = false;
    },
    goto(){
      this.$router.push({path: "/cart"})
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.fix_add {
  .show-enter, .show-leave-to{
    opacity: 0;
  }
  .show-enter-active, .show-leave-active {
  transition: opacity .8s;
}
  .add {
    .bg {
      position: fixed;
      right: 0.277778rem;
      bottom: 3.177778rem;
      width: 1.388889rem;
      height: 1.388889rem;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0.036296rem 0.036296rem 0.078519rem #ccc,
        -0.036296rem -0.036296rem 0.078519rem rgb(235, 235, 235);
      .el-icon-plus {
        position: absolute;
        left: 26%;
        top: 29%;
        font-size: 0.689259rem;
        color: #999999;
        font-weight: bold;
      }
    }
  }
  .showlist {
    position: fixed;
    right: 0.277778rem;
    bottom: 4.577778rem;
    .bgshow {
      position: fixed;
      right: 0.277778rem;
      bottom: 3.177778rem;
      width: 1.388889rem;
      height: 1.388889rem;
      background: rgb(153, 152, 152);
      border-radius: 50%;
      box-shadow: 0.036296rem 0.036296rem 0.078519rem rgb(136, 136, 136),
        -0.036296rem -0.036296rem 0.078519rem rgb(136, 136, 136);
      .el-icon-close {
        position: absolute;
        left: 26%;
        top: 29%;
        font-size: 0.689259rem;
        color: #666666;
        font-weight: bold;
      }
    }
    .bg1 {
      position: fixed;
      right: 0.277778rem;
      bottom: 4.877778rem;
      width: 1.388889rem;
      height: 1.388889rem;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0.036296rem 0.036296rem 0.078519rem #ccc,
        -0.036296rem -0.036296rem 0.078519rem rgb(235, 235, 235);
      .el-icon-user {
        position: absolute;
        left: 26%;
        top: 29%;
        font-size: 0.689259rem;
        color: #999999;
      }
    }
    .bg2 {
      position: fixed;
      right: 0.277778rem;
      bottom: 6.65078rem;
      width: 1.388889rem;
      height: 1.388889rem;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0.036296rem 0.036296rem 0.078519rem #ccc,
        -0.036296rem -0.036296rem 0.078519rem rgb(235, 235, 235);
      .el-icon-share {
        position: absolute;
        left: 26%;
        top: 29%;
        font-size: 0.689259rem;
        color: #999999;
      }
    }
    .bg3 {
      position: fixed;
      right: 0.277778rem;
      bottom: 8.397778rem;
      width: 1.388889rem;
      height: 1.388889rem;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0.036296rem 0.036296rem 0.078519rem #ccc,
        -0.036296rem -0.036296rem 0.078519rem rgb(235, 235, 235);
      .el-icon-shopping-cart-1 {
        position: absolute;
        left: 26%;
        top: 29%;
        font-size: 0.689259rem;
        color: #999999;
      }
    }
  }
}
</style>
