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
                let html = arr.map((ele) => {
                    return `                                             
                <div class=" topPriceBox ">
                    <span class="topPriceLeft letter2">价格</span>
                    <div class="topPriceRig" id="oriPriceTop">
                        <em>¥</em>${ele.price}
                    </div>
                    <a id="freeInquery" href="">免费咨询行业专家</a>
                </div>
                <div class="item-row-w">
                    <span class="item-left-t">供应总量</span>
                    <span class="supply-numb">${ele.kucun} 台 </span>
                </div>
                <div class="item-row-w">
                    <span class="item-left-t">发货期限</span>
                    卖家承诺24小时发货
                </div>
                <div class="item-row-w logistics">
                    <span class="item-left-t">运费说明</span>
                    <div class="adress-wrap payf">
                        --
                    </div>
                </div>
                <div class="cg-info fn_clear" id="dg_div">
                    <span class="item-left-t cg-info-left">订购信息</span>
                    <div class="cg-table dg-table">
                        <table cellspacing="1" cellpadding="1" class="cg-table-con" id="priceList">
                            <tbody>
                                <tr id="table1_tr_1">
                                    <th class="order">起订量 (台)</th>
                                    <th class="standards">价格</th>
                                    <th class="PurchaseNum">采购量</th>
                                </tr>
                                <tr class="item-cur-tab" id="dj_tr">
                                    <td class=""> 1 </td>
                                    <td class="oriPrice">¥${ele.price}</td>
                                    <td id="dj_td" rowspan="2">
                                        <div class="item-control">
                                            <div class="detail-amount-control detail-amount-con-hover">
                                                <span class="anount-container"
                                                    style="width: 74px; position: relative; margin: 0px 25px;"><input type="text" id="buyNumber" class="amount-input" data-amountindex="0" style="width: 70px; float: left; height: 24px; line-height: 24px; margin: 0px; padding: 2px 2px 0px; color: rgb(102, 102, 102); font-size: 12px; border-width: 0px; visibility: visible;">
                                                    <div style="clear: both;"></div><a href="javascript:void(0)" class="amount-up">+</a><a href="javascript:void(0)"
                                                        class="amount-down amount-down-limit">-</a>
                                                </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="item-row-w price">
                    <span class="item-left-t letter2">总价</span>
                    <div class="adress-wrap fn_clear">
                        <div class="price-num">
                            <em class="rmb">¥</em>
                            <span id="totalPrice">0.00</span>
                            <em class="number"> | 共<i id="totalNumber">0</i> 台</em>
                        </div>
                        <div class="see-detail">
                            <span class="cur-span" id="showDetailBtn" style="display: none;">查看清单</span>
                            <div id="sellDetail">
                                <div class="close_d"><a>×</a></div>
                                <div class="span-con">
                                    <table class="item-span-con-list" cellpadding="1" cellspacing="1" id="detailList">
                                        <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-row-w pro-btn-wrap">
                    <ul class="pro_btn ">
                        <li><a class="ContactNew" id="checkContactBtn">查看联系方式</a>
                        </li>
                        <li><a href="javascript:void(0)" class="blue-btnNew setMyCart">加入采购单</a>
                        </li>
                        <li><a href="javascript:void(0)" class="orange-btnNew orderNow">立即订购</a>
                        </li>
                    </ul>
                </div>
            `
                }).join("");
                $(".detail-right-con").html(html);

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
});