<?php
$EmailFrom = "";
$Message = "";
$EmailTo = "cromodder@gmail.com";
$Subject = "CROgraph";
if(isset($_POST['Email'])){$EmailFrom = $_POST['Email'];}
if(isset($_POST['Message'])){$Message = $_POST['Message'];}
$Body = "";
$Body .= $Message;
$Body .= "\n";
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
if($success){echo "success";}else{echo "error";}
?>