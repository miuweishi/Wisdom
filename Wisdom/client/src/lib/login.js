$(() => {
    /*输入框input聚焦时label标签的内容隐藏*/
    //用户名：
    $("#LoginID").focus(function () {
        $(this).prev().text("")
    });

    //密码：
    $("#password").focus(function () {
        $(this).prev().text("")
    });

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

        /* 发送请求 */
        $.ajax({
            type: "post",
            url: "../../../server/login.php",
            data: {
                username: username,
                password: md5(password).substr(0, 10)
            },
            dataType: "json",
            success: function (response) {
                // console.log(response)
                if (response.status == "success") {
                    alert("登录成功！");
                    Cookie.setItem('username', username);
                    Cookie.setItem('userID', response.id);
                    window.location.href = "../../../zhuye.html";

                } else {
                    alert("抱歉，请重新登录！");
                }
            }
        });
    })

})