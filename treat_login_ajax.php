<?php
// on ouvre le session
session_start();

// on récupère l'id de la session
  $session_id = session_id();
  $fp = fopen("debug.txt","w+");
  $user_iden = $_POST['user'];
  fwrite($fp, "user_iden: ".$user_iden."\n");
  fwrite($fp, "user_pass: ".$_POST['pass']."\n");
  $user_pass = sha1($_POST['pass']);
  fwrite($fp, "user_pass sha1: ".$user_pass."\n");

  $user_iden = htmlentities($user_iden);
  fwrite($fp, "user_pass htmlentities: ".$user_pass."\n");
  // $user_pass = '13ddf4b9149e7c3f20586798047fc1fdaedee77d';//htmlentities($user_pass);

  $user_iden = strtolower($user_iden);
  fwrite($fp, "user_iden strtolower: ".$user_pass."\n");


  // const REG_IDEN = '/.{1,24}/';
  // const REG_PASS = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/';

  // CONNEXION A LA DB
  // On définie les constantes pour se connecter à la DB
  // Les constantes peuvent être à modifier en cas de changement de migrati
  define("DB_DSN", "mysql:host=localhost;dbname=beatznbitz");//Au taf: define("DB_DSN", "mysql:host=localhost;dbname=users");
  define("DB_USER", "root");
  define("DB_PASS", "root");// "root" sur mac, ""(vide) sur pc.


  try {
      $db_connexion = new PDO(DB_DSN, DB_USER, DB_PASS); // On crée la var avec la connexion
  } catch (Exception $erreur) {
      echo "Erreur: " . $erreur->getMessage();
      exit();
  }
  fwrite($fp, "user_iden avant req sql: ".$user_iden."\n");
  // Vérification des identifiants
  $sql = "SELECT * FROM users WHERE user_pseudo = '".$user_iden."' AND user_pass = '".$user_pass."'";

  // La requête préparée (avec ->prepare et ->execute) est pertinante si on doit par exemple
  // exécuter la même requête plusieurs fois (ex: insertion multiple avec paramètres différents).
  // Sinon une simple requète classique (->query) suffit.
  // $req = $db_connexion->prepare($sql);
  // $req->execute();
  fwrite($fp, "requete sql: ".$sql);
  $req = $db_connexion->query($sql);

  fwrite($fp, "\nuser_iden après req sql: ".$user_iden);
  fwrite($fp, "\nuserpass après req sql: ".$user_pass."\n");

  $resultat = $req->fetch();

  // Fermeture de la connexion à la DB
  if ($db_connexion) {
      $db_connexion = NULL;
  }

  $statut = $resultat['user_statut'];
  $id = $resultat['user_id'];
  $rights = $resultat['user_rights'];

  if (!$resultat) {
      $retour['reponse'] = "Mauvais identifiant ou mot de passe !";
  } else {

      if ($statut == 1) {
          $_SESSION['session_id'] = $session_id;
          $_SESSION['pseudo'] = $user_iden;
          $_SESSION['id'] = $id;

          if ($rights == 1) {
              $_SESSION['admin'] = $user_iden;
          }

          $retour['reponse'] = "Vous etes connecte !";
          $retour['connexion'] = "ok";
      } else {
          $retour['reponse'] = "Vous n'avez pas confirmer votre compte";
      }
  }

fclose($fp);
echo json_encode($retour);
?>
