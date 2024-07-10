<?php

//connexion à la DB
// préparation des informations nécessaires
//define('DSN', 'mysql:host=localhost;dbname=sequenceur');
//define('USER', 'root');
//define('MDP', 'j2vdbcyc');
//
//try {
//    // création d'un objet PDO et connexion
//    $connexion_DB = new PDO(DSN, USER, MDP);
////    echo 'connexion ok !<br>';
//} catch (Exception $erreur) {
//    echo "erreur : " . $erreur->getMessage();
//    exit();
//}

$connexion = mysqli_connect('127.0.0.1', 'root', 'j2vdbcyc', 'sequenceur');
if (mysqli_connect_errno()) {
echo "Echec de connection MySQL: " . mysqli_connect_error();
}

