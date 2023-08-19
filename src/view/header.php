<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title><?php echo $model['title']; ?></title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Logo_of_Ministry_of_Agriculture_of_the_Republic_of_Indonesia.svg/900px-Logo_of_Ministry_of_Agriculture_of_the_Republic_of_Indonesia.svg.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">
</head>

<body>

<!-- ======= Header ======= -->
<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <h1>Pertanian</h1>
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="/" class="active">Home</a></li>
          <li class="dropdown"><a href="#"><span>Profil</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="kabupaten">Kabupaten Labuhanbatu Selatan</a></li>
              <li><a href="dinas-pertanian">DINAS Pertanian Labuhanbatu Selatan</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Tanaman</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="penanaman">Penanaman</a></li>
              <li><a href="perawatan">Perawatan</a></li>
              <li><a href="pemanenan">Pemanenan</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Database</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="database">GIS Labuhanbatu Selatan</a></li>
              <li><a href="data-2017">Data 2017</a></li>
              <li><a href="data-2018">Data 2018</a></li>
              <li><a href="data-2019">Data 2019</a></li>
              <li><a href="data-2020">Data 2020</a></li>
              <li><a href="data-rekap">Data Rekap</a></li>
              <li><a href="foto-lapangan">Foto</a></li>
            </ul>
          </li>
          <li><a href="contact">Kontak</a></li>
        </ul>
      </nav><!-- .navbar -->

    </div>
  </header>
  <!-- End Header -->