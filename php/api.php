<?php 
session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$email = isset($_GET['email']) ? trim(htmlentities($_GET['email'])):'';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://www.namecheap.com/Cart/ajax/Validation.ashx");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "emailToValidate=".$email."&actionName=nc_signup");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');
$headers = array();
$headers[] = "user-agent: Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36";
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$result = curl_exec($ch);
$obj = json_decode($result);
if($obj->IsValid == false){   
$data = array('error_code' => 1, 'email' => $email, 'status' => 'unknown');
echo json_encode($data);
exit();
}else{
$data = array('error_code' => 1, 'email' => $email, 'status' => 'live');
echo json_encode($data);
exit();
}
?>