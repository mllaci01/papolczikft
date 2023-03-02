<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $mailForm = $_POST['mail'];
        $message = $_POST['message'];

        $mailTo = "kapcsolat@papolczikft.hu";
        $headers = "MIME-Version: 1.0\r\n";
        $headers = "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $headers = "From:".$mailForm;
        $txt = "Üzenet tőle ".($name) . "\r\n".$message;
        

        mail($mailTo, $name, $txt, $headers);

        header("location: succes.html");
    }

    

 
?>