<template>
  <div class="detail">
    <div class="pageheader clearfix">
      <i class="el-icon-arrow-left fl" @click="gotoblack"></i>
      <h3 class="title fl">本屋创品学生专属纯棉三件套</h3>
    </div>
    <div class="swiper">
      <img :src="newdata.url" alt />
    </div>
    <div class="module-unit">
      <div class="unitcon">
        <p class="price">
          ￥
          <span v-text="newdata.price"></span>
        </p>
        <div class="title">
          <h3 class="goods-title__main" v-text="newdata.title"></h3>
          <h3 class="goods-title__sub" v-text="newdata.title2"></h3>
        </div>
        <div class="share">
          <span>
            <i class="el-icon-share"></i>
          </span>
          <span>分享</span>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div>
        <div class="m-promotion clearfix">
          <div class="carriage fl">
            <span>运费</span>
            <span class="yunfei">免运费</span>
          </div>
          <div class="sold-num fr">
            已售
            <span v-text=" newdata.soldout"></span>|
            剩余
            <span v-text="newdata.kucun"></span>
          </div>
        </div>
        <div class="m-group">
          <div class="stages">
            <span>
              <i class="el-icon-s-order"></i> 分期付款
            </span>
            <button>3分期</button>
          </div>
          <div class="serve clearfix">
            <div class="serve-l fl">
              <span>服务</span>
              <span>服务后结算.快递发货</span>
            </div>
            <div class="fr">
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
        <!-- 选择类型 -->
        <fromms></fromms>
        <div class="m-shop"></div>
        <div class="shop">
          <div class="shopcon clearfix">
            <div class="fl shoptitle">本屋创品</div>
            <div class="fr shopsh clearfix">
              <!-- <span class="guanzhu fl">关注店铺</span>
              <span class="jindian fl">进店逛逛</span>-->
              <div class="fl goshop" v-on:click="gotoshop()">进店逛逛</div>
              <div class="fl guanzu" @click="gotoshop()">关注店铺</div>
            </div>
          </div>
        </div>
        <!-- 详情信息 -->
        <tablist></tablist>
      </div>
    </div>
    <div class="goods-buttons clearfix">
      <div class="van-icon fl">
        <span class="el-icon-service"></span>
        客服
      </div>
      <div class="van-icon fl">
        <span class="el-icon-shopping-cart-2" @click="buynow"></span>
        购物车
      </div>
      <div class="van-goods-action fr">
        <button class="jiaru" v-on:click="addshopp">加入购物车</button>
        <button class="buy" @click="addshopp">立即购买</button>
      </div>
    </div>
    <!-- 加入购物车需要选择的信息 -->
    <!-- <amount v-show="isok==true" @close="close"></amount> -->
    <div class="sku" v-show="isok==true">
      <div class="sku-h clearfix">
        <div class="close" @click="close()">X</div>
        <div class="fl">
          <img :src="newdata.url" alt />
        </div>
        <div class="fl leixing">
          <p class="price">
            ￥
            <span v-text="newdata.price"></span>
          </p>
          <p class="shengyu">
            剩余
            <span v-text="newdata.kucun"></span>件
          </p>
        </div>
      </div>
      <div class="buynum clearfix">
        <span class="fl">购买数量</span>
        <div class="num fr">
          <button @click="subtract">-</button>
          <input type="text" v-model="num" @change="chage()" />
          <button @click="add">+</button>
        </div>
      </div>
      <div class="data">
        <span>送货日期</span>
        <div class="fr">
          <input type="date" v-model="endtime" />
        </div>
      </div>
      <div class="goubuycar" @click="addgood()">下一步</div>
    </div>
  </div>
</template>
<script>
import "../../public/scss/detail.scss";
// import selection from "./cart/selection";
import tablist from "./detail/tablist.vue";
// import amount from "./detail/amount.vue";
import fromms from "./detail/form";
// import Bus from "../bus.js";
import Qs from "qs";

export default {
  data() {
    return {
      activeName: "first",
      isok: false,
      newdata: [],
      num: 1,
      kucun: 5,
      endtime: "",
      gid: 0,
      uid: 1
    };
  },

  methods: {
    addshopp() {
      this.isok = !this.isok;
    },
    close() {
      this.isok = false;
    },
    add() {
      //数量加
      if (this.num >= this.newdata.kucun) {
        this.num = this.newdata.kucun;
      } else {
        this.num++;
      }
    },
    subtract() {
      //数量 减
      if (this.num <= 1) {
        this.num = 1;
      } else {
        this.num--;
      }
    },
    open2() {
      this.$message({
        message: "添加成功",
        type: "success"
      });
    },
    open4() {
      this.$message.error("添加失败");
    },
    chage() {
      if (this.num >= this.newdata.kucun) {
        this.num = this.newdata.kucun;
      } else if (this.num <= 1) {
        this.num = 1;
      } else {
        this.num = this.num;
      }
    },

    //跳转到首页
    gotoshop() {
      this.$router.push({ name: "首页" });
    },
    gotoblack() {
      this.$router.push({ name: "分类" });
    },
    //加入购物车
    async addgood() {
      //加入购物车
      let gid = this.newdata.gid;
      // 判断当前商品是否已经存在购物车
      let currentGoods = this.$store.state.good.cartlist.filter(
        item => item.gid === this.newdata.gid
      )[0];

      if (currentGoods) {
        // 存在：修改商品数量
        let num = currentGoods.num * 1 + this.num;
        this.$store.commit("changenum", { gid, num });
        let { data } = await this.$axios.post(
          " http://47.112.39.163:1912/goods/updata",
          Qs.stringify({ uid: this.uid, gid: gid, num: num })
        );
        if (data.code) {
          this.open2();
        } else {
          this.open4();
        }
      } else {
        // 不存在就添加一个商品
        let goods = {
          uid: this.uid,
          gid: this.newdata.gid,
          url: this.newdata.url,
          title: this.newdata.title,
          title2: this.newdata.title2,
          price: this.newdata.price,
          num: this.num,
          endtime: this.endtime,
          kucun: this.newdata.kucun,
          checked: true
        };
        this.$store.commit("addcart", goods);

        let { data } = await this.$axios.post(
          "http://47.112.39.163:1912/goods/insert",
          Qs.stringify(goods)
        );
        if (data.code) {
          this.open2();
        } else {
          this.open4();
        }
        this.isok = false;
      }
    },
    buynow() {
      //立即购买
      this.$router.push({ name: "购物车" });
    }
  },
  computed: {},
  async created() {
    //获取对应商品的详情数据
    let { id } = this.$route.params;
    let { data } = await this.$axios.get("http://47.112.39.163:1912/goods", {
      params: { gid: id }
    });
    this.newdata = data.data[0];
    // let uid = this.$store.state.login.user.phone;
    this.uid = this.$store.state.login.user.phone;

    window.console.log(this.$store.state.login.user.phone);

    //获取购物车的数据存入state
    if (this.uid) {
      let { data: cartdata } = await this.$axios.get(
        "http://47.112.39.163:1912/goods/cart",
        { uid: this.uid }
      );
      this.$store.state.good.cartlist = cartdata.data;
    }
  },
  components: {
    // selection
    tablist,
    // amount,
    fromms
  }
};
</script>

<style >
/* #regar {
  
} */
</style>

<style lang="scss">
</style>