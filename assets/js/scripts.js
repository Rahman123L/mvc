var map = L.map("map").setView([1.8943, 100.0954], 11);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker1 = L.marker([1.7421, 100.3029]).addTo(map);
marker1.bindPopup(`<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
<li class="list-group-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/%28Peta_Lokasi%29_Kecamatan_Torgamba%2C_Labuhanbatu_Selatan.svg/300px-%28Peta_Lokasi%29_Kecamatan_Torgamba%2C_Labuhanbatu_Selatan.svg.png" width="100%" >
</li>
  <li class="list-group-item">Peta lokasi Kecamatan Torgamba</li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Negara</p>
        <p class="m-0">Indonesia</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Provinsi</p>
         <p class="map-p m-0">Kabupaten</p>
         </div>
         <div>
         <p class="m-0">Sumatera Utara</p>
         <p class="m-0">Labuhanbatu Selatan</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Pemerintahan</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Camat</p>
        <p class="m-0">Ahmad Rivai Harahap, S.STP, M.AP</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Populasi (2021)</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Total</p>
         <p class="map-p m-0">Kepadatan</p>
         </div>
         <div>
         <p class="m-0">109.970 jiwa</p>
         <p class="m-0">73/km2 (190/sq mi)</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Pos</p>
        <p class="m-0">21466</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Kemendagri</p>
        <p class="m-0">12.22.03</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Luas</p>
  <p class="map-p m-0">Desa/kelurahan</p>
  </div>
  <div>
  <p class="m-0">1.515,96 km²</p>
  <p class="m-0">23 desa</p>
  <p class="m-0">1 kelurahan</p>
  </div>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Luas Panen habis dibongkar</p>
    </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Kacang Panjang</p>
  <p class="map-p m-0">Kangkung</p>
  </div>
  <div>
  <p class="m-0">16.5</p>
  <p class="m-0"> 37.75</p>
  </div>
</li>
</ul>
</div>`);

var marker2 = L.marker([1.8943, 100.0954]).addTo(map);
marker2.bindPopup(`<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
<li class="list-group-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/%28Peta_Lokasi%29_Kecamatan_Kotapinang%2C_Labuhanbatu_Selatan.svg/300px-%28Peta_Lokasi%29_Kecamatan_Kotapinang%2C_Labuhanbatu_Selatan.svg.png" width="100%" >
</li>
  <li class="list-group-item">Peta lokasi Kecamatan Kotapinang</li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Negara</p>
        <p class="m-0">Indonesia</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Provinsi</p>
         <p class="map-p m-0">Kabupaten</p>
         </div>
         <div>
         <p class="m-0">Sumatera Utara</p>
         <p class="m-0">Labuhanbatu Selatan</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Pemerintahan</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Camat</p>
        <p class="m-0">Mukti Ali</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Populasi (2021)</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Total</p>
         <p class="map-p m-0">Kepadatan</p>
         </div>
         <div>
         <p class="m-0">64.455 jiwa</p>
         <p class="m-0">189/km2 (490/sq mi)</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Pos</p>
        <p class="m-0">21464</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Kemendagri</p>
        <p class="m-0">12.22.01</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Luas</p>
  <p class="map-p m-0">Desa/kelurahan</p>
  </div>
  <div>
  <p class="m-0">340,55 km²</p>
  <p class="m-0">9 desa</p>
  <p class="m-0">1 kelurahan</p>
  </div>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Luas Panen habis dibongkar</p>
    </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Kacang Panjang</p>
  <p class="map-p m-0">Kangkung</p>
  </div>
  <div>
  <p class="m-0">9.75</p>
  <p class="m-0">11.75</p>
  </div>
</li>
</ul>
</div>`);

var marker3 = L.marker([1.8791, 99.9378]).addTo(map);
marker3.bindPopup(`<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
<li class="list-group-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/%28Peta_Lokasi%29_Kecamatan_Silangkitang%2C_Labuhanbatu_Selatan.svg/300px-%28Peta_Lokasi%29_Kecamatan_Silangkitang%2C_Labuhanbatu_Selatan.svg.png" width="100%" >
</li>
  <li class="list-group-item">Peta lokasi Kecamatan Silangkitang</li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Negara</p>
        <p class="m-0">Indonesia</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Provinsi</p>
         <p class="map-p m-0">Kabupaten</p>
         </div>
         <div>
         <p class="m-0">Sumatera Utara</p>
         <p class="m-0">Labuhanbatu Selatan</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Pemerintahan</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Camat</p>
        <p class="m-0">Makmur Karim Lubis, S.Pd.I, M.Pd.I</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Populasi (2021)</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Total</p>
         <p class="map-p m-0">Kepadatan</p>
         </div>
         <div>
         <p class="m-0">30.728 jiwa</p>
         <p class="m-0">101/km2 (260/sq mi)</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Pos</p>
        <p class="m-0">21461</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Kemendagri</p>
        <p class="m-0">12.22.05</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Luas</p>
  <p class="map-p m-0">Desa/kelurahan</p>
  </div>
  <div>
  <p class="m-0">303,70 km²</p>
  <p class="m-0">6 desa</p>
  </div>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Luas Panen habis dibongkar</p>
    </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Kacang Panjang</p>
  <p class="map-p m-0">Kangkung</p>
  </div>
  <div>
  <p class="m-0">44.75</p>
  <p class="m-0">28</p>
  </div>
</li>
</ul>
</div>`);

var marker3 = L.marker([1.7619, 99.9526]).addTo(map);
marker3.bindPopup(`<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
<li class="list-group-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/%28Peta_Lokasi%29_Kecamatan_Sungai_Kanan%2C_Labuhanbatu_Selatan.svg/300px-%28Peta_Lokasi%29_Kecamatan_Sungai_Kanan%2C_Labuhanbatu_Selatan.svg.png" width="100%" >
</li>
  <li class="list-group-item">Peta lokasi Kecamatan Sungai Kanan</li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Negara</p>
        <p class="m-0">Indonesia</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Provinsi</p>
         <p class="map-p m-0">Kabupaten</p>
         </div>
         <div>
         <p class="m-0">Sumatera Utara</p>
         <p class="m-0">Labuhanbatu Selatan</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Pemerintahan</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Camat</p>
        <p class="m-0">Syarifah Hafni Siregar, SH. MM</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Populasi (2021)</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Total</p>
         <p class="map-p m-0">Kepadatan</p>
         </div>
         <div>
         <p class="m-0">48.447 jiwa</p>
         <p class="m-0">70/km2 (200/sq mi)</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Pos</p>
        <p class="m-0">21465</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Kemendagri</p>
        <p class="m-0">12.22.04</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Luas</p>
  <p class="map-p m-0">Desa/kelurahan</p>
  </div>
  <div>
  <p class="m-0">696,18 km²</p>
  <p class="m-0">11 desa</p>
  </div>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Luas Panen habis dibongkar</p>
    </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Kacang Panjang</p>
  <p class="map-p m-0">Kangkung</p>
  </div>
  <div>
  <p class="m-0">29.5</p>
  <p class="m-0">27.75</p>
  </div>
</li>
</ul>
</div>`);

var marker4 = L.marker([2.0478, 100.1943]).addTo(map);
marker4
  .bindPopup(
    `<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
<li class="list-group-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/%28Peta_Lokasi%29_Kecamatan_Kampung_Rakyat%2C_Labuhanbatu_Selatan.svg/300px-%28Peta_Lokasi%29_Kecamatan_Kampung_Rakyat%2C_Labuhanbatu_Selatan.svg.png" width="100%" >
</li>
  <li class="list-group-item">Peta lokasi Kecamatan Kampung Rakyat</li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Negara</p>
        <p class="m-0">Indonesia</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Provinsi</p>
         <p class="map-p m-0">Kabupaten</p>
         </div>
         <div>
         <p class="m-0">Sumatera Utara</p>
         <p class="m-0">Labuhanbatu Selatan</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Pemerintahan</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Camat</p>
        <p class="m-0">Wahdi Pohan, S,Ip</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Populasi (2021)</p>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
         <div>
         <p class="map-p m-0">Total</p>
         <p class="map-p m-0">Kepadatan</p>
         </div>
         <div>
         <p class="m-0">60.494 jiwa</p>
         <p class="m-0">85/km2 (220/sq mi)</p>
         </div>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Pos</p>
        <p class="m-0">21463</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
        <p class="map-p m-0">Kode Kemendagri</p>
        <p class="m-0">12.22.02</p>
  </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Luas</p>
  <p class="map-p m-0">Desa/kelurahan</p>
  </div>
  <div>
  <p class="m-0">709,15 km²</p>
  <p class="m-0">15 desa</p>
  </div>
  <li class="list-group-item px-2 d-flex justify-content-center">  
        <p class="map-p m-0">Luas Panen habis dibongkar</p>
    </li>
  <li class="list-group-item px-2 d-flex justify-content-between">  
  <div>
  <p class="map-p m-0">Kacang Panjang</p>
  <p class="map-p m-0">Kangkung</p>
  </div>
  <div>
  <p class="m-0">11</p>
  <p class="m-0">28.25</p>
  </div>
</li>
</ul>
</div>`
  );

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on("click", onMapClick);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);
