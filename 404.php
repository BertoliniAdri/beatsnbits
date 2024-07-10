<?php
// on ouvre le session
if (!isset($_SESSION)) {
    session_start();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <?php include 'inc/config.php' ?>

        <!-- TITRE PAGE -->
        <title>Erreur 404: page non existante</title>
    </head>
    
    <body>

        <main>

            <!-- DEBUT : HEADER -->
            <?php include 'inc/header.php' ?>
            <!-- FIN : HEADER -->


            <!-- DEBUT : MAIN CONTAINER -->
            <div class="main_container">
                DÉSOLÉ, LA PAGE N'EXISTE...
            </div>
            <!-- FIN : MAIN CONTAINER -->


            <!-- DEBUT : FOOTER -->
            <?php include 'inc/footer.php' ?>
            <!-- FIN : FOOTER -->


        </main>
    </body>
</html>
