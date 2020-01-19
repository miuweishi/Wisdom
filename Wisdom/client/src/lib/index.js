//左侧菜单导航数据爬取
// var ch_data = [];
// var data = document.getElementsByClassName("subnav-menu")[0];
// var items = data.getElementsByClassName("item");
// for (var i = 0; i < items.length; i++) {
//   var items_datas = {};
//   var suvnav_tit = items[i].getElementsByClassName("suvnav-tit")[0];
//   var tit_infos = items[i].getElementsByTagName("dd");
//   for (var j = 0; j < tit_infos.length; j++) {
//     var tit_infos_datas = {};
//     var info_con = tit_infos[j].getElementsByTagName("a")[0];
//     var info_line = tit_infos[j].getElementsByTagName("font")[0];
//     tit_infos_datas.info_con = info_con.innerHTML;
//     tit_infos_datas.info_line = info_line.innerHTML;
//     items_datas.tit_infos_datas = tit_infos_datas;
//   }
//   items_datas.suvnav_tit = suvnav_tit.innerHTML;
//   ch_data.push(items_datas);
// }


$(() => {
  /*轮播图右边的买卖家滑块切换*/
  $(".bull-btn").click(function () {
    $(this).addClass("btn-current").siblings().removeClass("btn-current");
    $(".btll-btn-con").eq($(this).index()).addClass("btll-btn-current").siblings().removeClass("btll-btn-current");
  });

  /*点击所有的a标签链接到列表页*/
  $("a").not(".login").not(".reg").not(".shopCart").attr("href", "client/src/html/list.html");

  /*点击购物车实现跳转*/
  // $(".shopCart").click(function () {
  //   // console.log(Cookie.getItem("username"));
  //   if (Cookie.getItem("username")) {
  //     window.location.href = "client/src/html/cart.html"
  //   } else {
  //     window.location.href = "client/src/html/login.html"
  //   }
  // })

  // /*登录后将username存入cookie，在主页获取cookie值渲染到顶部的登录名字*/
  // let name = Cookie.getItem("username");
  // // console.log(name);
  // function updateStatus() {
  //   if (name) {
  //     //登陆的 
  //     $(".userName").html(name + "欢迎来到慧聪");
  //     $(".login").text("退出");
  //   } else {
  //     //登出的
  //     $(".userName").html("HI, 欢迎来到慧聪")
  //     $(".login").text("登录")
  //   }
  // }
  // updateStatus();
})