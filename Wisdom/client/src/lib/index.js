//轮播图得菜单导航
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






  /*登录后将username存入cookie，在主页获取cookie值渲染到顶部的登录名字*/
  // if(Cookie.getItem("uesename").length != 0){
  //   $(".userName").text(username + "欢迎来到慧聪！")
  // }else{
  //   $(".userName").text("HI，欢迎来到慧聪！")
  // }

$(()=>{
  /*轮播图右边的买卖家滑块切换*/
  $(".bull-btn").click(function () {
    $(this).addClass("btn-current").siblings().removeClass("btn-current");
    $(".btll-btn-con").eq($(this).index()).addClass("btll-btn-current").siblings().removeClass("btll-btn-current");
  })
})




  /*数据渲染（1F~6F楼层）*/
  class Floor {
    constructor(data) {
      this.data = data;
      this.root = null;
    }
    init() {
      this.renderUI();
    }
    renderUI() {
      this.root = document.createElement("div")
      this.root.classList.add("pub-main-left");
      // let tpl = this.data.
      let html = this.data.map((ele) =>{
        return `<div class="left-con-warp">
                      <h2 class="pub-title">${ele.title}</h2>
                      <div class="left-con">
                          <div class="pub-hot-pro">
                              <img src=${ele.bigpic} alt="">
                          </div>
                      </div>
                  </div>
                  <div class="right-con-warp">
                      <div class="pub-main-nav">
                      <ul>
                          <li><a href="###">涂料</a></li>
                          <li><a href="###">塑料</a></li>
                          <li><a href="###">化工</a></li>
                      </ul>
                  </div>
                  <div class="pub-main-con">
                          <ul class="f_listpic">
                              <li>
                                  <div class="picbox"><a href=""><img alt="润滑脂" src="" /></a> </div>
                              </li>
                          </ul>
                  </div>`
       }).join("");
      this.root.innerHTML = html;
      $(".pub-main").append(this.root);
    }
  }
