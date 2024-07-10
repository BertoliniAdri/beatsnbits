<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <SCRIPT type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js"></SCRIPT>
        <meta charset="UTF-8">
        <title>Post Sauvegarde</title>
        <script src="post.js" type="text/javascript"></script>
    </head>
    <body>
        <!--<form name="testForm" onsubmit="post_save()" method="post">-->
    <!--        First Name: <input type="text" name="fname" id="fname" /><br />
            Last Name: <input type="text" name="lname" id="lname" /><br />-->
        <!--<input id="button" type="button" value="Submit Form"/>-->
        <!--</form>-->
        <?php
        if (isset($_POST['seq_timeref'])) {

            //recuperation des données
            $seq_user_id = 1;
            $seq_name = 'ma sequence 001';
            $seq_duration = $_POST['seq_duration'];
            $seq_timeref = $_POST['seq_timeref'];

            
//connection base de données
            try {
                $connexion_DB = new PDO('mysql:host=localhost;dbname=beatznbitz;charset=utf8', 'root', 'j2vdbcyc');
            } catch (Exception $e) {

                die('Erreur : ' . $e->getMessage());
            }

// On ajoute une entrée dans la table sequenceur
            //preparation de la requette
            $requete = $connexion_DB->prepare('INSERT INTO sequences(seq_user_id, seq_name, seq_duration, seq_timeref) VALUES(:seq_user_id, :seq_name, :seq_duration, :seq_timeref)');
            $requete->execute(array(
                'seq_user_id' => $seq_user_id,
                'seq_name' => $seq_name,
                'seq_duration' => $seq_duration,
                'seq_timeref' => $seq_timeref
            ));



            // fermeture de la connexion
            if ($connexion_DB) {
                //on détruit l'objet $connexion_DB
                $connexion_DB = NULL;
            }
//$bdd->exec('INSERT INTO sequences(seq_user_id, seq_name, seq_duration, seq_timeref) VALUES(1, \'UpBeat01\', '.$seq_duration.', '.$seq_timeref.')');


            echo 'Séquence Sauvegardée !';
        } else {
            echo '<input id="button" type="button" value="Submit Form"/>';

            echo '<div id="status"></div>';
        }
        ?>
        <div id="status"></div>
    </body>
</html>
