<?php
// on ouvre le session
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <?php include 'inc/config.php' ?>

        <!-- TITRE PAGE -->
        <title>Connexion</title>
    </head>
    <body>

        <main>

            <!-- LE HEADER -->

            <?php include 'inc/header.php' ?>

            <?php
            if (isset($_SESSION['session_id']) && isset($_SESSION['id']) && isset($_SESSION['pseudo'])) {
                echo '<div class="main_container">';
                echo '<div class="container_connexion">';
                echo '<h1>Vous êtes déjà connecté...';
                echo '</div></div>';
                header('location: ./index.php');
                exit;
            } else {
                ?>



                <!-- LE MAIN CONTAINER -->
                <div class="main_container">

                    <!-- SE CONNECTER -->
                    <div class="container_connexion">

                        <form id="loginForm" name="connexionForm" action="treat_login.php" method="post">
                                                 <h1>SE CONNECTER</h1>
                            <div id="connexionContent">
                                    <input type="text"
                                           name="pseudo"
                                           id="pseudo"
                                           value="demo"
                                           placeholder="pseudo"
                                           maxlength="24"
                                           required>

                                    <input type="password"
                                           name="password"
                                           id="password"
                                           value="Demo2017"
                                           placeholder="mot de passe"
                                           maxlength="12"
                                           required>
                                <div class="profil_submit">
                                    <!-- REMETTRE LE INPUT EN BUTTON-->
                                    <input type="button" value="CONNEXION">
                                </div>
                            </div>
                            <a href="registration.php">Pas encore inscrit ?</a>
                            -
                            <a href="lostpass.php">Mot de pass oublié ?</a>
                        </form>

                    </div>
                </div>

<?php } ?>



            <!-- LE FOOTER -->
<?php include 'inc/footer.php' ?>


        </main>
    </body>
</html>
