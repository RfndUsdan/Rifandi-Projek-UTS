<?php
// 1. Koneksi ke Database
include 'config.php';

// 2. Ambil ID dari URL dan pastikan aman (integer)
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

// 3. Query data commander berdasarkan ID
$sql = "SELECT * FROM commanders WHERE id = $id";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Commander - <?php echo $data ? $data['name'] : 'Tidak Ditemukan'; ?></title>
    <link rel="stylesheet" href="./css/detail.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css" rel="stylesheet"/>
</head>
<body>

<header>
    <a href="commander.php" class="back-btn"><i class="ri-arrow-left-line"></i> Kembali ke Galeri</a>
</header>

<main>
    <div id="detail-container" class="detail-wrapper commander-detail">
        <?php if ($data) { ?>
            <div class="left-column">
                <img src="<?php echo $data['image']; ?>" alt="<?php echo $data['name']; ?>">
            </div>
            
            <div class="right-column">
                <span class="tag"><?php echo $data['name']; ?></span>
                <h1><?php echo ucfirst($data['type']); ?></h1>

                <div class="detail-abilities">
                    <div class="ability-box">
                        <h3>Skill 1: <?php echo $data['ability1']; ?></h3>
                        <p><?php echo $data['desc_ability1']; ?></p>
                    </div>
                    <div class="ability-box">
                        <h3>Skill 2: <?php echo $data['ability2']; ?></h3>
                        <p><?php echo $data['desc_ability2']; ?></p>
                    </div>
                </div>
            </div>
        <?php } else { ?>
            <div style="text-align: center; width: 100%; color: white;">
                <h2>Commander tidak ditemukan!</h2>
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