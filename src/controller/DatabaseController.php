<?php 
namespace Website\Mvc\controller;

use Website\Mvc\app\View;

class DatabaseController {

    public function data2017() {
        View::render('database/2017', [
            "title" => "Data Tanaman 2017 & Grafik"
        ]);
    }

    public function data2018() {
        View::render('database/2018', [
            "title" => "Data Tanaman 2018 & Grafik"
        ]);
    }

    public function data2019() {
        View::render('database/2019', [
            "title" => "Data Tanaman 2019 & Grafik"
        ]);
    }

    public function data2020() {
        View::render('database/2020', [
            "title" => "Data Tanaman 2020 & Grafik"
        ]);
    }

    public function dataRekap() {
        View::render('database/rekap', [
            "title" => "Data Rekap Keseluruhan & Grafik"
        ]);
    }
}
?>