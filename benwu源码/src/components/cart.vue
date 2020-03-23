<template>
  <div class="cart">
    <div class="cartHeader">
      <div class="h-left fl">
        <span class="el-icon-shopping-bag-2 span1" @click="gotoshop"></span>
        <span class="title">本屋创品</span>
        <span>
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
      <div class="h-right fr" @click="compile" v-text="text"></div>
    </div>
    <div class="cartgoods">
      <!-- 添加购物车的商品数据 -->
      <div
        class="goodlist"
        v-for="(item,index) in good"
        :key="item.gid"
        :data-id="item.gid"
        @click.stop="move($event)"
      >
        <div class="content clearfix">
          <div class="chack fl">
            <!-- <el-checkbox v-model="checked" class="checkbox" @click.native="check($event)"></el-checkbox> -->
            <input
              type="checkbox"
              v-model="item.checked"
              @click.stop="check(index)"
              class="checkbox"
            />
          </div>
          <div class="goods-card fl">
            <div class="fl goods-img-wrap">
              <img class="goods-img-wrap" :src="item.url" alt="商品图片" />
            </div>
            <div class="desc-wrap fl">
              <h3 class="title" v-text="item.title"></h3>
              <h3 class="title2" v-text="item.title2"></h3>
              <div class="fenqi">分期支付</div>
              <div class="price clearfix">
                <div class="fl pricenum">
                  ￥
                  <span v-text="item.price"></span>
                </div>
                <div class="num fr">
                  <button @click.stop="subtract(index)">-</button>
                  <input type="text" :value="item.num" @blur="change(index)" />
                  <button @click.stop="add(index)">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="van-swipe-cell__right">
          <el-button type="danger" icon="el-icon-delete" circle @click.stop="remove(item.gid)"></el-button>
        </div>
      </div>
    </div>
    <div class="recommend-goods">
      <div class="recommend-goods__title default">更多精选商品</div>
      <div class="goods-list-wrapper">
        <!-- 推荐的商品信息 -->
        <selection></selection>
        <div class="cart-bottom van-hairline--top"></div>
      </div>
      <div class="goshopp" @click="gotoshop()">进店逛逛></div>
    </div>
    <!-- 购物车底部 -->
    <!-- <cartbutton></cartbutton> -->
    <div class="goodbutton clearfix">
      <div class="checkall fl">
        <el-checkbox v-model="checkall" :class="chack">全选</el-checkbox>
      </div>
      <div class="total fl" v-show="isok==true">
        <p>
          <span>合计：</span>
          ￥
          <span class="price">{{ allprice.toFixed(2) }}</span>
        </p>
        <span class="fl yunfei">不含运费</span>
      </div>
      <div class="type fr">
        <el-button type="danger" round class="jiesuan" v-if="isok==true" @click="settle">结算</el-button>
        <el-button type="danger" round class="del" v-else @click="delgood">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import "../../public/scss/cart.scss";

// import cartlist from "./cart/cartlist";
// import cartbutton from "./cart/cartbutton";
import selection from "./cart/selection";
import Qs from "qs";
// import { black } from "color-name";
// import VueTouch from "vue-touch";
// Vue.use(VueTouch, { name: "v-touch" });

export default {
  data() {
    return {
      checked: true,
      num: 1,
      good: [],
      uid: 1,
      left: true,
      isok: true,
      text: "编辑",
      chack: "checkbox",
      code: false //是否成功
    };
  },
  methods: {
    handleChange(value) {
      window.console.log(value);
    },
    gotoshop() {
      this.$router.push("/home");
    },
    open2() {
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    open() {
      this.$message({
        message: "结算成功",
        type: "success"
      });
    },
    compile() {
      //编辑
      window.console.log(this.isok);
      if (this.isok) {
        this.isok = !this.isok;
        this.text = "完成";
        this.good.forEach(item => {
          item.checked = false;
        });
      } else {
        this.isok = !this.isok;
        this.text = "编辑";
        this.chack = "checkbox is-checked";
        this.good.forEach(item => {
          item.checked = true;
        });
      }
      window.console.log(this.isok);
    },
    check(gindex) {
      // let chacktrue = this.good[gindex].checked;
      // if (chacktrue == "true") {
      //   this.total += this.good[gindex].num * this.good[gindex].price;
      // }
      window.console.log(gindex);
    },
    open4() {
      this.$message.error("删除失败");
    },
    open3() {
      this.$message.error("结算失败");
    },
    move(e) {
      if (this.left) {
        e.currentTarget.className = "goodlist move";
        this.left = !this.left;
      } else {
        e.currentTarget.className = "goodlist move2";
        this.left = !this.left;
      }
    },
    async add(goodindex) {
      //数量加
      if (this.good[goodindex].num * 1 >= this.good[goodindex].kucun * 1) {
        this.good[goodindex].num = this.good[goodindex].kucun;
        let gid = this.good[goodindex].gid;
        let num = this.good[goodindex].num;
        this.$store.commit("changenum", { gid, num });
        //数据库修改数量

        let { data: numdata } = await this.$axios.post(
          " http://47.112.39.163:1912/goods/updata",
          Qs.stringify({ uid: this.uid, gid: gid, num: num })
        );
        window.console.log(numdata);
      } else {
        this.good[goodindex].num++;
        let gid = this.good[goodindex].gid;
        let num = this.good[goodindex].num;
        this.$store.commit("changenum", { gid, num });
        //数据库修改数量
        await this.$axios.post(
          " http://47.112.39.163:1912/goods/updata",
          Qs.stringify({ uid: this.uid, gid: gid, num: num })
        );
      }
    },
    async subtract(goodindex) {
      //数量 减
      if (this.good[goodindex].num * 1 <= 1) {
        this.good[goodindex].num = 1;
        let gid = this.good[goodindex].gid;
        let num = this.good[goodindex].num;
        this.$store.commit("changenum", { gid, num });
        await this.$axios.post(
          " http://47.112.39.163:1912/goods/updata",
          Qs.stringify({ uid: this.uid, gid: gid, num: num })
        );
      } else {
        this.good[goodindex].num--;
        let gid = this.good[goodindex].gid;
        let num = this.good[goodindex].num;
        this.$store.commit("changenum", { gid, num });

        await this.$axios.post(
          " http://47.112.39.163:1912/goods/updata",
          Qs.stringify({ uid: this.uid, gid: gid, num: num })
        );
      }
    },
    async remove(gindex) {
      window.console.log(gindex);
      let isok = confirm("你确定要删除吗？");
      if (isok) {
        this.$store.commit("removeFromCart", gindex);
        let uid = this.uid;
        let { data } = await this.$axios.post(
          "http://47.112.39.163:1912/goods/del",
          Qs.stringify({ gid: gindex, uid: uid })
        );
        if (data.code) {
          this.open2();
        }
        this.good = this.$store.state.good.cartlist;
      }
    },
    //结算
    settle() {
      let setgood = this.good.filter(item => item.checked != false);
      let order = [];
      let goodstr = {};
      setgood.forEach(item => {
        goodstr.phone = item.uid;
        goodstr.gid = item.gid;
        goodstr.comprice = item.price * 1 * item.num * 1;
        goodstr.title = item.title;
        goodstr.url = item.url;
        goodstr.price = item.price;
        goodstr.endtime = item.endtime;
        goodstr.num = item.num;
        goodstr.pay = "已付款";
        goodstr.status = "待接单";
        order.push(goodstr);
      });
      // let code = 0;
      order.forEach(async item => {
        await this.$axios.post(
          " http://47.112.39.163:1912/goods/insertorder",
          Qs.stringify(item)
        );
        window.console.log(this.code);
      });
      this.code = !this.code;
      if (this.code == true) {
        this.open();
      } else {
        this.open3();
      }
    },
    //删除
    delgood() {
      let delgood = this.good.filter(item => item.checked != false);
      let order1 = [];
      let goodstr1 = {};
      window.console.log(delgood);
      delgood.forEach(item => {
        goodstr1.uid = item.uid;
        goodstr1.gid = item.gid;
        order1.push(goodstr1);
      });
      window.console.log(order1);
      let isok = confirm("你确定要删除吗？");
      if (isok) {
        order1.forEach(async item1 => {
          this.$store.commit("removeFromCart", item1.gid);
          await this.$axios.post(
            "http://47.112.39.163:1912/goods/del",
            Qs.stringify({ uid: item1.uid, gid: item1.gid })
          );
          // window.console.log(this.code);
        });
        this.code = !this.code;
        if (this.code == true) {
          this.open();
        } else {
          this.open3();
        }
        this.good = this.$store.state.good.cartlist;
        this.open2();
      }
    }
  },
  async created() {
    // this.$store.dispatch("getdata");
    //获取state的数据
    let uid = this.uid;
    let { data: cartdata } = await this.$axios.get(
      "http://47.112.39.163:1912/goods/cart",
      { uid: uid }
    );

    this.uid = this.$store.state.login.user.phone;
    this.$store.state.good.cartlist = cartdata.data;
    this.good = this.$store.state.good.cartlist;
    // window.console.log(this.$store.state);
  },
  computed: {
    checkall: {
      get() {
        let istrue = this.good.every(item => item.checked);
        // window.console.log(istrue);
        return istrue;
      },
      set(val) {
        this.good.forEach(item => {
          item.checked = val;
        });
      }
    },
    allprice() {
      //总数
      let sum = 0;
      let checknum = this.good.filter(item => item.checked != false);
      checknum.forEach(item => {
        sum += item.price * item.num;
      });

      return sum;
    }
  },
  watch: {
    async chage(goodindex) {
      if (this.good[goodindex].num * 1 >= this.good[goodindex].kucun * 1) {
        this.good[goodindex].num = this.good[goodindex].kucun * 1;
        let gid = this.good[goodindex].gid;
        let num = this.good[goodindex].num;
        this.$store.commit("changenum", { gid, num });
        await this.$axios.post(
          " http://47.112.39.163:1912/goods/updata",
          Qs.stringify({ uid: this.uid, gid: gid, num: num })
        );
        return this.good[goodindex].num;
      } else if (this.good[goodindex].num * 1 <= 1) {
        this.good[goodindex].num = 1;
        let gid = this.good[goodindex].gid;
        let num = this.good[goodindex].num;
        this.$store.commit("changenum", { gid, num });
        await this.$axios.post(
          " http://47.112.39.163:1912/goods/updata",
          Qs.stringify({ uid: this.uid, gid: gid, num: num })
        );
        return this.good[goodindex].num;
      } else {
        let gid = this.good[goodindex].gid;
        let num = this.good[goodindex].num;
        this.$store.commit("changenum", { gid, num });
        this.good[goodindex].num = this.good[goodindex].num;
        await this.$axios.post(
          " http://47.112.39.163:1912/goods/updata",
          Qs.stringify({ uid: this.uid, gid: gid, num: num })
        );
        // return this.good[goodindex].num;
      }
    }
  },
  components: {
    // cartlist,
    // cartbutton,
    selection
  }
  // sccue() {}
};
</script>

<style >
.move {
  transform: translate3d(-64px, 0px, 0px);
  transition-duration: 0.6s;
}
.move2 {
  transform: translate3d(0, 0px, 0px);
  transition-duration: 0.6s;
}
</style>

