<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);//converting json data in php Array()
	

  // Validate.
  // if ((int)$request->data->id < 1 || trim($request->data->model) == '' || (int)$request->data->price < 1) {
  //   return http_response_code(400);
  // }    
  // Sanitize.
  $id   = $_GET['id'];
  $name = $request->name;
  $mobile =$request->mobile;
  $date =$request->date;
  
  // Update.
  $sql = "UPDATE `friendsmaster` SET `name`='$name',`mobile`='$mobile',`date`='$date' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
