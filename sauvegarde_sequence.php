<?php
session_start();
//sauvegarde_sequence.php
//
//traite les demandes depuis 'sauvegarde_sequence.js'
//fait toutes les requettes en PDO avec la BD pour la gestion des sauvegardes de sequences


//on récupère action du POST deuis 'sauvegarde_sequence.js'
$action = $_POST['action'];


//connexion à la DB
//préparation des informations nécessaires
  include 'inc/db_log_data.php';

//
try {
    // création d'un objet PDO et connexion
    $connexion_DB = new PDO(DB_DSN, DB_USER, DB_PASS);
    $connexion_DB->exec("SET CHARACTER SET utf8");
//    echo 'connexion ok !<br>';
} catch (Exception $erreur) {
    //echo "erreur : " . $erreur->getMessage();
    exit();
}

//récupère toutes les séquences du user
if ($action == 'display') {

    $seq_user_id = (int) getSessionUserId();
    //préparation de la requète
    $requete = "SELECT seq_id, seq_name, seq_duration, seq_timestamp FROM sequences where seq_user_id = $seq_user_id ORDER BY seq_timestamp DESC";
//    $requete = "SELECT * FROM sequences where seq_user_id = $seq_user_id ORDER BY seq_timestamp";
    //envoi de la requète au serveur et récupération des résultats
    $resultat = $connexion_DB->query($requete);
    //fetchAll est utile tant qu'il y a peu de résultats
    //il récupère tout d'un coup
    //fetch récupère les résultats 1 par 1
    $data = $resultat->fetchAll(PDO::FETCH_ASSOC);
//    while ($data = $resultat->fetch(PDO::FETCH_ASSOC)) {
//    echo $data['seq_name'];
// }
    // fermeture de la connexion
    if ($connexion_DB) {
        //on détruit l'objet $connexion_DB
        $connexion_DB = NULL;
    }

    //on envoie les données à javascript
    echo json_encode($data);

    //on vide les données
    $data = [];
}

//sauvegarde les données
if ($action == 'save') {

    //recuperation des données
    $seq_name = $_POST['seq_name'];
    if (!checkSaveName($seq_name)) {
    $data [] = 'data_corrupt';
    echo json_encode($data);
        return;
    }
    $seq_user_id = (int) getSessionUserId();

    $seq_duration = $_POST['seq_duration'];
    //on vérifie
    if (!checkSaveDur($seq_duration)) {
    $data [] = 'data_corrupt';
    echo json_encode($data);
        return;
    }
    
    $seq_data = trim($_POST['seq_data']);
    if (!checkSaveData($seq_data)) {
    $data [] = 'data_corrupt';
    echo json_encode($data);
        return;
    }
    

    //connection base de données
// On ajoute une entrée dans la table sequenceur
    $requete = $connexion_DB->prepare('INSERT INTO sequences(seq_user_id, seq_name, seq_duration, seq_data)' .
            ' VALUES(:seq_user_id, :seq_name, :seq_duration, :seq_data)');
    $requete->execute(array(
        'seq_user_id' => $seq_user_id,
        'seq_name' => $seq_name,
        'seq_duration' => $seq_duration,
        'seq_data' => $seq_data
    ));


    // fermeture de la connexion
    if ($connexion_DB) {
        //on détruit l'objet $connexion_DB
        $connexion_DB = NULL;
    }
    $data [] = 'ok';

    //on envoie les données à javascript
    echo json_encode($data);
}

//Pour charger les données d'une séquence
if ($action == 'load') {

    $seq_id = (int) $_POST['seq_id'];
    //préparation de la requète
    $requete = "SELECT seq_data, seq_duration FROM sequences where seq_id = $seq_id";
    //envoi de la requète au serveur et récupération des résultats
    $resultat = $connexion_DB->query($requete);
    //fetchAll est utile tant qu'il y a peu de résultats
    //il récupère tout d'un coup
    //fetch récupère les résultats 1 par 1
    $data = $resultat->fetchAll(PDO::FETCH_ASSOC);

    // fermeture de la connexion
    if ($connexion_DB) {
        //on détruit l'objet $connexion_DB
        $connexion_DB = NULL;
    }

    //on envoie les données à javascript
    echo json_encode($data);

    //on vide les données
    $data = [];
}

//efface une sequence
if ($action == 'delete') {

    //recuperation des données
    $seq_id = $_POST['seq_id'];

    // On efface une entrée dans la table sequenceur
    $requete = $connexion_DB->prepare("DELETE FROM sequences WHERE seq_id = :seq_id");
    $requete->bindParam(':seq_id', $seq_id);
    $requete->execute();


    // fermeture de la connexion
    if ($connexion_DB) {
        //on détruit l'objet $connexion_DB
        $connexion_DB = NULL;
    }
    $data [] = 'sauvegarde supprimée';

    echo json_encode($data);
}


//met à jour une séquence
if ($action == 'update') {

    //recuperation des données
    $seq_id = $_POST['seq_id'];
//    $seq_duration = $_POST['seq_duration'];
//    $seq_data = $_POST['seq_data'];  //recuperation des données

    $seq_duration = $_POST['seq_duration'];
    $seq_duration = $seq_duration;
    //on vérifie
    if (!checkSaveDur($seq_duration)) {
    
    $data [] = 'data_corrupt';
    echo json_encode($data);
        return;
    }
    
    $seq_data = trim($_POST['seq_data']);
    
    if (!checkSaveData($seq_data)) {
    $data [] = 'data_corrupt';
    echo json_encode($data);
        return;
    }

// On update une entrée dans la table sequenceur
    $requete = $connexion_DB->prepare('UPDATE sequences SET seq_duration = :seq_duration, seq_data = :seq_data WHERE seq_id = :seq_id');

//$requete->bindParam(':seq_name', $seq_name, PDO::PARAM_STR);
    $requete->bindParam(':seq_duration', $seq_duration);
    $requete->bindParam(':seq_data', $seq_data, PDO::PARAM_STR);
    $requete->bindParam(':seq_id', $seq_id, PDO::PARAM_INT);
    $requete->execute();

    // fermeture de la connexion
    if ($connexion_DB) {
        //on détruit l'objet $connexion_DB
        $connexion_DB = NULL;
    }
    $data [] = 'ok';

    echo json_encode($data);
}

//récupère l'id du user
function getSessionUserId() {
// on ouvre le session
//session_start();
////on prend l'id du user
    return $_SESSION ['id'];
//    return 1;
}

function checkSaveName($name) {
//    $ok = preg_match('/^[a-zA-Z0-9 _.-]*$/', $name);
    $ok = preg_match('/^[a-zA-Z0-9 _.-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ]*$/', $name);
    return $ok;
}

function checkSaveData($dat) {
    //chiffres virg. points ptvirg.
    $ok = preg_match('/^[0-9;][0-9,;.]*[0-9;]$/', $dat);
    $ok = true;
    return $ok;
}

function checkSaveDur($dur) {
    //de 120 à 600
    $ok = preg_match('/1[2-9][0-9]|[2-5][0-9][0-9]|600/', $dur);
//    $ok = true;
    return $ok;
}
