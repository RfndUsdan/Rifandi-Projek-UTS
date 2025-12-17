<?php
// 1. Koneksi ke Database
include 'config.php';

// 2. Ambil ID
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

// 3. Query data items
$sql = "SELECT * FROM items WHERE id = $id";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Item - <?php echo $data ? $data['name'] : 'Tidak Ditemukan'; ?></title>
    <link rel="stylesheet" href="./css/detail.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css" rel="stylesheet"/>
</head>
<body>

<header>
    <a href="galery.php" class="back-btn"><i class="ri-arrow-left-line"></i> Kembali ke Galeri</a>
</header>

<main>
    <div id="detail-item-container" class="detail-wrapper item-detail">
        <?php if ($data) { ?>
            <div class="left-column">
                <img src="<?php echo $data['image']; ?>" alt="<?php echo $data['name']; ?>">
            </div>
            
            <div class="right-column">
                <span class="tag"><?php echo $data['name']; ?></span>
                <h1><?php echo ucfirst($data['type']); ?></h1>

                <div class="ability-box">
                    <h3>Deskripsi Item:</h3>
<<<<<<< HEAD
                    <p><?php echo isset($data['description']) ? $data['description'] : $data['descr']; ?></p>
=======
                    <p><?php echo isset($data['description']) ? $data['description'] : $data['desc']; ?></p>
>>>>>>> d34df4cffdfc47b4ecdc4d0405d2d2f55c2a6f97
                </div>
            </div>
        <?php } else { ?>
            <div style="text-align: center; width: 100%; color: white;">
                <h2>Item tidak ditemukan!</h2>
            </div>
        <?php } ?>
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