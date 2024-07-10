
<?php

$seq_user_id = (int) $_GET['id'];

//connection base de données
include('inc_connexion.php');
//try {
//    $bdd = new PDO('mysql:host=localhost;dbname=sequenceur;charset=utf8', 'root', 'j2vdbcyc');
//} catch (Exception $e) {
//
//    die('Erreur : ' . $e->getMessage());
//}




// Connexion au serveur local
$connexion = mysqli_connect('localhost', 'root', 'j2vdbcyc', 'sequenceur');
if (mysqli_connect_errno()) {
echo "Echec de connection MySQL: " . mysqli_connect_error();
}
// Préparation d'une requête de selection des noms des stagiaires
$requete = 'SELECT * FROM sequences WHERE seq_user_id = ' . $seq_user_id;
// Envoi de la requête et stockage des résultats dans une variable
$resultats = mysqli_query($connexion, $requete);
// On check la réponse afin d'afficher les réponses à l'utilisateur
If ($resultats) {
while ($ligne = mysqli_fetch_assoc($resultats)) {
echo $ligne['seq_name'].'<br>'; }
} else {
echo 'Echec de la demande'; }
// Nettoyage de la mémoire
mysqli_free_result($resultats);
// Fermeture de notre connexion
mysqli_close($connexion);
?>