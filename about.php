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
        <title>A propos</title>
        
    </head>
    <body class='fade-in'>

        <main>

            <!-- DEBUT : HEADER -->
            <?php include 'inc/header.php'; ?>
            <!-- FIN : HEADER -->


            <!-- DEBUT : MIDDLE PAGE -->
            <div class="middlepage">

                <!-- DEBUT : MAIN CONTAINER -->
                <div class="main_container">

                    <!-- DEBUT : MAIN CONTENT -->
                    <div class="main_content">
                        <div class="mysounds">
                            <h3>BEATZ N BITZ</h3>
                            Projet blablablalala
                        </div>
                        <div class="mysounds">
                            <h3>Zouheir</h3>
                        </div>
                        <div class="mysounds">
                            <h3>Rado</h3>

                        </div>
                        <div class="mysounds">
                            <h3>Adriano</h3>

                        </div>
                        <div class="mysounds">
                            <h3>François</h3>

                        </div>
                        <div class="mysounds">
                            <h3>Malik</h3>

                        </div>
                    </div>
                    <!-- FIN : MAIN CONTENT -->
                </div>
                <!-- FIN : MAIN CONTAINER -->

            </div>
            <!-- FIN : MIDDLE PAGE -->


            <!-- DEBUT : FOOTER -->
            <?php include 'inc/footer.php'; ?>
            <!-- FIN : FOOTER -->

        </main>
    </body>
</html>

