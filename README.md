 Hal ini memungkinkan pengguna untuk mencari kondisi cuaca kota mana pun di dunia dan memberikan informasi cuaca terkini. Aplikasi ini mengambil data cuaca menggunakan SheCodes Weather API.
![image](https://github.com/user-attachments/assets/2671e8cb-0935-4075-9199-3aef0d3451fd)




# Instalasi
Untuk memulai proyek ini, ikuti langkah-langkah berikut:

Kloning repositori:
- git clone https://github.com/yourusername/weather-app.git
cd weather-app
- npm install
- npm start
- Buka browser Anda dan arahkan ke
  http://localhost:3000

# Alat Yang Digunakan
- React.js
- HTML
- CSS
- JavaScript
- VS Code
- SheCodes Weather API

# Fitur
- Menggunakan JSX dan komponen React: Aplikasi ini dibangun menggunakan sintaks JSX dan komponen React untuk struktur kode yang modular dan mudah dipelihara.
- Props dan events untuk komunikasi antar komponen: Komunikasi antara komponen dilakukan menggunakan props dan events.
Formulir dan validasi: Aplikasi ini mencakup formulir sederhana dengan validasi untuk memastikan kota dimasukkan sebelum melakukan pencarian.
- Integrasi API publik dengan AJAX: Data cuaca diambil dari API OpenWeatherMap menggunakan Axios.
Bootstrap untuk styling: Bootstrap digunakan untuk styling aplikasi, memastikan antarmuka pengguna yang responsif dan modern.
- Ikon cuaca: Ikon cuaca ditampilkan untuk merepresentasikan kondisi cuaca saat ini secara visual.
- Penggunaan
Masukkan nama kota di kolom input.
Klik tombol "Search".
Cuaca saat ini untuk kota yang dimasukkan akan ditampilkan, termasuk suhu dan deskripsi cuaca.

# Komponen
- App.js
Komponen utama yang mengelola state dan menangani input pengguna. Komponen ini bertanggung jawab untuk mengambil data cuaca dari API dan menampilkannya menggunakan komponen Weather.

- Weather.js
Komponen ini menerima data cuaca sebagai props dan menampilkannya. Ini termasuk nama kota, suhu, deskripsi cuaca, dan ikon cuaca.

- Integrasi API
Aplikasi ini menggunakan API OpenWeatherMap untuk mengambil data cuaca. Data diambil menggunakan Axios melalui permintaan GET ke endpoint API, dengan parameter seperti nama kota dan API key.

# Demo App
https://weatherapp-pi-weld.vercel.app/
