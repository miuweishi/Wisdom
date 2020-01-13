$(()=>{
    /*点击每一个商品跳转到详情页，将该商品的id通过url带到详情页*/
    $("this.item").on("click","items",function(e){
        alert(aaa)
        console.log(111);
        console.log(e);
        
        // let id = $(this)
        // window.location.href = "./goods.html?" + "id"
    })

    console.log($(".items"));
    console.log($(".item"));
    console.log($(".proListLeft"));
     
    // $(".proListLeft").click(function(){
    //     console.log(111);
    //     // let id = $(this).children(".items").data("id");
    //     // window.location.href = "./goods.html?" + "id"
        
    // })

    /*底部最新咨询的选项卡*/
    $(".newsTab").click(function () {
        console.log(this);
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".newsList").eq($(this).index()).hide().siblings().show();
    })
})

