<?php
//include('connexionMYSQL.php');

//connection base de données
try {
    $bdd = new PDO('mysql:host=localhost;dbname=sequenceur;charset=utf8', 'root', 'j2vdbcyc');
} catch (Exception $e) {

    die('Erreur : ' . $e->getMessage());
}
 
$seq_name = (int) $_GET['name'];
$seq_duration = mysql_real_escape_string($_GET['duration']);
 
 
$sql = 'UPDATE profile SET age='.$age.', pseudo="'.$pseudo.'" WHERE id='.$_SESSION['id']; // Ici on prend une valeur DU SERVEUR et surtout pas une valeur venant du JavaScript
$req = mysql_query($sql);
 
?>