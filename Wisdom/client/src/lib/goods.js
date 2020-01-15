$(() => {
    /*固定的菜单栏*/
    //获取要定位元素距离浏览器顶部的距离
    var navH = $(".proDetailFixed").offset().top;
    //滚动条事件
    $(window).scroll(function () {
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if (scroH >= navH) {
            $(".proDetailFixed").css({
                "position": "fixed",
                "top": 0,
                "left": 0
            });
        } else if (scroH < navH) {
            $(".proDetailFixed").css({
                "position": "static",
                "margin": "0 auto"
            });
        }
    });


    /*截取url的参数id，查看数据库渲染数据*/
    (function () {
        let gid = decodeURI(location.search.slice(1));
        // console.log(gid);
        $.ajax({
            type: "get",
            url: "../../../server/goodsData04.php",
            data: {
                gid: gid
            },
            success: function (data) {
                let arr = JSON.parse(data);
                // console.log(arr);
                let tpl1 = arr.map((ele) => {
                    return `<div class="topPriceRig" id="oriPriceTop">
                    <em>¥</em>${ele.price}
                </div>`
                }).join("");
                let tpl2 = arr.map(ele => {
                    return `<span class="supply-numb">${ele.kucun} 台 </span>`
                }).join("");
                $(".topPriceBox").append(tpl1);
                $(".item-row-w").eq(0).append(tpl2);
                $(".oriPrice").text($("#oriPriceTop").text());
                
                /*导航栏的数据渲染*/
                let html1 = arr.map(ele => `<a href="">${ele.newCname}</a>&gt;
                <a href="" class="navTitle">${ele.title}</a>`).join("");
                $(".locationBox .locationLeft").append(html1);
                //为了nav的title和下面的大标题的title一致
                $("#comTitle").text($(".navTitle").text())

                /*左边大图图片的渲染*/
                let html2 = arr.map(ele => {
                    return ` <img src="${ele.url}" style="height: 380px; width: 380px; margin-left: 0px; margin-top: 0px; visibility: visible; opacity: 1;">`
                }).join("");
                $(".zoomPad").append(html2);
                let midtu = $("#bigpic .zoomPad img");
                let bigtu = $("#bigpic .zoomWindow img"); //注意！！！
                 bigtu.attr("src",midtu.attr("src")); //使中图和放大的图片一样
            }
        });
    })();

    /*放大镜效果*/
    //给左边的图片添加鼠标移入事件
    $(".zoomPad").mouseenter(function () { 
        $(".mask").css("display", "block");
        $(".zoomWindow").css("display", "block");
    });
    
    //给左边的图片添加鼠标移出事件
    $(".zoomPad").mouseleave(function () { 
        $(".mask").css("display", "none");
        $(".zoomWindow").css("display", "none");
    });

    //给小图片盒子添加移动事件
    $(".zoomPad").mousemove(function(e){
         /* 得到遮罩物自身宽和高 */
         let centerX = $(".mask").width();
         let centerY = $(".mask").height();
        
         /* 得到距离浏览器的距离 */
         let x = $(".zoomPad").offset().left;
         let y = $(".zoomPad").offset().top;
         
         /* 得到遮罩物距左边盒子的距离 */
         let left = e.pageX - x - centerX / 2;
         let top = e.pageY - y - centerY / 2;

         /* 遮罩物向x轴移动的最大距离 */
         let minPicX = $(".zoomPad").width() - centerX;
         /* 遮罩物向Y轴移动的最大距离 */
         let minPicY = $(".zoomPad").height() - centerY;

         /* 设置临界值 */
         if (left <= 0) {
             left = 0
         } else if (left > minPicX) { //向左运动的最大距离
             left = minPicX;
         }
         if (top <= 0) {
             top = 0;
         } else if (top >= minPicY) { //向下运动的最大距离
             top = minPicY;
         }

         $(".mask").css("left", left).css("top", top);
        
        /* 得到大图片移动的最大距离 */
        let maxPicX = $(".zoomWindow img").width() - $(".zoomWindow").width();
        let maxPicY = $(".zoomWindow img").height() - $(".zoomWindow").height() ;
        /* 得到显示区域的的移动的图片 */
        let leftImg = -left / minPicX * maxPicX;
        let topImg = -top / minPicY * maxPicY;
        $(".zoomWindow img").css("left", leftImg).css("top", topImg);
    })

    /*轮播小图的切换*/
    // (function swipe() {
    //     /*点击左右按钮切换图片*/
    //     let index = 0;
    //     $("#baseNex").click(function(){
    //         let ul = $(this).parent().siblings().children("ul");
    //         let iw = ul.children(":first").width();
    //         // index++;
    //         // ul.style.left = -(index) * iw;
    //     })
    // })()

    /*商品数量加减*/
    let countbox = $(".count-input"); //单个数量
    // let num = $(".item-left-t").siblings().text(); //总数量
    $(".count-down").attr("disabled", true);
    $(".count-up").attr("disabled", false);
    // let sum = $("#totalPrice").text();
    let price = $("#oriPriceTop");
    // console.log(price);
    // let price = String($(".oriPrice").text());
    // console.log(price);
    // let gprice = price.match(/\d+/);
    // console.log(gprice);

    //数量增加
    $(".count-up").click(function () {
        countbox.val(Math.abs(parseInt(countbox.val())) + 1)
        if (parseInt(countbox.val()) != 1) {
            $(".count-down").attr('disabled', false);
            $(".count-down").removeClass("count-down-limit");

            //控制总价的变化
            // console.log( ($("#oriPriceTop").text()));
            // sum = countbox.val() * $("#oriPriceTop").text();
        } 
       
    })
    //数量减少
    $(".count-down").click(function () {
        countbox.val(Math.abs(parseInt(countbox.val())) - 1);
        if (parseInt(countbox.val()) == 1) {
            $(".count-down").attr('disabled', true);
            $(".count-down").addClass("count-down-limit");

            sum = countbox.val() * $(".oriPrice").text()
        };
    })


    /*点击加入购物车跳转到购物车页*/
    $(".setMyCart").click(function(){
        let gid = decodeURI(location.search.slice(1));
        // $.ajax({
        //     type: "post",
        //     url: "../../../server/insertData05.php",
        //     data: {
        //         gid:gid
        //     },
        //     success: function (response) {
                
        //     }
        // });
        window.location.href="./cart.html?gid=" + gid;
    })
});