$(() => {
    /* 001-登录切换功能 */
    $(".tab-login-item").click(function () {
        /* 设置当前标签选中状态并且排他处理 */
        $(this).addClass("tabCur").siblings().removeClass("tabCur");
        /* 设置让内容区域切换 */
        $(".ture-line-login").eq($(this).index()).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    })

    /* 002-点击登录按钮 */
    $("#formsub").click(function () {
        let username = $.trim($("#LoginID").val());
        let password = $.trim($("#password").val());
        if (username.length == 0) {
            alert("请输入用户名");
            return;
        }

        if (password.length == 0) {
            alert("请输入密码");
            return;
        }
        let data = {
            username,
            password: md5(password).substr(0, 10)
        };

        /* 发送请求 */
        $.ajax({
            type: "post",
            url: "../../../server/login.php",
            data,
            success: function (response) {
                console.log(response)
                if (response.status == "success") {
                    Cookie.setItem("username",username);
                    console.log(username);
                    // window.location.href = "../../zhuye.html";
                } else {
                    alert(response.msg);
                }
            }
        });
    })

    /*输入框input聚焦时label标签的内容隐藏*/
    //用户名：
    $("#LoginID").focus(function () {
        $(this).prev().text("")
    });

    //密码：
    $("#password").focus(function () {
        $(this).prev().text("")
    });
})