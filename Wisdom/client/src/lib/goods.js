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
    (function (){
        var str = decodeURI(location.search.slice(1));
        // console.log(str);
        $.ajax({
            type: "get",
            url: "../../../server/goodsData04.php",
            data:{id:str},
            // dataType: "dataType",
            success: function (response) {
                console.log(response);
            }
        });

        // var html = `<img src="${obj.imgurl}" alt="" />
        //     <p class="title">${obj.name}</p>`;

        // var box = document.getElementById('box');

        // box.innerHTML = html;//荣耀 肉
    })()
})