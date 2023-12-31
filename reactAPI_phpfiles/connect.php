<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");


// db credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'friendsdb');
define('DB_PORT','3308');

// Connect with the database.
function connect()
{
  $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME,DB_PORT);

  if (mysqli_connect_errno()) {
    die("Failed to connect:" . mysqli_connect_error());
  }
  // else{
  //   echo "Connection is successfull";
  // }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();