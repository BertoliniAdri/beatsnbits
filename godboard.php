<?php
// on ouvre le session
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <?php include 'inc/config.php' ?>

        <!-- TITRE PAGE -->
        <title>Administration</title>
    </head>
    <body>

        <main>

            <!-- DEBUT : HEADER -->
            <?php include 'inc/header.php' ?>
            <!-- FIN : HEADER -->

            <!-- DEBUT : MAIN CONTAINER -->
            <div class="main_container">
                <?php
                // <!-- ADMIN CONNECTE ? -->
                if (isset($_SESSION['session_id']) && isset($_SESSION['id']) && isset($_SESSION['pseudo']) && isset($_SESSION['admin'])) {
                    // <!-- ADMIN CONNECTE ? = OUI -->
                    echo "good";
                } else {
                    // <!-- ADMIN CONNECTE ? = NON -->
                    echo "Cette page n'existe pas...";
                    header('location: ./404.php');
                    exit;
                    ?>

                <?php } ?>

            </div>
            <!-- FIN : MAIN CONTAINER -->

            
            <!-- DEBUT : FOOTER -->
            <?php include 'inc/footer.php' ?>
            <!-- FIN : FOOTER -->

        </main>
    </body>
</html>
