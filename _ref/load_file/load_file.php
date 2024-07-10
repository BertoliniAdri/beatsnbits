<?php

$dir = 'sound/';
$allowedExts = array("mp3");
$temp = explode(".", $_FILES["file"]["name"]);
$extension = end($temp);
if (($_FILES["file"]["type"] == "audio/mpeg") && ($_FILES["file"]["size"] < 10000000) && in_array($extension, $allowedExts)) {
    if ($_FILES["file"]["error"] > 0) {
        echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
    } else {

        $fileName = $temp[0] . "." . $temp[1];
        $temp[0] = rand(0, 3000); //Set to random number
        $fileName;

        if (file_exists($dir . $_FILES["file"]["name"])) {
            echo $_FILES["file"]["name"] . " already exists. ";
        } else {
//            move_uploaded_file($_FILES["file"]["tmp_name"], $dir . $_FILES["file"]["name"]);$temp = explode(".", $_FILES["file"]["name"]);
            $newfilename = round(microtime(true)) . '.' . end($temp);
            move_uploaded_file($_FILES["file"]["tmp_name"], $dir . $newfilename);
            echo "Stored in: " . $dir . $_FILES["file"]["name"];
        }
    }
} else {
    echo "Invalid file";
}

