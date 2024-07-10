<?php

//connexion à la DB
//préparation des informations nécessaires
  // Les constantes peuvent être à modifier en cas de changement migration du site
  define("DB_DSN", "mysql:host=localhost;dbname=beatznbitz");//Au taf: define("DB_DSN", "mysql:host=localhost;dbname=users");
  define("DB_USER", "root");
  define("DB_PASS", "root");// "root" sur mac, ""(vide) sur pc.