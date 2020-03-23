<?php
    //连接数据库
    include 'conn.php';

    //接收前端数据
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';

    //查询语句
    $sql = "SELECT * FROM userinf WHERE name='$name'";

    //执行语句
    $res = $conn->query($sql);

    //var_dump($res);
    if($res->num_rows) {
        //非0：找到-》不能注册
        echo 'no';
    }else{
        echo 'yes';
    }
    
    //3.关闭连接
    $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>