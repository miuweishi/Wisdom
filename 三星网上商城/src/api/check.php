<?php
 header("Content-type:text/html;charset=utf-8");
//连接数据库
include 'conn.php';

//接收前端数据
$sql1 = isset($_REQUEST['sql1']) ? $_REQUEST['sql1'] : ''; //三目运算符

//查询语句
$sql = "$sql1";
//执行语句
$res = $conn->query($sql);
$conn->set_charset('utf8'); 
//发送给前端，查询结果
if ($res->num_rows) {
  //0：找到-》不能注册
  echo 0;
} else {
  echo 1; //可以注册
}

// 3.关闭连接
$res->close(); //关闭结果集
$conn->close();//关闭数据库
