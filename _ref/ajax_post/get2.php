<?php

//recuperation des données
$seq_user_id = 1;
$seq_name;
$seq_duration;
$seq_timeref;


//connection base de données
try {
    $connexion_DB = new PDO('mysql:host=localhost;dbname=sequenceur;charset=utf8', 'root', 'j2vdbcyc');
} catch (Exception $e) {

    die('Erreur : ' . $e->getMessage());
}

// On ajoute une entrée dans la table sequenceur
//preparation de la requette
$requete = $connexion_DB->prepare('SELECT * FROM sequences where seq_user_id = ?');

if ($requete->execute(array($_GET['seq_user_id']))) {
    while ($rangee = $requete->fetch()) {
        print_r($rangee);
    }
}


// fermeture de la connexion
if ($connexion_DB) {
    //on détruit l'objet $connexion_DB
    $connexion_DB = NULL;
}