<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $name = (isset($_POST['userName'])) ? $_POST['userName'] : 'anonyme';
        $computedString = "Bonjour, " . $name;
        $array = ['userName' => $name, 'computedString' => $computedString];
        echo json_encode($array);
        ?>
    </body>
</html>
