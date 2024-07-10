<?php

// ouverture de session
session_start();
// fermeture de session
session_destroy();
//header('Location: http://127.0.0.1/edsa-PHP/sessions/exo13/index.php');
header('Location: ' . $_SERVER['HTTP_REFERER']);

