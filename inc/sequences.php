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