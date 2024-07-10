
<?php
//on ouvre une session
session_start();

//on prend l'id de la session
$id = session_id();

//on ajoute une varriable à la session
$_SESSION['prenom'] = 'Adriano';
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
        <title>Accueil</title>
        <link href="css/form.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <h1>Page d'accueil</h1>

        <main>
            <p>
                <?php
                //on affiche l'id de la session
                echo 'id de la session: ' . $id . '<br>';
                ?>
            </p>

        </main>
    </body>
</html>
