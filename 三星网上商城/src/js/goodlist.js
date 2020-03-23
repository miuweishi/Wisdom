
//1.详情页的数据渲染
(function () {
    let gid = decodeURI(location.search.slice(1));
    //console.log(gid);
    function getdata(url, str, fn) {
        //url:接口路径  str：sql语句  fn：成功获取数据后执行的回调,在这里做DOM操作
        // console.log('发送请求了');
        let p = new Promise(resolve => {
            $.ajax({
                type: 'get',
                url: url,
                data: {
                    sql: str
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
    let url1 = '../api/select.php';
    let str1 = `SELECT * FROM biglist WHERE gid=${gid};`;
    getdata(url1, str1, data1 => {
        //console.log(data1);
        //console.log('发送请求了');
        let arr = JSON.parse(data1);
        //console.log(arr);
        let str = `<div class="img-box">
                        <a href="javascript:void(0)"><img src="${arr[0].spic}" alt=""></a>
                    </div>`;
        let str2 = `<div class="nowprice">￥${arr[0].price}</div>`;
        let str3 = `<h1 class="sname">${arr[0].title}</h1>`;
        // let str4 = `<li><a href="javascript:void(0)"><img src="${arr[0].spic}" alt=""></a></li>
        //             <li><a href="javascript:void(0)"><img src="${arr[0].spic}" alt=""></a></li>
        //             <li><a href="javascript:void(0)"><img src="${arr[0].spic}" alt=""></a></li>
        //             <li><a href="javascript:void(0)"><img src="${arr[0].spic}" alt=""></a></li>
        //             <li><a href="javascript:void(0)"><img src="${arr[0].spic}" alt=""></a></li>
        //             <li><a href="javascript:void(0)"><img src="${arr[0].spic}" alt=""></a></li>
        //             <li><a href="javascript:void(0)"><img src="${arr[0].spic}" alt=""></a></li>`
        $('.img-box').html(str);
        $('.nowprice').html(str2);
        $('.sname').html(str3);
        // $('.slideScroll').html(str4);

        // creat(arr);

        // let tobuy = document.querySelector('.tobuy');
        // tobuy.onclick = function () {

        //     let url2 = '../api/check.php';
        //     let str = `SELECT * FROM ordergoods where oid = ${gid}`;
        //     ajax({
        //         type: 'get',
        //         url: url2,
        //         data: {
        //             sql1: str
        //         },
        //         success: str => {
        //             // console.log(str);
        //             if (str == 1) {
        //                 let img = arr[0].spic;
        //                 let price = arr[0].price;
        //                 let name = arr[0].title;
        //                 console.log(img);
        //                 let str4 = `INSERT INTO ordergoods (src,title,price) VALUES '${img}',${price},'${name}')`;
        //                 let url3 = '../api/other.php';
        //                 getdata(url3, str4, data3 => {
        //                     //console.log('发送请求了');
        //                     console.log(data3);
        //                 });


        //             } else {
        //                 // console.log(img);

        //             }
        //         }
        //     });

    })
})();


//2.切图
(function () {

    //鼠标移入小图，切换大图

    var smallImgs = document.getElementsByClassName('kind-img');//小图集合
    var bigpic = document.getElementsByClassName('img-box');
    for (var j = 0; j < smallImgs.length; j++) {
        //   console.log(smallImgs.length);
        smallImgs[j].index = j;
        smallImgs[j].onclick = function () {
            console.log(this.index);
            for (var k = 0; k < smallImgs.length; k++) {
                smallImgs[k].style.background = '#ccc';
            }
            this.style.background = 'pink';
            bigpic.src = this.src;//点击的那张的src付给大图
            console.log(bigpic.src);

        }
    }

})();



//3.吸顶菜单
(function () {
    var menu = document.querySelector('.toggle');
    console.log(menu);

    var ih = menu.offsetTop;//临界值
    console.log(ih);

    window.onscroll = function () {
        var scrollTop = window.scrollY;//获取滚动距离
        console.log(scrollTop);
        console.log(ih);
        if (scrollTop >= ih) {
            menu.className = 'fix toggle';
        } else {
            menu.className = 'toggle';
        }
    }
})();



//4.从详情页链接到购物车页

let tobuy =document.querySelector('.tobuy');

tobuy.onclick = ()=>{
    location.href = 'shopcar.html';
}