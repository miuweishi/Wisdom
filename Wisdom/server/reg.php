<?php
header("content-type:text/html;charset=utf-8");
# 001-先连接数据库
# window系统默认的用户名是"root" 默认密码为""
$db = mysqli_connect("localhost", "root", "", "wisdom");

# 002-获取客户端提交的参数
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$mobile    = $_REQUEST["mobile"];
// print_r($username);
// print_r($password);
// print_r($mobile);

# 003-对数据库执行操作
$sql = "SELECT * FROM user WHERE username='$username'";
// print_r($sql);
# 执行SQL语句
$result = mysqli_query($db,$sql);

if(mysqli_num_rows($result) == 0)
{
  # 该用户不存在可以直接注册
  # 具体：向数据库中写入一行数据
  $sql = "INSERT INTO `user` (`id`, `username`, `password`, `mobile`) VALUES (NULL, '$username', '$password', '$mobile')";
  $result = mysqli_query($db,$sql);
  echo "yes";
}else{
  # 该用户已经存在，不能再注册
  echo 'no';
}
?>