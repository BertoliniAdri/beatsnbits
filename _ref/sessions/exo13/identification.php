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
        <title>Identification Check</title>
    </head>
    <body>
        <h1>Identification Checked !</h1>
        <main>
            <?php
            if (isset($_POST['identifiant']) && $_POST['identifiant'] < 24) {
                // On récupère les infos du formulaire d'identification (identification.html)
                $user_id = $_POST['identifiant'];
                //on enlève les balises HTML pour éviter les injections de code
                $user_id = htmlentities($user_id);
                if (isset($_POST['mdp']) && strlen($_POST['mdp']) < 12) {
                    $user_pass = $_POST['mdp'];
                    //on enlève les balises HTML pour éviter les injections de code
                    $user_pass = htmlentities($user_pass);
                    $id = '';

                    //on prend les mots de passe
                    if (file_exists('passwords.txt')) {
                        $password = 'passwords.txt';
//                        echo file_get_contents($password);
                        //on explode
                        $temp = explode(';', file_get_contents($password));
                        //on boucle
                        foreach ($temp as $value) {
                            echo $value;
                            $tab_users = explode('|', $value);
                            if ($user_id === $tab_users[0] && $user_pass === $tab_users[1]) {
                                $id = $tab_users[0];
                            }
                        }
                    }

                    //on check le login et password

                    if ($id != '') {
//                    echo 'congrats ' . $tab_users[$index]['ident'];
                        $_SESSION['ident'] = $id;
                        echo 'Bonjour ' . $_SESSION['ident'];
//                    echo session_id();
                        header('Location: http://127.0.0.1/edsa-PHP/sessions/exo13/index.php');
                    } else {
                        header('Location: http://127.0.0.1/edsa-PHP/sessions/exo13/index.php');
                        echo 'fail !';
                    }
                }
            }
            ?>
        </main>
    </body>
</html>
