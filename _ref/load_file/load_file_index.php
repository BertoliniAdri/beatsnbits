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
        <form enctype="multipart/form-data" action="load_file.php" method="post">
  <!-- MAX_FILE_SIZE doit précéder le champ input de type file -->
  <input type="hidden" name="MAX_FILE_SIZE" value="10000000" />
  <!-- Le nom de l'élément input détermine le nom dans le tableau $_FILES -->
  Envoyez ce fichier : <input name="file" type="file" />
    <label for="city">Catégorie:</label>
    <select name="city" id="city">
        <option value="sydney">Clap</option>
        <option value="melbourne">Kick</option>
        <option value="cromwell">Bass</option>
    </select>
<br>
  <input type="submit" value="Envoyer le fichier" />
</form>
    </body>
</html>
