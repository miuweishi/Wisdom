// 分类
<template>
  <div id="sort">
    <div class="toppic">
      <img
        class="t_img"
        src="https://img.yzcdn.cn/upload_files/2018/07/19/FrZI13LIqGU8adJaotpBqXFbKob3.png!large.png"
        alt
      />
    </div>
    <div class="bottomarea">
      <div class="sidemenu">
        <a
          class="sidemenu_item"
          href="###"
          @click="change(index)"
          v-for="(item,index) in menu"
          :key="index"
          :class="{active : index==currentIdx}"
        >
          <div class="item_text">{{item}}</div>
        </a>
      </div>
      <div class="rightlist">
        <div class="list_name">
          <div class="goodsllist" v-for="(data,index) in goods" :key="index">
            <ul
              v-for="(i,index) in data.one"
              :key="index"
              v-show="index==currentIdx"
              @click="goto(i.gid)"
            >
              <li>
                <div class="goods_image">
                  <img :src="i.url" alt />
                </div>
                <div class="goods_con">
                  <h3 v-text="i.title"></h3>
                  <p class="con_note">超温暖</p>
                  <p class="con_price">
                    <span class="con_symbol">￥</span>
                    <span class="price" v-text="i.price"></span>
                    <span class="el-icon-circle-plus-outline"></span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <fixadd></fixadd>
    </div>
  </div>
</template>

<script>
import "../../public/css/sort.min.css";
import fixadd from "./home/fixadd";

export default {
  data() {
    return {
      currentIdx: 0,
      menu: [
        "三件套",
        "四件套",
        "六件套",
        "豪华水洗棉三件套",
        "豪华长绒棉三件套",
        "床帘",
        "拉杆箱",
        "夏凉被",
        "蚊帐",
        "冬被"
      ],
      goods: []
    };
  },
  async created() {
    let { data } = await this.$axios.get("http://47.112.39.163:1912/list");

    this.goods = data.data;
    window.console.log(data.data);
  },

  methods: {
    change(index) {
      this.currentIdx = index; //动态的改变currentIdx属性
    },
    goto(gid) {
      window.console.log(gid);
      this.$router.push({ path: "/detailPages/" + gid });
    }
  },
  components: {
    fixadd
  }
};
</script>
<style scoped>
</style>