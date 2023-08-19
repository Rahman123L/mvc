<?php
require_once __DIR__ . '/vendor/autoload.php';

use Website\Mvc\app\Router;
use Website\Mvc\controller\DatabaseController;
use Website\Mvc\controller\HomeController;

Router::add('GET', '/', HomeController::class, 'index', []);
Router::add('GET', '/dinas-pertanian', HomeController::class, 'dinasPertanian', []);
Router::add('GET', '/kabupaten', HomeController::class, 'kabupaten', []);
Router::add('GET', '/contact', HomeController::class, 'contact', []);
Router::add('POST', '/contact', HomeController::class, 'postContact', []);
Router::add('GET', '/penanaman', HomeController::class, 'penanaman', []);
Router::add('GET', '/perawatan', HomeController::class, 'perawatan', []);
Router::add('GET', '/pemanenan', HomeController::class, 'pemanenan', []);
Router::add('GET', '/geografis', HomeController::class, 'geografis', []);
Router::add('GET', '/database', HomeController::class, 'database', []);
Router::add('GET', '/foto-lapangan', HomeController::class, 'foto', []);
Router::add('GET', '/data-2017', DatabaseController::class, 'data2017', []);
Router::add('GET', '/data-2018',  DatabaseController::class, 'data2018', []);
Router::add('GET', '/data-2019',  DatabaseController::class, 'data2019', []);
Router::add('GET', '/data-2020',  DatabaseController::class, 'data2020', []);
Router::add('GET', '/data-rekap',  DatabaseController::class, 'dataRekap', []);
Router::add('GET', '/404', HomeController::class, 'notfound', []);

Router::run();
