<template>
  <div class="goodlist">
    <div class="content clearfix">
      <div class="chack fl">
        <el-checkbox v-model="checked" class="checkbox"></el-checkbox>
      </div>
      <div class="goods-card fl">
        <div class="fl goods-img-wrap">
          <img
            class="goods-img-wrap"
            src="https://img.yzcdn.cn/upload_files/2018/07/13/FmCYOc8KtvCdB7iuZg3O3RkBkRQh.jpg?imageView2%2F2%2Fw%2F200%2Fh%2F200%2Fq%2F75%2Fformat%2Fjpg"
            alt="商品图片"
          />
        </div>
        <div class="desc-wrap fl">
          <h3 class="title">【逢考必过】九件套</h3>
          <h3 class="title2">【风华正茂】限量款，+【逢考必过】，学生专属九件套</h3>
          <div class="fenqi">分期支付</div>
          <div class="price clearfix">
            <div class="fl pricenum">
              ￥
              <span>628.00</span>
            </div>
            <div class="num fr">
              <button>-</button>
              <input type="text" value="1" />
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="van-swipe-cell__right">
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      checked: true,
      num: 1
    };
  }
};
</script>