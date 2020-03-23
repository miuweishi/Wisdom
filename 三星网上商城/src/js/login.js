(function () {
    //登录
    let name = document.querySelector('#username');
    let num = document.querySelector('#number');
    let password = document.querySelector('#password');
    let inf = document.querySelector('#inf');
    let loginbtn = document.querySelector('#loginbtn');

    // name.value = username;
    name.focus();//聚焦

    loginbtn.onclick = () => {
        let names = name.value.trim();
        let nums = num.value.trim();
        let psw = password.value.trim();

        if (nums && psw && names) {
            $.ajax({
                type: 'post',
                url: '../api/login.php',
                data: {
                    psw: psw,
                    nums: nums,
                    names:names
                },
                success: str => {
                    //console.log(str);
                    //获取cookie判断是否是登陆的，如果没有登陆才可以存cookie
                    let n1 = getCookie('number');
                    let n2 = getCookie('names');
                    // console.log(n1);
                    console.log(n2);
                    if (n1&&n2) {
                        //拿到了：已经登陆，不允许登陆
                        alert('您已经登陆，请退出账号');
                    } else {
                        //可以登陆
                        setCookie('number', nums);
                        setCookie('names', names);
                        location.href = '../index1.html';
                    }
                }
            });
        } else {
            inf.innerHTML = '请输入手机号码';
            inf.style.color = 'red';
        }
    }

})();