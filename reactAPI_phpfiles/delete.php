<?php

// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Credentials: true');
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json; charset=UTF-8");



// $server = "localhost";
// $username = "root";
// $password = "";
// $database = "smartatmdb";

// $id = $_REQUEST['id'];

// $link = mysqli_connect($server, $username, $password, $database);

// $link->query("delete from customer where id=$id");
// // echo($id);
// $link->close();
// http_response_code(204);
// // echo "<br> RECORD SUCCESSFULLY DELETED........";


require 'connect.php';
$id=$_GET['id'];

$sql = "DELETE FROM `friendsmaster` WHERE `id` = '{$id}' LIMIT 1";

if(mysqli_query($con,$sql))
{
    http_response_code(204);
}
else
{
    return http_response_code(422);
}
?>


