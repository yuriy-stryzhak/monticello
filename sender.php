<?php

    $to  = "" ; 
    $from = "Олимп Персонал<info@olimp-rabota.ru>";
    $subject = "Новая заявка";
    $subject = "=?utf-8?B?".base64_encode($subject)."?=";
    $headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";

    if(isset($_POST["submit"])){
        $name = $_POST["name"];
        $email = $_POST["email"];
        if(!empty($email)){
            $message = "Здравствуйте!<br />У вас новая заявка!<br /><br />Имя: <b>$name</b><br />Телефон: <b>$email</b>";
            mail($to, $subject, $message, $headers);
            header("Location: thanks-page.html");
            exit;
        }
    }

    if(isset($_POST["submit1"])){
        $name1 = $_POST["name1"];
        $phone1 = $_POST["phone1"];
        if(!empty($phone1)){
            $message = "Здравствуйте!<br />У вас новая заявка!<br /><br />Имя: <b>$name1</b><br />Телефон: <b>$phone1</b>";
            mail($to, $subject, $message, $headers);
            header("Location: thanks-page.html");
            exit;
        }
    }

    if(isset($_POST["submit2"])){
        $name2 = $_POST["name2"];
        $phone2 = $_POST["phone2"];
        $email2 = $_POST["email2"];
        $personal2 = $_POST["personal2"];
        if(!empty($phone2)){
            $message = "Здравствуйте!<br />У вас новая заявка!<br /><br />Имя: <b>$name2</b><br />Телефон: <b>$phone2</b><br />E-mail: <b>$email2</b><br />Интересующий персонал: <b>$personal2</b>";
            mail($to, $subject, $message, $headers);
            header("Location: thanks-page.html");
            exit;
        }
    }

    if(isset($_POST["submit3"])){
        $name3 = $_POST["name3"];
        $phone3 = $_POST["phone3"];
        $email3 = $_POST["email3"];
        $personal3 = $_POST["personal3"];
        if(!empty($phone3)){
            $message = "Здравствуйте!<br />У вас новая заявка!<br /><br />Имя: <b>$name3</b><br />Телефон: <b>$phone3</b><br />E-mail: <b>$email3</b><br />Интересующий персонал: <b>$personal3</b>";
            mail($to, $subject, $message, $headers);
            header("Location: thanks-page.html");
            exit;
        }
    }


