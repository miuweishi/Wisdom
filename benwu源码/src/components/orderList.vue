<template>
  <div class="content">
    <ul class="tab-list" v-if="list.length">
      <li v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.url" alt />

        <div class="item-info">
          <div class="item-block">
            <p class="title">{{item.title}}</p>

            <div class="right">
              <p class="price">￥{{item.price}}</p>
              <p class="num">x{{item.num}}</p>
            </div>
          </div>

          <div>
            <p class="total-text">合计：￥{{item.comprice}}</p>
          </div>
        </div>
      </li>
    </ul>

    <h1 v-else>暂无{{kind}}的订单</h1>
  </div>
</template>

<script>
export default {
  data() {
    return { list: [] };
  },
  props: ["kind"],
  async created() {
    let result = null;
    if (this.kind) {
      result = await this.$axios.get(
        "http://47.112.39.163:1912/order?status=" +
          this.kind +
          "&phone=" +
          this.$store.state.login.user.phone
      );
    } else {
      result = await this.$axios.get(
        "http://47.112.39.163:1912/order?phone=" +
          this.$store.state.login.user.phone
      );
    }

    if (result.data.code) {
      this.list = result.data.data;
    } else {
      this.list = [];
    }
  },
  watch: {
    async kind(newval, oldval) {
      window.console.log(newval, oldval);
      let result = null;
      if (newval) {
        result = await this.$axios.get(
          "http://47.112.39.163:1912/order?status=" +
            newval +
            "&phone=" +
            this.$store.state.login.user.phone
        );
      } else {
        result = await this.$axios.get(
          "http://47.112.39.163:1912/order?phone=" +
            this.$store.state.login.user.phone
        );
      }

      if (result.data.code) {
        this.list = result.data.data;
      } else {
        this.list = [];
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 0.462963rem;
  height: 3.703704rem;
  line-height: 3.703704rem;
  text-align: center;
}
.content {
  width: 100%;
}
.tab-list li {
  display: flex;
  margin: 0.277778rem;
  background-color: #fff;
  border-radius: 0.185185rem;
  padding: 0.277778rem;
}
.item-img {
  width: 2.296296rem;
  height: 2.296296rem;
  border-radius: 0.138889rem;
  margin-right: 0.277778rem;
}
.item-block {
  display: flex;
}
.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  flex: 1;
  font-size: 0.277778rem;
  color: #3b3b3b;
}
.right {
  width: 1.574074rem;
  margin-left: 0.5rem;
}
.price {
  text-align: right;
  color: #3b3b3b;
  font-size: 0.259259rem;
}
.num {
  text-align: right;
  font-size: 0.222222rem;
  color: #a1a1a1;
}
.total-text {
  text-align: right;
  font-size: 0.277778rem;
  color: #373737;
  margin-bottom: 0.185185rem;
}
</style>