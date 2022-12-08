<?php
// Check for empty fields

if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
$to = "$email_address";             //받는 사람
$title = '취업 문의 입니다.';            //메일 제목
$contents = "안녕하세요. $name 입니다.\r\n $message";      //메일 내용

$headers = array(
   'From' => 'jangkwangseok90@icloud.com',
   'Reply-To' => 'jangkwangseok90@icloud.com',
   'X-Mailer' => 'PHP/' . phpversion()
);


$result = mail($to, $title, $contents, $headers);

echo "메일 성공 여부 : ";

if($result){echo "성공";} else {echo "실패";}

return true;	
?>