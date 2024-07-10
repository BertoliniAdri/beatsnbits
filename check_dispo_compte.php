<?php

$action = $_POST['action'];
if (isset($_POST['pseudo'])){ $pseudo = $_POST['pseudo']; }
if (isset($_POST['mail'])){ $mail = $_POST['mail']; }

// CONNEXION A LA DB
// On définie les constantes pour se connecter à la DB
define("DB_DSN", "mysql:host=localhost;dbname=beatznbitz");
define("DB_USER", "root");
define("DB_PASS", "root");// "root" sur mac, ""(vide) sur pc.
try {
  $db_connexion = new PDO(DB_DSN, DB_USER, DB_PASS); // On crée la var avec la connexion
} catch (Exception $ex) {
  echo "Erreur: " . $erreur->getMessage();
  exit();
}

// Requète différente si on est dans le champ pseudo ou le champ mail du formulaire.
if ($action == 'pseudo'){
  $sql = "SELECT * FROM users WHERE user_pseudo LIKE '".$pseudo."'";
} else if ($action == 'mail') {
  $sql = "SELECT * FROM users WHERE user_email LIKE '".$mail."'";
}

$req = $db_connexion->query($sql);

$resultat = $req->fetch();

// Si le mail ou le pseudo tapé correspond à quelque chose en bdd alors on renvoie 'match' sinon 'nope'
if ($resultat) {
  $data['reponse'] = 'match';
} else {
  $data['reponse'] = 'nope';
}

echo json_encode($data);

?>
