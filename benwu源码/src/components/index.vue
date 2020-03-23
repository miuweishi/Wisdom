// 首页
<template >
  <div id="home">
    <Search></Search>
    <Swipe></Swipe>
    <div class="sortlist" @click="goto()">
      <div class="notice_bar">
        <p class="notice_bar_con">需购买超高性价比家用产品请加微信：bwyx0000</p>
      </div>
      <ul class="sort">
        <li>
          <a href="###" class="cap_list">
            <img
              class="sort_img"
              src="https://img.yzcdn.cn/upload_files/2019/10/12/FudD8qk2w9IjEIjLrP0sR3nE6aEw.jpg!large.jpg"
              alt
            />
          </a>
        </li>
      </ul>
    </div>
    <div class="winter" @click="goto()">
      <img
        class="adrong"
        src="https://img.yzcdn.cn/upload_files/2019/10/16/FlVYTh2YRSvzOvK1ilsccvpatB_F.jpg!large.jpg"
        alt
      />
      <div class="cap-white"></div>
      <img
        class="adpro"
        src="https://img.yzcdn.cn/upload_files/2019/10/10/FrkpMUfuX-T0xVSFYJKMTz5ngeZB.jpg!large.jpg"
        alt
      />
    </div>
    <ul class="slider_list" @click="goto()">
      <li class="s_list">
        <img
          class="slider_img"
          src="https://img.yzcdn.cn/upload_files/2019/07/11/FpDPEw1cOr1CPKGzguBTBvd2ziyM.jpg!large.jpg"
          alt
        />
      </li>
      <li class="s_list">
        <img
          class="slider_img"
          src="https://img.yzcdn.cn/upload_files/2019/07/11/FnGMYpHlhom51ahJKEWSKUmgdLGa.jpg!large.jpg"
          alt
        />
      </li>
      <li class="s_list">
        <img
          class="slider_img"
          src="https://img.yzcdn.cn/upload_files/2019/07/11/Flp104Rdbcbe5fp2klOR6IhzHz4F.jpg!large.jpg"
          alt
        />
      </li>
      <li class="s_list">
        <img
          class="slider_img"
          src="https://img.yzcdn.cn/upload_files/2019/07/11/FkywTZlY02q7C4SfCNSwSkPxFQ2M.jpg!large.jpg"
          alt
        />
      </li>
    </ul>
    <div class="widths">
      <img class="widths_bg" src="../../public/img/bg01.png" alt />
    </div>
    <Swipemiddle @click="goto()"></Swipemiddle>
    <div class="new_products">
      <img src="../../public/img/suite1.png" alt />
      <img src="../../public/img/suite2.png" alt />
      <img src="../../public/img/suite.png" alt />
    </div>
    <div class="widths">
      <img class="widths_bg2" src="../../public/img/bg02.png" alt />
    </div>
    <Swipebottom @click="goto()"></Swipebottom>
    <div class="hotarea" @click="goto()">
      <div class="title">
        <div class="t_border"></div>
        <div class="t_name">
          <p>LATEST PRODUCTS</p>
          <h1>镂空星星遮光防蚊一体床帘</h1>
        </div>
      </div>
      <div class="hotpic">
        <img src="../../public/img/bedlian.png" alt />
      </div>
    </div>
    <div class="hotarea" @click="goto()">
      <div class="title">
        <div class="t_border"></div>
        <div class="t_name">
          <p>LATEST PRODUCTS</p>
          <h1>数码印花遮光防蚊一体床帘</h1>
        </div>
      </div>
      <div class="hotpic">
        <img src="../../public/img/bedlian2.png" alt />
      </div>
    </div>
    <div class="hotarea" @click="goto()">
      <div class="title">
        <div class="t_border"></div>
        <div class="t_name">
          <p>LATEST PRODUCTS</p>
          <h1>数码印花遮光床帘</h1>
        </div>
      </div>
      <div class="hotpic">
        <img src="../../public/img/bedlian3.png" alt />
      </div>
    </div>
    <div class="essential_pro">
      <img class="essential_img" src="../../public/img/packbag.png" alt />
    </div>
    <div class="newlife">
      <img class="newlife_img" src="../../public/img/newlife.png" alt />
    </div>

    <ul class="pro_card">
      <li>
        <div class="card_image">
          <img
            @click="goto()"
            src="https://img.yzcdn.cn/upload_files/2019/07/18/FjpeNd-O3QFBxcYp-CH9lMua-ZJs.jpg!middle.jpg"
            alt
          />
        </div>
        <p class="card_title">北欧系列宿舍美化方案</p>
        <p class="card_price">
          <span class="c_price">￥298</span>
          <span class="el-icon-circle-plus"></span>
        </p>
      </li>
      <li>
        <div class="card_image">
          <img
            @click="goto()"
            src="https://img.yzcdn.cn/upload_files/2019/07/24/FiWHJkWZNFFQWxzgV_Kqw_jfj4yW.jpg!middle.jpg"
            alt
          />
        </div>
        <p class="card_title">少女系宿舍美化方案</p>
        <p class="card_price">
          <span class="c_price">￥298</span>
          <span class="el-icon-circle-plus"></span>
        </p>
      </li>
      <li>
        <div class="card_image">
          <img
            @click="goto()"
            src="https://img.yzcdn.cn/upload_files/2019/07/24/FqkOF8aDmLdPcDBclMtJpy-ZRZle.jpg!middle.jpg"
            alt
          />
        </div>
        <p class="card_title">少女系宿舍美化方案</p>
        <p class="card_price">
          <span class="c_price">￥298</span>
          <span class="el-icon-circle-plus"></span>
        </p>
      </li>
    </ul>
    <div class="grap-new" @click="goto()">
      <img src="../../public/img/footer.png" alt />
      <p class="grapname_p1">新学年上新 —— 防尘顶背景布蚊帐</p>
      <p class="grapname_p2">新学年上新 泫雅更清新~ 防尘顶背景布蚊帐</p>
      <p class="grap_price">￥69</p>
      <p class="grap_qiang">马上抢</p>
    </div>
    <div class="listbox">
      <ul v-for="(data) in goods" :key="data.id">
        <li class="list_pro" :data-id="data.gid" @click="Go(data.gid)">
          <div class="list_img">
            <img :src="data.url" alt />
          </div>

          <h3 v-text="data.title"></h3>
          <p class="list_price">
            <span>￥{{data.price}}</span>
            <span>马上抢</span>
          </p>
        </li>
      </ul>
    </div>
    <Searchroote></Searchroote>
    <fixadd></fixadd>
    <sideserve></sideserve>
  </div>
</template>
<script>
import "../../public/css/index.min.css";
import Search from "./home/Search";
import Swipe from "./home/Swipe";
import Swipemiddle from "./home/Swipemiddle";
import Swipebottom from "./home/Swipebottom";
import Searchroote from "./home/Searchroote";
import fixadd from "./home/fixadd";
import sideserve from "./home/sideserve";

export default {
  data: function() {
    return {
      goods: []
    };
  },
  methods: {
    Go(gid) {
      // window.console.log(gid);
      this.$router.push({ path: "/detailPages/" + gid });
    },
    goto() {
      this.$router.push({ path: "/sort" });
    }
  },
  async created() {
    let { data } = await this.$axios.get("http://47.112.39.163:1912/goods");
    this.goods = data.data;
    // window.console.log(this.goods);
  },
  components: {
    Search,
    Swipe,
    Swipemiddle,
    Swipebottom,
    Searchroote,
    fixadd,
    sideserve
  }
};
</script>
