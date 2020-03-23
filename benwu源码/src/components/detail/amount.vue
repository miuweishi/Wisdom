<template>
  <div class="sku">
    <div class="sku-h clearfix">
      <div class="close" @click="close()">X</div>
      <div class="fl">
        <img
          src="https://img.yzcdn.cn/upload_files/2019/10/15/Foz_RtyM0jdQKn0iR5lOrkcGUP_2.jpg"
          alt
        />
      </div>
      <div class="fl leixing">
        <p class="price">
          ￥
          <span>129.00</span>
        </p>
        <p class="shengyu">
          剩余
          <span>{{ kucun }}</span>件
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
    <div class="goubuycar" @click="gotocart()">下一步</div>
  </div>
</template>

<script>
// import Qs from "qs";

export default {
  data() {
    return {
      num: 1,
      kucun: 5,
      endtime: "",
      gid: 0
    };
  },
  methods: {
    close() {
      this.$emit("close", false); //关闭窗口
    },
    add() {
      //数量加
      if (this.num >= this.kucun) {
        this.num = this.kucun;
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
    // async gotocart() {
    //   let { id: gid } = this.$route.params;
    //   this.gid = gid;
    //   // window.console.log(data);
    //   let { data } = await this.$axios.get("http://localhost:1912/goods", {
    //     params: { gid: this.gid }
    //   });

    //   if (data.code == 1) {
    //     let datanew = data.data[0];
    //     // window.console.log(datanew);

    //     let datastr = Qs.stringify({
    //       uid: 1,
    //       gid: datanew.gid,
    //       title: datanew.title,
    //       title2: datanew.title2,
    //       kucun: datanew.kucun,
    //       num: this.num,
    //       endtime: this.endtime,
    //       price: datanew.price,
    //       url: datanew.url,
    //       soldout: datanew.soldout
    //     });

    //     let tt = await this.$axios.post(
    //       "http://localhost:1912/goods/insert",
    //       datastr
    //     );
    //     window.console.log(tt);
    //     // if (tt.code == 1) {
    //     //   this.open2();
    //     //   this.$router.push({
    //     //     name: "购物车"
    //     //   });
    //     // }

    //     // window.console.log(tt);
    //   }

    //   // window.console.log(data);

    //   // this.$router.push({
    //   //   name: "购物车",
    //   //   query: { num: this.num, kucun: this.kucun, gid: this.gid }
    //   // });
    // },
    //手动输入数量的设置
    chage() {
      if (this.num >= this.kucun) {
        this.num = this.kucun;
      } else if (this.num <= 1) {
        this.num = 1;
      } else {
        this.num = this.num;
      }
    }
  },
  computed: {}
};
</script>