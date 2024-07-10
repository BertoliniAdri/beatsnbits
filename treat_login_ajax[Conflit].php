<?php

// on ouvre le session
session_start();

// on récupère l'id de la session
$session_id = session_id();

$user_iden = $_POST['user'];
$user_pass = sha1($_POST['pass']);

fwrite($fp, "userpass sha1:" . $user_pass . "\n");

$user_iden = htmlentities($user_iden);
$user_pass = '13ddf4b9149e7c3f20586798047fc1fdaedee77d'; //htmlentities($user_pass);

$user_iden = strtolower($user_iden);



// const REG_IDEN = '/.{1,24}/';
// const REG_PASS = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/';


// CONNEXION A LA DB
// On définie les constantes pour se connecter à la DB
// Les constantes peuvent être à modifier en cas de changement de migrati
define("DB_DSN", "mysql:host=localhost;dbname=users");
define("DB_USER", "root");
define("DB_PASS", "root"); // "root" sur mac, ""(vide) sur pc.


try {
    $db_connexion = new PDO(DB_DSN, DB_USER, DB_PASS); // On créer la var avec la connexion
} catch (Exception $erreur) {
    echo "Erreur: " . $erreur->getMessage();
    exit();
}

// Vérification des identifiants
$sql = "SELECT * FROM users WHERE user_pseudo = 'demo'";

// La requête préparée (avec ->prepare et ->execute) est pertinante si on doit par exemple
// exécuter la même requête plusieurs fois (ex: insertion multiple avec paramètres différents).
// Sinon une simple requète classique (->query) suffit.
// $req = $db_connexion->prepare($sql);
// $req->execute();

$req = $db_connexion->query($sql);

fwrite($fp, $user_iden);
fwrite($fp, "\n userpass:" . $user_pass . "\n");

fwrite($fp, "requete sql:" . $sql);

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
        echo $_SESSION['session_id'] = $session_id;
        echo $_SESSION['pseudo'] = $user_iden;
        echo $_SESSION['id'] = $id;

        if ($rights == 1) {
            echo $_SESSION['admin'] = $user_iden;
        }

        $retour['reponse'] = "Vous etes connecte !";
    } else {
        $retour['reponse'] = "Vous n'avez pas confirmer votre compte";
    }
}

echo json_encode($retour);
echo "\n" . $statut;
?>
