<?php
// on ouvre le session
session_start();
// on récupère l'id de la session
$ident = session_id();

$debug = fopen("debug_inscription.txt","w+");

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

$regex_pseudo = "/.{1,24}/";
$regex_pass = "/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/";
$regex_email = "/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/";

if (isset($_POST['pseudo']) && isset($_POST['pass']) && isset($_POST['mail'])) {
  if(preg_match($regex_pseudo,$_POST['pseudo']) && preg_match($regex_pass,$_POST['pass']) && preg_match($regex_email,$_POST['mail'])) {

    $pseudo = strtolower(htmlentities($_POST['pseudo']));
    $pass = htmlentities(sha1($_POST['pass']));
    $email = strtolower(htmlentities($_POST['mail']));

    //On vérifie les doublons pour les pseudos et les mails
    $sql = "SELECT * FROM users WHERE user_pseudo LIKE '".$pseudo."'";
    $req = $db_connexion->query($sql);
    $resultat_doublon = $req->fetch();
    if ($resultat_doublon) {
      $data['doublon_pseudo'] = "doublon_pseudo";
    }
    $sql = "SELECT * FROM users WHERE user_email LIKE '".$email."'";
    $req = $db_connexion->query($sql);
    $resultat_doublon = $req->fetch();
    if ($resultat_doublon) {
      $data['doublon_mail'] = "doublon_mail";
    }

    if ($data['doublon_pseudo'] || $data['doublon_mail']) {
      echo json_encode($data);
    } else {//Sinon si pas de doublon on ajoute le compte
      $sql = "INSERT INTO users(user_pseudo, user_pass, user_email, user_date, user_token, user_statut, user_rights) VALUES('".$pseudo."', '".$pass."', '".$email."', CURDATE(), '', 1, 0)";

      //Envoi de la requète sql
      $db_connexion->query($sql);

      $data['reponse'] = "ajout_ok";
      echo json_encode($data);
    }

  // Si les données ne sont pas ok (vide ou mauvais format) on envoie 'data_corrupt'.
  } else {
    $data['reponse'] = "data_corrupt";
    echo json_encode($data);
  }
} else {
  $data['reponse'] = "data_corrupt";
  echo json_encode($data);
}
// Fermeture de la connexion à la DB
if ($db_connexion) {
  $db_connexion = NULL;
}
?>
