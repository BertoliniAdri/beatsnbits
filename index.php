<?php
// on ouvre le session
if (!isset($_SESSION)) {
    session_start();
}
?>
<!DOCTYPE html>
<html lang="fr" class="no-js">
    <head>
        <?php include 'inc/config.php' ?>

        <!-- TITRE PAGE -->
        <title>BeatzNbitz : Make your beats easy</title>


        <!-- SCRIPTS SEQUENCEUR -->
        <script src="js/sequenceur.js" type="text/javascript"></script>
        <script src="js/control_mouse.js" type="text/javascript"></script>
        <script src="js/class_button.js" type="text/javascript"></script>
        <script src="js/class_audioCategory_menu.js" type="text/javascript"></script>
        <script src="js/dnd.js" type="text/javascript"></script>
        <script src="js/class_pointeur.js" type="text/javascript"></script>
        <script src="js/class_sound_markers.js" type="text/javascript"></script>
        <script src="js/class_saveslot.js" type="text/javascript"></script>
        <script src="js/sauvegarde_sequence.js" type="text/javascript"></script>
        <script src="js/animation.js" type="text/javascript"></script>
        <script src="js/class_cursor_ht.js" type="text/javascript"></script>


        <!-- DEBUT : NE PAS PRENDRE EN COMPTE ***************************** -->
        <!-- CSS PRELOAD -->
        <link href="css/preload/effect.css" rel="stylesheet" type="text/css"/>

        <!-- SCRIPTS PRELOAD -->
        <script src="js/preload/modernizr.custom.js" type="text/javascript"></script>
        <!-- FIN : NE PAS PRENDRE EN COMPTE ******************************* -->


        <!-- TeMpOrAiRe !!! pas toucher !!! -->
<!--        <link href="css/a_faire.css" rel="stylesheet" type="text/css"/>-->

    </head>

    <body>

        <!-- DEBUT : NO JS MESSAGE -->
        <noscript>
        <div class="nojs">
            <div class="nojsmessage">
                Activez Javascript
            </div>
        </div>
        </noscript>
        <!-- FIN : NO JS MESSAGE -->

        <!-- DEBUT : PRELOAD PAGE -->
                <div id="ip-container" class="ip-container">
                    <header class="ip-header">
                        <div class="logo-bnb">
                            <img src="img/logo.svg" alt="BeatzNbitz" title='BeatzNbitz' width="300px" height="300px"/>
        
                        </div>
                        <div class="ip-loader">
                            <svg class="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
                            <path class="ip-loader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                            <path id="ip-loader-circle" class="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                            </svg>
        
                        </div>
                    </header>
                </div>
        <!-- FIN : PRELOAD PAGE -->


        <main>

            <!-- DEBUT : HEADER (MAIN MENU, MOBILE MENU)-->
            <?php include 'inc/header.php'; ?>
            <!-- FIN : HEADER (MAIN MENU, MOBILE MENU)-->

            <!-- DEBUT : SE CONNECTER -->
            <!--            <div id='testForm' class='animate-top'>
                            <div id='connexionContent'>
                                <input class='login_inputs'
                                       type='text'
                                       name='pseudo'
                                       id='pseudo'
                                       value='demo'
                                       placeholder='pseudo'
                                       maxlength='24'
                                       required>
            
                                <input class='login_inputs'
                                       type='password'
                                       name='password'
                                       id='password'
                                       value='Demo2017'
                                       placeholder='mot de passe'
                                       maxlength='12'
                                       required>
                            </div>
                            REMETTRE LE INPUT EN BUTTON
                            <input type='button' value='connexion' onclick='login();'>
                        </div>-->
            <!-- FIN : SE CONNECTER -->


            <!-- DEBUT : MIDDLE PAGE -->
            <div class="middlepage">

                <!-- DEBUT : CONTENU -->
                <div id="container" class="container">

                    <!-- DEBUT : LES ICONS (Mes sequences, librairie, raccourci... -->
                    <div id="icons">

                        <!-- DEBUT : LES ICNS A DROITE -->
                        <div class="icons_right">

                            <!-- DEBUT : LISTE ICONS HAUT DROITE -->
                            <div>
                                <ul>
                                    <!-- /!\ A SUPPRIMER ET DECOMMENTER DANS container si bug /!\ -->
                                    <li>
                                        <div id='libraryOpen_id' class="libraryOpen">
                                            <img src="img/soundlibrary.png" alt="Librairie de samples" title='Librairie de samples'/>
                                        </div>
                                    </li>

                                    <li>
                                        <div id='mysequencesOpen_id' class="mysequencesOpen">
                                            <img src="img/list.png" alt="a completer" title='a completer'/>
                                        </div>
                                    </li>

                                    <!--                                    <li>
                                                                            <div id='optionsOpen_id' class="optionsOpen">
                                                                                <img src="img/settings.png" alt="Les options" title="Les options"/>
                                                                            </div>
                                                                        </li>-->

                                    <!--                                    <li>
                                                                            <div id='shareOpen_id' class="shareOpen">
                                                                                <img src="img/share.png" alt="Partager" title="Partager"/>
                                                                            </div>
                                                                        </li>-->
                                    <li>
                                        <div id='keyboardOpen_id' class="keyboardOpen animated bounce">
                                            <img src="img/help.png" alt="Raccourcis" title="Raccourcis"/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- FIN : LISTE ICONS HAUT DROITE -->



                            <div>
                                <!-- /!\ A SUPPRIMER ET DECOMMENTER DANS container  si bug /!\ -->
                                <div id='fullscreenOpen_id' class="fullscreenOpen">
                                    <img src="img/fullscreen.png" alt="Plein écran" title="Plein écran"/>
                                </div>
                            </div>
                        </div>
                        <!-- FIN : LES ICNS A DROITE -->
                    </div>
                    <!-- FIN : LES ICONS (Mes sequences, librairie, raccourci... -->


                    <!-- DEBUT : CLOSE (Pour fermer les divs librairie, options, etc)-->
                    <!--                    <div id="icons_close">
                                            <div class="icons_right">
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <div id='libraryClose_id' class="libraryClose">
                                                                <img src="img/close.png" alt="Fermer la librairie" title='Fermer la librairie'/>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>-->
                    <!-- FIN : CLOSE -->


                    <!-- DEBUT : LA LIBRARIE /!\ REMETTRE DANS .container si bug /!\ -->
                    <div id="library">
                        <!--                                                    <div id='libraryOpen_id' class="libraryOpen">
                                                        <img src="img/soundlibrary.png" alt="Librairie de samples" title='Librairie de samples'/>
                                                    </div>-->

                        <div id="library_content" class="libraryOpened fade-in">

                            <div id='libraryClose_id' class="libraryClose">
                                <img src="img/close.png" alt="Fermer la librairie" title='Fermer la librairie'/>
                            </div>

                            <!-- DEBUT : LA LIBRARIE (CONTENU) -->
                            <div class="libraryMain">
                                <div class="libraryContent">
                                    <h2>LIBRAIRIE DE SAMPLE</h2>
                                </div>
                                <!--!!!!!!!!!!!ADRI A MODIFIER (remplacé class par id et sup. contenu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
                                <div id="libraryCategories">
                                    <!-- INSERER DYNAMIQUEMENT -->
                                </div>
                                <!--!!!!!!!!!!!!!!!!!!!ADRI!!!!!!!!!!!!!!!!!!!!!-->

                                <div id="librarySamples_1" class="librarySamples">
                                    <!-- INSERER DYNAMIQUEMENT -->
                                </div>
                            </div>
                            <!-- FIN : LA LIBRARIE (CONTENU) -->
                        </div>
                    </div>
                    <!-- FIN : LA LIBRARIE -->


                    <!-- DEBUT : MES SEQUENCES-->
                    <div id="mysequences">


                        <div id="mysequences_content" class="mysequencesOpened fade-in">

                            <div id='mysequencesClose_id' class="mysequencesClose">
                                <img src="img/close.png" alt="Fermer la librairie" title='Fermer la librairie'/>
                            </div>

                            <!-- DEBUT : MES SEQUENCES (CONTENU) -->
                            <div class="libraryMain">
                                <div class="mysequencesContent">
                                    <h2>MES SEQUENCES</h2>
                                </div>

                                <!-- DEBUT : UTILISATEUR CONNECTE ?-->
                                <?php
                                if (isset($_SESSION['id']) && isset($_SESSION['pseudo'])) {
                                    ?>
                                    <!-- DEBUT : UTILISATEUR CONNECTE ? = OUI -->
                                    <div class="mysequences">
                                        <!-- DEBUT : HEADER DE LA LISTE DES SONS -->

                                        <!--                                        <div id="header_mysequences">
                                                                                </div>-->


                                        <div id="overflow_sequences">

                                            <!-- INTEGRER DYNAMIQUEMENT -->

                                        </div>                                   
                                        <!-- FIN : UTILISATEUR CONNECTE ? = OUI -->
                                    </div>
                                    <!-- DEBUT : UTILISATEUR CONNECTE ? = NON -->
                                    <?php
                                } else {
                                    echo '<div class="container_connexion">';
                                    echo '<h1>Vous devez être connecté';
                                    echo '</div>';
                                }
                                ?>
                                <!-- FIN : UTILISATEUR CONNECTE ? = NON-->

                                <!-- FIN : UTILISATEUR CONNECTE ? -->


                            </div>
                            <!-- FIN : MES SEQUENCES (CONTENU) -->
                        </div>
                    </div>
                    <!-- FIN : MES SEQUENCES -->


                    <!-- DEBUT : LES OPTIONS -->
                    <div id="options">
                        <!--                        <div id='optionsOpen_id' class="optionsOpen">
                                                    <img src="img/settings.png" alt="Les options" title="Les options"/>
                                                </div>-->
                        <div id="options_content" class="optionsOpened fade-in">
                            <div id='optionsClose_id' class="optionsClose">
                                <img src="img/close.png" alt="Fermer les options" title="Fermer les options"/>

                            </div>
                        </div>
                    </div>
                    <!-- FIN : LES OPTIONS -->


                    <!-- DEBUT : SHARE -->
                    <div id="share">

                        <div id="share_content" class="shareOpened fade-in">
                            <div id='shareClose_id' class="shareClose">
                                <img src="img/close.png" alt="Fermer" title="Fermer"/>

                            </div>
                        </div>
                    </div>
                    <!-- FIN : SHARE -->


                    <!-- DEBUT : KEYBOARDS -->
                    <div id="keyboard">

                        <div id="keyboard_content" class="keyboardOpened fade-in">
                            <div id='keyboardClose_id' class="keyboardClose">
                                <img src="img/close.png" alt="Fermer" title="Fermer"/>
                            </div>

                            <div class="libraryMain">

                                <div id="raccourcis">
                                    <h2>LES RACCOURCIS</h2>
                                    <p>JOUER LES SAMPLES <span class="span_key">W</span> <span class="span_key">X</span> <span class="span_key">C</span> <span class="span_key">V</span> <span class="span_key">B</span></p>
                                    <p>PlAY / PAUSE <span class="span_key">espace</span></p>
                                    <p>TOUT EFFACER <span class="span_key">backspace</span></p>

                                    <p>EFFACER LE DERNIER SAMPLE <span class="span_key">0</span></p>
                                    <p>ACTIVER / DÉSACTIVER LE METRONOME <span class="span_key">7</span></p>
                                    <p>ACTIVER / DÉSACTIVER LA SYNCHRONISATION <span class="span_key">8</span></p>
                                    <p>RÉDUIRE LE NOMBRE DE MESURES<span class="span_key">1</span></p>
                                    <p>AUGMENTER LE NOMBRE DE MESURES<span class="span_key">2</span></p>
                                    <p>RÉDUIRE LE BPM <span class="span_key">4</span></p>
                                    <p>AUGMENTER LE BPM  <span class="span_key">3</span></p><!--Mais on va surement inverser les boutons-->

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- FIN : KEYBOARDS -->



                    <!-- DEBUT : FULL SCREEN (mode plein écran) -->
                    <div id="fullscreen">
                        <!--                        <div id='fullscreenOpen_id' class="fullscreenOpen">
                                                    <img src="img/fullscreen.png" alt="Partager" title="Partager"/>
                                                </div>-->

                        <!-- DEBUT : ANIMATION RADO -->
                        <!-- !!! A REMETTRE DANS "fullscreen" SI BUG !!! -->
                        <!-- ZONE D'ANIMATION GAUCHE -->
                        <div id = "zone_gauche">
                            <!-- ZONE D'ANIMATION GAUCHE HAUT -->
                            <div id = "zone1" class ="zone">

                                <img id="forme_triangle1" class ="forme" src ="img/triangle.svg"  alt ="forme_triangle1" title = "triangle" />
                            </div>
                            <div id = "zone2" class ="zone">
                                <img id="forme_square" class ="forme" src ="img/square_circle.svg"  alt ="forme_square1" title = "square" />
                            </div>
                            <div id = "zone3" class ="zone">
                                <img id="forme_losange" class ="forme" src ="img/losange.svg"  alt ="forme_losange" title = "losange" />
                            </div>
                            <!-- ZONE D'ANIMATION GAUCHE BAS -->
                            <div id = "zone4" class ="zone">
                                <img id="forme_cercle" class ="forme" src ="img/circle_x.svg"  alt ="forme_cercle_x" title = "cercle" />
                            </div>
                            <div id = "zone5" class ="zone">
                                <img id="forme_x_carre" class ="forme" src ="img/x_square.svg"  alt ="forme_x_carre" title = "carre_x" />
                            </div>
                        </div>
                        <!-- FIN ZONE D'ANIMATION GAUCHE -->


                        <!-- ZONE D'ANIMATION DROITE-->
                        <div id = "zone_droite">
                            <div id = "zone6" class ="zone">
                                <img id="forme_x_carre2" class ="forme" src ="img/x_square.svg"  alt ="forme_x_carre" title = "carre_x" />

                            </div>
                            <div id = "zone7" class ="zone">
                                <img id="forme_cercle2" class ="forme" src ="img/circle_x.svg"  alt ="forme_cercle_x2" title = "cercle" />
                            </div>
                            <div id = "zone8" class ="zone">
                                <img id="forme_losange2" class ="forme" src ="img/losange.svg"  alt ="forme_losange" title = "losange" />
                            </div>
                            <!-- ZONE D'ANIMATION GAUCHE BAS -->
                            <div id = "zone9" class ="zone">
                                <img id="forme_square2" class ="forme" src ="img/square_circle.svg"  alt ="forme_square2" title = "square" />

                            </div>
                            <div id = "zone10" class ="zone">
                                <img id="forme_triangle2" class ="forme" src ="img/triangle.svg"  alt ="forme_triangle2" title = "triangle" />
                            </div>
                        </div>
                        <!-- FIN ZONE D'ANIMATION DROITE -->
                        <!-- FIN : ANIMATION RADO -->

                        <div id="fullscreen_content" class="fullscreenOpened fade-in">
                            <div id='fullscreenClose_id' class="fullscreenClose">
                                <img src="img/close.png" alt="Fermer" title="Fermer"/>

                            </div>
                        </div>
                    </div>
                    <!-- FIN : FULL SCREEN (mode plein écran) -->


                    <!-- DEBUT : LE CERCLE MUSICAL -->
                    <div id="cercle_container" class="fade-in">

                        <!-- LE CONTOUR -->
                        <div id="cercle">
                            <img id="img_cercle" src="img/cercle.svg" alt="Cercle" width="100%" height="100%"/>
                        </div>

                        <!-- L'INTERIEUR -->
                        <div id="cercle_background">
                            <div id="cercle_logo">
                                <img src="img/logo_beatznbitz_textonly_red.png" alt="Logo BeatzNbitz" title='BeatzNbitz'/>
                                <h3 id="bpm"></h3>
                            </div>
                        </div>


                    </div>
                    <!-- FIN : LE CERCLE MUSICAL -->


                </div>
                <!-- FIN : CONTENU -->


                <!-- DEBUT : OUVRIR/FERMER LES CONTROLS -->
                <div id="openControls">
                    <div id='openControls_id' class="controlsOpen">
                        <img src="img/up.png" alt="Ouvrir" title='Ouvrir'/>
                    </div>
                    <div id='closeControls_id' class="controlsClose">
                        <img src="img/down.png" alt="Fermer" title='Fermer'/>
                    </div>
                </div>
                <!-- FIN : OUVRIR/FERMER LES CONTROLS -->


                <!-- DEBUT : LES OUTILS UTILISATEURS -->
                <div id="user_controls" class="user_controls">

                    <!-- DEBUT : REGLAGES: métronome, bpm -->
                    <div id="settings">
                        <div id='metronome'>
                            <!--                            <img src="img/metronome_color.png" alt=""/>-->
                            <div id='metronome_1'></div>
                            <div id='metronome_2'></div>
                        </div>
                        <div id='sync'>
                            SYNC
                        </div>
                        <div id='time'>
                            06.93 / 11:21
                        </div>
                        <div id='mode'>
                            Mode :
                        </div>
                        <div id='affiche_mode'>
                            Loop
                        </div>
                        <div id='click'>
                            Click :
                        </div>
                        <div id='click_state'>
                            OFF
                        </div>

                    </div>
                    <!-- FIN : REGLAGES: métronome, bpm -->


                    <!-- DEBUT : LE LAUNCHPAD -->
                    <div id="launchpad">
                        <!-- INSERER DYNAMIQUEMENT -->
                    </div>
                    <!-- FIN : LE LAUNCHPAD -->



                    <!-- DEBUT : LES OPTIONS: Play, pause, reset... -->
                    <div id="tools">
                        <div id ="undo" class="tools">
                            <img src="img/undo.svg" alt="Revenir en arrière" title='Revenir en arrière'/>

                        </div>
                        <div id ="play_pause" class="tools">
                            <img src="img/play-arrow.svg" alt="Play / Pause" title="Play / Pause"/>

                        </div>
                        <div id ="clear" class="tools">
                            <img src="img/delete.svg" alt="Remettre à zéro" title="Remettre à zéro"/>

                        </div>

                        <?php if (isset($_SESSION['id']) && isset($_SESSION['pseudo'])) { ?>
                            <!--
                                                                                    <div id ="rec" class="tools">
                                                                                        <img src="img/record.svg" alt="Enregistrer" title="Enregistrer"/>
                                                        
                                                                                    </div>
                                                        
                                                                                    <div class="tools">
                                                                                        <img src="img/download.svg" alt="Télécharger" title="Télécharger"/>
                                                        
                                                                                    </div>-->
                        <?php } ?>
                    </div>
                    <!-- FIN : LES OPTIONS: Play, pause, reset... -->

                </div>
                <!-- FIN : LES OUTILS UTILISATEURS -->

            </div>
        </div>
        <!-- FIN : MAINPAGE -->


        <!-- DEBUT : LE FOOTER -->
        <?php include 'inc/footer.php'; ?>
        <!-- FIN : LE FOOTER -->

    </main>


    <!-- DEBUT : SCRIPTS PRELOAD -->
    <script src="js/preload/classie.js"></script>
    <script src="js/preload/pathLoader.js"></script>
    <script src="js/preload/main.js"></script>
    <!-- FIN : SCRIPTS PRELOAD -->
</body>
</html>
