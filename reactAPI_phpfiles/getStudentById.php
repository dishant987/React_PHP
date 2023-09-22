<?php

require 'connect.php';

// Extract, validate and sanitize the id.
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;
// echo $id;
if(!$id)
{
  return http_response_code(400);  
}


$sql = "SELECT * FROM `friendsmaster` WHERE `id` ='{$id}' LIMIT 1";

  $result = mysqli_query($con,$sql);
  // echo $result;
  $row = mysqli_fetch_assoc($result);
  // echo $row;
$json = json_encode($row);
 echo $json;

// require 'connect.php';
// $id = $_GET['id'];

// $sql = "SELECT * FROM `students` WHERE `sId` ='{$id}' LIMIT 1";

//   $result = mysqli_query($con,$sql);
//   $row = mysqli_fetch_assoc($result);
// //   echo $row;
// echo $json = json_encode($row);
// //  echo $json;
