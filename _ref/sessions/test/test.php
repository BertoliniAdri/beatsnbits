
<?php
//on ouvre une session
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
        <title>Test</title>
        <link href="css/form.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <h1>Page d'accueil</h1>

        <main>
            <p>
                <?php
                //on affiche le prenom
                echo (isset($_SESSION['prenom']) ? 'Bonjour ' . $_SESSION['prenom'] . ' !<br>' : 'Inconnu');
                
                ?>
            </p>

        </main>
    </body>
</html>
