<?php
    //连接数据库
    include 'conn.php';

    //接收前端数据
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';
    $nums = isset($_REQUEST['nums']) ? $_REQUEST['nums'] : '';

    //查询语句
    $sql = "INSERT INTO userinf(name,psw,num) VALUES('$name','$psw','$nums')";

    //执行语句
    $res = $conn->query($sql);//insert语句执行后得到的是布尔值

    //var_dump($res);
    if($res) {
        //true：注册成功
        echo 'yes';
    }else{
        //false：失败
        echo 'no';
    }
    
    //3.关闭连接
    $conn->close();//关闭数据库
?>