<<<<<<< HEAD
<?php
require_once 'data-tierlist.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Tier List Commander</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/tierlist.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css" rel="stylesheet" />
</head>

<body>

    <header>
        <div class="judul">
            <h1>Magic Chess Gallery</h1>
        </div>
         <ul class="menu">
            <li><a href="index.php">Beranda</a></li>
            <li><a href="commander.php">Commander</a></li>
            <li><a href="item.php">Item</a></li>
            <li><a href="tierlist.php">Tierlist Commander S4</a></li>
        </ul>
=======
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tier List Commander</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/tierlist.css">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css"
      rel="stylesheet"
    />
</head>
<body>
    <header class="container">
        <div class="judul">
            <h1>Galery Magic Chess</h1>
        </div>
        <ul class="menu">
            <li>
                <a href="index.html">Beranda</a>
            </li>
            <li>
                <a href="galery.html">Galery</a>
            </li>
            <li>
                <a href="tierlist.html">Lineup META</a>
            </li>
        </ul>

>>>>>>> d34df4cffdfc47b4ecdc4d0405d2d2f55c2a6f97
    </header>

    <div class="tierlist-container">
        <h1>Tier List Commander</h1>
<<<<<<< HEAD

        <?php foreach ($tierlistData as $tier): ?>
            <div class="tier-row tier-<?php echo strtolower($tier['tier']); ?>">
                <div class="tier-label">
                    <?php echo $tier['tier']; ?>
                </div>

                <div class="tier-items">
                    <?php foreach ($tier['items'] as $item): ?>
                        <a
                            href="detail.php?id=<?php echo $item['id']; ?>"
                            class="tier-card">
                            <img
                                src="<?php echo $item['image']; ?>"
                                alt="<?php echo htmlspecialchars($item['name']); ?>">
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endforeach; ?>

    </div>

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

</body>

</html>
=======
        <div id="tierlist"></div>
    </div>
    <footer>
      <div class="box">
        <p>
          &copy; Copyrights 2025 by <span>AeroyJawww</span> All Rights Reserved.
        </p>
      </div>
      <div class="box">
        <i class="ri-whatsapp-fill ri-2x"></i>
        <i class="ri-facebook-circle-fill ri-2x"></i>
        <i class="ri-tiktok-fill ri-2x"></i>
        <i class="ri-instagram-fill ri-2x"></i>
      </div>
    </footer>

    <script src="./js/data.js"></script>
    <script src="./js/tierlist.js"></script>
    <script src="./js/script.js"></script>
</body>
</html>
>>>>>>> d34df4cffdfc47b4ecdc4d0405d2d2f55c2a6f97
