// $(() => {


    // function renderUI(data) {
    //     let str0 = data.map(ele => {
    //         let tpl = ele.lit_title.map((ele, index) => {
    //             return `<li><a href="" class=${index==0 ? "pub-main-nav-cur" :""}>${ele}</a></li>`
    //         }).join("")
    //         return `${tpl}`
    //     }).join("")

    //     let str = data.map((ele) => {
    //         return `<div class="pub-main-left">
    //         <div class="left-con-warp">
    //         <h2 class="pub-title">${ele.title}</h2>
    //             <div class="left-con">
    //                 <div class="pub-hot-pro">
    //                     <img src="${ele.bigpic}" alt="">
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="right-con-warp">
    //             <div class="pub-main-nav">
    //                 <ul>${str0}</ul>
    //             </div>
    //             <div class="pub-main-con">
    //                 <ul class="f_listpic">
    //                     <li>
    //                         <div class="picbox"><a href=""><img alt="" src="" /></a></div>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div> `
    //     }).join("");
    //     $(".pub-main").prepend(str);

        // let str1 = data.map((item, index) => {
        //     let tpl = item.lit_title.map((item,index)=>{
        //         return `<li><a href="" class=${index==0 ? "pub-main-nav-cur" :""}>${item}</a></li> `
        //     }).join("")
        //     return `<ul>${tpl}</ul>`;
        //     }).join("")

        // let tpl2 = ele.smlpic.map((item)=>{
        //     return `
        //                 <li>
        //                     <div class="picbox"><a href=""><img alt="" src=${item} /></a></div>
        //                 </li>
        //            `
        // }).join("")        

//         // $(".right-con-warp .pub-main-nav").html(str1);       
//     }
// })
$(() => {


    /*轮播图右边的买卖家滑块切换*/
    $(".bull-btn").click(function () {
        $(this).addClass("btn-current").siblings().removeClass("btn-current");
        $(".btll-btn-con").eq($(this).index()).addClass("btll-btn-current").siblings().removeClass("btll-btn-current");
    });

    /*点击所有的a标签链接到列表页*/
    $("a").not(".login").not(".reg").not(".shopCart").attr("href", "client/src/html/list.html");

    /*点击购物车实现跳转*/
    $(".shopCart").click(function () {
        // console.log(Cookie.getItem("username"));
        if (Cookie.getItem("username")) {
            window.location.href = "client/src/html/cart.html"
        } else {
            window.location.href = "client/src/html/login.html"
        }
    })

  
})