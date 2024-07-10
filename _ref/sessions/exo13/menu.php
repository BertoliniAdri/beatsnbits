<header>
    <ul id="navlist">
        <li><a href="index.php" id="current">Accueil</a></li>
        <li><a href="top_secret.php">Top Secret</a></li>
        <?php
        if (isset($_SESSION['ident'])) {
            echo '<a href="deconnect.php"><img width="20px" src="img/connected.png"></a>';
            
        }

        ?>
    </ul>
</header>
