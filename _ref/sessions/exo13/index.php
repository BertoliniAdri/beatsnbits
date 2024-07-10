<?php
// ouverture de session
session_start();
?>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Formulaire d'identification</title>
        <link href="css/form.css" rel="stylesheet" type="text/css"/>
        <script src="check_form.js" type="text/javascript"></script>
        <link href="css/menu.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <h1>Identification</h1>
        <?php
        include 'menu.php';
        ?>
        <main>
            
            <form name="identification" action='identification.php' method='post' enctype='multipart/form-data'>
        
                <label for="name">identifiant</label>
                <input value="Adri" name="identifiant" required="true" type="text" maxlength="24">

                <label for="name">Mot de passe</label>
                <input value="toto" name="mdp" required="true" type="text" maxlength="12">

        
               
                <div class='centered'><input class="button" id="send_button" name="btnSubmit" tabindex="5" value="Connexion" type="button"></div>
   </form>
        </main>
    </body>
</html>
