<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>PDO</title>
        <link href="css/form.css" rel="stylesheet" type="text/css"/>
        <link href="css/menu.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <h1>élèves</h1>

        <?php
        $menu = 1;
        include 'menu.php';
        ?>
        <main>
            <?php
            $active = '';
            //ouverture de la connexion
            include 'inc_connexion.php';

            if (isset($_GET['order'])) {
                $order = $_GET['order'];
                if (isset($_COOKIE['active'])) {
                    $active = $_COOKIE['active'];
                }
                if ($active == $order) {
                    $order .= ' DESC';
                    $active = '';
                } else {
                    $active = $order;
                }
                // 100 jours exprimés en secondes
                $dix_minutes = 60 * 10;
                // on récupère le timestamp actuel et on ajoute la durée
                $duree = time() + $dix_minutes;
                // création du cookie
                setcookie('active', $active, $duree);
            } else {
                $order = 'elev_nom';
            }
//            echo $order;
            //on récupère les élèves
            //préparation de la requète
            $requete = "SELECT * FROM eleves ORDER BY $order";
            //envoi de la requète au serveur et récupération des résultats
            $resultat = $connexion_DB->query($requete);
            //fetchAll est utile tant qu'il y a peu de résultats
            //il récupère tout d'un coup
            //fetch récupère les résultats 1 par 1
            $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);

            // fermeture de la connexion
            if ($connexion_DB) {
                //on détruit l'objet $connexion_DB
                $connexion_DB = NULL;
            }
            $image = '';

            echo '<table><thead><tr>
    <th><a href="indexOld.php?order=elev_prenom">Prénom</a></th>
    <th><a href="indexOld.php?order=elev_nom">Nom</a></th>
    <th> </th>
    </tr></thead><tbody>';


            //on affiche le résultat
            foreach ($donnees as $value) {
                echo '<form name="id" action="fiche.php" method="post" enctype="multipart/form-data">';

                echo '<tr><td>' . $value['elev_prenom'] . '</td><td>' . $value['elev_nom'] . '</td><td>'
                . '<input type="hidden" name="eleveid" value="' . $value['elev_id'] . '">';
                echo '<input id="send_button" type="submit" name="send_button" value="Consulter la Fiche">';
                echo '</form>';
            }
            echo '<tbody></table>';
            ?>



        </main>
    </body>
</html>
