<?php

namespace Website\Mvc\service;

class ContactService
{
    public function sendContact(array $data)
    {
        $to = "febryananda17@gmail.com";
        $subject = "Pesan dari {$data['subject']}";
        $message = "Nama: " . $data["name"] . "\r\n"
            . "Email: " . $data["email"] . "\r\n"
            . "Pesan: " . $data["message"];
        $headers = "From: " . $data["name"] . " <" . $data["email"] . ">\r\n"
            . "Reply-To: " . $data["email"] . "\r\n"
            . "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $message, $headers)) {
            return true;
        } else {
            return false;
        }
    }
}
