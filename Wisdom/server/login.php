<?php
header("content-type:text/html;charset=utf-8");

$db = mysqli_connect("localhost", "root", "", "wisdom");

$username = $_REQUEST["username"];
$password = $_REQUEST["password"]; 

$sql =  "SELECT * FROM user WHERE username='$username'";

$result = mysqli_query($db,$sql);

if(mysqli_num_rows($result) == 0)
{
    // [1] 如果不存在，返回错误的提示信息(该用户名不存在!)
    echo '该用户名不存在!';
    // echo "123";
}else{
  $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
  // var_dump($data)
  $_password = $data[0]["password"];
  if($_password != $password)
  {
    // 如果密码不正确，那么就返回错误的提示信息(对不起，您的密码不正确！)
      echo '{"status":"error","msg":"对不起，您的密码不正确！"}';
  }else{
    // 如果密码正确，那么就返回登录成功。
    echo '{"status":"success","msg":"登录成功！！！"}';
  }
}

?>