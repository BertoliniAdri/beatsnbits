<?php
// on ouvre le session
if (!isset($_SESSION)) {
    session_start();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <?php include 'inc/config.php' ?>

        <!-- TITRE PAGE -->
        <title>Mes sons</title>
        
    </head>
    <body>

        <main>
            <!-- DEBUT : HEADER -->
            <?php include 'inc/header.php' ?>
            <!-- FIN : HEADER -->
            

            <!-- DEBUT : NO JS MESSAGE -->
            <noscript>
            <div class="nojs">
                <div class="nojsmessage">
                    Activez Javascript
                </div>
            </div>
            </noscript>
            <!-- FIN : NO JS MESSAGE -->


            <!-- DEBUT : VERIFCATION CONNEXION-->
            <?php
            if (isset($_SESSION['session_id']) && isset($_SESSION['id']) && isset($_SESSION['pseudo'])) {
                ?>
            
                <!-- DEBUT : VERIFCATION -OK- -->

                <!-- DEBUT : MIDDLE PAGE -->
                <div class="middlepage">

                    <!-- DEBUT : CONTENU -->
                    <div id="container" class="container">

                        <!-- DEBUT : LE CERCLE MUSICAL -->
                        <div id="cercle_container">
                            <div id="cercle">
                                <img id="img_cercle" src="img/cercle.svg" alt="Cercle"/>
                            </div>
                        </div>
                        <!-- FIN : LE CERCLE MUSICAL -->
                        
                    </div>
                    <!-- FIN : CONTENU -->
                    
                    <!-- DEBUT : OUVRIR/FERMER LA LISTE DES SONS -->
                    <div id="soundList">
                        <div id='soundlistOpen_id' class="soundListOpen">
                            <img src="img/up.png" alt="Ouvrir" title='Ouvrir'/>
                        </div>
                        <div id='soundlistClose_id' class="soundListClose">
                            <img src="img/down.png" alt="Fermer" title='Fermer'/>
                        </div>
                    </div>
                    <!-- FIN : OUVRIR/FERMER LA LISTE DES SONS -->

                    <!-- DEBUT : HEADER DE LA LISTE DES SONS -->
                    <div id="sounds-table" class="sounds-table">
                        <table>

                            <thead> <!-- En-tête du tableau -->
                                <tr>
                                    <th>Titre</th>
                                    <th>Durée</th>
                                    <th>Dernière modification</th>
                                    <th>Ecouter</th>
                                    <th>Editer</th>
                                    <th>Télécharger</th>
                                    <th>Supprimer</th>
                                </tr>
    <!--                                <tr>
                                    <td>Son 1</td>
                                    <td>02:36</td>
                                    <td>25/08/2017 à 16h25</td>
                                    <td>écouter</td>
                                    <td>modifier</td>
                                    <td>télécharger</td>
                                </tr>-->
                            </thead>
                        </table>

                    </div>
                    <!-- FIN : HEADER DE LA LISTE DES SONS -->

                    <!-- DEBUT : LISTE DES SONS -->
                    <div class="sounds-list">
                        <table>
                            <tbody> <!-- Corps du tableau -->
                                <tr>
                                    <td>Son 1 Test du titre longueur</td>
                                    <td>02:36</td>
                                    <td>25/08/2017 à 16h25</td>
                                    <td>                        
                                        <div class="sounds-tools">
                                            <img src="img/play-arrow.svg" alt="Play / Pause" title="Play / Pause"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="sounds-tools">
                                            <img src="img/edition.svg" alt="Editer" title="Editer"/>
                                        </div>
                                    </td>
                                    <td>                                        
                                        <div class="sounds-tools">
                                            <img src="img/download.svg" alt="Télécharger" title="Télécharger"/>
                                        </div>
                                    </td>
                                    <td>                                        
                                        <div class="sounds-tools">
                                            <img src="img/delete.svg" alt="Supprimer" title="Supprimer"/>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>Son 1</td>
                                    <td>02:36</td>
                                    <td>25/08/2017 à 16h25</td>
                                    <td>écouter</td>
                                    <td>modifier</td>
                                    <td>télécharger</td>
                                    <td>Supprimer</td>
                                </tr>
                                <tr>
                                    <td>Son 1</td>
                                    <td>02:36</td>
                                    <td>25/08/2017 à 16h25</td>
                                    <td>écouter</td>
                                    <td>modifier</td>
                                    <td>télécharger</td>
                                </tr>
                                <tr>
                                    <td>Son 1</td>
                                    <td>02:36</td>
                                    <td>25/08/2017 à 16h25</td>
                                    <td>écouter</td>
                                    <td>modifier</td>
                                    <td>télécharger</td>
                                </tr>
                                <tr>
                                    <td>Son 1</td>
                                    <td>02:36</td>
                                    <td>25/08/2017 à 16h25</td>
                                    <td>écouter</td>
                                    <td>modifier</td>
                                    <td>télécharger</td>
                                </tr>
                                <tr>
                                    <td>Son 1</td>
                                    <td>02:36</td>
                                    <td>25/08/2017 à 16h25</td>
                                    <td>écouter</td>
                                    <td>modifier</td>
                                    <td>télécharger</td>
                                </tr>
                                <tr>
                                    <td>Son 1</td>
                                    <td>02:36</td>
                                    <td>25/08/2017 à 16h25</td>
                                    <td>écouter</td>
                                    <td>modifier</td>
                                    <td>télécharger</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- FIN : LISTE DES SONS -->

                </div>
                <!-- FIN : MIDDLE PAGE -->
                
                <!-- FIN : VERIFCATION -OK- -->
                
                
                <!-- DEBUT : VERIFCATION -NO- -->
                <?php
            } else {

                echo '<div class="main_container">';
                echo '<div class="container_connexion">';
                echo '<h1>Vous devez être connecté';
                echo '</div></div>';
                header('location: ./login.php');
                exit;
            }
            ?>
                <!-- FIN : VERIFCATION -NO- -->
                
                <!-- FIN : VERIFCATION CONNEXION -->

                
            <!-- DEBUT : LE FOOTER -->
            <?php include 'inc/footer.php' ?>
            <!-- FIN : LE FOOTER -->


        </main>
    </body>
</html>
