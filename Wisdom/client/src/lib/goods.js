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
        var gid = decodeURI(location.search.slice(1));
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
                let midtu = $("#bigpic .zoomPad img");
                let bigtu = $("#bigpic .zoomWindow img"); //注意！！！
                midtu.src = bigtu.src;
                let html2 = arr.map(ele => {
                    return ` <img src="${ele.url}" style="height: 380px; width: 380px; margin-left: 0px; margin-top: 0px; visibility: visible; opacity: 1;"><a href="" class="zoomPup" style="top: 166px; left: 48px; width: 213px; height: 213px; position: absolute; border-width: 1px; display: none;"></a>`
                }).join("");
                $(".zoomPad").append(html2);
            }
        });
    })();

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
    $(".count-up").click(function () {

        this.prev().val()
    })

    $(document).ready(function () {
        //获得文本框对象
        var t = $("#text_box");
        //初始化数量为1,并失效减
        $('#min').attr('disabled', true);
        //数量增加操作
        $("#add").click(function () {
            // 给获取的val加上绝对值，避免出现负数
            t.val(Math.abs(parseInt(t.val())) + 1);
            if (parseInt(t.val()) != 1) {
                $('#min').attr('disabled', false);
            };
        })
        //数量减少操作
        $("#min").click(function () {
            t.val(Math.abs(parseInt(t.val())) - 1);
            if (parseInt(t.val()) == 1) {
                $('#min').attr('disabled', true);
            };
        })
    });
});