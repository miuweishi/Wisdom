//1.数据渲染
(function () {
    function getdata(url, str, fn) {
        //url:接口路径  str：sql语句  fn：成功获取数据后执行的回调,在这里做DOM操作
        //console.log('发送请求了');
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
    let url = '../api/select.php';
    let str = 'SELECT * FROM biglist';
    getdata(url, str, data => {
        // console.log(data);
        console.log('发送请求了');
        let arr = JSON.parse(data);
        // console.log(arr);
        let str = arr.map(item => {
            return ` <div id="alllist" class="row">
                        <div class="lists" data-id="${item.gid}">
                            <div class="list-boxing">
                                <a href="###">
                                    <img src="${item.spic}" alt="">
                                </a>
                            </div>
                            <div class="list-color"></div>
                            <div class="list-name">
                                <h2><a href="###">${item.title}</a></h2>
                                <p class="price">
                                    <span>￥${item.price}</span>
                                    <del>${item.oldprice}</del>
                                </p>
                            </div>
                        </div>
                 </div>`;
        }).join('');
        //console.log(str);
        $('#alllist').html(str);//渲染数据

    });
    
//2.点击链接跳转到列表页并传参
    let alllist = document.querySelector('#alllist');
    console.log(alllist);
    alllist.onclick = function (ev) {
        //console.log(ev.target);
        let gid =ev.target.parentNode.parentNode.parentNode.getAttribute('data-id');
        console.log(gid);
        location.href = 'goodslist.html?'+ gid;
        
      }
})();


