$(() => {
    /* 读取Cookie数据检查登录状态 */
    let username = Cookie.getItem("username");
    let userID = Cookie.getItem("userID");
    if (username) {
        $(".userName").text(`${username}，欢迎来到慧聪`);
        // $(".login").text("退出");
        getCartData();
        /* 页面加载完就应该获取购物车中商品的数量信息 */
        getCartGoodsCount();
    }

    function getCartGoodsCount() {
        $.ajax({
            type: "get",
            url: "../../../server/cart.php",
            data: `type=getCount&user_id=${userID}`,
            dataType: "json",
            success: function (response) {
                // console.log(response);
                /* 加入成功之后：更新购物车数量 */
                if (response.status == "success") {
                    $(".shopCart_num").text(response.count);
                }
            }
        });
    }

    function getCartData() {
        /* 接口：cart.php?type=get&user_id=xxx*/
        $.ajax({
            type: "get",
            url: "../../../server/cart.php",
            data: `type=get&user_id=${userID}`,
            dataType: "json",
            success: function (data) {
                // console.log(data);
                /* 整理前[{商品},{商品},{}] */
                /* 需要对数据进行处理(把数据按照店铺名称来整理) */
                /* 整理后[{店铺},{店铺},{}] */
                let storeNames = [];
                let storeData = [];
                data.forEach(ele => {
                    if (!storeNames.includes(ele.newCname)) storeNames.push(ele.newCname);
                });

                storeNames.forEach(ele => {
                    storeData.push({
                        "newCname": ele,
                        "goods": []
                    })
                });

                data.forEach(ele => {
                    let currentStoreName = ele.newCname;
                    storeData.forEach(item => {
                        if (item.newCname == currentStoreName) {
                            item.goods.push(ele);
                        }
                    })
                });
                cartRenderUI(storeData);
            }
        });
    }
    /*根据详情页中加入购物车的数据进行渲染*/
    function cartRenderUI(_data) {
        console.log(_data);
        /* 创建标签 */
        let html = _data.map(ele => {
            let tpl = ele.goods.map(ele => {
                return `<tr class="list_item" data-id=${ele.goods_id}>
                <td class="bg-f pd-0" colspan="6">
                    <table>
                        <tr class="g-cart-td">
                            <td width="3%" class="pd-l20 v-a-t"><input type="checkbox" class="checkProduct"
                                     /></td>
                            <td width="48%" class="v-a-t">
                                <ul class="fn-clear">
                                    <li class="fl pd1"><a href="" target="_blank"><img
                                                src="${ele.url}"
                                                alt="" width="80" height="80" /></a></li>
                                    <li class="fl pd2 mg-l10">
                                        <p class="h-60">
                                            <a href="" target="_blank" title="${ele.title}">${ele.title}
                                            </a>
                                        </p>
                                    </li>
                                    <li class="fl pd3 hui1 mg-l30">
                                        <p title="规格：4mm距离5m/角度57度">
                                            规格：4mm距离5m/...
                                        </p>
                                    </li>
                                </ul>
                            </td>
                            <td width="15%" class="priceItem v-a-t" unit="台">
                                <p><b>${ele.price}</b></p>
                            </td>
                            <td width="13%" class="txt-c v-a-t">
                                <div class="num-bg">
                                    <a href="javascript:void(0);" class="fl decreaseProduct">-</a>
                                    <input type="text" class="fl product" bcId="408517661" skuId="16326326"
                                        activityId="0" value="${ele.num}" minOrderNum="1" max="100" priceType="1"
                                        sellerUserId="1268954" />
                                    <a href="javascript:void(0);" class="fl increaseProduct">+</a>
                                    <div class="cw-hint tipMessage hide">
                                        <font class="pr-icon3"></font>
                                        <font class="red1 mg-l5"></font>
                                    </div>
                                </div>
                            </td>
                            <td width="15%" class="txt-c v-a-t"><b class="red1 totalPrice">240.00</b></td>
                            <td width="6%" class="v-a-t"><a href="javascript:void(0);"
                                    class="close removeProduct">删除</a></td>
                        </tr>
                    </table>
                </td>
            </tr>`
            }).join("")
            return `
            <tr class="g-cart-store-title">
            <td colspan="6" class="pd-l10">
                <input type="checkbox" class="v-a checkSupplierProduct" />&nbsp;
                <a href="" target="_blank" title="${ele.newCname}" class="bold">
                ${ele.newCname}
                </a>
                <span class="hc_ico"></span>
                <a target="_blank" href="">
                    <img border="0"
                        src="//style.org.hc360.com/images/detail/mysite/siteconfig/qqIco/qqIco2.gif"
                        alt="点击这里给我发消息" title="点击这里给我发消息" style="padding-bottom:5px;" />
                </a>
            </td>
        </tr>${tpl}`}).join("")

        let str = `${html}`;
        $(".grade tr:first").after(str);
    }

    /* 删除标签的事件处理 */
    $(".p-form").on("click", ".removeProduct", function() {
        let currentGoodsID = $(this).parents(".list_item").data("id")
        $.ajax({
            type: "get",
            url: "../../../server/cart.php",
            data: `type=delete&goods_id=${currentGoodsID}&user_id=${userID}`,
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    /* 重新加载和渲染这部分 */
                    getCartData();
                    getCartGoodsCount();
                }
            }
        });
    });

    /* 复选框点击事件的处理 */
    $(".p-form").on("click", ".checkSupplierProduct", function() {
        /* 设置让该店铺下面的所有商品的勾选状态同步 */
        let all = $(this).parents(".g-cart-store-title").nextAll(".list_item").find("input[type='checkbox']");

        all.prop("checked", $(this).is(":checked"));
        computedTotal();
    })

    /* 全选标签的点击事件处理 */
    $(".p-form").on("click", ".checkAllProduct",function() {
        $(".p-form").find("input[type='checkbox']").prop("checked", $(this).is(":checked"));
        computedTotal();
    })

    /* 每个复选框的点击事件 */ 
    $(".p-form").on("click", ".checkProduct", function() {
        // let arr = $(this).parents(".grade").find(".checkProduct").toArray();
        // console.log(arr);   
        // let flag = arr.every(function(ele) {
        //     console.log(ele);
          
        //     return $(ele).find("input[type='checkbox']").prop("checked") == true;
        // })
        // console.log(flag);
        // $(this).parents(".grade").find(".checkSupplierProduct").prop("checked", flag);
        computedTotal();
    });

    function computedTotal() {
        let totalPrice = 0;
        let totalCount = 0;

        $(".list_item").each(function() {
            let currentNum = $(this).find(".product").val() * 1;
            let currentPrice = $(this).find(".totalPrice").text() * 1;
            let flag = $(this).find("input[type='checkbox']").prop("checked");
            
            if (flag) {
                totalPrice += currentNum * currentPrice;
                totalCount += currentNum;
            }
        });

        $("#pricesId").text(totalPrice);
        $("#pcountId").text(totalCount);
    }

     /*商品数量加减*/
     $(".p-form").on("click",".decreaseProduct",function(){
         let num = $(this).next().prop("value") * 1;
         if(num == 1){
            $(this).addClass("allowed");
            return;
         }
        //  updatadata(this,num-1);
        //  computedTotal();
     })
    

})