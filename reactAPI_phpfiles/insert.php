<?php
require 'connect.php';


// Get the posted data.
$postdata = file_get_contents("php://input"); //data here coming in json format which is posted from browser by user

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);  //converting json data in php Array()
	
print_r($request);
  // Validate. //it is serverside validation and it can be used to check whether data is coming....
  if(trim($request->name) === '')
  {
    return http_response_code(400); //to see error press F12 on browser
  }
	
  // Sanitize
  $name = $request->name;
  $mobile = $request->mobile;
  $date = $request->date; 


  // Store.
  $sql = "INSERT INTO `friendsmaster`(`id`,`name`,`mobile`,`date`) VALUES (null,'{$name}','{$mobile}','{$date}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);    
  }
  else
  {
    http_response_code(422);
  }
}
