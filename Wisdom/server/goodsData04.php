<?php
    /*
        php方式操纵数据库：
            1.连接数据库
            2.书写查询语句->执行语句->得到结果->返回给前端
            3.关闭连接
    */
    include 'conn.php';//引入外部文件
    // $gid = isset($_REQUEST['str'])
    $gid = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
    var_dump($gid);
    //2.书写查询语句->执行语句->得到结果->返回给前端
    //书写查询语句
    $sql = "SELECT * FROM list WHERE gid = '$gid' ";//记得现在navicat检测没有问题再拿过来用
    // $sql = "select * from biao where id='".$_GET['gid']."'";
    //执行语句
    // $res = $conn->query($sql);//得到的是结果集，如果想要查询到的数据部分还有继续提取

    // var_dump($res);
    // $arr = $res->fetch_all(MYSQLI_ASSOC);//得到数组  [{},{},{}]

    // var_dump($arr);
    //查询前设置编码，防止输出乱码
    // $conn->set_charset('utf8');
    
    //返回给前端
    // echo json_encode($arr,JSON_UNESCAPED_UNICODE);//把数组转成字符串，传给前端
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_all($result);
    echo ($data);
    //3.关闭连接
    // $result->close();//关闭结果集
    // $conn->close();//关闭数据库

?>


