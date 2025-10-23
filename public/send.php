<?php

 $name= $_REQUEST['name'];
 $address= $_REQUEST['address'];
 $email = $_REQUEST['email'];
 $subject= $_REQUEST['subject'];
 $message = $_REQUEST['message'];

 $to ="systemprogrammer04@gmail.com";
 
 $content = "Name : ". $name. "\r\nAddress : ". $address. "\r\nSubject : ". $subject. "\r\nEmail : ". $email. "\r\n \r\nMessage : \r\n \r\n".$message ;
 

if ( empty($name)|| empty($address)|| empty($subject)|| empty($email)|| empty($message))
{
echo"<script type='text/javascript'>alert('Please fill all correct');
    window.history.go(-1);
    </script>";
}
else 
{ mail($to,$subject,$content);

    echo"<script type='text/javascript'>alert('Your message sent succesfully ');
    window.history.go(-1);
    </script>";
}

?>