<?php
// on ouvre le session
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <?php include 'inc/config.php' ?>

  <!-- TITRE PAGE -->
  <title>Créer un compte</title>
</head>
<body>

  <main>
    <!-- LE HEADER -->

    <?php include 'inc/header.php' ?>

    <?php
    if (isset($_SESSION['session_id']) && isset($_SESSION['id']) && isset($_SESSION['pseudo'])) {
      echo '<div class="main_container">';
      echo '<div class="container_connexion">';
      echo '<h1>Vous êtes déjà inscrit...';
      echo '</div></div>';
      header('location: ./index.php');
      exit;
    } else {
      ?>


      <!-- LE MAIN CONTAINER -->
      <div class="main_container">

        <!-- SE CONNECTER -->
        <div class="container_connexion">
          <h1>CRÉER UN COMPTE</h1>
          <form id="loginForm" class="connexionForm" name="identification" action="treat_registration.php" method="post">
            <div id="inscriptionContent">
              <div class="profil_input">
                <input type="text"
                name="pseudo"
                id="inscription_pseudo"
                class="inscription_inputs"
                placeholder="votre pseudo"
                maxlength="24"
                required>
              </div>


              <div class="profil_input">
                <input type="password"
                name="password"
                id="inscription_password"
                class="inscription_inputs"
                placeholder="votre mot de passe"
                maxlength="12"
                required>
                6 caractères minimum dont au moins une majuscule et un chiffre
              </div>

              <div class="profil_input">
                <input type="password"
                name="inscription_password_confirmation"
                id="inscription_password_confirmation"
                class="inscription_inputs"
                placeholder="confirmez votre mot de passe"
                maxlength="12"
                required>

              </div>

              <div class="profil_input">
                <input type="email"
                name="email"
                id="inscription_email"
                class="inscription_inputs"
                placeholder="votre email"
                maxlength="64"
                required>
              </div>


              <div class="profil_input">
                <input type="email"
                name="inscription_email_confirmation"
                id="inscription_email_confirmation"
                class="inscription_inputs"
                placeholder="confirmez votre email"
                maxlength="64"
                required>

              </div>

              <!-- div alert à supprimer  -->
              <div id="alert" class="alert">
              </div>
              <div class="profil_submit">
                <!--REMETTRE LE INPUT EN BUTTON-->
                <script src="js/botboot_captcha.js" type="text/javascript"></script>
                <script type="text/javascript">DrawBotBoot()</script>
                <input type="button" id="inscription_submit" value="S'INSCRIRE">
              </div>
            </div>
            <a href="login.php">Déjà inscrit ?</a>
          </form>

        </div>
      </div>

      <?php
    }
    ?>

    <!-- LE FOOTER -->
    <?php include 'inc/footer.php' ?>

  </main>
</body>
</html>
