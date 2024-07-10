//sauvegarde_sequence.js

//Gère tout ce qui touche aux sauvegardes de séquences dans la BD
//communique avec: sauvegarde_sequence.php

//var button;//a voir...
var save_slots = [];//liste d'obj SaveSlot
var parent;


//init
window.addEventListener('load', function ()
{
    parent = document.getElementById('overflow_sequences');
    display_sequence();
});


//pour sauvegarder une sequence
function save_sequence(seq_name)
{
    //si pas de seq_name -> on quitte
    if (typeof seq_name === "undefined") {
        return;
    }
    //si il n'y a rien à enregistrer -> quitter
    if (key_time.length === 0)
    {
        return;
    }
    console.log('save');

//on prépare les données à sauvegarder
    let seq_data = prepare_sequence_data();

    let seq_duration = duration;

    let action = 'save';

    let dd = "seq_data=" + seq_data + " & seq_duration=" + seq_duration + " & seq_name=" + seq_name + "& action=" + action;


    //on envoie les données à la page php

    $.ajax({
        //on ecrit en json (javascript object)
        //on envoie des données au serveur distant (à un fichier PHP nomé sauvegarde_sequence.php)
        url: "sauvegarde_sequence.php",
        //on utilise la méthode POST (pas GET qui écrit les variables dans l'url)
        type: "POST",
        //données transmises au PHP
        data: dd,
        //on précise que l'on communique en json
        dataType: "json",
        //si php répond que ça c'est bien passé on récupère sa réponse dans un array
        success: function (data)
        {

            display_sequence();
            if (data[0] === 'ok')
                message_display('green', 'sauvegarde réussie');
            else
                message_display('red', data[0]);
        },
        //en cas d'erreur:
        error: function (e)
        {
            message_display('red', 'une erreur est survenue');
        }
    });
}


//pour charger une sequence
function load_sequence(seq_id)
{
    //si pas de seq_id -> on quitte
    if (typeof seq_id === "undefined") {
        return;
    }


    //on efface
    clearAllSounds();

    let id = seq_id;
    let action = 'load';

    let dd = 'seq_id=' + id + "&action=" + action;

//on appelle la méthode ajax de $ (de jquerry)
    $.ajax({
        //on ecrit en json (javascript object)
        //on envoie des données au serveur distant (à un fichier PHP nomé sauvegarde_sequence.php)
        url: "sauvegarde_sequence.php",
        //on utilise la méthode POST (pas GET qui écrit les variables dans l'url)
        type: "POST",
        //données transmises au PHP
        data: dd,
        //on précise que l'on communique en json
        dataType: "json",
        //si php répond que ça c'est bien passé on récupère sa réponse dans un array
        success: function (data) {


            duration = data[0].seq_duration;

            //on remplit key_time avec les données récupérées
            key_time = [];
            //on découpe les données aux ';' pour les ranger dans un array
            var tempData = data[0].seq_data.split(';');
            var tempKeys = Object.keys(key_sounds);


            //on attribue les sons aux touches
            var tempArray = tempData[0].split(',');
            for (let t = 0; t < tempKeys.length; t++)
            {
                key_sounds[tempKeys[t]] = tempArray[t];
                console.log('key_sounds[tempKeys[t]]:' + key_sounds[tempKeys[t]]);
            }
            //on efface les infos des touches
            tempData.splice(0, 1);

            //pour chaque keyboard keys utilisée pour créer des sons
            for (var h = 0; h < tempKeys.length; h++) {
                //si il y a des données...
                if (tempData[h] != '')
                {
                    //on découpe les données aux ',' pour les ranger dans un array provisoire
                    tempArray = tempData[h].split(',');
                    //On ajoute les éléments de cet array à key_time
                    for (var i = 0; i < tempArray.length; i++)
                    {
                        //si il y a des données...
                        if (tempArray[i] != '')
                        {
                            //on ajoute les infos
                            key_time.push([tempArray[i], tempKeys[h], create_sound_marker(tempKeys[h], percentage_to_time(tempArray[i]))]);
                        }
                    }
                }
            }
            display_bpm();
            message_display('green', 'séquence chargée');
        },
        //en cas d'erreur:
        error: function (e) {
            alert("erreur: " + e);
        }
    });
}


//pour afficher une sequence
function display_sequence()
{
    console.log('display...');

    //si pas de parent on quitte
    parent = document.getElementById('overflow_sequences');
    if (!parent)
    {
        console.log('sauvegarde_sequence: pas de parent...');
        return;
    }
    console.log('display...');

//    if (parent !== null)
    if (parent)
    {
        let action = 'display';

        let dd = 'action=' + action;

//on appelle la méthode ajax de $ (de jquerry)
        $.ajax({
            //on ecrit en json (javascript object)
            //on envoie des données au serveur distant (à un fichier PHP nomé sauvegarde_sequence.php)
            url: "sauvegarde_sequence.php",
            //on utilise la méthode POST (pas GET qui écrit les variables dans l'url)
            type: "POST",
            //données transmises au PHP
            data: dd,
            //on précise que l'on communique en json
            dataType: "json",
            //si php répond que ça c'est bien passé on récupère sa réponse dans un array
            success: function (data) {
                console.log('display success');

                //on efface tout
                parent.innerHTML = '';

                //bouton pour nouvelle sauvegarde
                save_slots.push(new SaveSlot('overflow_sequences', '', '', '', '', true));
                for (var i = 0, len = data.length; i < len; i++)
                {
                    save_slots.push(new SaveSlot('overflow_sequences', data[i].seq_id, data[i].seq_name, data[i].seq_duration, data[i].seq_timestamp));

                }

                var message = "Display Finished";
//                console.log(data);
//            $("#status").html(message);

            },
            //en cas d'erreur:
            error: function (e) {
                alert("erreur: " + e);
            }
        });
    }
}


//Pour effacer une séquence
function delete_sequence(seq_id)
{
    console.log('saveslot del call ok');
    //si pas de seq_id -> on quitte
    if (typeof seq_id === "undefined") {
        return;
    }

//    let seq_id = seq_id;
    let action = 'delete';

    let dd = 'seq_id=' + seq_id + "& action=" + action;

//on appelle la méthode ajax de $ (de jquerry)
    $.ajax({
        //on ecrit en json (javascript object)
        //on envoie des données au serveur distant (à un fichier PHP nomé sauvegarde_sequence.php)
        url: "sauvegarde_sequence.php",
        //on utilise la méthode POST (pas GET qui écrit les variables dans l'url)
        type: "POST",
        //données transmises au PHP
        data: dd,
        //on précise que l'on communique en json
        dataType: "json",
        //si php répond que ça c'est bien passé on récupère sa réponse dans un array
        success: function (data) {

            message_display('green', 'sauvegarde supprimée');
        },
        //en cas d'erreur:
        error: function (e) {
//            alert("erreur: " + e);
            message_display('red', 'une erreur est survenue');
        }
    });
}


//update un enregistrement de sequence dans la db
function update_sequence(seq_id)
{
    //si pas de seq_id -> on quitte
    if (typeof seq_id === "undefined")
    {
        return;
    }
    //si il n'y a rien à enregistrer -> quitter
    if (key_time.length === 0)
    {
        return;
    }

//    let seq_id = seq_id;//id de la sequence à updater
    let action = 'update';//instruction pour le php

//on prépare les données à sauvegarder
    let seq_data = prepare_sequence_data();
    let seq_duration = duration;


    let dd = 'seq_id=' + seq_id + "& seq_data=" + seq_data + " & seq_duration=" + seq_duration + "& action=" + action;


//on appelle la méthode ajax de $ (de jquerry)
    $.ajax({
        //on ecrit en json (javascript object)
        //on envoie des données au serveur distant (à un fichier PHP nomé sauvegarde_sequence.php)
        url: "sauvegarde_sequence.php",
        //on utilise la méthode POST (pas GET qui écrit les variables dans l'url)
        type: "POST",
        //données transmises au PHP
        data: dd,
        //on précise que l'on communique en json
        dataType: "json",
        //si php répond que ça c'est bien passé on récupère sa réponse dans un array
        success: function (data) {

            console.log(data[0]);
            if (data[0] === 'ok')
                message_display('green', 'sauvegarde réussie');
            else
                message_display('red', data[0]);

        },
        //en cas d'erreur:
        error: function (e) {
            message_display('red', 'une erreur est survenue');
        }
    });
}

//renvoie les données de la boucles concaténées
function prepare_sequence_data()
{
    //on concatène les données de la boucle
//on trie l'array par lettres
    var seq_data = '';//important !!! ne pas toucher (pour concaténer la première fois, sinon erreur)
    var j = 0;
    var k = 1;

    //on prend les sons attribués aux touchesfor (i in key_sounds)
    var i = 0;
    for (t in key_sounds)
    {
        if (i === 0)
        {
            seq_data += key_sounds[t];
        } else
        {
            seq_data += ',' + key_sounds[t];
        }
        i++
    }
    seq_data += ';';

    //on prend les données et on les range par touches
//    for (var key in Object.keys(key_sounds)) {
    for (var h = 0; h < Object.keys(key_sounds).length; h++) {
        for (var i = 0; i < key_time.length; i++)
        {
            if (key_time[i][1] == Object.keys(key_sounds)[h] && j != 0)
            {
                seq_data += ',' + key_time[i][0];
            } else if (key_time[i][1] == Object.keys(key_sounds)[h] && j === 0)
            {
//                console.log('key_time[' + i + '][0]: ' + key_time[i][0]);
                seq_data += key_time[i][0];
                j++;
            }
        }
        if (k < Object.keys(key_sounds).length)
        {
            seq_data += ';';
        }
        j = 0;
        k++;
    }
    return seq_data;
}