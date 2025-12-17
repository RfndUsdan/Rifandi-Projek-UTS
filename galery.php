<?php
// Pastikan path ke file config benar
include 'config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galery Magic Chess</title>
    <link rel="stylesheet" href="./css/galery.css">
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css" rel="stylesheet"/>
</head>
<body>
    <header class="container">
        <div class="judul">
            <h1>Magic Chess Gallery</h1>
        </div>
        <ul class="menu">
            <li><a href="index.php">Beranda</a></li>
            <li><a href="galery.php">Galery</a></li>
<<<<<<< HEAD
            <li><a href="tierlist.php">Tierlist</a></li>
=======
            <li><a href="tierlist.html">Lineup META</a></li>
>>>>>>> d34df4cffdfc47b4ecdc4d0405d2d2f55c2a6f97
        </ul>
    </header>

    <main class="container">
        
        <h2 style="margin-top: 20px;">Daftar Commander</h2>
        
        <div class="filter-container">
            <button class="filter-btn active" data-type="all">Semua</button>
            <button class="filter-btn" data-type="combat">Combat</button>
            <button class="filter-btn" data-type="strategy">Strategy</button>
            <button class="filter-btn" data-type="survival">Survival</button>
            <button class="filter-btn" data-type="resource">Resource</button>
        </div>

        <input type="text" id="search-commander" placeholder="Cari commander..." />
        
        <div id="gallery-container" class="gallery-grid">
            <?php
            // Query ambil semua commander
            $sql = "SELECT * FROM commanders ORDER BY name ASC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    // Siapkan data untuk atribut filter (lowercase agar pencarian mudah)
                    $type = strtolower($row['type']); 
                    $name = strtolower($row['name']);
            ?>
                <a href="detail.php?id=<?php echo $row['id']; ?>" 
                   class="card card-commander" 
                   data-type="<?php echo $type; ?>" 
                   data-name="<?php echo $name; ?>">
                   
                    <img src="<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>">
                    <div class="card-info">
                        <span class="tag"><?php echo $row['name']; ?></span>
                    </div>
                </a>
            <?php
                }
            } else {
                echo "<p>Data commander kosong.</p>";
            }
            ?>
        </div>


        <h2 style="margin-top: 40px;">Daftar Item</h2>

        <div class="filter-item-container">
            <button class="filter-item-btn active" data-type="all">Semua</button>
            <button class="filter-item-btn" data-type="physical">Physical</button>
            <button class="filter-item-btn" data-type="magic">Magic</button>
            <button class="filter-item-btn" data-type="defend">Defend</button>
            <button class="filter-item-btn" data-type="special">Special</button>
        </div>

        <input type="text" id="search-item" placeholder="Cari item..." />
        
        <div id="item-gallery" class="item-grid">
            <?php
            // Query ambil semua items (sesuaikan nama tabel di db anda, misal 'items' atau 'item')
            $sql_item = "SELECT * FROM items ORDER BY name ASC"; 
            $result_item = $conn->query($sql_item);

            if ($result_item->num_rows > 0) {
                while($row = $result_item->fetch_assoc()) {
                    $type = strtolower($row['type']);
                    $name = strtolower($row['name']);
            ?>
                <a href="detail-item.php?id=<?php echo $row['id']; ?>" 
                   class="card_item card-item-js" 
                   data-type="<?php echo $type; ?>" 
                   data-name="<?php echo $name; ?>">
                   
                    <img src="<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>">
                    <div class="card-info">
                        <span class="tag"><?php echo $row['name']; ?></span>
                    </div>
                </a>
            <?php
                }
            } else {
                echo "<p>Data item kosong.</p>";
            }
            $conn->close(); // Tutup koneksi di akhir
            ?>
        </div>

    </main>

    <footer class="footer" id="Footer">
        <div class="footer-container">
            <div class="footer-col">
                <h2>Magic Chess Gallery</h2>
                <p>
                    Magic Chess Go-Go Gallery that provides detailed information on commanders, 
                    synergies, and items to help you build the best strategies.
                </p>
            </div>

            <div class="footer-col">
                <h3>Menu</h3>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="galery.php">Galeri</a></li>
                    <li><a href="tierlist.php">Tierlist</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Information</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Sosial Media</h3>
                <div class="social-icons">
                    <i class="ri-whatsapp-fill"></i>
                    <i class="ri-facebook-circle-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-tiktok-fill"></i>
                </div>
            </div>
        </div>

        <hr />
        <div class="footer-bottom">
            <p>&copy; 2025 Magic Chess Gallery — All Rights Reserved.</p>
        </div>
    </footer>
    
    <script src="./js/script.js"></script>
</body>
</html>