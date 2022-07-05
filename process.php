<?php
// Get data from form 
$name = $_POST['name'];
$email= $_POST['email'];
$phone = $_POST['phone'];
$budget = $_POST['budget'];
$service = $_POST['service'];
$message= $_POST['message'];
 
$to = "swapnildarge65@gmail.com";
$subject = "The message from Reverse Thought Creative Studio visitor";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt ="Name = ". $name . "\r\n  Email = "
    . $email . "\r\n  Phone = "
    . $phone . "\r\n  Budget = "
    . $budget . "\r\n Service =" . $service .
    "\r\n Message =" . $message;
 
$headers = "From: swapnildarge65@gmail.com" . "\r\n" .
            "CC: test@gmail.com";

if($email != NULL) {
    mail($to, $subject, $txt, $headers);
    echo('<script>alert("Thank you for visiting our site. We will contact you soon!!")</script>');
}

else{
    echo('<script>alert("Sorry!! Message is not sent")</script>');
}

// Redirect to
header("Location:index.html");
?>