<?php
require 'connect.php';
error_reporting(E_ERROR);
$mydetails = [];
$sql = "Select * from friendsmaster order by id";

if($result = mysqli_query($con,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $mydetails[$cr]['id'] = $row['id'];
        $mydetails[$cr]['name'] = $row['name'];
        $mydetails[$cr]['mobile'] = $row['mobile'];        
        $mydetails[$cr]['date'] = $row['date'];        
        $cr++;
    }    
    echo json_encode($mydetails); //converts php array to json
}
else{
    http_response_code(404);
}
?>