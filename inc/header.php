<?php
if (!isset($_SESSION)) {
    session_start();
}
?>

<!-- Div d'affichage de message en haut de page -->
<div id="message_display_div">
    <p id="message_display_text">Ceci est la div de dislay de message</p>
</div>

<!-- DEBUT : HEADER MOBILE -->
<header id="mobileHeader" class="fade-in">

    <!-- DEBUT : OUVRIR LE MENU MOBILE -->
    <div id='mobilemenu_id' class="mobilemenuOpen">
        <img src="img/menu.png" alt="☰"/>
    </div>
    <!-- FIN : OUVRIR LE MENU MOBILE -->

    <!-- DEBUT : MENU MOBILE -->
    <nav class="mobilemenu">
        <!--        <div id='mobilemenuClose' class='mobilemenuClose'>
                    <img src="img/close.png" alt="X"/>
                </div>-->

        <ul>
            <?php
            // <!-- UTILISATEUR CONNECTE ? -->
            if (isset($_SESSION['session_id']) && isset($_SESSION['id']) && isset($_SESSION['pseudo'])) {
                // <!-- UTILISATEUR CONNECTE ? = OUI -->
                echo "<li id='mobilemenuClose' class='mobilemenuClose'><img src='img/close.png' alt='X'/></li>";

                // <!-- UTILISATEUR ADMIN ? -->
                if (isset($_SESSION['admin'])) {
                    // <!-- UTILISATEUR CONNECTE ? = OUI -->
                    echo '<li>admin :' . $_SESSION ['admin'] . '</li>';
                    echo '<li><a href="godboard.php">dashboard</a></li>';
                } else {
                    // <!-- UTILISATEUR ADMIN ? = NON -->
                    echo '<li>' . $_SESSION ['pseudo'] . '</li>';
                }
                echo '<li><a href="index.php">accueil</a></li>';
                echo '<li><a href="myprofil.php">mon profil</a></li>';
//                echo '<li><a href="mysounds.php">mes sequences</a></li>';
                echo '<li><a href="#" onclick="logout();return false;">se déconnecter</a></li>';
            } else {
                // <!-- UTILISATEUR CONNECTE ? = NON -->
                echo "<li id='mobilemenuClose' class='mobilemenuClose'><img src='img/close.png' alt='X'/></li>";
                echo '<li><a href="index.php">accueil</a></li>';
                echo "<li><a href='registration.php'>créer un compte</a></li>";
                echo '<li><a href="login.php">se connecter</a></li>';
            }
            ?>
            <br>
            <br>
            <li><a href="about.php">à propos</a></li>
            <li><a href="mentionslegales.php">mentions légales</a></li>
<!--            <li>2017 copyright</li>-->
        </ul>
    </nav>
    <!-- FIN : MENU MOBILE -->


</header>
<!-- FIN : HEADER: MOBILE -->


<!-- DEBUT : HEADER FULL SCREEN -->
<header id="mainHeader" class="animate-top">

    <!-- DEBUT : LE LOGO -->
    <div id="logo">
        <a href="index.php"> <img src="img/logo.svg" alt="Logo BeatzNbitz" title='BeatzNbitz' width="32" height="32" /></a>
    </div>
    <!-- FIN : LE LOGO -->


    <!-- DEBUT : LE MENU -->
    <nav id="menuMain">
        <ul>
            <?php
            // <!-- UTILISATEUR CONNECTE ? -->
            if (isset($_SESSION['session_id']) && isset($_SESSION['id']) && isset($_SESSION['pseudo'])) {
                // <!-- UTILISATEUR CONNECTE ? = OUI -->
                // <!-- UTILISATEUR ADMIN ? -->
                if (isset($_SESSION['admin'])) {
                    // <!-- UTILISATEUR ADMIN ? = OUI -->
                    echo '<li>admin : ' . $_SESSION['admin'] . '</li>';
//                    echo '<li><a href="godboard.php">dashboard</a></li>';
                } else {
                    // <!-- UTILISATEUR ADMIN ? = NON -->
                    echo '<li>' . $_SESSION ['pseudo'] . '</li>';
                }

//                echo '<li><a href="myprofil.php">mon profil</a></li>';
//                echo '<li><a href="mysounds.php">mes sequences</a></li>';
                echo '<li><a href="#" onclick="logout();return false;">se déconnecter</a></li>';
            } else {
                // <!-- UTILISATEUR CONNECTE ? = NON -->
                echo '<li><a id="login_link" href="#" onclick="login_fx()" >se connecter</a></li>';
                echo '<li><a id="registratin_link" href="registration.php">créer un compte</a></li>';     
                echo "<div id='testForm'>
                        <div id='connexionContent'>
                              <input class='login_inputs'
                                    type='text'
                                     name='pseudo'
                                     id='pseudo'
                                     value='demo'
                                     placeholder='pseudo'
                                     maxlength='24'
                                     required>

                              <input class='login_inputs'
                                    type='password'
                                     name='password'
                                     id='password'
                                     value='Demo2017'
                                     placeholder='mot de passe'
                                     maxlength='12'
                                     required>
                        </div>
                            <!--REMETTRE LE INPUT EN BUTTON-->
                            <input type='button' value='connexion' onclick='login();'>
                      </div>";
            }
            ?>
        </ul>
    </nav>
    <!-- FIN : LE MENU -->

</header>
<!-- FIN : HEADER FULL SCREEN -->
