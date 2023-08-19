<?php

namespace Website\Mvc\controller;

use Website\Mvc\app\View;
use Website\Mvc\service\ContactService;

class HomeController
{
    public function index()
    {
        View::render('home/index', [
            "title" => "Home"
        ]);
    }

    public function dinasPertanian()
    {
        View::render('other/dinaspertanian', [
            "title" => "Dinas Pertanian"
        ]);
    }

    public function kabupaten()
    {
        View::render('other/kabupaten', [
            "title" => "Kabupaten Labuhanbatu Selatan"
        ]);
    }

    public function penanaman()
    {
        View::render('tanaman/penanaman', [
            "title" => "Penanaman"
        ]);
    }

    public function perawatan()
    {
        View::render('tanaman/perawatan', [
            "title" => "Perawatan"
        ]);
    }

    public function pemanenan()
    {
        View::render('tanaman/pemanenan', [
            "title" => "Pemanenan"
        ]);
    }

    public function contact()
    {
        View::render('other/contact', [
            "title" => "Layanan Konsultasi"
        ]);
    }

    public function postContact()
    {
        $data = [
            "name" => $_POST['name'],
            "email" => $_POST['email'],
            "subject" => $_POST['subject'],
            "message" => $_POST['message'],
        ];

        $contact = new ContactService();
        $send = $contact->sendContact($data);

        if ($send) {
            View::redirect('/');
        } else {
            View::render('other/contact', [
                "title" => "Layanan Konsultasi"
            ]);
        }
    }

    public function geografis()
    {
        View::render('other/geografis', [
            "title" => "Geografis"
        ]);
    }

    public function database()
    {
        View::render('other/database', [
            "title" => "Database GIS Labuhanbatu Selatan"
        ]);
    }

    public function foto()
    {
        View::render('other/foto', [
            "title" => "Document Foto Lapangan"
        ]);
    }

    public function notfound()
    {
        View::render('other/404', [
            "title" => "404 Bad Request"
        ]);
    }
}
