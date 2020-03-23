//注册：
(function () {

    let regBtn = document.querySelector('#regbtn');
    let username = document.querySelector('#username');
    let num = document.querySelector('#number');
    let password = document.querySelector('#password');
    let inf = document.querySelector('#inf');
    //1.验证用户名
    username.onblur = () => {
        let name = username.value.trim();
        //console.log(name);
        if (name) {
            $.ajax({
                type: 'post',
                url: '../api/checkname.php',
                data: {
                    name: name
                },
                success: str => {
                    console.log(str);
                    if (str == 'no') {
                        inf.innerHTML = '* 该用户名太受欢迎';
                        inf.style.color = 'red';
                    } else {
                        inf.innerHTML = '* 该用户名可以注册';
                        inf.style.color = 'green';
                    }
                }
            })
        } else {
            inf.innerHTML = '*请输入用户名';
            inf.style.color = 'red';
        }
    }

    //2.注册
    regBtn.onclick = () => {
        let name = username.value.trim();
        let nums = num.value.trim();
        let psw = password.value.trim();

        if (name && nums && psw) { 
                $.ajax({
                    type: 'post',
                    url: '../api/reg.php',
                    data: {
                        name: name,
                        nums: nums,
                        psw: psw
                    },
                    success: str => {
                        console.log(str);
                        if (str == 'no') {
                            alert('注册失败')
                        } else {
                            alert('注册成功');
                            location.href = 'login.html';
                        }
                    }
                })
        } else {
            alert('请输入完整的信息');
        }
        
    }
})();