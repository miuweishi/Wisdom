$(() => {

    //用户名验证
    $("#userName").blur(function () {
        let val = $.trim($(this).val());
        if (/^[a-zA-Z]{2,6}$/.test(val)) {
            $(this).next().text("");
            $(this).removeClass("borRed");
        } else {
            $(this).next().text("用户名不规范！");
            $(this).addClass("borRed");
        }
    })

    //手机号验证
    $("#mobile").blur(function () {
        let val = $.trim($(this).val());
        if (/^1[3-9]\d{9}$/.test(val)) {
            $(this).next().text("");
            $(this).removeClass("borRed");
        } else {
            $(this).next().text("请输入正确的手机号码！");
            $(this).addClass("borRed");
        }
    })

    //密码验证
    $("#password").blur(function () {
        let val = $.trim($(this).val());
        if (/^[a-zA-Z0-9]{3,6}$/.test(val)) {
            $(this).next().text("");
            $(this).removeClass("borRed");
        } else {
            $(this).next().text("您输入的密码格式不对!");
            $(this).addClass("borRed");
        }
    })

    //确认密码验证
    $("#repassword").blur(function () {
        let val = $.trim($(this).val());
        if ($.trim($("#password").val()) == val) {
            $(this).next().text("");
            $(this).removeClass("borRed");
        } else {
            $(this).next().text("两次输入的密码不一致!");
            $(this).addClass("borRed");
        }
    })

    //图形验证码
    let imgCodeTarget;
    let cap = new Captcha({
        lineNum: 10,
        dotNum: 35,
        fontSize: 35,
    });
    cap.draw(document.querySelector('#cap'), r => {
        imgCodeTarget = r;
        console.log(r, '验证码1');
        /* 当用户点击图形变化验证码的时候需要重新校验 */
        $("#captcha").trigger("click");
    });
    //点击a标签后切换验证码
    $("#refresh").click(() => {
        cap.draw(document.querySelector('#cap'), r => {
            imgCodeTarget = r;
            console.log(r, '验证码1');
            $("#captcha").trigger("click");
        });
    })

    /* 图形验证码校验 */
    $("#captcha").blur(function () {
        let val = $.trim($(this).val());
        if (imgCodeTarget == val) {
            // $(this).next(".promptBox").text("");
            $(this).removeClass("borRed");
        } else {
            // $(this).next(".promptBox").text("输入的验证码不正确!");
            $(this).addClass("borRed");
        }
    })

    //点击按钮注册
    $("#btnNextStep").click(function () {
        /* 001-检查用户是否输入了正确的信息并且通过验证，如果没有通过那么就返回 */
        $("#userName,#mobile,#password,#repassword,#captcha").trigger("blur");
        if ($(".borRed").length != 0) {
            return;
        }

        /* 002-检查用户是否勾选了用户协议*/
        if (!$("#severTerms").is(":checked")) {
            alert("请阅读并同意用户协议！");
            return;
        }
        /* 003-发送网络请求把注册相关的信息提交给服务器 */
        let data = {
            username: $.trim($("#userName").val()),
            mobile: $.trim($("#mobile").val()),
            password: md5($.trim($("#password").val())).substr(0, 10),
        }
        $.ajax({
            type: "post",
            url: "../../../server/reg.php",
            data: data,
            success: function (response) {
                console.log(response);
                /* 如果注册成功，那么就先提示用户然后再跳转 */
                if (response == "yes") {
                    alert("恭喜你，注册成功！");
                    window.location.href = "./login.html";
                } else {
                    alert("抱歉，该用户名已经被注册，请重新选择一个更优秀的名字！！");
                }
            }
        });
    })
})