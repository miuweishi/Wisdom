//1.渲染头部的选项卡的数据
(function () {
    function getdata(url, str, fn) {
        //url:接口路径  str：sql语句  fn：成功获取数据后执行的回调,在这里做DOM操作
        //console.log('发送请求了');
        let p = new Promise(resolve => {
            $.ajax({
                type: 'get',
                url: url,
                data: {
                    sql: str,
                },
                success: str => {
                    //console.log(str);
                    resolve(str);//把DOM操作放到外面进行
                    // fn(str);
                }
            });
        });

        p.then(data => {
            if (fn) {//选填
                fn(data);
            }
        });
    }
    let url = 'api/select.php';
    let str = 'SELECT * FROM xmenu';
    getdata(url, str, data => {
        //console.log(data);
        //console.log('发送请求了');
        let arr = JSON.parse(data);
        //console.log(arr);
        let str = arr.map(item => {
            return ` <li data-id= ${item.gid}>
                        <img src="${item.url}" alt="">
                        <p>${item.name}</p>
                    </li> `
        }).join('');
        //console.log(str);
        $('.listBox .l-left').html(str);//渲染数据
    });
})();


//2.回到顶部
(function () {
    function toTop(opt) {
        let defaultOpt = {
            //ele : 点击后可以回到顶部的元素
            height: 300,//滚轮滚动多少距离时，回到顶部框出现
            iw: 60,
            ih: 60,//框的宽高
            speed: 30//回到顶部的速度，越大速度越慢
        }
        Object.assign(defaultOpt, opt);
        let gotop = document.querySelector(defaultOpt.ele);
        gotop.style.width = defaultOpt.iw + 'px';
        gotop.style.height = defaultOpt.ih + 'px';
        window.onscroll = () => {
            if (window.scrollY >= defaultOpt.h) {
                gotop.style.display = 'block';
            } else {
                gotop.style.display = 'none';
            }
        }
        gotop.onclick = () => {
            let timer = setInterval(function () {
                let scrollTop = window.scrollY;
                if (scrollTop <= 0) {
                    clearInterval(timer);
                }
                window.scrollTo(0, scrollTop - (defaultOpt.height));
            }, (defaultOpt.speed));
        }
    }
    toTop({
        ele: '#gotop',
        h: 300,
        iw: 54,
        ih: 54,
        speed: 50
    });
})();

//3.搜索框的下拉菜单
(function () {
    function pullList(opt) {
        let defaultOpt = {
            iw: 100,
            ih: 120
        }
        Object.assign(defaultOpt, opt);//用默认参数
        let con = document.querySelector(defaultOpt.ele1);
        let box = document.querySelector(defaultOpt.ele2);
        box.style.width = defaultOpt.iw + 'px';
        box.style.height = defaultOpt.ih + 'px';
        //2、点击父元素，菜单出现
        //3、再点击，菜单收起
        var isok = true;
        con.onclick = () => {
            if (isok) {
                box.style.display = 'block';
            }
            else {
                box.style.display = 'none';
            }
            isok = !isok;
        }
    }
    pullList({
        ele1: '#search',
        ele2: '.menu',
        iw: 300,
        ih: 78
    })
})();



//4.点击任何链接都跳转到列表页
(function () {
    let links = document.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = () => {
            location.href = 'html/list.html';
        }
    }
})();



//5.主页中选项卡
(function () {
    let box = document.querySelector('.title_tab');
    let btn = box.querySelector('.btn');
    let btns = btn.querySelectorAll('span');
    let cons = document.querySelector('.con');
    let lists = cons.querySelectorAll('.list');
    for (let i = 0; i < btns.length; i++) {
        // console.log(i);
        btns[i].index = i;
        btns[i].onclick = function () {
            //排他
            for (let j = 0; j < btns.length; j++) {
                btns[j].className = '';
                lists[j].style.display = 'none';
            }
            this.className = 'on';//添加类名
            lists[this.index].style.display = 'block';
        }
    }
})();

//6.个人中心的显示
(function () {
    let ren = document.querySelector('.ren');
    let box = document.querySelector('.zhongxin');
    let admin = document.querySelector('.admin');

    console.log(admin);
    let isok = true;
    ren.onclick = () => {
        if (isok) {
            box.style.display = ' block';
        } else {
            box.style.display = 'none';
        }
        isok = !isok;
    }

    admin.onclick = () => {
        location.href = 'html/reg.html';
    }
})();


//7.主页登录用户名的修改
(function () {
    let admin = document.querySelector('.admin');
    let exit = document.querySelector('.exit');
    let user = getCookie('names');
    function updateStatus() {
        if (user) {
            //登陆的 
            admin.innerHTML = user;
        } else {
            //登出的
            admin.innerHTML = '登录';
        }
    }
    updateStatus();

    //退出删除cookie值
    exit.onclick = () => {
        removeCookie('names');
    }
})();




//8.吸顶菜单
(function () {
    var menu = document.querySelector('#header');
    console.log(menu);

    var ih = menu.offsetTop;//临界值
    console.log(ih);

    window.onscroll = function () {
        var scrollTop = window.scrollY;//获取滚动距离
        console.log(scrollTop);

        if (scrollTop >= ih) {
            menu.className = 'fix';
        } else {
            menu.className = '';
        }
    }
})(); 