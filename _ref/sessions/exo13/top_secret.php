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
        <title>Top Secret</title>
        <link href="css/menu.css" rel="stylesheet" type="text/css"/>
        <link href="css/form.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <h1>Top Secret</h1>
        <?php
        include 'menu.php';
        ?>
        <main>
            <?php
            if (isset($_SESSION['ident'])) {
                echo '<p>Bonjour ' . $_SESSION['ident'] . '<br>';
            } else {
                header('Location: http://127.0.0.1/edsa-PHP/sessions/exo13/index.php');
            }
            ?>
            The answer to the Ultimate Question of Life, the Universe, and Everything is:</p>
            <p>42</p>
        </main>
    </body>
</html>
