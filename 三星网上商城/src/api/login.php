<?php
    //连接数据库
    include 'conn.php';

    //接收前端数据
    $names = isset($_REQUEST['names']) ? $_REQUEST['names'] : '';
    $nums = isset($_REQUEST['nums']) ? $_REQUEST['nums'] : '';
    $psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';

    //查询语句
    $sql = "SELECT * FROM userinf WHERE num='$nums' AND names='$names'";
    
    //执行语句
    $res = $conn->query($sql);//insert语句执行后得到的是布尔值

    //var_dump($res);
    if($res->num_rows) {
        //true：可以登陆
        echo 'yes';
    }else{
        //false：不可以登陆
        echo 'no';
    }
    
    //3.关闭连接
    $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>